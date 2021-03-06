define("compute-scroll-into-view", [], () => /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/compute-scroll-into-view/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.js ***!
  \*************************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function t(t) {
  return null != t && "object" == _typeof(t) && 1 === t.nodeType;
}

function e(t, e) {
  return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
}

function n(t, n) {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    var r = getComputedStyle(t, null);
    return e(r.overflowY, n) || e(r.overflowX, n) || function (t) {
      var e = function (t) {
        if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;

        try {
          return t.ownerDocument.defaultView.frameElement;
        } catch (t) {
          return null;
        }
      }(t);

      return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
    }(t);
  }

  return !1;
}

function r(t, e, n, r, i, o, l, d) {
  return o < t && l > e || o > t && l < e ? 0 : o <= t && d <= n || l >= e && d >= n ? o - t - r : l > e && d < n || o < t && d > n ? l - e + i : 0;
}

module.exports = function (e, i) {
  var o = window,
      l = i.scrollMode,
      d = i.block,
      u = i.inline,
      h = i.boundary,
      c = i.skipOverflowHiddenElements,
      a = "function" == typeof h ? h : function (t) {
    return t !== h;
  };
  if (!t(e)) throw new TypeError("Invalid target");

  for (var f = document.scrollingElement || document.documentElement, s = [], p = e; t(p) && a(p);) {
    if ((p = p.parentNode) === f) {
      s.push(p);
      break;
    }

    p === document.body && n(p) && !n(document.documentElement) || n(p, c) && s.push(p);
  }

  for (var m = o.visualViewport ? o.visualViewport.width : innerWidth, g = o.visualViewport ? o.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, v = window.scrollY || pageYOffset, W = e.getBoundingClientRect(), b = W.height, H = W.width, y = W.top, M = W.right, E = W.bottom, V = W.left, x = "start" === d || "nearest" === d ? y : "end" === d ? E : y + b / 2, I = "center" === u ? V + H / 2 : "end" === u ? M : V, C = [], T = 0; T < s.length; T++) {
    var k = s[T],
        B = k.getBoundingClientRect(),
        D = B.height,
        O = B.width,
        R = B.top,
        X = B.right,
        Y = B.bottom,
        L = B.left;
    if ("if-needed" === l && y >= 0 && V >= 0 && E <= g && M <= m && y >= R && E <= Y && V >= L && M <= X) return C;
    var S = getComputedStyle(k),
        j = parseInt(S.borderLeftWidth, 10),
        N = parseInt(S.borderTopWidth, 10),
        q = parseInt(S.borderRightWidth, 10),
        z = parseInt(S.borderBottomWidth, 10),
        A = 0,
        F = 0,
        G = "offsetWidth" in k ? k.offsetWidth - k.clientWidth - j - q : 0,
        J = "offsetHeight" in k ? k.offsetHeight - k.clientHeight - N - z : 0;
    if (f === k) A = "start" === d ? x : "end" === d ? x - g : "nearest" === d ? r(v, v + g, g, N, z, v + x, v + x + b, b) : x - g / 2, F = "start" === u ? I : "center" === u ? I - m / 2 : "end" === u ? I - m : r(w, w + m, m, j, q, w + I, w + I + H, H), A = Math.max(0, A + v), F = Math.max(0, F + w);else {
      A = "start" === d ? x - R - N : "end" === d ? x - Y + z + J : "nearest" === d ? r(R, Y, D, N, z + J, x, x + b, b) : x - (R + D / 2) + J / 2, F = "start" === u ? I - L - j : "center" === u ? I - (L + O / 2) + G / 2 : "end" === u ? I - X + q + G : r(L, X, O, j, q + G, I, I + H, H);
      var K = k.scrollLeft,
          P = k.scrollTop;
      x += P - (A = Math.max(0, Math.min(P + A, k.scrollHeight - D + J))), I += K - (F = Math.max(0, Math.min(K + F, k.scrollWidth - O + G)));
    }
    C.push({
      el: k,
      top: A,
      left: F
    });
  }

  return C;
};

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
/******/ 	return __webpack_require__("./node_modules/compute-scroll-into-view/dist/index.js");
/******/ })()
);;