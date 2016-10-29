/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;if("undefined"==typeof jQuery){var jQuery;jQuery= true?$=__webpack_require__(2):$}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";
	switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)})),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),"function"==ka&&__webpack_require__(3)?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return ea}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),function(a){a.Package?Materialize={}:a.Materialize={}}(window),Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0}),d};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0};return b=a.extend(c,b),this.each(function(){function c(b){h=g.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),h.not(b).removeClass("active").parent().removeClass("active"),h.not(b).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function e(a){var b=f(a);return b.length>0}function f(a){return a.closest("li > .collapsible-header")}var g=a(this),h=a(this).find("> li > .collapsible-header"),i=g.data("collapsible");g.off("click.collapse","> li > .collapsible-header"),h.off("click.collapse"),g.on("click.collapse","> li > .collapsible-header",function(g){var h=a(this),j=a(g.target);e(j)&&(j=f(j)),j.toggleClass("active"),b.accordion||"accordion"===i||void 0===i?c(j):(d(j),h.hasClass("active")&&d(h))});var h=g.find("> li > .collapsible-header");b.accordion||"accordion"===i||void 0===i?c(h.filter(".active").first()):h.filter(".active").each(function(){d(a(this))})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===b?(this.each(function(){a(this).trigger("open")}),!1):"close"===b?(this.each(function(){a(this).trigger("close")}),!1):void this.each(function(){function b(){void 0!==f.data("induration")&&(g.inDuration=f.data("induration")),void 0!==f.data("outduration")&&(g.outDuration=f.data("outduration")),void 0!==f.data("constrainwidth")&&(g.constrain_width=f.data("constrainwidth")),void 0!==f.data("hover")&&(g.hover=f.data("hover")),void 0!==f.data("gutter")&&(g.gutter=f.data("gutter")),void 0!==f.data("beloworigin")&&(g.belowOrigin=f.data("beloworigin")),void 0!==f.data("alignment")&&(g.alignment=f.data("alignment")),void 0!==f.data("stoppropagation")&&(g.stopPropagation=f.data("stoppropagation"))}function d(c){"focus"===c&&(h=!0),b(),i.addClass("active"),f.addClass("active"),g.constrain_width===!0?i.css("width",f.outerWidth()):i.css("white-space","nowrap");var d=window.innerHeight,e=f.innerHeight(),j=f.offset().left,k=f.offset().top-a(window).scrollTop(),l=g.alignment,m=0,n=0,o=0;g.belowOrigin===!0&&(o=e);var p=0,q=0,r=f.parent();if(r.is("body")||(r[0].scrollHeight>r[0].clientHeight&&(p=r[0].scrollTop),r[0].scrollWidth>r[0].clientWidth&&(q=r[0].scrollLeft)),j+i.innerWidth()>a(window).width()?l="right":j-i.innerWidth()+f.innerWidth()<0&&(l="left"),k+i.innerHeight()>d)if(k+e-i.innerHeight()<0){var s=d-k-o;i.css("max-height",s)}else o||(o+=e),o-=i.innerHeight();if("left"===l)m=g.gutter,n=f.position().left+m;else if("right"===l){var t=f.position().left+f.outerWidth()-i.outerWidth();m=-g.gutter,n=t+m}i.css({position:"absolute",top:f.position().top+o+p,left:n+q}),i.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:g.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:g.inDuration,easing:"easeOutSine"})}function e(){h=!1,i.fadeOut(g.outDuration),i.removeClass("active"),f.removeClass("active"),setTimeout(function(){i.css("max-height","")},g.outDuration)}var f=a(this),g=a.extend({},c,g),h=!1,i=a("#"+f.attr("data-activates"));if(b(),f.after(i),g.hover){var j=!1;f.unbind("click."+f.attr("id")),f.on("mouseenter",function(a){j===!1&&(d(),j=!0)}),f.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(i)||(i.stop(!0,!0),e(),j=!1)}),i.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(f)||(i.stop(!0,!0),e(),j=!1)})}else f.unbind("click."+f.attr("id")),f.bind("click."+f.attr("id"),function(b){h||(f[0]!=b.currentTarget||f.hasClass("active")||0!==a(b.target).closest(".dropdown-content").length?f.hasClass("active")&&(e(),a(document).unbind("click."+i.attr("id")+" touchstart."+i.attr("id"))):(b.preventDefault(),g.stopPropagation&&b.stopPropagation(),d("click")),i.hasClass("active")&&a(document).bind("click."+i.attr("id")+" touchstart."+i.attr("id"),function(b){i.is(b.target)||f.is(b.target)||f.find(b.target).length||(e(),a(document).unbind("click."+i.attr("id")+" touchstart."+i.attr("id")))}))});f.on("open",function(a,b){d(b)}),f.on("close",e)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){var b=0,c=0,d=function(){return c++,"materialize-lean-overlay-"+c};a.fn.extend({openModal:function(c){var e=a("body"),f=e.innerWidth();e.css("overflow","hidden"),e.width(f);var g={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%",ending_top:"10%"},h=a(this);if(!h.hasClass("open")){var i=d(),j=a('<div class="lean-overlay"></div>');lStack=++b,j.attr("id",i).css("z-index",1e3+2*lStack),h.data("overlay-id",i).css("z-index",1e3+2*lStack+1),h.addClass("open"),a("body").append(j),c=a.extend(g,c),c.dismissible&&(j.click(function(){h.closeModal(c)}),a(document).on("keyup.leanModal"+i,function(a){27===a.keyCode&&h.closeModal(c)})),h.find(".modal-close").on("click.close",function(a){h.closeModal(c)}),j.css({display:"block",opacity:0}),h.css({display:"block",opacity:0}),j.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),h.data("associated-overlay",j[0]),h.hasClass("bottom-sheet")?h.velocity({bottom:"0",opacity:1},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}):(a.Velocity.hook(h,"scaleX",.7),h.css({top:c.starting_top}),h.velocity({top:c.ending_top,opacity:1,scaleX:"1"},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",
	complete:function(){"function"==typeof c.ready&&c.ready()}}))}}}),a.fn.extend({closeModal:function(c){var d={out_duration:250,complete:void 0},e=a(this),f=e.data("overlay-id"),g=a("#"+f);e.removeClass("open"),c=a.extend(d,c),a("body").css({overflow:"",width:""}),e.find(".modal-close").off("click.close"),a(document).off("keyup.leanModal"+f),g.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"}),e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){g.css({display:"none"}),"function"==typeof c.complete&&c.complete(),g.remove(),b--}}):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},{duration:c.out_duration,complete:function(){a(this).css("display","none"),"function"==typeof c.complete&&c.complete(),g.remove(),b--}})}}),a.fn.extend({leanModal:function(b){return this.each(function(){var c={starting_top:"4%"},d=a.extend(c,b);a(this).click(function(b){d.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15;var c=a(this).attr("href")||"#"+a(this).data("target");a(c).openModal(d),b.preventDefault()})})}})}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){f=!1;var b=i.parent(".material-placeholder"),d=(window.innerWidth,window.innerHeight,i.data("width")),g=i.data("height");i.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){e=!1,a(this).remove()}}),i.velocity({width:d,height:g,left:0,top:0},{duration:h,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),i.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),i.removeClass("active"),f=!0,a(this).remove(),c&&c.css("overflow","")}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c,d,e=!1,f=!0,g=275,h=200,i=a(this),j=a("<div></div>").addClass("material-placeholder");i.wrap(j),i.on("click",function(){var h=i.parent(".material-placeholder"),j=window.innerWidth,k=window.innerHeight,l=i.width(),m=i.height();if(f===!1)return b(),!1;if(e&&f===!0)return b(),!1;f=!1,i.addClass("active"),e=!0,h.css({width:h[0].getBoundingClientRect().width,height:h[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),c=void 0,d=h[0].parentNode;for(;null!==d&&!a(d).is(document);){var n=a(d);"visible"!==n.css("overflow")&&(n.css("overflow","visible"),c=void 0===c?n:c.add(n)),d=d.parentNode}i.css({position:"absolute","z-index":1e3}).data("width",l).data("height",m);var o=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){f===!0&&b()});if(i.before(o),o.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"}),""!==i.data("caption")){var p=a('<div class="materialbox-caption"></div>');p.text(i.data("caption")),a("body").append(p),p.css({display:"inline"}),p.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"})}var q=0,r=l/j,s=m/k,t=0,u=0;r>s?(q=m/l,t=.9*j,u=.9*j*q):(q=l/m,t=.9*k*q,u=.9*k),i.hasClass("responsive-img")?i.velocity({"max-width":t,width:l},{duration:0,queue:!1,complete:function(){i.css({left:0,top:0}).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}}):i.css("left",0).css("top",0).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function(){f=!0}})}),a(window).scroll(function(){e&&b()}),a(document).keyup(function(a){27===a.keyCode&&f===!0&&e&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).load()}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(b){var c={onShow:null};return b=a.extend(c,b),this.each(function(){var c=a(this);a(window).width();c.width("100%");var d,e,f=c.find("li.tab a"),g=c.width(),h=Math.max(g,c[0].scrollWidth)/f.length,i=0;d=a(f.filter('[href="'+location.hash+'"]')),0===d.length&&(d=a(this).find("li.tab a.active").first()),0===d.length&&(d=a(this).find("li.tab a").first()),d.addClass("active"),i=f.index(d),0>i&&(i=0),void 0!==d[0]&&(e=a(d[0].hash)),c.append('<div class="indicator"></div>');var j=c.find(".indicator");c.is(":visible")&&(j.css({right:g-(i+1)*h}),j.css({left:i*h})),a(window).resize(function(){g=c.width(),h=Math.max(g,c[0].scrollWidth)/f.length,0>i&&(i=0),0!==h&&0!==g&&(j.css({right:g-(i+1)*h}),j.css({left:i*h}))}),f.not(d).each(function(){a(this.hash).hide()}),c.on("click","a",function(k){if(a(this).parent().hasClass("disabled"))return void k.preventDefault();if(!a(this).attr("target")){g=c.width(),h=Math.max(g,c[0].scrollWidth)/f.length,d.removeClass("active"),void 0!==e&&e.hide(),d=a(this),e=a(this.hash),f=c.find("li.tab a"),d.addClass("active");var l=i;i=f.index(a(this)),0>i&&(i=0),void 0!==e&&(e.show(),"function"==typeof b.onShow&&b.onShow.call(this,e)),i-l>=0?(j.velocity({right:g-(i+1)*h},{duration:300,queue:!1,easing:"easeOutQuad"}),j.velocity({left:i*h},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(j.velocity({left:i*h},{duration:300,queue:!1,easing:"easeOutQuad"}),j.velocity({right:g-(i+1)*h},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),k.preventDefault()}})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(c){var d=5,e={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===c?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove(),a(this).off("mouseenter.tooltip mouseleave.tooltip")}),!1):(c=a.extend(e,c),this.each(function(){var e=Materialize.guid(),f=a(this);f.attr("data-tooltip-id",e);var g,h,i,j,k,l,m=function(){g=f.attr("data-html")?"true"===f.attr("data-html"):c.html,h=f.attr("data-delay"),h=void 0===h||""===h?c.delay:h,i=f.attr("data-position"),i=void 0===i||""===i?c.position:i,j=f.attr("data-tooltip"),j=void 0===j||""===j?c.tooltip:j};m();var n=function(){var b=a('<div class="material-tooltip"></div>');return j=g?a("<span></span>").html(j):a("<span></span>").text(j),b.append(j).appendTo(a("body")).attr("id",e),l=a('<div class="backdrop"></div>'),l.appendTo(b),b};k=n(),f.off("mouseenter.tooltip mouseleave.tooltip");var o,p=!1;f.on({"mouseenter.tooltip":function(a){var c=function(){m(),p=!0,k.velocity("stop"),l.velocity("stop"),k.css({display:"block",left:"0px",top:"0px"});var a,c,e,g=f.outerWidth(),h=f.outerHeight(),j=k.outerHeight(),n=k.outerWidth(),o="0px",q="0px",r=8,s=8;"top"===i?(a=f.offset().top-j-d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="-10px",l.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:j,marginLeft:n/2-l.width()/2})):"left"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left-n-d,e=b(c,a,n,j),q="-10px",l.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:j/2,marginLeft:n})):"right"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left+g+d,e=b(c,a,n,j),q="+10px",l.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:j/2,marginLeft:"0px"})):(a=f.offset().top+f.outerHeight()+d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="+10px",l.css({top:0,left:0,marginLeft:n/2-l.width()/2})),k.css({top:e.y,left:e.x}),r=Math.SQRT2*n/parseInt(l.css("width")),s=Math.SQRT2*j/parseInt(l.css("height")),k.velocity({marginTop:o,marginLeft:q},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),l.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:r,scaleY:s},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})};o=setTimeout(c,h)},"mouseleave.tooltip":function(){p=!1,clearTimeout(o),setTimeout(function(){p!==!0&&(k.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),l.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function(){l.css("display","none"),k.css("display","none"),p=!1}}))},225)}})}))};var b=function(b,c,d,e){var f=b,g=c;return 0>f?f=4:f+d>window.innerWidth&&(f-=f+d-window.innerWidth),0>g?g=4:g+e>window.innerHeight+a(window).scrollTop&&(g-=g+e-window.innerHeight),{x:f,y:g}};a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h=b,i=setInterval(function(){null===g.parentNode&&window.clearInterval(i),g.classList.contains("panning")||(h-=20),0>=h&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(i))},20)},function(a){var b={init:function(b){var c={menuWidth:300,edge:"left",closeOnClick:!1};b=a.extend(c,b),a(this).each(function(){function c(c){g=!1,h=!1,a("body").css({overflow:"",width:""}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}})):(f.css({width:"",right:"0",left:""}),e.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}}))}var d=a(this),e=a("#"+d.attr("data-activates"));300!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('<div class="drag-target"></div>');a("body").append(f),"left"==b.edge?(e.css("transform","translateX(-100%)"),f.css({left:0})):(e.addClass("right-aligned").css("transform","translateX(100%)"),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("transform","translateX(0)"),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").length&&h?c(!0):e.css("transform","translateX(0%)"):h===!1&&("left"===b.edge?e.css("transform","translateX(-100%)"):e.css("transform","translateX(100%)"))}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){c()});var g=!1,h=!1;f.on("click",function(){h&&c()}),f.hammer({prevent_default:!1}).bind("pan",function(d){if("touch"==d.gesture.pointerType){var f=(d.gesture.direction,d.gesture.center.x),g=(d.gesture.center.y,d.gesture.velocityX,a("body")),i=g.innerWidth();if(g.css("overflow","hidden"),g.width(i),0===a("#sidenav-overlay").length){var j=a('<div id="sidenav-overlay"></div>');j.css("opacity",0).click(function(){c()}),a("body").append(j)}if("left"===b.edge&&(f>b.menuWidth?f=b.menuWidth:0>f&&(f=0)),"left"===b.edge)f<b.menuWidth/2?h=!1:f>=b.menuWidth/2&&(h=!0),e.css("transform","translateX("+(f-b.menuWidth)+"px)");else{f<window.innerWidth-b.menuWidth/2?h=!0:f>=window.innerWidth-b.menuWidth/2&&(h=!1);var k=f-b.menuWidth/2;0>k&&(k=0),e.css("transform","translateX("+k+"px)")}var l;"left"===b.edge?(l=f/b.menuWidth,a("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"})):(l=Math.abs((f-window.innerWidth)/b.menuWidth),a("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=c.gesture.velocityX,i=c.gesture.center.x,j=i-b.menuWidth,k=i-b.menuWidth/2;j>0&&(j=0),0>k&&(k=0),g=!1,"left"===b.edge?h&&.3>=d||-.5>d?(0!==j&&e.velocity({translateX:[0,j]},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""}),h=!0):(!h||d>.3)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[-1*b.menuWidth-10,j]},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:"",left:0})):h&&d>=-.3||d>.5?(0!==k&&e.velocity({translateX:[0,k]},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0}),h=!0):(!h||-.3>d)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[b.menuWidth+10,k]},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:0,left:""}))}}),d.click(function(){if(h===!0)h=!1,g=!1,c();else{var d=a("body"),i=d.innerWidth();d.css("overflow","hidden"),d.width(i),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({translateX:[0,-1*b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({translateX:[0,b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"}));var j=a('<div id="sidenav-overlay"></div>');j.css("opacity",0).click(function(){h=!1,g=!1,c(),j.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(j),j.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){h=!0,g=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g)}}),f}function c(){++j;var c=f.scrollTop(),d=f.scrollLeft(),e=d+f.width(),g=c+f.height(),i=b(c+k.top+200,e+k.right,g+k.bottom,d+k.left);a.each(i,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j)}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),h=i}function d(){f.trigger("scrollSpy:winSize")}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return(new Date).getTime()};a.scrollSpy=function(b,d){var h={throttle:100,scrollOffset:200};d=a.extend(h,d);var j=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a('a[href="#'+a(c).attr("id")+'"]').click(function(b){b.preventDefault();var c=a(this.hash).offset().top+1;a("html, body").animate({scrollTop:c-d.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var l=e(c,d.throttle||100),m=function(){a(document).ready(l)};return i||(f.on("scroll",m),f.on("resize",m),i=!0),setTimeout(m,0),b.on("scrollSpy:enter",function(){j=a.grep(j,function(a){return 0!=a.height()});var b=a(this);j[0]?(a('a[href="#'+j[0].attr("id")+'"]').removeClass("active"),b.data("scrollSpy:id")<j[0].data("scrollSpy:id")?j.unshift(a(this)):j.push(a(this))):j.push(a(this)),a('a[href="#'+j[0].attr("id")+'"]').addClass("active")}),b.on("scrollSpy:exit",function(){if(j=a.grep(j,function(a){return 0!=a.height()}),j[0]){a('a[href="#'+j[0].attr("id")+'"]').removeClass("active");var b=a(this);j=a.grep(j,function(a){return a.attr("id")!=b.attr("id")}),j[0]&&a('a[href="#'+j[0].attr("id")+'"]').addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),d=b.css("font-size"),f=b.css("line-height");d&&e.css("font-size",d),c&&e.css("font-family",c),f&&e.css("line-height",f),"off"===b.attr("wrap")&&e.css("overflow-wrap","normal").css("white-space","pre"),e.text(b.val()+"\n");var g=e.html().replace(/\n/g,"<br>");e.html(g),b.is(":visible")?e.css("width",b.width()):e.css("width",a(window).width()/2),b.css("height",e.height())}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||c.autofocus||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label").addClass("active"):a(this).siblings("label").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, .prefix").addClass("active")}),a(document).on("blur",c,function(){var b=a(this),c=".prefix";0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&(c+=", label"),b.siblings(c).removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d="input[type=radio], input[type=checkbox]";a(document).on("keyup.radio",d,function(b){if(9===b.which){a(this).addClass("tabbed");var c=a(this);return void c.one("blur",function(b){a(this).removeClass("tabbed")})}});var e=a(".hiddendiv").first();e.length||(e=a('<div class="hiddendiv common"></div>'),a("body").append(e));var f=".materialize-textarea";a(f).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown autoresize",f,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var g,h="input[type=range]",i=!1;a(h).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var j=".range-field";a(document).on("change",h,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val())}),a(document).on("input mousedown touchstart",h,function(b){var c=a(this).siblings(".thumb"),d=a(this).outerWidth();c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).after(c)),c.find(".value").html(a(this).val()),i=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==b.type&&(g=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left,0>g?g=0:g>d&&(g=d),c.addClass("active").css("left",g)),c.find(".value").html(a(this).val())}),a(document).on("mouseup touchend",j,function(){i=!1,a(this).removeClass("active")}),a(document).on("mousemove touchmove",j,function(b){var c,d=a(this).children(".thumb");if(i){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(h).val())}}),a(document).on("mouseout touchleave",j,function(){if(!i){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active")}}),a.fn.autocomplete=function(b){var c={data:{}};return b=a.extend(c,b),this.each(function(){var c=a(this),d=b.data,e=c.closest(".input-field");if(!a.isEmptyObject(d)){var f=a('<ul class="autocomplete-content dropdown-content"></ul>');e.length?e.append(f):c.after(f);var g=function(a,b){var c=b.find("img"),d=b.text().toLowerCase().indexOf(""+a.toLowerCase()),e=d+a.length-1,f=b.text().slice(0,d),g=b.text().slice(d,e+1),h=b.text().slice(e+1);b.html("<span>"+f+"<span class='highlight'>"+g+"</span>"+h+"</span>"),c.length&&b.prepend(c)};c.on("keyup",function(b){if(13===b.which)return void f.find("li").first().click();var e=c.val().toLowerCase();if(f.empty(),""!==e)for(var h in d)if(d.hasOwnProperty(h)&&-1!==h.toLowerCase().indexOf(e)&&h.toLowerCase()!==e){var i=a("<li></li>");d[h]?i.append('<img src="'+d[h]+'" class="right circle"><span>'+h+"</span>"):i.append("<span>"+h+"</span>"),f.append(i),g(e,i)}}),f.on("click","li",function(){c.val(a(this).text().trim()),f.empty()})}})}}),a.fn.material_select=function(b){function c(a,b,c){var e=a.indexOf(b),f=-1===e;return f?a.push(b):a.splice(e,1),c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"),c.find("option").eq(b).prop("selected",f),d(a,c),f}function d(a,b){for(var c="",d=0,e=a.length;e>d;d++){var f=b.find("option").eq(a[d]).text();c+=0===d?f:", "+f}""===c&&(c=b.find("option:disabled").eq(0).text()),b.siblings("input.select-dropdown").val(c)}a(this).each(function(){var d=a(this);if(!d.hasClass("browser-default")){var e=d.attr("multiple")?!0:!1,f=d.data("select-id");if(f&&(d.parent().find("span.caret").remove(),d.parent().find("input").remove(),d.unwrap(),a("ul#select-options-"+f).remove()),"destroy"===b)return void d.data("select-id",null).removeClass("initialized");var g=Materialize.guid();d.data("select-id",g);var h=a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i=a('<ul id="select-options-'+g+'" class="dropdown-content select-dropdown '+(e?"multiple-select-dropdown":"")+'"></ul>'),j=d.children("option, optgroup"),k=[],l=!1,m=d.find("option:selected").html()||d.find("option:first").html()||"",n=function(b,c,d){var e=c.is(":disabled")?"disabled ":"",f="optgroup-option"===d?"optgroup-option ":"",g=c.data("icon"),h=c.attr("class");if(g){var j="";return h&&(j=' class="'+h+'"'),"multiple"===d?i.append(a('<li class="'+e+'"><img src="'+g+'"'+j+'><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><img src="'+g+'"'+j+"><span>"+c.html()+"</span></li>")),!0}"multiple"===d?i.append(a('<li class="'+e+'"><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><span>'+c.html()+"</span></li>"))};j.length&&j.each(function(){if(a(this).is("option"))e?n(d,a(this),"multiple"):n(d,a(this));else if(a(this).is("optgroup")){var b=a(this).children("option");i.append(a('<li class="optgroup"><span>'+a(this).attr("label")+"</span></li>")),b.each(function(){n(d,a(this),"optgroup-option")})}}),i.find("li:not(.optgroup)").each(function(f){a(this).click(function(g){if(!a(this).hasClass("disabled")&&!a(this).hasClass("optgroup")){var h=!0;e?(a('input[type="checkbox"]',this).prop("checked",function(a,b){return!b}),h=c(k,a(this).index(),d),q.trigger("focus")):(i.find("li").removeClass("active"),a(this).toggleClass("active"),q.val(a(this).text())),r(i,a(this)),d.find("option").eq(f).prop("selected",h),d.trigger("change"),"undefined"!=typeof b&&b()}g.stopPropagation()})}),d.wrap(h);var o=a('<span class="caret">&#9660;</span>');d.is(":disabled")&&o.addClass("disabled");var p=m.replace(/"/g,"&quot;"),q=a('<input type="text" class="select-dropdown" readonly="true" '+(d.is(":disabled")?"disabled":"")+' data-activates="select-options-'+g+'" value="'+p+'"/>');d.before(q),q.before(o),q.after(i),d.is(":disabled")||q.dropdown({hover:!1,closeOnClick:!1}),d.attr("tabindex")&&a(q[0]).attr("tabindex",d.attr("tabindex")),d.addClass("initialized"),q.on({focus:function(){if(a("ul.select-dropdown").not(i[0]).is(":visible")&&a("input.select-dropdown").trigger("close"),!i.is(":visible")){a(this).trigger("open",["focus"]);var b=a(this).val(),c=i.find("li").filter(function(){return a(this).text().toLowerCase()===b.toLowerCase()})[0];r(i,c)}},click:function(a){a.stopPropagation()}}),q.on("blur",function(){e||a(this).trigger("close"),i.find("li.selected").removeClass("selected")}),i.hover(function(){l=!0},function(){l=!1}),a(window).on({click:function(){e&&(l||q.trigger("close"))}}),e&&d.find("option:selected:not(:disabled)").each(function(){
	var b=a(this).index();c(k,b,d),i.find("li").eq(b).find(":checkbox").prop("checked",!0)});var r=function(b,c){if(c){b.find("li.selected").removeClass("selected");var d=a(c);d.addClass("selected"),i.scrollTo(d)}},s=[],t=function(b){if(9==b.which)return void q.trigger("close");if(40==b.which&&!i.is(":visible"))return void q.trigger("open");if(13!=b.which||i.is(":visible")){b.preventDefault();var c=String.fromCharCode(b.which).toLowerCase(),d=[9,13,27,38,40];if(c&&-1===d.indexOf(b.which)){s.push(c);var f=s.join(""),g=i.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(f)})[0];g&&r(i,g)}if(13==b.which){var h=i.find("li.selected:not(.disabled)")[0];h&&(a(h).trigger("click"),e||q.trigger("close"))}40==b.which&&(g=i.find("li.selected").length?i.find("li.selected").next("li:not(.disabled)")[0]:i.find("li:not(.disabled)")[0],r(i,g)),27==b.which&&q.trigger("close"),38==b.which&&(g=i.find("li.selected").prev("li:not(.disabled)")[0],g&&r(i,g)),setTimeout(function(){s=[]},1e3)}};q.on("keydown",t)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1})}function d(a){a>=j.length?a=0:0>a&&(a=j.length-1),k=i.find(".active").index(),k!=a&&(e=j.eq(k),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){j.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&f.eq(k).removeClass("active"),j.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).addClass("active"),b.indicators&&f.eq(a).addClass("active"))}var e,f,g,h=a(this),i=h.find("ul.slides").first(),j=i.find("> li"),k=i.find(".active").index();-1!=k&&(e=j.eq(k)),h.hasClass("fullscreen")||(b.indicators?h.height(b.height+40):h.height(b.height),i.height(b.height)),j.find(".caption").each(function(){c(a(this),0)}),j.find("img").each(function(){var b="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";a(this).attr("src")!==b&&(a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src",b))}),b.indicators&&(f=a('<ul class="indicators"></ul>'),j.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=i.parent(),e=c.find(a(this)).index();d(e),clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),f.append(e)}),h.append(f),f=h.find("ul.indicators").find("li.indicator-item")),e?e.show():(j.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),k=0,e=j.eq(k),b.indicators&&f.eq(k).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),g=setInterval(function(){k=i.find(".active").index(),d(k+1)},b.transition+b.interval);var l=!1,m=!1,n=!1;h.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval(g);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=i.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>h.innerWidth()/2||-.65>d)?n=!0:2===b&&(c<-1*h.innerWidth()/2||d>.65)&&(m=!0);var e;m&&(e=$curr_slide.next(),0===e.length&&(e=j.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),n&&(e=$curr_slide.prev(),0===e.length&&(e=j.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=i.find(".active"),l=!1,curr_index=i.find(".active").index(),!n&&!m||j.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):m?(d(curr_index+1),$curr_slide.velocity({translateX:-1*h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):n&&(d(curr_index-1),$curr_slide.velocity({translateX:h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})),m=!1,n=!1,clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval))}),h.on("sliderPause",function(){clearInterval(g)}),h.on("sliderStart",function(){clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k)},b.transition+b.interval)}),h.on("sliderNext",function(){k=i.find(".active").index(),d(k+1)}),h.on("sliderPrev",function(){k=i.find(".active").index(),d(k-1)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")},next:function(){a(this).trigger("sliderNext")},prev:function(){a(this).trigger("sliderPrev")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&(a(b.target).closest(".card").css("overflow","hidden"),a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})))})})}(jQuery),function(a){var b=!1,c={data:[],placeholder:"",secondaryPlaceholder:""};a(document).ready(function(){a(document).on("click",".chip .close",function(b){var c=a(this).closest(".chips");c.data("initialized")||a(this).closest(".chip").remove()})}),a.fn.material_chip=function(d){var e=this;return this.$el=a(this),this.$document=a(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===d?this.$el.data("chips"):"options"===d?this.$el.data("options"):(this.$el.data("options",a.extend({},c,d)),this.init=function(){var b=0;e.$el.each(function(){var c=a(this);if(!c.data("initialized")){var d=c.data("options");(!d.data||!d.data instanceof Array)&&(d.data=[]),c.data("chips",d.data),c.data("index",b),c.data("initialized",!0),c.hasClass(e.SELS.CHIPS)||c.addClass("chips"),e.chips(c),b++}})},this.handleEvents=function(){var b=e.SELS;e.$document.on("click",b.CHIPS,function(c){a(c.target).find(b.INPUT).focus()}),e.$document.on("click",b.CHIP,function(c){a(b.CHIP).removeClass("selected"),a(this).toggleClass("selected")}),e.$document.on("keydown",function(c){if(!a(c.target).is("input, textarea")){var d,f=e.$document.find(b.CHIP+b.SELECTED_CHIP),g=f.closest(b.CHIPS),h=f.siblings(b.CHIP).length;if(f.length)if(8===c.which||46===c.which){c.preventDefault();var i=g.data("index");d=f.index(),e.deleteChip(i,d,g);var j=null;h>d+1?j=d:(d===h||d+1===h)&&(j=h-1),0>j&&(j=null),null!==j&&e.selectChip(i,j,g),h||g.find("input").focus()}else if(37===c.which){if(d=f.index()-1,0>d)return;a(b.CHIP).removeClass("selected"),e.selectChip(g.data("index"),d,g)}else if(39===c.which){if(d=f.index()+1,a(b.CHIP).removeClass("selected"),d>h)return void g.find("input").focus();e.selectChip(g.data("index"),d,g)}}}),e.$document.on("focusin",b.CHIPS+" "+b.INPUT,function(c){a(c.target).closest(b.CHIPS).addClass("focus"),a(b.CHIP).removeClass("selected")}),e.$document.on("focusout",b.CHIPS+" "+b.INPUT,function(c){a(c.target).closest(b.CHIPS).removeClass("focus")}),e.$document.on("keydown",b.CHIPS+" "+b.INPUT,function(c){var d=a(c.target),f=d.closest(b.CHIPS),g=f.data("index"),h=f.children(b.CHIP).length;return 13===c.which?(c.preventDefault(),e.addChip(g,{tag:d.val()},f),void d.val("")):8!==c.keyCode&&37!==c.keyCode||""!==d.val()||!h?void 0:(e.selectChip(g,h-1,f),void d.blur())}),e.$document.on("click",b.CHIPS+" "+b.DELETE,function(c){var d=a(c.target),f=d.closest(b.CHIPS),g=d.closest(b.CHIP);c.stopPropagation(),e.deleteChip(f.data("index"),g.index(),f),f.find("input").focus()})},this.chips=function(a){var b="";a.data("options");a.data("chips").forEach(function(a){b+=e.renderChip(a)}),b+='<input class="input" placeholder="">',a.html(b),e.setPlaceholder(a)},this.renderChip=function(a){if(a.tag){var b='<div class="chip">'+a.tag;return a.image&&(b+=' <img src="'+a.image+'"> '),b+='<i class="material-icons close">close</i>',b+="</div>"}},this.setPlaceholder=function(a){var b=a.data("options");a.data("chips").length&&b.placeholder?a.find("input").prop("placeholder",b.placeholder):!a.data("chips").length&&b.secondaryPlaceholder&&a.find("input").prop("placeholder",b.secondaryPlaceholder)},this.isValid=function(a,b){for(var c=a.data("chips"),d=!1,e=0;e<c.length;e++)if(c[e].tag===b.tag)return void(d=!0);return""!==b.tag&&!d},this.addChip=function(b,c,d){if(e.isValid(d,c)){var f=(d.data("options"),e.renderChip(c));d.data("chips").push(c),a(f).insertBefore(d.find("input")),d.trigger("chip.add",c),e.setPlaceholder(d)}},this.deleteChip=function(a,b,c){var d=c.data("chips")[b];c.find(".chip").eq(b).remove(),c.data("chips").splice(b,1),c.trigger("chip.delete",d),e.setPlaceholder(c)},this.selectChip=function(a,b,c){var d=c.find(".chip").eq(b);d&&!1===d.hasClass("selected")&&(d.addClass("selected"),c.trigger("chip.select",c.data("chips")[b]))},this.getChipsElement=function(a,b){return b.eq(a)},this.init(),void(b||(this.handleEvents(),b=!0)))}}(jQuery),function(a){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return"remove"===b?(this.each(function(){(id=a(this).data("pushpin-id"))&&(a(window).off("scroll."+id),a(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))}),!1):(b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;a(this).data("pushpin-id",e),d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})}))}}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(b){var d=a(this);c(d)}),a(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(d){var e=a(this),f=e.parent();f.hasClass("active")?c(f):b(f)})}),a.fn.extend({openFAB:function(){b(a(this))},closeFAB:function(){c(a(this))}});var b=function(b){if($this=b,$this.hasClass("active")===!1){var c,d,e=$this.hasClass("horizontal");e===!0?d=40:c=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:c+"px",translateX:d+"px"},{duration:0});var f=0;$this.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:f}),f+=40})}},c=function(a){$this=a;var b,c,d=$this.hasClass("horizontal");d===!0?c=40:b=40,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:b+"px",translateX:c+"px"},{duration:80})}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=typeof b)return;c=b}c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=typeof b)return;c=b}var d=0;c.find("li").velocity({translateX:"-100px"},{duration:0}),c.find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:d,easing:[60,10]}),d+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){if("function"==typeof h)h.call(this,i);else if("string"==typeof h){var k=new Function(h);k(i)}e.done=!0}}}}},100)}}(jQuery),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root.eq(0).focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root.eq(0).focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root.eq(0).focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root.eq(0).focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__,__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"
	})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=b.parent().find('span[class="character-counter"]');c.length||(c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),b.parent().append(c))}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=a(this),f=e.parent().find('span[class="character-counter"]');if(!f.length){var g=void 0!==e.attr("length");g&&(e.on("input",b),e.on("focus",b),e.on("blur",d),c(e))}})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery),function(a){var b={init:function(b){var c={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1,indicators:!1,no_wrap:!1};return b=a.extend(c,b),this.each(function(){function c(){"undefined"!=typeof window.ontouchstart&&(H[0].addEventListener("touchstart",l),H[0].addEventListener("touchmove",m),H[0].addEventListener("touchend",n)),H[0].addEventListener("mousedown",l),H[0].addEventListener("mousemove",m),H[0].addEventListener("mouseup",n),H[0].addEventListener("mouseleave",n),H[0].addEventListener("click",j)}function d(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX}function e(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY}function f(a){return a>=t?a%t:0>a?f(t+a%t):a}function g(a){var c,d,e,g,h,i,j;if(p="number"==typeof a?a:p,q=Math.floor((p+s/2)/s),e=p-q*s,g=0>e?1:-1,h=-g*e*2/s,d=t>>1,b.full_width?j="translateX(0)":(j="translateX("+(H[0].clientWidth-item_width)/2+"px) ",j+="translateY("+(H[0].clientHeight-item_width)/2+"px)"),I){var k=q%t,l=G.find(".indicator-item.active");l.index()!==k&&(l.removeClass("active"),G.find(".indicator-item").eq(k).addClass("active"))}for((!b.no_wrap||q>=0&&t>q)&&(i=o[f(q)],i.style[A]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h*c+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,i.style.display="block"),c=1;d>=c;++c)b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&0>e?1-h:1):(zTranslation=b.dist*(2*c+h*g),tweenedOpacity=1-.2*(2*c+h*g)),(!b.no_wrap||t>q+c)&&(i=o[f(q+c)],i.style[A]=j+" translateX("+(b.shift+(s*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,i.style.display="block"),b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&e>0?1-h:1):(zTranslation=b.dist*(2*c-h*g),tweenedOpacity=1-.2*(2*c-h*g)),(!b.no_wrap||q-c>=0)&&(i=o[f(q-c)],i.style[A]=j+" translateX("+(-b.shift+(-s*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,i.style.display="block");(!b.no_wrap||q>=0&&t>q)&&(i=o[f(q)],i.style[A]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,i.style.display="block")}function h(){var a,b,c,d;a=Date.now(),b=a-C,C=a,c=p-B,B=p,d=1e3*c/(1+b),z=.8*d+.2*z}function i(){var a,c;w&&(a=Date.now()-C,c=w*Math.exp(-a/b.time_constant),c>2||-2>c?(g(x-c),requestAnimationFrame(i)):g(x))}function j(c){if(E)return c.preventDefault(),c.stopPropagation(),!1;if(!b.full_width){var d=a(c.target).closest(".carousel-item").index(),e=q%t-d;0!==e&&(c.preventDefault(),c.stopPropagation()),k(d)}}function k(a){var c=q%t-a;b.no_wrap||(0>c?Math.abs(c+t)<Math.abs(c)&&(c+=t):c>0&&Math.abs(c-t)<c&&(c-=t)),0>c?H.trigger("carouselNext",[Math.abs(c)]):c>0&&H.trigger("carouselPrev",[c])}function l(a){r=!0,E=!1,F=!1,u=d(a),v=e(a),z=w=0,B=p,C=Date.now(),clearInterval(D),D=setInterval(h,100)}function m(a){var b,c,f;if(r)if(b=d(a),y=e(a),c=u-b,f=Math.abs(v-y),30>f&&!F)(c>2||-2>c)&&(E=!0,u=b,g(p+c));else{if(E)return a.preventDefault(),a.stopPropagation(),!1;F=!0}return E?(a.preventDefault(),a.stopPropagation(),!1):void 0}function n(a){return r?(r=!1,clearInterval(D),x=p,(z>10||-10>z)&&(w=.9*z,x=p+w),x=Math.round(x/s)*s,b.no_wrap&&(x>=s*(t-1)?x=s*(t-1):0>x&&(x=0)),w=x-p,C=Date.now(),requestAnimationFrame(i),E&&(a.preventDefault(),a.stopPropagation()),!1):void 0}var o,p,q,r,s,t,u,v,w,x,z,A,B,C,D,E,F,G=a('<ul class="indicators"></ul>'),H=a(this),I=H.attr("data-indicators")||b.indicators;if(H.hasClass("initialized"))return a(this).trigger("carouselNext",[1e-6]),!0;if(b.full_width){b.dist=0;var J=H.find(".carousel-item img").first();J.length?imageHeight=J.load(function(){H.css("height",a(this).height())}):(imageHeight=H.find(".carousel-item").first().height(),H.css("height",imageHeight)),I&&H.find(".carousel-fixed-item").addClass("with-indicators")}H.addClass("initialized"),r=!1,p=x=0,o=[],item_width=H.find(".carousel-item").first().innerWidth(),s=2*item_width+b.padding,H.find(".carousel-item").each(function(b){if(o.push(a(this)[0]),I){var c=a('<li class="indicator-item"></li>');0===b&&c.addClass("active"),c.click(function(){var b=a(this).index();k(b)}),G.append(c)}}),I&&H.append(G),t=o.length,A="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"!=typeof document.body.style[b]?(A=b,!1):!0}),window.onresize=g,c(),g(p),a(this).on("carouselNext",function(a,b){void 0===b&&(b=1),x=p+s*b,p!==x&&(w=x-p,C=Date.now(),requestAnimationFrame(i))}),a(this).on("carouselPrev",function(a,b){void 0===b&&(b=1),x=p-s*b,p!==x&&(w=x-p,C=Date.now(),requestAnimationFrame(i))}),a(this).on("carouselSet",function(a,b){void 0===b&&(b=0),k(b)})})},next:function(b){a(this).trigger("carouselNext",[b])},prev:function(b){a(this).trigger("carouselPrev",[b])},set:function(b){a(this).trigger("carouselSet",[b])}};a.fn.carousel=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.carousel"):b.init.apply(this,arguments)}}(jQuery);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        assign(childP, properties);
	    }
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },

	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }

	        // update the event in the store
	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */

	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);

	    this.primaryTouch = null;
	    this.lastTouches = [];
	}

	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }

	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}

	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];

	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}

	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture

	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;

	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }

	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(event) {
	            self.manager.emit(event, input);
	        }

	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }

	        emit(self.options.event); // simple 'eventName' events

	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }

	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);

	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {

	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);

	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',

	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',

	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',

	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',

	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',

	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;

	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        recognizer = this.get(recognizer);

	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);

	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }

	        return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;

	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	exports.i(__webpack_require__(8), "");

	// module
	exports.push([module.id, "html body {\n  background: green; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".materialize-red {\n  background-color: #e51c23 !important;\n}\n\n.materialize-red-text {\n  color: #e51c23 !important;\n}\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important;\n}\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important;\n}\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important;\n}\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important;\n}\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important;\n}\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important;\n}\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important;\n}\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important;\n}\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important;\n}\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important;\n}\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important;\n}\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important;\n}\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important;\n}\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important;\n}\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important;\n}\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important;\n}\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important;\n}\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important;\n}\n\n.red {\n  background-color: #F44336 !important;\n}\n\n.red-text {\n  color: #F44336 !important;\n}\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important;\n}\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important;\n}\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important;\n}\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important;\n}\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important;\n}\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important;\n}\n\n.red.lighten-2 {\n  background-color: #E57373 !important;\n}\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important;\n}\n\n.red.lighten-1 {\n  background-color: #EF5350 !important;\n}\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important;\n}\n\n.red.darken-1 {\n  background-color: #E53935 !important;\n}\n\n.red-text.text-darken-1 {\n  color: #E53935 !important;\n}\n\n.red.darken-2 {\n  background-color: #D32F2F !important;\n}\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important;\n}\n\n.red.darken-3 {\n  background-color: #C62828 !important;\n}\n\n.red-text.text-darken-3 {\n  color: #C62828 !important;\n}\n\n.red.darken-4 {\n  background-color: #B71C1C !important;\n}\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important;\n}\n\n.red.accent-1 {\n  background-color: #FF8A80 !important;\n}\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important;\n}\n\n.red.accent-2 {\n  background-color: #FF5252 !important;\n}\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important;\n}\n\n.red.accent-3 {\n  background-color: #FF1744 !important;\n}\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important;\n}\n\n.red.accent-4 {\n  background-color: #D50000 !important;\n}\n\n.red-text.text-accent-4 {\n  color: #D50000 !important;\n}\n\n.pink {\n  background-color: #e91e63 !important;\n}\n\n.pink-text {\n  color: #e91e63 !important;\n}\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n}\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important;\n}\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n}\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important;\n}\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n}\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important;\n}\n\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n}\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important;\n}\n\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n}\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important;\n}\n\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n}\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important;\n}\n\n.pink.darken-2 {\n  background-color: #c2185b !important;\n}\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important;\n}\n\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n}\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important;\n}\n\n.pink.darken-4 {\n  background-color: #880e4f !important;\n}\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important;\n}\n\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n}\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important;\n}\n\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n}\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important;\n}\n\n.pink.accent-3 {\n  background-color: #f50057 !important;\n}\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important;\n}\n\n.pink.accent-4 {\n  background-color: #c51162 !important;\n}\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important;\n}\n\n.purple {\n  background-color: #9c27b0 !important;\n}\n\n.purple-text {\n  color: #9c27b0 !important;\n}\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n}\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important;\n}\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n}\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important;\n}\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n}\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important;\n}\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n}\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important;\n}\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n}\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important;\n}\n\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n}\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important;\n}\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n}\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important;\n}\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n}\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important;\n}\n\n.purple.darken-4 {\n  background-color: #4a148c !important;\n}\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important;\n}\n\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n}\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important;\n}\n\n.purple.accent-2 {\n  background-color: #e040fb !important;\n}\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important;\n}\n\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n}\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important;\n}\n\n.purple.accent-4 {\n  background-color: #aa00ff !important;\n}\n\n.purple-text.text-accent-4 {\n  color: #aa00ff !important;\n}\n\n.deep-purple {\n  background-color: #673ab7 !important;\n}\n\n.deep-purple-text {\n  color: #673ab7 !important;\n}\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n}\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important;\n}\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n}\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important;\n}\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n}\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important;\n}\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n}\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important;\n}\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n}\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important;\n}\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n}\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important;\n}\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n}\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important;\n}\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n}\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important;\n}\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n}\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important;\n}\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n}\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important;\n}\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n}\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important;\n}\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n}\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important;\n}\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n}\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important;\n}\n\n.indigo {\n  background-color: #3f51b5 !important;\n}\n\n.indigo-text {\n  color: #3f51b5 !important;\n}\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n}\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important;\n}\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n}\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important;\n}\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n}\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important;\n}\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n}\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important;\n}\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n}\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important;\n}\n\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n}\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important;\n}\n\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n}\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important;\n}\n\n.indigo.darken-3 {\n  background-color: #283593 !important;\n}\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important;\n}\n\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n}\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important;\n}\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n}\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important;\n}\n\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n}\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important;\n}\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n}\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important;\n}\n\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n}\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important;\n}\n\n.blue {\n  background-color: #2196F3 !important;\n}\n\n.blue-text {\n  color: #2196F3 !important;\n}\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important;\n}\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important;\n}\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important;\n}\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important;\n}\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important;\n}\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important;\n}\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important;\n}\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important;\n}\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important;\n}\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important;\n}\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important;\n}\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important;\n}\n\n.blue.darken-2 {\n  background-color: #1976D2 !important;\n}\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important;\n}\n\n.blue.darken-3 {\n  background-color: #1565C0 !important;\n}\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important;\n}\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important;\n}\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important;\n}\n\n.blue.accent-1 {\n  background-color: #82B1FF !important;\n}\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important;\n}\n\n.blue.accent-2 {\n  background-color: #448AFF !important;\n}\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important;\n}\n\n.blue.accent-3 {\n  background-color: #2979FF !important;\n}\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important;\n}\n\n.blue.accent-4 {\n  background-color: #2962FF !important;\n}\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important;\n}\n\n.light-blue {\n  background-color: #03a9f4 !important;\n}\n\n.light-blue-text {\n  color: #03a9f4 !important;\n}\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n}\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important;\n}\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n}\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important;\n}\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n}\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important;\n}\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n}\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important;\n}\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n}\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important;\n}\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n}\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important;\n}\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n}\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important;\n}\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n}\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important;\n}\n\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n}\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important;\n}\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n}\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important;\n}\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n}\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important;\n}\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n}\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important;\n}\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n}\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important;\n}\n\n.cyan {\n  background-color: #00bcd4 !important;\n}\n\n.cyan-text {\n  color: #00bcd4 !important;\n}\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n}\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important;\n}\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n}\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important;\n}\n\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n}\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important;\n}\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n}\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important;\n}\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n}\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important;\n}\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n}\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important;\n}\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n}\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important;\n}\n\n.cyan.darken-3 {\n  background-color: #00838f !important;\n}\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important;\n}\n\n.cyan.darken-4 {\n  background-color: #006064 !important;\n}\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important;\n}\n\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n}\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important;\n}\n\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n}\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important;\n}\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n}\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important;\n}\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n}\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important;\n}\n\n.teal {\n  background-color: #009688 !important;\n}\n\n.teal-text {\n  color: #009688 !important;\n}\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n}\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important;\n}\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n}\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important;\n}\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n}\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important;\n}\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n}\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important;\n}\n\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n}\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important;\n}\n\n.teal.darken-1 {\n  background-color: #00897b !important;\n}\n\n.teal-text.text-darken-1 {\n  color: #00897b !important;\n}\n\n.teal.darken-2 {\n  background-color: #00796b !important;\n}\n\n.teal-text.text-darken-2 {\n  color: #00796b !important;\n}\n\n.teal.darken-3 {\n  background-color: #00695c !important;\n}\n\n.teal-text.text-darken-3 {\n  color: #00695c !important;\n}\n\n.teal.darken-4 {\n  background-color: #004d40 !important;\n}\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important;\n}\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n}\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important;\n}\n\n.teal.accent-2 {\n  background-color: #64ffda !important;\n}\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important;\n}\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n}\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important;\n}\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n}\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important;\n}\n\n.green {\n  background-color: #4CAF50 !important;\n}\n\n.green-text {\n  color: #4CAF50 !important;\n}\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important;\n}\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important;\n}\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important;\n}\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important;\n}\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important;\n}\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important;\n}\n\n.green.lighten-2 {\n  background-color: #81C784 !important;\n}\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important;\n}\n\n.green.lighten-1 {\n  background-color: #66BB6A !important;\n}\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important;\n}\n\n.green.darken-1 {\n  background-color: #43A047 !important;\n}\n\n.green-text.text-darken-1 {\n  color: #43A047 !important;\n}\n\n.green.darken-2 {\n  background-color: #388E3C !important;\n}\n\n.green-text.text-darken-2 {\n  color: #388E3C !important;\n}\n\n.green.darken-3 {\n  background-color: #2E7D32 !important;\n}\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important;\n}\n\n.green.darken-4 {\n  background-color: #1B5E20 !important;\n}\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important;\n}\n\n.green.accent-1 {\n  background-color: #B9F6CA !important;\n}\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important;\n}\n\n.green.accent-2 {\n  background-color: #69F0AE !important;\n}\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important;\n}\n\n.green.accent-3 {\n  background-color: #00E676 !important;\n}\n\n.green-text.text-accent-3 {\n  color: #00E676 !important;\n}\n\n.green.accent-4 {\n  background-color: #00C853 !important;\n}\n\n.green-text.text-accent-4 {\n  color: #00C853 !important;\n}\n\n.light-green {\n  background-color: #8bc34a !important;\n}\n\n.light-green-text {\n  color: #8bc34a !important;\n}\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n}\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important;\n}\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n}\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important;\n}\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n}\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important;\n}\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n}\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important;\n}\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n}\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important;\n}\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n}\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important;\n}\n\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n}\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important;\n}\n\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n}\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important;\n}\n\n.light-green.darken-4 {\n  background-color: #33691e !important;\n}\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important;\n}\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n}\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important;\n}\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n}\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important;\n}\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n}\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important;\n}\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n}\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important;\n}\n\n.lime {\n  background-color: #cddc39 !important;\n}\n\n.lime-text {\n  color: #cddc39 !important;\n}\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n}\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important;\n}\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n}\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important;\n}\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n}\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important;\n}\n\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n}\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important;\n}\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n}\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important;\n}\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n}\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important;\n}\n\n.lime.darken-2 {\n  background-color: #afb42b !important;\n}\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important;\n}\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n}\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important;\n}\n\n.lime.darken-4 {\n  background-color: #827717 !important;\n}\n\n.lime-text.text-darken-4 {\n  color: #827717 !important;\n}\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n}\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important;\n}\n\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n}\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important;\n}\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n}\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important;\n}\n\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n}\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important;\n}\n\n.yellow {\n  background-color: #ffeb3b !important;\n}\n\n.yellow-text {\n  color: #ffeb3b !important;\n}\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n}\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important;\n}\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n}\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important;\n}\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n}\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important;\n}\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n}\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important;\n}\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n}\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important;\n}\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n}\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important;\n}\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n}\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important;\n}\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n}\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important;\n}\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n}\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important;\n}\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n}\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important;\n}\n\n.yellow.accent-2 {\n  background-color: #ffff00 !important;\n}\n\n.yellow-text.text-accent-2 {\n  color: #ffff00 !important;\n}\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n}\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important;\n}\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n}\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important;\n}\n\n.amber {\n  background-color: #ffc107 !important;\n}\n\n.amber-text {\n  color: #ffc107 !important;\n}\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n}\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important;\n}\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n}\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important;\n}\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n}\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important;\n}\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n}\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important;\n}\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n}\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important;\n}\n\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n}\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important;\n}\n\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n}\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important;\n}\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n}\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important;\n}\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n}\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important;\n}\n\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n}\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important;\n}\n\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n}\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important;\n}\n\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n}\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important;\n}\n\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n}\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important;\n}\n\n.orange {\n  background-color: #ff9800 !important;\n}\n\n.orange-text {\n  color: #ff9800 !important;\n}\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n}\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important;\n}\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n}\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important;\n}\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n}\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important;\n}\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n}\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important;\n}\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n}\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important;\n}\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n}\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important;\n}\n\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n}\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important;\n}\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n}\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important;\n}\n\n.orange.darken-4 {\n  background-color: #e65100 !important;\n}\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important;\n}\n\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n}\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important;\n}\n\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n}\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important;\n}\n\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n}\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important;\n}\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n}\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important;\n}\n\n.deep-orange {\n  background-color: #ff5722 !important;\n}\n\n.deep-orange-text {\n  color: #ff5722 !important;\n}\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n}\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important;\n}\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n}\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important;\n}\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n}\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important;\n}\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n}\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important;\n}\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n}\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important;\n}\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n}\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important;\n}\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n}\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important;\n}\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n}\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important;\n}\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n}\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important;\n}\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n}\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important;\n}\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n}\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important;\n}\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n}\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important;\n}\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n}\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important;\n}\n\n.brown {\n  background-color: #795548 !important;\n}\n\n.brown-text {\n  color: #795548 !important;\n}\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n}\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important;\n}\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n}\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important;\n}\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n}\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important;\n}\n\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n}\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important;\n}\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n}\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important;\n}\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n}\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important;\n}\n\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n}\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important;\n}\n\n.brown.darken-3 {\n  background-color: #4e342e !important;\n}\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important;\n}\n\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n}\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important;\n}\n\n.blue-grey {\n  background-color: #607d8b !important;\n}\n\n.blue-grey-text {\n  color: #607d8b !important;\n}\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n}\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important;\n}\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n}\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important;\n}\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n}\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important;\n}\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n}\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important;\n}\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n}\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important;\n}\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n}\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important;\n}\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n}\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important;\n}\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n}\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important;\n}\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n}\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important;\n}\n\n.grey {\n  background-color: #9e9e9e !important;\n}\n\n.grey-text {\n  color: #9e9e9e !important;\n}\n\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n}\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important;\n}\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n}\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important;\n}\n\n.grey.lighten-3 {\n  background-color: #eeeeee !important;\n}\n\n.grey-text.text-lighten-3 {\n  color: #eeeeee !important;\n}\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n}\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important;\n}\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n}\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important;\n}\n\n.grey.darken-1 {\n  background-color: #757575 !important;\n}\n\n.grey-text.text-darken-1 {\n  color: #757575 !important;\n}\n\n.grey.darken-2 {\n  background-color: #616161 !important;\n}\n\n.grey-text.text-darken-2 {\n  color: #616161 !important;\n}\n\n.grey.darken-3 {\n  background-color: #424242 !important;\n}\n\n.grey-text.text-darken-3 {\n  color: #424242 !important;\n}\n\n.grey.darken-4 {\n  background-color: #212121 !important;\n}\n\n.grey-text.text-darken-4 {\n  color: #212121 !important;\n}\n\n.black {\n  background-color: #000000 !important;\n}\n\n.black-text {\n  color: #000000 !important;\n}\n\n.white {\n  background-color: #FFFFFF !important;\n}\n\n.white-text {\n  color: #FFFFFF !important;\n}\n\n.transparent {\n  background-color: transparent !important;\n}\n\n.transparent-text {\n  color: transparent !important;\n}\n\n/* ==========================================================================\n   Materialize variables\n   ========================================================================== */\n/**\n * Table of Contents:\n *\n *  1. Colors\n *  2. Badges\n *  3. Buttons\n *  4. Cards\n *  5. Collapsible\n *  6. Chips\n *  7. Date Picker\n *  8. Dropdown\n *  10. Forms\n *  11. Global\n *  12. Grid\n *  13. Navigation Bar\n *  14. Side Navigation\n *  15. Photo Slider\n *  16. Spinners | Loaders\n *  17. Tabs\n *  18. Tables\n *  19. Toasts\n *  20. Typography\n *  21. Footer\n *  22. Flow Text\n *  23. Collections\n *  24. Progress Bar\n */\n/* 1. Colors\n   ========================================================================== */\n/* 2. Badges\n   ========================================================================== */\n/* 3. Buttons\n   ========================================================================== */\n/* 4. Cards\n   ========================================================================== */\n/* 5. Collapsible\n   ========================================================================== */\n/* 6. Chips\n   ========================================================================== */\n/* 7. Date Picker\n   ========================================================================== */\n/* 8. Dropdown\n   ========================================================================== */\n/* 9. Fonts\n   ========================================================================== */\n/* 10. Forms\n   ========================================================================== */\n/* 11. Global\n   ========================================================================== */\n/* 12. Grid\n   ========================================================================== */\n/* 13. Navigation Bar\n   ========================================================================== */\n/* 14. Side Navigation\n   ========================================================================== */\n/* 15. Photo Slider\n   ========================================================================== */\n/* 16. Spinners | Loaders\n   ========================================================================== */\n/* 17. Tabs\n   ========================================================================== */\n/* 18. Tables\n   ========================================================================== */\n/* 19. Toasts\n   ========================================================================== */\n/* 20. Typography\n   ========================================================================== */\n/* 21. Footer\n   ========================================================================== */\n/* 22. Flow Text\n   ========================================================================== */\n/* 23. Collections\n   ========================================================================== */\n/* 24. Progress Bar\n   ========================================================================== */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nul {\n  padding: 0;\n  list-style-type: none;\n}\n\nul.browser-default,\nul.browser-default li {\n  list-style-type: initial;\n}\n\nul li {\n  list-style-type: none;\n}\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.valign-wrapper {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.valign-wrapper .valign {\n  display: block;\n}\n\n.clearfix {\n  clear: both;\n}\n\n.z-depth-0 {\n  box-shadow: none !important;\n}\n\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n\n.z-depth-2 {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.z-depth-3 {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n}\n\n.z-depth-4, .modal {\n  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21);\n}\n\n.z-depth-5 {\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n}\n\n.hoverable {\n  transition: box-shadow .25s;\n  box-shadow: 0;\n}\n\n.hoverable:hover {\n  transition: box-shadow .25s;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0;\n}\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73;\n}\n\ni {\n  line-height: inherit;\n}\n\ni.left {\n  float: left;\n  margin-right: 15px;\n}\n\ni.right {\n  float: right;\n  margin-left: 15px;\n}\n\ni.tiny {\n  font-size: 1rem;\n}\n\ni.small {\n  font-size: 2rem;\n}\n\ni.medium {\n  font-size: 4rem;\n}\n\ni.large {\n  font-size: 6rem;\n}\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto;\n}\n\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px;\n}\n\n.pagination li a {\n  color: #444;\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0 10px;\n  line-height: 30px;\n}\n\n.pagination li.active a {\n  color: #fff;\n}\n\n.pagination li.active {\n  background-color: #ee6e73;\n}\n\n.pagination li.disabled a {\n  cursor: default;\n  color: #999;\n}\n\n.pagination li i {\n  font-size: 2rem;\n}\n\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none;\n}\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%;\n  }\n  .pagination li.prev,\n  .pagination li.next {\n    width: 10%;\n  }\n  .pagination li.pages {\n    width: 80%;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.breadcrumb i,\n.breadcrumb [class^=\"mdi-\"], .breadcrumb [class*=\"mdi-\"],\n.breadcrumb i.material-icons {\n  display: inline-block;\n  float: left;\n  font-size: 24px;\n}\n\n.breadcrumb:before {\n  content: '\\E5CC';\n  color: rgba(255, 255, 255, 0.7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased;\n}\n\n.breadcrumb:first-child:before {\n  display: none;\n}\n\n.breadcrumb:last-child {\n  color: #fff;\n}\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n}\n\n.parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.parallax img {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.pin-top, .pin-bottom {\n  position: relative;\n}\n\n.pinned {\n  position: fixed !important;\n}\n\n/*********************\n  Transition Classes\n**********************/\nul.staggered-list li {\n  opacity: 0;\n}\n\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%;\n}\n\n/*********************\n  Media Query Classes\n**********************/\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center;\n  }\n}\n\nfooter.page-footer {\n  margin-top: 20px;\n  padding-top: 20px;\n  background-color: #ee6e73;\n}\n\nfooter.page-footer .footer-copyright {\n  overflow: hidden;\n  height: 50px;\n  line-height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: rgba(51, 51, 51, 0.08);\n}\n\ntable, th, td {\n  border: none;\n}\n\ntable {\n  width: 100%;\n  display: table;\n}\n\ntable.bordered > thead > tr,\ntable.bordered > tbody > tr {\n  border-bottom: 1px solid #d0d0d0;\n}\n\ntable.striped > tbody > tr:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n\ntable.striped > tbody > tr > td {\n  border-radius: 0;\n}\n\ntable.highlight > tbody > tr {\n  transition: background-color .25s ease;\n}\n\ntable.highlight > tbody > tr:hover {\n  background-color: #f2f2f2;\n}\n\ntable.centered thead tr th, table.centered tbody tr td {\n  text-align: center;\n}\n\nthead {\n  border-bottom: 1px solid #d0d0d0;\n}\n\ntd, th {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n    /* sort out borders */\n  }\n  table.responsive-table td:empty:before {\n    content: '\\A0';\n  }\n  table.responsive-table th,\n  table.responsive-table td {\n    margin: 0;\n    vertical-align: top;\n  }\n  table.responsive-table th {\n    text-align: left;\n  }\n  table.responsive-table thead {\n    display: block;\n    float: left;\n  }\n  table.responsive-table thead tr {\n    display: block;\n    padding: 0 10px 0 0;\n  }\n  table.responsive-table thead tr th::before {\n    content: \"\\A0\";\n  }\n  table.responsive-table tbody {\n    display: block;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n  table.responsive-table tbody tr {\n    display: inline-block;\n    vertical-align: top;\n  }\n  table.responsive-table th {\n    display: block;\n    text-align: right;\n  }\n  table.responsive-table td {\n    display: block;\n    min-height: 1.25em;\n    text-align: left;\n  }\n  table.responsive-table tr {\n    padding: 0 10px;\n  }\n  table.responsive-table thead {\n    border: 0;\n    border-right: 1px solid #d0d0d0;\n  }\n  table.responsive-table.bordered th {\n    border-bottom: 0;\n    border-left: 0;\n  }\n  table.responsive-table.bordered td {\n    border-left: 0;\n    border-right: 0;\n    border-bottom: 0;\n  }\n  table.responsive-table.bordered tr {\n    border: 0;\n  }\n  table.responsive-table.bordered tbody tr {\n    border-right: 1px solid #d0d0d0;\n  }\n}\n\n.collection {\n  margin: 0.5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n}\n\n.collection .collection-item {\n  background-color: #fff;\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.collection .collection-item.avatar {\n  min-height: 84px;\n  padding-left: 72px;\n  position: relative;\n}\n\n.collection .collection-item.avatar .circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.collection .collection-item.avatar i.circle {\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  background-color: #999;\n  text-align: center;\n}\n\n.collection .collection-item.avatar .title {\n  font-size: 16px;\n}\n\n.collection .collection-item.avatar p {\n  margin: 0;\n}\n\n.collection .collection-item.avatar .secondary-content {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.collection .collection-item:last-child {\n  border-bottom: none;\n}\n\n.collection .collection-item.active {\n  background-color: #26a69a;\n  color: #eafaf9;\n}\n\n.collection .collection-item.active .secondary-content {\n  color: #fff;\n}\n\n.collection a.collection-item {\n  display: block;\n  transition: .25s;\n  color: #26a69a;\n}\n\n.collection a.collection-item:not(.active):hover {\n  background-color: #ddd;\n}\n\n.collection.with-header .collection-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 10px 20px;\n}\n\n.collection.with-header .collection-item {\n  padding-left: 30px;\n}\n\n.collection.with-header .collection-item.avatar {\n  padding-left: 72px;\n}\n\n.secondary-content {\n  float: right;\n  color: #26a69a;\n}\n\n.collapsible .collection {\n  margin: 0;\n  border: none;\n}\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: inherit;\n  color: #757575;\n  position: absolute;\n  right: 15px;\n  box-sizing: border-box;\n}\n\nspan.badge.new {\n  font-weight: 300;\n  font-size: 0.8rem;\n  color: #fff;\n  background-color: #26a69a;\n  border-radius: 2px;\n}\n\nspan.badge.new:after {\n  content: \" new\";\n}\n\nspan.badge[data-badge-caption]::after {\n  content: \" \" attr(data-badge-caption);\n}\n\nnav ul a span.badge {\n  position: static;\n  margin-left: 4px;\n  line-height: 0;\n}\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-container iframe, .video-container object, .video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden;\n}\n\n.progress .determinate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #26a69a;\n  transition: width .3s linear;\n}\n\n.progress .indeterminate {\n  background-color: #26a69a;\n}\n\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n          animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n          animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n          animation-delay: 1.15s;\n}\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n/*******************\n  Utility Classes\n*******************/\n.hide {\n  display: none !important;\n}\n\n.left-align {\n  text-align: left;\n}\n\n.right-align {\n  text-align: right;\n}\n\n.center, .center-align {\n  text-align: center;\n}\n\n.left {\n  float: left !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.no-select, input[type=range],\ninput[type=range] + .thumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.circle {\n  border-radius: 50%;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n/* This is needed for some mobile phones to display the Google Icon font properly */\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n     -moz-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%;\n}\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%;\n  }\n}\n\n.container .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.section.no-pad {\n  padding: 0;\n}\n\n.section.no-pad-bot {\n  padding-bottom: 0;\n}\n\n.section.no-pad-top {\n  padding-top: 0;\n}\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row .col {\n  float: left;\n  box-sizing: border-box;\n  padding: 0 0.75rem;\n  min-height: 1px;\n}\n\n.row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n  position: relative;\n}\n\n.row .col.s1 {\n  width: 8.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s2 {\n  width: 16.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s3 {\n  width: 25%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s4 {\n  width: 33.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s5 {\n  width: 41.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s6 {\n  width: 50%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s7 {\n  width: 58.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s8 {\n  width: 66.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s9 {\n  width: 75%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s10 {\n  width: 83.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s11 {\n  width: 91.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s12 {\n  width: 100%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.offset-s1 {\n  margin-left: 8.3333333333%;\n}\n\n.row .col.pull-s1 {\n  right: 8.3333333333%;\n}\n\n.row .col.push-s1 {\n  left: 8.3333333333%;\n}\n\n.row .col.offset-s2 {\n  margin-left: 16.6666666667%;\n}\n\n.row .col.pull-s2 {\n  right: 16.6666666667%;\n}\n\n.row .col.push-s2 {\n  left: 16.6666666667%;\n}\n\n.row .col.offset-s3 {\n  margin-left: 25%;\n}\n\n.row .col.pull-s3 {\n  right: 25%;\n}\n\n.row .col.push-s3 {\n  left: 25%;\n}\n\n.row .col.offset-s4 {\n  margin-left: 33.3333333333%;\n}\n\n.row .col.pull-s4 {\n  right: 33.3333333333%;\n}\n\n.row .col.push-s4 {\n  left: 33.3333333333%;\n}\n\n.row .col.offset-s5 {\n  margin-left: 41.6666666667%;\n}\n\n.row .col.pull-s5 {\n  right: 41.6666666667%;\n}\n\n.row .col.push-s5 {\n  left: 41.6666666667%;\n}\n\n.row .col.offset-s6 {\n  margin-left: 50%;\n}\n\n.row .col.pull-s6 {\n  right: 50%;\n}\n\n.row .col.push-s6 {\n  left: 50%;\n}\n\n.row .col.offset-s7 {\n  margin-left: 58.3333333333%;\n}\n\n.row .col.pull-s7 {\n  right: 58.3333333333%;\n}\n\n.row .col.push-s7 {\n  left: 58.3333333333%;\n}\n\n.row .col.offset-s8 {\n  margin-left: 66.6666666667%;\n}\n\n.row .col.pull-s8 {\n  right: 66.6666666667%;\n}\n\n.row .col.push-s8 {\n  left: 66.6666666667%;\n}\n\n.row .col.offset-s9 {\n  margin-left: 75%;\n}\n\n.row .col.pull-s9 {\n  right: 75%;\n}\n\n.row .col.push-s9 {\n  left: 75%;\n}\n\n.row .col.offset-s10 {\n  margin-left: 83.3333333333%;\n}\n\n.row .col.pull-s10 {\n  right: 83.3333333333%;\n}\n\n.row .col.push-s10 {\n  left: 83.3333333333%;\n}\n\n.row .col.offset-s11 {\n  margin-left: 91.6666666667%;\n}\n\n.row .col.pull-s11 {\n  right: 91.6666666667%;\n}\n\n.row .col.push-s11 {\n  left: 91.6666666667%;\n}\n\n.row .col.offset-s12 {\n  margin-left: 100%;\n}\n\n.row .col.pull-s12 {\n  right: 100%;\n}\n\n.row .col.push-s12 {\n  left: 100%;\n}\n\n@media only screen and (min-width: 601px) {\n  .row .col.m1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.m12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-m1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-m1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-m1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-m2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-m2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-m2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-m3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-m3 {\n    right: 25%;\n  }\n  .row .col.push-m3 {\n    left: 25%;\n  }\n  .row .col.offset-m4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-m4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-m4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-m5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-m5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-m5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-m6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-m6 {\n    right: 50%;\n  }\n  .row .col.push-m6 {\n    left: 50%;\n  }\n  .row .col.offset-m7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-m7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-m7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-m8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-m8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-m8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-m9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-m9 {\n    right: 75%;\n  }\n  .row .col.push-m9 {\n    left: 75%;\n  }\n  .row .col.offset-m10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-m10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-m10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-m11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-m11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-m11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-m12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-m12 {\n    right: 100%;\n  }\n  .row .col.push-m12 {\n    left: 100%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .row .col.l1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.l12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n  .row .col.offset-l1 {\n    margin-left: 8.3333333333%;\n  }\n  .row .col.pull-l1 {\n    right: 8.3333333333%;\n  }\n  .row .col.push-l1 {\n    left: 8.3333333333%;\n  }\n  .row .col.offset-l2 {\n    margin-left: 16.6666666667%;\n  }\n  .row .col.pull-l2 {\n    right: 16.6666666667%;\n  }\n  .row .col.push-l2 {\n    left: 16.6666666667%;\n  }\n  .row .col.offset-l3 {\n    margin-left: 25%;\n  }\n  .row .col.pull-l3 {\n    right: 25%;\n  }\n  .row .col.push-l3 {\n    left: 25%;\n  }\n  .row .col.offset-l4 {\n    margin-left: 33.3333333333%;\n  }\n  .row .col.pull-l4 {\n    right: 33.3333333333%;\n  }\n  .row .col.push-l4 {\n    left: 33.3333333333%;\n  }\n  .row .col.offset-l5 {\n    margin-left: 41.6666666667%;\n  }\n  .row .col.pull-l5 {\n    right: 41.6666666667%;\n  }\n  .row .col.push-l5 {\n    left: 41.6666666667%;\n  }\n  .row .col.offset-l6 {\n    margin-left: 50%;\n  }\n  .row .col.pull-l6 {\n    right: 50%;\n  }\n  .row .col.push-l6 {\n    left: 50%;\n  }\n  .row .col.offset-l7 {\n    margin-left: 58.3333333333%;\n  }\n  .row .col.pull-l7 {\n    right: 58.3333333333%;\n  }\n  .row .col.push-l7 {\n    left: 58.3333333333%;\n  }\n  .row .col.offset-l8 {\n    margin-left: 66.6666666667%;\n  }\n  .row .col.pull-l8 {\n    right: 66.6666666667%;\n  }\n  .row .col.push-l8 {\n    left: 66.6666666667%;\n  }\n  .row .col.offset-l9 {\n    margin-left: 75%;\n  }\n  .row .col.pull-l9 {\n    right: 75%;\n  }\n  .row .col.push-l9 {\n    left: 75%;\n  }\n  .row .col.offset-l10 {\n    margin-left: 83.3333333333%;\n  }\n  .row .col.pull-l10 {\n    right: 83.3333333333%;\n  }\n  .row .col.push-l10 {\n    left: 83.3333333333%;\n  }\n  .row .col.offset-l11 {\n    margin-left: 91.6666666667%;\n  }\n  .row .col.pull-l11 {\n    right: 91.6666666667%;\n  }\n  .row .col.push-l11 {\n    left: 91.6666666667%;\n  }\n  .row .col.offset-l12 {\n    margin-left: 100%;\n  }\n  .row .col.pull-l12 {\n    right: 100%;\n  }\n  .row .col.push-l12 {\n    left: 100%;\n  }\n}\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav a {\n  color: #fff;\n}\n\nnav i,\nnav [class^=\"mdi-\"], nav [class*=\"mdi-\"],\nnav i.material-icons {\n  display: block;\n  font-size: 2rem;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .nav-wrapper {\n  position: relative;\n  height: 100%;\n}\n\n@media only screen and (min-width: 993px) {\n  nav a.button-collapse {\n    display: none;\n  }\n}\n\nnav .button-collapse {\n  float: left;\n  position: relative;\n  z-index: 1;\n  height: 56px;\n}\n\nnav .button-collapse i {\n  font-size: 2.7rem;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .brand-logo {\n  position: absolute;\n  color: #fff;\n  display: inline-block;\n  font-size: 2.1rem;\n  padding: 0;\n  white-space: nowrap;\n}\n\nnav .brand-logo.center {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n  }\n  nav .brand-logo.left, nav .brand-logo.right {\n    padding: 0;\n    -webkit-transform: none;\n            transform: none;\n  }\n  nav .brand-logo.left {\n    left: 0.5rem;\n  }\n  nav .brand-logo.right {\n    right: 0.5rem;\n    left: auto;\n  }\n}\n\nnav .brand-logo.right {\n  right: 0.5rem;\n  padding: 0;\n}\n\nnav .brand-logo i,\nnav .brand-logo [class^=\"mdi-\"], nav .brand-logo [class*=\"mdi-\"],\nnav .brand-logo i.material-icons {\n  float: left;\n  margin-right: 15px;\n}\n\nnav ul {\n  margin: 0;\n}\n\nnav ul li {\n  transition: background-color .3s;\n  float: left;\n  padding: 0;\n}\n\nnav ul li.active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul a {\n  transition: background-color .3s;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer;\n}\n\nnav ul a.btn, nav ul a.btn-large, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {\n  margin-top: -2px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\nnav ul a:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul.left {\n  float: left;\n}\n\nnav form {\n  height: 100%;\n}\n\nnav .input-field {\n  margin: 0;\n  height: 100%;\n}\n\nnav .input-field input {\n  height: 100%;\n  font-size: 1.2rem;\n  border: none;\n  padding-left: 2rem;\n}\n\nnav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n  border: none;\n  box-shadow: none;\n}\n\nnav .input-field label {\n  top: 0;\n  left: 0;\n}\n\nnav .input-field label i {\n  color: rgba(255, 255, 255, 0.7);\n  transition: color .3s;\n}\n\nnav .input-field label.active i {\n  color: #fff;\n}\n\nnav .input-field label.active {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 998;\n}\n\n.navbar-fixed nav {\n  position: fixed;\n}\n\n@media only screen and (min-width: 601px) {\n  nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px;\n  }\n  .navbar-fixed {\n    height: 64px;\n  }\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Thin), url(" + __webpack_require__(9) + ");\n  src: url(" + __webpack_require__(9) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(10) + ") format(\"woff2\"), url(" + __webpack_require__(11) + ") format(\"woff\"), url(" + __webpack_require__(12) + ") format(\"truetype\");\n  font-weight: 200;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Light), url(" + __webpack_require__(13) + ");\n  src: url(" + __webpack_require__(13) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(14) + ") format(\"woff2\"), url(" + __webpack_require__(15) + ") format(\"woff\"), url(" + __webpack_require__(16) + ") format(\"truetype\");\n  font-weight: 300;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Regular), url(" + __webpack_require__(17) + ");\n  src: url(" + __webpack_require__(17) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(18) + ") format(\"woff2\"), url(" + __webpack_require__(19) + ") format(\"woff\"), url(" + __webpack_require__(20) + ") format(\"truetype\");\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(21) + ");\n  src: url(" + __webpack_require__(21) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(22) + ") format(\"woff2\"), url(" + __webpack_require__(23) + ") format(\"woff\"), url(" + __webpack_require__(24) + ") format(\"truetype\");\n  font-weight: 500;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(25) + ");\n  src: url(" + __webpack_require__(25) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(26) + ") format(\"woff2\"), url(" + __webpack_require__(27) + ") format(\"woff\"), url(" + __webpack_require__(28) + ") format(\"truetype\");\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n@media only screen and (min-width: 0) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 14.5px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 15px;\n  }\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.1;\n}\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit;\n}\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.1rem 0 1.68rem 0;\n}\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0;\n}\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.46rem 0 1.168rem 0;\n}\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.14rem 0 0.912rem 0;\n}\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 0.82rem 0 0.656rem 0;\n}\n\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 0.5rem 0 0.4rem 0;\n}\n\nem {\n  font-style: italic;\n}\n\nstrong {\n  font-weight: 500;\n}\n\nsmall {\n  font-size: 75%;\n}\n\n.light, footer.page-footer .footer-copyright {\n  font-weight: 300;\n}\n\n.thin {\n  font-weight: 200;\n}\n\n.flow-text {\n  font-weight: 300;\n}\n\n@media only screen and (min-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n@media only screen and (min-width: 390px) {\n  .flow-text {\n    font-size: 1.224rem;\n  }\n}\n\n@media only screen and (min-width: 420px) {\n  .flow-text {\n    font-size: 1.248rem;\n  }\n}\n\n@media only screen and (min-width: 450px) {\n  .flow-text {\n    font-size: 1.272rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .flow-text {\n    font-size: 1.296rem;\n  }\n}\n\n@media only screen and (min-width: 510px) {\n  .flow-text {\n    font-size: 1.32rem;\n  }\n}\n\n@media only screen and (min-width: 540px) {\n  .flow-text {\n    font-size: 1.344rem;\n  }\n}\n\n@media only screen and (min-width: 570px) {\n  .flow-text {\n    font-size: 1.368rem;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .flow-text {\n    font-size: 1.392rem;\n  }\n}\n\n@media only screen and (min-width: 630px) {\n  .flow-text {\n    font-size: 1.416rem;\n  }\n}\n\n@media only screen and (min-width: 660px) {\n  .flow-text {\n    font-size: 1.44rem;\n  }\n}\n\n@media only screen and (min-width: 690px) {\n  .flow-text {\n    font-size: 1.464rem;\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .flow-text {\n    font-size: 1.488rem;\n  }\n}\n\n@media only screen and (min-width: 750px) {\n  .flow-text {\n    font-size: 1.512rem;\n  }\n}\n\n@media only screen and (min-width: 780px) {\n  .flow-text {\n    font-size: 1.536rem;\n  }\n}\n\n@media only screen and (min-width: 810px) {\n  .flow-text {\n    font-size: 1.56rem;\n  }\n}\n\n@media only screen and (min-width: 840px) {\n  .flow-text {\n    font-size: 1.584rem;\n  }\n}\n\n@media only screen and (min-width: 870px) {\n  .flow-text {\n    font-size: 1.608rem;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .flow-text {\n    font-size: 1.632rem;\n  }\n}\n\n@media only screen and (min-width: 930px) {\n  .flow-text {\n    font-size: 1.656rem;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.68rem;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n.card-panel {\n  transition: box-shadow .25s;\n  padding: 20px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  transition: box-shadow .25s;\n  border-radius: 2px;\n}\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300;\n}\n\n.card .card-title.activator {\n  cursor: pointer;\n}\n\n.card.small, .card.medium, .card.large {\n  position: relative;\n}\n\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n  max-height: 60%;\n  overflow: hidden;\n}\n\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n  max-height: 40%;\n}\n\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card.small {\n  height: 300px;\n}\n\n.card.medium {\n  height: 400px;\n}\n\n.card.large {\n  height: 500px;\n}\n\n.card.horizontal {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible;\n}\n\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n  height: 100%;\n}\n\n.card.horizontal .card-image {\n  max-width: 50%;\n}\n\n.card.horizontal .card-image img {\n  max-width: 100%;\n  width: auto;\n}\n\n.card.horizontal .card-stacked {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n}\n\n.card.horizontal .card-stacked .card-content {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.card.sticky-action .card-action {\n  z-index: 2;\n}\n\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px;\n}\n\n.card .card-image {\n  position: relative;\n}\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 20px;\n}\n\n.card .card-content {\n  padding: 20px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-content p {\n  margin: 0;\n  color: inherit;\n}\n\n.card .card-content .card-title {\n  line-height: 48px;\n}\n\n.card .card-action {\n  position: relative;\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  padding: 20px;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 20px;\n  transition: color .3s ease;\n  text-transform: uppercase;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6;\n}\n\n.card .card-reveal {\n  padding: 20px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none;\n}\n\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block;\n}\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000;\n}\n\n@media only screen and (max-width: 600px) {\n  #toast-container {\n    min-width: 100%;\n    bottom: 0%;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  #toast-container {\n    left: 5%;\n    bottom: 7%;\n    max-width: 90%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  #toast-container {\n    top: 10%;\n    right: 7%;\n    max-width: 86%;\n  }\n}\n\n.toast {\n  border-radius: 2px;\n  top: 0;\n  width: auto;\n  clear: both;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  word-break: break-all;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.toast .btn, .toast .btn-large, .toast .btn-flat {\n  margin: 0;\n  margin-left: 3rem;\n}\n\n.toast.rounded {\n  border-radius: 24px;\n}\n\n@media only screen and (max-width: 600px) {\n  .toast {\n    width: 100%;\n    border-radius: 0;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  .toast {\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .toast {\n    float: right;\n  }\n}\n\n.tabs {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  background-color: #fff;\n  margin: 0 auto;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.tabs .tab {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  display: block;\n  float: left;\n  text-align: center;\n  line-height: 48px;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  letter-spacing: .8px;\n  width: 15%;\n  min-width: 80px;\n}\n\n.tabs .tab a {\n  color: #ee6e73;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: color .28s ease;\n}\n\n.tabs .tab a:hover {\n  color: #f9c9cb;\n}\n\n.tabs .tab.disabled a {\n  color: #f9c9cb;\n  cursor: default;\n}\n\n.tabs .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background-color: #f6b2b5;\n  will-change: left, right;\n}\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  display: none;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  display: none;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.btn, .btn-large,\n.btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  outline: 0;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.btn.disabled, .disabled.btn-large,\n.btn-floating.disabled,\n.btn-large.disabled,\n.btn:disabled,\n.btn-large:disabled,\n.btn-large:disabled,\n.btn-floating:disabled,\n.btn[disabled],\n[disabled].btn-large,\n.btn-large[disabled],\n.btn-floating[disabled] {\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default;\n}\n\n.btn.disabled *, .disabled.btn-large *,\n.btn-floating.disabled *,\n.btn-large.disabled *,\n.btn:disabled *, .btn-large:disabled *,\n.btn-large:disabled *,\n.btn-floating:disabled *,\n.btn[disabled] *, [disabled].btn-large *,\n.btn-large[disabled] *,\n.btn-floating[disabled] * {\n  pointer-events: none;\n}\n\n.btn.disabled:hover, .disabled.btn-large:hover,\n.btn-floating.disabled:hover,\n.btn-large.disabled:hover,\n.btn:disabled:hover,\n.btn-large:disabled:hover,\n.btn-large:disabled:hover,\n.btn-floating:disabled:hover,\n.btn[disabled]:hover,\n[disabled].btn-large:hover,\n.btn-large[disabled]:hover,\n.btn-floating[disabled]:hover {\n  background-color: #DFDFDF !important;\n  color: #9F9F9F !important;\n}\n\n.btn i, .btn-large i,\n.btn-floating i,\n.btn-large i,\n.btn-flat i {\n  font-size: 1.3rem;\n  line-height: inherit;\n}\n\n.btn, .btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  transition: .2s ease-out;\n  cursor: pointer;\n}\n\n.btn:hover, .btn-large:hover {\n  background-color: #2bbbad;\n}\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 37px;\n  height: 37px;\n  line-height: 37px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  transition: .3s;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.btn-floating i {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 1.6rem;\n  line-height: 37px;\n}\n\n.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.btn-floating:before {\n  border-radius: 0;\n}\n\n.btn-floating.btn-large {\n  width: 55.5px;\n  height: 55.5px;\n}\n\n.btn-floating.btn-large i {\n  line-height: 55.5px;\n}\n\nbutton.btn-floating {\n  border: none;\n}\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 998;\n}\n\n.fixed-action-btn.active ul {\n  visibility: visible;\n}\n\n.fixed-action-btn.horizontal {\n  padding: 0 0 0 15px;\n}\n\n.fixed-action-btn.horizontal ul {\n  text-align: right;\n  right: 64px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  height: 100%;\n  left: auto;\n  width: 500px;\n  /*width 100% only goes to width of button container */\n}\n\n.fixed-action-btn.horizontal ul li {\n  display: inline-block;\n  margin: 15px 15px 0 0;\n}\n\n.fixed-action-btn ul {\n  left: 0;\n  right: 0;\n  text-align: center;\n  position: absolute;\n  bottom: 64px;\n  margin: 0;\n  visibility: hidden;\n}\n\n.fixed-action-btn ul li {\n  margin-bottom: 15px;\n}\n\n.fixed-action-btn ul a.btn-floating {\n  opacity: 0;\n}\n\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  transition: background-color .2s;\n}\n\n.btn-flat:focus, .btn-flat:active {\n  background-color: transparent;\n}\n\n.btn-flat:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: none;\n}\n\n.btn-flat.disabled {\n  color: #b3b3b3;\n  cursor: default;\n}\n\n.btn-large {\n  height: 54px;\n  line-height: 54px;\n}\n\n.btn-large i {\n  font-size: 1.6rem;\n}\n\n.btn-block {\n  display: block;\n}\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  max-height: 650px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  z-index: 999;\n  will-change: width, height;\n}\n\n.dropdown-content li {\n  clear: both;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  min-height: 50px;\n  line-height: 1.5rem;\n  width: 100%;\n  text-align: left;\n  text-transform: none;\n}\n\n.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {\n  background-color: #eee;\n}\n\n.dropdown-content li.active.selected {\n  background-color: #e1e1e1;\n}\n\n.dropdown-content li.divider {\n  min-height: 0;\n  height: 1px;\n}\n\n.dropdown-content li > a, .dropdown-content li > span {\n  font-size: 16px;\n  color: #26a69a;\n  display: block;\n  line-height: 22px;\n  padding: 14px 16px;\n}\n\n.dropdown-content li > span > label {\n  top: 1px;\n  left: 3px;\n  height: 18px;\n}\n\n.dropdown-content li > a > i {\n  height: inherit;\n  line-height: inherit;\n}\n\n/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  will-change: opacity, transform;\n  transition: all .3s ease-out;\n}\n\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light .waves-ripple {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red .waves-ripple {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow .waves-ripple {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange .waves-ripple {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple .waves-ripple {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green .waves-ripple {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal .waves-ripple {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect img {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition {\n  transition: none !important;\n}\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\n}\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block {\n  display: block;\n}\n\n/* Firefox Bug: link not triggered */\n.waves-effect .waves-ripple {\n  z-index: -1;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity;\n}\n\n@media only screen and (max-width: 992px) {\n  .modal {\n    width: 80%;\n  }\n}\n\n.modal h1, .modal h2, .modal h3, .modal h4 {\n  margin-top: 0;\n}\n\n.modal .modal-content {\n  padding: 24px;\n}\n\n.modal .modal-close {\n  cursor: pointer;\n}\n\n.modal .modal-footer {\n  border-radius: 0 0 2px 2px;\n  background-color: #fafafa;\n  padding: 4px 6px;\n  height: 56px;\n  width: 100%;\n}\n\n.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-flat {\n  float: right;\n  margin: 6px 0;\n}\n\n.lean-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -100px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity;\n}\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%;\n}\n\n.modal.modal-fixed-footer .modal-content {\n  position: absolute;\n  height: calc(100% - 56px);\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.modal.modal-fixed-footer .modal-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: absolute;\n  bottom: 0;\n}\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity;\n}\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0;\n}\n\n.collapsible-header {\n  display: block;\n  cursor: pointer;\n  min-height: 3rem;\n  line-height: 3rem;\n  padding: 0 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.collapsible-header i {\n  width: 2rem;\n  font-size: 1.6rem;\n  line-height: 3rem;\n  display: block;\n  float: left;\n  text-align: center;\n  margin-right: 1rem;\n}\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n}\n\n.collapsible-body p {\n  margin: 0;\n  padding: 2rem;\n}\n\n.side-nav .collapsible,\n.side-nav.fixed .collapsible {\n  border: none;\n  box-shadow: none;\n}\n\n.side-nav .collapsible li,\n.side-nav.fixed .collapsible li {\n  padding: 0;\n}\n\n.side-nav .collapsible-header,\n.side-nav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px;\n}\n\n.side-nav .collapsible-header:hover,\n.side-nav.fixed .collapsible-header:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.side-nav .collapsible-header i,\n.side-nav.fixed .collapsible-header i {\n  line-height: inherit;\n}\n\n.side-nav .collapsible-body,\n.side-nav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff;\n}\n\n.side-nav .collapsible-body li a,\n.side-nav.fixed .collapsible-body li a {\n  padding: 0 23.5px 0 31px;\n}\n\n.collapsible.popout {\n  border: none;\n  box-shadow: none;\n}\n\n.collapsible.popout > li {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin: 0 24px;\n  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.collapsible.popout > li.active {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  margin: 16px 0;\n}\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n\n.chip img {\n  float: left;\n  margin: 0 8px 0 -12px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n}\n\n.chip .close {\n  cursor: pointer;\n  float: right;\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 8px;\n}\n\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  box-shadow: none;\n  margin-bottom: 30px;\n  min-height: 45px;\n  outline: none;\n  padding-bottom: 5px;\n  transition: all .3s;\n}\n\n.chips.focus {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a;\n}\n\n.chips:hover {\n  cursor: text;\n}\n\n.chips .chip.selected {\n  background-color: #26a69a;\n  color: #fff;\n}\n\n.chips .input {\n  background: none;\n  border: 0;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 500;\n  height: 32px;\n  margin-right: 20px;\n  line-height: 32px;\n  outline: 0;\n  padding: 0 !important;\n  width: 120px !important;\n}\n\n.chips .input:focus {\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\n.materialboxed {\n  display: block;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  position: relative;\n  transition: opacity .4s;\n}\n\n.materialboxed:hover {\n  will-change: left, top, width, height;\n}\n\n.materialboxed:hover:not(.active) {\n  opacity: .8;\n}\n\n.materialboxed.active {\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out;\n}\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity;\n}\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased;\n}\n\nselect:focus {\n  outline: 1px solid #c9f3ef;\n}\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9;\n}\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e;\n}\n\n/* Text Inputs + Textarea\n   ========================================================================== */\n/* Style Placeholders */\n::-webkit-input-placeholder {\n  color: #d1d1d1;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #d1d1d1;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #d1d1d1;\n}\n\n:-ms-input-placeholder {\n  color: #d1d1d1;\n}\n\n/* Text inputs */\ninput:not([type]),\ninput[type=text],\ninput[type=password],\ninput[type=email],\ninput[type=url],\ninput[type=time],\ninput[type=date],\ninput[type=datetime],\ninput[type=datetime-local],\ninput[type=tel],\ninput[type=number],\ninput[type=search],\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: all 0.3s;\n}\n\ninput:not([type]):disabled, input:not([type])[readonly=\"readonly\"],\ninput[type=text]:disabled,\ninput[type=text][readonly=\"readonly\"],\ninput[type=password]:disabled,\ninput[type=password][readonly=\"readonly\"],\ninput[type=email]:disabled,\ninput[type=email][readonly=\"readonly\"],\ninput[type=url]:disabled,\ninput[type=url][readonly=\"readonly\"],\ninput[type=time]:disabled,\ninput[type=time][readonly=\"readonly\"],\ninput[type=date]:disabled,\ninput[type=date][readonly=\"readonly\"],\ninput[type=datetime]:disabled,\ninput[type=datetime][readonly=\"readonly\"],\ninput[type=datetime-local]:disabled,\ninput[type=datetime-local][readonly=\"readonly\"],\ninput[type=tel]:disabled,\ninput[type=tel][readonly=\"readonly\"],\ninput[type=number]:disabled,\ninput[type=number][readonly=\"readonly\"],\ninput[type=search]:disabled,\ninput[type=search][readonly=\"readonly\"],\ntextarea.materialize-textarea:disabled,\ntextarea.materialize-textarea[readonly=\"readonly\"] {\n  color: rgba(0, 0, 0, 0.26);\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.26);\n}\n\ninput:not([type]):disabled + label,\ninput:not([type])[readonly=\"readonly\"] + label,\ninput[type=text]:disabled + label,\ninput[type=text][readonly=\"readonly\"] + label,\ninput[type=password]:disabled + label,\ninput[type=password][readonly=\"readonly\"] + label,\ninput[type=email]:disabled + label,\ninput[type=email][readonly=\"readonly\"] + label,\ninput[type=url]:disabled + label,\ninput[type=url][readonly=\"readonly\"] + label,\ninput[type=time]:disabled + label,\ninput[type=time][readonly=\"readonly\"] + label,\ninput[type=date]:disabled + label,\ninput[type=date][readonly=\"readonly\"] + label,\ninput[type=datetime]:disabled + label,\ninput[type=datetime][readonly=\"readonly\"] + label,\ninput[type=datetime-local]:disabled + label,\ninput[type=datetime-local][readonly=\"readonly\"] + label,\ninput[type=tel]:disabled + label,\ninput[type=tel][readonly=\"readonly\"] + label,\ninput[type=number]:disabled + label,\ninput[type=number][readonly=\"readonly\"] + label,\ninput[type=search]:disabled + label,\ninput[type=search][readonly=\"readonly\"] + label,\ntextarea.materialize-textarea:disabled + label,\ntextarea.materialize-textarea[readonly=\"readonly\"] + label {\n  color: rgba(0, 0, 0, 0.26);\n}\n\ninput:not([type]):focus:not([readonly]),\ninput[type=text]:focus:not([readonly]),\ninput[type=password]:focus:not([readonly]),\ninput[type=email]:focus:not([readonly]),\ninput[type=url]:focus:not([readonly]),\ninput[type=time]:focus:not([readonly]),\ninput[type=date]:focus:not([readonly]),\ninput[type=datetime]:focus:not([readonly]),\ninput[type=datetime-local]:focus:not([readonly]),\ninput[type=tel]:focus:not([readonly]),\ninput[type=number]:focus:not([readonly]),\ninput[type=search]:focus:not([readonly]),\ntextarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a;\n}\n\ninput:not([type]):focus:not([readonly]) + label,\ninput[type=text]:focus:not([readonly]) + label,\ninput[type=password]:focus:not([readonly]) + label,\ninput[type=email]:focus:not([readonly]) + label,\ninput[type=url]:focus:not([readonly]) + label,\ninput[type=time]:focus:not([readonly]) + label,\ninput[type=date]:focus:not([readonly]) + label,\ninput[type=datetime]:focus:not([readonly]) + label,\ninput[type=datetime-local]:focus:not([readonly]) + label,\ninput[type=tel]:focus:not([readonly]) + label,\ninput[type=number]:focus:not([readonly]) + label,\ninput[type=search]:focus:not([readonly]) + label,\ntextarea.materialize-textarea:focus:not([readonly]) + label {\n  color: #26a69a;\n}\n\ninput:not([type]).valid, input:not([type]):focus.valid,\ninput[type=text].valid,\ninput[type=text]:focus.valid,\ninput[type=password].valid,\ninput[type=password]:focus.valid,\ninput[type=email].valid,\ninput[type=email]:focus.valid,\ninput[type=url].valid,\ninput[type=url]:focus.valid,\ninput[type=time].valid,\ninput[type=time]:focus.valid,\ninput[type=date].valid,\ninput[type=date]:focus.valid,\ninput[type=datetime].valid,\ninput[type=datetime]:focus.valid,\ninput[type=datetime-local].valid,\ninput[type=datetime-local]:focus.valid,\ninput[type=tel].valid,\ninput[type=tel]:focus.valid,\ninput[type=number].valid,\ninput[type=number]:focus.valid,\ninput[type=search].valid,\ninput[type=search]:focus.valid,\ntextarea.materialize-textarea.valid,\ntextarea.materialize-textarea:focus.valid {\n  border-bottom: 1px solid #4CAF50;\n  box-shadow: 0 1px 0 0 #4CAF50;\n}\n\ninput:not([type]).valid + label:after,\ninput:not([type]):focus.valid + label:after,\ninput[type=text].valid + label:after,\ninput[type=text]:focus.valid + label:after,\ninput[type=password].valid + label:after,\ninput[type=password]:focus.valid + label:after,\ninput[type=email].valid + label:after,\ninput[type=email]:focus.valid + label:after,\ninput[type=url].valid + label:after,\ninput[type=url]:focus.valid + label:after,\ninput[type=time].valid + label:after,\ninput[type=time]:focus.valid + label:after,\ninput[type=date].valid + label:after,\ninput[type=date]:focus.valid + label:after,\ninput[type=datetime].valid + label:after,\ninput[type=datetime]:focus.valid + label:after,\ninput[type=datetime-local].valid + label:after,\ninput[type=datetime-local]:focus.valid + label:after,\ninput[type=tel].valid + label:after,\ninput[type=tel]:focus.valid + label:after,\ninput[type=number].valid + label:after,\ninput[type=number]:focus.valid + label:after,\ninput[type=search].valid + label:after,\ninput[type=search]:focus.valid + label:after,\ntextarea.materialize-textarea.valid + label:after,\ntextarea.materialize-textarea:focus.valid + label:after {\n  content: attr(data-success);\n  color: #4CAF50;\n  opacity: 1;\n}\n\ninput:not([type]).invalid, input:not([type]):focus.invalid,\ninput[type=text].invalid,\ninput[type=text]:focus.invalid,\ninput[type=password].invalid,\ninput[type=password]:focus.invalid,\ninput[type=email].invalid,\ninput[type=email]:focus.invalid,\ninput[type=url].invalid,\ninput[type=url]:focus.invalid,\ninput[type=time].invalid,\ninput[type=time]:focus.invalid,\ninput[type=date].invalid,\ninput[type=date]:focus.invalid,\ninput[type=datetime].invalid,\ninput[type=datetime]:focus.invalid,\ninput[type=datetime-local].invalid,\ninput[type=datetime-local]:focus.invalid,\ninput[type=tel].invalid,\ninput[type=tel]:focus.invalid,\ninput[type=number].invalid,\ninput[type=number]:focus.invalid,\ninput[type=search].invalid,\ninput[type=search]:focus.invalid,\ntextarea.materialize-textarea.invalid,\ntextarea.materialize-textarea:focus.invalid {\n  border-bottom: 1px solid #F44336;\n  box-shadow: 0 1px 0 0 #F44336;\n}\n\ninput:not([type]).invalid + label:after,\ninput:not([type]):focus.invalid + label:after,\ninput[type=text].invalid + label:after,\ninput[type=text]:focus.invalid + label:after,\ninput[type=password].invalid + label:after,\ninput[type=password]:focus.invalid + label:after,\ninput[type=email].invalid + label:after,\ninput[type=email]:focus.invalid + label:after,\ninput[type=url].invalid + label:after,\ninput[type=url]:focus.invalid + label:after,\ninput[type=time].invalid + label:after,\ninput[type=time]:focus.invalid + label:after,\ninput[type=date].invalid + label:after,\ninput[type=date]:focus.invalid + label:after,\ninput[type=datetime].invalid + label:after,\ninput[type=datetime]:focus.invalid + label:after,\ninput[type=datetime-local].invalid + label:after,\ninput[type=datetime-local]:focus.invalid + label:after,\ninput[type=tel].invalid + label:after,\ninput[type=tel]:focus.invalid + label:after,\ninput[type=number].invalid + label:after,\ninput[type=number]:focus.invalid + label:after,\ninput[type=search].invalid + label:after,\ninput[type=search]:focus.invalid + label:after,\ntextarea.materialize-textarea.invalid + label:after,\ntextarea.materialize-textarea:focus.invalid + label:after {\n  content: attr(data-error);\n  color: #F44336;\n  opacity: 1;\n}\n\ninput:not([type]).validate + label,\ninput[type=text].validate + label,\ninput[type=password].validate + label,\ninput[type=email].validate + label,\ninput[type=url].validate + label,\ninput[type=time].validate + label,\ninput[type=date].validate + label,\ninput[type=datetime].validate + label,\ninput[type=datetime-local].validate + label,\ninput[type=tel].validate + label,\ninput[type=number].validate + label,\ninput[type=search].validate + label,\ntextarea.materialize-textarea.validate + label {\n  width: 100%;\n  pointer-events: none;\n}\n\ninput:not([type]) + label:after,\ninput[type=text] + label:after,\ninput[type=password] + label:after,\ninput[type=email] + label:after,\ninput[type=url] + label:after,\ninput[type=time] + label:after,\ninput[type=date] + label:after,\ninput[type=datetime] + label:after,\ninput[type=datetime-local] + label:after,\ninput[type=tel] + label:after,\ninput[type=number] + label:after,\ninput[type=search] + label:after,\ntextarea.materialize-textarea + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 60px;\n  opacity: 0;\n  transition: .2s opacity ease-out, .2s color ease-out;\n}\n\n.input-field {\n  position: relative;\n  margin-top: 1rem;\n}\n\n.input-field.col label {\n  left: 0.75rem;\n}\n\n.input-field.col .prefix ~ label,\n.input-field.col .prefix ~ .validate ~ label {\n  width: calc(100% - 3rem - 1.5rem);\n}\n\n.input-field label {\n  color: #9e9e9e;\n  position: absolute;\n  top: 0.8rem;\n  font-size: 1rem;\n  cursor: text;\n  transition: .2s ease-out;\n}\n\n.input-field label.active {\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n          transform: translateY(-140%);\n}\n\n.input-field .prefix {\n  position: absolute;\n  width: 3rem;\n  font-size: 2rem;\n  transition: color .2s;\n}\n\n.input-field .prefix.active {\n  color: #26a69a;\n}\n\n.input-field .prefix ~ input,\n.input-field .prefix ~ textarea,\n.input-field .prefix ~ label,\n.input-field .prefix ~ .validate ~ label,\n.input-field .prefix ~ .autocomplete-content {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.input-field .prefix ~ label {\n  margin-left: 3rem;\n}\n\n@media only screen and (max-width: 992px) {\n  .input-field .prefix ~ input {\n    width: 86%;\n    width: calc(100% - 3rem);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .input-field .prefix ~ input {\n    width: 80%;\n    width: calc(100% - 3rem);\n  }\n}\n\n/* Search Field */\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  padding-left: 4rem;\n  width: calc(100% - 4rem);\n}\n\n.input-field input[type=search]:focus {\n  background-color: #fff;\n  border: 0;\n  box-shadow: none;\n  color: #444;\n}\n\n.input-field input[type=search]:focus + label i,\n.input-field input[type=search]:focus ~ .mdi-navigation-close,\n.input-field input[type=search]:focus ~ .material-icons {\n  color: #444;\n}\n\n.input-field input[type=search] + label {\n  left: 1rem;\n}\n\n.input-field input[type=search] ~ .mdi-navigation-close,\n.input-field input[type=search] ~ .material-icons {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  color: transparent;\n  cursor: pointer;\n  font-size: 2rem;\n  transition: .3s color;\n}\n\n/* Textarea */\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent;\n}\n\ntextarea.materialize-textarea {\n  overflow-y: hidden;\n  /* prevents scroll bar flash */\n  padding: .8rem 0 1.6rem 0;\n  /* prevents text jump on Enter keypress */\n  resize: none;\n  min-height: 3rem;\n}\n\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  /* future version of deprecated 'word-wrap' */\n  padding-top: 1.2rem;\n  /* prevents text jump on Enter keypress */\n}\n\n/* Autocomplete */\n.autocomplete-content {\n  margin-top: -15px;\n  display: block;\n  opacity: 1;\n  position: static;\n}\n\n.autocomplete-content li .highlight {\n  color: #444;\n}\n\n.autocomplete-content li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n}\n\n/* Radio Buttons\n   ========================================================================== */\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  transition: .28s ease;\n  /* webkit (konqueror) browsers */\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[type=\"radio\"] + label:before,\n[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  transition: .28s ease;\n}\n\n/* Unchecked styles */\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%;\n}\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a;\n}\n\n[type=\"radio\"]:not(:checked) + label:after {\n  z-index: -1;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n/* Checked styles */\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent;\n}\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #26a69a;\n}\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:after {\n  background-color: #26a69a;\n  z-index: 0;\n}\n\n[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n}\n\n/* Radio With gap */\n[type=\"radio\"].with-gap:checked + label:after {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n\n/* Focused styles */\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Disabled Radio With gap */\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n/* Disabled style */\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-color: #BDBDBD;\n}\n\n/* Checkboxes\n   ========================================================================== */\n/* CUSTOM CSS CHECKBOXES */\nform p {\n  margin-bottom: 10px;\n  text-align: left;\n}\n\nform p:last-child {\n  margin-bottom: 0;\n}\n\n/* Remove default checkbox */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */\n}\n\n[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -khtml-user-select: none;\n  /* webkit (konqueror) browsers */\n  -ms-user-select: none;\n  /* IE10+ */\n}\n\n[type=\"checkbox\"] + label:before,\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: .2s;\n}\n\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  border: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"checkbox\"].tabbed:focus + label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.26);\n}\n\n/* Indeterminate checkbox */\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px;\n}\n\n[type=\"checkbox\"].filled-in + label:before,\n[type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 20% 40%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #BDBDBD;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #BDBDBD;\n  border-color: #BDBDBD;\n}\n\n/* Switch\n   ========================================================================== */\n.switch,\n.switch * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n}\n\n.switch label {\n  cursor: pointer;\n}\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1;\n}\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a;\n  left: 24px;\n}\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 15px;\n  background-color: #818181;\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px;\n}\n\n.switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  background-color: #F1F1F1;\n  border-radius: 21px;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n}\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::after,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(38, 166, 154, 0.1);\n}\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:after,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);\n}\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default;\n}\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #BDBDBD;\n}\n\n/* Select Field\n   ========================================================================== */\nselect {\n  display: none;\n}\n\nselect.browser-default {\n  display: block;\n}\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem;\n}\n\n.select-label {\n  position: absolute;\n}\n\n.select-wrapper {\n  position: relative;\n}\n\n.select-wrapper input.select-dropdown {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  height: 3rem;\n  line-height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  display: block;\n}\n\n.select-wrapper span.caret {\n  color: initial;\n  position: absolute;\n  right: 0;\n  top: 16px;\n  font-size: 10px;\n}\n\n.select-wrapper span.caret.disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.select-wrapper + label {\n  position: absolute;\n  top: -14px;\n  font-size: 0.8rem;\n}\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: default;\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -ms-user-select: none;\n  /* IE10+ */\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-dropdown li.disabled,\n.select-dropdown li.disabled > span,\n.select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent;\n}\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.prefix ~ label {\n  margin-left: 3rem;\n}\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right;\n}\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee;\n}\n\n.select-dropdown li.optgroup.selected > span {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.select-dropdown li.optgroup > span {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n  padding-left: 1rem;\n}\n\n/* File Input\n   ========================================================================== */\n.file-field {\n  position: relative;\n}\n\n.file-field .file-path-wrapper {\n  overflow: hidden;\n  padding-left: 10px;\n}\n\n.file-field input.file-path {\n  width: 100%;\n}\n\n.file-field .btn, .file-field .btn-large {\n  float: left;\n  height: 3rem;\n  line-height: 3rem;\n}\n\n.file-field span {\n  cursor: pointer;\n}\n\n.file-field input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n/* Range\n   ========================================================================== */\n.range-field {\n  position: relative;\n}\n\ninput[type=range],\ninput[type=range] + .thumb {\n  cursor: pointer;\n}\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range] + .thumb {\n  position: absolute;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  top: 10px;\n  margin-left: -6px;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\ninput[type=range] + .thumb .value {\n  display: block;\n  width: 30px;\n  text-align: center;\n  color: #26a69a;\n  font-size: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\ninput[type=range] + .thumb.active {\n  border-radius: 50% 50% 50% 0;\n}\n\ninput[type=range] + .thumb.active .value {\n  color: #fff;\n  margin-left: -1px;\n  margin-top: 8px;\n  font-size: 10px;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: .3s;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc;\n}\n\ninput[type=range] {\n  /* fix for FF unable to apply focus style bug  */\n  border: 1px solid white;\n  /*required for proper track sizing in FF*/\n}\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none;\n}\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  margin-top: -5px;\n}\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px;\n}\n\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc;\n}\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  /*remove default tick marks*/\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #777;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd;\n}\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc;\n}\n\n/***************\n    Nav List\n***************/\n.table-of-contents.fixed {\n  position: fixed;\n}\n\n.table-of-contents li {\n  padding: 2px 0;\n}\n\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 20px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block;\n}\n\n.table-of-contents a:hover {\n  color: #a8a8a8;\n  padding-left: 19px;\n  border-left: 1px solid #ea4a4f;\n}\n\n.table-of-contents a.active {\n  font-weight: 500;\n  padding-left: 18px;\n  border-left: 2px solid #ea4a4f;\n}\n\n.side-nav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n          transform: translateX(-105%);\n}\n\n.side-nav.right-aligned {\n  right: 0;\n  -webkit-transform: translateX(105%);\n          transform: translateX(105%);\n  left: auto;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n\n.side-nav .collapsible {\n  margin: 0;\n}\n\n.side-nav li {\n  float: none;\n  line-height: 48px;\n}\n\n.side-nav li.active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.side-nav a {\n  color: rgba(0, 0, 0, 0.87);\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 32px;\n}\n\n.side-nav a:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.side-nav a.btn, .side-nav a.btn-large, .side-nav a.btn-large, .side-nav a.btn-flat, .side-nav a.btn-floating {\n  margin: 10px 15px;\n}\n\n.side-nav a.btn, .side-nav a.btn-large, .side-nav a.btn-large, .side-nav a.btn-floating {\n  color: #fff;\n}\n\n.side-nav a.btn-flat {\n  color: #343434;\n}\n\n.side-nav a.btn:hover, .side-nav a.btn-large:hover, .side-nav a.btn-large:hover {\n  background-color: #2bbbad;\n}\n\n.side-nav a.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.side-nav li > a > i,\n.side-nav li > a > [class^=\"mdi-\"], .side-nav li > a > [class*=\"mdi-\"],\n.side-nav li > a > i.material-icons {\n  float: left;\n  line-height: 48px;\n  margin: 0 32px 0 0;\n  width: 24px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.side-nav .divider {\n  margin: 8px 0 0 0;\n}\n\n.side-nav .subheader {\n  cursor: initial;\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n}\n\n.side-nav .subheader:hover {\n  background-color: transparent;\n}\n\n.side-nav .userView {\n  overflow: hidden;\n  position: relative;\n  padding: 32px 32px 0;\n  margin-bottom: 8px;\n}\n\n.side-nav .userView a {\n  height: auto;\n  padding: 0;\n}\n\n.side-nav .userView a:hover {\n  background-color: transparent;\n}\n\n.side-nav .userView .background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.side-nav .userView .circle, .side-nav .userView .name, .side-nav .userView .email {\n  display: block;\n}\n\n.side-nav .userView .circle {\n  height: 64px;\n  width: 64px;\n}\n\n.side-nav .userView .name,\n.side-nav .userView .email {\n  font-weight: 14px;\n  line-height: 24px;\n}\n\n.side-nav .userView .name {\n  margin-top: 16px;\n  font-weight: 500;\n}\n\n.side-nav .userView .email {\n  padding-bottom: 16px;\n  font-weight: 400;\n}\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998;\n}\n\n.side-nav.fixed a {\n  display: block;\n  padding: 0 16px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.side-nav.fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  position: fixed;\n}\n\n.side-nav.fixed.right-aligned {\n  right: 0;\n  left: auto;\n}\n\n@media only screen and (max-width: 992px) {\n  .side-nav.fixed {\n    -webkit-transform: translateX(-105%);\n            transform: translateX(-105%);\n  }\n  .side-nav.fixed.right-aligned {\n    -webkit-transform: translateX(105%);\n            transform: translateX(105%);\n  }\n  .side-nav a {\n    padding: 0 16px;\n  }\n  .side-nav .userView {\n    padding: 16px 16px 0;\n  }\n}\n\n.side-nav .collapsible-body li.active,\n.side-nav.fixed .collapsible-body li.active {\n  background-color: #ee6e73;\n}\n\n.side-nav .collapsible-body li.active a,\n.side-nav.fixed .collapsible-body li.active a {\n  color: #fff;\n}\n\n#sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  will-change: opacity;\n}\n\n/*\n    @license\n    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.\n    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n    Code distributed by Google as part of the polymer project is also\n    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n */\n/**************************/\n/* STYLES FOR THE SPINNER */\n/**************************/\n/*\n * Constants:\n *      STROKEWIDTH = 3px\n *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n *                                should rotate each time, 216 gives us a\n *                                5 pointed star shape (it's 360/5 * 3).\n *                                For a 7 pointed star, we might do\n *                                360/7 * 3 = 154.286)\n *      CONTAINERWIDTH = 28px\n *      SHRINK_TIME = 400ms\n */\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 48px;\n  height: 48px;\n}\n\n.preloader-wrapper.small {\n  width: 36px;\n  height: 36px;\n}\n\n.preloader-wrapper.big {\n  width: 64px;\n  height: 64px;\n}\n\n.preloader-wrapper.active {\n  /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n  -webkit-animation: container-rotate 1568ms linear infinite;\n  animation: container-rotate 1568ms linear infinite;\n}\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a;\n}\n\n.spinner-blue,\n.spinner-blue-only {\n  border-color: #4285f4;\n}\n\n.spinner-red,\n.spinner-red-only {\n  border-color: #db4437;\n}\n\n.spinner-yellow,\n.spinner-yellow-only {\n  border-color: #f4b400;\n}\n\n.spinner-green,\n.spinner-green-only {\n  border-color: #0f9d58;\n}\n\n/**\n * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n *\n * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n * guarantee that the animation will start _exactly_ after that value. So we avoid using\n * animation-delay and instead set custom keyframes for each color (as redundant as it\n * seems).\n *\n * We write out each animation in full (instead of separating animation-name,\n * animation-duration, etc.) because under the polyfill, Safari does not recognize those\n * specific properties properly, treats them as -webkit-animation, and overrides the\n * other animation rules. See https://github.com/Polymer/platform/issues/53.\n */\n.active .spinner-layer.spinner-blue {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-red {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-yellow {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-green {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer,\n.active .spinner-layer.spinner-blue-only,\n.active .spinner-layer.spinner-red-only,\n.active .spinner-layer.spinner-yellow-only,\n.active .spinner-layer.spinner-green-only {\n  /* durations: 4 * ARCTIME */\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n  }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n  }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n  }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n  }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n  }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n  }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n  }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n  }\n  /* 4   * ARCSIZE */\n}\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n  }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n  }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg);\n  }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg);\n  }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg);\n  }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg);\n  }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n  }\n  /* 4   * ARCSIZE */\n}\n\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  89% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n  25% {\n    opacity: 1;\n  }\n  26% {\n    opacity: 0;\n  }\n  89% {\n    opacity: 0;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n}\n\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  15% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 1;\n  }\n  51% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n}\n\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  40% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  76% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n/**\n * Patch the gap that appear between the two adjacent div.circle-clipper while the\n * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).\n */\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%;\n}\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  /* STROKEWIDTH */\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  -webkit-transform: rotate(129deg);\n  transform: rotate(129deg);\n}\n\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  -webkit-transform: rotate(-129deg);\n  transform: rotate(-129deg);\n}\n\n.active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n  }\n}\n\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  to {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg);\n  }\n}\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n  }\n}\n\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  to {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg);\n  }\n}\n\n#spinnerContainer.cooldown {\n  /* duration: SHRINK_TIME */\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%;\n}\n\n.slider.fullscreen {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.slider.fullscreen ul.slides {\n  height: 100%;\n}\n\n.slider.fullscreen ul.indicators {\n  z-index: 2;\n  bottom: 30px;\n}\n\n.slider .slides {\n  background-color: #9e9e9e;\n  margin: 0;\n  height: 400px;\n}\n\n.slider .slides li {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: inherit;\n  overflow: hidden;\n}\n\n.slider .slides li img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n}\n\n.slider .slides li .caption {\n  color: #fff;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  width: 70%;\n  opacity: 0;\n}\n\n.slider .slides li .caption p {\n  color: #e0e0e0;\n}\n\n.slider .slides li.active {\n  z-index: 2;\n}\n\n.slider .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.slider .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin: 0 12px;\n  background-color: #e0e0e0;\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.slider .indicators .indicator-item.active {\n  background-color: #4CAF50;\n}\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%;\n}\n\n.carousel.carousel-slider {\n  top: 0;\n  left: 0;\n  height: 0;\n}\n\n.carousel.carousel-slider .carousel-fixed-item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  z-index: 1;\n}\n\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n  bottom: 68px;\n}\n\n.carousel.carousel-slider .carousel-item {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel.carousel-slider .carousel-item h2 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.carousel.carousel-slider .carousel-item p {\n  font-size: 15px;\n}\n\n.carousel .carousel-item {\n  display: none;\n  width: 200px;\n  height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel .carousel-item img {\n  width: 100%;\n}\n\n.carousel .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.carousel .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 8px;\n  width: 8px;\n  margin: 24px 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.carousel .indicators .indicator-item.active {\n  background-color: #fff;\n}\n\n/* ==========================================================================\n   $BASE-PICKER\n   ========================================================================== */\n/**\n * Note: the root picker element should *NOT* be styled more than what's here.\n */\n.picker {\n  font-size: 16px;\n  text-align: left;\n  line-height: 1.2;\n  color: #000000;\n  position: absolute;\n  z-index: 10000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/**\n * The picker input element.\n */\n.picker__input {\n  cursor: default;\n}\n\n/**\n * When the picker is opened, the input element is \"activated\".\n */\n.picker__input.picker__input--active {\n  border-color: #0089ec;\n}\n\n/**\n * The holder is the only \"scrollable\" top-level container element.\n */\n.picker__holder {\n  width: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */\n/**\n * Note: the root picker element should *NOT* be styled more than what's here.\n */\n/**\n * Make the holder and frame fullscreen.\n */\n.picker__holder,\n.picker__frame {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 100%;\n}\n\n/**\n * The holder should overlay the entire screen.\n */\n.picker__holder {\n  position: fixed;\n  transition: background 0.15s ease-out, top 0s 0.15s;\n  -webkit-backface-visibility: hidden;\n}\n\n/**\n * The frame that bounds the box contents of the picker.\n */\n.picker__frame {\n  position: absolute;\n  margin: 0 auto;\n  min-width: 256px;\n  width: 300px;\n  max-height: 350px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  -moz-opacity: 0;\n  opacity: 0;\n  transition: all 0.15s ease-out;\n}\n\n@media (min-height: 28.875em) {\n  .picker__frame {\n    overflow: visible;\n    top: auto;\n    bottom: -100%;\n    max-height: 80%;\n  }\n}\n\n@media (min-height: 40.125em) {\n  .picker__frame {\n    margin-bottom: 7.5%;\n  }\n}\n\n/**\n * The wrapper sets the stage to vertically align the box contents.\n */\n.picker__wrap {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n@media (min-height: 28.875em) {\n  .picker__wrap {\n    display: block;\n  }\n}\n\n/**\n * The box contains all the picker contents.\n */\n.picker__box {\n  background: #ffffff;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n@media (min-height: 28.875em) {\n  .picker__box {\n    display: block;\n    border: 1px solid #777777;\n    border-top-color: #898989;\n    border-bottom-width: 0;\n    border-radius: 5px 5px 0 0;\n    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);\n  }\n}\n\n/**\n * When the picker opens...\n */\n.picker--opened .picker__holder {\n  top: 0;\n  background: transparent;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";\n  zoom: 1;\n  background: rgba(0, 0, 0, 0.32);\n  transition: background 0.15s ease-out;\n}\n\n.picker--opened .picker__frame {\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n  -moz-opacity: 1;\n  opacity: 1;\n}\n\n@media (min-height: 35.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto;\n  }\n}\n\n/**\n * For `large` screens, transform into an inline picker.\n */\n/* ==========================================================================\n   CUSTOM MATERIALIZE STYLES\n   ========================================================================== */\n.picker__input.picker__input--active {\n  border-color: #E3F2FD;\n}\n\n.picker__frame {\n  margin: 0 auto;\n  max-width: 325px;\n}\n\n@media (min-height: 38.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto;\n  }\n}\n\n/* ==========================================================================\n   $BASE-DATE-PICKER\n   ========================================================================== */\n/**\n * The picker box.\n */\n.picker__box {\n  padding: 0 1em;\n}\n\n/**\n * The header containing the month and year stuff.\n */\n.picker__header {\n  text-align: center;\n  position: relative;\n  margin-top: .75em;\n}\n\n/**\n * The month and year labels.\n */\n.picker__month,\n.picker__year {\n  display: inline-block;\n  margin-left: .25em;\n  margin-right: .25em;\n}\n\n/**\n * The month and year selectors.\n */\n.picker__select--month,\n.picker__select--year {\n  height: 2em;\n  padding: 0;\n  margin-left: .25em;\n  margin-right: .25em;\n}\n\n.picker__select--month.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 40%;\n}\n\n.picker__select--year.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 26%;\n}\n\n.picker__select--month:focus,\n.picker__select--year:focus {\n  border-color: rgba(0, 0, 0, 0.05);\n}\n\n/**\n * The month navigation buttons.\n */\n.picker__nav--prev,\n.picker__nav--next {\n  position: absolute;\n  padding: .5em 1.25em;\n  width: 1em;\n  height: 1em;\n  box-sizing: content-box;\n  top: -0.25em;\n}\n\n.picker__nav--prev {\n  left: -1em;\n  padding-right: 1.25em;\n}\n\n.picker__nav--next {\n  right: -1em;\n  padding-left: 1.25em;\n}\n\n.picker__nav--disabled,\n.picker__nav--disabled:hover,\n.picker__nav--disabled:before,\n.picker__nav--disabled:before:hover {\n  cursor: default;\n  background: none;\n  border-right-color: #f5f5f5;\n  border-left-color: #f5f5f5;\n}\n\n/**\n * The calendar table of dates\n */\n.picker__table {\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: .75em;\n  margin-bottom: .5em;\n}\n\n.picker__table th, .picker__table td {\n  text-align: center;\n}\n\n.picker__table td {\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * The weekday labels\n */\n.picker__weekday {\n  width: 14.285714286%;\n  font-size: .75em;\n  padding-bottom: .25em;\n  color: #999999;\n  font-weight: 500;\n  /* Increase the spacing a tad */\n}\n\n@media (min-height: 33.875em) {\n  .picker__weekday {\n    padding-bottom: .5em;\n  }\n}\n\n/**\n * The days on the calendar\n */\n.picker__day--today {\n  position: relative;\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent;\n}\n\n.picker__day--disabled:before {\n  border-top-color: #aaaaaa;\n}\n\n.picker__day--infocus:hover {\n  cursor: pointer;\n  color: #000;\n  font-weight: 500;\n}\n\n.picker__day--outfocus {\n  display: none;\n  padding: .75rem 0;\n  color: #fff;\n}\n\n.picker__day--outfocus:hover {\n  cursor: pointer;\n  color: #dddddd;\n  font-weight: 500;\n}\n\n.picker__day--highlighted:hover,\n.picker--focused .picker__day--highlighted {\n  cursor: pointer;\n}\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  background: #0089ec;\n  color: #ffffff;\n}\n\n.picker__day--disabled,\n.picker__day--disabled:hover,\n.picker--focused .picker__day--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n}\n\n.picker__day--highlighted.picker__day--disabled,\n.picker__day--highlighted.picker__day--disabled:hover {\n  background: #bbbbbb;\n}\n\n/**\n * The footer containing the \"today\", \"clear\", and \"close\" buttons.\n */\n.picker__footer {\n  text-align: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.picker__button--today,\n.picker__button--clear,\n.picker__button--close {\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  font-size: .8em;\n  padding: .66em 0;\n  font-weight: bold;\n  width: 33%;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.picker__button--today:hover,\n.picker__button--clear:hover,\n.picker__button--close:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-bottom-color: #b1dcfb;\n}\n\n.picker__button--today:focus,\n.picker__button--clear:focus,\n.picker__button--close:focus {\n  background: #b1dcfb;\n  border-color: rgba(0, 0, 0, 0.05);\n  outline: none;\n}\n\n.picker__button--today:before,\n.picker__button--clear:before,\n.picker__button--close:before {\n  position: relative;\n  display: inline-block;\n  height: 0;\n}\n\n.picker__button--today:before,\n.picker__button--clear:before {\n  content: \" \";\n  margin-right: .45em;\n}\n\n.picker__button--today:before {\n  top: -0.05em;\n  width: 0;\n  border-top: 0.66em solid #0059bc;\n  border-left: .66em solid transparent;\n}\n\n.picker__button--clear:before {\n  top: -0.25em;\n  width: .66em;\n  border-top: 3px solid #ee2200;\n}\n\n.picker__button--close:before {\n  content: \"\\D7\";\n  top: -0.1em;\n  vertical-align: top;\n  font-size: 1.1em;\n  margin-right: .35em;\n  color: #777777;\n}\n\n.picker__button--today[disabled],\n.picker__button--today[disabled]:hover {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n}\n\n.picker__button--today[disabled]:before {\n  border-top-color: #aaaaaa;\n}\n\n/* ==========================================================================\n   CUSTOM MATERIALIZE STYLES\n   ========================================================================== */\n.picker__box {\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.picker__date-display {\n  text-align: center;\n  background-color: #26a69a;\n  color: #fff;\n  padding-bottom: 15px;\n  font-weight: 300;\n}\n\n.picker__nav--prev:hover,\n.picker__nav--next:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #a1ded8;\n}\n\n.picker__weekday-display {\n  background-color: #1f897f;\n  padding: 10px;\n  font-weight: 200;\n  letter-spacing: .5;\n  font-size: 1rem;\n  margin-bottom: 15px;\n}\n\n.picker__month-display {\n  text-transform: uppercase;\n  font-size: 2rem;\n}\n\n.picker__day-display {\n  font-size: 4.5rem;\n  font-weight: 400;\n}\n\n.picker__year-display {\n  font-size: 1.8rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.picker__box {\n  padding: 0;\n}\n\n.picker__calendar-container {\n  padding: 0 1rem;\n}\n\n.picker__calendar-container thead {\n  border: none;\n}\n\n.picker__table {\n  margin-top: 0;\n  margin-bottom: .5em;\n}\n\n.picker__day--infocus {\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent;\n}\n\n.picker__day.picker__day--today {\n  color: #26a69a;\n}\n\n.picker__day.picker__day--today.picker__day--selected {\n  color: #fff;\n}\n\n.picker__weekday {\n  font-size: .9rem;\n}\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  background-color: #26a69a;\n  color: #ffffff;\n}\n\n.picker__day--selected.picker__day--outfocus,\n.picker__day--selected:hover.picker__day--outfocus,\n.picker--focused .picker__day--selected.picker__day--outfocus {\n  background-color: #a1ded8;\n}\n\n.picker__footer {\n  text-align: right;\n  padding: 5px 10px;\n}\n\n.picker__close, .picker__today {\n  font-size: 1.1rem;\n  padding: 0 1rem;\n  color: #26a69a;\n}\n\n.picker__nav--prev:before,\n.picker__nav--next:before {\n  content: \" \";\n  border-top: .5em solid transparent;\n  border-bottom: .5em solid transparent;\n  border-right: 0.75em solid #676767;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: 0 auto;\n}\n\n.picker__nav--next:before {\n  border-right: 0;\n  border-left: 0.75em solid #676767;\n}\n\nbutton.picker__today:focus, button.picker__clear:focus, button.picker__close:focus {\n  background-color: #a1ded8;\n}\n\n/* ==========================================================================\n   $BASE-TIME-PICKER\n   ========================================================================== */\n/**\n * The list of times.\n */\n.picker__list {\n  list-style: none;\n  padding: 0.75em 0 4.2em;\n  margin: 0;\n}\n\n/**\n * The times on the clock.\n */\n.picker__list-item {\n  border-bottom: 1px solid #dddddd;\n  border-top: 1px solid #dddddd;\n  margin-bottom: -1px;\n  position: relative;\n  background: #ffffff;\n  padding: .75em 1.25em;\n}\n\n@media (min-height: 46.75em) {\n  .picker__list-item {\n    padding: .5em 1em;\n  }\n}\n\n/* Hovered time */\n.picker__list-item:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-color: #0089ec;\n  z-index: 10;\n}\n\n/* Highlighted and hovered/focused time */\n.picker__list-item--highlighted {\n  border-color: #0089ec;\n  z-index: 10;\n}\n\n.picker__list-item--highlighted:hover,\n.picker--focused .picker__list-item--highlighted {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n}\n\n/* Selected and hovered/focused time */\n.picker__list-item--selected,\n.picker__list-item--selected:hover,\n.picker--focused .picker__list-item--selected {\n  background: #0089ec;\n  color: #ffffff;\n  z-index: 10;\n}\n\n/* Disabled time */\n.picker__list-item--disabled,\n.picker__list-item--disabled:hover,\n.picker--focused .picker__list-item--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n  border-color: #dddddd;\n  z-index: auto;\n}\n\n/**\n * The clear button\n */\n.picker--time .picker__button--clear {\n  display: block;\n  width: 80%;\n  margin: 1em auto 0;\n  padding: 1em 1.25em;\n  background: none;\n  border: 0;\n  font-weight: 500;\n  font-size: .67em;\n  text-align: center;\n  text-transform: uppercase;\n  color: #666;\n}\n\n.picker--time .picker__button--clear:hover,\n.picker--time .picker__button--clear:focus {\n  color: #000000;\n  background: #b1dcfb;\n  background: #ee2200;\n  border-color: #ee2200;\n  cursor: pointer;\n  color: #ffffff;\n  outline: none;\n}\n\n.picker--time .picker__button--clear:before {\n  top: -0.25em;\n  color: #666;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.picker--time .picker__button--clear:hover:before,\n.picker--time .picker__button--clear:focus:before {\n  color: #ffffff;\n}\n\n/* ==========================================================================\n   $DEFAULT-TIME-PICKER\n   ========================================================================== */\n/**\n * The frame the bounds the time picker.\n */\n.picker--time .picker__frame {\n  min-width: 256px;\n  max-width: 320px;\n}\n\n/**\n * The picker box.\n */\n.picker--time .picker__box {\n  font-size: 1em;\n  background: #f2f2f2;\n  padding: 0;\n}\n\n@media (min-height: 40.125em) {\n  .picker--time .picker__box {\n    margin-bottom: 5em;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Thin-954bbdeb86483e4ffea00c4591530ece.woff2";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Thin-7500519de3d82e33d1587f8042e2afcb.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Thin-94998475f6aea65f558494802416c1cf.ttf";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Light-69f8a0617ac472f78e45841323a3df9e.woff2";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Light-3b813c2ae0d04909a33a18d792912ee7.woff";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Light-46e48ce0628835f68a7369d0254e4283.ttf";

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Regular-2751ee43015f9884c3642f103b7f70c9.woff2";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Regular-ba3dcd8903e3d0af5de7792777f8ae0d.woff";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Regular-df7b648ce5356ea1ebce435b3459fd60.ttf";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Medium-574fd0b50367f886d359e8264938fc37.woff2";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Medium-fc78759e93a6cac50458610e3d9d63a0.woff";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Medium-894a2ede85a483bf9bedefd4db45cdb9.ttf";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Bold-39b2c3031be6b4ea96e2e3e95d307814.woff2";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Bold-dc81817def276b4f21395f7ea5e88dcd.woff";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "Roboto-Bold-e31fcf1885e371e19f5786c2bdfeae1b.ttf";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);