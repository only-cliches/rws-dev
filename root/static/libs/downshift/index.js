define("downshift", ["compute-scroll-into-view","prop-types","react","react-is"], (__WEBPACK_EXTERNAL_MODULE_compute_scroll_into_view__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_is__) => /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module) => {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/downshift/dist/downshift.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/downshift/dist/downshift.cjs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var react = __webpack_require__(/*! react */ "react");

var reactIs = __webpack_require__(/*! react-is */ "react-is");

var computeScrollIntoView = _interopDefault(__webpack_require__(/*! compute-scroll-into-view */ "compute-scroll-into-view"));

var idCounter = 0;
/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */

function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop;
}

function noop() {}
/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} menuNode the menu element of the component
 */


function scrollIntoView(node, menuNode) {
  if (node === null) {
    return;
  }

  var actions = computeScrollIntoView(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */


function isOrContainsNode(parent, child) {
  return parent === child || parent.contains && parent.contains(child);
}
/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */


function debounce(fn, time) {
  var timeoutId;

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }

  wrapper.cancel = cancel;
  return wrapper;
}
/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */


function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}

function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return function (node) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */


function generateId() {
  return String(idCounter++);
}
/**
 * Resets idCounter to 0. Used for SSR.
 */


function resetIdCounter() {
  idCounter = 0;
}
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */


function getA11yStatusMessage(_ref2) {
  var isOpen = _ref2.isOpen,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }

  return '';
}
/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */


function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ?
  /* istanbul ignore next (preact) */
  arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */


function isDOMElement(element) {
  // then we assume this is react
  return typeof element.type === 'string';
}
/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */


function getElementProps(element) {
  return element.props;
}
/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */


function requiredProp(fnName, propName) {
  // eslint-disable-next-line no-console
  console.error("The property \"" + propName + "\" is required in \"" + fnName + "\"");
}

var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state the state object
 * @return {Object} state that is relevant to downshift
 */

function pickState(state) {
  if (state === void 0) {
    state = {};
  }

  var result = {};
  stateKeys.forEach(function (k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}
/**
 * This will perform a shallow merge of the given state object
 * with the state coming from props
 * (for the controlled component scenario)
 * This is used in state updater functions so they're referencing
 * the right state regardless of where it comes from.
 *
 * @param {Object} state The state of the component/hook.
 * @param {Object} props The props that may contain controlled values.
 * @returns {Object} The merged controlled state.
 */


function getState(state, props) {
  return Object.keys(state).reduce(function (prevState, key) {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
/**
 * This determines whether a prop is a "controlled prop" meaning it is
 * state which is controlled by the outside of this component rather
 * than within this component.
 *
 * @param {Object} props The props that may contain controlled values.
 * @param {String} key the key to check
 * @return {Boolean} whether it is a controlled controlled prop
 */


function isControlledProp(props, key) {
  return props[key] !== undefined;
}
/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */


function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow" + key;
  }

  return key;
}
/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */


function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
 * it will wrap to either 0 or itemCount - 1.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index after the move.
 */


function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }

  var itemsLastIndex = itemCount - 1;

  if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }

  var newIndex = baseIndex + moveAmount;

  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }

  var nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);
  return nonDisabledNewIndex === -1 ? baseIndex : nonDisabledNewIndex;
}
/**
 * Returns the next index in the list of an item that is not disabled.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index. Returns baseIndex if item is not disabled. Returns next non-disabled item otherwise. If no non-disabled found it will return -1.
 */


function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  var currentElementNode = getItemNodeFromIndex(baseIndex);

  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex;
  }

  if (moveAmount > 0) {
    for (var index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
        return index;
      }
    }
  } else {
    for (var _index = baseIndex - 1; _index >= 0; _index--) {
      if (!getItemNodeFromIndex(_index).hasAttribute('disabled')) {
        return _index;
      }
    }
  }

  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }

  return -1;
}
/**
 * Checks if event target is within the downshift elements.
 *
 * @param {EventTarget} target Target to check.
 * @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
 * @param {Document} document The document.
 * @param {boolean} checkActiveElement Whether to also check activeElement.
 *
 * @returns {boolean} Whether or not the target is within downshift elements.
 */


function targetWithinDownshift(target, downshiftElements, document, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }

  return downshiftElements.some(function (contextNode) {
    return contextNode && (isOrContainsNode(contextNode, target) || checkActiveElement && isOrContainsNode(contextNode, document.activeElement));
  });
}

var cleanupStatus = debounce(function () {
  getStatusDiv().textContent = '';
}, 500);
/**
 * @param {String} status the status message
 * @param {Object} documentProp document passed by the user.
 */

function setStatus(status, documentProp) {
  var div = getStatusDiv(documentProp);

  if (!status) {
    return;
  }

  div.textContent = status;
  cleanupStatus();
}
/**
 * Get the status node or create it if it does not already exist.
 * @param {Object} documentProp document passed by the user.
 * @return {HTMLElement} the status node.
 */


function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }

  var statusDiv = documentProp.getElementById('a11y-status-message');

  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = documentProp.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}

var unknown =  true ? '__autocomplete_unknown__' : 0;
var mouseUp =  true ? '__autocomplete_mouseup__' : 0;
var itemMouseEnter =  true ? '__autocomplete_item_mouseenter__' : 0;
var keyDownArrowUp =  true ? '__autocomplete_keydown_arrow_up__' : 0;
var keyDownArrowDown =  true ? '__autocomplete_keydown_arrow_down__' : 0;
var keyDownEscape =  true ? '__autocomplete_keydown_escape__' : 0;
var keyDownEnter =  true ? '__autocomplete_keydown_enter__' : 0;
var keyDownHome =  true ? '__autocomplete_keydown_home__' : 0;
var keyDownEnd =  true ? '__autocomplete_keydown_end__' : 0;
var clickItem =  true ? '__autocomplete_click_item__' : 0;
var blurInput =  true ? '__autocomplete_blur_input__' : 0;
var changeInput =  true ? '__autocomplete_change_input__' : 0;
var keyDownSpaceButton =  true ? '__autocomplete_keydown_space_button__' : 0;
var clickButton =  true ? '__autocomplete_click_button__' : 0;
var blurButton =  true ? '__autocomplete_blur_button__' : 0;
var controlledPropUpdatedSelectedItem =  true ? '__autocomplete_controlled_prop_updated_selected_item__' : 0;
var touchEnd =  true ? '__autocomplete_touchend__' : 0;
var stateChangeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  unknown: unknown,
  mouseUp: mouseUp,
  itemMouseEnter: itemMouseEnter,
  keyDownArrowUp: keyDownArrowUp,
  keyDownArrowDown: keyDownArrowDown,
  keyDownEscape: keyDownEscape,
  keyDownEnter: keyDownEnter,
  keyDownHome: keyDownHome,
  keyDownEnd: keyDownEnd,
  clickItem: clickItem,
  blurInput: blurInput,
  changeInput: changeInput,
  keyDownSpaceButton: keyDownSpaceButton,
  clickButton: clickButton,
  blurButton: blurButton,
  controlledPropUpdatedSelectedItem: controlledPropUpdatedSelectedItem,
  touchEnd: touchEnd
});

