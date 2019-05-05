// Yiddish dictionary bookmarklet
// V 1.0 - 2017-01-02
// V 1.1 - 2016-01-07: new transliteration function, minimize function, enlarge input field option
// Read more: https://podolak.net/en/bookmarklets/yiddish
// Author: Martin Podolak
// Contact: www.podolak.net

function loadjscssfile(filename, filetype){
 if (filetype=="js"){
 var fileref=document.createElement('script')
 fileref.setAttribute("type","text/javascript")
 fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){
 var fileref=document.createElement("link")
 fileref.setAttribute("rel", "stylesheet")
 fileref.setAttribute("type", "text/css")
 fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
 document.getElementsByTagName("head")[0].appendChild(fileref)
}
loadjscssfile("https://podolak.net/doc/bookmarklets/dicts/style.css", "css")

// function for pages with charset UTF-8
function suche (id){
konvertiert = encodeURI(document.ordbogform.texto.value);
window.open(id+ konvertiert,'_blank');}

// function for pages with charset windows-1252 or ISO-8859-1
function suche4 (id){
konvertiert4 = escape(document.ordbogform.texto.value);
window.open(id+ konvertiert4,'_blank');}
var ordbogform = document.createElement('form');
ordbogform.id ="ordbogform";
ordbogform.name="ordbogform";
ordbogform.method="post";
ordbogform.setAttribute("onsubmit", "return false");
ordbogform.onsubmit="return false";
var inddata = document.createElement('textarea');
inddata.setAttribute("class", "keyboardInput");
inddata.setAttribute("rows", "1"); 
inddata.setAttribute("cols", "15"); 
inddata.value =t;
inddata.setAttribute("onclick", "this.parentNode.submit();");
inddata.setAttribute("onkeypress", "inputenter(event)");

function inputenter(event) {
if (event.keyCode == 13) {
	loadjscssfile("https://podolak.net/doc/bookmarklets/dicts/bigger.css", "css");
	var element = document.getElementById('texto'),
	style = window.getComputedStyle(element),
	height = style.getPropertyValue('height');
	if (height == "26px") {
		self.VKI_close();
		}
 }
}

var f = t.toString();
 if (f.indexOf('\n') >= 0) {
	loadjscssfile("https://podolak.net/doc/bookmarklets/dicts/bigger.css", "css");
	}

inddata.id="texto";
s=document.createElement('script');s.id='r6109_vkbsgp';s.type='text/javascript';s.src='https://www.podolak.net/doc/bookmarklets/dicts/keyboard-yi.js?,true,false';document.body.appendChild(s);void(null);
inddata.setAttribute("class", "keyboardInput");
inddata.value =t;
inddata.id="texto";
inddata.setAttribute("dir", "rtl");

//	#1: The URLs. Be aware of the ascending numbering and do not forget to call them below at #2
var input1 = document.createElement("input");
input1.setAttribute("dir", "ltr");
input1.type = "button";
input1.value = "‎ייִדיש ⇒ English";
input1.id = "inputordbog";
input1.title = "Yiddish Dictionary Online - ייִדיש ווערטערבוך אויפֿן וועב";
input1.onclick = function(){suche('http://www.yiddishdictionaryonline.com/dictionary/display.php?action=search&type=yid&action=search&word=');return false;};

var input2 = document.createElement("input");
input2.setAttribute("dir", "ltr");
input2.type = "button";
input2.value = "‎ייִדיש ⇐ English";
input2.id = "inputordbog";
input2.title = "Yiddish Dictionary Online - English input - ייִדיש ווערטערבוך אויפֿן וועב";
input2.onclick = function(){suche('http://www.yiddishdictionaryonline.com/dictionary/display.php?action=search&type=eng&action=search&word=');return false;};

var input3 = document.createElement("input");
input3.setAttribute("dir", "ltr");
input3.type = "button";
input3.value = "Yiddish ⇒ English";
input3.id = "inputordbog";
input3.title = "Yiddish Dictionary Online - Yiddish input with Latin letters - ייִדיש ווערטערבוך אויפֿן וועב";
input3.onclick = function(){suche('http://www.yiddishdictionaryonline.com/dictionary/display.php?action=search&type=rom&action=search&word=');return false;};

var input4 = document.createElement("input");
input4.setAttribute("dir", "ltr");
input4.type = "button";
input4.value = "English/Yiddish/‎ייִדיש‎ @Lexington";
input4.id = "inputordbog";
input4.title = "Searches a word, phrase or fragment in English, Yiddish, or transliterated Yiddish";
input4.onclick = function(){suche('http://www.cs.uky.edu/~raphael/yiddish/dictionary.cgi?word=');return false;};

var input5 = document.createElement("input");
input5.setAttribute("dir", "ltr");
input5.type = "button";
input5.value = "‎ייִדיש ⇒ English @Glosbe";
input5.id = "inputordbog";
input5.title = "";
input5.onclick = function(){suche('https://en.glosbe.com/yi/en/');return false;};

var input6 = document.createElement("input");
input6.setAttribute("dir", "ltr");
input6.type = "button";
input6.value = "‎ייִדיש ⇐ English @Glosbe";
input6.id = "inputordbog";
input6.title = "";
input6.onclick = function(){suche('https://yi.glosbe.com/en/yi/');return false;};

var input7 = document.createElement("input");
input7.setAttribute("dir", "ltr");
input7.type = "button";
input7.value = "‎ייִדיש ⇒ Deutsch @Glosbe";
input7.id = "inputordbog";
input7.title = "";
input7.onclick = function(){suche('https://de.glosbe.com/yi/de/');return false;};

var input8 = document.createElement("input");
input8.setAttribute("dir", "ltr");
input8.type = "button";
input8.value = "‎ייִדיש ⇐ Deutsch @Glosbe";
input8.id = "inputordbog";
input8.title = "";
input8.onclick = function(){suche('https://yi.glosbe.com/de/yi/');return false;};

var input9 = document.createElement("input");
input9.setAttribute("dir", "ltr");
input9.type = "button";
input9.value = "‎ייִדיש ⇒ русский @Glosbe";
input9.id = "inputordbog";
input9.title = "";
input9.onclick = function(){suche('https://ru.glosbe.com/yi/ru/');return false;};

var input10 = document.createElement("input");
input10.setAttribute("dir", "ltr");
input10.type = "button";
input10.value = "‎ייִדיש ⇐ русский @Glosbe";
input10.id = "inputordbog";
input10.title = "";
input10.onclick = function(){suche('https://yi.glosbe.com/ru/yi/');return false;};

//	#1 END	///////////////////

/////////////////////translit
function transl() {
var translit = document.createElement('script');
translit.type = 'text/javascript';
translit.src = 'https://www.podolak.net/doc/keyboard/jiddisch.js?,true,false';
document.body.appendChild(translit);void(null);
//var elem = document.getElementById("ordbog"); elem.parentNode.removeChild(elem);
    var div = document.getElementById('ordbog');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
	}
	    else {
        div.style.display = 'block';
    }
    var div = document.getElementById('ordbogklein');
        div.style.display = 'block';

}

