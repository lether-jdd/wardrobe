(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{22:function(e,n,t){var r=t(23),a=t(24);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},23:function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],l=n.base?o[0]+n.base:o[0],u=t[l]||0,s="".concat(l," ").concat(u);t[l]=u+1;var f=c(s),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:h(d,n),references:1}),r.push(s)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,f=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function d(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function h(e,n){var t,r,a;if(n.singleton){var o=v++;t=m||(m=u(n)),r=d.bind(null,t,o,!1),a=d.bind(null,t,o,!0)}else t=u(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=c(t[r]);i[a].references--}for(var o=l(e,n),u=0;u<t.length;u++){var s=c(t[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=o}}}},24:function(e,n,t){(n=t(25)(!1)).push([e.i,"._3f3-ngvTOolmXxA2ry0qYS{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n._1Ih6kpAiGR0fk1-1oK4O1L {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height:80px;\n  width:45%;\n  margin:2%;\n  border-radius:5px;\n  color:#fff\n}\n._1q-Sdb1a0rxy5iMCLvHoAw {\n  background-image: linear-gradient(to right, #f7797d, #C6FFDD);\n}\n._37ojjHdgnGHyeofDvy3s3- {\n  background-image: linear-gradient(#C6FFDD, #FBD786, #f7797d);\n}",""]),n.locals={contentWrapper:"_3f3-ngvTOolmXxA2ry0qYS",funBlock:"_1Ih6kpAiGR0fk1-1oK4O1L",bg1:"_1q-Sdb1a0rxy5iMCLvHoAw _1Ih6kpAiGR0fk1-1oK4O1L",bg2:"_37ojjHdgnGHyeofDvy3s3- _1Ih6kpAiGR0fk1-1oK4O1L"},e.exports=n},25:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(22),i=t.n(o);var c,l=function(){var e=Object(r.useState)([{title:"zara打折",link:""}]),n=e[0];return e[1],a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",null,n.map((function(e){return a.a.createElement("li",null,a.a.createElement("a",{href:e.link}," ",e.title))}))))},u=(c=function(e,n){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}c(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),s=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return u(n,e),n.prototype.renderBanner=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:i.a.contentWrapper},a.a.createElement("div",{className:i.a.bg1},"所有衣服"),a.a.createElement("div",{className:i.a.bg2},"所有鞋子")),a.a.createElement("div",{className:i.a.contentWrapper},a.a.createElement("div",{className:i.a.bg2},"组合套装"),a.a.createElement("div",{className:i.a.bg1},"本周穿搭")))},n.prototype.renderMsg=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l,null))},n.prototype.render=function(){return a.a.createElement("div",null,a.a.createElement("div",null,this.renderBanner()),a.a.createElement("div",null,a.a.createElement("div",null,"资讯"),a.a.createElement("div",null,this.renderMsg())))},n}(a.a.Component);n.default=s}}]);