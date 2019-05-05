// German dictionary bookmarklet V 1.0
// Published: 2016-08-11
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

var input_de0 = document.createElement("input");
input_de0.type = "button";
input_de0.value = "DWDS";
input_de0.id = "inputordbog";
input_de0.title = "Digitale Wörterbuch der deutschen Sprache";
input_de0.onclick = function(){suche4('http://www.dwds.de/?qu=');return false;};

var input_de1 = document.createElement("input");
input_de1.type = "button";
input_de1.value = "Canoo";
input_de1.id = "inputordbog";
input_de1.title = "Deutsche Wörterbücher und Grammatik";
input_de1.onclick = function(){suche4('http://www.canoo.net/services/Controller?input=');return false;};

var input_de2 = document.createElement("input");
input_de2.type = "button";
input_de2.value = "Duden";
input_de2.id = "inputordbog";
input_de2.onclick = function(){suche('http://www.duden.de/suchen/dudenonline/');return false;};

var input_de3 = document.createElement("input");
input_de3.type = "button";
input_de3.value = "OWID";
input_de3.id = "inputordbog";
input_de3.title = "Online-Wortschatz-Informationssystem Deutsch des Instituts für Deutsche Sprache (IDS)";
input_de3.onclick = function(){suche('http://www.owid.de/suche/wort?wort=');return false;};

var input_de4 = document.createElement("input");
input_de4.type = "button";
input_de4.value = "Pons DaF";
input_de4.id = "inputordbog";
input_de4.title = "Deutsch als Fremdsprache";
input_de4.onclick = function(){suche('http://de.pons.com/übersetzung?l=dedx&in=&lf=&q=');return false;};

var input_de5 = document.createElement("input");
input_de5.type = "button";
input_de5.value = "Wiktionary";
input_de5.id = "inputordbog";
input_de5.onclick = function(){suche('https://de.wiktionary.org/wiki/');return false;};

var input_de6 = document.createElement("input");
input_de6.type = "button";
input_de6.value = "OpenThesaurus";
input_de6.id = "inputordbog";
input_de6.title = "Synonyme";
input_de6.onclick = function(){suche('https://www.openthesaurus.de/synonyme/');return false;};

var input_de7 = document.createElement("input");
input_de7.type = "button";
input_de7.value = "Redensarten";
input_de7.id = "inputordbog";
input_de7.onclick = function(){suche('http://www.redensarten-index.de/suche.php?bool=relevanz&gawoe=an&suchspalte[]=rart_ou&suchspalte[]=rart_varianten_ou&suchbegriff=');return false;};

var input_korpus1 = document.createElement("input");
input_korpus1.type = "button";
input_korpus1.value = "LIMAS";
input_korpus1.id = "inputordbog";
input_korpus1.title = "Online-Wortschatz-Informationssystem Deutsch des Instituts für Deutsche Sprache (IDS)";
input_korpus1.onclick = function(){suche('https://korpora.zim.uni-duisburg-essen.de/cgi-bin/Limas/chkinput.pl?startpos=1&seite=einfach.htm&menge=20&kontextbreite=1&suchtext=');return false;};

var input_korpus2 = document.createElement("input");
input_korpus2.type = "button";
input_korpus2.value = "DTA";
input_korpus2.id = "inputordbog";
input_korpus2.title = "Deutsches Textarchiv";
input_korpus2.onclick = function(){suche('http://www.deutschestextarchiv.de/search?in=text&q=');return false;};

var input_korpus3 = document.createElement("input");
input_korpus3.type = "button";
input_korpus3.value = "Zeitungskorpus 2011";
input_korpus3.id = "inputordbog";
input_korpus3.title = "Wortschatzportal (Korpus) Uni Leipzig";
input_korpus3.onclick = function(){suche('http://corpora.informatik.uni-leipzig.de/de/res?corpusId=deu_newscrawl_2011&word=');return false;};

var input_korpus4 = document.createElement("input");
input_korpus4.type = "button";
input_korpus4.value = "Zeitungskorpus 2012";
input_korpus4.id = "inputordbog";
input_korpus4.title = "Wortschatzportal (Korpus) Uni Leipzig";
input_korpus4.onclick = function(){suche('http://corpora.informatik.uni-leipzig.de/de/res?corpusId=deu-na_newscrawl_2012&word=');return false;};