var inputtranslit = document.createElement("input");
inputtranslit.type = "button";
inputtranslit.value = "Convert current website";
inputtranslit.id = "inputordbog";
inputtranslit.title = "Transliteration (romanisation, transcription) of the current web site from Hebrew to Latin script (closes this dictionary window)";
inputtranslit.onclick = function(){transl();return false;};
/////////////////////translit end

var divinnen = document.createElement('div');
divinnen.setAttribute("class", "ordbog-indhold");

var textluk = document.createTextNode('×');
var spanluk = document.createElement('span');
spanluk.setAttribute("class", "luk");
spanluk.title ="Close window (deletes all input)";
spanluk.appendChild(textluk);
divinnen.appendChild(spanluk);
divinnen.appendChild(ordbogform);

var textminimer = document.createTextNode('_');
var spanminimer = document.createElement('span');
spanminimer.setAttribute("class", "minimer");
spanminimer.title ="Minimize dictionaries window (keeps input)";
spanminimer.appendChild(textminimer);
divinnen.appendChild(spanminimer);
divinnen.appendChild(ordbogform);

var spanoben = document.createElement('span');
spanoben.setAttribute("class", "oben");

var lupe = document.createElement('p');
lupe.setAttribute("class", "lupe");
lupe.setAttribute("title", "Enter keyword and choose a dictionary by clicking the according button");
lupe.style.transform="rotate(45deg)"
var lupeinhalt = document.createTextNode('⚲');
lupe.appendChild(lupeinhalt);
spanoben.appendChild(lupe);
spanoben.appendChild(inddata);



var button1 = document.createElement('input');
button1.type = "button";
button1.value = "enlarge";
button1.id = "inputordbog";
button1.setAttribute("class", "bigger");
button1.title = "This will enlarge the input field";
button1.setAttribute("onclick", "bigger2()");
spanoben.appendChild(button1);