var Downshift = /*#__PURE__*/function () {
  var Downshift = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Downshift, _Component);

    function Downshift(_props) {
      var _this = _Component.call(this, _props) || this;

      _this.id = _this.props.id || "downshift-" + generateId();
      _this.menuId = _this.props.menuId || _this.id + "-menu";
      _this.labelId = _this.props.labelId || _this.id + "-label";
      _this.inputId = _this.props.inputId || _this.id + "-input";

      _this.getItemId = _this.props.getItemId || function (index) {
        return _this.id + "-item-" + index;
      };

      _this.input = null;
      _this.items = [];
      _this.itemCount = null;
      _this.previousResultCount = 0;
      _this.timeoutIds = [];

      _this.internalSetTimeout = function (fn, time) {
        var id = setTimeout(function () {
          _this.timeoutIds = _this.timeoutIds.filter(function (i) {
            return i !== id;
          });
          fn();
        }, time);

        _this.timeoutIds.push(id);
      };

      _this.setItemCount = function (count) {
        _this.itemCount = count;
      };

      _this.unsetItemCount = function () {
        _this.itemCount = null;
      };

      _this.setHighlightedIndex = function (highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }

        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(_extends({
          highlightedIndex: highlightedIndex
        }, otherStateToSet));
      };

      _this.clearSelection = function (cb) {
        _this.internalSetState({
          selectedItem: null,
          inputValue: '',
          highlightedIndex: _this.props.defaultHighlightedIndex,
          isOpen: _this.props.defaultIsOpen
        }, cb);
      };

      _this.selectItem = function (item, otherStateToSet, cb) {
        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(_extends({
          isOpen: _this.props.defaultIsOpen,
          highlightedIndex: _this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: _this.props.itemToString(item)
        }, otherStateToSet), cb);
      };

      _this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
        var item = _this.items[itemIndex];

        if (item == null) {
          return;
        }

        _this.selectItem(item, otherStateToSet, cb);
      };

      _this.selectHighlightedItem = function (otherStateToSet, cb) {
        return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
      };

      _this.internalSetState = function (stateToSet, cb) {
        var isItemSelected, onChangeArg;
        var onStateChangeArg = {};
        var isStateToSetFunction = typeof stateToSet === 'function'; // we want to call `onInputValueChange` before the `setState` call
        // so someone controlling the `inputValue` state gets notified of
        // the input change as soon as possible. This avoids issues with
        // preserving the cursor position.
        // See https://github.com/downshift-js/downshift/issues/217 for more info.

        if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
          _this.props.onInputValueChange(stateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), {}, stateToSet));
        }

        return _this.setState(function (state) {
          state = _this.getState(state);
          var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet; // Your own function that could modify the state that will be set.

          newStateToSet = _this.props.stateReducer(state, newStateToSet); // checks if an item is selected, regardless of if it's different from
          // what was selected before
          // used to determine if onSelect and onChange callbacks should be called

          isItemSelected = newStateToSet.hasOwnProperty('selectedItem'); // this keeps track of the object we want to call with setState

          var nextState = {}; // this is just used to tell whether the state changed

          var nextFullState = {}; // we need to call on change if the outside world is controlling any of our state
          // and we're trying to update that state. OR if the selection has changed and we're
          // trying to update the selection

          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }

          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach(function (key) {
            // onStateChangeArg should only have the state that is
            // actually changing
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            } // the type is useful for the onStateChangeArg
            // but we don't actually want to set it in internal state.
            // this is an undocumented feature for now... Not all internalSetState
            // calls support it and I'm not certain we want them to yet.
            // But it enables users controlling the isOpen state to know when
            // the isOpen state changes due to mouseup events which is quite handy.


            if (key === 'type') {
              return;
            }

            nextFullState[key] = newStateToSet[key]; // if it's coming from props, then we don't care to set it internally

            if (!isControlledProp(_this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          }); // if stateToSet is a function, then we weren't able to call onInputValueChange
          // earlier, so we'll call it now that we know what the inputValue state will be.

          if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
            _this.props.onInputValueChange(newStateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), {}, newStateToSet));
          }

          return nextState;
        }, function () {
          // call the provided callback if it's a function
          cbToCb(cb)(); // only call the onStateChange and onChange callbacks if
          // we have relevant information to pass them.

          var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;

          if (hasMoreStateThanType) {
            _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
          }

          if (isItemSelected) {
            _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
          }

          if (onChangeArg !== undefined) {
            _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
          } // this is currently undocumented and therefore subject to change
          // We'll try to not break it, but just be warned.


          _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
        });
      };

      _this.rootRef = function (node) {
        return _this._rootNode = node;
      };

      _this.getRootProps = function (_temp, _temp2) {
        var _extends2;

        var _ref = _temp === void 0 ? {} : _temp,
            _ref$refKey = _ref.refKey,
            refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
            ref = _ref.ref,
            rest = _objectWithoutPropertiesLoose(_ref, ["refKey", "ref"]);

        var _ref2 = _temp2 === void 0 ? {} : _temp2,
            _ref2$suppressRefErro = _ref2.suppressRefError,
            suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro; // this is used in the render to know whether the user has called getRootProps.
        // It uses that to know whether to apply the props automatically


        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;

        var _this$getState = _this.getState(),
            isOpen = _this$getState.isOpen;

        return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, _this.rootRef), _extends2.role = 'combobox', _extends2['aria-expanded'] = isOpen, _extends2['aria-haspopup'] = 'listbox', _extends2['aria-owns'] = isOpen ? _this.menuId : null, _extends2['aria-labelledby'] = _this.labelId, _extends2), rest);
      };

      _this.keyDownHandlers = {
        ArrowDown: function ArrowDown(event) {
          var _this2 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, function () {
              var itemCount = _this2.getItemCount();

              if (itemCount > 0) {
                var _this2$getState = _this2.getState(),
                    highlightedIndex = _this2$getState.highlightedIndex;

                var nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, function (index) {
                  return _this2.getItemNodeFromIndex(index);
                });

                _this2.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp: function ArrowUp(event) {
          var _this3 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, function () {
              var itemCount = _this3.getItemCount();

              if (itemCount > 0) {
                var _this3$getState = _this3.getState(),
                    highlightedIndex = _this3$getState.highlightedIndex;

                var nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, function (index) {
                  return _this3.getItemNodeFromIndex(index);
                });

                _this3.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        },
        Enter: function Enter(event) {
          if (event.which === 229) {
            return;
          }

          var _this$getState2 = this.getState(),
              isOpen = _this$getState2.isOpen,
              highlightedIndex = _this$getState2.highlightedIndex;

          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            var item = this.items[highlightedIndex];
            var itemNode = this.getItemNodeFromIndex(highlightedIndex);

            if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
              return;
            }

            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape: function Escape(event) {
          event.preventDefault();
          this.reset({
            type: keyDownEscape,
            selectedItem: null,
            inputValue: ''
          });
        }
      };
      _this.buttonKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
        ' ': function _(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      });
      _this.inputKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
        Home: function Home(event) {
          var _this4 = this;

          event.preventDefault();
          var itemCount = this.getItemCount();

          var _this$getState3 = this.getState(),
              isOpen = _this$getState3.isOpen;

          if (itemCount <= 0 || !isOpen) {
            return;
          } // get next non-disabled starting downwards from 0 if that's disabled.


          var newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, function (index) {
            return _this4.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        },
        End: function End(event) {
          var _this5 = this;

          event.preventDefault();
          var itemCount = this.getItemCount();

          var _this$getState4 = this.getState(),
              isOpen = _this$getState4.isOpen;

          if (itemCount <= 0 || !isOpen) {
            return;
          } // get next non-disabled starting upwards from last index if that's disabled.


          var newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, function (index) {
            return _this5.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }
      });

      _this.getToggleButtonProps = function (_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3,
            onClick = _ref3.onClick,
            onPress = _ref3.onPress,
            onKeyDown = _ref3.onKeyDown,
            onKeyUp = _ref3.onKeyUp,
            onBlur = _ref3.onBlur,
            rest = _objectWithoutPropertiesLoose(_ref3, ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"]);

        var _this$getState5 = _this.getState(),
            isOpen = _this$getState5.isOpen;

        var enabledEventHandlers = {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return _extends({
          type: 'button',
          role: 'button',
          'aria-label': isOpen ? 'close menu' : 'open menu',
          'aria-haspopup': true,
          'data-toggle': true
        }, eventHandlers, {}, rest);
      };

      _this.buttonHandleKeyUp = function (event) {
        // Prevent click event from emitting in Firefox
        event.preventDefault();
      };

      _this.buttonHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (_this.buttonKeyDownHandlers[key]) {
          _this.buttonKeyDownHandlers[key].call(_assertThisInitialized(_this), event);
        }
      };

      _this.buttonHandleClick = function (event) {
        event.preventDefault(); // handle odd case for Safari and Firefox which
        // don't give the button the focus properly.

        /* istanbul ignore if (can't reasonably test this) */

        if (_this.props.environment.document.activeElement === _this.props.environment.document.body) {
          event.target.focus();
        } // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
        // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
        // when building for production and should therefore have no impact on production code.


        if (false) {} else {
          // Ensure that toggle of menu occurs after the potential blur event in iOS
          _this.internalSetTimeout(function () {
            return _this.toggleMenu({
              type: clickButton
            });
          });
        }
      };

      _this.buttonHandleBlur = function (event) {
        var blurTarget = event.target; // Save blur target for comparison with activeElement later
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element

        _this.internalSetTimeout(function () {
          if (!_this.isMouseDown && (_this.props.environment.document.activeElement == null || _this.props.environment.document.activeElement.id !== _this.inputId) && _this.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
          ) {
              _this.reset({
                type: blurButton
              });
            }
        });
      };

      _this.getLabelProps = function (props) {
        return _extends({
          htmlFor: _this.inputId,
          id: _this.labelId
        }, props);
      };

      _this.getInputProps = function (_temp4) {
        var _ref4 = _temp4 === void 0 ? {} : _temp4,
            onKeyDown = _ref4.onKeyDown,
            onBlur = _ref4.onBlur,
            onChange = _ref4.onChange,
            onInput = _ref4.onInput,
            onChangeText = _ref4.onChangeText,
            rest = _objectWithoutPropertiesLoose(_ref4, ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"]);

        var onChangeKey;
        var eventHandlers = {};
        /* istanbul ignore next (preact) */

        onChangeKey = 'onChange';

        var _this$getState6 = _this.getState(),
            inputValue = _this$getState6.inputValue,
            isOpen = _this$getState6.isOpen,
            highlightedIndex = _this$getState6.highlightedIndex;

        if (!rest.disabled) {
          var _eventHandlers;

          eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
        }
        /* istanbul ignore if (react-native) */


        return _extends({
          'aria-autocomplete': 'list',
          'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          'aria-controls': isOpen ? _this.menuId : null,
          'aria-labelledby': _this.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: 'off',
          value: inputValue,
          id: _this.inputId
        }, eventHandlers, {}, rest);
      };

      _this.inputHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (key && _this.inputKeyDownHandlers[key]) {
          _this.inputKeyDownHandlers[key].call(_assertThisInitialized(_this), event);
        }
      };

      _this.inputHandleChange = function (event) {
        _this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue: event.target.value,
          highlightedIndex: _this.props.defaultHighlightedIndex
        });
      };

      _this.inputHandleBlur = function () {
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
        _this.internalSetTimeout(function () {
          var downshiftButtonIsActive = _this.props.environment.document && !!_this.props.environment.document.activeElement && !!_this.props.environment.document.activeElement.dataset && _this.props.environment.document.activeElement.dataset.toggle && _this._rootNode && _this._rootNode.contains(_this.props.environment.document.activeElement);

          if (!_this.isMouseDown && !downshiftButtonIsActive) {
            _this.reset({
              type: blurInput
            });
          }
        });
      };

      _this.menuRef = function (node) {
        _this._menuNode = node;
      };

      _this.getMenuProps = function (_temp5, _temp6) {
        var _extends3;

        var _ref5 = _temp5 === void 0 ? {} : _temp5,
            _ref5$refKey = _ref5.refKey,
            refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
            ref = _ref5.ref,
            props = _objectWithoutPropertiesLoose(_ref5, ["refKey", "ref"]);

        var _ref6 = _temp6 === void 0 ? {} : _temp6,
            _ref6$suppressRefErro = _ref6.suppressRefError,
            suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;

        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = 'listbox', _extends3['aria-labelledby'] = props && props['aria-label'] ? null : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
      };

      _this.getItemProps = function (_temp7) {
        var _enabledEventHandlers;

        var _ref7 = _temp7 === void 0 ? {} : _temp7,
            onMouseMove = _ref7.onMouseMove,
            onMouseDown = _ref7.onMouseDown,
            onClick = _ref7.onClick,
            onPress = _ref7.onPress,
            index = _ref7.index,
            _ref7$item = _ref7.item,
            item = _ref7$item === void 0 ?  false ?
        /* istanbul ignore next */
        0 : requiredProp('getItemProps', 'item') : _ref7$item,
            rest = _objectWithoutPropertiesLoose(_ref7, ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"]);

        if (index === undefined) {
          _this.items.push(item);

          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }

        var onSelectKey = 'onClick';
        var customClickHandler = onClick;
        var enabledEventHandlers = (_enabledEventHandlers = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: callAllEventHandlers(onMouseMove, function () {
            if (index === _this.getState().highlightedIndex) {
              return;
            }

            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            }); // We never want to manually scroll when changing state based
            // on `onMouseMove` because we will be moving the element out
            // from under the user which is currently scrolling/moving the
            // cursor


            _this.avoidScrolling = true;

            _this.internalSetTimeout(function () {
              return _this.avoidScrolling = false;
            }, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, function (event) {
            // This prevents the activeElement from being changed
            // to the item so it can remain with the current activeElement
            // which is a more common use case.
            event.preventDefault();
          })
        }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function () {
          _this.selectItemAtIndex(index, {
            type: clickItem
          });
        }), _enabledEventHandlers); // Passing down the onMouseDown handler to prevent redirect
        // of the activeElement if clicking on disabled items

        var eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return _extends({
          id: _this.getItemId(index),
          role: 'option',
          'aria-selected': _this.getState().highlightedIndex === index
        }, eventHandlers, {}, rest);
      };

      _this.clearItems = function () {
        _this.items = [];
      };

      _this.reset = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref8) {
          var selectedItem = _ref8.selectedItem;
          return _extends({
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem)
          }, otherStateToSet);
        }, cb);
      };

      _this.toggleMenu = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref9) {
          var isOpen = _ref9.isOpen;
          return _extends({
            isOpen: !isOpen
          }, isOpen && {
            highlightedIndex: _this.props.defaultHighlightedIndex
          }, {}, otherStateToSet);
        }, function () {
          var _this$getState7 = _this.getState(),
              isOpen = _this$getState7.isOpen,
              highlightedIndex = _this$getState7.highlightedIndex;

          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === 'number') {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }

          cbToCb(cb)();
        });
      };

      _this.openMenu = function (cb) {
        _this.internalSetState({
          isOpen: true
        }, cb);
      };

      _this.closeMenu = function (cb) {
        _this.internalSetState({
          isOpen: false
        }, cb);
      };

      _this.updateStatus = debounce(function () {
        var state = _this.getState();

        var item = _this.items[state.highlightedIndex];

        var resultCount = _this.getItemCount();

        var status = _this.props.getA11yStatusMessage(_extends({
          itemToString: _this.props.itemToString,
          previousResultCount: _this.previousResultCount,
          resultCount: resultCount,
          highlightedItem: item
        }, state));

        _this.previousResultCount = resultCount;
        setStatus(status, _this.props.environment.document);
      }, 200); // fancy destructuring + defaults + aliases
      // this basically says each value of state should either be set to
      // the initial value or the default value if the initial value is not provided

      var _this$props = _this.props,
          defaultHighlightedIndex = _this$props.defaultHighlightedIndex,
          _this$props$initialHi = _this$props.initialHighlightedIndex,
          _highlightedIndex = _this$props$initialHi === void 0 ? defaultHighlightedIndex : _this$props$initialHi,
          defaultIsOpen = _this$props.defaultIsOpen,
          _this$props$initialIs = _this$props.initialIsOpen,
          _isOpen = _this$props$initialIs === void 0 ? defaultIsOpen : _this$props$initialIs,
          _this$props$initialIn = _this$props.initialInputValue,
          _inputValue = _this$props$initialIn === void 0 ? '' : _this$props$initialIn,
          _this$props$initialSe = _this$props.initialSelectedItem,
          _selectedItem = _this$props$initialSe === void 0 ? null : _this$props$initialSe;

      var _state = _this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });

      if (_state.selectedItem != null && _this.props.initialInputValue === undefined) {
        _state.inputValue = _this.props.itemToString(_state.selectedItem);
      }

      _this.state = _state;
      return _this;
    }

    var _proto = Downshift.prototype;
    /**
     * Clear all running timeouts
     */

    _proto.internalClearTimeouts = function internalClearTimeouts() {
      this.timeoutIds.forEach(function (id) {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }
    /**
     * Gets the state based on internal state or props
     * If a state value is passed via props, then that
     * is the value given, otherwise it's retrieved from
     * stateToMerge
     *
     * @param {Object} stateToMerge defaults to this.state
     * @return {Object} the state
     */
    ;

    _proto.getState = function getState$1(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }

      return getState(stateToMerge, this.props);
    };

    _proto.getItemCount = function getItemCount() {
      // things read better this way. They're in priority order:
      // 1. `this.itemCount`
      // 2. `this.props.itemCount`
      // 3. `this.items.length`
      var itemCount = this.items.length;

      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== undefined) {
        itemCount = this.props.itemCount;
      }

      return itemCount;
    };

    _proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    };

    _proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
      /* istanbul ignore else (react-native) */
      {
        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    };

    _proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
      var _this6 = this;

      var itemCount = this.getItemCount();

      var _this$getState8 = this.getState(),
          highlightedIndex = _this$getState8.highlightedIndex;

      if (itemCount > 0) {
        var nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, function (index) {
          return _this6.getItemNodeFromIndex(index);
        });
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    };

    _proto.getStateAndHelpers = function getStateAndHelpers() {
      var _this$getState9 = this.getState(),
          highlightedIndex = _this$getState9.highlightedIndex,
          inputValue = _this$getState9.inputValue,
          selectedItem = _this$getState9.selectedItem,
          isOpen = _this$getState9.isOpen;

      var itemToString = this.props.itemToString;
      var id = this.id;
      var getRootProps = this.getRootProps,
          getToggleButtonProps = this.getToggleButtonProps,
          getLabelProps = this.getLabelProps,
          getMenuProps = this.getMenuProps,
          getInputProps = this.getInputProps,
          getItemProps = this.getItemProps,
          openMenu = this.openMenu,
          closeMenu = this.closeMenu,
          toggleMenu = this.toggleMenu,
          selectItem = this.selectItem,
          selectItemAtIndex = this.selectItemAtIndex,
          selectHighlightedItem = this.selectHighlightedItem,
          setHighlightedIndex = this.setHighlightedIndex,
          clearSelection = this.clearSelection,
          clearItems = this.clearItems,
          reset = this.reset,
          setItemCount = this.setItemCount,
          unsetItemCount = this.unsetItemCount,
          setState = this.internalSetState;
      return {
        // prop getters
        getRootProps: getRootProps,
        getToggleButtonProps: getToggleButtonProps,
        getLabelProps: getLabelProps,
        getMenuProps: getMenuProps,
        getInputProps: getInputProps,
        getItemProps: getItemProps,
        // actions
        reset: reset,
        openMenu: openMenu,
        closeMenu: closeMenu,
        toggleMenu: toggleMenu,
        selectItem: selectItem,
        selectItemAtIndex: selectItemAtIndex,
        selectHighlightedItem: selectHighlightedItem,
        setHighlightedIndex: setHighlightedIndex,
        clearSelection: clearSelection,
        clearItems: clearItems,
        setItemCount: setItemCount,
        unsetItemCount: unsetItemCount,
        setState: setState,
        // props
        itemToString: itemToString,
        // derived
        id: id,
        // state
        highlightedIndex: highlightedIndex,
        inputValue: inputValue,
        isOpen: isOpen,
        selectedItem: selectedItem
      };
    } //////////////////////////// ROOT
    ;

    _proto.componentDidMount = function componentDidMount() {
      var _this7 = this;
      /* istanbul ignore if (react-native) */


      if ( true && this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
      /* istanbul ignore if (react-native) */


      {
        // this.isMouseDown helps us track whether the mouse is currently held down.
        // This is useful when the user clicks on an item in the list, but holds the mouse
        // down long enough for the list to disappear (because the blur event fires on the input)
        // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
        // trigger hiding the menu.
        var onMouseDown = function onMouseDown() {
          _this7.isMouseDown = true;
        };

        var onMouseUp = function onMouseUp(event) {
          _this7.isMouseDown = false; // if the target element or the activeElement is within a downshift node
          // then we don't want to reset downshift

          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document);

          if (!contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: mouseUp
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        }; // Touching an element in iOS gives focus and hover states, but touching out of
        // the element will remove hover, and persist the focus state, resulting in the
        // blur event not being triggered.
        // this.isTouchMove helps us track whether the user is tapping or swiping on a touch screen.
        // If the user taps outside of Downshift, the component should be reset,
        // but not if the user is swiping


        var onTouchStart = function onTouchStart() {
          _this7.isTouchMove = false;
        };

        var onTouchMove = function onTouchMove() {
          _this7.isTouchMove = true;
        };

        var onTouchEnd = function onTouchEnd(event) {
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document, false);

          if (!_this7.isTouchMove && !contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: touchEnd
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        };

        var environment = this.props.environment;
        environment.addEventListener('mousedown', onMouseDown);
        environment.addEventListener('mouseup', onMouseUp);
        environment.addEventListener('touchstart', onTouchStart);
        environment.addEventListener('touchmove', onTouchMove);
        environment.addEventListener('touchend', onTouchEnd);

        this.cleanup = function () {
          _this7.internalClearTimeouts();

          _this7.updateStatus.cancel();

          environment.removeEventListener('mousedown', onMouseDown);
          environment.removeEventListener('mouseup', onMouseUp);
          environment.removeEventListener('touchstart', onTouchStart);
          environment.removeEventListener('touchmove', onTouchMove);
          environment.removeEventListener('touchend', onTouchEnd);
        };
      }
    };

    _proto.shouldScroll = function shouldScroll(prevState, prevProps) {
      var _ref10 = this.props.highlightedIndex === undefined ? this.getState() : this.props,
          currentHighlightedIndex = _ref10.highlightedIndex;

      var _ref11 = prevProps.highlightedIndex === undefined ? prevState : prevProps,
          prevHighlightedIndex = _ref11.highlightedIndex;

      var scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      return scrollWhenOpen || currentHighlightedIndex !== prevHighlightedIndex;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (true) {
        validateControlledUnchanged(prevProps, this.props);
        /* istanbul ignore if (react-native) */

        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }

      if (isControlledProp(this.props, 'selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }

      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      /* istanbul ignore else (react-native) */


      this.updateStatus();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cleanup(); // avoids memory leak
    };

    _proto.render = function render() {
      var children = unwrapArray(this.props.children, noop); // because the items are rerendered every time we call the children
      // we clear this out each render and it will be populated again as
      // getItemProps is called.

      this.clearItems(); // we reset this so we know whether the user calls getRootProps during
      // this render. If they do then we don't need to do anything,
      // if they don't then we need to clone the element they return and
      // apply the props for them.

      this.getRootProps.called = false;
      this.getRootProps.refKey = undefined;
      this.getRootProps.suppressRefError = undefined; // we do something similar for getMenuProps

      this.getMenuProps.called = false;
      this.getMenuProps.refKey = undefined;
      this.getMenuProps.suppressRefError = undefined; // we do something similar for getLabelProps

      this.getLabelProps.called = false; // and something similar for getInputProps

      this.getInputProps.called = false;
      var element = unwrapArray(children(this.getStateAndHelpers()));

      if (!element) {
        return null;
      }

      if (this.getRootProps.called || this.props.suppressRefError) {
        if ( true && !this.getRootProps.suppressRefError && !this.props.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }

        return element;
      } else if (isDOMElement(element)) {
        // they didn't apply the root props, but we can clone
        // this and apply the props ourselves
        return react.cloneElement(element, this.getRootProps(getElementProps(element)));
      }
      /* istanbul ignore else */


      if (true) {
        // they didn't apply the root props, but they need to
        // otherwise we can't query around the autocomplete
        throw new Error('downshift: If you return a non-DOM element, you must apply the getRootProps function');
      }
      /* istanbul ignore next */


      return undefined;
    };

    return Downshift;
  }(react.Component);

  Downshift.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage,
    itemToString: function itemToString(i) {
      if (i == null) {
        return '';
      }

      if ( true && isPlainObject(i) && !i.hasOwnProperty('toString')) {
        // eslint-disable-next-line no-console
        console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
      }

      return String(i);
    },
    onStateChange: noop,
    onInputValueChange: noop,
    onUserAction: noop,
    onChange: noop,
    onSelect: noop,
    onOuterClick: noop,
    selectedItemChanged: function selectedItemChanged(prevItem, item) {
      return prevItem !== item;
    },
    environment: typeof window === 'undefined'
    /* istanbul ignore next (ssr) */
    ? {} : window,
    stateReducer: function stateReducer(state, stateToSet) {
      return stateToSet;
    },
    suppressRefError: false,
    scrollIntoView: scrollIntoView
  };
  Downshift.stateChangeTypes = stateChangeTypes;
  return Downshift;
}();

 true ? Downshift.propTypes = {
  children: PropTypes.func,
  defaultHighlightedIndex: PropTypes.number,
  defaultIsOpen: PropTypes.bool,
  initialHighlightedIndex: PropTypes.number,
  initialSelectedItem: PropTypes.any,
  initialInputValue: PropTypes.string,
  initialIsOpen: PropTypes.bool,
  getA11yStatusMessage: PropTypes.func,
  itemToString: PropTypes.func,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onStateChange: PropTypes.func,
  onInputValueChange: PropTypes.func,
  onUserAction: PropTypes.func,
  onOuterClick: PropTypes.func,
  selectedItemChanged: PropTypes.func,
  stateReducer: PropTypes.func,
  itemCount: PropTypes.number,
  id: PropTypes.string,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  }),
  suppressRefError: PropTypes.bool,
  scrollIntoView: PropTypes.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components

  /* eslint-disable react/no-unused-prop-types */
  selectedItem: PropTypes.any,
  isOpen: PropTypes.bool,
  inputValue: PropTypes.string,
  highlightedIndex: PropTypes.number,
  labelId: PropTypes.string,
  inputId: PropTypes.string,
  menuId: PropTypes.string,
  getItemId: PropTypes.func
  /* eslint-enable react/no-unused-prop-types */

} : 0;

