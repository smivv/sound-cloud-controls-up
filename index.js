// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://soundcloud.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName('header')[0].style.top = "0";
    document.getElementById('content').style.margin = "46px auto";
    document.getElementsByClassName('playControls')[0].style.bottom = "inherit";
    document.getElementsByClassName('playControls')[0].style.top = "46px";
})();