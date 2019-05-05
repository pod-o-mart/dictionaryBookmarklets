// Danish dictionary bookmarklet V 1.0
// Published: 2016-08-04
// Read more: https://podolak.net/en/studies/dictionary/bookmarklets
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
var inddata = document.createElement('input');
inddata.setAttribute("class", "keyboardInput");
inddata.setAttribute("size", "15"); 
inddata.value =t;
inddata.setAttribute("onclick", "this.parentNode.submit();");
inddata.id="texto";
s=document.createElement('script');s.id='r6109_vkbsgp';s.type='text/javascript';s.src='https://www.podolak.net/doc/bookmarklets/dicts/keyboard.js?,true,false';document.body.appendChild(s);void(null);
inddata.setAttribute("class", "keyboardInput");
inddata.value =t;
inddata.id="texto";

//	#1: The URLs. Be aware of the ascending numbering and do not forget to call them below at #2
var input1 = document.createElement("input");
input1.type = "button";
input1.id = "inputordbog";
input1.value = "sproget.dk";
input1.onclick = function(){suche('http://sproget.dk/lookup?SearchableText=');return false;};

var input2 = document.createElement("input");
input2.type = "button";
input2.value = "Den Danske Ordbog";
input2.id = "inputordbog";
input2.title = "Moderne dansk fra ca. 1955 til i dag";
input2.onclick = function(){suche('http://ordnet.dk/ddo/ordbog?query=');return false;};

var input3 = document.createElement("input");
input3.type = "button";
input3.value = "ODS";
input3.id = "inputordbog";
input3.title = "Ordbog over det danske Sprog (1700-1950)";
input3.onclick = function(){suche('http://ordnet.dk/ods/opslag?submit=S%F8g&opslag=');return false;};

var input4 = document.createElement("input");
input4.type = "button";
input4.value = "KorpusDK";
input4.id = "inputordbog";
input4.title = "KorpusDK giver mulighed for at undersøge sprogbrugen i et stort antal danske tekster";
input4.onclick = function(){suche('http://ordnet.dk/korpusdk/quick_search?SearchableText=');return false;};

var input5 = document.createElement("input");
input5.type = "button";
input5.value = "Verbix";
input5.id = "inputordbog";
input5.title = "Slå op danske verbalformer";
input5.onclick = function(){suche('http://www.verbix.com/webverbix/go.php?D1=26&H1=126&T1=');return false;};

var input6 = document.createElement("input");
input6.type = "button";
input6.value = "Renæssancens sprog - ordbøger";
input6.id = "inputordbog";
input6.title = "Ordbogsbasen omfatter syv ordbøger mellem 1510 og 1626";
input6.onclick = function(){suche('http://renaessancesprog.dk/ordboger/ordbogssoegning/dictionary_search/?language=da&query=');return false;};

var input7 = document.createElement("input");
input7.type = "button";
input7.value = "Renæssancens sprog - tekstbase";
input7.id = "inputordbog";
input7.title = "Tekstbasen indeholder en række danske og latinske tekster fra 15- og 1600-tallet – poesi og prosa, faglitteratur og skønlitteratur";
input7.onclick = function(){suche('http://renaessancesprog.dk/tekstbase/tekstbasesoegning/textbase_search/?language=da&query=');return false;};

var input8 = document.createElement("input");
input8.type = "button";
input8.value = "STO ordsøgning";
input8.id = "inputordbog";
input8.title = "Sprogteknologisk orddatabase over det danske sprog";
input8.onclick = function(){suche4('http://ida.hum.ku.dk/cgi-bin/defisto/defisto?q=');return false;};

var input9 = document.createElement("input");
input9.type = "button";
input9.value = "STO sammensætning";
input9.id = "inputordbog";
input9.title = "Sprogteknologisk orddatabase over det danske sprog";
input9.onclick = function(){suche4('http://ida.hum.ku.dk/cgi-bin/defisto/komposition?q=');return false;};

var input10 = document.createElement("input");
input10.type = "button";
input10.value = "dict.cc DE ⇔ DA";
input10.id = "inputordbog";
input10.title = "Deutsch/Dänisch, Tysk/Dansk";
input10.onclick = function(){suche('http://deda.dict.cc/?s=');return false;};

var input11 = document.createElement("input");
input11.type = "button";
input11.value = "Akademika DA ⇒ RU";
input11.id = "inputordbog";
input11.title = "Dansk-russisk ordbog,  Датско-русский словарь";
input11.onclick = function(){suche('http://translate.academic.ru/?f=da&t=ru&stype=1&q=');return false;};

var input12 = document.createElement("input");
input12.type = "button";
input12.value = "Akademika RU ⇒ DA";
input12.id = "inputordbog";
input12.title = "Russisk-dansk ordbog,  Русско-датский словарь";
input12.onclick = function(){suche('http://translate.academic.ru/?f=ru&t=da&stype=1&q=');return false;};

var input13 = document.createElement("input");
input13.type = "button";
input13.value = "Canoo (DE)";
input13.id = "inputordbog";
input13.title = "Deutsche Wörterbücher und Grammatik";
input13.onclick = function(){suche4('http://www.canoo.net/services/Controller?input=');return false;};

