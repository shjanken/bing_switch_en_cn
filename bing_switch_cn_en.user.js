// ==UserScript==
// @name         Bing搜索自动切换国内版和国际版
// @namespace    com.github.shjanken
// @version      0.1
// @description  在使用 bing 搜索时，如果输入的全部是英文，则自动切换到英文搜索，反之则切换国内版
// @author       janken.wang@hotmail.com
// @match        https://cn.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
        var tip = document.getElementById('tipTitle');
	if(tip) {
            var tipText = tip.innerText;
            if(tipText &&
               (tipText.includes('国内版') ||  tipText.includes('国际版'))) {
                tip.click();
            }
        }
    }, 2000);
})();
