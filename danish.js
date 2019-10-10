// Danish dictionary bookmarklet
// V 1.0 - 2016-08-04
// V 1.1 - 2016-01-09: new minimize function, enlarge input field option
// V 1.2 - 2017-01-10: minor adjustments for highlighted text, prevent multiple load of script
// V 1.3 - 2019-10-10: About 10 new dictionaries, address updates, bugfixes
// Read more: https://podolak.net/en/bookmarklets
// Author: Martin Podolak
// Contact: www.podolak.net
// This work is licensed under the GNU General Public License v3.0

if(!document.getElementById("ordbogform"))
{

sc = document.getElementsByTagName("script");
for(idx = 0; idx < sc.length; idx++)
{
 s = sc.item(idx);
 if(s.src && s.src.match(/danish\.js$/))
 {
	var ordbogurl =s.src;
	ordbogurl = ordbogurl.replace("danish.js", "");
	}
}

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
loadjscssfile(ordbogurl+"style.css", "css")

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
	loadjscssfile(ordbogurl+"bigger.css", "css");
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
	loadjscssfile(ordbogurl+"bigger.css", "css");
	}

inddata.id="texto";
s=document.createElement('script');s.id='r6109_vkbsgp';s.type='text/javascript';s.src=ordbogurl+'keyboard.js?,true,false';document.body.appendChild(s);void(null);
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
input8.onclick = function(){suche4('http://sto.cst.sc.ku.dk/defisto/defisto?q=');return false;};

var input9 = document.createElement("input");
input9.type = "button";
input9.value = "STO sammensætning";
input9.id = "inputordbog";
input9.title = "Sprogteknologisk orddatabase over det danske sprog";
input9.onclick = function(){suche4('http://sto.cst.sc.ku.dk/defisto/komposition?word1=');return false;};

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
input13.onclick = function(){suche4('http://www.canoonet.eu/services/Controller?input=');return false;};

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
input20.title = "Russisk-dansk ordbog,  Русско-датский словарь";
input20.type = "button";
input20.id = "inputordbog";

var input21 = document.createElement("input");
input21.onclick = function(){suche("https://mothsordbog.dk/ordbog?query=");return false;};
input21.value = "Moths Ordbog";
input21.title = "En ordbog fra omkring år 1700";
input21.type = "button";
input21.id = "inputordbog";

var input22 = document.createElement("input");
input22.onclick = function(){suche("https://holbergordbog.dk/ordbog?query=");return false;};
input22.value = "Holbergordbogen";
input22.title = "Hele Holbergs danske ordforråd";
input22.type = "button";
input22.id = "inputordbog";

var input23 = document.createElement("input");
input23.onclick = function(){suche("https://gammeldanskordbog.dk/ordbog?query=");return false;};
input23.value = "Gammeldansk Ordbog";
input23.title = "Det Danske Sprog- og Litteraturselskab";
input23.type = "button";
input23.id = "inputordbog";

var input24 = document.createElement("input");
input24.onclick = function(){suche("https://kalkarsordbog.dk/ordbog?query=");return false;};
input24.value = "Kalkars Ordbog";
input24.title = "Ordbog til det ældre danske Sprog (1300-1700)";
input24.type = "button";
input24.id = "inputordbog";

var input25 = document.createElement("input");
input25.onclick = function(){suche("https://latinskordbog.dk/ordbog?query=");return false;};
input25.value = "Latinsk-dansk Ordbog";
input25.title = "Jens Theodor Jensen og Martin Julius Goldschmidt, 1886";
input25.type = "button";
input25.id = "inputordbog";

var input26 = document.createElement("input");
input26.onclick = function(){suche("https://meyersfremmedordbog.dk/ordbog?query=");return false;};
input26.value = "Meyers Fremmedordbog";
input26.title = "Det Danske Sprog- og Litteraturselskab";
input26.type = "button";
input26.id = "inputordbog";

var input28 = document.createElement("input");
input28.onclick = function(){suche("https://sdo.dsl.dk/ordbog?query=");return false;};
input28.value = "Svensk-Dansk Ordbog";
input28.title = "Det Danske Sprog- og Litteraturselskab";
input28.type = "button";
input28.id = "inputordbog";