var input14 = document.createElement("input");
input14.type = "button";
input14.value = "OneLook (EN)";
input14.id = "inputordbog";
input14.title = "English Dictionary Search";
input14.onclick = function(){suche('http://www.onelook.com/?w=');return false;};

var input15 = document.createElement("input");
input15.type = "button";
input15.value = "pauker.at DE ⇔ DA";
input15.id = "inputordbog";
input15.title = "Deutsch/Dänisch, Tysk/Dansk";
input15.onclick = function(){suche('https://www.pauker.at/pauker/DE_DE/DA/wb/?modus=&page=1&suche=');return false;};

var input16 = document.createElement("input");
input16.type = "button";
input16.value = "bab.la EN ⇔ DA";
input16.id = "inputordbog";
input16.title = "English/Danish, Engelsk/Dansk";
input16.onclick = function(){suche('http://da.bab.la/ordbog/dansk-engelsk/');return false;};

var input17 = document.createElement("input");
input17.type = "button";
input17.value = "Retskrivningsordbogen";
input17.title = "Dansk Sprognævn";
input17.id = "inputordbog";
input17.onclick = function(){suche('http://dsn.dk/ro/?regelid=%2Fretskrivning%2Fretskrivningsregler%2F&ae=0&retskriv=');return false;};

var input18 = document.createElement("input");
input18.type = "button";
input18.value = "Nye ord";
input18.id = "inputordbog";
input18.title = "Nye ord i Dansk 1955 til i dag";
input18.onclick = function(){suche('http://dsn.dk/noid/?q=');return false;};

var input19 = document.createElement("input");
input19.type = "button";
input19.value = "DDOO";
input19.id = "inputordbog";
input19.title = "Den Danske Online Ordbog";
input19.onclick = function(){suche4('http://www.ddoo.dk/orcapia.cms?aid=109&mode=1&w=');return false;};

var input20 = document.createElement("input");
input20.onclick = function(){suche("http://www.dict.com/Russisk-dansk/");return false;};
input20.value = "Lingea RU ⇔ DA";
input20.type = "button";
input20.id = "inputordbog";
//	#1 END	///////////////////

var divinnen = document.createElement('div');
divinnen.setAttribute("class", "ordbog-indhold");

var textluk = document.createTextNode('X');
var spanluk = document.createElement('span');
spanluk.setAttribute("class", "luk");
spanluk.appendChild(textluk);
divinnen.appendChild(spanluk);
divinnen.appendChild(ordbogform);

var spanoben = document.createElement('span');
spanoben.setAttribute("class", "oben");

var lupe = document.createElement('p');
lupe.setAttribute("class", "lupe");
lupe.setAttribute("title", "Indtast søgeord og klik på den ønskede ordbogstjeneste");
lupe.style.transform="rotate(45deg)"
var lupeinhalt = document.createTextNode('⚲');
lupe.appendChild(lupeinhalt);
spanoben.appendChild(lupe);
spanoben.appendChild(inddata);

var spantitle = document.createElement('span');
spantitle.setAttribute("class", "spantitle");
var texttitle = document.createTextNode('DA dicts');
spantitle.appendChild(texttitle);
spanoben.appendChild(spantitle);

var spansubtitle = document.createElement('p');
spansubtitle.setAttribute("class", "spansubtitle");
var textsubtitle = document.createTextNode('Danske ordbøger');
spansubtitle.appendChild(textsubtitle);
spanoben.appendChild(spansubtitle);
ordbogform.appendChild(spanoben);

//	#2: Call here the URLs which have been declared above.
ordbogform.appendChild(input2);
ordbogform.appendChild(input19);
ordbogform.appendChild(input1);
ordbogform.appendChild(input3);
ordbogform.appendChild(input17);
ordbogform.appendChild(input4);
ordbogform.appendChild(input5);
ordbogform.appendChild(input6);
ordbogform.appendChild(input7);
ordbogform.appendChild(input8);
ordbogform.appendChild(input9);
ordbogform.appendChild(input18);
ordbogform.appendChild(input10);
ordbogform.appendChild(input15);
ordbogform.appendChild(input13);
ordbogform.appendChild(input20);
ordbogform.appendChild(input11);
ordbogform.appendChild(input12);
ordbogform.appendChild(input16);
ordbogform.appendChild(input14);
//	#2 END	///////////////////

var linktitle = document.createElement('a');
linktitle.setAttribute("class", "linktitle");
var linktitletext = document.createTextNode("dokumentation / andre ordbøger");
linktitle.appendChild(linktitletext);
linktitle.title = "Flere informationer om dette og andre ordbogbookmarklets";
linktitle.href = "https://podolak.net/en/studies/dictionary/bookmarklets";
linktitle.target = "_blank";
ordbogform.appendChild(linktitle);
var divaussen = document.createElement('div');
divaussen.setAttribute("id", "ordbog");
divaussen.appendChild(divinnen);
document.body.appendChild(divaussen);
var ordbog = document.getElementById('ordbog');
var ordbogspan = document.getElementsByClassName("luk")[0];
ordbog.style.display = "block";

ordbogspan.onclick = function() {
	var elem = document.getElementById("ordbog"); elem.parentNode.removeChild(elem);
}

window.onclick = function(event) {
	if (event.target == ordbog) {
		var elem = document.getElementById("ordbog"); elem.parentNode.removeChild(elem);
	}
}
