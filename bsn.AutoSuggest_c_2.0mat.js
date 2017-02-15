/**
 *  author:		Timothy Groves - http://www.brandspankingnew.net
 *     version         2.0 - 2007-02-07
* modified for aleph at University od Ostrava, Matyas Bajger 2012 (when modif. see note: MAT]
 */

  var alphabet = { a:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/ig,
    aa:/[\uA733]/ig,
    ae:/[\u00E6\u01FD\u01E3]/ig,
    ao:/[\uA735]/ig,
    au:/[\uA737]/ig,
    av:/[\uA739\uA73B]/ig,
    ay:/[\uA73D]/ig,
    b:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/ig,
    c:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/ig,
    d:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/ig,
    dz:/[\u01F3\u01C6]/ig,
    e:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/ig,
    f:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/ig,
    g:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/ig,
    h:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/ig,
    hv:/[\u0195]/ig,
    i:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/ig,
    j:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/ig,
    k:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/ig,
    l:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/ig,
    lj:/[\u01C9]/ig,
    m:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/ig,
    n:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/ig,
    nj:/[\u01CC]/ig,
    o:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/ig,
    oi:/[\u01A3]/ig,
    ou:/[\u0223]/ig,
    oo:/[\uA74F]/ig,
    p:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/ig,
    q:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/ig,
    r:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/ig,
    s:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/ig,
    t:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/ig,
    tz:/[\uA729]/ig,
    u:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/ig,
    v:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/ig,
    vy:/[\uA761]/ig,
    w:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/ig,
    x:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/ig,
    y:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/ig,
    z:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/ig,
    '':/[\u0300\u0301\u0302\u0303\u0308]/ig
  };
  var replaceDiacritics = function(str) {
    for (var letter in alphabet) {
      str = str.replace(alphabet[letter], letter);  }
    return str;
  };

var useBSNns;
if (useBSNns) {
	if (typeof(bsn) == "undefined") var bsn = {}
	_bsn = bsn;
       }
else {	var _bsn = this; }
if (typeof(_bsn.Autosuggest) == "undefined") _bsn.Autosuggest = {}

_bsn.AutoSuggest = function (fldID, param) {
	// no DOM - give up!
	if (!document.getElementById) return false;
	// get field via DOM
	this.fld = _bsn.DOM.getElement(fldID);
	if (!this.fld) 	return false;
	// init variables
	this.sInput 		= "";
	this.nInputChars 	= 0;
	this.aSuggestions 	= [];
	this.iHighlighted 	= 0;
	// parameters object
	this.oP = (param) ? param : {};
	// defaults	
	if (!this.oP.minchars)									this.oP.minchars = 1;
	if (!this.oP.method)									this.oP.meth = "get";
	if (!this.oP.varname)									this.oP.varname = "input";
	if (!this.oP.className)									this.oP.className = "autosuggest";
	if (!this.oP.timeout)									this.oP.timeout = 480000;
	//if (!this.oP.timeout)									this.oP.timeout = 4800;
	if (!this.oP.delay)									this.oP.delay = 500;
	if (!this.oP.offsety)									this.oP.offsety = -5;
	if (!this.oP.shownoresults)								this.oP.shownoresults = true;
	if (!this.oP.noresults)									this.oP.noresults = "No results!";
	if (!this.oP.maxheight && this.oP.maxheight !== 0)		this.oP.maxheight = 250;
	if (!this.oP.cache && this.oP.cache != false)			this.oP.cache = true;
	// set keyup handler for field and prevent autocomplete from client
	var pointer = this;
	// NOTE: not using addEventListener because UpArrow fired twice in Safari
	//_bsn.DOM.addEvent( this.fld, 'keyup', function(ev){ return pointer.onKeyPress(ev); } );
	this.fld.onkeypress 	= function(ev){ return pointer.onKeyPress(ev); }
	this.fld.onkeyup 		= function(ev){ return pointer.onKeyUp(ev); }
	this.fld.setAttribute("autocomplete","off");
}

