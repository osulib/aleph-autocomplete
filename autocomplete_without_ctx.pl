#!/exlibris/aleph/a22_1/product/bin/perl
use DBI;
use strict;
use warnings;
use utf8;
use POSIX qw/strftime/;
binmode(STDOUT, ":utf8");
binmode(STDIN, ":utf8");
$ENV{NLS_LANG} = 'AMERICAN_AMERICA.AL32UTF8';
local $/=undef;
my $tajmstemp = strftime "%Y%m%d-%H:%M:%S", localtime;
use Data::Dumper;
use Cwd;


#SET THIs PATH TO CONFIG FILE
my $config_file = '/exlibris/aleph/matyas/autocomplete/autocomplete.conf';
######

our ( $bib_base, $bib_base_password, $sid, $admin_mail, $alephe_scratch );
require $config_file;

my $sugfile = $alephe_scratch.'/autocomplete.tmp';
my $logfile = $alephe_scratch.'/autocomplete.log';
#####


open FILE, $sugfile or run_exemption("Cannot open file with text written by user for suggestion: ".$sugfile);
my $phr = <FILE>;
close FILE;

$phr =~ s/'/''/g; $phr =~ s/\s*\n//g; $phr =~ s/^\s+|\s+$//g; #escape quotes, remove newlines and trim
$phr =~ s/\*//g; #remove stars, which cause oracle text error, 20170228

#protection against sql injection. Added 20140516
my $phr_quotes = $phr =~ tr/'/'/;
if ( ($phr =~/;/) || $phr_quotes>2 ) {
   print "<results></results>\n";
   exit 0;}


my $dbh = DBI->connect($sid, $bib_base,$bib_base_password) or run_exemption ("ERROR couldn't connect to database with ".$bib_base."\n".$DBI::errstr);

#SEARCH 1 - selecting suggestions with the same beginning of the phrase. Uses sql like.
my $sth0 = $dbh->prepare("select distinct suggestion from opac_autocomplete2 where convert(upper(suggestion),'US7ASCII') like convert(upper('".$phr."%'),'US7ASCII') and rownum<11");
$sth0->execute or run_exemption ("ERROR in sql select0 from opac_autocomplete2: ".$DBI::errstr);
my $results_length=0;
 
print "<results>\n";
while(  my $ref = $sth0->fetchrow_hashref() ) {
   my $sug = $ref->{'SUGGESTION'};
   $sug =~ s/&/\&amp;/g; $sug =~ s/</\&lt;/g; $sug =~ s/>/\&gt;/g; #escape xml entities
   print "<sug>", $sug, "</sug>\n";
   $results_length++;
   }
#SEARCH2 - if not enought results from search one, this select takes suggestion from anywhere in the ohrase. Uses Oracle text search.
#known issue - the search sometimes causes DRG-50943, when query token is told to be too long (more than 256 chars]. But the real query is not so long, as it is cropped below.
if ( $results_length <10 ) {
   $phr = substr $phr,0,256;
   #my $sth1 = $dbh->prepare("select SUGGESTION from opac_autocomplete2 where catsearch(SUGGESTION,'\"".$phr."*\"',null)>0 and rownum<30 MINUS select distinct suggestion from opac_autocomplete2 where convert(upper(suggestion),'US7ASCII') like convert(upper('".$phr."%'),'US7ASCII') and rownum<11");
   my $sth1 = $dbh->prepare("select distinct suggestion from opac_autocomplete2 where convert(upper(suggestion),'US7ASCII') like convert(upper('%".$phr."%'),'US7ASCII') and rownum<11");
   $sth1->execute or  run_exemption ("ERROR in sql select1 from opac_autocomplete2: ".$DBI::errstr);
   while(  my $ref = $sth1->fetchrow_hashref() ) {
      my $sug = $ref->{'SUGGESTION'};
      $sug =~ s/&/\&amp;/g; $sug =~ s/</\&lt;/g; $sug =~ s/>/\&gt;/g; #escape xml entities
      print "<sug>", $sug, "</sug>\n";
      if ( $results_length>10 ) { last; }
      $results_length++;
      }
   }
print "</results>\n";



sub run_exemption {
   my $error_message = $_[0];
   return if ( index($error_message,'DRG-51030')>-1  ) ; #excluded DRG-51030 menas too many results - more than 20000 in 11g. Do not care.
   open ( LOGFILE, '<<'.$logfile ) or print "Logfile $logfile cannot be opened, an error!\n";
   print LOGFILE $tajmstemp.' -- error : '.$error_message."\n";
   close ( LOGFILE );
   open(MAIL, "|/usr/sbin/sendmail -t");
   print MAIL "To: ".$admin_mail."\n";
   print MAIL 'From: aleph@alfik.osu.cz'."\n";
   print MAIL 'Subject: Error in autocomplete.pl'."\n\n";
   print MAIL "$tajmstemp\n\n$error_message\n\nThe query to autocomplete was: $phr\n";
   close(MAIL);
   die "<results></results>";
   exit 0;
   }