function validateGetMenuPropsCalledCorrectly(node, _ref12) {
  var refKey = _ref12.refKey;

  if (!node) {
    // eslint-disable-next-line no-console
    console.error("downshift: The ref prop \"" + refKey + "\" from getMenuProps was not applied correctly on your menu element.");
  }
}

function validateGetRootPropsCalledCorrectly(element, _ref13) {
  var refKey = _ref13.refKey;
  var refKeySpecified = refKey !== 'ref';
  var isComposite = !isDOMElement(element);

  if (isComposite && !refKeySpecified && !reactIs.isForwardRef(element)) {
    // eslint-disable-next-line no-console
    console.error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    // eslint-disable-next-line no-console
    console.error("downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified \"" + refKey + "\"");
  }

  if (!reactIs.isForwardRef(element) && !getElementProps(element)[refKey]) {
    // eslint-disable-next-line no-console
    console.error("downshift: You must apply the ref prop \"" + refKey + "\" from getRootProps onto your root element.");
  }
}

function validateControlledUnchanged(prevProps, nextProps) {
  var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
  ['selectedItem', 'isOpen', 'inputValue', 'highlightedIndex'].forEach(function (propKey) {
    if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the controlled prop \"" + propKey + "\" to be uncontrolled. " + warningDescription);
    } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
      // eslint-disable-next-line no-console
      console.error("downshift: A component has changed the uncontrolled prop \"" + propKey + "\" to be controlled. " + warningDescription);
    }
  });
}

