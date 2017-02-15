#!/bin/csh -f
#SET THIS AES VARIABLE FIRST !
set alephe_scratch="/exlibris/aleph/u22_1/alephe/scratch" #do not use aleph env variables like $alephe_scratch, this script is run as linux root 
set autocomplete_dir="/exlibris/aleph/matyas/autocomplete/" #where autocomplete perl scripts are stored
set perl_location="/exlibris/aleph/a22_1/product/local/perl/bin/perl" #path and file to Aleph Perl. We recommend using Perl distributed with Aleph instead of the linux one, since it contains all desired perl modules for the script
###


echo 'Content-type: text/xml; charset=utf-8'
echo ''
echo '<?xml version="1.0" encoding="utf-8"?>'
echo "$WWW_phr2sug" >$alephe_scratch/autocomplete.tmp
enca -L czech -x UTF-8 $alephe_scratch/autocomplete.tmp
cp /dev/null $autocomplete_dir/sug.tmp
$perl_location $autocomplete_dir/autocomplete.pl
