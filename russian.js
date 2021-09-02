// Russian dictionary bookmarklet
// V 1.0 - 2016-08-04
// V 1.1 - 2017-01-07: new transliteration function, minimize function, enlarge input field option
// V 1.2 - 2017-01-10: minor adjustments for highlighted text, prevent multiple load of script
// V 1.3 - 2019-10-10: Dictionary address updates
// V 1.4 - 2019-10-11: Virtual keyboard automatically turned to Russian
// Read more: https://podolak.net/en/bookmarklets
// Author: Martin Podolak
// Contact: www.podolak.net
// This work is licensed under the GNU General Public License v3.0

var kblang = { lang : "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" };
if(!document.getElementById("ordbogform"))
{

sc = document.getElementsByTagName("script");
for(idx = 0; idx < sc.length; idx++)
{
 s = sc.item(idx);
 if(s.src && s.src.match(/russian\.js$/))
 {
	var ordbogurl =s.src;
	ordbogurl = ordbogurl.replace("russian.js", "");
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

function suche2 (id){
konvertiert = document.ordbogform.texto.value;
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
input1.value = "грамота.ру";
input1.title = "Справочно-информационный интернет-портал «Русский язык» | Словари";
input1.type = "button";
input1.id = "inputordbog";
input1.onclick = function(){suche("http://www.gramota.ru/slovari/dic/?lop=x&bts=x&zar=x&ag=x&ab=x&sin=x&lv=x&az=x&pe=x&word=");return false;};

var input2 = document.createElement("input");
input2.value = 'Академика';
input2.title = "Словари и энциклопедии на Академике";
input2.type = "button";
input2.id = "inputordbog";
input2.onclick = function(){suche('http://dic.academic.ru/searchall.php?s=1&d=1&SWord=');return false;};

var input3 = document.createElement("input");
input3.value = 'sbiblio';
input3.title = "Библиотека учебной и научной литературы — Словари и справочники";
input3.type = "button";
input3.id = "inputordbog";
input3.onclick = function(){suche3('http://sbiblio.com/biblio/dict.aspx?d0=on&wh0=0&wh=0&d=11111111111111111111111111111111111111111&key=');return false;};

var input4 = document.createElement("input");
input4.value = 'Gufo.me';
input4.title = "Коллекция словарей и энциклопедий";
input4.type = "button";
input4.id = "inputordbog";
input4.onclick = function(){suche('http://mirslovarei.com/search/');return false;};

var input5 = document.createElement("input");
input5.value = 'Ожегов';
input5.type = "button";
input5.id = "inputordbog";
input5.onclick = function(){suche('http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\ozhegov\\ozhegov&first=1&off=&method_vocab=substring&ic_vocab=on&text_baseform=&method_baseform=substring&ic_baseform=on&text_phongl=&method_phongl=substring&ic_phongl=on&text_grclassgl=&method_grclassgl=substring&ic_grclassgl=on&text_stylgl=&method_stylgl=substring&ic_stylgl=on&text_def=&method_def=substring&ic_def=on&text_anti=&method_anti=substring&ic_anti=on&text_leglexam=&method_leglexam=substring&ic_leglexam=on&text_any=&method_any=substring&sort=vocab&ic_any=on&text_vocab=');return false;};

var input6 = document.createElement("input");
input6.value = 'Зализняк';
input6.type = "button";
input6.id = "inputordbog";
input6.onclick = function(){suche('http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\zaliznia\\dict&first=1&off=&method_word=substring&ic_word=on&text_grammar=&method_grammar=substring&ic_grammar=on&text_trans=&method_trans=substring&ic_trans=on&text_any=&method_any=substring&sort=word&ic_any=on&text_word=');return false;};

var input7 = document.createElement("input");
input7.value = 'Морфология';
input7.title = "Вавилонская Башня (Старостин)";
input7.type = "button";
input7.id = "inputordbog";
input7.onclick = function(){suche3('http://starling.rinet.ru/cgi-bin/morph.cgi?flags=endnnnn&root=config&word=');return false;};

var input8 = document.createElement("input");
input8.value = 'Вид';
input8.title = "Сеть лексической информация для русского языка (ОСЛИН)";
input8.type = "button";
input8.id = "inputordbog";
input8.onclick = function(){suche('http://ru.oslin.org/?action=aspect&act=verbs&search=');return false;};

var input9 = document.createElement("input");
input9.value = 'Verbix';
input9.title = "Глагольное спряжение";
input9.type = "button";
input9.id = "inputordbog";
input9.onclick = function(){suche('http://www.verbix.com/webverbix/go.php?D1=214&H1=301&T1=');return false;};

var input10 = document.createElement("input");
input10.value = 'Ассоциации';
input10.title = "Словарь ассоциаций";
input10.type = "button";
input10.id = "inputordbog";
input10.onclick = function(){suche3('http://slovesa.ru/assearch?q=');return false;};

var input12 = document.createElement("input");
input12.value = 'sokr.ru';
input12.title = "Словарь сокращений русского языка";
input12.type = "button";
input12.id = "inputordbog";
input12.onclick = function(){suche('http://www.sokr.ru/');return false;};

var input13 = document.createElement("input");
input13.value = 'Синонимы';
input13.title = "Словарь русских синонимов";
input13.type = "button";
input13.id = "inputordbog";
input13.onclick = function(){suche('http://jeck.ru/tools/SynonymsDictionary/');return false;};

var input14 = document.createElement("input");
input14.value = 'Метаязык русских грамматистов';
input14.title = "Справочник по метаязыку русских грамматистов первой половины XX века. Вавилонская Башня (Старостин)";
input14.type = "button";
input14.id = "inputordbog";
input14.onclick = function(){suche('http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\rugrte\\rugrte11&first=1&off=&text_type=&method_type=substring&ic_type=on&method_vochead=substring&ic_vochead=on&text_etym=&method_etym=substring&ic_etym=on&text_content=&method_content=substring&ic_content=on&text_engl_term=&method_engl_term=substring&ic_engl_term=on&text_germ_term=&method_germ_term=substring&ic_germ_term=on&text_fran_term=&method_fran_term=substring&ic_fran_term=on&text_span_term=&method_span_term=substring&ic_span_term=on&text_esper_term=&method_esper_term=substring&ic_esper_term=on&text_syno=&method_syno=substring&ic_syno=on&text_anti=&method_anti=substring&ic_anti=on&text_correlat=&method_correlat=substring&ic_correlat=on&text_hyper=&method_hyper=substring&ic_hyper=on&text_hypo=&method_hypo=substring&ic_hypo=on&text_base=&method_base=substring&ic_base=on&text_deriv=&method_deriv=substring&ic_deriv=on&text_totum=&method_totum=substring&ic_totum=on&text_class=&method_class=substring&ic_class=on&text_combine=&method_combine=substring&ic_combine=on&text_illustr=&method_illustr=substring&ic_illustr=on&text_rus_exam=&method_rus_exam=substring&ic_rus_exam=on&text_engl_exam=&method_engl_exam=substring&ic_engl_exam=on&text_germ_exam=&method_germ_exam=substring&ic_germ_exam=on&text_fran_exam=&method_fran_exam=substring&ic_fran_exam=on&text_lat_exam=&method_lat_exam=substring&ic_lat_exam=on&text_span_exam=&method_span_exam=substring&ic_span_exam=on&text_etc_exam=&method_etc_exam=substring&ic_etc_exam=on&text_durnovo24_=&method_durnovo24_=substring&ic_durnovo24_=on&text_jakob_i=&method_jakob_i=substring&ic_jakob_i=on&text_jakob_p=&method_jakob_p=substring&ic_jakob_p=on&text_deut_term=&method_deut_term=substring&ic_deut_term=on&text_shax41page=&method_shax41page=substring&ic_shax41page=on&text_pesh56page=&method_pesh56page=substring&ic_pesh56page=on&text_karc28page=&method_karc28page=substring&ic_karc28page=on&text_karc00page=&method_karc00page=substring&ic_karc00page=on&text_karc04page=&method_karc04page=substring&ic_karc04page=on&text_pete23page=&method_pete23page=substring&ic_pete23page=on&text_pete25page=&method_pete25page=substring&ic_pete25page=on&text_avsid45=&method_avsid45=substring&ic_avsid45=on&text_not10=&method_not10=substring&ic_not10=on&text_nota1=&method_nota1=substring&ic_nota1=on&text_nota2=&method_nota2=substring&ic_nota2=on&text_nota3=&method_nota3=substring&ic_nota3=on&text_nota4=&method_nota4=substring&ic_nota4=on&text_nota5=&method_nota5=substring&ic_nota5=on&text_any=&method_any=substring&sort=type&ic_any=on&text_vochead=');return false;};

var input15 = document.createElement("input");
input15.value = 'Викисловарь';
input15.type = "button";
input15.id = "inputordbog";
input15.onclick = function(){suche('https://ru.wiktionary.org/w/index.php?title=%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9F%D0%BE%D0%B8%D1%81%D0%BA&search=');return false;};

var input16 = document.createElement("input");
input16.value = 'Free Dictionary';
input16.title = "Русский словарь";
input16.type = "button";
input16.id = "inputordbog";
input16.onclick = function(){suche('http://ru.thefreedictionary.com/');return false;};

var input17 = document.createElement("input");
input17.value = 'Словоново';
input17.title = "Словарь новой лексики";
input17.type = "button";
input17.id = "inputordbog";
input17.onclick = function(){suche('http://www.slovonovo.ru/term/');return false;};

var input18 = document.createElement("input");
input18.value = 'Безбукв';
input18.title = "Сервис подбора слов по маске";
input18.type = "button";
input18.id = "inputordbog";
input18.onclick = function(){suche('http://bezbukv.ru/mask/');;return false;};

var input25 = document.createElement("input");
input25.onclick = function(){suche("http://www.multitran.ru/c/m.exe?HL=2&l1=3&l2=2&s=");return false;};
input25.value = "Multitran RU ⇔ DE";
input25.title = "";
input25.type = "button";
input25.id = "inputordbog";

var input28 = document.createElement("input");
input28.onclick = function(){suche("http://en.pons.eu/dict/search/results/?in=&l=deru&q=");return false;};
input28.value = "Pons RU ⇔ DE";
input28.title = "";
input28.type = "button";
input28.id = "inputordbog";

var input29 = document.createElement("input");
input29.onclick = function(){suche("http://dict.leo.org/rude?lp=rude&search=");return false;};
input29.value = "LEO RU ⇔ DE";
input29.title = "";
input29.type = "button";
input29.id = "inputordbog";

var input30 = document.createElement("input");
input30.onclick = function(){suche("http://www.ozali.org/deutsch-russisch/");return false;};
input30.value = "Ozali RU ⇔ DE";
input30.title = "";
input30.type = "button";
input30.id = "inputordbog";

var input31 = document.createElement("input");
input31.onclick = function(){suche("http://de.bab.la/woerterbuch/deutsch-russisch/");return false;};
input31.value = "bab.la RU ⇔ DE";
input31.title = "";
input31.type = "button";
input31.id = "inputordbog";

var input32 = document.createElement("input");
input32.onclick = function(){suche("http://deru.dict.cc/?s=");return false;};
input32.value = "dict.cc RU ⇔ DE";
input32.title = "";
input32.type = "button";
input32.id = "inputordbog";

var input34 = document.createElement("input");
input34.onclick = function(){suche("https://www.translate.ru/dictionary/ru-de/");return false;};
input34.value = "Promt RU ⇒ DE";
input34.title = "";
input34.type = "button";
input34.id = "inputordbog";

var input35 = document.createElement("input");
input35.onclick = function(){suche("https://www.translate.ru/dictionary/de-ru/");return false;};
input35.value = "Promt DE ⇒ RU";
input35.title = "";
input35.type = "button";
input35.id = "inputordbog";

var input36 = document.createElement("input");
input36.onclick = function(){suche("http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\rugrte\\rugrte11&first=1&off=&text_type=&method_type=substring&ic_type=on&text_vochead=&method_vochead=substring&ic_vochead=on&text_etym=&method_etym=substring&ic_etym=on&text_content=&method_content=substring&ic_content=on&text_engl_term=&method_engl_term=substring&ic_engl_term=on&method_germ_term=substring&ic_germ_term=on&text_fran_term=&method_fran_term=substring&ic_fran_term=on&text_span_term=&method_span_term=substring&ic_span_term=on&text_esper_term=&method_esper_term=substring&ic_esper_term=on&text_syno=&method_syno=substring&ic_syno=on&text_anti=&method_anti=substring&ic_anti=on&text_correlat=&method_correlat=substring&ic_correlat=on&text_hyper=&method_hyper=substring&ic_hyper=on&text_hypo=&method_hypo=substring&ic_hypo=on&text_base=&method_base=substring&ic_base=on&text_deriv=&method_deriv=substring&ic_deriv=on&text_totum=&method_totum=substring&ic_totum=on&text_class=&method_class=substring&ic_class=on&text_combine=&method_combine=substring&ic_combine=on&text_illustr=&method_illustr=substring&ic_illustr=on&text_rus_exam=&method_rus_exam=substring&ic_rus_exam=on&text_engl_exam=&method_engl_exam=substring&ic_engl_exam=on&text_germ_exam=&method_germ_exam=substring&ic_germ_exam=on&text_fran_exam=&method_fran_exam=substring&ic_fran_exam=on&text_lat_exam=&method_lat_exam=substring&ic_lat_exam=on&text_span_exam=&method_span_exam=substring&ic_span_exam=on&text_etc_exam=&method_etc_exam=substring&ic_etc_exam=on&text_durnovo24_=&method_durnovo24_=substring&ic_durnovo24_=on&text_jakob_i=&method_jakob_i=substring&ic_jakob_i=on&text_jakob_p=&method_jakob_p=substring&ic_jakob_p=on&text_deut_term=&method_deut_term=substring&ic_deut_term=on&text_shax41page=&method_shax41page=substring&ic_shax41page=on&text_pesh56page=&method_pesh56page=substring&ic_pesh56page=on&text_karc28page=&method_karc28page=substring&ic_karc28page=on&text_karc00page=&method_karc00page=substring&ic_karc00page=on&text_karc04page=&method_karc04page=substring&ic_karc04page=on&text_pete23page=&method_pete23page=substring&ic_pete23page=on&text_pete25page=&method_pete25page=substring&ic_pete25page=on&text_avsid45=&method_avsid45=substring&ic_avsid45=on&text_not10=&method_not10=substring&ic_not10=on&text_nota1=&method_nota1=substring&ic_nota1=on&text_nota2=&method_nota2=substring&ic_nota2=on&text_nota3=&method_nota3=substring&ic_nota3=on&text_nota4=&method_nota4=substring&ic_nota4=on&text_nota5=&method_nota5=substring&ic_nota5=on&text_any=&method_any=substring&sort=type&ic_any=on&text_germ_term=");return false;};
input36.value = "Крылов / Krylov DE ⇒ RU";
input36.title = "Справочник по метаязыку русских грамматистов первой половины XX века / Linguistische Terminologie";
input36.type = "button";
input36.id = "inputordbog";

var input38 = document.createElement("input");
input38.onclick = function(){suche("http://www.multitran.ru/c/m.exe?HL=2&l1=1&l2=2&s=");return false;};
input38.value = "Multitran RU ⇔ EN";
input38.title = "";
input38.type = "button";
input38.id = "inputordbog";

var input41 = document.createElement("input");
input41.onclick = function(){suche("http://en.bab.la/dictionary/russian-english/");return false;};
input41.value = "bab.la RU ⇔ EN";
input41.title = "";
input41.type = "button";
input41.id = "inputordbog";

var input43 = document.createElement("input");
input43.onclick = function(){suche("https://www.translate.ru/dictionary/ru-en/");return false;};
input43.value = "Promt RU ⇒ EN";
input43.title = "";
input43.type = "button";
input43.id = "inputordbog";

var input44 = document.createElement("input");
input44.onclick = function(){suche("https://www.translate.ru/dictionary/en-ru/");return false;};
input44.value = "Promt EN ⇒ RU";
input44.title = "";
input44.type = "button";
input44.id = "inputordbog";

var input45 = document.createElement("input");
input45.onclick = function(){suche("http://starling.rinet.ru/cgi-bin/response.cgi?root=%2Fusr%2Flocal%2Fshare%2Fstarling%2Fmorpho&morpho=1&basename=morpho\\rugrte\\rugrte11&first=1&off=&text_type=&method_type=substring&ic_type=on&text_vochead=&method_vochead=substring&ic_vochead=on&text_etym=&method_etym=substring&ic_etym=on&text_content=&method_content=substring&ic_content=on&method_engl_term=substring&ic_engl_term=on&text_germ_term=&method_germ_term=substring&ic_germ_term=on&text_fran_term=&method_fran_term=substring&ic_fran_term=on&text_span_term=&method_span_term=substring&ic_span_term=on&text_esper_term=&method_esper_term=substring&ic_esper_term=on&text_syno=&method_syno=substring&ic_syno=on&text_anti=&method_anti=substring&ic_anti=on&text_correlat=&method_correlat=substring&ic_correlat=on&text_hyper=&method_hyper=substring&ic_hyper=on&text_hypo=&method_hypo=substring&ic_hypo=on&text_base=&method_base=substring&ic_base=on&text_deriv=&method_deriv=substring&ic_deriv=on&text_totum=&method_totum=substring&ic_totum=on&text_class=&method_class=substring&ic_class=on&text_combine=&method_combine=substring&ic_combine=on&text_illustr=&method_illustr=substring&ic_illustr=on&text_rus_exam=&method_rus_exam=substring&ic_rus_exam=on&text_engl_exam=&method_engl_exam=substring&ic_engl_exam=on&text_germ_exam=&method_germ_exam=substring&ic_germ_exam=on&text_fran_exam=&method_fran_exam=substring&ic_fran_exam=on&text_lat_exam=&method_lat_exam=substring&ic_lat_exam=on&text_span_exam=&method_span_exam=substring&ic_span_exam=on&text_etc_exam=&method_etc_exam=substring&ic_etc_exam=on&text_durnovo24_=&method_durnovo24_=substring&ic_durnovo24_=on&text_jakob_i=&method_jakob_i=substring&ic_jakob_i=on&text_jakob_p=&method_jakob_p=substring&ic_jakob_p=on&text_deut_term=&method_deut_term=substring&ic_deut_term=on&text_shax41page=&method_shax41page=substring&ic_shax41page=on&text_pesh56page=&method_pesh56page=substring&ic_pesh56page=on&text_karc28page=&method_karc28page=substring&ic_karc28page=on&text_karc00page=&method_karc00page=substring&ic_karc00page=on&text_karc04page=&method_karc04page=substring&ic_karc04page=on&text_pete23page=&method_pete23page=substring&ic_pete23page=on&text_pete25page=&method_pete25page=substring&ic_pete25page=on&text_avsid45=&method_avsid45=substring&ic_avsid45=on&text_not10=&method_not10=substring&ic_not10=on&text_nota1=&method_nota1=substring&ic_nota1=on&text_nota2=&method_nota2=substring&ic_nota2=on&text_nota3=&method_nota3=substring&ic_nota3=on&text_nota4=&method_nota4=substring&ic_nota4=on&text_nota5=&method_nota5=substring&ic_nota5=on&text_any=&method_any=substring&sort=type&ic_any=on&text_engl_term=");return false;};
input45.value = "Крылов / Krylov EN ⇒ RU";
input45.title = "Справочник по метаязыку русских грамматистов первой половины XX века / Linguistic terminology";
input45.type = "button";
input45.id = "inputordbog";

var input46 = document.createElement("input");
input46.onclick = function(){suche("http://translate.academic.ru/?f=da&t=ru&stype=1&q=");return false;};
input46.value = "Akademika DA ⇒ RU";
input46.title = "";
input46.type = "button";
input46.id = "inputordbog";

var input47 = document.createElement("input");
input47.onclick = function(){suche("http://translate.academic.ru/?f=ru&t=da&stype=1&q=");return false;};
input47.value = "Akademika RU ⇒ DA";
input47.title = "";
input47.type = "button";
input47.id = "inputordbog";

var input48 = document.createElement("input");
input48.onclick = function(){suche("http://search2.ruscorpora.ru/search.xml?env=alpha&mycorp=&mysent=&mysize=&mysentsize=&mydocsize=&dpp=&spp=&spd=&text=lexform&mode=main&sort=gr_tagging&lang=ru&nodia=1&req=");return false;};
input48.value = "RNC / НКР";
input48.title = "Национальный корпус русского языка / Russian National Corpus";
input48.type = "button";
input48.id = "inputordbog";

var input49 = document.createElement("input");
input49.onclick = function(){suche("http://corpora.uni-leipzig.de/en/res?corpusId=rus_mixed_2013&word=");return false;};
input49.value = "Leipzig Сorpus";
input49.title = "";
input49.type = "button";
input49.id = "inputordbog";

var input50 = document.createElement("input");
input50.onclick = function(){suche("http://corpus.leeds.ac.uk/cgi-bin/cqp.pl?c=I-RU&searchtype=conc&contextsize=60c&sort1=word&sort2=right&terminate=100&llstat=on&cleft=0&cright=1&cfilter=&q=");return false;};
input50.value = "Leeds Corpus";
input50.title = "Leeds Corpus";
input50.type = "button";
input50.id = "inputordbog";

var input53 = document.createElement("input");
input53.onclick = function(){suche3("http://narusco.ru/search/ac1.php?yo=on&compounds=on&wf=");return false;};
input53.value = "Accentuation / Акцентированный корпус";
input53.title = "";
input53.type = "button";
input53.id = "inputordbog";

var input58 = document.createElement("input");
input58.onclick = function(){suche("http://www.dict.com/Russisk-dansk/");return false;};
input58.value = "Lingea RU ⇔ DA";
input58.title = "";
input58.type = "button";
input58.id = "inputordbog";

var input59 = document.createElement("input");
input59.onclick = function(){suche("http://morpher.ru/Demo.aspx?s=");return false;};
input59.value = "Морфер";
input59.title = "Склонение по падежам словосочетаний, определение пола по ФИО, пропись и склонение чисел, а также образование прилагательных от названий городов и стран";
input59.type = "button";
input59.id = "inputordbog";

var input_transl1 = document.createElement("input");
input_transl1.type = "button";
input_transl1.value = "Google Переводчик";
input_transl1.id = "inputordbog";
input_transl1.title = "Перевод ввода";
input_transl1.onclick = function(){suche('https://translate.google.com/?hl=&tab=TT&text=');return false;};

var input_transl2 = document.createElement("input");
input_transl2.type = "button";
input_transl2.value = "Google Переводчик сайтов";
input_transl2.id = "inputordbog";
input_transl2.title = "Перевод данного сайта";
input_transl2.onclick = function(){window.open('https://translate.google.com/translate?&u='+window.location.href,'_blank');};

var input_transl3 = document.createElement("input");
input_transl3.type = "button";
input_transl3.value = "Яндекс.Переводчик";
input_transl3.id = "inputordbog";
input_transl3.title = "Перевод ввода";
input_transl3.onclick = function(){suche('https://translate.yandex.ru/?text=');return false;};

var input_transl4 = document.createElement("input");
input_transl4.type = "button";
input_transl4.value = "Яндекс.Переводчик сайтов";
input_transl4.id = "inputordbog";
input_transl4.title = "Перевод данного сайта";
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
spanminimer.title ="Minimize dictionaries window to the upper right corner (keeps input)";
spanminimer.appendChild(textminimer);
divinnen.appendChild(spanminimer);
divinnen.appendChild(ordbogform);

var spanoben = document.createElement('span');
spanoben.setAttribute("class", "oben");

var lupe = document.createElement('p');
lupe.setAttribute("class", "lupe");
lupe.setAttribute("title", "Ввод ключевого слова");
lupe.style.transform="rotate(45deg)"
var lupeinhalt = document.createTextNode('⚲');
lupe.appendChild(lupeinhalt);
spanoben.appendChild(lupe);
spanoben.appendChild(inddata);



var button1 = document.createElement('input');
button1.type = "button";
button1.value = "увеличить / enlarge";
button1.id = "inputordbog";
button1.setAttribute("class", "bigger");
button1.title = "This will enlarge the input field";
button1.setAttribute("onclick", "bigger2()");
spanoben.appendChild(button1);



var spantitle = document.createElement('span');
spantitle.setAttribute("class", "spantitle");
var texttitle = document.createTextNode('RU dicts');
spantitle.appendChild(texttitle);
spanoben.appendChild(spantitle);
var spansubtitle = document.createElement('p');
spansubtitle.setAttribute("class", "spansubtitle");
var textsubtitle = document.createTextNode('Russian dictionaries / Русские словари');
spansubtitle.appendChild(textsubtitle);
spanoben.appendChild(spansubtitle);
ordbogform.appendChild(spanoben);

var transliteration_title = document.createElement('div');
var transliteration_title_inhalt = document.createTextNode('Транслитерация / Transliteration');
transliteration_title.setAttribute("class", "dictsubtitle");
transliteration_title.appendChild(transliteration_title_inhalt);

var ordbog_title = document.createElement('div');
var ordbog_title_inhalt = document.createTextNode('Словари современного русского языка');
ordbog_title.setAttribute("class", "dictsubtitle");
ordbog_title.appendChild(ordbog_title_inhalt);

var deutsch_title = document.createElement('div');
var deutsch_title_inhalt = document.createTextNode('Немецко-русские словари / Russisch-deutsche Wörterbücher');
deutsch_title.setAttribute("class", "dictsubtitle");
deutsch_title.appendChild(deutsch_title_inhalt);

var english_title = document.createElement('div');
var english_title_inhalt = document.createTextNode('Английско-русские словари / Russian-English dictionaries');
english_title.setAttribute("class", "dictsubtitle");
english_title.appendChild(english_title_inhalt);

var dansk_title = document.createElement('div');
var dansk_title_inhalt = document.createTextNode('Датско-русские словари / Russisk-danske ordbøger');
dansk_title.setAttribute("class", "dictsubtitle");
dansk_title.appendChild(dansk_title_inhalt);

var concordance_title = document.createElement('div');
var concordance_title_inhalt = document.createTextNode('Корпусы - схождения');
concordance_title.setAttribute("class", "dictsubtitle");
concordance_title.appendChild(concordance_title_inhalt);

var collocation_title = document.createElement('div');
var collocation_title_inhalt = document.createTextNode('Корпусы - коллокации');
collocation_title.setAttribute("class", "dictsubtitle");
collocation_title.appendChild(collocation_title_inhalt);

var transl_title = document.createElement('div');
var transl_title_inhalt = document.createTextNode('Автоматический перевод / Machine translation');
transl_title.setAttribute("class", "dictsubtitle");
transl_title.appendChild(transl_title_inhalt);

var br = document.createElement('br');
var br2 = document.createElement('br');
//input
var translitinput = document.createElement('select');
translitinput.setAttribute("id", "translitinput");
translitinput.setAttribute("name", "translitinput");

var translitinputgroup = document.createElement('optgroup');
translitinputgroup.setAttribute("label", "Source: ");
translitinput.appendChild(translitinputgroup);

var translitinputoption1 = document.createElement('option');
translitinputoption1.setAttribute("value", "kyrillisch");
var translitinputoption1text = document.createTextNode('Cyrillic');
translitinputoption1.appendChild(translitinputoption1text);
translitinput.appendChild(translitinputoption1);

var translitinputoption2 = document.createElement('option');
translitinputoption2.setAttribute("value", "isor9");
var translitinputoption2text = document.createTextNode('ISO R9');
translitinputoption2.appendChild(translitinputoption2text);
translitinput.appendChild(translitinputoption2);

var translitinputoption3 = document.createElement('option');
translitinputoption3.setAttribute("value", "iso9");
var translitinputoption3text = document.createTextNode('ISO 9 / GOST 7.79A');
translitinputoption3.appendChild(translitinputoption3text);
translitinput.appendChild(translitinputoption3);

var translitinputoption4 = document.createElement('option');
translitinputoption4.setAttribute("value", "gost779b");
var translitinputoption4text = document.createTextNode('GOST 7.79B');
translitinputoption4.appendChild(translitinputoption4text);
translitinput.appendChild(translitinputoption4);

var translitinputoption5 = document.createElement('option');
translitinputoption5.setAttribute("value", "wissenschaftlich");
var translitinputoption5text = document.createTextNode('Scientific');
translitinputoption5.appendChild(translitinputoption5text);
translitinput.appendChild(translitinputoption5);

var translitinputoption6 = document.createElement('option');
translitinputoption6.setAttribute("value", "alalc");
var translitinputoption6text = document.createTextNode('ALA-LC');
translitinputoption6.appendChild(translitinputoption6text);
translitinput.appendChild(translitinputoption6);

var translitinputoption9 = document.createElement('option');
translitinputoption9.setAttribute("value", "british");
var translitinputoption9text = document.createTextNode('British Standard');
translitinputoption9.appendChild(translitinputoption9text);
translitinput.appendChild(translitinputoption9);

var translitinputoption10 = document.createElement('option');
translitinputoption10.setAttribute("value", "translit");
var translitinputoption10text = document.createTextNode('Translit');
translitinputoption10.appendChild(translitinputoption10text);
translitinput.appendChild(translitinputoption10);

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
translitoutputoption1.setAttribute("value", "kyrillisch");
var translitoutputoption1text = document.createTextNode('Cyrillic');
translitoutputoption1.appendChild(translitoutputoption1text);
translitoutput.appendChild(translitoutputoption1);

var translitoutputoption2 = document.createElement('option');
translitoutputoption2.setAttribute("value", "isor9");
var translitoutputoption2text = document.createTextNode('ISO R9');
translitoutputoption2.appendChild(translitoutputoption2text);
translitoutput.appendChild(translitoutputoption2);

var translitoutputoption3 = document.createElement('option');
translitoutputoption3.setAttribute("value", "iso9");
var translitoutputoption3text = document.createTextNode('ISO 9 / GOST 7.79A');
translitoutputoption3.appendChild(translitoutputoption3text);
translitoutput.appendChild(translitoutputoption3);

var translitoutputoption4 = document.createElement('option');
translitoutputoption4.setAttribute("value", "gost779b");
var translitoutputoption4text = document.createTextNode('GOST 7.79B');
translitoutputoption4.appendChild(translitoutputoption4text);
translitoutput.appendChild(translitoutputoption4);

var translitoutputoption5 = document.createElement('option');
translitoutputoption5.setAttribute("value", "wissenschaftlich");
var translitoutputoption5text = document.createTextNode('Scientific');
translitoutputoption5.appendChild(translitoutputoption5text);
translitoutput.appendChild(translitoutputoption5);

var translitoutputoption6 = document.createElement('option');
translitoutputoption6.setAttribute("value", "alalc");
var translitoutputoption6text = document.createTextNode('ALA-LC');
translitoutputoption6.appendChild(translitoutputoption6text);
translitoutput.appendChild(translitoutputoption6);

var translitoutputoption7 = document.createElement('option');
translitoutputoption7.setAttribute("value", "bgndigr");
var translitoutputoption7text = document.createTextNode('BGN/PCGN with interpuncts');
translitoutputoption7.appendChild(translitoutputoption7text);
translitoutput.appendChild(translitoutputoption7);

var translitoutputoption8 = document.createElement('option');
translitoutputoption8.setAttribute("value", "bgn");
var translitoutputoption8text = document.createTextNode('BGN/PCGN');
translitoutputoption8.appendChild(translitoutputoption8text);
translitoutput.appendChild(translitoutputoption8);

var translitoutputoption9 = document.createElement('option');
translitoutputoption9.setAttribute("value", "british");
var translitoutputoption9text = document.createTextNode('British Standard');
translitoutputoption9.appendChild(translitoutputoption9text);
translitoutput.appendChild(translitoutputoption9);

var translitoutputoption10 = document.createElement('option');
translitoutputoption10.setAttribute("value", "translit");
var translitoutputoption10text = document.createTextNode('Translit');
translitoutputoption10.appendChild(translitoutputoption10text);
translitoutput.appendChild(translitoutputoption10);

var translitoutputoption11 = document.createElement('option');
translitoutputoption11.setAttribute("value", "duden");
var translitoutputoption11text = document.createTextNode('Duden');
translitoutputoption11.appendChild(translitoutputoption11text);
translitoutput.appendChild(translitoutputoption11);

var translitoutputoption12 = document.createElement('option');
translitoutputoption12.setAttribute("value", "sprognaevn");
var translitoutputoption12text = document.createTextNode('Sprognævn');
translitoutputoption12.appendChild(translitoutputoption12text);
translitoutput.appendChild(translitoutputoption12);

function functiontranslit() {
	var selector = document.getElementById('translitinput');
	var valueinput = selector[selector.selectedIndex].value;
	var selectoroutput = document.getElementById('translitoutput');
	var valueoutput = selectoroutput[selectoroutput.selectedIndex].value;
	var valuesuche = document.ordbogform.texto.value;
	window.open('https://podolak.net/en/transliteration/russian?in='+valueinput+'&out='+valueoutput+'&senden=Translitterér&text='+valuesuche);
	}

function bigger2() {
	loadjscssfile(ordbogurl+"bigger.css", "css");
	}
	
var button2 = document.createElement('input');
button2.type = "button";
button2.value = "выполнить / run";
button2.id = "inputordbog";
button2.title = "Transliterates the text input according to selected input and output format";
button2.setAttribute("onclick", "functiontranslit()");




//	#2: Call here the URLs which have been declared above.


//ordbogform.appendChild(br);
//ordbogform.appendChild(br2);
ordbogform.appendChild(transliteration_title);
ordbogform.appendChild(translitinput);
ordbogform.appendChild(translitoutput);
ordbogform.appendChild(button2);
ordbogform.appendChild(ordbog_title);
ordbogform.appendChild(input1);
ordbogform.appendChild(input2);
ordbogform.appendChild(input3);
ordbogform.appendChild(input4);
ordbogform.appendChild(input5);
ordbogform.appendChild(input6);
ordbogform.appendChild(input7);
//ordbogform.appendChild(input8);
ordbogform.appendChild(input9);
ordbogform.appendChild(input59);
ordbogform.appendChild(input10);
ordbogform.appendChild(input12);
ordbogform.appendChild(input13);
ordbogform.appendChild(input15);
ordbogform.appendChild(input16);
ordbogform.appendChild(input17);
ordbogform.appendChild(input18);
ordbogform.appendChild(input14);
ordbogform.appendChild(deutsch_title);
ordbogform.appendChild(input25);
ordbogform.appendChild(input28);
ordbogform.appendChild(input29);
ordbogform.appendChild(input30);
ordbogform.appendChild(input31);
ordbogform.appendChild(input32);
ordbogform.appendChild(input34);
ordbogform.appendChild(input35);
ordbogform.appendChild(input36);
ordbogform.appendChild(english_title);
ordbogform.appendChild(input38);
ordbogform.appendChild(input41);
ordbogform.appendChild(input43);
ordbogform.appendChild(input44);
ordbogform.appendChild(input45);
ordbogform.appendChild(dansk_title);
ordbogform.appendChild(input46);
ordbogform.appendChild(input47);
ordbogform.appendChild(input58);
ordbogform.appendChild(transl_title);
ordbogform.appendChild(input_transl1);
ordbogform.appendChild(input_transl2);
ordbogform.appendChild(input_transl3);
ordbogform.appendChild(input_transl4);
ordbogform.appendChild(concordance_title);
ordbogform.appendChild(input48);
ordbogform.appendChild(input49);
ordbogform.appendChild(input50);
ordbogform.appendChild(input53);
//ordbogform.appendChild(collocation_title);
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

var divaussenklein = document.createElement('div');
divaussenklein.setAttribute("id", "ordbogklein");
var divaussenkleina = document.createElement('a');
divaussenkleina.title = "Click to restore dictionaries window";
divaussenkleina.setAttribute("onmousedown", "display()");
divaussenklein.appendChild(divaussenkleina);
var divaussenkleintext = document.createTextNode("RU dicts");
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