var input_en1 = document.createElement("input");
input_en1.type = "button";
input_en1.value = "dict.cc EN ⇔ DE";
input_en1.id = "inputordbog";
input_en1.onclick = function(){suche('http://www.dict.cc/?s=');return false;};

var input_en2 = document.createElement("input");
input_en2.type = "button";
input_en2.value = "Leo EN ⇔ DE";
input_en2.id = "inputordbog";
input_en2.onclick = function(){suche('http://dict.leo.org/ende/index_de.html#/search=');return false;};

var input_en3 = document.createElement("input");
input_en3.type = "button";
input_en3.value = "Pons EN ⇔ DE";
input_en3.id = "inputordbog";
input_en3.onclick = function(){suche('en.pons.com/translate?l=deen&q=');return false;};

var input_en4 = document.createElement("input");
input_en4.type = "button";
input_en4.value = "Beolingus EN ⇔ DE";
input_en4.id = "inputordbog";
input_en4.onclick = function(){suche('http://dict.tu-chemnitz.de/dings.cgi?service=deen&opterrors=0&optpro=0&query=');return false;};

var input_en5 = document.createElement("input");
input_en5.type = "button";
input_en5.value = "bab.la EN ⇔ DE";
input_en5.id = "inputordbog";
input_en5.onclick = function(){suche('http://de.bab.la/woerterbuch/deutsch-englisch/');return false;};

var input_en6 = document.createElement("input");
input_en6.type = "button";
input_en6.value = "Podge EN ⇔ DE";
input_en6.id = "inputordbog";
input_en6.title = "Terminologie / Terminology";
input_en6.onclick = function(){suche('http://www.en.podge.de/trans.php?p=en|de&q=');return false;};

var input_en7 = document.createElement("input");
input_en7.type = "button";
input_en7.value = "Phrases / Redewendungen EN ⇔ DE";
input_en7.id = "inputordbog";
input_en7.onclick = function(){suche4('http://www.phrasen.com/index.php?do=suche&q=');return false;};

var input_bg1 = document.createElement("input");
input_bg1.type = "button";
input_bg1.value = "dict.cc BG ⇔ DE";
input_bg1.id = "inputordbog";
input_bg1.onclick = function(){suche('http://bgde.dict.cc/?s=');return false;};

var input_bg2 = document.createElement("input");
input_bg2.type = "button";
input_bg2.value = "EuroDict BG ⇔ DE";
input_bg2.id = "inputordbog";
input_bg2.onclick = function(){suche('http://www.bulgariandictionary.com/search.php?go=Превод&ok=1&diction=ed_bg_de&lang=BG&word=');return false;};

var input_mk1 = document.createElement("input");
input_mk1.type = "button";
input_mk1.value = "makedonisch.info MK ⇔ DE";
input_mk1.id = "inputordbog";
input_mk1.onclick = function(){suche('http://www.makedonisch.info/search/');return false;};

var input_mk2 = document.createElement("input");
input_mk2.type = "button";
input_mk2.value = "off.net.mk DE ⇒ MK";
input_mk2.id = "inputordbog";
input_mk2.onclick = function(){suche('http://recnik.off.net.mk/recnik/germanski-makedonski/');return false;};

var input_mk3 = document.createElement("input");
input_mk3.type = "button";
input_mk3.value = "off.net.mk MK ⇒ DE";
input_mk3.id = "inputordbog";
input_mk3.onclick = function(){suche('http://recnik.off.net.mk/recnik/makedonski-germanski/');return false;};

var input_ru1 = document.createElement("input");
input_ru1.onclick = function(){suche("http://www.multitran.ru/c/m.exe?HL=2&l1=3&l2=2&s=");return false;};
input_ru1.value = "Multitran RU ⇔ DE";
input_ru1.title = "";
input_ru1.type = "button";
input_ru1.id = "inputordbog";

var input_ru2 = document.createElement("input");
input_ru2.onclick = function(){suche("http://www.lingvo-online.ru/en/Translate/de-ru/");return false;};
input_ru2.value = "Lingvo RU ⇔ DE";
input_ru2.title = "";
input_ru2.type = "button";
input_ru2.id = "inputordbog";

