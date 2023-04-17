## Description

This adds autocomplete suggestions to Basic search in OPAC. Suggestions are taken from ACC indexes defined by tab01.lng in BIB base and stored in oracle z01 table.

## How it works

Autocomplete menu in OPAC is managed by JavaScript, using modified script by Timothy Groves.  Through ajax, a cgi script autocomplete.cgi is called. This cgi sends string for suggestion to a perl (_autocomplete.pl_) in a safe server zone outside Apache. Perl sends query to Oracle, to a special table _opac_autocomplete2_.  First, it seeks matches with the same beginnings, than, anywhere in the suggestions using Oracle text (CTXCAT) index.  An xml response is send back to cgi and by JavaScript displayed in OPAC. Suggestions are selected regardless of diacritics; strings for search are converted to 7-bit ASCII.

Oracle table _opac_autocomplete2_ table stores modified and selected rows from z01 (ACC index). Headings longer than 80 chars are cut at the end of first word after 80th character. This table must be updated regularly.

This autocomplete is intended for one-field search, not for advanced searches combining more fields.
 
## Programming language, SW requirements

JavaScript 1.5, CSS2, CSH (for cgi), Perl 5 (modules: DBI, POSIX, Cws – are included Aleph distribution of Perl)

Tested on Aleph versions 18, 20, 22

 
## Implementation

### Download and Copy files

