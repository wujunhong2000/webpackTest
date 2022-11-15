/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 363:
/***/ ((module) => {

module.exports = [["to","form","heading","body"]]

/***/ }),

/***/ 138:
/***/ ((module) => {

module.exports = {"note":{"to":["1"],"form":["2"],"heading":["3"],"body":["4"]}}

/***/ }),

/***/ 61:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 698:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(61)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./src/hello-world.js


function getString() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("helloWorld!");
    }, 2000);
  });
}
function helloWorld() {
  return _helloWorld.apply(this, arguments);
}
function _helloWorld() {
  _helloWorld = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var data;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getString();
          case 2:
            data = _context.sent;
            console.log('data', data);
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _helloWorld.apply(this, arguments);
}
/* harmony default export */ const hello_world = (helloWorld);
;// CONCATENATED MODULE: ./src/assets/imgAudio.png
const imgAudio_namespaceObject = __webpack_require__.p + "image/5c28be54bff01a71cf6c.png";
;// CONCATENATED MODULE: ./src/assets/edit.svg
const edit_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMzMzNDEgMTUuNDk5M0wxMC42NjY3IDEyLjE2NkgxNS42NjY3QzE2LjEyNTEgMTIuMTY2IDE2LjUxNzYgMTIuMzI5MSAxNi44NDQyIDEyLjY1NTJDMTcuMTcwNCAxMi45ODE4IDE3LjMzMzQgMTMuMzc0MyAxNy4zMzM0IDEzLjgzMjdDMTcuMzMzNCAxNC4yOTEgMTcuMTcwNCAxNC42ODM1IDE2Ljg0NDIgMTUuMDEwMkMxNi41MTc2IDE1LjMzNjMgMTYuMTI1MSAxNS40OTkzIDE1LjY2NjcgMTUuNDk5M0g3LjMzMzQxWk0yLjMzMzQxIDEzLjgzMjdIMy41MDAwOEwxMC42ODc2IDYuNjQ1MThMOS41MjA5MSA1LjQ3ODUyTDIuMzMzNDEgMTIuNjY2VjEzLjgzMjdaTTE0LjI1MDEgNS40MzY4NUwxMC43MDg0IDEuOTM2ODVMMTEuODc1MSAwLjc3MDE4MkMxMi4xOTQ1IDAuNDUwNzM4IDEyLjU4NyAwLjI5MTAxNiAxMy4wNTI2IDAuMjkxMDE2QzEzLjUxNzYgMC4yOTEwMTYgMTMuOTA5OCAwLjQ1MDczOCAxNC4yMjkyIDAuNzcwMTgyTDE1LjM5NTkgMS45MzY4NUMxNS43MTU0IDIuMjU2MjkgMTUuODgyIDIuNjQxODUgMTUuODk1OSAzLjA5MzUyQzE1LjkwOTggMy41NDQ2MyAxNS43NTcgMy45Mjk5IDE1LjQzNzYgNC4yNDkzNUwxNC4yNTAxIDUuNDM2ODVaTTEuNTAwMDggMTUuNDk5M0MxLjI2Mzk3IDE1LjQ5OTMgMS4wNjYxOSAxNS40MTkzIDAuOTA2NzQ4IDE1LjI1OTNDMC43NDY3NDggMTUuMDk5OSAwLjY2Njc0OCAxNC45MDIxIDAuNjY2NzQ4IDE0LjY2NlYxMi4zMTE4QzAuNjY2NzQ4IDEyLjIwMDcgMC42ODc1ODEgMTIuMDkzMiAwLjcyOTI0OCAxMS45ODkzQzAuNzcwOTE1IDExLjg4NDkgMC44MzM0MTUgMTEuNzkxIDAuOTE2NzQ4IDExLjcwNzdMOS41MDAwOCAzLjEyNDM1TDEzLjA0MTcgNi42NjYwMkw0LjQ1ODQxIDE1LjI0OTNDNC4zNzUwOCAxNS4zMzI3IDQuMjgxNDcgMTUuMzk1MiA0LjE3NzU4IDE1LjQzNjhDNC4wNzMxNCAxNS40Nzg1IDMuOTY1MzYgMTUuNDk5MyAzLjg1NDI1IDE1LjQ5OTNIMS41MDAwOFoiIGZpbGw9IiM3QTdBN0EiLz4KPC9zdmc+Cg==";
;// CONCATENATED MODULE: ./src/assets/test.txt
const test_namespaceObject = "123123456";
;// CONCATENATED MODULE: ./src/assets/881689fbf10c4a8ce0770d4aa66b8aa3_300x300.jpg
const _881689fbf10c4a8ce0770d4aa66b8aa3_300x300_namespaceObject = "data:image/jpeg;base64,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";
// EXTERNAL MODULE: ./src/assets/data.xml
var data = __webpack_require__(138);
var data_default = /*#__PURE__*/__webpack_require__.n(data);
// EXTERNAL MODULE: ./src/assets/data.csv
var assets_data = __webpack_require__(363);
var assets_data_default = /*#__PURE__*/__webpack_require__.n(assets_data);
;// CONCATENATED MODULE: ./src/index.js









