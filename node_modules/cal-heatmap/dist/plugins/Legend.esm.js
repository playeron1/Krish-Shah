import { select as select$1 } from 'd3-selection';
import { ascending, timeSecond, timeMinute, timeHour, timeDay, timeWeek, timeMonth, timeYear, timeMonday, timeTuesday, timeWednesday, timeThursday, timeFriday, timeSaturday, timeSunday, utcSecond, utcMinute, utcHour, utcDay, utcWeek, utcMonth, utcYear, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSunday, color as color$1, descending, range, symbolAsterisk, symbolCircle, symbolCross, symbolDiamond, symbolDiamond2, symbolPlus, symbolSquare, symbolSquare2, symbolStar, symbolTimes, symbolTriangle, symbolTriangle2, symbolWye, geoPath, geoTransform, geoClipRectangle, geoTransverseMercator, geoStereographic, geoOrthographic, geoMercator, geoGnomonic, geoEquirectangular, geoEqualEarth, geoAzimuthalEquidistant, geoAzimuthalEqualArea, geoAlbersUsa, geoConicEquidistant, geoConicEqualArea, geoConicConformal, geoAlbers, select, creator, schemeAccent, schemeCategory10, schemeDark2, schemePaired, schemePastel1, schemePastel2, schemeSet1, schemeSet2, schemeSet3, schemeTableau10, quantize, interpolateBrBG, interpolatePRGn, interpolatePiYG, interpolatePuOr, interpolateRdBu, interpolateRdGy, interpolateRdYlBu, interpolateRdYlGn, interpolateSpectral, interpolateBlues, interpolateGreens, interpolateGreys, interpolatePurples, interpolateReds, interpolateOranges, interpolateTurbo, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, interpolateCividis, interpolateCubehelixDefault, interpolateWarm, interpolateCool, interpolateBuGn, interpolateBuPu, interpolateGnBu, interpolateOrRd, interpolatePuBuGn, interpolatePuBu, interpolatePuRd, interpolateRdPu, interpolateYlGnBu, interpolateYlGn, interpolateYlOrBr, interpolateYlOrRd, interpolateRainbow, interpolateSinebow, schemeBrBG, schemePRGn, schemePiYG, schemePuOr, schemeRdBu, schemeRdGy, schemeRdYlBu, schemeRdYlGn, schemeSpectral, schemeBlues, schemeGreens, schemeGreys, schemeOranges, schemePurples, schemeReds, schemeBuGn, schemeBuPu, schemeGnBu, schemeOrRd, schemePuBu, schemePuBuGn, schemePuRd, schemeRdPu, schemeYlGn, schemeYlGnBu, schemeYlOrBr, schemeYlOrRd, scaleLinear, scalePow, scaleLog, scaleSymlog, scaleQuantile, extent, ticks, interpolateNumber, reverse, scaleThreshold, scaleIdentity, max as max$1, interpolateRgb, interpolateRound, min as min$2, quantile, median, interpolateHsl, interpolateHcl, interpolateLab, scaleDiverging, scaleDivergingPow, scaleDivergingLog, scaleDivergingSymlog, piecewise, scaleTime, scaleUtc, scaleImplicit, scaleOrdinal, scalePoint, scaleBand, InternSet, sort, symbolsStroke, symbolsFill, utcFormat, format as format$1, axisBottom, pathRound, rgb } from 'd3';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$b = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$a = fails$b;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var fails$9 = fails$b;

var functionBindNative = !fails$9(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$3 = Function.prototype;
var call$d = FunctionPrototype$3.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$d, call$d);

var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$d.apply(fn, arguments);
  };
};

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;

var $TypeError$c = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$2 = function (it) {
  if (isNullOrUndefined$3(it)) throw new $TypeError$c("Can't call method on " + it);
  return it;
};

var requireObjectCoercible$1 = requireObjectCoercible$2;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$2 = function (argument) {
  return $Object$3(requireObjectCoercible$1(argument));
};

var uncurryThis$f = functionUncurryThis;
var toObject$1 = toObject$2;

var hasOwnProperty = uncurryThis$f({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};

var DESCRIPTORS$9 = descriptors;
var hasOwn$8 = hasOwnProperty_1;

var FunctionPrototype$2 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$9 && Object.getOwnPropertyDescriptor;

var EXISTS$1 = hasOwn$8(FunctionPrototype$2, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS$1 && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE$1 = EXISTS$1 && (!DESCRIPTORS$9 || (DESCRIPTORS$9 && getDescriptor(FunctionPrototype$2, 'name').configurable));

var functionName = {
  EXISTS: EXISTS$1,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE$1
};

var makeBuiltIn$3 = {exports: {}};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$h = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$h =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var global$g = global$h;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$4(global$g, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$g[key] = value;
  } return value;
};

var global$f = global$h;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$f[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var uncurryThis$e = functionUncurryThis;
var isCallable$g = isCallable$h;
var store$2 = sharedStore;

var functionToString$1 = uncurryThis$e(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$g(store$2.inspectSource)) {
  store$2.inspectSource = function (it) {
    return functionToString$1(it);
  };
}

var inspectSource$3 = store$2.inspectSource;

var global$e = global$h;
var isCallable$f = isCallable$h;

var WeakMap$1 = global$e.WeakMap;

var weakMapBasicDetection = isCallable$f(WeakMap$1) && /native code/.test(String(WeakMap$1));

var isCallable$e = isCallable$h;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$8 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$e(it);
};

var objectDefineProperty = {};

var global$d = global$h;
var isObject$7 = isObject$8;

var document$3 = global$d.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject$7(document$3) && isObject$7(document$3.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$3.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$8 = fails$b;
var createElement$1 = documentCreateElement;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$8 && !fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var DESCRIPTORS$7 = descriptors;
var fails$7 = fails$b;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$7 && fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var isObject$6 = isObject$8;

var $String$4 = String;
var $TypeError$b = TypeError;

// `Assert: Type(argument) is Object`
var anObject$8 = function (argument) {
  if (isObject$6(argument)) return argument;
  throw new $TypeError$b($String$4(argument) + ' is not an object');
};

var NATIVE_BIND$2 = functionBindNative;

var call$c = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$c.bind(call$c) : function () {
  return call$c.apply(call$c, arguments);
};

var global$c = global$h;
var isCallable$d = isCallable$h;

var aFunction = function (argument) {
  return isCallable$d(argument) ? argument : undefined;
};

var getBuiltIn$7 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$c[namespace]) : global$c[namespace] && global$c[namespace][method];
};