* Download a pack of scripts and images from [http://aleph.osu.cz/autocomplete/aleph_opac_autocomplete.tgz](http://aleph.osu.cz/autocomplete/aleph_opac_autocomplete.tgz)
* Create a directory somewhere on server, let’s call it “autocomplete”
* Copy (unpack) the packet to that directory. It should now contain files & dirs:
    _autocomplete.conf_ - configuration
    _autocomplete.pl_   autocomplete.cgi – two front-end server-side scripts
    _autocomplete_init.pl_  - back-end script for create/actualize the ora table

* oracle_text.howto – human instruction from implementing Oracle text
`./htdocs/autocomplete/ bsn.AutoSuggest_c_2.0mat.js` – JavaScript for opac
`./htdocs/autocomplete/bsn.autosuggest_inquisitor.css` – css styles
`./htdocs/autocomplete/bsn_img/*.gif` – 9 images for display in opac, mostly round corners

    *  Move (or copy) `autocomplete.cgi` to a place (dir) accessible and set for cgi www scripts, according to Apache settings.
    * Move (or copy) the `/htdocs/autocomplete` contents to your `$htdocs/autocomplete` directory (create new autocomplete dir under $htdocs)

### Set parameters for perl scripts

Edit `autocomplete.conf` with general settings for both perl scripts. Change the actual settings according to your server and Aleph.

`bib_base + bib_base_password` = name of your BIB Aleph base and password to Oracle for this user; in lower case
`sid` = your Oracle hostname and SID. Example: 'dbi:Oracle:host=localhost;sid=aleph22' (note: SID might be get from env variable by @> echo $ORACLE_SID  )
`tablespace4tables` = Oracle tablespace where new table autocomplete2 will be created. The default tablespace for tables for Aleph is "ts0"
`acc_indexes2suggest` = 3-char codes of Aleph ACC headings according to tab01.lng. Here choose headings to be used in suggestions. Delimited by comma.
`subfields2remove` = MARC subfields that will be removed from ACC headings for suggestions. According to Marc21, the 6XX subfields 2,7 might be removed as containing the dictionary/base code and ID for authorities links.
`admin_mail` = where errors will be reported
`alephe_scratch` = path to $alephe_scratch dir, but without aleph env variable $alephe_scratch, because the front-end perl is run as Linux root user (from Apache). like: '/exlibris/aleph/uXX_X/alephe/scratch'

### Set parameters for cgi script

Edit `autocomplete.cgi` and set variables – paths at the beginning of the script:

`set alephe_scratch="/exlibris/aleph/u22_1/alephe/scratch"`
Path to alephe-scratch dir. Do not use aleph env variables like $alephe_scratch, this script is run as linux root

`set autocomplete_dir="..../autocomplete/"`
Path, where autocomplete perl scripts are stored.

`set perl_location="/exlibris/aleph/a22_1/product/local/perl/bin/perl"`
Path and file to Aleph Perl. We recommend using Perl distributed with Aleph instead of the Linux one, since it contains all desired Perl modules for the script.

### Set Oracle text

When less than 10 suggestions is found querying the autocomplete2 table with match from the beginning (sql:… like 'nice book%' ) the Oracle Text search and CTXCAT index is used for querying at any place of suggestions ( catsearch() ). The default installation of Oracle with Aleph (ver 18-22) have Oracle text functionality disabled and it must be set now. For possible instructions or suggestion see the file: oracle_text.howto

### OPAC implementation

Edit www opac files in the www_f_lng directory
#### find-b
Add links to JavaScript and CSS within `<head>` section.
    <link rel="stylesheet" href="/autocomplete/bsn.autosuggest_inquisitor.css" type="text/css" media="screen" charset="utf-8" />
    <script type="text/JavaScript" src="/autocomplete/bsn.AutoSuggest_c_2.0mat.js"></script>
#### find-b-head
Add attributes  `id="input_request"`  and `autocomplete=”off”` to the  main input text tag in the search form:
    `<input  name="request" id="input_request" autocomplete=”off”  […]>`
Add the following JavaScript after the <form> section (after closing </form>):
`    <script type="text/JavaScript">
          var options = {
                      script: "/cgi-bin/autocomplete.cgi?",
                      varname: "phr2sug",
                      json: false,
                      maxresults: 10
                      };
          var as = new AutoSuggest('input_request', options);
    </script>
`
Change the value of script:..... with your actual URL path to the cgi script

If you use another id for <input> element, you must change the value „input_request“ in the last script line defining „as“ variable.
`maxresults: 10` corresponds to 10 lines taken from database by perl. If you want to changed, don't forget to change sql in perl too.
 

    If you like, modify `bsn.autosuggest_inquisitor.css` to the desired colours, fonts etc. When changing the colours, the GIFs in `./bsn_img` directory must be changed too (they are used for round corners). It might be possible to replace bitmap round-corners with newer CSS3 properties for rounded corners (border-radius ?)
     
`this.oP.timeout` variable in `bsn.AutoSuggest_c_2.0mat.js` sets timeout in miliseconds, after with autocomplete element disappears (by default 4800 = 8 secs)

#### back-end script
`autocomplete_init.pl` - it drops and recreates Oracle table autocomplete2 with indexes.

When tested, this new table+indexes required 16MB space for each 100.000 rows taken from z01 - ACC headings. The execution of the script took about 1 minute for approx. 750.000 processed ACC headings.

You can run it now (it does not lock the BIB base), but set also regular execution.  We recommend everyday/night schedule using Aleph `job_list`, like:
 `   WW 22:50:00 N autocomplete_init    /...../autocomplete/autocomplete_init.pl`
 
## Workflow of the front-end script
1. html OPAC templates find-b* + JavaScript bsn.AutoSuggest_c_2.0mat.js
   _asynchronous xmlHTTPRequest  - with the text typed by user to the input search tag_
2. autocomplete.cgi
  _$alephe_scratch/autocomplete.tmp  - with the text to be autocompleted_
3. autocomplete.pl
   _query to Oracle autocomplete2 table using like function and Oracle Text_
4. autocomplete.pl
   _$autocomplete_dir/sug.tmp – suggestion returned by Oracle_
5. autocomplete.cgi
   _asynch. http response_
6. html opac + autocomplete JavaScript
   _display suggestions_

 
## Known issues
Querying Oracle by Oracle Text sometimes returns DRG-50943, as the query is too long (more than 256 chars), although the query text is much shorter (one or two words).

 
### Created by
Matyas F. Bajger, University of Ostrava – Univ. Library, matyas.bajger@osu.cz, http://knihovna.osu.cz, http://library.osu.eu                Version 1.0, 2012, Version 2.0, 2014, revised in Feb 2016
on base of the script by
Timothy Groves - http://www.brandspankingnew.net,   version 2.0 - 2007-02-07
 
### Live at
University of Ostrava, Library - http://knihovna.osu.cz http://library.osu.eu http://aleph.osu.cz
 