var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};

function callOnChangeProps(action, state, newState) {
  var props = action.props,
      type = action.type;
  var changes = {};
  Object.keys(state).forEach(function (key) {
    invokeOnChangeHandler(key, props, state, newState);

    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });

  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange(_extends({
      type: type
    }, changes));
  }
}

function invokeOnChangeHandler(key, props, state, newState) {
  var handler = "on" + capitalizeString(key) + "Change";

  if (props[handler] && newState[key] !== undefined && newState[key] !== state[key]) {
    props[handler](newState);
  }
}
/**
 * Default state reducer that returns the changes.
 *
 * @param {Object} s state.
 * @param {Object} a action with changes.
 * @returns {Object} changes.
 */


function stateReducer(s, a) {
  return a.changes;
}
/**
 * Returns a message to be added to aria-live region when item is selected.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */


function getA11ySelectionMessage(selectionParameters) {
  var selectedItem = selectionParameters.selectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return selectedItem ? itemToStringLocal(selectedItem) + " has been selected." : '';
}
/**
 * Debounced call for updating the a11y message.
 */


var updateA11yStatus = debounce(function (getA11yMessage, document) {
  setStatus(getA11yMessage(), document);
}, 200);

function getElementIds(_ref) {
  var id = _ref.id,
      labelId = _ref.labelId,
      menuId = _ref.menuId,
      getItemId = _ref.getItemId,
      toggleButtonId = _ref.toggleButtonId;
  var uniqueId = id === undefined ? "downshift-" + generateId() : id;
  return {
    labelId: labelId || uniqueId + "-label",
    menuId: menuId || uniqueId + "-menu",
    getItemId: getItemId || function (index) {
      return uniqueId + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || uniqueId + "-toggle-button"
  };
}

function getItemIndex(index, item, items) {
  if (index !== undefined) {
    return index;
  }

  if (items.length === 0) {
    return -1;
  }

  return items.indexOf(item);
}

function itemToString(item) {
  return item ? String(item) : '';
}

function getPropTypesValidator(caller, propTypes) {
  // istanbul ignore next
  return function (options) {
    if (options === void 0) {
      options = {};
    }

    Object.keys(propTypes).forEach(function (key) {
      PropTypes.checkPropTypes(propTypes, options, key, caller.name);
    });
  };
}

function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}

function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}
/**
 * Computes the controlled state using a the previous state, props,
 * two reducers, one from downshift and an optional one from the user.
 * Also calls the onChange handlers for state values that have changed.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */


function useControlledState(reducer, initialState, props) {
  var _useState = react.useState(initialState),
      uncontrolledState = _useState[0],
      setState = _useState[1];

  var state = getState(uncontrolledState, props);

  var dispatch = function dispatch(action) {
    var stateReducerFromProps = action.props.stateReducer;
    var changes = reducer(state, action);
    var newState = stateReducerFromProps(state, _extends({}, action, {
      changes: changes
    }));
    callOnChangeProps(action, state, newState);
    setState(newState);
  };

  return [getState(state, props), function dispatchWithProps(action) {
    return dispatch(_extends({
      props: props
    }, action));
  }];
}

var defaultProps = {
  itemToString: itemToString,
  stateReducer: stateReducer,
  getA11ySelectionMessage: getA11ySelectionMessage,
  scrollIntoView: scrollIntoView,
  circularNavigation: false,
  environment: typeof window === 'undefined'
  /* istanbul ignore next (ssr) */
  ? {} : window
};

function getDefaultValue(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  var defaultPropKey = "default" + capitalizeString(propKey);

  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }

  return defaultStateValues[propKey];
}

function getInitialValue(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  if (propKey in props) {
    return props[propKey];
  }

  var initialPropKey = "initial" + capitalizeString(propKey);

  if (initialPropKey in props) {
    return props[initialPropKey];
  }

  return getDefaultValue(props, propKey, defaultStateValues);
}

function getInitialState(props) {
  var selectedItem = getInitialValue(props, 'selectedItem');
  var isOpen = getInitialValue(props, 'isOpen');
  var highlightedIndex = getInitialValue(props, 'highlightedIndex');
  var inputValue = getInitialValue(props, 'inputValue');
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
  var items = props.items,
      initialHighlightedIndex = props.initialHighlightedIndex,
      defaultHighlightedIndex = props.defaultHighlightedIndex;
  var selectedItem = state.selectedItem,
      highlightedIndex = state.highlightedIndex; // initialHighlightedIndex will give value to highlightedIndex on initial state only.

  if (initialHighlightedIndex !== undefined && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }

  if (defaultHighlightedIndex !== undefined) {
    return defaultHighlightedIndex;
  }

  if (selectedItem) {
    if (offset === 0) {
      return items.indexOf(selectedItem);
    }

    return getNextWrappingIndex(offset, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
  }

  if (offset === 0) {
    return -1;
  }

  return offset < 0 ? items.length - 1 : 0;
}

function getItemIndexByCharacterKey(keysSoFar, highlightedIndex, items, itemToStringParam, getItemNodeFromIndex) {
  var lowerCasedItemStrings = items.map(function (item) {
    return itemToStringParam(item).toLowerCase();
  });
  var lowerCasedKeysSoFar = keysSoFar.toLowerCase();

  var isValid = function isValid(itemString, index) {
    var element = getItemNodeFromIndex(index);
    return itemString.startsWith(lowerCasedKeysSoFar) && !(element && element.hasAttribute('disabled'));
  };

  for (var index = highlightedIndex + 1; index < lowerCasedItemStrings.length; index++) {
    var itemString = lowerCasedItemStrings[index];

    if (isValid(itemString, index)) {
      return index;
    }
  }

  for (var _index = 0; _index < highlightedIndex; _index++) {
    var _itemString = lowerCasedItemStrings[_index];

    if (isValid(_itemString, _index)) {
      return _index;
    }
  }

  return highlightedIndex;
}

var propTypes = {
  items: PropTypes.array.isRequired,
  itemToString: PropTypes.func,
  getA11yStatusMessage: PropTypes.func,
  getA11ySelectionMessage: PropTypes.func,
  circularNavigation: PropTypes.bool,
  highlightedIndex: PropTypes.number,
  defaultHighlightedIndex: PropTypes.number,
  initialHighlightedIndex: PropTypes.number,
  isOpen: PropTypes.bool,
  defaultIsOpen: PropTypes.bool,
  initialIsOpen: PropTypes.bool,
  selectedItem: PropTypes.any,
  initialSelectedItem: PropTypes.any,
  defaultSelectedItem: PropTypes.any,
  id: PropTypes.string,
  labelId: PropTypes.string,
  menuId: PropTypes.string,
  getItemId: PropTypes.func,
  toggleButtonId: PropTypes.string,
  stateReducer: PropTypes.func,
  onSelectedItemChange: PropTypes.func,
  onHighlightedIndexChange: PropTypes.func,
  onStateChange: PropTypes.func,
  onIsOpenChange: PropTypes.func,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  })
};
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */

function getA11yStatusMessage$1(_ref) {
  var isOpen = _ref.isOpen,
      resultCount = _ref.resultCount,
      previousResultCount = _ref.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.";
  }

  return '';
}

var defaultProps$1 = _extends({}, defaultProps, {
  getA11yStatusMessage: getA11yStatusMessage$1
});

var MenuKeyDownArrowDown =  true ? '__menu_keydown_arrow_down__' : 0;
var MenuKeyDownArrowUp =  true ? '__menu_keydown_arrow_up__' : 0;
var MenuKeyDownEscape =  true ? '__menu_keydown_escape__' : 0;
var MenuKeyDownHome =  true ? '__menu_keydown_home__' : 0;
var MenuKeyDownEnd =  true ? '__menu_keydown_end__' : 0;
var MenuKeyDownEnter =  true ? '__menu_keydown_enter__' : 0;
var MenuKeyDownSpaceButton =  true ? '__menu_keydown_space_button__' : 0;
var MenuKeyDownCharacter =  true ? '__menu_keydown_character__' : 0;
var MenuBlur =  true ? '__menu_blur__' : 0;
var MenuMouseLeave =  true ? '__menu_mouse_leave__' : 0;
var ItemMouseMove =  true ? '__item_mouse_move__' : 0;
var ItemClick =  true ? '__item_click__' : 0;
var ToggleButtonClick =  true ? '__togglebutton_click__' : 0;
var ToggleButtonKeyDownArrowDown =  true ? '__togglebutton_keydown_arrow_down__' : 0;
var ToggleButtonKeyDownArrowUp =  true ? '__togglebutton_keydown_arrow_up__' : 0;
var ToggleButtonKeyDownCharacter =  true ? '__togglebutton_keydown_character__' : 0;
var FunctionToggleMenu =  true ? '__function_toggle_menu__' : 0;
var FunctionOpenMenu =  true ? '__function_open_menu__' : 0;
var FunctionCloseMenu =  true ? '__function_close_menu__' : 0;
var FunctionSetHighlightedIndex =  true ? '__function_set_highlighted_index__' : 0;
var FunctionSelectItem =  true ? '__function_select_item__' : 0;
var FunctionSetInputValue =  true ? '__function_set_input_value__' : 0;
var FunctionReset =  true ? '__function_reset__' : 0;
var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown: MenuKeyDownArrowDown,
  MenuKeyDownArrowUp: MenuKeyDownArrowUp,
  MenuKeyDownEscape: MenuKeyDownEscape,
  MenuKeyDownHome: MenuKeyDownHome,
  MenuKeyDownEnd: MenuKeyDownEnd,
  MenuKeyDownEnter: MenuKeyDownEnter,
  MenuKeyDownSpaceButton: MenuKeyDownSpaceButton,
  MenuKeyDownCharacter: MenuKeyDownCharacter,
  MenuBlur: MenuBlur,
  MenuMouseLeave: MenuMouseLeave,
  ItemMouseMove: ItemMouseMove,
  ItemClick: ItemClick,
  ToggleButtonClick: ToggleButtonClick,
  ToggleButtonKeyDownArrowDown: ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp: ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter: ToggleButtonKeyDownCharacter,
  FunctionToggleMenu: FunctionToggleMenu,
  FunctionOpenMenu: FunctionOpenMenu,
  FunctionCloseMenu: FunctionCloseMenu,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
  FunctionSelectItem: FunctionSelectItem,
  FunctionSetInputValue: FunctionSetInputValue,
  FunctionReset: FunctionReset
});
/* eslint-disable complexity */

function downshiftSelectReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemMouseMove:
      changes = {
        highlightedIndex: action.index
      };
      break;

    case ItemClick:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        selectedItem: props.items[action.index]
      };
      break;

    case ToggleButtonKeyDownCharacter:
      {
        var lowercasedKey = action.key;
        var inputValue = "" + state.inputValue + lowercasedKey;
        var itemIndex = getItemIndexByCharacterKey(inputValue, state.selectedItem ? props.items.indexOf(state.selectedItem) : -1, props.items, props.itemToString, action.getItemNodeFromIndex);
        changes = _extends({
          inputValue: inputValue
        }, itemIndex >= 0 && {
          selectedItem: props.items[itemIndex]
        });
      }
      break;

    case ToggleButtonKeyDownArrowDown:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;

    case ToggleButtonKeyDownArrowUp:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;

    case MenuKeyDownEnter:
    case MenuKeyDownSpaceButton:
      changes = _extends({
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex')
      }, state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex]
      });
      break;

    case MenuKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case MenuKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuKeyDownCharacter:
      {
        var _lowercasedKey = action.key;

        var _inputValue = "" + state.inputValue + _lowercasedKey;

        var highlightedIndex = getItemIndexByCharacterKey(_inputValue, state.highlightedIndex, props.items, props.itemToString, action.getItemNodeFromIndex);
        changes = _extends({
          inputValue: _inputValue
        }, highlightedIndex >= 0 && {
          highlightedIndex: highlightedIndex
        });
      }
      break;

    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;

    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;

    case MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;

    case ToggleButtonClick:
    case FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;

    case FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;

    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem
      };
      break;

    case FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;

    case FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: getDefaultValue(props, 'selectedItem'),
        inputValue: getDefaultValue(props, 'inputValue')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return _extends({}, state, {}, changes);
}
/* eslint-enable complexity */