_bsn.AutoSuggest.prototype.onKeyPress = function(ev) {
	var key = (window.event) ? window.event.keyCode : ev.keyCode;
	// set responses to keydown events in the field
	// this allows the user to use the arrow keys to scroll through the results
	// ESCAPE clears the list
	// TAB sets the current highlighted value
	var RETURN = 13;
	var TAB = 9;
	var ESC = 27;
	var bubble = true;
	switch(key) {
		case RETURN:
			this.setHighlightedValue();
			bubble = false;
                        //MAT the sequent line allows to confirm the form by clicng enter, if as element is not displayed
                        if ( document.getElementById('as_input_request') == null || ( ! this.iHighlighted ) ) document.forms.form1.submit();
			break;
		case ESC:
			this.clearSuggestions();
			break;
	}
	return bubble;
}

_bsn.AutoSuggest.prototype.onKeyUp = function(ev) {
	var key = (window.event) ? window.event.keyCode : ev.keyCode;
	// set responses to keydown events in the field. this allows the user to use the arrow keys to scroll through the results
	// ESCAPE clears the list -- TAB sets the current highlighted value
	var ARRUP = 38;
	var ARRDN = 40;
	var bubble = true;
	switch(key) {
		case ARRUP:
			this.changeHighlight(key);
			bubble = false;
			break;
		case ARRDN:
			this.changeHighlight(key);
			bubble = false;
			break;
		default:
			this.getSuggestions(this.fld.value);
	}
	return bubble;
}

_bsn.AutoSuggest.prototype.getSuggestions = function (val) {
	// if input stays the same, do nothing
	if (val == this.sInput)
		return false;
	
	// input length is less than the min required to trigger a request
	// reset input string
	// do nothing
	if (val.length < this.oP.minchars) {
		this.sInput = "";
		return false;
	}
	
	// if caching enabled, and user is typing (ie. length of input is increasing)
	// filter results out of aSuggestions from last request
	if (val.length>this.nInputChars && this.aSuggestions.length && this.oP.cache) 	{
		var arr = [];
		for (var i=0;i<this.aSuggestions.length;i++)
		{
			if (this.aSuggestions[i].value.substr(0,val.length).toLowerCase() == val.toLowerCase())
				arr.push( this.aSuggestions[i] );
		}
		this.sInput = val;
		this.nInputChars = val.length;
		this.aSuggestions = arr;
		
		this.createList(this.aSuggestions);
		
		return false;
	}
	else
	// do new request
	{
		this.sInput = val;
		this.nInputChars = val.length;

		var pointer = this;
		clearTimeout(this.ajID);
		this.ajID = setTimeout( function() { pointer.doAjaxRequest() }, this.oP.delay );
	}

	return false;
}


_bsn.AutoSuggest.prototype.doAjaxRequest = function () {
	var pointer = this;
	// create ajax request
	//MAT do not use escape! var url = this.oP.script+this.oP.varname+"="+escape(this.fld.value);
	var url = this.oP.script+this.oP.varname+"="+encodeURI(this.fld.value);
	var meth = this.oP.meth;
	
	var onSuccessFunc = function (req) { pointer.setSuggestions(req) };
//	var onErrorFunc = function (status) { alert("AJAX error: "+status); };
	var onErrorFunc = function (status) {  };

	var myAjax = new _bsn.Ajax();
	myAjax.makeRequest( url, meth, onSuccessFunc, onErrorFunc );
}

_bsn.AutoSuggest.prototype.setSuggestions = function (req) {
	this.aSuggestions = [];
	if (this.oP.json ) { } //removed MAT
	else {
		var xml = req.responseXML;
window.debxml=xml;
		// traverse xml
		if ( xml.getElementsByTagName('results').length > 0 ) {
		   var results = xml.getElementsByTagName('results')[0].childNodes;
		   for (var i=0;i<results.length;i++) {
			if (results[i].hasChildNodes())
//MAT				this.aSuggestions.push(  { 'id':results[i].getAttribute('id'), 'value':results[i].childNodes[0].nodeValue, 'info':results[i].getAttribute('info') }  );
                                this.aSuggestions.push(  { 'id':(i+1), 'value':results[i].childNodes[0].nodeValue, 'info':'' }  );
		   }
		}
	}
	
	this.idAs = "as_"+this.fld.id;

	this.createList(this.aSuggestions);
}