var input29 = document.createElement("input");
input29.onclick = function(){suche("https://www.dict.com/tysk-dansk/");return false;};
input29.value = "Lingea DE ⇔ DA";
input29.title = "Deutsch/Dänisch, Tysk/Dansk";
input29.type = "button";
input29.id = "inputordbog";

var input30 = document.createElement("input");
input30.onclick = function(){suche("https://www.dict.com/norsk-dansk/");return false;};
input30.value = "Lingea NO ⇔ DA";
input30.title = "Norsk/Dansk";
input30.type = "button";
input30.id = "inputordbog";

var input31 = document.createElement("input");
input31.onclick = function(){suche("https://www.dict.com/svensk-dansk/");return false;};
input31.value = "Lingea SV ⇔ DA";
input31.title = "Svensk/Dansk";
input31.type = "button";
input31.id = "inputordbog";

var input32 = document.createElement("input");
input32.onclick = function(){suche("https://www.dict.com/engelsk-dansk/");return false;};
input32.value = "Lingea EN ⇔ DA";
input32.title = "English/Danish, Engelsk/Dansk";
input32.type = "button";
input32.id = "inputordbog";

var input_transl1 = document.createElement("input");
input_transl1.type = "button";
input_transl1.value = "Google oversætter";
input_transl1.id = "inputordbog";
input_transl1.title = "oversæt input";
input_transl1.onclick = function(){suche('https://translate.google.com/?hl=&tab=TT&text=');return false;};

var input_transl2 = document.createElement("input");
input_transl2.type = "button";
input_transl2.value = "Google oversætter til hjemmesider";
input_transl2.id = "inputordbog";
input_transl2.title = "oversæt aktuel hjemmeside";
input_transl2.onclick = function(){window.open('https://translate.google.com/translate?&u='+window.location.href,'_blank');};

var input_transl3 = document.createElement("input");
input_transl3.type = "button";
input_transl3.value = "Yandex.Translate";
input_transl3.id = "inputordbog";
input_transl3.title = "oversæt input";
input_transl3.onclick = function(){suche('https://translate.yandex.com/?text=');return false;};

var input_transl4 = document.createElement("input");
input_transl4.type = "button";
input_transl4.value = "Yandex.Translate til hjemmesider";
input_transl4.id = "inputordbog";
input_transl4.title = "oversæt aktuel hjemmeside";
input_transl4.onclick = function(){suche('https://translate.yandex.com/translate?url='+window.location.href);return false;};
//	#1 END	///////////////////

var transl_title = document.createElement('div');
var transl_title_inhalt = document.createTextNode('Maskinoversættelse');
transl_title.setAttribute("class", "dictsubtitle");
transl_title.appendChild(transl_title_inhalt);

var ensprog_title = document.createElement('div');
var ensprog_title_inhalt = document.createTextNode('Ensproglige ordbøger');
ensprog_title.setAttribute("class", "dictsubtitle");
ensprog_title.appendChild(ensprog_title_inhalt);

var historisk_title = document.createElement('div');
var historisk_title_inhalt = document.createTextNode('(Sprog-)historiske ordbøger');
historisk_title.setAttribute("class", "dictsubtitle");
historisk_title.appendChild(historisk_title_inhalt);

var tosprog_title = document.createElement('div');
var tosprog_title_inhalt = document.createTextNode('Tosproglige ordbøger');
tosprog_title.setAttribute("class", "dictsubtitle");
tosprog_title.appendChild(tosprog_title_inhalt);

var andresprog_title = document.createElement('div');
var andresprog_title_inhalt = document.createTextNode('Andre sprog');
andresprog_title.setAttribute("class", "dictsubtitle");
andresprog_title.appendChild(andresprog_title_inhalt);

var divinnen = document.createElement('div');
divinnen.setAttribute("class", "ordbog-indhold");

