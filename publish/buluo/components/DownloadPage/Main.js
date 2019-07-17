/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(41);
var has = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(20);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(42), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(25);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(55)('keys');
var uid = __webpack_require__(57);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(63);
} else {
  module.exports = __webpack_require__(64);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isPhone = exports.setH5Channel = exports.isMPOS = exports.getH5Channel = undefined;

var _qs = __webpack_require__(32);

var _qs2 = _interopRequireDefault(_qs);

var _store = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取h5Channel
var getH5Channel = exports.getH5Channel = function getH5Channel() {
	var queryData = _qs2.default.parse(location.search, { ignoreQueryPrefix: true });
	var ua = navigator.userAgent;
	var h5Channel = '';
	if (queryData.h5Channel) {
		h5Channel = queryData.h5Channel;
	} else if (_store.store.getH5Channel()) {
		h5Channel = _store.store.getH5Channel();
	} else if (/SuiXingPay-Mpos/i.test(ua)) {
		h5Channel = 'MPOS';
	} else {
		h5Channel = 'OTHER';
	}
	return h5Channel;
};

// 判断是对内mpos还是对外
var isMPOS = exports.isMPOS = function isMPOS() {
	var ua = navigator.userAgent;
	sessionStorage.setItem('isMPOS', /SuiXingPay-Mpos/i.test(ua) ? true : false);
	return (/SuiXingPay-Mpos/i.test(ua) ? true : false
	);
};

// 设置h5Channel
var setH5Channel = exports.setH5Channel = function setH5Channel(channel) {
	var queryData = _qs2.default.parse(location.search, { ignoreQueryPrefix: true });
	var ua = navigator.userAgent;
	var sessionH5Channel = _store.store.getH5Channel();
	if (queryData.h5Channel) {
		_store.store.setH5Channel(queryData.h5Channel);
	} else if (channel) {
		_store.store.setH5Channel(channel);
	} else if (/SuiXingPay-Mpos/i.test(ua)) {
		_store.store.setH5Channel('MPOS');
	} else if (sessionH5Channel) {
		_store.store.setH5Channel(sessionH5Channel);
	} else {
		_store.store.setH5Channel('OTHER');
	}
};

// 判断是否是手机打开
var isPhone = exports.isPhone = function isPhone() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
	var flag = false;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = true;
			break;
		}
	}
	return flag;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(40);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(46);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(72);
var parse = __webpack_require__(73);
var formats = __webpack_require__(34);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.store = undefined;

var _stringify = __webpack_require__(74);

var _stringify2 = _interopRequireDefault(_stringify);

var _storeTypes = __webpack_require__(76);

var _common = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 本地存储
var _window = window,
    localStorage = _window.localStorage,
    sessionStorage = _window.sessionStorage;
// 默认使用sessionstorage

var STORAGE_METHOD = sessionStorage;
var storageUtil = {
	// && list.includes(funcName) bug机 全部存入到
	setItem: function setItem(key, value, funcName) {
		STORAGE_METHOD = isBugBrowser() ? localStorage : sessionStorage;

		STORAGE_METHOD.setItem(key, (0, _stringify2.default)(value));
	},
	getItem: function getItem(key, funcName) {
		STORAGE_METHOD = isBugBrowser() ? localStorage : sessionStorage;

		var value = STORAGE_METHOD.getItem(key);
		return JSON.parse(value);
	},
	clear: function clear(funcName) {
		STORAGE_METHOD = isBugBrowser() ? localStorage : sessionStorage;

		STORAGE_METHOD.clear();
	},
	removeItem: function removeItem(key, funcName) {
		STORAGE_METHOD = isBugBrowser() ? localStorage : sessionStorage;

		STORAGE_METHOD.removeItem(key);
	},
	multiGet: function multiGet(keys) {
		var _this = this;

		var values = {};
		keys.forEach(function (key) {
			values[key] = _this.getItem(key);
		});
		return values;
	},
	multiRemove: function multiRemove(keys) {
		var _this2 = this;

		keys.forEach(function (key) {
			return _this2.removeItem(key);
		});
	}
};

// 定义需要特殊处理的浏览器
var bugBrowserArr = ['vivobrowser', 'oppobrowser', 'safari'];

// 检测是否是某种 bug 浏览器
var isBugBrowser = function isBugBrowser() {
	var u = navigator.userAgent.toLowerCase();
	// Toast.info(u,0)
	var bugBrowserList = bugBrowserArr.filter(function (item) {
		return u.indexOf(item) > -1;
	});
	return bugBrowserList.length > 0 && u.indexOf('micromessenger') <= -1 && u.indexOf('suixingpay-mpos') <= -1 && !(0, _common.isPhone)();
};

var store = {};
// 需要区别对待的存储字段
var list = ['Token', 'JumpUrl', 'H5Channel', 'billNo'];

// 本地存储工厂函数，生成 set get remove 方法(优先使用sessionstorage)
var storeFactory = function storeFactory(funcName, key) {
	store['set' + funcName] = function (data) {
		storageUtil.setItem(key, data, funcName);
	};
	store['get' + funcName] = function () {
		return storageUtil.getItem(key, funcName);
	};
	store['remove' + funcName] = function () {
		return storageUtil.removeItem(key, funcName);
	};
};

// 循环添加存储方法(包括local session)
for (var funName in _storeTypes.storeTypes) {
	storeFactory(funName, _storeTypes.storeTypes[funName]);
}

exports.store = store;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(9);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _setPrototypeOf = __webpack_require__(11);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _analytins = __webpack_require__(67);

var _analytinsType = __webpack_require__(77);

var _style = __webpack_require__(78);

var _style2 = _interopRequireDefault(_style);

var _withStyles = __webpack_require__(86);

var _withStyles2 = _interopRequireDefault(_withStyles);

var _withViewport = __webpack_require__(88);

var _withViewport2 = _interopRequireDefault(_withViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; }

var sa = __webpack_require__(90);
if (!window.sa) {
  window.sa = sa;
}
(0, _analytins.initAnalytics)();
var Com = (_dec = (0, _withStyles2.default)(_style2.default), (0, _withViewport2.default)(_class = _dec(_class = function (_Component) {
  _inherits(Com, _Component);

  function Com(props) {
    _classCallCheck(this, Com);

    var _this = _possibleConstructorReturn(this, (Com.__proto__ || (0, _getPrototypeOf2.default)(Com)).call(this, props));

    _this.getA = function () {
      (0, _analytins.buriedPointEvent)(_analytinsType.login.submit);
    };

    (0, _analytins.pageView)();
    return _this;
  }

  _createClass(Com, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var pageStyles = {
        background: props.backgroundColor,
        height: this.props.viewport.height
      };
      var btnStyles = {
        background: props.btnBackgroundColor
      };
      return _react2.default.createElement(
        "div",
        { style: pageStyles, className: "buluo-DownloadPage" },
        _react2.default.createElement(
          "div",
          { className: "logo-wrap" },
          _react2.default.createElement("img", { className: "logo", src: props.logo })
        ),
        _react2.default.createElement(
          "div",
          { className: "download-btns-wrap" },
          _react2.default.createElement(
            "a",
            {
              style: btnStyles,
              onClick: this.getA,
              className: "download-btn iphone"
            },
            props.iOSText
          ),
          _react2.default.createElement(
            "a",
            {
              style: btnStyles,
              href: props.androidUrl,
              className: "download-btn android"
            },
            props.androidText
          )
        )
      );
    }
  }]);

  return Com;
}(_react.Component)) || _class) || _class);


module.exports = Com;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(10).f });


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(2);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(44).set });


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5);
var anObject = __webpack_require__(4);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(19)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(20);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(49) });


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(29);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(21)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(27);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(56) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(16);
var $getPrototypeOf = __webpack_require__(61);

