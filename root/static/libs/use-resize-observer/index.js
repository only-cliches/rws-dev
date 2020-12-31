define("use-resize-observer", ["react"], (__WEBPACK_EXTERNAL_MODULE_react__) => /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/use-resize-observer/dist/bundle.cjs.js":
/*!*************************************************************!*\
  !*** ./node_modules/use-resize-observer/dist/bundle.cjs.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var react = __webpack_require__(/*! react */ "react");

function useResizeObserver(opts) {
  if (opts === void 0) {
    opts = {};
  } // `defaultRef` Has to be non-conditionally declared here whether or not it'll
  // be used as that's how hooks work.
  // @see https://reactjs.org/docs/hooks-rules.html#explanation


  var defaultRef = react.useRef(null); // Saving the callback as a ref. With this, I don't need to put onResize in the
  // effect dep array, and just passing in an anonymous function without memoising
  // will not reinstantiate the hook's ResizeObserver

  var onResize = opts.onResize;
  var onResizeRef = react.useRef(undefined);
  onResizeRef.current = onResize; // Using a single instance throughought the hook's lifetime

  var resizeObserverRef = react.useRef();
  var ref = opts.ref || defaultRef;

  var _useState = react.useState({
    width: undefined,
    height: undefined
  }),
      size = _useState[0],
      setSize = _useState[1]; // Using a ref to track the previous width / height to avoid unnecessary renders


  var previous = react.useRef({
    width: undefined,
    height: undefined
  });
  react.useEffect(function () {
    if (resizeObserverRef.current) {
      return;
    }

    resizeObserverRef.current = new ResizeObserver(function (entries) {
      if (!Array.isArray(entries)) {
        return;
      } // Since we only observe the one element, we don't need to loop over the
      // array


      if (!entries.length) {
        return;
      }

      var entry = entries[0]; // `Math.round` is in line with how CSS resolves sub-pixel values

      var newWidth = Math.round(entry.contentRect.width);
      var newHeight = Math.round(entry.contentRect.height);

      if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
        var newSize = {
          width: newWidth,
          height: newHeight
        };

        if (onResizeRef.current) {
          onResizeRef.current(newSize);
        } else {
          previous.current.width = newWidth;
          previous.current.height = newHeight;
          setSize(newSize);
        }
      }
    });
  }, []);
  react.useEffect(function () {
    if (_typeof(ref) !== "object" || ref === null || !(ref.current instanceof Element)) {
      return;
    }

    var element = ref.current;
    resizeObserverRef.current.observe(element);
    return function () {
      return resizeObserverRef.current.unobserve(element);
    };
  }, [ref]);
  return react.useMemo(function () {
    return {
      ref: ref,
      width: size.width,
      height: size.height
    };
  }, [ref, size ? size.width : null, size ? size.height : null]);
}

module.exports = useResizeObserver;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./node_modules/use-resize-observer/dist/bundle.cjs.js");
/******/ })()
);;