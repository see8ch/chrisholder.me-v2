/*	Responsive Boilerplate V.2.1.
	  Designed & Built by Fernando Monteiro, http://www.newaeonweb.com.br	
	  Licensed under MIT license, http://opensource.org/licenses/mit-license.php
	
*///Hide the url bar on smartphones
/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/(function(e){var t=e.document;if(!location.hash&&e.addEventListener){window.scrollTo(0,1);var n=1,r=function(){return e.pageYOffset||t.compatMode==="CSS1Compat"&&t.documentElement.scrollTop||t.body.scrollTop||0},i=setInterval(function(){if(t.body){clearInterval(i);n=r();e.scrollTo(0,n===1?0:1)}},15);e.addEventListener("load",function(){setTimeout(function(){r()<20&&e.scrollTo(0,n===1?0:1)},0)})}})(this);$(function(){$("<select />",{"class":"ss-standard ss-social"}).appendTo("nav");$("<option />",{selected:"selected",value:"",text:"Pick a Page"}).appendTo("nav select");$("nav a").each(function(){var e=$(this);$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("nav select")});$("nav select").change(function(){window.location=$(this).find("option:selected").val()})});