var input_ru3 = document.createElement("input");
input_ru3.onclick = function(){suche("http://lingvo.mail.ru/?lang_id=32775&translate=Найти&st=search&text=");return false;};
input_ru3.value = "Multilex RU ⇔ DE";
input_ru3.title = "";
input_ru3.type = "button";
input_ru3.id = "inputordbog";

var input_ru4 = document.createElement("input");
input_ru4.onclick = function(){suche("http://en.pons.eu/dict/search/results/?in=&l=deru&q=");return false;};
input_ru4.value = "Pons RU ⇔ DE";
input_ru4.title = "";
input_ru4.type = "button";
input_ru4.id = "inputordbog";

var input_ru5 = document.createElement("input");
input_ru5.onclick = function(){suche("http://dict.leo.org/rude?lp=rude&search=");return false;};
input_ru5.value = "LEO RU ⇔ DE";
input_ru5.title = "";
input_ru5.type = "button";
input_ru5.id = "inputordbog";

var input_ru6 = document.createElement("input");
input_ru6.onclick = function(){suche("http://www.ozali.org/deutsch-russisch/");return false;};
input_ru6.value = "Ozali RU ⇔ DE";
input_ru6.title = "";
input_ru6.type = "button";
input_ru6.id = "inputordbog";

var input_ru7 = document.createElement("input");
input_ru7.onclick = function(){suche("http://de.bab.la/woerterbuch/deutsch-russisch/");return false;};
input_ru7.value = "bab.la RU ⇔ DE";
input_ru7.title = "";
input_ru7.type = "button";
input_ru7.id = "inputordbog";

var input_ru8 = document.createElement("input");
input_ru8.onclick = function(){suche("http://deru.dict.cc/?s=");return false;};
input_ru8.value = "dict.cc RU ⇔ DE";
input_ru8.title = "";
input_ru8.type = "button";
input_ru8.id = "inputordbog";

var input_ru9 = document.createElement("input");
input_ru9.onclick = function(){suche("http://ru.podge.de/trans.php?p=ru|de&q=");return false;};
input_ru9.value = "Podge RU ⇔ DE";
input_ru9.title = "Terminologie / Терминология";
input_ru9.type = "button";
input_ru9.id = "inputordbog";

var input_ru10 = document.createElement("input");
input_ru10.onclick = function(){suche("http://www.ver-dict.ru/online/?base=0&dictionary=rg&word=");return false;};
input_ru10.value = "Promt RU ⇒ DE";
input_ru10.title = "";
input_ru10.type = "button";
input_ru10.id = "inputordbog";

var input_ru11 = document.createElement("input");
input_ru11.onclick = function(){suche("http://www.ver-dict.ru/online/?base=0&dictionary=gr&word=");return false;};
input_ru11.value = "Promt DE ⇒ RU";
input_ru11.title = "";
input_ru11.type = "button";
input_ru11.id = "inputordbog";