var validatePropTypes =  false ?
/* istanbul ignore next */
0 : getPropTypesValidator(useSelect, propTypes);
useSelect.stateChangeTypes = stateChangeTypes$1;

function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  /* istanbul ignore else */


  if (true) {
    validatePropTypes(userProps);
  } // Props defaults and destructuring.


  var props = _extends({}, defaultProps$1, {}, userProps);

  var items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      itemToString = props.itemToString,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      getA11yStatusMessage = props.getA11yStatusMessage; // Initial state depending on controlled props.

  var initialState = getInitialState(props); // Reducer init.

  var _useControlledState = useControlledState(downshiftSelectReducer, initialState, props),
      _useControlledState$ = _useControlledState[0],
      isOpen = _useControlledState$.isOpen,
      highlightedIndex = _useControlledState$.highlightedIndex,
      selectedItem = _useControlledState$.selectedItem,
      inputValue = _useControlledState$.inputValue,
      dispatch = _useControlledState[1]; // Refs


  var toggleButtonRef = react.useRef(null);
  var menuRef = react.useRef(null);
  var isInitialMount = react.useRef(true);
  var shouldScroll = react.useRef(true);
  var clearTimeout = react.useRef(null);
  var mouseAndTouchTrackers = react.useRef({
    isMouseDown: false,
    isTouchMove: false
  });
  var elementIds = react.useRef(getElementIds(props));
  var previousResultCountRef = react.useRef(); // Some utils.

  var getItemNodeFromIndex = function getItemNodeFromIndex(index) {
    return environment.document.getElementById(elementIds.current.getItemId(index));
  }; // Effects.

  /* Sets a11y status message on changes in state. */


  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    var previousResultCount = previousResultCountRef.current;
    updateA11yStatus(function () {
      return getA11yStatusMessage({
        isOpen: isOpen,
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        inputValue: inputValue,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length,
        itemToString: itemToString,
        previousResultCount: previousResultCount
      });
    }, environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, selectedItem, inputValue]);
  /* Sets a11y status message on changes in selectedItem. */

  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    var previousResultCount = previousResultCountRef.current;
    updateA11yStatus(function () {
      return getA11ySelectionMessage({
        isOpen: isOpen,
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        inputValue: inputValue,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length,
        itemToString: itemToString,
        previousResultCount: previousResultCount
      });
    }, environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);
  /* Sets cleanup for the keysSoFar after 500ms. */

  react.useEffect(function () {
    // init the clean function here as we need access to dispatch.
    if (isInitialMount.current) {
      clearTimeout.current = debounce(function (outerDispatch) {
        outerDispatch({
          type: FunctionSetInputValue,
          inputValue: ''
        });
      }, 500);
    }

    if (!inputValue) {
      return;
    }

    clearTimeout.current(dispatch); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  /* Controls the focus on the menu or the toggle button. */

  react.useEffect(function () {
    // Don't focus menu on first render.
    if (isInitialMount.current) {
      // Unless it was initialised as open.
      if ((initialIsOpen || defaultIsOpen || isOpen) && menuRef.current) {
        menuRef.current.focus();
      }

      return;
    } // Focus menu on open.
    // istanbul ignore next


    if (isOpen && menuRef.current) {
      menuRef.current.focus(); // Focus toggleButton on close.
    } else if (environment.document.activeElement === menuRef.current && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen]);
  /* Scroll on highlighted item if change comes from keyboard. */

  react.useEffect(function () {
    if (highlightedIndex < 0 || !isOpen || !items.length) {
      return;
    }

    if (shouldScroll.current === false) {
      shouldScroll.current = true;
    } else {
      scrollIntoView(getItemNodeFromIndex(highlightedIndex), menuRef.current);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [highlightedIndex]);
  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    previousResultCountRef.current = items.length;
  });
  /* Make initial ref false. */

  react.useEffect(function () {
    isInitialMount.current = false;
  }, []);
  /* Add mouse/touch events to document. */

  react.useEffect(function () {
    // The same strategy for checking if a click occurred inside or outside downsift
    // as in downshift.js.
    var onMouseDown = function onMouseDown() {
      mouseAndTouchTrackers.current.isMouseDown = true;
    };

    var onMouseUp = function onMouseUp(event) {
      mouseAndTouchTrackers.current.isMouseDown = false;

      if (isOpen && !targetWithinDownshift(event.target, [toggleButtonRef.current, menuRef.current], environment.document)) {
        dispatch({
          type: MenuBlur
        });
      }
    };

    var onTouchStart = function onTouchStart() {
      mouseAndTouchTrackers.current.isTouchMove = false;
    };

    var onTouchMove = function onTouchMove() {
      mouseAndTouchTrackers.current.isTouchMove = true;
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (isOpen && !mouseAndTouchTrackers.current.isTouchMove && !targetWithinDownshift(event.target, [toggleButtonRef.current, menuRef.current], environment.document, false)) {
        dispatch({
          type: MenuBlur
        });
      }
    };

    environment.addEventListener('mousedown', onMouseDown);
    environment.addEventListener('mouseup', onMouseUp);
    environment.addEventListener('touchstart', onTouchStart);
    environment.addEventListener('touchmove', onTouchMove);
    environment.addEventListener('touchend', onTouchEnd);
    return function () {
      environment.removeEventListener('mousedown', onMouseDown);
      environment.removeEventListener('mouseup', onMouseUp);
      environment.removeEventListener('touchstart', onTouchStart);
      environment.removeEventListener('touchmove', onTouchMove);
      environment.removeEventListener('touchend', onTouchEnd);
    };
  }); // Event handler functions.

  var toggleButtonKeyDownHandlers = {
    ArrowDown: function ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowDown,
        getItemNodeFromIndex: getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    ArrowUp: function ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: ToggleButtonKeyDownArrowUp,
        getItemNodeFromIndex: getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    }
  };
  var menuKeyDownHandlers = {
    ArrowDown: function ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowDown,
        getItemNodeFromIndex: getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    ArrowUp: function ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownArrowUp,
        getItemNodeFromIndex: getItemNodeFromIndex,
        shiftKey: event.shiftKey
      });
    },
    Home: function Home(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownHome,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    },
    End: function End(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnd,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    },
    Escape: function Escape() {
      dispatch({
        type: MenuKeyDownEscape
      });
    },
    Enter: function Enter(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownEnter
      });
    },
    ' ': function _(event) {
      event.preventDefault();
      dispatch({
        type: MenuKeyDownSpaceButton
      });
    }
  }; // Event handlers.

  var menuHandleKeyDown = function menuHandleKeyDown(event) {
    var key = normalizeArrowKey(event);

    if (key && menuKeyDownHandlers[key]) {
      menuKeyDownHandlers[key](event);
    } else if (isAcceptedCharacterKey(key)) {
      dispatch({
        type: MenuKeyDownCharacter,
        key: key,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    }
  };

  var menuHandleBlur = function menuHandleBlur() {
    var shouldBlur = !mouseAndTouchTrackers.current.isMouseDown;
    /* istanbul ignore else */

    if (shouldBlur) {
      dispatch({
        type: MenuBlur
      });
    }
  };

  var menuHandleMouseLeave = function menuHandleMouseLeave() {
    dispatch({
      type: MenuMouseLeave
    });
  };

  var toggleButtonHandleClick = function toggleButtonHandleClick() {
    dispatch({
      type: ToggleButtonClick
    });
  };

  var toggleButtonHandleKeyDown = function toggleButtonHandleKeyDown(event) {
    var key = normalizeArrowKey(event);

    if (key && toggleButtonKeyDownHandlers[key]) {
      toggleButtonKeyDownHandlers[key](event);
    } else if (isAcceptedCharacterKey(key)) {
      dispatch({
        type: ToggleButtonKeyDownCharacter,
        key: key,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    }
  };

  var itemHandleMouseMove = function itemHandleMouseMove(index) {
    if (index === highlightedIndex) {
      return;
    }

    shouldScroll.current = false;
    dispatch({
      type: ItemMouseMove,
      index: index
    });
  };

  var itemHandleClick = function itemHandleClick(index) {
    dispatch({
      type: ItemClick,
      index: index
    });
  }; // Action functions.


  return {
    // prop getters.
    getToggleButtonProps: function getToggleButtonProps(_temp2) {
      var _extends3;

      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          onClick = _ref2.onClick,
          onKeyDown = _ref2.onKeyDown,
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? 'ref' : _ref2$refKey,
          ref = _ref2.ref,
          rest = _objectWithoutPropertiesLoose(_ref2, ["onClick", "onKeyDown", "refKey", "ref"]);

      var toggleProps = _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (toggleButtonNode) {
        toggleButtonRef.current = toggleButtonNode;
      }), _extends3.id = elementIds.current.toggleButtonId, _extends3['aria-haspopup'] = 'listbox', _extends3['aria-expanded'] = isOpen, _extends3['aria-labelledby'] = elementIds.current.labelId + " " + elementIds.current.toggleButtonId, _extends3), rest);

      if (!rest.disabled) {
        toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
        toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
      }

      return toggleProps;
    },
    getLabelProps: function getLabelProps(labelProps) {
      return _extends({
        id: elementIds.current.labelId,
        htmlFor: elementIds.current.toggleButtonId
      }, labelProps);
    },
    getMenuProps: function getMenuProps(_temp) {
      var _extends2;

      var _ref = _temp === void 0 ? {} : _temp,
          onMouseLeave = _ref.onMouseLeave,
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
          onKeyDown = _ref.onKeyDown,
          onBlur = _ref.onBlur,
          ref = _ref.ref,
          rest = _objectWithoutPropertiesLoose(_ref, ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"]);

      return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
        menuRef.current = menuNode;
      }), _extends2.id = elementIds.current.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIds.current.labelId, _extends2.tabIndex = -1, _extends2), isOpen && highlightedIndex > -1 && {
        'aria-activedescendant': elementIds.current.getItemId(highlightedIndex)
      }, {
        onMouseLeave: callAllEventHandlers(onMouseLeave, menuHandleMouseLeave),
        onKeyDown: callAllEventHandlers(onKeyDown, menuHandleKeyDown),
        onBlur: callAllEventHandlers(onBlur, menuHandleBlur)
      }, rest);
    },
    getItemProps: function getItemProps(_temp3) {
      var _ref3 = _temp3 === void 0 ? {} : _temp3,
          item = _ref3.item,
          index = _ref3.index,
          onMouseMove = _ref3.onMouseMove,
          onClick = _ref3.onClick,
          rest = _objectWithoutPropertiesLoose(_ref3, ["item", "index", "onMouseMove", "onClick"]);

      var itemIndex = getItemIndex(index, item, items);

      if (itemIndex < 0) {
        throw new Error('Pass either item or item index in getItemProps!');
      }

      var itemProps = _extends({
        role: 'option',
        'aria-selected': "" + (itemIndex === highlightedIndex),
        id: elementIds.current.getItemId(itemIndex)
      }, rest);

      if (!rest.disabled) {
        itemProps.onMouseMove = callAllEventHandlers(onMouseMove, function () {
          return itemHandleMouseMove(itemIndex);
        });
        itemProps.onClick = callAllEventHandlers(onClick, function () {
          return itemHandleClick(itemIndex);
        });
      }

      return itemProps;
    },
    // actions.
    toggleMenu: function toggleMenu() {
      dispatch({
        type: FunctionToggleMenu
      });
    },
    openMenu: function openMenu() {
      dispatch({
        type: FunctionOpenMenu
      });
    },
    closeMenu: function closeMenu() {
      dispatch({
        type: FunctionCloseMenu
      });
    },
    setHighlightedIndex: function setHighlightedIndex(newHighlightedIndex) {
      dispatch({
        type: FunctionSetHighlightedIndex,
        highlightedIndex: newHighlightedIndex
      });
    },
    selectItem: function selectItem(newSelectedItem) {
      dispatch({
        type: FunctionSelectItem,
        selectedItem: newSelectedItem
      });
    },
    reset: function reset() {
      dispatch({
        type: FunctionReset
      });
    },
    setInputValue: function setInputValue(newInputValue) {
      dispatch({
        type: FunctionSetInputValue,
        inputValue: newInputValue
      });
    },
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

