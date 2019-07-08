/******/!function(e){/******/
/******/
// The require function
/******/
function t(r){/******/
/******/
// Check if module is in cache
/******/
if(n[r])/******/
return n[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var o=n[r]={/******/
i:r,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
t.m=e,/******/
/******/
// expose the module cache
/******/
t.c=n,/******/
/******/
// define getter function for harmony exports
/******/
t.d=function(e,n,r){/******/
t.o(e,n)||/******/
Object.defineProperty(e,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:r})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
t.n=function(e){/******/
var n=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return t.d(n,"a",n),n},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******/
/******/
// __webpack_public_path__
/******/
t.p="",t(t.s=34)}([/* 0 */
/***/
function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)
//normal enviroments in sane situations
return setTimeout(e,0);
// if setTimeout wasn't available but was latter defined
if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return s(e,0)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return s.call(null,e,0)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return s.call(this,e,0)}}}function i(e){if(f===clearTimeout)
//normal enviroments in sane situations
return clearTimeout(e);
// if clearTimeout wasn't available but was latter defined
if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return f(e)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return f.call(null,e)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return f.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?m=p.concat(m):v=-1,m.length&&l())}function l(){if(!h){var e=o(a);h=!0;for(var t=m.length;t;){for(p=m,m=[];++v<t;)p&&p[v].run();v=-1,t=m.length}p=null,h=!1,i(e)}}
// v8 likes predictible objects
function u(e,t){this.fun=e,this.array=t}function c(){}
// shim for using process in browser
var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,m=[],h=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||h||o(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",// empty string to avoid regexp issues
d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},/* 1 */
/***/
function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},/* 2 */
/***/
function(e,t,n){
// Thank's IE8 for his funny defineProperty
e.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 3 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){"production"===t.env.NODE_ENV?e.exports=n(35):e.exports=n(36)}).call(t,n(0))},/* 4 */
/***/
function(e,t,n){var r=n(6),o=n(1),i=n(23),a=n(50),l=n(10),u=function(e,t,n){var c,s,f,d=e&u.F,p=e&u.G,m=e&u.S,h=e&u.P,v=e&u.B,y=e&u.W,g=p?o:o[t]||(o[t]={}),b=g.prototype,w=p?r:m?r[t]:(r[t]||{}).prototype;p&&(n=t);for(c in n)
// contains in native
(s=!d&&w&&void 0!==w[c])&&l(g,c)||(
// export native or passed
f=s?w[c]:n[c],
// prevent global pollution for namespaces
g[c]=p&&"function"!=typeof w[c]?n[c]:v&&s?i(f,r):y&&w[c]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):h&&"function"==typeof f?i(Function.call,f):f,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
h&&((g.virtual||(g.virtual={}))[c]=f,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
e&u.R&&b&&!b[c]&&a(b,c,f)))};
// type bitmap
u.F=1,// forced
u.G=2,// global
u.S=4,// static
u.P=8,// proto
u.B=16,// bind
u.W=32,// wrap
u.U=64,// safe
u.R=128,// real proto method for `library`
e.exports=u},/* 5 */
/***/
function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;
// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");if(// eslint-disable-line no-new-wrappers
e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;
// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(e,t){for(var n,l,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var s in n)i.call(n,s)&&(u[s]=n[s]);if(o){l=o(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(u[l[f]]=n[l[f]])}}return u}},/* 6 */
/***/
function(e,t){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/* 7 */
/***/
function(e,t,n){var r=n(8);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},/* 8 */
/***/
function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},/* 9 */
/***/
function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},/* 10 */
/***/
function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},/* 11 */
/***/
function(e,t,n){e.exports={default:n(47),__esModule:!0}},/* 12 */
/***/
function(e,t,n){var r=n(7),o=n(24),i=n(26),a=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},/* 13 */
/***/
function(e,t,n){e.exports={default:n(51),__esModule:!0}},/* 14 */
/***/
function(e,t,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=n(29),o=n(30);e.exports=function(e){return r(o(e))}},/* 15 */
/***/
function(e,t,n){e.exports={default:n(56),__esModule:!0}},/* 16 */
/***/
function(e,t,n){var r=n(64)("keys"),o=n(66);e.exports=function(e){return r[e]||(r[e]=o(e))}},/* 17 */
/***/
function(e,t,n){e.exports={default:n(68),__esModule:!0}},/* 18 */
/***/
function(e,t,n){
// 7.1.13 ToObject(argument)
var r=n(30);e.exports=function(e){return Object(r(e))}},/* 19 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function r(e,n,r,u,c){if("production"!==t.env.NODE_ENV)for(var s in e)if(l(e,s)){var f;
// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{
// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[s]){var d=Error((u||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw d.name="Invariant Violation",d}f=e[s](n,s,u,r,null,i)}catch(e){f=e}if(!f||f instanceof Error||o((u||"React class")+": type specification of "+r+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in a)){
// Only monitor this failure once because there tends to be a lot of the
// same error.
a[f.message]=!0;var p=c?c():"";o("Failed "+r+" type: "+f.message+(null!=p?p:""))}}}/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(37),a={},l=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(t)}catch(e){}}}/**
 * Resets warning cache when testing.
 *
 * @private
 */
r.resetWarningCache=function(){"production"!==t.env.NODE_ENV&&(a={})},e.exports=r}).call(t,n(0))},/* 20 */
/***/
function(e,t,n){"use strict";/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},/* 21 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){"production"===t.env.NODE_ENV?e.exports=n(40):e.exports=n(41)}).call(t,n(0))},/* 22 */
/***/
function(e,t){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n},/* 23 */
/***/
function(e,t,n){
// optional / simple context binding
var r=n(49);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},/* 24 */
/***/
function(e,t,n){e.exports=!n(2)&&!n(9)(function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a})},/* 25 */
/***/
function(e,t,n){var r=n(8),o=n(6).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},/* 26 */
/***/
function(e,t,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var r=n(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},/* 27 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 28 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 29 */
/***/
function(e,t,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=n(55);
// eslint-disable-next-line no-prototype-builtins
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},/* 30 */
/***/
function(e,t){
// 7.2.1 RequireObjectCoercible(argument)
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},/* 31 */
/***/
function(e,t,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=n(60),o=n(33);e.exports=Object.keys||function(e){return r(e,o)}},/* 32 */
/***/
function(e,t){
// 7.1.4 ToInteger
var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},/* 33 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 34 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(3),i=r(o),a=n(20),l=n(38),u=r(l),c=n(46),s=r(c),f={_id:"5d1d4253efb17605f11bb0ca",name:"33",description:"3",project:"33",owner:"5d1d4233efb17605f11bb0c8",config:{properties:{title:{type:"string",title:"页面标题"},description:{type:"string",title:"页面描述"},keywords:{type:"array",title:"关键字",items:{type:"string",title:"关键字"}},author:{type:"string",title:"作者"},metas:{type:"array",title:"额外的 meta 标签",items:{type:"object",title:"meta 标签",properties:{name:{type:"string",enum:["name","http-equiv","itemprop"],default:"name"},type:{type:"string"},content:{type:"string"}}},default:[{name:"name",type:"",content:""}]},links:{type:"array",title:"外链样式",items:{title:"样式表地址",properties:{href:{type:"string",title:"href"}}}},style:{type:"string",title:"内联样式"},scripts:{type:"array",title:"外链脚本",items:{title:"脚本地址",properties:{src:{type:"string"}}}},script:{type:"string",title:"内联脚本"}}},components:[{__v:0,config:{description:"下载页面",version:"0.0.0",private:!0,main:"./Main.js",props:{logo:"http://pub.idqqimg.com/qqun/xiaoqu/mobile/img/app-logo-with-text.png",backgroundColor:"#fae100",btnBackgroundColor:"#000",androidText:"Android 下载",androidUrl:"http://laispace.com",iOSText:"iPhone 下载",iOSUrl:"http://laispace.com"},properties:{logo:{default:"http://pub.idqqimg.com/qqun/xiaoqu/mobile/img/app-logo-with-text.png",type:"string",title:"Logo 地址"},backgroundColor:{default:"#fae100",type:"string",title:"页面背景颜色"},btnBackgroundColor:{default:"#000",type:"string",title:"按钮背景颜色"},androidText:{default:"Android 下载",type:"string",title:"Android 下载文案"},androidUrl:{default:"http://laispace.com",type:"string",title:"Android 下载地址"},iOSText:{default:"iPhone 下载",type:"string",title:"iOS 下载文案"},iOSUrl:{default:"http://laispace.com",type:"string",title:"iOS 下载地址"}}},name:"DownloadPage",project:"buluo",_id:"5d1d4261efb17605f11bb0cb"}],__v:0},d=[n(72)];a.canUseDOM&&u.default.render(i.default.createElement(s.default,{page:f,Coms:d}),document.getElementById("publishApp"),function(){})},/* 35 */
/***/
function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,l],c=0;e=Error(t.replace(/%s/g,function(){return u[c++]})),e.name="Invariant Violation"}throw e.framesToPop=1,e}}function o(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);r(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function i(e,t,n){this.props=e,this.context=t,this.refs=z,this.updater=n||A}function a(){}function l(e,t,n){this.props=e,this.context=t,this.refs=z,this.updater=n||A}function u(e,t,n){var r=void 0,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!B.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:T,type:e,key:i,ref:a,props:o,_owner:F.current}}function c(e,t){return{$$typeof:T,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function s(e){return"object"==typeof e&&null!==e&&e.$$typeof===T}function f(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function d(e,t,n,r){if(H.length){var o=H.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function p(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>H.length&&H.push(e)}function m(e,t,n,r){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case T:case _:a=!0}}if(a)return n(r,e,""===t?"."+v(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){i=e[l];var u=t+v(i,l);a+=m(i,u,n,r)}else if(null===e||"object"!=typeof e?u=null:(u=U&&e[U]||e["@@iterator"],u="function"==typeof u?u:null),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=t+v(i,l++),a+=m(i,u,n,r);else"object"===i&&(n=""+e,o("31","[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return a}function h(e,t,n){return null==e?0:m(e,"",t,n)}function v(e,t){return"object"==typeof e&&null!==e&&null!=e.key?f(e.key):t.toString(36)}function y(e,t){e.func.call(e.context,t,e.count++)}function g(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?b(e,r,n,function(e){return e}):null!=e&&(s(e)&&(e=c(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(V,"$&/")+"/")+n)),r.push(e))}function b(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(V,"$&/")+"/"),t=d(t,i,r,o),h(e,g,t),p(t)}function w(){var e=W.current;return null===e&&o("321"),e}/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k=n(5),x="function"==typeof Symbol&&Symbol.for,T=x?Symbol.for("react.element"):60103,_=x?Symbol.for("react.portal"):60106,S=x?Symbol.for("react.fragment"):60107,C=x?Symbol.for("react.strict_mode"):60108,E=x?Symbol.for("react.profiler"):60114,P=x?Symbol.for("react.provider"):60109,R=x?Symbol.for("react.context"):60110,O=x?Symbol.for("react.concurrent_mode"):60111,N=x?Symbol.for("react.forward_ref"):60112,I=x?Symbol.for("react.suspense"):60113,D=x?Symbol.for("react.memo"):60115,M=x?Symbol.for("react.lazy"):60116,U="function"==typeof Symbol&&Symbol.iterator,A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z={};i.prototype.isReactComponent={},i.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&o("85"),this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=i.prototype;var L=l.prototype=new a;L.constructor=l,k(L,i.prototype),L.isPureReactComponent=!0;var W={current:null},F={current:null},j=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0},V=/\/+/g,H=[],q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return b(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=d(null,null,t,n),h(e,y,t),p(t)},count:function(e){return h(e,function(){return null},null)},toArray:function(e){var t=[];return b(e,t,null,function(e){return e}),t},only:function(e){return s(e)||o("143"),e}},createRef:function(){return{current:null}},Component:i,PureComponent:l,createContext:function(e,t){return void 0===t&&(t=null),e={$$typeof:R,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:P,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:N,render:e}},lazy:function(e){return{$$typeof:M,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:D,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return w().useCallback(e,t)},useContext:function(e,t){return w().useContext(e,t)},useEffect:function(e,t){return w().useEffect(e,t)},useImperativeHandle:function(e,t,n){return w().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return w().useLayoutEffect(e,t)},useMemo:function(e,t){return w().useMemo(e,t)},useReducer:function(e,t,n){return w().useReducer(e,t,n)},useRef:function(e){return w().useRef(e)},useState:function(e){return w().useState(e)},Fragment:S,StrictMode:C,Suspense:I,createElement:u,cloneElement:function(e,t,n){(null===e||void 0===e)&&o("267",e);var r=void 0,i=k({},e.props),a=e.key,l=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,u=F.current),void 0!==t.key&&(a=""+t.key);var c=void 0;e.type&&e.type.defaultProps&&(c=e.type.defaultProps);for(r in t)j.call(t,r)&&!B.hasOwnProperty(r)&&(i[r]=void 0===t[r]&&void 0!==c?c[r]:t[r])}if(1===(r=arguments.length-2))i.children=n;else if(1<r){c=Array(r);for(var s=0;s<r;s++)c[s]=arguments[s+2];i.children=c}return{$$typeof:T,type:e.type,key:a,ref:l,props:i,_owner:u}},createFactory:function(e){var t=u.bind(null,e);return t.type=e,t},isValidElement:s,version:"16.8.6",unstable_ConcurrentMode:O,unstable_Profiler:E,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:W,ReactCurrentOwner:F,assign:k}},$={default:q},Y=$&&q||$;e.exports=Y.default||Y},/* 36 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"production"!==t.env.NODE_ENV&&function(){function t(e){if(null===e||"object"!=typeof e)return null;var t=Te&&e[Te]||e[_e];return"function"==typeof t?t:null}function r(e,t,n,r,o,i,a,l){if(Se(t),!e){var u=void 0;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,l],s=0;u=new Error(t.replace(/%s/g,function(){return c[s++]})),u.name="Invariant Violation"}// we don't care about invariant's own frame
throw u.framesToPop=1,u}}function o(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",o=r+"."+t;Ne[o]||(Oe(!1,"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,r),Ne[o]=!0)}/**
 * Base class helpers for the updating state of a component.
 */
function i(e,t,n){this.props=e,this.context=t,
// If a component has string refs, we will assign a different object later.
this.refs=De,
// We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=n||Ie}function a(){}/**
 * Convenience component with default shallow equality check for sCU.
 */
function l(e,t,n){this.props=e,this.context=t,
// If a component has string refs, we will assign a different object later.
this.refs=De,this.updater=n||Ie}
// an immutable object with a single mutable value
function u(){var e={current:null};return Object.seal(e),e}function c(e){return e._status===je?e._result:null}function s(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(""!==r?n+"("+r+")":n)}function f(e){if(null==e)
// Host root, text node or just invalid type.
return null;if("number"==typeof e.tag&&Oe(!1,"Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ge:return"ConcurrentMode";case pe:return"Fragment";case de:return"Portal";case he:return"Profiler";case me:return"StrictMode";case we:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case ye:return"Context.Consumer";case ve:return"Context.Provider";case be:return s(e,e.render,"ForwardRef");case ke:return f(e.type);case xe:var t=e,n=c(t);if(n)return f(n)}return null}function d(e){Ve=e}function p(e){if(Ye.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function m(e){if(Ye.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function h(e,t){var n=function(){Ke||(Ke=!0,Oe(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function v(e,t){var n=function(){Xe||(Xe=!0,Oe(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function y(e,t,n){var r=void 0,o={},i=null,a=null,l=null,u=null;if(null!=t){p(t)&&(a=t.ref),m(t)&&(i=""+t.key),l=void 0===t.__self?null:t.__self,u=void 0===t.__source?null:t.__source;
// Remaining properties are added to a new props object
for(r in t)Ye.call(t,r)&&!Qe.hasOwnProperty(r)&&(o[r]=t[r])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var c=arguments.length-2;if(1===c)o.children=n;else if(c>1){for(var s=Array(c),f=0;f<c;f++)s[f]=arguments[f+2];Object.freeze&&Object.freeze(s),o.children=s}
// Resolve default props
if(e&&e.defaultProps){var d=e.defaultProps;for(r in d)void 0===o[r]&&(o[r]=d[r])}if(i||a){var y="function"==typeof e?e.displayName||e.name||"Unknown":e;i&&h(o,y),a&&v(o,y)}return Ge(e,i,a,l,u,Le.current,o)}/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */
function g(e,t){return Ge(e.type,t,e.ref,e._self,e._source,e._owner,e.props)}/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function b(e,t,n){(null===e||void 0===e)&&r(!1,"React.cloneElement(...): The argument must be a React element, but you passed %s.",e);var o=void 0,i=ue({},e.props),a=e.key,l=e.ref,u=e._self,c=e._source,s=e._owner;if(null!=t){p(t)&&(
// Silently steal the ref from the parent.
l=t.ref,s=Le.current),m(t)&&(a=""+t.key);
// Remaining properties override existing props
var f=void 0;e.type&&e.type.defaultProps&&(f=e.type.defaultProps);for(o in t)Ye.call(t,o)&&!Qe.hasOwnProperty(o)&&(void 0===t[o]&&void 0!==f?
// Resolve default props
i[o]=f[o]:i[o]=t[o])}
// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var d=arguments.length-2;if(1===d)i.children=n;else if(d>1){for(var h=Array(d),v=0;v<d;v++)h[v]=arguments[v+2];i.children=h}return Ge(e.type,a,l,u,c,s,i)}/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===fe}/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function k(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function x(e){return(""+e).replace(tt,"$&/")}function T(e,t,n,r){if(rt.length){var o=rt.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,rt.length<nt&&rt.push(e)}/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function S(e,n,o,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(
// All of the above are perceived as null.
e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fe:case de:l=!0}}if(l)
// If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
return o(i,e,""===n?Je+E(e,0):n),1;var u=void 0,c=void 0,s=0,f=""===n?Je:n+Ze;if(Array.isArray(e))for(var d=0;d<e.length;d++)u=e[d],c=f+E(u,d),s+=S(u,c,o,i);else{var p=t(e);if("function"==typeof p){
// Warn about using Maps as children
p===e.entries&&(et||$e(!1,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."),et=!0);for(var m=p.call(e),h=void 0,v=0;!(h=m.next()).done;)u=h.value,c=f+E(u,v++),s+=S(u,c,o,i)}else if("object"===a){var y="";y=" If you meant to render a collection of children, use an array instead."+Be.getStackAddendum();var g=""+e;r(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(e).join(", ")+"}":g,y)}}return s}/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function C(e,t,n){return null==e?0:S(e,"",t,n)}/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function E(e,t){
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
return"object"==typeof e&&null!==e&&null!=e.key?k(e.key):t.toString(36)}function P(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function R(e,t,n){if(null==e)return e;var r=T(null,null,t,n);C(e,P,r),_(r)}function O(e,t,n){var r=e.result,o=e.keyPrefix,i=e.func,a=e.context,l=i.call(a,t,e.count++);Array.isArray(l)?N(l,r,n,function(e){return e}):null!=l&&(w(l)&&(l=g(l,
// Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
o+(!l.key||t&&t.key===l.key?"":x(l.key)+"/")+n)),r.push(l))}function N(e,t,n,r,o){var i="";null!=n&&(i=x(n)+"/");var a=T(t,i,r,o);C(e,O,a),_(a)}/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function I(e,t,n){if(null==e)return e;var r=[];return N(e,r,null,t,n),r}/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function D(e){return C(e,function(){return null},null)}/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function M(e){var t=[];return N(e,t,null,function(e){return e}),t}/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function U(e){return w(e)||r(!1,"React.Children.only expected to receive a single React element child."),e}function A(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&Oe(!1,"createContext: Expected the optional second argument to be a function. Instead received: %s",t);var n={$$typeof:ye,_calculateChangedBits:t,
// As a workaround to support multiple concurrent renderers, we categorize
// some renderers as primary and others as secondary. We only expect
// there to be two concurrent renderers at most: React Native (primary) and
// Fabric (secondary); React DOM (primary) and React ART (secondary).
// Secondary renderers store their context values on separate fields.
_currentValue:e,_currentValue2:e,
// Used to track how many concurrent renderers this context currently
// supports within in a single renderer. Such as parallel server rendering.
_threadCount:0,
// These are circular
Provider:null,Consumer:null};n.Provider={$$typeof:ve,_context:n};var r=!1,o=!1,i={$$typeof:ye,_context:n,_calculateChangedBits:n._calculateChangedBits};
// $FlowFixMe: Flow complains about not setting a value, which is intentional here
// $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
return Object.defineProperties(i,{Provider:{get:function(){return o||(o=!0,$e(!1,"Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),n.Provider},set:function(e){n.Provider=e}},_currentValue:{get:function(){return n._currentValue},set:function(e){n._currentValue=e}},_currentValue2:{get:function(){return n._currentValue2},set:function(e){n._currentValue2=e}},_threadCount:{get:function(){return n._threadCount},set:function(e){n._threadCount=e}},Consumer:{get:function(){return r||(r=!0,$e(!1,"Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),n.Consumer}}}),n.Consumer=i,n._currentRenderer=null,n._currentRenderer2=null,n}function z(e){var t={$$typeof:xe,_ctor:e,
// React uses these fields to store the result.
_status:-1,_result:null},n=void 0,r=void 0;return Object.defineProperties(t,{defaultProps:{configurable:!0,get:function(){return n},set:function(e){$e(!1,"React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=e,
// Match production behavior more closely:
Object.defineProperty(t,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){$e(!1,"React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,
// Match production behavior more closely:
Object.defineProperty(t,"propTypes",{enumerable:!0})}}}),t}function L(e){
// Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
return null!=e&&e.$$typeof===ke?Oe(!1,"forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?Oe(!1,"forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&Oe(!1,"forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null!=e.defaultProps||null!=e.propTypes)&&Oe(!1,"forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"),{$$typeof:be,render:e}}function W(e){
// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
return"string"==typeof e||"function"==typeof e||e===pe||e===ge||e===he||e===me||e===we||"object"==typeof e&&null!==e&&(e.$$typeof===xe||e.$$typeof===ke||e.$$typeof===ve||e.$$typeof===ye||e.$$typeof===be)}function F(e,t){return W(e)||Oe(!1,"memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:ke,type:e,compare:void 0===t?null:t}}function j(){var e=ze.current;return null===e&&r(!1,"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."),e}function B(e,t){var n=j();
// TODO: add a more generic warning for invalid values.
if(void 0!==t&&$e(!1,"useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var r=e._context;
// Don't deduplicate because this legitimately causes bugs
// and nobody should be using this in existing code.
r.Consumer===e?$e(!1,"Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&$e(!1,"Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return n.useContext(e,t)}function V(e){return j().useState(e)}function H(e,t,n){return j().useReducer(e,t,n)}function q(e){return j().useRef(e)}function $(e,t){return j().useEffect(e,t)}function Y(e,t){return j().useLayoutEffect(e,t)}function Q(e,t){return j().useCallback(e,t)}function K(e,t){return j().useMemo(e,t)}function X(e,t,n){return j().useImperativeHandle(e,t,n)}function G(e,t){return j().useDebugValue(e,t)}function J(){if(Le.current){var e=f(Le.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Z(e){if(null!==e&&void 0!==e&&void 0!==e.__source){var t=e.__source;return"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}function ee(e){var t=J();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function te(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=ee(t);if(!it[n]){it[n]=!0;
// Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==Le.current&&(
// Give the component that originally created this child.
r=" It was passed a child from "+f(e._owner.type)+"."),d(e),$e(!1,'Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',n,r),d(null)}}}/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function ne(e,n){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var o=e[r];w(o)&&te(o,n)}else if(w(e))
// This element was passed in a valid location.
e._store&&(e._store.validated=!0);else if(e){var i=t(e);if("function"==typeof i&&i!==e.entries)for(var a=i.call(e),l=void 0;!(l=a.next()).done;)w(l.value)&&te(l.value,n)}}/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function re(e){var t=e.type;if(null!==t&&void 0!==t&&"string"!=typeof t){var n=f(t),r=void 0;if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==be&&
// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
t.$$typeof!==ke)return;r=t.propTypes}r?(d(e),ce(r,e.props,"prop",n,Be.getStackAddendum),d(null)):void 0===t.PropTypes||ot||(ot=!0,Oe(!1,"Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",n||"Unknown")),"function"==typeof t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved||Oe(!1,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."))}}/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function oe(e){d(e);for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){$e(!1,"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r);break}}null!==e.ref&&$e(!1,"Invalid attribute `ref` supplied to `React.Fragment`."),d(null)}function ie(e,t,n){var r=W(e);
// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!r){var o="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i=Z(t);o+=i||J();var a=void 0;null===e?a="null":Array.isArray(e)?a="array":void 0!==e&&e.$$typeof===fe?(a="<"+(f(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,$e(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,o)}var l=y.apply(this,arguments);
// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==l)return l;
// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(r)for(var u=2;u<arguments.length;u++)ne(arguments[u],e);return e===pe?oe(l):re(l),l}function ae(e){var t=ie.bind(null,e);return t.type=e,Object.defineProperty(t,"type",{enumerable:!1,get:function(){return Pe(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t}function le(e,t,n){for(var r=b.apply(this,arguments),o=2;o<arguments.length;o++)ne(arguments[o],r.type);return re(r),r}var ue=n(5),ce=n(19),se="function"==typeof Symbol&&Symbol.for,fe=se?Symbol.for("react.element"):60103,de=se?Symbol.for("react.portal"):60106,pe=se?Symbol.for("react.fragment"):60107,me=se?Symbol.for("react.strict_mode"):60108,he=se?Symbol.for("react.profiler"):60114,ve=se?Symbol.for("react.provider"):60109,ye=se?Symbol.for("react.context"):60110,ge=se?Symbol.for("react.concurrent_mode"):60111,be=se?Symbol.for("react.forward_ref"):60112,we=se?Symbol.for("react.suspense"):60113,ke=se?Symbol.for("react.memo"):60115,xe=se?Symbol.for("react.lazy"):60116,Te="function"==typeof Symbol&&Symbol.iterator,_e="@@iterator",Se=function(){};Se=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")};
// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.
/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var Ce=function(){},Ee=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(i)}catch(e){}};Ce=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];Ee.apply(void 0,[t].concat(r))}};var Pe=Ce,Re=function(){};Re=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(r.length>8)
// Check before the condition to catch violations early.
throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!=typeof console){var i=r.map(function(e){return""+e});i.unshift("Warning: "+t),
// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
Function.prototype.apply.call(console.error,console,i)}try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var a=0,l="Warning: "+t.replace(/%s/g,function(){return r[a++]});throw new Error(l)}catch(e){}}};var Oe=Re,Ne={},Ie={/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
isMounted:function(e){return!1},/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
enqueueForceUpdate:function(e,t,n){o(e,"forceUpdate")},/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
enqueueReplaceState:function(e,t,n,r){o(e,"replaceState")},/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
enqueueSetState:function(e,t,n,r){o(e,"setState")}},De={};Object.freeze(De),i.prototype.isReactComponent={},/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
i.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&r(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e,t,"setState")},/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var Me={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for(var Ue in Me)Me.hasOwnProperty(Ue)&&function(e,t){Object.defineProperty(i.prototype,e,{get:function(){Pe(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})}(Ue,Me[Ue]);a.prototype=i.prototype;var Ae=l.prototype=new a;Ae.constructor=l,
// Avoid an extra prototype jump for these methods.
ue(Ae,i.prototype),Ae.isPureReactComponent=!0;/**
 * Keeps track of the current dispatcher.
 */
var ze={/**
   * @internal
   * @type {ReactComponent}
   */
current:null},Le={/**
   * @internal
   * @type {ReactComponent}
   */
current:null},We=/^(.*)[\\\/]/,Fe=function(e,t,n){var r="";if(t){var o=t.fileName,i=o.replace(We,"");
// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(i)){var a=o.match(We);if(a){var l=a[1];if(l){i=l.replace(We,"")+"/"+i}}}r=" (at "+i+":"+t.lineNumber+")"}else n&&(r=" (created by "+n+")");return"\n    in "+(e||"Unknown")+r},je=1,Be={},Ve=null;
// Stack implementation injected by the current renderer.
Be.getCurrentStack=null,Be.getStackAddendum=function(){var e="";
// Add an extra top frame while an element is being validated
if(Ve){var t=f(Ve.type),n=Ve._owner;e+=Fe(t,Ve._source,n&&f(n.type))}
// Delegate to the injected renderer-specific implementation
var r=Be.getCurrentStack;return r&&(e+=r()||""),e};var He={ReactCurrentDispatcher:ze,ReactCurrentOwner:Le,
// Used by renderers to avoid bundling object-assign twice in UMD bundles:
assign:ue};ue(He,{
// These should not be included in production.
ReactDebugCurrentFrame:Be,
// Shim for React DOM 16.0.0 which still destructured (but not used) this.
// TODO: remove in React 17.0.
ReactComponentTreeHook:{}});/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var qe=Oe;qe=function(e,t){if(!e){
// eslint-disable-next-line react-internal/warning-and-invariant-args
for(var n=He.ReactDebugCurrentFrame,r=n.getStackAddendum(),o=arguments.length,i=Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];Oe.apply(void 0,[!1,t+"%s"].concat(i,[r]))}};var $e=qe,Ye=Object.prototype.hasOwnProperty,Qe={key:!0,ref:!0,__self:!0,__source:!0},Ke=void 0,Xe=void 0,Ge=function(e,t,n,r,o,i,a){var l={
// This tag allows us to uniquely identify this as a React Element
$$typeof:fe,
// Built-in properties that belong on the element
type:e,key:t,ref:n,props:a,
// Record the component responsible for creating this element.
_owner:i};
// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
// To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
// self and source are DEV only properties.
// Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l},Je=".",Ze=":",et=!1,tt=/\/+/g,nt=10,rt=[],ot=void 0;ot=!1;/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var it={},at={Children:{map:I,forEach:R,count:D,toArray:M,only:U},createRef:u,Component:i,PureComponent:l,createContext:A,forwardRef:L,lazy:z,memo:F,useCallback:Q,useContext:B,useEffect:$,useImperativeHandle:X,useDebugValue:G,useLayoutEffect:Y,useMemo:K,useReducer:H,useRef:q,useState:V,Fragment:pe,StrictMode:me,Suspense:we,createElement:ie,cloneElement:le,createFactory:ae,isValidElement:w,version:"16.8.6",unstable_ConcurrentMode:ge,unstable_Profiler:he,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:He},lt=Object.freeze({default:at}),ut=lt&&at||lt,ct=ut.default||ut;e.exports=ct}()}).call(t,n(0))},/* 37 */
/***/
function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},/* 38 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){function r(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){if("production"!==t.env.NODE_ENV)
// This branch is unreachable because this function is only called
// in production, but the condition is true only in development.
// Therefore if the branch is still here, dead code elimination wasn't
// properly applied.
// Don't change the message. React DevTools relies on it. Also make sure
// this message doesn't occur elsewhere in this function, or it will cause
// a false positive.
throw new Error("^_^");try{
// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){}}}"production"===t.env.NODE_ENV?(
// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
r(),e.exports=n(39)):e.exports=n(42)}).call(t,n(0))},/* 39 */
/***/
function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,l],c=0;e=Error(t.replace(/%s/g,function(){return u[c++]})),e.name="Invariant Violation"}throw e.framesToPop=1,e}}function o(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);r(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function i(e,t,n,r,o,i,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}function a(e,t,n,r,o,a,l,u,c){co=!1,so=null,i.apply(mo,arguments)}function l(e,t,n,r,i,l,u,c,s){if(a.apply(this,arguments),co){if(co){var f=so;co=!1,so=null}else o("198"),f=void 0;fo||(fo=!0,po=f)}}function u(){if(ho)for(var e in vo){var t=vo[e],n=ho.indexOf(e);if(-1<n||o("96",e),!yo[n]){t.extractEvents||o("97",e),yo[n]=t,n=t.eventTypes;for(var r in n){var i=void 0,a=n[r],l=t,u=r;go.hasOwnProperty(u)&&o("99",u),go[u]=a;var s=a.phasedRegistrationNames;if(s){for(i in s)s.hasOwnProperty(i)&&c(s[i],l,u);i=!0}else a.registrationName?(c(a.registrationName,l,u),i=!0):i=!1;i||o("98",r,e)}}}}function c(e,t,n){bo[e]&&o("100",e),bo[e]=t,wo[e]=t.eventTypes[n].dependencies}function s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=To(n),l(r,t,void 0,e),e.currentTarget=null}function f(e,t){return null==t&&o("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function d(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}function p(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)s(e,t[r],n[r]);else t&&s(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function m(e,t){var n=e.stateNode;if(!n)return null;var r=ko(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(r=!r.disabled)||(e=e.type,r=!("button"===e||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&o("231",t,typeof n),n)}function h(e){if(null!==e&&(_o=f(_o,e)),e=_o,_o=null,e&&(d(e,p),_o&&o("95"),fo))throw e=po,fo=!1,po=null,e}function v(e){if(e[Eo])return e[Eo];for(;!e[Eo];){if(!e.parentNode)return null;e=e.parentNode}return e=e[Eo],5===e.tag||6===e.tag?e:null}function y(e){return e=e[Eo],!e||5!==e.tag&&6!==e.tag?null:e}function g(e){if(5===e.tag||6===e.tag)return e.stateNode;o("33")}function b(e){return e[Po]||null}function w(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function k(e,t,n){(t=m(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=f(n._dispatchListeners,t),n._dispatchInstances=f(n._dispatchInstances,e))}function x(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=w(t);for(t=n.length;0<t--;)k(n[t],"captured",e);for(t=0;t<n.length;t++)k(n[t],"bubbled",e)}}function T(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=m(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=f(n._dispatchListeners,t),n._dispatchInstances=f(n._dispatchInstances,e))}function _(e){e&&e.dispatchConfig.registrationName&&T(e._targetInst,null,e)}function S(e){d(e,x)}function C(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function E(e){if(No[e])return No[e];if(!Oo[e])return e;var t,n=Oo[e];for(t in n)if(n.hasOwnProperty(t)&&t in Io)return No[e]=n[t];return e}function P(){if(Fo)return Fo;var e,t,n=Wo,r=n.length,o="value"in Lo?Lo.value:Lo.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Fo=o.slice(e,1<t?1-t:void 0)}function R(){return!0}function O(){return!1}function N(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var o in e)e.hasOwnProperty(o)&&((t=e[o])?this[o]=t(n):"target"===o?this.target=r:this[o]=n[o]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?R:O,this.isPropagationStopped=O,this}function I(e,t,n,r){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)}function D(e){e instanceof this||o("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function M(e){e.eventPool=[],e.getPooled=I,e.release=D}function U(e,t){switch(e){case"keyup":return-1!==Vo.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function A(e){return e=e.detail,"object"==typeof e&&"data"in e?e.data:null}function z(e,t){switch(e){case"compositionend":return A(t);case"keypress":return 32!==t.which?null:(Xo=!0,Qo);case"textInput":return e=t.data,e===Qo&&Xo?null:e;default:return null}}function L(e,t){if(Go)return"compositionend"===e||!Ho&&U(e,t)?(e=P(),Fo=Wo=Lo=null,Go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yo&&"ko"!==t.locale?null:t.data;default:return null}}function W(e){if(e=xo(e)){"function"!=typeof Zo&&o("280");var t=ko(e.stateNode);Zo(e.stateNode,e.type,t)}}function F(e){ei?ti?ti.push(e):ti=[e]:ei=e}function j(){if(ei){var e=ei,t=ti;if(ti=ei=null,W(e),t)for(e=0;e<t.length;e++)W(t[e])}}function B(e,t){return e(t)}function V(e,t,n){return e(t,n)}function H(){}function q(e,t){if(ni)return e(t);ni=!0;try{return B(e,t)}finally{ni=!1,(null!==ei||null!==ti)&&(H(),j())}}function $(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!ri[e.type]:"textarea"===t}function Y(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function Q(e){if(!Ro)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t="function"==typeof t[e]),t}function K(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function X(e){var t=K(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function G(e){e._valueTracker||(e._valueTracker=X(e))}function J(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Z(e){return null===e||"object"!=typeof e?null:(e=bi&&e[bi]||e["@@iterator"],"function"==typeof e?e:null)}function ee(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case mi:return"ConcurrentMode";case ci:return"Fragment";case ui:return"Portal";case fi:return"Profiler";case si:return"StrictMode";case vi:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case pi:return"Context.Consumer";case di:return"Context.Provider";case hi:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case yi:return ee(e.type);case gi:if(e=1===e._status?e._result:null)return ee(e)}return null}function te(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,o=e._debugSource,i=ee(e.type);n=null,r&&(n=ee(r.type)),r=i,i="",o?i=" (at "+o.fileName.replace(ii,"")+":"+o.lineNumber+")":n&&(i=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+i}t+=n,e=e.return}while(e);return t}function ne(e){return!!ki.call(Ti,e)||!ki.call(xi,e)&&(wi.test(e)?Ti[e]=!0:(xi[e]=!0,!1))}function re(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}function oe(e,t,n,r){if(null===t||void 0===t||re(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}function ae(e){return e[1].toUpperCase()}function le(e,t,n,r){var o=_i.hasOwnProperty(t)?_i[t]:null;(null!==o?0===o.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(oe(t,n,o,r)&&(n=null),r||null===o?ne(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(o=o.type,n=3===o||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function ue(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function ce(e,t){var n=t.checked;return lo({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function se(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ue(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function fe(e,t){null!=(t=t.checked)&&le(e,"checked",t,!1)}function de(e,t){fe(e,t);var n=ue(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?me(e,t.type,n):t.hasOwnProperty("defaultValue")&&me(e,t.type,ue(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function pe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,""!==n&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function me(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function he(e,t,n){return e=N.getPooled(Ci.change,e,t,n),e.type="change",F(n),S(e),e}function ve(e){h(e)}function ye(e){if(J(g(e)))return e}function ge(e,t){if("change"===e)return t}function be(){Ei&&(Ei.detachEvent("onpropertychange",we),Pi=Ei=null)}function we(e){"value"===e.propertyName&&ye(Pi)&&(e=he(Pi,e,Y(e)),q(ve,e))}function ke(e,t,n){"focus"===e?(be(),Ei=t,Pi=n,Ei.attachEvent("onpropertychange",we)):"blur"===e&&be()}function xe(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return ye(Pi)}function Te(e,t){if("click"===e)return ye(t)}function _e(e,t){if("input"===e||"change"===e)return ye(t)}function Se(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Ii[e])&&!!t[e]}function Ce(){return Se}function Ee(e,t){return e===t&&(0!==e||1/e==1/t)||e!==e&&t!==t}function Pe(e,t){if(Ee(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!ji.call(t,n[r])||!Ee(e[n[r]],t[n[r]]))return!1;return!0}function Re(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(t=t.return,0!=(2&t.effectTag))return 1}return 3===t.tag?2:3}function Oe(e){2!==Re(e)&&o("188")}function Ne(e){var t=e.alternate;if(!t)return t=Re(e),3===t&&o("188"),1===t?null:e;for(var n=e,r=t;;){var i=n.return,a=i?i.alternate:null;if(!i||!a)break;if(i.child===a.child){for(var l=i.child;l;){if(l===n)return Oe(i),e;if(l===r)return Oe(i),t;l=l.sibling}o("188")}if(n.return!==r.return)n=i,r=a;else{l=!1;for(var u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}l||o("189")}}n.alternate!==r&&o("190")}return 3!==n.tag&&o("188"),n.stateNode.current===n?e:t}function Ie(e){if(!(e=Ne(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function De(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Me(e,t){var n=e[0];e=e[1];var r="on"+(e[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:r,captured:r+"Capture"},dependencies:[n],isInteractive:t},Zi[e]=t,ea[n]=t}function Ue(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r;for(r=n;r.return;)r=r.return;if(!(r=3!==r.tag?null:r.stateNode.containerInfo))break;e.ancestors.push(n),n=v(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var o=Y(e.nativeEvent);r=e.topLevelType;for(var i=e.nativeEvent,a=null,l=0;l<yo.length;l++){var u=yo[l];u&&(u=u.extractEvents(r,t,i,o))&&(a=f(a,u))}h(a)}}function Ae(e,t){if(!t)return null;var n=(na(e)?Le:We).bind(null,e);t.addEventListener(e,n,!1)}function ze(e,t){if(!t)return null;var n=(na(e)?Le:We).bind(null,e);t.addEventListener(e,n,!0)}function Le(e,t){V(We,e,t)}function We(e,t){if(oa){var n=Y(t);if(n=v(n),null===n||"number"!=typeof n.tag||2===Re(n)||(n=null),ra.length){var r=ra.pop();r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{q(Ue,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ra.length&&ra.push(e)}}}function Fe(e){return Object.prototype.hasOwnProperty.call(e,la)||(e[la]=aa++,ia[e[la]]={}),ia[e[la]]}function je(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Be(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ve(e,t){var n=Be(e);e=0;for(var r;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Be(n)}}function He(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?He(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function qe(){for(var e=window,t=je();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;e=t.contentWindow,t=je(e.document)}return t}function $e(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Ye(){var e=qe();if($e(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{t.nodeType,o.nodeType}catch(e){t=null;break e}var i=0,a=-1,l=-1,u=0,c=0,s=e,f=null;t:for(;;){for(var d;s!==t||0!==r&&3!==s.nodeType||(a=i+r),s!==o||0!==n&&3!==s.nodeType||(l=i+n),3===s.nodeType&&(i+=s.nodeValue.length),null!==(d=s.firstChild);)f=s,s=d;for(;;){if(s===e)break t;if(f===t&&++u===r&&(a=i),f===o&&++c===n&&(l=i),null!==(d=s.nextSibling))break;s=f,f=s.parentNode}s=d}t=-1===a||-1===l?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}function Qe(e){var t=qe(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&He(n.ownerDocument.documentElement,n)){if(null!==r&&$e(n))if(t=r.start,e=r.end,void 0===e&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ve(n,i);var a=Ve(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}function Ke(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return pa||null==sa||sa!==je(n)?null:(n=sa,"selectionStart"in n&&$e(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),da&&Pe(da,n)?null:(da=n,e=N.getPooled(ca.select,fa,e,t),e.type="select",e.target=sa,S(e),e))}function Xe(e){var t="";return ao.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}function Ge(e,t){return e=lo({children:void 0},t),(t=Xe(t.children))&&(e.children=t),e}function Je(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ue(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function Ze(e,t){return null!=t.dangerouslySetInnerHTML&&o("91"),lo({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function et(e,t){var n=t.value;null==n&&(n=t.defaultValue,t=t.children,null!=t&&(null!=n&&o("92"),Array.isArray(t)&&(1>=t.length||o("93"),t=t[0]),n=t),null==n&&(n="")),e._wrapperState={initialValue:ue(n)}}function tt(e,t){var n=ue(t.value),r=ue(t.defaultValue);null!=n&&(n=""+n,n!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function nt(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}function rt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?rt(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}function it(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function at(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ga.hasOwnProperty(e)&&ga[e]?(""+t).trim():t+"px"}function lt(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=at(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}function ut(e,t){t&&(wa[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&o("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&o("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||o("61")),null!=t.style&&"object"!=typeof t.style&&o("62",""))}function ct(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function st(e,t){e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument;var n=Fe(e);t=wo[t];for(var r=0;r<t.length;r++){var o=t[r];if(!n.hasOwnProperty(o)||!n[o]){switch(o){case"scroll":ze("scroll",e);break;case"focus":case"blur":ze("focus",e),ze("blur",e),n.blur=!0,n.focus=!0;break;case"cancel":case"close":Q(o)&&ze(o,e);break;case"invalid":case"submit":case"reset":break;default:-1===zo.indexOf(o)&&Ae(o,e)}n[o]=!0}}}function ft(){}function dt(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function pt(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function mt(e,t,n,r,o){e[Po]=o,"input"===n&&"radio"===o.type&&null!=o.name&&fe(e,o),ct(n,r),r=ct(n,o);for(var i=0;i<t.length;i+=2){var a=t[i],l=t[i+1];"style"===a?lt(e,l):"dangerouslySetInnerHTML"===a?ya(e,l):"children"===a?it(e,l):le(e,a,l,r)}switch(n){case"input":de(e,o);break;case"textarea":tt(e,o);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!o.multiple,n=o.value,null!=n?Je(e,!!o.multiple,n,!1):t!==!!o.multiple&&(null!=o.defaultValue?Je(e,!!o.multiple,o.defaultValue,!0):Je(e,!!o.multiple,o.multiple?[]:"",!1))}}function ht(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function vt(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function yt(e){0>Pa||(e.current=Ea[Pa],Ea[Pa]=null,Pa--)}function gt(e,t){Pa++,Ea[Pa]=e.current,e.current=t}function bt(e,t){var n=e.type.contextTypes;if(!n)return Ra;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function wt(e){return null!==(e=e.childContextTypes)&&void 0!==e}function kt(e){yt(Na,e),yt(Oa,e)}function xt(e){yt(Na,e),yt(Oa,e)}function Tt(e,t,n){Oa.current!==Ra&&o("168"),gt(Oa,t,e),gt(Na,n,e)}function _t(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;r=r.getChildContext();for(var i in r)i in e||o("108",ee(t)||"Unknown",i);return lo({},n,r)}function St(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||Ra,Ia=Oa.current,gt(Oa,t,e),gt(Na,Na.current,e),!0}function Ct(e,t,n){var r=e.stateNode;r||o("169"),n?(t=_t(e,t,Ia),r.__reactInternalMemoizedMergedChildContext=t,yt(Na,e),yt(Oa,e),gt(Oa,t,e)):yt(Na,e),gt(Na,n,e)}function Et(e){return function(t){try{return e(t)}catch(e){}}}function Pt(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Da=Et(function(e){return t.onCommitFiberRoot(n,e)}),Ma=Et(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}return!0}function Rt(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Ot(e,t,n,r){return new Rt(e,t,n,r)}function Nt(e){return!(!(e=e.prototype)||!e.isReactComponent)}function It(e){if("function"==typeof e)return Nt(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===hi)return 11;if(e===yi)return 14}return 2}function Dt(e,t){var n=e.alternate;return null===n?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.contextDependencies=e.contextDependencies,n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mt(e,t,n,r,i,a){var l=2;if(r=e,"function"==typeof e)Nt(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case ci:return Ut(n.children,i,a,t);case mi:return At(n,3|i,a,t);case si:return At(n,2|i,a,t);case fi:return e=Ot(12,n,t,4|i),e.elementType=fi,e.type=fi,e.expirationTime=a,e;case vi:return e=Ot(13,n,t,i),e.elementType=vi,e.type=vi,e.expirationTime=a,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case di:l=10;break e;case pi:l=9;break e;case hi:l=11;break e;case yi:l=14;break e;case gi:l=16,r=null;break e}o("130",null==e?e:typeof e,"")}return t=Ot(l,n,t,i),t.elementType=e,t.type=r,t.expirationTime=a,t}function Ut(e,t,n,r){return e=Ot(7,e,r,t),e.expirationTime=n,e}function At(e,t,n,r){return e=Ot(8,e,r,t),t=0==(1&t)?si:mi,e.elementType=t,e.type=t,e.expirationTime=n,e}function zt(e,t,n){return e=Ot(6,e,null,t),e.expirationTime=n,e}function Lt(e,t,n){return t=Ot(4,null!==e.children?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wt(e,t){e.didError=!1;var n=e.earliestPendingTime;0===n?e.earliestPendingTime=e.latestPendingTime=t:n<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),Vt(t,e)}function Ft(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var n=e.latestPendingTime;0!==n&&(n>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),n=e.earliestSuspendedTime,0===n?Wt(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,Wt(e,t)):t>n&&Wt(e,t)}Vt(0,e)}function jt(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var n=e.earliestPendingTime,r=e.latestPendingTime;n===t?e.earliestPendingTime=r===t?e.latestPendingTime=0:r:r===t&&(e.latestPendingTime=n),n=e.earliestSuspendedTime,r=e.latestSuspendedTime,0===n?e.earliestSuspendedTime=e.latestSuspendedTime=t:n<t?e.earliestSuspendedTime=t:r>t&&(e.latestSuspendedTime=t),Vt(t,e)}function Bt(e,t){var n=e.earliestPendingTime;return e=e.earliestSuspendedTime,n>t&&(t=n),e>t&&(t=e),t}function Vt(e,t){var n=t.earliestSuspendedTime,r=t.latestSuspendedTime,o=t.earliestPendingTime,i=t.latestPingedTime;o=0!==o?o:i,0===o&&(0===e||r<e)&&(o=r),e=o,0!==e&&n>e&&(e=n),t.nextExpirationTimeToWorkOn=o,t.expirationTime=e}function Ht(e,t){if(e&&e.defaultProps){t=lo({},t),e=e.defaultProps;for(var n in e)void 0===t[n]&&(t[n]=e[n])}return t}function qt(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,t=e._ctor,t=t(),t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)}),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}function $t(e,t,n,r){t=e.memoizedState,n=n(r,t),n=null===n||void 0===n?t:lo({},t,n),e.memoizedState=n,null!==(r=e.updateQueue)&&0===e.expirationTime&&(r.baseState=n)}function Yt(e,t,n,r,o,i,a){return e=e.stateNode,"function"==typeof e.shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!Pe(n,r)||!Pe(o,i))}function Qt(e,t,n){var r=!1,o=Ra,i=t.contextType;return"object"==typeof i&&null!==i?i=jn(i):(o=wt(t)?Ia:Oa.current,r=t.contextTypes,i=(r=null!==r&&void 0!==r)?bt(e,o):Ra),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Kt(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function Xt(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ua;var i=t.contextType;"object"==typeof i&&null!==i?o.context=jn(i):(i=wt(t)?Ia:Oa.current,o.context=bt(e,i)),i=e.updateQueue,null!==i&&(Xn(e,i,n,o,r),o.state=e.memoizedState),i=t.getDerivedStateFromProps,"function"==typeof i&&($t(e,t,i,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&Aa.enqueueReplaceState(o,o.state,null),null!==(i=e.updateQueue)&&(Xn(e,i,n,o,r),o.state=e.memoizedState)),"function"==typeof o.componentDidMount&&(e.effectTag|=4)}function Gt(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){n=n._owner;var r=void 0;n&&(1!==n.tag&&o("309"),r=n.stateNode),r||o("147",e);var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=r.refs;t===Ua&&(t=r.refs={}),null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}"string"!=typeof e&&o("284"),n._owner||o("290",e)}return e}function Jt(e,t){"textarea"!==e.type&&o("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function Zt(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t,n){return e=Dt(e,t,n),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index,r<n?(t.effectTag=2,n):r):(t.effectTag=2,n):n}function l(t){return e&&null===t.alternate&&(t.effectTag=2),t}function u(e,t,n,r){return null===t||6!==t.tag?(t=zt(n,e.mode,r),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function c(e,t,n,r){return null!==t&&t.elementType===n.type?(r=i(t,n.props,r),r.ref=Gt(e,t,n),r.return=e,r):(r=Mt(n.type,n.key,n.props,null,e.mode,r),r.ref=Gt(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Lt(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[],r),t.return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?(t=Ut(n,e.mode,r,o),t.return=e,t):(t=i(t,n,r),t.return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return t=zt(""+t,e.mode,n),t.return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case li:return n=Mt(t.type,t.key,t.props,null,e.mode,n),n.ref=Gt(e,null,t),n.return=e,n;case ui:return t=Lt(t,e.mode,n),t.return=e,t}if(za(t)||Z(t))return t=Ut(t,e.mode,n,null),t.return=e,t;Jt(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==o?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case li:return n.key===o?n.type===ci?f(e,t,n.props.children,r,o):c(e,t,n,r):null;case ui:return n.key===o?s(e,t,n,r):null}if(za(n)||Z(n))return null!==o?null:f(e,t,n,r,null);Jt(e,n)}return null}function m(e,t,n,r,o){if("string"==typeof r||"number"==typeof r)return e=e.get(n)||null,u(t,e,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case li:return e=e.get(null===r.key?n:r.key)||null,r.type===ci?f(t,e,r.props.children,o,r.key):c(t,e,r,o);case ui:return e=e.get(null===r.key?n:r.key)||null,s(t,e,r,o)}if(za(r)||Z(r))return e=e.get(n)||null,f(t,e,r,o,null);Jt(t,r)}return null}function h(o,i,l,u){for(var c=null,s=null,f=i,h=i=0,v=null;null!==f&&h<l.length;h++){f.index>h?(v=f,f=null):v=f.sibling;var y=p(o,f,l[h],u);if(null===y){null===f&&(f=v);break}e&&f&&null===y.alternate&&t(o,f),i=a(y,i,h),null===s?c=y:s.sibling=y,s=y,f=v}if(h===l.length)return n(o,f),c;if(null===f){for(;h<l.length;h++)(f=d(o,l[h],u))&&(i=a(f,i,h),null===s?c=f:s.sibling=f,s=f);return c}for(f=r(o,f);h<l.length;h++)(v=m(f,o,h,l[h],u))&&(e&&null!==v.alternate&&f.delete(null===v.key?h:v.key),i=a(v,i,h),null===s?c=v:s.sibling=v,s=v);return e&&f.forEach(function(e){return t(o,e)}),c}function v(i,l,u,c){var s=Z(u);"function"!=typeof s&&o("150"),null==(u=s.call(u))&&o("151");for(var f=s=null,h=l,v=l=0,y=null,g=u.next();null!==h&&!g.done;v++,g=u.next()){h.index>v?(y=h,h=null):y=h.sibling;var b=p(i,h,g.value,c);if(null===b){h||(h=y);break}e&&h&&null===b.alternate&&t(i,h),l=a(b,l,v),null===f?s=b:f.sibling=b,f=b,h=y}if(g.done)return n(i,h),s;if(null===h){for(;!g.done;v++,g=u.next())null!==(g=d(i,g.value,c))&&(l=a(g,l,v),null===f?s=g:f.sibling=g,f=g);return s}for(h=r(i,h);!g.done;v++,g=u.next())null!==(g=m(h,i,v,g.value,c))&&(e&&null!==g.alternate&&h.delete(null===g.key?v:g.key),l=a(g,l,v),null===f?s=g:f.sibling=g,f=g);return e&&h.forEach(function(e){return t(i,e)}),s}return function(e,r,a,u){var c="object"==typeof a&&null!==a&&a.type===ci&&null===a.key;c&&(a=a.props.children);var s="object"==typeof a&&null!==a;if(s)switch(a.$$typeof){case li:e:{for(s=a.key,c=r;null!==c;){if(c.key===s){if(7===c.tag?a.type===ci:c.elementType===a.type){n(e,c.sibling),r=i(c,a.type===ci?a.props.children:a.props,u),r.ref=Gt(e,c,a),r.return=e,e=r;break e}n(e,c);break}t(e,c),c=c.sibling}a.type===ci?(r=Ut(a.props.children,e.mode,u,a.key),r.return=e,e=r):(u=Mt(a.type,a.key,a.props,null,e.mode,u),u.ref=Gt(e,r,a),u.return=e,e=u)}return l(e);case ui:e:{for(c=a.key;null!==r;){if(r.key===c){if(4===r.tag&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),r=i(r,a.children||[],u),r.return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}r=Lt(a,e.mode,u),r.return=e,e=r}return l(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==r&&6===r.tag?(n(e,r.sibling),r=i(r,a,u),r.return=e,e=r):(n(e,r),r=zt(a,e.mode,u),r.return=e,e=r),l(e);if(za(a))return h(e,r,a,u);if(Z(a))return v(e,r,a,u);if(s&&Jt(e,a),void 0===a&&!c)switch(e.tag){case 1:case 0:u=e.type,o("152",u.displayName||u.name||"Component")}return n(e,r)}}function en(e){return e===Fa&&o("174"),e}function tn(e,t){gt(Va,t,e),gt(Ba,e,e),gt(ja,Fa,e);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ot(null,"");break;default:n=8===n?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=ot(t,n)}yt(ja,e),gt(ja,t,e)}function nn(e){yt(ja,e),yt(Ba,e),yt(Va,e)}function rn(e){en(Va.current);var t=en(ja.current),n=ot(t,e.type);t!==n&&(gt(Ba,e,e),gt(ja,n,e))}function on(e){Ba.current===e&&(yt(ja,e),yt(Ba,e))}function an(){o("321")}function ln(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ee(e[n],t[n]))return!1;return!0}function un(e,t,n,r,i,a){if(Za=a,el=t,nl=null!==e?e.memoizedState:null,Ja.current=null===nl?pl:ml,t=n(r,i),cl){do{cl=!1,fl+=1,nl=null!==e?e.memoizedState:null,il=rl,ll=ol=tl=null,Ja.current=ml,t=n(r,i)}while(cl);sl=null,fl=0}return Ja.current=dl,e=el,e.memoizedState=rl,e.expirationTime=al,e.updateQueue=ll,e.effectTag|=ul,e=null!==tl&&null!==tl.next,Za=0,il=ol=rl=nl=tl=el=null,al=0,ll=null,ul=0,e&&o("300"),t}function cn(){Ja.current=dl,Za=0,il=ol=rl=nl=tl=el=null,al=0,ll=null,ul=0,cl=!1,sl=null,fl=0}function sn(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===ol?rl=ol=e:ol=ol.next=e,ol}function fn(){if(null!==il)ol=il,il=ol.next,tl=nl,nl=null!==tl?tl.next:null;else{null===nl&&o("310"),tl=nl;var e={memoizedState:tl.memoizedState,baseState:tl.baseState,queue:tl.queue,baseUpdate:tl.baseUpdate,next:null};ol=null===ol?rl=e:ol.next=e,nl=tl.next}return ol}function dn(e,t){return"function"==typeof t?t(e):t}function pn(e){var t=fn(),n=t.queue;if(null===n&&o("311"),n.lastRenderedReducer=e,0<fl){var r=n.dispatch;if(null!==sl){var i=sl.get(n);if(void 0!==i){sl.delete(n);var a=t.memoizedState;do{a=e(a,i.action),i=i.next}while(null!==i);return Ee(a,t.memoizedState)||(bl=!0),t.memoizedState=a,t.baseUpdate===n.last&&(t.baseState=a),n.lastRenderedState=a,[a,r]}}return[t.memoizedState,r]}r=n.last;var l=t.baseUpdate;if(a=t.baseState,null!==l?(null!==r&&(r.next=null),r=l.next):r=null!==r?r.next:null,null!==r){var u=i=null,c=r,s=!1;do{var f=c.expirationTime;f<Za?(s||(s=!0,u=l,i=a),f>al&&(al=f)):a=c.eagerReducer===e?c.eagerState:e(a,c.action),l=c,c=c.next}while(null!==c&&c!==r);s||(u=l,i=a),Ee(a,t.memoizedState)||(bl=!0),t.memoizedState=a,t.baseUpdate=u,t.baseState=i,n.lastRenderedState=a}return[t.memoizedState,n.dispatch]}function mn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===ll?(ll={lastEffect:null},ll.lastEffect=e.next=e):(t=ll.lastEffect,null===t?ll.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,ll.lastEffect=e)),e}function hn(e,t,n,r){var o=sn();ul|=e,o.memoizedState=mn(t,n,void 0,void 0===r?null:r)}function vn(e,t,n,r){var o=fn();r=void 0===r?null:r;var i=void 0;if(null!==tl){var a=tl.memoizedState;if(i=a.destroy,null!==r&&ln(r,a.deps))return void mn(Ha,n,i,r)}ul|=e,o.memoizedState=mn(t,n,i,r)}function yn(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function gn(){}function bn(e,t,n){25>fl||o("301");var r=e.alternate;if(e===el||null!==r&&r===el)if(cl=!0,e={expirationTime:Za,action:n,eagerReducer:null,eagerState:null,next:null},null===sl&&(sl=new Map),void 0===(n=sl.get(t)))sl.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}else{gr();var i=Ur();i=_r(i,e);var a={expirationTime:i,action:n,eagerReducer:null,eagerState:null,next:null},l=t.last;if(null===l)a.next=a;else{var u=l.next;null!==u&&(a.next=u),l.next=a}if(t.last=a,0===e.expirationTime&&(null===r||0===r.expirationTime)&&null!==(r=t.lastRenderedReducer))try{var c=t.lastRenderedState,s=r(c,n);if(a.eagerReducer=r,a.eagerState=s,Ee(s,c))return}catch(e){}Pr(e,i)}}function wn(e,t){var n=Ot(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function kn(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function xn(e){if(yl){var t=vl;if(t){var n=t;if(!kn(e,t)){if(!(t=ht(n))||!kn(e,t))return e.effectTag|=2,yl=!1,void(hl=e);wn(hl,n)}hl=e,vl=vt(t)}else e.effectTag|=2,yl=!1,hl=e}}function Tn(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;hl=e}function _n(e){if(e!==hl)return!1;if(!yl)return Tn(e),yl=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!pt(t,e.memoizedProps))for(t=vl;t;)wn(e,t),t=ht(t);return Tn(e),vl=hl?ht(e.stateNode):null,!0}function Sn(){vl=hl=null,yl=!1}function Cn(e,t,n,r){t.child=null===e?Wa(t,null,n,r):La(t,e.child,n,r)}function En(e,t,n,r,o){n=n.render;var i=t.ref;return Fn(t,o),r=un(e,t,n,r,i,o),null===e||bl?(t.effectTag|=1,Cn(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),An(e,t,o))}function Pn(e,t,n,r,o,i){if(null===e){var a=n.type;return"function"!=typeof a||Nt(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?(e=Mt(n.type,null,r,null,t.mode,i),e.ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Rn(e,t,a,r,o,i))}return a=e.child,o<i&&(o=a.memoizedProps,n=n.compare,(n=null!==n?n:Pe)(o,r)&&e.ref===t.ref)?An(e,t,i):(t.effectTag|=1,e=Dt(a,r,i),e.ref=t.ref,e.return=t,t.child=e)}function Rn(e,t,n,r,o,i){return null!==e&&Pe(e.memoizedProps,r)&&e.ref===t.ref&&(bl=!1,o<i)?An(e,t,i):Nn(e,t,n,r,i)}function On(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Nn(e,t,n,r,o){var i=wt(n)?Ia:Oa.current;return i=bt(t,i),Fn(t,o),n=un(e,t,n,r,i,o),null===e||bl?(t.effectTag|=1,Cn(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=o&&(e.expirationTime=0),An(e,t,o))}function In(e,t,n,r,o){if(wt(n)){var i=!0;St(t)}else i=!1;if(Fn(t,o),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Qt(t,n,r,o),Xt(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,c=n.contextType;"object"==typeof c&&null!==c?c=jn(c):(c=wt(n)?Ia:Oa.current,c=bt(t,c));var s=n.getDerivedStateFromProps,f="function"==typeof s||"function"==typeof a.getSnapshotBeforeUpdate;f||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==r||u!==c)&&Kt(t,a,r,c),Pl=!1;var d=t.memoizedState;u=a.state=d;var p=t.updateQueue;null!==p&&(Xn(t,p,r,a,o),u=t.memoizedState),l!==r||d!==u||Na.current||Pl?("function"==typeof s&&($t(t,n,s,r),u=t.memoizedState),(l=Pl||Yt(t,n,l,r,d,u,c))?(f||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.effectTag|=4)):("function"==typeof a.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=l):("function"==typeof a.componentDidMount&&(t.effectTag|=4),r=!1)}else a=t.stateNode,l=t.memoizedProps,a.props=t.type===t.elementType?l:Ht(t.type,l),u=a.context,c=n.contextType,"object"==typeof c&&null!==c?c=jn(c):(c=wt(n)?Ia:Oa.current,c=bt(t,c)),s=n.getDerivedStateFromProps,(f="function"==typeof s||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==r||u!==c)&&Kt(t,a,r,c),Pl=!1,u=t.memoizedState,d=a.state=u,p=t.updateQueue,null!==p&&(Xn(t,p,r,a,o),d=t.memoizedState),l!==r||u!==d||Na.current||Pl?("function"==typeof s&&($t(t,n,s,r),d=t.memoizedState),(s=Pl||Yt(t,n,l,r,u,d,c))?(f||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,d,c),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,d,c)),"function"==typeof a.componentDidUpdate&&(t.effectTag|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=c,r=s):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),r=!1);return Dn(e,t,n,r,i,o)}function Dn(e,t,n,r,o,i){On(e,t);var a=0!=(64&t.effectTag);if(!r&&!a)return o&&Ct(t,n,!1),An(e,t,i);r=t.stateNode,gl.current=t;var l=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&a?(t.child=La(t,e.child,null,i),t.child=La(t,null,l,i)):Cn(e,t,l,i),t.memoizedState=r.state,o&&Ct(t,n,!0),t.child}function Mn(e){var t=e.stateNode;t.pendingContext?Tt(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tt(e,t.context,!1),tn(e,t.containerInfo)}function Un(e,t,n){var r=t.mode,o=t.pendingProps,i=t.memoizedState;if(0==(64&t.effectTag)){i=null;var a=!1}else i={timedOutAt:null!==i?i.timedOutAt:0},a=!0,t.effectTag&=-65;if(null===e)if(a){var l=o.fallback;e=Ut(null,r,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),r=Ut(l,r,n,null),e.sibling=r,n=e,n.return=r.return=t}else n=r=Wa(t,null,o.children,n);else null!==e.memoizedState?(r=e.child,l=r.sibling,a?(n=o.fallback,o=Dt(r,r.pendingProps,0),0==(1&t.mode)&&(a=null!==t.memoizedState?t.child.child:t.child)!==r.child&&(o.child=a),r=o.sibling=Dt(l,n,l.expirationTime),n=o,o.childExpirationTime=0,n.return=r.return=t):n=r=La(t,r.child,o.children,n)):(l=e.child,a?(a=o.fallback,o=Ut(null,r,0,null),o.child=l,0==(1&t.mode)&&(o.child=null!==t.memoizedState?t.child.child:t.child),r=o.sibling=Ut(a,r,n,null),r.effectTag|=2,n=o,o.childExpirationTime=0,n.return=r.return=t):r=n=La(t,l,o.children,n)),t.stateNode=e.stateNode;return t.memoizedState=i,t.child=n,r}function An(e,t,n){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child&&o("153"),null!==t.child){for(e=t.child,n=Dt(e,e.pendingProps,e.expirationTime),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps,e.expirationTime),n.return=t;n.sibling=null}return t.child}function zn(e,t,n){var r=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||Na.current)bl=!0;else if(r<n){switch(bl=!1,t.tag){case 3:Mn(t),Sn();break;case 5:rn(t);break;case 1:wt(t.type)&&St(t);break;case 4:tn(t,t.stateNode.containerInfo);break;case 10:Ln(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?Un(e,t,n):(t=An(e,t,n),null!==t?t.sibling:null)}return An(e,t,n)}}else bl=!1;switch(t.expirationTime=0,t.tag){case 2:r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var i=bt(t,Oa.current);if(Fn(t,n),i=un(null,t,r,e,i,n),t.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,cn(),wt(r)){var a=!0;St(t)}else a=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null;var l=r.getDerivedStateFromProps;"function"==typeof l&&$t(t,r,l,e),i.updater=Aa,t.stateNode=i,i._reactInternalFiber=t,Xt(t,r,e,n),t=Dn(null,t,r,!0,a,n)}else t.tag=0,Cn(null,t,i,n),t=t.child;return t;case 16:switch(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),a=t.pendingProps,e=qt(i),t.type=e,i=t.tag=It(e),a=Ht(e,a),l=void 0,i){case 0:l=Nn(null,t,e,a,n);break;case 1:l=In(null,t,e,a,n);break;case 11:l=En(null,t,e,a,n);break;case 14:l=Pn(null,t,e,Ht(e.type,a),r,n);break;default:o("306",e,"")}return l;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),Nn(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),In(e,t,r,i,n);case 3:return Mn(t),r=t.updateQueue,null===r&&o("282"),i=t.memoizedState,i=null!==i?i.element:null,Xn(t,r,t.pendingProps,null,n),r=t.memoizedState.element,r===i?(Sn(),t=An(e,t,n)):(i=t.stateNode,(i=(null===e||null===e.child)&&i.hydrate)&&(vl=vt(t.stateNode.containerInfo),hl=t,i=yl=!0),i?(t.effectTag|=2,t.child=Wa(t,null,r,n)):(Cn(e,t,r,n),Sn()),t=t.child),t;case 5:return rn(t),null===e&&xn(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,l=i.children,pt(r,i)?l=null:null!==a&&pt(r,a)&&(t.effectTag|=16),On(e,t),1!==n&&1&t.mode&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Cn(e,t,l,n),t=t.child),t;case 6:return null===e&&xn(t),null;case 13:return Un(e,t,n);case 4:return tn(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=La(t,null,r,n):Cn(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),En(e,t,r,i,n);case 7:return Cn(e,t,t.pendingProps,n),t.child;case 8:case 12:return Cn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,Ln(t,a),null!==l){var u=l.value;if(0===(a=Ee(u,a)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(u,a):1073741823))){if(l.children===i.children&&!Na.current){t=An(e,t,n);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var c=u.contextDependencies;if(null!==c){l=u.child;for(var s=c.first;null!==s;){if(s.context===r&&0!=(s.observedBits&a)){1===u.tag&&(s=Hn(n),s.tag=Cl,$n(u,s)),u.expirationTime<n&&(u.expirationTime=n),s=u.alternate,null!==s&&s.expirationTime<n&&(s.expirationTime=n),s=n;for(var f=u.return;null!==f;){var d=f.alternate;if(f.childExpirationTime<s)f.childExpirationTime=s,null!==d&&d.childExpirationTime<s&&(d.childExpirationTime=s);else{if(!(null!==d&&d.childExpirationTime<s))break;d.childExpirationTime=s}f=f.return}c.expirationTime<n&&(c.expirationTime=n);break}s=s.next}}else l=10===u.tag&&u.type===t.type?null:u.child;if(null!==l)l.return=u;else for(l=u;null!==l;){if(l===t){l=null;break}if(null!==(u=l.sibling)){u.return=l.return,l=u;break}l=l.return}u=l}}Cn(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps,r=a.children,Fn(t,n),i=jn(i,a.unstable_observedBits),r=r(i),t.effectTag|=1,Cn(e,t,r,n),t.child;case 14:return i=t.type,a=Ht(i,t.pendingProps),a=Ht(i.type,a),Pn(e,t,i,a,r,n);case 15:return Rn(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ht(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,wt(r)?(e=!0,St(t)):e=!1,Fn(t,n),Qt(t,r,i,n),Xt(t,r,i,n),Dn(null,t,r,!0,e,n)}o("156")}function Ln(e,t){var n=e.type._context;gt(wl,n._currentValue,e),n._currentValue=t}function Wn(e){var t=wl.current;yt(wl,e),e.type._context._currentValue=t}function Fn(e,t){kl=e,Tl=xl=null;var n=e.contextDependencies;null!==n&&n.expirationTime>=t&&(bl=!0),e.contextDependencies=null}function jn(e,t){return Tl!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(Tl=e,t=1073741823),t={context:e,observedBits:t,next:null},null===xl?(null===kl&&o("308"),xl=t,kl.contextDependencies={first:t,expirationTime:0}):xl=xl.next=t),e._currentValue}function Bn(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Vn(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Hn(e){return{expirationTime:e,tag:_l,payload:null,callback:null,next:null,nextEffect:null}}function qn(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function $n(e,t){var n=e.alternate;if(null===n){var r=e.updateQueue,o=null;null===r&&(r=e.updateQueue=Bn(e.memoizedState))}else r=e.updateQueue,o=n.updateQueue,null===r?null===o?(r=e.updateQueue=Bn(e.memoizedState),o=n.updateQueue=Bn(n.memoizedState)):r=e.updateQueue=Vn(o):null===o&&(o=n.updateQueue=Vn(r));null===o||r===o?qn(r,t):null===r.lastUpdate||null===o.lastUpdate?(qn(r,t),qn(o,t)):(qn(r,t),o.lastUpdate=t)}function Yn(e,t){var n=e.updateQueue;n=null===n?e.updateQueue=Bn(e.memoizedState):Qn(e,n),null===n.lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function Qn(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=Vn(t)),t}function Kn(e,t,n,r,o,i){switch(n.tag){case Sl:return e=n.payload,"function"==typeof e?e.call(i,r,o):e;case El:e.effectTag=-2049&e.effectTag|64;case _l:if(e=n.payload,null===(o="function"==typeof e?e.call(i,r,o):e)||void 0===o)break;return lo({},r,o);case Cl:Pl=!0}return r}function Xn(e,t,n,r,o){Pl=!1,t=Qn(e,t);for(var i=t.baseState,a=null,l=0,u=t.firstUpdate,c=i;null!==u;){var s=u.expirationTime;s<o?(null===a&&(a=u,i=c),l<s&&(l=s)):(c=Kn(e,t,u,c,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=u:(t.lastEffect.nextEffect=u,t.lastEffect=u))),u=u.next}for(s=null,u=t.firstCapturedUpdate;null!==u;){var f=u.expirationTime;f<o?(null===s&&(s=u,null===a&&(i=c)),l<f&&(l=f)):(c=Kn(e,t,u,c,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=u:(t.lastCapturedEffect.nextEffect=u,t.lastCapturedEffect=u))),u=u.next}null===a&&(t.lastUpdate=null),null===s?t.lastCapturedUpdate=null:e.effectTag|=32,null===a&&null===s&&(i=c),t.baseState=i,t.firstUpdate=a,t.firstCapturedUpdate=s,e.expirationTime=l,e.memoizedState=c}function Gn(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),Jn(t.firstEffect,n),t.firstEffect=t.lastEffect=null,Jn(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function Jn(e,t){for(;null!==e;){var n=e.callback;if(null!==n){e.callback=null;var r=t;"function"!=typeof n&&o("191",n),n.call(r)}e=e.nextEffect}}function Zn(e,t){return{value:e,source:t,stack:te(t)}}function er(e){e.effectTag|=4}function tr(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=te(n)),null!==n&&ee(n.type),t=t.value,null!==e&&1===e.tag&&ee(e.type)}function nr(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Tr(e,t)}else t.current=null}function rr(e,t,n){if(n=n.updateQueue,null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{if((r.tag&e)!==Ha){var o=r.destroy;r.destroy=void 0,void 0!==o&&o()}(r.tag&t)!==Ha&&(o=r.create,r.destroy=o()),r=r.next}while(r!==n)}}function or(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)r.style.display="none";else{r=n.stateNode;var o=n.memoizedProps.style;o=void 0!==o&&null!==o&&o.hasOwnProperty("display")?o.display:null,r.style.display=at("display",o)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else{if(13===n.tag&&null!==n.memoizedState){r=n.child.sibling,r.return=n,n=r;continue}if(null!==n.child){n.child.return=n,n=n.child;continue}}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ir(e){switch("function"==typeof Ma&&Ma(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var n=t=t.next;do{var r=n.destroy;if(void 0!==r){var o=e;try{r()}catch(e){Tr(o,e)}}n=n.next}while(n!==t)}break;case 1:if(nr(e),t=e.stateNode,"function"==typeof t.componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Tr(e,t)}break;case 5:nr(e);break;case 4:ur(e)}}function ar(e){return 5===e.tag||3===e.tag||4===e.tag}function lr(e){e:{for(var t=e.return;null!==t;){if(ar(t)){var n=t;break e}t=t.return}o("160"),n=void 0}var r=t=void 0;switch(n.tag){case 5:t=n.stateNode,r=!1;break;case 3:case 4:t=n.stateNode.containerInfo,r=!0;break;default:o("161")}16&n.effectTag&&(it(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||ar(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var i=e;;){if(5===i.tag||6===i.tag)if(n)if(r){var a=t,l=i.stateNode,u=n;8===a.nodeType?a.parentNode.insertBefore(l,u):a.insertBefore(l,u)}else t.insertBefore(i.stateNode,n);else r?(l=t,u=i.stateNode,8===l.nodeType?(a=l.parentNode,a.insertBefore(u,l)):(a=l,a.appendChild(u)),null!==(l=l._reactRootContainer)&&void 0!==l||null!==a.onclick||(a.onclick=ft)):t.appendChild(i.stateNode);else if(4!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===e)break;for(;null===i.sibling;){if(null===i.return||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}}function ur(e){for(var t=e,n=!1,r=void 0,i=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&o("160"),n.tag){case 5:r=n.stateNode,i=!1;break e;case 3:case 4:r=n.stateNode.containerInfo,i=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag){e:for(var a=t,l=a;;)if(ir(l),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===a)break;for(;null===l.sibling;){if(null===l.return||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}i?(a=r,l=t.stateNode,8===a.nodeType?a.parentNode.removeChild(l):a.removeChild(l)):r.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){r=t.stateNode.containerInfo,i=!0,t.child.return=t,t=t.child;continue}}else if(ir(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return,4===t.tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function cr(e,t){switch(t.tag){case 0:case 11:case 14:case 15:rr($a,Ya,t);break;case 1:break;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps;e=null!==e?e.memoizedProps:r;var i=t.type,a=t.updateQueue;t.updateQueue=null,null!==a&&mt(n,a,i,e,r,t)}break;case 6:null===t.stateNode&&o("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 3:case 12:break;case 13:if(n=t.memoizedState,r=void 0,e=t,null===n?r=!1:(r=!0,e=t.child,0===n.timedOutAt&&(n.timedOutAt=Ur())),null!==e&&or(e,r),null!==(n=t.updateQueue)){t.updateQueue=null;var l=t.stateNode;null===l&&(l=t.stateNode=new Dl),n.forEach(function(e){var n=Cr.bind(null,t,e);l.has(e)||(l.add(e),e.then(n,n))})}break;case 17:break;default:o("163")}}function sr(e,t,n){n=Hn(n),n.tag=El,n.payload={element:null};var r=t.value;return n.callback=function(){Hr(r),tr(e,t)},n}function fr(e,t,n){n=Hn(n),n.tag=El;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Kl?Kl=new Set([this]):Kl.add(this));var n=t.value,o=t.stack;tr(e,t),this.componentDidCatch(n,{componentStack:null!==o?o:""})}),n}function dr(e){switch(e.tag){case 1:wt(e.type)&&kt(e);var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return nn(e),xt(e),t=e.effectTag,0!=(64&t)&&o("285"),e.effectTag=-2049&t|64,e;case 5:return on(e),null;case 13:return t=e.effectTag,2048&t?(e.effectTag=-2049&t|64,e):null;case 18:return null;case 4:return nn(e),null;case 10:return Wn(e),null;default:return null}}function pr(){if(null!==Wl)for(var e=Wl.return;null!==e;){var t=e;switch(t.tag){case 1:var n=t.type.childContextTypes;null!==n&&void 0!==n&&kt(t);break;case 3:nn(t),xt(t);break;case 5:on(t);break;case 4:nn(t);break;case 10:Wn(t)}e=e.return}Fl=null,jl=0,Bl=-1,Vl=!1,Wl=null}function mr(){for(;null!==Hl;){var e=Hl.effectTag;if(16&e&&it(Hl.stateNode,""),128&e){var t=Hl.alternate;null!==t&&null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null)}switch(14&e){case 2:lr(Hl),Hl.effectTag&=-3;break;case 6:lr(Hl),Hl.effectTag&=-3,cr(Hl.alternate,Hl);break;case 4:cr(Hl.alternate,Hl);break;case 8:e=Hl,ur(e),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}Hl=Hl.nextEffect}}function hr(){for(;null!==Hl;){if(256&Hl.effectTag)e:{var e=Hl.alternate,t=Hl;switch(t.tag){case 0:case 11:case 15:rr(qa,Ha,t);break e;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Ht(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:o("163")}}Hl=Hl.nextEffect}}function vr(e,t){for(;null!==Hl;){var n=Hl.effectTag;if(36&n){var r=Hl.alternate,i=Hl,a=t;switch(i.tag){case 0:case 11:case 15:rr(Qa,Ka,i);break;case 1:var l=i.stateNode;if(4&i.effectTag)if(null===r)l.componentDidMount();else{var u=i.elementType===i.type?r.memoizedProps:Ht(i.type,r.memoizedProps);l.componentDidUpdate(u,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}r=i.updateQueue,null!==r&&Gn(i,r,l,a);break;case 3:if(null!==(r=i.updateQueue)){if(l=null,null!==i.child)switch(i.child.tag){case 5:l=i.child.stateNode;break;case 1:l=i.child.stateNode}Gn(i,r,l,a)}break;case 5:a=i.stateNode,null===r&&4&i.effectTag&&dt(i.type,i.memoizedProps)&&a.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:o("163")}}128&n&&null!==(i=Hl.ref)&&(a=Hl.stateNode,"function"==typeof i?i(a):i.current=a),512&n&&($l=e),Hl=Hl.nextEffect}}function yr(e,t){Ql=Yl=$l=null;var n=eu;eu=!0;do{if(512&t.effectTag){var r=!1,o=void 0;try{var i=t;rr(Ga,Ha,i),rr(Ha,Xa,i)}catch(e){r=!0,o=e}r&&Tr(t,o)}t=t.nextEffect}while(null!==t);eu=n,n=e.expirationTime,0!==n&&Ar(e,n),au||eu||Fr(1073741823,!1)}function gr(){null!==Yl&&Ca(Yl),null!==Ql&&Ql()}function br(e,t){ql=Ll=!0,e.current===t&&o("177");var n=e.pendingCommitExpirationTime;0===n&&o("261"),e.pendingCommitExpirationTime=0;var r=t.expirationTime,i=t.childExpirationTime;for(Ft(e,i>r?i:r),Al.current=null,r=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,r=t.firstEffect):r=t:r=t.firstEffect,ka=oa,xa=Ye(),oa=!1,Hl=r;null!==Hl;){i=!1;var a=void 0;try{hr()}catch(e){i=!0,a=e}i&&(null===Hl&&o("178"),Tr(Hl,a),null!==Hl&&(Hl=Hl.nextEffect))}for(Hl=r;null!==Hl;){i=!1,a=void 0;try{mr()}catch(e){i=!0,a=e}i&&(null===Hl&&o("178"),Tr(Hl,a),null!==Hl&&(Hl=Hl.nextEffect))}for(Qe(xa),xa=null,oa=!!ka,ka=null,e.current=t,Hl=r;null!==Hl;){i=!1,a=void 0;try{vr(e,n)}catch(e){i=!0,a=e}i&&(null===Hl&&o("178"),Tr(Hl,a),null!==Hl&&(Hl=Hl.nextEffect))}if(null!==r&&null!==$l){var l=yr.bind(null,e,r);Yl=uo.unstable_runWithPriority(uo.unstable_NormalPriority,function(){return Sa(l)}),Ql=l}Ll=ql=!1,"function"==typeof Da&&Da(t.stateNode),n=t.expirationTime,t=t.childExpirationTime,t=t>n?t:n,0===t&&(Kl=null),Mr(e,t)}function wr(e){for(;;){var t=e.alternate,n=e.return,r=e.sibling;if(0==(1024&e.effectTag)){Wl=e;e:{var i=t;t=e;var a=jl,l=t.pendingProps;switch(t.tag){case 2:case 16:break;case 15:case 0:break;case 1:wt(t.type)&&kt(t);break;case 3:nn(t),xt(t),l=t.stateNode,l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),null!==i&&null!==i.child||(_n(t),t.effectTag&=-3),Ol(t);break;case 5:on(t);var u=en(Va.current);if(a=t.type,null!==i&&null!=t.stateNode)Nl(i,t,a,l,u),i.ref!==t.ref&&(t.effectTag|=128);else if(l){var c=en(ja.current);if(_n(t)){l=t,i=l.stateNode;var s=l.type,f=l.memoizedProps,d=u;switch(i[Eo]=l,i[Po]=f,a=void 0,u=s){case"iframe":case"object":Ae("load",i);break;case"video":case"audio":for(s=0;s<zo.length;s++)Ae(zo[s],i);break;case"source":Ae("error",i);break;case"img":case"image":case"link":Ae("error",i),Ae("load",i);break;case"form":Ae("reset",i),Ae("submit",i);break;case"details":Ae("toggle",i);break;case"input":se(i,f),Ae("invalid",i),st(d,"onChange");break;case"select":i._wrapperState={wasMultiple:!!f.multiple},Ae("invalid",i),st(d,"onChange");break;case"textarea":et(i,f),Ae("invalid",i),st(d,"onChange")}ut(u,f),s=null;for(a in f)f.hasOwnProperty(a)&&(c=f[a],"children"===a?"string"==typeof c?i.textContent!==c&&(s=["children",c]):"number"==typeof c&&i.textContent!==""+c&&(s=["children",""+c]):bo.hasOwnProperty(a)&&null!=c&&st(d,a));switch(u){case"input":G(i),pe(i,f,!0);break;case"textarea":G(i),nt(i,f);break;case"select":case"option":break;default:"function"==typeof f.onClick&&(i.onclick=ft)}a=s,l.updateQueue=a,l=null!==a,l&&er(t)}else{f=t,d=a,i=l,s=9===u.nodeType?u:u.ownerDocument,c===ha.html&&(c=rt(d)),c===ha.html?"script"===d?(i=s.createElement("div"),i.innerHTML="<script><\/script>",s=i.removeChild(i.firstChild)):"string"==typeof i.is?s=s.createElement(d,{is:i.is}):(s=s.createElement(d),"select"===d&&(d=s,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):s=s.createElementNS(c,d),i=s,i[Eo]=f,i[Po]=l,Rl(i,t,!1,!1),d=i,s=a,f=l;var p=u,m=ct(s,f);switch(s){case"iframe":case"object":Ae("load",d),u=f;break;case"video":case"audio":for(u=0;u<zo.length;u++)Ae(zo[u],d);u=f;break;case"source":Ae("error",d),u=f;break;case"img":case"image":case"link":Ae("error",d),Ae("load",d),u=f;break;case"form":Ae("reset",d),Ae("submit",d),u=f;break;case"details":Ae("toggle",d),u=f;break;case"input":se(d,f),u=ce(d,f),Ae("invalid",d),st(p,"onChange");break;case"option":u=Ge(d,f);break;case"select":d._wrapperState={wasMultiple:!!f.multiple},u=lo({},f,{value:void 0}),Ae("invalid",d),st(p,"onChange");break;case"textarea":et(d,f),u=Ze(d,f),Ae("invalid",d),st(p,"onChange");break;default:u=f}ut(s,u),c=void 0;var h=s,v=d,y=u;for(c in y)if(y.hasOwnProperty(c)){var g=y[c];"style"===c?lt(v,g):"dangerouslySetInnerHTML"===c?null!=(g=g?g.__html:void 0)&&ya(v,g):"children"===c?"string"==typeof g?("textarea"!==h||""!==g)&&it(v,g):"number"==typeof g&&it(v,""+g):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(bo.hasOwnProperty(c)?null!=g&&st(p,c):null!=g&&le(v,c,g,m))}switch(s){case"input":G(d),pe(d,f,!1);break;case"textarea":G(d),nt(d,f);break;case"option":null!=f.value&&d.setAttribute("value",""+ue(f.value));break;case"select":u=d,u.multiple=!!f.multiple,d=f.value,null!=d?Je(u,!!f.multiple,d,!1):null!=f.defaultValue&&Je(u,!!f.multiple,f.defaultValue,!0);break;default:"function"==typeof u.onClick&&(d.onclick=ft)}(l=dt(a,l))&&er(t),t.stateNode=i}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&o("166");break;case 6:i&&null!=t.stateNode?Il(i,t,i.memoizedProps,l):("string"!=typeof l&&(null===t.stateNode&&o("166")),i=en(Va.current),en(ja.current),_n(t)?(l=t,a=l.stateNode,i=l.memoizedProps,a[Eo]=l,(l=a.nodeValue!==i)&&er(t)):(a=t,l=(9===i.nodeType?i:i.ownerDocument).createTextNode(l),l[Eo]=t,a.stateNode=l));break;case 11:break;case 13:if(l=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=a,Wl=t;break e}l=null!==l,a=null!==i&&null!==i.memoizedState,null!==i&&!l&&a&&null!==(i=i.child.sibling)&&(u=t.firstEffect,null!==u?(t.firstEffect=i,i.nextEffect=u):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8),(l||a)&&(t.effectTag|=4);break;case 7:case 8:case 12:break;case 4:nn(t),Ol(t);break;case 10:Wn(t);break;case 9:case 14:break;case 17:wt(t.type)&&kt(t);break;case 18:break;default:o("156")}Wl=null}if(t=e,1===jl||1!==t.childExpirationTime){for(l=0,a=t.child;null!==a;)i=a.expirationTime,u=a.childExpirationTime,i>l&&(l=i),u>l&&(l=u),a=a.sibling;t.childExpirationTime=l}if(null!==Wl)return Wl;null!==n&&0==(1024&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{if(null!==(e=dr(e,jl)))return e.effectTag&=1023,e;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=1024)}if(null!==r)return r;if(null===n)break;e=n}return null}function kr(e){var t=zn(e.alternate,e,jl);return e.memoizedProps=e.pendingProps,null===t&&(t=wr(e)),Al.current=null,t}function xr(e,t){Ll&&o("243"),gr(),Ll=!0;var n=Ul.current;Ul.current=dl;var r=e.nextExpirationTimeToWorkOn;r===jl&&e===Fl&&null!==Wl||(pr(),Fl=e,jl=r,Wl=Dt(Fl.current,null,jl),e.pendingCommitExpirationTime=0);for(var i=!1;;){try{if(t)for(;null!==Wl&&!Lr();)Wl=kr(Wl);else for(;null!==Wl;)Wl=kr(Wl)}catch(t){if(Tl=xl=kl=null,cn(),null===Wl)i=!0,Hr(t);else{null===Wl&&o("271");var a=Wl,l=a.return;if(null!==l){e:{var u=e,c=l,s=a,f=t;if(l=jl,s.effectTag|=1024,s.firstEffect=s.lastEffect=null,null!==f&&"object"==typeof f&&"function"==typeof f.then){var d=f;f=c;var p=-1,m=-1;do{if(13===f.tag){var h=f.alternate;if(null!==h&&null!==(h=h.memoizedState)){m=10*(1073741822-h.timedOutAt);break}h=f.pendingProps.maxDuration,"number"==typeof h&&(0>=h?p=0:(-1===p||h<p)&&(p=h))}f=f.return}while(null!==f);f=c;do{if((h=13===f.tag)&&(h=void 0!==f.memoizedProps.fallback&&null===f.memoizedState),h){if(c=f.updateQueue,null===c?(c=new Set,c.add(d),f.updateQueue=c):c.add(d),0==(1&f.mode)){f.effectTag|=64,s.effectTag&=-1957,1===s.tag&&(null===s.alternate?s.tag=17:(l=Hn(1073741823),l.tag=Cl,$n(s,l))),s.expirationTime=1073741823;break e}s=u,c=l;var v=s.pingCache;null===v?(v=s.pingCache=new Ml,h=new Set,v.set(d,h)):void 0===(h=v.get(d))&&(h=new Set,v.set(d,h)),h.has(c)||(h.add(c),s=Sr.bind(null,s,d,c),d.then(s,s)),-1===p?u=1073741823:(-1===m&&(m=10*(1073741822-Bt(u,l))-5e3),u=m+p),0<=u&&Bl<u&&(Bl=u),f.effectTag|=2048,f.expirationTime=l;break e}f=f.return}while(null!==f);f=Error((ee(s.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+te(s))}Vl=!0,f=Zn(f,s),u=c;do{switch(u.tag){case 3:u.effectTag|=2048,u.expirationTime=l,l=sr(u,f,l),Yn(u,l);break e;case 1:if(p=f,m=u.type,s=u.stateNode,0==(64&u.effectTag)&&("function"==typeof m.getDerivedStateFromError||null!==s&&"function"==typeof s.componentDidCatch&&(null===Kl||!Kl.has(s)))){u.effectTag|=2048,u.expirationTime=l,l=fr(u,p,l),Yn(u,l);break e}}u=u.return}while(null!==u)}Wl=wr(a);continue}i=!0,Hr(t)}}break}if(Ll=!1,Ul.current=n,Tl=xl=kl=null,cn(),i)Fl=null,e.finishedWork=null;else if(null!==Wl)e.finishedWork=null;else{if(n=e.current.alternate,null===n&&o("281"),Fl=null,Vl){if(i=e.latestPendingTime,a=e.latestSuspendedTime,l=e.latestPingedTime,0!==i&&i<r||0!==a&&a<r||0!==l&&l<r)return jt(e,r),void Ir(e,n,r,e.expirationTime,-1);if(!e.didError&&t)return e.didError=!0,r=e.nextExpirationTimeToWorkOn=r,t=e.expirationTime=1073741823,void Ir(e,n,r,t,-1)}t&&-1!==Bl?(jt(e,r),t=10*(1073741822-Bt(e,r)),t<Bl&&(Bl=t),t=10*(1073741822-Ur()),t=Bl-t,Ir(e,n,r,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=r,e.finishedWork=n)}}function Tr(e,t){for(var n=e.return;null!==n;){switch(n.tag){case 1:var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Kl||!Kl.has(r)))return e=Zn(t,e),e=fr(n,e,1073741823),$n(n,e),void Pr(n,1073741823);break;case 3:return e=Zn(t,e),e=sr(n,e,1073741823),$n(n,e),void Pr(n,1073741823)}n=n.return}3===e.tag&&(n=Zn(t,e),n=sr(e,n,1073741823),$n(e,n),Pr(e,1073741823))}function _r(e,t){var n=uo.unstable_getCurrentPriorityLevel(),r=void 0;if(0==(1&t.mode))r=1073741823;else if(Ll&&!ql)r=jl;else{switch(n){case uo.unstable_ImmediatePriority:r=1073741823;break;case uo.unstable_UserBlockingPriority:r=1073741822-10*(1+((1073741822-e+15)/10|0));break;case uo.unstable_NormalPriority:r=1073741822-25*(1+((1073741822-e+500)/25|0));break;case uo.unstable_LowPriority:case uo.unstable_IdlePriority:r=1;break;default:o("313")}null!==Fl&&r===jl&&--r}return n===uo.unstable_UserBlockingPriority&&(0===ru||r<ru)&&(ru=r),r}function Sr(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),null!==Fl&&jl===n?Fl=null:(t=e.earliestSuspendedTime,r=e.latestSuspendedTime,0!==t&&n<=t&&n>=r&&(e.didError=!1,t=e.latestPingedTime,(0===t||t>n)&&(e.latestPingedTime=n),Vt(n,e),0!==(n=e.expirationTime)&&Ar(e,n)))}function Cr(e,t){var n=e.stateNode;null!==n&&n.delete(t),t=Ur(),t=_r(t,e),null!==(e=Er(e,t))&&(Wt(e,t),0!==(t=e.expirationTime)&&Ar(e,t))}function Er(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,o=null;if(null===r&&3===e.tag)o=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){o=r.stateNode;break}r=r.return}return o}function Pr(e,t){null!==(e=Er(e,t))&&(!Ll&&0!==jl&&t>jl&&pr(),Wt(e,t),Ll&&!ql&&Fl===e||Ar(e,e.expirationTime),pu>du&&(pu=0,o("185")))}function Rr(e,t,n,r,o){return uo.unstable_runWithPriority(uo.unstable_ImmediatePriority,function(){return e(t,n,r,o)})}function Or(){su=1073741822-((uo.unstable_now()-cu)/10|0)}function Nr(e,t){if(0!==Jl){if(t<Jl)return;null!==Zl&&uo.unstable_cancelCallback(Zl)}Jl=t,e=uo.unstable_now()-cu,Zl=uo.unstable_scheduleCallback(Wr,{timeout:10*(1073741822-t)-e})}function Ir(e,t,n,r,o){e.expirationTime=r,0!==o||Lr()?0<o&&(e.timeoutHandle=Ta(Dr.bind(null,e,t,n),o)):(e.pendingCommitExpirationTime=n,e.finishedWork=t)}function Dr(e,t,n){e.pendingCommitExpirationTime=n,e.finishedWork=t,Or(),fu=su,jr(e,n)}function Mr(e,t){e.expirationTime=t,e.finishedWork=null}function Ur(){return eu?fu:(zr(),0!==nu&&1!==nu||(Or(),fu=su),fu)}function Ar(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===Gl?(Xl=Gl=e,e.nextScheduledRoot=e):(Gl=Gl.nextScheduledRoot=e,Gl.nextScheduledRoot=Xl)):t>e.expirationTime&&(e.expirationTime=t),eu||(au?lu&&(tu=e,nu=1073741823,Br(e,1073741823,!1)):1073741823===t?Fr(1073741823,!1):Nr(e,t))}function zr(){var e=0,t=null;if(null!==Gl)for(var n=Gl,r=Xl;null!==r;){var i=r.expirationTime;if(0===i){if((null===n||null===Gl)&&o("244"),r===r.nextScheduledRoot){Xl=Gl=r.nextScheduledRoot=null;break}if(r===Xl)Xl=i=r.nextScheduledRoot,Gl.nextScheduledRoot=i,r.nextScheduledRoot=null;else{if(r===Gl){Gl=n,Gl.nextScheduledRoot=Xl,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if(i>e&&(e=i,t=r),r===Gl)break;if(1073741823===e)break;n=r,r=r.nextScheduledRoot}}tu=t,nu=e}function Lr(){return!!hu||!!uo.unstable_shouldYield()&&(hu=!0)}function Wr(){try{if(!Lr()&&null!==Xl){Or();var e=Xl;do{var t=e.expirationTime;0!==t&&su<=t&&(e.nextExpirationTimeToWorkOn=su),e=e.nextScheduledRoot}while(e!==Xl)}Fr(0,!0)}finally{hu=!1}}function Fr(e,t){if(zr(),t)for(Or(),fu=su;null!==tu&&0!==nu&&e<=nu&&!(hu&&su>nu);)Br(tu,nu,su>nu),zr(),Or(),fu=su;else for(;null!==tu&&0!==nu&&e<=nu;)Br(tu,nu,!1),zr();if(t&&(Jl=0,Zl=null),0!==nu&&Nr(tu,nu),pu=0,mu=null,null!==uu)for(e=uu,uu=null,t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){ou||(ou=!0,iu=e)}}if(ou)throw e=iu,iu=null,ou=!1,e}function jr(e,t){eu&&o("253"),tu=e,nu=t,Br(e,t,!1),Fr(1073741823,!1)}function Br(e,t,n){if(eu&&o("245"),eu=!0,n){var r=e.finishedWork;null!==r?Vr(e,r,t):(e.finishedWork=null,r=e.timeoutHandle,-1!==r&&(e.timeoutHandle=-1,_a(r)),xr(e,n),null!==(r=e.finishedWork)&&(Lr()?e.finishedWork=r:Vr(e,r,t)))}else r=e.finishedWork,null!==r?Vr(e,r,t):(e.finishedWork=null,r=e.timeoutHandle,-1!==r&&(e.timeoutHandle=-1,_a(r)),xr(e,n),null!==(r=e.finishedWork)&&Vr(e,r,t));eu=!1}function Vr(e,t,n){var r=e.firstBatch;if(null!==r&&r._expirationTime>=n&&(null===uu?uu=[r]:uu.push(r),r._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===mu?pu++:(mu=e,pu=0),uo.unstable_runWithPriority(uo.unstable_ImmediatePriority,function(){br(e,t)})}function Hr(e){null===tu&&o("246"),tu.expirationTime=0,ou||(ou=!0,iu=e)}function qr(e,t){var n=au;au=!0;try{return e(t)}finally{(au=n)||eu||Fr(1073741823,!1)}}function $r(e,t){if(au&&!lu){lu=!0;try{return e(t)}finally{lu=!1}}return e(t)}function Yr(e,t,n){au||eu||0===ru||(Fr(ru,!1),ru=0);var r=au;au=!0;try{return uo.unstable_runWithPriority(uo.unstable_UserBlockingPriority,function(){return e(t,n)})}finally{(au=r)||eu||Fr(1073741823,!1)}}function Qr(e,t,n,r,i){var a=t.current;e:if(n){n=n._reactInternalFiber;t:{2===Re(n)&&1===n.tag||o("170");var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(wt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);o("171"),l=void 0}if(1===n.tag){var u=n.type;if(wt(u)){n=_t(n,u,l);break e}}n=l}else n=Ra;return null===t.context?t.context=n:t.pendingContext=n,t=i,i=Hn(r),i.payload={element:e},t=void 0===t?null:t,null!==t&&(i.callback=t),gr(),$n(a,i),Pr(a,r),r}function Kr(e,t,n,r){var o=t.current;return o=_r(Ur(),o),Qr(e,t,n,o,r)}function Xr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Gr(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ui,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Jr(e){var t=1073741822-25*(1+((1073741822-Ur()+500)/25|0));t>=zl&&(t=zl-1),this._expirationTime=zl=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function Zr(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function eo(e,t,n){t=Ot(3,null,null,t?3:0),e={current:t,containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function to(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function no(e,t){if(t||(t=e?9===e.nodeType?e.documentElement:e.firstChild:null,t=!(!t||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new eo(e,!1,t)}function ro(e,t,n,r,o){var i=n._reactRootContainer;if(i){if("function"==typeof o){var a=o;o=function(){var e=Xr(i._internalRoot);a.call(e)}}null!=e?i.legacy_renderSubtreeIntoContainer(e,t,o):i.render(t,o)}else{if(i=n._reactRootContainer=no(n,r),"function"==typeof o){var l=o;o=function(){var e=Xr(i._internalRoot);l.call(e)}}$r(function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,o):i.render(t,o)})}return Xr(i._internalRoot)}function oo(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return to(t)||o("200"),Gr(e,t,null,n)}function io(e,t){return to(e)||o("299","unstable_createRoot"),new eo(e,!0,null!=t&&!0===t.hydrate)}/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var ao=n(3),lo=n(5),uo=n(21);ao||o("227");var co=!1,so=null,fo=!1,po=null,mo={onError:function(e){co=!0,so=e}},ho=null,vo={},yo=[],go={},bo={},wo={},ko=null,xo=null,To=null,_o=null,So={injectEventPluginOrder:function(e){ho&&o("101"),ho=Array.prototype.slice.call(e),u()},injectEventPluginsByName:function(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];vo.hasOwnProperty(t)&&vo[t]===r||(vo[t]&&o("102",t),vo[t]=r,n=!0)}n&&u()}},Co=Math.random().toString(36).slice(2),Eo="__reactInternalInstance$"+Co,Po="__reactEventHandlers$"+Co,Ro=!("undefined"==typeof window||!window.document||!window.document.createElement),Oo={animationend:C("Animation","AnimationEnd"),animationiteration:C("Animation","AnimationIteration"),animationstart:C("Animation","AnimationStart"),transitionend:C("Transition","TransitionEnd")},No={},Io={};Ro&&(Io=document.createElement("div").style,"AnimationEvent"in window||(delete Oo.animationend.animation,delete Oo.animationiteration.animation,delete Oo.animationstart.animation),"TransitionEvent"in window||delete Oo.transitionend.transition);var Do=E("animationend"),Mo=E("animationiteration"),Uo=E("animationstart"),Ao=E("transitionend"),zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lo=null,Wo=null,Fo=null;lo(N.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=R)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=R)},persist:function(){this.isPersistent=R},isPersistent:O,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=O,this._dispatchInstances=this._dispatchListeners=null}}),N.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},N.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return lo(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=lo({},r.Interface,e),n.extend=r.extend,M(n),n},M(N);var jo=N.extend({data:null}),Bo=N.extend({data:null}),Vo=[9,13,27,32],Ho=Ro&&"CompositionEvent"in window,qo=null;Ro&&"documentMode"in document&&(qo=document.documentMode);var $o=Ro&&"TextEvent"in window&&!qo,Yo=Ro&&(!Ho||qo&&8<qo&&11>=qo),Qo=String.fromCharCode(32),Ko={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Xo=!1,Go=!1,Jo={eventTypes:Ko,extractEvents:function(e,t,n,r){var o=void 0,i=void 0;if(Ho)e:{switch(e){case"compositionstart":o=Ko.compositionStart;break e;case"compositionend":o=Ko.compositionEnd;break e;case"compositionupdate":o=Ko.compositionUpdate;break e}o=void 0}else Go?U(e,n)&&(o=Ko.compositionEnd):"keydown"===e&&229===n.keyCode&&(o=Ko.compositionStart);return o?(Yo&&"ko"!==n.locale&&(Go||o!==Ko.compositionStart?o===Ko.compositionEnd&&Go&&(i=P()):(Lo=r,Wo="value"in Lo?Lo.value:Lo.textContent,Go=!0)),o=jo.getPooled(o,t,n,r),i?o.data=i:null!==(i=A(n))&&(o.data=i),S(o),i=o):i=null,(e=$o?z(e,n):L(e,n))?(t=Bo.getPooled(Ko.beforeInput,t,n,r),t.data=e,S(t)):t=null,null===i?t:null===t?i:[i,t]}},Zo=null,ei=null,ti=null,ni=!1,ri={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},oi=ao.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;oi.hasOwnProperty("ReactCurrentDispatcher")||(oi.ReactCurrentDispatcher={current:null});var ii=/^(.*)[\\\/]/,ai="function"==typeof Symbol&&Symbol.for,li=ai?Symbol.for("react.element"):60103,ui=ai?Symbol.for("react.portal"):60106,ci=ai?Symbol.for("react.fragment"):60107,si=ai?Symbol.for("react.strict_mode"):60108,fi=ai?Symbol.for("react.profiler"):60114,di=ai?Symbol.for("react.provider"):60109,pi=ai?Symbol.for("react.context"):60110,mi=ai?Symbol.for("react.concurrent_mode"):60111,hi=ai?Symbol.for("react.forward_ref"):60112,vi=ai?Symbol.for("react.suspense"):60113,yi=ai?Symbol.for("react.memo"):60115,gi=ai?Symbol.for("react.lazy"):60116,bi="function"==typeof Symbol&&Symbol.iterator,wi=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ki=Object.prototype.hasOwnProperty,xi={},Ti={},_i={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_i[e]=new ie(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_i[t]=new ie(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_i[e]=new ie(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_i[e]=new ie(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_i[e]=new ie(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){_i[e]=new ie(e,3,!0,e,null)}),["capture","download"].forEach(function(e){_i[e]=new ie(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){_i[e]=new ie(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){_i[e]=new ie(e,5,!1,e.toLowerCase(),null)});var Si=/[\-:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Si,ae);_i[t]=new ie(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Si,ae);_i[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Si,ae);_i[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){_i[e]=new ie(e,1,!1,e.toLowerCase(),null)});var Ci={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},Ei=null,Pi=null,Ri=!1;Ro&&(Ri=Q("input")&&(!document.documentMode||9<document.documentMode));var Oi={eventTypes:Ci,_isInputEventSupported:Ri,extractEvents:function(e,t,n,r){var o=t?g(t):window,i=void 0,a=void 0,l=o.nodeName&&o.nodeName.toLowerCase();if("select"===l||"input"===l&&"file"===o.type?i=ge:$(o)?Ri?i=_e:(i=xe,a=ke):(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(i=Te),i&&(i=i(e,t)))return he(i,n,r);a&&a(e,o,t),"blur"===e&&(e=o._wrapperState)&&e.controlled&&"number"===o.type&&me(o,"number",o.value)}},Ni=N.extend({view:null,detail:null}),Ii={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Di=0,Mi=0,Ui=!1,Ai=!1,zi=Ni.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ce,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Di;return Di=e.screenX,Ui?"mousemove"===e.type?e.screenX-t:0:(Ui=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Mi;return Mi=e.screenY,Ai?"mousemove"===e.type?e.screenY-t:0:(Ai=!0,0)}}),Li=zi.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Wi={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Fi={eventTypes:Wi,extractEvents:function(e,t,n,r){var o="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e;if(o&&(n.relatedTarget||n.fromElement)||!i&&!o)return null;if(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,i?(i=t,t=(t=n.relatedTarget||n.toElement)?v(t):null):i=null,i===t)return null;var a=void 0,l=void 0,u=void 0,c=void 0;"mouseout"===e||"mouseover"===e?(a=zi,l=Wi.mouseLeave,u=Wi.mouseEnter,c="mouse"):"pointerout"!==e&&"pointerover"!==e||(a=Li,l=Wi.pointerLeave,u=Wi.pointerEnter,c="pointer");var s=null==i?o:g(i);if(o=null==t?o:g(t),e=a.getPooled(l,i,n,r),e.type=c+"leave",e.target=s,e.relatedTarget=o,n=a.getPooled(u,t,n,r),n.type=c+"enter",n.target=o,n.relatedTarget=s,r=t,i&&r)e:{for(t=i,o=r,c=0,a=t;a;a=w(a))c++;for(a=0,u=o;u;u=w(u))a++;for(;0<c-a;)t=w(t),c--;for(;0<a-c;)o=w(o),a--;for(;c--;){if(t===o||t===o.alternate)break e;t=w(t),o=w(o)}t=null}else t=null;for(o=t,t=[];i&&i!==o&&(null===(c=i.alternate)||c!==o);)t.push(i),i=w(i);for(i=[];r&&r!==o&&(null===(c=r.alternate)||c!==o);)i.push(r),r=w(r);for(r=0;r<t.length;r++)T(t[r],"bubbled",e);for(r=i.length;0<r--;)T(i[r],"captured",n);return[e,n]}},ji=Object.prototype.hasOwnProperty,Bi=N.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Vi=N.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hi=Ni.extend({relatedTarget:null}),qi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yi=Ni.extend({key:function(e){if(e.key){var t=qi[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?(e=De(e),13===e?"Enter":String.fromCharCode(e)):"keydown"===e.type||"keyup"===e.type?$i[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ce,charCode:function(e){return"keypress"===e.type?De(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?De(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Qi=zi.extend({dataTransfer:null}),Ki=Ni.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ce}),Xi=N.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Gi=zi.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),Ji=[["abort","abort"],[Do,"animationEnd"],[Mo,"animationIteration"],[Uo,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[Ao,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Zi={},ea={};[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(e){Me(e,!0)}),Ji.forEach(function(e){Me(e,!1)});var ta={eventTypes:Zi,isInteractiveTopLevelEventType:function(e){return void 0!==(e=ea[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,r){var o=ea[e];if(!o)return null;switch(e){case"keypress":if(0===De(n))return null;case"keydown":case"keyup":e=Yi;break;case"blur":case"focus":e=Hi;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=zi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Qi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Ki;break;case Do:case Mo:case Uo:e=Bi;break;case Ao:e=Xi;break;case"scroll":e=Ni;break;case"wheel":e=Gi;break;case"copy":case"cut":case"paste":e=Vi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Li;break;default:e=N}return t=e.getPooled(o,t,n,r),S(t),t}},na=ta.isInteractiveTopLevelEventType,ra=[],oa=!0,ia={},aa=0,la="_reactListenersID"+(""+Math.random()).slice(2),ua=Ro&&"documentMode"in document&&11>=document.documentMode,ca={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},sa=null,fa=null,da=null,pa=!1,ma={eventTypes:ca,extractEvents:function(e,t,n,r){var o,i=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(o=!i)){e:{i=Fe(i),o=wo.onSelect;for(var a=0;a<o.length;a++){var l=o[a];if(!i.hasOwnProperty(l)||!i[l]){i=!1;break e}}i=!0}o=!i}if(o)return null;switch(i=t?g(t):window,e){case"focus":($(i)||"true"===i.contentEditable)&&(sa=i,fa=t,da=null);break;case"blur":da=fa=sa=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":return pa=!1,Ke(n,r);case"selectionchange":if(ua)break;case"keydown":case"keyup":return Ke(n,r)}return null}};So.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),ko=b,xo=y,To=g,So.injectEventPluginsByName({SimpleEventPlugin:ta,EnterLeaveEventPlugin:Fi,ChangeEventPlugin:Oi,SelectEventPlugin:ma,BeforeInputEventPlugin:Jo});var ha={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"},va=void 0,ya=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if(e.namespaceURI!==ha.svg||"innerHTML"in e)e.innerHTML=t;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+t+"</svg>",t=va.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}),ga={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ba=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(e){ba.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ga[t]=ga[e]})});var wa=lo({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ka=null,xa=null,Ta="function"==typeof setTimeout?setTimeout:void 0,_a="function"==typeof clearTimeout?clearTimeout:void 0,Sa=uo.unstable_scheduleCallback,Ca=uo.unstable_cancelCallback;new Set;var Ea=[],Pa=-1,Ra={},Oa={current:Ra},Na={current:!1},Ia=Ra,Da=null,Ma=null,Ua=(new ao.Component).refs,Aa={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===Re(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ur();r=_r(r,e);var o=Hn(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),gr(),$n(e,o),Pr(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ur();r=_r(r,e);var o=Hn(r);o.tag=Sl,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),gr(),$n(e,o),Pr(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ur();n=_r(n,e);var r=Hn(n);r.tag=Cl,void 0!==t&&null!==t&&(r.callback=t),gr(),$n(e,r),Pr(e,n)}},za=Array.isArray,La=Zt(!0),Wa=Zt(!1),Fa={},ja={current:Fa},Ba={current:Fa},Va={current:Fa},Ha=0,qa=2,$a=4,Ya=8,Qa=16,Ka=32,Xa=64,Ga=128,Ja=oi.ReactCurrentDispatcher,Za=0,el=null,tl=null,nl=null,rl=null,ol=null,il=null,al=0,ll=null,ul=0,cl=!1,sl=null,fl=0,dl={readContext:jn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an},pl={readContext:jn,useCallback:function(e,t){return sn().memoizedState=[e,void 0===t?null:t],e},useContext:jn,useEffect:function(e,t){return hn(516,Ga|Xa,e,t)},useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,hn(4,$a|Ka,yn.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hn(4,$a|Ka,e,t)},useMemo:function(e,t){var n=sn();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=sn();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={last:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=bn.bind(null,el,e),[r.memoizedState,e]},useRef:function(e){var t=sn();return e={current:e},t.memoizedState=e},useState:function(e){var t=sn();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={last:null,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},e=e.dispatch=bn.bind(null,el,e),[t.memoizedState,e]},useDebugValue:gn},ml={readContext:jn,useCallback:function(e,t){var n=fn();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ln(t,r[1])?r[0]:(n.memoizedState=[e,t],e)},useContext:jn,useEffect:function(e,t){return vn(516,Ga|Xa,e,t)},useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,vn(4,$a|Ka,yn.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vn(4,$a|Ka,e,t)},useMemo:function(e,t){var n=fn();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ln(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)},useReducer:pn,useRef:function(){return fn().memoizedState},useState:function(e){return pn(dn)},useDebugValue:gn},hl=null,vl=null,yl=!1,gl=oi.ReactCurrentOwner,bl=!1,wl={current:null},kl=null,xl=null,Tl=null,_l=0,Sl=1,Cl=2,El=3,Pl=!1,Rl=void 0,Ol=void 0,Nl=void 0,Il=void 0;Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Nl=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var a=t.stateNode;switch(en(ja.current),e=null,n){case"input":i=ce(a,i),r=ce(a,r),e=[];break;case"option":i=Ge(a,i),r=Ge(a,r),e=[];break;case"select":i=lo({},i,{value:void 0}),r=lo({},r,{value:void 0}),e=[];break;case"textarea":i=Ze(a,i),r=Ze(a,r),e=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(a.onclick=ft)}ut(n,r),a=n=void 0;var l=null;for(n in i)if(!r.hasOwnProperty(n)&&i.hasOwnProperty(n)&&null!=i[n])if("style"===n){var u=i[n];for(a in u)u.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else"dangerouslySetInnerHTML"!==n&&"children"!==n&&"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&"autoFocus"!==n&&(bo.hasOwnProperty(n)?e||(e=[]):(e=e||[]).push(n,null));for(n in r){var c=r[n];if(u=null!=i?i[n]:void 0,r.hasOwnProperty(n)&&c!==u&&(null!=c||null!=u))if("style"===n)if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(l||(l={}),l[a]=c[a])}else l||(e||(e=[]),e.push(n,l)),l=c;else"dangerouslySetInnerHTML"===n?(c=c?c.__html:void 0,u=u?u.__html:void 0,null!=c&&u!==c&&(e=e||[]).push(n,""+c)):"children"===n?u===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(n,""+c):"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&(bo.hasOwnProperty(n)?(null!=c&&st(o,n),e||u===c||(e=[])):(e=e||[]).push(n,c))}l&&(e=e||[]).push("style",l),o=e,(t.updateQueue=o)&&er(t)}},Il=function(e,t,n,r){n!==r&&er(t)};var Dl="function"==typeof WeakSet?WeakSet:Set,Ml="function"==typeof WeakMap?WeakMap:Map,Ul=oi.ReactCurrentDispatcher,Al=oi.ReactCurrentOwner,zl=1073741822,Ll=!1,Wl=null,Fl=null,jl=0,Bl=-1,Vl=!1,Hl=null,ql=!1,$l=null,Yl=null,Ql=null,Kl=null,Xl=null,Gl=null,Jl=0,Zl=void 0,eu=!1,tu=null,nu=0,ru=0,ou=!1,iu=null,au=!1,lu=!1,uu=null,cu=uo.unstable_now(),su=1073741822-(cu/10|0),fu=su,du=50,pu=0,mu=null,hu=!1;Zo=function(e,t,n){switch(t){case"input":if(de(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=b(r);i||o("90"),J(r),de(r,i)}}}break;case"textarea":tt(e,n);break;case"select":null!=(t=n.value)&&Je(e,!!n.multiple,t,!1)}},Jr.prototype.render=function(e){this._defer||o("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,r=new Zr;return Qr(e,t,null,n,r._onCommit),r},Jr.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Jr.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||o("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var r=null,i=t;i!==this;)r=i,i=i._next;null===r&&o("251"),r._next=i._next,this._next=t,e.firstBatch=this}this._defer=!1,jr(e,n),t=this._next,this._next=null,t=e.firstBatch=t,null!==t&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},Jr.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},Zr.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Zr.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&o("191",n),n()}}},eo.prototype.render=function(e,t){var n=this._internalRoot,r=new Zr;return t=void 0===t?null:t,null!==t&&r.then(t),Kr(e,n,null,r._onCommit),r},eo.prototype.unmount=function(e){var t=this._internalRoot,n=new Zr;return e=void 0===e?null:e,null!==e&&n.then(e),Kr(null,t,null,n._onCommit),n},eo.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var r=this._internalRoot,o=new Zr;return n=void 0===n?null:n,null!==n&&o.then(n),Kr(t,r,e,o._onCommit),o},eo.prototype.createBatch=function(){var e=new Jr(this),t=e._expirationTime,n=this._internalRoot,r=n.firstBatch;if(null===r)n.firstBatch=e,e._next=null;else{for(n=null;null!==r&&r._expirationTime>=t;)n=r,r=r._next;e._next=r,null!==n&&(n._next=e)}return e},B=qr,V=Yr,H=function(){eu||0===ru||(Fr(ru,!1),ru=0)};var vu={createPortal:oo,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?o("188"):o("268",Object.keys(e))),e=Ie(t),e=null===e?null:e.stateNode},hydrate:function(e,t,n){return to(t)||o("200"),ro(null,e,t,!0,n)},render:function(e,t,n){return to(t)||o("200"),ro(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){return to(n)||o("200"),(null==e||void 0===e._reactInternalFiber)&&o("38"),ro(e,t,n,!1,r)},unmountComponentAtNode:function(e){return to(e)||o("40"),!!e._reactRootContainer&&($r(function(){ro(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return oo.apply(void 0,arguments)},unstable_batchedUpdates:qr,unstable_interactiveUpdates:Yr,flushSync:function(e,t){eu&&o("187");var n=au;au=!0;try{return Rr(e,t)}finally{au=n,Fr(1073741823,!1)}},unstable_createRoot:io,unstable_flushControlled:function(e){var t=au;au=!0;try{Rr(e)}finally{(au=t)||eu||Fr(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[y,g,b,So.injectEventPluginsByName,go,S,function(e){d(e,_)},F,j,We,h]}};!function(e){var t=e.findFiberByHostInstance;Pt(lo({},e,{overrideProps:null,currentDispatcherRef:oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ie(e),null===e?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:v,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var yu={default:vu},gu=yu&&vu||yu;e.exports=gu.default||gu},/* 40 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){function n(){if(!m){var e=c.expirationTime;h?T():h=!0,x(i,e)}}function r(){var e=c,t=c.next;if(c===t)c=null;else{var r=c.previous;c=r.next=t,t.previous=r}e.next=e.previous=null,r=e.callback,t=e.expirationTime,e=e.priorityLevel;var o=f,i=p;f=e,p=t;try{var a=r()}finally{f=o,p=i}if("function"==typeof a)if(a={callback:a,priorityLevel:e,expirationTime:t,next:null,previous:null},null===c)c=a.next=a.previous=a;else{r=null,e=c;do{if(e.expirationTime>=t){r=e;break}e=e.next}while(e!==c);null===r?r=c:r===c&&(c=a,n()),t=r.previous,t.next=r.previous=a,a.next=r,a.previous=t}}function o(){if(-1===d&&null!==c&&1===c.priorityLevel){m=!0;try{do{r()}while(null!==c&&1===c.priorityLevel)}finally{m=!1,null!==c?n():h=!1}}}function i(e){m=!0;var i=s;s=e;try{if(e)for(;null!==c;){var a=t.unstable_now();if(!(c.expirationTime<=a))break;do{r()}while(null!==c&&c.expirationTime<=a)}else if(null!==c)do{r()}while(null!==c&&!_())}finally{m=!1,s=i,null!==c?n():h=!1,o()}}function a(e){l=b(function(t){g(u),e(t)}),u=y(function(){w(l),e(t.unstable_now())},100)}/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=null,s=!1,f=3,d=-1,p=-1,m=!1,h=!1,v=Date,y="function"==typeof setTimeout?setTimeout:void 0,g="function"==typeof clearTimeout?clearTimeout:void 0,b="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,w="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;if("object"==typeof performance&&"function"==typeof performance.now){var k=performance;t.unstable_now=function(){return k.now()}}else t.unstable_now=function(){return v.now()};var x,T,_,S=null;if("undefined"!=typeof window?S=window:void 0!==e&&(S=e),S&&S._schedMock){var C=S._schedMock;x=C[0],T=C[1],_=C[2],t.unstable_now=C[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var E=null,P=function(e){if(null!==E)try{E(e)}finally{E=null}};x=function(e){null!==E?setTimeout(x,0,e):(E=e,setTimeout(P,0,!1))},T=function(){E=null},_=function(){return!1}}else{var R=null,O=!1,N=-1,I=!1,D=!1,M=0,U=33,A=33;_=function(){return M<=t.unstable_now()};var z=new MessageChannel,L=z.port2;z.port1.onmessage=function(){O=!1;var e=R,n=N;R=null,N=-1;var r=t.unstable_now(),o=!1;if(0>=M-r){if(!(-1!==n&&n<=r))return I||(I=!0,a(W)),R=e,void(N=n);o=!0}if(null!==e){D=!0;try{e(o)}finally{D=!1}}};var W=function(e){if(null!==R){a(W);var t=e-M+A;t<A&&U<A?(8>t&&(t=8),A=t<U?U:t):U=t,M=e+A,O||(O=!0,L.postMessage(void 0))}else I=!1};x=function(e,t){R=e,N=t,D||0>t?L.postMessage(void 0):I||(I=!0,a(W))},T=function(){R=null,O=!1,N=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=f,i=d;f=e,d=t.unstable_now();try{return n()}finally{f=r,d=i,o()}},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var n=3;break;default:n=f}var r=f,i=d;f=n,d=t.unstable_now();try{return e()}finally{f=r,d=i,o()}},t.unstable_scheduleCallback=function(e,r){var o=-1!==d?d:t.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=o+r.timeout;else switch(f){case 1:r=o+-1;break;case 2:r=o+250;break;case 5:r=o+1073741823;break;case 4:r=o+1e4;break;default:r=o+5e3}if(e={callback:e,priorityLevel:f,expirationTime:r,next:null,previous:null},null===c)c=e.next=e.previous=e,n();else{o=null;var i=c;do{if(i.expirationTime>r){o=i;break}i=i.next}while(i!==c);null===o?o=c:o===c&&(c=e,n()),r=o.previous,r.next=o.previous=e,e.next=o,e.previous=r}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)c=null;else{e===c&&(c=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=f;return function(){var r=f,i=d;f=n,d=t.unstable_now();try{return e.apply(this,arguments)}finally{f=r,d=i,o()}}},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_shouldYield=function(){return!s&&(null!==c&&c.expirationTime<p||_())},t.unstable_continueExecution=function(){null!==c&&n()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return c}}).call(t,n(22))},/* 41 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e,n){/** @license React v0.13.6
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"production"!==e.env.NODE_ENV&&function(){function e(){if(!U){
// Schedule the host callback using the earliest expiration in the list.
var e=R.expirationTime;A?
// Cancel the existing host callback.
$():A=!0,q(i,e)}}function r(){var t=R,n=R.next;if(R===n)
// This is the last callback in the list.
R=null,n=null;else{var r=R.previous;R=r.next=n,n.previous=r}t.next=t.previous=null;
// Now it's safe to call the callback.
var o=t.callback,i=t.expirationTime,a=t.priorityLevel,l=I,u=M;I=a,M=i;var c;try{c=o()}finally{I=l,M=u}
// A callback may return a continuation. The continuation should be scheduled
// with the same priority and expiration as the just-finished callback.
if("function"==typeof c){var s={callback:c,priorityLevel:a,expirationTime:i,next:null,previous:null};
// Insert the new callback into the list, sorted by its expiration. This is
// almost the same as the code in `scheduleCallback`, except the callback
// is inserted into the list *before* callbacks of equal expiration instead
// of after.
if(null===R)
// This is the first callback in the list.
R=s.next=s.previous=s;else{var f=null,d=R;do{if(d.expirationTime>=i){
// This callback expires at or after the continuation. We will insert
// the continuation *before* this callback.
f=d;break}d=d.next}while(d!==R);null===f?
// No equal or lower priority callback was found, which means the new
// callback is the lowest priority callback in the list.
f=R:f===R&&(
// The new callback is the highest priority callback in the list.
R=s,e());var p=f.previous;p.next=f.previous=s,s.next=f,s.previous=p}}}function o(){if(
// Confirm we've exited the outer most event handler
-1===D&&null!==R&&R.priorityLevel===b){U=!0;try{do{r()}while(
// Keep flushing until there are no more immediate callbacks
null!==R&&R.priorityLevel===b)}finally{U=!1,null!==R?
// There's still work remaining. Request another callback.
e():A=!1}}}function i(n){
// Exit right away if we're currently paused
if(!g||!N){U=!0;var i=O;O=n;try{if(n)
// Flush all the expired callbacks without yielding.
for(;!(null===R||g&&N);){
// TODO Wrap in feature flag
// Read the current time. Flush all the callbacks that expire at or
// earlier than that time. Then read the current time again and repeat.
// This optimizes for as few performance.now calls as possible.
var a=t.unstable_now();{if(!(R.expirationTime<=a))break;do{r()}while(null!==R&&R.expirationTime<=a&&(!g||!N))}}else
// Keep flushing callbacks until we run out of time in the frame.
if(null!==R)do{if(g&&N)break;r()}while(null!==R&&!Y())}finally{U=!1,O=i,null!==R?
// There's still work remaining. Request another callback.
e():A=!1,
// Before exiting, flush all the immediate work that was scheduled.
o()}}}function a(e,n){switch(e){case b:case w:case k:case x:case T:break;default:e=k}var r=I,i=D;I=e,D=t.unstable_now();try{return n()}finally{I=r,D=i,
// Before exiting, flush all the immediate work that was scheduled.
o()}}function l(e){var n=void 0;switch(I){case b:case w:case k:
// Shift down to normal priority
n=k;break;default:
// Anything lower than normal priority should remain at the current level.
n=I}var r=I,i=D;I=n,D=t.unstable_now();try{return e()}finally{I=r,D=i,
// Before exiting, flush all the immediate work that was scheduled.
o()}}function u(e){var n=I;return function(){
// This is a fork of runWithPriority, inlined for performance.
var r=I,i=D;I=n,D=t.unstable_now();try{return e.apply(this,arguments)}finally{I=r,D=i,o()}}}function c(n,r){var o,i=-1!==D?D:t.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)
// FIXME: Remove this branch once we lift expiration times out of React.
o=i+r.timeout;else switch(I){case b:o=i+_;break;case w:o=i+S;break;case T:o=i+P;break;case x:o=i+E;break;case k:default:o=i+C}var a={callback:n,priorityLevel:I,expirationTime:o,next:null,previous:null};
// Insert the new callback into the list, ordered first by expiration, then
// by insertion. So the new callback is inserted any other callback with
// equal expiration.
if(null===R)
// This is the first callback in the list.
R=a.next=a.previous=a,e();else{var l=null,u=R;do{if(u.expirationTime>o){
// The new callback expires before this one.
l=u;break}u=u.next}while(u!==R);null===l?
// No callback with a later expiration was found, which means the new
// callback has the latest expiration in the list.
l=R:l===R&&(
// The new callback has the earliest expiration in the entire list.
R=a,e());var c=l.previous;c.next=l.previous=a,a.next=l,a.previous=c}return a}function s(){N=!0}function f(){N=!1,null!==R&&e()}function d(){return R}function p(e){var t=e.next;if(null!==t){if(t===e)
// This is the only scheduled callback. Clear the list.
R=null;else{
// Remove the callback from its position in the list.
e===R&&(R=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}}function m(){return I}function h(){return!O&&(null!==R&&R.expirationTime<M||Y())}Object.defineProperty(t,"__esModule",{value:!0});var v,y,g=!1,b=1,w=2,k=3,x=4,T=5,_=-1,S=250,C=5e3,E=1e4,P=1073741823,R=null,O=!1,N=!1,I=k,D=-1,M=-1,U=!1,A=!1,z="object"==typeof performance&&"function"==typeof performance.now,L=Date,W="function"==typeof setTimeout?setTimeout:void 0,F="function"==typeof clearTimeout?clearTimeout:void 0,j="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0,V=function(e){
// schedule rAF and also a setTimeout
v=j(function(t){
// cancel the setTimeout
F(y),e(t)}),y=W(function(){
// cancel the requestAnimationFrame
B(v),e(t.unstable_now())},100)};if(z){var H=performance;t.unstable_now=function(){return H.now()}}else t.unstable_now=function(){return L.now()};var q,$,Y,Q=null;if("undefined"!=typeof window?Q=window:void 0!==n&&(Q=n),Q&&Q._schedMock){
// Dynamic injection, only for testing purposes.
var K=Q._schedMock;q=K[0],$=K[1],Y=K[2],t.unstable_now=K[3]}else if(
// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
"undefined"==typeof window||
// Check if MessageChannel is supported, too.
"function"!=typeof MessageChannel){
// If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
// fallback to a naive implementation.
var X=null,G=function(e){if(null!==X)try{X(e)}finally{X=null}};q=function(e,t){null!==X?
// Protect against re-entrancy.
setTimeout(q,0,e):(X=e,setTimeout(G,0,!1))},$=function(){X=null},Y=function(){return!1}}else{var J=null,Z=!1,ee=-1,te=!1,ne=!1,re=0,oe=33,ie=33;Y=function(){return re<=t.unstable_now()};
// We use the postMessage trick to defer idle work until after the repaint.
var ae=new MessageChannel,le=ae.port2;ae.port1.onmessage=function(e){Z=!1;var n=J,r=ee;J=null,ee=-1;var o=t.unstable_now(),i=!1;if(re-o<=0){
// There's no time left in this idle period. Check if the callback has
// a timeout and whether it's been exceeded.
if(!(-1!==r&&r<=o))
// No timeout.
// Schedule another animation callback so we retry later.
// Exit without invoking the callback.
return te||(te=!0,V(ue)),J=n,void(ee=r);
// Exceeded the timeout. Invoke the callback even though there's no
// time left.
i=!0}if(null!==n){ne=!0;try{n(i)}finally{ne=!1}}};var ue=function(e){if(null===J)
// No pending work. Exit.
return void(te=!1);
// Eagerly schedule the next animation callback at the beginning of the
// frame. If the scheduler queue is not empty at the end of the frame, it
// will continue flushing inside that callback. If the queue *is* empty,
// then it will exit immediately. Posting the callback at the start of the
// frame ensures it's fired within the earliest possible frame. If we
// waited until the end of the frame to post the callback, we risk the
// browser skipping a frame and not firing the callback until the frame
// after that.
V(ue);var t=e-re+ie;t<ie&&oe<ie?(t<8&&(
// Defensive coding. We don't support higher frame rates than 120hz.
// If the calculated frame time gets lower than 8, it is probably a bug.
t=8),
// If one frame goes long, then the next one can be short to catch up.
// If two frames are short in a row, then that's an indication that we
// actually have a higher frame rate than what we're currently optimizing.
// We adjust our heuristic dynamically accordingly. For example, if we're
// running on 120hz display or 90hz VR display.
// Take the max of the two in case one of them was an anomaly due to
// missed frame deadlines.
ie=t<oe?oe:t):oe=t,re=e+ie,Z||(Z=!0,le.postMessage(void 0))};q=function(e,t){J=e,ee=t,ne||t<0?
// Don't wait for the next frame. Continue working ASAP, in a new event.
le.postMessage(void 0):te||(
// If rAF didn't already schedule one, we need to schedule a frame.
// TODO: If this rAF doesn't materialize because the browser throttles, we
// might want to still have setTimeout trigger rIC as a backup to ensure
// that we keep performing work.
te=!0,V(ue))},$=function(){J=null,Z=!1,ee=-1}}t.unstable_ImmediatePriority=b,t.unstable_UserBlockingPriority=w,t.unstable_NormalPriority=k,t.unstable_IdlePriority=T,t.unstable_LowPriority=x,t.unstable_runWithPriority=a,t.unstable_next=l,t.unstable_scheduleCallback=c,t.unstable_cancelCallback=p,t.unstable_wrapCallback=u,t.unstable_getCurrentPriorityLevel=m,t.unstable_shouldYield=h,t.unstable_continueExecution=f,t.unstable_pauseExecution=s,t.unstable_getFirstCallbackNode=d}()}).call(t,n(0),n(22))},/* 42 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){/** @license React v16.8.6
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"production"!==t.env.NODE_ENV&&function(){function t(e,t,n,r,o,i,a,l){if(is(t),!e){var u=void 0;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,l],s=0;u=new Error(t.replace(/%s/g,function(){return c[s++]})),u.name="Invariant Violation"}// we don't care about invariant's own frame
throw u.framesToPop=1,u}}/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */
function r(e,t,n,r,o,i,a,l,u){cs=!1,ss=null,us.apply(ps,arguments)}/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */
function o(e,t,n,o,i,a,u,c,s){if(r.apply(this,arguments),cs){var f=l();fs||(fs=!0,ds=f)}}/**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the top level error handler.
 */
function i(){if(fs){var e=ds;throw fs=!1,ds=null,e}}function a(){return cs}function l(){if(cs){var e=ss;return cs=!1,ss=null,e}t(!1,"clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function u(){if(ms)for(var e in hs){var n=hs[e],r=ms.indexOf(e);if(r>-1||t(!1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",e),!vs[r]){n.extractEvents||t(!1,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",e),vs[r]=n;var o=n.eventTypes;for(var i in o)c(o[i],n,i)||t(!1,"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",i,e)}}}/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function c(e,n,r){ys.hasOwnProperty(r)&&t(!1,"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",r),ys[r]=e;var o=e.phasedRegistrationNames;if(o){for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];s(a,n,r)}return!0}return!!e.registrationName&&(s(e.registrationName,n,r),!0)}/**
 * Publishes a registration name that is used to identify dispatched events.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function s(e,n,r){gs[e]&&t(!1,"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",e),gs[e]=n,bs[e]=n.eventTypes[r].dependencies;var o=e.toLowerCase();ws[o]=e,"onDoubleClick"===e&&(ws.ondblclick=e)}
// Trust the developer to only use possibleRegistrationNames in true
/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */
function f(e){ms&&t(!1,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."),
// Clone the ordering so it cannot be dynamically mutated.
ms=Array.prototype.slice.call(e),u()}/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */
function d(e){var n=!1;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];hs.hasOwnProperty(r)&&hs[r]===o||(hs[r]&&t(!1,"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",r),hs[r]=o,n=!0)}n&&u()}/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function p(e,t,n){var r=e.type||"unknown-event";e.currentTarget=Ss(n),o(r,t,void 0,e),e.currentTarget=null}/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function m(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Cs(e),Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)
// Listeners and Instances are two parallel arrays that are always in sync.
p(e,t[r],n[r]);else t&&p(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null}/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */
function h(e,n){
// Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
return null==n&&t(!1,"accumulateInto(...): Accumulated items must not be null or undefined."),null==e?n:Array.isArray(e)?Array.isArray(n)?(e.push.apply(e,n),e):(e.push(n),e):Array.isArray(n)?[e].concat(n):[e,n]}/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 * @param {function} cb Callback invoked with each element or a collection.
 * @param {?} [scope] Scope used as `this` in a callback.
 */
function v(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}function y(e){return"button"===e||"input"===e||"select"===e||"textarea"===e}function g(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":return!(!n.disabled||!y(t));default:return!1}}/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */
function b(e,n){var r=void 0,o=e.stateNode;if(!o)
// Work in progress (ex: onload events in incremental mode).
return null;var i=Ts(o);return i?(r=i[n],g(n,e.type,i)?null:(r&&"function"!=typeof r&&t(!1,"Expected `%s` listener to be a function, instead got a value of `%s` type.",n,typeof r),r)):null}/**
 * Allows registered plugins an opportunity to extract events from top-level
 * native browser events.
 *
 * @return {*} An accumulation of synthetic events.
 * @internal
 */
function w(e,t,n,r){for(var o=null,i=0;i<vs.length;i++){
// Not every plugin in the ordering may be loaded at runtime.
var a=vs[i];if(a){var l=a.extractEvents(e,t,n,r);l&&(o=h(o,l))}}return o}function k(e){null!==e&&(Es=h(Es,e));
// Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var n=Es;Es=null,n&&(v(n,Rs),Es&&t(!1,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented."),
// This would be a good time to rethrow if any of the event handlers threw.
i())}function x(e,t,n,r){k(w(e,t,n,r))}function T(e,t){t[Gs]=e}/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function _(e){if(e[Gs])return e[Gs];for(;!e[Gs];){if(!e.parentNode)
// Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;e=e.parentNode}var t=e[Gs];return t.tag===As||t.tag===zs?t:null}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function S(e){var t=e[Gs];return t&&(t.tag===As||t.tag===zs)?t:null}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function C(e){if(e.tag===As||e.tag===zs)
// In Fiber this, is just the state node right now. We assume it will be
// a host component or host text.
return e.stateNode;
// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
t(!1,"getNodeFromInstance: Invalid argument.")}function E(e){return e[Js]||null}function P(e,t){e[Js]=t}function R(e){do{e=e.return}while(e&&e.tag!==As);return e||null}/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
function O(e,t){for(var n=0,r=e;r;r=R(r))n++;for(var o=0,i=t;i;i=R(i))o++;
// If A is deeper, crawl up.
for(;n-o>0;)e=R(e),n--;
// If B is deeper, crawl up.
for(;o-n>0;)t=R(t),o--;for(
// Walk in lockstep until we find a match.
var a=n;a--;){if(e===t||e===t.alternate)return e;e=R(e),t=R(t)}return null}/**
 * Return if A is an ancestor of B.
 */
/**
 * Return the parent instance of the passed-in instance.
 */
/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */
function N(e,t,n){for(var r=[];e;)r.push(e),e=R(e);var o=void 0;for(o=r.length;o-- >0;)t(r[o],"captured",n);for(o=0;o<r.length;o++)t(r[o],"bubbled",n)}/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function I(e,t,n,r,o){for(var i=e&&t?O(e,t):null,a=[];;){if(!e)break;if(e===i)break;var l=e.alternate;if(null!==l&&l===i)break;a.push(e),e=R(e)}for(var u=[];;){if(!t)break;if(t===i)break;var c=t.alternate;if(null!==c&&c===i)break;u.push(t),t=R(t)}for(var s=0;s<a.length;s++)n(a[s],"bubbled",r);for(var f=u.length;f-- >0;)n(u[f],"captured",o)}/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function D(e,t,n){return b(e,t.dispatchConfig.phasedRegistrationNames[n])}/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing even a
 * single one.
 */
/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function M(e,t,n){e||xs(!1,"Dispatching inst must not be null");var r=D(e,n,t);r&&(n._dispatchListeners=h(n._dispatchListeners,r),n._dispatchInstances=h(n._dispatchInstances,e))}/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function U(e){e&&e.dispatchConfig.phasedRegistrationNames&&N(e._targetInst,M,e)}/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function A(e,t,n){if(e&&n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=b(e,r);o&&(n._dispatchListeners=h(n._dispatchListeners,o),n._dispatchInstances=h(n._dispatchInstances,e))}}/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function z(e){e&&e.dispatchConfig.registrationName&&A(e._targetInst,null,e)}function L(e){v(e,U)}function W(e,t,n,r){I(n,r,A,e,t)}function F(e){v(e,z)}
// Do not uses the below two methods directly!
// Instead use constants exported from DOMTopLevelEventTypes in ReactDOM.
// (It is the only module that is allowed to access these methods.)
function j(e){return e}function B(e){return e}/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */
function V(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function H(e){if(tf[e])return tf[e];if(!ef[e])return e;var t=ef[e];for(var n in t)if(t.hasOwnProperty(n)&&n in nf)return tf[e]=t[n];return e}function q(e){return B(e)}function $(e){return Nd=e,Id=K(),!0}function Y(){Nd=null,Id=null,Dd=null}function Q(){if(Dd)return Dd;var e=void 0,t=Id,n=t.length,r=void 0,o=K(),i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);var l=r>1?1-r:void 0;return Dd=o.slice(e,l)}function K(){return"value"in Nd?Nd.value:Nd.textContent}function X(){return!0}function G(){return!1}/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */
function J(e,t,n,r){
// these have a getter/setter for warnings
delete this.nativeEvent,delete this.preventDefault,delete this.stopPropagation,delete this.isDefaultPrevented,delete this.isPropagationStopped,this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var o=this.constructor.Interface;for(var i in o)if(o.hasOwnProperty(i)){delete this[i];var a=o[i];a?this[i]=a(n):"target"===i?this.target=r:this[i]=n[i]}var l=null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue;return this.isDefaultPrevented=l?X:G,this.isPropagationStopped=G,this}/**
 * Helper to nullify syntheticEvent instance properties when destructing
 *
 * @param {String} propName
 * @param {?object} getVal
 * @return {object} defineProperty object
 */
function Z(e,t){function n(e){return o(i?"setting the method":"setting the property","This is effectively a no-op"),e}function r(){return o(i?"accessing the method":"accessing the property",i?"This is a no-op function":"This is set to null"),t}function o(t,n){xs(!1,"This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.",t,e,n)}var i="function"==typeof t;return{configurable:!0,set:n,get:r}}function ee(e,t,n,r){var o=this;if(o.eventPool.length){var i=o.eventPool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)}function te(e){var n=this;e instanceof n||t(!1,"Trying to release an event instance into a pool of a different type."),e.destructor(),n.eventPool.length<Md&&n.eventPool.push(e)}function ne(e){e.eventPool=[],e.getPooled=ee,e.release=te}/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function re(e){
// ctrlKey && altKey is equivalent to AltGr, and is not a command.
return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function oe(e){switch(e){case vf:return $d.compositionStart;case hf:return $d.compositionEnd;case yf:return $d.compositionUpdate}}/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function ie(e,t){return e===Ff&&t.keyCode===Wd}/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function ae(e,t){switch(e){case Bf:
// Command keys insert or clear IME input.
return-1!==Ld.indexOf(t.keyCode);case Ff:
// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return t.keyCode!==Wd;case jf:case Qf:case uf:
// Events are not possible without cancelling IME.
return!0;default:return!1}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */
function le(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 * @param {object} nativeEvent
 * @return {boolean}
 */
function ue(e){return"ko"===e.locale}/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function ce(e,t,n,r){var o=void 0,i=void 0;if(Fd?o=oe(e):Qd?ae(e,n)&&(o=$d.compositionEnd):ie(e,n)&&(o=$d.compositionStart),!o)return null;Vd&&!ue(n)&&(
// The current composition is stored statically and must not be
// overwritten while composition continues.
Qd||o!==$d.compositionStart?o===$d.compositionEnd&&Qd&&(i=Q()):Qd=$(r));var a=Ad.getPooled(o,t,n,r);if(i)
// Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
a.data=i;else{var l=le(n);null!==l&&(a.data=l)}return L(a),a}/**
 * @param {TopLevelType} topLevelType Number from `TopLevelType`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function se(e,t){switch(e){case hf:return le(t);case jf:return t.which!==Hd?null:(Yd=!0,qd);case bd:
// Record the characters to be added to the DOM.
var n=t.data;
// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
return n===qd&&Yd?null:n;default:
// For other native event types, do nothing.
return null}}/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {number} topLevelType Number from `TopLevelEventTypes`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function fe(e,t){
// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(Qd){if(e===hf||!Fd&&ae(e,t)){var n=Q();return Y(),Qd=!1,n}return null}switch(e){case Zf:
// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case jf:/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
if(!re(t)){
// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case hf:return Vd&&!ue(t)?null:t.data;default:return null}}/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */
function de(e,t,n,r){var o=void 0;
// If no characters are being inserted, no BeforeInput event should
// be fired.
if(!(o=Bd?se(e,n):fe(e,n)))return null;var i=zd.getPooled($d.beforeInput,t,n,r);return i.data=o,L(i),i}function pe(e){
// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var n=_s(e);if(n){"function"!=typeof Xd&&t(!1,"setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var r=Ts(n.stateNode);Xd(n.stateNode,n.type,r)}}function me(e){Gd?Jd?Jd.push(e):Jd=[e]:Gd=e}function he(){return null!==Gd||null!==Jd}function ve(){if(Gd){var e=Gd,t=Jd;if(Gd=null,Jd=null,pe(e),t)for(var n=0;n<t.length;n++)pe(t[n])}}function ye(e,t){if(np)
// If we are currently inside another batch, we need to wait until it
// fully completes before restoring state.
return e(t);np=!0;try{return Zd(e,t)}finally{
// Here we wait until all updates have propagated, which is important
// when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
// Then we restore state of any controlled component.
np=!1;he()&&(
// If a controlled event was fired, we may need to restore the state of
// the DOM node back to the controlled value. This is necessary when React
// bails out of the update without touching the DOM.
tp(),ve())}}function ge(e,t,n){return ep(e,t,n)}function be(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rp[e.type]:"textarea"===t}/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function we(e){
// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var t=e.target||e.srcElement||window;
// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
// Normalize SVG <use> element events #4963
return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===ip?t.parentNode:t}/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function ke(e){if(!Zs)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n="function"==typeof r[t]}return n}function xe(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function Te(e){return e._valueTracker}function _e(e){e._valueTracker=null}function Se(e){var t="";return e?t=xe(e)?e.checked?"true":"false":e.value:t}function Ce(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];
// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),
// We could've passed this the first time
// but it triggers a bug in IE11 and Edge 14/15.
// Calling defineProperty() again should be equivalent.
// https://github.com/facebook/react/issues/11768
Object.defineProperty(e,t,{enumerable:n.enumerable});return{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){_e(e),delete e[t]}}}}function Ee(e){Te(e)||(
// TODO: Once it's just Fiber we can move this to node._wrapperState
e._valueTracker=Ce(e))}function Pe(e){if(!e)return!1;var t=Te(e);
// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!t)return!0;var n=t.getValue(),r=Se(e);return r!==n&&(t.setValue(r),!0)}function Re(e){if(null===e||"object"!=typeof e)return null;var t=Sp&&e[Sp]||e[Cp];return"function"==typeof t?t:null}function Oe(e){return e._status===Pp?e._result:null}function Ne(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(""!==r?n+"("+r+")":n)}function Ie(e){if(null==e)
// Host root, text node or just invalid type.
return null;if("number"==typeof e.tag&&xs(!1,"Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case wp:return"ConcurrentMode";case hp:return"Fragment";case mp:return"Portal";case yp:return"Profiler";case vp:return"StrictMode";case xp:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case bp:return"Context.Consumer";case gp:return"Context.Provider";case kp:return Ne(e,e.render,"ForwardRef");case Tp:return Ie(e.type);case _p:var t=e,n=Oe(t);if(n)return Ie(n)}return null}function De(e){switch(e.tag){case Ms:case Us:case zs:case Ls:case js:case Fs:return"";default:var t=e._debugOwner,n=e._debugSource,r=Ie(e.type),o=null;return t&&(o=Ie(t.type)),fp(r,n,o)}}function Me(e){var t="",n=e;do{t+=De(n),n=n.return}while(n);return t}function Ue(){if(null===Np)return null;var e=Np._debugOwner;return null!==e&&void 0!==e?Ie(e.type):null}function Ae(){return null===Np?"":Me(Np)}function ze(){Op.getCurrentStack=null,Np=null,Ip=null}function Le(e){Op.getCurrentStack=Ae,Np=e,Ip=null}function We(e){Ip=e}function Fe(e){return!!qp.call(Yp,e)||!qp.call($p,e)&&(Hp.test(e)?(Yp[e]=!0,!0):($p[e]=!0,Mp(!1,"Invalid attribute name: `%s`",e),!1))}function je(e,t,n){return null!==t?t.type===Up:!n&&(e.length>2&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1]))}function Be(e,t,n,r){if(null!==n&&n.type===Up)return!1;switch(typeof t){case"function":
// $FlowIssue symbol is perfectly valid here
case"symbol":
// eslint-disable-line
return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;var o=e.toLowerCase().slice(0,5);return"data-"!==o&&"aria-"!==o;default:return!1}}function Ve(e,t,n,r){if(null===t||void 0===t)return!0;if(Be(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case zp:return!t;case Lp:return!1===t;case Wp:return isNaN(t);case Fp:return isNaN(t)||t<1}return!1}function He(e){return Qp.hasOwnProperty(e)?Qp[e]:null}function qe(e,t,n,r,o){this.acceptsBooleans=t===Ap||t===zp||t===Lp,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */
function $e(e,t,n,r){if(r.mustUseProperty){return e[r.propertyName]}var o=r.attributeName,i=null;if(r.type===Lp){if(e.hasAttribute(o)){var a=e.getAttribute(o);return""===a||(Ve(t,n,r,!1)?a:a===""+n?n:a)}}else if(e.hasAttribute(o)){if(Ve(t,n,r,!1))
// We had an attribute but shouldn't have had one, so read it
// for the error message.
return e.getAttribute(o);if(r.type===zp)
// If this was a boolean, it doesn't matter what the value is
// the fact that we have it is the same as the expected.
return n;
// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
i=e.getAttribute(o)}return Ve(t,n,r,!1)?null===i?n:i:i===""+n?n:i}/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */
function Ye(e,t,n){if(Fe(t)){if(!e.hasAttribute(t))return void 0===n?void 0:null;var r=e.getAttribute(t);return r===""+n?n:r}}/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */
function Qe(e,t,n,r){var o=He(t);if(!je(t,o,r))
// If the prop isn't in the special list, treat it as a simple attribute.
if(Ve(t,n,o,r)&&(n=null),r||null===o){if(Fe(t)){var i=t;null===n?e.removeAttribute(i):e.setAttribute(i,""+n)}}else{var a=o.mustUseProperty;if(a){var l=o.propertyName;if(null===n){var u=o.type;e[l]=u!==zp&&""}else
// Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
e[l]=n}else{
// The rest are treated as attributes with special cases.
var c=o.attributeName,s=o.attributeNamespace;if(null===n)e.removeAttribute(c);else{var f=o.type,d=void 0;d=f===zp||f===Lp&&!0===n?"":""+n,s?e.setAttributeNS(s,c,d):e.setAttribute(c,d)}}}}
// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function Ke(e){return""+e}function Xe(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:
// function, symbol are assigned as empty strings
return""}}function Ge(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
function Je(e,t){var n=e,r=t.checked;return ts({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:n._wrapperState.initialChecked})}function Ze(e,t){Jp.checkPropTypes("input",t),void 0===t.checked||void 0===t.defaultChecked||pm||(Mp(!1,"%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",Ue()||"A component",t.type),pm=!0),void 0===t.value||void 0===t.defaultValue||dm||(Mp(!1,"%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components",Ue()||"A component",t.type),dm=!0);var n=e,r=null==t.defaultValue?"":t.defaultValue;n._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:Xe(null!=t.value?t.value:r),controlled:Ge(t)}}function et(e,t){var n=e,r=t.checked;null!=r&&Qe(n,"checked",r,!1)}function tt(e,t){var n=e,r=Ge(t);n._wrapperState.controlled||!r||hm||(Mp(!1,"A component is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",t.type),hm=!0),!n._wrapperState.controlled||r||mm||(Mp(!1,"A component is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components",t.type),mm=!0),et(e,t);var o=Xe(t.value),i=t.type;if(null!=o)"number"===i?(0===o&&""===n.value||
// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
n.value!=o)&&(n.value=Ke(o)):n.value!==Ke(o)&&(n.value=Ke(o));else if("submit"===i||"reset"===i)
// Submit/reset inputs need the attribute removed completely to avoid
// blank-text buttons.
return void n.removeAttribute("value");cm?
// When not syncing the value attribute, React only assigns a new value
// whenever the defaultValue React prop has changed. When not present,
// React does nothing
t.hasOwnProperty("defaultValue")&&it(n,t.type,Xe(t.defaultValue)):
// When syncing the value attribute, the value comes from a cascade of
// properties:
//  1. The value React property
//  2. The defaultValue React property
//  3. Otherwise there should be no change
t.hasOwnProperty("value")?it(n,t.type,o):t.hasOwnProperty("defaultValue")&&it(n,t.type,Xe(t.defaultValue)),cm?
// When not syncing the checked attribute, the attribute is directly
// controllable from the defaultValue React property. It needs to be
// updated as new props come in.
null==t.defaultChecked?n.removeAttribute("checked"):n.defaultChecked=!!t.defaultChecked:
// When syncing the checked attribute, it only changes when it needs
// to be removed, such as transitioning from a checkbox into a text input
null==t.checked&&null!=t.defaultChecked&&(n.defaultChecked=!!t.defaultChecked)}function nt(e,t,n){var r=e;
// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type,i="submit"===o||"reset"===o;
// Avoid setting value attribute on submit/reset inputs as it overrides the
// default value provided by the browser. See: #12872
if(i&&(void 0===t.value||null===t.value))return;var a=Ke(r._wrapperState.initialValue);
// Do not assign value if it is already set. This prevents user text input
// from being lost during SSR hydration.
if(!n)if(cm){var l=Xe(t.value);
// When not syncing the value attribute, the value property points
// directly to the React prop. Only assign it if it exists.
null!=l&&(i||l!==r.value)&&(r.value=Ke(l))}else
// When syncing the value attribute, the value property should use
// the wrapperState._initialValue property. This uses:
//
//   1. The value React property when present
//   2. The defaultValue React property when present
//   3. An empty string
a!==r.value&&(r.value=a);if(cm){
// When not syncing the value attribute, assign the value attribute
// directly from the defaultValue React property (when present)
var u=Xe(t.defaultValue);null!=u&&(r.defaultValue=Ke(u))}else
// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
r.defaultValue=a}
// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var c=r.name;""!==c&&(r.name=""),cm?(
// When not syncing the checked attribute, the checked property
// never gets assigned. It must be manually set. We don't want
// to do this when hydrating so that existing user input isn't
// modified
n||et(e,t),
// Only assign the checked attribute if it is defined. This saves
// a DOM write when controlling the checked attribute isn't needed
// (text inputs, submit/reset)
t.hasOwnProperty("defaultChecked")&&(r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!t.defaultChecked)):(
// When syncing the checked attribute, both the checked property and
// attribute are assigned at the same time using defaultChecked. This uses:
//
//   1. The checked React property when present
//   2. The defaultChecked React property when present
//   3. Otherwise, false
r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!r._wrapperState.initialChecked),""!==c&&(r.name=c)}function rt(e,t){var n=e;tt(n,t),ot(n,t)}function ot(e,n){var r=n.name;if("radio"===n.type&&null!=r){for(var o=e;o.parentNode;)o=o.parentNode;for(var i=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),a=0;a<i.length;a++){var l=i[a];if(l!==e&&l.form===e.form){
// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var u=E(l);u||t(!1,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."),
// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
Pe(l),
// If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
tt(l,u)}}}}
// In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
function it(e,t,n){
// Focused number inputs synchronize on blur. See ChangeEventPlugin.js
"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=Ke(e._wrapperState.initialValue):e.defaultValue!==Ke(n)&&(e.defaultValue=Ke(n)))}function at(e,t,n){var r=J.getPooled(vm.change,e,t,n);
// Flag this event loop as needing state restore.
return r.type="change",me(n),L(r),r}/**
 * SECTION: handle `change` event
 */
function lt(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function ut(e){
// If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
ye(ct,at(gm,e,we(e)))}function ct(e){k(e)}function st(e){if(Pe(C(e)))return e}function ft(e,t){if(e===df)return t}/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function dt(e,t){ym=e,gm=t,ym.attachEvent("onpropertychange",mt)}/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function pt(){ym&&(ym.detachEvent("onpropertychange",mt),ym=null,gm=null)}/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function mt(e){"value"===e.propertyName&&st(gm)&&ut(e)}function ht(e,t,n){e===Af?(
// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
pt(),dt(t,n)):e===uf&&pt()}
// For IE8 and IE9.
function vt(e,t){if(e===hd||e===Bf||e===Ff)
// On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return st(gm)}/**
 * SECTION: handle `click` event
 */
function yt(e){
// Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
var t=e.nodeName;return t&&"input"===t.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function gt(e,t){if(e===pf)return st(t)}function bt(e,t){if(e===Lf||e===df)return st(t)}function wt(e){var t=e._wrapperState;t&&t.controlled&&"number"===e.type&&(cm||
// If controlled, assign the value attribute to the current value on blur
it(e,"number",e.value))}
// Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */
function kt(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=Tm[e];return!!r&&!!n[r]}function xt(e){return kt}/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function Tt(e,t){return e===t&&(0!==e||1/e==1/t)||e!==e&&t!==t}/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function _t(e,t){if(Tt(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;
// Test for A's keys different from B.
for(var o=0;o<n.length;o++)if(!Im.call(t,n[o])||!Tt(e[n[o]],t[n[o]]))return!1;return!0}/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */
/**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */
function St(e){return e._reactInternalFiber}function Ct(e){return void 0!==e._reactInternalFiber}function Et(e,t){e._reactInternalFiber=t}function Pt(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{
// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
if((t.effectTag&Um)!==Dm)return Xm;for(;t.return;)if(t=t.return,(t.effectTag&Um)!==Dm)return Xm}return t.tag===Ms?Gm:Jm}function Rt(e){return Pt(e)===Gm}function Ot(e){var t=Km.current;if(null!==t&&t.tag===Is){var n=t,r=n.stateNode;r._warnedAboutRefsInRender||xs(!1,"%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",Ie(n.type)||"A component"),r._warnedAboutRefsInRender=!0}var o=St(e);return!!o&&Pt(o)===Gm}function Nt(e){Pt(e)!==Gm&&t(!1,"Unable to find node on an unmounted component.")}function It(e){var n=e.alternate;if(!n){
// If there is no alternate, then we only need to check if it is mounted.
var r=Pt(e);return r===Jm&&t(!1,"Unable to find node on an unmounted component."),r===Xm?null:e}for(
// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var o=e,i=n;;){var a=o.return,l=a?a.alternate:null;if(!a||!l)
// We're at the root.
break;
// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(a.child===l.child){for(var u=a.child;u;){if(u===o)
// We've determined that A is the current branch.
return Nt(a),e;if(u===i)
// We've determined that B is the current branch.
return Nt(a),n;u=u.sibling}
// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
t(!1,"Unable to find node on an unmounted component.")}if(o.return!==i.return)
// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
o=a,i=l;else{for(
// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var c=!1,s=a.child;s;){if(s===o){c=!0,o=a,i=l;break}if(s===i){c=!0,i=a,o=l;break}s=s.sibling}if(!c){for(
// Search parent B's child set
s=l.child;s;){if(s===o){c=!0,o=l,i=a;break}if(s===i){c=!0,i=l,o=a;break}s=s.sibling}c||t(!1,"Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}o.alternate!==i&&t(!1,"Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}
// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
return o.tag!==Ms&&t(!1,"Unable to find node on an unmounted component."),o.stateNode.current===o?e:n}function Dt(e){var t=It(e);if(!t)return null;for(
// Next we'll drill down this component to find the first HostComponent/Text.
var n=t;;){if(n.tag===As||n.tag===zs)return n;if(n.child)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}
// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}function Mt(e){var t=It(e);if(!t)return null;for(
// Next we'll drill down this component to find the first HostComponent/Text.
var n=t;;){if(n.tag===As||n.tag===zs)return n;if(n.child&&n.tag!==Us)n.child.return=n,n=n.child;else{if(n===t)return null;for(;!n.sibling;){if(!n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}}
// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null}function Ut(e,t,n){e.addEventListener(t,n,!1)}function At(e,t,n){e.addEventListener(t,n,!0)}/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */
function zt(e){var t=void 0,n=e.keyCode;
// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
// FF does not set `charCode` for the Enter-key, check against `keyCode`.
// IE8 does not implement `charCode`, but `keyCode` has the correct value.
// IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
// report Enter as charCode 10 when ctrl is pressed.
// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
return"charCode"in e?0===(t=e.charCode)&&13===n&&(t=13):t=n,10===t&&(t=13),t>=32||13===t?t:0}/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function Lt(e){if(e.key){
// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var t=nh[e.key]||e.key;if("Unidentified"!==t)return t}
// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var n=zt(e);
// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?rh[e.keyCode]||"Unidentified":""}function Wt(e,t){var n=e[0],r=e[1],o=r[0].toUpperCase()+r.slice(1),i="on"+o,a={phasedRegistrationNames:{bubbled:i,captured:i+"Capture"},dependencies:[n],isInteractive:t};fh[r]=a,dh[n]=a}/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function Ft(e){
// TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
for(;e.return;)e=e.return;return e.tag!==Ms?null:e.stateNode.containerInfo}
// Used to store ancestor hierarchy in top level callback
function jt(e,t,n){if(yh.length){var r=yh.pop();return r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,r}return{topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]}}function Bt(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,yh.length<vh&&yh.push(e)}function Vt(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=Ft(n);if(!r)break;e.ancestors.push(n),n=_(r)}while(n);for(var o=0;o<e.ancestors.length;o++)t=e.ancestors[o],x(e.topLevelType,t,e.nativeEvent,we(e.nativeEvent))}function Ht(e){gh=!!e}function qt(){return gh}/**
 * Traps top-level events by using event bubbling.
 *
 * @param {number} topLevelType Number from `TopLevelEventTypes`.
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */
function $t(e,t){if(!t)return null;var n=hh(e)?Qt:Kt;Ut(t,q(e),
// Check if interactive and wrap in interactiveUpdates
n.bind(null,e))}/**
 * Traps a top-level event by using event capturing.
 *
 * @param {number} topLevelType Number from `TopLevelEventTypes`.
 * @param {object} element Element on which to attach listener.
 * @return {?object} An object with a remove function which will forcefully
 *                  remove the listener.
 * @internal
 */
function Yt(e,t){if(!t)return null;var n=hh(e)?Qt:Kt;At(t,q(e),
// Check if interactive and wrap in interactiveUpdates
n.bind(null,e))}function Qt(e,t){ge(Kt,e,t)}function Kt(e,t){if(gh){var n=we(t),r=_(n);null===r||"number"!=typeof r.tag||Rt(r)||(
// If we get an event (ex: img onload) before committing that
// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
r=null);var o=jt(e,t,r);try{
// Event queue being processed in the same cycle allows
// `preventDefault`.
ye(Vt,o)}finally{Bt(o)}}}function Xt(e){
// In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
return Object.prototype.hasOwnProperty.call(e,kh)||(e[kh]=wh++,bh[e[kh]]={}),bh[e[kh]]}/**
 * We listen for bubbled touch events on the document object.
 *
 * Firefox v8.01 (and possibly others) exhibited strange behavior when
 * mounting `onmousemove` events at some node that was not the document
 * element. The symptoms were that if your mouse is not moving over something
 * contained within that mount point (for example on the background) the
 * top-level listeners for `onmousemove` won't be called. However, if you
 * register the `mousemove` on the document object, then it will of course
 * catch all `mousemove`s. This along with iOS quirks, justifies restricting
 * top-level listeners to the document object only, at least for these
 * movement types of events and possibly all events.
 *
 * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
 *
 * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
 * they bubble to document.
 *
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @param {object} mountAt Container where to mount the listener
 */
function Gt(e,t){for(var n=Xt(t),r=bs[e],o=0;o<r.length;o++){var i=r[o];if(!n.hasOwnProperty(i)||!n[i]){switch(i){case dd:Yt(dd,t);break;case Af:case uf:Yt(Af,t),Yt(uf,t),
// We set the flag for a single dependency later in this function,
// but this ensures we mark both as attached rather than just one.
n[uf]=!0,n[Af]=!0;break;case ff:case mf:ke(q(i))&&Yt(i,t);break;case Wf:case yd:case fd:
// We listen to them on the target DOM elements.
// Some of them bubble so we don't want them to fire twice.
break;default:-1!==Od.indexOf(i)||$t(i,t)}n[i]=!0}}}function Jt(e,t){for(var n=Xt(t),r=bs[e],o=0;o<r.length;o++){var i=r[o];if(!n.hasOwnProperty(i)||!n[i])return!1}return!0}function Zt(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
function en(e){for(;e&&e.firstChild;)e=e.firstChild;return e}/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function tn(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function nn(e,t){for(var n=en(e),r=0,o=0;n;){if(n.nodeType===ip){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=en(tn(n))}}/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */
function rn(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||0===r.rangeCount)return null;var o=r.anchorNode,i=r.anchorOffset,a=r.focusNode,l=r.focusOffset;
// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */
o.nodeType,a.nodeType}catch(e){return null}return on(e,o,i,a,l)}/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */
function on(e,t,n,r,o){var i=0,a=-1,l=-1,u=0,c=0,s=e,f=null;e:for(;;){for(var d=null;;){if(s!==t||0!==n&&s.nodeType!==ip||(a=i+n),s!==r||0!==o&&s.nodeType!==ip||(l=i+o),s.nodeType===ip&&(i+=s.nodeValue.length),null===(d=s.firstChild))break;
// Moving from `node` to its first child `next`.
f=s,s=d}for(;;){if(s===e)
// If `outerNode` has children, this is always the second time visiting
// it. If it has no children, this is still the first loop, and the only
// valid selection is anchorNode and focusNode both equal to this node
// and both offsets 0, in which case we will have handled above.
break e;if(f===t&&++u===n&&(a=i),f===r&&++c===o&&(l=i),null!==(d=s.nextSibling))break;s=f,f=s.parentNode}
// Moving from `node` to its next sibling `next`.
s=d}return-1===a||-1===l?null:{start:a,end:l}}/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function an(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;
// Edge fails with "Object expected" in some scenarios.
// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(r.getSelection){var o=r.getSelection(),i=e.textContent.length,a=Math.min(t.start,i),l=void 0===t.end?a:Math.min(t.end,i);
// IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!o.extend&&a>l){var u=l;l=a,a=u}var c=nn(e,a),s=nn(e,l);if(c&&s){if(1===o.rangeCount&&o.anchorNode===c.node&&o.anchorOffset===c.offset&&o.focusNode===s.node&&o.focusOffset===s.offset)return;var f=n.createRange();f.setStart(c.node,c.offset),o.removeAllRanges(),a>l?(o.addRange(f),o.extend(s.node,s.offset)):(f.setEnd(s.node,s.offset),o.addRange(f))}}}function ln(e){return e&&e.nodeType===ip}function un(e,t){return!(!e||!t)&&(e===t||!ln(e)&&(ln(t)?un(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function cn(e){return e&&e.ownerDocument&&un(e.ownerDocument.documentElement,e)}function sn(e){try{
// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return"string"==typeof e.contentWindow.location.href}catch(e){return!1}}function fn(){for(var e=window,t=Zt();t instanceof e.HTMLIFrameElement;){if(!sn(t))return t;e=t.contentWindow,t=Zt(e.document)}return t}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
/**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * and `selectionEnd` rows.
 */
function dn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pn(){var e=fn();return{focusedElem:e,selectionRange:dn(e)?hn(e):null}}/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */
function mn(e){var t=fn(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&cn(n)){null!==r&&dn(n)&&vn(n,r);for(
// Focusing a node can change the scroll position, which is undesirable
var o=[],i=n;i=i.parentNode;)i.nodeType===op&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});"function"==typeof n.focus&&n.focus();for(var a=0;a<o.length;a++){var l=o[a];l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}}/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionStart, end: selectionEnd}
 */
function hn(e){return("selectionStart"in e?{start:e.selectionStart,end:e.selectionEnd}:rn(e))||{start:0,end:0}}/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form that is returned from get*
 */
function vn(e,t){var n=t.start,r=t.end;void 0===r&&(r=n),"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):an(e,t)}/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function yn(e){if("selectionStart"in e&&dn(e))return{start:e.selectionStart,end:e.selectionEnd};var t=e.ownerDocument&&e.ownerDocument.defaultView||window,n=t.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}/**
 * Get document associated with the event target.
 *
 * @param {object} nativeEventTarget
 * @return {Document}
 */
function gn(e){return e.window===e?e.document:e.nodeType===lp?e:e.ownerDocument}/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @param {object} nativeEventTarget
 * @return {?SyntheticEvent}
 */
function bn(e,t){
// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var n=gn(t);if(Eh||null==_h||_h!==Zt(n))return null;
// Only fire when selection has actually changed.
var r=yn(_h);if(!Ch||!_t(Ch,r)){Ch=r;var o=J.getPooled(Th.select,Sh,e,t);return o.type="select",o.target=_h,L(o),o}return null}function wn(e){var t="";
// Flatten children. We'll warn if they are invalid
// during validateProps() which runs for hydration too.
// Note that this would throw on non-element objects.
// Elements are stringified (which is normally irrelevant
// but matters for <fbt>).
return es.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}/**
 * Implements an <option> host component that warns when `selected` is set.
 */
function kn(e,t){
// This mirrors the codepath above, but runs for hydration too.
// Warn about invalid children here so that client and hydration are consistent.
// TODO: this seems like it could cause a DEV-only throw for hydration
// if children contains a non-element object. We should try to avoid that.
"object"==typeof t.children&&null!==t.children&&es.Children.forEach(t.children,function(e){null!=e&&"string"!=typeof e&&"number"!=typeof e&&"string"==typeof e.type&&(Oh||(Oh=!0,Mp(!1,"Only strings and numbers are supported as <option> children.")))}),
// TODO: Remove support for `selected` in <option>.
null==t.selected||Rh||(Mp(!1,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),Rh=!0)}function xn(e,t){
// value="" should make a value attribute (#6219)
null!=t.value&&e.setAttribute("value",Ke(Xe(t.value)))}function Tn(e,t){var n=ts({children:void 0},t),r=wn(t.children);return r&&(n.children=r),n}function _n(){var e=Ue();return e?"\n\nCheck the render method of `"+e+"`.":""}/**
 * Validation function for `value` and `defaultValue`.
 */
function Sn(e){Jp.checkPropTypes("select",e);for(var t=0;t<Ih.length;t++){var n=Ih[t];if(null!=e[n]){var r=Array.isArray(e[n]);e.multiple&&!r?Mp(!1,"The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,_n()):!e.multiple&&r&&Mp(!1,"The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,_n())}}}function Cn(e,t,n,r){var o=e.options;if(t){for(var i=n,a={},l=0;l<i.length;l++)
// Prefix to avoid chaos with special keys.
a["$"+i[l]]=!0;for(var u=0;u<o.length;u++){var c=a.hasOwnProperty("$"+o[u].value);o[u].selected!==c&&(o[u].selected=c),c&&r&&(o[u].defaultSelected=!0)}}else{for(var s=Ke(Xe(n)),f=null,d=0;d<o.length;d++){if(o[d].value===s)return o[d].selected=!0,void(r&&(o[d].defaultSelected=!0));null!==f||o[d].disabled||(f=o[d])}null!==f&&(f.selected=!0)}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
function En(e,t){return ts({},t,{value:void 0})}function Pn(e,t){var n=e;Sn(t),n._wrapperState={wasMultiple:!!t.multiple},void 0===t.value||void 0===t.defaultValue||Nh||(Mp(!1,"Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components"),Nh=!0)}function Rn(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;null!=r?Cn(n,!!t.multiple,r,!1):null!=t.defaultValue&&Cn(n,!!t.multiple,t.defaultValue,!0)}function On(e,t){var n=e,r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;null!=o?Cn(n,!!t.multiple,o,!1):r!==!!t.multiple&&(
// For simplicity, reapply `defaultValue` if `multiple` is toggled.
null!=t.defaultValue?Cn(n,!!t.multiple,t.defaultValue,!0):
// Revert the select back to its default unselected state.
Cn(n,!!t.multiple,t.multiple?[]:"",!1))}function Nn(e,t){var n=e,r=t.value;null!=r&&Cn(n,!!t.multiple,r,!1)}/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
function In(e,n){var r=e;return null!=n.dangerouslySetInnerHTML&&t(!1,"`dangerouslySetInnerHTML` does not make sense on <textarea>."),ts({},n,{value:void 0,defaultValue:void 0,children:Ke(r._wrapperState.initialValue)})}function Dn(e,n){var r=e;Jp.checkPropTypes("textarea",n),void 0===n.value||void 0===n.defaultValue||Dh||(Mp(!1,"%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components",Ue()||"A component"),Dh=!0);var o=n.value;
// Only bother fetching default value if we're going to use it
if(null==o){var i=n.defaultValue,a=n.children;null!=a&&(Mp(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=i&&t(!1,"If you supply `defaultValue` on a <textarea>, do not pass children."),Array.isArray(a)&&(a.length<=1||t(!1,"<textarea> can only have at most one child."),a=a[0]),i=a),null==i&&(i=""),o=i}r._wrapperState={initialValue:Xe(o)}}function Mn(e,t){var n=e,r=Xe(t.value),o=Xe(t.defaultValue);if(null!=r){
// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var i=Ke(r);
// To avoid side effects (such as losing text selection), only set value if changed
i!==n.value&&(n.value=i),null==t.defaultValue&&n.defaultValue!==i&&(n.defaultValue=i)}null!=o&&(n.defaultValue=Ke(o))}function Un(e,t){var n=e,r=n.textContent;
// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
r===n._wrapperState.initialValue&&(n.value=r)}function An(e,t){
// DOM component is still mounted; update
Mn(e,t)}
// Assumes there is no parent namespace.
function zn(e){switch(e){case"svg":return Ah;case"math":return Uh;default:return Mh}}function Ln(e,t){return null==e||e===Mh?zn(t):e===Ah&&"foreignObject"===t?Mh:e}/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function Wn(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function Fn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Bh.hasOwnProperty(e)&&Bh[e]?(""+t).trim():t+"px"}/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */
function jn(e){return e.replace(Hh,"-$1").toLowerCase().replace(qh,"-ms-")}/**
 * Operations for dealing with CSS properties.
 */
/**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */
function Bn(e){var t="",n="";for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];if(null!=o){var i=0===r.indexOf("--");t+=n+jn(r)+":",t+=Fn(r,o,i),n=";"}}return t||null}/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */
function Vn(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=0===r.indexOf("--");o||lv(r,t[r]);var i=Fn(r,t[r],o);"float"===r&&(r="cssFloat"),o?n.setProperty(r,i):n[r]=i}}function Hn(e){return null==e||"boolean"==typeof e||""===e}/**
 * Given {color: 'red', overflow: 'hidden'} returns {
 *   color: 'color',
 *   overflowX: 'overflow',
 *   overflowY: 'overflow',
 * }. This can be read as "the overflowY property was set by the overflow
 * shorthand". That is, the values are the property that each was derived from.
 */
function qn(e){var t={};for(var n in e)for(var r=jh[n]||[n],o=0;o<r.length;o++)t[r[o]]=n;return t}/**
 * When mixing shorthand and longhand property names, we warn during updates if
 * we expect an incorrect result to occur. In particular, we warn for:
 *
 * Updating a shorthand property (longhand gets overwritten):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
 *   becomes .style.font = 'baz'
 * Removing a shorthand property (longhand gets lost too):
 *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
 *   becomes .style.font = ''
 * Removing a longhand property (should revert to shorthand; doesn't):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
 *   becomes .style.fontVariant = ''
 */
function $n(e,t){if(fm&&t){var n=qn(e),r=qn(t),o={};for(var i in n){var a=n[i],l=r[i];if(l&&a!==l){var u=a+","+l;if(o[u])continue;o[u]=!0,Mp(!1,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",Hn(e[a])?"Removing":"Updating",a,l)}}}}function Yn(e,n){n&&(
// Note the use of `==` which checks for null or undefined.
cv[e]&&(null!=n.children||null!=n.dangerouslySetInnerHTML)&&t(!1,"%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s",e,fv.getStackAddendum()),null!=n.dangerouslySetInnerHTML&&(null!=n.children&&t(!1,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."),"object"==typeof n.dangerouslySetInnerHTML&&sv in n.dangerouslySetInnerHTML||t(!1,"`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")),!n.suppressContentEditableWarning&&n.contentEditable&&null!=n.children&&Mp(!1,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),null!=n.style&&"object"!=typeof n.style&&t(!1,"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s",fv.getStackAddendum()))}function Qn(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){
// These are reserved SVG and MathML elements.
// We don't mind this whitelist too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Kn(e,t){if(yv.call(mv,t)&&mv[t])return!0;if(vv.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=pv.hasOwnProperty(n)?n:null;
// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==r)return Mp(!1,"Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),mv[t]=!0,!0;
// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==r)return Mp(!1,"Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),mv[t]=!0,!0}if(hv.test(t)){var o=t.toLowerCase(),i=pv.hasOwnProperty(o)?o:null;
// If this is an aria-* attribute, but is not listed in the known DOM
// DOM properties, then it is an invalid aria-* attribute.
if(null==i)return mv[t]=!0,!1;
// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==i)return Mp(!1,"Unknown ARIA attribute `%s`. Did you mean `%s`?",t,i),mv[t]=!0,!0}return!0}function Xn(e,t){var n=[];for(var r in t){Kn(e,r)||n.push(r)}var o=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?Mp(!1,"Invalid aria prop %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",o,e):n.length>1&&Mp(!1,"Invalid aria props %s on <%s> tag. For details, see https://fb.me/invalid-aria-prop",o,e)}function Gn(e,t){Qn(e,t)||Xn(e,t)}function Jn(e,t){"input"!==e&&"textarea"!==e&&"select"!==e||null==t||null!==t.value||gv||(gv=!0,"select"===e&&t.multiple?Mp(!1,"`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):Mp(!1,"`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}function Zn(e,t,n){Qn(e,t)||Cv(e,t,n)}function er(e,t){Gt(t,e.nodeType===lp||e.nodeType===up?e:e.ownerDocument)}function tr(e){return e.nodeType===lp?e:e.ownerDocument}function nr(){}function rr(e){
// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
e.onclick=nr}function or(e,t,n,r,o){for(var i in r)if(r.hasOwnProperty(i)){var a=r[i];if(i===Mv)a&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(a),
// Relies on `updateStylesByID` not mutating `styleUpdates`.
Vn(t,a);else if(i===Rv){var l=a?a[Uv]:void 0;null!=l&&Wh(t,l)}else if(i===Dv)if("string"==typeof a){
// Avoid setting initial textContent when the text is empty. In IE11 setting
// textContent on a <textarea> will cause the placeholder to not
// show within the <textarea> until it has been focused and blurred again.
// https://github.com/facebook/react/issues/6731#issuecomment-254874553
var u="textarea"!==e||""!==a;u&&Fh(t,a)}else"number"==typeof a&&Fh(t,""+a);else i===Ov||i===Nv||i===Iv||(gs.hasOwnProperty(i)?null!=a&&("function"!=typeof a&&Vv(i,a),er(n,i)):null!=a&&Qe(t,i,a,o))}}function ir(e,t,n,r){
// TODO: Handle wasCustomComponentTag
for(var o=0;o<t.length;o+=2){var i=t[o],a=t[o+1];i===Mv?Vn(e,a):i===Rv?Wh(e,a):i===Dv?Fh(e,a):Qe(e,i,a,r)}}function ar(e,t,n,r){var o=void 0,i=tr(n),a=void 0,l=r;if(l===Av&&(l=zn(e)),l===Av){if(
// Should this check be gated by parent namespace? Not sure we want to
// allow <SVG> or <mATH>.
(o=Qn(e,t))||e===e.toLowerCase()||Mp(!1,"<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),"script"===e){
// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var u=i.createElement("div");u.innerHTML="<script><\/script>";// eslint-disable-line
// This is guaranteed to yield a script element.
var c=u.firstChild;a=u.removeChild(c)}else if("string"==typeof t.is)
// $FlowIssue `createElement` should be updated for Web Components
a=i.createElement(e,{is:t.is});else
// Normally attributes are assigned in `setInitialDOMProperties`, however the `multiple` and `size`
// attributes on `select`s needs to be added before `option`s are inserted.
// This prevents:
// - a bug where the `select` does not scroll to the correct option because singular
//  `select` elements automatically pick the first item #13222
// - a bug where the `select` set the first item as selected despite the `size` attribute #14239
// See https://github.com/facebook/react/issues/13222
// and https://github.com/facebook/react/issues/14239
if(
// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
a=i.createElement(e),"select"===e){var s=a;t.multiple?s.multiple=!0:t.size&&(
// Setting a size greater than 1 causes a select to behave like `multiple=true`, where
// it is possible that no option is selected.
//
// This is only necessary when a select in "single selection mode".
s.size=t.size)}}else a=i.createElementNS(l,e);return l===Av&&(o||"[object HTMLUnknownElement]"!==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(zv,e)||(zv[e]=!0,Mp(!1,"The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e))),a}function lr(e,t){return tr(t).createTextNode(e)}function ur(e,t,n,r){var o=Qn(t,n);Wv(t,n),o&&!Pv&&e.shadyRoot&&(Mp(!1,"%s is using shady DOM. Using shady DOM with React can cause things to break subtly.",Ue()||"A component"),Pv=!0);
// TODO: Make sure that we check isMounted before firing any of these events.
var i=void 0;switch(t){case"iframe":case"object":$t(Vf,e),i=n;break;case"video":case"audio":
// Create listener for each media event
for(var a=0;a<Od.length;a++)$t(Od[a],e);i=n;break;case"source":$t(Uf,e),i=n;break;case"img":case"image":case"link":$t(Uf,e),$t(Vf,e),i=n;break;case"form":$t(fd,e),$t(yd,e),i=n;break;case"details":$t(kd,e),i=n;break;case"input":Ze(e,n),i=Je(e,n),$t(Wf,e),
// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
er(r,"onChange");break;case"option":kn(e,n),i=Tn(e,n);break;case"select":Pn(e,n),i=En(e,n),$t(Wf,e),
// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
er(r,"onChange");break;case"textarea":Dn(e,n),i=In(e,n),$t(Wf,e),
// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
er(r,"onChange");break;default:i=n}switch(Yn(t,i),or(t,e,r,i,o),t){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
Ee(e),nt(e,n,!1);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
Ee(e),Un(e,n);break;case"option":xn(e,n);break;case"select":Rn(e,n);break;default:"function"==typeof i.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
rr(e)}}
// Calculate the diff between the two objects.
function cr(e,t,n,r,o){Wv(t,r);var i=null,a=void 0,l=void 0;switch(t){case"input":a=Je(e,n),l=Je(e,r),i=[];break;case"option":a=Tn(e,n),l=Tn(e,r),i=[];break;case"select":a=En(e,n),l=En(e,r),i=[];break;case"textarea":a=In(e,n),l=In(e,r),i=[];break;default:a=n,l=r,"function"!=typeof a.onClick&&"function"==typeof l.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
rr(e)}Yn(t,l);var u=void 0,c=void 0,s=null;for(u in a)if(!l.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if(u===Mv){var f=a[u];for(c in f)f.hasOwnProperty(c)&&(s||(s={}),s[c]="")}else u===Rv||u===Dv||u===Ov||u===Nv||u===Iv||(gs.hasOwnProperty(u)?
// This is a special case. If any listener updates we need to ensure
// that the "current" fiber pointer gets updated so we need a commit
// to update this element.
i||(i=[]):
// For all other deleted properties we add it to the queue. We use
// the whitelist in the commit phase instead.
(i=i||[]).push(u,null));for(u in l){var d=l[u],p=null!=a?a[u]:void 0;if(l.hasOwnProperty(u)&&d!==p&&(null!=d||null!=p))if(u===Mv)if(d&&
// Freeze the next style object so that we can assume it won't be
// mutated. We have already warned for this in the past.
Object.freeze(d),p){
// Unset styles on `lastProp` but not on `nextProp`.
for(c in p)!p.hasOwnProperty(c)||d&&d.hasOwnProperty(c)||(s||(s={}),s[c]="");
// Update styles that changed since `lastProp`.
for(c in d)d.hasOwnProperty(c)&&p[c]!==d[c]&&(s||(s={}),s[c]=d[c])}else
// Relies on `updateStylesByID` not mutating `styleUpdates`.
s||(i||(i=[]),i.push(u,s)),s=d;else if(u===Rv){var m=d?d[Uv]:void 0,h=p?p[Uv]:void 0;null!=m&&h!==m&&(i=i||[]).push(u,""+m)}else u===Dv?p===d||"string"!=typeof d&&"number"!=typeof d||(i=i||[]).push(u,""+d):u===Ov||u===Nv||(gs.hasOwnProperty(u)?(null!=d&&(
// We eagerly listen to this even though we haven't committed yet.
"function"!=typeof d&&Vv(u,d),er(o,u)),i||p===d||(
// This is a special case. If any listener updates we need to ensure
// that the "current" props pointer gets updated so we need a commit
// to update this element.
i=[])):
// For any other property we always add it to the queue and then we
// filter it out using the whitelist during the commit.
(i=i||[]).push(u,d))}return s&&($n(s,l[Mv]),(i=i||[]).push(Mv,s)),i}
// Apply the diff.
function sr(e,t,n,r,o){
// TODO: Ensure that an update gets scheduled if any of the special props
// changed.
switch(
// Update checked *before* name.
// In the middle of an update, it is possible to have multiple checked.
// When a checked radio tries to change name, browser makes another radio's checked false.
"input"===n&&"radio"===o.type&&null!=o.name&&et(e,o),
// Apply the diff.
ir(e,t,Qn(n,r),Qn(n,o)),n){case"input":
// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
tt(e,o);break;case"textarea":Mn(e,o);break;case"select":
// <select> value update needs to occur after <option> children
// reconciliation
On(e,o)}}function fr(e){var t=e.toLowerCase();return dv.hasOwnProperty(t)?dv[t]||null:null}function dr(e,t,n,r,o){var i=void 0,a=void 0;
// TODO: Make sure that we check isMounted before firing any of these events.
switch(Lv=!0===n[Nv],i=Qn(t,n),Wv(t,n),i&&!Pv&&e.shadyRoot&&(Mp(!1,"%s is using shady DOM. Using shady DOM with React can cause things to break subtly.",Ue()||"A component"),Pv=!0),t){case"iframe":case"object":$t(Vf,e);break;case"video":case"audio":
// Create listener for each media event
for(var l=0;l<Od.length;l++)$t(Od[l],e);break;case"source":$t(Uf,e);break;case"img":case"image":case"link":$t(Uf,e),$t(Vf,e);break;case"form":$t(fd,e),$t(yd,e);break;case"details":$t(kd,e);break;case"input":Ze(e,n),$t(Wf,e),
// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
er(o,"onChange");break;case"option":kn(e,n);break;case"select":Pn(e,n),$t(Wf,e),
// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
er(o,"onChange");break;case"textarea":Dn(e,n),$t(Wf,e),
// For controlled components we always need to ensure we're listening
// to onChange. Even if there is no listener.
er(o,"onChange")}Yn(t,n),a=new Set;for(var u=e.attributes,c=0;c<u.length;c++){switch(u[c].name.toLowerCase()){
// Built-in SSR attribute is whitelisted
case"data-reactroot":
// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case"value":case"checked":case"selected":break;default:
// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
a.add(u[c].name)}}var s=null;for(var f in n)if(n.hasOwnProperty(f)){var d=n[f];if(f===Dv)
// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
"string"==typeof d?e.textContent!==d&&(Lv||Fv(e.textContent,d),s=[Dv,d]):"number"==typeof d&&e.textContent!==""+d&&(Lv||Fv(e.textContent,d),s=[Dv,""+d]);else if(gs.hasOwnProperty(f))null!=d&&("function"!=typeof d&&Vv(f,d),er(o,f));else if(
// Convince Flow we've calculated it (it's DEV-only in this method.)
"boolean"==typeof i){
// Validate that the properties correspond to their expected values.
var p=void 0,m=He(f);if(Lv);else if(f===Ov||f===Nv||
// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
"value"===f||"checked"===f||"selected"===f);else if(f===Rv){var h=e.innerHTML,v=d?d[Uv]:void 0,y=$v(e,null!=v?v:"");y!==h&&jv(f,h,y)}else if(f===Mv){if(
// $FlowFixMe - Should be inferred as not undefined.
a.delete(f),Hv){var g=Bn(d);p=e.getAttribute("style"),g!==p&&jv(f,p,g)}}else if(i)
// $FlowFixMe - Should be inferred as not undefined.
a.delete(f.toLowerCase()),p=Ye(e,f,d),d!==p&&jv(f,p,d);else if(!je(f,m,i)&&!Ve(f,d,m,i)){var b=!1;if(null!==m)
// $FlowFixMe - Should be inferred as not undefined.
a.delete(m.attributeName),p=$e(e,f,d,m);else{var w=r;if(w===Av&&(w=zn(t)),w===Av)
// $FlowFixMe - Should be inferred as not undefined.
a.delete(f.toLowerCase());else{var k=fr(f);null!==k&&k!==f&&(
// If an SVG prop is supplied with bad casing, it will
// be successfully parsed from HTML, but will produce a mismatch
// (and would be incorrectly rendered on the client).
// However, we already warn about bad casing elsewhere.
// So we'll skip the misleading extra mismatch warning in this case.
b=!0,
// $FlowFixMe - Should be inferred as not undefined.
a.delete(k)),
// $FlowFixMe - Should be inferred as not undefined.
a.delete(f)}p=Ye(e,f,d)}d===p||b||jv(f,p,d)}}}switch(
// $FlowFixMe - Should be inferred as not undefined.
a.size>0&&!Lv&&
// $FlowFixMe - Should be inferred as not undefined.
Bv(a),t){case"input":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
Ee(e),nt(e,n,!0);break;case"textarea":
// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
Ee(e),Un(e,n);break;case"select":case"option":
// For input and textarea we current always set the value property at
// post mount to force it to diverge from attributes. However, for
// option and select we don't quite do the same thing and select
// is not resilient to the DOM state changing so we don't do that here.
// TODO: Consider not doing this for input and textarea.
break;default:"function"==typeof n.onClick&&
// TODO: This cast may not be sound for SVG, MathML or custom elements.
rr(e)}return s}function pr(e,t){return e.nodeValue!==t}function mr(e,t){Fv(e.nodeValue,t)}function hr(e,t){Ev||(Ev=!0,xs(!1,"Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase()))}function vr(e,t){Ev||(Ev=!0,xs(!1,'Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase()))}function yr(e,t,n){Ev||(Ev=!0,xs(!1,"Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase()))}function gr(e,t){""!==t&&(Ev||(Ev=!0,xs(!1,'Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())))}function br(e,t,n){switch(t){case"input":return void rt(e,n);case"textarea":return void An(e,n);case"select":return void Nn(e,n)}}
// Renderers that don't support persistence
// can re-export everything from this module.
function wr(){t(!1,"The current renderer does not support persistence. This error is likely caused by a bug in React. Please file an issue.")}function kr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function xr(e){var t=void 0,n=void 0,r=e.nodeType;switch(r){case lp:case up:t=r===lp?"#document":"#fragment";var o=e.documentElement;n=o?o.namespaceURI:Ln(null,"");break;default:var i=r===ap?e.parentNode:e,a=i.namespaceURI||null;t=i.tagName,n=Ln(a,t)}var l=t.toLowerCase();return{namespace:n,ancestorInfo:Xv(null,l)}}function Tr(e,t,n){var r=e;return{namespace:Ln(r.namespace,t),ancestorInfo:Xv(r.ancestorInfo,t)}}function _r(e){return e}function Sr(e){gy=qt(),by=pn(),Ht(!1)}function Cr(e){mn(by),by=null,Ht(gy),gy=null}function Er(e,t,n,r,o){var i=void 0,a=r;if(Kv(e,null,a.ancestorInfo),"string"==typeof t.children||"number"==typeof t.children){var l=""+t.children,u=Xv(a.ancestorInfo,e);Kv(null,l,u)}i=a.namespace;var c=ar(e,t,n,i);return T(o,c),P(c,t),c}function Pr(e,t){e.appendChild(t)}function Rr(e,t,n,r,o){return ur(e,t,n,r),kr(t,n)}function Or(e,t,n,r,o,i){var a=i;if(typeof r.children!=typeof n.children&&("string"==typeof r.children||"number"==typeof r.children)){var l=""+r.children,u=Xv(a.ancestorInfo,t);Kv(null,l,u)}return cr(e,t,n,r,o)}function Nr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function Ir(e,t){return!!t.hidden}function Dr(e,t,n,r){Kv(null,e,n.ancestorInfo);var o=lr(e,t);return T(r,o),o}function Mr(e,t,n,r){
// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
kr(t,n)&&e.focus()}function Ur(e,t,n,r,o,i){
// Update the props handle so that we know which props are the ones with
// with current event handlers.
P(e,o),
// Apply the diff to the DOM node.
sr(e,t,n,r,o)}function Ar(e){Fh(e,"")}function zr(e,t,n){e.nodeValue=n}function Lr(e,t){e.appendChild(t)}function Wr(e,t){var n=void 0;e.nodeType===ap?(n=e.parentNode,n.insertBefore(t,e)):(n=e,n.appendChild(t));
// This container might be used for a portal.
// If something inside a portal is clicked, that click should bubble
// through the React tree. However, on Mobile Safari the click would
// never bubble through the *DOM* tree unless an ancestor with onclick
// event exists. So we wouldn't see it and dispatch it.
// This is why we ensure that non React root containers have inline onclick
// defined.
// https://github.com/facebook/react/issues/11918
var r=e._reactRootContainer;null!==r&&void 0!==r||null!==n.onclick||
// TODO: This cast may not be sound for SVG, MathML or custom elements.
rr(n)}function Fr(e,t,n){e.insertBefore(t,n)}function jr(e,t,n){e.nodeType===ap?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)}function Br(e,t){e.removeChild(t)}function Vr(e,t){e.nodeType===ap?e.parentNode.removeChild(t):e.removeChild(t)}function Hr(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===ap){var i=o.data;if(i===vy){if(0===r)return void e.removeChild(o);r--}else i===hy&&r++}n=o}while(n)}function qr(e,t){e.nodeType===ap?Hr(e.parentNode,t):e.nodeType===op&&Hr(e,t)}function $r(e){
// TODO: Does this work for all element types? What about MathML? Should we
// pass host context to this method?
e=e,e.style.display="none"}function Yr(e){e.nodeValue=""}function Qr(e,t){e=e;var n=t[yy],r=void 0!==n&&null!==n&&n.hasOwnProperty("display")?n.display:null;e.style.display=Fn("display",r)}function Kr(e,t){e.nodeValue=t}function Xr(e,t,n){return e.nodeType!==op||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e}function Gr(e,t){return""===t||e.nodeType!==ip?null:e}function Jr(e){return e.nodeType!==ap?null:e}function Zr(e){
// Skip non-hydratable nodes.
for(var t=e.nextSibling;t&&t.nodeType!==op&&t.nodeType!==ip&&(!um||t.nodeType!==ap||t.data!==hy);)t=t.nextSibling;return t}function eo(e){
// Skip non-hydratable nodes.
for(var t=e.firstChild;t&&t.nodeType!==op&&t.nodeType!==ip&&(!um||t.nodeType!==ap||t.data!==hy);)t=t.nextSibling;return t}function to(e,t,n,r,o,i){T(i,e),
// TODO: Possibly defer this until the commit phase where all the events
// get attached.
P(e,n);var a=void 0;return a=o.namespace,dr(e,t,n,a,r)}function no(e,t,n){return T(n,e),pr(e,t)}function ro(e){for(var t=e.nextSibling,n=0;t;){if(t.nodeType===ap){var r=t.data;if(r===vy){if(0===n)return Zr(t);n--}else r===hy&&n++}t=t.nextSibling}
// TODO: Warn, we didn't find the end comment boundary.
return null}function oo(e,t,n){mr(t,n)}function io(e,t,n,r,o){!0!==t[my]&&mr(r,o)}function ao(e,t){t.nodeType===op?hr(e,t):t.nodeType===ap||vr(e,t)}function lo(e,t,n,r){!0!==t[my]&&(r.nodeType===op?hr(n,r):r.nodeType===ap||vr(n,r))}function uo(e,t,n){yr(e,t,n)}function co(e,t){gr(e,t)}function so(e,t,n,r,o){!0!==t[my]&&yr(n,r,o)}function fo(e,t,n,r){!0!==t[my]&&gr(n,r)}function po(e,t,n){t[my]}function mo(){tm&&Ay++}function ho(){tm&&(Iy&&(Dy=!0),null!==Oy&&"componentWillMount"!==Oy&&"componentWillReceiveProps"!==Oy&&(My=!0))}function vo(){tm&&Py&&!zy&&(zy=!0,jy("(Waiting for async callback...)"))}function yo(e,t){if(tm&&Py){zy=!1;Vy("(Waiting for async callback... will force flush in "+t+" ms)","(Waiting for async callback...)",e?"React was blocked by main thread":null)}}function go(e){if(tm){if(!Py||Ky(e))return;if(
// If we pause, this is the fiber to unwind from.
Ry=e,!$y(e,null))return;e._debugIsCurrentlyTiming=!0}}function bo(e){if(tm){if(!Py||Ky(e))return;
// Remember we shouldn't complete measurement for this fiber.
// Otherwise flamechart will be deep even for small updates.
e._debugIsCurrentlyTiming=!1,Yy(e,null)}}function wo(e){if(tm){if(!Py||Ky(e))return;if(
// If we pause, its parent is the fiber to unwind from.
Ry=e.return,!e._debugIsCurrentlyTiming)return;e._debugIsCurrentlyTiming=!1,Qy(e,null,null)}}function ko(e){if(tm){if(!Py||Ky(e))return;if(
// If we pause, its parent is the fiber to unwind from.
Ry=e.return,!e._debugIsCurrentlyTiming)return;e._debugIsCurrentlyTiming=!1;var t=e.tag===Hs||e.tag===Ks?"Rendering was suspended":"An error was thrown inside this error boundary";Qy(e,null,t)}}function xo(e,t){if(tm){if(!Py)return;if(Xy(),!$y(e,t))return;Ny=e,Oy=t}}function To(){if(tm){if(!Py)return;if(null!==Oy&&null!==Ny){Qy(Ny,Oy,My?"Scheduled a cascading update":null)}Oy=null,Ny=null}}function _o(e){if(tm){if(Ry=e,!Py)return;Uy=0,
// This is top level call.
// Any other measurements are performed within.
jy("(React Tree Reconciliation)"),
// Resume any measurements that were in progress during the last loop.
Zy()}}function So(e,t){if(tm){if(!Py)return;var n=null;if(null!==e)if(e.tag===Ms)n="A top-level update interrupted the previous render";else{var r=Ie(e.type)||"Unknown";n="An update to "+r+" interrupted the previous render"}else Uy>1&&(n="There were cascading updates");Uy=0;var o=t?"(React Tree Reconciliation: Completed Root)":"(React Tree Reconciliation: Yielded)";
// Pause any measurements until the next loop.
Gy(),Vy(o,"(React Tree Reconciliation)",n)}}function Co(){if(tm){if(!Py)return;Iy=!0,Dy=!1,Ly.clear(),jy("(Committing Changes)")}}function Eo(){if(tm){if(!Py)return;var e=null;Dy?e="Lifecycle hook scheduled a cascading update":Uy>0&&(e="Caused by a cascading update in earlier commit"),Dy=!1,Uy++,Iy=!1,Ly.clear(),Vy("(Committing Changes)","(Committing Changes)",e)}}function Po(){if(tm){if(!Py)return;Ay=0,jy("(Committing Snapshot Effects)")}}function Ro(){if(tm){if(!Py)return;var e=Ay;Ay=0,Vy("(Committing Snapshot Effects: "+e+" Total)","(Committing Snapshot Effects)",null)}}function Oo(){if(tm){if(!Py)return;Ay=0,jy("(Committing Host Effects)")}}function No(){if(tm){if(!Py)return;var e=Ay;Ay=0,Vy("(Committing Host Effects: "+e+" Total)","(Committing Host Effects)",null)}}function Io(){if(tm){if(!Py)return;Ay=0,jy("(Calling Lifecycle Methods)")}}function Do(){if(tm){if(!Py)return;var e=Ay;Ay=0,Vy("(Calling Lifecycle Methods: "+e+" Total)","(Calling Lifecycle Methods)",null)}}function Mo(e){return{current:e}}function Uo(e,t){if(ng<0)return void xs(!1,"Unexpected pop.");t!==tg[ng]&&xs(!1,"Unexpected Fiber popped."),e.current=eg[ng],eg[ng]=null,tg[ng]=null,ng--}function Ao(e,t,n){ng++,eg[ng]=e.current,tg[ng]=n,e.current=t}function zo(){-1!==ng&&xs(!1,"Expected an empty stack. Something was not reset properly.")}function Lo(){ng=-1,eg.length=0,tg.length=0}function Wo(e,t,n){return n&&Vo(t)?lg:ig.current}function Fo(e,t,n){var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}function jo(e,t){var n=e.type,r=n.contextTypes;if(!r)return og;
// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={};for(var a in r)i[a]=t[a];var l=Ie(n)||"Unknown";
// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
return ns(r,i,"context",l,Ae),o&&Fo(e,t,i),i}function Bo(){return ag.current}function Vo(e){var t=e.childContextTypes;return null!==t&&void 0!==t}function Ho(e){Uo(ag,e),Uo(ig,e)}function qo(e){Uo(ag,e),Uo(ig,e)}function $o(e,n,r){ig.current!==og&&t(!1,"Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."),Ao(ig,n,e),Ao(ag,r,e)}function Yo(e,n,r){var o=e.stateNode,i=n.childContextTypes;
// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if("function"!=typeof o.getChildContext){var a=Ie(n)||"Unknown";return rg[a]||(rg[a]=!0,xs(!1,"%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",a,a)),r}var l=void 0;We("getChildContext"),xo(e,"getChildContext"),l=o.getChildContext(),To(),We(null);for(var u in l)u in i||t(!1,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',Ie(n)||"Unknown",u);var c=Ie(n)||"Unknown";
// In practice, there is one case in which we won't get a stack. It's when
// somebody calls unstable_renderSubtreeIntoContainer() and we process
// context from the parent component instance. The stack will be missing
// because it's outside of the reconciliation, and so the pointer has not
// been set. This is rare and doesn't matter. We'll also remove that API.
return ns(i,l,"child context",c,Ae),ts({},r,l)}function Qo(e){var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||og;
// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
return lg=ig.current,Ao(ig,n,e),Ao(ag,ag.current,e),!0}function Ko(e,n,r){var o=e.stateNode;if(o||t(!1,"Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."),r){
// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var i=Yo(e,n,lg);o.__reactInternalMemoizedMergedChildContext=i,
// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
Uo(ag,e),Uo(ig,e),
// Now push the new context and mark that it has changed.
Ao(ig,i,e),Ao(ag,r,e)}else Uo(ag,e),Ao(ag,r,e)}function Xo(e){
// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
Rt(e)&&e.tag===Is||t(!1,"Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var n=e;do{switch(n.tag){case Ms:return n.stateNode.context;case Is:if(Vo(n.type))return n.stateNode.__reactInternalMemoizedMergedChildContext}n=n.return}while(null!==n);t(!1,"Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}function Go(e){return function(t){try{return e(t)}catch(e){sg||(sg=!0,xs(!1,"React DevTools encountered an error: %s",e))}}}function Jo(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
// No DevTools
return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)
// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return!0;if(!t.supportsFiber)
// DevTools exists, even though it doesn't support Fiber.
return xs(!1,"The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://fb.me/react-devtools"),!0;try{var n=t.inject(e);
// We have successfully injected, so now it is safe to set up hooks.
ug=Go(function(e){return t.onCommitFiberRoot(n,e)}),cg=Go(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){xs(!1,"React DevTools encountered an error: %s.",e)}
// DevTools exists
return!0}function Zo(e){"function"==typeof ug&&ug(e)}function ei(e){"function"==typeof cg&&cg(e)}
// 1 unit of expiration time represents 10ms.
function ti(e){
// Always add an offset so that we don't clash with the magic number for NoWork.
return yg-(e/vg|0)}function ni(e){return(yg-e)*vg}function ri(e,t){return(1+(e/t|0))*t}function oi(e,t,n){return yg-ri(yg-e+t/vg,n/vg)}function ii(e){return oi(e,gg,bg)}function ai(e){return oi(e,wg,kg)}function li(e,t,n,r){
// Instance
this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,
// Fiber
this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.contextDependencies=null,this.mode=r,
// Effects
this.effectTag=Dm,this.nextEffect=null,this.firstEffect=null,this.lastEffect=null,this.expirationTime=pg,this.childExpirationTime=pg,this.alternate=null,am&&(
// Note: The following is done to avoid a v8 performance cliff.
//
// Initializing the fields below to smis and later updating them with
// double values will cause Fibers to end up having separate shapes.
// This behavior/bug has something to do with Object.preventExtension().
// Fortunately this only impacts DEV builds.
// Unfortunately it makes React unusably slow for some applications.
// To work around this, initialize the fields below with doubles.
//
// Learn more about this here:
// https://github.com/facebook/react/issues/14365
// https://bugs.chromium.org/p/v8/issues/detail?id=8538
this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,
// It's okay to replace the initial doubles with smis after initialization.
// This won't trigger the performance cliff mentioned above,
// and it simplifies other profiler code (including DevTools).
this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0),this._debugID=Og++,this._debugSource=null,this._debugOwner=null,this._debugIsCurrentlyTiming=!1,this._debugHookTypes=null,Cg||"function"!=typeof Object.preventExtensions||Object.preventExtensions(this)}function ui(e){var t=e.prototype;return!(!t||!t.isReactComponent)}function ci(e){return"function"==typeof e&&!ui(e)&&void 0===e.defaultProps}function si(e){if("function"==typeof e)return ui(e)?Is:Ns;if(void 0!==e&&null!==e){var t=e.$$typeof;if(t===kp)return Bs;if(t===Tp)return qs}return Ds}
// This is used to create an alternate fiber to do work on.
function fi(e,t,n){var r=e.alternate;
// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
// DEV-only fields
// We already have an alternate.
// Reset the effect tag.
// The effect list is no longer valid.
// We intentionally reset, rather than copy, actualDuration & actualStartTime.
// This prevents time from endlessly accumulating in new commits.
// This has the downside of resetting values for different priority renders,
// But works for yielding (the common case) and should support resuming.
// These will be overridden during the parent's reconciliation
return null===r?(r=Ng(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r._debugID=e._debugID,r._debugSource=e._debugSource,r._debugOwner=e._debugOwner,r._debugHookTypes=e._debugHookTypes,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.effectTag=Dm,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null,am&&(r.actualDuration=0,r.actualStartTime=-1)),r.childExpirationTime=e.childExpirationTime,r.expirationTime=e.expirationTime,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.contextDependencies=e.contextDependencies,r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,am&&(r.selfBaseDuration=e.selfBaseDuration,r.treeBaseDuration=e.treeBaseDuration),r}function di(e){var t=e?Tg|_g:xg;
// Always collect profile timings when DevTools are present.
// This enables DevTools to start capturing timing at any point–
// Without some nodes in the tree having empty base times.
return am&&fg&&(t|=Sg),Ng(Ms,null,null,t)}function pi(e,// React$ElementType
n,r,o,i,a){var l=void 0,u=Ds,c=e;if("function"==typeof e)ui(e)&&(u=Is);else if("string"==typeof e)u=As;else e:switch(e){case hp:return hi(r.children,i,a,n);case wp:return yi(r,i|Tg|_g,a,n);case vp:return yi(r,i|_g,a,n);case yp:return vi(r,i,a,n);case xp:return gi(r,i,a,n);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case gp:u=js;break e;case bp:
// This is a consumer
u=Fs;break e;case kp:u=Bs;break e;case Tp:u=qs;break e;case _p:u=Ys,c=null;break e}var s="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var f=o?Ie(o.type):null;f&&(s+="\n\nCheck the render method of `"+f+"`."),t(!1,"Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",null==e?e:typeof e,s)}return l=Ng(u,r,n,i),l.elementType=e,l.type=c,l.expirationTime=a,l}function mi(e,t,n){var r=null;r=e._owner;var o=e.type,i=e.key,a=e.props,l=pi(o,i,a,r,t,n);return l._debugSource=e._source,l._debugOwner=e._owner,l}function hi(e,t,n,r){var o=Ng(Ls,e,r,t);return o.expirationTime=n,o}function vi(e,t,n,r){"string"==typeof e.id&&"function"==typeof e.onRender||xs(!1,'Profiler must specify an "id" string and "onRender" function as props');var o=Ng(Vs,e,r,t|Sg);
// TODO: The Profiler fiber shouldn't have a type. It has a tag.
return o.elementType=yp,o.type=yp,o.expirationTime=n,o}function yi(e,t,n,r){var o=Ng(Ws,e,r,t),i=(t&Tg)===xg?vp:wp;return o.elementType=i,o.type=i,o.expirationTime=n,o}function gi(e,t,n,r){var o=Ng(Hs,e,r,t),i=xp;return o.elementType=i,o.type=i,o.expirationTime=n,o}function bi(e,t,n){var r=Ng(zs,e,null,t);return r.expirationTime=n,r}function wi(){var e=Ng(As,null,null,xg);
// TODO: These should not need a type.
return e.elementType="DELETED",e.type="DELETED",e}function ki(e,t,n){var r=null!==e.children?e.children:[],o=Ng(Us,r,e.key,t);return o.expirationTime=n,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,// Used by persistent updates
implementation:e.implementation},o}
// Used for stashing WIP properties to replay failed work in DEV.
function xi(e,t){
// This Fiber's initial properties will always be overwritten.
// We only use a Fiber to ensure the same hidden class so DEV isn't slow.
// This is intentionally written as a list of all properties.
// We tried to use Object.assign() instead but this is called in
// the hottest path, and Object.assign() was too slow:
// https://github.com/facebook/react/issues/12502
// This code is DEV-only so size is not a concern.
return null===e&&(e=Ng(Ds,null,null,xg)),e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.contextDependencies=t.contextDependencies,e.mode=t.mode,e.effectTag=t.effectTag,e.nextEffect=t.nextEffect,e.firstEffect=t.firstEffect,e.lastEffect=t.lastEffect,e.expirationTime=t.expirationTime,e.childExpirationTime=t.childExpirationTime,e.alternate=t.alternate,am&&(e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration),e._debugID=t._debugID,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugIsCurrentlyTiming=t._debugIsCurrentlyTiming,e._debugHookTypes=t._debugHookTypes,e}
// TODO: This should be lifted into the renderer.
// The following attributes are only used by interaction tracing builds.
// They enable interactions to be associated with their async work,
// And expose interaction metadata to the React DevTools Profiler plugin.
// Note that these attributes are only defined when the enableSchedulerTracing flag is enabled.
// Exported FiberRoot type includes all properties,
// To avoid requiring potentially error-prone :any casts throughout the project.
// Profiling properties are only safe to access in profiling builds (when enableSchedulerTracing is true).
// The types are defined separately within this file to ensure they stay in sync.
// (We don't have to use an inline :any cast when enableSchedulerTracing is disabled.)
function Ti(e,t,n){
// Cyclic construction. This cheats the type system right now because
// stateNode is any.
var r=di(t),o=void 0;
// The reason for the way the Flow types are structured in this file,
// Is to avoid needing :any casts everywhere interaction tracing fields are used.
// Unfortunately that requires an :any cast for non-interaction tracing capable builds.
// $FlowFixMe Remove this :any cast and replace it with something better.
return o=lm?{current:r,containerInfo:e,pendingChildren:null,earliestPendingTime:pg,latestPendingTime:pg,earliestSuspendedTime:pg,latestSuspendedTime:pg,latestPingedTime:pg,pingCache:null,didError:!1,pendingCommitExpirationTime:pg,finishedWork:null,timeoutHandle:Ty,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:pg,expirationTime:pg,firstBatch:null,nextScheduledRoot:null,interactionThreadID:os.unstable_getThreadID(),memoizedInteractions:new Set,pendingInteractionMap:new Map}:{current:r,containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:pg,latestPendingTime:pg,earliestSuspendedTime:pg,latestSuspendedTime:pg,latestPingedTime:pg,didError:!1,pendingCommitExpirationTime:pg,finishedWork:null,timeoutHandle:Ty,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:pg,expirationTime:pg,firstBatch:null,nextScheduledRoot:null},r.stateNode=o,o}
// TODO: Offscreen updates should never suspend. However, a promise that
// suspended inside an offscreen subtree should be able to ping at the priority
// of the outer render.
function _i(e,t){
// If there's a gap between completing a failed root and retrying it,
// additional updates may be scheduled. Clear `didError`, in case the update
// is sufficient to fix the error.
e.didError=!1;
// Update the latest and earliest pending times
var n=e.earliestPendingTime;if(n===pg)
// No other pending updates.
e.earliestPendingTime=e.latestPendingTime=t;else if(n<t)
// This is the earliest pending update.
e.earliestPendingTime=t;else{var r=e.latestPendingTime;r>t&&(
// This is the latest pending update
e.latestPendingTime=t)}Di(t,e)}function Si(e,t){if(e.didError=!1,t===pg)
// Fast path. There's no remaining work. Clear everything.
return e.earliestPendingTime=pg,e.latestPendingTime=pg,e.earliestSuspendedTime=pg,e.latestSuspendedTime=pg,e.latestPingedTime=pg,void Di(pg,e);t<e.latestPingedTime&&(e.latestPingedTime=pg);
// Let's see if the previous latest known pending level was just flushed.
var n=e.latestPendingTime;if(n!==pg)if(n>t)
// We've flushed all the known pending levels.
e.earliestPendingTime=e.latestPendingTime=pg;else{var r=e.earliestPendingTime;r>t&&(
// We've flushed the earliest known pending level. Set this to the
// latest pending time.
e.earliestPendingTime=e.latestPendingTime)}
// Now let's handle the earliest remaining level in the whole tree. We need to
// decide whether to treat it as a pending level or as suspended. Check
// it falls within the range of known suspended levels.
var o=e.earliestSuspendedTime;
// There's no suspended work. Treat the earliest remaining level as a
// pending level.
// The earliest remaining level is later than all the suspended work. That
// means we've flushed all the suspended work.
// There's no suspended work. Treat the earliest remaining level as a
// pending level.
// The earliest remaining time is earlier than all the suspended work.
// Treat it as a pending update.
// The earliest remaining time falls within the range of known suspended
// levels. We should treat this as suspended work.
return o===pg?(_i(e,t),void Di(pg,e)):t<e.latestSuspendedTime?(e.earliestSuspendedTime=pg,e.latestSuspendedTime=pg,e.latestPingedTime=pg,_i(e,t),void Di(pg,e)):t>o?(_i(e,t),void Di(pg,e)):void Di(pg,e)}function Ci(e,t){var n=e.latestPendingTime,r=e.latestSuspendedTime,o=e.latestPingedTime;return n!==pg&&n<t||r!==pg&&r<t||o!==pg&&o<t}function Ei(e,t){var n=e.earliestSuspendedTime,r=e.latestSuspendedTime;return n!==pg&&t<=n&&t>=r}function Pi(e,t){e.didError=!1,Oi(e,t);
// First, check the known pending levels and update them if needed.
var n=e.earliestPendingTime,r=e.latestPendingTime;n===t?
// Both known pending levels were suspended. Clear them.
e.earliestPendingTime=r===t?e.latestPendingTime=pg:r:r===t&&(
// The latest pending level was suspended. Clear by setting it to the
// latest pending level.
e.latestPendingTime=n);
// Finally, update the known suspended levels.
var o=e.earliestSuspendedTime,i=e.latestSuspendedTime;o===pg?
// No other suspended levels.
e.earliestSuspendedTime=e.latestSuspendedTime=t:o<t?
// This is the earliest suspended level.
e.earliestSuspendedTime=t:i>t&&(
// This is the latest suspended level
e.latestSuspendedTime=t),Di(t,e)}function Ri(e,t){e.didError=!1;
// TODO: When we add back resuming, we need to ensure the progressed work
// is thrown out and not reused during the restarted render. One way to
// invalidate the progressed work is to restart at expirationTime + 1.
var n=e.latestPingedTime;(n===pg||n>t)&&(e.latestPingedTime=t),Di(t,e)}function Oi(e,t){e.latestPingedTime>=t&&(e.latestPingedTime=pg)}function Ni(e,t){var n=t,r=e.earliestPendingTime,o=e.earliestSuspendedTime;return r>n&&(n=r),o>n&&(n=o),n}function Ii(e,t){var n=e.expirationTime;n!==pg&&t<=n&&(
// The root has expired. Flush all work up to the current time.
e.nextExpirationTimeToWorkOn=t)}function Di(e,t){var n=t.earliestSuspendedTime,r=t.latestSuspendedTime,o=t.earliestPendingTime,i=t.latestPingedTime,a=o!==pg?o:i;
// If there is no pending or pinged work, check if there's suspended work
// that's lower priority than what we just completed.
a===pg&&(e===pg||r<e)&&(
// The lowest priority suspended work is the work most likely to be
// committed next. Let's start rendering it again, so that if it times out,
// it's ready to commit.
a=r);var l=a;l!==pg&&n>l&&(
// Expire using the earliest known expiration time.
l=n),t.nextExpirationTimeToWorkOn=a,t.expirationTime=l}function Mi(e,t){if(e&&e.defaultProps){
// Resolve default props. Taken from ReactElement
var n=ts({},t),r=e.defaultProps;for(var o in r)void 0===n[o]&&(n[o]=r[o]);return n}return t}function Ui(e){var t=e._status,n=e._result;switch(t){case Pp:return n;case Rp:throw n;case Ep:throw n;default:e._status=Ep;var r=e._ctor,o=r();
// Handle synchronous thenables.
switch(o.then(function(t){if(e._status===Ep){var n=t.default;void 0===n&&Mp(!1,"lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t),e._status=Pp,e._result=n}},function(t){e._status===Ep&&(e._status=Rp,e._result=t)}),e._status){case Pp:return e._result;case Rp:throw e._result}throw e._result=o,o}}function Ai(e,t,n,r){var o=e.memoizedState;(nm||rm&&e.mode&_g)&&
// Invoke the function an extra time to help detect side-effects.
n(r,o);var i=n(r,o);rb(t,i);
// Merge the partial state and the previous state.
var a=null===i||void 0===i?o:ts({},o,i);e.memoizedState=a;
// Once the update queue is empty, persist the derived state onto the
// base state.
var l=e.updateQueue;null!==l&&e.expirationTime===pg&&(l.baseState=a)}function zi(e,t,n,r,o,i,a){var l=e.stateNode;if("function"==typeof l.shouldComponentUpdate){xo(e,"shouldComponentUpdate");var u=l.shouldComponentUpdate(r,i,a);return To(),void 0===u&&xs(!1,"%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",Ie(t)||"Component"),u}return!t.prototype||!t.prototype.isPureReactComponent||(!_t(n,r)||!_t(o,i))}function Li(e,t,n){var r=e.stateNode,o=Ie(t)||"Component";r.render||(t.prototype&&"function"==typeof t.prototype.render?xs(!1,"%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):xs(!1,"%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o)),!r.getInitialState||r.getInitialState.isReactClassApproved||r.state||xs(!1,"getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o),!r.getDefaultProps||r.getDefaultProps.isReactClassApproved||xs(!1,"getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o),!r.propTypes||xs(!1,"propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o),!r.contextType||xs(!1,"contextType was defined as an instance property on %s. Use a static property to define contextType instead.",o),!r.contextTypes||xs(!1,"contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o),t.contextType&&t.contextTypes&&!ab.has(t)&&(ab.add(t),xs(!1,"%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",o)),"function"!=typeof r.componentShouldUpdate||xs(!1,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),t.prototype&&t.prototype.isPureReactComponent&&void 0!==r.shouldComponentUpdate&&xs(!1,"%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",Ie(t)||"A pure component"),"function"!=typeof r.componentDidUnmount||xs(!1,"%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o),"function"!=typeof r.componentDidReceiveProps||xs(!1,"%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o),"function"!=typeof r.componentWillRecieveProps||xs(!1,"%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o),"function"!=typeof r.UNSAFE_componentWillRecieveProps||xs(!1,"%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",o);var i=r.props!==n;void 0!==r.props&&i&&xs(!1,"%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o),!r.defaultProps||xs(!1,"Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o),"function"!=typeof r.getSnapshotBeforeUpdate||"function"==typeof r.componentDidUpdate||eb.has(t)||(eb.add(t),xs(!1,"%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",Ie(t))),"function"!=typeof r.getDerivedStateFromProps||xs(!1,"%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"!=typeof r.getDerivedStateFromError||xs(!1,"%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"!=typeof t.getSnapshotBeforeUpdate||xs(!1,"%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",o);var a=r.state;a&&("object"!=typeof a||Xg(a))&&xs(!1,"%s.state: must be set to an object or null",o),"function"==typeof r.getChildContext&&"object"!=typeof t.childContextTypes&&xs(!1,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",o)}function Wi(e,t){t.updater=cb,e.stateNode=t,
// The instance needs access to the fiber so that it can schedule updates
Et(t,e),t._reactInternalInstance=Kg}function Fi(e,t,n,r){var o=!1,i=og,a=null,l=t.contextType;if("contextType"in t){// Not a <Context.Consumer>
if(!(
// Allow null for conditional declaration
null===l||void 0!==l&&l.$$typeof===bp&&void 0===l._context)&&!lb.has(t)){lb.add(t);var u="";u=void 0===l?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":"object"!=typeof l?" However, it is set to a "+typeof l+".":l.$$typeof===gp?" Did you accidentally pass the Context.Provider instead?":void 0!==l._context?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(l).join(", ")+"}.",xs(!1,"%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",Ie(t)||"Component",u)}}if("object"==typeof l&&null!==l)a=Ll(l);else{i=Wo(e,t,!0);var c=t.contextTypes;o=null!==c&&void 0!==c,a=o?jo(e,i):og}(nm||rm&&e.mode&_g)&&new t(n,a);var s=new t(n,a),f=e.memoizedState=null!==s.state&&void 0!==s.state?s.state:null;if(Wi(e,s),"function"==typeof t.getDerivedStateFromProps&&null===f){var d=Ie(t)||"Component";Zg.has(d)||(Zg.add(d),xs(!1,"`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",d,null===s.state?"null":"undefined",d))}
// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if("function"==typeof t.getDerivedStateFromProps||"function"==typeof s.getSnapshotBeforeUpdate){var p=null,m=null,h=null;if("function"==typeof s.componentWillMount&&!0!==s.componentWillMount.__suppressDeprecationWarning?p="componentWillMount":"function"==typeof s.UNSAFE_componentWillMount&&(p="UNSAFE_componentWillMount"),"function"==typeof s.componentWillReceiveProps&&!0!==s.componentWillReceiveProps.__suppressDeprecationWarning?m="componentWillReceiveProps":"function"==typeof s.UNSAFE_componentWillReceiveProps&&(m="UNSAFE_componentWillReceiveProps"),"function"==typeof s.componentWillUpdate&&!0!==s.componentWillUpdate.__suppressDeprecationWarning?h="componentWillUpdate":"function"==typeof s.UNSAFE_componentWillUpdate&&(h="UNSAFE_componentWillUpdate"),null!==p||null!==m||null!==h){var v=Ie(t)||"Component",y="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";tb.has(v)||(tb.add(v),xs(!1,"Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",v,y,null!==p?"\n  "+p:"",null!==m?"\n  "+m:"",null!==h?"\n  "+h:""))}}
// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
return o&&Fo(e,i,a),s}function ji(e,t){xo(e,"componentWillMount");var n=t.state;"function"==typeof t.componentWillMount&&t.componentWillMount(),"function"==typeof t.UNSAFE_componentWillMount&&t.UNSAFE_componentWillMount(),To(),n!==t.state&&(xs(!1,"%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",Ie(e.type)||"Component"),cb.enqueueReplaceState(t,t.state,null))}function Bi(e,t,n,r){var o=t.state;if(xo(e,"componentWillReceiveProps"),"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),To(),t.state!==o){var i=Ie(e.type)||"Component";Jg.has(i)||(Jg.add(i),xs(!1,"%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",i)),cb.enqueueReplaceState(t,t.state,null)}}
// Invokes the mount life-cycles on a previously never rendered instance.
function Vi(e,t,n,r){Li(e,t,n);var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Gg;var i=t.contextType;if("object"==typeof i&&null!==i)o.context=Ll(i);else{var a=Wo(e,t,!0);o.context=jo(e,a)}if(o.state===n){var l=Ie(t)||"Component";ib.has(l)||(ib.add(l),xs(!1,"%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",l))}e.mode&_g&&(Ug.recordUnsafeLifecycleWarnings(e,o),Ug.recordLegacyContextWarning(e,o)),im&&Ug.recordDeprecationWarnings(e,o);var u=e.updateQueue;null!==u&&(Yl(e,u,n,o,r),o.state=e.memoizedState);var c=t.getDerivedStateFromProps;"function"==typeof c&&(Ai(e,t,c,n),o.state=e.memoizedState),
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(ji(e,o),null!==(
// If we had additional state updates during this life-cycle, let's
// process them now.
u=e.updateQueue)&&(Yl(e,u,n,o,r),o.state=e.memoizedState)),"function"==typeof o.componentDidMount&&(e.effectTag|=Am)}function Hi(e,t,n,r){var o=e.stateNode,i=e.memoizedProps;o.props=i;var a=o.context,l=t.contextType,u=void 0;if("object"==typeof l&&null!==l)u=Ll(l);else{u=jo(e,Wo(e,t,!0))}var c=t.getDerivedStateFromProps,s="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;
// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
s||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||i===n&&a===u||Bi(e,o,n,u),Kl();var f=e.memoizedState,d=o.state=f,p=e.updateQueue;if(null!==p&&(Yl(e,p,n,o,r),d=e.memoizedState),i===n&&f===d&&!Bo()&&!Xl())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"==typeof o.componentDidMount&&(e.effectTag|=Am),!1;"function"==typeof c&&(Ai(e,t,c,n),d=e.memoizedState);var m=Xl()||zi(e,t,i,n,f,d,u);
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
return m?(s||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(xo(e,"componentWillMount"),"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),To()),"function"==typeof o.componentDidMount&&(e.effectTag|=Am)):("function"==typeof o.componentDidMount&&(e.effectTag|=Am),e.memoizedProps=n,e.memoizedState=d),o.props=n,o.state=d,o.context=u,m}
// Invokes the update life-cycles and returns false if it shouldn't rerender.
function qi(e,t,n,r,o){var i=t.stateNode,a=t.memoizedProps;i.props=t.type===t.elementType?a:Mi(t.type,a);var l=i.context,u=n.contextType,c=void 0;if("object"==typeof u&&null!==u)c=Ll(u);else{c=jo(t,Wo(t,n,!0))}var s=n.getDerivedStateFromProps,f="function"==typeof s||"function"==typeof i.getSnapshotBeforeUpdate;
// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
f||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||a===r&&l===c||Bi(t,i,r,c),Kl();var d=t.memoizedState,p=i.state=d,m=t.updateQueue;if(null!==m&&(Yl(t,m,r,i,o),p=t.memoizedState),a===r&&d===p&&!Bo()&&!Xl())
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
return"function"==typeof i.componentDidUpdate&&(a===e.memoizedProps&&d===e.memoizedState||(t.effectTag|=Am)),"function"==typeof i.getSnapshotBeforeUpdate&&(a===e.memoizedProps&&d===e.memoizedState||(t.effectTag|=Vm)),!1;"function"==typeof s&&(Ai(t,n,s,r),p=t.memoizedState);var h=Xl()||zi(t,n,a,r,d,p,c);
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
return h?(f||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||(xo(t,"componentWillUpdate"),"function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,c),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,c),To()),"function"==typeof i.componentDidUpdate&&(t.effectTag|=Am),"function"==typeof i.getSnapshotBeforeUpdate&&(t.effectTag|=Vm)):("function"==typeof i.componentDidUpdate&&(a===e.memoizedProps&&d===e.memoizedState||(t.effectTag|=Am)),"function"==typeof i.getSnapshotBeforeUpdate&&(a===e.memoizedProps&&d===e.memoizedState||(t.effectTag|=Vm)),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=c,h}function $i(e,n,r){var o=r.ref;if(null!==o&&"function"!=typeof o&&"object"!=typeof o){if(e.mode&_g){var i=Ie(e.type)||"Component";db[i]||(xs(!1,'A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using createRef() instead.\n%s\n\nLearn more about using refs safely here:\nhttps://fb.me/react-strict-mode-string-ref',o,Me(e)),db[i]=!0)}if(r._owner){var a=r._owner,l=void 0;if(a){var u=a;u.tag!==Is&&t(!1,"Function components cannot have refs. Did you mean to use React.forwardRef()?"),l=u.stateNode}l||t(!1,"Missing owner for string ref %s. This error is likely caused by a bug in React. Please file an issue.",o);var c=""+o;
// Check if previous string ref matches new string ref
if(null!==n&&null!==n.ref&&"function"==typeof n.ref&&n.ref._stringRef===c)return n.ref;var s=function(e){var t=l.refs;t===Gg&&(
// This is a lazy pooled frozen object, so we need to initialize.
t=l.refs={}),null===e?delete t[c]:t[c]=e};return s._stringRef=c,s}"string"!=typeof o&&t(!1,"Expected ref to be a function, a string, an object returned by React.createRef(), or null."),r._owner||t(!1,"Element ref was specified as a string (%s) but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.",o)}return o}function Yi(e,n){if("textarea"!==e.type){var r="";r=" If you meant to render a collection of children, use an array instead."+Ae(),t(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===Object.prototype.toString.call(n)?"object with keys {"+Object.keys(n).join(", ")+"}":n,r)}}function Qi(){var e="Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."+Ae();mb[e]||(mb[e]=!0,Mp(!1,"Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."))}
// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function Ki(e){function n(t,n){if(e){
// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=Lm}}function r(t,r){if(!e)
// Noop.
return null;for(
// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var o=r;null!==o;)n(t,o),o=o.sibling;return null}function o(e,t){for(
// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
var n=new Map,r=t;null!==r;)null!==r.key?n.set(r.key,r):n.set(r.index,r),r=r.sibling;return n}function i(e,t,n){
// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var r=fi(e,t,n);return r.index=0,r.sibling=null,r}function a(t,n,r){if(t.index=r,!e)
// Noop.
return n;var o=t.alternate;if(null!==o){var i=o.index;
// This is a move.
return i<n?(t.effectTag=Um,n):i}
// This is an insertion.
return t.effectTag=Um,n}function l(t){
// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
return e&&null===t.alternate&&(t.effectTag=Um),t}function u(e,t,n,r){if(null===t||t.tag!==zs){
// Insert
var o=bi(n,e.mode,r);return o.return=e,o}
// Update
var a=i(t,n,r);return a.return=e,a}function c(e,t,n,r){if(null!==t&&t.elementType===n.type){
// Move based on index
var o=i(t,n.props,r);return o.ref=$i(e,t,n),o.return=e,o._debugSource=n._source,o._debugOwner=n._owner,o}
// Insert
var a=mi(n,e.mode,r);return a.ref=$i(e,t,n),a.return=e,a}function s(e,t,n,r){if(null===t||t.tag!==Us||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation){
// Insert
var o=ki(n,e.mode,r);return o.return=e,o}
// Update
var a=i(t,n.children||[],r);return a.return=e,a}function f(e,t,n,r,o){if(null===t||t.tag!==Ls){
// Insert
var a=hi(n,e.mode,r,o);return a.return=e,a}
// Update
var l=i(t,n,r);return l.return=e,l}function d(e,t,n){if("string"==typeof t||"number"==typeof t){
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var r=bi(""+t,e.mode,n);return r.return=e,r}if("object"==typeof t&&null!==t){switch(t.$$typeof){case pp:var o=mi(t,e.mode,n);return o.ref=$i(e,null,t),o.return=e,o;case mp:var i=ki(t,e.mode,n);return i.return=e,i}if(vb(t)||Re(t)){var a=hi(t,e.mode,n,null);return a.return=e,a}Yi(e,t)}return"function"==typeof t&&Qi(),null}function p(e,t,n,r){
// Update the fiber if the keys match, otherwise return null.
var o=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
return null!==o?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case pp:return n.key===o?n.type===hp?f(e,t,n.props.children,r,o):c(e,t,n,r):null;case mp:return n.key===o?s(e,t,n,r):null}if(vb(n)||Re(n))return null!==o?null:f(e,t,n,r,null);Yi(e,n)}return"function"==typeof n&&Qi(),null}function m(e,t,n,r,o){if("string"==typeof r||"number"==typeof r){return u(t,e.get(n)||null,""+r,o)}if("object"==typeof r&&null!==r){switch(r.$$typeof){case pp:var i=e.get(null===r.key?n:r.key)||null;return r.type===hp?f(t,i,r.props.children,o,r.key):c(t,i,r,o);case mp:return s(t,e.get(null===r.key?n:r.key)||null,r,o)}if(vb(r)||Re(r)){return f(t,e.get(n)||null,r,o,null)}Yi(t,r)}return"function"==typeof r&&Qi(),null}/**
   * Warns if there is a duplicate or missing key
   */
function h(e,t){if("object"!=typeof e||null===e)return t;switch(e.$$typeof){case pp:case mp:hb(e);var n=e.key;if("string"!=typeof n)break;if(null===t){t=new Set,t.add(n);break}if(!t.has(n)){t.add(n);break}Mp(!1,"Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",n)}return t}function v(t,i,l,u){for(var c=null,s=0;s<l.length;s++){c=h(l[s],c)}for(var f=null,v=null,y=i,g=0,b=0,w=null;null!==y&&b<l.length;b++){y.index>b?(w=y,y=null):w=y.sibling;var k=p(t,y,l[b],u);if(null===k){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===y&&(y=w);break}e&&y&&null===k.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
n(t,y),g=a(k,g,b),null===v?
// TODO: Move out of the loop. This only happens for the first run.
f=k:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
v.sibling=k,v=k,y=w}if(b===l.length)
// We've reached the end of the new children. We can delete the rest.
return r(t,y),f;if(null===y){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;b<l.length;b++){var x=d(t,l[b],u);x&&(g=a(x,g,b),null===v?
// TODO: Move out of the loop. This only happens for the first run.
f=x:v.sibling=x,v=x)}return f}
// Keep scanning and use the map to restore deleted items as moves.
for(
// Add all children to a key map for quick lookups.
var T=o(t,y);b<l.length;b++){var _=m(T,t,b,l[b],u);_&&(e&&null!==_.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
T.delete(null===_.key?b:_.key),g=a(_,g,b),null===v?f=_:v.sibling=_,v=_)}
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
return e&&T.forEach(function(e){return n(t,e)}),f}function y(i,l,u,c){
// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var s=Re(u);"function"!=typeof s&&t(!1,"An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."),
// We don't support rendering Generators because it's a mutation.
// See https://github.com/facebook/react/issues/12995
"function"==typeof Symbol&&
// $FlowFixMe Flow doesn't know about toStringTag
"Generator"===u[Symbol.toStringTag]&&(fb||Mp(!1,"Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),fb=!0),
// Warn about using Maps as children
u.entries===s&&(sb||Mp(!1,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."),sb=!0);
// First, validate keys.
// We'll get a different iterator later for the main pass.
var f=s.call(u);if(f)for(var v=null,y=f.next();!y.done;y=f.next()){var g=y.value;v=h(g,v)}var b=s.call(u);null==b&&t(!1,"An iterable object provided no iterator.");for(var w=null,k=null,x=l,T=0,_=0,S=null,C=b.next();null!==x&&!C.done;_++,C=b.next()){x.index>_?(S=x,x=null):S=x.sibling;var E=p(i,x,C.value,c);if(null===E){
// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
x||(x=S);break}e&&x&&null===E.alternate&&
// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
n(i,x),T=a(E,T,_),null===k?
// TODO: Move out of the loop. This only happens for the first run.
w=E:
// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
k.sibling=E,k=E,x=S}if(C.done)
// We've reached the end of the new children. We can delete the rest.
return r(i,x),w;if(null===x){
// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!C.done;_++,C=b.next()){var P=d(i,C.value,c);null!==P&&(T=a(P,T,_),null===k?
// TODO: Move out of the loop. This only happens for the first run.
w=P:k.sibling=P,k=P)}return w}
// Keep scanning and use the map to restore deleted items as moves.
for(
// Add all children to a key map for quick lookups.
var R=o(i,x);!C.done;_++,C=b.next()){var O=m(R,i,_,C.value,c);null!==O&&(e&&null!==O.alternate&&
// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
R.delete(null===O.key?_:O.key),T=a(O,T,_),null===k?w=O:k.sibling=O,k=O)}
// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
return e&&R.forEach(function(e){return n(i,e)}),w}function g(e,t,n,o){
// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(null!==t&&t.tag===zs){
// We already have an existing node so let's just update it and delete
// the rest.
r(e,t.sibling);var a=i(t,n,o);return a.return=e,a}
// The existing first child is not a text node so we need to create one
// and delete the existing ones.
r(e,t);var l=bi(n,e.mode,o);return l.return=e,l}function b(e,t,o,a){for(var l=o.key,u=t;null!==u;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(u.key===l){if(u.tag===Ls?o.type===hp:u.elementType===o.type){r(e,u.sibling);var c=i(u,o.type===hp?o.props.children:o.props,a);return c.ref=$i(e,u,o),c.return=e,c._debugSource=o._source,c._debugOwner=o._owner,c}r(e,u);break}n(e,u),u=u.sibling}if(o.type===hp){var s=hi(o.props.children,e.mode,a,o.key);return s.return=e,s}var f=mi(o,e.mode,a);return f.ref=$i(e,t,o),f.return=e,f}function w(e,t,o,a){for(var l=o.key,u=t;null!==u;){
// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(u.key===l){if(u.tag===Us&&u.stateNode.containerInfo===o.containerInfo&&u.stateNode.implementation===o.implementation){r(e,u.sibling);var c=i(u,o.children||[],a);return c.return=e,c}r(e,u);break}n(e,u),u=u.sibling}var s=ki(o,e.mode,a);return s.return=e,s}
// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function k(e,n,o,i){
// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var a="object"==typeof o&&null!==o&&o.type===hp&&null===o.key;a&&(o=o.props.children);
// Handle object types
var u="object"==typeof o&&null!==o;if(u)switch(o.$$typeof){case pp:return l(b(e,n,o,i));case mp:return l(w(e,n,o,i))}if("string"==typeof o||"number"==typeof o)return l(g(e,n,""+o,i));if(vb(o))return v(e,n,o,i);if(Re(o))return y(e,n,o,i);if(u&&Yi(e,o),"function"==typeof o&&Qi(),void 0===o&&!a)
// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(e.tag){case Is:if(e.stateNode.render._isMockFunction)
// We allow auto-mocks to proceed as if they're returning null.
break;
// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case Ns:var c=e.type;t(!1,"%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.",c.displayName||c.name||"Component")}
// Remaining cases are all treated as empty.
return r(e,n)}return k}function Xi(e,n){if(null!==e&&n.child!==e.child&&t(!1,"Resuming work not yet implemented."),null!==n.child){var r=n.child,o=fi(r,r.pendingProps,r.expirationTime);for(n.child=o,o.return=n;null!==r.sibling;)r=r.sibling,o=o.sibling=fi(r,r.pendingProps,r.expirationTime),o.return=n;o.sibling=null}}function Gi(e){return e===bb&&t(!1,"Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),e}function Ji(){return Gi(xb.current)}function Zi(e,t){
// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
Ao(xb,t,e),
// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
Ao(kb,e,e),
// Finally, we need to push the host context to the stack.
// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
Ao(wb,bb,e);var n=xr(t);
// Now that we know this function doesn't throw, replace it.
Uo(wb,e),Ao(wb,n,e)}function ea(e){Uo(wb,e),Uo(kb,e),Uo(xb,e)}function ta(){return Gi(wb.current)}function na(e){var t=Gi(xb.current),n=Gi(wb.current),r=Tr(n,e.type,t);
// Don't push this Fiber's context unless it's unique.
n!==r&&(
// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
Ao(kb,e,e),Ao(wb,r,e))}function ra(e){
// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
kb.current===e&&(Uo(wb,e),Uo(kb,e))}function oa(){var e=Yb;null===Qb?Qb=[e]:Qb.push(e)}function ia(){var e=Yb;null!==Qb&&(Kb++,Qb[Kb]!==e&&aa(e))}function aa(e){var t=Ie(Mb.type);if(!Ib.has(t)&&(Ib.add(t),null!==Qb)){for(var n="",r=0;r<=Kb;r++){
// Extra space so second column lines up
// lol @ IE not supporting String#repeat
for(var o=Qb[r],i=r===Kb?e:o,a=r+1+". "+o;a.length<30;)a+=" ";a+=i+"\n",n+=a}Mp(!1,"React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",t,n)}}function la(){t(!1,"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.")}function ua(e,t){if(null===t)return Mp(!1,"%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",Yb),!1;
// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
e.length!==t.length&&Mp(!1,"The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",Yb,"["+e.join(", ")+"]","["+t.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function ca(e,n,r,o,i,a){Db=a,Mb=n,Ab=null!==e?e.memoizedState:null,Qb=null!==e?e._debugHookTypes:null,Kb=-1,Nb.current=null!==Ab?tw:null!==Qb?ew:Zb;var l=r(o,i);if(Vb){do{Vb=!1,qb+=1,
// Start over from the beginning of the list
Ab=null!==e?e.memoizedState:null,Wb=zb,Ub=null,Lb=null,jb=null,
// Also validate hook order for cascading updates.
Kb=-1,Nb.current=tw,l=r(o,i)}while(Vb);Hb=null,qb=0}
// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
Nb.current=Jb;var u=Mb;u.memoizedState=zb,u.expirationTime=Fb,u.updateQueue=jb,u.effectTag|=Bb,u._debugHookTypes=Qb;
// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var c=null!==Ub&&null!==Ub.next;
// These were reset above
// didScheduleRenderPhaseUpdate = false;
// renderPhaseUpdates = null;
// numberOfReRenders = 0;
return Db=pg,Mb=null,Ub=null,Ab=null,zb=null,Lb=null,Wb=null,Yb=null,Qb=null,Kb=-1,Fb=pg,jb=null,Bb=0,c&&t(!1,"Rendered fewer hooks than expected. This may be caused by an accidental early return statement."),l}function sa(e,t,n){t.updateQueue=e.updateQueue,t.effectTag&=~(Hm|Am),e.expirationTime<=n&&(e.expirationTime=pg)}function fa(){
// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
Nb.current=Jb,
// This is used to reset the state of this module when a component throws.
// It's also called inside mountIndeterminateComponent if we determine the
// component is a module-style component.
Db=pg,Mb=null,Ub=null,Ab=null,zb=null,Lb=null,Wb=null,Qb=null,Kb=-1,Yb=null,Fb=pg,jb=null,Bb=0,Vb=!1,Hb=null,qb=0}function da(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};
// This is the first hook in the list
// Append to the end of the list
return null===Lb?zb=Lb=e:Lb=Lb.next=e,Lb}function pa(){
// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
if(null!==Wb)
// There's already a work-in-progress. Reuse it.
Lb=Wb,Wb=Lb.next,Ub=Ab,Ab=null!==Ub?Ub.next:null;else{
// Clone from the current hook.
null===Ab&&t(!1,"Rendered more hooks than during the previous render."),Ub=Ab;var e={memoizedState:Ub.memoizedState,baseState:Ub.baseState,queue:Ub.queue,baseUpdate:Ub.baseUpdate,next:null};
// This is the first hook in the list.
Lb=null===Lb?zb=e:Lb.next=e,Ab=Ub.next}return Lb}function ma(){return{lastEffect:null}}function ha(e,t){return"function"==typeof t?t(e):t}function va(e,t,n){var r=da(),o=void 0;o=void 0!==n?n(t):t,r.memoizedState=r.baseState=o;var i=r.queue={last:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a=i.dispatch=za.bind(null,
// Flow doesn't know this is non-null, but we do.
Mb,i);return[r.memoizedState,a]}function ya(e,n,r){var o=pa(),i=o.queue;if(null===i&&t(!1,"Should have a queue. This is likely a bug in React. Please file an issue."),i.lastRenderedReducer=e,qb>0){
// This is a re-render. Apply the new render phase updates to the previous
var a=i.dispatch;if(null!==Hb){
// Render phase updates are stored in a map of queue -> linked list
var l=Hb.get(i);if(void 0!==l){Hb.delete(i);var u=o.memoizedState,c=l;do{u=e(u,c.action),c=c.next}while(null!==c);
// Mark that the fiber performed work, but only if the new state is
// different from the current state.
// Don't persist the state accumlated from the render phase updates to
// the base state unless the queue is empty.
// TODO: Not sure if this is the desired semantics, but it's what we
// do for gDSFP. I can't remember why.
return Tt(u,o.memoizedState)||Cl(),o.memoizedState=u,o.baseUpdate===i.last&&(o.baseState=u),i.lastRenderedState=u,[u,a]}}return[o.memoizedState,a]}
// The last update in the entire queue
var s=i.last,f=o.baseUpdate,d=o.baseState,p=void 0;if(null!==f?(null!==s&&(
// For the first update, the queue is a circular linked list where
// `queue.last.next = queue.first`. Once the first update commits, and
// the `baseUpdate` is no longer empty, we can unravel the list.
s.next=null),p=f.next):p=null!==s?s.next:null,null!==p){var m=d,h=null,v=null,y=f,g=p,b=!1;do{var w=g.expirationTime;if(w<Db)
// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
b||(b=!0,v=y,h=m),
// Update the remaining priority in the queue.
w>Fb&&(Fb=w);else
// Process this update.
if(g.eagerReducer===e)
// If this update was processed eagerly, and its reducer matches the
// current reducer, we can use the eagerly computed state.
m=g.eagerState;else{var k=g.action;m=e(m,k)}y=g,g=g.next}while(null!==g&&g!==p);b||(v=y,h=m),
// Mark that the fiber performed work, but only if the new state is
// different from the current state.
Tt(m,o.memoizedState)||Cl(),o.memoizedState=m,o.baseUpdate=v,o.baseState=h,i.lastRenderedState=m}var x=i.dispatch;return[o.memoizedState,x]}function ga(e){var t=da();"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e;var n=t.queue={last:null,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},r=n.dispatch=za.bind(null,
// Flow doesn't know this is non-null, but we do.
Mb,n);return[t.memoizedState,r]}function ba(e){return ya(ha,e)}function wa(e,t,n,r){var o={tag:e,create:t,destroy:n,deps:r,
// Circular
next:null};if(null===jb)jb=ma(),jb.lastEffect=o.next=o;else{var i=jb.lastEffect;if(null===i)jb.lastEffect=o.next=o;else{var a=i.next;i.next=o,o.next=a,jb.lastEffect=o}}return o}function ka(e){var t=da(),n={current:e};return Object.seal(n),t.memoizedState=n,n}function xa(e){return pa().memoizedState}function Ta(e,t,n,r){var o=da(),i=void 0===r?null:r;Bb|=e,o.memoizedState=wa(t,n,void 0,i)}function _a(e,t,n,r){var o=pa(),i=void 0===r?null:r,a=void 0;if(null!==Ub){var l=Ub.memoizedState;if(a=l.destroy,null!==i){if(ua(i,l.deps))return void wa(Tb,n,a,i)}}Bb|=e,o.memoizedState=wa(t,n,a,i)}function Sa(e,t){return Ta(Am|Hm,Ob|Rb,e,t)}function Ca(e,t){return _a(Am|Hm,Ob|Rb,e,t)}function Ea(e,t){return Ta(Am,Sb|Pb,e,t)}function Pa(e,t){return _a(Am,Sb|Pb,e,t)}function Ra(e,t){if("function"==typeof t){var n=t,r=e();return n(r),function(){n(null)}}if(null!==t&&void 0!==t){var o=t;o.hasOwnProperty("current")||Mp(!1,"Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}");var i=e();return o.current=i,function(){o.current=null}}}function Oa(e,t,n){"function"!=typeof t&&Mp(!1,"Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");
// TODO: If deps are provided, should we skip comparing the ref itself?
var r=null!==n&&void 0!==n?n.concat([e]):null;return Ta(Am,Sb|Pb,Ra.bind(null,t,e),r)}function Na(e,t,n){"function"!=typeof t&&Mp(!1,"Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");
// TODO: If deps are provided, should we skip comparing the ref itself?
var r=null!==n&&void 0!==n?n.concat([e]):null;return _a(Am,Sb|Pb,Ra.bind(null,t,e),r)}function Ia(e,t){}function Da(e,t){var n=da(),r=void 0===t?null:t;return n.memoizedState=[e,r],e}function Ma(e,t){var n=pa(),r=void 0===t?null:t,o=n.memoizedState;if(null!==o&&null!==r){if(ua(r,o[1]))return o[0]}return n.memoizedState=[e,r],e}function Ua(e,t){var n=da(),r=void 0===t?null:t,o=e();return n.memoizedState=[o,r],o}function Aa(e,t){var n=pa(),r=void 0===t?null:t,o=n.memoizedState;if(null!==o&&null!==r){if(ua(r,o[1]))return o[0]}var i=e();return n.memoizedState=[i,r],i}function za(e,n,r){qb<$b||t(!1,"Too many re-renders. React limits the number of renders to prevent an infinite loop."),arguments.length<=3||Mp(!1,"State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var o=e.alternate;if(e===Mb||null!==o&&o===Mb){
// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
Vb=!0;var i={expirationTime:Db,action:r,eagerReducer:null,eagerState:null,next:null};null===Hb&&(Hb=new Map);var a=Hb.get(n);if(void 0===a)Hb.set(n,i);else{for(
// Append the update to the end of the list.
var l=a;null!==l.next;)l=l.next;l.next=i}}else{Vu();var u=vc(),c=Zu(u,e),s={expirationTime:c,action:r,eagerReducer:null,eagerState:null,next:null},f=n.last;if(null===f)
// This is the first update. Create a circular list.
s.next=s;else{var d=f.next;null!==d&&(
// Still circular.
s.next=d),f.next=s}if(n.last=s,e.expirationTime===pg&&(null===o||o.expirationTime===pg)){
// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var p=n.lastRenderedReducer;if(null!==p){var m=void 0;m=Nb.current,Nb.current=rw;try{var h=n.lastRenderedState,v=p(h,r);if(
// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
s.eagerReducer=p,s.eagerState=v,Tt(v,h))
// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
return}catch(e){}finally{Nb.current=m}}}!0===Gb&&ic(e),ac(e,c)}}function La(){return aw}function Wa(){am&&(aw=rs.unstable_now())}function Fa(e){am&&(lw=rs.unstable_now(),e.actualStartTime<0&&(e.actualStartTime=rs.unstable_now()))}function ja(e){am&&(lw=-1)}function Ba(e,t){if(am&&lw>=0){var n=rs.unstable_now()-lw;e.actualDuration+=n,t&&(e.selfBaseDuration=n),lw=-1}}function Va(e){if(!Ey)return!1;var t=e.stateNode.containerInfo;return cw=eo(t),uw=e,sw=!0,!0}function Ha(e){if(!Ey)return!1;var t=e.stateNode;return cw=Zr(t),Ja(e),sw=!0,!0}function qa(e,t){switch(e.tag){case Ms:ao(e.stateNode.containerInfo,t);break;case As:lo(e.type,e.memoizedProps,e.stateNode,t)}var n=wi();n.stateNode=t,n.return=e,n.effectTag=Lm,
// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function $a(e,t){switch(t.effectTag|=Um,e.tag){case Ms:var n=e.stateNode.containerInfo;switch(t.tag){case As:uo(n,t.type,t.pendingProps);break;case zs:co(n,t.pendingProps)}break;case As:var r=e.type,o=e.memoizedProps,i=e.stateNode;switch(t.tag){case As:so(r,o,i,t.type,t.pendingProps);break;case zs:fo(r,o,i,t.pendingProps);break;case Hs:po(r,o,i)}break;default:return}}function Ya(e,t){switch(e.tag){case As:var n=e.type,r=e.pendingProps,o=Xr(t,n,r);return null!==o&&(e.stateNode=o,!0);case zs:var i=e.pendingProps,a=Gr(t,i);return null!==a&&(e.stateNode=a,!0);case Hs:if(um){var l=Jr(t);if(null!==l)
// Downgrade the tag to a dehydrated component until we've hydrated it.
return e.tag=Ks,e.stateNode=l,!0}return!1;default:return!1}}function Qa(e){if(sw){var t=cw;if(!t)
// Nothing to hydrate. Make it an insertion.
return $a(uw,e),sw=!1,void(uw=e);var n=t;if(!Ya(e,t)){if(!(
// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
t=Zr(n))||!Ya(e,t))
// Nothing to hydrate. Make it an insertion.
return $a(uw,e),sw=!1,void(uw=e);
// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
qa(uw,n)}uw=e,cw=eo(t)}}function Ka(e,n,r){Ey||t(!1,"Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var o=e.stateNode,i=to(o,e.type,e.memoizedProps,n,r,e);
// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
// TODO: Type this specific to this type of component.
return e.updateQueue=i,null!==i}function Xa(e){Ey||t(!1,"Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var n=e.stateNode,r=e.memoizedProps,o=no(n,r,e);if(o){
// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var i=uw;if(null!==i)switch(i.tag){case Ms:oo(i.stateNode.containerInfo,n,r);break;case As:io(i.type,i.memoizedProps,i.stateNode,n,r)}}return o}function Ga(e){Ey||t(!1,"Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");var n=e.stateNode;n||t(!1,"Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."),cw=ro(n)}function Ja(e){for(var t=e.return;null!==t&&t.tag!==As&&t.tag!==Ms&&t.tag!==Ks;)t=t.return;uw=t}function Za(e){if(!Ey)return!1;if(e!==uw)
// We're deeper than the current hydration context, inside an inserted
// tree.
return!1;if(!sw)
// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
return Ja(e),sw=!0,!1;var t=e.type;
// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(e.tag!==As||"head"!==t&&"body"!==t&&!Nr(t,e.memoizedProps))for(var n=cw;n;)qa(e,n),n=Zr(n);return Ja(e),cw=uw?Zr(e.stateNode):null,!0}function el(){Ey&&(uw=null,cw=null,sw=!1)}function tl(e,t,n,r){
// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
t.child=null===e?gb(t,null,n,r):yb(t,e.child,n,r)}function nl(e,t,n,r){
// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
//
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
t.child=yb(t,e.child,null,r),
// In the second pass, we mount the new children. The trick here is that we
// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their their
// identity matches.
t.child=yb(t,null,n,r)}function rl(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var i=n.propTypes;i&&ns(i,r,// Resolved props
"prop",Ie(n),Ae)}var a=n.render,l=t.ref,u=void 0;
// React DevTools reads this flag.
return zl(t,o),fw.current=t,We("render"),u=ca(e,t,a,r,l,o),(nm||rm&&t.mode&_g)&&null!==t.memoizedState&&(u=ca(e,t,a,r,l,o)),We(null),null===e||dw?(t.effectTag|=Mm,tl(e,t,u,o),t.child):(sa(e,t,o),El(e,t,o))}function ol(e,t,n,r,o,i){if(null===e){var a=n.type;if(ci(a)&&null===n.compare&&
// SimpleMemoComponent codepath doesn't resolve outer props either.
void 0===n.defaultProps)
// If this is a plain function component without default props,
// and with only the default shallow comparison, we upgrade it
// to a SimpleMemoComponent to allow fast path updates.
return t.tag=$s,t.type=a,wl(t,a),il(e,t,a,r,o,i);var l=a.propTypes;l&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
ns(l,r,// Resolved props
"prop",Ie(a),Ae);var u=pi(n.type,null,r,null,t.mode,i);return u.ref=t.ref,u.return=t,t.child=u,u}var c=n.type,s=c.propTypes;s&&
// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
ns(s,r,// Resolved props
"prop",Ie(c),Ae);var f=e.child;// This is always exactly one child
if(o<i){
// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var d=f.memoizedProps,p=n.compare;if((p=null!==p?p:_t)(d,r)&&e.ref===t.ref)return El(e,t,i)}
// React DevTools reads this flag.
t.effectTag|=Mm;var m=fi(f,r,i);return m.ref=t.ref,m.return=t,t.child=m,m}function il(e,t,n,r,o,i){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var a=t.elementType;a.$$typeof===_p&&(
// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
a=Oe(a));var l=a&&a.propTypes;l&&ns(l,r,// Resolved (SimpleMemoComponent has no defaultProps)
"prop",Ie(a),Ae)}if(null!==e){if(_t(e.memoizedProps,r)&&e.ref===t.ref&&(dw=!1,o<i))return El(e,t,i)}return sl(e,t,n,r,i)}function al(e,t,n){return tl(e,t,t.pendingProps,n),t.child}function ll(e,t,n){return tl(e,t,t.pendingProps.children,n),t.child}function ul(e,t,n){return am&&(t.effectTag|=Am),tl(e,t,t.pendingProps.children,n),t.child}function cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(
// Schedule a Ref effect
t.effectTag|=Bm)}function sl(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var i=n.propTypes;i&&ns(i,r,// Resolved props
"prop",Ie(n),Ae)}var a=Wo(t,n,!0),l=jo(t,a),u=void 0;
// React DevTools reads this flag.
return zl(t,o),fw.current=t,We("render"),u=ca(e,t,n,r,l,o),(nm||rm&&t.mode&_g)&&null!==t.memoizedState&&(u=ca(e,t,n,r,l,o)),We(null),null===e||dw?(t.effectTag|=Mm,tl(e,t,u,o),t.child):(sa(e,t,o),El(e,t,o))}function fl(e,t,n,r,o){if(t.type!==t.elementType){
// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var i=n.propTypes;i&&ns(i,r,// Resolved props
"prop",Ie(n),Ae)}
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var a=void 0;Vo(n)?(a=!0,Qo(t)):a=!1,zl(t,o);var l=t.stateNode,u=void 0;null===l?(null!==e&&(
// An class component without an instance only mounts if it suspended
// inside a non- concurrent tree, in an inconsistent state. We want to
// tree it like a new mount, even though an empty version of it already
// committed. Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,
// Since this is conceptually a new fiber, schedule a Placement effect
t.effectTag|=Um),
// In the initial pass we might need to construct the instance.
Fi(t,n,r,o),Vi(t,n,r,o),u=!0):
// In a resume, we'll already have an instance we can reuse.
u=null===e?Hi(t,n,r,o):qi(e,t,n,r,o);var c=dl(e,t,n,u,a,o);return t.stateNode.props!==r&&(yw||Mp(!1,"It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",Ie(t.type)||"a component"),yw=!0),c}function dl(e,t,n,r,o,i){
// Refs should update even if shouldComponentUpdate returns false
cl(e,t);var a=(t.effectTag&jm)!==Dm;if(!r&&!a)
// Context providers should defer to sCU for rendering
return o&&Ko(t,n,!1),El(e,t,i);var l=t.stateNode;
// Rerender
fw.current=t;var u=void 0;
// If we captured an error, but getDerivedStateFrom catch is not defined,
// unmount all the children. componentDidCatch will schedule an update to
// re-render a fallback. This is temporary until we migrate everyone to
// the new API.
// TODO: Warn in a future release.
// React DevTools reads this flag.
// If we're recovering from an error, reconcile without reusing any of
// the existing children. Conceptually, the normal children and the children
// that are shown on error are two different sets, so we shouldn't reuse
// normal children even if their identities match.
// Memoize state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
// The context might have changed so we need to recalculate it.
return a&&"function"!=typeof n.getDerivedStateFromError?(u=null,am&&ja(t)):(We("render"),u=l.render(),(nm||rm&&t.mode&_g)&&l.render(),We(null)),t.effectTag|=Mm,null!==e&&a?nl(e,t,u,i):tl(e,t,u,i),t.memoizedState=l.state,o&&Ko(t,n,!0),t.child}function pl(e){var t=e.stateNode;t.pendingContext?$o(e,t.pendingContext,t.pendingContext!==t.context):t.context&&
// Should always be set
$o(e,t.context,!1),Zi(e,t.containerInfo)}function ml(e,n,r){pl(n);var o=n.updateQueue;null===o&&t(!1,"If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");var i=n.pendingProps,a=n.memoizedState,l=null!==a?a.element:null;Yl(n,o,i,null,r);var u=n.memoizedState,c=u.element;if(c===l)
// If the state is the same as before, that's a bailout because we had
// no work that expires at this time.
return el(),El(e,n,r);var s=n.stateNode;
// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
// This is a bit of a hack. We track the host root as a placement to
// know that we're currently in a mounting state. That way isMounted
// works as expected. We must reset this before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
// Ensure that children mount into this root without tracking
// side-effects. This ensures that we don't store Placement effects on
// nodes that will be hydrated.
// Otherwise reset hydration state in case we aborted and resumed another
// root.
return(null===e||null===e.child)&&s.hydrate&&Va(n)?(n.effectTag|=Um,n.child=gb(n,null,c,r)):(tl(e,n,c,r),el()),n.child}function hl(e,t,n){na(t),null===e&&Qa(t);var r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,a=o.children;
// Check the host config to see if the children are offscreen/hidden.
// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also have access to this prop. That
// avoids allocating another HostText fiber and traversing it.
// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
// Check the host config to see if the children are offscreen/hidden.
// Schedule this fiber to re-render at offscreen priority. Then bailout.
return Nr(r,o)?a=null:null!==i&&Nr(r,i)&&(t.effectTag|=Wm),cl(e,t),n!==mg&&t.mode&Tg&&Ir(r,o)?(t.expirationTime=t.childExpirationTime=mg,null):(tl(e,t,a,n),t.child)}function vl(e,t){
// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null===e&&Qa(t),null}function yl(e,n,r,o,i){null!==e&&(
// An lazy component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,n.alternate=null,
// Since this is conceptually a new fiber, schedule a Placement effect
n.effectTag|=Um);var a=n.pendingProps;
// We can't start a User Timing measurement with correct label yet.
// Cancel and resume right after we know the tag.
bo(n);var l=Ui(r);
// Store the unwrapped component in the type.
n.type=l;var u=n.tag=si(l);go(n);var c=Mi(l,a),s=void 0;switch(u){case Ns:wl(n,l),s=sl(null,n,l,c,i);break;case Is:s=fl(null,n,l,c,i);break;case Bs:s=rl(null,n,l,c,i);break;case qs:if(n.type!==n.elementType){var f=l.propTypes;f&&ns(f,c,// Resolved for outer only
"prop",Ie(l),Ae)}s=ol(null,n,l,Mi(l.type,c),// The inner type can have defaults too
o,i);break;default:var d="";null!==l&&"object"==typeof l&&l.$$typeof===_p&&(d=" Did you wrap a component in React.lazy() more than once?"),
// This message intentionally doesn't mention ForwardRef or MemoComponent
// because the fact that it's a separate type of work is an
// implementation detail.
t(!1,"Element type is invalid. Received a promise that resolves to: %s. Lazy element type must resolve to a class or function.%s",l,d)}return s}function gl(e,t,n,r,o){null!==e&&(
// An incomplete component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,
// Since this is conceptually a new fiber, schedule a Placement effect
t.effectTag|=Um),
// Promote the fiber to a class and try rendering again.
t.tag=Is;
// The rest of this function is a fork of `updateClassComponent`
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var i=void 0;return Vo(n)?(i=!0,Qo(t)):i=!1,zl(t,o),Fi(t,n,r,o),Vi(t,n,r,o),dl(null,t,n,!0,i,o)}function bl(e,t,n,r){null!==e&&(
// An indeterminate component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,
// Since this is conceptually a new fiber, schedule a Placement effect
t.effectTag|=Um);var o=t.pendingProps,i=Wo(t,n,!1),a=jo(t,i);zl(t,r);var l=void 0;if(n.prototype&&"function"==typeof n.prototype.render){var u=Ie(n)||"Unknown";pw[u]||(xs(!1,"The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",u,u),pw[u]=!0)}if(t.mode&_g&&Ug.recordLegacyContextWarning(t,null),fw.current=t,l=ca(null,t,n,o,a,r),
// React DevTools reads this flag.
t.effectTag|=Mm,"object"==typeof l&&null!==l&&"function"==typeof l.render&&void 0===l.$$typeof){
// Proceed under the assumption that this is a class instance
t.tag=Is,
// Throw out any hooks that were used.
fa();
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var c=!1;Vo(n)?(c=!0,Qo(t)):c=!1,t.memoizedState=null!==l.state&&void 0!==l.state?l.state:null;var s=n.getDerivedStateFromProps;return"function"==typeof s&&Ai(t,n,s,o),Wi(t,l),Vi(t,n,o,r),dl(null,t,n,!0,c,r)}
// Proceed under the assumption that this is a function component
return t.tag=Ns,(nm||rm&&t.mode&_g)&&null!==t.memoizedState&&(l=ca(null,t,n,o,a,r)),tl(null,t,l,r),wl(t,n),t.child}function wl(e,t){if(t&&t.childContextTypes&&xs(!1,"%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),null!==e.ref){var n="",r=Ue();r&&(n+="\n\nCheck the render method of `"+r+"`.");var o=r||e._debugID||"",i=e._debugSource;i&&(o=i.fileName+":"+i.lineNumber),vw[o]||(vw[o]=!0,Mp(!1,"Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if("function"==typeof t.getDerivedStateFromProps){var a=Ie(t)||"Unknown";hw[a]||(xs(!1,"%s: Function components do not support getDerivedStateFromProps.",a),hw[a]=!0)}if("object"==typeof t.contextType&&null!==t.contextType){var l=Ie(t)||"Unknown";mw[l]||(xs(!1,"%s: Function components do not support contextType.",l),mw[l]=!0)}}function kl(e,t,n){var r=t.mode,o=t.pendingProps,i=t.memoizedState,a=void 0;(t.effectTag&jm)===Dm?(
// This is the first attempt.
i=null,a=!1):(
// Something in this boundary's subtree already suspended. Switch to
// rendering the fallback children.
i={timedOutAt:null!==i?i.timedOutAt:pg},a=!0,t.effectTag&=~jm);
// This next part is a bit confusing. If the children timeout, we switch to
// showing the fallback children in place of the "primary" children.
// However, we don't want to delete the primary children because then their
// state will be lost (both the React state and the host state, e.g.
// uncontrolled form inputs). Instead we keep them mounted and hide them.
// Both the fallback children AND the primary children are rendered at the
// same time. Once the primary children are un-suspended, we can delete
// the fallback children — don't need to preserve their state.
//
// The two sets of children are siblings in the host environment, but
// semantically, for purposes of reconciliation, they are two separate sets.
// So we store them using two fragment fibers.
//
// However, we want to avoid allocating extra fibers for every placeholder.
// They're only necessary when the children time out, because that's the
// only time when both sets are mounted.
//
// So, the extra fragment fibers are only used if the children time out.
// Otherwise, we render the primary children directly. This requires some
// custom reconciliation logic to preserve the state of the primary
// children. It's essentially a very basic form of re-parenting.
// `child` points to the child fiber. In the normal case, this is the first
// fiber of the primary children set. In the timed-out case, it's a
// a fragment fiber containing the primary children.
var l=void 0,u=void 0;if(null===e){if(um&&void 0!==o.fallback&&(Qa(t),t.tag===Ks))return xl(null,t,n);
// This is the initial mount. This branch is pretty simple because there's
// no previous state that needs to be preserved.
if(a){
// Mount separate fragments for primary and fallback children.
var c=o.fallback,s=hi(null,r,pg,null);if((t.mode&Tg)===xg){
// Outside of concurrent mode, we commit the effects from the
var f=t.memoizedState,d=null!==f?t.child.child:t.child;s.child=d}var p=hi(c,r,n,null);s.sibling=p,l=s,
// Skip the primary children, and continue working on the
// fallback children.
u=p,l.return=u.return=t}else{
// Mount the primary children without an intermediate fragment fiber.
var m=o.children;l=u=gb(t,null,m,n)}}else{if(null!==e.memoizedState){
// The current tree already timed out. That means each child set is
var h=e.child,v=h.sibling;if(a){
// Still timed out. Reuse the current primary children by cloning
// its fragment. We're going to skip over these entirely.
var y=o.fallback,g=fi(h,h.pendingProps,pg);if((t.mode&Tg)===xg){
// Outside of concurrent mode, we commit the effects from the
var b=t.memoizedState,w=null!==b?t.child.child:t.child;w!==h.child&&(g.child=w)}
// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(am&&t.mode&Sg){for(
// treeBaseDuration is the sum of all the child tree base durations.
var k=0,x=g.child;null!==x;)k+=x.treeBaseDuration,x=x.sibling;g.treeBaseDuration=k}
// Clone the fallback child fragment, too. These we'll continue
// working on.
var T=g.sibling=fi(v,y,v.expirationTime);l=g,g.childExpirationTime=pg,
// Skip the primary children, and continue working on the
// fallback children.
u=T,l.return=u.return=t}else{
// No longer suspended. Switch back to showing the primary children,
// and remove the intermediate fragment fiber.
var _=o.children,S=h.child;
// If this render doesn't suspend, we need to delete the fallback
// children. Wait until the complete phase, after we've confirmed the
// fallback is no longer needed.
// TODO: Would it be better to store the fallback fragment on
// the stateNode?
// Continue rendering the children, like we normally do.
l=u=yb(t,S,_,n)}}else{
// The current tree has not already timed out. That means the primary
// children are not wrapped in a fragment fiber.
var C=e.child;if(a){
// Timed out. Wrap the children in a fragment fiber to keep them
// separate from the fallback children.
var E=o.fallback,P=hi(
// It shouldn't matter what the pending props are because we aren't
// going to render this fragment.
null,r,pg,null);
// Even though we're creating a new fiber, there are no new children,
// because we're reusing an already mounted tree. So we don't need to
// schedule a placement.
// primaryChildFragment.effectTag |= Placement;
if(P.child=C,(t.mode&Tg)===xg){
// Outside of concurrent mode, we commit the effects from the
var R=t.memoizedState,O=null!==R?t.child.child:t.child;P.child=O}
// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(am&&t.mode&Sg){for(
// treeBaseDuration is the sum of all the child tree base durations.
var N=0,I=P.child;null!==I;)N+=I.treeBaseDuration,I=I.sibling;P.treeBaseDuration=N}
// Create a fragment from the fallback children, too.
var D=P.sibling=hi(E,r,n,null);D.effectTag|=Um,l=P,P.childExpirationTime=pg,
// Skip the primary children, and continue working on the
// fallback children.
u=D,l.return=u.return=t}else{
// Still haven't timed out.  Continue rendering the children, like we
// normally do.
var M=o.children;u=l=yb(t,C,M,n)}}t.stateNode=e.stateNode}return t.memoizedState=i,t.child=l,u}function xl(e,n,r){if(null===e)
// During the first pass, we'll bail out and not drill into the children.
// Instead, we'll leave the content in place and try to hydrate it later.
return n.expirationTime=mg,null;
// We use childExpirationTime to indicate that a child might depend on context, so if
// any context has changed, we need to treat is as if the input might have changed.
var o=e.childExpirationTime>=r;if(dw||o){
// This boundary has changed since the first render. This means that we are now unable to
// hydrate it. We might still be able to hydrate it using an earlier expiration time but
// during this render we can't. Instead, we're going to delete the whole subtree and
// instead inject a new real Suspense boundary to take its place, which may render content
// or fallback. The real Suspense boundary will suspend for a while so we have some time
// to ensure it can produce real content, but all state and pending events will be lost.
// Detach from the current dehydrated boundary.
e.alternate=null,n.alternate=null;
// Insert a deletion in the effect list.
var i=n.return;null===i&&t(!1,"Suspense boundaries are never on the root. This is probably a bug in React.");var a=i.lastEffect;
// Retry as a real Suspense component.
// Upgrade this work in progress to a real Suspense component.
// This is now an insertion.
return null!==a?(a.nextEffect=e,i.lastEffect=e):i.firstEffect=i.lastEffect=e,e.nextEffect=null,e.effectTag=Lm,n.tag=Hs,n.stateNode=null,n.memoizedState=null,n.effectTag|=Um,kl(null,n,r)}if((n.effectTag&jm)===Dm){
// This is the first attempt.
Ha(n);var l=n.pendingProps,u=l.children;return n.child=gb(n,null,u,r),n.child}
// Something suspended. Leave the existing children in place.
// TODO: In non-concurrent mode, should we commit the nodes we have hydrated so far?
return n.child=null,null}function Tl(e,t,n){Zi(t,t.stateNode.containerInfo);var r=t.pendingProps;
// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
return null===e?t.child=yb(t,null,r,n):tl(e,t,r,n),t.child}function _l(e,t,n){var r=t.type,o=r._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,u=t.type.propTypes;if(u&&ns(u,i,"prop","Context.Provider",Ae),Il(t,l),null!==a){var c=a.value,s=Ml(o,l,c);if(0===s){
// No change. Bailout early if children are the same.
if(a.children===i.children&&!Bo())return El(e,t,n)}else
// The context value changed. Search for matching consumers and schedule
// them to update.
Al(t,o,s,n)}return tl(e,t,i.children,n),t.child}function Sl(e,t,n){var r=t.type;void 0===r._context?
// This may be because it's a Context (rather than a Consumer).
// Or it may be because it's older React where they're the same thing.
// We only want to warn if we're sure it's a new React.
r!==r.Consumer&&(gw||(gw=!0,Mp(!1,"Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):r=r._context;var o=t.pendingProps,i=o.children;"function"!=typeof i&&xs(!1,"A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),zl(t,n);var a=Ll(r,o.unstable_observedBits),l=void 0;
// React DevTools reads this flag.
return fw.current=t,We("render"),l=i(a),We(null),t.effectTag|=Mm,tl(e,t,l,n),t.child}function Cl(){dw=!0}function El(e,t,n){
// Reuse previous context list
// Don't update "base" render times for bailouts.
// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
return bo(t),null!==e&&(t.contextDependencies=e.contextDependencies),am&&ja(t),t.childExpirationTime<n?null:(Xi(e,t),t.child)}function Pl(e,n,r){var o=n.expirationTime;if(null!==e){if(e.memoizedProps!==n.pendingProps||Bo())
// If props or context changed, mark the fiber as having performed work.
// This may be unset if the props are determined to be equal later (memo).
dw=!0;else if(o<r){
// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(dw=!1,n.tag){case Ms:pl(n),el();break;case As:na(n);break;case Is:var i=n.type;Vo(i)&&Qo(n);break;case Us:Zi(n,n.stateNode.containerInfo);break;case js:var a=n.memoizedProps.value;Il(n,a);break;case Vs:am&&(n.effectTag|=Am);break;case Hs:var l=n.memoizedState,u=null!==l;if(u){
// If this boundary is currently timed out, we need to decide
// whether to retry the primary children, or to skip over it and
// go straight to the fallback. Check the priority of the primary
var c=n.child,s=c.childExpirationTime;if(s!==pg&&s>=r)
// The primary children have pending work. Use the normal path
// to attempt to render the primary children again.
return kl(e,n,r);
// The primary children do not have pending work with sufficient
// priority. Bailout.
var f=El(e,n,r);return null!==f?f.sibling:null}break;case Ks:if(um){
// We know that this component will suspend again because if it has
// been unsuspended it has committed as a regular Suspense component.
// If it needs to be retried, it should have work scheduled on it.
n.effectTag|=jm;break}}return El(e,n,r)}}else dw=!1;switch(
// Before entering the begin phase, clear the expiration time.
n.expirationTime=pg,n.tag){case Ds:return bl(e,n,n.elementType,r);case Ys:return yl(e,n,n.elementType,o,r);case Ns:var d=n.type,p=n.pendingProps;return sl(e,n,d,n.elementType===d?p:Mi(d,p),r);case Is:var m=n.type,h=n.pendingProps;return fl(e,n,m,n.elementType===m?h:Mi(m,h),r);case Ms:return ml(e,n,r);case As:return hl(e,n,r);case zs:return vl(e,n);case Hs:return kl(e,n,r);case Us:return Tl(e,n,r);case Bs:var v=n.type,y=n.pendingProps;return rl(e,n,v,n.elementType===v?y:Mi(v,y),r);case Ls:return al(e,n,r);case Ws:return ll(e,n,r);case Vs:return ul(e,n,r);case js:return _l(e,n,r);case Fs:return Sl(e,n,r);case qs:var g=n.type,b=n.pendingProps,w=Mi(g,b);if(n.type!==n.elementType){var k=g.propTypes;k&&ns(k,w,// Resolved for outer only
"prop",Ie(g),Ae)}return w=Mi(g.type,w),ol(e,n,g,w,o,r);case $s:return il(e,n,n.type,n.pendingProps,o,r);case Qs:var x=n.type,T=n.pendingProps;return gl(e,n,x,n.elementType===x?T:Mi(x,T),r);case Ks:if(um)return xl(e,n,r)}t(!1,"Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.")}function Rl(){
// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
kw=null,xw=null,Tw=null,_w=!1}function Ol(){_w=!0}function Nl(){_w=!1}function Il(e,t){var n=e.type._context;wy?(Ao(bw,n._currentValue,e),n._currentValue=t,void 0!==n._currentRenderer&&null!==n._currentRenderer&&n._currentRenderer!==ww&&xs(!1,"Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),n._currentRenderer=ww):(Ao(bw,n._currentValue2,e),n._currentValue2=t,void 0!==n._currentRenderer2&&null!==n._currentRenderer2&&n._currentRenderer2!==ww&&xs(!1,"Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),n._currentRenderer2=ww)}function Dl(e){var t=bw.current;Uo(bw,e);var n=e.type._context;wy?n._currentValue=t:n._currentValue2=t}function Ml(e,t,n){if(Tt(n,t))
// No change
return 0;var r="function"==typeof e._calculateChangedBits?e._calculateChangedBits(n,t):dg;return(r&dg)!==r&&Mp(!1,"calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s",r),0|r}function Ul(e,t){for(
// Update the child expiration time of all the ancestors, including
// the alternates.
var n=e;null!==n;){var r=n.alternate;if(n.childExpirationTime<t)n.childExpirationTime=t,null!==r&&r.childExpirationTime<t&&(r.childExpirationTime=t);else{if(!(null!==r&&r.childExpirationTime<t))
// Neither alternate was updated, which means the rest of the
// ancestor path already has sufficient priority.
break;r.childExpirationTime=t}n=n.return}}function Al(e,t,n,r){var o=e.child;for(null!==o&&(
// Set the return pointer of the child to the work-in-progress fiber.
o.return=e);null!==o;){var i=void 0,a=o.contextDependencies;if(null!==a){i=o.child;for(var l=a.first;null!==l;){
// Check if the context matches.
if(l.context===t&&0!=(l.observedBits&n)){
// Match! Schedule an update on this fiber.
if(o.tag===Is){
// Schedule a force update on the work-in-progress.
var u=jl(r);u.tag=Ew,
// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
Vl(o,u)}o.expirationTime<r&&(o.expirationTime=r);var c=o.alternate;null!==c&&c.expirationTime<r&&(c.expirationTime=r),Ul(o.return,r),
// Mark the expiration time on the list, too.
a.expirationTime<r&&(a.expirationTime=r);
// Since we already found a match, we can stop traversing the
// dependency list.
break}l=l.next}}else if(o.tag===js)
// Don't scan deeper if this is a matching provider
i=o.type===e.type?null:o.child;else if(um&&o.tag===Ks){
// If a dehydrated suspense component is in this subtree, we don't know
// if it will have any context consumers in it. The best we can do is
// mark it as having updates on its children.
o.expirationTime<r&&(o.expirationTime=r);var s=o.alternate;null!==s&&s.expirationTime<r&&(s.expirationTime=r),
// This is intentionally passing this fiber as the parent
// because we want to schedule this fiber as having work
// on its children. We'll use the childExpirationTime on
// this fiber to indicate that a context has changed.
Ul(o,r),i=o.sibling}else
// Traverse down.
i=o.child;if(null!==i)
// Set the return pointer of the child to the work-in-progress fiber.
i.return=o;else for(
// No child. Traverse to next sibling.
i=o;null!==i;){if(i===e){
// We're back to the root of this subtree. Exit.
i=null;break}var f=i.sibling;if(null!==f){
// Set the return pointer of the sibling to the work-in-progress fiber.
f.return=i.return,i=f;break}
// No more siblings. Traverse up.
i=i.return}o=i}}function zl(e,t){kw=e,xw=null,Tw=null;var n=e.contextDependencies;null!==n&&n.expirationTime>=t&&
// Context list has a pending update. Mark that this fiber performed work.
Cl(),
// Reset the work-in-progress list
e.contextDependencies=null}function Ll(e,n){if(
// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
_w&&Mp(!1,"Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),Tw===e);else if(!1===n||0===n);else{var r=void 0;// Avoid deopting on observable arguments or heterogeneous types.
"number"!=typeof n||n===dg?(
// Observe all updates.
Tw=e,r=dg):r=n;var o={context:e,observedBits:r,next:null};null===xw?(null===kw&&t(!1,"Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),
// This is the first dependency for this component. Create a new list.
xw=o,kw.contextDependencies={first:o,expirationTime:pg}):
// Append a new context item.
xw=xw.next=o}return wy?e._currentValue:e._currentValue2}function Wl(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Fl(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,
// TODO: With resuming, if we bail out and resuse the child tree, we should
// keep these effects.
firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function jl(e){return{expirationTime:e,tag:Sw,payload:null,callback:null,next:null,nextEffect:null}}function Bl(e,t){
// Append the update to the end of the list.
null===e.lastUpdate?
// Queue is empty
e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function Vl(e,t){
// Update queues are created lazily.
var n=e.alternate,r=void 0,o=void 0;null===n?(
// There's only one fiber.
r=e.updateQueue,o=null,null===r&&(r=e.updateQueue=Wl(e.memoizedState))):(
// There are two owners.
r=e.updateQueue,o=n.updateQueue,null===r?null===o?(
// Neither fiber has an update queue. Create new ones.
r=e.updateQueue=Wl(e.memoizedState),o=n.updateQueue=Wl(n.memoizedState)):
// Only one fiber has an update queue. Clone to create a new one.
r=e.updateQueue=Fl(o):null===o&&(
// Only one fiber has an update queue. Clone to create a new one.
o=n.updateQueue=Fl(r))),null===o||r===o?
// There's only a single queue.
Bl(r,t):
// There are two queues. We need to append the update to both queues,
// while accounting for the persistent structure of the list — we don't
// want the same update to be added multiple times.
null===r.lastUpdate||null===o.lastUpdate?(
// One of the queues is not empty. We must add the update to both queues.
Bl(r,t),Bl(o,t)):(
// Both queues are non-empty. The last update is the same in both lists,
// because of structural sharing. So, only append to one of the lists.
Bl(r,t),
// But we still need to update the `lastUpdate` pointer of queue2.
o.lastUpdate=t),e.tag!==Is||Nw!==r&&(null===o||Nw!==o)||Ow||(xs(!1,"An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),Ow=!0)}function Hl(e,t){
// Captured updates go into a separate list, and only on the work-in-
// progress queue.
var n=e.updateQueue;n=null===n?e.updateQueue=Wl(e.memoizedState):ql(e,n),
// Append the update to the end of the list.
null===n.lastCapturedUpdate?
// This is the first render phase update
n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function ql(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=Fl(t)),t}function $l(e,t,n,r,o,i){switch(n.tag){case Cw:var a=n.payload;if("function"==typeof a){Ol(),(nm||rm&&e.mode&_g)&&a.call(i,r,o);var l=a.call(i,r,o);return Nl(),l}
// State object
return a;case Pw:e.effectTag=e.effectTag&~Qm|jm;
// Intentional fallthrough
case Sw:var u=n.payload,c=void 0;
// Partial state object
return"function"==typeof u?(Ol(),(nm||rm&&e.mode&_g)&&u.call(i,r,o),c=u.call(i,r,o),Nl()):c=u,null===c||void 0===c?r:ts({},r,c);case Ew:return Rw=!0,r}return r}function Yl(e,t,n,r,o){Rw=!1,t=ql(e,t),Nw=t;for(
// These values may change as we process the queue.
var i=t.baseState,a=null,l=pg,u=t.firstUpdate,c=i;null!==u;){var s=u.expirationTime;if(s<o)
// This update does not have sufficient priority. Skip it.
null===a&&(
// This is the first skipped update. It will be the first update in
// the new list.
a=u,
// Since this is the first update that was skipped, the current result
// is the new base state.
i=c),
// Since this update will remain in the list, update the remaining
// expiration time.
l<s&&(l=s);else{
// This update does have sufficient priority. Process it and compute
// a new result.
c=$l(e,t,u,c,n,r);null!==u.callback&&(e.effectTag|=Fm,
// Set this to null, in case it was mutated during an aborted render.
u.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=u:(t.lastEffect.nextEffect=u,t.lastEffect=u))}
// Continue to the next update.
u=u.next}
// Separately, iterate though the list of captured updates.
var f=null;for(u=t.firstCapturedUpdate;null!==u;){var d=u.expirationTime;if(d<o)
// This update does not have sufficient priority. Skip it.
null===f&&(
// This is the first skipped captured update. It will be the first
// update in the new list.
f=u,
// If this is the first update that was skipped, the current result is
// the new base state.
null===a&&(i=c)),
// Since this update will remain in the list, update the remaining
// expiration time.
l<d&&(l=d);else{
// This update does have sufficient priority. Process it and compute
// a new result.
c=$l(e,t,u,c,n,r);null!==u.callback&&(e.effectTag|=Fm,
// Set this to null, in case it was mutated during an aborted render.
u.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=u:(t.lastCapturedEffect.nextEffect=u,t.lastCapturedEffect=u))}u=u.next}null===a&&(t.lastUpdate=null),null===f?t.lastCapturedUpdate=null:e.effectTag|=Fm,null===a&&null===f&&(
// We processed every update, without skipping. That means the new base
// state is the same as the result state.
i=c),t.baseState=i,t.firstUpdate=a,t.firstCapturedUpdate=f,
// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
e.expirationTime=l,e.memoizedState=c,Nw=null}function Ql(e,n){"function"!=typeof e&&t(!1,"Invalid argument passed as callback. Expected a function. Instead received: %s",e),e.call(n)}function Kl(){Rw=!1}function Xl(){return Rw}function Gl(e,t,n,r){
// If the finished render included captured updates, and there are still
// lower priority updates left over, we need to keep the captured updates
// in the queue so that they are rebased and not dropped once we process the
// queue again at the lower priority.
null!==t.firstCapturedUpdate&&(
// Join the captured update list to the end of the normal list.
null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),
// Clear the list of captured updates.
t.firstCapturedUpdate=t.lastCapturedUpdate=null),
// Commit the effects
Jl(t.firstEffect,n),t.firstEffect=t.lastEffect=null,Jl(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function Jl(e,t){for(;null!==e;){var n=e.callback;null!==n&&(e.callback=null,Ql(n,t)),e=e.nextEffect}}function Zl(e,t){
// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:e,source:t,stack:Me(t)}}function eu(e){
// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
e.effectTag|=Am}function tu(e){e.effectTag|=Bm}function nu(e,n,r){var o=n.pendingProps;switch(n.tag){case Ds:case Ys:break;case $s:case Ns:break;case Is:Vo(n.type)&&Ho(n);break;case Ms:ea(n),qo(n);var i=n.stateNode;i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==e&&null!==e.child||(
// If we hydrated, pop so that we can delete any remaining children
// that weren't hydrated.
Za(n),
// This resets the hacky state to fix isMounted before committing.
// TODO: Delete this when we delete isMounted and findDOMNode.
n.effectTag&=~Um),Mw(n);break;case As:ra(n);var a=Ji(),l=n.type;if(null!==e&&null!=n.stateNode)Uw(e,n,l,o,a),e.ref!==n.ref&&tu(n);else{if(!o){null===n.stateNode&&t(!1,"We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
// This can happen when we abort work.
break}var u=ta();if(Za(n))
// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
Ka(n,a,u)&&
// If changes to the hydrated node needs to be applied at the
// commit-phase we mark this as such.
eu(n);else{var c=Er(l,o,a,u,n);Dw(c,n,!1,!1),
// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
Rr(c,l,o,a,u)&&eu(n),n.stateNode=c}null!==n.ref&&
// If there is a ref on a host node we need to schedule a callback
tu(n)}break;case zs:var s=o;if(e&&null!=n.stateNode){var f=e.memoizedProps;
// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
Aw(e,n,f,s)}else{"string"!=typeof s&&null===n.stateNode&&t(!1,"We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var d=Ji(),p=ta();Za(n)?Xa(n)&&eu(n):n.stateNode=Dr(s,d,p,n)}break;case Bs:break;case Hs:var m=n.memoizedState;if((n.effectTag&jm)!==Dm)
// Do not reset the effect list.
// Something suspended. Re-render with the fallback children.
return n.expirationTime=r,n;var h=null!==m,v=null!==e&&null!==e.memoizedState;if(null!==e&&!h&&v){
// We just switched from the fallback to the normal children. Delete
// the fallback.
// TODO: Would it be better to store the fallback fragment on
var y=e.child.sibling;if(null!==y){
// Deletions go at the beginning of the return fiber's effect list
var g=n.firstEffect;null!==g?(n.firstEffect=y,y.nextEffect=g):(n.firstEffect=n.lastEffect=y,y.nextEffect=null),y.effectTag=Lm}}(h||v)&&(
// If the children are hidden, or if they were previous hidden, schedule
// an effect to toggle their visibility. This is also used to attach a
// retry listener to the promise.
n.effectTag|=Am);break;case Ls:case Ws:case Vs:break;case Us:ea(n),Mw(n);break;case js:
// Pop provider fiber
Dl(n);break;case Fs:case qs:break;case Qs:Vo(n.type)&&Ho(n);break;case Ks:if(um)if(null===e){var b=Za(n);b||t(!1,"A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."),Ga(n)}else(n.effectTag&jm)===Dm&&(
// This boundary did not suspend so it's now hydrated.
// To handle any future suspense cases, we're going to now upgrade it
// to a Suspense component. We detach it from the existing current fiber.
e.alternate=null,n.alternate=null,n.tag=Hs,n.memoizedState=null,n.stateNode=null);break;default:t(!1,"Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.")}return null}function ru(e){
// In order to capture, the Suspense component must have a fallback prop.
// In order to capture, the Suspense component must have a fallback prop.
return void 0!==e.memoizedProps.fallback&&null===e.memoizedState}
// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function ou(e){return!0}function iu(e){
// Allow injected showErrorDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(!1!==ou(e)){var t=e.error,n=(e.componentName,e.componentStack,e.errorBoundaryName),r=e.errorBoundaryFound,o=e.willRetry;null!=t&&t._suppressLogging}}function au(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=Me(n));var o={componentName:null!==n?Ie(n.type):null,componentStack:null!==r?r:"",error:t.value,errorBoundary:null,errorBoundaryName:null,errorBoundaryFound:!1,willRetry:!1};null!==e&&e.tag===Is&&(o.errorBoundary=e.stateNode,o.errorBoundaryName=Ie(e.type),o.errorBoundaryFound=!0,o.willRetry=!0);try{iu(o)}catch(e){
// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout(function(){throw e})}}
// Capture errors so they don't interrupt unmounting.
function lu(e,t){if(r(null,Fw,null,e,t),a()){Xu(e,l())}}function uu(e){var t=e.ref;if(null!==t)if("function"==typeof t){if(r(null,t,null,null),a()){var n=l();Xu(e,n)}}else t.current=null}function cu(e,t){if(r(null,t,null),a()){Xu(e,l())}}function su(e,n){switch(n.tag){case Ns:case Bs:case $s:return void fu(_b,Tb,n);case Is:if(n.effectTag&Vm&&null!==e){var r=e.memoizedProps,o=e.memoizedState;xo(n,"getSnapshotBeforeUpdate");var i=n.stateNode;n.type!==n.elementType||yw||(i.props!==n.memoizedProps&&Mp(!1,"Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(n.type)||"instance"),i.state!==n.memoizedState&&Mp(!1,"Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(n.type)||"instance"));var a=i.getSnapshotBeforeUpdate(n.elementType===n.type?r:Mi(n.type,r),o),l=Lw;void 0!==a||l.has(n.type)||(l.add(n.type),xs(!1,"%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",Ie(n.type))),i.__reactInternalSnapshotBeforeUpdate=a,To()}return;case Ms:case As:case zs:case Us:case Qs:
// Nothing to do for these component types
return;default:t(!1,"This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function fu(e,t,n){var r=n.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var i=o.next,a=i;do{if((a.tag&e)!==Tb){
// Unmount
var l=a.destroy;a.destroy=void 0,void 0!==l&&l()}if((a.tag&t)!==Tb){
// Mount
var u=a.create;a.destroy=u();var c=a.destroy;if(void 0!==c&&"function"!=typeof c){var s=void 0;s=null===c?" You returned null. If your effect does not require clean up, return undefined (or nothing).":"function"==typeof c.then?"\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\nuseEffect(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching":" You returned: "+c,xs(!1,"An effect function must not return anything besides a function, which is used for clean-up.%s%s",s,Me(n))}}a=a.next}while(a!==i)}}function du(e){fu(Ob,Tb,e),fu(Tb,Rb,e)}function pu(e,n,r,o){switch(r.tag){case Ns:case Bs:case $s:fu(Eb,Pb,r);break;case Is:var i=r.stateNode;if(r.effectTag&Am)if(null===n)xo(r,"componentDidMount"),r.type!==r.elementType||yw||(i.props!==r.memoizedProps&&Mp(!1,"Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(r.type)||"instance"),i.state!==r.memoizedState&&Mp(!1,"Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(r.type)||"instance")),i.componentDidMount(),To();else{var a=r.elementType===r.type?n.memoizedProps:Mi(r.type,n.memoizedProps),l=n.memoizedState;xo(r,"componentDidUpdate"),r.type!==r.elementType||yw||(i.props!==r.memoizedProps&&Mp(!1,"Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(r.type)||"instance"),i.state!==r.memoizedState&&Mp(!1,"Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(r.type)||"instance")),i.componentDidUpdate(a,l,i.__reactInternalSnapshotBeforeUpdate),To()}var u=r.updateQueue;
// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
return void(null!==u&&(r.type!==r.elementType||yw||(i.props!==r.memoizedProps&&Mp(!1,"Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(r.type)||"instance"),i.state!==r.memoizedState&&Mp(!1,"Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ie(r.type)||"instance")),Gl(r,u,i,o)));case Ms:var c=r.updateQueue;if(null!==c){var s=null;if(null!==r.child)switch(r.child.tag){case As:s=_r(r.child.stateNode);break;case Is:s=r.child.stateNode}Gl(r,c,s,o)}return;case As:var f=r.stateNode;
// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(null===n&&r.effectTag&Am){Mr(f,r.type,r.memoizedProps,r)}return;case zs:case Us:
// We have no life-cycles associated with portals.
return;case Vs:if(am){var d=r.memoizedProps.onRender;lm?d(r.memoizedProps.id,null===n?"mount":"update",r.actualDuration,r.treeBaseDuration,r.actualStartTime,La(),e.memoizedInteractions):d(r.memoizedProps.id,null===n?"mount":"update",r.actualDuration,r.treeBaseDuration,r.actualStartTime,La())}return;case Hs:case Qs:break;default:t(!1,"This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function mu(e,t){if(Cy)for(
// We only have the top Fiber that was inserted but we need to recurse down its
var n=e;;){if(n.tag===As){var r=n.stateNode;t?$r(r):Qr(n.stateNode,n.memoizedProps)}else if(n.tag===zs){var o=n.stateNode;t?Yr(o):Kr(o,n.memoizedProps)}else{if(n.tag===Hs&&null!==n.memoizedState){
// Found a nested Suspense component that timed out. Skip over the
var i=n.child.sibling;i.return=n,n=i;continue}if(null!==n.child){n.child.return=n,n=n.child;continue}}if(n===e)return;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function hu(e){var t=e.ref;if(null!==t){var n=e.stateNode,r=void 0;switch(e.tag){case As:r=_r(n);break;default:r=n}"function"==typeof t?t(r):(t.hasOwnProperty("current")||xs(!1,"Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().%s",Ie(e.type),Me(e)),t.current=r)}}function vu(e){var t=e.ref;null!==t&&("function"==typeof t?t(null):t.current=null)}
// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function yu(e){switch(ei(e),e.tag){case Ns:case Bs:case qs:case $s:var t=e.updateQueue;if(null!==t){var n=t.lastEffect;if(null!==n){var r=n.next,o=r;do{var i=o.destroy;void 0!==i&&cu(e,i),o=o.next}while(o!==r)}}break;case Is:uu(e);var a=e.stateNode;return void("function"==typeof a.componentWillUnmount&&lu(e,a));case As:return void uu(e);case Us:
// TODO: this is recursive.
// We are also not using this parent because
// the portal will get pushed immediately.
return void(Cy?Cu(e):iy&&wu(e))}}function gu(e){for(
// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
var t=e;;)
// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(yu(t),null===t.child||Cy&&t.tag===Us){if(t===e)return;for(;null===t.sibling;){if(null===t.return||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}else t.child.return=t,t=t.child}function bu(e){
// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null;var t=e.alternate;null!==t&&(t.return=null,t.child=null,t.memoizedState=null,t.updateQueue=null)}function wu(e){if(iy){var t=e.stateNode,n=t.containerInfo,r=ly(n);sy(n,r)}}function ku(e){if(iy)switch(e.tag){case Is:case As:case zs:return;case Ms:case Us:var n=e.stateNode,r=n.containerInfo,o=n.pendingChildren;return void sy(r,o);default:t(!1,"This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function xu(e){for(var n=e.return;null!==n;){if(Tu(n))return n;n=n.return}t(!1,"Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function Tu(e){return e.tag===As||e.tag===Ms||e.tag===Us}function _u(e){
// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
var t=e;e:for(;;){
// If we didn't find anything, let's try the next sibling.
for(;null===t.sibling;){if(null===t.return||Tu(t.return))
// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==As&&t.tag!==zs&&t.tag!==Ks;){
// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(t.effectTag&Um)
// If we don't have a child, try the siblings instead.
continue e;
// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(null===t.child||t.tag===Us)continue e;t.child.return=t,t=t.child}
// Check if this host node is stable or about to be placed.
if(!(t.effectTag&Um))
// Found it!
return t.stateNode}}function Su(e){if(Cy){
// Recursively insert all host nodes into the parent.
var n=xu(e),r=void 0,o=void 0;switch(n.tag){case As:r=n.stateNode,o=!1;break;case Ms:case Us:r=n.stateNode.containerInfo,o=!0;break;default:t(!1,"Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}n.effectTag&Wm&&(
// Reset the text content of the parent before doing any insertions
Ar(r),
// Clear ContentReset from the effect tag
n.effectTag&=~Wm);for(var i=_u(e),a=e;;){if(a.tag===As||a.tag===zs)i?o?jr(r,a.stateNode,i):Fr(r,a.stateNode,i):o?Wr(r,a.stateNode):Lr(r,a.stateNode);else if(a.tag===Us);else if(null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)return;for(;null===a.sibling;){if(null===a.return||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}}function Cu(e){for(
// We only have the top Fiber that was deleted but we need to recurse down its
var n=e,r=!1,o=void 0,i=void 0;;){if(!r){var a=n.return;e:for(;;){switch(null===a&&t(!1,"Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."),a.tag){case As:o=a.stateNode,i=!1;break e;case Ms:case Us:o=a.stateNode.containerInfo,i=!0;break e}a=a.return}r=!0}if(n.tag===As||n.tag===zs)gu(n),
// After all the children have unmounted, it is now safe to remove the
// node from the tree.
i?Vr(o,n.stateNode):Br(o,n.stateNode);else if(um&&n.tag===Ks)
// Delete the dehydrated suspense boundary and all of its content.
i?qr(o,n.stateNode):Hr(o,n.stateNode);else if(n.tag===Us){if(null!==n.child){
// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
o=n.stateNode.containerInfo,i=!0,
// Visit children because portals might contain host components.
n.child.return=n,n=n.child;continue}}else
// Visit children because we may find more host components below.
if(yu(n),null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)return;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return,n.tag===Us&&(
// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
r=!1)}n.sibling.return=n.return,n=n.sibling}}function Eu(e){Cy?
// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
Cu(e):
// Detach refs and call componentWillUnmount() on the whole subtree.
gu(e),bu(e)}function Pu(e,n){if(!Cy){switch(n.tag){case Ns:case Bs:case qs:case $s:
// Note: We currently never use MountMutation, but useLayout uses
// UnmountMutation.
return void fu(Sb,Cb,n)}return void ku(n)}switch(n.tag){case Ns:case Bs:case qs:case $s:
// Note: We currently never use MountMutation, but useLayout uses
// UnmountMutation.
return void fu(Sb,Cb,n);case Is:return;case As:var r=n.stateNode;if(null!=r){
// Commit the work prepared earlier.
var o=n.memoizedProps,i=null!==e?e.memoizedProps:o,a=n.type,l=n.updateQueue;n.updateQueue=null,null!==l&&Ur(r,l,a,i,o,n)}return;case zs:null===n.stateNode&&t(!1,"This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var u=n.stateNode,c=n.memoizedProps;return void zr(u,null!==e?e.memoizedProps:c,c);case Ms:case Vs:return;case Hs:var s=n.memoizedState,f=void 0,d=n;null===s?f=!1:(f=!0,d=n.child,s.timedOutAt===pg&&(
// If the children had not already timed out, record the time.
// This is used to compute the elapsed time during subsequent
// attempts to render the children.
s.timedOutAt=vc())),null!==d&&mu(d,f);
// If this boundary just timed out, then it will have a set of thenables.
// For each thenable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var p=n.updateQueue;if(null!==p){n.updateQueue=null;var m=n.stateNode;null===m&&(m=n.stateNode=new Ww),p.forEach(function(e){
// Memoize using the boundary fiber to prevent redundant listeners.
var t=rc.bind(null,n,e);lm&&(t=os.unstable_wrap(t)),m.has(e)||(m.add(e),e.then(t,t))})}return;case Qs:return;default:t(!1,"This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}}function Ru(e){Cy&&Ar(e.stateNode)}function Ou(e,t,n){var r=jl(n);
// Unmount the root by rendering null.
r.tag=Pw,
// Caution: React DevTools currently depends on this property
// being called "element".
r.payload={element:null};var o=t.value;return r.callback=function(){Pc(o),au(e,t)},r}function Nu(e,t,n){var r=jl(n);r.tag=Pw;var o=e.type.getDerivedStateFromError;if("function"==typeof o){var i=t.value;r.payload=function(){return o(i)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(r.callback=function(){"function"!=typeof o&&
// To preserve the preexisting retry behavior of error boundaries,
// we keep track of which ones already failed during this batch.
// This gets reset before we yield back to the browser.
// TODO: Warn in strict mode if getDerivedStateFromError is
// not defined.
Bu(this);var n=t.value,r=t.stack;au(e,t),this.componentDidCatch(n,{componentStack:null!==r?r:""}),"function"!=typeof o&&e.expirationTime!==hg&&xs(!1,"%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",Ie(e.type)||"Unknown")}),r}function Iu(e,t,n){
// Attach a listener to the promise to "ping" the root and retry. But
// only if one does not already exist for the current render expiration
// time (which acts like a "thread ID" here).
var r=e.pingCache,o=void 0;if(null===r?(r=e.pingCache=new Bw,o=new Set,r.set(n,o)):void 0===(o=r.get(n))&&(o=new Set,r.set(n,o)),!o.has(t)){
// Memoize using the thread ID to prevent redundant listeners.
o.add(t);var i=nc.bind(null,e,n,t);lm&&(i=os.unstable_wrap(i)),n.then(i,i)}}function Du(e,n,r,o,i){if(
// The source fiber did not complete.
r.effectTag|=Ym,
// Its effect list is no longer valid.
r.firstEffect=r.lastEffect=null,null!==o&&"object"==typeof o&&"function"==typeof o.then){
// This is a thenable.
var a=o,l=n,u=-1,c=-1;do{if(l.tag===Hs){var s=l.alternate;if(null!==s){var f=s.memoizedState;if(null!==f){c=ni(f.timedOutAt);
// Do not search any further.
break}}var d=l.pendingProps.maxDuration;"number"==typeof d&&(d<=0?u=0:(-1===u||d<u)&&(u=d))}
// If there is a DehydratedSuspenseComponent we don't have to do anything because
// if something suspends inside it, we will simply leave that as dehydrated. It
// will never timeout.
l=l.return}while(null!==l);
// Schedule the nearest Suspense to re-render the timed out view.
l=n;do{if(l.tag===Hs&&ru(l)){
// Found the nearest boundary.
// Stash the promise on the boundary fiber. If the boundary times out, we'll
var p=l.updateQueue;if(null===p){var m=new Set;m.add(a),l.updateQueue=m}else p.add(a);
// If the boundary is outside of concurrent mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. In the commit phase, we'll schedule a
// subsequent synchronous update to re-render the Suspense.
//
// Note: It doesn't matter whether the component that suspended was
// inside a concurrent mode tree. If the Suspense is outside of it, we
// should *not* suspend the commit.
if((l.mode&Tg)===Dm){if(l.effectTag|=jm,
// We're going to commit this fiber even though it didn't complete.
// But we shouldn't call any lifecycle methods or callbacks. Remove
// all lifecycle effect tags.
r.effectTag&=~(qm|Ym),r.tag===Is){if(null===r.alternate)
// This is a new mount. Change the tag so it's not mistaken for a
// completed class component. For example, we should not call
// componentWillUnmount if it is deleted.
r.tag=Qs;else{
// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force updte to
// prevent a bail out.
var h=jl(hg);h.tag=Ew,Vl(r,h)}}
// Exit without suspending.
// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
return void(r.expirationTime=hg)}
// Confirmed that the boundary is in a concurrent mode tree. Continue
// with the normal suspend path.
Iu(e,i,a);var v=void 0;if(-1===u)
// If no explicit threshold is given, default to an arbitrarily large
// value. The actual size doesn't matter because the threshold for the
// whole tree will be clamped to the expiration time.
v=dg;else{if(-1===c){c=ni(Ni(e,i))-gg}v=c+u}
// Mark the earliest timeout in the suspended fiber's ancestor path.
// After completing the root, we'll take the largest of all the
// suspended fiber's timeouts and use it to compute a timeout for the
// whole tree.
return ec(e,v,i),l.effectTag|=Qm,void(l.expirationTime=i)}if(um&&l.tag===Ks){Iu(e,i,a);
// Since we already have a current fiber, we can eagerly add a retry listener.
var y=l.memoizedState;if(null===y){y=l.memoizedState=new jw;var g=l.alternate;g||t(!1,"A dehydrated suspense boundary must commit before trying to render. This is probably a bug in React."),g.memoizedState=y}
// Memoize using the boundary fiber to prevent redundant listeners.
if(!y.has(a)){y.add(a);var b=rc.bind(null,l,a);lm&&(b=os.unstable_wrap(b)),a.then(b,b)}return l.effectTag|=Qm,void(l.expirationTime=i)}
// This boundary already captured during this render. Continue to the next
// boundary.
l=l.return}while(null!==l);
// No boundary was found. Fallthrough to error mode.
// TODO: Use invariant so the message is stripped in prod?
o=new Error((Ie(r.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Me(r))}
// We didn't find a boundary that could handle this type of exception. Start
// over and traverse parent path again, this time treating the exception
// as an error.
tc(),o=Zl(o,r);var w=n;do{switch(w.tag){case Ms:var k=o;w.effectTag|=Qm,w.expirationTime=i;return void Hl(w,Ou(w,k,i));case Is:
// Capture and retry
var x=o,T=w.type,_=w.stateNode;if((w.effectTag&jm)===Dm&&("function"==typeof T.getDerivedStateFromError||null!==_&&"function"==typeof _.componentDidCatch&&!ju(_))){w.effectTag|=Qm,w.expirationTime=i;return void Hl(w,Nu(w,x,i))}}w=w.return}while(null!==w)}function Mu(e,n){switch(e.tag){case Is:Vo(e.type)&&Ho(e);var r=e.effectTag;return r&Qm?(e.effectTag=r&~Qm|jm,e):null;case Ms:ea(e),qo(e);var o=e.effectTag;return(o&jm)!==Dm&&t(!1,"The root failed to unmount after an error. This is likely a bug in React. Please file an issue."),e.effectTag=o&~Qm|jm,e;case As:
// TODO: popHydrationState
return ra(e),null;case Hs:var i=e.effectTag;return i&Qm?(e.effectTag=i&~Qm|jm,e):null;case Ks:if(um){
// TODO: popHydrationState
var a=e.effectTag;if(a&Qm)
// Captured a suspense effect. Re-render the boundary.
return e.effectTag=a&~Qm|jm,e}return null;case Us:return ea(e),null;case js:return Dl(e),null;default:return null}}function Uu(e){switch(e.tag){case Is:var t=e.type.childContextTypes;null!==t&&void 0!==t&&Ho(e);break;case Ms:ea(e),qo(e);break;case As:ra(e);break;case Us:ea(e);break;case js:Dl(e)}}function Au(){if(null!==Jw)for(var e=Jw.return;null!==e;)Uu(e),e=e.return;Ug.discardPendingWarnings(),zo(),Zw=null,ek=pg,tk=-1,nk=!1,Jw=null}function zu(){for(;null!==rk;){Le(rk),mo();var e=rk.effectTag;if(e&Wm&&Ru(rk),e&Bm){var t=rk.alternate;null!==t&&vu(t)}switch(e&(Um|Am|Lm)){case Um:Su(rk),
// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted
// does and isMounted is deprecated anyway so we should be able
// to kill this.
rk.effectTag&=~Um;break;case zm:
// Placement
Su(rk),
// Clear the "placement" from effect tag so that we know that this is inserted, before
// any life-cycles like componentDidMount gets called.
rk.effectTag&=~Um;Pu(rk.alternate,rk);break;case Am:Pu(rk.alternate,rk);break;case Lm:Eu(rk)}rk=rk.nextEffect}ze()}function Lu(){for(;null!==rk;){Le(rk);if(rk.effectTag&Vm){mo();su(rk.alternate,rk)}rk=rk.nextEffect}ze()}function Wu(e,t){for(Ug.flushPendingUnsafeLifecycleWarnings(),Ug.flushLegacyContextWarning(),im&&Ug.flushPendingDeprecationWarnings();null!==rk;){Le(rk);var n=rk.effectTag;if(n&(Am|Fm)){mo();pu(e,rk.alternate,rk,t)}n&Bm&&(mo(),hu(rk)),n&Hm&&(ik=e),rk=rk.nextEffect}ze()}function Fu(e,t){ik=null,ak=null,lk=null;
// Set this to true to prevent re-entrancy
var n=wk;wk=!0;var o=t;do{if(Le(o),o.effectTag&Hm){var i=!1,u=void 0;r(null,du,null,o),a()&&(i=!0,u=l()),i&&Xu(o,u)}o=o.nextEffect}while(null!==o);ze(),wk=n;
// Check if work was scheduled by one of the effects
var c=e.expirationTime;c!==pg&&yc(e,c),
// Flush any sync work that was scheduled by effects
Ck||wk||xc()}function ju(e){return null!==uk&&uk.has(e)}function Bu(e){null===uk?uk=new Set([e]):uk.add(e)}function Vu(){null!==ak&&Sy(ak),null!==lk&&
// We call the scheduled callback instead of commitPassiveEffects directly
// to ensure tracing works correctly.
lk()}function Hu(e,n){Gw=!0,ok=!0,Co(),e.current===n&&t(!1,"Cannot commit the same tree as before. This is probably a bug related to the return field. This error is likely caused by a bug in React. Please file an issue.");var o=e.pendingCommitExpirationTime;o===pg&&t(!1,"Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."),e.pendingCommitExpirationTime=pg;
// Update the pending priority levels to account for the work that we are
// about to commit. This needs to happen before calling the lifecycles, since
// they may schedule additional updates.
var i=n.expirationTime,u=n.childExpirationTime;Si(e,u>i?u:i);var c=null;lm&&(
// Restore any pending interactions at this point,
// So that cascading work triggered during the render phase will be accounted for.
c=os.__interactionsRef.current,os.__interactionsRef.current=e.memoizedInteractions),
// Reset this to null before calling lifecycles
Hw.current=null;var s=void 0;for(n.effectTag>Mm?
// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if
// it had one; that is, all the effects in the tree including the root.
null!==n.lastEffect?(n.lastEffect.nextEffect=n,s=n.firstEffect):s=n:
// There is no effect on the root.
s=n.firstEffect,Sr(e.containerInfo),
// Invoke instances of getSnapshotBeforeUpdate before mutation.
rk=s,Po();null!==rk;){var f=!1,d=void 0;r(null,Lu,null),a()&&(f=!0,d=l()),f&&(null===rk&&t(!1,"Should have next effect. This error is likely caused by a bug in React. Please file an issue."),Xu(rk,d),
// Clean-up
null!==rk&&(rk=rk.nextEffect))}for(Ro(),am&&
// Mark the current commit time to be shared by all Profilers in this batch.
// This enables them to be grouped later.
Wa(),
// Commit all the side-effects within a tree. We'll do this in two passes.
// The first pass performs all the host insertions, updates, deletions and
// ref unmounts.
rk=s,Oo();null!==rk;){var p=!1,m=void 0;r(null,zu,null),a()&&(p=!0,m=l()),p&&(null===rk&&t(!1,"Should have next effect. This error is likely caused by a bug in React. Please file an issue."),Xu(rk,m),
// Clean-up
null!==rk&&(rk=rk.nextEffect))}for(No(),Cr(e.containerInfo),
// The work-in-progress tree is now the current tree. This must come after
// the first pass of the commit phase, so that the previous tree is still
// current during componentWillUnmount, but before the second pass, so that
// the finished work is current during componentDidMount/Update.
e.current=n,
// In the second pass we'll perform all life-cycles and ref callbacks.
// Life-cycles happen as a separate pass so that all placements, updates,
// and deletions in the entire tree have already been invoked.
// This pass also triggers any renderer-specific initial effects.
rk=s,Io();null!==rk;){var h=!1,v=void 0;r(null,Wu,null,e,o),a()&&(h=!0,v=l()),h&&(null===rk&&t(!1,"Should have next effect. This error is likely caused by a bug in React. Please file an issue."),Xu(rk,v),null!==rk&&(rk=rk.nextEffect))}if(null!==s&&null!==ik){
// This commit included a passive effect. These do not need to fire until
// after the next paint. Schedule an callback to fire them in an async
// event. To ensure serial execution, the callback will be flushed early if
// we enter rootWithPendingPassiveEffects commit phase before then.
var y=Fu.bind(null,e,s);lm&&(
// TODO: Avoid this extra callback by mutating the tracing ref directly,
// like we do at the beginning of commitRoot. I've opted not to do that
// here because that code is still in flux.
y=os.unstable_wrap(y)),ak=rs.unstable_runWithPriority(rs.unstable_NormalPriority,function(){return _y(y)}),lk=y}ok=!1,Gw=!1,Do(),Eo(),Zo(n.stateNode),Qg.debugTool&&Qg.debugTool.onCommitWork(n);var g=n.expirationTime,b=n.childExpirationTime,w=b>g?b:g;if(w===pg&&(
// If there's no remaining work, we can clear the set of already failed
// error boundaries.
uk=null),hc(e,w),lm){os.__interactionsRef.current=c;var k=void 0;try{if(null!==(k=os.__subscriberRef.current)&&e.memoizedInteractions.size>0){var x=Gu(o,e.interactionThreadID);k.onWorkStopped(e.memoizedInteractions,x)}}catch(d){
// It's not safe for commitRoot() to throw.
// Store the error for now and we'll re-throw in finishRendering().
_k||(_k=!0,Sk=d)}finally{
// Clear completed interactions from the pending Map.
// Unless the render was suspended or cascading work was scheduled,
// In which case– leave pending interactions until the subsequent render.
var T=e.pendingInteractionMap;T.forEach(function(e,t){
// Only decrement the pending interaction count if we're done.
// If there's still work at the current priority,
// That indicates that we are waiting for suspense data.
t>w&&(T.delete(t),e.forEach(function(e){if(e.__count--,null!==k&&0===e.__count)try{k.onInteractionScheduledWorkCompleted(e)}catch(e){
// It's not safe for commitRoot() to throw.
// Store the error for now and we'll re-throw in finishRendering().
_k||(_k=!0,Sk=e)}}))})}}}function qu(e,t){if(t===mg||e.childExpirationTime!==mg){var n=pg;
// Bubble up the earliest expiration time.
if(am&&e.mode&Sg){for(
// We're in profiling mode.
// Let's use this same traversal to update the render durations.
var r=e.actualDuration,o=e.selfBaseDuration,i=null===e.alternate||e.child!==e.alternate.child,a=e.child;null!==a;){var l=a.expirationTime,u=a.childExpirationTime;l>n&&(n=l),u>n&&(n=u),i&&(r+=a.actualDuration),o+=a.treeBaseDuration,a=a.sibling}e.actualDuration=r,e.treeBaseDuration=o}else for(var c=e.child;null!==c;){var s=c.expirationTime,f=c.childExpirationTime;s>n&&(n=s),f>n&&(n=f),c=c.sibling}e.childExpirationTime=n}}function $u(e){
// Attempt to complete the current unit of work, then move to the
// next sibling. If there are no more siblings, return to the
// parent fiber.
for(;;){
// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var t=e.alternate;Le(e);var n=e.return,r=e.sibling;if((e.effectTag&Ym)===Dm){if(om&&(
// Don't replay if it fails during completion phase.
dk=!1),
// This fiber completed.
// Remember we're completing this unit so we can find a boundary if it fails.
Jw=e,am?(e.mode&Sg&&Fa(e),Jw=nu(t,e,ek),e.mode&Sg&&
// Update render duration assuming we didn't error.
Ba(e,!1)):Jw=nu(t,e,ek),om&&(
// We're out of completion phase so replaying is fine now.
dk=!0),wo(e),qu(e,ek),ze(),null!==Jw)
// Completing this fiber spawned new work. Work on that next.
return Jw;if(null!==n&&
// Do not append effects to parents if a sibling failed to complete
(n.effectTag&Ym)===Dm){
// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect);
// Skip both NoWork and PerformedWork tags when creating the effect list.
// PerformedWork effect is read by React DevTools but shouldn't be committed.
e.effectTag>Mm&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e)}if(Qg.debugTool&&Qg.debugTool.onCompleteWork(e),null!==r)
// If there is more work to do in this returnFiber, do that next.
return r;if(null!==n){
// If there's no more work in this returnFiber. Complete the returnFiber.
e=n;continue}
// We've reached the root.
return null}if(am&&e.mode&Sg){
// Record the render duration for the fiber that errored.
Ba(e,!1);for(
// Include the time spent working on failed children before continuing.
var o=e.actualDuration,i=e.child;null!==i;)o+=i.actualDuration,i=i.sibling;e.actualDuration=o}
// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var a=Mu(e,ek);if(
// Because this fiber did not complete, don't reset its expiration time.
e.effectTag&jm?
// Restarting an error boundary
ko(e):wo(e),ze(),null!==a)
// If completing this work spawned new work, do that next. We'll come
// back here again.
// Since we're restarting, remove anything that is not a host effect
// from the effect tag.
return wo(e),Qg.debugTool&&Qg.debugTool.onCompleteWork(e),a.effectTag&=$m,a;if(null!==n&&(
// Mark the parent fiber as incomplete and clear its effect list.
n.firstEffect=n.lastEffect=null,n.effectTag|=Ym),Qg.debugTool&&Qg.debugTool.onCompleteWork(e),null!==r)
// If there is more work to do in this returnFiber, do that next.
return r;if(null===n)return null;
// If there's no more work in this returnFiber. Complete the returnFiber.
e=n}
// Without this explicit null return Flow complains of invalid return type
// TODO Remove the above while(true) loop
// eslint-disable-next-line no-unreachable
return null}function Yu(e){
// The current, flushed, state of this fiber is the alternate.
// Ideally nothing should rely on this, but relying on it here
// means that we don't need an additional field on the work in
// progress.
var t=e.alternate;
// See if beginning this work spawns more work.
go(e),Le(e),om&&(sk=xi(sk,e));var n=void 0;
// Record the render duration assuming we didn't bailout (or error).
// Currently replaying a failed unit of work. This should be unreachable,
// because the render phase is meant to be idempotent, and it should
// have thrown again. Since it didn't, rethrow the original error, so
// React's internal stack is not misaligned.
// If this doesn't spawn new work, complete the current work.
return am?(e.mode&Sg&&Fa(e),n=Pl(t,e,ek),e.memoizedProps=e.pendingProps,e.mode&Sg&&Ba(e,!0)):(n=Pl(t,e,ek),e.memoizedProps=e.pendingProps),ze(),pk&&hk(),Qg.debugTool&&Qg.debugTool.onBeginWork(e),null===n&&(n=$u(e)),Hw.current=null,n}function Qu(e){if(e)
// Flush asynchronous work until there's a higher priority event
for(;null!==Jw&&!wc();)Jw=Yu(Jw);else
// Flush work without yielding
for(;null!==Jw;)Jw=Yu(Jw)}function Ku(e,n){Gw&&t(!1,"renderRoot was called recursively. This error is likely caused by a bug in React. Please file an issue."),Vu(),Gw=!0;var r=Vw.current;Vw.current=Jb;var o=e.nextExpirationTimeToWorkOn;
// Check if we're starting from a fresh stack, or if we're resuming from
// previously yielded work.
if((o!==ek||e!==Zw||null===Jw)&&(
// Reset the stack and start working from the root.
Au(),Zw=e,ek=o,Jw=fi(Zw.current,null,ek),e.pendingCommitExpirationTime=pg,lm)){
// Determine which interactions this batch of work currently includes,
// So that we can accurately attribute time spent working on it,
var i=new Set;if(e.pendingInteractionMap.forEach(function(e,t){t>=o&&e.forEach(function(e){return i.add(e)})}),
// Store the current set of interactions on the FiberRoot for a few reasons:
// We can re-use it in hot functions like renderRoot() without having to recalculate it.
// We will also use it in commitWork() to pass to any Profiler onRender() hooks.
// This also provides DevTools with a way to access it when the onCommitRoot() hook is called.
e.memoizedInteractions=i,i.size>0){var a=os.__subscriberRef.current;if(null!==a){var l=Gu(o,e.interactionThreadID);try{a.onWorkStarted(i,l)}catch(e){
// Work thrown by an interaction tracing subscriber should be rethrown,
// But only once it's safe (to avoid leaving the scheduler in an invalid state).
// Store the error for now and we'll re-throw in finishRendering().
_k||(_k=!0,Sk=e)}}}}var u=null;lm&&(
// We're about to start new traced work.
// Restore pending interactions so cascading work triggered during the render phase will be accounted for.
u=os.__interactionsRef.current,os.__interactionsRef.current=e.memoizedInteractions);var c=!1;for(_o(Jw);;){try{Qu(n)}catch(r){Rl(),fa();
// Reset in case completion throws.
// This is only used in DEV and when replaying is on.
var s=void 0;if(om&&(s=dk,dk=!0),null===Jw)
// This is a fatal error.
c=!0,Pc(r);else{if(am&&Jw.mode&Sg&&
// Record the time spent rendering before an error was thrown.
// This avoids inaccurate Profiler durations in the case of a suspended render.
Ba(Jw,!0),
// Reset global debug state
// We assume this is defined in DEV
Iw(),om&&s){var f=Jw;fk(f,r,n)}
// TODO: we already know this isn't true in some cases.
// At least this shows a nicer error message until we figure out the cause.
// https://github.com/facebook/react/issues/12449#issuecomment-386727431
null===Jw&&t(!1,"Failed to replay rendering after an error. This is likely caused by a bug in React. Please file an issue with a reproducing case to help us find it.");var d=Jw,p=d.return;if(null!==p){Du(e,p,d,r,ek),Jw=$u(d);continue}
// This is the root. The root could capture its own errors. However,
// we don't know if it errors before or after we pushed the host
// context. This information is needed to avoid a stack mismatch.
// Because we're not sure, treat this as a fatal error. We could track
// which phase it fails in, but doesn't seem worth it. At least
// for now.
c=!0,Pc(r)}}break}
// Yield back to main thread.
if(lm&&(
// Traced work is done for now; restore the previous interactions.
os.__interactionsRef.current=u),
// We're done performing work. Time to clean up.
Gw=!1,Vw.current=r,Rl(),fa(),c){
// `nextRoot` points to the in-progress root. A non-null value indicates
// that we're in the middle of an async render. Set it to null to indicate
// there's no more work to be done in the current batch.
return So(ck,!1),ck=null,Lo(),Zw=null,void sc(e)}if(null!==Jw){return So(ck,!1),ck=null,void pc(e)}So(ck,!0);var m=e.current.alternate;if(null===m&&t(!1,"Finished root should have a work-in-progress. This error is likely caused by a bug in React. Please file an issue."),
// `nextRoot` points to the in-progress root. A non-null value indicates
// that we're in the middle of an async render. Set it to null to indicate
// there's no more work to be done in the current batch.
Zw=null,ck=null,nk){
// There was an error
if(Ci(e,o)){
// There's lower priority work. If so, it may have the effect of fixing
// the exception that was just thrown. Exit without committing. This is
// similar to a suspend, but without a timeout because we're not waiting
// for a promise to resolve. React will restart at the lower
// priority level.
Pi(e,o);var h=o,v=e.expirationTime;return void dc(e,m,h,v,-1)}if(
// There's no lower priority work, but we're rendering asynchronously.
// Synchronously attempt to render the same level one more time. This is
// similar to a suspend, but without a timeout because we're not waiting
// for a promise to resolve.
!e.didError&&n){e.didError=!0;var y=e.nextExpirationTimeToWorkOn=o,g=e.expirationTime=hg;return void dc(e,m,y,g,-1)}}if(n&&-1!==tk){
// The tree was suspended.
var b=o;Pi(e,b);
// Find the earliest uncommitted expiration time in the tree, including
// work that is suspended. The timeout threshold cannot be longer than
// the overall expiration.
var w=Ni(e,o),k=ni(w);k<tk&&(tk=k);
// Subtract the current time from the absolute timeout to get the number
// of milliseconds until the timeout. In other words, convert an absolute
// timestamp to a relative time. This is the value that is passed
// to `setTimeout`.
var x=ni(vc()),T=tk-x;T=T<0?0:T;
// TODO: Account for the Just Noticeable Difference
var _=e.expirationTime;return void dc(e,m,b,_,T)}
// Ready to commit.
fc(e,m,o)}function Xu(e,t){for(var n=hg,r=e.return;null!==r;){switch(r.tag){case Is:var o=r.type,i=r.stateNode;if("function"==typeof o.getDerivedStateFromError||"function"==typeof i.componentDidCatch&&!ju(i)){return Vl(r,Nu(r,Zl(t,e),n)),void ac(r,n)}break;case Ms:return Vl(r,Ou(r,Zl(t,e),n)),void ac(r,n)}r=r.return}if(e.tag===Ms){
// Error was thrown at the root. There is no parent, so the root
// itself should capture it.
var a=e;Vl(a,Ou(a,Zl(t,a),n)),ac(a,n)}}function Gu(e,t){
// Interaction threads are unique per root and expiration time.
return 1e3*e+t}
// Creates a unique async expiration time.
function Ju(){var e=vc(),t=ii(e);
// Since we assume the current time monotonically increases, we only hit
// this branch when computeUniqueAsyncExpiration is fired multiple times
// within a 200ms window (or whatever the async bucket size is).
return t>=Xw&&(t=Xw-1),Xw=t}function Zu(e,n){var r=rs.unstable_getCurrentPriorityLevel(),o=void 0;if((n.mode&Tg)===xg)
// Outside of concurrent mode, updates are always synchronous.
o=hg;else if(Gw&&!ok)
// During render phase, updates expire during as the current render.
o=ek;else{switch(r){case rs.unstable_ImmediatePriority:o=hg;break;case rs.unstable_UserBlockingPriority:o=ai(e);break;case rs.unstable_NormalPriority:
// This is a normal, concurrent update
o=ii(e);break;case rs.unstable_LowPriority:case rs.unstable_IdlePriority:o=mg;break;default:t(!1,"Unknown priority level. This error is likely caused by a bug in React. Please file an issue.")}
// If we're in the middle of rendering a tree, do not update at the same
// expiration time that is already rendering.
null!==Zw&&o===ek&&(o-=1)}
// Keep track of the lowest pending interactive expiration time. This
// allows us to synchronously flush all interactive updates
// when needed.
// TODO: Move this to renderer?
return r===rs.unstable_UserBlockingPriority&&(Tk===pg||o<Tk)&&(Tk=o),o}function ec(e,t,n){
// Schedule the timeout.
t>=0&&tk<t&&(tk=t)}function tc(){nk=!0}function nc(e,t,n){
// A promise that previously suspended React from committing has resolved.
// If React is still suspended, try again at the previous level (pingTime).
var r=e.pingCache;if(null!==r&&
// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
r.delete(t),null!==Zw&&ek===n)
// Received a ping at the same priority level at which we're currently
// rendering. Restart from the root.
Zw=null;else
// Confirm that the root is still suspended at this level. Otherwise exit.
if(Ei(e,n)){
// Ping at the original level
Ri(e,n);var o=e.expirationTime;o!==pg&&yc(e,o)}}function rc(e,n){
// The boundary fiber (a Suspense component) previously timed out and was
// rendered in its fallback state. One of the promises that suspended it has
// resolved, which means at least part of the tree was likely unblocked. Try
var r=void 0;if(um)switch(e.tag){case Hs:r=e.stateNode;break;case Ks:r=e.memoizedState;break;default:t(!1,"Pinged unknown suspense boundary type. This is probably a bug in React.")}else r=e.stateNode;null!==r&&
// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
r.delete(n);var o=vc(),i=Zu(o,e),a=oc(e,i);if(null!==a){_i(a,i);var l=a.expirationTime;l!==pg&&yc(a,l)}}function oc(e,t){if(ho(),e.tag===Is){var n=e.stateNode;Qw(n)}
// Update the source fiber's expiration time
e.expirationTime<t&&(e.expirationTime=t);var r=e.alternate;null!==r&&r.expirationTime<t&&(r.expirationTime=t);
// Walk the parent path to the root and update the child expiration time.
var o=e.return,i=null;if(null===o&&e.tag===Ms)i=e.stateNode;else for(;null!==o;){if(r=o.alternate,o.childExpirationTime<t?(o.childExpirationTime=t,null!==r&&r.childExpirationTime<t&&(r.childExpirationTime=t)):null!==r&&r.childExpirationTime<t&&(r.childExpirationTime=t),null===o.return&&o.tag===Ms){i=o.stateNode;break}o=o.return}if(lm&&null!==i){var a=os.__interactionsRef.current;if(a.size>0){var l=i.pendingInteractionMap,u=l.get(t);null!=u?a.forEach(function(e){u.has(e)||
// Update the pending async work count for previously unscheduled interaction.
e.__count++,u.add(e)}):(l.set(t,new Set(a)),
// Update the pending async work count for the current interactions.
a.forEach(function(e){e.__count++}));var c=os.__subscriberRef.current;if(null!==c){var s=Gu(t,i.interactionThreadID);c.onWorkScheduled(a,s)}}}return i}function ic(e){!1===wk&&!1===Ck&&xs(!1,"An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://fb.me/react-wrap-tests-with-act%s",Ie(e.type),Me(e))}function ac(e,n){var r=oc(e,n);if(null!==r){if(!Gw&&ek!==pg&&n>ek&&(
// This is an interruption. (Used for performance tracking.)
ck=e,Au()),_i(r,n),
// If we're in the render phase, we don't need to schedule this root
// for an update, because we'll do it before we exit...
!Gw||ok||
// ...unless this is a different root than the one we're rendering.
Zw!==r){yc(r,r.expirationTime)}Dk>Ik&&(
// Reset this back to zero so subsequent updates don't throw.
Dk=0,t(!1,"Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."))}else switch(e.tag){case Is:Yw(e,!0);break;case Ns:case Bs:case qs:case $s:Yw(e,!1)}}function lc(e,t,n,r,o){return rs.unstable_runWithPriority(rs.unstable_ImmediatePriority,function(){return e(t,n,r,o)})}function uc(){var e=rs.unstable_now()-Rk;Ok=ti(e)}function cc(e,t){if(gk!==pg){
// A callback is already scheduled. Check its expiration time (timeout).
if(t<gk)
// Existing callback has sufficient timeout. Exit.
return;null!==bk&&
// Existing callback has insufficient timeout. Cancel and schedule a
// new one.
rs.unstable_cancelCallback(bk)}else vo();gk=t;var n=rs.unstable_now()-Rk,r=ni(t),o=r-n;bk=rs.unstable_scheduleCallback(kc,{timeout:o})}
// For every call to renderRoot, one of onFatal, onComplete, onSuspend, and
// onYield is called upon exiting. We use these in lieu of returning a tuple.
// I've also chosen not to inline them into renderRoot because these will
// eventually be lifted into the renderer.
function sc(e){e.finishedWork=null}function fc(e,t,n){e.pendingCommitExpirationTime=n,e.finishedWork=t}function dc(e,t,n,r,o){e.expirationTime=r,0!==o||wc()?o>0&&(
// Wait `msUntilTimeout` milliseconds before committing.
e.timeoutHandle=ky(mc.bind(null,e,t,n),o)):(
// Don't wait an additional tick. Commit the tree immediately.
e.pendingCommitExpirationTime=n,e.finishedWork=t)}function pc(e){e.finishedWork=null}function mc(e,t,n){
// The root timed out. Commit it.
e.pendingCommitExpirationTime=n,e.finishedWork=t,
// Read the current time before entering the commit phase. We can be
// certain this won't cause tearing related to batching of event updates
// because we're at the top of a timer event.
uc(),Nk=Ok,_c(e,n)}function hc(e,t){e.expirationTime=t,e.finishedWork=null}function vc(){
// requestCurrentTime is called by the scheduler to compute an expiration
// time.
//
// Expiration times are computed by adding to the current time (the start
// time). However, if two updates are scheduled within the same event, we
// should treat their start times as simultaneous, even if the actual clock
// time has advanced between the first and second call.
// In other words, because expiration times determine how updates are batched,
// we want all updates of like priority that occur within the same event to
// receive the same expiration time. Otherwise we get tearing.
//
// We keep track of two separate times: the current "renderer" time and the
// current "scheduler" time. The renderer time can be updated whenever; it
// only exists to minimize the calls performance.now.
//
// But the scheduler time can only be updated if there's no pending work, or
// if we know for certain that we're not in the middle of an event.
// requestCurrentTime is called by the scheduler to compute an expiration
// time.
//
// Expiration times are computed by adding to the current time (the start
// time). However, if two updates are scheduled within the same event, we
// should treat their start times as simultaneous, even if the actual clock
// time has advanced between the first and second call.
// In other words, because expiration times determine how updates are batched,
// we want all updates of like priority that occur within the same event to
// receive the same expiration time. Otherwise we get tearing.
//
// We keep track of two separate times: the current "renderer" time and the
// current "scheduler" time. The renderer time can be updated whenever; it
// only exists to minimize the calls performance.now.
//
// But the scheduler time can only be updated if there's no pending work, or
// if we know for certain that we're not in the middle of an event.
// Check if there's pending work.
// If there's no pending work, or if the pending work is offscreen, we can
// read the current time without risk of tearing.
return wk?Nk:(bc(),xk===pg||xk===mg?(uc(),Nk=Ok):Nk)}
// requestWork is called by the scheduler whenever a root receives an update.
// It's up to the renderer to call renderRoot at some point in the future.
function yc(e,t){if(gc(e,t),!wk)
// Flush work at the end of the batch.
// ...unless we're inside unbatchedUpdates, in which case we should
// flush it now.
// TODO: Get rid of Sync and use current time?
return Ck?void(Ek&&(kk=e,xk=hg,Cc(e,hg,!1))):void(t===hg?xc():cc(e,t))}function gc(e,t){
// Add the root to the schedule.
// Check if this root is already part of the schedule.
if(null===e.nextScheduledRoot)
// This root is not already scheduled. Add it.
e.expirationTime=t,null===yk?(vk=yk=e,e.nextScheduledRoot=e):(yk.nextScheduledRoot=e,yk=e,yk.nextScheduledRoot=vk);else{t>e.expirationTime&&(
// Update the priority.
e.expirationTime=t)}}function bc(){var e=pg,n=null;if(null!==yk)for(var r=yk,o=vk;null!==o;){var i=o.expirationTime;if(i===pg){if(
// This root no longer has work. Remove it from the scheduler.
// TODO: This check is redudant, but Flow is confused by the branch
// below where we set lastScheduledRoot to null, even though we break
// from the loop right after.
(null===r||null===yk)&&t(!1,"Should have a previous and last root. This error is likely caused by a bug in React. Please file an issue."),o===o.nextScheduledRoot){
// This is the only root in the list.
o.nextScheduledRoot=null,vk=yk=null;break}if(o===vk){
// This is the first root in the list.
var a=o.nextScheduledRoot;vk=a,yk.nextScheduledRoot=a,o.nextScheduledRoot=null}else{if(o===yk){
// This is the last root in the list.
yk=r,yk.nextScheduledRoot=vk,o.nextScheduledRoot=null;break}r.nextScheduledRoot=o.nextScheduledRoot,o.nextScheduledRoot=null}o=r.nextScheduledRoot}else{if(i>e&&(
// Update the priority, if it's higher
e=i,n=o),o===yk)break;if(e===hg)
// Sync is highest priority by definition so
// we can stop searching.
break;r=o,o=o.nextScheduledRoot}}kk=n,xk=e}function wc(){return!!Uk||!!rs.unstable_shouldYield()&&(Uk=!0,!0)}function kc(){try{if(!wc()&&null!==vk){uc();var e=vk;do{Ii(e,Ok),
// The root schedule is circular, so this is never null.
e=e.nextScheduledRoot}while(e!==vk)}Tc(pg,!0)}finally{Uk=!1}}function xc(){Tc(hg,!1)}function Tc(e,t){if(
// Keep working on roots until there's no more work, or until there's a higher
// priority event.
bc(),t){if(uc(),Nk=Ok,tm){yo(xk>Ok,ni(xk))}for(;null!==kk&&xk!==pg&&e<=xk&&!(Uk&&Ok>xk);)Cc(kk,xk,Ok>xk),bc(),uc(),Nk=Ok}else for(;null!==kk&&xk!==pg&&e<=xk;)Cc(kk,xk,!1),bc();
// We're done flushing work. Either we ran out of time in this callback,
// or there's no more work left with sufficient priority.
// If we're inside a callback, set this to false since we just completed it.
t&&(gk=pg,bk=null),
// If there's work left over, schedule a new callback.
xk!==pg&&cc(kk,xk),
// Clean-up.
Sc()}function _c(e,n){wk&&t(!1,"work.commit(): Cannot commit while already rendering. This likely means you attempted to commit from inside a lifecycle method."),
// Perform work on root as if the given expiration time is the current time.
// This has the effect of synchronously flushing all work up to and
// including the given time.
kk=e,xk=n,Cc(e,n,!1),
// Flush any sync work that was scheduled by lifecycles
xc()}function Sc(){if(Dk=0,Mk=null,null!==Pk){var e=Pk;Pk=null;for(var t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(r){_k||(_k=!0,Sk=r)}}}if(_k){var r=Sk;throw Sk=null,_k=!1,r}}function Cc(e,n,r){
// Check if this is async work or sync/expired work.
if(wk&&t(!1,"performWorkOnRoot was called recursively. This error is likely caused by a bug in React. Please file an issue."),wk=!0,r){
// Flush async work.
var o=e.finishedWork;if(null!==o)
// This root is already complete. We can commit it.
Ec(e,o,n);else{e.finishedWork=null;
// If this root previously suspended, clear its existing timeout, since
// we're about to try rendering again.
var i=e.timeoutHandle;i!==Ty&&(e.timeoutHandle=Ty,
// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
xy(i)),Ku(e,r),o=e.finishedWork,null!==o&&(
// We've completed the root. Check the if we should yield one more time
// before committing.
wc()?
// There's no time left. Mark this root as complete. We'll come
// back and commit it later.
e.finishedWork=o:
// Still time left. Commit the root.
Ec(e,o,n))}}else{
// Flush work without yielding.
// TODO: Non-yieldy work does not necessarily imply expired work. A renderer
// may want to perform some work without yielding, but also without
// requiring the root to complete (by triggering placeholders).
var a=e.finishedWork;if(null!==a)
// This root is already complete. We can commit it.
Ec(e,a,n);else{e.finishedWork=null;
// If this root previously suspended, clear its existing timeout, since
// we're about to try rendering again.
var l=e.timeoutHandle;l!==Ty&&(e.timeoutHandle=Ty,
// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
xy(l)),Ku(e,r),a=e.finishedWork,null!==a&&
// We've completed the root. Commit it.
Ec(e,a,n)}}wk=!1}function Ec(e,t,n){
// Check if there's a batch that matches this expiration time.
var r=e.firstBatch;if(null!==r&&r._expirationTime>=n&&(null===Pk?Pk=[r]:Pk.push(r),r._defer))
// This root is blocked from committing by a batch. Unschedule it until
// we receive another update.
return e.finishedWork=t,void(e.expirationTime=pg);
// Commit the root.
e.finishedWork=null,
// Check if this is a nested update (a sync update scheduled during the
// commit phase).
e===Mk?
// If the next root is the same as the previous root, this is a nested
// update. To prevent an infinite loop, increment the nested update count.
Dk++:(
// Reset whenever we switch roots.
Mk=e,Dk=0),rs.unstable_runWithPriority(rs.unstable_ImmediatePriority,function(){Hu(e,t)})}function Pc(e){null===kk&&t(!1,"Should be working on a root. This error is likely caused by a bug in React. Please file an issue."),
// Unschedule this root so we don't work on it again until there's
// another update.
kk.expirationTime=pg,_k||(_k=!0,Sk=e)}
// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function Rc(e,t){var n=Ck;Ck=!0;try{return e(t)}finally{Ck=n,Ck||wk||xc()}}
// TODO: Batching should be implemented at the renderer level, not inside
// the reconciler.
function Oc(e,t){if(Ck&&!Ek){Ek=!0;try{return e(t)}finally{Ek=!1}}return e(t)}
// TODO: Batching should be implemented at the renderer level, not within
// the reconciler.
function Nc(e,n){wk&&t(!1,"flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");var r=Ck;Ck=!0;try{return lc(e,n)}finally{Ck=r,xc()}}function Ic(e,t,n){
// If there are any pending interactive updates, synchronously flush them.
// This needs to happen before we read any handlers, because the effect of
// the previous event may influence which handlers are called during
// this event.
Ck||wk||Tk===pg||(
// Synchronously flush pending interactive updates.
Tc(Tk,!1),Tk=pg);var r=Ck;Ck=!0;try{return rs.unstable_runWithPriority(rs.unstable_UserBlockingPriority,function(){return e(t,n)})}finally{Ck=r,Ck||wk||xc()}}function Dc(){wk||Tk===pg||(
// Synchronously flush pending interactive updates.
Tc(Tk,!1),Tk=pg)}function Mc(e){var t=Ck;Ck=!0;try{lc(e)}finally{Ck=t,Ck||wk||xc()}}function Uc(e){if(!e)return og;var t=St(e),n=Xo(t);if(t.tag===Is){var r=t.type;if(Vo(r))return Yo(t,r,n)}return n}function Ac(e,t,n,r){"render"!==Ip||null===Np||Ak||(Ak=!0,xs(!1,"Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",Ie(Np.type)||"Unknown"));var o=jl(n);
// Caution: React DevTools currently depends on this property
// being called "element".
return o.payload={element:t},r=void 0===r?null:r,null!==r&&("function"!=typeof r&&xs(!1,"render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),o.callback=r),Vu(),Vl(e,o),ac(e,n),n}function zc(e,t,n,r,o){
// TODO: If this is a nested container, this won't be the root.
var i=t.current;Qg.debugTool&&(null===i.alternate?Qg.debugTool.onMountContainer(t):null===e?Qg.debugTool.onUnmountContainer(t):Qg.debugTool.onUpdateContainer(t));var a=Uc(n);return null===t.context?t.context=a:t.pendingContext=a,Ac(i,e,r,o)}function Lc(e,n){var r=St(e);void 0===r&&("function"==typeof e.render?t(!1,"Unable to find node on an unmounted component."):t(!1,"Argument appears to not be a ReactComponent. Keys: %s",Object.keys(e)));var o=Dt(r);if(null===o)return null;if(o.mode&_g){var i=Ie(r.type)||"Component";zk[i]||(zk[i]=!0,r.mode&_g?xs(!1,"%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference.\n%s\n\nLearn more about using refs safely here:\nhttps://fb.me/react-strict-mode-find-node",n,n,i,Me(o)):xs(!1,"%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference.\n%s\n\nLearn more about using refs safely here:\nhttps://fb.me/react-strict-mode-find-node",n,n,i,Me(o)))}return o.stateNode}function Wc(e,t,n){return Ti(e,t,n)}function Fc(e,t,n,r){var o=t.current;return zc(e,t,n,Zu(vc(),o),r)}function jc(e){var t=e.current;if(!t.child)return null;switch(t.child.tag){case As:return _r(t.child.stateNode);default:return t.child.stateNode}}function Bc(e){var t=Mt(e);return null===t?null:t.stateNode}
// This file intentionally does *not* have the Flow annotation.
// Don't add it. See `./inline-typed.js` for an explanation.
function Vc(e,t,
// TODO: figure out the API for cross-renderer implementation.
n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{
// This tag allow us to uniquely identify this as a React Portal
$$typeof:mp,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Hc(e){var t=Ju();this._expirationTime=t,this._root=e,this._next=null,this._callbacks=null,this._didComplete=!1,this._hasChildren=!1,this._children=null,this._defer=!0}function qc(){this._callbacks=null,this._didCommit=!1,
// TODO: Avoid need to bind by replacing callbacks in the update queue with
// list of Work objects.
this._onCommit=this._onCommit.bind(this)}function $c(e,t,n){var r=Wc(e,t,n);this._internalRoot=r}/**
 * True if the supplied DOM node is a valid node element.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM is a valid DOM node.
 * @internal
 */
function Yc(e){return!(!e||e.nodeType!==op&&e.nodeType!==lp&&e.nodeType!==up&&(e.nodeType!==ap||" react-mount-point-unstable "!==e.nodeValue))}function Qc(e){return e?e.nodeType===lp?e.documentElement:e.firstChild:null}function Kc(e){var t=Qc(e);return!(!t||t.nodeType!==op||!t.hasAttribute(Vp))}function Xc(e,t){var n=t||Kc(e);
// First clear any existing content.
if(!n)for(var r=!1,o=void 0;o=e.lastChild;)!r&&o.nodeType===op&&o.hasAttribute(Vp)&&(r=!0,xs(!1,"render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")),e.removeChild(o);!n||t||qk||(qk=!0,Mg(!1,"render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML."));return new $c(e,!1,n)}function Gc(e,t,n,r,o){Bk(n);
// TODO: Without `any` type, Flow says "Property cannot be accessed on any
// member of intersection type." Whyyyyyy.
var i=n._reactRootContainer;if(i){if("function"==typeof o){var a=o;o=function(){var e=jc(i._internalRoot);a.call(e)}}
// Update
null!=e?i.legacy_renderSubtreeIntoContainer(e,t,o):i.render(t,o)}else{if(
// Initial mount
i=n._reactRootContainer=Xc(n,r),"function"==typeof o){var l=o;o=function(){var e=jc(i._internalRoot);l.call(e)}}
// Initial mount should not be batched.
Oc(function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,o):i.render(t,o)})}return jc(i._internalRoot)}function Jc(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;
// TODO: pass ReactDOM portal implementation as third argument
return Yc(n)||t(!1,"Target container is not a DOM element."),Vc(e,n,null,r)}function Zc(e,n){var r=sm?"createRoot":"unstable_createRoot";return Yc(e)||t(!1,"%s(...): Target container is not a DOM element.",r),e._reactRootContainer&&xs(!1,"You are calling ReactDOM.%s() on a container that was previously passed to ReactDOM.render(). This is not supported.",sm?"createRoot":"unstable_createRoot"),e._reactHasBeenPassedToCreateRootDEV=!0,new $c(e,!0,null!=n&&!0===n.hydrate)}var es=n(3),ts=n(5),ns=n(19),rs=n(21),os=n(43),is=function(){};is=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")},
// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.
es||t(!1,"ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");var as=function(e,t,n,r,o,i,a,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}};
// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if("undefined"!=typeof window&&"function"==typeof window.dispatchEvent&&"undefined"!=typeof document&&"function"==typeof document.createEvent){var ls=document.createElement("react");as=function(e,n,r,o,i,a,l,u,c){function s(){
// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
ls.removeEventListener(w,s,!1),
// We check for window.hasOwnProperty('event') to prevent the
// window.event assignment in both IE <= 10 as they throw an error
// "Member not found" in strict mode, and in Firefox which does not
// support window.event.
void 0!==window.event&&window.hasOwnProperty("event")&&(window.event=m),n.apply(r,v),p=!1}function f(e){if(y=e.error,g=!0,null===y&&0===e.colno&&0===e.lineno&&(b=!0),e.defaultPrevented&&null!=y&&"object"==typeof y)try{y._suppressLogging=!0}catch(e){}}
// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebookincubator/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
"undefined"==typeof document&&t(!1,"The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var d=document.createEvent("Event"),p=!0,m=window.event,h=Object.getOwnPropertyDescriptor(window,"event"),v=Array.prototype.slice.call(arguments,3),y=void 0,g=!1,b=!1,w="react-"+(e||"invokeguardedcallback");
// Attach our event handlers
window.addEventListener("error",f),ls.addEventListener(w,s,!1),
// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
d.initEvent(w,!1,!1),ls.dispatchEvent(d),h&&Object.defineProperty(window,"event",h),p&&(g?b&&(y=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://fb.me/react-crossorigin-error for more information.")):
// The callback errored, but the error event never fired.
y=new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),this.onError(y)),
// Remove our event listeners
window.removeEventListener("error",f)}}var us=as,cs=!1,ss=null,fs=!1,ds=null,ps={onError:function(e){cs=!0,ss=e}},ms=null,hs={},vs=[],ys={},gs={},bs={},ws={},ks=function(){};ks=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(void 0===t)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(r.length>8)
// Check before the condition to catch violations early.
throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!=typeof console){var i=r.map(function(e){return""+e});i.unshift("Warning: "+t),
// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
Function.prototype.apply.call(console.error,console,i)}try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var a=0,l="Warning: "+t.replace(/%s/g,function(){return r[a++]});throw new Error(l)}catch(e){}}};var xs=ks,Ts=null,_s=null,Ss=null,Cs=void 0;Cs=function(e){var t=e._dispatchListeners,n=e._dispatchInstances,r=Array.isArray(t),o=r?t.length:t?1:0,i=Array.isArray(n),a=i?n.length:n?1:0;(i!==r||a!==o)&&xs(!1,"EventPluginUtils: Invalid `event`.")};/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var Es=null,Ps=function(e){e&&(m(e),e.isPersistent()||e.constructor.release(e))},Rs=function(e){return Ps(e)},Os={/**
   * @param {array} InjectedEventPluginOrder
   * @public
   */
injectEventPluginOrder:f,/**
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   */
injectEventPluginsByName:d},Ns=0,Is=1,Ds=2,Ms=3,Us=4,As=5,zs=6,Ls=7,Ws=8,Fs=9,js=10,Bs=11,Vs=12,Hs=13,qs=14,$s=15,Ys=16,Qs=17,Ks=18,Xs=Math.random().toString(36).slice(2),Gs="__reactInternalInstance$"+Xs,Js="__reactEventHandlers$"+Xs,Zs=!("undefined"==typeof window||!window.document||!window.document.createElement),ef={animationend:V("Animation","AnimationEnd"),animationiteration:V("Animation","AnimationIteration"),animationstart:V("Animation","AnimationStart"),transitionend:V("Transition","TransitionEnd")},tf={},nf={};/**
 * Bootstrap if a DOM exists.
 */
Zs&&(nf=document.createElement("div").style,
// On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
"AnimationEvent"in window||(delete ef.animationend.animation,delete ef.animationiteration.animation,delete ef.animationstart.animation),
// Same as above
"TransitionEvent"in window||delete ef.transitionend.transition);/**
 * To identify top level events in ReactDOM, we use constants defined by this
 * module. This is the only module that uses the unsafe* methods to express
 * that the constants actually correspond to the browser event names. This lets
 * us save some bundle size by avoiding a top level type -> event name map.
 * The rest of ReactDOM code should import top level types from this file.
 */
var rf=j("abort"),of=j(H("animationend")),af=j(H("animationiteration")),lf=j(H("animationstart")),uf=j("blur"),cf=j("canplay"),sf=j("canplaythrough"),ff=j("cancel"),df=j("change"),pf=j("click"),mf=j("close"),hf=j("compositionend"),vf=j("compositionstart"),yf=j("compositionupdate"),gf=j("contextmenu"),bf=j("copy"),wf=j("cut"),kf=j("dblclick"),xf=j("auxclick"),Tf=j("drag"),_f=j("dragend"),Sf=j("dragenter"),Cf=j("dragexit"),Ef=j("dragleave"),Pf=j("dragover"),Rf=j("dragstart"),Of=j("drop"),Nf=j("durationchange"),If=j("emptied"),Df=j("encrypted"),Mf=j("ended"),Uf=j("error"),Af=j("focus"),zf=j("gotpointercapture"),Lf=j("input"),Wf=j("invalid"),Ff=j("keydown"),jf=j("keypress"),Bf=j("keyup"),Vf=j("load"),Hf=j("loadstart"),qf=j("loadeddata"),$f=j("loadedmetadata"),Yf=j("lostpointercapture"),Qf=j("mousedown"),Kf=j("mousemove"),Xf=j("mouseout"),Gf=j("mouseover"),Jf=j("mouseup"),Zf=j("paste"),ed=j("pause"),td=j("play"),nd=j("playing"),rd=j("pointercancel"),od=j("pointerdown"),id=j("pointermove"),ad=j("pointerout"),ld=j("pointerover"),ud=j("pointerup"),cd=j("progress"),sd=j("ratechange"),fd=j("reset"),dd=j("scroll"),pd=j("seeked"),md=j("seeking"),hd=j("selectionchange"),vd=j("stalled"),yd=j("submit"),gd=j("suspend"),bd=j("textInput"),wd=j("timeupdate"),kd=j("toggle"),xd=j("touchcancel"),Td=j("touchend"),_d=j("touchmove"),Sd=j("touchstart"),Cd=j(H("transitionend")),Ed=j("volumechange"),Pd=j("waiting"),Rd=j("wheel"),Od=[rf,cf,sf,Nf,If,Df,Mf,Uf,qf,$f,Hf,ed,td,nd,cd,sd,pd,md,vd,gd,wd,Ed,Pd],Nd=null,Id=null,Dd=null,Md=10,Ud={type:null,target:null,
// currentTarget is set when dispatching; no use in copying it here
currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};ts(J.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=X)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(
// The ChangeEventPlugin registers a "propertychange" event for
// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
e.cancelBubble=!0),this.isPropagationStopped=X)},/**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
persist:function(){this.isPersistent=X},/**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
isPersistent:G,/**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
destructor:function(){var e=this.constructor.Interface;for(var t in e)Object.defineProperty(this,t,Z(t,e[t]));this.dispatchConfig=null,this._targetInst=null,this.nativeEvent=null,this.isDefaultPrevented=G,this.isPropagationStopped=G,this._dispatchListeners=null,this._dispatchInstances=null,Object.defineProperty(this,"nativeEvent",Z("nativeEvent",null)),Object.defineProperty(this,"isDefaultPrevented",Z("isDefaultPrevented",G)),Object.defineProperty(this,"isPropagationStopped",Z("isPropagationStopped",G)),Object.defineProperty(this,"preventDefault",Z("preventDefault",function(){})),Object.defineProperty(this,"stopPropagation",Z("stopPropagation",function(){}))}}),J.Interface=Ud,/**
 * Helper to reduce boilerplate when creating subclasses.
 */
J.extend=function(e){function t(){return n.apply(this,arguments)}var n=this,r=function(){};r.prototype=n.prototype;var o=new r;return ts(o,t.prototype),t.prototype=o,t.prototype.constructor=t,t.Interface=ts({},n.Interface,e),t.extend=n.extend,ne(t),t},ne(J);/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var Ad=J.extend({data:null}),zd=J.extend({data:null}),Ld=[9,13,27,32],Wd=229,Fd=Zs&&"CompositionEvent"in window,jd=null;Zs&&"documentMode"in document&&(jd=document.documentMode);
// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var Bd=Zs&&"TextEvent"in window&&!jd,Vd=Zs&&(!Fd||jd&&jd>8&&jd<=11),Hd=32,qd=String.fromCharCode(Hd),$d={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:[hf,jf,bd,Zf]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:[uf,hf,Ff,jf,Bf,Qf]},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:[uf,vf,Ff,jf,Bf,Qf]},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:[uf,yf,Ff,jf,Bf,Qf]}},Yd=!1,Qd=!1,Kd={eventTypes:$d,extractEvents:function(e,t,n,r){var o=ce(e,t,n,r),i=de(e,t,n,r);return null===o?i:null===i?o:[o,i]}},Xd=null,Gd=null,Jd=null,Zd=function(e,t){return e(t)},ep=function(e,t,n){return e(t,n)},tp=function(){},np=!1,rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},op=1,ip=3,ap=8,lp=9,up=11,cp=es.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
// Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.
cp.hasOwnProperty("ReactCurrentDispatcher")||(cp.ReactCurrentDispatcher={current:null});var sp=/^(.*)[\\\/]/,fp=function(e,t,n){var r="";if(t){var o=t.fileName,i=o.replace(sp,"");
// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(i)){var a=o.match(sp);if(a){var l=a[1];if(l){i=l.replace(sp,"")+"/"+i}}}r=" (at "+i+":"+t.lineNumber+")"}else n&&(r=" (created by "+n+")");return"\n    in "+(e||"Unknown")+r},dp="function"==typeof Symbol&&Symbol.for,pp=dp?Symbol.for("react.element"):60103,mp=dp?Symbol.for("react.portal"):60106,hp=dp?Symbol.for("react.fragment"):60107,vp=dp?Symbol.for("react.strict_mode"):60108,yp=dp?Symbol.for("react.profiler"):60114,gp=dp?Symbol.for("react.provider"):60109,bp=dp?Symbol.for("react.context"):60110,wp=dp?Symbol.for("react.concurrent_mode"):60111,kp=dp?Symbol.for("react.forward_ref"):60112,xp=dp?Symbol.for("react.suspense"):60113,Tp=dp?Symbol.for("react.memo"):60115,_p=dp?Symbol.for("react.lazy"):60116,Sp="function"==typeof Symbol&&Symbol.iterator,Cp="@@iterator",Ep=0,Pp=1,Rp=2,Op=cp.ReactDebugCurrentFrame,Np=null,Ip=null,Dp=xs;Dp=function(e,t){if(!e){
// eslint-disable-next-line react-internal/warning-and-invariant-args
for(var n=cp.ReactDebugCurrentFrame,r=n.getStackAddendum(),o=arguments.length,i=Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];xs.apply(void 0,[!1,t+"%s"].concat(i,[r]))}};var Mp=Dp,Up=0,Ap=2,zp=3,Lp=4,Wp=5,Fp=6,jp=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Bp=jp+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Vp="data-reactroot",Hp=new RegExp("^["+jp+"]["+Bp+"]*$"),qp=Object.prototype.hasOwnProperty,$p={},Yp={},Qp={};
// These props are reserved by React. They shouldn't be written to the DOM.
["children","dangerouslySetInnerHTML",
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
"defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(function(e){Qp[e]=new qe(e,Up,!1,// mustUseProperty
e,// attributeName
null)}),
// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],n=e[1];Qp[t]=new qe(t,1,!1,// mustUseProperty
n,// attributeName
null)}),
// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qp[e]=new qe(e,Ap,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null)}),
// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qp[e]=new qe(e,Ap,!1,// mustUseProperty
e,// attributeName
null)}),
// These are HTML boolean attributes.
["allowFullScreen","async",
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
"autoFocus","autoPlay","controls","default","defer","disabled","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless",
// Microdata
"itemScope"].forEach(function(e){Qp[e]=new qe(e,zp,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null)}),
// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
["checked",
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
"multiple","muted","selected"].forEach(function(e){Qp[e]=new qe(e,zp,!0,// mustUseProperty
e,// attributeName
null)}),
// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
["capture","download"].forEach(function(e){Qp[e]=new qe(e,Lp,!1,// mustUseProperty
e,// attributeName
null)}),
// These are HTML attributes that must be positive numbers.
["cols","rows","size","span"].forEach(function(e){Qp[e]=new qe(e,Fp,!1,// mustUseProperty
e,// attributeName
null)}),
// These are HTML attributes that must be numbers.
["rowSpan","start"].forEach(function(e){Qp[e]=new qe(e,Wp,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null)});var Kp=/[\-\:]([a-z])/g,Xp=function(e){return e[1].toUpperCase()};
// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(Kp,Xp);Qp[t]=new qe(t,1,!1,// mustUseProperty
e,null)}),
// String SVG attributes with the xlink namespace.
["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(Kp,Xp);Qp[t]=new qe(t,1,!1,// mustUseProperty
e,"http://www.w3.org/1999/xlink")}),
// String SVG attributes with the xml namespace.
["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kp,Xp);Qp[t]=new qe(t,1,!1,// mustUseProperty
e,"http://www.w3.org/XML/1998/namespace")}),
// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
["tabIndex","crossOrigin"].forEach(function(e){Qp[e]=new qe(e,1,!1,// mustUseProperty
e.toLowerCase(),// attributeName
null)});var Gp=null,Jp={checkPropTypes:null};Gp=cp.ReactDebugCurrentFrame;var Zp={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},em={value:function(e,t,n){return Zp[e.type]||e.onChange||e.readOnly||e.disabled||null==e[t]?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return e.onChange||e.readOnly||e.disabled||null==e[t]?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}};/**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
Jp.checkPropTypes=function(e,t){ns(em,t,"prop",e,Gp.getStackAddendum)};var tm=!0,nm=!1,rm=!0,om=!0,im=!1,am=!0,lm=!0,um=!1,cm=!1,sm=!1,fm=!1,dm=!1,pm=!1,mm=!1,hm=!1,vm={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:[uf,df,pf,Af,Lf,Ff,Bf,hd]}},ym=null,gm=null,bm=!1;Zs&&(
// IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
bm=ke("input")&&(!document.documentMode||document.documentMode>9));/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var wm={eventTypes:vm,_isInputEventSupported:bm,extractEvents:function(e,t,n,r){var o=t?C(t):window,i=void 0,a=void 0;if(lt(o)?i=ft:be(o)?bm?i=bt:(i=vt,a=ht):yt(o)&&(i=gt),i){var l=i(e,t);if(l){return at(l,n,r)}}a&&a(e,o,t),
// When blurring, set the value attribute for number inputs
e===uf&&wt(o)}},km=["ResponderEventPlugin","SimpleEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin"],xm=J.extend({view:null,detail:null}),Tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},_m=0,Sm=0,Cm=!1,Em=!1,Pm=xm.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:xt,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=_m;return _m=e.screenX,Cm?"mousemove"===e.type?e.screenX-t:0:(Cm=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Sm;return Sm=e.screenY,Em?"mousemove"===e.type?e.screenY-t:0:(Em=!0,0)}}),Rm=Pm.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Om={mouseEnter:{registrationName:"onMouseEnter",dependencies:[Xf,Gf]},mouseLeave:{registrationName:"onMouseLeave",dependencies:[Xf,Gf]},pointerEnter:{registrationName:"onPointerEnter",dependencies:[ad,ld]},pointerLeave:{registrationName:"onPointerLeave",dependencies:[ad,ld]}},Nm={eventTypes:Om,/**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
extractEvents:function(e,t,n,r){var o=e===Gf||e===ld,i=e===Xf||e===ad;if(o&&(n.relatedTarget||n.fromElement))return null;if(!i&&!o)
// Must not be a mouse or pointer in or out - ignoring.
return null;var a=void 0;if(r.window===r)
// `nativeEventTarget` is probably a window object.
a=r;else{
// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var l=r.ownerDocument;a=l?l.defaultView||l.parentWindow:window}var u=void 0,c=void 0;if(i){u=t;var s=n.relatedTarget||n.toElement;c=s?_(s):null}else
// Moving to a node from outside the window.
u=null,c=t;if(u===c)
// Nothing pertains to our managed components.
return null;var f=void 0,d=void 0,p=void 0,m=void 0;e===Xf||e===Gf?(f=Pm,d=Om.mouseLeave,p=Om.mouseEnter,m="mouse"):e!==ad&&e!==ld||(f=Rm,d=Om.pointerLeave,p=Om.pointerEnter,m="pointer");var h=null==u?a:C(u),v=null==c?a:C(c),y=f.getPooled(d,u,n,r);y.type=m+"leave",y.target=h,y.relatedTarget=v;var g=f.getPooled(p,c,n,r);return g.type=m+"enter",g.target=v,g.relatedTarget=h,W(y,g,u,c),[y,g]}},Im=Object.prototype.hasOwnProperty,Dm=/*              */0,Mm=/*         */1,Um=/*             */2,Am=/*                */4,zm=/*    */6,Lm=/*              */8,Wm=/*          */16,Fm=/*              */32,jm=/*            */64,Bm=/*                   */128,Vm=/*              */256,Hm=/*               */512,qm=/*   */932,$m=/*        */1023,Ym=/*            */1024,Qm=/*         */2048,Km=cp.ReactCurrentOwner,Xm=1,Gm=2,Jm=3,Zm=J.extend({animationName:null,elapsedTime:null,pseudoElement:null}),eh=J.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),th=xm.extend({relatedTarget:null}),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh=xm.extend({key:Lt,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:xt,
// Legacy Interface
charCode:function(e){
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
return"keypress"===e.type?zt(e):0},keyCode:function(e){
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
return"keypress"===e.type?zt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ih=Pm.extend({dataTransfer:null}),ah=xm.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:xt}),lh=J.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),uh=Pm.extend({deltaX:function(e){// Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){// Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
// Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,
// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null}),ch=[[uf,"blur"],[ff,"cancel"],[pf,"click"],[mf,"close"],[gf,"contextMenu"],[bf,"copy"],[wf,"cut"],[xf,"auxClick"],[kf,"doubleClick"],[_f,"dragEnd"],[Rf,"dragStart"],[Of,"drop"],[Af,"focus"],[Lf,"input"],[Wf,"invalid"],[Ff,"keyDown"],[jf,"keyPress"],[Bf,"keyUp"],[Qf,"mouseDown"],[Jf,"mouseUp"],[Zf,"paste"],[ed,"pause"],[td,"play"],[rd,"pointerCancel"],[od,"pointerDown"],[ud,"pointerUp"],[sd,"rateChange"],[fd,"reset"],[pd,"seeked"],[yd,"submit"],[xd,"touchCancel"],[Td,"touchEnd"],[Sd,"touchStart"],[Ed,"volumeChange"]],sh=[[rf,"abort"],[of,"animationEnd"],[af,"animationIteration"],[lf,"animationStart"],[cf,"canPlay"],[sf,"canPlayThrough"],[Tf,"drag"],[Sf,"dragEnter"],[Cf,"dragExit"],[Ef,"dragLeave"],[Pf,"dragOver"],[Nf,"durationChange"],[If,"emptied"],[Df,"encrypted"],[Mf,"ended"],[Uf,"error"],[zf,"gotPointerCapture"],[Vf,"load"],[qf,"loadedData"],[$f,"loadedMetadata"],[Hf,"loadStart"],[Yf,"lostPointerCapture"],[Kf,"mouseMove"],[Xf,"mouseOut"],[Gf,"mouseOver"],[nd,"playing"],[id,"pointerMove"],[ad,"pointerOut"],[ld,"pointerOver"],[cd,"progress"],[dd,"scroll"],[md,"seeking"],[vd,"stalled"],[gd,"suspend"],[wd,"timeUpdate"],[kd,"toggle"],[_d,"touchMove"],[Cd,"transitionEnd"],[Pd,"waiting"],[Rd,"wheel"]],fh={},dh={};ch.forEach(function(e){Wt(e,!0)}),sh.forEach(function(e){Wt(e,!1)});
// Only used in DEV for exhaustiveness validation.
var ph=[rf,ff,cf,sf,mf,Nf,If,Df,Mf,Uf,Lf,Wf,Vf,qf,$f,Hf,ed,td,nd,cd,sd,fd,pd,md,vd,yd,gd,wd,kd,Ed,Pd],mh={eventTypes:fh,isInteractiveTopLevelEventType:function(e){var t=dh[e];return void 0!==t&&!0===t.isInteractive},extractEvents:function(e,t,n,r){var o=dh[e];if(!o)return null;var i=void 0;switch(e){case jf:
// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===zt(n))return null;/* falls through */
case Ff:case Bf:i=oh;break;case uf:case Af:i=th;break;case pf:
// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===n.button)return null;/* falls through */
case xf:case kf:case Qf:case Kf:case Jf:
// TODO: Disabled elements should not respond to mouse events
/* falls through */
case Xf:case Gf:case gf:i=Pm;break;case Tf:case _f:case Sf:case Cf:case Ef:case Pf:case Rf:case Of:i=ih;break;case xd:case Td:case _d:case Sd:i=ah;break;case of:case af:case lf:i=Zm;break;case Cd:i=lh;break;case dd:i=xm;break;case Rd:i=uh;break;case bf:case wf:case Zf:i=eh;break;case zf:case Yf:case rd:case od:case id:case ad:case ld:case ud:i=Rm;break;default:-1===ph.indexOf(e)&&xs(!1,"SimpleEventPlugin: Unhandled event type, `%s`. This warning is likely caused by a bug in React. Please file an issue.",e),
// HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
i=J}var a=i.getPooled(o,t,n,r);return L(a),a}},hh=mh.isInteractiveTopLevelEventType,vh=10,yh=[],gh=!0,bh={},wh=0,kh="_reactListenersID"+(""+Math.random()).slice(2),xh=Zs&&"documentMode"in document&&document.documentMode<=11,Th={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:[uf,gf,_f,Af,Ff,Bf,Qf,Jf,hd]}},_h=null,Sh=null,Ch=null,Eh=!1,Ph={eventTypes:Th,extractEvents:function(e,t,n,r){var o=gn(r);
// Track whether all listeners exists for this plugin. If none exist, we do
// not extract events. See #3639.
if(!o||!Jt("onSelect",o))return null;var i=t?C(t):window;switch(e){
// Track the input node that has focus.
case Af:(be(i)||"true"===i.contentEditable)&&(_h=i,Sh=t,Ch=null);break;case uf:_h=null,Sh=null,Ch=null;break;
// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case Qf:Eh=!0;break;case gf:case Jf:case _f:return Eh=!1,bn(n,r);
// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case hd:if(xh)break;
// falls through
case Ff:case Bf:return bn(n,r)}return null}};/**
 * Inject modules for resolving DOM hierarchy and plugin ordering.
 */
Os.injectEventPluginOrder(km),function(e,t,n){Ts=e,_s=t,(Ss=n)&&_s||xs(!1,"EventPluginUtils.setComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.")}(E,S,C),/**
 * Some important event plugins included by default (without having to require
 * them).
 */
Os.injectEventPluginsByName({SimpleEventPlugin:mh,EnterLeaveEventPlugin:Nm,ChangeEventPlugin:wm,SelectEventPlugin:Ph,BeforeInputEventPlugin:Kd});var Rh=!1,Oh=!1,Nh=void 0;Nh=!1;var Ih=["value","defaultValue"],Dh=!1,Mh="http://www.w3.org/1999/xhtml",Uh="http://www.w3.org/1998/Math/MathML",Ah="http://www.w3.org/2000/svg",zh={html:Mh,mathml:Uh,svg:Ah},Lh=void 0,Wh=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){
// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
if(e.namespaceURI!==zh.svg||"innerHTML"in e)e.innerHTML=t;else{Lh=Lh||document.createElement("div"),Lh.innerHTML="<svg>"+t+"</svg>";for(var n=Lh.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}}),Fh=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===ip)return void(n.nodeValue=t)}e.textContent=t},jh={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},Bh={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,
// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];
// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(Bh).forEach(function(e){Vh.forEach(function(t){Bh[Wn(t,e)]=Bh[e]})});var Hh=/([A-Z])/g,qh=/^ms-/,$h=function(){},Yh=/^(?:webkit|moz|o)[A-Z]/,Qh=/^-ms-/,Kh=/-(.)/g,Xh=/;\s*$/,Gh={},Jh={},Zh=!1,ev=!1,tv=function(e){return e.replace(Kh,function(e,t){return t.toUpperCase()})},nv=function(e){Gh.hasOwnProperty(e)&&Gh[e]||(Gh[e]=!0,Mp(!1,"Unsupported style property %s. Did you mean %s?",e,
// As Andi Smith suggests
// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
// is converted to lowercase `ms`.
tv(e.replace(Qh,"ms-"))))},rv=function(e){Gh.hasOwnProperty(e)&&Gh[e]||(Gh[e]=!0,Mp(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},ov=function(e,t){Jh.hasOwnProperty(t)&&Jh[t]||(Jh[t]=!0,Mp(!1,'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',e,t.replace(Xh,"")))},iv=function(e,t){Zh||(Zh=!0,Mp(!1,"`NaN` is an invalid value for the `%s` css style property.",e))},av=function(e,t){ev||(ev=!0,Mp(!1,"`Infinity` is an invalid value for the `%s` css style property.",e))};$h=function(e,t){e.indexOf("-")>-1?nv(e):Yh.test(e)?rv(e):Xh.test(t)&&ov(e,t),"number"==typeof t&&(isNaN(t)?iv(e):isFinite(t)||av(e))};var lv=$h,uv={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},cv=ts({menuitem:!0},uv),sv="__html",fv=null;fv=cp.ReactDebugCurrentFrame;
// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var dv={
// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",enctype:"encType",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",
// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},pv={"aria-current":0,// state
"aria-details":0,"aria-disabled":0,// state
"aria-hidden":0,// state
"aria-invalid":0,// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,
// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,
// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,
// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,
// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},mv={},hv=new RegExp("^(aria)-["+Bp+"]*$"),vv=new RegExp("^(aria)[A-Z]["+Bp+"]*$"),yv=Object.prototype.hasOwnProperty,gv=!1,bv=function(){},wv={},kv=Object.prototype.hasOwnProperty,xv=/^on./,Tv=/^on[^A-Z]/,_v=new RegExp("^(aria)-["+Bp+"]*$"),Sv=new RegExp("^(aria)[A-Z]["+Bp+"]*$");bv=function(e,t,n,r){if(kv.call(wv,t)&&wv[t])return!0;var o=t.toLowerCase();if("onfocusin"===o||"onfocusout"===o)return Mp(!1,"React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),wv[t]=!0,!0;
// We can't rely on the event system being injected on the server.
if(r){if(gs.hasOwnProperty(t))return!0;var i=ws.hasOwnProperty(o)?ws[o]:null;if(null!=i)return Mp(!1,"Invalid event handler property `%s`. Did you mean `%s`?",t,i),wv[t]=!0,!0;if(xv.test(t))return Mp(!1,"Unknown event handler property `%s`. It will be ignored.",t),wv[t]=!0,!0}else if(xv.test(t))
// If no event plugins have been injected, we are in a server environment.
// So we can't tell if the event name is correct for sure, but we can filter
// out known bad ones like `onclick`. We can't suggest a specific replacement though.
return Tv.test(t)&&Mp(!1,"Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),wv[t]=!0,!0;
// Let the ARIA attribute hook validate ARIA attributes
if(_v.test(t)||Sv.test(t))return!0;if("innerhtml"===o)return Mp(!1,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),wv[t]=!0,!0;if("aria"===o)return Mp(!1,"The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),wv[t]=!0,!0;if("is"===o&&null!==n&&void 0!==n&&"string"!=typeof n)return Mp(!1,"Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),wv[t]=!0,!0;if("number"==typeof n&&isNaN(n))return Mp(!1,"Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),wv[t]=!0,!0;var a=He(t),l=null!==a&&a.type===Up;
// Known attributes should match the casing specified in the property config.
if(dv.hasOwnProperty(o)){var u=dv[o];if(u!==t)return Mp(!1,"Invalid DOM property `%s`. Did you mean `%s`?",t,u),wv[t]=!0,!0}else if(!l&&t!==o)
// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
return Mp(!1,"React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,o),wv[t]=!0,!0;
// Now that we've validated casing, do not validate
// data types for reserved props
// Warn when a known attribute is a bad type
// Warn when passing the strings 'false' or 'true' into a boolean prop
return"boolean"==typeof n&&Be(t,n,a,!1)?(n?Mp(!1,'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):Mp(!1,'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),wv[t]=!0,!0):!!l||(Be(t,n,a,!1)?(wv[t]=!0,!1):"false"!==n&&"true"!==n||null===a||a.type!==zp||(Mp(!1,"Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,"false"===n?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),wv[t]=!0,!0))};var Cv=function(e,t,n){var r=[];for(var o in t){bv(e,o,t[o],n)||r.push(o)}var i=r.map(function(e){return"`"+e+"`"}).join(", ");1===r.length?Mp(!1,"Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://fb.me/react-attribute-behavior",i,e):r.length>1&&Mp(!1,"Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://fb.me/react-attribute-behavior",i,e)},Ev=!1,Pv=!1,Rv="dangerouslySetInnerHTML",Ov="suppressContentEditableWarning",Nv="suppressHydrationWarning",Iv="autoFocus",Dv="children",Mv="style",Uv="__html",Av=zh.html,zv=void 0,Lv=void 0,Wv=void 0,Fv=void 0,jv=void 0,Bv=void 0,Vv=void 0,Hv=void 0,qv=void 0,$v=void 0;zv={
// Chrome is the only major browser not shipping <time>. But as of July
// 2017 it intends to ship it due to widespread usage. We intentionally
// *don't* warn for <time> even if it's unrecognized by Chrome because
// it soon will be, and many apps have been using it anyway.
time:!0,
// There are working polyfills for <dialog>. Let people use it.
dialog:!0,
// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:!0},Wv=function(e,t){Gn(e,t),Jn(e,t),Zn(e,t,/* canUseEventSystem */!0)},
// IE 11 parses & normalizes the style attribute as opposed to other
// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
Hv=Zs&&!document.documentMode;
// HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var Yv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;qv=function(e){return("string"==typeof e?e:""+e).replace(Yv,"\n").replace(Qv,"")},Fv=function(e,t){if(!Ev){var n=qv(t),r=qv(e);r!==n&&(Ev=!0,xs(!1,'Text content did not match. Server: "%s" Client: "%s"',r,n))}},jv=function(e,t,n){if(!Ev){var r=qv(n),o=qv(t);o!==r&&(Ev=!0,xs(!1,"Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(o),JSON.stringify(r)))}},Bv=function(e){if(!Ev){Ev=!0;var t=[];e.forEach(function(e){t.push(e)}),xs(!1,"Extra attributes from the server: %s",t)}},Vv=function(e,t){!1===t?Mp(!1,"Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):Mp(!1,"Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},
// Parse the HTML and read it back to normalize the HTML string so that it
// can be used for comparison.
$v=function(e,t){
// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var n=e.namespaceURI===Av?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML};
// TODO: direct imports like some-package/src/* are bad. Fix me.
var Kv=function(){},Xv=function(){},Gv=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],Jv=["applet","caption","html","table","td","th","marquee","object","template",
// https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],Zv=Jv.concat(["button"]),ey=["dd","dt","li","option","optgroup","p","rp","rt"],ty={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};Xv=function(e,t){var n=ts({},e||ty),r={tag:t};
// See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
return-1!==Jv.indexOf(t)&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),-1!==Zv.indexOf(t)&&(n.pTagInButtonScope=null),-1!==Gv.indexOf(t)&&"address"!==t&&"div"!==t&&"p"!==t&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,"form"===t&&(n.formTag=r),"a"===t&&(n.aTagInScope=r),"button"===t&&(n.buttonTagInScope=r),"nobr"===t&&(n.nobrTagInScope=r),"p"===t&&(n.pTagInButtonScope=r),"li"===t&&(n.listItemTagAutoclosing=r),"dd"!==t&&"dt"!==t||(n.dlItemTagAutoclosing=r),n};/**
   * Returns whether
   */
var ny=function(e,t){
// First, let's check if we're in an unusual parsing mode...
switch(t){
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case"select":return"option"===e||"optgroup"===e||"#text"===e;case"optgroup":return"option"===e||"#text"===e;
// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case"option":return"#text"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case"tr":return"th"===e||"td"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case"tbody":case"thead":case"tfoot":return"tr"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case"colgroup":return"col"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case"table":return"caption"===e||"colgroup"===e||"tbody"===e||"tfoot"===e||"thead"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case"head":return"base"===e||"basefont"===e||"bgsound"===e||"link"===e||"meta"===e||"title"===e||"noscript"===e||"noframes"===e||"style"===e||"script"===e||"template"===e;
// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case"html":return"head"===e||"body"===e;case"#document":return"html"===e}
// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==t&&"h2"!==t&&"h3"!==t&&"h4"!==t&&"h5"!==t&&"h6"!==t;case"rp":case"rt":return-1===ey.indexOf(t);case"body":case"caption":case"col":case"colgroup":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":
// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==t}return!0},ry=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":
// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},oy={};Kv=function(e,t,n){n=n||ty;var r=n.current,o=r&&r.tag;null!=t&&(null!=e&&xs(!1,"validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var i=ny(e,o)?null:r,a=i?null:ry(e,n),l=i||a;if(l){var u=l.tag,c=Ae(),s=!!i+"|"+e+"|"+u+"|"+c;if(!oy[s]){oy[s]=!0;var f=e,d="";if("#text"===e?/\S/.test(t)?f="Text nodes":(f="Whitespace text nodes",d=" Make sure you don't have any extra whitespace between tags on each line of your source code."):f="<"+e+">",i){var p="";"table"===u&&"tr"===e&&(p+=" Add a <tbody> to your code to match the DOM tree generated by the browser."),xs(!1,"validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s%s",f,u,d,p,c)}else xs(!1,"validateDOMNesting(...): %s cannot appear as a descendant of <%s>.%s",f,u,c)}}};
// Persistence (when unsupported)
var iy=!1,ay=wr,ly=wr,uy=wr,cy=wr,sy=wr,fy=wr,dy=wr,py=wr,my=void 0;my="suppressHydrationWarning";var hy="$",vy="/$",yy="style",gy=null,by=null,wy=!0,ky="function"==typeof setTimeout?setTimeout:void 0,xy="function"==typeof clearTimeout?clearTimeout:void 0,Ty=-1,_y=rs.unstable_scheduleCallback,Sy=rs.unstable_cancelCallback,Cy=!0,Ey=!0,Py="undefined"!=typeof performance&&"function"==typeof performance.mark&&"function"==typeof performance.clearMarks&&"function"==typeof performance.measure&&"function"==typeof performance.clearMeasures,Ry=null,Oy=null,Ny=null,Iy=!1,Dy=!1,My=!1,Uy=0,Ay=0,zy=!1,Ly=new Set,Wy=function(e){return"⚛ "+e},Fy=function(e,t){return(t?"⛔ ":"⚛ ")+e+(t?" Warning: "+t:"")},jy=function(e){performance.mark(Wy(e))},By=function(e){performance.clearMarks(Wy(e))},Vy=function(e,t,n){var r=Wy(t),o=Fy(e,n);try{performance.measure(o,r)}catch(e){}
// If previous mark was missing for some reason, this will throw.
// This could only happen if React crashed in an unexpected place earlier.
// Don't pile on with more errors.
// Clear marks immediately to avoid growing buffer.
performance.clearMarks(r),performance.clearMeasures(o)},Hy=function(e,t){return e+" (#"+t+")"},qy=function(e,t,n){return null===n?e+" ["+(t?"update":"mount")+"]":e+"."+n},$y=function(e,t){var n=Ie(e.type)||"Unknown",r=e._debugID,o=null!==e.alternate,i=qy(n,o,t);if(Iy&&Ly.has(i))
// During the commit phase, we don't show duplicate labels because
// there is a fixed overhead for every measurement, and we don't
// want to stretch the commit phase beyond necessary.
return!1;Ly.add(i);var a=Hy(i,r);return jy(a),!0},Yy=function(e,t){var n=Ie(e.type)||"Unknown",r=e._debugID,o=null!==e.alternate,i=qy(n,o,t),a=Hy(i,r);By(a)},Qy=function(e,t,n){var r=Ie(e.type)||"Unknown",o=e._debugID,i=null!==e.alternate,a=qy(r,i,t),l=Hy(a,o);Vy(a,l,n)},Ky=function(e){
// Host components should be skipped in the timeline.
// We could check typeof fiber.type, but does this work with RN?
switch(e.tag){case Ms:case As:case zs:case Us:case Ls:case js:case Fs:case Ws:return!0;default:return!1}},Xy=function(){null!==Oy&&null!==Ny&&Yy(Ny,Oy),Ny=null,Oy=null,My=!1},Gy=function(){for(
// Stops all currently active measurements so that they can be resumed
// if we continue in a later deferred loop from the same unit of work.
var e=Ry;e;)e._debugIsCurrentlyTiming&&Qy(e,null,null),e=e.return},Jy=function(e){null!==e.return&&Jy(e.return),e._debugIsCurrentlyTiming&&$y(e,null)},Zy=function(){
// Resumes all measurements that were active during the last deferred loop.
null!==Ry&&Jy(Ry)},eg=[],tg=void 0;tg=[];var ng=-1,rg=void 0;rg={};var og={};Object.freeze(og);
// A cursor to the current merged context object on the stack.
var ig=Mo(og),ag=Mo(!1),lg=og,ug=null,cg=null,sg=!1,fg="undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__,dg=1073741823,pg=0,mg=1,hg=dg,vg=10,yg=dg-1,gg=5e3,bg=250,wg=500,kg=100,xg=0,Tg=1,_g=2,Sg=4,Cg=void 0;Cg=!1;try{var Eg=Object.preventExtensions({}),Pg=new Map([[Eg,null]]),Rg=new Set([Eg]);
// This is necessary for Rollup to not consider these unused.
// https://github.com/rollup/rollup/issues/1771
// TODO: we can remove these if Rollup fixes the bug.
Pg.set(0,0),Rg.add(0)}catch(e){
// TODO: Consider warning about bad polyfills
Cg=!0}
// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.
var Og=void 0;Og=1;
// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var Ng=function(e,t,n,r){
// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new li(e,t,n,r)},Ig=function(){},Dg=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});try{
// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(i)}catch(e){}};Ig=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];Dg.apply(void 0,[t].concat(r))}};var Mg=Ig,Ug={discardPendingWarnings:function(){},flushPendingDeprecationWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordDeprecationWarnings:function(e,t){},recordUnsafeLifecycleWarnings:function(e,t){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){}},Ag={UNSAFE_componentWillMount:"componentDidMount",UNSAFE_componentWillReceiveProps:"static getDerivedStateFromProps",UNSAFE_componentWillUpdate:"componentDidUpdate"},zg=[],Lg=[],Wg=[],Fg=new Map,jg=new Map,Bg=new Set,Vg=new Set,Hg=new Set,qg=function(e){var t=[];return e.forEach(function(e){t.push(e)}),t.sort().join(", ")};Ug.discardPendingWarnings=function(){zg=[],Lg=[],Wg=[],Fg=new Map,jg=new Map},Ug.flushPendingUnsafeLifecycleWarnings=function(){Fg.forEach(function(e,t){var n=[];if(Object.keys(e).forEach(function(t){var r=e[t];if(r.length>0){var o=new Set;r.forEach(function(e){o.add(Ie(e.type)||"Component"),Vg.add(e.type)});var i=t.replace("UNSAFE_",""),a=Ag[t],l=qg(o);n.push(i+": Please update the following components to use "+a+" instead: "+l)}}),n.length>0){var r=Me(t);xs(!1,"Unsafe lifecycle methods were found within a strict-mode tree:%s\n\n%s\n\nLearn more about this warning here:\nhttps://fb.me/react-strict-mode-warnings",r,n.join("\n\n"))}}),Fg=new Map};var $g=function(e){for(var t=null,n=e;null!==n;)n.mode&_g&&(t=n),n=n.return;return t};Ug.flushPendingDeprecationWarnings=function(){if(zg.length>0){var e=new Set;zg.forEach(function(t){e.add(Ie(t.type)||"Component"),Bg.add(t.type)});var t=qg(e);Mg(!1,"componentWillMount is deprecated and will be removed in the next major version. Use componentDidMount instead. As a temporary workaround, you can rename to UNSAFE_componentWillMount.\n\nPlease update the following components: %s\n\nLearn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",t),zg=[]}if(Lg.length>0){var n=new Set;Lg.forEach(function(e){n.add(Ie(e.type)||"Component"),Bg.add(e.type)});var r=qg(n);Mg(!1,"componentWillReceiveProps is deprecated and will be removed in the next major version. Use static getDerivedStateFromProps instead.\n\nPlease update the following components: %s\n\nLearn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",r),Lg=[]}if(Wg.length>0){var o=new Set;Wg.forEach(function(e){o.add(Ie(e.type)||"Component"),Bg.add(e.type)});var i=qg(o);Mg(!1,"componentWillUpdate is deprecated and will be removed in the next major version. Use componentDidUpdate instead. As a temporary workaround, you can rename to UNSAFE_componentWillUpdate.\n\nPlease update the following components: %s\n\nLearn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",i),Wg=[]}},Ug.recordDeprecationWarnings=function(e,t){
// Dedup strategy: Warn once per component.
Bg.has(e.type)||(
// Don't warn about react-lifecycles-compat polyfilled components.
"function"==typeof t.componentWillMount&&!0!==t.componentWillMount.__suppressDeprecationWarning&&zg.push(e),"function"==typeof t.componentWillReceiveProps&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning&&Lg.push(e),"function"==typeof t.componentWillUpdate&&!0!==t.componentWillUpdate.__suppressDeprecationWarning&&Wg.push(e))},Ug.recordUnsafeLifecycleWarnings=function(e,t){var n=$g(e);if(null===n)return void xs(!1,"Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
// Dedup strategy: Warn once per component.
// This is difficult to track any other way since component names
// are often vague and are likely to collide between 3rd party libraries.
// An expand property is probably okay to use here since it's DEV-only,
// and will only be set in the event of serious warnings.
if(!Vg.has(e.type)){var r=void 0;Fg.has(n)?r=Fg.get(n):(r={UNSAFE_componentWillMount:[],UNSAFE_componentWillReceiveProps:[],UNSAFE_componentWillUpdate:[]},Fg.set(n,r));var o=[];("function"==typeof t.componentWillMount&&!0!==t.componentWillMount.__suppressDeprecationWarning||"function"==typeof t.UNSAFE_componentWillMount)&&o.push("UNSAFE_componentWillMount"),("function"==typeof t.componentWillReceiveProps&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning||"function"==typeof t.UNSAFE_componentWillReceiveProps)&&o.push("UNSAFE_componentWillReceiveProps"),("function"==typeof t.componentWillUpdate&&!0!==t.componentWillUpdate.__suppressDeprecationWarning||"function"==typeof t.UNSAFE_componentWillUpdate)&&o.push("UNSAFE_componentWillUpdate"),o.length>0&&o.forEach(function(t){r[t].push(e)})}},Ug.recordLegacyContextWarning=function(e,t){var n=$g(e);if(null===n)return void xs(!1,"Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
// Dedup strategy: Warn once per component.
if(!Hg.has(e.type)){var r=jg.get(n);(null!=e.type.contextTypes||null!=e.type.childContextTypes||null!==t&&"function"==typeof t.getChildContext)&&(void 0===r&&(r=[],jg.set(n,r)),r.push(e))}},Ug.flushLegacyContextWarning=function(){jg.forEach(function(e,t){var n=new Set;e.forEach(function(e){n.add(Ie(e.type)||"Component"),Hg.add(e.type)});var r=qg(n),o=Me(t);xs(!1,"Legacy context API has been detected within a strict-mode tree: %s\n\nPlease update the following components: %s\n\nLearn more about this warning here:\nhttps://fb.me/react-strict-mode-warnings",o,r)})};
// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var Yg={debugTool:null},Qg=Yg,Kg={},Xg=Array.isArray,Gg=(new es.Component).refs,Jg=void 0,Zg=void 0,eb=void 0,tb=void 0,nb=void 0,rb=void 0,ob=void 0,ib=void 0,ab=void 0,lb=void 0;Jg=new Set,Zg=new Set,eb=new Set,tb=new Set,ib=new Set,nb=new Set,ab=new Set,lb=new Set;var ub=new Set;ob=function(e,t){if(null!==e&&"function"!=typeof e){var n=t+"_"+e;ub.has(n)||(ub.add(n),xs(!1,"%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},rb=function(e,t){if(void 0===t){var n=Ie(e)||"Component";nb.has(n)||(nb.add(n),xs(!1,"%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},
// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(Kg,"_processChildContext",{enumerable:!1,value:function(){t(!1,"_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(Kg);var cb={isMounted:Ot,enqueueSetState:function(e,t,n){var r=St(e),o=vc(),i=Zu(o,r),a=jl(i);a.payload=t,void 0!==n&&null!==n&&(ob(n,"setState"),a.callback=n),Vu(),Vl(r,a),ac(r,i)},enqueueReplaceState:function(e,t,n){var r=St(e),o=vc(),i=Zu(o,r),a=jl(i);a.tag=Cw,a.payload=t,void 0!==n&&null!==n&&(ob(n,"replaceState"),a.callback=n),Vu(),Vl(r,a),ac(r,i)},enqueueForceUpdate:function(e,t){var n=St(e),r=vc(),o=Zu(r,n),i=jl(o);i.tag=Ew,void 0!==t&&null!==t&&(ob(t,"forceUpdate"),i.callback=t),Vu(),Vl(n,i),ac(n,o)}},sb=void 0,fb=void 0,db=void 0,pb=void 0,mb=void 0,hb=function(e){};sb=!1,fb=!1,db={},/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
pb={},mb={},hb=function(e){if(null!==e&&"object"==typeof e&&e._store&&!e._store.validated&&null==e.key){"object"!=typeof e._store&&t(!1,"React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."),e._store.validated=!0;var n='Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'+Ae();pb[n]||(pb[n]=!0,Mp(!1,'Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.'))}};var vb=Array.isArray,yb=Ki(!0),gb=Ki(!1),bb={},wb=Mo(bb),kb=Mo(bb),xb=Mo(bb),Tb=/*             */0,_b=/*      */2,Sb=/*      */4,Cb=/*        */8,Eb=/*        */16,Pb=/*          */32,Rb=/*         */64,Ob=/*       */128,Nb=cp.ReactCurrentDispatcher,Ib=void 0;Ib=new Set;
// These are set right before calling the component.
var Db=pg,Mb=null,Ub=null,Ab=null,zb=null,Lb=null,Wb=null,Fb=pg,jb=null,Bb=0,Vb=!1,Hb=null,qb=0,$b=25,Yb=null,Qb=null,Kb=-1,Xb=Ia,Gb=!1;
// jest isn't a 'global', it's just exposed to tests via a wrapped function
// further, this isn't a test file, so flow doesn't recognize the symbol. So...
// $FlowExpectedError - because requirements don't give a damn about your type sigs.
"undefined"!=typeof jest&&(Gb=!0);var Jb={readContext:Ll,useCallback:la,useContext:la,useEffect:la,useImperativeHandle:la,useLayoutEffect:la,useMemo:la,useReducer:la,useRef:la,useState:la,useDebugValue:la},Zb=null,ew=null,tw=null,nw=null,rw=null,ow=function(){Mp(!1,"Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},iw=function(){Mp(!1,"Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://fb.me/rules-of-hooks")};Zb={readContext:function(e,t){return Ll(e,t)},useCallback:function(e,t){return Yb="useCallback",oa(),Da(e,t)},useContext:function(e,t){return Yb="useContext",oa(),Ll(e,t)},useEffect:function(e,t){return Yb="useEffect",oa(),Sa(e,t)},useImperativeHandle:function(e,t,n){return Yb="useImperativeHandle",oa(),Oa(e,t,n)},useLayoutEffect:function(e,t){return Yb="useLayoutEffect",oa(),Ea(e,t)},useMemo:function(e,t){Yb="useMemo",oa();var n=Nb.current;Nb.current=nw;try{return Ua(e,t)}finally{Nb.current=n}},useReducer:function(e,t,n){Yb="useReducer",oa();var r=Nb.current;Nb.current=nw;try{return va(e,t,n)}finally{Nb.current=r}},useRef:function(e){return Yb="useRef",oa(),ka(e)},useState:function(e){Yb="useState",oa();var t=Nb.current;Nb.current=nw;try{return ga(e)}finally{Nb.current=t}},useDebugValue:function(e,t){Yb="useDebugValue",oa()}},ew={readContext:function(e,t){return Ll(e,t)},useCallback:function(e,t){return Yb="useCallback",ia(),Da(e,t)},useContext:function(e,t){return Yb="useContext",ia(),Ll(e,t)},useEffect:function(e,t){return Yb="useEffect",ia(),Sa(e,t)},useImperativeHandle:function(e,t,n){return Yb="useImperativeHandle",ia(),Oa(e,t,n)},useLayoutEffect:function(e,t){return Yb="useLayoutEffect",ia(),Ea(e,t)},useMemo:function(e,t){Yb="useMemo",ia();var n=Nb.current;Nb.current=nw;try{return Ua(e,t)}finally{Nb.current=n}},useReducer:function(e,t,n){Yb="useReducer",ia();var r=Nb.current;Nb.current=nw;try{return va(e,t,n)}finally{Nb.current=r}},useRef:function(e){return Yb="useRef",ia(),ka(e)},useState:function(e){Yb="useState",ia();var t=Nb.current;Nb.current=nw;try{return ga(e)}finally{Nb.current=t}},useDebugValue:function(e,t){Yb="useDebugValue",ia()}},tw={readContext:function(e,t){return Ll(e,t)},useCallback:function(e,t){return Yb="useCallback",ia(),Ma(e,t)},useContext:function(e,t){return Yb="useContext",ia(),Ll(e,t)},useEffect:function(e,t){return Yb="useEffect",ia(),Ca(e,t)},useImperativeHandle:function(e,t,n){return Yb="useImperativeHandle",ia(),Na(e,t,n)},useLayoutEffect:function(e,t){return Yb="useLayoutEffect",ia(),Pa(e,t)},useMemo:function(e,t){Yb="useMemo",ia();var n=Nb.current;Nb.current=rw;try{return Aa(e,t)}finally{Nb.current=n}},useReducer:function(e,t,n){Yb="useReducer",ia();var r=Nb.current;Nb.current=rw;try{return ya(e,t,n)}finally{Nb.current=r}},useRef:function(e){return Yb="useRef",ia(),xa(e)},useState:function(e){Yb="useState",ia();var t=Nb.current;Nb.current=rw;try{return ba(e)}finally{Nb.current=t}},useDebugValue:function(e,t){return Yb="useDebugValue",ia(),Xb(e,t)}},nw={readContext:function(e,t){return ow(),Ll(e,t)},useCallback:function(e,t){return Yb="useCallback",iw(),oa(),Da(e,t)},useContext:function(e,t){return Yb="useContext",iw(),oa(),Ll(e,t)},useEffect:function(e,t){return Yb="useEffect",iw(),oa(),Sa(e,t)},useImperativeHandle:function(e,t,n){return Yb="useImperativeHandle",iw(),oa(),Oa(e,t,n)},useLayoutEffect:function(e,t){return Yb="useLayoutEffect",iw(),oa(),Ea(e,t)},useMemo:function(e,t){Yb="useMemo",iw(),oa();var n=Nb.current;Nb.current=nw;try{return Ua(e,t)}finally{Nb.current=n}},useReducer:function(e,t,n){Yb="useReducer",iw(),oa();var r=Nb.current;Nb.current=nw;try{return va(e,t,n)}finally{Nb.current=r}},useRef:function(e){return Yb="useRef",iw(),oa(),ka(e)},useState:function(e){Yb="useState",iw(),oa();var t=Nb.current;Nb.current=nw;try{return ga(e)}finally{Nb.current=t}},useDebugValue:function(e,t){Yb="useDebugValue",iw(),oa()}},rw={readContext:function(e,t){return ow(),Ll(e,t)},useCallback:function(e,t){return Yb="useCallback",iw(),ia(),Ma(e,t)},useContext:function(e,t){return Yb="useContext",iw(),ia(),Ll(e,t)},useEffect:function(e,t){return Yb="useEffect",iw(),ia(),Ca(e,t)},useImperativeHandle:function(e,t,n){return Yb="useImperativeHandle",iw(),ia(),Na(e,t,n)},useLayoutEffect:function(e,t){return Yb="useLayoutEffect",iw(),ia(),Pa(e,t)},useMemo:function(e,t){Yb="useMemo",iw(),ia();var n=Nb.current;Nb.current=rw;try{return Aa(e,t)}finally{Nb.current=n}},useReducer:function(e,t,n){Yb="useReducer",iw(),ia();var r=Nb.current;Nb.current=rw;try{return ya(e,t,n)}finally{Nb.current=r}},useRef:function(e){return Yb="useRef",iw(),ia(),xa(e)},useState:function(e){Yb="useState",iw(),ia();var t=Nb.current;Nb.current=rw;try{return ba(e)}finally{Nb.current=t}},useDebugValue:function(e,t){return Yb="useDebugValue",iw(),ia(),Xb(e,t)}};var aw=0,lw=-1,uw=null,cw=null,sw=!1,fw=cp.ReactCurrentOwner,dw=!1,pw=void 0,mw=void 0,hw=void 0,vw=void 0,yw=void 0;pw={},mw={},hw={},vw={},yw=!1;var gw=!1,bw=Mo(null),ww=void 0;
// Use this to detect multiple renderers using the same context
ww={};var kw=null,xw=null,Tw=null,_w=!1,Sw=0,Cw=1,Ew=2,Pw=3,Rw=!1,Ow=void 0,Nw=void 0,Iw=void 0;Ow=!1,Nw=null,Iw=function(){Nw=null};var Dw=void 0,Mw=void 0,Uw=void 0,Aw=void 0;if(Cy)
// Mutation mode
Dw=function(e,t,n,r){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var o=t.child;null!==o;){if(o.tag===As||o.tag===zs)Pr(e,o.stateNode);else if(o.tag===Us);else if(null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)return;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Mw=function(e){},Uw=function(e,t,n,r,o){
// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var i=e.memoizedProps;if(i!==r){
// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var a=t.stateNode,l=ta(),u=Or(a,n,i,r,o,l);
// TODO: Type this specific to this type of component.
t.updateQueue=u,
// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
u&&eu(t)}},Aw=function(e,t,n,r){
// If the text differs, mark it as an update. All the work in done in commitWork.
n!==r&&eu(t)};else if(iy){
// Persistent host tree mode
Dw=function(e,t,n,r){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var o=t.child;null!==o;){
// eslint-disable-next-line no-labels
e:if(o.tag===As){var i=o.stateNode;if(n){var a=o.memoizedProps,l=o.type;
// This child is inside a timed out tree. Hide it.
i=r?fy(i,l,a,o):dy(i,l,a,o),o.stateNode=i}Pr(e,i)}else if(o.tag===zs){var u=o.stateNode;if(n){var c=o.memoizedProps,s=Ji(),f=ta();u=r?py(c,s,f,t):Dr(c,s,f,t),o.stateNode=u}Pr(e,u)}else if(o.tag===Us);else if(o.tag===Hs){var d=o.alternate;if(null!==d){var p=d.memoizedState,m=o.memoizedState,h=null!==p,v=null!==m;if(h!==v){
// The placeholder either just timed out or switched back to the normal
// children after having previously timed out. Toggle the visibility of
// the direct host children.
var y=v?o.child:o;null!==y&&Dw(e,y,!0,v);
// eslint-disable-next-line no-labels
break e}}if(null!==o.child){
// Continue traversing like normal
o.child.return=o,o=o.child;continue}}else if(null!==o.child){o.child.return=o,o=o.child;continue}if((
// $FlowFixMe This is correct but Flow is confused by the labeled break.
o=o)===t)return;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};
// An unfortunate fork of appendAllChildren because we have two different parent types.
var zw=function(e,t,n,r){for(
// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var o=t.child;null!==o;){
// eslint-disable-next-line no-labels
e:if(o.tag===As){var i=o.stateNode;if(n){var a=o.memoizedProps,l=o.type;
// This child is inside a timed out tree. Hide it.
i=r?fy(i,l,a,o):dy(i,l,a,o),o.stateNode=i}uy(e,i)}else if(o.tag===zs){var u=o.stateNode;if(n){var c=o.memoizedProps,s=Ji(),f=ta();u=r?py(c,s,f,t):Dr(c,s,f,t),o.stateNode=u}uy(e,u)}else if(o.tag===Us);else if(o.tag===Hs){var d=o.alternate;if(null!==d){var p=d.memoizedState,m=o.memoizedState,h=null!==p,v=null!==m;if(h!==v){
// The placeholder either just timed out or switched back to the normal
// children after having previously timed out. Toggle the visibility of
// the direct host children.
var y=v?o.child:o;null!==y&&zw(e,y,!0,v);
// eslint-disable-next-line no-labels
break e}}if(null!==o.child){
// Continue traversing like normal
o.child.return=o,o=o.child;continue}}else if(null!==o.child){o.child.return=o,o=o.child;continue}if((
// $FlowFixMe This is correct but Flow is confused by the labeled break.
o=o)===t)return;for(;null===o.sibling;){if(null===o.return||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}};Mw=function(e){var t=e.stateNode;if(null===e.firstEffect);else{var n=t.containerInfo,r=ly(n);
// If children might have changed, we have to add them all to the set.
zw(r,e,!1,!1),t.pendingChildren=r,
// Schedule an update on the container to swap out the container.
eu(e),cy(n,r)}},Uw=function(e,t,n,r,o){var i=e.stateNode,a=e.memoizedProps,l=null===t.firstEffect;if(l&&a===r)
// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
return void(t.stateNode=i);var u=t.stateNode,c=ta(),s=null;if(a!==r&&(s=Or(u,n,a,r,o,c)),l&&null===s)
// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
return void(t.stateNode=i);var f=ay(i,s,n,a,r,t,l,u);Rr(f,n,r,o,c)&&eu(t),t.stateNode=f,l?
// If there are no other effects in this tree, we need to flag this node as having one.
// Even though we're not going to use it for anything.
// Otherwise parents won't know that there are new children to propagate upwards.
eu(t):
// If children might have changed, we have to add them all to the set.
Dw(f,t,!1,!1)},Aw=function(e,t,n,r){if(n!==r){
// If the text content differs, we'll create a new text instance for it.
var o=Ji(),i=ta();t.stateNode=Dr(r,o,i,t),
// We'll have to mark it as having an effect, even though we won't use the effect for anything.
// This lets the parents know that at least one of their children has changed.
eu(t)}}}else
// No host operations
Mw=function(e){},Uw=function(e,t,n,r,o){},Aw=function(e,t,n,r){};var Lw=null;Lw=new Set;var Ww="function"==typeof WeakSet?WeakSet:Set,Fw=function(e,t){xo(e,"componentWillUnmount"),t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount(),To()},jw="function"==typeof WeakSet?WeakSet:Set,Bw="function"==typeof WeakMap?WeakMap:Map,Vw=cp.ReactCurrentDispatcher,Hw=cp.ReactCurrentOwner,qw=void 0,$w=void 0,Yw=void 0,Qw=void 0;lm&&(null==os.__interactionsRef||null==os.__interactionsRef.current)&&t(!1,"It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling"),qw=!1,$w=!1;var Kw={};Yw=function(e,t){
// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var n=Ie(e.type)||"ReactComponent";Kw[n]||(xs(!1,"Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s",t?"the componentWillUnmount method":"a useEffect cleanup function",Me(e)),Kw[n]=!0)},Qw=function(e){switch(Ip){case"getChildContext":if($w)return;xs(!1,"setState(...): Cannot call setState() inside getChildContext()"),$w=!0;break;case"render":if(qw)return;xs(!1,"Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),qw=!0}};
// Used to ensure computeUniqueAsyncExpiration is monotonically decreasing.
var Xw=hg-1,Gw=!1,Jw=null,Zw=null,ek=pg,tk=-1,nk=!1,rk=null,ok=!1,ik=null,ak=null,lk=null,uk=null,ck=null,sk=void 0,fk=void 0,dk=void 0,pk=void 0,mk=void 0,hk=void 0;om&&(sk=null,dk=!0,pk=!1,mk=null,fk=function(e,t,n){if(null===t||"object"!=typeof t||"function"!=typeof t.then){
// Restore the original state of the work-in-progress
if(null===sk)
// This should never happen. Don't throw because this code is DEV-only.
return void xs(!1,"Could not replay rendering after an error. This is likely a bug in React. Please file an issue.");switch(xi(e,sk),e.tag){case Ms:ea(e),qo(e);break;case As:ra(e);break;case Is:Vo(e.type)&&Ho(e);break;case Us:ea(e);break;case js:Dl(e)}if(
// Replay the begin phase.
pk=!0,mk=t,r(null,Qu,null,n),pk=!1,mk=null,a()){var o=l();if(null!=o&&null!=t)try{
// Reading the expando property is intentionally
// inside `try` because it might be a getter or Proxy.
o._suppressLogging&&(
// Also suppress logging for the original error.
t._suppressLogging=!0)}catch(e){}}else
// If the begin phase did not fail the second time, set this pointer
// back to the original value.
Jw=e}},hk=function(){throw mk});
// TODO: Everything below this is written as if it has been lifted to the
// renderers. I'll do this in a follow-up.
// Linked-list of roots
var vk=null,yk=null,gk=pg,bk=void 0,wk=!1,kk=null,xk=pg,Tk=pg,_k=!1,Sk=null,Ck=!1,Ek=!1,Pk=null,Rk=rs.unstable_now(),Ok=ti(Rk),Nk=Ok,Ik=50,Dk=0,Mk=null,Uk=!1,Ak=void 0,zk=void 0;Ak=!1,zk={};var Lk=null,Wk=function(e,t,n,r){if(n>=t.length)return r;var o=t[n],i=Array.isArray(e)?e.slice():ts({},e);
// $FlowFixMe number or string is fine here
return i[o]=Wk(e[o],t,n+1,r),i},Fk=function(e,t,n){return Wk(e,t,0,n)};
// Support DevTools props for function components, forwardRef, memo, host components, etc.
Lk=function(e,t,n){Vu(),e.pendingProps=Fk(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),ac(e,hg)};
// TODO: this is special because it gets imported during build.
var jk=cp.ReactCurrentOwner,Bk=void 0,Vk=void 0,Hk=!1;"function"==typeof Map&&
// $FlowIssue Flow incorrectly thinks Map has no prototype
null!=Map.prototype&&"function"==typeof Map.prototype.forEach&&"function"==typeof Set&&
// $FlowIssue Flow incorrectly thinks Set has no prototype
null!=Set.prototype&&"function"==typeof Set.prototype.clear&&"function"==typeof Set.prototype.forEach||xs(!1,"React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),Bk=function(e){if(e._reactRootContainer&&e.nodeType!==ap){var t=Bc(e._reactRootContainer._internalRoot.current);t&&t.parentNode!==e&&xs(!1,"render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=Qc(e);!(!r||!S(r))&&!n&&xs(!1,"render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===op&&e.tagName&&"BODY"===e.tagName.toUpperCase()&&xs(!1,"render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")},Vk=function(e,t){null!==e&&"function"!=typeof e&&xs(!1,"%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)},function(e){Xd=e}(br),Hc.prototype.render=function(e){this._defer||t(!1,"batch.render: Cannot render a batch that already committed."),this._hasChildren=!0,this._children=e;var n=this._root._internalRoot,r=this._expirationTime,o=new qc;return zc(e,n,null,r,o._onCommit),o},Hc.prototype.then=function(e){if(this._didComplete)return void e();var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)},Hc.prototype.commit=function(){var e=this._root._internalRoot,n=e.firstBatch;if(this._defer&&null!==n||t(!1,"batch.commit: Cannot commit a batch multiple times."),!this._hasChildren)
// This batch is empty. Return.
return this._next=null,void(this._defer=!1);var r=this._expirationTime;
// Ensure this is the first batch in the list.
if(n!==this){
// This batch is not the earliest batch. We need to move it to the front.
// Update its expiration time to be the expiration time of the earliest
// batch, so that we can flush it without flushing the other batches.
this._hasChildren&&(r=this._expirationTime=n._expirationTime,
// Rendering this batch again ensures its children will be the final state
// when we flush (updates are processed in insertion order: last
// update wins).
// TODO: This forces a restart. Should we print a warning?
this.render(this._children));for(
// Remove the batch from the list.
var o=null,i=n;i!==this;)o=i,i=i._next;null===o&&t(!1,"batch.commit: Cannot commit a batch multiple times."),o._next=i._next,
// Add it to the front.
this._next=n,n=e.firstBatch=this}
// Synchronously flush all the work up to this batch's expiration time.
this._defer=!1,_c(e,r);
// Pop the batch from the list.
var a=this._next;this._next=null,
// Append the next earliest batch's children to the update queue.
null!==(n=e.firstBatch=a)&&n._hasChildren&&n.render(n._children)},Hc.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)
// TODO: Error handling.
for(var t=0;t<e.length;t++){var n=e[t];n()}}},qc.prototype.then=function(e){if(this._didCommit)return void e();var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)},qc.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)
// TODO: Error handling.
for(var n=0;n<e.length;n++){var r=e[n];"function"!=typeof r&&t(!1,"Invalid argument passed as callback. Expected a function. Instead received: %s",r),r()}}},$c.prototype.render=function(e,t){var n=this._internalRoot,r=new qc;return t=void 0===t?null:t,Vk(t,"render"),null!==t&&r.then(t),Fc(e,n,null,r._onCommit),r},$c.prototype.unmount=function(e){var t=this._internalRoot,n=new qc;return e=void 0===e?null:e,Vk(e,"render"),null!==e&&n.then(e),Fc(null,t,null,n._onCommit),n},$c.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var r=this._internalRoot,o=new qc;return n=void 0===n?null:n,Vk(n,"render"),null!==n&&o.then(n),Fc(t,r,e,o._onCommit),o},$c.prototype.createBatch=function(){var e=new Hc(this),t=e._expirationTime,n=this._internalRoot,r=n.firstBatch;if(null===r)n.firstBatch=e,e._next=null;else{for(
// Insert sorted by expiration time then insertion order
var o=null,i=r;null!==i&&i._expirationTime>=t;)o=i,i=i._next;e._next=i,null!==o&&(o._next=e)}return e},function(e,t,n){Zd=e,ep=t,tp=n}(Rc,Ic,Dc);var qk=!1,$k={createPortal:Jc,findDOMNode:function(e){var t=jk.current;if(null!==t&&null!==t.stateNode){t.stateNode._warnedAboutRefsInRender||xs(!1,"%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",Ie(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0}return null==e?null:e.nodeType===op?e:Lc(e,"findDOMNode")},hydrate:function(e,n,r){
// TODO: throw or warn if we couldn't hydrate?
return Yc(n)||t(!1,"Target container is not a DOM element."),n._reactHasBeenPassedToCreateRootDEV&&xs(!1,"You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.%s(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?",sm?"createRoot":"unstable_createRoot"),Gc(null,e,n,!0,r)},render:function(e,n,r){return Yc(n)||t(!1,"Target container is not a DOM element."),n._reactHasBeenPassedToCreateRootDEV&&xs(!1,"You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.%s(). This is not supported. Did you mean to call root.render(element)?",sm?"createRoot":"unstable_createRoot"),Gc(null,e,n,!1,r)},unstable_renderSubtreeIntoContainer:function(e,n,r,o){return Yc(r)||t(!1,"Target container is not a DOM element."),null!=e&&Ct(e)||t(!1,"parentComponent must be a valid React Component"),Gc(e,n,r,!1,o)},unmountComponentAtNode:function(e){if(Yc(e)||t(!1,"unmountComponentAtNode(...): Target container is not a DOM element."),e._reactHasBeenPassedToCreateRootDEV&&xs(!1,"You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.%s(). This is not supported. Did you mean to call root.unmount()?",sm?"createRoot":"unstable_createRoot"),e._reactRootContainer){var n=Qc(e);
// If you call unmountComponentAtNode twice in quick succession, you'll
// get `true` twice. That's probably fine?
// Unmount should not be batched.
return n&&!S(n)&&xs(!1,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."),Oc(function(){Gc(null,null,e,!1,function(){e._reactRootContainer=null})}),!0}var r=Qc(e),o=!(!r||!S(r)),i=e.nodeType===op&&Yc(e.parentNode)&&!!e.parentNode._reactRootContainer;return o&&xs(!1,"unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",i?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1},
// Temporary alias since we already shipped React 16 RC with it.
// TODO: remove in React 17.
unstable_createPortal:function(){return Hk||(Hk=!0,Mg(!1,'The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')),Jc.apply(void 0,arguments)},unstable_batchedUpdates:Rc,unstable_interactiveUpdates:Ic,flushSync:Nc,unstable_createRoot:Zc,unstable_flushControlled:Mc,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{
// Keep in sync with ReactDOMUnstableNativeDependencies.js
// and ReactTestUtils.js. This is an array for better minification.
Events:[S,C,E,Os.injectEventPluginsByName,ys,L,F,me,ve,Kt,k]}};if(sm&&($k.createRoot=Zc,$k.unstable_createRoot=void 0),!function(e){var t=e.findFiberByHostInstance,n=cp.ReactCurrentDispatcher;return Jo(ts({},e,{overrideProps:Lk,currentDispatcherRef:n,findHostInstanceByFiber:function(e){var t=Dt(e);return null===t?null:t.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:_,bundleType:1,version:"16.8.6",rendererPackageName:"react-dom"})&&Zs&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){var Yk=window.location.protocol;/^(https?|file):$/.test(Yk)}var Qk=Object.freeze({default:$k}),Kk=Qk&&$k||Qk,Xk=Kk.default||Kk;e.exports=Xk}()}).call(t,n(0))},/* 43 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(t){"production"===t.env.NODE_ENV?e.exports=n(44):e.exports=n(45)}).call(t,n(0))},/* 44 */
/***/
function(e,t,n){"use strict";/** @license React v0.13.6
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var r=0;t.__interactionsRef=null,t.__subscriberRef=null,t.unstable_clear=function(e){return e()},t.unstable_getCurrent=function(){return null},t.unstable_getThreadID=function(){return++r},t.unstable_trace=function(e,t,n){return n()},t.unstable_wrap=function(e){return e},t.unstable_subscribe=function(){},t.unstable_unsubscribe=function(){}},/* 45 */
/***/
function(e,t,n){"use strict";/* WEBPACK VAR INJECTION */
(function(e){/** @license React v0.13.6
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"production"!==e.env.NODE_ENV&&function(){function e(e){if(!m)return e();var n=t.__interactionsRef.current;t.__interactionsRef.current=new Set;try{return e()}finally{t.__interactionsRef.current=n}}function n(){return m?t.__interactionsRef.current:null}function r(){return++y}function o(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:h;if(!m)return r();var i={__count:1,id:v++,name:e,timestamp:n},a=t.__interactionsRef.current,l=new Set(a);l.add(i),t.__interactionsRef.current=l;var u=t.__subscriberRef.current,c=void 0;try{null!==u&&u.onInteractionTraced(i)}finally{try{null!==u&&u.onWorkStarted(l,o)}finally{try{c=r()}finally{t.__interactionsRef.current=a;try{null!==u&&u.onWorkStopped(l,o)}finally{i.__count--,
// If no async work was scheduled for this interaction,
// Notify subscribers that it's completed.
null!==u&&0===i.__count&&u.onInteractionScheduledWorkCompleted(i)}}}}return c}function i(e){function n(){var n=t.__interactionsRef.current;t.__interactionsRef.current=o,i=t.__subscriberRef.current;try{var l=void 0;try{null!==i&&i.onWorkStarted(o,r)}finally{try{l=e.apply(void 0,arguments)}finally{t.__interactionsRef.current=n,null!==i&&i.onWorkStopped(o,r)}}return l}finally{a||(
// We only expect a wrapped function to be executed once,
// But in the event that it's executed more than once–
// Only decrement the outstanding interaction counts once.
a=!0,
// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
o.forEach(function(e){e.__count--,null!==i&&0===e.__count&&i.onInteractionScheduledWorkCompleted(e)}))}}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;if(!m)return e;var o=t.__interactionsRef.current,i=t.__subscriberRef.current;null!==i&&i.onWorkScheduled(o,r),
// Update the pending async work count for the current interactions.
// Update after calling subscribers in case of error.
o.forEach(function(e){e.__count++});var a=!1;return n.cancel=function(){i=t.__subscriberRef.current;try{null!==i&&i.onWorkCanceled(o,r)}finally{
// Update pending async counts for all wrapped interactions.
// If this was the last scheduled async work for any of them,
// Mark them as completed.
o.forEach(function(e){e.__count--,i&&0===e.__count&&i.onInteractionScheduledWorkCompleted(e)})}},n}function a(e){m&&(g.add(e),1===g.size&&(t.__subscriberRef.current={onInteractionScheduledWorkCompleted:c,onInteractionTraced:u,onWorkCanceled:p,onWorkScheduled:s,onWorkStarted:f,onWorkStopped:d}))}function l(e){m&&(g.delete(e),0===g.size&&(t.__subscriberRef.current=null))}function u(e){var t=!1,n=null;if(g.forEach(function(r){try{r.onInteractionTraced(e)}catch(e){t||(t=!0,n=e)}}),t)throw n}function c(e){var t=!1,n=null;if(g.forEach(function(r){try{r.onInteractionScheduledWorkCompleted(e)}catch(e){t||(t=!0,n=e)}}),t)throw n}function s(e,t){var n=!1,r=null;if(g.forEach(function(o){try{o.onWorkScheduled(e,t)}catch(e){n||(n=!0,r=e)}}),n)throw r}function f(e,t){var n=!1,r=null;if(g.forEach(function(o){try{o.onWorkStarted(e,t)}catch(e){n||(n=!0,r=e)}}),n)throw r}function d(e,t){var n=!1,r=null;if(g.forEach(function(o){try{o.onWorkStopped(e,t)}catch(e){n||(n=!0,r=e)}}),n)throw r}function p(e,t){var n=!1,r=null;if(g.forEach(function(o){try{o.onWorkCanceled(e,t)}catch(e){n||(n=!0,r=e)}}),n)throw r}Object.defineProperty(t,"__esModule",{value:!0});
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:
// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
// Gather advanced timing metrics for Profiler subtrees.
// Trace which interactions trigger each commit.
var m=!0,h=0,v=0,y=0;
// Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.
t.__interactionsRef=null,
// Listener(s) to notify when interactions begin and end.
t.__subscriberRef=null,m&&(t.__interactionsRef={current:new Set},t.__subscriberRef={current:null});var g=null;m&&(g=new Set),t.unstable_clear=e,t.unstable_getCurrent=n,t.unstable_getThreadID=r,t.unstable_trace=o,t.unstable_wrap=i,t.unstable_subscribe=a,t.unstable_unsubscribe=l}()}).call(t,n(0))},/* 46 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _defineProperty=__webpack_require__(11),_defineProperty2=_interopRequireDefault(_defineProperty),_setPrototypeOf=__webpack_require__(13),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(15),_create2=_interopRequireDefault(_create),_getPrototypeOf=__webpack_require__(17),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,_defineProperty2.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_react=__webpack_require__(3),_react2=_interopRequireDefault(_react),newKey=function(){return(1e5*(Math.random()+1)).toString(16)},Page=function(_Component){function Page(){return _classCallCheck(this,Page),_possibleConstructorReturn(this,(Page.__proto__||(0,_getPrototypeOf2.default)(Page)).apply(this,arguments))}return _inherits(Page,_Component),_createClass(Page,[{key:"render",value:function render(){var _this2=this,components=this.props.page.components,coms=components.map(function(component,index){var Com=void 0;return Com=_this2.props.serverRendering?eval(component.fileContent):_this2.props.Coms[index],_react2.default.createElement("div",{className:"component",key:newKey()},_react2.default.createElement(Com,component.config.props))});return _react2.default.createElement("div",{className:"PreviewPage"},coms)}}]),Page}(_react.Component);exports.default=Page},/* 47 */
/***/
function(e,t,n){n(48);var r=n(1).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},/* 48 */
/***/
function(e,t,n){var r=n(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
r(r.S+r.F*!n(2),"Object",{defineProperty:n(12).f})},/* 49 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 50 */
/***/
function(e,t,n){var r=n(12),o=n(27);e.exports=n(2)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},/* 51 */
/***/
function(e,t,n){n(52),e.exports=n(1).Object.setPrototypeOf},/* 52 */
/***/
function(e,t,n){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var r=n(4);r(r.S,"Object",{setPrototypeOf:n(53).set})},/* 53 */
/***/
function(e,t,n){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var r=n(8),o=n(7),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(e,t,r){try{r=n(23)(Function.call,n(54).f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},/* 54 */
/***/
function(e,t,n){var r=n(28),o=n(27),i=n(14),a=n(26),l=n(10),u=n(24),c=Object.getOwnPropertyDescriptor;t.f=n(2)?c:function(e,t){if(e=i(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(l(e,t))return o(!r.f.call(e,t),e[t])}},/* 55 */
/***/
function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},/* 56 */
/***/
function(e,t,n){n(57);var r=n(1).Object;e.exports=function(e,t){return r.create(e,t)}},/* 57 */
/***/
function(e,t,n){var r=n(4);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
r(r.S,"Object",{create:n(58)})},/* 58 */
/***/
function(e,t,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=n(7),o=n(59),i=n(33),a=n(16)("IE_PROTO"),l=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=n(25)("iframe"),r=i.length;for(t.style.display="none",n(67).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[i[r]];return u()};e.exports=Object.create||function(e,t){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(l.prototype=r(e),n=new l,l.prototype=null,n[a]=e):n=u(),void 0===t?n:o(n,t)}},/* 59 */
/***/
function(e,t,n){var r=n(12),o=n(7),i=n(31);e.exports=n(2)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),l=a.length,u=0;l>u;)r.f(e,n=a[u++],t[n]);return e}},/* 60 */
/***/
function(e,t,n){var r=n(10),o=n(14),i=n(61)(!1),a=n(16)("IE_PROTO");e.exports=function(e,t){var n,l=o(e),u=0,c=[];for(n in l)n!=a&&r(l,n)&&c.push(n);
// Don't enum bug & hidden keys
for(;t.length>u;)r(l,n=t[u++])&&(~i(c,n)||c.push(n));return c}},/* 61 */
/***/
function(e,t,n){
// false -> Array#indexOf
// true  -> Array#includes
var r=n(14),o=n(62),i=n(63);e.exports=function(e){return function(t,n,a){var l,u=r(t),c=o(u.length),s=i(a,c);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&n!=n){for(;c>s;)
// eslint-disable-next-line no-self-compare
if((l=u[s++])!=l)return!0}else for(;c>s;s++)if((e||s in u)&&u[s]===n)return e||s||0;return!e&&-1}}},/* 62 */
/***/
function(e,t,n){
// 7.1.15 ToLength
var r=n(32),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},/* 63 */
/***/
function(e,t,n){var r=n(32),o=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):i(e,t)}},/* 64 */
/***/
function(e,t,n){var r=n(1),o=n(6),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(65)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},/* 65 */
/***/
function(e,t){e.exports=!0},/* 66 */
/***/
function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},/* 67 */
/***/
function(e,t,n){var r=n(6).document;e.exports=r&&r.documentElement},/* 68 */
/***/
function(e,t,n){n(69),e.exports=n(1).Object.getPrototypeOf},/* 69 */
/***/
function(e,t,n){
// 19.1.2.9 Object.getPrototypeOf(O)
var r=n(18),o=n(70);n(71)("getPrototypeOf",function(){return function(e){return o(r(e))}})},/* 70 */
/***/
function(e,t,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=n(10),o=n(18),i=n(16)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},/* 71 */
/***/
function(e,t,n){
// most Object methods by ES6 should accept primitives
var r=n(4),o=n(1),i=n(9);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},/* 72 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,p.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(f.default?(0,f.default)(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=n(11),c=r(u),s=n(13),f=r(s),d=n(15),p=r(d),m=n(17),h=r(m),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,c.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=n(3),g=r(y),b=n(73),w=(r(b),n(81)),k=r(w),x=(0,k.default)(l=function(e){function t(e){return o(this,t),i(this,(t.__proto__||(0,h.default)(t)).call(this,e))}return a(t,e),v(t,[{key:"render",value:function(){var e=this.props,t={background:e.backgroundColor,height:this.props.viewport.height},n={background:e.btnBackgroundColor};return g.default.createElement("div",{style:t,className:"buluo-DownloadPage"},g.default.createElement("div",{className:"logo-wrap"},g.default.createElement("img",{className:"logo",src:e.logo})),g.default.createElement("div",{className:"download-btns-wrap"},g.default.createElement("a",{style:n,href:e.iOSUrl,className:"download-btn iphone"},e.iOSText),g.default.createElement("a",{style:n,href:e.androidUrl,className:"download-btn android"},e.androidText)))}}]),t}(y.Component))||l;t.default=x},/* 73 */
/***/
function(e,t,n){var r,o=0,i=n(74);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return o++||(r=n(79)(i,{hmr:!0})),t},t.unuse=t.unref=function(){o>0&&!--o&&(r(),r=null)}},/* 74 */
/***/
function(e,t,n){var r=n(75);t=e.exports=n(76)(!1),
// imports
// module
t.push([e.i,"html {\n  font-family: -apple-system-font, \"Helvetica Neue\", Helvetica, STHeiTi, sans-serif; }\n\n.buluo-DownloadPage {\n  text-align: center;\n  background: #fae100; }\n  .buluo-DownloadPage .logo {\n    margin-top: 100px;\n    margin-bottom: 130px;\n    width: 172px;\n    height: 166px; }\n  .buluo-DownloadPage .download-btn {\n    display: block;\n    width: 245px;\n    height: 50px;\n    line-height: 50px;\n    margin: 25px auto;\n    border-radius: 5px;\n    background: #333333;\n    text-decoration: none;\n    color: #fff; }\n    .buluo-DownloadPage .download-btn:before {\n      display: inline-block;\n      content: '';\n      margin-right: 19px;\n      vertical-align: sub; }\n    .buluo-DownloadPage .download-btn.iphone:before {\n      background: url("+r(n(77))+") no-repeat center center;\n      width: 21px;\n      height: 20px;\n      background-size: 21px 20px; }\n    .buluo-DownloadPage .download-btn.android:before {\n      background: url("+r(n(78))+") no-repeat center center;\n      width: 21px;\n      height: 23px;\n      background-size: 21px 23px; }\n  @media all and (max-height: 568px) {\n    .buluo-DownloadPage .logo {\n      margin-top: 70px;\n      margin-bottom: 100px; } }\n  @media all and (max-height: 480px) {\n    .buluo-DownloadPage .logo {\n      margin-top: 40px;\n      margin-bottom: 70px; } }\n",""])},/* 75 */
/***/
function(e,t){e.exports=function(e){
// If url is already wrapped in quotes, remove them
// Should url be wrapped?
// See https://drafts.csswg.org/css-values-3/#urls
return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},/* 76 */
/***/
function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}
// Adapted from convert-source-map (MIT)
function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
e.exports=function(e){var t=[];
// return the list of modules as css string
// import a list of modules into the list
return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},/* 77 */
/***/
function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAbRr8+fbf0YpZKwkE87BDFAHv6M3KwLakfnNQS0g3Lwzh2tWrn5yVkXgnIwbEYzFqKqGRAAABIklEQVQ4y42UaW/CMAyGk94tpaUXvQ/uDdjm///r1mhDxIJafr5FfRTZr92IRZK+ylrBISgAoOeYnQ0zV4Y5WMp0GObKAYVkqBIUechQC2VmN4YZqkr3V8FgAsjqFalshngM1a0/RjKf4u92uL/tWrowkx79SU2gzkFhRd2L2e/ggR1dDvCkNLApTVjEQa4PFEfNNNaUedbDOFGmJzQMizC3CR45wSh0IsIsBOJAqB9YpfpvsAoEEqsmGRXCobLCakmoFl4WD8gI2MtixmiwQLFGbk66pqetVgM0rvb/2QDcPbzQFdz0xshrT0Lnk4oAT+HusjdGBIsllAkSiZHtNkgjyk0DJOEXJq1k69dffwdnFG8Jqr177sL//GTkbpvp+fUXg7CdM3dHRx0AAAAASUVORK5CYII="},/* 78 */
/***/
function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAuCAMAAABpjHt/AAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMA8Zml7vvilnMOBfWw6d60qh4RA9fCkIyHYEH3uaBoWTo1KSUVCtDIxIF7UkvPa0oxG32v5TEAAAFFSURBVDjL5dRZj4IwFIbhg1JENtkR932f7fv/P27SqoHoaWMmczHJvBf0XDw0IUCpXTIZUavPYk26vqy3jJo6IiFtLmZy2SRbefUD0ufl4WYe2ADyY3LCiAxdIHBL+DuTXO3Qyjrr5dIG2olaJ9chHhILXmYHoOhf7sxZnYFoy9IawJG88Y0GlFnAid00AmC7MW6JoRxDj6EjsH0wtOJpydCCpweG5nYTmpy22U59pyZDdTjueWrqARBLKjts5fV5h4o6cqzIAptFHblEikLW1dOuWv4BFUbqtymMFL9Ng9fp4Ee7RnKq9LRsPlsXgL/W05UPwKWrLYIF6SktJvt3ajLQ58TrdMZTlzjrPEMx9Yitn0A2TdNU3bZPFeStor37vznhDE8Hf5lm4n7o5HKIyVB8Pb+IhpLOTTSNx5ECXmWFDy/qG7T/sEpziwicAAAAAElFTkSuQmCC"},/* 79 */
/***/
function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],t));m[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l=i[1],u=i[2],c=i[3],s={css:l,media:u,sourceMap:c};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function i(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=w[w.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function l(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function s(e,t){var n,r,o,i;
// If a transform function was defined, run it on the css
if(t.transform&&e.css){if(!(i=t.transform(e.css)))
// If the transform function returns a falsy value, don't add this css.
// This allows conditional loading of css
return function(){};
// If transform returns a value, use that instead of the original css.
// This allows running runtime transformations on the css.
e.css=i}if(t.singleton){var c=b++;n=g||(g=l(t)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=d.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=k(r)),o&&(
// http://stackoverflow.com/a/26603875
r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var m={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){
// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
return window&&document&&document.all&&!window.atob}),v=function(e){return document.querySelector(e)},y=function(e){var t={};return function(e){
// If passing function in options, then use it for resolve "head" element.
// Useful for Shadow Root style i.e
// {
//   insertInto: function () { return document.querySelector("#foo").shadowRoot }
// }
if("function"==typeof e)return e();if(void 0===t[e]){var n=v.call(this,e);
// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{
// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),g=null,b=0,w=[],k=n(80);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},
// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
t.singleton||"boolean"==typeof t.singleton||(t.singleton=h()),
// By default, add <style> tags to the <head> element
t.insertInto||(t.insertInto="head"),
// By default, add <style> tags to the bottom of the target
t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],u=m[l.id];u.refs--,i.push(u)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete m[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},/* 80 */
/***/
function(e,t){/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
e.exports=function(e){
// get current location
var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");
// blank or null?
if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");
// send back the fixed css
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){
// strip quotes (if they exist)
var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});
// already a full url? no change
if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o))return e;
// convert the url to a full url
var i;
// send back the fixed url(...)
//TODO: should we add protocol?
return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},/* 81 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,v.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(m.default?(0,m.default)(e,t):e.__proto__=t)}function l(){E.width===window.innerWidth&&E.height===window.innerHeight||(E={width:window.innerWidth,height:window.innerHeight},C.emit(P,E))}function u(e){return function(t){function n(){o(this,n);var e=i(this,(n.__proto__||(0,g.default)(n)).call(this));return e.state={viewport:S.canUseDOM?{width:window.innerWidth,height:window.innerHeight}:E},e}return a(n,t),w(n,[{key:"componentDidMount",value:function(){C||(C=new _.default,window.addEventListener("resize",l),window.addEventListener("orientationchange",l)),C.on(P,this.handleResize,this)}},{key:"componentWillUnmount",value:function(){
// EE.removeListener(RESIZE_EVENT, this.handleResize, this);
C.listeners(P,!0)||(window.removeEventListener("resize",l),window.removeEventListener("orientationchange",l),C=null)}},{key:"render",value:function(){return x.default.createElement(e,b({},this.props,{viewport:this.state.viewport}))}},{key:"handleResize",value:function(e){this.setState({viewport:e})}}]),n}(k.Component)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(82),s=r(c),f=n(11),d=r(f),p=n(13),m=r(p),h=n(15),v=r(h),y=n(17),g=r(y),b=s.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,d.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k=n(3),x=r(k),T=n(87),_=r(T),S=n(20),C=void 0,E={width:1366,height:768},P="resize";t.default=u},/* 82 */
/***/
function(e,t,n){e.exports={default:n(83),__esModule:!0}},/* 83 */
/***/
function(e,t,n){n(84),e.exports=n(1).Object.assign},/* 84 */
/***/
function(e,t,n){
// 19.1.3.1 Object.assign(target, source)
var r=n(4);r(r.S+r.F,"Object",{assign:n(85)})},/* 85 */
/***/
function(e,t,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var r=n(2),o=n(31),i=n(86),a=n(28),l=n(18),u=n(29),c=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!c||n(9)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r})?function(e,t){for(// eslint-disable-line no-unused-vars
var n=l(e),c=arguments.length,s=1,f=i.f,d=a.f;c>s;)for(var p,m=u(arguments[s++]),h=f?o(m).concat(f(m)):o(m),v=h.length,y=0;v>y;)p=h[y++],r&&!d.call(m,p)||(n[p]=m[p]);return n}:c},/* 86 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 87 */
/***/
function(e,t,n){"use strict";/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function r(){}/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function i(e,t,n,r,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new o(n,r||e,i),l=c?c+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],a]:e._events[l].push(a):(e._events[l]=a,e._eventsCount++),e}/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function l(){this._events=new r,this._eventsCount=0}var u=Object.prototype.hasOwnProperty,c="~";
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
Object.create&&(r.prototype=Object.create(null),
//
// This hack is needed because the `__proto__` property is still inherited in
// some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
//
(new r).__proto__||(c=!1)),/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
l.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)u.call(e,t)&&n.push(c?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
l.prototype.listeners=function(e){var t=c?c+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,o=n.length,i=new Array(o);r<o;r++)i[r]=n[r].fn;return i},/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
l.prototype.listenerCount=function(e){var t=c?c+e:e,n=this._events[t];return n?n.fn?1:n.length:0},/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
l.prototype.emit=function(e,t,n,r,o,i){var a=c?c+e:e;if(!this._events[a])return!1;var l,u,s=this._events[a],f=arguments.length;if(s.fn){switch(s.once&&this.removeListener(e,s.fn,void 0,!0),f){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,t),!0;case 3:return s.fn.call(s.context,t,n),!0;case 4:return s.fn.call(s.context,t,n,r),!0;case 5:return s.fn.call(s.context,t,n,r,o),!0;case 6:return s.fn.call(s.context,t,n,r,o,i),!0}for(u=1,l=new Array(f-1);u<f;u++)l[u-1]=arguments[u];s.fn.apply(s.context,l)}else{var d,p=s.length;for(u=0;u<p;u++)switch(s[u].once&&this.removeListener(e,s[u].fn,void 0,!0),f){case 1:s[u].fn.call(s[u].context);break;case 2:s[u].fn.call(s[u].context,t);break;case 3:s[u].fn.call(s[u].context,t,n);break;case 4:s[u].fn.call(s[u].context,t,n,r);break;default:if(!l)for(d=1,l=new Array(f-1);d<f;d++)l[d-1]=arguments[d];s[u].fn.apply(s[u].context,l)}}return!0},/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
l.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
l.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
l.prototype.removeListener=function(e,t,n,r){var o=c?c+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var i=this._events[o];if(i.fn)i.fn!==t||r&&!i.once||n&&i.context!==n||a(this,o);else{for(var l=0,u=[],s=i.length;l<s;l++)(i[l].fn!==t||r&&!i[l].once||n&&i[l].context!==n)&&u.push(i[l]);
//
// Reset the array, or remove it completely if we have no more listeners.
//
u.length?this._events[o]=1===u.length?u[0]:u:a(this,o)}return this},/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
l.prototype.removeAllListeners=function(e){var t;return e?(t=c?c+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},
//
// Alias methods names because people roll like that.
//
l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,
//
// Expose the prefix.
//
l.prefixed=c,
//
// Allow `EventEmitter` to be imported as module namespace.
//
l.EventEmitter=l,e.exports=l}]);