var input_ru12 = document.createElement("input");
input_ru12.onclick = function(){suche("http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\rugrte\\rugrte11&first=1&off=&text_type=&method_type=substring&ic_type=on&text_vochead=&method_vochead=substring&ic_vochead=on&text_etym=&method_etym=substring&ic_etym=on&text_content=&method_content=substring&ic_content=on&text_engl_term=&method_engl_term=substring&ic_engl_term=on&method_germ_term=substring&ic_germ_term=on&text_fran_term=&method_fran_term=substring&ic_fran_term=on&text_span_term=&method_span_term=substring&ic_span_term=on&text_esper_term=&method_esper_term=substring&ic_esper_term=on&text_syno=&method_syno=substring&ic_syno=on&text_anti=&method_anti=substring&ic_anti=on&text_correlat=&method_correlat=substring&ic_correlat=on&text_hyper=&method_hyper=substring&ic_hyper=on&text_hypo=&method_hypo=substring&ic_hypo=on&text_base=&method_base=substring&ic_base=on&text_deriv=&method_deriv=substring&ic_deriv=on&text_totum=&method_totum=substring&ic_totum=on&text_class=&method_class=substring&ic_class=on&text_combine=&method_combine=substring&ic_combine=on&text_illustr=&method_illustr=substring&ic_illustr=on&text_rus_exam=&method_rus_exam=substring&ic_rus_exam=on&text_engl_exam=&method_engl_exam=substring&ic_engl_exam=on&text_germ_exam=&method_germ_exam=substring&ic_germ_exam=on&text_fran_exam=&method_fran_exam=substring&ic_fran_exam=on&text_lat_exam=&method_lat_exam=substring&ic_lat_exam=on&text_span_exam=&method_span_exam=substring&ic_span_exam=on&text_etc_exam=&method_etc_exam=substring&ic_etc_exam=on&text_durnovo24_=&method_durnovo24_=substring&ic_durnovo24_=on&text_jakob_i=&method_jakob_i=substring&ic_jakob_i=on&text_jakob_p=&method_jakob_p=substring&ic_jakob_p=on&text_deut_term=&method_deut_term=substring&ic_deut_term=on&text_shax41page=&method_shax41page=substring&ic_shax41page=on&text_pesh56page=&method_pesh56page=substring&ic_pesh56page=on&text_karc28page=&method_karc28page=substring&ic_karc28page=on&text_karc00page=&method_karc00page=substring&ic_karc00page=on&text_karc04page=&method_karc04page=substring&ic_karc04page=on&text_pete23page=&method_pete23page=substring&ic_pete23page=on&text_pete25page=&method_pete25page=substring&ic_pete25page=on&text_avsid45=&method_avsid45=substring&ic_avsid45=on&text_not10=&method_not10=substring&ic_not10=on&text_nota1=&method_nota1=substring&ic_nota1=on&text_nota2=&method_nota2=substring&ic_nota2=on&text_nota3=&method_nota3=substring&ic_nota3=on&text_nota4=&method_nota4=substring&ic_nota4=on&text_nota5=&method_nota5=substring&ic_nota5=on&text_any=&method_any=substring&sort=type&ic_any=on&text_germ_term=");return false;};
input_ru12.value = "Крылов / Krylov DE ⇒ RU";
input_ru12.title = "Справочник по метаязыку русских грамматистов первой половины XX века / Linguistische Terminologie";
input_ru12.type = "button";
input_ru12.id = "inputordbog";

var input_ru13 = document.createElement("input");
input_ru13.onclick = function(){suche("http://simpledict.com/en/");return false;};
input_ru13.value = "Simple Dictionary EN ⇔ RU ⇔ DE";
input_ru13.title = "";
input_ru13.type = "button";
input_ru13.id = "inputordbog";

var input_da1 = document.createElement("input");
input_da1.type = "button";
input_da1.value = "dict.cc DA ⇔ DE";
input_da1.id = "inputordbog";
input_da1.title = "Deutsch/Dänisch, Tysk/Dansk";
input_da1.onclick = function(){suche('http://deda.dict.cc/?s=');return false;};

var input_da2 = document.createElement("input");
input_da2.type = "button";
input_da2.value = "pauker.at DA ⇔ DE";
input_da2.id = "inputordbog";
input_da2.title = "Deutsch/Dänisch, Tysk/Dansk";
input_da2.onclick = function(){suche('https://www.pauker.at/pauker/DE_DE/DA/wb/?modus=&page=1&suche=');return false;};



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
lupe.setAttribute("title", "Suchbegriff eintragen oder ändern");
lupe.style.transform="rotate(45deg)"
var lupeinhalt = document.createTextNode('⚲');
lupe.appendChild(lupeinhalt);
spanoben.appendChild(lupe);
spanoben.appendChild(inddata);

var spantitle = document.createElement('span');
spantitle.setAttribute("class", "spantitle");
var texttitle = document.createTextNode('DE dicts');
spantitle.appendChild(texttitle);
spanoben.appendChild(spantitle);

var spansubtitle = document.createElement('p');
spansubtitle.setAttribute("class", "spansubtitle");
var textsubtitle = document.createTextNode('Deutsche Wörterbücher / German Dictionaries');
spansubtitle.appendChild(textsubtitle);
spanoben.appendChild(spansubtitle);
ordbogform.appendChild(spanoben);

var de_title = document.createElement('div');
var de_title_inhalt = document.createTextNode('Deutsche einsprachige Wörterbücher');
de_title.setAttribute("class", "dictsubtitle");
de_title.appendChild(de_title_inhalt);

var de_multi_title = document.createElement('div');
var de_multi_title_inhalt = document.createTextNode('Deutsche mehrsprachige Wörterbücher / German multilingual');
de_multi_title.setAttribute("class", "dictsubtitle");
de_multi_title.appendChild(de_multi_title_inhalt);