var uncurryThis$d = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$d({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$b = global$h;
var userAgent$3 = engineUserAgent;

var process$3 = global$b.process;
var Deno$1 = global$b.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$1 = engineV8Version;
var fails$6 = fails$b;
var global$a = global$h;

var $String$3 = global$a.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$6(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$3(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$6 = getBuiltIn$7;
var isCallable$c = isCallable$h;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$6('Symbol');
  return isCallable$c($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
};

var $String$2 = String;

var tryToString$4 = function (argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$b = isCallable$h;
var tryToString$3 = tryToString$4;

var $TypeError$a = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$8 = function (argument) {
  if (isCallable$b(argument)) return argument;
  throw new $TypeError$a(tryToString$3(argument) + ' is not a function');
};

var aCallable$7 = aCallable$8;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$7(func);
};

var call$b = functionCall;
var isCallable$a = isCallable$h;
var isObject$5 = isObject$8;

var $TypeError$9 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$a(fn = input.toString) && !isObject$5(val = call$b(fn, input))) return val;
  if (isCallable$a(fn = input.valueOf) && !isObject$5(val = call$b(fn, input))) return val;
  if (pref !== 'string' && isCallable$a(fn = input.toString) && !isObject$5(val = call$b(fn, input))) return val;
  throw new $TypeError$9("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var store$1 = sharedStore;

(shared$3.exports = function (key, value) {
  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.34.0',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedExports = shared$3.exports;

var uncurryThis$c = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$2 = uncurryThis$c(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id + postfix, 36);
};

var global$9 = global$h;
var shared$2 = sharedExports;
var hasOwn$7 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$9.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$a = function (name) {
  if (!hasOwn$7(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$7(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$a = functionCall;
var isObject$4 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$9 = wellKnownSymbol$a;

var $TypeError$8 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$9('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$a(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw new $TypeError$8("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var DESCRIPTORS$6 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$7 = anObject$8;
var toPropertyKey$1 = toPropertyKey$2;

var $TypeError$7 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$6 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPropertyKey$1(P);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError$7('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var createPropertyDescriptor$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$5 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$2;

var createNonEnumerableProperty$2 = DESCRIPTORS$5 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var shared$1 = sharedExports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$8 = global$h;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
var hasOwn$6 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$8.TypeError;
var WeakMap = global$8.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$2('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$1 = function (it, metadata) {
    if (store.has(it)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$6(it, STATE)) throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$6(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$6(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$b = functionUncurryThis;
var fails$5 = fails$b;
var isCallable$9 = isCallable$h;
var hasOwn$5 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$1 = internalState;

var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState = InternalStateModule$1.get;
var $String$1 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;
var stringSlice$1 = uncurryThis$b(''.slice);
var replace = uncurryThis$b(''.replace);
var join = uncurryThis$b([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$5(function () {
  return defineProperty$3(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$1($String$1(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String$1(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS$4) defineProperty$3(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
    defineProperty$3(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$5(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$4) defineProperty$3(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$5(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$9(this) && getInternalState(this).source || inspectSource$2(this);
}, 'toString');

var makeBuiltInExports = makeBuiltIn$3.exports;

var makeBuiltIn$1 = makeBuiltInExports;
var defineProperty$2 = objectDefineProperty;

var defineBuiltInAccessor$2 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn$1(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn$1(descriptor.set, name, { setter: true });
  return defineProperty$2.f(target, name, descriptor);
};

var DESCRIPTORS$3 = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$a = functionUncurryThis;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$2;

var FunctionPrototype$1 = Function.prototype;
var functionToString = uncurryThis$a(FunctionPrototype$1.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$a(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS$3 && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor$1(FunctionPrototype$1, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var uncurryThis$9 = functionUncurryThis;

var toString$1 = uncurryThis$9({}.toString);
var stringSlice = uncurryThis$9(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice(toString$1(it), 8, -1);
};

var uncurryThis$8 = functionUncurryThis;
var fails$4 = fails$b;
var classof$5 = classofRaw$2;

var $Object$1 = Object;
var split = uncurryThis$8(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$4(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$1('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$5(it) === 'String' ? split(it, '') : $Object$1(it);
} : $Object$1;

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible = requireObjectCoercible$2;

var toIndexedObject$3 = function (it) {
  return IndexedObject$1(requireObjectCoercible(it));
};

var DESCRIPTORS$2 = descriptors;
var call$9 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor = createPropertyDescriptor$2;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey = toPropertyKey$2;
var hasOwn$4 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$2 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$4(O, P)) return createPropertyDescriptor(!call$9(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var isCallable$8 = isCallable$h;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$4 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$8(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$1.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$7 = functionUncurryThis;
var hasOwn$3 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;

var push = uncurryThis$7([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$3(hiddenKeys$1, key) && hasOwn$3(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$2 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$2;

var hiddenKeys = enumBugKeys$1.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$5 = getBuiltIn$7;
var uncurryThis$6 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$6 = anObject$8;

var concat$1 = uncurryThis$6([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$2 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3 = fails$b;
var isCallable$7 = isCallable$h;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$7(detection) ? fails$3(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$7 = global$h;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$2;
var defineBuiltIn$3 = defineBuiltIn$4;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$7;
  } else if (STATIC) {
    target = global$7[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$7[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn$3(target, key, sourceProperty, options);
  }
};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$2;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

var DESCRIPTORS$1 = descriptors;
var uncurryThis$5 = functionUncurryThis;
var call$8 = functionCall;
var fails$2 = fails$b;
var objectKeys = objectKeys$1;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject = toObject$2;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$1 = Object.defineProperty;
var concat = uncurryThis$5([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$2(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$1(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$1 || call$8(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$6 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$6({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var wellKnownSymbol$8 = wellKnownSymbol$a;

var TO_STRING_TAG$2 = wellKnownSymbol$8('toStringTag');
var test = {};

test[TO_STRING_TAG$2] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$6 = isCallable$h;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$7 = wellKnownSymbol$a;

var TO_STRING_TAG$1 = wellKnownSymbol$7('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$4 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) === 'Object' && isCallable$6(O.callee) ? 'Arguments' : result;
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$3 = classof$4;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString$1 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$3(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$2 = defineBuiltIn$4;
var toString = objectToString$1;

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$2(Object.prototype, 'toString', toString, { unsafe: true });
}

var global$6 = global$h;
var classof$2 = classofRaw$2;

var engineIsNode = classof$2(global$6.process) === 'process';

var uncurryThis$4 = functionUncurryThis;
var aCallable$6 = aCallable$8;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$4(aCallable$6(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$5 = isCallable$h;

var $String = String;
var $TypeError$6 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$5(argument)) return argument;
  throw new $TypeError$6("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$5 = anObject$8;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$5(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var defineProperty = objectDefineProperty.f;
var hasOwn$1 = hasOwnProperty_1;
var wellKnownSymbol$6 = wellKnownSymbol$a;

var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');

var setToStringTag$1 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$1(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var getBuiltIn$4 = getBuiltIn$7;
var defineBuiltInAccessor = defineBuiltInAccessor$2;
var wellKnownSymbol$5 = wellKnownSymbol$a;
var DESCRIPTORS = descriptors;

var SPECIES$2 = wellKnownSymbol$5('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
    defineBuiltInAccessor(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isPrototypeOf$1 = objectIsPrototypeOf;

var $TypeError$5 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$1(Prototype, it)) return it;
  throw new $TypeError$5('Incorrect invocation');
};

var uncurryThis$3 = functionUncurryThis;
var fails$1 = fails$b;
var isCallable$4 = isCallable$h;
var classof$1 = classof$4;
var getBuiltIn$3 = getBuiltIn$7;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$3('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$3(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$4(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$4(argument)) return false;
  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$1(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor = isConstructor$1;
var tryToString$2 = tryToString$4;

var $TypeError$4 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError$4(tryToString$2(argument) + ' is not a constructor');
};

var anObject$4 = anObject$8;
var aConstructor = aConstructor$1;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var wellKnownSymbol$4 = wellKnownSymbol$a;

var SPECIES$1 = wellKnownSymbol$4('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$4(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$1(S = anObject$4(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$7 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$7.bind(apply$1) : function () {
  return call$7.apply(apply$1, arguments);
});

var classofRaw = classofRaw$2;
var uncurryThis$2 = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$2(fn);
};

var uncurryThis$1 = functionUncurryThisClause;
var aCallable$5 = aCallable$8;
var NATIVE_BIND = functionBindNative;

var bind$4 = uncurryThis$1(uncurryThis$1.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$4(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var getBuiltIn$2 = getBuiltIn$7;

var html$1 = getBuiltIn$2('document', 'documentElement');

var uncurryThis = functionUncurryThis;

var arraySlice$1 = uncurryThis([].slice);

var $TypeError$3 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw new $TypeError$3('Not enough arguments');
  return passed;
};

var userAgent$2 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$5 = global$h;
var apply = functionApply;
var bind$3 = functionBindContext;
var isCallable$3 = isCallable$h;
var hasOwn = hasOwnProperty_1;
var fails = fails$b;
var html = html$1;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;

var set = global$5.setImmediate;
var clear = global$5.clearImmediate;
var process$2 = global$5.process;
var Dispatch = global$5.Dispatch;
var Function$1 = global$5.Function;
var MessageChannel = global$5.MessageChannel;
var String$1 = global$5.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$5.location;
});

var run = function (id) {
  if (hasOwn(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global$5.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$3(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$2[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$3) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$3(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$5.addEventListener &&
    isCallable$3(global$5.postMessage) &&
    !global$5.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$5.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var Queue$2 = function () {
  this.head = null;
  this.tail = null;
};

Queue$2.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

var queue$1 = Queue$2;

var userAgent$1 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

var userAgent = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var global$4 = global$h;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$1 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;

var MutationObserver = global$4.MutationObserver || global$4.WebKitMutationObserver;
var document$2 = global$4.document;
var process$1 = global$4.process;
var Promise$1 = global$4.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$4, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$1();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$1.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise$1;
    then = bind$2(promise.then, promise);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$2) {
    notify$1 = function () {
      process$1.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$2(macrotask, global$4);
    notify$1 = function () {
      macrotask(flush);
    };
  }

  microtask$1 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}

var microtask_1 = microtask$1;

var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var global$3 = global$h;

var promiseNativeConstructor = global$3.Promise;

/* global Deno -- Deno case */
var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$2 = global$h;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$2 = isCallable$h;
var isForced = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$3 = wellKnownSymbol$a;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES = wellKnownSymbol$3('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$2(global$2.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$4 = aCallable$8;

var $TypeError$2 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError$2('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$4(resolve);
  this.reject = aCallable$4(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$5 = _export;
var IS_NODE = engineIsNode;
var global$1 = global$h;
var call$6 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$4;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$1;
var setSpecies = setSpecies$1;
var aCallable$3 = aCallable$8;
var isCallable$1 = isCallable$h;
var isObject$2 = isObject$8;
var anInstance = anInstance$1;
var speciesConstructor = speciesConstructor$1;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue$1;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$1.TypeError;
var document$1 = global$1.document;
var process = global$1.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$2(it) && isCallable$1(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$6(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$1.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$6(task, global$1, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$6(task, global$1, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$1 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$6(then, value,
            bind$1(internalResolve, wrapper, state),
            bind$1(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$3(executor);
    call$6(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$1(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };

  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (isCallable$1(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call$6(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}

$$5({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);

var iterators = {};

var wellKnownSymbol$2 = wellKnownSymbol$a;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$2('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var classof = classof$4;
var getMethod$1 = getMethod$3;
var isNullOrUndefined = isNullOrUndefined$4;
var Iterators = iterators;
var wellKnownSymbol$1 = wellKnownSymbol$a;

var ITERATOR$1 = wellKnownSymbol$1('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$1)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof(it)];
};

var call$5 = functionCall;
var aCallable$2 = aCallable$8;
var anObject$3 = anObject$8;
var tryToString$1 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$1 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$3(call$5(iteratorMethod, argument));
  throw new $TypeError$1(tryToString$1(argument) + ' is not iterable');
};

var call$4 = functionCall;
var anObject$2 = anObject$8;
var getMethod = getMethod$3;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$2(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$4(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$2(innerResult);
  return value;
};

var bind = functionBindContext;
var call$3 = functionCall;
var anObject$1 = anObject$8;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$2 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$1(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$3(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

var wellKnownSymbol = wellKnownSymbol$a;

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
});

var $$4 = _export;
var call$2 = functionCall;
var aCallable$1 = aCallable$8;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$4({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var $promiseResolve = aCallable$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$2($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$3 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$7;
var isCallable = isCallable$h;
var defineBuiltIn = defineBuiltIn$4;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$3({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn$1('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}

var $$2 = _export;
var call$1 = functionCall;
var aCallable = aCallable$8;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$2({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call$1($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$1 = _export;
var call = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$1({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject = anObject$8;
var isObject$1 = isObject$8;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$1 = function (C, x) {
  anObject(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $ = _export;
var getBuiltIn = getBuiltIn$7;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;

getBuiltIn('Promise');

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});

function defined(x) {
  return x != null && !Number.isNaN(x);
}

function ascendingDefined(a, b) {
  return +defined(b) - +defined(a) || ascending(a, b);
}

function finite(x) {
  return isFinite(x) ? x : NaN;
}

function positive(x) {
  return x > 0 && isFinite(x) ? x : NaN;
}

function negative(x) {
  return x < 0 && isFinite(x) ? x : NaN;
}

function format(date, fallback) {
  if (!(date instanceof Date)) date = new Date(+date);
  if (isNaN(date)) return typeof fallback === "function" ? fallback(date) : fallback;
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = date.getUTCMilliseconds();
  return `${formatYear(date.getUTCFullYear())}-${pad(date.getUTCMonth() + 1, 2)}-${pad(date.getUTCDate(), 2)}${
    hours || minutes || seconds || milliseconds ? `T${pad(hours, 2)}:${pad(minutes, 2)}${
      seconds || milliseconds ? `:${pad(seconds, 2)}${
        milliseconds ? `.${pad(milliseconds, 3)}` : ``
      }` : ``
    }Z` : ``
  }`;
}

function formatYear(year) {
  return year < 0 ? `-${pad(-year, 6)}`
    : year > 9999 ? `+${pad(year, 6)}`
    : pad(year, 4);
}

function pad(value, width) {
  return `${value}`.padStart(width, "0");
}

const re = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;

function parse(string, fallback) {
  if (!re.test(string += "")) return typeof fallback === "function" ? fallback(string) : fallback;
  return new Date(string);
}

const timeIntervals = new Map([
  ["second", timeSecond],
  ["minute", timeMinute],
  ["hour", timeHour],
  ["day", timeDay],
  ["week", timeWeek],
  ["month", timeMonth],
  ["quarter", timeMonth.every(3)],
  ["half", timeMonth.every(6)],
  ["year", timeYear],
  ["monday", timeMonday],
  ["tuesday", timeTuesday],
  ["wednesday", timeWednesday],
  ["thursday", timeThursday],
  ["friday", timeFriday],
  ["saturday", timeSaturday],
  ["sunday", timeSunday]
]);

const utcIntervals = new Map([
  ["second", utcSecond],
  ["minute", utcMinute],
  ["hour", utcHour],
  ["day", utcDay],
  ["week", utcWeek],
  ["month", utcMonth],
  ["quarter", utcMonth.every(3)],
  ["half", utcMonth.every(6)],
  ["year", utcYear],
  ["monday", utcMonday],
  ["tuesday", utcTuesday],
  ["wednesday", utcWednesday],
  ["thursday", utcThursday],
  ["friday", utcFriday],
  ["saturday", utcSaturday],
  ["sunday", utcSunday]
]);

function maybeTimeInterval(interval) {
  const i = timeIntervals.get(`${interval}`.toLowerCase());
  if (!i) throw new Error(`unknown interval: ${interval}`);
  return i;
}

function maybeUtcInterval(interval) {
  const i = utcIntervals.get(`${interval}`.toLowerCase());
  if (!i) throw new Error(`unknown interval: ${interval}`);
  return i;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
const TypedArray = Object.getPrototypeOf(Uint8Array);
const objectToString = Object.prototype.toString;
const string = (x) => (x == null ? x : `${x}`);
const constant = (x) => () => x;

// If the values are specified as a typed array, no coercion is required.
function coerceNumbers(values) {
  return values instanceof TypedArray ? values : map(values, coerceNumber, Float64Array);
}

// Unlike Mark’s number, here we want to convert null and undefined to NaN since
// the result will be stored in a Float64Array and we don’t want null to be
// coerced to zero. We use Number instead of unary + to allow BigInt coercion.
function coerceNumber(x) {
  return x == null ? NaN : Number(x);
}

function coerceDates(values) {
  return map(values, coerceDate);
}

// When coercing strings to dates, we only want to allow the ISO 8601 format
// since the built-in string parsing of the Date constructor varies across
// browsers. (In the future, this could be made more liberal if desired, though
// it is still generally preferable to do date parsing yourself explicitly,
// rather than rely on Plot.) Any non-string values are coerced to number first
// and treated as milliseconds since UNIX epoch.
function coerceDate(x) {
  return x instanceof Date && !isNaN(x)
    ? x
    : typeof x === "string"
    ? parse(x)
    : x == null || isNaN((x = +x))
    ? undefined
    : new Date(x);
}

// Some channels may allow a string constant to be specified; to differentiate
// string constants (e.g., "red") from named fields (e.g., "date"), this
// function tests whether the given value is a CSS color string and returns a
// tuple [channel, constant] where one of the two is undefined, and the other is
// the given value. If you wish to reference a named field that is also a valid
// CSS color, use an accessor (d => d.red) instead.
function maybeColorChannel(value, defaultValue) {
  if (value === undefined) value = defaultValue;
  return value === null ? [undefined, "none"] : isColor(value) ? [undefined, value] : [value, undefined];
}

// Similar to maybeColorChannel, this tests whether the given value is a number
// indicating a constant, and otherwise assumes that it’s a channel value.
function maybeNumberChannel(value, defaultValue) {
  if (value === undefined) value = defaultValue;
  return value === null || typeof value === "number" ? [undefined, value] : [value, undefined];
}

// Promotes the specified data to an array as needed.
function arrayify(data) {
  return data == null || data instanceof Array || data instanceof TypedArray ? data : Array.from(data);
}

// An optimization of type.from(values, f): if the given values are already an
// instanceof the desired array type, the faster values.map method is used.
function map(values, f, type = Array) {
  return values == null ? values : values instanceof type ? values.map(f) : type.from(values, f);
}

// An optimization of type.from(values): if the given values are already an
// instanceof the desired array type, the faster values.slice method is used.
function slice(values, type = Array) {
  return values instanceof type ? values.slice() : type.from(values);
}

// Disambiguates an options object (e.g., {y: "x2"}) from a primitive value.
function isObject(option) {
  return option?.toString === objectToString;
}

// Disambiguates a scale options object (e.g., {color: {type: "linear"}}) from
// some other option (e.g., {color: "red"}). When creating standalone legends,
// this is used to test whether a scale is defined; this should be consistent
// with inferScaleType when there are no channels associated with the scale, and
// if this returns true, then normalizeScale must return non-null.
function isScaleOptions(option) {
  return isObject(option) && (option.type !== undefined || option.domain !== undefined);
}

// If interval is not nullish, converts interval shorthand such as a number (for
// multiples) or a time interval name (such as “day”) to a {floor, offset,
// range} object similar to a D3 time interval.
function maybeInterval(interval, type) {
  if (interval == null) return;
  if (typeof interval === "number") {
    if (0 < interval && interval < 1 && Number.isInteger(1 / interval)) interval = -1 / interval;
    const n = Math.abs(interval);
    return interval < 0
      ? {
          floor: (d) => Math.floor(d * n) / n,
          offset: (d) => (d * n + 1) / n, // note: no optional step for simplicity
          range: (lo, hi) => range(Math.ceil(lo * n), hi * n).map((x) => x / n)
        }
      : {
          floor: (d) => Math.floor(d / n) * n,
          offset: (d) => d + n, // note: no optional step for simplicity
          range: (lo, hi) => range(Math.ceil(lo / n), hi / n).map((x) => x * n)
        };
  }
  if (typeof interval === "string") return (type === "time" ? maybeTimeInterval : maybeUtcInterval)(interval);
  if (typeof interval.floor !== "function") throw new Error("invalid interval; missing floor method");
  if (typeof interval.offset !== "function") throw new Error("invalid interval; missing offset method");
  return interval;
}

// Like maybeInterval, but requires a range method too.
function maybeRangeInterval(interval, type) {
  interval = maybeInterval(interval, type);
  if (interval && typeof interval.range !== "function") throw new Error("invalid interval: missing range method");
  return interval;
}

// Like maybeRangeInterval, but requires a ceil method too.
function maybeNiceInterval(interval, type) {
  interval = maybeRangeInterval(interval, type);
  if (interval && typeof interval.ceil !== "function") throw new Error("invalid interval: missing ceil method");
  return interval;
}

function isOrdinal(values) {
  for (const value of values) {
    if (value == null) continue;
    const type = typeof value;
    return type === "string" || type === "boolean";
  }
}

function isTemporal(values) {
  for (const value of values) {
    if (value == null) continue;
    return value instanceof Date;
  }
}

// Are these strings that might represent dates? This is stricter than ISO 8601
// because we want to ignore false positives on numbers; for example, the string
// "1192" is more likely to represent a number than a date even though it is
// valid ISO 8601 representing 1192-01-01.
function isTemporalString(values) {
  for (const value of values) {
    if (value == null) continue;
    return typeof value === "string" && isNaN(value) && parse(value);
  }
}

// Are these strings that might represent numbers? This is stricter than
// coercion because we want to ignore false positives on e.g. empty strings.
function isNumericString(values) {
  for (const value of values) {
    if (value == null) continue;
    if (typeof value !== "string") return false;
    if (!value.trim()) continue;
    return !isNaN(value);
  }
}

// Mostly relies on d3-color, with a few extra color keywords. Currently this
// strictly requires that the value be a string; we might want to apply string
// coercion here, though note that d3-color instances would need to support
// valueOf to work correctly with InternMap.
// https://www.w3.org/TR/SVG11/painting.html#SpecifyingPaint
function isColor(value) {
  if (typeof value !== "string") return false;
  value = value.toLowerCase().trim();
  return (
    value === "none" ||
    value === "currentcolor" ||
    (value.startsWith("url(") && value.endsWith(")")) || // <funciri>, e.g. pattern or gradient
    (value.startsWith("var(") && value.endsWith(")")) || // CSS variable
    color$1(value) !== null
  );
}

function isNoneish(value) {
  return value == null || isNone(value);
}

function isNone(value) {
  return /^\s*none\s*$/i.test(value);
}

// Like a sort comparator, returns a positive value if the given array of values
// is in ascending order, a negative value if the values are in descending
// order. Assumes monotonicity; only tests the first and last values.
function orderof(values) {
  if (values == null) return;
  const first = values[0];
  const last = values[values.length - 1];
  return descending(first, last);
}

// Unlike {...defaults, ...options}, this ensures that any undefined (but
// present) properties in options inherit the given default value.
function inherit(options = {}, ...rest) {
  let o = options;
  for (const defaults of rest) {
    for (const key in defaults) {
      if (o[key] === undefined) {
        const value = defaults[key];
        if (o === options) o = {...o, [key]: value};
        else o[key] = value;
      }
    }
  }
  return o;
}

// Positional scales have associated axes, and for ordinal data, a point or band
// scale is used instead of an ordinal scale.
const position = Symbol("position");

// Color scales default to the turbo interpolator for quantitative data, and to
// the Tableau10 scheme for ordinal data. Color scales may also have an
// associated legend.
const color = Symbol("color");

// Radius scales default to the sqrt type, have a default range of [0, 3], and a
// default domain from 0 to the median first quartile of associated channels.
const radius = Symbol("radius");

// Length scales default to the linear type, have a default range of [0, 12],
// and a default domain from 0 to the median median of associated channels.
const length = Symbol("length");

// Opacity scales have a default range of [0, 1], and a default domain from 0 to
// the maximum value of associated channels.
const opacity = Symbol("opacity");

// Symbol scales have a default range of categorical symbols.
const symbol = Symbol("symbol");

// TODO Rather than hard-coding the list of known scale names, collect the names
// and categories for each plot specification, so that custom marks can register
// custom scales.
const registry = new Map([
  ["x", position],
  ["y", position],
  ["fx", position],
  ["fy", position],
  ["r", radius],
  ["color", color],
  ["opacity", opacity],
  ["symbol", symbol],
  ["length", length]
]);

const sqrt3 = Math.sqrt(3);
const sqrt4_3 = 2 / sqrt3;

const symbolHexagon = {
  draw(context, size) {
    const rx = Math.sqrt(size / Math.PI),
      ry = rx * sqrt4_3,
      hy = ry / 2;
    context.moveTo(0, ry);
    context.lineTo(rx, hy);
    context.lineTo(rx, -hy);
    context.lineTo(0, -ry);
    context.lineTo(-rx, -hy);
    context.lineTo(-rx, hy);
    context.closePath();
  }
};

const symbols = new Map([
  ["asterisk", symbolAsterisk],
  ["circle", symbolCircle],
  ["cross", symbolCross],
  ["diamond", symbolDiamond],
  ["diamond2", symbolDiamond2],
  ["hexagon", symbolHexagon],
  ["plus", symbolPlus],
  ["square", symbolSquare],
  ["square2", symbolSquare2],
  ["star", symbolStar],
  ["times", symbolTimes],
  ["triangle", symbolTriangle],
  ["triangle2", symbolTriangle2],
  ["wye", symbolWye]
]);

function isSymbolObject(value) {
  return value && typeof value.draw === "function";
}

function maybeSymbol(symbol) {
  if (symbol == null || isSymbolObject(symbol)) return symbol;
  const value = symbols.get(`${symbol}`.toLowerCase());
  if (value) return value;
  throw new Error(`invalid symbol: ${symbol}`);
}

function warn(message) {
  console.warn(message);
}

const pi = Math.PI;
const tau = 2 * pi;

function createProjection(
  {
    projection,
    inset: globalInset = 0,
    insetTop = globalInset,
    insetRight = globalInset,
    insetBottom = globalInset,
    insetLeft = globalInset
  } = {},
  dimensions
) {
  if (projection == null) return;
  if (typeof projection.stream === "function") return projection; // d3 projection
  let options;
  let domain;
  let clip = "frame";

  // If the projection was specified as an object with additional options,
  // extract those. The order of precedence for insetTop (and other insets) is:
  // projection.insetTop, projection.inset, (global) insetTop, (global) inset.
  // Any other options on this object will be passed through to the initializer.
  if (isObject(projection)) {
    let inset;
    ({
      type: projection,
      domain,
      inset,
      insetTop = inset !== undefined ? inset : insetTop,
      insetRight = inset !== undefined ? inset : insetRight,
      insetBottom = inset !== undefined ? inset : insetBottom,
      insetLeft = inset !== undefined ? inset : insetLeft,
      clip = clip,
      ...options
    } = projection);
    if (projection == null) return;
  }

  // For named projections, retrieve the corresponding projection initializer.
  if (typeof projection !== "function") ({type: projection} = namedProjection(projection));

  // Compute the frame dimensions and invoke the projection initializer.
  const {width, height, marginLeft, marginRight, marginTop, marginBottom} = dimensions;
  const dx = width - marginLeft - marginRight - insetLeft - insetRight;
  const dy = height - marginTop - marginBottom - insetTop - insetBottom;
  projection = projection?.({width: dx, height: dy, clip, ...options});

  // The projection initializer might decide to not use a projection.
  if (projection == null) return;
  clip = maybePostClip(clip, marginLeft, marginTop, width - marginRight, height - marginBottom);

  // Translate the origin to the top-left corner, respecting margins and insets.
  let tx = marginLeft + insetLeft;
  let ty = marginTop + insetTop;
  let transform;

  // If a domain is specified, fit the projection to the frame.
  if (domain != null) {
    const [[x0, y0], [x1, y1]] = geoPath(projection).bounds(domain);
    const k = Math.min(dx / (x1 - x0), dy / (y1 - y0));
    if (k > 0) {
      tx -= (k * (x0 + x1) - dx) / 2;
      ty -= (k * (y0 + y1) - dy) / 2;
      transform = geoTransform({
        point(x, y) {
          this.stream.point(x * k + tx, y * k + ty);
        }
      });
    } else {
      warn(`Warning: the projection could not be fit to the specified domain; using the default scale.`);
    }
  }

  transform ??=
    tx === 0 && ty === 0
      ? identity()
      : geoTransform({
          point(x, y) {
            this.stream.point(x + tx, y + ty);
          }
        });

  return {stream: (s) => projection.stream(transform.stream(clip(s)))};
}

function namedProjection(projection) {
  switch (`${projection}`.toLowerCase()) {
    case "albers-usa":
      return scaleProjection(geoAlbersUsa, 0.7463, 0.4673);
    case "albers":
      return conicProjection(geoAlbers, 0.7463, 0.4673);
    case "azimuthal-equal-area":
      return scaleProjection(geoAzimuthalEqualArea, 4, 4);
    case "azimuthal-equidistant":
      return scaleProjection(geoAzimuthalEquidistant, tau, tau);
    case "conic-conformal":
      return conicProjection(geoConicConformal, tau, tau);
    case "conic-equal-area":
      return conicProjection(geoConicEqualArea, 6.1702, 2.9781);
    case "conic-equidistant":
      return conicProjection(geoConicEquidistant, 7.312, 3.6282);
    case "equal-earth":
      return scaleProjection(geoEqualEarth, 5.4133, 2.6347);
    case "equirectangular":
      return scaleProjection(geoEquirectangular, tau, pi);
    case "gnomonic":
      return scaleProjection(geoGnomonic, 3.4641, 3.4641);
    case "identity":
      return {type: identity};
    case "reflect-y":
      return {type: reflectY};
    case "mercator":
      return scaleProjection(geoMercator, tau, tau);
    case "orthographic":
      return scaleProjection(geoOrthographic, 2, 2);
    case "stereographic":
      return scaleProjection(geoStereographic, 2, 2);
    case "transverse-mercator":
      return scaleProjection(geoTransverseMercator, tau, tau);
    default:
      throw new Error(`unknown projection type: ${projection}`);
  }
}

function maybePostClip(clip, x1, y1, x2, y2) {
  if (clip === false || clip == null || typeof clip === "number") return (s) => s;
  if (clip === true) clip = "frame";
  switch (`${clip}`.toLowerCase()) {
    case "frame":
      return geoClipRectangle(x1, y1, x2, y2);
    default:
      throw new Error(`unknown projection clip type: ${clip}`);
  }
}

function scaleProjection(createProjection, kx, ky) {
  return {
    type: ({width, height, rotate, precision = 0.15, clip}) => {
      const projection = createProjection();
      if (precision != null) projection.precision?.(precision);
      if (rotate != null) projection.rotate?.(rotate);
      if (typeof clip === "number") projection.clipAngle?.(clip);
      projection.scale(Math.min(width / kx, height / ky));
      projection.translate([width / 2, height / 2]);
      return projection;
    },
    aspectRatio: ky / kx
  };
}

function conicProjection(createProjection, kx, ky) {
  const {type, aspectRatio} = scaleProjection(createProjection, kx, ky);
  return {
    type: (options) => {
      const {parallels, domain, width, height} = options;
      const projection = type(options);
      if (parallels != null) {
        projection.parallels(parallels);
        if (domain === undefined) {
          projection.fitSize([width, height], {type: "Sphere"});
        }
      }
      return projection;
    },
    aspectRatio
  };
}

const identity = constant({stream: (stream) => stream});

const reflectY = constant(
  geoTransform({
    point(x, y) {
      this.stream.point(x, -y);
    }
  })
);

function createContext(options = {}, dimensions, className) {
  const {document = typeof window !== "undefined" ? window.document : undefined} = options;
  return {document, className, projection: createProjection(options, dimensions)};
}

function create(name, {document}) {
  return select(creator(name).call(document.documentElement));
}

const ordinalSchemes = new Map([
  // categorical
  ["accent", schemeAccent],
  ["category10", schemeCategory10],
  ["dark2", schemeDark2],
  ["paired", schemePaired],
  ["pastel1", schemePastel1],
  ["pastel2", schemePastel2],
  ["set1", schemeSet1],
  ["set2", schemeSet2],
  ["set3", schemeSet3],
  ["tableau10", schemeTableau10],

  // diverging
  ["brbg", scheme11(schemeBrBG, interpolateBrBG)],
  ["prgn", scheme11(schemePRGn, interpolatePRGn)],
  ["piyg", scheme11(schemePiYG, interpolatePiYG)],
  ["puor", scheme11(schemePuOr, interpolatePuOr)],
  ["rdbu", scheme11(schemeRdBu, interpolateRdBu)],
  ["rdgy", scheme11(schemeRdGy, interpolateRdGy)],
  ["rdylbu", scheme11(schemeRdYlBu, interpolateRdYlBu)],
  ["rdylgn", scheme11(schemeRdYlGn, interpolateRdYlGn)],
  ["spectral", scheme11(schemeSpectral, interpolateSpectral)],

  // reversed diverging (for temperature data)
  ["burd", scheme11r(schemeRdBu, interpolateRdBu)],
  ["buylrd", scheme11r(schemeRdYlBu, interpolateRdYlBu)],

  // sequential (single-hue)
  ["blues", scheme9(schemeBlues, interpolateBlues)],
  ["greens", scheme9(schemeGreens, interpolateGreens)],
  ["greys", scheme9(schemeGreys, interpolateGreys)],
  ["oranges", scheme9(schemeOranges, interpolateOranges)],
  ["purples", scheme9(schemePurples, interpolatePurples)],
  ["reds", scheme9(schemeReds, interpolateReds)],

  // sequential (multi-hue)
  ["turbo", schemei(interpolateTurbo)],
  ["viridis", schemei(interpolateViridis)],
  ["magma", schemei(interpolateMagma)],
  ["inferno", schemei(interpolateInferno)],
  ["plasma", schemei(interpolatePlasma)],
  ["cividis", schemei(interpolateCividis)],
  ["cubehelix", schemei(interpolateCubehelixDefault)],
  ["warm", schemei(interpolateWarm)],
  ["cool", schemei(interpolateCool)],
  ["bugn", scheme9(schemeBuGn, interpolateBuGn)],
  ["bupu", scheme9(schemeBuPu, interpolateBuPu)],
  ["gnbu", scheme9(schemeGnBu, interpolateGnBu)],
  ["orrd", scheme9(schemeOrRd, interpolateOrRd)],
  ["pubu", scheme9(schemePuBu, interpolatePuBu)],
  ["pubugn", scheme9(schemePuBuGn, interpolatePuBuGn)],
  ["purd", scheme9(schemePuRd, interpolatePuRd)],
  ["rdpu", scheme9(schemeRdPu, interpolateRdPu)],
  ["ylgn", scheme9(schemeYlGn, interpolateYlGn)],
  ["ylgnbu", scheme9(schemeYlGnBu, interpolateYlGnBu)],
  ["ylorbr", scheme9(schemeYlOrBr, interpolateYlOrBr)],
  ["ylorrd", scheme9(schemeYlOrRd, interpolateYlOrRd)],

  // cyclical
  ["rainbow", schemeicyclical(interpolateRainbow)],
  ["sinebow", schemeicyclical(interpolateSinebow)]
]);

function scheme9(scheme, interpolate) {
  return ({length: n}) => {
    if (n === 1) return [scheme[3][1]]; // favor midpoint
    if (n === 2) return [scheme[3][1], scheme[3][2]]; // favor darker
    n = Math.max(3, Math.floor(n));
    return n > 9 ? quantize(interpolate, n) : scheme[n];
  };
}

function scheme11(scheme, interpolate) {
  return ({length: n}) => {
    if (n === 2) return [scheme[3][0], scheme[3][2]]; // favor diverging extrema
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize(interpolate, n) : scheme[n];
  };
}

function scheme11r(scheme, interpolate) {
  return ({length: n}) => {
    if (n === 2) return [scheme[3][2], scheme[3][0]]; // favor diverging extrema
    n = Math.max(3, Math.floor(n));
    return n > 11 ? quantize((t) => interpolate(1 - t), n) : scheme[n].slice().reverse();
  };
}

function schemei(interpolate) {
  return ({length: n}) => quantize(interpolate, Math.max(2, Math.floor(n)));
}

function schemeicyclical(interpolate) {
  return ({length: n}) => quantize(interpolate, Math.floor(n) + 1).slice(0, -1);
}

function ordinalScheme(scheme) {
  const s = `${scheme}`.toLowerCase();
  if (!ordinalSchemes.has(s)) throw new Error(`unknown ordinal scheme: ${s}`);
  return ordinalSchemes.get(s);
}

function ordinalRange(scheme, length) {
  const s = ordinalScheme(scheme);
  const r = typeof s === "function" ? s({length}) : s;
  return r.length !== length ? r.slice(0, length) : r;
}

// If the specified domain contains only booleans (ignoring null and undefined),
// returns a corresponding range where false is mapped to the low color and true
// is mapped to the high color of the specified scheme.
function maybeBooleanRange(domain, scheme = "greys") {
  const range = new Set();
  const [f, t] = ordinalRange(scheme, 2);
  for (const value of domain) {
    if (value == null) continue;
    if (value === true) range.add(t);
    else if (value === false) range.add(f);
    else return;
  }
  return [...range];
}

const quantitativeSchemes = new Map([
  // diverging
  ["brbg", interpolateBrBG],
  ["prgn", interpolatePRGn],
  ["piyg", interpolatePiYG],
  ["puor", interpolatePuOr],
  ["rdbu", interpolateRdBu],
  ["rdgy", interpolateRdGy],
  ["rdylbu", interpolateRdYlBu],
  ["rdylgn", interpolateRdYlGn],
  ["spectral", interpolateSpectral],

  // reversed diverging (for temperature data)
  ["burd", (t) => interpolateRdBu(1 - t)],
  ["buylrd", (t) => interpolateRdYlBu(1 - t)],

  // sequential (single-hue)
  ["blues", interpolateBlues],
  ["greens", interpolateGreens],
  ["greys", interpolateGreys],
  ["purples", interpolatePurples],
  ["reds", interpolateReds],
  ["oranges", interpolateOranges],

  // sequential (multi-hue)
  ["turbo", interpolateTurbo],
  ["viridis", interpolateViridis],
  ["magma", interpolateMagma],
  ["inferno", interpolateInferno],
  ["plasma", interpolatePlasma],
  ["cividis", interpolateCividis],
  ["cubehelix", interpolateCubehelixDefault],
  ["warm", interpolateWarm],
  ["cool", interpolateCool],
  ["bugn", interpolateBuGn],
  ["bupu", interpolateBuPu],
  ["gnbu", interpolateGnBu],
  ["orrd", interpolateOrRd],
  ["pubugn", interpolatePuBuGn],
  ["pubu", interpolatePuBu],
  ["purd", interpolatePuRd],
  ["rdpu", interpolateRdPu],
  ["ylgnbu", interpolateYlGnBu],
  ["ylgn", interpolateYlGn],
  ["ylorbr", interpolateYlOrBr],
  ["ylorrd", interpolateYlOrRd],

  // cyclical
  ["rainbow", interpolateRainbow],
  ["sinebow", interpolateSinebow]
]);

function quantitativeScheme(scheme) {
  const s = `${scheme}`.toLowerCase();
  if (!quantitativeSchemes.has(s)) throw new Error(`unknown quantitative scheme: ${s}`);
  return quantitativeSchemes.get(s);
}

const divergingSchemes = new Set([
  "brbg",
  "prgn",
  "piyg",
  "puor",
  "rdbu",
  "rdgy",
  "rdylbu",
  "rdylgn",
  "spectral",
  "burd",
  "buylrd"
]);

function isDivergingScheme(scheme) {
  return scheme != null && divergingSchemes.has(`${scheme}`.toLowerCase());
}

const flip = (i) => (t) => i(1 - t);
const unit = [0, 1];

const interpolators = new Map([
  // numbers
  ["number", interpolateNumber],

  // color spaces
  ["rgb", interpolateRgb],
  ["hsl", interpolateHsl],
  ["hcl", interpolateHcl],
  ["lab", interpolateLab]
]);

function maybeInterpolator(interpolate) {
  const i = `${interpolate}`.toLowerCase();
  if (!interpolators.has(i)) throw new Error(`unknown interpolator: ${i}`);
  return interpolators.get(i);
}

function createScaleQ(
  key,
  scale,
  channels,
  {
    type,
    nice,
    clamp,
    zero,
    domain = inferAutoDomain(key, channels),
    unknown,
    round,
    scheme,
    interval,
    range = registry.get(key) === radius
      ? inferRadialRange(channels, domain)
      : registry.get(key) === length
      ? inferLengthRange(channels, domain)
      : registry.get(key) === opacity
      ? unit
      : undefined,
    interpolate = registry.get(key) === color
      ? scheme == null && range !== undefined
        ? interpolateRgb
        : quantitativeScheme(scheme !== undefined ? scheme : type === "cyclical" ? "rainbow" : "turbo")
      : round
      ? interpolateRound
      : interpolateNumber,
    reverse: reverse$1
  }
) {
  interval = maybeRangeInterval(interval, type);
  if (type === "cyclical" || type === "sequential") type = "linear"; // shorthand for color schemes
  reverse$1 = !!reverse$1;

  // Sometimes interpolate is a named interpolator, such as "lab" for Lab color
  // space. Other times interpolate is a function that takes two arguments and
  // is used in conjunction with the range. And other times the interpolate
  // function is a “fixed” interpolator on the [0, 1] interval, as when a
  // color scheme such as interpolateRdBu is used.
  if (typeof interpolate !== "function") {
    interpolate = maybeInterpolator(interpolate);
  }
  if (interpolate.length === 1) {
    if (reverse$1) {
      interpolate = flip(interpolate);
      reverse$1 = false;
    }
    if (range === undefined) {
      range = Float64Array.from(domain, (_, i) => i / (domain.length - 1));
      if (range.length === 2) range = unit; // optimize common case of [0, 1]
    }
    scale.interpolate((range === unit ? constant : interpolatePiecewise)(interpolate));
  } else {
    scale.interpolate(interpolate);
  }

  // If a zero option is specified, we assume that the domain is numeric, and we
  // want to ensure that the domain crosses zero. However, note that the domain
  // may be reversed (descending) so we shouldn’t assume that the first value is
  // smaller than the last; and also it’s possible that the domain has more than
  // two values for a “poly” scale. And lastly be careful not to mutate input!
  if (zero) {
    const [min, max] = extent(domain);
    if (min > 0 || max < 0) {
      domain = slice(domain);
      if (orderof(domain) !== Math.sign(min)) domain[domain.length - 1] = 0;
      // [2, 1] or [-2, -1]
      else domain[0] = 0; // [1, 2] or [-1, -2]
    }
  }

  if (reverse$1) domain = reverse(domain);
  scale.domain(domain).unknown(unknown);
  if (nice) scale.nice(maybeNice(nice, type)), (domain = scale.domain());
  if (range !== undefined) scale.range(range);
  if (clamp) scale.clamp(clamp);
  return {type, domain, range, scale, interpolate, interval};
}

function maybeNice(nice, type) {
  return nice === true ? undefined : typeof nice === "number" ? nice : maybeNiceInterval(nice, type);
}

function createScaleLinear(key, channels, options) {
  return createScaleQ(key, scaleLinear(), channels, options);
}

function createScaleSqrt(key, channels, options) {
  return createScalePow(key, channels, {...options, exponent: 0.5});
}

function createScalePow(key, channels, {exponent = 1, ...options}) {
  return createScaleQ(key, scalePow().exponent(exponent), channels, {...options, type: "pow"});
}

function createScaleLog(key, channels, {base = 10, domain = inferLogDomain(channels), ...options}) {
  return createScaleQ(key, scaleLog().base(base), channels, {...options, domain});
}

function createScaleSymlog(key, channels, {constant = 1, ...options}) {
  return createScaleQ(key, scaleSymlog().constant(constant), channels, options);
}

function createScaleQuantile(
  key,
  channels,
  {
    range,
    quantiles = range === undefined ? 5 : (range = [...range]).length, // deprecated; use n instead
    n = quantiles,
    scheme = "rdylbu",
    domain = inferQuantileDomain(channels),
    unknown,
    interpolate,
    reverse
  }
) {
  if (range === undefined) {
    range =
      interpolate !== undefined
        ? quantize(interpolate, n)
        : registry.get(key) === color
        ? ordinalRange(scheme, n)
        : undefined;
  }
  if (domain.length > 0) {
    domain = scaleQuantile(domain, range === undefined ? {length: n} : range).quantiles();
  }
  return createScaleThreshold(key, channels, {domain, range, reverse, unknown});
}

function createScaleQuantize(
  key,
  channels,
  {
    range,
    n = range === undefined ? 5 : (range = [...range]).length,
    scheme = "rdylbu",
    domain = inferAutoDomain(key, channels),
    unknown,
    interpolate,
    reverse
  }
) {
  const [min, max] = extent(domain);
  let thresholds;
  if (range === undefined) {
    thresholds = ticks(min, max, n); // approximate number of nice, round thresholds
    if (thresholds[0] <= min) thresholds.splice(0, 1); // drop exact lower bound
    if (thresholds[thresholds.length - 1] >= max) thresholds.pop(); // drop exact upper bound
    n = thresholds.length + 1;
    range =
      interpolate !== undefined
        ? quantize(interpolate, n)
        : registry.get(key) === color
        ? ordinalRange(scheme, n)
        : undefined;
  } else {
    thresholds = quantize(interpolateNumber(min, max), n + 1).slice(1, -1); // exactly n - 1 thresholds to match range
    if (min instanceof Date) thresholds = thresholds.map((x) => new Date(x)); // preserve date types
  }
  if (orderof(arrayify(domain)) < 0) thresholds.reverse(); // preserve descending domain
  return createScaleThreshold(key, channels, {domain: thresholds, range, reverse, unknown});
}

function createScaleThreshold(
  key,
  channels,
  {
    domain = [0], // explicit thresholds in ascending order
    unknown,
    scheme = "rdylbu",
    interpolate,
    range = interpolate !== undefined
      ? quantize(interpolate, domain.length + 1)
      : registry.get(key) === color
      ? ordinalRange(scheme, domain.length + 1)
      : undefined,
    reverse: reverse$1
  }
) {
  domain = arrayify(domain);
  const sign = orderof(domain); // preserve descending domain
  if (!isNaN(sign) && !isOrdered(domain, sign)) throw new Error(`the ${key} scale has a non-monotonic domain`);
  if (reverse$1) range = reverse(range); // domain ascending, so reverse range
  return {
    type: "threshold",
    scale: scaleThreshold(sign < 0 ? reverse(domain) : domain, range === undefined ? [] : range).unknown(unknown),
    domain,
    range
  };
}

function isOrdered(domain, sign) {
  for (let i = 1, n = domain.length, d = domain[0]; i < n; ++i) {
    const s = descending(d, (d = domain[i]));
    if (s !== 0 && s !== sign) return false;
  }
  return true;
}

function createScaleIdentity() {
  return {type: "identity", scale: scaleIdentity()};
}

function inferDomain$1(channels, f = finite) {
  return channels.length
    ? [
        min$2(channels, ({value}) => (value === undefined ? value : min$2(value, f))),
        max$1(channels, ({value}) => (value === undefined ? value : max$1(value, f)))
      ]
    : [0, 1];
}

function inferAutoDomain(key, channels) {
  const type = registry.get(key);
  return (type === radius || type === opacity || type === length ? inferZeroDomain : inferDomain$1)(channels);
}

function inferZeroDomain(channels) {
  return [0, channels.length ? max$1(channels, ({value}) => (value === undefined ? value : max$1(value, finite))) : 1];
}

// We don’t want the upper bound of the radial domain to be zero, as this would
// be degenerate, so we ignore nonpositive values. We also don’t want the
// maximum default radius to exceed 30px.
function inferRadialRange(channels, domain) {
  const hint = channels.find(({radius}) => radius !== undefined);
  if (hint !== undefined) return [0, hint.radius]; // a natural maximum radius, e.g. hexbins
  const h25 = quantile(channels, 0.5, ({value}) => (value === undefined ? NaN : quantile(value, 0.25, positive)));
  const range = domain.map((d) => 3 * Math.sqrt(d / h25));
  const k = 30 / max$1(range);
  return k < 1 ? range.map((r) => r * k) : range;
}

// We want a length scale’s domain to go from zero to a positive value, and to
// treat negative lengths if any as inverted vectors of equivalent magnitude. We
// also don’t want the maximum default length to exceed 60px.
function inferLengthRange(channels, domain) {
  const h50 = median(channels, ({value}) => (value === undefined ? NaN : median(value, Math.abs)));
  const range = domain.map((d) => (12 * d) / h50);
  const k = 60 / max$1(range);
  return k < 1 ? range.map((r) => r * k) : range;
}

function inferLogDomain(channels) {
  for (const {value} of channels) {
    if (value !== undefined) {
      for (let v of value) {
        if (v > 0) return inferDomain$1(channels, positive);
        if (v < 0) return inferDomain$1(channels, negative);
      }
    }
  }
  return [1, 10];
}

function inferQuantileDomain(channels) {
  const domain = [];
  for (const {value} of channels) {
    if (value === undefined) continue;
    for (const v of value) domain.push(v);
  }
  return domain;
}

function interpolatePiecewise(interpolate) {
  return (i, j) => (t) => interpolate(i + t * (j - i));
}

function createScaleD(
  key,
  scale,
  transform,
  channels,
  {
    type,
    nice,
    clamp,
    domain = inferDomain$1(channels),
    unknown,
    pivot = 0,
    scheme,
    range,
    symmetric = true,
    interpolate = registry.get(key) === color
      ? scheme == null && range !== undefined
        ? interpolateRgb
        : quantitativeScheme(scheme !== undefined ? scheme : "rdbu")
      : interpolateNumber,
    reverse
  }
) {
  pivot = +pivot;
  let [min, max] = domain;
  if (descending(min, max) < 0) ([min, max] = [max, min]), (reverse = !reverse);
  min = Math.min(min, pivot);
  max = Math.max(max, pivot);

  // Sometimes interpolate is a named interpolator, such as "lab" for Lab color
  // space. Other times interpolate is a function that takes two arguments and
  // is used in conjunction with the range. And other times the interpolate
  // function is a “fixed” interpolator on the [0, 1] interval, as when a
  // color scheme such as interpolateRdBu is used.
  if (typeof interpolate !== "function") {
    interpolate = maybeInterpolator(interpolate);
  }

  // If an explicit range is specified, promote it to a piecewise interpolator.
  if (range !== undefined) {
    interpolate =
      interpolate.length === 1 ? interpolatePiecewise(interpolate)(...range) : piecewise(interpolate, range);
  }

  // Reverse before normalization.
  if (reverse) interpolate = flip(interpolate);

  // Normalize the interpolator for symmetric difference around the pivot.
  if (symmetric) {
    const mid = transform.apply(pivot);
    const mindelta = mid - transform.apply(min);
    const maxdelta = transform.apply(max) - mid;
    if (mindelta < maxdelta) min = transform.invert(mid - maxdelta);
    else if (mindelta > maxdelta) max = transform.invert(mid + mindelta);
  }

  scale.domain([min, pivot, max]).unknown(unknown).interpolator(interpolate);
  if (clamp) scale.clamp(clamp);
  if (nice) scale.nice(nice);
  return {type, domain: [min, max], pivot, interpolate, scale};
}

function createScaleDiverging(key, channels, options) {
  return createScaleD(key, scaleDiverging(), transformIdentity, channels, options);
}

function createScaleDivergingSqrt(key, channels, options) {
  return createScaleDivergingPow(key, channels, {...options, exponent: 0.5});
}

function createScaleDivergingPow(key, channels, {exponent = 1, ...options}) {
  return createScaleD(key, scaleDivergingPow().exponent((exponent = +exponent)), transformPow(exponent), channels, {
    ...options,
    type: "diverging-pow"
  });
}

function createScaleDivergingLog(
  key,
  channels,
  {base = 10, pivot = 1, domain = inferDomain$1(channels, pivot < 0 ? negative : positive), ...options}
) {
  return createScaleD(key, scaleDivergingLog().base((base = +base)), transformLog, channels, {
    domain,
    pivot,
    ...options
  });
}

function createScaleDivergingSymlog(key, channels, {constant = 1, ...options}) {
  return createScaleD(
    key,
    scaleDivergingSymlog().constant((constant = +constant)),
    transformSymlog(constant),
    channels,
    options
  );
}

const transformIdentity = {
  apply(x) {
    return x;
  },
  invert(x) {
    return x;
  }
};

const transformLog = {
  apply: Math.log,
  invert: Math.exp
};

const transformSqrt = {
  apply(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
  },
  invert(x) {
    return Math.sign(x) * (x * x);
  }
};

function transformPow(exponent) {
  return exponent === 0.5
    ? transformSqrt
    : {
        apply(x) {
          return Math.sign(x) * Math.pow(Math.abs(x), exponent);
        },
        invert(x) {
          return Math.sign(x) * Math.pow(Math.abs(x), 1 / exponent);
        }
      };
}

function transformSymlog(constant) {
  return {
    apply(x) {
      return Math.sign(x) * Math.log1p(Math.abs(x / constant));
    },
    invert(x) {
      return Math.sign(x) * Math.expm1(Math.abs(x)) * constant;
    }
  };
}

function createScaleT(key, scale, channels, options) {
  return createScaleQ(key, scale, channels, options);
}

function createScaleTime(key, channels, options) {
  return createScaleT(key, scaleTime(), channels, options);
}

function createScaleUtc(key, channels, options) {
  return createScaleT(key, scaleUtc(), channels, options);
}

// This denotes an implicitly ordinal color scale: the scale type was not set,
// but the associated values are strings or booleans. If the associated defined
// values are entirely boolean, the range will default to greys. You can opt out
// of this by setting the type explicitly.
const ordinalImplicit = Symbol("ordinal");

function createScaleO(key, scale, channels, {type, interval, domain, range, reverse: reverse$1, hint}) {
  interval = maybeRangeInterval(interval, type);
  if (domain === undefined) domain = inferDomain(channels, interval, key);
  if (type === "categorical" || type === ordinalImplicit) type = "ordinal"; // shorthand for color schemes
  if (reverse$1) domain = reverse(domain);
  scale.domain(domain);
  if (range !== undefined) {
    // If the range is specified as a function, pass it the domain.
    if (typeof range === "function") range = range(domain);
    scale.range(range);
  }
  return {type, domain, range, scale, hint, interval};
}

function createScaleOrdinal(key, channels, {type, interval, domain, range, scheme, unknown, ...options}) {
  interval = maybeRangeInterval(interval, type);
  if (domain === undefined) domain = inferDomain(channels, interval, key);
  let hint;
  if (registry.get(key) === symbol) {
    hint = inferSymbolHint(channels);
    range = range === undefined ? inferSymbolRange(hint) : map(range, maybeSymbol);
  } else if (registry.get(key) === color) {
    if (range === undefined && (type === "ordinal" || type === ordinalImplicit)) {
      range = maybeBooleanRange(domain, scheme);
      if (range !== undefined) scheme = undefined; // Don’t re-apply scheme.
    }
    if (scheme === undefined && range === undefined) {
      scheme = type === "ordinal" ? "turbo" : "tableau10";
    }
    if (scheme !== undefined) {
      if (range !== undefined) {
        const interpolate = quantitativeScheme(scheme);
        const t0 = range[0],
          d = range[1] - range[0];
        range = ({length: n}) => quantize((t) => interpolate(t0 + d * t), n);
      } else {
        range = ordinalScheme(scheme);
      }
    }
  }
  if (unknown === scaleImplicit) {
    throw new Error(`implicit unknown on ${key} scale is not supported`);
  }
  return createScaleO(key, scaleOrdinal().unknown(unknown), channels, {...options, type, domain, range, hint});
}

function createScalePoint(key, channels, {align = 0.5, padding = 0.5, ...options}) {
  return maybeRound(scalePoint().align(align).padding(padding), channels, options, key);
}

function createScaleBand(
  key,
  channels,
  {
    align = 0.5,
    padding = 0.1,
    paddingInner = padding,
    paddingOuter = key === "fx" || key === "fy" ? 0 : padding,
    ...options
  }
) {
  return maybeRound(
    scaleBand().align(align).paddingInner(paddingInner).paddingOuter(paddingOuter),
    channels,
    options,
    key
  );
}

function maybeRound(scale, channels, options, key) {
  let {round} = options;
  if (round !== undefined) scale.round((round = !!round));
  scale = createScaleO(key, scale, channels, options);
  scale.round = round; // preserve for autoScaleRound
  return scale;
}

function inferDomain(channels, interval, key) {
  const values = new InternSet();
  for (const {value, domain} of channels) {
    if (domain !== undefined) return domain(); // see channelDomain
    if (value === undefined) continue;
    for (const v of value) values.add(v);
  }
  if (interval !== undefined) {
    const [min, max] = extent(values).map(interval.floor, interval);
    return interval.range(min, interval.offset(max));
  }
  if (values.size > 10e3 && registry.get(key) === position) {
    throw new Error(`implicit ordinal domain of ${key} scale has more than 10,000 values`);
  }
  return sort(values, ascendingDefined);
}

// If all channels provide a consistent hint, propagate it to the scale.
function inferHint(channels, key) {
  let value;
  for (const {hint} of channels) {
    const candidate = hint?.[key];
    if (candidate === undefined) continue; // no hint here
    if (value === undefined) value = candidate;
    // first hint
    else if (value !== candidate) return; // inconsistent hint
  }
  return value;
}

function inferSymbolHint(channels) {
  return {
    fill: inferHint(channels, "fill"),
    stroke: inferHint(channels, "stroke")
  };
}

function inferSymbolRange(hint) {
  return isNoneish(hint.fill) ? symbolsStroke : symbolsFill;
}

function normalizeScale(key, scale, hint) {
  return createScale(key, hint === undefined ? undefined : [{hint}], {...scale});
}

function createScale(key, channels = [], options = {}) {
  const type = inferScaleType(key, channels, options);

  // Warn for common misuses of implicit ordinal scales. We disable this test if
  // you specify a scale interval or if you set the domain or range explicitly,
  // since setting the domain or range (typically with a cardinality of more than
  // two) is another indication that you intended for the scale to be ordinal; we
  // also disable it for facet scales since these are always band scales.
  if (
    options.type === undefined &&
    options.domain === undefined &&
    options.range === undefined &&
    options.interval == null &&
    key !== "fx" &&
    key !== "fy" &&
    isOrdinalScale({type})
  ) {
    const values = channels.map(({value}) => value).filter((value) => value !== undefined);
    if (values.some(isTemporal))
      warn(
        `Warning: some data associated with the ${key} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(
          type
        )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type
        )}".`
      );
    else if (values.some(isTemporalString))
      warn(
        `Warning: some data associated with the ${key} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${formatScaleType(
          type
        )}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type
        )}".`
      );
    else if (values.some(isNumericString))
      warn(
        `Warning: some data associated with the ${key} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${formatScaleType(
          type
        )}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${key} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${key} scale to "${formatScaleType(
          type
        )}".`
      );
  }

  options.type = type; // Mutates input!

  // Once the scale type is known, coerce the associated channel values and any
  // explicitly-specified domain to the expected type.
  switch (type) {
    case "diverging":
    case "diverging-sqrt":
    case "diverging-pow":
    case "diverging-log":
    case "diverging-symlog":
    case "cyclical":
    case "sequential":
    case "linear":
    case "sqrt":
    case "threshold":
    case "quantile":
    case "pow":
    case "log":
    case "symlog":
      options = coerceType(channels, options, coerceNumbers);
      break;
    case "identity":
      switch (registry.get(key)) {
        case position:
          options = coerceType(channels, options, coerceNumbers);
          break;
        case symbol:
          options = coerceType(channels, options, coerceSymbols);
          break;
      }
      break;
    case "utc":
    case "time":
      options = coerceType(channels, options, coerceDates);
      break;
  }

  switch (type) {
    case "diverging":
      return createScaleDiverging(key, channels, options);
    case "diverging-sqrt":
      return createScaleDivergingSqrt(key, channels, options);
    case "diverging-pow":
      return createScaleDivergingPow(key, channels, options);
    case "diverging-log":
      return createScaleDivergingLog(key, channels, options);
    case "diverging-symlog":
      return createScaleDivergingSymlog(key, channels, options);
    case "categorical":
    case "ordinal":
    case ordinalImplicit:
      return createScaleOrdinal(key, channels, options);
    case "cyclical":
    case "sequential":
    case "linear":
      return createScaleLinear(key, channels, options);
    case "sqrt":
      return createScaleSqrt(key, channels, options);
    case "threshold":
      return createScaleThreshold(key, channels, options);
    case "quantile":
      return createScaleQuantile(key, channels, options);
    case "quantize":
      return createScaleQuantize(key, channels, options);
    case "pow":
      return createScalePow(key, channels, options);
    case "log":
      return createScaleLog(key, channels, options);
    case "symlog":
      return createScaleSymlog(key, channels, options);
    case "utc":
      return createScaleUtc(key, channels, options);
    case "time":
      return createScaleTime(key, channels, options);
    case "point":
      return createScalePoint(key, channels, options);
    case "band":
      return createScaleBand(key, channels, options);
    case "identity":
      return registry.get(key) === position ? createScaleIdentity() : {type: "identity"};
    case undefined:
      return;
    default:
      throw new Error(`unknown scale type: ${type}`);
  }
}

function formatScaleType(type) {
  return typeof type === "symbol" ? type.description : type;
}

// A special type symbol when the x and y scales are replaced with a projection.
const typeProjection = {toString: () => "projection"};

function inferScaleType(key, channels, {type, domain, range, scheme, pivot, projection}) {
  // The facet scales are always band scales; this cannot be changed.
  if (key === "fx" || key === "fy") return "band";

  // If a projection is specified, the x- and y-scales are disabled; these
  // channels will be projected rather than scaled. (But still check that none
  // of the associated channels are incompatible with a projection.)
  if ((key === "x" || key === "y") && projection != null) type = typeProjection;

  // If a channel dictates a scale type, make sure that it is consistent with
  // the user-specified scale type (if any) and all other channels. For example,
  // barY requires x to be a band scale and disallows any other scale type.
  for (const {type: t} of channels) {
    if (t === undefined) continue;
    else if (type === undefined) type = t;
    else if (type !== t) throw new Error(`scale incompatible with channel: ${type} !== ${t}`);
  }

  // If the scale, a channel, or user specified a (consistent) type, return it.
  if (type === typeProjection) return;
  if (type !== undefined) return type;

  // If there’s no data (and no type) associated with this scale, don’t create a scale.
  if (domain === undefined && !channels.some(({value}) => value !== undefined)) return;

  // Some scales have default types.
  const kind = registry.get(key);
  if (kind === radius) return "sqrt";
  if (kind === opacity || kind === length) return "linear";
  if (kind === symbol) return "ordinal";

  // If the domain or range has more than two values, assume it’s ordinal. You
  // can still use a “piecewise” (or “polylinear”) scale, but you must set the
  // type explicitly.
  if ((domain || range || []).length > 2) return asOrdinalType(kind);

  // Otherwise, infer the scale type from the data! Prefer the domain, if
  // present, over channels. (The domain and channels should be consistently
  // typed, and the domain is more explicit and typically much smaller.) We only
  // check the first defined value for expedience and simplicity; we expect
  // that the types are consistent.
  if (domain !== undefined) {
    if (isOrdinal(domain)) return asOrdinalType(kind);
    if (isTemporal(domain)) return "utc";
    if (kind === color && (pivot != null || isDivergingScheme(scheme))) return "diverging";
    return "linear";
  }

  // If any channel is ordinal or temporal, it takes priority.
  const values = channels.map(({value}) => value).filter((value) => value !== undefined);
  if (values.some(isOrdinal)) return asOrdinalType(kind);
  if (values.some(isTemporal)) return "utc";
  if (kind === color && (pivot != null || isDivergingScheme(scheme))) return "diverging";
  return "linear";
}

// Positional scales default to a point scale instead of an ordinal scale.
function asOrdinalType(kind) {
  switch (kind) {
    case position:
      return "point";
    case color:
      return ordinalImplicit;
    default:
      return "ordinal";
  }
}

function isOrdinalScale({type}) {
  return type === "ordinal" || type === "point" || type === "band" || type === ordinalImplicit;
}

function isThresholdScale({type}) {
  return type === "threshold";
}

// Mutates channel.value!
function coerceType(channels, {domain, ...options}, coerceValues) {
  for (const c of channels) {
    if (c.value !== undefined) {
      c.value = coerceValues(c.value);
    }
  }
  return {
    domain: domain === undefined ? domain : coerceValues(domain),
    ...options
  };
}

function coerceSymbols(values) {
  return map(values, maybeSymbol);
}

function memoize1(compute) {
  let cacheValue, cacheKeys;
  return (...keys) => {
    if (cacheKeys?.length !== keys.length || cacheKeys.some((k, i) => k !== keys[i])) {
      cacheKeys = keys;
      cacheValue = compute(...keys);
    }
    return cacheValue;
  };
}

const numberFormat = memoize1((locale) => {
  return new Intl.NumberFormat(locale);
});

function formatNumber(locale = "en-US") {
  const format = numberFormat(locale);
  return (i) => (i != null && !isNaN(i) ? format.format(i) : undefined);
}

function formatIsoDate(date) {
  return format(date, "Invalid Date");
}

function formatAuto(locale = "en-US") {
  const number = formatNumber(locale);
  return (v) => (v instanceof Date ? formatIsoDate : typeof v === "number" ? number : string)(v);
}

// TODO When Plot supports a top-level locale option, this should be removed
// because it lacks context to know which locale to use; formatAuto should be
// used instead whenever possible.
formatAuto();

function impliedString(value, impliedValue) {
  if ((value = string(value)) !== impliedValue) return value;
}

// https://www.w3.org/TR/CSS21/grammar.html
const validClassName =
  /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;

function maybeClassName(name) {
  // The default should be changed whenever the default styles are changed, so
  // as to avoid conflict when multiple versions of Plot are on the page.
  if (name === undefined) return "plot-d6a7b5";
  name = `${name}`;
  if (!validClassName.test(name)) throw new Error(`invalid class name: ${name}`);
  return name;
}

function applyInlineStyles(selection, style) {
  if (typeof style === "string") {
    selection.property("style", style);
  } else if (style != null) {
    for (const element of selection) {
      Object.assign(element.style, style);
    }
  }
}

function inferFontVariant(scale) {
  return isOrdinalScale(scale) && scale.interval === undefined ? undefined : "tabular-nums";
}

// D3 doesn’t provide a tick format for ordinal scales; we want shorthand when
// an ordinal domain is numbers or dates, and we want null to mean the empty
// string, not the default identity format. TODO Remove this in favor of the
// axis mark’s inferTickFormat.
function maybeAutoTickFormat(tickFormat, domain) {
  return tickFormat === undefined
    ? isTemporal(domain)
      ? formatIsoDate
      : string
    : typeof tickFormat === "function"
    ? tickFormat
    : (typeof tickFormat === "string" ? (isTemporal(domain) ? utcFormat : format$1) : constant)(tickFormat);
}

function legendRamp(color, options) {
  let {
    label = color.label,
    tickSize = 6,
    width = 240,
    height = 44 + tickSize,
    marginTop = 18,
    marginRight = 0,
    marginBottom = 16 + tickSize,
    marginLeft = 0,
    style,
    ticks = (width - marginLeft - marginRight) / 64,
    tickFormat,
    fontVariant = inferFontVariant(color),
    round = true,
    opacity,
    className
  } = options;
  const context = createContext(options);
  className = maybeClassName(className);
  opacity = maybeNumberChannel(opacity)[1];
  if (tickFormat === null) tickFormat = () => null;

  const svg = create("svg", context)
    .attr("class", `${className}-ramp`)
    .attr("font-family", "system-ui, sans-serif")
    .attr("font-size", 10)
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .call((svg) =>
      // Warning: if you edit this, change defaultClassName.
      svg.append("style").text(
        `.${className}-ramp {
  display: block;
  background: white;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
.${className}-ramp text {
  white-space: pre;
}`
      )
    )
    .call(applyInlineStyles, style);

  let tickAdjust = (g) => g.selectAll(".tick line").attr("y1", marginTop + marginBottom - height);

  let x;

  // Some D3 scales use scale.interpolate, some scale.interpolator, and some
  // scale.round; this normalizes the API so it works with all scale types.
  const applyRange = round ? (x, range) => x.rangeRound(range) : (x, range) => x.range(range);

  const {type, domain, range, interpolate, scale, pivot} = color;

  // Continuous
  if (interpolate) {
    // Often interpolate is a “fixed” interpolator on the [0, 1] interval, as
    // with a built-in color scheme, but sometimes it is a function that takes
    // two arguments and is used in conjunction with the range.
    const interpolator =
      range === undefined
        ? interpolate
        : piecewise(interpolate.length === 1 ? interpolatePiecewise(interpolate) : interpolate, range);

    // Construct a D3 scale of the same type, but with a range that evenly
    // divides the horizontal extent of the legend. (In the common case, the
    // domain.length is two, and so the range is simply the extent.) For a
    // diverging scale, we need an extra point in the range for the pivot such
    // that the pivot is always drawn in the middle.
    x = applyRange(
      scale.copy(),
      quantize(
        interpolateNumber(marginLeft, width - marginRight),
        Math.min(domain.length + (pivot !== undefined), range === undefined ? Infinity : range.length)
      )
    );

    // Construct a 256×1 canvas, filling each pixel using the interpolator.
    const n = 256;
    const canvas = context.document.createElement("canvas");
    canvas.width = n;
    canvas.height = 1;
    const context2 = canvas.getContext("2d");
    for (let i = 0, j = n - 1; i < n; ++i) {
      context2.fillStyle = interpolator(i / j);
      context2.fillRect(i, 0, 1, 1);
    }

    svg
      .append("image")
      .attr("opacity", opacity)
      .attr("x", marginLeft)
      .attr("y", marginTop)
      .attr("width", width - marginLeft - marginRight)
      .attr("height", height - marginTop - marginBottom)
      .attr("preserveAspectRatio", "none")
      .attr("xlink:href", canvas.toDataURL());
  }

  // Threshold
  else if (type === "threshold") {
    const thresholds = domain;

    const thresholdFormat =
      tickFormat === undefined ? (d) => d : typeof tickFormat === "string" ? format$1(tickFormat) : tickFormat;

    // Construct a linear scale with evenly-spaced ticks for each of the
    // thresholds; the domain extends one beyond the threshold extent.
    x = applyRange(scaleLinear().domain([-1, range.length - 1]), [marginLeft, width - marginRight]);

    svg
      .append("g")
      .attr("fill-opacity", opacity)
      .selectAll()
      .data(range)
      .enter()
      .append("rect")
      .attr("x", (d, i) => x(i - 1))
      .attr("y", marginTop)
      .attr("width", (d, i) => x(i) - x(i - 1))
      .attr("height", height - marginTop - marginBottom)
      .attr("fill", (d) => d);

    ticks = map(thresholds, (_, i) => i);
    tickFormat = (i) => thresholdFormat(thresholds[i], i);
  }

  // Ordinal (hopefully!)
  else {
    x = applyRange(scaleBand().domain(domain), [marginLeft, width - marginRight]);

    svg
      .append("g")
      .attr("fill-opacity", opacity)
      .selectAll()
      .data(domain)
      .enter()
      .append("rect")
      .attr("x", x)
      .attr("y", marginTop)
      .attr("width", Math.max(0, x.bandwidth() - 1))
      .attr("height", height - marginTop - marginBottom)
      .attr("fill", scale);

    tickAdjust = () => {};
  }

  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(
      axisBottom(x)
        .ticks(Array.isArray(ticks) ? null : ticks, typeof tickFormat === "string" ? tickFormat : undefined)
        .tickFormat(typeof tickFormat === "function" ? tickFormat : undefined)
        .tickSize(tickSize)
        .tickValues(Array.isArray(ticks) ? ticks : null)
    )
    .attr("font-size", null)
    .attr("font-family", null)
    .attr("font-variant", impliedString(fontVariant, "normal"))
    .call(tickAdjust)
    .call((g) => g.select(".domain").remove());

  if (label !== undefined) {
    svg
      .append("text")
      .attr("x", marginLeft)
      .attr("y", marginTop - 6)
      .attr("fill", "currentColor") // TODO move to stylesheet?
      .attr("font-weight", "bold")
      .text(label);
  }

  return svg.node();
}

function maybeScale(scale, key) {
  if (key == null) return key;
  const s = scale(key);
  if (!s) throw new Error(`scale not found: ${key}`);
  return s;
}

function legendSwatches(color, {opacity, ...options} = {}) {
  if (!isOrdinalScale(color) && !isThresholdScale(color))
    throw new Error(`swatches legend requires ordinal or threshold color scale (not ${color.type})`);
  return legendItems(color, options, (selection, scale, width, height) =>
    selection
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", scale.scale)
      .attr("fill-opacity", maybeNumberChannel(opacity)[1])
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
  );
}

function legendSymbols(
  symbol,
  {
    fill = symbol.hint?.fill !== undefined ? symbol.hint.fill : "none",
    fillOpacity = 1,
    stroke = symbol.hint?.stroke !== undefined ? symbol.hint.stroke : isNoneish(fill) ? "currentColor" : "none",
    strokeOpacity = 1,
    strokeWidth = 1.5,
    r = 4.5,
    ...options
  } = {},
  scale
) {
  const [vf, cf] = maybeColorChannel(fill);
  const [vs, cs] = maybeColorChannel(stroke);
  const sf = maybeScale(scale, vf);
  const ss = maybeScale(scale, vs);
  const size = r * r * Math.PI;
  fillOpacity = maybeNumberChannel(fillOpacity)[1];
  strokeOpacity = maybeNumberChannel(strokeOpacity)[1];
  strokeWidth = maybeNumberChannel(strokeWidth)[1];
  return legendItems(symbol, options, (selection, scale, width, height) =>
    selection
      .append("svg")
      .attr("viewBox", "-8 -8 16 16")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", vf === "color" ? (d) => sf.scale(d) : cf)
      .attr("fill-opacity", fillOpacity)
      .attr("stroke", vs === "color" ? (d) => ss.scale(d) : cs)
      .attr("stroke-opacity", strokeOpacity)
      .attr("stroke-width", strokeWidth)
      .append("path")
      .attr("d", (d) => {
        const p = pathRound();
        symbol.scale(d).draw(p, size);
        return p;
      })
  );
}

function legendItems(scale, options = {}, swatch) {
  let {
    columns,
    tickFormat,
    fontVariant = inferFontVariant(scale),
    // TODO label,
    swatchSize = 15,
    swatchWidth = swatchSize,
    swatchHeight = swatchSize,
    marginLeft = 0,
    className,
    style,
    width
  } = options;
  const context = createContext(options);
  className = maybeClassName(className);
  tickFormat = maybeAutoTickFormat(tickFormat, scale.domain);

  const swatches = create("div", context).attr(
    "class",
    `${className}-swatches ${className}-swatches-${columns != null ? "columns" : "wrap"}`
  );

  let extraStyle;

  if (columns != null) {
    extraStyle = `.${className}-swatches-columns .${className}-swatch {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
.${className}-swatches-columns .${className}-swatch::before {
  flex-shrink: 0;
}
.${className}-swatches-columns .${className}-swatch-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`;

    swatches
      .style("columns", columns)
      .selectAll()
      .data(scale.domain)
      .enter()
      .append("div")
      .attr("class", `${className}-swatch`)
      .call(swatch, scale, swatchWidth, swatchHeight)
      .call((item) =>
        item.append("div").attr("class", `${className}-swatch-label`).attr("title", tickFormat).text(tickFormat)
      );
  } else {
    extraStyle = `.${className}-swatches-wrap {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
.${className}-swatches-wrap .${className}-swatch {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`;

    swatches
      .selectAll()
      .data(scale.domain)
      .enter()
      .append("span")
      .attr("class", `${className}-swatch`)
      .call(swatch, scale, swatchWidth, swatchHeight)
      .append(function () {
        return this.ownerDocument.createTextNode(tickFormat.apply(this, arguments));
      });
  }

  return swatches
    .call((div) =>
      div.insert("style", "*").text(
        `.${className}-swatches {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
.${className}-swatch > svg {
  margin-right: 0.5em;
  overflow: visible;
}
${extraStyle}`
      )
    )
    .style("margin-left", marginLeft ? `${+marginLeft}px` : null)
    .style("width", width === undefined ? null : `${+width}px`)
    .style("font-variant", impliedString(fontVariant, "normal"))
    .call(applyInlineStyles, style)
    .node();
}

const legendRegistry = new Map([
  ["symbol", legendSymbols],
  ["color", legendColor],
  ["opacity", legendOpacity]
]);

function legend(options = {}) {
  for (const [key, value] of legendRegistry) {
    const scale = options[key];
    if (isScaleOptions(scale)) {
      // e.g., ignore {color: "red"}
      const context = createContext(options);
      let hint;
      // For symbol legends, pass a hint to the symbol scale.
      if (key === "symbol") {
        const {fill, stroke = fill === undefined && isScaleOptions(options.color) ? "color" : undefined} = options;
        hint = {fill, stroke};
      }
      return value(normalizeScale(key, scale, hint), legendOptions(context, scale, options), (key) =>
        isScaleOptions(options[key]) ? normalizeScale(key, options[key]) : null
      );
    }
  }
  throw new Error("unknown legend type; no scale found");
}

function legendOptions({className, ...context}, {label, ticks, tickFormat} = {}, options) {
  return inherit(options, {className, ...context}, {label, ticks, tickFormat});
}

function legendColor(color, {legend = true, ...options}) {
  if (legend === true) legend = color.type === "ordinal" ? "swatches" : "ramp";
  if (color.domain === undefined) return;
  switch (`${legend}`.toLowerCase()) {
    case "swatches":
      return legendSwatches(color, options);
    case "ramp":
      return legendRamp(color, options);
    default:
      throw new Error(`unknown legend type: ${legend}`);
  }
}

function legendOpacity({type, interpolate, ...scale}, {legend = true, color = rgb(0, 0, 0), ...options}) {
  if (!interpolate) throw new Error(`${type} opacity scales are not supported`);
  if (legend === true) legend = "ramp";
  if (`${legend}`.toLowerCase() !== "ramp") throw new Error(`${legend} opacity legends are not supported`);
  return legendColor({type, ...scale, interpolate: interpolateOpacity(color)}, {legend, ...options});
}

function interpolateOpacity(color) {
  const {r, g, b} = rgb(color) || rgb(0, 0, 0); // treat invalid color as black
  return (t) => `rgba(${r},${g},${b},${t})`;
}

var DEFAULT_SELECTOR = '#ch-plugin-legend';
var defaultOptions = {
  // Whether to display the legend
  enabled: true,
  itemSelector: null,
  label: null,
  width: 130
};
var Legend = /*#__PURE__*/function () {
  function Legend(calendar) {
    _classCallCheck(this, Legend);
    this.name = 'Legend';
    this.calendar = calendar;
    this.root = null;
    this.shown = false;
    this.options = defaultOptions;
  }
  _createClass(Legend, [{
    key: "setup",
    value: function setup(pluginOptions) {
      this.options = Object.assign(Object.assign({}, defaultOptions), pluginOptions);
    }
  }, {
    key: "paint",
    value: function paint() {
      var scaleOptions = this.calendar.options.options.scale;
      var _this$options = this.options,
        enabled = _this$options.enabled,
        itemSelector = _this$options.itemSelector;
      if (!enabled || itemSelector && select$1(itemSelector).empty()) {
        return this.destroy();
      }
      this.shown = true;
      this.root = select$1(itemSelector || this.calendar.options.options.itemSelector);
      if (this.root.select(DEFAULT_SELECTOR).empty()) {
        this.root = this.root.append('div').attr('id', DEFAULT_SELECTOR.slice(1));
      } else {
        this.root = this.root.select(DEFAULT_SELECTOR);
      }
      // @ts-ignore
      var node = legend(Object.assign(Object.assign({}, scaleOptions), this.options));
      this.root.selectAll('*').remove();
      this.root.append(function () {
        return node;
      });
      return Promise.resolve();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.root !== null) {
        this.root.remove();
        this.root = null;
      }
      return Promise.resolve();
    }
  }]);
  return Legend;
}();

export { Legend as default };