String.prototype.capitalize = function() {   return this.charAt(0).toUpperCase() + this.slice(1); }

_bsn.AutoSuggest.prototype.createList = function(arr){
	var pointer = this;
	// get rid of old list and clear the list removal timeout
	_bsn.DOM.removeElement(this.idAs);
	this.killTimeout();
	// create holding div
	var div = _bsn.DOM.createElement("div", {id:this.idAs, className:this.oP.className});	
	
	var hcorner = _bsn.DOM.createElement("div", {className:"as_corner"});
	var hbar = _bsn.DOM.createElement("div", {className:"as_bar"});
	var header = _bsn.DOM.createElement("div", {className:"as_header"});
	header.appendChild(hcorner);
	header.appendChild(hbar);
	div.appendChild(header);
	// create and populate ul
	var ul = _bsn.DOM.createElement("ul", {id:"as_ul"});
	// loop throught arr of suggestions creating an LI element for each suggestion
	for (var i=0;i<arr.length;i++)	{
		// format output with the input enclosed in a EM element (as HTML, not DOM)
		var val = arr[i].value;
		var st = val.toLowerCase().indexOf( this.sInput.toLowerCase() );
		//var output = val.substring(0,st) + "<em>" + val.substring(st, st+this.sInput.length) + "</em>" + val.substring(st+this.sInput.length);
		var output = val.replace(this.sInput,'<em>'+this.sInput+'</em>').replace(this.sInput.toLowerCase(),'<em>'+this.sInput+'</em>').replace(this.sInput.capitalize(),'<em>'+this.sInput+'</em>').replace(replaceDiacritics(this.sInput),'<em>'+this.sInput+'</em>');

		var span = _bsn.DOM.createElement("span", {}, output, true);
		if (arr[i].info != "")
		{
			var br			= _bsn.DOM.createElement("br", {});
			span.appendChild(br);
			var small		= _bsn.DOM.createElement("small", {}, arr[i].info);
			span.appendChild(small);
		}
		
		var a 			= _bsn.DOM.createElement("a", { href:"#" });
		
		var tl 		= _bsn.DOM.createElement("span", {className:"tl"}, " ");
		var tr 		= _bsn.DOM.createElement("span", {className:"tr"}, " ");
		a.appendChild(tl);
		a.appendChild(tr);
		
		a.appendChild(span);
		
		a.name = i+1;
		a.onclick = function () { pointer.setHighlightedValue(); return false; }
		a.onmouseover = function () { pointer.setHighlight(this.name); }
		
		var li 			= _bsn.DOM.createElement(  "li", {}, a  );
		
		ul.appendChild( li );
	}
	
	// no results - hide div autosuge - MAT
	if (arr.length == 0)	{
//		var li 	=  _bsn.DOM.createElement(  "li", {className:"as_warning"}, this.oP.noresults  );
//		ul.appendChild( li );}
                div.style.display='none'; }
	
	div.appendChild( ul );
	
	var fcorner = _bsn.DOM.createElement("div", {className:"as_corner"});
	var fbar = _bsn.DOM.createElement("div", {className:"as_bar"});
	var footer = _bsn.DOM.createElement("div", {className:"as_footer"});
	footer.appendChild(fcorner);
	footer.appendChild(fbar);
	div.appendChild(footer);
	
	// get position of target textfield
	// position holding div below it
	// set width of holding div to width of field
	var pos = _bsn.DOM.getPos(this.fld);
	
	div.style.left 		= pos.x + "px";
	div.style.top 		= ( pos.y + this.fld.offsetHeight + this.oP.offsety ) + "px";
	div.style.width 	= this.fld.offsetWidth + "px";
	
	// set mouseover functions for div
	// when mouse pointer leaves div, set a timeout to remove the list after an interval
	// when mouse enters div, kill the timeout so the list won't be removed
	div.onmouseover 	= function(){ pointer.killTimeout() }
	div.onmouseout 		= function(){ pointer.resetTimeout() }

	// add DIV to document
	document.getElementsByTagName("body")[0].appendChild(div);
	
	// currently no item is highlighted
	this.iHighlighted = 0;
	
	// remove list after an interval
	var pointer = this;
	this.toID = setTimeout(function () { pointer.clearSuggestions() }, this.oP.timeout);
}

