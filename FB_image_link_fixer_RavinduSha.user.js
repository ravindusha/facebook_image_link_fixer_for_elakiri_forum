// ==UserScript==
// @name         Facebook & Instagram image link fixer for elakiri forum
// @namespace    http://tampermonkey.net/
// @version      2.6
// @description  Facebook and Instagram image link fixer on elakiri.com forum for SLT internet connections
// @author       RavinduSha
// @match        https://www.elakiri.com/forum/showthread.php?*=*
// @match        https://www.elakiri.lk/forum/showthread.php?*=*
// @match        https://www.elakiri.lk/forum*=*
// @match        https://www.elakiri.com/forum*=*
// @match        http://www.elakiri.com/forum/showthread.php?*=*
// @match        http://www.elakiri.lk/forum/showthread.php?*=*
// @match        http://www.elakiri.lk/forum*=*
// @match        http://www.elakiri.com/forum*=*
// @match        http://www.elakiri.com/threads/*
// @match        https://www.elakiri.com/threads/*
// @match        http://elakiri.com/threads/*
// @match        https://elakiri.com/threads/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var allImg=document.getElementsByTagName("img"), i=0,j=0, img;

    var pattern = /^https?:\/\/scontent\.fcmb\d*-(1|2)/;
    var pattern_without_protocol = /\/\/scontent\.fcmb\d*-(1|2)/;

    var pattern_insta = /^https?:\/\/instagram\.fcmb\d*-(1|2)/;

    while (img = allImg[i++])
    {
        if (img.src.match(pattern)) {
            img.src = img.src.replace(pattern, function(_,b){ return `https://scontent.fcmb${b==2 ?1:5}-${b}`});
        }else if(img.src.match(pattern_without_protocol)){
            img.src = img.src.replace(pattern_without_protocol, function(_,b){ return `//scontent.fcmb${b==2 ?1:5}-${b}`});
        }
        if (img.src.match(pattern_insta)) {
            img.src = img.src.replace(pattern_insta, function(_,b){ return `//instagram.fcmb${b==2 ?1:5}-${b}`});
        }
    }


})();