hello_world();
var img = document.createElement('img');
img.src = imgAudio_namespaceObject;
document.body.appendChild(img);
var img1 = document.createElement('img');
img1.src = edit_namespaceObject;
document.body.appendChild(img1);
var textWrap = document.createElement('div');
textWrap.textContent = test_namespaceObject;
document.body.classList.add('block-bg');
document.body.appendChild(textWrap);
var assetImg = document.createElement('img');
assetImg.src = _881689fbf10c4a8ce0770d4aa66b8aa3_300x300_namespaceObject;
document.body.appendChild(assetImg);
document.body.classList.add('wrap');

// 字体
var spanWrap = document.createElement('span');
document.body.classList.add('AaYuanHeiTiFont');
spanWrap.innerHTML = '&#x1F601'; // 应用ttf文件时还需要提供这行代码
document.body.appendChild(spanWrap);

// xmlz转换成object
// csv转换成array
console.log((data_default()));
console.log((assets_data_default()));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7O0FDQUEsa0JBQWtCLFFBQVE7Ozs7Ozs7QUNBMUIsY0FBYyxxQ0FBaUM7QUFDL0M7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLEdBQUcsRUFBRSx5QkFBeUIsU0FBUyx5QkFBeUI7QUFDaEUsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7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QUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQzlDSyxRQUFRLENBQUNDLFdBQVcsR0FBR1osb0JBQVE7QUFDL0JLLFFBQVEsQ0FBQ0csSUFBSSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDdkNULFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxXQUFXLENBQUNFLFFBQVEsQ0FBQztBQUVuQyxJQUFNSSxRQUFRLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztBQUM5Q1MsUUFBUSxDQUFDUixHQUFHLEdBQUdOLHlEQUFNO0FBQ3JCSSxRQUFRLENBQUNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDTSxRQUFRLENBQUM7QUFFbkNWLFFBQVEsQ0FBQ0csSUFBSSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7O0FBRW5DO0FBQ0EsSUFBTUUsUUFBUSxHQUFHWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDL0NELFFBQVEsQ0FBQ0csSUFBSSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUM5Q0UsUUFBUSxDQUFDQyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDakNaLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxXQUFXLENBQUNPLFFBQVEsQ0FBQzs7QUFFbkM7QUFDQTtBQUNBcEIsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGdCQUFJLENBQUM7QUFDakJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSx1QkFBSyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9hc3NldHMvZGF0YS5jc3YiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3QvLi9zcmMvYXNzZXRzL2RhdGEueG1sIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9oZWxsby13b3JsZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFtbXCJ0b1wiLFwiZm9ybVwiLFwiaGVhZGluZ1wiLFwiYm9keVwiXV0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5vdGVcIjp7XCJ0b1wiOltcIjFcIl0sXCJmb3JtXCI6W1wiMlwiXSxcImhlYWRpbmdcIjpbXCIzXCJdLFwiYm9keVwiOltcIjRcIl19fSIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIGV4cG9ydHMgPSB7fSxcbiAgICBPcCA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksXG4gICAgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKG9iaiwga2V5LCBkZXNjKSB7XG4gICAgICBvYmpba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgfSxcbiAgICAkU3ltYm9sID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLFxuICAgICAgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpLFxuICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZ2VuZXJhdG9yLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dClcbiAgICB9KSwgZ2VuZXJhdG9yO1xuICB9XG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IGVyclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKFwidGhyb3dcIiAhPT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmcsXG4gICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPSBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7XG4gICAgICAgIGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnO1xuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuICAgICAgZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7Oykge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gY29udGV4dC5tZXRob2QpIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7XG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIHN0YXRlID0gXCJleGVjdXRpbmdcIjtcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBcImNvbXBsZXRlZFwiIDogXCJzdXNwZW5kZWRZaWVsZFwiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUgJiYgKHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHtcbiAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSkgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHJldHVybiBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV0sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZ2VuRnVuICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpO1xuICB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApLCBnZW5GdW47XG4gIH0sIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpO1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKSxcbiAgICAgIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZnVuY3Rpb24gZ2V0U3RyaW5nKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVzb2x2ZShcImhlbGxvV29ybGQhXCIpO1xyXG4gICAgfSwgMjAwMCk7XHJcbiAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gaGVsbG9Xb3JsZCgpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U3RyaW5nKCk7XHJcbiAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBoZWxsb1dvcmxkO1xyXG4iLCJpbXBvcnQgaGVsbG9Xb3JsZCBmcm9tICcuL2hlbGxvLXdvcmxkJ1xyXG5pbXBvcnQgaW1nUG5nIGZyb20gJy4vYXNzZXRzL2ltZ0F1ZGlvLnBuZydcclxuaW1wb3J0IGltZ1N2ZyBmcm9tICcuL2Fzc2V0cy9lZGl0LnN2ZydcclxuaW1wb3J0IHRleHRUZXN0IGZyb20gJy4vYXNzZXRzL3Rlc3QudHh0J1xyXG5pbXBvcnQgaW1nSnBnIGZyb20gJy4vYXNzZXRzLzg4MTY4OWZiZjEwYzRhOGNlMDc3MGQ0YWE2NmI4YWEzXzMwMHgzMDAuanBnJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUubGVzcydcclxuaW1wb3J0IERhdGEgZnJvbSAnLi9hc3NldHMvZGF0YS54bWwnXHJcbmltcG9ydCBOb3RlcyBmcm9tICcuL2Fzc2V0cy9kYXRhLmNzdidcclxuXHJcbmhlbGxvV29ybGQoKTtcclxuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmltZy5zcmMgPSBpbWdQbmc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbmNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuaW1nMS5zcmMgPSBpbWdTdmc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nMSk7XHJcblxyXG5jb25zdCB0ZXh0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50ZXh0V3JhcC50ZXh0Q29udGVudCA9IHRleHRUZXN0O1xyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrLWJnJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dFdyYXApO1xyXG5cclxuY29uc3QgYXNzZXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuYXNzZXRJbWcuc3JjID0gaW1nSnBnO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFzc2V0SW1nKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3JhcCcpO1xyXG5cclxuLy8g5a2X5L2TXHJcbmNvbnN0IHNwYW5XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ0FhWXVhbkhlaVRpRm9udCcpO1xyXG5zcGFuV3JhcC5pbm5lckhUTUwgPSAnJiN4MUY2MDEnOyAvLyDlupTnlKh0dGbmlofku7bml7bov5jpnIDopoHmj5Dkvpvov5nooYzku6PnoIFcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuV3JhcCk7XHJcblxyXG4vLyB4bWx66L2s5o2i5oiQb2JqZWN0XHJcbi8vIGNzdui9rOaNouaIkGFycmF5XHJcbmNvbnNvbGUubG9nKERhdGEpO1xyXG5jb25zb2xlLmxvZyhOb3Rlcyk7Il0sIm5hbWVzIjpbImdldFN0cmluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImhlbGxvV29ybGQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImltZ1BuZyIsImltZ1N2ZyIsInRleHRUZXN0IiwiaW1nSnBnIiwiRGF0YSIsIk5vdGVzIiwiaW1nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwiaW1nMSIsInRleHRXcmFwIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhc3NldEltZyIsInNwYW5XcmFwIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==