#!/bin/sh
#SET THIS AES VARIABLE FIRST !
alephe_scratch="/exlibris/aleph/u23_1/alephe/scratch" #do not use aleph env variables like $alephe_scratch, this script is run as linux root
autocomplete_dir="/exlibris/aleph/matyas/autocomplete" #where autocomplete perl scripts are stored
perl_location="/exlibris/aleph/a23_1/product/local/perl/bin/perl" #path and file to Aleph Perl. We recommend using Perl distributed with Aleph instead of the linux one, since it contains all desired perl modules for the script
###

function urldecode() { : "${*//+/ }"; echo -e "${_//%/\\x}"; }

echo 'Content-type: text/xml; charset=utf-8'
echo ''
echo '<?xml version="1.0" encoding="utf-8"?>'
WWW_phr2sug=`echo "$QUERY_STRING" | sed 's/phr2sug=//'`
WWW_phr2sug_decoded=$(urldecode "$WWW_phr2sug")

#echo "$WWW_phr2sug" >$alephe_scratch/autocomplete.tmp
echo "$WWW_phr2sug_decoded" >$alephe_scratch/autocomplete.tmp
#enca -L czech -x UTF-8 $alephe_scratch/autocomplete.tmp
cp /dev/null $autocomplete_dir/sug.tmp
$perl_location $autocomplete_dir/autocomplete.pl
