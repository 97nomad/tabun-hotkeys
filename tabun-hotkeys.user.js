// ==UserScript==
// @name        TabunHotkeys
// @namespace   tabunhotkeys
// @include     https://tabun.everypony.ru/blog/*
// @version     1.1
// @grant       none
// ==/UserScript==
var loc = location.pathname.match(/^\/(blog|talk)(\/([\w\-]+)|read)?\/(\d+)/);
if (loc !== null) {
  var targetType = loc[1] === 'blog' ? 'topic' : loc[1];
  var targetId = loc[4];
};
document.addEventListener('keydown', function (e) {
  var el = e.target;
  if (el.tagName == 'INPUT' || el.tagName == 'SELECT' || el.tagName == 'TEXTAREA' || el.isContentEditable) {
    // ignore input fields (as in https://github.com/ccampbell/mousetrap/blob/master/mousetrap.js)
    return;
  }
  if (e.keyCode == 82 && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
    ls.comments.load(targetId, targetType);
  }
  if (e.keyCode == 70 && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
    ls.comments.showComment();
  }
}, false);