var InputKeyDownArrowDown =  true ? '__input_keydown_arrow_down__' : 0;
var InputKeyDownArrowUp =  true ? '__input_keydown_arrow_up__' : 0;
var InputKeyDownEscape =  true ? '__input_keydown_escape__' : 0;
var InputKeyDownHome =  true ? '__input_keydown_home__' : 0;
var InputKeyDownEnd =  true ? '__input_keydown_end__' : 0;
var InputKeyDownEnter =  true ? '__input_keydown_enter__' : 0;
var InputChange =  true ? '__input_change__' : 0;
var InputBlur =  true ? '__input_blur__' : 0;
var MenuMouseLeave$1 =  true ? '__menu_mouse_leave__' : 0;
var ItemMouseMove$1 =  true ? '__item_mouse_move__' : 0;
var ItemClick$1 =  true ? '__item_click__' : 0;
var ToggleButtonClick$1 =  true ? '__togglebutton_click__' : 0;
var FunctionToggleMenu$1 =  true ? '__function_toggle_menu__' : 0;
var FunctionOpenMenu$1 =  true ? '__function_open_menu__' : 0;
var FunctionCloseMenu$1 =  true ? '__function_close_menu__' : 0;
var FunctionSetHighlightedIndex$1 =  true ? '__function_set_highlighted_index__' : 0;
var FunctionSelectItem$1 =  true ? '__function_select_item__' : 0;
var FunctionSetInputValue$1 =  true ? '__function_set_input_value__' : 0;
var FunctionReset$1 =  true ? '__function_reset__' : 0;
var ControlledPropUpdatedSelectedItem =  true ? '__controlled_prop_updated_selected_item__' : 0;
var stateChangeTypes$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: InputKeyDownArrowDown,
  InputKeyDownArrowUp: InputKeyDownArrowUp,
  InputKeyDownEscape: InputKeyDownEscape,
  InputKeyDownHome: InputKeyDownHome,
  InputKeyDownEnd: InputKeyDownEnd,
  InputKeyDownEnter: InputKeyDownEnter,
  InputChange: InputChange,
  InputBlur: InputBlur,
  MenuMouseLeave: MenuMouseLeave$1,
  ItemMouseMove: ItemMouseMove$1,
  ItemClick: ItemClick$1,
  ToggleButtonClick: ToggleButtonClick$1,
  FunctionToggleMenu: FunctionToggleMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem: ControlledPropUpdatedSelectedItem
});

function getElementIds$1(_ref) {
  var id = _ref.id,
      inputId = _ref.inputId,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "inputId"]);

  var uniqueId = id === undefined ? "downshift-" + generateId() : id;
  return _extends({
    inputId: inputId || uniqueId + "-input"
  }, getElementIds(_extends({
    id: id
  }, rest)));
}

function getInitialState$1(props) {
  var initialState = getInitialState(props);
  var selectedItem = initialState.selectedItem;
  var inputValue = initialState.inputValue;

  if (inputValue === '' && selectedItem && props.defaultInputValue === undefined && props.initialInputValue === undefined && props.inputValue === undefined) {
    inputValue = props.itemToString(selectedItem);
  }

  return _extends({}, initialState, {
    inputValue: inputValue
  });
}

var propTypes$1 = {
  items: PropTypes.array.isRequired,
  itemToString: PropTypes.func,
  getA11yStatusMessage: PropTypes.func,
  getA11ySelectionMessage: PropTypes.func,
  circularNavigation: PropTypes.bool,
  highlightedIndex: PropTypes.number,
  defaultHighlightedIndex: PropTypes.number,
  initialHighlightedIndex: PropTypes.number,
  isOpen: PropTypes.bool,
  defaultIsOpen: PropTypes.bool,
  initialIsOpen: PropTypes.bool,
  selectedItem: PropTypes.any,
  initialSelectedItem: PropTypes.any,
  defaultSelectedItem: PropTypes.any,
  inputValue: PropTypes.string,
  defaultInputValue: PropTypes.string,
  initialInputValue: PropTypes.string,
  id: PropTypes.string,
  labelId: PropTypes.string,
  menuId: PropTypes.string,
  getItemId: PropTypes.func,
  inputId: PropTypes.string,
  toggleButtonId: PropTypes.string,
  stateReducer: PropTypes.func,
  onSelectedItemChange: PropTypes.func,
  onHighlightedIndexChange: PropTypes.func,
  onStateChange: PropTypes.func,
  onIsOpenChange: PropTypes.func,
  onInputValueChange: PropTypes.func,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  })
};
/**
 * The useCombobox version of useControlledState, which also
 * checks if the controlled prop selectedItem changed between
 * renders. If so, it will also update inputValue with its
 * string equivalent. It uses the common useControlledState to
 * compute the rest of the state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */

function useControlledState$1(reducer, initialState, props) {
  var _useControlledStateCo = useControlledState(reducer, initialState, props),
      newState = _useControlledStateCo[0],
      dispatch = _useControlledStateCo[1];

  var previousSelectedItemRef = react.useRef(null);
  var selectedItem = props.selectedItem,
      itemToString = props.itemToString; // ToDo: if needed, make same approach as selectedItemChanged from Downshift.

  if (isControlledProp(props, 'selectedItem') && previousSelectedItemRef.current !== selectedItem) {
    dispatch({
      type: ControlledPropUpdatedSelectedItem,
      inputValue: itemToString(selectedItem)
    });
  }

  previousSelectedItemRef.current = selectedItem;
  return [newState, dispatch];
}

var defaultProps$2 = _extends({}, defaultProps, {
  getA11yStatusMessage: getA11yStatusMessage,
  circularNavigation: true
});
/* eslint-disable complexity */


function downshiftUseComboboxReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemMouseMove$1:
      changes = {
        highlightedIndex: action.index
      };
      break;

    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;

    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: true
        };
      }

      break;

    case InputKeyDownArrowUp:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: true
        };
      }

      break;

    case InputKeyDownEnter:
      changes = _extends({}, state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex],
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;

    case InputKeyDownEscape:
      changes = {
        isOpen: false,
        selectedItem: null,
        highlightedIndex: -1,
        inputValue: ''
      };
      break;

    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case InputBlur:
      changes = _extends({
        isOpen: false
      }, state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex],
        inputValue: props.itemToString(props.items[state.highlightedIndex]),
        highlightedIndex: -1
      });
      break;

    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        inputValue: action.inputValue
      };
      break;

    case MenuMouseLeave$1:
      changes = {
        highlightedIndex: -1
      };
      break;

    case ToggleButtonClick$1:
    case FunctionToggleMenu$1:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionOpenMenu$1:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case FunctionCloseMenu$1:
      changes = {
        isOpen: false
      };
      break;

    case FunctionSetHighlightedIndex$1:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;

    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem
      };
      break;

    case ControlledPropUpdatedSelectedItem:
    case FunctionSetInputValue$1:
      changes = {
        inputValue: action.inputValue
      };
      break;

    case FunctionReset$1:
      changes = {
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: getDefaultValue(props, 'selectedItem'),
        inputValue: getDefaultValue(props, 'inputValue')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return _extends({}, state, {}, changes);
}
/* eslint-enable complexity */


var validatePropTypes$1 =  false ?
/* istanbul ignore next */
0 : getPropTypesValidator(useCombobox, propTypes$1);
useCombobox.stateChangeTypes = stateChangeTypes$2;

