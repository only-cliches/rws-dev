/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define("carbon-icon-helpers", [], () => /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@carbon/icon-helpers/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@carbon/icon-helpers/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n/**\n * Copyright IBM Corp. 2018, 2018\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nvar defaultAttributes = {\n  // Reference:\n  // https://github.com/IBM/carbon-components-react/issues/1392\n  // https://github.com/PolymerElements/iron-iconset-svg/pull/47\n  // `focusable` is a string attribute which is why we do not use a boolean here\n  focusable: 'false',\n  preserveAspectRatio: 'xMidYMid meet'\n};\n/**\n * Get supplementary HTML attributes for a given <svg> element based on existing\n * attributes.\n */\n\nfunction getAttributes() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      width = _ref.width,\n      height = _ref.height,\n      _ref$viewBox = _ref.viewBox,\n      viewBox = _ref$viewBox === void 0 ? \"0 0 \".concat(width, \" \").concat(height) : _ref$viewBox,\n      attributes = _objectWithoutProperties(_ref, [\"width\", \"height\", \"viewBox\"]);\n\n  var tabindex = attributes.tabindex,\n      rest = _objectWithoutProperties(attributes, [\"tabindex\"]);\n\n  var iconAttributes = _objectSpread2(_objectSpread2(_objectSpread2({}, defaultAttributes), rest), {}, {\n    width: width,\n    height: height,\n    viewBox: viewBox\n  }); // TODO: attributes.title assumes that the consumer will implement <title> and\n  // correctly set `aria-labelledby`.\n\n\n  if (iconAttributes['aria-label'] || iconAttributes['aria-labelledby'] || iconAttributes.title) {\n    iconAttributes.role = 'img'; // Reference:\n    // https://allyjs.io/tutorials/focusing-in-svg.html\n\n    if (tabindex !== undefined && tabindex !== null) {\n      iconAttributes.focusable = 'true';\n      iconAttributes.tabindex = tabindex;\n    }\n  } else {\n    iconAttributes['aria-hidden'] = true;\n  }\n\n  return iconAttributes;\n}\n/**\n * Copyright IBM Corp. 2018, 2018\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/**\n * Convert an icon descriptor to a String\n */\n\n\nfunction toString(descriptor) {\n  var _descriptor$elem = descriptor.elem,\n      elem = _descriptor$elem === void 0 ? 'svg' : _descriptor$elem,\n      _descriptor$attrs = descriptor.attrs,\n      attrs = _descriptor$attrs === void 0 ? {} : _descriptor$attrs,\n      _descriptor$content = descriptor.content,\n      content = _descriptor$content === void 0 ? [] : _descriptor$content;\n  var children = content.map(toString).join('');\n\n  if (elem !== 'svg') {\n    return \"<\".concat(elem, \" \").concat(formatAttributes(attrs), \">\").concat(children, \"</\").concat(elem, \">\");\n  }\n\n  return \"<\".concat(elem, \" \").concat(formatAttributes(getAttributes(attrs)), \">\").concat(children, \"</\").concat(elem, \">\");\n}\n\nfunction formatAttributes(attrs) {\n  return Object.keys(attrs).reduce(function (acc, key, index) {\n    var attribute = \"\".concat(key, \"=\\\"\").concat(attrs[key], \"\\\"\");\n\n    if (index === 0) {\n      return attribute;\n    }\n\n    return acc + ' ' + attribute;\n  }, '');\n}\n/**\n * Copyright IBM Corp. 2018, 2018\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/**\n * Convert an icon descriptor to a DOM node.\n */\n\n\nfunction toSVG(descriptor) {\n  var _descriptor$elem = descriptor.elem,\n      elem = _descriptor$elem === void 0 ? 'svg' : _descriptor$elem,\n      _descriptor$attrs = descriptor.attrs,\n      attrs = _descriptor$attrs === void 0 ? {} : _descriptor$attrs,\n      _descriptor$content = descriptor.content,\n      content = _descriptor$content === void 0 ? [] : _descriptor$content;\n  var node = document.createElementNS('http://www.w3.org/2000/svg', elem);\n  var attributes = elem !== 'svg' ? attrs : getAttributes(attrs);\n  Object.keys(attributes).forEach(function (key) {\n    node.setAttribute(key, attrs[key]);\n  });\n\n  for (var i = 0; i < content.length; i++) {\n    node.appendChild(toSVG(content[i]));\n  }\n\n  return node;\n}\n/**\n * Copyright IBM Corp. 2018, 2018\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\nexports.defaultAttributes = defaultAttributes;\nexports.getAttributes = getAttributes;\nexports.formatAttributes = formatAttributes;\nexports.toString = toString;\nexports.toSVG = toSVG;\n\n//# sourceURL=webpack://carbon-icon-helpers/./node_modules/@carbon/icon-helpers/lib/index.js?");

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
/******/ 	return __webpack_require__("./node_modules/@carbon/icon-helpers/lib/index.js");
/******/ })()
);;