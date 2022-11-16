/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 322:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function getComponent() {
  return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 486, 23)).then(function (_ref) {
    var _ = _ref["default"];
    var divWrap = document.createElement("div");
    divWrap.innerHTML = _.join(["123", "456", "789"], " ");
    return divWrap;
  });
}
getComponent().then(function (divWrap) {
  document.body.appendChild(divWrap);
});

/***/ }),

/***/ 658:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

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
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./src/async-module.js
var async_module = __webpack_require__(322);
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
console.log(lodash_default().join(['123', '456', '789'], ' '));

/***/ }),

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpackTest"] = self["webpackChunkwebpackTest"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [486], () => (__webpack_require__(658)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9hc3luYy1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9oZWxsby13b3JsZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9hc3NldHMvZGF0YS5jc3YiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3QvLi9zcmMvYXNzZXRzL2RhdGEueG1sIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuICByZXR1cm4gaW1wb3J0KFwibG9kYXNoXCIpLnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdldyYXAuaW5uZXJIVE1MID0gXy5qb2luKFtcIjEyM1wiLCBcIjQ1NlwiLCBcIjc4OVwiXSwgXCIgXCIpO1xyXG4gICAgcmV0dXJuIGRpdldyYXA7XHJcbiAgfSk7XHJcbn1cclxuZ2V0Q29tcG9uZW50KCkudGhlbigoZGl2V3JhcCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2V3JhcCk7XHJcbn0pO1xyXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJmdW5jdGlvbiBnZXRTdHJpbmcoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKFwiaGVsbG9Xb3JsZCFcIik7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9KTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBoZWxsb1dvcmxkKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTdHJpbmcoKTtcclxuICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhlbGxvV29ybGQ7XHJcbiIsImltcG9ydCBoZWxsb1dvcmxkIGZyb20gJy4vaGVsbG8td29ybGQnXHJcbmltcG9ydCBpbWdQbmcgZnJvbSAnLi9hc3NldHMvaW1nQXVkaW8ucG5nJ1xyXG5pbXBvcnQgaW1nU3ZnIGZyb20gJy4vYXNzZXRzL2VkaXQuc3ZnJ1xyXG5pbXBvcnQgdGV4dFRlc3QgZnJvbSAnLi9hc3NldHMvdGVzdC50eHQnXHJcbmltcG9ydCBpbWdKcGcgZnJvbSAnLi9hc3NldHMvODgxNjg5ZmJmMTBjNGE4Y2UwNzcwZDRhYTY2YjhhYTNfMzAweDMwMC5qcGcnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5sZXNzJ1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2Fzc2V0cy9kYXRhLnhtbCdcclxuaW1wb3J0IE5vdGVzIGZyb20gJy4vYXNzZXRzL2RhdGEuY3N2J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4vYXN5bmMtbW9kdWxlJ1xyXG5cclxuaGVsbG9Xb3JsZCgpO1xyXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuaW1nLnNyYyA9IGltZ1BuZztcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcxLnNyYyA9IGltZ1N2ZztcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcxKTtcclxuXHJcbmNvbnN0IHRleHRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnRleHRXcmFwLnRleHRDb250ZW50ID0gdGV4dFRlc3Q7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmxvY2stYmcnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0V3JhcCk7XHJcblxyXG5jb25zdCBhc3NldEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5hc3NldEltZy5zcmMgPSBpbWdKcGc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXNzZXRJbWcpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XHJcblxyXG4vLyDlrZfkvZNcclxuY29uc3Qgc3BhbldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnQWFZdWFuSGVpVGlGb250Jyk7XHJcbnNwYW5XcmFwLmlubmVySFRNTCA9ICcmI3gxRjYwMSc7IC8vIOW6lOeUqHR0ZuaWh+S7tuaXtui/mOmcgOimgeaPkOS+m+i/meihjOS7o+eggVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW5XcmFwKTtcclxuXHJcbi8vIHhtbHrovazmjaLmiJBvYmplY3RcclxuLy8gY3N26L2s5o2i5oiQYXJyYXlcclxuY29uc29sZS5sb2coRGF0YSk7XHJcbmNvbnNvbGUubG9nKE5vdGVzKTtcclxuXHJcbmNvbnNvbGUubG9nKF8uam9pbihbJzEyMycsICc0NTYnLCAnNzg5J10sICcgJykpOyIsIm1vZHVsZS5leHBvcnRzID0gW1tcInRvXCIsXCJmb3JtXCIsXCJoZWFkaW5nXCIsXCJib2R5XCJdXSIsIm1vZHVsZS5leHBvcnRzID0ge1wibm90ZVwiOntcInRvXCI6W1wiMVwiXSxcImZvcm1cIjpbXCIyXCJdLFwiaGVhZGluZ1wiOltcIjNcIl0sXCJib2R5XCI6W1wiNFwiXX19IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHtcbiAgICAgIG9ialtrZXldID0gZGVzYy52YWx1ZTtcbiAgICB9LFxuICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KVxuICAgIH0pLCBnZW5lcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmICh1bmRlZmluZWQgPT09IG1ldGhvZCkge1xuICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpKSByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHtcbiAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgIH07XG4gICAgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIiwgZGVsZXRlIHJlY29yZC5hcmcsIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsraSA8IGl0ZXJhYmxlLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogITBcbiAgICB9O1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpLFxuICAgICAga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cy5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBmb3IgKDsga2V5cy5sZW5ndGg7KSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLy8gVE9ETyhCYWJlbCA4KTogUmVtb3ZlIHRoaXMgZmlsZS5cblxudmFyIHJ1bnRpbWUgPSByZXF1aXJlKFwiLi4vaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWVcIikoKTtcbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcblxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9wYWNrYWdlcy9ydW50aW1lL3J1bnRpbWUuanMjTDczNj1cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDgyNjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1Rlc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rd2VicGFja1Rlc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFs0ODZdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg2NTgpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZ2V0Q29tcG9uZW50IiwidGhlbiIsIl8iLCJkaXZXcmFwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiam9pbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdldFN0cmluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImhlbGxvV29ybGQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImltZ1BuZyIsImltZ1N2ZyIsInRleHRUZXN0IiwiaW1nSnBnIiwiRGF0YSIsIk5vdGVzIiwiaW1nIiwic3JjIiwiaW1nMSIsInRleHRXcmFwIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhc3NldEltZyIsInNwYW5XcmFwIl0sInNvdXJjZVJvb3QiOiIifQ==