function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }
  /* istanbul ignore else */


  if (true) {
    validatePropTypes$1(userProps);
  } // Props defaults and destructuring.


  var props = _extends({}, defaultProps$2, {}, userProps);

  var initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      getA11yStatusMessage = props.getA11yStatusMessage,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      itemToString = props.itemToString; // Initial state depending on controlled props.

  var initialState = getInitialState$1(props); // Reducer init.

  var _useControlledState = useControlledState$1(downshiftUseComboboxReducer, initialState, props),
      _useControlledState$ = _useControlledState[0],
      isOpen = _useControlledState$.isOpen,
      highlightedIndex = _useControlledState$.highlightedIndex,
      selectedItem = _useControlledState$.selectedItem,
      inputValue = _useControlledState$.inputValue,
      dispatch = _useControlledState[1];
  /* Refs */


  var menuRef = react.useRef(null);
  var itemRefs = react.useRef();
  var inputRef = react.useRef(null);
  var toggleButtonRef = react.useRef(null);
  var comboboxRef = react.useRef(null);
  itemRefs.current = [];
  var shouldScroll = react.useRef(true);
  var isInitialMount = react.useRef(true);
  var mouseAndTouchTrackers = react.useRef({
    isMouseDown: false,
    isTouchMove: false
  });
  var elementIds = react.useRef(getElementIds$1(props));
  var previousResultCountRef = react.useRef();
  /* Effects */

  /* Sets a11y status message on changes in state. */

  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    var previousResultCount = previousResultCountRef.current;
    updateA11yStatus(function () {
      return getA11yStatusMessage({
        isOpen: isOpen,
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        inputValue: inputValue,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length,
        itemToString: itemToString,
        previousResultCount: previousResultCount
      });
    }, environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, selectedItem, inputValue]);
  /* Sets a11y status message on changes in selectedItem. */

  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    var previousResultCount = previousResultCountRef.current;
    updateA11yStatus(function () {
      return getA11ySelectionMessage({
        isOpen: isOpen,
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        inputValue: inputValue,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length,
        itemToString: itemToString,
        previousResultCount: previousResultCount
      });
    }, environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);
  /* Scroll on highlighted item if change comes from keyboard. */

  react.useEffect(function () {
    if (highlightedIndex < 0 || !isOpen || !itemRefs.current.length) {
      return;
    }

    if (shouldScroll.current === false) {
      shouldScroll.current = true;
    } else {
      scrollIntoView(itemRefs.current[highlightedIndex], menuRef.current);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [highlightedIndex]);
  /* Controls the focus on the menu or the toggle button. */

  react.useEffect(function () {
    // Don't focus menu on first render.
    if (isInitialMount.current) {
      // Unless it was initialised as open.
      if (initialIsOpen || defaultIsOpen || isOpen) {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen]);
  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    previousResultCountRef.current = items.length;
  });
  react.useEffect(function () {
    isInitialMount.current = false;
  }, []);
  /* Add mouse/touch events to document. */

  react.useEffect(function () {
    // The same strategy for checking if a click occurred inside or outside downsift
    // as in downshift.js.
    var onMouseDown = function onMouseDown() {
      mouseAndTouchTrackers.current.isMouseDown = true;
    };

    var onMouseUp = function onMouseUp(event) {
      mouseAndTouchTrackers.current.isMouseDown = false;

      if (isOpen && !targetWithinDownshift(event.target, [comboboxRef.current, menuRef.current, toggleButtonRef.current], environment.document)) {
        dispatch({
          type: InputBlur
        });
      }
    };

    var onTouchStart = function onTouchStart() {
      mouseAndTouchTrackers.current.isTouchMove = false;
    };

    var onTouchMove = function onTouchMove() {
      mouseAndTouchTrackers.current.isTouchMove = true;
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (isOpen && !mouseAndTouchTrackers.current.isTouchMove && !targetWithinDownshift(event.target, [comboboxRef.current, menuRef.current, toggleButtonRef.current], environment.document, false)) {
        dispatch({
          type: InputBlur
        });
      }
    };

    environment.addEventListener('mousedown', onMouseDown);
    environment.addEventListener('mouseup', onMouseUp);
    environment.addEventListener('touchstart', onTouchStart);
    environment.addEventListener('touchmove', onTouchMove);
    environment.addEventListener('touchend', onTouchEnd);
    return function () {
      environment.removeEventListener('mousedown', onMouseDown);
      environment.removeEventListener('mouseup', onMouseUp);
      environment.removeEventListener('touchstart', onTouchStart);
      environment.removeEventListener('touchmove', onTouchMove);
      environment.removeEventListener('touchend', onTouchEnd);
    };
  });

  var getItemNodeFromIndex = function getItemNodeFromIndex(index) {
    return itemRefs.current[index];
  };
  /* Event handler functions */


  var inputKeyDownHandlers = {
    ArrowDown: function ArrowDown(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowDown,
        shiftKey: event.shiftKey,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    },
    ArrowUp: function ArrowUp(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownArrowUp,
        shiftKey: event.shiftKey,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    },
    Home: function Home(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownHome,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    },
    End: function End(event) {
      event.preventDefault();
      dispatch({
        type: InputKeyDownEnd,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    },
    Escape: function Escape() {
      dispatch({
        type: InputKeyDownEscape
      });
    },
    Enter: function Enter(event) {
      // if IME composing, wait for next Enter keydown event.
      if (event.which === 229) {
        return;
      }

      event.preventDefault();
      dispatch({
        type: InputKeyDownEnter,
        getItemNodeFromIndex: getItemNodeFromIndex
      });
    }
  }; // Event handlers.

  var inputHandleKeyDown = function inputHandleKeyDown(event) {
    var key = normalizeArrowKey(event);

    if (key && inputKeyDownHandlers[key]) {
      inputKeyDownHandlers[key](event);
    }
  };

  var inputHandleChange = function inputHandleChange(event) {
    dispatch({
      type: InputChange,
      inputValue: event.target.value
    });
  };

  var inputHandleBlur = function inputHandleBlur() {
    /* istanbul ignore else */
    if (!mouseAndTouchTrackers.current.isMouseDown) {
      dispatch({
        type: InputBlur
      });
    }
  };

  var menuHandleMouseLeave = function menuHandleMouseLeave() {
    dispatch({
      type: MenuMouseLeave$1
    });
  };

  var itemHandleMouseMove = function itemHandleMouseMove(index) {
    if (index === highlightedIndex) {
      return;
    }

    shouldScroll.current = false;
    dispatch({
      type: ItemMouseMove$1,
      index: index
    });
  };

  var itemHandleClick = function itemHandleClick(index) {
    dispatch({
      type: ItemClick$1,
      index: index
    });
  };

  var toggleButtonHandleClick = function toggleButtonHandleClick() {
    dispatch({
      type: ToggleButtonClick$1
    });

    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }; // Getter props.


  return {
    // prop getters.
    getItemProps: function getItemProps(_temp2) {
      var _extends3, _ref3;

      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          item = _ref2.item,
          index = _ref2.index,
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? 'ref' : _ref2$refKey,
          ref = _ref2.ref,
          onMouseMove = _ref2.onMouseMove,
          onClick = _ref2.onClick,
          onPress = _ref2.onPress,
          rest = _objectWithoutPropertiesLoose(_ref2, ["item", "index", "refKey", "ref", "onMouseMove", "onClick", "onPress"]);

      var itemIndex = getItemIndex(index, item, items);

      if (itemIndex < 0) {
        throw new Error('Pass either item or item index in getItemProps!');
      }

      var onSelectKey = 'onClick';
      var customClickHandler = onClick;
      return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (itemNode) {
        if (itemNode) {
          itemRefs.current.push(itemNode);
        }
      }), _extends3.role = 'option', _extends3['aria-selected'] = "" + (itemIndex === highlightedIndex), _extends3.id = elementIds.current.getItemId(itemIndex), _extends3), !rest.disabled && (_ref3 = {
        onMouseMove: callAllEventHandlers(onMouseMove, function () {
          itemHandleMouseMove(itemIndex);
        })
      }, _ref3[onSelectKey] = callAllEventHandlers(customClickHandler, function () {
        itemHandleClick(itemIndex);
      }), _ref3), {}, rest);
    },
    getLabelProps: function getLabelProps(labelProps) {
      return _extends({
        id: elementIds.current.labelId,
        htmlFor: elementIds.current.inputId
      }, labelProps);
    },
    getMenuProps: function getMenuProps(_temp) {
      var _extends2;

      var _ref = _temp === void 0 ? {} : _temp,
          onMouseLeave = _ref.onMouseLeave,
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
          ref = _ref.ref,
          rest = _objectWithoutPropertiesLoose(_ref, ["onMouseLeave", "refKey", "ref"]);

      return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
        menuRef.current = menuNode;
      }), _extends2.id = elementIds.current.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIds.current.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, menuHandleMouseLeave), _extends2), rest);
    },
    getInputProps: function getInputProps(_temp4) {
      var _extends5;

      var _ref5 = _temp4 === void 0 ? {} : _temp4,
          onKeyDown = _ref5.onKeyDown,
          onChange = _ref5.onChange,
          onInput = _ref5.onInput,
          onBlur = _ref5.onBlur,
          onChangeText = _ref5.onChangeText,
          _ref5$refKey = _ref5.refKey,
          refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
          ref = _ref5.ref,
          rest = _objectWithoutPropertiesLoose(_ref5, ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "refKey", "ref"]);
      /* istanbul ignore next (preact) */


      var onChangeKey = 'onChange';
      var eventHandlers = {};

      if (!rest.disabled) {
        var _eventHandlers;

        eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers);
      }
      /* istanbul ignore if (react-native) */


      return _extends((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function (inputNode) {
        inputRef.current = inputNode;
      }), _extends5.id = elementIds.current.inputId, _extends5['aria-autocomplete'] = 'list', _extends5['aria-controls'] = elementIds.current.menuId, _extends5), isOpen && highlightedIndex > -1 && {
        'aria-activedescendant': elementIds.current.getItemId(highlightedIndex)
      }, {
        'aria-labelledby': elementIds.current.labelId,
        // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
        // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
        autoComplete: 'off',
        value: inputValue
      }, eventHandlers, {}, rest);
    },
    getComboboxProps: function getComboboxProps(_temp5) {
      var _extends6;

      var _ref6 = _temp5 === void 0 ? {} : _temp5,
          _ref6$refKey = _ref6.refKey,
          refKey = _ref6$refKey === void 0 ? 'ref' : _ref6$refKey,
          ref = _ref6.ref,
          rest = _objectWithoutPropertiesLoose(_ref6, ["refKey", "ref"]);

      return _extends((_extends6 = {}, _extends6[refKey] = handleRefs(ref, function (comboboxNode) {
        comboboxRef.current = comboboxNode;
      }), _extends6.role = 'combobox', _extends6['aria-haspopup'] = 'listbox', _extends6['aria-owns'] = elementIds.current.menuId, _extends6['aria-expanded'] = isOpen, _extends6), rest);
    },
    getToggleButtonProps: function getToggleButtonProps(_temp3) {
      var _extends4;

      var _ref4 = _temp3 === void 0 ? {} : _temp3,
          onClick = _ref4.onClick,
          onPress = _ref4.onPress,
          _ref4$refKey = _ref4.refKey,
          refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
          ref = _ref4.ref,
          rest = _objectWithoutPropertiesLoose(_ref4, ["onClick", "onPress", "refKey", "ref"]);

      return _extends((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function (toggleButtonNode) {
        toggleButtonRef.current = toggleButtonNode;
      }), _extends4.id = elementIds.current.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && _extends({}, {
        onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
      }), {}, rest);
    },
    // actions.
    toggleMenu: function toggleMenu() {
      dispatch({
        type: FunctionToggleMenu$1
      });
    },
    openMenu: function openMenu() {
      dispatch({
        type: FunctionOpenMenu$1
      });
    },
    closeMenu: function closeMenu() {
      dispatch({
        type: FunctionCloseMenu$1
      });
    },
    setHighlightedIndex: function setHighlightedIndex(newHighlightedIndex) {
      dispatch({
        type: FunctionSetHighlightedIndex$1,
        highlightedIndex: newHighlightedIndex
      });
    },
    setInputValue: function setInputValue(newInputValue) {
      dispatch({
        type: FunctionSetInputValue$1,
        inputValue: newInputValue
      });
    },
    selectItem: function selectItem(newSelectedItem) {
      dispatch({
        type: FunctionSelectItem$1,
        selectedItem: newSelectedItem
      });
    },
    reset: function reset() {
      dispatch({
        type: FunctionReset$1
      });
    },
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

var defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};
/**
 * Returns the initial value for a state key in the following order:
 * 1. controlled prop, 2. initial prop, 3. default prop, 4. default
 * value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */

function getInitialValue$1(props, propKey) {
  return getInitialValue(props, propKey, defaultStateValues);
}
/**
 * Returns the default value for a state key in the following order:
 * 1. controlled prop, 2. default prop, 3. default value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */


function getDefaultValue$1(props, propKey) {
  return getDefaultValue(props, propKey, defaultStateValues);
}
/**
 * Gets the initial state based on the provided props. It uses initial, default
 * and controlled props related to state in order to compute the initial value.
 *
 * @param {Object} props Props passed to the hook.
 * @returns {Object} The initial state.
 */


function getInitialState$2(props) {
  var activeIndex = getInitialValue$1(props, 'activeIndex');
  var selectedItems = getInitialValue$1(props, 'selectedItems');
  return {
    activeIndex: activeIndex,
    selectedItems: selectedItems
  };
}
/**
 * Returns true if dropdown keydown operation is permitted. Should not be
 * allowed on keydown with modifier keys (ctrl, alt, shift, meta), on
 * input element with text content that is either highlighted or selection
 * cursor is not at the starting position.
 *
 * @param {KeyboardEvent} event The event from keydown.
 * @returns {boolean} Whether the operation is allowed.
 */


