// ==UserScript==
// @name         Bing�����Զ��л����ڰ�͹��ʰ�
// @namespace    com.github.shjanken
// @version      0.1
// @description  ��ʹ�� bing ����ʱ����������ȫ����Ӣ�ģ����Զ��л���Ӣ����������֮���л����ڰ�
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
               (tipText.includes('���ڰ�') ||  tipText.includes('���ʰ�'))) {
                tip.click();
            }
        }
    }, 2000);
})();
