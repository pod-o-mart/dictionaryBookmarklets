// Old Church Slavonic dictionary bookmarklet
// Based on the Russian bookmarklet
// V 1.0 - 2018-05-20: With transliteration function
// V 1.1 - 2018-06-08: New dictionaries: academic.ru, Словарь древнерусского языка (XI—XIV вв.); numerals converter. Minor bugfixes
// V 1.2 - 2019-10-10: New keyboard codepage, dictionary address updates, minor bugfixes
// V 1.3 - 2019-10-11: Virtual keyboard automatically turned to OCS
// Read more: https://podolak.net/en/bookmarklets
// Author: Martin Podolak
// Contact: www.podolak.net
// This work is licensed under the GNU General Public License v3.0

var kblang = { lang : "\u{421}\u{43B}\u{43E}\u{432}\u{463}\u{43D}\u{44C}\u{441}\u{43A}\u{44A}" };
if(!document.getElementById("ordbogform"))
{

sc = document.getElementsByTagName("script");
for(idx = 0; idx < sc.length; idx++)
{
 s = sc.item(idx);
 if(s.src && s.src.match(/ocs\.js$/))
 {
	var ordbogurl =s.src;
	ordbogurl = ordbogurl.replace("ocs.js", "");
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

win1251 = { 1040: "%C0", 1041: "%C1", 1042: "%C2", 1043: "%C3", 1044: "%C4", 1045: "%C5", 1046: "%C6", 1047: "%C7", 1048: "%C8", 1049: "%C9", 1050: "%CA", 1051: "%CB", 1052: "%CC", 1053: "%CD", 1054: "%CE", 1055: "%CF", 1056: "%D0", 1057: "%D1", 1058: "%D2", 1059: "%D3", 1060: "%D4", 1061: "%D5", 1062: "%D6", 1063: "%D7", 1064: "%D8", 1065: "%D9", 1066: "%DA", 1067: "%DB", 1068: "%DC", 1069: "%DD", 1070: "%DE", 1071: "%DF", 1072: "%E0", 1073: "%E1", 1074: "%E2", 1075: "%E3", 1076: "%E4", 1077: "%E5", 1078: "%E6", 1079: "%E7", 1080: "%E8", 1081: "%E9", 1082: "%EA", 1083: "%EB", 1084: "%EC", 1085: "%ED", 1086: "%EE", 1087: "%EF", 1088: "%F0", 1089: "%F1", 1090: "%F2", 1091: "%F3", 1092: "%F4", 1093: "%F5", 1094: "%F6", 1095: "%F7", 1096: "%F8", 1097: "%F9", 1098: "%FA", 1099: "%FB", 1100: "%FC", 1101: "%FD",  1102: "%FE", 1103: "%FF", 32: " ", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 97: "a", 98: "b", 99: "c", 100: "d", 101: "e", 102: "f", 103: "g", 104: "h", 105: "i", 106: "j", 107: "k", 108: "l", 109: "m", 110: "n", 111: "o", 112: "p", 113: "q", 114: "r", 115: "s", 116: "t", 117: "u", 118: "v", 119: "w", 120: "x", 121: "y", 122: "z", '':'' }

// function for pages with charset UTF-8
function suche (id){
konvertiert = encodeURI(document.ordbogform.texto.value);
window.open(id+ konvertiert,'_blank');}

// function for pages with charset windows-1251 or ISO-8859-5
function suche3(id) {
  var texto;
  var ordbogform;
  var o_text = document.ordbogform.texto.value;
  var i;
  var out="";
  var debug="";
  var oldchar;
  var newchar;
  for (i=0; i<o_text.length; i++) {
    oldchar = o_text.charCodeAt(i);
    newchar = win1251[oldchar];
    if (newchar==undefined) {
        newchar = oldchar
    } 
    out=out+String(newchar)
  }
  document.ordbogform.texto.value = out;
  window.open(id+ document.ordbogform.texto.value,'_blank');
  document.ordbogform.texto.value = o_text;
}

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
s=document.createElement('script');s.id='r6109_vkbsgp';s.type='text/javascript';s.src=ordbogurl+'keyboard-slav.js?,true,false';document.body.appendChild(s);void(null);
inddata.setAttribute("class", "keyboardInput");
inddata.value =t;
inddata.id="texto";

//	#1: The URLs. Be aware of the ascending numbering and do not forget to call them below at #2

var input18 = document.createElement("input");
input18.value = 'Словарь древнерусского языка (XI-XIV вв.)';
input18.title = "@Академик.ru";
input18.type = "button";
input18.id = "inputordbog";
input18.onclick = function(){suche('http://dic.academic.ru/searchall.php?s=1&d=1&SWord=');return false;};

var input19 = document.createElement("input");
input19.onclick = function(){suche("http://oesteuropastudier.dk/ordbog/index.php?a=srch&source=opensearch&q=");return false;};
input19.value = "oesteuropastudier.dk";
input19.title = "";
input19.type = "button";
input19.id = "inputordbog";

var input20 = document.createElement("input");
input20.onclick = function(){suche("http://www.orthodic.org/?searchCs=&go.x=0&go.y=0&type=ru&searchRu=");return false;};
input20.value = "Orthodic RU ⇒ OCS";
input20.title = "";
input20.type = "button";
input20.id = "inputordbog";

var input21 = document.createElement("input");
input21.onclick = function(){suche("http://www.orthodic.org/?searchRu=&go.x=0&go.y=0&type=cs&searchCs=");return false;};
input21.value = "Orthodic OCS ⇒ RU";
input21.title = "";
input21.type = "button";
input21.id = "inputordbog";

var input22 = document.createElement("input");
input22.onclick = function(){suche("http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\vasmer\\vasmer&first=1&off=&method_word=beginning&ic_word=on&text_general=&method_general=substring&ic_general=on&text_origin=&method_origin=substring&ic_origin=on&text_trubachev=&method_trubachev=substring&ic_trubachev=on&text_editorial=&method_editorial=substring&ic_editorial=on&text_pages=&method_pages=substring&ic_pages=on&text_any=&method_any=substring&sort=word&ic_any=on&text_word=");return false;};
input22.value = "Vasmer / Фасмер";
input22.title = "";
input22.type = "button";
input22.id = "inputordbog";

var input23 = document.createElement("input");
input23.onclick = function(){suche3("http://etymolog.ruslang.ru/index.php?wildcards=checked&act=search&vasmer=checked&chernykh=checked&vinogradov=checked&wordhist=checked&novoe=checked&etymology=checked&word=");return false;};
input23.value = "Этимология.ruslang.ru";
input23.title = "";
input23.type = "button";
input23.id = "inputordbog";

var input24 = document.createElement("input");
input24.onclick = function(){suche("http://www.nevmenandr.net/slovo/cword.php?w=");return false;};
input24.value = "«Слово о полку Игореве» - Параллельный корпус";
input24.title = "";
input24.type = "button";
input24.id = "inputordbog";

var input27 = document.createElement("input");
input27.onclick = function(){suche("http://search1.ruscorpora.ru/search.xml?mode=orthlib&text=lexgramm&sort=gr_created&lang=ru&f=fi&formi1=");return false;};
input27.value = "НКР: Церковнославянский";
input27.title = "Национальный корпус русского языка";
input27.type = "button";
input27.id = "inputordbog";

var input28 = document.createElement("input");
input28.onclick = function(){suche("http://search1-beta.ruscorpora.ru/search.xml?mode=old_rus&text=lexgramm&sort=gr_created&lang=ru&doc_docid=1|16|7|4|2|5|3|6|10|11|13|0|15|8|14|12|9&f=fi&formi1=");return false;};
input28.value = "НКР: Древнерусский";
input28.title = "Национальный корпус русского языка";
input28.type = "button";
input28.id = "inputordbog";

var input29 = document.createElement("input");
input29.onclick = function(){suche("http://search1.ruscorpora.ru/search.xml?env=alpha&mode=mid_rus&text=lexform&sort=gr_created&lang=ru&mycorp=&mysent=&mysize=&mysentsize=&mydocsize=&dpp=&spp=&spd=&req=");return false;};
input29.value = "НКР: Старорусский";
input29.title = "Национальный корпус русского языка";
input29.type = "button";
input29.id = "inputordbog";

var input30 = document.createElement("input");
input30.onclick = function(){suche("http://search1-beta.ruscorpora.ru/search.xml?mode=birchbark&text=lexgramm&sort=gr_birchbark&lang=ru&expand=full&f=fi&doc_g_created=&doc_l_created=&formi1=");return false;};
input30.value = "НКР: Берестяные грамоты";
input30.title = "Национальный корпус русского языка";
input30.type = "button";
input30.id = "inputordbog";

var input31 = document.createElement("input");
input31.onclick = function(){suche("http://syntacticus.org/tokens?form=");return false;};
input31.value = "Syntacticus";
input31.title = "Treebank of early Indo-European languages";
input31.type = "button";
input31.id = "inputordbog";

var input25 = document.createElement("input");
input25.onclick = function(){suche("http://dic.feb-web.ru/rusdict/search/search.php?dictid[]=1&dictid[]=2&sem=&sample=&text=&pagesize=50&page=1&title=");return false;};
input25.value = "СЦРЯ / САР-1: Заголовочное слово";
input25.title = "Словарь Академии Российской (САР-1) и Словарь церковно-славянского и русского языка (СЦРЯ)";
input25.type = "button";
input25.id = "inputordbog";

var input26 = document.createElement("input");
input26.onclick = function(){suche("http://dic.feb-web.ru/rusdict/search/search.php?dictid[]=1&dictid[]=2&title=&sample=&text=&pagesize=50&page=1&sem=");return false;};
input26.value = "СЦРЯ / САР-1: Толкование";
input26.title = "Словарь Академии Российской (САР-1) и Словарь церковно-славянского и русского языка (СЦРЯ)";
input26.type = "button";
input26.id = "inputordbog";

var input60 = document.createElement("input");
input60.value = 'WebmorphOCS Paradigm';
input60.title = "Online Old Church Slavonic morphology - Full paradigm from infinitive verbs, nouns and adjectives";
input60.type = "button";
input60.id = "inputordbog";
input60.onclick = function(){suche("http://rhssl1.uni-regensburg.de:8080/OCS/search?gimmePar=Give%2Bme%2Bthe%2Bfull%2Bparadigm!&mypos=Analysis&query=");return false;};

var input61 = document.createElement("input");
input61.value = 'WebmorphOCS Analysis';
input61.title = "Online Old Church Slavonic morphology - Analysis of verbs, nouns and adjectives";
input61.type = "button";
input61.id = "inputordbog";
input61.onclick = function(){suche("http://rhssl1.uni-regensburg.de:8080/OCS/search?gimmeAna=Give%2Bme%2Bthe%2Banalysis%21&anaQuery=");return false;};


//	#1 END	///////////////////

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
spanminimer.title ="Minimize dictionaries window to the upper right corner (keeps input)";
spanminimer.appendChild(textminimer);
divinnen.appendChild(spanminimer);
divinnen.appendChild(ordbogform);

var spanoben = document.createElement('span');
spanoben.setAttribute("class", "oben");

var lupe = document.createElement('p');
lupe.setAttribute("class", "lupe");
lupe.setAttribute("title", "Input / Ввод ключевого слова");
lupe.style.transform="rotate(45deg)"
var lupeinhalt = document.createTextNode('⚲');
lupe.appendChild(lupeinhalt);
spanoben.appendChild(lupe);
spanoben.appendChild(inddata);

var button1 = document.createElement('input');
button1.type = "button";
button1.value = "enlarge / увеличить";
button1.id = "inputordbog";
button1.setAttribute("class", "bigger");
button1.title = "This will enlarge the input field";
button1.setAttribute("onclick", "bigger2()");
spanoben.appendChild(button1);

var spantitle = document.createElement('span');
spantitle.setAttribute("class", "spantitle");
var texttitle = document.createTextNode('OCS dicts');
spantitle.appendChild(texttitle);

var spansubtitle = document.createElement('p');
spansubtitle.setAttribute("class", "spansubtitle");
spansubtitle.setAttribute("style", "text-decoration:underline;");
var textsubtitle = document.createTextNode('Old Church Slavonic dictionaries / Словари старославянского языка');
spansubtitle.appendChild(textsubtitle);

var ueberschrift = document.createElement('div');
ueberschrift.setAttribute("style", "display:inline;");
ueberschrift.appendChild(spantitle);
var unterschriftbr = document.createElement('br');
ueberschrift.appendChild(unterschriftbr);


spanoben.appendChild(ueberschrift);
spanoben.appendChild(spansubtitle);
ordbogform.appendChild(spanoben);

var transliteration_title = document.createElement('div');
var transliteration_title_inhalt = document.createTextNode('Transliteration / Транслитерация');
transliteration_title.setAttribute("class", "dictsubtitle");
transliteration_title.appendChild(transliteration_title_inhalt);

var historisk_ordbog_title = document.createElement('div');
var historisk_ordbog_title_inhalt = document.createTextNode('Lexical Dictionaries / Лексические словари');
historisk_ordbog_title.setAttribute("class", "dictsubtitle");
historisk_ordbog_title.appendChild(historisk_ordbog_title_inhalt);

var grammatik_title = document.createElement('div');
var grammatik_title_inhalt = document.createTextNode('Grammatical Dictionaries / Грамматические словари');
grammatik_title.setAttribute("class", "dictsubtitle");
grammatik_title.appendChild(grammatik_title_inhalt);

var korpora_title = document.createElement('div');
var korpora_title_inhalt = document.createTextNode('Corpora / Корпусы');
korpora_title.setAttribute("class", "dictsubtitle");
korpora_title.appendChild(korpora_title_inhalt);


var numerals_title = document.createElement('div');
var numerals_title_inhalt = document.createTextNode('OCS Numerals / Преобразование старославянских числительных');
numerals_title.setAttribute("class", "dictsubtitle");
numerals_title.style=('display:inline;');
numerals_title.appendChild(numerals_title_inhalt);

var br = document.createElement('br');
var br2 = document.createElement('br');
var br3 = document.createElement('br');
//input
var translitinput = document.createElement('select');
translitinput.setAttribute("id", "translitinput");
translitinput.setAttribute("name", "translitinput");

var translitinputgroup = document.createElement('optgroup');
translitinputgroup.setAttribute("label", "Source: ");
translitinput.appendChild(translitinputgroup);

var translitinputoption1 = document.createElement('option');
translitinputoption1.setAttribute("value", "cu");
var translitinputoption1text = document.createTextNode('Old Church Slavonic Cyrillic (before 1700)');
translitinputoption1.appendChild(translitinputoption1text);
translitinput.appendChild(translitinputoption1);

var translitinputoption2 = document.createElement('option');
translitinputoption2.setAttribute("value", "isor9");
var translitinputoption2text = document.createTextNode('Scientific (ISO R9-based)');
translitinputoption2.appendChild(translitinputoption2text);
translitinput.appendChild(translitinputoption2);

var translitinputoption3 = document.createElement('option');
translitinputoption3.setAttribute("value", "alalc");
var translitinputoption3text = document.createTextNode('Library of Congress (ALA-LC)');
translitinputoption3.appendChild(translitinputoption3text);
translitinput.appendChild(translitinputoption3);

var translitinputoption4 = document.createElement('option');
translitinputoption4.setAttribute("value", "hip");
var translitinputoption4text = document.createTextNode('Hyperinvariant Presentation (HIP)');
translitinputoption4.appendChild(translitinputoption4text);
translitinput.appendChild(translitinputoption4);

var translitinputoption5 = document.createElement('option');
translitinputoption5.setAttribute("value", "ucs");
var translitinputoption5text = document.createTextNode('Unified Church Slavonic (UCS)');
translitinputoption5.appendChild(translitinputoption5text);
translitinput.appendChild(translitinputoption5);

// output
var translitoutput = document.createElement('select');
translitoutput.setAttribute("id", "translitoutput");
translitoutput.setAttribute("name", "translitoutput");

var translitoutputgroup = document.createElement('optgroup');
translitoutputgroup.setAttribute("label", "Target: ");
translitoutput.appendChild(translitoutputgroup);

var translitoutputoptionx = document.createElement('option');
translitoutputoptionx.setAttribute("value", "");
var translitoutputoptionxtext = document.createTextNode(' --- choose --- ');
translitoutputoptionx.appendChild(translitoutputoptionxtext);
translitoutput.appendChild(translitoutputoptionx)

var translitoutputoption1 = document.createElement('option');
translitoutputoption1.setAttribute("value", "cu");
var translitoutputoption1text = document.createTextNode('Old Church Slavonic Cyrillic (before 1700)');
translitoutputoption1.appendChild(translitoutputoption1text);
translitoutput.appendChild(translitoutputoption1);

var translitoutputoption2 = document.createElement('option');
translitoutputoption2.setAttribute("value", "ru_1700_1918");
var translitoutputoption2text = document.createTextNode('Russian Cyrillic (normalised, 1700-1918)');
translitoutputoption2.appendChild(translitoutputoption2text);
translitoutput.appendChild(translitoutputoption2);

var translitoutputoption3 = document.createElement('option');
translitoutputoption3.setAttribute("value", "iso9");
var translitoutputoption3text = document.createTextNode('Scientific (ISO R9-based)');
translitoutputoption3.appendChild(translitoutputoption3text);
translitoutput.appendChild(translitoutputoption3);

var translitoutputoption4 = document.createElement('option');
translitoutputoption4.setAttribute("value", "alalc");
var translitoutputoption4text = document.createTextNode('Library of Congress (ALA-LC)');
translitoutputoption4.appendChild(translitoutputoption4text);
translitoutput.appendChild(translitoutputoption4);
/*
var translitoutputoption5 = document.createElement('option');
translitoutputoption5.setAttribute("value", "hip");
var translitoutputoption5text = document.createTextNode('Hyperinvariant Presentation (HIP)');
translitoutputoption5.appendChild(translitoutputoption5text);
translitoutput.appendChild(translitoutputoption5);

var translitoutputoption6 = document.createElement('option');
translitoutputoption6.setAttribute("value", "ucs");
var translitoutputoption6text = document.createTextNode('Unified Church Slavonic (UCS)');
translitoutputoption6.appendChild(translitoutputoption6text);
translitoutput.appendChild(translitoutputoption6);
*/

var functiontranslit = document.createElement("form");
functiontranslit.setAttribute("action", "https://podolak.net/en/transliteration/old-church-slavonic");
functiontranslit.setAttribute("method", "post");
functiontranslit.setAttribute("target", "_blank");
functiontranslit.setAttribute("style", "display:inline;");
functiontranslit.appendChild(translitinput);
functiontranslit.appendChild(translitoutput);

var dictinput1a = document.createElement("input");
dictinput1a.name = "quelltext";
dictinput1a.type = "hidden";
dictinput1a.value = "cu";
translitinput.addEventListener('input', function () {
    dictinput1a.value = this.value;
});

var dictinput1b = document.createElement("input");
dictinput1b.name = "zieltext";
dictinput1b.type = "hidden";
translitoutput.addEventListener('input', function () {
    dictinput1b.value = this.value;
});

var dictinput1d = document.createElement("input");
dictinput1d.name = "text";
dictinput1d.type = "hidden";
dictinput1d.value = inddata.value;

inddata.addEventListener('change', function () {
    dictinput1d.value = this.value;
});


var dictinput1e = document.createElement("input");
dictinput1e.name = "startabfrage";
dictinput1e.type = "hidden";
dictinput1e.value = "1";

var dictinput1f = document.createElement("input");
dictinput1f.name = "bookmarklet";
dictinput1f.type = "hidden";
dictinput1f.value = "1";

var dictinput1c = document.createElement("input");
dictinput1c.name = "transliteration";
dictinput1c.value = "run / выполнить";
dictinput1c.title = "Transliteration of the text input according to selected input and output formats";
dictinput1c.type = "submit";
dictinput1c.id = "inputordbog";

functiontranslit.appendChild(dictinput1a);
functiontranslit.appendChild(dictinput1b);
functiontranslit.appendChild(dictinput1d);
functiontranslit.appendChild(dictinput1e);
functiontranslit.appendChild(dictinput1f);
functiontranslit.appendChild(dictinput1c);


var dictform1 = document.createElement("form");
dictform1.setAttribute("action", "http://prevodnik.gorazd.org/old-church-slavonic-numerals-converter");
dictform1.setAttribute("name", "formular");
dictform1.setAttribute("method", "post");
dictform1.setAttribute("target", "_blank");
dictform1.setAttribute("style", "display:inline;");
var dictform1a = document.createElement("input");
dictform1a.name = "vstup";
dictform1a.type = "hidden";
dictform1a.id = "text";

var dictform1b = document.createElement("input");
dictform1b.value = "Convert";
dictform1b.title = "Slovanský ústav AV ČR / Slavonic Institute of the Academy of Sciences of the Czech Republic‎";
dictform1b.type = "submit";
dictform1b.name = "tlacitko";
dictform1b.id = "inputordbog";
dictform1.appendChild(dictform1a);
dictform1.appendChild(dictform1b);

function bigger2() {
	loadjscssfile(ordbogurl+"bigger.css", "css");
	}

//	#2: Call here the URLs which have been declared above.
ordbogform.appendChild(transliteration_title);
ordbogform.appendChild(functiontranslit);
ordbogform.appendChild(br);
ordbogform.appendChild(numerals_title);
ordbogform.appendChild(dictform1);
ordbogform.appendChild(br2);
ordbogform.appendChild(historisk_ordbog_title);
ordbogform.appendChild(input19);
ordbogform.appendChild(input20);
ordbogform.appendChild(input21);
ordbogform.appendChild(input22);
ordbogform.appendChild(input23);
ordbogform.appendChild(input25);
ordbogform.appendChild(input26);
ordbogform.appendChild(input18);
//ordbogform.appendChild(grammatik_title);
//ordbogform.appendChild(input60);
//ordbogform.appendChild(input61);
ordbogform.appendChild(korpora_title);
ordbogform.appendChild(input27);
ordbogform.appendChild(input28);
ordbogform.appendChild(input29);
ordbogform.appendChild(input30);
ordbogform.appendChild(input24);
ordbogform.appendChild(input31);
ordbogform.appendChild(br3);



//	#2 END	///////////////////

var linktitle = document.createElement('a');
linktitle.setAttribute("class", "linktitle");
var linktitletext = document.createTextNode("documentation / other dictionaries");
linktitle.appendChild(linktitletext);
linktitle.title = "Get more information about this and other dictionary bookmarklets";
linktitle.href = "https://pod-o-mart.github.io/dictionaryBookmarklets";
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

/* Bookmarklet changing project
var linkrussian = document.createElement('p');
linkrussian.setAttribute("id", "linkrussian2");
var linkrussiantext = document.createTextNode("Change to Russian");
linkrussian.appendChild(linkrussiantext);
ordbogform.appendChild(linkrussian);

linkrussian.onclick = function(event) {
	var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():(document.selection&&document.selection.createRange)?document.selection.createRange().text:'';
if(t!='');
(function(d){
	var s=d.createElement('script');
		s.type='text/javascript';
		s.charset='utf-8';
		s.async=true;
		s.src='https://podolak.net/doc/bookmarklets/dicts/russian.js';
		d.body.appendChild(s);
		}
	(document));
	if (event.target == linkrussian) {
    var div = document.getElementById('ordbog');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
	}
	    else {
        div.style.display = 'block';
    }
	}
}
Bookmarklet changing project End*/

var divaussenklein = document.createElement('div');
divaussenklein.setAttribute("id", "ordbogklein");
var divaussenkleina = document.createElement('a');
divaussenkleina.title = "Click to restore dictionaries window";
divaussenkleina.setAttribute("onmousedown", "display()");
divaussenklein.appendChild(divaussenkleina);
var divaussenkleintext = document.createTextNode("OCS dicts");
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
        dictinput1d.value = inddata.value;
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

//dynamically update input values in forms
var texto = document.getElementById('texto')
var Text = document.getElementById('Text')

texto.addEventListener('input', function () {
    Text.value = this.value;
});

ordbogform.addEventListener('click', function () {
    dictform1a.value = inddata.value;
});