var corpora_title = document.createElement('div');
var corpora_title_inhalt = document.createTextNode('Korpora');
corpora_title.setAttribute("class", "dictsubtitle");
corpora_title.appendChild(corpora_title_inhalt);

var de_mk = document.createElement('div');
var de_mk_inhalt = document.createTextNode('MK: ');
de_mk.setAttribute("class", "sprachindikator");
de_mk.appendChild(de_mk_inhalt);

var de_en = document.createElement('div');
var de_en_inhalt = document.createTextNode('EN: ');
de_en.setAttribute("class", "sprachindikator");
de_en.appendChild(de_en_inhalt);

var de_bg = document.createElement('div');
var de_bg_inhalt = document.createTextNode('BG: ');
de_bg.setAttribute("class", "sprachindikator");
de_bg.appendChild(de_bg_inhalt);

var de_ru = document.createElement('div');
var de_ru_inhalt = document.createTextNode('RU: ');
de_ru.setAttribute("class", "sprachindikator");
de_ru.appendChild(de_ru_inhalt);

var de_da = document.createElement('div');
var de_da_inhalt = document.createTextNode('DA: ');
de_da.setAttribute("class", "sprachindikator");
de_da.appendChild(de_da_inhalt);

var umbruch = document.createElement('br');
var umbruch2 = document.createElement('br');
var umbruch3 = document.createElement('br');
var umbruch4 = document.createElement('br');
//var umbruch5 = document.createElement('br');
//	#2: Call here the URLs which have been declared above.

ordbogform.appendChild(de_title);
ordbogform.appendChild(input_de0);
ordbogform.appendChild(input_de1);
ordbogform.appendChild(input_de2);
ordbogform.appendChild(input_de3);
ordbogform.appendChild(input_de4);
ordbogform.appendChild(input_de5);
ordbogform.appendChild(input_de6);
ordbogform.appendChild(input_de7);
ordbogform.appendChild(de_multi_title);
ordbogform.appendChild(de_en);
ordbogform.appendChild(input_en1);
ordbogform.appendChild(input_en2);
ordbogform.appendChild(input_en3);
ordbogform.appendChild(input_en4);
ordbogform.appendChild(input_en5);
ordbogform.appendChild(input_en6);
ordbogform.appendChild(input_en7);
ordbogform.appendChild(umbruch);
ordbogform.appendChild(de_ru);
ordbogform.appendChild(input_ru1);
ordbogform.appendChild(input_ru2);
ordbogform.appendChild(input_ru3);
ordbogform.appendChild(input_ru4);
ordbogform.appendChild(input_ru5);
ordbogform.appendChild(input_ru6);
ordbogform.appendChild(input_ru7);
ordbogform.appendChild(input_ru8);
ordbogform.appendChild(input_ru9);
ordbogform.appendChild(input_ru10);
ordbogform.appendChild(input_ru11);
ordbogform.appendChild(input_ru12);
ordbogform.appendChild(input_ru13);
ordbogform.appendChild(umbruch2);
ordbogform.appendChild(de_da);
ordbogform.appendChild(input_da1);
ordbogform.appendChild(input_da2);
ordbogform.appendChild(umbruch3);
ordbogform.appendChild(de_bg);
ordbogform.appendChild(input_bg1);
ordbogform.appendChild(input_bg2);
ordbogform.appendChild(umbruch4);
ordbogform.appendChild(de_mk);
ordbogform.appendChild(input_mk1);
ordbogform.appendChild(input_mk2);
ordbogform.appendChild(input_mk3);
//ordbogform.appendChild(umbruch5);
ordbogform.appendChild(corpora_title);
ordbogform.appendChild(input_korpus1);
ordbogform.appendChild(input_korpus2);
ordbogform.appendChild(input_korpus3);
ordbogform.appendChild(input_korpus4);

//	#2 END	///////////////////

var linktitle = document.createElement('a');
linktitle.setAttribute("class", "linktitle");
var linktitletext = document.createTextNode("Dokumentation / andere Wörterbücher");
linktitle.appendChild(linktitletext);
linktitle.title = "Erfahre mehr über dieses und andere Wörterbuch-Bookmarklets";
linktitle.href = "https://podolak.net/de/studium/w%C3%B6rterbuch/bookmarklets";
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