_bsn.AutoSuggest.prototype.changeHighlight = function(key) {	
	var list = _bsn.DOM.getElement("as_ul");
	if (!list) return false;
	var n;

	if (key == 40)
		n = this.iHighlighted + 1;
	else if (key == 38)
		n = this.iHighlighted - 1;
	
	if (n > list.childNodes.length)
		n = list.childNodes.length;
	if (n < 1)
		n = 1;
	this.setHighlight(n);
}

_bsn.AutoSuggest.prototype.setHighlight = function(n)
{
	var list = _bsn.DOM.getElement("as_ul");
	if (!list)
		return false;
	
	if (this.iHighlighted > 0)
		this.clearHighlight();
	
	this.iHighlighted = Number(n);
	
	list.childNodes[this.iHighlighted-1].className = "as_highlight";


	this.killTimeout();
}


_bsn.AutoSuggest.prototype.clearHighlight = function()
{
	var list = _bsn.DOM.getElement("as_ul");
	if (!list)
		return false;
	
	if (this.iHighlighted > 0)
	{
		list.childNodes[this.iHighlighted-1].className = "";
		this.iHighlighted = 0;
	}
}


_bsn.AutoSuggest.prototype.setHighlightedValue = function ()
{
	if (this.iHighlighted)
	{
		this.sInput = this.fld.value = this.aSuggestions[ this.iHighlighted-1 ].value;
		
		// move cursor to end of input (safari)
		this.fld.focus();
		if (this.fld.selectionStart)
			this.fld.setSelectionRange(this.sInput.length, this.sInput.length);
		

		this.clearSuggestions();
		
		// pass selected object to callback function, if exists
		if (typeof(this.oP.callback) == "function")
			this.oP.callback( this.aSuggestions[this.iHighlighted-1] );
	}
}

_bsn.AutoSuggest.prototype.killTimeout = function()
{
	clearTimeout(this.toID);
}

_bsn.AutoSuggest.prototype.resetTimeout = function()
{
	clearTimeout(this.toID);
	var pointer = this;
	this.toID = setTimeout(function () { pointer.clearSuggestions() }, 1000);
}


_bsn.AutoSuggest.prototype.clearSuggestions = function ()
{
	this.killTimeout();
	
	var ele = _bsn.DOM.getElement(this.idAs);
	var pointer = this;
	if (ele)
	{
		var fade = new _bsn.Fader(ele,1,0,250,function () { _bsn.DOM.removeElement(pointer.idAs) });
	}
}

// AJAX PROTOTYPE
if (typeof(_bsn.Ajax) == "undefined") 	_bsn.Ajax = {}

_bsn.Ajax = function () {
	this.req = {};
	this.isIE = false;}

_bsn.Ajax.prototype.makeRequest = function (url, meth, onComp, onErr) {
	if (meth != "POST") meth="GET";
	this.onComplete = onComp;
	this.onError = onErr;
	var pointer = this;
	// branch for native XMLHttpRequest object
	if (window.XMLHttpRequest) 	{
		this.req = new XMLHttpRequest();
		this.req.onreadystatechange = function () { pointer.processReqChange() };
		this.req.open("GET", url, true); //
		this.req.send(null);
	}
	else if (window.ActiveXObject) 	{
		this.req = new ActiveXObject("Microsoft.XMLHTTP");
		if (this.req)	{
			this.req.onreadystatechange = function () { pointer.processReqChange() };
			this.req.open(meth, url, true);
			this.req.send();
		}
	}
}

_bsn.Ajax.prototype.processReqChange = function()
{
	
	// only if req shows "loaded"
	if (this.req.readyState == 4) {
		// only if "OK"
		if (this.req.status == 200)
		{
			this.onComplete( this.req );
		} else {
			this.onError( this.req.status );
		}
	}
}

