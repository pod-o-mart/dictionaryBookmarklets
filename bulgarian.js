// Bulgarian and Macedonian dictionary bookmarklet
// V 1.0 - 2016-08-04
// V 1.1 - 2017-01-09: new minimize function, enlarge input field option
// V 1.2 - 2017-01-10: minor adjustments for highlighted text, prevent multiple load of script
// V 1.3 - 2019-10-10: Dictionary address updates
// V 1.4 - 2019-10-11: Virtual keyboard automatically turned to Bulgarian
// Read more: https://podolak.net/en/bookmarklets
// Author: Martin Podolak
// Contact: www.podolak.net
// This work is licensed under the GNU General Public License v3.0

var kblang = { lang : "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438" };
if(!document.getElementById("ordbogform"))
{

sc = document.getElementsByTagName("script");
for(idx = 0; idx < sc.length; idx++)
{
 s = sc.item(idx);
 if(s.src && s.src.match(/bulgarian\.js$/))
 {
	var ordbogurl =s.src;
	ordbogurl = ordbogurl.replace("bulgarian.js", "");
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
var input1 = document.createElement("input");
input1.type = "button";
input1.id = "inputordbog";
input1.value = "Речник на българския език (читанка)";
input1.onclick = function(){suche('https://rechnik.chitanka.info/w/');return false;};

var input2 = document.createElement("input");
input2.type = "button";
input2.value = "Граматичен речник";
input2.id = "inputordbog";
input2.title = "Институт за български език";
input2.onclick = function(){suche('http://dcl.bas.bg/est/dict.php?word=ходя&submit=');return false;};

var input3 = document.createElement("input");
input3.type = "button";
input3.value = "Граматичен анализ";
input3.id = "inputordbog";
input3.title = "Словоред.com";
input3.onclick = function(){suche('http://slovored.com/search/grammar/');return false;};

var input4 = document.createElement("input");
input4.type = "button";
input4.value = "dict.cc DE ⇔ BG";
input4.id = "inputordbog";
input4.onclick = function(){suche('http://bgde.dict.cc/?s=');return false;};

var input5 = document.createElement("input");
input5.type = "button";
input5.value = "dict.cc EN ⇔ BG";
input5.id = "inputordbog";
input5.onclick = function(){suche('http://enbg.dict.cc/?s=');return false;};

var input6 = document.createElement("input");
input6.type = "button";
input6.value = "Lingea DE ⇔ BG";
input6.id = "inputordbog";
input6.onclick = function(){suche('https://www.dict.com/немско-български/');return false;};

var input7 = document.createElement("input");
input7.type = "button";
input7.value = "Lingea EN ⇔ BG";
input7.id = "inputordbog";
input7.onclick = function(){suche('https://www.dict.com/англииско-български/');return false;};

var input8 = document.createElement("input");
input8.type = "button";
input8.value = "Речник на българския език (ИБЕ)";
input8.id = "inputordbog";
input8.title = "Институт за български език";
input8.onclick = function(){suche('http://ibl.bas.bg/rbe/lang/bg/');return false;};

var input9 = document.createElement("input");
input9.type = "button";
input9.value = "Синоними";
input9.id = "inputordbog";
input9.title = "Институт за български език";
input9.onclick = function(){suche('http://ibl.bas.bg/infolex/synonyms.php?word=');return false;};

var input10 = document.createElement("input");
input10.type = "button";
input10.value = "Антоними";
input10.id = "inputordbog";
input10.title = "Институт за български език";
input10.onclick = function(){suche('http://ibl.bas.bg/infolex/antonyms.php?word=');return false;};

var input11 = document.createElement("input");
input11.type = "button";
input11.value = "Фразеологизми";
input11.id = "inputordbog";
input11.title = "Институт за български език";
input11.onclick = function(){suche('http://ibl.bas.bg/infolex/idioms.php?word=');return false;};

var input12 = document.createElement("input");
input12.type = "button";
input12.value = "Неологизми";
input12.id = "inputordbog";
input12.title = "Институт за български език";
input12.onclick = function(){suche('http://ibl.bas.bg/infolex/neologisms.php?word=');return false;};

var input13 = document.createElement("input");
input13.type = "button";
input13.value = "Академика BG ⇒ RU";
input13.id = "inputordbog";
input13.onclick = function(){suche('http://translate.academic.ru/?f=bg&t=ru&stype=1&q=');return false;};

var input14 = document.createElement("input");
input14.type = "button";
input14.value = "Словоред EN ⇔ BG";
input14.id = "inputordbog";
input14.onclick = function(){suche('http://slovored.com/search/english/');return false;};

var input15 = document.createElement("input");
input15.type = "button";
input15.value = "БГжаргон.com";
input15.id = "inputordbog";
input15.onclick = function(){suche('http://www.bgjargon.com/word/meaning/');return false;};

var input18 = document.createElement("input");
input18.type = "button";
input18.value = "БГ Офис EN ⇔ BG";
input18.id = "inputordbog";
input18.onclick = function(){suche3('http://bgoffice.sourceforge.net/cgi-bin/obgoffice.cgi?dictionary=bg_en_dual&word=');return false;};

var input19 = document.createElement("input");
input19.type = "button";
input19.value = "Онлайн речник RU ⇔ BG";
input19.id = "inputordbog";
input19.onclick = function(){suche4('http://www.rechnik-bg.com/index_ru.php?word=');return false;};

var input20 = document.createElement("input");
input20.type = "button";
input20.value = "makedonisch.info MK ⇔ DE";
input20.id = "inputordbog";
input20.onclick = function(){suche('http://www.makedonisch.info/search/');return false;};

var input21 = document.createElement("input");
input21.type = "button";
input21.value = "off.net.mk MK ⇒ EN";
input21.id = "inputordbog";
input21.onclick = function(){suche('http://recnik.off.net.mk/recnik/makedonski-angliski/');return false;};

var input22 = document.createElement("input");
input22.type = "button";
input22.value = "off.net.mk EN ⇒ MK";
input22.id = "inputordbog";
input22.onclick = function(){suche('http://recnik.off.net.mk/recnik/angliski-makedonski/');return false;};

var input23 = document.createElement("input");
input23.type = "button";
input23.value = "off.net.mk DE ⇒ MK";
input23.id = "inputordbog";
input23.onclick = function(){suche('http://recnik.off.net.mk/recnik/germanski-makedonski/');return false;};

var input24 = document.createElement("input");
input24.type = "button";
input24.value = "off.net.mk MK ⇒ DE";
input24.id = "inputordbog";
input24.onclick = function(){suche('http://recnik.off.net.mk/recnik/makedonski-germanski/');return false;};

var input25 = document.createElement("input");
input25.type = "button";
input25.value = "off.net.mk Лексикон";
input25.title = "Македонски лексикон";
input25.id = "inputordbog";
input25.onclick = function(){suche('http://recnik.off.net.mk/recnik/makedonski-leksikon/');return false;};

var input26 = document.createElement("input");
input26.type = "button";
input26.value = "Дигитален речник";
input26.title = "Дигитален речник на македонскиот јазик";
input26.id = "inputordbog";
input26.onclick = function(){suche('https://makedonski.info/search/');return false;};

var input27 = document.createElement("input");
input27.type = "button";
input27.value = "Синоними";
input27.title = "Дигитален речник на македонскиот јазик";
input27.id = "inputordbog";
input27.onclick = function(){suche('https://makedonski.info/synonyms/show/');return false;};

var input17 = document.createElement("input");
input17.type = "button";
input17.value = "Корпус";
input17.title = "Дигитален речник на македонскиот јазик";
input17.id = "inputordbog";
input17.onclick = function(){suche('https://makedonski.info/literature/search/');return false;};

var input28 = document.createElement("input");
input28.type = "button";
input28.value = "Lingea RU ⇔ BG";
input28.id = "inputordbog";
input28.onclick = function(){suche('http://www.dict.com/Болгарско-русскии/');return false;};

var input29 = document.createElement("input");
input29.type = "button";
input29.value = "Lingea DA ⇔ BG";
input29.id = "inputordbog";
input29.onclick = function(){suche('http://www.dict.com/Bulgarsk-dansk/');return false;};

var input30 = document.createElement("input");
input30.type = "button";
input30.value = "Лајпцигски корпус";
input30.title = "Корпусна система на Лајпцигскијот университет";
input30.id = "inputordbog";
input30.onclick = function(){suche('http://corpora.uni-leipzig.de/en/res?corpusId=mkd_wikipedia_2010&word=');return false;};

var input31 = document.createElement("input");
input31.type = "button";
input31.value = "Лайпцигски корпус";
input31.title = "Корпусна система на Лайпцигският университет";
input31.id = "inputordbog";
input31.onclick = function(){suche('http://corpora.uni-leipzig.de/en/res?corpusId=bul_newscrawl_2011&word=');return false;};

var input32 = document.createElement("input");
input32.type = "button";
input32.value = "Речник на българския език 3";
input32.title = "Речник на българския език - отворен проект";
input32.id = "inputordbog";
input32.onclick = function(){suche3('http://physics-bg.org/z/?pid=2&wf=');return false;};

var input33 = document.createElement("input");
input33.type = "button";
input33.value = "Универсален речник";
input33.title = "Тълковен, правописен, синонимен и българо-английски речник на onlinerechnik.com";
input33.id = "inputordbog";
input33.onclick = function(){suche('http://www.onlinerechnik.com/duma/');return false;};

var input_hist1 = document.createElement("input");
input_hist1.onclick = function(){suche("http://oesteuropastudier.dk/ordbog/index.php?a=srch&source=opensearch&q=");return false;};
input_hist1.value = "oesteuropastudier.dk";
input_hist1.title = "";
input_hist1.type = "button";
input_hist1.id = "inputordbog";

var input_hist2 = document.createElement("input");
input_hist2.onclick = function(){suche("http://www.orthodic.org/?searchCs=&go.x=0&go.y=0&type=ru&searchRu=");return false;};
input_hist2.value = "Orthodic RU ⇒ OCS";
input_hist2.title = "";
input_hist2.type = "button";
input_hist2.id = "inputordbog";

var input_hist3 = document.createElement("input");
input_hist3.onclick = function(){suche("http://www.orthodic.org/?searchRu=&go.x=0&go.y=0&type=cs&searchCs=");return false;};
input_hist3.value = "Orthodic OCS ⇒ RU";
input_hist3.title = "";
input_hist3.type = "button";
input_hist3.id = "inputordbog";

var input_hist4 = document.createElement("input");
input_hist4.onclick = function(){suche("http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\vasmer\\vasmer&first=1&off=&method_word=beginning&ic_word=on&text_general=&method_general=substring&ic_general=on&text_origin=&method_origin=substring&ic_origin=on&text_trubachev=&method_trubachev=substring&ic_trubachev=on&text_editorial=&method_editorial=substring&ic_editorial=on&text_pages=&method_pages=substring&ic_pages=on&text_any=&method_any=substring&sort=word&ic_any=on&text_word=");return false;};
input_hist4.value = "Vasmer / Фасмер";
input_hist4.title = "";
input_hist4.type = "button";
input_hist4.id = "inputordbog";

var input_hist5 = document.createElement("input");
input_hist5.onclick = function(){suche3("http://etymolog.ruslang.ru/index.php?wildcards=checked&act=search&vasmer=checked&chernykh=checked&vinogradov=checked&wordhist=checked&novoe=checked&etymology=checked&word=");return false;};
input_hist5.value = "Этимология.ruslang.ru";
input_hist5.title = "";
input_hist5.type = "button";
input_hist5.id = "inputordbog";

var input_hist6 = document.createElement("input");
input_hist6.onclick = function(){suche("http://www.nevmenandr.net/slovo/cword.php?w=");return false;};
input_hist6.value = "«Слово о полку Игореве» - Параллельный корпус";
input_hist6.title = "";
input_hist6.type = "button";
input_hist6.id = "inputordbog";

var input_hist7 = document.createElement("input");
input_hist7.value = 'WebmorphOCS Paradigm';
input_hist7.title = "Online Old Church Slavonic morphology - Full paradigm from infinitive verbs, nouns and adjectives";
input_hist7.type = "button";
input_hist7.id = "inputordbog";
input_hist7.onclick = function(){suche("http://rhssl1.uni-regensburg.de:8080/OCS/search?gimmePar=Give%2Bme%2Bthe%2Bfull%2Bparadigm!&mypos=Analysis&query=");return false;};

var input_hist8 = document.createElement("input");
input_hist8.value = 'WebmorphOCS Analysis';
input_hist8.title = "Online Old Church Slavonic morphology - Analysis of verbs, nouns and adjectives";
input_hist8.type = "button";
input_hist8.id = "inputordbog";
input_hist8.onclick = function(){suche("http://rhssl1.uni-regensburg.de:8080/OCS/search?gimmeAna=Give%2Bme%2Bthe%2Banalysis%21&anaQuery=");return false;};

var input_transl1 = document.createElement("input");
input_transl1.type = "button";
input_transl1.value = "Google Translate";
input_transl1.id = "inputordbog";
input_transl1.title = "Google преводач";
input_transl1.onclick = function(){suche('https://translate.google.com/?hl=&tab=TT&text=');return false;};

var input_transl2 = document.createElement("input");
input_transl2.type = "button";
input_transl2.value = "Google Translate websites";
input_transl2.id = "inputordbog";
input_transl2.title = "Google преводач на сайта";
input_transl2.onclick = function(){window.open('https://translate.google.com/translate?&u='+window.location.href,'_blank');};

var input_transl3 = document.createElement("input");
input_transl3.type = "button";
input_transl3.value = "Yandex.Translate";
input_transl3.id = "inputordbog";
input_transl3.title = "Яндекс преводач";
input_transl3.onclick = function(){suche('https://translate.yandex.ru/?text=');return false;};

var input_transl4 = document.createElement("input");
input_transl4.type = "button";
input_transl4.value = "Yandex.Translate websites";
input_transl4.id = "inputordbog";
input_transl4.title = "Яндекс преводач на сайта";
input_transl4.onclick = function(){suche('https://translate.yandex.ru/translate?url='+window.location.href);return false;};
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
var texttitle = document.createTextNode('BG/MK dicts');
spantitle.appendChild(texttitle);
spanoben.appendChild(spantitle);

var spansubtitle = document.createElement('p');
spansubtitle.setAttribute("class", "spansubtitle");
var textsubtitle = document.createTextNode('Bulgarian and Macedonian Dictionaries / Български и македонски речници');
spansubtitle.appendChild(textsubtitle);
spanoben.appendChild(spansubtitle);
ordbogform.appendChild(spanoben);

var bg_title = document.createElement('div');
var bg_title_inhalt = document.createTextNode('Български едноезични речници');
bg_title.setAttribute("class", "dictsubtitle");
bg_title.appendChild(bg_title_inhalt);

var bg_multi_title = document.createElement('div');
var bg_multi_title_inhalt = document.createTextNode('Български многоезични речници / Bulgarian multilingual');
bg_multi_title.setAttribute("class", "dictsubtitle");
bg_multi_title.appendChild(bg_multi_title_inhalt);

var mk_title = document.createElement('div');
var mk_title_inhalt = document.createTextNode('Македонски еднојазични речници');
mk_title.setAttribute("class", "dictsubtitle");
mk_title.appendChild(mk_title_inhalt);

var mk_multi_title = document.createElement('div');
var mk_multi_title_inhalt = document.createTextNode('Македонски повеќејазични речници / Macedonian multilingual');
mk_multi_title.setAttribute("class", "dictsubtitle");
mk_multi_title.appendChild(mk_multi_title_inhalt);

var hist_title = document.createElement('div');
var hist_title_inhalt = document.createTextNode('Старославянски (исторически) речници / Старословенски (историски) речници / Slavic historical');
hist_title.setAttribute("class", "dictsubtitle");
hist_title.appendChild(hist_title_inhalt);

var mk_de = document.createElement('div');
var mk_de_inhalt = document.createTextNode('DE: ');
mk_de.setAttribute("class", "sprachindikator");
mk_de.appendChild(mk_de_inhalt);

var mk_en = document.createElement('div');
var mk_en_inhalt = document.createTextNode('EN: ');
mk_en.setAttribute("class", "sprachindikator");
mk_en.appendChild(mk_en_inhalt);

var bg_de = document.createElement('div');
var bg_de_inhalt = document.createTextNode('DE: ');
bg_de.setAttribute("class", "sprachindikator");
bg_de.appendChild(bg_de_inhalt);

var bg_en = document.createElement('div');
var bg_en_inhalt = document.createTextNode('EN: ');
bg_en.setAttribute("class", "sprachindikator");
bg_en.appendChild(bg_en_inhalt);

var bg_ru = document.createElement('div');
var bg_ru_inhalt = document.createTextNode('RU: ');
bg_ru.setAttribute("class", "sprachindikator");
bg_ru.appendChild(bg_ru_inhalt);

var bg_da = document.createElement('div');
var bg_da_inhalt = document.createTextNode('DA: ');
bg_da.setAttribute("class", "sprachindikator");
bg_da.appendChild(bg_da_inhalt);

var transl_title = document.createElement('div');
var transl_title_inhalt = document.createTextNode('Машинен превод / Machine translation');
transl_title.setAttribute("class", "dictsubtitle");
transl_title.appendChild(transl_title_inhalt);

var umbruch = document.createElement('br');
var umbruch2 = document.createElement('br');
var umbruch3 = document.createElement('br');
var umbruch4 = document.createElement('br');

function bigger2() {
	loadjscssfile(ordbogurl+"bigger.css", "css");
	}

//	#2: Call here the URLs which have been declared above.
ordbogform.appendChild(bg_title);
ordbogform.appendChild(input8);
ordbogform.appendChild(input1);
ordbogform.appendChild(input32);
ordbogform.appendChild(input33);
ordbogform.appendChild(input2);
ordbogform.appendChild(input3);
ordbogform.appendChild(input9);
ordbogform.appendChild(input10);
ordbogform.appendChild(input11);
ordbogform.appendChild(input12);
ordbogform.appendChild(input15);
ordbogform.appendChild(input31);
ordbogform.appendChild(bg_multi_title);
ordbogform.appendChild(bg_en);
ordbogform.appendChild(input7);
ordbogform.appendChild(input5);
ordbogform.appendChild(input14);
ordbogform.appendChild(input18);
ordbogform.appendChild(umbruch);
ordbogform.appendChild(bg_de);
ordbogform.appendChild(input6);
ordbogform.appendChild(input4);
ordbogform.appendChild(umbruch2);
ordbogform.appendChild(bg_ru);
ordbogform.appendChild(input28);
ordbogform.appendChild(input13);
//ordbogform.appendChild(input19);
ordbogform.appendChild(umbruch3);
ordbogform.appendChild(bg_da);
ordbogform.appendChild(input29);
ordbogform.appendChild(transl_title);
ordbogform.appendChild(input_transl1);
ordbogform.appendChild(input_transl2);
ordbogform.appendChild(input_transl3);
ordbogform.appendChild(input_transl4);
ordbogform.appendChild(mk_title);
ordbogform.appendChild(input25);
ordbogform.appendChild(input26);
ordbogform.appendChild(input27);
ordbogform.appendChild(input17);
ordbogform.appendChild(input30);
ordbogform.appendChild(mk_multi_title);
ordbogform.appendChild(mk_en);
ordbogform.appendChild(input22);
ordbogform.appendChild(input21);
ordbogform.appendChild(umbruch4);
ordbogform.appendChild(mk_de);
ordbogform.appendChild(input23);
ordbogform.appendChild(input24);
ordbogform.appendChild(input20);
ordbogform.appendChild(hist_title);
ordbogform.appendChild(input_hist1);
ordbogform.appendChild(input_hist2);
ordbogform.appendChild(input_hist3);
ordbogform.appendChild(input_hist4);
ordbogform.appendChild(input_hist5);
ordbogform.appendChild(input_hist6);
//ordbogform.appendChild(input_hist7);
//ordbogform.appendChild(input_hist8);

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
divaussenkleina.setAttribute("onmousedown", "display()");
divaussenklein.appendChild(divaussenkleina);
var divaussenkleintext = document.createTextNode("BG/MK dicts");
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