function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }

  var element = event.target;

  if (element instanceof HTMLInputElement && // if element is a text input
  element.value !== '' && ( // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }

  return true;
}
/**
 * Returns a message to be added to aria-live region when item is removed.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */


function getA11yRemovalMessage(selectionParameters) {
  var removedSelectedItem = selectionParameters.removedSelectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return itemToStringLocal(removedSelectedItem) + " has been removed.";
}

var propTypes$2 = {
  selectedItems: PropTypes.array,
  initialSelectedItems: PropTypes.array,
  defaultSelectedItems: PropTypes.array,
  itemToString: PropTypes.func,
  getA11yRemovalMessage: PropTypes.func,
  stateReducer: PropTypes.func,
  activeIndex: PropTypes.number,
  initialActiveIndex: PropTypes.number,
  defaultActiveIndex: PropTypes.number,
  onActiveIndexChange: PropTypes.func,
  onSelectedItemsChange: PropTypes.func,
  keyNavigationNext: PropTypes.string,
  keyNavigationPrevious: PropTypes.string,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  })
};
var defaultProps$3 = {
  itemToString: defaultProps.itemToString,
  stateReducer: defaultProps.stateReducer,
  environment: defaultProps.environment,
  getA11yRemovalMessage: getA11yRemovalMessage,
  keyNavigationNext: 'ArrowRight',
  keyNavigationPrevious: 'ArrowLeft'
};
var SelectedItemClick =  true ? '__selected_item_click__' : 0;
var SelectedItemKeyDownDelete =  true ? '__selected_item_keydown_delete__' : 0;
var SelectedItemKeyDownBackspace =  true ? '__selected_item_keydown_backspace__' : 0;
var SelectedItemKeyDownNavigationNext =  true ? '__selected_item_keydown_navigation_next__' : 0;
var SelectedItemKeyDownNavigationPrevious =  true ? '__selected_item_keydown_navigation_previous__' : 0;
var DropdownKeyDownNavigationPrevious =  true ? '__dropdown_keydown_navigation_previous__' : 0;
var DropdownKeyDownBackspace =  true ? '__dropdown_keydown_backspace__' : 0;
var DropdownClick =  true ? '__dropdown_click__' : 0;
var FunctionAddSelectedItem =  true ? '__function_add_selected_item__' : 0;
var FunctionRemoveSelectedItem =  true ? '__function_remove_selected_item__' : 0;
var FunctionSetSelectedItems =  true ? '__function_set_selected_items__' : 0;
var FunctionSetActiveIndex =  true ? '__function_set_active_index__' : 0;
var FunctionReset$2 =  true ? '__function_reset__' : 0;
var stateChangeTypes$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SelectedItemClick: SelectedItemClick,
  SelectedItemKeyDownDelete: SelectedItemKeyDownDelete,
  SelectedItemKeyDownBackspace: SelectedItemKeyDownBackspace,
  SelectedItemKeyDownNavigationNext: SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious: SelectedItemKeyDownNavigationPrevious,
  DropdownKeyDownNavigationPrevious: DropdownKeyDownNavigationPrevious,
  DropdownKeyDownBackspace: DropdownKeyDownBackspace,
  DropdownClick: DropdownClick,
  FunctionAddSelectedItem: FunctionAddSelectedItem,
  FunctionRemoveSelectedItem: FunctionRemoveSelectedItem,
  FunctionSetSelectedItems: FunctionSetSelectedItems,
  FunctionSetActiveIndex: FunctionSetActiveIndex,
  FunctionReset: FunctionReset$2
});
/* eslint-disable complexity */

function downshiftMultipleSelectionReducer(state, action) {
  var type = action.type,
      index = action.index,
      props = action.props,
      selectedItem = action.selectedItem;
  var activeIndex = state.activeIndex,
      selectedItems = state.selectedItems;
  var changes;

  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;

    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;

    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;

    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete:
      {
        var newActiveIndex = activeIndex;

        if (selectedItems.length === 1) {
          newActiveIndex = -1;
        } else if (activeIndex === selectedItems.length - 1) {
          newActiveIndex = selectedItems.length - 2;
        }

        changes = _extends({
          selectedItems: [].concat(selectedItems.slice(0, activeIndex), selectedItems.slice(activeIndex + 1))
        }, {
          activeIndex: newActiveIndex
        });
        break;
      }

    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;

    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;

    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [].concat(selectedItems, [selectedItem])
      };
      break;

    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;

    case FunctionRemoveSelectedItem:
      {
        var _newActiveIndex = activeIndex;
        var selectedItemIndex = selectedItems.indexOf(selectedItem);

        if (selectedItems.length === 1) {
          _newActiveIndex = -1;
        } else if (selectedItemIndex === selectedItems.length - 1) {
          _newActiveIndex = selectedItems.length - 2;
        }

        changes = _extends({
          selectedItems: [].concat(selectedItems.slice(0, selectedItemIndex), selectedItems.slice(selectedItemIndex + 1))
        }, {
          activeIndex: _newActiveIndex
        });
        break;
      }

    case FunctionSetSelectedItems:
      {
        var newSelectedItems = action.selectedItems;
        changes = {
          selectedItems: newSelectedItems
        };
        break;
      }

    case FunctionSetActiveIndex:
      {
        var _newActiveIndex2 = action.activeIndex;
        changes = {
          activeIndex: _newActiveIndex2
        };
        break;
      }

    case FunctionReset$2:
      changes = {
        activeIndex: getDefaultValue$1(props, 'activeIndex'),
        selectedItems: getDefaultValue$1(props, 'selectedItems')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return _extends({}, state, {}, changes);
}

useMultipleSelection.stateChangeTypes = stateChangeTypes$3;

function useMultipleSelection(userProps) {
  var _selectedItemKeyDownH, _dropdownKeyDownHandl;

  if (userProps === void 0) {
    userProps = {};
  } // Props defaults and destructuring.


  var props = _extends({}, defaultProps$3, {}, userProps);

  var getA11yRemovalMessage = props.getA11yRemovalMessage,
      itemToString = props.itemToString,
      environment = props.environment,
      keyNavigationNext = props.keyNavigationNext,
      keyNavigationPrevious = props.keyNavigationPrevious; // Reducer init.

  var _useControlledState = useControlledState(downshiftMultipleSelectionReducer, getInitialState$2(props), props),
      _useControlledState$ = _useControlledState[0],
      activeIndex = _useControlledState$.activeIndex,
      selectedItems = _useControlledState$.selectedItems,
      dispatch = _useControlledState[1]; // Refs.


  var isInitialMount = react.useRef(true);
  var dropdownRef = react.useRef(null);
  var previousSelectedItemsRef = react.useRef(selectedItems);
  var selectedItemRefs = react.useRef();
  selectedItemRefs.current = []; // Effects.

  /* Sets a11y status message on changes in selectedItem. */

  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    if (selectedItems.length < previousSelectedItemsRef.current.length) {
      var removedSelectedItem = previousSelectedItemsRef.current.find(function (item) {
        return selectedItems.indexOf(item) < 0;
      });
      setStatus(getA11yRemovalMessage({
        itemToString: itemToString,
        resultCount: selectedItems.length,
        removedSelectedItem: removedSelectedItem,
        activeIndex: activeIndex,
        activeSelectedItem: selectedItems[activeIndex]
      }), environment.document);
    }

    previousSelectedItemsRef.current = selectedItems; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems.length]); // Sets focus on active item.

  react.useEffect(function () {
    if (isInitialMount.current) {
      return;
    }

    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]); // Make initial ref false.

  react.useEffect(function () {
    isInitialMount.current = false;
  }, []); // Event handler functions.

  var selectedItemKeyDownHandlers = (_selectedItemKeyDownH = {}, _selectedItemKeyDownH[keyNavigationPrevious] = function () {
    dispatch({
      type: SelectedItemKeyDownNavigationPrevious
    });
  }, _selectedItemKeyDownH[keyNavigationNext] = function () {
    dispatch({
      type: SelectedItemKeyDownNavigationNext
    });
  }, _selectedItemKeyDownH.Delete = function Delete() {
    dispatch({
      type: SelectedItemKeyDownDelete
    });
  }, _selectedItemKeyDownH.Backspace = function Backspace() {
    dispatch({
      type: SelectedItemKeyDownBackspace
    });
  }, _selectedItemKeyDownH);
  var dropdownKeyDownHandlers = (_dropdownKeyDownHandl = {}, _dropdownKeyDownHandl[keyNavigationPrevious] = function (event) {
    if (isKeyDownOperationPermitted(event)) {
      dispatch({
        type: DropdownKeyDownNavigationPrevious
      });
    }
  }, _dropdownKeyDownHandl.Backspace = function Backspace(event) {
    if (isKeyDownOperationPermitted(event)) {
      dispatch({
        type: DropdownKeyDownBackspace
      });
    }
  }, _dropdownKeyDownHandl); // Event handlers.

  var selectedItemHandleClick = function selectedItemHandleClick(index) {
    dispatch({
      type: SelectedItemClick,
      index: index
    });
  };

  var selectedItemHandleKeyDown = function selectedItemHandleKeyDown(event) {
    var key = normalizeArrowKey(event);

    if (key && selectedItemKeyDownHandlers[key]) {
      selectedItemKeyDownHandlers[key](event);
    }
  };

  var dropdownHandleKeyDown = function dropdownHandleKeyDown(event) {
    var key = normalizeArrowKey(event);

    if (key && dropdownKeyDownHandlers[key]) {
      dropdownKeyDownHandlers[key](event);
    }
  };

  var dropdownHandleClick = function dropdownHandleClick() {
    dispatch({
      type: DropdownClick
    });
  }; // Getter props.


  return {
    getSelectedItemProps: function getSelectedItemProps(_temp) {
      var _extends2;

      var _ref = _temp === void 0 ? {} : _temp,
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
          ref = _ref.ref,
          onClick = _ref.onClick,
          onKeyDown = _ref.onKeyDown,
          selectedItem = _ref.selectedItem,
          index = _ref.index,
          rest = _objectWithoutPropertiesLoose(_ref, ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"]);

      var itemIndex = getItemIndex(index, selectedItem, selectedItems);

      if (itemIndex < 0) {
        throw new Error('Pass either selectedItem or index in getSelectedItemProps!');
      }

      return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (selectedItemNode) {
        if (selectedItemNode) {
          selectedItemRefs.current.push(selectedItemNode);
        }
      }), _extends2.tabIndex = index === activeIndex ? 0 : -1, _extends2.onClick = callAllEventHandlers(onClick, function () {
        selectedItemHandleClick(index);
      }), _extends2.onKeyDown = callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown), _extends2), rest);
    },
    getDropdownProps: function getDropdownProps(_temp2) {
      var _extends3;

      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? 'ref' : _ref2$refKey,
          ref = _ref2.ref,
          onKeyDown = _ref2.onKeyDown,
          onClick = _ref2.onClick,
          _ref2$preventKeyActio = _ref2.preventKeyAction,
          preventKeyAction = _ref2$preventKeyActio === void 0 ? false : _ref2$preventKeyActio,
          rest = _objectWithoutPropertiesLoose(_ref2, ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"]);

      return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (dropdownNode) {
        if (dropdownNode) {
          dropdownRef.current = dropdownNode;
        }
      }), _extends3), !preventKeyAction && {
        onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
        onClick: callAllEventHandlers(onClick, dropdownHandleClick)
      }, {}, rest);
    },
    addSelectedItem: function addSelectedItem(selectedItem) {
      dispatch({
        type: FunctionAddSelectedItem,
        selectedItem: selectedItem
      });
    },
    removeSelectedItem: function removeSelectedItem(selectedItem) {
      dispatch({
        type: FunctionRemoveSelectedItem,
        selectedItem: selectedItem
      });
    },
    setSelectedItems: function setSelectedItems(newSelectedItems) {
      dispatch({
        type: FunctionSetSelectedItems,
        selectedItems: newSelectedItems
      });
    },
    setActiveIndex: function setActiveIndex(newActiveIndex) {
      dispatch({
        type: FunctionSetActiveIndex,
        activeIndex: newActiveIndex
      });
    },
    reset: function reset() {
      dispatch({
        type: FunctionReset$2
      });
    },
    selectedItems: selectedItems,
    activeIndex: activeIndex
  };
}

exports.default = Downshift;
exports.resetIdCounter = resetIdCounter;
exports.useCombobox = useCombobox;
exports.useMultipleSelection = useMultipleSelection;
exports.useSelect = useSelect;

/***/ }),

/***/ "compute-scroll-into-view":
/*!*******************************************!*\
  !*** external "compute-scroll-into-view" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_compute_scroll_into_view__;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_is__;

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
/******/ 	return __webpack_require__("./node_modules/downshift/dist/downshift.cjs.js");
/******/ })()
);;