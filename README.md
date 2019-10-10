# dictionaryBookmarklets
- Online dictionary lookup helpers for Bulgarian, Danish, English, German, Macedonian, [Old Church Slavonic](https://podolak.net/en/bookmarklets/old-church-slavonic), Russian and [Yiddish](https://podolak.net/en/bookmarklets/yiddish)
- Transliteration functions for [Old Church Slavonic](https://podolak.net/en/bookmarklets/old-church-slavonic), Russian and [Yiddish](https://podolak.net/en/bookmarklets/yiddish)
- Virtual keyboard for Cyrillic / Hebrew script

[DEMO](https://podolak.net/en/dictionaries/bookmarklets)



In order to use the dictionary (and transliteration) bookmarklets on your own server, website or computer, you need to

  1.  Download following files from this directory and place them together into the directory of your choice:
 - `keyboard.js` (respectively `keyboard-yi.js` for Yiddish or `keyboard-ocs.js` for Old Church Slavonic)
 - `keyboard.css`
 - `style.css`
 - `bigger.css`
 - `LANGUAGE.js`

  2. Create a  bookmark in your browser. Call it whatever you want and use following line as the URL:
  
	javascript:var%20t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():(document.selection&&document.selection.createRange)?document.selection.createRange().text:'';if(t!='');(function(d){var%20s=d.createElement('script');s.type='text/javascript';s.charset='utf-8';s.async=true;s.src='URL_PATH_TO_YOUR_DIRECTORY/LANGUAGE.js';d.body.appendChild(s);}(document));
  *don't forget to adjust* `URL_PATH_TO_YOUR_DIRECTORY/LANGUAGE` *!*
	
  
If you want to provide others with the bookmarklet from your web site, you  also can link to the bookmarklet in HTML. A pop-up will say "*Drag the browser button link into the bookmarks toolbar or save the link as a bookmark*".

	<a href="javascript:var%20t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():(document.selection&amp;&amp;document.selection.createRange)?document.selection.createRange().text:'';if(t!='');(function(d){var%20s=d.createElement('script');s.type='text/javascript';s.charset='utf-8';s.async=true;s.src='URL_PATH_TO_YOUR_DIRECTORY/LANGUAGE.js';d.body.appendChild(s);}(document));" onclick="alert('Drag the browser button link into the bookmarks toolbar or save the link as a bookmark.');return false;" style="border: 1px solid #afafaf; padding: 5px; margin: 5px; background-color: #eeeeee;">Dicts</a>
	
Or the same *without* a pop-up:

	<a href="javascript:var%20t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():(document.selection&amp;&amp;document.selection.createRange)?document.selection.createRange().text:'';if(t!='');(function(d){var%20s=d.createElement('script');s.type='text/javascript';s.charset='utf-8';s.async=true;s.src='URL_PATH_TO_YOUR_DIRECTORY/LANGUAGE.js';d.body.appendChild(s);}(document));">Dicts DEMO</a>

In this case, it is still possible to drag the link to the toolbar or to save it as a bookmarklet.

Credits
-------

The keyboards for Cyrillic (Bulgarian, Macedonian, Old Church Slavonic, Russian) and Hebrew (Yiddish) are adapted versions of the fabulous java script by [GreyWyvern](http://www.greywyvern.com/code/javascript/keyboard).