var spantitle = document.createElement('span');
spantitle.setAttribute("class", "spantitle");
var texttitle = document.createTextNode('YI dicts');
spantitle.appendChild(texttitle);
spanoben.appendChild(spantitle);

var spansubtitle = document.createElement('p');
spansubtitle.setAttribute("class", "spansubtitle");
var textsubtitle = document.createTextNode('Yiddish Dictionaries / ייִדיש ווערטעביכער');
spansubtitle.appendChild(textsubtitle);
spanoben.appendChild(spansubtitle);
ordbogform.appendChild(spanoben);

var dict_title = document.createElement('div');
var dict_title_inhalt = document.createTextNode('Dictionaries');
dict_title.setAttribute("class", "dictsubtitle");
dict_title.appendChild(dict_title_inhalt);

var translit_title = document.createElement('div');
var translit_title_inhalt = document.createTextNode('Transliteration to Latin');
translit_title.setAttribute("class", "dictsubtitle");
translit_title.appendChild(translit_title_inhalt);

var umbruch = document.createElement('br');
var umbruch2 = document.createElement('br');
var umbruch3 = document.createElement('br');
var umbruch4 = document.createElement('br');

function bigger2() {
	loadjscssfile("https://podolak.net/doc/bookmarklets/dicts/bigger.css", "css");
	}

//	#2: Call here the URLs which have been declared above.
ordbogform.appendChild(dict_title);
ordbogform.appendChild(input1);
ordbogform.appendChild(input3);
ordbogform.appendChild(umbruch);
ordbogform.appendChild(input2);
ordbogform.appendChild(input4);
ordbogform.appendChild(umbruch2);
ordbogform.appendChild(input5);
ordbogform.appendChild(input7);
ordbogform.appendChild(input9);
ordbogform.appendChild(umbruch3);
ordbogform.appendChild(input6);
ordbogform.appendChild(input8);
ordbogform.appendChild(input10);
ordbogform.appendChild(umbruch4);
ordbogform.appendChild(translit_title);
ordbogform.appendChild(inputtranslit);
//	#2 END	///////////////////

var linktitle = document.createElement('a');
linktitle.setAttribute("class", "linktitle");
var linktitletext = document.createTextNode("documentation / other dictionaries");
linktitle.appendChild(linktitletext);
linktitle.title = "Get more information about this and other dictionary bookmarklets";
linktitle.href = "https://podolak.net/en/bookmarklets";
linktitle.target = "_blank";
ordbogform.appendChild(linktitle);
var divaussen = document.createElement('div');
divaussen.setAttribute("id", "ordbog");
divaussen.appendChild(divinnen);
document.body.appendChild(divaussen);
var ordbog = document.getElementById('ordbog');
var ordbogspan = document.getElementsByClassName("luk")[0];
var ordbogkleinspan = document.getElementsByClassName("minimer")[0];
ordbog.style.display = "block";

var divaussenklein = document.createElement('div');
divaussenklein.setAttribute("id", "ordbogklein");
var divaussenkleina = document.createElement('a');
divaussenkleina.title = "Click to restore dictionaries window";
divaussenkleina.setAttribute("onclick", "display()");
divaussenklein.appendChild(divaussenkleina);
var divaussenkleintext = document.createTextNode("YI dicts");
divaussenkleina.appendChild(divaussenkleintext);
document.body.appendChild(divaussenklein);
var div = document.getElementById('ordbogklein');
div.style.display = 'none';

function display() {
    var div = document.getElementById('ordbog');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
	}
	    else {
        div.style.display = 'block';
    }
    var div = document.getElementById('ordbogklein');
        div.style.display = 'none';
}

ordbogspan.onclick = function() {
	var elem = document.getElementById("ordbog"); elem.parentNode.removeChild(elem);
	var elem2 = document.getElementById("ordbogklein"); elem2.parentNode.removeChild(elem2);
}

ordbogkleinspan.onclick = function(event) {
	if (event.target == ordbogkleinspan) {
    var div = document.getElementById('ordbog');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
	}
	    else {
        div.style.display = 'block';
    }
    var div = document.getElementById('ordbogklein');
        div.style.display = 'block';
	}
}

window.onclick = function(event) {
	if (event.target == ordbog) {
    var div = document.getElementById('ordbog');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
	}
	    else {
        div.style.display = 'block';
    }
    var div = document.getElementById('ordbogklein');
        div.style.display = 'block';
	}
}
