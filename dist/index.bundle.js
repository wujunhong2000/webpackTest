/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 322:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 避免重复依赖的方式3 动态导入
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

// 懒加载
var buttonWrap = document.createElement('button');
buttonWrap.textContent = '点击执行加法运算';
buttonWrap.addEventListener('click', function () {
  __webpack_require__.e(/* import() | math */ 600).then(__webpack_require__.bind(__webpack_require__, 283)).then(function (_ref) {
    var add = _ref.add,
      minus = _ref.minus;
    console.log(add(1, 2));
  });
});
document.body.appendChild(buttonWrap);

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "math" + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpackTest:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFckZBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9hc3luYy1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9oZWxsby13b3JsZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC8uL3NyYy9hc3NldHMvZGF0YS5jc3YiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3QvLi9zcmMvYXNzZXRzL2RhdGEueG1sIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tUZXN0L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrVGVzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFja1Rlc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOmBv+WFjemHjeWkjeS+nei1lueahOaWueW8jzMg5Yqo5oCB5a+85YWlXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuICByZXR1cm4gaW1wb3J0KFwibG9kYXNoXCIpLnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXZXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdldyYXAuaW5uZXJIVE1MID0gXy5qb2luKFtcIjEyM1wiLCBcIjQ1NlwiLCBcIjc4OVwiXSwgXCIgXCIpO1xyXG4gICAgcmV0dXJuIGRpdldyYXA7XHJcbiAgfSk7XHJcbn1cclxuZ2V0Q29tcG9uZW50KCkudGhlbigoZGl2V3JhcCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2V3JhcCk7XHJcbn0pO1xyXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJmdW5jdGlvbiBnZXRTdHJpbmcoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKFwiaGVsbG9Xb3JsZCFcIik7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9KTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBoZWxsb1dvcmxkKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTdHJpbmcoKTtcclxuICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhlbGxvV29ybGQ7XHJcbiIsImltcG9ydCBoZWxsb1dvcmxkIGZyb20gJy4vaGVsbG8td29ybGQnXHJcbmltcG9ydCBpbWdQbmcgZnJvbSAnLi9hc3NldHMvaW1nQXVkaW8ucG5nJ1xyXG5pbXBvcnQgaW1nU3ZnIGZyb20gJy4vYXNzZXRzL2VkaXQuc3ZnJ1xyXG5pbXBvcnQgdGV4dFRlc3QgZnJvbSAnLi9hc3NldHMvdGVzdC50eHQnXHJcbmltcG9ydCBpbWdKcGcgZnJvbSAnLi9hc3NldHMvODgxNjg5ZmJmMTBjNGE4Y2UwNzcwZDRhYTY2YjhhYTNfMzAweDMwMC5qcGcnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5sZXNzJ1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2Fzc2V0cy9kYXRhLnhtbCdcclxuaW1wb3J0IE5vdGVzIGZyb20gJy4vYXNzZXRzL2RhdGEuY3N2J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4vYXN5bmMtbW9kdWxlJ1xyXG5cclxuaGVsbG9Xb3JsZCgpO1xyXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuaW1nLnNyYyA9IGltZ1BuZztcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcxLnNyYyA9IGltZ1N2ZztcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcxKTtcclxuXHJcbmNvbnN0IHRleHRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnRleHRXcmFwLnRleHRDb250ZW50ID0gdGV4dFRlc3Q7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYmxvY2stYmcnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0V3JhcCk7XHJcblxyXG5jb25zdCBhc3NldEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5hc3NldEltZy5zcmMgPSBpbWdKcGc7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXNzZXRJbWcpO1xyXG5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XHJcblxyXG4vLyDlrZfkvZNcclxuY29uc3Qgc3BhbldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnQWFZdWFuSGVpVGlGb250Jyk7XHJcbnNwYW5XcmFwLmlubmVySFRNTCA9ICcmI3gxRjYwMSc7IC8vIOW6lOeUqHR0ZuaWh+S7tuaXtui/mOmcgOimgeaPkOS+m+i/meihjOS7o+eggVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW5XcmFwKTtcclxuXHJcbi8vIHhtbHrovazmjaLmiJBvYmplY3RcclxuLy8gY3N26L2s5o2i5oiQYXJyYXlcclxuY29uc29sZS5sb2coRGF0YSk7XHJcbmNvbnNvbGUubG9nKE5vdGVzKTtcclxuXHJcbmNvbnNvbGUubG9nKF8uam9pbihbJzEyMycsICc0NTYnLCAnNzg5J10sICcgJykpO1xyXG5cclxuLy8g5oeS5Yqg6L29XHJcbmNvbnN0IGJ1dHRvbldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuYnV0dG9uV3JhcC50ZXh0Q29udGVudCA9ICfngrnlh7vmiafooYzliqDms5Xov5DnrpcnO1xyXG5idXR0b25XcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21hdGgnICovJy4vbWF0aC5qcycpLnRoZW4oKHsgYWRkLCBtaW51cyB9KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFkZCgxLCAyKSk7XHJcbiAgIH0pXHJcbn0pXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcCk7IiwibW9kdWxlLmV4cG9ydHMgPSBbW1widG9cIixcImZvcm1cIixcImhlYWRpbmdcIixcImJvZHlcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCIxXCJdLFwiZm9ybVwiOltcIjJcIl0sXCJoZWFkaW5nXCI6W1wiM1wiXSxcImJvZHlcIjpbXCI0XCJdfX0iLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykge1xuICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgIH0sXG4gICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpXG4gICAgfSksIGdlbmVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgfVxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7XG4gICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkpIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykge1xuICAgICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCksXG4gICAgICBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgXCJ0XCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGVudHJ5LnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfSwgZXhwb3J0cztcbn1cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBcIm1hdGhcIiArIFwiLmJ1bmRsZS5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwid2VicGFja1Rlc3Q6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH07XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQ4MjY6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tUZXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3dlYnBhY2tUZXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbNDg2XSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oNjU4KSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImdldENvbXBvbmVudCIsInRoZW4iLCJfIiwiZGl2V3JhcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImpvaW4iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnZXRTdHJpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJoZWxsb1dvcmxkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpbWdQbmciLCJpbWdTdmciLCJ0ZXh0VGVzdCIsImltZ0pwZyIsIkRhdGEiLCJOb3RlcyIsImltZyIsInNyYyIsImltZzEiLCJ0ZXh0V3JhcCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXNzZXRJbWciLCJzcGFuV3JhcCIsImJ1dHRvbldyYXAiLCJhZGRFdmVudExpc3RlbmVyIiwibWludXMiXSwic291cmNlUm9vdCI6IiJ9