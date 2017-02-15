#!/exlibris/aleph/a22_1/product/bin/perl
use DBI;
use strict;
use warnings;
use utf8;
binmode(STDOUT, ":utf8");
binmode(STDIN, ":utf8");
$ENV{NLS_LANG} = 'AMERICAN_AMERICA.AL32UTF8';
local $/=undef;

#SET THEESE VARIABLES FOR CONNECTION TO ORACLE
our ( $bib_base, $bib_base_password, $sid, $tablespace4tables, $acc_indexes2suggest, $subfields2remove ); 
my $config_file = '/exlibris/aleph/matyas/autocomplete/autocomplete.conf';
require $config_file;
#####

print "START - ".localtime(time)."\n";
my $dbh = DBI->connect($sid, $bib_base,$bib_base_password, {AutoCommit => 1} ) ||  die "ERROR couldn't connect to database with ".$bib_base."\n";
print "Dropping table opac_autocomplete2...\n";
my $drop_tab =  $dbh->prepare("drop table opac_autocomplete2");
$drop_tab->execute || die "ERROR: ".$DBI::errstr;
print "Creating empty table opac_autocomplete2...\n";
my $create_tab =  $dbh->prepare("CREATE TABLE opac_autocomplete2 (suggestion varchar2(2000)) TABLESPACE ".$tablespace4tables);
$create_tab->execute || die "ERROR: ".$DBI::errstr;

$acc_indexes2suggest =~ s/,/\',\'/g;
$acc_indexes2suggest =~ s/^/\'/;
$acc_indexes2suggest =~ s/$/\'/;
print "Inserting headings from indexes: ".$acc_indexes2suggest."\n";
my $insert_rows = $dbh->prepare("INSERT INTO opac_autocomplete2 select trim( regexp_replace( regexp_replace(z01_display_text,'\\\$\\\$[$subfields2remove][^\\\$]+',''), '\\\$\\\$[a-z0-9]', ' ') ) from z01 where substr(z01_rec_key,1,3) in ($acc_indexes2suggest)");
$insert_rows->execute || die "ERROR: ".$DBI::errstr;
print "Cutting words at the after 80th char...\n";
my $cut_length = $dbh->prepare("UPDATE opac_autocomplete2 set suggestion = substr(suggestion,1,instr(suggestion,' ',80)-1) where length(suggestion)>80");
$cut_length->execute || die "ERROR: ".$DBI::errstr;
print "Creating b-tree index...\n";
my $create_ind = $dbh->prepare("CREATE INDEX sug_id1 on opac_autocomplete2 ( convert(upper(suggestion),'US7ASCII') )");
$create_ind->execute || die "Simple b-tree index cannot be created - ERROR: ".$DBI::errstr;

print "Creating ctxcat index...\n";
my $create_indctx = $dbh->prepare("CREATE INDEX sug_id2 on opac_autocomplete2 ( suggestion)  INDEXTYPE IS ctxsys.ctxcat parameters ( 'LEXER autocom_lex' )");
$create_indctx->execute || die "CtxCat index cannot be created - ERROR: ".$DBI::errstr."\nIs Oracle text installed? More in the file oracle_text.howto";
print "\n Oracle table+index with actual data created.\n";
print "END - ".localtime(time)."\n";