__webpack_require__(62)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(16);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2);
var core = __webpack_require__(0);
var fails = __webpack_require__(6);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(30),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B("321"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = __webpack_require__(30);
var checkPropTypes = __webpack_require__(65);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

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

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
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
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
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
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
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
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
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
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
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
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
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
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
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
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
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
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
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
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
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
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

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


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(66);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
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
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buriedPointEvent = exports.pageView = exports.initAnalytics = undefined;

var _assign = __webpack_require__(31);

var _assign2 = _interopRequireDefault(_assign);

var _qs = __webpack_require__(32);

var _qs2 = _interopRequireDefault(_qs);

var _store = __webpack_require__(35);

var _common = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//初始化神策埋点 及 渠道信息
var initAnalytics = exports.initAnalytics = function initAnalytics() {
  window.version = 'v1.1';
  sa.init({
    server_url: 'http://10.1.1.81:8106/sa',
    sdk_url: 'https://static.sensorsdata.cn/sdk/1.7.1.1/sensorsdata.min.js',
    show_log: true, //是否打印上报日志
    is_single_page: true
  });
  var query = _qs2.default.parse(window.location.search, {
    ignoreQueryPrefix: true
  });
  var ua = window.navigator.userAgent;
  // if (!store.getH5Channel()) {
  //   /SuiXingPay-Mpos/i.test(ua)
  //     ? query.h5Channel
  //       ? store.setH5Channel(query.h5Channel)
  //       : store.setH5Channel('MPOS')
  //     : store.setH5Channel(query.h5Channel ? query.h5Channel : 'other');
  // }
  // 解决banner等通过location href在mpos中跳转返回后h5Channel丢失的问题
  var storeH5Channel = (0, _common.getH5Channel)();
  (0, _common.setH5Channel)(storeH5Channel);
  if (!_store.store.getVersion()) {
    _store.store.setVersion(window.version);
  }
  if (/MicroMessenger/i.test(window.navigator.userAgent) && _store.store.getVersion() !== window.version) {
    _store.store.setVersion(window.version);
    window.location.reload();
  }
};

// 定义固定参数
function getStaticParams() {
  return {
    product_line: '还到-余额代偿',
    project_name: document.title,
    forward_module: document.referrer,
    page_category: document.title,
    channelType: (0, _common.getH5Channel)()
  };
}

/*
 * PV统计
 *
 * */
var pageView = exports.pageView = function pageView() {
  var params = getStaticParams();
  sa.quick('autoTrackSinglePage', params);
};

/*
 * 埋点事件
 *
 * */
var buriedPointEvent = exports.buriedPointEvent = function buriedPointEvent(buriedKey, params) {
  var staticParams = getStaticParams();
  var sendParams = (0, _assign2.default)({}, staticParams, params);
  sa.track(buriedKey, sendParams);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(2);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(70) });


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(1);
var getKeys = __webpack_require__(27);
var gOPS = __webpack_require__(71);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(16);
var IObject = __webpack_require__(25);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);
var formats = __webpack_require__(34);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    formatter: formats.formatters[formats['default']],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(33);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === 'number' ? opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// 本地local存储 方法名与key值对应表
var storeTypes = exports.storeTypes = {
	RepaymentModalData: 'RepaymentModalData', // 保存确认代还信息弹框数据
	// HomeCardIndexData: 'HomeCardIndexData', // 保存首页信用卡信息
	BackUrl: 'BackUrl', // 保存跳转的url
	BackUrl2: 'BackUrl2', // 临时缓存
	CardData: 'CardData', // 跳转路由中的银行卡信息
	MoxieBackUrl: 'MoxieBackUrl', // 跳转魔蝎授权页 授权后返回的url
	MoxieBackUrl2: 'MoxieBackUrl2', // 跳转魔蝎授权页 授权后返回的url
	AuthFlag: 'AuthFlag', // 是否实名认证的flag
	UserPhone: 'UserPhone', // 用户手机号
	UserInfo: 'UserInfo', // 用户信息
	ParamVip: 'ParamVip', // 会员卡参数
	VIPInfo: 'VIPInfo', // 会员卡信息
	VipBackUrl: 'VipBackUrl', // 会员卡入口与出口
	Position: 'Position', // 定位信息
	ProtocolFinancialData: 'ProtocolFinancialData',
	OrderSuccess: 'OrderSuccess', // 付款成功信息
	BackData: 'BackData', // 订单信息
	BillNo: 'BillNo',
	MsgObj: 'MsgObj', // // 消息详情
	MsgBackData: 'MsgBackData', // 消息详情
	HistoryRouter: 'HistoryRouter', // 历史路由
	CheckCardRouter: 'CheckCardRouter', // 保存四项认证进入绑卡页的标识
	BannerData: 'BannerData', // 保存 banner 信息
	OutLinkUrl: 'OutLinkUrl', // 去外链标识
	CouponData: 'CouponData', // 跳转路由中优惠劵的信息
	LandingPageImgUrl: 'LandingPageImgUrl', // 落地页图片
	HadShowModal: 'HadShowModal', // 是否开过弹框
	BackFlag: 'BackFlag', // 是否返回的flag
	DisableBack: 'DisableBack', // 禁止返回的标识
	LoginBack: 'LoginBack', // 登录页协议返回
	QueryUsrSCOpenId: 'QueryUsrSCOpenId', // 用户标识
	FromPage: 'FromPage', // 页面来源
	Consoleshow: 'Consoleshow', // 显示console
	Version: 'Version', // 版本号
	RewardCount: 'RewardCount', // 抽奖次数
	Token: 'Token', // local-token
	JumpUrl: 'JumpUrl', // 调整的url
	H5Channel: 'H5Channel', // 存储h5Channel
	Address: 'Address', // 常住地址
	Linkman: 'Linkman', // 联系人姓名
	Linkphone: 'Linkphone', // 联系人电话
	RelationValue: 'RelationValue', // 亲属关系
	Province: 'Province', // 省份
	City: 'City', // 城市
	ShowActivityModal: 'ShowActivityModal', // 是否显示活动弹窗
	SaveAmt: 'SaveAmt', // 回显代还金额的数据
	BindCardNo: 'BindCardNo', // 回显绑卡卡号
	BindCreditCardNo: 'BindCreditCardNo', // 回显绑卡信用卡卡号
	BindCardPhone: 'BindCardPhone', // 回显绑卡手机号
	OrderDetailData: 'OrderDetailData', // 账单详情页数据
	MessageTagError: 'MessageTagError', // 错误不显示
	MessageTagStep: 'MessageTagStep', // 步骤
	CouponActivityFlag: 'CouponActivityFlag', // 呈现不同机具页面的标识
	MposToken: 'MposToken', // mpos token 关闭无效问题
	NeedNextUrl: 'NeedNextUrl', // 需要调用获取下一步url方法
	CreditExtensionNot: 'CreditExtensionNot', // 未提交授信用户
	ToggleMoxieCard: 'ToggleMoxieCard', // 新版流程物理返回  借钱还信用卡 切换卡
	LoanAspirationHome: 'LoanAspirationHome', // 首页弹窗 填写意愿
	CarrierMoxie: 'CarrierMoxie', // 运营商直接返回的问题
	BankMoxie: 'BankMoxie', // 信用卡直接返回的问题
	GoMoxie: 'GoMoxie', // 魔蝎银行列表去魔蝎再返回的两次退出才退出的问题
	CreditSuccessBack: 'CreditSuccessBack', // 信用卡绑卡之后立即去提交页需要提示
	NoLoginUrl: 'NoLoginUrl', // 微信授权失败跳转到那个页面
	LoginDownloadBtn: 'LoginDownloadBtn', // 登陆页点击立即下载按钮标识
	MessageTagLimitDate: 'MessageTagLimitDate', // 首页的额度有效期显示标识
	OverdueInf: 'OverdueInf', // 逾期进度数据
	SuccessPay: 'SuccessPay', // 418 活动返回
	IdChkPhotoBack: 'IdChkPhotoBack', // 签约页是否需要补充活体识别标示
	ChkPhotoBackNew: 'ChkPhotoBackNew', // 活体直接返回
	RealNameNextStep: 'RealNameNextStep', // 需要下一步
	CashFenQiStoreData: 'CashFenQiStoreData', //现金分期反显的数据
	CashFenQiCardArr: 'CashFenQiCardArr', //现金分期收、还卡数组
	HomeAutId: 'HomeAutId', // 首页的autId
	AutId: 'AutId', // 接口调用需要的AutId
	FQActivity: 'FQActivity', // 参与现金分期活动
	AutId2: 'AutId2', // 进度页物理返回存储的接口调用需要的AutId
	PercentCount: 'PercentCount', //百分比次数
	HomeConfirmAgency: 'HomeConfirmAgency', // 首页进入到签约借款页面参数
	DepositBankName: 'DepositBankName', // 储蓄卡银行名称
	AC20190618: 'AC20190618', //618
	PayType: 'PayType', // 还款方式
	WxPayEnd: 'WxPayEnd', // 微信返回不刷新
	GotoMoxieFlag: 'GotoMoxieFlag', // 去到魔蝎第三方的标示
	InsuranceFlag: 'InsuranceFlag', // 标识该次绑卡是否要求绑定支持收取保费的卡
	NoLoginToken: 'NoLoginToken' // 设置 图片验证码 noLoginToken
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.other = exports.loan_fenqi = exports.loan_repay_confirm = exports.mpos_ioscontrol_page = exports.moxie_bank_list = exports.activity = exports.mpos_service_authorization = exports.bugLog = exports.membership = exports.order = exports.mine = exports.home = exports.login = undefined;

var _common = __webpack_require__(18);

var prefix = 'DC';
// dc 多
// xdc少

// DC 对外
// XDC mpos入口=>对内
if ((0, _common.isMPOS)() || JSON.parse(sessionStorage.getItem('isMPOS'))) {
	prefix = 'XDC';
}
// console.log(JSON.parse(sessionStorage.getItem('isMPOS')),'test')
var login = {
	getCode: prefix + '_LOGIN_GET_CODE', // 注册登录页-点击获取验证码
	submit: prefix + '_LOGIN_SUBMIT' // 注册登录页-一键代还
};

var home = {
	applyCreditRepayment: prefix + '_HOME_APPLY_CREDIT_REPAYMENT', // 首页-点击申请信用卡代还按钮
	// homeContinueApply: `${prefix}_HOME_CONTINUE_APPLY`, // 还卡-继续申请  增加属性，继续页面：基本信息认证，银行列表，运营商认证
	HomeCardRenew: prefix + '_HOME_CARD_RENEW', // 借钱换信用卡  重新更新
	easyRepay: prefix + '_HOME_EASY_REPAYMENT', // 首页-点击一键还卡（代还）
	repayOtherCredit: prefix + '_HOME_REPAY_OTHER_CREDIT', // 首页-点击代还其他信用卡
	viewBill: prefix + '_HOME_VIEW_BILL', // 首页-点击查看代还账单
	durationDay30: prefix + '_MINE_CREDIT_EXTENSION_DURATION_DAY_30', // 申请期限-30天
	durationMonth3: prefix + '_MINE_CREDIT_EXTENSION_DURATION_MONTH_3', // 申请期限-3个月
	durationMonth6: prefix + '_MINE_CREDIT_EXTENSION_DURATION_MONTH_6', // 申请期限-6个月
	durationMonth9: prefix + '_MINE_CREDIT_EXTENSION_DURATION_MONTH_9', // 申请期限-9个月
	durationMonth12: prefix + '_MINE_CREDIT_EXTENSION_DURATION_MONTH_12', // 申请期限-12个月
	moneyCreditCardConfirm: prefix + '_MONEY_CREDIT_CARD_CONFIRM', // 借钱还信用卡-提交申请成功
	moneyCreditCardConfirmBtn: prefix + '_MONEY_CREDIT_CARD_CONFIRM_BTN', // 借钱还信用卡-提交申请按钮
	// compensationCreditCardConfirm: `${prefix}_COMPENSATION_CREDIT_CARD_CONFIRM`, // 代偿信用卡-确认
	userRetrieveContinue: prefix + '_USER_RETRIEVE_CONTINUE', // 用户挽回-再等等
	userRetrieveQuit: prefix + '_USER_RETRIEVE_QUIT', // 用户挽回-放弃
	repaymentIntentionAll: prefix + '_REPAYMENT_INTENTION_ALL', // 还款意愿-全额还款
	repaymentIntentionLowest: prefix + '_REPAYMENT_INTENTION_LOWEST', // 还款意愿-最低还款
	repaymentIntentionPart: prefix + '_REPAYMENT_INTENTION_PART', // 还款意愿-部分还款
	lenders: prefix + '_HOME_LENDERS', // 放款日期-立即放款
	lendersOrder: prefix + '_HOME_LENDERS_ORDER', // 放款日期-预约放款
	borrowingSubmit: prefix + '_HOME_BORROWING_PRE_SUBMIT', // 代还信息确认页-点击确认按钮
	borrowingSubmitResult: prefix + '_HOME_BORROWING_PRE_SUBMIT_RESULT', // 代还信息确认页-点击确认按钮-结果事件
	informationMyselfFrontCard: prefix + '_HOME_BASE_INFO_FRONT_CARD', // 实名认证页-点击拍摄身份证正面
	informationMyselfBackCard: prefix + '_HOME_BASE_INFO_BACK_CARD', // 实名认证页-点击拍摄身份证反面
	informationTapNameInp: prefix + '_HOME_BASE_INFO_USERNAME', // 实名认证页-点击姓名输入框
	informationTapIDInp: prefix + '_HOME_BASE_INFO_IDCARD', // 实名认证页-点击身份证号输入框
	informationConfirm: prefix + '_HOME_BASE_INFO_CONFIRM', // 实名认证页-确定按钮
	basicInfoBury: prefix + '_HOME_BASE_INFO_BURY', // 基本信息输入框下拉框埋点
	basicInfoComplete: prefix + '_HOME_BASICINFO_COMPLETE', // 基本信息页-确定按钮
	landingPage: prefix + '_HOME_LANDING_PAGE', // 落地页
	bannerClick: prefix + '_HOME_BANNER_CLICK', // 点击banner
	cardResult: prefix + '_HOME_CARD_RESULT', // 信用卡提交结果埋点
	operatorResult: prefix + '_HOME_OPERATOR_RESULT', // 运营商提交结果埋点
	faceAuthResult: prefix + '_HOME_FACEAUTH_RESULT', // 人脸提交结果埋点
	downloadBtnClick: prefix + '_DOWNLOAD_BTN_CLICK', // 下载页点击按钮事件
	manualAudit: prefix + '_RETURN_CARD_VIEWING_PROGRESS_MANUALAUDIT', //人工审核
	machineAudit: prefix + '_RETURN_CARD_VIEWING_PROGRESS_MACHINE', //机器审核
	quickLoan: prefix + '_RETURN_CARD_VIEWING_PROGRESS_LOAN', //快速放款
	signedLoan: prefix + '_RETURN_CARD_VIEWING_PROGRESS_BORROWING', //立即签约借款
	applyLoan: prefix + '_RETURN_CARD_VIEWING_PROGRESS_APPLY', //申请借钱还信用卡
	billImport: prefix + '_RETURN_CARD_VIEWING_PROGRESS_IMPORT', //账单导入
	billContinueImport: prefix + '_RETURN_CARD_VIEWING_PROGRESS_CONTINUEIMPORT', //继续导入信用卡账单
	continueRealInfo: prefix + '_RETURN_CARD_VIEWING_PROGRESS_OPERATOR', //继续确认身份信息
	selectCreditCardResult: prefix + '_CARD_SELECTION_CARDSELECTION', //选择信用卡_选卡结果
	addCreditCard: prefix + '_CARD_SELECTION_NEWCARD', //新增需要还款信用卡
	importOtherCreditCard: prefix + '_ADD_SCHEDULE_CREDIT_CARDS', //选择导入其他信用卡
	replaceCard: prefix + '_APPLY_LOAN_CARD_REPLACEMENT', //申请借钱还-更换卡
	gotIt: prefix + '_QUICK_PAY_GOTIT', //快速打款中-我知道了
	manualAuditFollow: prefix + '_AWAITING_AUDIT_FOLLOW', //等待人工审核-关注
	assessingBindCard: prefix + '_RAPID_ASSESSMENT_BINDING_CARD', //快速评估中-绑卡
	protocolSmsFail: prefix + '_HOME_PROTOCOL_SMS_FAIL', // 签约借款页协议绑卡校验失败埋点
	protocolBindFail: prefix + '_HOME_PROTOCOL_BIND_FAIL', // 签约借款页协议绑卡绑定失败埋点
	protocolBindBtnClick: prefix + '_HOME_PROTOCOL_MODAL_BTN_CLICK', // 签约借款页协议绑卡短验弹框按钮点击

	dialogInformation: prefix + '_QUESTION_FEEDBACK_BASIC_INFORMATION',
	dialogInformation_wait: prefix + '_QUESTION_FEEDBACK_BASIC_INFORMATION_CONTINUE',
	dialogInformation_close: prefix + '_QUESTION_FEEDBACK_BASIC_INFORMATION_CLOSE',

	dialogMoxieBank: prefix + '_QUESTION_FEEDBACK_BANK',
	dialogMoxieBank_wait: prefix + '_QUESTION_FEEDBACK_BANK_CONTINUE',
	dialogMoxieBank_close: prefix + '_QUESTION_FEEDBACK_BANK_CLOSE',

	dialogLoanRepay: prefix + '_QUESTION_FEEDBACK_APPLY',
	dialogLoanRepay_wait: prefix + '_QUESTION_FEEDBACK_APPLY_CONTINUE',
	dialogLoanRepay_close: prefix + '_QUESTION_FEEDBACK_APPLY_CLOSE',

	feedModalOperator: prefix + '_TIPS_OPERATORS_RETRIEVE', //找回运营商密码
	feedModalInterbank: prefix + '_TIPS_INTERNETBANK_RETRIEVE', //找回信用卡密码
	feedModalSubmit: prefix + '_TIPS_OTHERISSUES', //反馈问题提交事件
	feedModalBtnClick: prefix + '_TIPS_RISSUES' //选择问题按钮点击总事件
};

var mine = {
	faq: prefix + '_MINE_FAQ', // 常见问题页
	saveConfirm: prefix + '_MINE_SAVE_CONFIRM', // 绑定储蓄卡页-确定按钮
	creditConfirm: prefix + '_MINE_CREDIT_CONFIRM', // 绑定信用卡页-确定按钮
	creditExtension: prefix + '_MINE_CREDIT_EXTENSION', // 风控授信项页 从哪进入（首页、我的）
	creditExtensionConfirm: prefix + '_MINE_CREDIT_EXTENSION_CONFIRM', // 风控授信项页-点击提交代还金申请按钮
	creditExtensionBack: prefix + '_MINE_CREDIT_EXTENSION_BACK', // 风控授信项页
	creditExtensionRealName: prefix + '_MINE_CREDIT_EXTENSION_REAL_NAME', // 风控授信项页 点击实名认证
	creditExtensionBaseInfo: prefix + '_MINE_CREDIT_EXTENSION_BASE_INFO', // 风控授信项页 点击基本信息认证
	creditExtensionOperator: prefix + '_MINE_CREDIT_EXTENSION_OPERATOR', // 风控授信项页 点击运营商认证
	creditExtensionFaceAuth: prefix + '_MINE_CREDIT_EXTENSION_FACEAUTH', // 风控授信项页 点击人脸识别认证
	creditExtensionZM: prefix + '_MINE_CREDIT_EXTENSION_ZM', // 风控授信项页 点击芝麻分认证
	protocolSmsFail: prefix + '_MINE_PROTOCOL_SMS_FAIL', // 绑定储蓄卡页协议绑卡校验失败埋点
	protocolBindFail: prefix + '_MINE_PROTOCOL_BIND_FAIL' // 绑定储蓄卡页协议绑卡绑定失败埋点
};

var order = {
	repayment: prefix + '_ORDER_DETAILS_REPAYMENT', // 账单详情页-主动还款按钮
	repaymentFirst: prefix + '_ORDER_DETAILS_REPAYMENT_FIRST', // 账单详情页-付款详情-立即还款按钮
	returnHome: prefix + '_ORDER_BACK_HOME', // 还款完成页-返回首页按钮
	openNow: prefix + '_ORDER_OPEN_NOW', // 还款完成页-弹框里立即开启按钮
	closeModal: prefix + '_ORDER_CLOSE_MODAL' // 还款完成页-弹框里关闭按钮
};

var membership = {
	confirmBuyPre: prefix + '_MEMBERSHIP_CONFIRM_BUY_PRE', // 会员卡购买页-确认购买按钮
	bindCardCredit: prefix + '_MEMBERSHIP_BIND_CARD_CREDIT', // 会员卡购买页-绑定银行卡-信用卡页-确认绑定按钮
	bindCardSave: prefix + '_MEMBERSHIP_BIND_CARD_SAVE', // 会员卡购买页-绑定银行卡-储蓄卡页-确认绑定按钮
	confirmBuy: prefix + '_MEMBERSHIP_CONFIRM_BUY' // 会员卡购买-确认购买页-确认购买按钮
};

var bugLog = {
	apiErrorLog: prefix + '_API_ERROR_LOG', // 接口异常报错日志
	pageErrorLog: prefix + '_PAGE_ERROR_LOG' // 页面异常报错日志
};

var mpos_service_authorization = {
	auth_btn: prefix + '_AUTH_PAGE_AUTH_BTN',
	auth_page: prefix + '_MPOS_AUTH_PAGE'
};

var activity = {
	newUserEntry: prefix + '_NEW_USER_ACTIVITY_ENTRY', // 拉新活动运营入口来源埋点
	couponEntry: prefix + '_COUPON_ACTIVITY_ENTRY', // 领取优惠券活动运营
	dazhuanpan_316_entry: prefix + '_DAZHUANPAN_316_ACTIVITY_ENTRY', // 316大转盘入口区分
	dazhuanpan_316_draw_result: prefix + '_DAZHUANPAN_316_DRAW_RESULT', // 316大转盘中奖情况
	jupeiEntry: prefix + '_JUPEI_ACTIVITY_ENTRY', //拒就赔活动
	funsisongEntry: prefix + '_ACTIVITY_FUNSISONG_ENTRY', // 放肆送活动入口
	couponBtnClick: prefix + '_ACTIVITY_COUPON_GET', // 放肆送活动领取按钮点击
	redBagBtnClick: prefix + '_ACTIVITY_REDBAG_GET', // 放肆送活动还信用卡赚钱按钮点击
	joinNowClick: prefix + '_ACTIVITY_CHECK_COUPON', // 放肆送活动弹框立即参与按钮点击
	checkCouponClick: prefix + '_ACTIVITY_JOIN_NOW', // 放肆送活动弹框查看优惠劵按钮点击
	homeModalBtnClick: prefix + '_ACTIVITY_HOME_MODAL_CLICK', // 放肆送活动中mpos 还到弹窗 点击
	mianxi418Entry: prefix + '_ACTIVITY_MIANXI_418_ENTRY', // 最高免息30天 活动入口
	mianxi418Btn: prefix + '_ACTIVITY_MIANXI_418_BTN', // 最高免息30天 按钮
	wenjuanEntry: prefix + '_ACTIVITY_WENJUAN_ENTRY', // 问卷入口
	wenjuanBtn: prefix + '_ACTIVITY_WENJUAN_BTN', // 问卷提交按钮
	wenjuanShare: prefix + '_ACTIVITY_WENJUAN_SHARE', // 问卷提交分享
	wenjuanHome: prefix + '_ACTIVITY_WENJUAN_Home', // 问卷去首页
	jjpEntry: prefix + '_ACTIVITY_JUJIUPEI_ENTRY', //拒就赔活动入口
	jjpGetBtn: prefix + '_ACTIVITY_JUJIUPEI_GET_BTN', //拒就赔领取按钮点击
	jjpMposConfirmBtn: prefix + '_ACTIVITY_JUJIUPEI_MPOS_CONFIRM', //拒就赔mpos中弹框确定按钮点击
	jjpWxConfirmBtn: prefix + '_ACTIVITY_JUJIUPEI_WX_CONFIRM', //拒就赔微信中弹框确定按钮点击
	jjpHomeModalClick: prefix + '_ACTIVITY_JUJIUPEI_HOME_MODAL_CLICK', //拒就赔首页弹框按钮点击
	brandEntry: prefix + '_ACTIVITY_BRAND_ENTRY', // 品牌活动入口
	brandBtnClick: prefix + '_ACTIVITY_BRAND_TIYAN_BTN', // 品牌活动还到体验按钮点击
	brandHomeModalClick: prefix + '_ACTIVITY_BRAND_HOME_MODAL_CLICK', // 品牌活动首页弹框开启生涯模式按钮点击
	fenqiHomeModalGoBtn: prefix + '_FENQI_HOME_MODAL_GO_BTN', //现金分期活动弹窗按钮点击
	fenqiHomeModalClose: prefix + '_FENQI_HOME_MODAL_CLOSE', //现金分期活动弹窗关闭
	mayReceiveBtn: prefix + '_ACTIVITY_TWO_RECEIVE', // 五月狂欢活动 畅想双重豪礼 领取 按钮
	mayExtractBtn: prefix + '_ACTIVITY_TWO_EXTRACT', // 五月狂欢活动 畅想双重豪礼 抽奖 按钮
	mayNewRecBtn: prefix + '_ACTIVITY_NEW_ONEKEYCOLLECTION', // 五月狂欢活动 新用户专享 一键领取 按钮
	mayNewRulesBtn: prefix + '_ACTIVITY_NEW_ACTIVITYRULES', // 五月狂欢活动 新用户专享 活动规则 按钮
	mayNewConfirmRecBtn: prefix + '_ACTIVITY_NEW_RECEIVEIMMEDIATELY_CONFIRMRECEIPT', // 五月狂欢活动 新用户专享-马上领取 确认领取 按钮
	mayNewUseNowBtn: prefix + '_ACTIVITY_NEW_CONGRATULATIONS_USEIMMEDIATELY', // 五月狂欢活动 新用户专享-恭喜您 马上使用 按钮
	mayNewToOldBtn: prefix + '_ACTIVITY_NEW_SORRY_JUMP', // 五月狂欢活动 新用户专享-抱歉 跳转老用户专享 按钮
	mayOldDrawBtn: prefix + '_ACTIVITY_OLD_STARTRAFFLE', // 五月狂欢活动 老用户专享-开始抽奖 按钮
	mayOldToNewBtn: prefix + '_ACTIVITY_OLD_SORRY_JUMP', // 五月狂欢活动 老用户专享-跳转新用户专享 按钮
	mayOldAuthTipsBtn: prefix + '_ACTIVITY_OLD_TIPS_AUTHENTICATION', // 五月狂欢活动 老用户专享-提示 填写认证资料 按钮
	mayOldNoPrizeBtn: prefix + '_ACTIVITY_OLD_FRIENDSHIPTIPS_NOPRIZE', // 五月狂欢活动 老用户专享-友情提示-奖品数量-知道了 按钮
	mayOldNoChanceBtn: prefix + '_ACTIVITY_OLD_FRIENDSHIPTIPS_NOCHANCE', // 五月狂欢活动 老用户专享-友情提示-抽奖机会-知道了 按钮
	mayOldUseNowBtn: prefix + '_ACTIVITY_OLD_CONGRATULATIONS', // 五月狂欢活动 老用户专享-恭喜你 立即使用 按钮
	mayOldRulesBtn: prefix + '_ACTIVITY_OLD_ACTIVITYRULES', // 五月狂欢活动 老用户专享 活动规则 按钮
	mayOldMyPrizeBtn: prefix + '_ACTIVITY_OLD_MYPRIZE', // 五月狂欢活动 老用户专享 我的奖品 按钮
	mayOldMyPrizeUseBtn: prefix + '_ACTIVITY_OLD_MYPRIZE_IMMEDIATEUSE', // 五月狂欢活动 老用户专享-我的奖品 立即使用 按钮
	mayJoinSuccess: prefix + '_ACTIVITY_JOIN_SUCCESS', // 五月狂欢活动 成功参与埋点（调用后台接口）
	koubeiEntry: prefix + '_ACTIVITY_KOUBEI_ENTRY', // 口碑活动入口来源
	koubeiBtnClick: prefix + '_ACTIVITY_KOUBEI_TIYAN_BTN', // 口碑活动还到体验按钮点击
	koubeiHomeOldModalClick: prefix + '_ACTIVITY_KOUBEI_HOME_OLDMODAL_CLICK', // 口碑活动首页老用户弹框
	koubeiHomeNewModalClick: prefix + '_ACTIVITY_KOUBEI_HOME_NEWMODAL_CLICK', // 口碑活动首页新用户弹框
	jd618Entry: prefix + '_JD618_ENTRY',
	freebillEntry: prefix + '_FREEBILL_ENTRY',
	jd618BtnClick: prefix + '_ACTIVITY_JD618_BTN',
	jd618ModalBtnClick: prefix + '_ACTIVITY_JD618_MODAL_BTN',
	freeBillBtnClick: prefix + '_ACTIVITY_FREEBILL_BTN',
	freeBillModalBtnClick: prefix + '_ACTIVITY_FREEBILL_MODAL_BTN',
	yhq7ModalBtnClick: prefix + '_ACTIVITY_YHQ7_MODAL_BTN',
	yhq50ModalBtnClick: prefix + '_ACTIVITY_YHQ50_MODAL_BTN',
	jd618ResultModalClick: prefix + '_JD618_RESULT_MODAL_CLICK',
	jd618HomeModalClose: prefix + '_JD618HOMEMODALCLOSE',
	freeBillHomeModalClose: prefix + '_FREEBILLHOMEMODALCLOSE'
};

var moxie_bank_list = {
	bankChooes: prefix + '_CREDIT_BANK_CHOOES', // 拉新活动运营入口来源埋点
	bankRefresh: prefix + '_CREDIT_BANK_REFRESH' // 领取优惠券活动运营
};

var mpos_ioscontrol_page = {
	iosControlPageView: prefix + '_MPOS_HD_WECHAT', // mpos 管控页页面/mpos引流微信页面加载完成
	copySuccess: prefix + '_COPY_SUCCESS' // mpos 管控页页面/mpos引流微信页面复制成功
};

var loan_repay_confirm = {
	// back30: `${prefix}_PRODUCT_BACK_30`,
	// sure30: `${prefix}_PRODUCT_SURE_30`,
	// cancle30: `${prefix}_PRODUCT_CANCLE_30`,
	// select30: `${prefix}_PRODUCT_SELECT_30`
};

var other = {
	outerDownloadBtnClick: prefix + '_OUTER_DOWNLOAD_BUTTON_CLICK' //外部下载页按钮点击事件
};

var loan_fenqi = {
	day30: prefix + '_FENQI_DATE_DAY_30',
	month3: prefix + '_FENQI_DATE_MONTH_3',
	month6: prefix + '_FENQI_DATE_MONTH_6',
	month9: prefix + '_FENQI_DATE_MONTH_9',
	month12: prefix + '_FENQI_DATE_MONTH_12',
	moneyBlur: prefix + '_FENQI_MONEY_BLUR',
	repayPlan: prefix + '_FENQI_REPAY_PLAN',
	resaveCard: prefix + '_FENQI_RESAVECARD',
	payCard: prefix + '_FENQI_PAYCARD',
	contract: prefix + '_FENQI_CONTRACT',
	clickSubmit: prefix + '_FENQI_CLICK_SUBMIT',
	submitResult: prefix + '_FENQI_SUBMIT_RESULT',
	fenqiGoBack: prefix + '_FENQI_GO_BACK',
	fenqiDownload: prefix + '_FENQI_DOWNLOAD_CLICK',
	fenqiHomeApplyBtn: prefix + '_FENQI_HOME_APPLY_BTN'
};

exports.login = login;
exports.home = home;
exports.mine = mine;
exports.order = order;
exports.membership = membership;
exports.bugLog = bugLog;
exports.mpos_service_authorization = mpos_service_authorization;
exports.activity = activity;
exports.moxie_bank_list = moxie_bank_list;
exports.mpos_ioscontrol_page = mpos_ioscontrol_page;
exports.loan_repay_confirm = loan_repay_confirm;
exports.loan_fenqi = loan_fenqi;
exports.other = other;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(79);

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(84)(content, {"hmr":true});
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) {
	var lastRefs = module.hot.data && module.hot.data.refs || 0;

	if(lastRefs) {
		exports.ref();
		if(!content.locals) {
			refs = lastRefs;
		}
	}

	if(!content.locals) {
		module.hot.accept();
	}

	module.hot.dispose(function(data) {
		data.refs = content.locals ? 0 : refs;

		if(dispose) {
			dispose();
		}
	});
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(80);
exports = module.exports = __webpack_require__(81)(false);
// imports


// module
exports.push([module.i, "html {\n  font-family: -apple-system-font, \"Helvetica Neue\", Helvetica, STHeiTi, sans-serif; }\n\n.buluo-DownloadPage {\n  text-align: center;\n  background: #fae100; }\n  .buluo-DownloadPage .logo {\n    margin-top: 100px;\n    margin-bottom: 130px;\n    width: 172px;\n    height: 166px; }\n  .buluo-DownloadPage .download-btn {\n    display: block;\n    width: 245px;\n    height: 50px;\n    line-height: 50px;\n    margin: 25px auto;\n    border-radius: 5px;\n    background: #333333;\n    text-decoration: none;\n    color: #fff; }\n    .buluo-DownloadPage .download-btn:before {\n      display: inline-block;\n      content: '';\n      margin-right: 19px;\n      vertical-align: sub; }\n    .buluo-DownloadPage .download-btn.iphone:before {\n      background: url(" + escape(__webpack_require__(82)) + ") no-repeat center center;\n      width: 21px;\n      height: 20px;\n      background-size: 21px 20px; }\n    .buluo-DownloadPage .download-btn.android:before {\n      background: url(" + escape(__webpack_require__(83)) + ") no-repeat center center;\n      width: 21px;\n      height: 23px;\n      background-size: 21px 23px; }\n  @media all and (max-height: 568px) {\n    .buluo-DownloadPage .logo {\n      margin-top: 70px;\n      margin-bottom: 100px; } }\n  @media all and (max-height: 480px) {\n    .buluo-DownloadPage .logo {\n      margin-top: 40px;\n      margin-bottom: 70px; } }\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAbRr8+fbf0YpZKwkE87BDFAHv6M3KwLakfnNQS0g3Lwzh2tWrn5yVkXgnIwbEYzFqKqGRAAABIklEQVQ4y42UaW/CMAyGk94tpaUXvQ/uDdjm///r1mhDxIJafr5FfRTZr92IRZK+ylrBISgAoOeYnQ0zV4Y5WMp0GObKAYVkqBIUechQC2VmN4YZqkr3V8FgAsjqFalshngM1a0/RjKf4u92uL/tWrowkx79SU2gzkFhRd2L2e/ggR1dDvCkNLApTVjEQa4PFEfNNNaUedbDOFGmJzQMizC3CR45wSh0IsIsBOJAqB9YpfpvsAoEEqsmGRXCobLCakmoFl4WD8gI2MtixmiwQLFGbk66pqetVgM0rvb/2QDcPbzQFdz0xshrT0Lnk4oAT+HusjdGBIsllAkSiZHtNkgjyk0DJOEXJq1k69dffwdnFG8Jqr177sL//GTkbpvp+fUXg7CdM3dHRx0AAAAASUVORK5CYII="

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAuCAMAAABpjHt/AAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMA8Zml7vvilnMOBfWw6d60qh4RA9fCkIyHYEH3uaBoWTo1KSUVCtDIxIF7UkvPa0oxG32v5TEAAAFFSURBVDjL5dRZj4IwFIbhg1JENtkR932f7fv/P27SqoHoaWMmczHJvBf0XDw0IUCpXTIZUavPYk26vqy3jJo6IiFtLmZy2SRbefUD0ufl4WYe2ADyY3LCiAxdIHBL+DuTXO3Qyjrr5dIG2olaJ9chHhILXmYHoOhf7sxZnYFoy9IawJG88Y0GlFnAid00AmC7MW6JoRxDj6EjsH0wtOJpydCCpweG5nYTmpy22U59pyZDdTjueWrqARBLKjts5fV5h4o6cqzIAptFHblEikLW1dOuWv4BFUbqtymMFL9Ng9fp4Ee7RnKq9LRsPlsXgL/W05UPwKWrLYIF6SktJvt3ajLQ58TrdMZTlzjrPEMx9Yitn0A2TdNU3bZPFeStor37vznhDE8Hf5lm4n7o5HKIyVB8Pb+IhpLOTTSNx5ECXmWFDy/qG7T/sEpziwicAAAAAElFTkSuQmCC"

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(85);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 85 */
/***/ (function(module, exports) {


/**
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

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(9);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _setPrototypeOf = __webpack_require__(11);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _invariant = __webpack_require__(87);

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


var count = 0;

function withStyles(styles) {
  return function (ComposedComponent) {
    return function (_Component) {
      _inherits(WithStyles, _Component);

      function WithStyles() {
        _classCallCheck(this, WithStyles);

        var _this = _possibleConstructorReturn(this, (WithStyles.__proto__ || (0, _getPrototypeOf2.default)(WithStyles)).call(this));

        _this.refCount = 0;
        ComposedComponent.prototype.renderCss = function render(css) {
          var style = void 0;
          if (_ExecutionEnvironment.canUseDOM) {
            style = this.styleId && document.getElementById(this.styleId);
            if (style) {
              if ('textContent' in style) {
                style.textContent = css;
              } else {
                style.styleSheet.cssText = css;
              }
            } else {
              this.styleId = 'dynamic-css-' + count++;
              style = document.createElement('style');
              style.setAttribute('id', this.styleId);
              style.setAttribute('type', 'text/css');
              if ('textContent' in style) {
                style.textContent = css;
              } else {
                style.styleSheet.cssText = css;
              }
              document.getElementsByTagName('head')[0].appendChild(style);
              this.refCount++;
            }
          } else {
            this.context.onInsertCss(css);
          }
        }.bind(_this);
        return _this;
      }

      _createClass(WithStyles, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          if (_ExecutionEnvironment.canUseDOM) {
            (0, _invariant2.default)(styles.use, 'The style-loader must be configured with reference-counted API.');
            styles.use();
          } else {
            this.context.onInsertCss(styles.toString());
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          styles.unuse();
          if (this.styleId) {
            this.refCount--;
            if (this.refCount < 1) {
              var style = document.getElementById(this.styleId);
              if (style) {
                style.parentNode.removeChild(style);
              }
            }
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ComposedComponent, this.props);
        }
      }]);

      return WithStyles;
    }(_react.Component);
  };
}

exports.default = withStyles;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat = process.env.NODE_ENV !== "production" ? function (format) {} : function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
};
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(31);

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty = __webpack_require__(9);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _setPrototypeOf = __webpack_require__(11);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(13);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(15);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _eventemitter = __webpack_require__(89);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _ExecutionEnvironment = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


var EE = void 0;
var viewport = { width: 1366, height: 768 }; // Default size for server-side rendering
var RESIZE_EVENT = 'resize';

function handleWindowResize() {
  if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
    viewport = { width: window.innerWidth, height: window.innerHeight };
    EE.emit(RESIZE_EVENT, viewport);
  }
}

function withViewport(ComposedComponent) {
  return function (_Component) {
    _inherits(WithViewport, _Component);

    function WithViewport() {
      _classCallCheck(this, WithViewport);

      var _this = _possibleConstructorReturn(this, (WithViewport.__proto__ || (0, _getPrototypeOf2.default)(WithViewport)).call(this));

      _this.state = {
        viewport: _ExecutionEnvironment.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : viewport
      };
      return _this;
    }

    _createClass(WithViewport, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!EE) {
          EE = new _eventemitter2.default();
          window.addEventListener('resize', handleWindowResize);
          window.addEventListener('orientationchange', handleWindowResize);
        }

        EE.on(RESIZE_EVENT, this.handleResize, this);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // EE.removeListener(RESIZE_EVENT, this.handleResize, this);
        if (!EE.listeners(RESIZE_EVENT, true)) {
          window.removeEventListener('resize', handleWindowResize);
          window.removeEventListener('orientationchange', handleWindowResize);
          EE = null;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, { viewport: this.state.viewport }));
      }
    }, {
      key: 'handleResize',
      value: function handleResize(value) {
        this.setState({ viewport: value }); // eslint-disable-line react/no-set-state
      }
    }]);

    return WithViewport;
  }(_react.Component);
}

exports.default = withViewport;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
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
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e():e()}(function(){function app_js_bridge(){function e(e){n=e,_.isJSONString(n)&&(n=JSON.parse(n)),s&&(s(n),s=null,n=null)}function t(){"object"==typeof window.SensorsData_APP_JS_Bridge&&window.SensorsData_APP_JS_Bridge.sensorsdata_call_app&&(n=SensorsData_APP_JS_Bridge.sensorsdata_call_app(),_.isJSONString(n)&&(n=JSON.parse(n)))}function r(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){var e=document.createElement("iframe");e.setAttribute("src","sensorsanalytics://getAppInfo"),document.documentElement.appendChild(e),e.parentNode.removeChild(e),e=null}}var n=null,s=null;window.sensorsdata_app_js_bridge_call_js=function(t){e(t)},sd.getAppStatus=function(e){return r(),t(),e?void(null===n?s=e:(e(n),n=null)):n}}try{var sd=window.sensorsDataAnalytic201505,has_declare;if(sd?(sd=window[sd],has_declare=!0):(sd={},has_declare=!1),"function"!=typeof sd&&"object"!=typeof sd||sd.has_load_sdk)return!1;sd._t=sd._t||1*new Date,sd.has_load_sdk=!0,"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,s,a,i,o=gap,c=t[e];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(c)){for(a=c.length,r=0;r<a;r+=1)i[r]=str(r,c)||"null";return s=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+o+"]":"["+i.join(",")+"]",gap=o,s}if(rep&&"object"==typeof rep)for(a=rep.length,r=0;r<a;r+=1)"string"==typeof rep[r]&&(n=rep[r],s=str(n,c),s&&i.push(quote(n)+(gap?": ":":")+s));else for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(s=str(n,c),s&&i.push(quote(n)+(gap?": ":":")+s));return s=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+o+"}":"{"+i.join(",")+"}",gap=o,s}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,n,s=e[t];if(s&&"object"==typeof s)for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n=walk(s,r),void 0!==n?s[r]=n:delete s[r]);return reviver.call(e,t,s)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();var _=sd._={};sd.para_default={name:"sa",max_referrer_string_length:200,max_string_length:500,cross_subdomain:!0,show_log:!0,is_debug:!1,debug_mode:!1,debug_mode_upload:!1,session_time:0,use_client_time:!1,source_channel:[],send_type:"image",vtrack_ignore:{},auto_init:!0,is_track_single_page:!1,is_single_page:!1,is_track_latest:{utm:!0,referrer:!0,referrer_host:!0,traffic_source_type:!0,search_keyword:!0,landing_page:!1},source_type:{},callback_timeout:200,datasend_timeout:3e3,queue_timeout:300,is_track_device_id:!1,use_app_track:!1,ignore_oom:!0},sd.initPara=function(e){sd.para=e||sd.para||{};var t;for(t in sd.para_default)void 0===sd.para[t]&&(sd.para[t]=sd.para_default[t]);"string"==typeof sd.para.server_url&&"://"===sd.para.server_url.slice(0,3)&&(sd.para.server_url=location.protocol+sd.para.server_url),"string"==typeof sd.para.web_url&&"://"===sd.para.web_url.slice(0,3)&&(sd.para.web_url=location.protocol+sd.para.web_url),"image"!==sd.para.send_type&&"ajax"!==sd.para.send_type&&"beacon"!==sd.para.send_type&&(sd.para.send_type="image");var r=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],n=["www.baidu.","m.baidu.","m.sm.cn","so.com","sogou.com","youdao.com","google.","yahoo.com/","bing.com/","ask.com/"],s=["weibo.com","renren.com","kaixin001.com","douban.com","qzone.qq.com","zhihu.com","tieba.baidu.com","weixin.qq.com"],a={baidu:["wd","word","kw","keyword"],google:"q",bing:"q",yahoo:"p",sogou:["query","keyword"],so:"q",sm:"q"};if("object"==typeof sd.para.source_type&&(sd.para.source_type.utm=_.isArray(sd.para.source_type.utm)?sd.para.source_type.utm.concat(r):r,sd.para.source_type.search=_.isArray(sd.para.source_type.search)?sd.para.source_type.search.concat(n):n,sd.para.source_type.social=_.isArray(sd.para.source_type.social)?sd.para.source_type.social.concat(s):s,sd.para.source_type.keyword=_.isObject(sd.para.source_type.keyword)?_.extend(a,sd.para.source_type.keyword):a),_.isObject(sd.para.heatmap)&&(sd.para.heatmap.clickmap=sd.para.heatmap.clickmap||"default",sd.para.heatmap.scroll_notice_map=sd.para.heatmap.scroll_notice_map||"default",sd.para.heatmap.scroll_delay_time=sd.para.heatmap.scroll_delay_time||4e3,sd.para.heatmap.renderRefreshTime=sd.para.heatmap.renderRefreshTime||1e3,sd.para.heatmap.loadTimeout=sd.para.heatmap.loadTimeout||1e3),"object"==typeof sd.para.server_url&&sd.para.server_url.length)for(t=0;t<sd.para.server_url.length;t++)/sa\.gif[^\/]*$/.test(sd.para.server_url[t])||(sd.para.server_url[t]=sd.para.server_url[t].replace(/\/sa$/,"/sa.gif").replace(/(\/sa)(\?[^\/]+)$/,"/sa.gif$2"));else/sa\.gif[^\/]*$/.test(sd.para.server_url)||(sd.para.server_url=sd.para.server_url.replace(/\/sa$/,"/sa.gif").replace(/(\/sa)(\?[^\/]+)$/,"/sa.gif$2"));"string"==typeof sd.para.server_url&&(sd.para.debug_mode_url=sd.para.debug_mode_url||sd.para.server_url.replace("sa.gif","debug")),sd.para.noCache===!0?sd.para.noCache="?"+(new Date).getTime():sd.para.noCache="",sd.para.callback_timeout>sd.para.datasend_timeout&&(sd.para.datasend_timeout=sd.para.callback_timeout),sd.para.callback_timeout>sd.para.queue_timeout&&(sd.para.queue_timeout=sd.para.callback_timeout),sd.para.queue_timeout>sd.para.datasend_timeout&&(sd.para.datasend_timeout=sd.para.queue_timeout),_.isObject(sd.para.is_track_latest)?sd.para.is_track_latest=_.extend(sd.para_default.is_track_latest,sd.para.is_track_latest):sd.para.is_track_latest=sd.para_default.is_track_latest};var ArrayProto=Array.prototype,FuncProto=Function.prototype,ObjProto=Object.prototype,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty,LIB_VERSION="1.13.14";sd.lib_version=LIB_VERSION;var error_msg=[],is_first_visitor=!1,just_test_distinctid=0,just_test_distinctid_2=0,just_test_distinctid_detail=0,just_test_distinctid_detail2=0,source_channel_standard="utm_source utm_medium utm_campaign utm_content utm_term",logger="object"==typeof logger?logger:{};logger.info=function(){if((_.sessionStorage.isSupport()&&"true"===sessionStorage.getItem("sensorsdata_jssdk_debug")||sd.para.show_log)&&(sd.para.show_log!==!0&&"string"!==sd.para.show_log&&sd.para.show_log!==!1||(arguments[0]=_.formatJsonString(arguments[0])),"object"==typeof console&&console.log))try{return console.log.apply(console,arguments)}catch(e){console.log(arguments[0])}},function(){var e=(FuncProto.bind,ArrayProto.forEach),t=(ArrayProto.indexOf,Array.isArray),r={},n=_.each=function(t,n,s){if(null==t)return!1;if(e&&t.forEach===e)t.forEach(n,s);else if(t.length===+t.length){for(var a=0,i=t.length;a<i;a++)if(a in t&&n.call(s,t[a],a,t)===r)return!1}else for(var o in t)if(hasOwnProperty.call(t,o)&&n.call(s,t[o],o,t)===r)return!1};_.logger=logger,_.extend=function(e){return n(slice.call(arguments,1),function(t){for(var r in t)void 0!==t[r]&&(e[r]=t[r])}),e},_.extend2Lev=function(e){return n(slice.call(arguments,1),function(t){for(var r in t)void 0!==t[r]&&(_.isObject(t[r])&&_.isObject(e[r])?_.extend(e[r],t[r]):e[r]=t[r])}),e},_.coverExtend=function(e){return n(slice.call(arguments,1),function(t){for(var r in t)void 0!==t[r]&&void 0===e[r]&&(e[r]=t[r])}),e},_.isArray=t||function(e){return"[object Array]"===toString.call(e)},_.isFunction=function(e){if(!e)return!1;try{return/^\s*\bfunction\b/.test(e)}catch(t){return!1}},_.isArguments=function(e){return!(!e||!hasOwnProperty.call(e,"callee"))},_.toArray=function(e){return e?e.toArray?e.toArray():_.isArray(e)?slice.call(e):_.isArguments(e)?slice.call(e):_.values(e):[]},_.values=function(e){var t=[];return null==e?t:(n(e,function(e){t[t.length]=e}),t)},_.indexOf=function(e,t){var r=e.indexOf;if(r)return r.call(e,t);for(var n=0;n<e.length;n++)if(t===e[n])return n;return-1}}(),_.filter=function(e,t,r){var n=Object.prototype.hasOwnProperty;if(e.filter)return e.filter(t);for(var s=[],a=0;a<e.length;a++)if(n.call(e,a)){var i=e[a];t.call(r,i,a,e)&&s.push(i)}return s},_.inherit=function(e,t){return e.prototype=new t,e.prototype.constructor=e,e.superclass=t.prototype,e},_.trim=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},_.isObject=function(e){return null!=e&&"[object Object]"==toString.call(e)},_.isEmptyObject=function(e){if(_.isObject(e)){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}return!1},_.isUndefined=function(e){return void 0===e},_.isString=function(e){return"[object String]"==toString.call(e)},_.isDate=function(e){return"[object Date]"==toString.call(e)},_.isBoolean=function(e){return"[object Boolean]"==toString.call(e)},_.isNumber=function(e){return"[object Number]"==toString.call(e)&&/[\d\.]+/.test(String(e))},_.isElement=function(e){return!(!e||1!==e.nodeType)},_.isJSONString=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},_.decodeURIComponent=function(e){var t=e;try{t=decodeURIComponent(e)}catch(r){t=e}return t},_.encodeDates=function(e){return _.each(e,function(t,r){_.isDate(t)?e[r]=_.formatDate(t):_.isObject(t)&&(e[r]=_.encodeDates(t))}),e},_.hashCode=function(e){if("string"!=typeof e)return 0;var t=0,r=null;if(0==e.length)return t;for(var n=0;n<e.length;n++)r=e.charCodeAt(n),t=(t<<5)-t+r,t&=t;return t},_.formatDate=function(e){function t(e){return e<10?"0"+e:e}return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+t(e.getMilliseconds())},_.searchObjDate=function(e){_.isObject(e)&&_.each(e,function(t,r){_.isObject(t)?_.searchObjDate(e[r]):_.isDate(t)&&(e[r]=_.formatDate(t))})},_.searchZZAppStyle=function(e){"undefined"!=typeof e.properties.$project&&(e.project=e.properties.$project,delete e.properties.$project),"undefined"!=typeof e.properties.$token&&(e.token=e.properties.$token,delete e.properties.$token)},_.formatJsonString=function(e){try{return JSON.stringify(e,null,"  ")}catch(t){return JSON.stringify(e)}},_.formatString=function(e){return e.length>sd.para.max_string_length?(logger.info("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--"+e),e.slice(0,sd.para.max_string_length)):e},_.searchObjString=function(e){_.isObject(e)&&_.each(e,function(t,r){_.isObject(t)?_.searchObjString(e[r]):_.isString(t)&&(e[r]=_.formatString(t))})},_.searchConfigData=function(e){if("object"==typeof e&&e.$option){var t=e.$option;return delete e.$option,t}return{}},_.unique=function(e){for(var t,r=[],n={},s=0;s<e.length;s++)t=e[s],t in n||(n[t]=!0,r.push(t));return r},_.strip_sa_properties=function(e){return _.isObject(e)?(_.each(e,function(t,r){if(_.isArray(t)){var n=[];_.each(t,function(e){_.isString(e)?n.push(e):logger.info("\u60a8\u7684\u6570\u636e-",r,t,"\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")}),0!==n.length?e[r]=n:(delete e[r],logger.info("\u5df2\u7ecf\u5220\u9664\u7a7a\u7684\u6570\u7ec4"))}_.isString(t)||_.isNumber(t)||_.isDate(t)||_.isBoolean(t)||_.isArray(t)||"$option"===r||(logger.info("\u60a8\u7684\u6570\u636e-",r,t,"-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),delete e[r])}),e):e},_.strip_empty_properties=function(e){var t={};return _.each(e,function(e,r){null!=e&&(t[r]=e)}),t},_.utf8Encode=function(e){e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n");var t,r,n,s="",a=0;for(t=r=0,a=e.length,n=0;n<a;n++){var i=e.charCodeAt(n),o=null;i<128?r++:o=i>127&&i<2048?String.fromCharCode(i>>6|192,63&i|128):String.fromCharCode(i>>12|224,i>>6&63|128,63&i|128),null!==o&&(r>t&&(s+=e.substring(t,r)),s+=o,t=r=n+1)}return r>t&&(s+=e.substring(t,e.length)),s},_.base64Encode=function(e){var t,r,n,s,a,i,o,c,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,d=0,p="",f=[];if(!e)return e;e=_.utf8Encode(e);do t=e.charCodeAt(l++),r=e.charCodeAt(l++),n=e.charCodeAt(l++),c=t<<16|r<<8|n,s=c>>18&63,a=c>>12&63,i=c>>6&63,o=63&c,f[d++]=u.charAt(s)+u.charAt(a)+u.charAt(i)+u.charAt(o);while(l<e.length);switch(p=f.join(""),e.length%3){case 1:p=p.slice(0,-2)+"==";break;case 2:p=p.slice(0,-1)+"="}return p},_.UUID=function(){var e=function(){for(var e=1*new Date,t=0;e==1*new Date;)t++;return e.toString(16)+t.toString(16)},t=function(){return Math.random().toString(16).replace(".","")},r=function(e){function t(e,t){var r,n=0;for(r=0;r<t.length;r++)n|=a[r]<<8*r;return e^n}var r,n,s=navigator.userAgent,a=[],i=0;for(r=0;r<s.length;r++)n=s.charCodeAt(r),a.unshift(255&n),a.length>=4&&(i=t(i,a),a=[]);return a.length>0&&(i=t(i,a)),i.toString(16)};return function(){var n=String(screen.height*screen.width);n=n&&/\d{5,}/.test(n)?n.toString(16):String(31242*Math.random()).replace(".","").slice(0,8);var s=e()+"-"+t()+"-"+r()+"-"+n+"-"+e();return s?(just_test_distinctid_2=1,s):(just_test_distinctid_2=2,(String(Math.random())+String(Math.random())+String(Math.random())).slice(2,15))}}(),_.getQueryParam=function(e,t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),e=_.decodeURIComponent(e);var r="[\\?&]"+t+"=([^&#]*)",n=new RegExp(r),s=n.exec(e);return null===s||s&&"string"!=typeof s[1]&&s[1].length?"":_.decodeURIComponent(s[1]).replace(/\+/g," ")},_.urlParse=function(e){var t=function(e){this._fields={Username:4,Password:5,Port:7,Protocol:2,Host:6,Path:8,URL:0,QueryString:9,Fragment:10},this._values={},this._regex=null,this._regex=/^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/,"undefined"!=typeof e&&this._parse(e)};return t.prototype.setUrl=function(e){this._parse(e)},t.prototype._initValues=function(){for(var e in this._fields)this._values[e]=""},t.prototype.addQueryString=function(e){if("object"!=typeof e)return!1;var t=this._values.QueryString||"";for(var r in e)t=new RegExp(r+"[^&]+").test(t)?t.replace(new RegExp(r+"[^&]+"),r+"="+e[r]):"&"===t.slice(-1)?t+r+"="+e[r]:""===t?r+"="+e[r]:t+"&"+r+"="+e[r];this._values.QueryString=t},t.prototype.getUrl=function(){var e="";return e+=this._values.Origin,e+=this._values.Port?":"+this._values.Port:"",e+=this._values.Path,e+=this._values.QueryString?"?"+this._values.QueryString:"",e+=this._values.Fragment?"#"+this._values.Fragment:""},t.prototype.getUrl=function(){var e="";return e+=this._values.Origin,e+=this._values.Port?":"+this._values.Port:"",e+=this._values.Path,e+=this._values.QueryString?"?"+this._values.QueryString:""},t.prototype._parse=function(e){this._initValues();var t=this._regex.exec(e);if(!t)throw"DPURLParser::_parse -> Invalid URL";for(var r in this._fields)"undefined"!=typeof t[this._fields[r]]&&(this._values[r]=t[this._fields[r]]);this._values.Hostname=this._values.Host.replace(/:\d+$/,""),this._values.Origin=this._values.Protocol+"://"+this._values.Hostname},new t(e)},_.addEvent=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation,t._getPath=e._getPath),t}function t(t,r,n){var s=function(s){if(s=s||e(window.event)){s.target=s.srcElement;var a,i,o=!0;return"function"==typeof n&&(a=n(s)),i=r.call(t,s),!1!==a&&!1!==i||(o=!1),o}};return s}e._getPath=function(){var e=this,t=function(){try{var t=e.target,r=[t];if(null===t||null===t.parentElement)return[];for(;null!==t.parentElement;)t=t.parentElement,r.unshift(t);return r}catch(n){return[]}};return this.path||this.composedPath&&this.composedPath()||t()},e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0};var r=function(r,n,s){var a=!(!_.isObject(sd.para.heatmap)||!sd.para.heatmap.useCapture);if(r&&r.addEventListener)r.addEventListener(n,function(t){t._getPath=e._getPath,s.call(this,t)},a);else{var i="on"+n,o=r[i];r[i]=t(r,s,o)}};r.apply(null,arguments)},_.addHashEvent=function(e){var t="pushState"in window.history?"popstate":"hashchange";_.addEvent(window,t,e)},_.addSinglePageEvent=function(e){var t=location.href,r=window.history.pushState,n=window.history.replaceState;window.history.pushState=function(){r.apply(window.history,arguments),e(t),t=location.href},window.history.replaceState=function(){n.apply(window.history,arguments),e(t),t=location.href};var s="pushState"in window.history?"popstate":"hashchange";_.addEvent(window,s,function(){e(t),t=location.href})},_.cookie={get:function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var s=r[n];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(t))return _.decodeURIComponent(s.substring(t.length,s.length))}return null},set:function(e,t,r,n,s){n="undefined"==typeof n?sd.para.cross_subdomain:n;var a="",i="",o="";if(r=null==r?73e3:r,n){var c=_.getCurrentDomain(location.href);"url\u89e3\u6790\u5931\u8d25"===c&&(c=""),a=c?"; domain="+c:""}if(0!==r){var u=new Date;"s"===String(r).slice(-1)?u.setTime(u.getTime()+1e3*Number(String(r).slice(0,-1))):u.setTime(u.getTime()+24*r*60*60*1e3),i="; expires="+u.toGMTString()}s&&(o="; secure"),document.cookie=e+"="+encodeURIComponent(t)+i+"; path=/"+a+o},remove:function(e,t){t="undefined"==typeof t?sd.para.cross_subdomain:t,_.cookie.set(e,"",-1,t)},getCookieName:function(e){var t="";return sd.para.cross_subdomain===!1?(t=_.url("sub",location.href),t="string"==typeof t&&""!==t?"sajssdk_2015_"+e+"_"+t:"sajssdk_2015_root_"+e):t="sajssdk_2015_cross_"+e,t},getNewUser:function(){var e="new_user";return null!==this.get("sensorsdata_is_new_user")||null!==this.get(this.getCookieName(e))}},_.getEleInfo=function(e){if(!e.target)return!1;var t=e.target,r=t.tagName.toLowerCase(),n={};n.$element_type=r,n.$element_name=t.getAttribute("name"),n.$element_id=t.getAttribute("id"),n.$element_class_name="string"==typeof t.className?t.className:null,n.$element_target_url=t.getAttribute("href");var s="";return t.textContent?s=_.trim(t.textContent):t.innerText&&(s=_.trim(t.innerText)),s&&(s=s.replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)),n.$element_content=s||"","input"===r&&("button"===t.type||"submit"===t.type?n.$element_content=t.value||"":sd.para.heatmap&&"function"==typeof sd.para.heatmap.collect_input&&sd.para.heatmap.collect_input(t)&&(n.$element_content=t.value||"")),n=_.strip_empty_properties(n),n.$url=location.href,n.$url_path=location.pathname,n.$title=document.title,n.$viewport_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,n},_.localStorage={get:function(e){return window.localStorage.getItem(e)},parse:function(e){var t;try{t=JSON.parse(_.localStorage.get(e))||null}catch(r){}return t},set:function(e,t){window.localStorage.setItem(e,t)},remove:function(e){window.localStorage.removeItem(e)},isSupport:function(){var e=!0;try{var t="__sensorsdatasupport__",r="testIsSupportStorage";_.localStorage.set(t,r),_.localStorage.get(t)!==r&&(e=!1),_.localStorage.remove(t)}catch(n){e=!1}return e}},_.sessionStorage={isSupport:function(){var e=!0,t="__sensorsdatasupport__",r="testIsSupportStorage";try{sessionStorage&&sessionStorage.setItem?(sessionStorage.setItem(t,r),sessionStorage.removeItem(t,r),e=!0):e=!1}catch(n){e=!1}return e}},_.isSupportCors=function(){return"undefined"!=typeof window.XMLHttpRequest&&("withCredentials"in new XMLHttpRequest||"undefined"!=typeof XDomainRequest)},_.xhr=function(e){if(e)return"undefined"!=typeof window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?new XMLHttpRequest:"undefined"!=typeof XDomainRequest?new XDomainRequest:null;if("undefined"!=typeof window.XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}},_.ajax=function(e){function t(e){if(!e)return"";try{return JSON.parse(e)}catch(t){return{}}}e.timeout=e.timeout||2e4,e.credentials="undefined"==typeof e.credentials||e.credentials;var r=_.xhr(e.cors);if(!r)return!1;e.type||(e.type=e.data?"POST":"GET"),e=_.extend({success:function(){},error:function(){}},e);try{"object"==typeof r&&"timeout"in r?r.timeout=e.timeout:setTimeout(function(){r.abort()},e.timeout+500)}catch(n){try{setTimeout(function(){r.abort()},e.timeout+500)}catch(s){}}r.onreadystatechange=function(){try{4==r.readyState&&(r.status>=200&&r.status<300||304==r.status?e.success(t(r.responseText)):e.error(t(r.responseText),r.status),r.onreadystatechange=null,r.onload=null)}catch(n){r.onreadystatechange=null,r.onload=null}},r.open(e.type,e.url,!0);try{if(e.credentials&&(r.withCredentials=!0),_.isObject(e.header))for(var a in e.header)r.setRequestHeader(a,e.header[a]);e.data&&(e.cors||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),"application/json"===e.contentType?r.setRequestHeader("Content-type","application/json; charset=UTF-8"):r.setRequestHeader("Content-type","application/x-www-form-urlencoded"))}catch(n){}r.send(e.data||null)},_.loadScript=function(e){e=_.extend({success:function(){},error:function(){},appendCall:function(e){document.getElementsByTagName("head")[0].appendChild(e)}},e);var t=null;"css"===e.type&&(t=document.createElement("link"),t.rel="stylesheet",t.href=e.url),"js"===e.type&&(t=document.createElement("script"),t.async="async",t.setAttribute("charset","UTF-8"),t.src=e.url,t.type="text/javascript"),t.onload=t.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e.success(),t.onload=t.onreadystatechange=null)},t.onerror=function(){e.error(),t.onerror=null},e.appendCall(t)},_.url=function(){function e(e){return _.decodeURIComponent(e.replace(/\+/g," "))}function t(e,t){var r=e.charAt(0),n=t.split(r);return r===e?n:(e=parseInt(e.substring(1),10),n[e<0?n.length+e:e-1])}function r(t,r){for(var n=t.charAt(0),s=r.split("&"),a=[],i={},o=[],c=t.substring(1),u=0,l=s.length;u<l;u++)if(a=s[u].match(/(.*?)=(.*)/),a||(a=[s[u],s[u],""]),""!==a[1].replace(/\s/g,"")){if(a[2]=e(a[2]||""),c===a[1])return a[2];o=a[1].match(/(.*)\[([0-9]+)\]/),o?(i[o[1]]=i[o[1]]||[],i[o[1]][o[2]]=a[2]):i[a[1]]=a[2]}return n===t?i:i[c]}return function(e,n){var s,a={};if(n=n||window.location.toString(),!e)return n;if(e=e.toString(),s=n.match(/^mailto:([^\/].+)/))a.protocol="mailto",a.email=s[1];else{if((s=n.match(/(.*?)\/#\!(.*)/))&&(n=s[1]+s[2]),(s=n.match(/(.*?)#(.*)/))&&(a.hash=s[2],n=s[1]),a.hash&&e.match(/^#/))return r(e,a.hash);if((s=n.match(/(.*?)\?(.*)/))&&(a.query=s[2],n=s[1]),a.query&&e.match(/^\?/))return r(e,a.query);if((s=n.match(/(.*?)\:?\/\/(.*)/))&&(a.protocol=s[1].toLowerCase(),n=s[2]),(s=n.match(/(.*?)(\/.*)/))&&(a.path=s[2],n=s[1]),a.path=(a.path||"").replace(/^([^\/])/,"/$1").replace(/\/$/,""),e.match(/^[\-0-9]+$/)&&(e=e.replace(/^([^\/])/,"/$1")),e.match(/^\//))return t(e,a.path.substring(1));if(s=t("/-1",a.path.substring(1)),s&&(s=s.match(/(.*?)\.(.*)/))&&(a.file=s[0],a.filename=s[1],a.fileext=s[2]),(s=n.match(/(.*)\:([0-9]+)$/))&&(a.port=s[2],n=s[1]),(s=n.match(/(.*?)@(.*)/))&&(a.auth=s[1],n=s[2]),a.auth&&(s=a.auth.match(/(.*)\:(.*)/),a.user=s?s[1]:a.auth,a.pass=s?s[2]:void 0),a.hostname=n.toLowerCase(),"."===e.charAt(0))return t(e,a.hostname);a.sub=a.hostname.split(".")[0];var i=a.hostname.split(".");if(_.isArray(i)&&i.length>=2&&!/^(\d+\.)+\d+$/.test(a.hostname))for(var o="."+i.splice(i.length-1,1);i.length>0;)if(o="."+i.splice(i.length-1,1)+o,document.cookie="sensorsdata_domain_test=true; path=/; domain="+o,document.cookie.indexOf("sensorsdata_domain_test=true")!==-1){a.domain=o;var c=new Date;c.setTime(c.getTime()-1e3),document.cookie="sensorsdata_domain_test=true; expires="+c.toGMTString()+"; path=/; domain="+o,i=[]}a.port=a.port||("https"===a.protocol?"443":"80"),a.protocol=a.protocol||("443"===a.port?"https":"http")}return e in a?a[e]:"{}"===e?a:""}}(),_.getCurrentDomain=function(e){var t=sd.para.current_domain;switch(typeof t){case"function":var r=t();return""===r||""===_.trim(r)?"url\u89e3\u6790\u5931\u8d25":r.indexOf(".")!==-1?r:"url\u89e3\u6790\u5931\u8d25";case"string":return""===t||""===_.trim(t)?"url\u89e3\u6790\u5931\u8d25":t.indexOf(".")!==-1?t:"url\u89e3\u6790\u5931\u8d25";default:return""===e?"url\u89e3\u6790\u5931\u8d25":""===_.url("domain",e)?"url\u89e3\u6790\u5931\u8d25":_.url("domain",e)}},_.getReferrerDomain=function(e){var t=sd.para.referrer_domain;switch(typeof t){case"function":var r=t();return r?r.indexOf(".")!==-1?r:"referrer\u89e3\u6790\u5931\u8d25":_.url("domain",e);case"string":return""===t||""===_.trim(t)?"referrer\u89e3\u6790\u5931\u8d25":t.indexOf(".")!==-1?t:"referrer\u89e3\u6790\u5931\u8d25";default:if(""===e)return"";if(""===_.url("domain",location.href))return"referrer\u89e3\u6790\u5931\u8d25";var n=_.url("domain",location.href);return _.url("hostname",e).slice(-1*n.length)}},_.ry=function(e){return new _.ry.init(e)},_.ry.init=function(e){this.ele=e},_.ry.init.prototype={addClass:function(e){var t=" "+this.ele.className+" ";return t.indexOf(" "+e+" ")===-1&&(this.ele.className=this.ele.className+(""===this.ele.className?"":" ")+e),this},removeClass:function(e){var t=" "+this.ele.className+" ";return t.indexOf(" "+e+" ")!==-1&&(this.ele.className=t.replace(" "+e+" "," ").slice(1,-1)),this},hasClass:function(e){var t=" "+this.ele.className+" ";return t.indexOf(" "+e+" ")!==-1},attr:function(e,t){return"string"==typeof e&&_.isUndefined(t)?this.ele.getAttribute(e):("string"==typeof e&&(t=String(t),this.ele.setAttribute(e,t)),this)},offset:function(){var e=this.ele.getBoundingClientRect();if(e.width||e.height){var t=this.ele.ownerDocument,r=t.documentElement;return{top:e.top+window.pageYOffset-r.clientTop,left:e.left+window.pageXOffset-r.clientLeft}}return{top:0,left:0}},getSize:function(){if(!window.getComputedStyle)return{width:this.ele.offsetWidth,height:this.ele.offsetHeight};try{var e=this.ele.getBoundingClientRect();return{width:e.width,height:e.height}}catch(t){return{width:0,height:0}}},getStyle:function(e){return this.ele.currentStyle?this.ele.currentStyle[e]:this.ele.ownerDocument.defaultView.getComputedStyle(this.ele,null).getPropertyValue(e)},wrap:function(e){var t=document.createElement(e);return this.ele.parentNode.insertBefore(t,this.ele),t.appendChild(this.ele),_.ry(t)},getCssStyle:function(e){var t=this.ele.style.getPropertyValue(e);if(t)return t;var r=null;if("function"==typeof window.getMatchedCSSRules&&(r=getMatchedCSSRules(this.ele)),!r||!_.isArray(r))return null;for(var n=r.length-1;n>=0;n--){var s=r[n];if(t=s.style.getPropertyValue(e))return t}},sibling:function(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e},next:function(){return this.sibling(this.ele,"nextSibling")},prev:function(e){return this.sibling(this.ele,"previousSibling")},siblings:function(e){return this.siblings((this.ele.parentNode||{}).firstChild,this.ele)},children:function(e){return this.siblings(this.ele.firstChild)},parent:function(){var e=this.ele.parentNode;return e=e&&11!==e.nodeType?e:null,_.ry(e)}},_.jssdkDebug=function(e,t){if(sd.para.is_debug===!0)if(_.isString(e))sd.registerPage({_jssdk_debug_info:e});else{var r=store.getCookieName(),n=document.cookie.match(new RegExp(r+"[^;]+"));r=n&&n[0]?n[0]:"",e._jssdk_debug_info="("+r+")"+navigator.userAgent}},_.strToUnicode=function(e){if("string"!=typeof e)return logger.info("\u8f6c\u6362unicode\u9519\u8bef",e),e;for(var t="",r=0;r<e.length;r++)t+="\\"+e.charCodeAt(r).toString(16);return t},_.getReferrer=function(e){var e=e||document.referrer;return"string"!=typeof e?"\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_"+String(e):(0===e.indexOf("https://www.baidu.com/")&&(e=e.split("?")[0]),e=e.slice(0,sd.para.max_referrer_string_length),"string"==typeof e?e:"")},_.getKeywordFromReferrer=function(){var e=sd.para.source_type.keyword;if(document&&"string"==typeof document.referrer){if(0===document.referrer.indexOf("http")){var t=_.getReferrerDomain(document.referrer),r=_.url("?",document.referrer),n=null;for(var s in e)if(t.split&&t.split(".")[0]===s&&"object"==typeof r)if(n=e[s],_.isArray(n)){for(var s=0;s<n.length;s++)if(r[n[s]])return r[n[s]]}else if(r[n])return r[n];return"\u672a\u53d6\u5230\u503c"}return""===document.referrer?"\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00":"\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"}return"\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_"+String(document.referrer)},_.getSourceFromReferrer=function(){function e(e,t){for(var r=0;r<e.length;r++)if(t.split("?")[0].indexOf(e[r])!==-1)return!0}var t="("+sd.para.source_type.utm.join("|")+")\\=[^&]+",r=sd.para.source_type.search,n=sd.para.source_type.social,s=document.referrer||"",a=_.info.pageProp.url;if(a){var i=a.match(new RegExp(t));return i&&i[0]?"\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf":e(r,s)?"\u81ea\u7136\u641c\u7d22\u6d41\u91cf":e(n,s)?"\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf":""===s?"\u76f4\u63a5\u6d41\u91cf":"\u5f15\u8350\u6d41\u91cf"}return"\u83b7\u53d6url\u5f02\u5e38"},_.info={initPage:function(){var e=_.getReferrer(),t=e?_.url("hostname",e):e,r=_.getReferrerDomain(e),n=location.href,s=n?_.url("hostname",n):n,a=_.getCurrentDomain(n);e&&!r&&_.jssdkDebug("referrer_domain\u5f02\u5e38_"+e+"_"+r),a||_.jssdkDebug("url_domain\u5f02\u5e38_"+n+"_"+a),this.pageProp={referrer:e,referrer_host:t,referrer_domain:r,url:n,url_host:s,url_domain:a}},pageProp:{},campaignParams:function(){var e=source_channel_standard.split(" "),t="",r={};return _.isArray(sd.para.source_channel)&&sd.para.source_channel.length>0&&(e=e.concat(sd.para.source_channel),e=_.unique(e)),_.each(e,function(e){t=_.getQueryParam(location.href,e),t.length&&(r[e]=t)}),r},campaignParamsStandard:function(e,t){e=e||"",t=t||"";var r=_.info.campaignParams(),n={},s={};for(var a in r)(" "+source_channel_standard+" ").indexOf(" "+a+" ")!==-1?n[e+a]=r[a]:s[t+a]=r[a];return{$utms:n,otherUtms:s}},properties:function(){return{$screen_height:Number(screen.height)||0,$screen_width:Number(screen.width)||0,$lib:"js",$lib_version:String(LIB_VERSION)}},currentProps:{},register:function(e){_.extend(_.info.currentProps,e)}},_.autoExeQueue=function(){var e={items:[],enqueue:function(e){this.items.push(e),this.start()},dequeue:function(){return this.items.shift()},getCurrentItem:function(){return this.items[0]},isRun:!1,start:function(){this.items.length>0&&!this.isRun&&(this.isRun=!0,this.getCurrentItem().start())},close:function(){this.dequeue(),this.isRun=!1,this.start()}};return e};var dataSend={};dataSend.getSendUrl=function(e,t){var r=_.base64Encode(t),n="crc="+_.hashCode(r);return e.indexOf("?")!==-1?e+"&data="+encodeURIComponent(r)+"&ext="+encodeURIComponent(n):e+"?data="+encodeURIComponent(r)+"&ext="+encodeURIComponent(n)},dataSend.getSendData=function(e){var t=_.base64Encode(e),r="crc="+_.hashCode(t);return"data="+encodeURIComponent(t)+"&ext="+encodeURIComponent(r)},dataSend.getInstance=function(e){var t=this.getSendType(e),r=new this[t](e),n=r.start;return r.start=function(){var e=this;n.apply(this,arguments),setTimeout(function(){e.isEnd(!0)},sd.para.callback_timeout)},r.end=function(){this.callback&&this.callback();var e=this;setTimeout(function(){e.lastClear&&e.lastClear()},sd.para.datasend_timeout-sd.para.callback_timeout)},r.isEnd=function(e){if(!this.received){this.received=!0,
this.end();var t=this;e?sd.para.queue_timeout-sd.para.callback_timeout<=0?t.close():setTimeout(function(){t.close()},sd.para.queue_timeout-sd.para.callback_timeout):t.close()}},r},dataSend.getSendType=function(e){var t=["image","ajax","beacon"],r=t[0];return r=e.config&&_.indexOf(t,e.config.send_type)>-1?e.config.send_type:sd.para.send_type,"beacon"===r&&"function"!=typeof navigator.sendBeacon&&(r="image"),"ajax"===r&&_.isSupportCors()===!1&&(r="image"),r},dataSend.image=function(e){this.callback=e.callback,this.img=document.createElement("img"),this.img.width=1,this.img.height=1,this.data=e.data,this.server_url=dataSend.getSendUrl(e.server_url,e.data)},dataSend.image.prototype.start=function(){var e=this;sd.para.ignore_oom&&(this.img.onload=function(){this.onload=null,this.onerror=null,this.onabort=null,e.isEnd()},this.img.onerror=function(){this.onload=null,this.onerror=null,this.onabort=null,e.isEnd()},this.img.onabort=function(){this.onload=null,this.onerror=null,this.onabort=null,e.isEnd()}),this.img.src=this.server_url},dataSend.image.prototype.lastClear=function(){this.img.src=""},dataSend.ajax=function(e){this.callback=e.callback,this.server_url=e.server_url,this.data=dataSend.getSendData(e.data)},dataSend.ajax.prototype.start=function(){var e=this;_.ajax({url:this.server_url,type:"POST",data:this.data,credentials:!1,timeout:sd.para.datasend_timeout,cors:!0,success:function(){e.isEnd()},error:function(){e.isEnd()}})},dataSend.beacon=function(e){this.callback=e.callback,this.server_url=e.server_url,this.data=dataSend.getSendData(e.data)},dataSend.beacon.prototype.start=function(){var e=this;"object"==typeof navigator&&"function"==typeof navigator.sendBeacon&&navigator.sendBeacon(this.server_url,this.data),setTimeout(function(){e.isEnd()},40)},sd.debug={apph5:function(e){var t="app_h5\u6253\u901a\u5931\u8d25-",r={1:t+"use_app_track\u4e3afalse",2:t+"Android\u6216\u8005iOS\uff0c\u6ca1\u6709\u66b4\u9732\u76f8\u5e94\u65b9\u6cd5",3.1:t+"Android\u6821\u9a8cserver_url\u5931\u8d25",3.2:t+"iOS\u6821\u9a8cserver_url\u5931\u8d25"},n=e.output,s=e.step,a=e.data;"all"!==n&&"console"!==n||logger.info(r[s]),("all"===n||"code"===n)&&_.isObject(sd.para.is_debug)&&sd.para.is_debug.apph5&&(a.type&&"profile"===a.type.slice(0,7)||(a.properties._jssdk_debug_info="apph5-"+String(s)))}};var sendState={};sd.sendState=sendState,sendState.queue=_.autoExeQueue(),sendState.requestData=null,sendState.getSendCall=function(e,t,r){if(sd.is_heatmap_render_mode)return!1;e._track_id=Number(String(Math.random()).slice(2,5)+String(Math.random()).slice(2,4)+String((new Date).getTime()).slice(-4)),sd.para.use_client_time&&(e._flush_time=(new Date).getTime());var n=e;if(e=JSON.stringify(e),this.requestData={data:n,config:t,callback:r},sd.para.use_app_track===!0||"only"===sd.para.use_app_track)if("object"==typeof SensorsData_APP_JS_Bridge&&(SensorsData_APP_JS_Bridge.sensorsdata_verify||SensorsData_APP_JS_Bridge.sensorsdata_track))SensorsData_APP_JS_Bridge.sensorsdata_verify?SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify(_.extend({server_url:sd.para.server_url},n)))?"function"==typeof r&&r():(sd.debug.apph5({data:n,step:"3.1",output:"all"}),this.prepareServerUrl()):(SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(_.extend({server_url:sd.para.server_url},n))),"function"==typeof r&&r());else if(!/sensors-verify/.test(navigator.userAgent)&&!/sa-sdk-ios/.test(navigator.userAgent)||window.MSStream)sd.para.use_app_track===!0&&(sd.debug.apph5({data:n,step:"2",output:"all"}),this.prepareServerUrl());else{var s=null;if(/sensors-verify/.test(navigator.userAgent)){var a=navigator.userAgent.match(/sensors-verify\/([^\s]+)/);if(a&&a[0]&&"string"==typeof a[1]&&2===a[1].split("?").length){a=a[1].split("?");var i=null,o=null;try{i=_.url("hostname",sd.para.server_url),o=_.url("?project",sd.para.server_url)||"default"}catch(c){}i&&i===a[0]&&o&&o===a[1]?(s=document.createElement("iframe"),s.setAttribute("src","sensorsanalytics://trackEvent?event="+encodeURIComponent(JSON.stringify(_.extend({server_url:sd.para.server_url},n)))),document.documentElement.appendChild(s),s.parentNode.removeChild(s),s=null,"function"==typeof r&&r()):(sd.debug.apph5({data:n,step:"3.2",output:"all"}),this.prepareServerUrl())}}else s=document.createElement("iframe"),s.setAttribute("src","sensorsanalytics://trackEvent?event="+encodeURIComponent(JSON.stringify(_.extend({server_url:sd.para.server_url},n)))),document.documentElement.appendChild(s),s.parentNode.removeChild(s),s=null,"function"==typeof r&&r()}else"mui"===sd.para.use_app_track?_.isObject(window.plus)&&window.plus.SDAnalytics&&window.plus.SDAnalytics.trackH5Event&&window.plus.SDAnalytics.trackH5Event(e):(sd.debug.apph5({data:n,step:"1",output:"code"}),this.prepareServerUrl());logger.info(n)},sendState.prepareServerUrl=function(){if("object"==typeof this.requestData.config&&this.requestData.config.server_url)this.sendCall(this.requestData.config.server_url,this.requestData.callback);else if(_.isArray(sd.para.server_url))for(var e=0;e<sd.para.server_url.length;e++)this.sendCall(sd.para.server_url[e]);else this.sendCall(sd.para.server_url,this.requestData.callback)},sendState.sendCall=function(e,t){var r={server_url:e,data:JSON.stringify(this.requestData.data),callback:t,config:this.requestData.config};_.isObject(sd.para.jsapp)&&!sd.para.jsapp.isOnline&&"function"==typeof sd.para.jsapp.setData?(delete r.callback,r=JSON.stringify(r),sd.para.jsapp.setData(r)):this.pushSend(r)},sendState.pushSend=function(e){var t=dataSend.getInstance(e),r=this;t.close=function(){r.queue.close()},this.queue.enqueue(t)};var saNewUser={checkIsAddSign:function(e){"track"===e.type&&(_.cookie.getNewUser()?e.properties.$is_first_day=!0:e.properties.$is_first_day=!1)},is_first_visit_time:!1,checkIsFirstTime:function(e){"track"===e.type&&"$pageview"===e.event&&(this.is_first_visit_time?(e.properties.$is_first_time=!0,this.is_first_visit_time=!1):e.properties.$is_first_time=!1)},setDeviceId:function(e){var t=null,r=_.cookie.get("sensorsdata2015jssdkcross"),n={};null!=r&&_.isJSONString(r)&&(n=JSON.parse(r),n.$device_id&&(t=n.$device_id)),t=t||e,sd.para.cross_subdomain===!0?store.set("$device_id",t):(n.$device_id=t,_.cookie.set("sensorsdata2015jssdkcross",JSON.stringify(n),null,!0)),sd.para.is_track_device_id&&(_.info.currentProps.$device_id=t)},storeInitCheck:function(){if(is_first_visitor){var e=new Date,t={h:23-e.getHours(),m:59-e.getMinutes(),s:59-e.getSeconds()};_.cookie.set(_.cookie.getCookieName("new_user"),"1",3600*t.h+60*t.m+t.s+"s"),this.is_first_visit_time=!0}else _.cookie.getNewUser()||(this.checkIsAddSign=function(e){"track"===e.type&&(e.properties.$is_first_day=!1)}),this.checkIsFirstTime=function(e){"track"===e.type&&"$pageview"===e.event&&(e.properties.$is_first_time=!1)}},checkIsFirstLatest:function(){for(var e=_.info.pageProp.url_domain,t=_.info.pageProp.referrer_domain,r=["$utm_source","$utm_medium","$utm_campaign","$utm_content","$utm_term"],n=store.getProps(),s=0;s<r.length;s++)r[s]in n&&delete n[r[s]];store.setProps(n,!0);var a={};if(""===e&&(e="url\u89e3\u6790\u5931\u8d25"),_.each(sd.para.is_track_latest,function(r,n){if(r){if("utm"!==n&&"url\u89e3\u6790\u5931\u8d25"===e)a["$latest_"+n]="url\u7684domain\u89e3\u6790\u5931\u8d25";else if("utm"!==n&&"referrer\u89e3\u6790\u5931\u8d25"===t)a["$latest_"+n]="referrer\u7684domain\u89e3\u6790\u5931\u8d25";else if(e!==t)switch(n){case"traffic_source_type":a.$latest_traffic_source_type=_.getSourceFromReferrer();break;case"referrer":a.$latest_referrer=_.info.pageProp.referrer;break;case"referrer_host":a.$latest_referrer_host=_.info.pageProp.referrer_host;break;case"search_keyword":a.$latest_search_keyword=_.getKeywordFromReferrer();break;case"landing_page":a.$latest_landing_page=location.href}}else if("utm"===n&&sd.store._state.props)for(var s in sd.store._state.props)0===s.indexOf("$latest_utm")&&0===s.indexOf("_latest_")||delete sd.store._state.props[s];else sd.store._state.props&&"$latest_"+n in sd.store._state.props&&delete sd.store._state.props["$latest_"+n]}),sd.register(a),sd.para.is_track_latest.utm){var i=_.info.campaignParamsStandard("$latest_","_latest_"),o=i.$utms,c=i.otherUtms;_.isEmptyObject(o)||sd.register(o),_.isEmptyObject(c)||sd.register(c)}}},saEvent={};saEvent.checkOption={regChecks:{regName:/^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i},checkPropertiesKey:function(e){var t=this,r=!0;return _.each(e,function(e,n){t.regChecks.regName.test(n)||(r=!1)}),r},check:function(e,t){return"string"==typeof this[e]?this[this[e]](t):this[e](t)},str:function(e){return!!_.isString(e)||(logger.info("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f,\u5fc5\u987b\u662f\u5b57\u7b26\u4e32"),!0)},properties:function(e){return _.strip_sa_properties(e),!e||(_.isObject(e)?!!this.checkPropertiesKey(e)||(logger.info("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd、\u6570\u5b57、\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"),!0):(logger.info("properties\u53ef\u4ee5\u6ca1\u6709\uff0c\u4f46\u6709\u7684\u8bdd\u5fc5\u987b\u662f\u5bf9\u8c61"),!0))},propertiesMust:function(e){return _.strip_sa_properties(e),void 0===e||!_.isObject(e)||_.isEmptyObject(e)?(logger.info("properties\u5fc5\u987b\u662f\u5bf9\u8c61\u4e14\u6709\u503c"),!0):!!this.checkPropertiesKey(e)||(logger.info("properties \u91cc\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u540d\u9700\u8981\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd、\u6570\u5b57、\u4e0b\u5212\u7ebf\uff0c\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e0d\u80fd\u4ee5 $ \u5f00\u5934"),!0)},event:function(e){return!(!_.isString(e)||!this.regChecks.regName.test(e))||(logger.info("\u8bf7\u68c0\u67e5\u53c2\u6570\u683c\u5f0f\uff0ceventName \u5fc5\u987b\u662f\u5b57\u7b26\u4e32\uff0c\u4e14\u9700\u662f\u5408\u6cd5\u7684\u53d8\u91cf\u540d\uff0c\u5373\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\uff0c\u4e14\u53ea\u5305\u542b\uff1a\u5927\u5c0f\u5199\u5b57\u6bcd、\u6570\u5b57、\u4e0b\u5212\u7ebf\u548c $,\u5176\u4e2d\u4ee5 $ \u5f00\u5934\u7684\u8868\u660e\u662f\u7cfb\u7edf\u7684\u4fdd\u7559\u5b57\u6bb5\uff0c\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d\u8bf7\u4e0d\u8981\u4ee5 $ \u5f00\u5934"),!0)},test_id:"str",group_id:"str",distinct_id:function(e){return!(!_.isString(e)||!/^.{1,255}$/.test(e))||(logger.info("distinct_id\u5fc5\u987b\u662f\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u4e14\u5c0f\u4e8e255\u4f4d\u7684\u5b57\u7b26\u4e32"),!1)}},saEvent.check=function(e){var t=!0;for(var r in e)if(!this.checkOption.check(r,e[r]))return!1;return t},saEvent.send=function(e,t){var r={distinct_id:store.getDistinctId(),lib:{$lib:"js",$lib_method:"code",$lib_version:String(LIB_VERSION)},properties:{}};if(_.isObject(e)&&_.isObject(e.properties)&&!_.isEmptyObject(e.properties)&&e.properties.$lib_detail&&(r.lib.$lib_detail=e.properties.$lib_detail,delete e.properties.$lib_detail),"string"!=typeof store.getDistinctId()||""==typeof store.getDistinctId()){var n="";switch(store.getDistinctId()){case null:n="null";break;case void 0:n="undefined";break;case"":n="\u7a7a";break;default:n=String(store.getDistinctId())}error_msg.push("distinct_id-"+just_test_distinctid+"-"+just_test_distinctid_2+"-"+n+"-"+just_test_distinctid_detail+"-"+just_test_distinctid_detail2)}_.extend(r,e),error_msg.length>0&&(r.jssdk_error=error_msg.join("--")),_.isObject(e.properties)&&!_.isEmptyObject(e.properties)&&_.extend(r.properties,e.properties),e.type&&"profile"===e.type.slice(0,7)||(r.properties=_.extend({},_.info.properties(),store.getProps(),store.getSessionProps(),_.info.currentProps,r.properties),sd.para.is_track_latest.referrer&&!_.isString(r.properties.$latest_referrer)&&(r.properties.$latest_referrer="\u53d6\u503c\u5f02\u5e38",_.jssdkDebug(r.properties,store.getProps())),sd.para.is_track_latest.referrer_host&&!_.isString(r.properties.$latest_referrer_host)&&(r.properties.$latest_referrer_host="\u53d6\u503c\u5f02\u5e38"),sd.para.is_track_latest.search_keyword&&!_.isString(r.properties.$latest_search_keyword)&&(r.properties.$latest_search_keyword="\u53d6\u503c\u5f02\u5e38"),sd.para.is_track_latest.traffic_source_type&&!_.isString(r.properties.$latest_traffic_source_type)&&(r.properties.$latest_traffic_source_type="\u53d6\u503c\u5f02\u5e38"),sd.para.is_track_latest.landing_page&&!_.isString(r.properties.$latest_landing_page)&&(r.properties.$latest_landing_page="\u53d6\u503c\u5f02\u5e38")),r.properties.$time&&_.isDate(r.properties.$time)?(r.time=1*r.properties.$time,delete r.properties.$time):sd.para.use_client_time&&(r.time=1*new Date),_.searchObjDate(r),_.searchObjString(r),_.searchZZAppStyle(r);var s=_.searchConfigData(r.properties);saNewUser.checkIsAddSign(r),saNewUser.checkIsFirstTime(r),sd.para.debug_mode===!0?(logger.info(r),this.debugPath(JSON.stringify(r),t)):sd.sendState.getSendCall(r,s,t)},saEvent.debugPath=function(e,t){var r=e,n="";n=sd.para.debug_mode_url.indexOf("?")!==-1?sd.para.debug_mode_url+"&data="+encodeURIComponent(_.base64Encode(e)):sd.para.debug_mode_url+"?data="+encodeURIComponent(_.base64Encode(e)),_.ajax({url:n,type:"GET",cors:!0,header:{"Dry-Run":String(sd.para.debug_mode_upload)},success:function(e){_.isEmptyObject(e)===!0?alert("debug\u6570\u636e\u53d1\u9001\u6210\u529f"+r):alert("debug\u5931\u8d25 \u9519\u8bef\u539f\u56e0"+JSON.stringify(e))}})};var store=sd.store={_sessionState:{},_state:{},getProps:function(){return this._state.props||{}},getSessionProps:function(){return this._sessionState},getDistinctId:function(){return this._state.distinct_id},getFirstId:function(){return this._state.first_id},toState:function(e){var t=null;if(null!=e&&_.isJSONString(e))if(t=JSON.parse(e),this._state=_.extend(t),t.distinct_id){if("object"==typeof t.props){for(var r in t.props)"string"==typeof t.props[r]&&(t.props[r]=t.props[r].slice(0,sd.para.max_referrer_string_length));this.save()}}else this.set("distinct_id",_.UUID()),error_msg.push("toStateParseDistinctError");else this.set("distinct_id",_.UUID()),error_msg.push("toStateParseError")},initSessionState:function(){var e=_.cookie.get("sensorsdata2015session"),t=null;null!==e&&"object"==typeof(t=JSON.parse(e))&&(this._sessionState=t||{})},setOnce:function(e,t){e in this._state||this.set(e,t)},set:function(e,t){this._state=this._state||{},this._state[e]=t,this.save()},change:function(e,t){this._state[e]=t},setSessionProps:function(e){var t=this._sessionState;_.extend(t,e),this.sessionSave(t)},setSessionPropsOnce:function(e){var t=this._sessionState;_.coverExtend(t,e),this.sessionSave(t)},setProps:function(e,t){var r={};r=t?e:_.extend(this._state.props||{},e);for(var n in r)"string"==typeof r[n]&&(r[n]=r[n].slice(0,sd.para.max_referrer_string_length));this.set("props",r)},setPropsOnce:function(e){var t=this._state.props||{};_.coverExtend(t,e),this.set("props",t)},clearAllProps:function(e){if(this._sessionState={},_.isArray(e)&&e.length>0)for(var t=0;t<e.length;t++)_.isString(e[t])&&e[t].indexOf("latest_")===-1&&e[t]in this._state.props&&delete this._state.props[e[t]];else for(var t in this._state.props)1!==t.indexOf("latest_")&&delete this._state.props[t];this.sessionSave({}),this.save()},sessionSave:function(e){this._sessionState=e,_.cookie.set("sensorsdata2015session",JSON.stringify(this._sessionState),0)},save:function(){_.cookie.set(this.getCookieName(),JSON.stringify(this._state),73e3,sd.para.cross_subdomain)},getCookieName:function(){var e="";return sd.para.cross_subdomain===!1?(e=_.url("sub",location.href),e="string"==typeof e&&""!==e?"sa_jssdk_2015_"+e:"sa_jssdk_2015_root"):e="sensorsdata2015jssdkcross",e},init:function(){navigator.cookieEnabled||(error_msg.push("cookieNotEnable"),_.localStorage.isSupport||error_msg.push("localStorageNotEnable")),this.initSessionState();var e=_.UUID(),t=_.cookie.get(this.getCookieName());null===t?(is_first_visitor=!0,just_test_distinctid=1,this.set("distinct_id",e)):(just_test_distinctid=2,just_test_distinctid_detail=JSON.stringify(t),just_test_distinctid_detail2=JSON.stringify(document.cookie.match(/2015[^;]+/g)),_.isJSONString(t)&&JSON.parse(t).distinct_id||(is_first_visitor=!0),this.toState(t)),saNewUser.setDeviceId(e),saNewUser.storeInitCheck(),saNewUser.checkIsFirstLatest()}},commonWays={setOnlineState:function(e){if(e===!0&&_.isObject(sd.para.jsapp)&&"function"==typeof sd.para.jsapp.getData){sd.para.jsapp.isOnline=!0;var t=sd.para.jsapp.getData();_.isArray(t)&&t.length>0&&_.each(t,function(e){_.isJSONString(e)&&sd.sendState.pushSend(JSON.parse(e))})}else sd.para.jsapp.isOnline=!1},autoTrackIsUsed:!1,isReady:function(e){e()},getUtm:function(){return _.info.campaignParams()},getStayTime:function(){return(new Date-sd._t)/1e3},setProfileLocal:function(e){if(!_.localStorage.isSupport())return sd.setProfile(e),!1;if(!_.isObject(e)||_.isEmptyObject(e))return!1;var t=_.localStorage.parse("sensorsdata_2015_jssdk_profile"),r=!1;if(_.isObject(t)&&!_.isEmptyObject(t)){for(var n in e)!(n in t&&t[n]!==e[n])&&n in t||(t[n]=e[n],r=!0);r&&(_.localStorage.set("sensorsdata_2015_jssdk_profile",JSON.stringify(t)),sd.setProfile(e))}else _.localStorage.set("sensorsdata_2015_jssdk_profile",JSON.stringify(e)),sd.setProfile(e)},setInitReferrer:function(){var e=_.getReferrer();sd.setOnceProfile({_init_referrer:e,_init_referrer_host:_.info.pageProp.referrer_host})},setSessionReferrer:function(){var e=_.getReferrer();store.setSessionPropsOnce({_session_referrer:e,_session_referrer_host:_.info.pageProp.referrer_host})},setDefaultAttr:function(){_.info.register({_current_url:location.href,_referrer:_.getReferrer(),_referring_host:_.info.pageProp.referrer_host})},trackHeatmap:function(){this.trackHeatMap.apply(arguments)},trackHeatMap:function(e,t,r){if("object"==typeof e&&e.tagName){var n=e.tagName.toLowerCase(),s=e.parentNode.tagName.toLowerCase();"button"!==n&&"a"!==n&&"a"!==s&&"button"!==s&&"input"!==n&&"textarea"!==n&&heatmap.start(null,e,n,t,r)}},trackAllHeatMap:function(e,t,r){if("object"==typeof e&&e.tagName){var n=e.tagName.toLowerCase();heatmap.start(null,e,n,t,r)}},autoTrackSinglePage:function(e,t){function r(){var e=_.info.campaignParams(),t={};for(var r in e)(" "+source_channel_standard+" ").indexOf(" "+r+" ")!==-1?t["$"+r]=e[r]:t[r]=e[r];return t}function n(e,t){sd.track("$pageview",_.extend({$referrer:s,$referrer_host:s?_.url("hostname",s):s,$url:location.href,$url_path:location.pathname,$title:document.title},e,r()),t),s=location.href}if(this.autoTrackIsUsed)var s=_.info.pageProp.url;else var s=_.info.pageProp.referrer;e=_.isObject(e)?e:{},e=_.isObject(e)?e:{},is_first_visitor&&!e.not_set_profile&&(sd.setOnceProfile(_.extend({$first_visit_time:new Date,$first_referrer:_.getReferrer(),$first_browser_language:navigator.language||"\u53d6\u503c\u5f02\u5e38",$first_browser_charset:"string"==typeof document.charset?document.charset.toUpperCase():"\u53d6\u503c\u5f02\u5e38",$first_referrer_host:_.info.pageProp.referrer_host,$first_traffic_source_type:_.getSourceFromReferrer(),$first_search_keyword:_.getKeywordFromReferrer()},r())),is_first_visitor=!1),e.not_set_profile&&delete e.not_set_profile,is_first_visitor&&!e.not_set_profile&&(sd.setOnceProfile(_.extend({$first_visit_time:new Date,$first_referrer:_.getReferrer(),$first_browser_language:navigator.language||"\u53d6\u503c\u5f02\u5e38",$first_browser_charset:"string"==typeof document.charset?document.charset.toUpperCase():"\u53d6\u503c\u5f02\u5e38",$first_referrer_host:_.info.pageProp.referrer_host,$first_traffic_source_type:_.getSourceFromReferrer(),$first_search_keyword:_.getKeywordFromReferrer()},r())),is_first_visitor=!1),e.not_set_profile&&delete e.not_set_profile,n(e,t),this.autoTrackSinglePage=n},autoTrackWithoutProfile:function(e,t){e=_.isObject(e)?e:{},this.autoTrack(_.extend(e,{not_set_profile:!0}),t)},autoTrack:function(e,t){e=_.isObject(e)?e:{};var r=_.info.campaignParams(),n={};for(var s in r)(" "+source_channel_standard+" ").indexOf(" "+s+" ")!==-1?n["$"+s]=r[s]:n[s]=r[s];is_first_visitor&&!e.not_set_profile&&(sd.setOnceProfile(_.extend({$first_visit_time:new Date,$first_referrer:_.getReferrer(),$first_browser_language:navigator.language||"\u53d6\u503c\u5f02\u5e38",$first_browser_charset:"string"==typeof document.charset?document.charset.toUpperCase():"\u53d6\u503c\u5f02\u5e38",$first_referrer_host:_.info.pageProp.referrer_host,$first_traffic_source_type:_.getSourceFromReferrer(),$first_search_keyword:_.getKeywordFromReferrer()},n)),is_first_visitor=!1),e.not_set_profile&&delete e.not_set_profile;var a=location.href;sd.para.is_single_page&&_.addHashEvent(function(){var r=_.getReferrer(a);sd.track("$pageview",_.extend({$referrer:r,$referrer_host:_.url("hostname",r)||"",$url:location.href,$url_path:location.pathname,$title:document.title},n,e),t),a=location.href}),sd.track("$pageview",_.extend({$referrer:_.getReferrer(),$referrer_host:_.info.pageProp.referrer_host,$url:location.href,$url_path:location.pathname,$title:document.title},n,e),t),this.autoTrackIsUsed=!0},getAnonymousID:function(){return _.isEmptyObject(sd.store._state)?"\u8bf7\u5148\u521d\u59cb\u5316SDK":sd.store._state.first_id?sd.store._state.first_id:sd.store._state.distinct_id}};sd.quick=function(){var e=slice.call(arguments),t=e[0],r=e.slice(1);return"string"==typeof t&&commonWays[t]?commonWays[t].apply(commonWays,r):void("function"==typeof t?t.apply(sd,r):logger.info("quick\u65b9\u6cd5\u4e2d\u6ca1\u6709\u8fd9\u4e2a\u529f\u80fd"+e[0]))},sd.track=function(e,t,r){saEvent.check({event:e,properties:t})&&saEvent.send({type:"track",event:e,properties:t},r)},_.trackLink=function(e,t,r){function n(e){function n(){a||(a=!0,location.href=s.href)}e.stopPropagation(),e.preventDefault();var a=!1;setTimeout(n,1e3),sd.track(t,r,n)}e=e||{};var s=null;return e.ele&&(s=e.ele),e.event&&(s=e.target?e.target:e.event.target),r=r||{},!(!s||"object"!=typeof s)&&(!s.href||/^javascript/.test(s.href)||s.target||s.download||s.onclick?(sd.track(t,r),!1):(e.event&&n(e.event),void(e.ele&&_.addEvent(e.ele,"click",function(e){n(e)}))))},sd.trackLink=function(e,t,r){"object"==typeof e&&e.tagName?_.trackLink({ele:e},t,r):"object"==typeof e&&e.target&&e.event&&_.trackLink(e,t,r)},sd.trackLinks=function(e,t,r){return r=r||{},!(!e||"object"!=typeof e)&&(!(!e.href||/^javascript/.test(e.href)||e.target)&&void _.addEvent(e,"click",function(n){function s(){a||(a=!0,location.href=e.href)}n.preventDefault();var a=!1;setTimeout(s,1e3),sd.track(t,r,s)}))},sd.setProfile=function(e,t){saEvent.check({propertiesMust:e})&&saEvent.send({type:"profile_set",properties:e},t)},sd.setOnceProfile=function(e,t){saEvent.check({propertiesMust:e})&&saEvent.send({type:"profile_set_once",properties:e},t)},sd.appendProfile=function(e,t){saEvent.check({propertiesMust:e})&&(_.each(e,function(t,r){_.isString(t)?e[r]=[t]:_.isArray(t)||(delete e[r],logger.info("appendProfile\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6570\u7ec4"))}),_.isEmptyObject(e)||saEvent.send({type:"profile_append",properties:e},t))},sd.incrementProfile=function(e,t){function r(e){for(var t in e)if(!/-*\d+/.test(String(e[t])))return!1;return!0}var n=e;_.isString(e)&&(e={},e[n]=1),saEvent.check({propertiesMust:e})&&(r(e)?saEvent.send({type:"profile_increment",properties:e},t):logger.info("profile_increment\u7684\u503c\u53ea\u80fd\u662f\u6570\u5b57"))},sd.deleteProfile=function(e){saEvent.send({type:"profile_delete"},e),store.set("distinct_id",_.UUID())},sd.unsetProfile=function(e,t){var r=e,n={};_.isString(e)&&(e=[],e.push(r)),_.isArray(e)?(_.each(e,function(e){_.isString(e)?n[e]=!0:logger.info("profile_unset\u7ed9\u7684\u6570\u7ec4\u91cc\u9762\u7684\u503c\u5fc5\u987b\u65f6string,\u5df2\u7ecf\u8fc7\u6ee4\u6389",e)}),saEvent.send({type:"profile_unset",properties:n},t)):logger.info("profile_unset\u7684\u53c2\u6570\u662f\u6570\u7ec4")},sd.identify=function(e,t){"number"==typeof e&&(e=String(e));var r=store.getFirstId();"undefined"==typeof e?r?store.set("first_id",_.UUID()):store.set("distinct_id",_.UUID()):saEvent.check({distinct_id:e})?t===!0?r?store.set("first_id",e):store.set("distinct_id",e):r?store.change("first_id",e):store.change("distinct_id",e):logger.info("identify\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32")},sd.trackSignup=function(e,t,r,n){saEvent.check({distinct_id:e,event:t,properties:r})&&(saEvent.send({original_id:store.getFirstId()||store.getDistinctId(),distinct_id:e,type:"track_signup",event:t,properties:r},n),store.set("distinct_id",e))},sd.trackAbtest=function(e,t){},sd.registerPage=function(e){saEvent.check({properties:e})?_.extend(_.info.currentProps,e):logger.info("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")},sd.clearAllRegister=function(e){store.clearAllProps(e)},sd.register=function(e){saEvent.check({properties:e})?store.setProps(e):logger.info("register\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")},sd.registerOnce=function(e){saEvent.check({properties:e})?store.setPropsOnce(e):logger.info("registerOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")},sd.registerSession=function(e){saEvent.check({properties:e})?store.setSessionProps(e):logger.info("registerSession\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")},sd.registerSessionOnce=function(e){saEvent.check({properties:e})?store.setSessionPropsOnce(e):logger.info("registerSessionOnce\u8f93\u5165\u7684\u53c2\u6570\u6709\u8bef")},sd.login=function(e){if("number"==typeof e&&(e=String(e)),saEvent.check({distinct_id:e})){var t=store.getFirstId(),r=store.getDistinctId();e!==r&&(t?sd.trackSignup(e,"$SignUp"):(store.set("first_id",r),sd.trackSignup(e,"$SignUp")))}else logger.info("login\u7684\u53c2\u6570\u5fc5\u987b\u662f\u5b57\u7b26\u4e32")},sd.logout=function(e){var t=store.getFirstId();t?(store.set("first_id",""),e===!0?store.set("distinct_id",_.UUID()):store.set("distinct_id",t)):logger.info("\u6ca1\u6709first_id\uff0clogout\u5931\u8d25")},sd.getPresetProperties=function(){function e(){var e=_.info.campaignParams(),t={};for(var r in e)(" "+source_channel_standard+" ").indexOf(" "+r+" ")!==-1?t["$"+r]=e[r]:t[r]=e[r];return t}var t={$referrer:"string"==typeof document.referrer?document.referrer.slice(0,100):"",$referrer_host:_.url("hostname",document.referrer)||"",$url:location.href,$url_path:location.pathname,$title:document.title||"",_distinct_id:store.getDistinctId()};return _.extend({},_.info.properties(),sd.store.getProps(),e(),t)};var heatmap={setNotice:function(e){sd.is_heatmap_render_mode=!0,sd.para.heatmap||(sd.errorMsg="\u60a8SDK\u6ca1\u6709\u914d\u7f6e\u5f00\u542f\u70b9\u51fb\u56fe\uff0c\u53ef\u80fd\u6ca1\u6709\u6570\u636e\uff01"),e&&e[0]&&e[1]&&"http:"===e[1].slice(0,5)&&"https"===location.protocol&&(sd.errorMsg="\u60a8\u7684\u5f53\u524d\u9875\u9762\u662fhttps\u7684\u5730\u5740\uff0c\u795e\u7b56\u5206\u6790\u73af\u5883\u4e5f\u5fc5\u987b\u662fhttps\uff01"),sd.para.heatmap_url||(sd.para.heatmap_url=location.protocol+"//static.sensorsdata.cn/sdk/"+LIB_VERSION+"/heatmap.min.js")},getDomIndex:function(e){if(!e.parentNode)return-1;for(var t=0,r=e.tagName,n=e.parentNode.children,s=0;s<n.length;s++)if(n[s].tagName===r){if(e===n[s])return t;t++}return-1},selector:function(e){var t=e.parentNode&&9==e.parentNode.nodeType?-1:this.getDomIndex(e);return e.getAttribute&&e.getAttribute("id")&&(!sd.para.heatmap||sd.para.heatmap&&"not_use_id"!==sd.para.heatmap.element_selector)?"#"+e.getAttribute("id"):e.tagName.toLowerCase()+(~t?":nth-of-type("+(t+1)+")":"")},getDomSelector:function(e,t){if(!e||!e.parentNode||!e.parentNode.children)return!1;t=t&&t.join?t:[];var r=e.nodeName.toLowerCase();return e&&"body"!==r&&1==e.nodeType?(t.unshift(this.selector(e)),e.getAttribute&&e.getAttribute("id")?t.join(" > "):this.getDomSelector(e.parentNode,t)):(t.unshift("body"),t.join(" > "))},na:function(){var e=document.documentElement.scrollLeft||window.pageXOffset;return parseInt(isNaN(e)?0:e,10)},i:function(){var e=0;try{e=o.documentElement&&o.documentElement.scrollTop||m.pageYOffset,e=isNaN(e)?0:e}catch(t){e=0}return parseInt(e,10)},getBrowserWidth:function(){var e=window.innerWidth||document.body.clientWidth;return isNaN(e)?0:parseInt(e,10)},getBrowserHeight:function(){var e=window.innerHeight||document.body.clientHeight;return isNaN(e)?0:parseInt(e,10)},getScrollWidth:function(){var e=parseInt(document.body.scrollWidth,10);return isNaN(e)?0:e},W:function(e){var t=parseInt(+e.clientX+ +this.na(),10),e=parseInt(+e.clientY+ +this.i(),10);return{x:isNaN(t)?0:t,y:isNaN(e)?0:e}},start:function(e,t,r,n,s){var a=_.isObject(n)?n:{},i=_.isFunction(s)?s:_.isFunction(n)?n:void 0;if(sd.para.heatmap&&sd.para.heatmap.collect_element&&!sd.para.heatmap.collect_element(t))return!1;var o=this.getDomSelector(t),c=_.getEleInfo({target:t});if(c.$element_selector=o?o:"",sd.para.heatmap&&sd.para.heatmap.custom_property){var u=sd.para.heatmap.custom_property(t);_.isObject(u)&&(c=_.extend(c,u))}c=_.extend(c,a),"a"===r&&sd.para.heatmap&&sd.para.heatmap.isTrackLink===!0?_.trackLink({event:e,target:t},"$WebClick",c):sd.track("$WebClick",c,i)},hasElement:function(e){var t=e._getPath();if(_.isArray(t)&&t.length>0)for(var r=0;r<t.length;r++)if(t[r]&&t[r].tagName&&"a"===t[r].tagName.toLowerCase())return t[r];return!1},initScrollmap:function(){if(!_.isObject(sd.para.heatmap)||"default"!==sd.para.heatmap.scroll_notice_map)return!1;if(sd.para.scrollmap&&_.isFunction(sd.para.scrollmap.collect_url)&&!sd.para.scrollmap.collect_url())return!1;var e=function(e){var t={};return t.timeout=e.timeout||1e3,t.func=e.func,t.hasInit=!1,t.inter=null,t.main=function(e,t){this.func(e,t),this.inter=null},t.go=function(e){var r={};this.inter||(r.$viewport_position=document.documentElement&&document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0,r.$viewport_position=Math.round(r.$viewport_position)||0,r.$viewport_height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0,r.$viewport_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,e?t.main(r,!0):this.inter=setTimeout(function(){t.main(r)},this.timeout))},t},t=e({timeout:1e3,func:function(e,t){var r=document.documentElement&&document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||0,n=new Date,s=n-this.current_time;(s>sd.para.heatmap.scroll_delay_time&&r-e.$viewport_position!==0||t)&&(e.$url=location.href,e.$title=document.title,e.$url_path=location.pathname,e.event_duration=parseInt(s)/1e3,sd.track("$WebStay",e)),this.current_time=n}});t.current_time=new Date,_.addEvent(window,"scroll",function(){t.go()}),_.addEvent(window,"unload",function(){t.go("notime")})},initHeatmap:function(){var e=this;return!(!_.isObject(sd.para.heatmap)||"default"!==sd.para.heatmap.clickmap)&&(!(_.isFunction(sd.para.heatmap.collect_url)&&!sd.para.heatmap.collect_url())&&("all"===sd.para.heatmap.collect_elements?sd.para.heatmap.collect_elements="all":sd.para.heatmap.collect_elements="interact",void("all"===sd.para.heatmap.collect_elements?_.addEvent(document,"click",function(t){var r=t||window.event;if(!r)return!1;var n=r.target||r.srcElement;if("object"!=typeof n)return!1;if("string"!=typeof n.tagName)return!1;var s=n.tagName.toLowerCase();if("body"===s||"html"===s)return!1;if(!n||!n.parentNode||!n.parentNode.children)return!1;var a=n.parentNode.tagName.toLowerCase();"a"===a||"button"===a?e.start(r,n.parentNode,a):e.start(r,n,s)}):_.addEvent(document,"click",function(t){var r=t||window.event;if(!r)return!1;var n=r.target||r.srcElement;if("object"!=typeof n)return!1;if("string"!=typeof n.tagName)return!1;var s=n.tagName.toLowerCase();if("body"===s.toLowerCase()||"html"===s.toLowerCase())return!1;if(!n||!n.parentNode||!n.parentNode.children)return!1;var a=n.parentNode;if("a"===s||"button"===s||"input"===s||"textarea"===s)e.start(r,n,s);else if("button"===a.tagName.toLowerCase()||"a"===a.tagName.toLowerCase())e.start(r,a,n.parentNode.tagName.toLowerCase());else if("area"===s&&"map"===a.tagName.toLowerCase()&&_.ry(a).prev().tagName&&"img"===_.ry(a).prev().tagName.toLowerCase())e.start(r,_.ry(a).prev(),_.ry(a).prev().tagName.toLowerCase());else{var i=e.hasElement(t);i&&e.start(r,i,i.tagName.toLowerCase())}}))))},prepare:function(e){function t(e,t,r){sd.para.heatmap_url?_.loadScript({success:function(){setTimeout(function(){"undefined"!=typeof sa_jssdk_heatmap_render&&(sa_jssdk_heatmap_render(sd,e,t,r),"object"==typeof console&&"function"==typeof console.log&&(sd.heatmap_version&&sd.heatmap_version===sd.lib_version||console.log("heatmap.js\u4e0esensorsdata.js\u7248\u672c\u53f7\u4e0d\u4e00\u81f4\uff0c\u53ef\u80fd\u5b58\u5728\u98ce\u9669!")))},0)},error:function(){},type:"js",url:sd.para.heatmap_url}):logger.info("\u6ca1\u6709\u6307\u5b9aheatmap_url\u7684\u8def\u5f84")}var r=location.search.match(/sa-request-id=([^&#]+)/),n=location.search.match(/sa-request-type=([^&#]+)/),s=location.search.match(/sa-request-url=([^&#]+)/);r&&r[0]&&r[1]?(heatmap.setNotice(s),_.sessionStorage.isSupport()&&(s&&s[0]&&s[1]&&sessionStorage.setItem("sensors_heatmap_url",decodeURIComponent(s[1])),sessionStorage.setItem("sensors_heatmap_id",r[1]),n&&n[0]&&n[1]?"1"===n[1]||"2"===n[1]||"3"===n[1]?(n=n[1],sessionStorage.setItem("sensors_heatmap_type",n)):n=null:n=null!==sessionStorage.getItem("sensors_heatmap_type")?sessionStorage.getItem("sensors_heatmap_type"):null),t(r[1],n)):_.sessionStorage.isSupport()&&"string"==typeof sessionStorage.getItem("sensors_heatmap_id")?(heatmap.setNotice(),t(sessionStorage.getItem("sensors_heatmap_id"),sessionStorage.getItem("sensors_heatmap_type"),location.href)):(e(),_.isObject(sd.para.heatmap)&&(this.initHeatmap(),this.initScrollmap()))}};return sd.init=function(e){return!(sd.readyState&&sd.readyState>=2)&&void((!e&&has_declare||e&&!has_declare)&&(sd.readyState=2,sd.initPara(e),sd._init()))},sd._init=function(){heatmap.prepare(function(){app_js_bridge(),_.info.initPage(),sd.para.is_track_single_page&&_.addSinglePageEvent(function(e){e!==location.href&&sd.quick("autoTrack",{$url:location.href,$referrer:e})}),store.init(),sd._q&&_.isArray(sd._q)&&sd._q.length>0&&_.each(sd._q,function(e){sd[e[0]].apply(sd,slice.call(e[1]))})})},sd.init(),sd}catch(err){if("object"==typeof console&&console.log)try{console.log(err)}catch(e){}}});

/***/ })
/******/ ]);