var textluk = document.createTextNode('×');
var spanluk = document.createElement('span');
spanluk.setAttribute("class", "luk");
spanluk.title ="Luk vinduet (sletter alt input)";
spanluk.appendChild(textluk);
divinnen.appendChild(spanluk);
divinnen.appendChild(ordbogform);

var textminimer = document.createTextNode('_');
var spanminimer = document.createElement('span');
spanminimer.setAttribute("class", "minimer");
spanminimer.title ="Formindsk vinduet (beholder input)";
spanminimer.appendChild(textminimer);
divinnen.appendChild(spanminimer);
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

var button1 = document.createElement('input');
button1.type = "button";
button1.value = "forstør";
button1.id = "inputordbog";
button1.setAttribute("class", "bigger");
button1.title = "Dette forstørrer inputvinduet";
button1.setAttribute("onclick", "bigger2()");
spanoben.appendChild(button1);

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

function bigger2() {
	loadjscssfile(ordbogurl+"bigger.css", "css");
	}

//	#2: Call here the URLs which have been declared above.
ordbogform.appendChild(ensprog_title);
ordbogform.appendChild(input2);
ordbogform.appendChild(input19);
ordbogform.appendChild(input1);
ordbogform.appendChild(input17);
ordbogform.appendChild(input4);
ordbogform.appendChild(input5);
ordbogform.appendChild(input8);
ordbogform.appendChild(input9);
ordbogform.appendChild(input18);
ordbogform.appendChild(historisk_title);
ordbogform.appendChild(input3);
ordbogform.appendChild(input6);
ordbogform.appendChild(input7);
ordbogform.appendChild(input21);
ordbogform.appendChild(input22);
ordbogform.appendChild(input23);
ordbogform.appendChild(input24);
ordbogform.appendChild(input25);
ordbogform.appendChild(input26);
ordbogform.appendChild(tosprog_title);
ordbogform.appendChild(input10);
ordbogform.appendChild(input29);
ordbogform.appendChild(input15);
ordbogform.appendChild(input20);
ordbogform.appendChild(input11);
ordbogform.appendChild(input12);
ordbogform.appendChild(input16);
ordbogform.appendChild(input32);
ordbogform.appendChild(input31);
ordbogform.appendChild(input28);
ordbogform.appendChild(input30);
ordbogform.appendChild(andresprog_title);
ordbogform.appendChild(input14);
ordbogform.appendChild(input13);
ordbogform.appendChild(transl_title);
ordbogform.appendChild(input_transl1);
ordbogform.appendChild(input_transl2);
ordbogform.appendChild(input_transl3);
ordbogform.appendChild(input_transl4);




//	#2 END	///////////////////

var linktitle = document.createElement('a');
linktitle.setAttribute("class", "linktitle");
var linktitletext = document.createTextNode("dokumentation / andre ordbøger");
linktitle.appendChild(linktitletext);
linktitle.title = "Flere informationer om dette og andre ordbogbookmarklets";
linktitle.href = "https://podolak.net/da/bookmarklets";
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
divaussenkleina.title = "Klik for at genetabler ordbogsvinduet";
divaussenkleina.setAttribute("onmousedown", "display()");
divaussenklein.appendChild(divaussenkleina);
var divaussenkleintext = document.createTextNode("DA dicts");
divaussenkleina.appendChild(divaussenkleintext);
document.body.appendChild(divaussenklein);
var div = document.getElementById('ordbogklein');
div.style.display = 'none';


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
}

else
	{
	display();
	};

function display() {
	         if (window.getSelection)
    {
        inddata.value = window.getSelection();
             }
    else if (document.getSelection)
    {
        inddata.value = document.getSelection();
            }
    else if (document.selection)
    {
        inddata.value = document.selection.createRange().text;
            }
    else return;
    var div = document.getElementById('ordbog');
    if (div.style.display !== 'none') {
div.style.display = 'none';
	}
	    else {
div.style.display = 'block';
    }
    var div = document.getElementById('ordbogklein');
div.style.display = 'none';

 if (inddata.value.indexOf('\n') >= 0) {
	loadjscssfile(ordbogurl+"bigger.css", "css");
	}
}
