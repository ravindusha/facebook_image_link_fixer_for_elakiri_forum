// ==UserScript==
// @name         Facebook image link fixer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  FB image link fixer on elakiri.com forum for SLT internet connections
// @author       RavinduSha
// @match        http://www.elakiri.com/forum/showthread.php?t=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var allImg=document.getElementsByTagName("img"), i=0, img;

    var pattern = /^https?:\/\/scontent\.fcmb\d-1/;

    while (img = allImg[i++])
    {
        if (img.src.match(pattern)) {
            img.src = img.src.replace(pattern, 'http://scontent.fcmb2-1');
        }
    }

})();