// DOM PROTOTYPE
if (typeof(_bsn.DOM) == "undefined") _bsn.DOM = {}

_bsn.DOM.createElement = function ( type, attr, cont, html )
{
	var ne = document.createElement( type );
	if (!ne) return false;
	for (var a in attr)
		ne[a] = attr[a];
	if (typeof(cont) == "string" && !html)
		ne.appendChild( document.createTextNode(cont) );
	else if (typeof(cont) == "string" && html)
		ne.innerHTML = cont;
	else if (typeof(cont) == "object")
		ne.appendChild( cont );
	return ne;
}

_bsn.DOM.clearElement = function ( id )
{
	var ele = this.getElement( id );
	if (!ele) return false;
	while (ele.childNodes.length)
		ele.removeChild( ele.childNodes[0] );
	return true;
}

_bsn.DOM.removeElement = function ( ele )
{
	var e = this.getElement(ele);
	if (!e)
		return false;
	else if (e.parentNode.removeChild(e))
		return true;
	else
		return false;
}

_bsn.DOM.replaceContent = function ( id, cont, html )
{
	var ele = this.getElement( id );
	if (!ele) return false;
	this.clearElement( ele );
	if (typeof(cont) == "string" && !html)
		ele.appendChild( document.createTextNode(cont) );
	else if (typeof(cont) == "string" && html)
		ele.innerHTML = cont;
	else if (typeof(cont) == "object")
		ele.appendChild( cont );
}

_bsn.DOM.getElement = function ( ele )
{
	if (typeof(ele) == "undefined") {return false;}
	else if (typeof(ele) == "string")	{
		var re = document.getElementById( ele );
		if (!re)
			return false;
		else if (typeof(re.appendChild) != "undefined" ) {
			return re;
		} else {
			return false;
		}
	}
	else if (typeof(ele.appendChild) != "undefined")
		return ele;
	else
		return false;
}


_bsn.DOM.appendChildren = function ( id, arr )
{
	var ele = this.getElement( id );
	if (!ele)	return false;
	if (typeof(arr) != "object")
		return false;
	for (var i=0;i<arr.length;i++)	{
		var cont = arr[i];
		if (typeof(cont) == "string")
			ele.appendChild( document.createTextNode(cont) );
		else if (typeof(cont) == "object")
			ele.appendChild( cont );
	}
}

_bsn.DOM.getPos = function ( ele ) {
	var ele = this.getElement(ele);
	var obj = ele;
	var curleft = 0;
	if (obj.offsetParent) 	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;

	var obj = ele;
	var curtop = 0;
	if (obj.offsetParent) 	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;

	return {x:curleft, y:curtop}
}

// FADER PROTOTYPE
if (typeof(_bsn.Fader) == "undefined") 	_bsn.Fader = {}

_bsn.Fader = function (ele, from, to, fadetime, callback)
{	
	if (!ele) return false;
	this.ele = ele;
	this.from = from;
	this.to = to;
	this.callback = callback;
	this.nDur = fadetime;
	this.nInt = 50;
	this.nTime = 0;
	var p = this;
	this.nID = setInterval(function() { p._fade() }, this.nInt);
}

_bsn.Fader.prototype._fade = function(){
	this.nTime += this.nInt;
	var ieop = Math.round( this._tween(this.nTime, this.from, this.to, this.nDur) * 100 );
	var op = ieop / 100;
	if (this.ele.filters) // internet explorer
	{
		try
		{
			this.ele.filters.item("DXImageTransform.Microsoft.Alpha").opacity = ieop;
		} catch (e) { 
			// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
			this.ele.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity='+ieop+')';
		}
	}
	else // other browsers
	{
		this.ele.style.opacity = op;
	}
	
	if (this.nTime == this.nDur)
	{
		clearInterval( this.nID );
		if (this.callback != undefined)
			this.callback();
	}
}

_bsn.Fader.prototype._tween = function(t,b,c,d) {
	return b + ( (c-b) * (t/d) );}
