define("carbon-components", ["flatpickr","lodash.debounce","warning"], (__WEBPACK_EXTERNAL_MODULE_flatpickr__, __WEBPACK_EXTERNAL_MODULE_lodash_debounce__, __WEBPACK_EXTERNAL_MODULE_warning__) => /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/carbon-components/umd/components/accordion/accordion.js":
/*!******************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/accordion/accordion.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Accordion = /*#__PURE__*/function (_mixin) {
    _inherits(Accordion, _mixin);

    var _super = _createSuper(Accordion);
    /**
     * Accordion.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as an accordion.
     */


    function Accordion(element, options) {
      var _this;

      _classCallCheck(this, Accordion);

      _this = _super.call(this, element, options);

      _this.manage((0, _on["default"])(_this.element, 'click', function (event) {
        var item = (0, _eventMatches["default"])(event, _this.options.selectorAccordionItem);

        if (item && !(0, _eventMatches["default"])(event, _this.options.selectorAccordionContent)) {
          _this._toggle(item);
        }
      }));
      /**
       *
       *  DEPRECATE in v8
       *
       *  Swapping to a button elemenet instead of a div
       *  automatically maps click events to keypress as well
       *  This event listener now is only added if user is using
       *  the older markup
       */


      if (!_this._checkIfButton()) {
        _this.manage((0, _on["default"])(_this.element, 'keypress', function (event) {
          var item = (0, _eventMatches["default"])(event, _this.options.selectorAccordionItem);

          if (item && !(0, _eventMatches["default"])(event, _this.options.selectorAccordionContent)) {
            _this._handleKeypress(event);
          }
        }));
      }

      return _this;
    }

    _createClass(Accordion, [{
      key: "_checkIfButton",
      value: function _checkIfButton() {
        return this.element.firstElementChild.firstElementChild.nodeName === 'BUTTON';
      }
      /**
       * Handles toggling of active state of accordion via keyboard
       * @param {Event} event The event triggering this method.
       */

    }, {
      key: "_handleKeypress",
      value: function _handleKeypress(event) {
        if (event.which === 13 || event.which === 32) {
          this._toggle(event.target);
        }
      }
    }, {
      key: "_toggle",
      value: function _toggle(element) {
        var heading = element.querySelector(this.options.selectorAccordionItemHeading);
        var expanded = heading.getAttribute('aria-expanded');

        if (expanded !== null) {
          heading.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
        }

        element.classList.toggle(this.options.classActive);
      }
      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode NumberInput.create .create()}, or {@linkcode NumberInput.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode NumberInput.init .init()} works.
       * @property {string} selectorInit The CSS selector to find accordion UIs.
       */

    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-accordion]',
          selectorAccordionItem: ".".concat(prefix, "--accordion__item"),
          selectorAccordionItemHeading: ".".concat(prefix, "--accordion__heading"),
          selectorAccordionContent: ".".concat(prefix, "--accordion__content"),
          classActive: "".concat(prefix, "--accordion__item--active")
        };
      }
      /**
       * The map associating DOM element and accordion UI instance.
       * @type {WeakMap}
       */

    }]);

    Accordion.components = new WeakMap();
    return Accordion;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = Accordion;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/checkbox/checkbox.js":
/*!****************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/checkbox/checkbox.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var stateChangeTypes = {
    "true": 'true',
    "false": 'false',
    mixed: 'mixed'
  };

  var Checkbox = /*#__PURE__*/function (_mixin) {
    _inherits(Checkbox, _mixin);

    var _super = _createSuper(Checkbox);
    /**
     * Checkbox UI.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a checkbox UI.
     */


    function Checkbox(element, options) {
      var _this;

      _classCallCheck(this, Checkbox);

      _this = _super.call(this, element, options);

      _this.manage((0, _on["default"])(_this.element, 'click', function (event) {
        _this._handleClick(event);
      }));

      _this.manage((0, _on["default"])(_this.element, 'focus', function (event) {
        _this._handleFocus(event);
      }));

      _this.manage((0, _on["default"])(_this.element, 'blur', function (event) {
        _this._handleBlur(event);
      }));

      _this._indeterminateCheckbox();

      _this._initCheckbox();

      return _this;
    }

    _createClass(Checkbox, [{
      key: "_handleClick",
      value: function _handleClick() {
        if (this.element.checked === true) {
          this.element.setAttribute('checked', '');
          this.element.setAttribute('aria-checked', 'true');
          this.element.checked = true; // nested checkboxes inside labels

          if (this.element.parentElement.classList.contains(this.options.classLabel)) {
            this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'true');
          }
        } else if (this.element.checked === false) {
          this.element.removeAttribute('checked');
          this.element.setAttribute('aria-checked', 'false');
          this.element.checked = false; // nested checkboxes inside labels

          if (this.element.parentElement.classList.contains(this.options.classLabel)) {
            this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'false');
          }
        }
      }
    }, {
      key: "_handleFocus",
      value: function _handleFocus() {
        if (this.element.parentElement.classList.contains(this.options.classLabel)) {
          this.element.parentElement.classList.add(this.options.classLabelFocused);
        }
      }
    }, {
      key: "_handleBlur",
      value: function _handleBlur() {
        if (this.element.parentElement.classList.contains(this.options.classLabel)) {
          this.element.parentElement.classList.remove(this.options.classLabelFocused);
        }
      }
      /**
       * Sets the new checkbox state.
       * @param {boolean|string} [state]
       *   The new checkbox state to set. `mixed` to put checkbox in indeterminate state.
       *   If omitted, this method simply makes the style reflect `aria-checked` attribute.
       */

    }, {
      key: "setState",
      value: function setState(state) {
        if (state === undefined || stateChangeTypes[state] === undefined) {
          throw new TypeError('setState expects a value of true, false or mixed.');
        }

        this.element.setAttribute('aria-checked', state);
        this.element.indeterminate = state === stateChangeTypes.mixed;
        this.element.checked = state === stateChangeTypes["true"];
        var container = this.element.closest(this.options.selectorContainedCheckboxState);

        if (container) {
          container.setAttribute(this.options.attribContainedCheckboxState, state);
        }
      }
    }, {
      key: "setDisabled",
      value: function setDisabled(value) {
        if (value === undefined) {
          throw new TypeError('setDisabled expects a boolean value of true or false');
        }

        if (value === true) {
          this.element.setAttribute('disabled', true);
        } else if (value === false) {
          this.element.removeAttribute('disabled');
        }

        var container = this.element.closest(this.options.selectorContainedCheckboxDisabled);

        if (container) {
          container.setAttribute(this.options.attribContainedCheckboxDisabled, value);
        }
      }
    }, {
      key: "_indeterminateCheckbox",
      value: function _indeterminateCheckbox() {
        if (this.element.getAttribute('aria-checked') === 'mixed') {
          this.element.indeterminate = true;
        }

        if (this.element.indeterminate === true) {
          this.element.setAttribute('aria-checked', 'mixed');
        }

        if (this.element.parentElement.classList.contains(this.options.classLabel) && this.element.indeterminate === true) {
          this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'mixed');
        }
      }
    }, {
      key: "_initCheckbox",
      value: function _initCheckbox() {
        if (this.element.checked === true) {
          this.element.setAttribute('aria-checked', 'true');
        }

        if (this.element.parentElement.classList.contains(this.options.classLabel) && this.element.checked) {
          this.element.parentElement.setAttribute(this.options.attribContainedCheckboxState, 'true');
        }

        if (this.element.parentElement.classList.contains(this.options.classLabel)) {
          this.element.parentElement.setAttribute(this.options.attribContainedCheckboxDisabled, 'false');
        }

        if (this.element.parentElement.classList.contains(this.options.classLabel) && this.element.disabled) {
          this.element.parentElement.setAttribute(this.options.attribContainedCheckboxDisabled, 'true');
        }
      }
      /**
       * The map associating DOM element and copy button UI instance.
       * @member Checkbox.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode Checkbox.create .create()}, or {@linkcode Checkbox.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode Checkbox.init .init()} works.
       * @member Checkbox.options
       * @type {object}
       * @property {string} selectorInit The data attribute to find copy button UIs.
       * @property {string} selectorContainedCheckboxState The CSS selector to find a container of checkbox preserving checked state.
       * @property {string} selectorContainedCheckboxDisabled
       *   The CSS selector to find a container of checkbox preserving disabled state.
       * @property {string} classLabel The CSS class for the label.
       * @property {string} classLabelFocused The CSS class for the focused label.
       * @property {string} attribContainedCheckboxState The attribute name for the checked state of contained checkbox.
       * @property {string} attribContainedCheckboxDisabled The attribute name for the disabled state of contained checkbox.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: ".".concat(prefix, "--checkbox"),
          selectorContainedCheckboxState: '[data-contained-checkbox-state]',
          selectorContainedCheckboxDisabled: '[data-contained-checkbox-disabled]',
          classLabel: "".concat(prefix, "--checkbox-label"),
          classLabelFocused: "".concat(prefix, "--checkbox-label__focus"),
          attribContainedCheckboxState: 'data-contained-checkbox-state',
          attribContainedCheckboxDisabled: 'data-contained-checkbox-disabled'
        };
      }
    }]);

    Checkbox.components = new WeakMap();
    Checkbox.stateChangeTypes = stateChangeTypes;
    return Checkbox;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = Checkbox;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/code-snippet/code-snippet.js":
/*!************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/code-snippet/code-snippet.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var CodeSnippet = /*#__PURE__*/function (_mixin) {
    _inherits(CodeSnippet, _mixin);

    var _super = _createSuper(CodeSnippet);
    /**
     * CodeSnippet UI.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a CodeSnippet UI.
     */


    function CodeSnippet(element, options) {
      var _this;

      _classCallCheck(this, CodeSnippet);

      _this = _super.call(this, element, options);

      _this._initCodeSnippet();

      _this.element.querySelector(_this.options.classExpandBtn).addEventListener('click', function (evt) {
        return _this._handleClick(evt);
      });

      return _this;
    }

    _createClass(CodeSnippet, [{
      key: "_handleClick",
      value: function _handleClick() {
        var expandBtn = this.element.querySelector(this.options.classExpandText);
        this.element.classList.toggle(this.options.classExpanded);

        if (this.element.classList.contains(this.options.classExpanded)) {
          expandBtn.textContent = expandBtn.getAttribute(this.options.attribShowLessText);
        } else {
          expandBtn.textContent = expandBtn.getAttribute(this.options.attribShowMoreText);
        }
      }
    }, {
      key: "_initCodeSnippet",
      value: function _initCodeSnippet() {
        var expandBtn = this.element.querySelector(this.options.classExpandText);

        if (!expandBtn) {
          throw new TypeError('Cannot find the expand button.');
        }

        expandBtn.textContent = expandBtn.getAttribute(this.options.attribShowMoreText);

        if (this.element.offsetHeight < this.options.minHeight) {
          this.element.classList.add(this.options.classHideExpand);
        }
      }
      /**
       * The map associating DOM element and code snippet UI instance.
       * @member CodeSnippet.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode CodeSnippet.create .create()},
       * or {@linkcode CodeSnippet.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode CodeSnippet.init .init()} works.
       * @member CodeSnippet.options
       * @type {object}
       * @property {string} selectorInit The data attribute to find code snippet UIs.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-code-snippet]',
          attribShowMoreText: 'data-show-more-text',
          attribShowLessText: 'data-show-less-text',
          minHeight: 288,
          classExpanded: "".concat(prefix, "--snippet--expand"),
          classExpandBtn: ".".concat(prefix, "--snippet-btn--expand"),
          classExpandText: ".".concat(prefix, "--snippet-btn--text"),
          classHideExpand: "".concat(prefix, "--snippet-btn--expand--hide")
        };
      }
    }]);

    CodeSnippet.components = new WeakMap();
    return CodeSnippet;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = CodeSnippet;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/content-switcher/content-switcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/content-switcher/content-switcher.js ***!
  \********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _eventedState, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedState = _interopRequireDefault(_eventedState);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var ContentSwitcher = /*#__PURE__*/function (_mixin) {
    _inherits(ContentSwitcher, _mixin);

    var _super = _createSuper(ContentSwitcher);
    /**
     * Set of content switcher buttons.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends EventedState
     * @extends Handles
     * @param {HTMLElement} element The element working as a set of content switcher buttons.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorButton] The CSS selector to find switcher buttons.
     * @param {string} [options.selectorButtonSelected] The CSS selector to find the selected switcher button.
     * @param {string} [options.classActive] The CSS class for switcher button's selected state.
     * @param {string} [options.eventBeforeSelected]
     *   The name of the custom event fired before a switcher button is selected.
     *   Cancellation of this event stops selection of content switcher button.
     * @param {string} [options.eventAfterSelected] The name of the custom event fired after a switcher button is selected.
     */


    function ContentSwitcher(element, options) {
      var _this;

      _classCallCheck(this, ContentSwitcher);

      _this = _super.call(this, element, options);

      _this.manage((0, _on["default"])(_this.element, 'click', function (event) {
        _this._handleClick(event);
      }));

      return _this;
    }
    /**
     * Handles click on content switcher button set.
     * If the click is on a content switcher button, activates it.
     * @param {Event} event The event triggering this method.
     */


    _createClass(ContentSwitcher, [{
      key: "_handleClick",
      value: function _handleClick(event) {
        var button = (0, _eventMatches["default"])(event, this.options.selectorButton);

        if (button) {
          this.changeState({
            group: 'selected',
            item: button,
            launchingEvent: event
          });
        }
      }
      /**
       * Internal method of {@linkcode ContentSwitcher#setActive .setActive()}, to select a content switcher button.
       * @private
       * @param {object} detail The detail of the event trigging this action.
       * @param {HTMLElement} detail.item The button to be selected.
       * @param {Function} callback Callback called when change in state completes.
       */

    }, {
      key: "_changeState",
      value: function _changeState(_ref, callback) {
        var _this2 = this;

        var item = _ref.item; // `options.selectorLink` is not defined in this class itself, code here primary is for inherited classes

        var itemLink = item.querySelector(this.options.selectorLink);

        if (itemLink) {
          toArray(this.element.querySelectorAll(this.options.selectorLink)).forEach(function (link) {
            if (link !== itemLink) {
              link.setAttribute('aria-selected', 'false');
            }
          });
          itemLink.setAttribute('aria-selected', 'true');
        }

        var selectorButtons = toArray(this.element.querySelectorAll(this.options.selectorButton));
        selectorButtons.forEach(function (button) {
          if (button !== item) {
            button.setAttribute('aria-selected', false);
            button.classList.toggle(_this2.options.classActive, false);
            toArray(button.ownerDocument.querySelectorAll(button.dataset.target)).forEach(function (element) {
              element.setAttribute('hidden', '');
              element.setAttribute('aria-hidden', 'true');
            });
          }
        });
        item.classList.toggle(this.options.classActive, true);
        item.setAttribute('aria-selected', true);
        toArray(item.ownerDocument.querySelectorAll(item.dataset.target)).forEach(function (element) {
          element.removeAttribute('hidden');
          element.setAttribute('aria-hidden', 'false');
        });

        if (callback) {
          callback();
        }
      }
      /**
       * Selects a content switcher button.
       * If the selected button has `data-target` attribute, DOM elements it points to as a CSS selector will be shown.
       * DOM elements associated with unselected buttons in the same way will be hidden.
       * @param {HTMLElement} item The button to be selected.
       * @param {ChangeState~callback} callback The callback is called once selection is finished
       * or is canceled. Will only invoke callback if it's passed in.
       */

    }, {
      key: "setActive",
      value: function setActive(item, callback) {
        this.changeState({
          group: 'selected',
          item: item
        }, function (error) {
          if (error) {
            if (callback) {
              callback(Object.assign(error, {
                item: item
              }));
            }
          } else if (callback) {
            callback(null, item);
          }
        });
      }
      /**
       * The map associating DOM element and content switcher set instance.
       * @member ContentSwitcher.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode ContentSwitcher.create .create()}, or {@linkcode ContentSwitcher.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode ContentSwitcher.init .init()} works.
       * @member ContentSwitcher.options
       * @type {object}
       * @property {string} selectorInit The CSS selector to find content switcher button set.
       * @property {string} [selectorButton] The CSS selector to find switcher buttons.
       * @property {string} [selectorButtonSelected] The CSS selector to find the selected switcher button.
       * @property {string} [classActive] The CSS class for switcher button's selected state.
       * @property {string} [eventBeforeSelected]
       *   The name of the custom event fired before a switcher button is selected.
       *   Cancellation of this event stops selection of content switcher button.
       * @property {string} [eventAfterSelected] The name of the custom event fired after a switcher button is selected.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-content-switcher]',
          selectorButton: "input[type=\"radio\"], .".concat(prefix, "--content-switcher-btn"),
          classActive: "".concat(prefix, "--content-switcher--selected"),
          eventBeforeSelected: 'content-switcher-beingselected',
          eventAfterSelected: 'content-switcher-selected'
        };
      }
    }]);

    ContentSwitcher.components = new WeakMap();
    return ContentSwitcher;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _eventedState["default"], _handles["default"]));

  var _default = ContentSwitcher;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/copy-button/copy-button.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/copy-button/copy-button.js ***!
  \**********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var CopyButton = /*#__PURE__*/function (_mixin) {
    _inherits(CopyButton, _mixin);

    var _super = _createSuper(CopyButton);
    /**
     * CopyBtn UI.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a copy button UI.
     */


    function CopyButton(element, options) {
      var _this;

      _classCallCheck(this, CopyButton);

      _this = _super.call(this, element, options);

      _this.manage((0, _on["default"])(_this.element, 'click', function () {
        return _this.handleClick();
      }));

      _this.manage((0, _on["default"])(_this.element, 'animationend', function (event) {
        return _this.handleAnimationEnd(event);
      }));

      return _this;
    }
    /**
     * Cleanup animation classes
     */


    _createClass(CopyButton, [{
      key: "handleAnimationEnd",
      value: function handleAnimationEnd(event) {
        if (event.animationName === 'hide-feedback') {
          this.element.classList.remove(this.options.classAnimating);
          this.element.classList.remove(this.options.classFadeOut);
        }
      }
      /**
       * Show the feedback tooltip on click. Hide the feedback tooltip after specified timeout value.
       */

    }, {
      key: "handleClick",
      value: function handleClick() {
        var _this2 = this;

        var feedback = this.element.querySelector(this.options.feedbackTooltip);

        if (feedback) {
          feedback.classList.add(this.options.classShowFeedback);
          setTimeout(function () {
            feedback.classList.remove(_this2.options.classShowFeedback);
          }, this.options.timeoutValue);
        } else {
          this.element.classList.add(this.options.classAnimating);
          this.element.classList.add(this.options.classFadeIn);
          setTimeout(function () {
            _this2.element.classList.remove(_this2.options.classFadeIn);

            _this2.element.classList.add(_this2.options.classFadeOut);
          }, this.options.timeoutValue);
        }
      }
      /**
       * The map associating DOM element and copy button UI instance.
       * @member CopyBtn.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode CopyBtn.create .create()}, or {@linkcode CopyBtn.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode CopyBtn.init .init()} works.
       * @member CopyBtn.options
       * @type {object}
       * @property {string} selectorInit The data attribute to find copy button UIs.
       * @property {string} feedbackTooltip The data attribute to find feedback tooltip.
       * @property {string} classShowFeedback The CSS selector for showing the feedback tooltip.
       * @property {number} timeoutValue The specified timeout value before the feedback tooltip is hidden.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-copy-btn]',
          feedbackTooltip: '[data-feedback]',
          classShowFeedback: "".concat(prefix, "--btn--copy__feedback--displayed"),
          classAnimating: "".concat(prefix, "--copy-btn--animating"),
          classFadeIn: "".concat(prefix, "--copy-btn--fade-in"),
          classFadeOut: "".concat(prefix, "--copy-btn--fade-out"),
          timeoutValue: 2000
        };
      }
    }]);

    CopyButton.components = new WeakMap();
    return CopyButton;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = CopyButton;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/data-table-v2/data-table-v2.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/data-table-v2/data-table-v2.js ***!
  \**************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../data-table/data-table */ "./node_modules/carbon-components/umd/components/data-table/data-table.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _dataTable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _dataTable = _interopRequireDefault(_dataTable);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */


  var _default = _dataTable["default"];
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/data-table/data-table.js":
/*!********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/data-table/data-table.js ***!
  \********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _eventedState, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedState = _interopRequireDefault(_eventedState);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var DataTable = /*#__PURE__*/function (_mixin) {
    _inherits(DataTable, _mixin);

    var _super = _createSuper(DataTable);
    /**
     * Data Table
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends   EventedState
     * @param {HTMLElement} element The root element of tables
     * @param {object} [options] the... options
     * @param {string} [options.selectorInit] selector initialization
     * @param {string} [options.selectorExpandCells] css selector for expand
     * @param {string} [options.expandableRow] css selector for expand
     * @param {string} [options.selectorParentRows] css selector for rows housing expansion
     * @param {string} [options.selectorTableBody] root css for table body
     * @param {string} [options.eventTrigger] selector for event bubble capture points
     * @param {string} [options.eventParentContainer] used find the bubble container
     */


    function DataTable(_element, options) {
      var _this;

      _classCallCheck(this, DataTable);

      _this = _super.call(this, _element, options);

      _this._sortToggle = function (detail) {
        var element = detail.element,
            previousValue = detail.previousValue;
        toArray(_this.tableHeaders).forEach(function (header) {
          var sortEl = header.querySelector(_this.options.selectorTableSort);

          if (sortEl !== null && sortEl !== element) {
            sortEl.classList.remove(_this.options.classTableSortActive);
            sortEl.classList.remove(_this.options.classTableSortAscending);
          }
        });

        if (!previousValue) {
          element.dataset.previousValue = 'ascending';
          element.classList.add(_this.options.classTableSortActive);
          element.classList.add(_this.options.classTableSortAscending);
        } else if (previousValue === 'ascending') {
          element.dataset.previousValue = 'descending';
          element.classList.add(_this.options.classTableSortActive);
          element.classList.remove(_this.options.classTableSortAscending);
        } else if (previousValue === 'descending') {
          element.removeAttribute('data-previous-value');
          element.classList.remove(_this.options.classTableSortActive);
          element.classList.remove(_this.options.classTableSortAscending);
        }
      };

      _this._selectToggle = function (detail) {
        var element = detail.element;
        var checked = element.checked; // increment the  count

        _this.state.checkboxCount += checked ? 1 : -1;
        _this.countEl.textContent = _this.state.checkboxCount;
        var row = element.parentNode.parentNode;
        row.classList.toggle(_this.options.classTableSelected); // toggle on/off batch action bar

        _this._actionBarToggle(_this.state.checkboxCount > 0);
      };

      _this._selectAllToggle = function (_ref) {
        var element = _ref.element;
        var checked = element.checked;
        var inputs = toArray(_this.element.querySelectorAll(_this.options.selectorCheckbox));
        _this.state.checkboxCount = checked ? inputs.length - 1 : 0;
        inputs.forEach(function (item) {
          item.checked = checked;
          var row = item.parentNode.parentNode;

          if (checked && row) {
            row.classList.add(_this.options.classTableSelected);
          } else {
            row.classList.remove(_this.options.classTableSelected);
          }
        });

        _this._actionBarToggle(_this.state.checkboxCount > 0);

        if (_this.batchActionEl) {
          _this.countEl.textContent = _this.state.checkboxCount;
        }
      };

      _this._actionBarCancel = function () {
        var inputs = toArray(_this.element.querySelectorAll(_this.options.selectorCheckbox));
        var row = toArray(_this.element.querySelectorAll(_this.options.selectorTableSelected));
        row.forEach(function (item) {
          item.classList.remove(_this.options.classTableSelected);
        });
        inputs.forEach(function (item) {
          item.checked = false;
        });
        _this.state.checkboxCount = 0;

        _this._actionBarToggle(false);

        if (_this.batchActionEl) {
          _this.countEl.textContent = _this.state.checkboxCount;
        }
      };

      _this._actionBarToggle = function (toggleOn) {
        var handleTransitionEnd;

        var transition = function transition(evt) {
          if (handleTransitionEnd) {
            handleTransitionEnd = _this.unmanage(handleTransitionEnd).release();
          }

          if (evt.target.matches(_this.options.selectorActions)) {
            if (_this.batchActionEl.dataset.active === 'false') {
              _this.batchActionEl.setAttribute('tabIndex', -1);
            } else {
              _this.batchActionEl.setAttribute('tabIndex', 0);
            }
          }
        };

        if (toggleOn) {
          _this.batchActionEl.dataset.active = true;

          _this.batchActionEl.classList.add(_this.options.classActionBarActive);
        } else if (_this.batchActionEl) {
          _this.batchActionEl.dataset.active = false;

          _this.batchActionEl.classList.remove(_this.options.classActionBarActive);
        }

        if (_this.batchActionEl) {
          handleTransitionEnd = _this.manage((0, _on["default"])(_this.batchActionEl, 'transitionend', transition));
        }
      };

      _this._rowExpandToggle = function (_ref2) {
        var element = _ref2.element,
            forceExpand = _ref2.forceExpand;
        var parent = element.closest(_this.options.eventParentContainer); // NOTE: `data-previous-value` keeps UI state before this method makes change in style
        // eslint-disable-next-line eqeqeq

        var shouldExpand = forceExpand != null ? forceExpand : element.dataset.previousValue === undefined || element.dataset.previousValue === 'expanded';

        if (shouldExpand) {
          element.dataset.previousValue = 'collapsed';
          parent.classList.add(_this.options.classExpandableRow);
        } else {
          parent.classList.remove(_this.options.classExpandableRow);
          element.dataset.previousValue = 'expanded';

          var expandHeader = _this.element.querySelector(_this.options.selectorExpandHeader);

          if (expandHeader) {
            expandHeader.dataset.previousValue = 'expanded';
          }
        }
      };

      _this._rowExpandToggleAll = function (_ref3) {
        var element = _ref3.element; // NOTE: `data-previous-value` keeps UI state before this method makes change in style

        var shouldExpand = element.dataset.previousValue === undefined || element.dataset.previousValue === 'expanded';
        element.dataset.previousValue = shouldExpand ? 'collapsed' : 'expanded';

        var expandCells = _this.element.querySelectorAll(_this.options.selectorExpandCells);

        Array.prototype.forEach.call(expandCells, function (cell) {
          _this._rowExpandToggle({
            element: cell,
            forceExpand: shouldExpand
          });
        });
      };

      _this._expandableHoverToggle = function (evt) {
        var element = (0, _eventMatches["default"])(evt, _this.options.selectorChildRow);

        if (element) {
          element.previousElementSibling.classList.toggle(_this.options.classExpandableRowHover, evt.type === 'mouseover');
        }
      };

      _this._toggleState = function (element, evt) {
        var data = element.dataset;
        var label = data.label ? data.label : '';
        var previousValue = data.previousValue ? data.previousValue : '';
        var initialEvt = evt;

        _this.changeState({
          group: data.event,
          element: element,
          label: label,
          previousValue: previousValue,
          initialEvt: initialEvt
        });
      };

      _this._keydownHandler = function (evt) {
        var searchContainer = _this.element.querySelector(_this.options.selectorToolbarSearchContainer);

        var searchEvent = (0, _eventMatches["default"])(evt, _this.options.selectorSearchMagnifier);
        var activeSearch = searchContainer.classList.contains(_this.options.classToolbarSearchActive);

        if (evt.which === 27) {
          _this._actionBarCancel();
        }

        if (searchContainer && searchEvent && evt.which === 13) {
          _this.activateSearch(searchContainer);
        }

        if (activeSearch && evt.which === 27) {
          _this.deactivateSearch(searchContainer, evt);
        }
      };

      _this.refreshRows = function () {
        var newExpandCells = toArray(_this.element.querySelectorAll(_this.options.selectorExpandCells));
        var newExpandableRows = toArray(_this.element.querySelectorAll(_this.options.selectorExpandableRows));
        var newParentRows = toArray(_this.element.querySelectorAll(_this.options.selectorParentRows)); // check if this is a refresh or the first time

        if (_this.parentRows.length > 0) {
          var diffParentRows = newParentRows.filter(function (newRow) {
            return !_this.parentRows.some(function (oldRow) {
              return oldRow === newRow;
            });
          }); // check if there are expandable rows

          if (newExpandableRows.length > 0) {
            var diffExpandableRows = diffParentRows.map(function (newRow) {
              return newRow.nextElementSibling;
            });
            var mergedExpandableRows = [].concat(_toConsumableArray(toArray(_this.expandableRows)), _toConsumableArray(toArray(diffExpandableRows)));
            _this.expandableRows = mergedExpandableRows;
          }
        } else if (newExpandableRows.length > 0) {
          _this.expandableRows = newExpandableRows;
        }

        _this.expandCells = newExpandCells;
        _this.parentRows = newParentRows;
      };

      _this.container = _element.parentNode;
      _this.toolbarEl = _this.element.querySelector(_this.options.selectorToolbar);
      _this.batchActionEl = _this.element.querySelector(_this.options.selectorActions);
      _this.countEl = _this.element.querySelector(_this.options.selectorCount);
      _this.cancelEl = _this.element.querySelector(_this.options.selectorActionCancel);
      _this.tableHeaders = _this.element.querySelectorAll('th');
      _this.tableBody = _this.element.querySelector(_this.options.selectorTableBody);
      _this.expandCells = [];
      _this.expandableRows = [];
      _this.parentRows = [];

      _this.refreshRows();

      _this.manage((0, _on["default"])(_this.element, 'mouseover', _this._expandableHoverToggle));

      _this.manage((0, _on["default"])(_this.element, 'mouseout', _this._expandableHoverToggle));

      _this.manage((0, _on["default"])(_this.element, 'click', function (evt) {
        var eventElement = (0, _eventMatches["default"])(evt, _this.options.eventTrigger);

        var searchContainer = _this.element.querySelector(_this.options.selectorToolbarSearchContainer);

        if (eventElement) {
          _this._toggleState(eventElement, evt);
        }

        if (searchContainer) {
          _this._handleDocumentClick(evt);
        }
      }));

      _this.manage((0, _on["default"])(_this.element, 'keydown', _this._keydownHandler));

      _this.state = {
        checkboxCount: 0
      };
      return _this;
    }

    _createClass(DataTable, [{
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(evt) {
        var searchContainer = this.element.querySelector(this.options.selectorToolbarSearchContainer);
        var searchEvent = (0, _eventMatches["default"])(evt, this.options.selectorSearchMagnifier);
        var activeSearch = searchContainer.classList.contains(this.options.classToolbarSearchActive);

        if (searchContainer && searchEvent) {
          this.activateSearch(searchContainer);
        }

        if (activeSearch) {
          this.deactivateSearch(searchContainer, evt);
        }
      }
    }, {
      key: "activateSearch",
      value: function activateSearch(container) {
        var input = container.querySelector(this.options.selectorSearchInput);
        container.classList.add(this.options.classToolbarSearchActive);
        input.focus();
      }
    }, {
      key: "deactivateSearch",
      value: function deactivateSearch(container, evt) {
        var trigger = container.querySelector(this.options.selectorSearchMagnifier);
        var input = container.querySelector(this.options.selectorSearchInput);
        var svg = trigger.querySelector('svg');

        if (input.value.length === 0 && evt.target !== input && evt.target !== trigger && evt.target !== svg) {
          container.classList.remove(this.options.classToolbarSearchActive);
          trigger.focus();
        }

        if (evt.which === 27 && evt.target === input) {
          container.classList.remove(this.options.classToolbarSearchActive);
          trigger.focus();
        }
      }
    }, {
      key: "_changeState",
      value: function _changeState(detail, callback) {
        this[this.constructor.eventHandlers[detail.group]](detail);
        callback();
      }
    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: "[data-table]",
          selectorToolbar: ".".concat(prefix, "--table--toolbar"),
          selectorActions: ".".concat(prefix, "--batch-actions"),
          selectorCount: '[data-items-selected]',
          selectorActionCancel: ".".concat(prefix, "--batch-summary__cancel"),
          selectorCheckbox: ".".concat(prefix, "--checkbox"),
          selectorExpandHeader: "th.".concat(prefix, "--table-expand"),
          selectorExpandCells: "td.".concat(prefix, "--table-expand"),
          selectorExpandableRows: ".".concat(prefix, "--expandable-row"),
          selectorParentRows: ".".concat(prefix, "--parent-row"),
          selectorChildRow: '[data-child-row]',
          selectorTableBody: 'tbody',
          selectorTableSort: ".".concat(prefix, "--table-sort"),
          selectorTableSelected: ".".concat(prefix, "--data-table--selected"),
          selectorToolbarSearchContainer: ".".concat(prefix, "--toolbar-search-container-expandable"),
          selectorSearchMagnifier: ".".concat(prefix, "--search-magnifier"),
          selectorSearchInput: ".".concat(prefix, "--search-input"),
          classExpandableRow: "".concat(prefix, "--expandable-row"),
          classExpandableRowHidden: "".concat(prefix, "--expandable-row--hidden"),
          classExpandableRowHover: "".concat(prefix, "--expandable-row--hover"),
          classTableSortAscending: "".concat(prefix, "--table-sort--ascending"),
          classTableSortActive: "".concat(prefix, "--table-sort--active"),
          classToolbarSearchActive: "".concat(prefix, "--toolbar-search-container-active"),
          classActionBarActive: "".concat(prefix, "--batch-actions--active"),
          classTableSelected: "".concat(prefix, "--data-table--selected"),
          eventBeforeExpand: "data-table-beforetoggleexpand",
          eventAfterExpand: "data-table-aftertoggleexpand",
          eventBeforeExpandAll: "data-table-beforetoggleexpandall",
          eventAfterExpandAll: "data-table-aftertoggleexpandall",
          eventBeforeSort: "data-table-beforetogglesort",
          eventAfterSort: "data-table-aftertogglesort",
          eventTrigger: '[data-event]',
          eventParentContainer: '[data-parent-row]'
        };
      }
    }]);

    DataTable.components = new WeakMap();
    DataTable.eventHandlers = {
      expand: '_rowExpandToggle',
      expandAll: '_rowExpandToggleAll',
      sort: '_sortToggle',
      select: '_selectToggle',
      'select-all': '_selectAllToggle',
      'action-bar-cancel': '_actionBarCancel'
    };
    return DataTable;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _eventedState["default"], _handles["default"]));

  var _default = DataTable;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/date-picker/date-picker.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/date-picker/date-picker.js ***!
  \**********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! flatpickr */ "flatpickr"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _flatpickr, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _flatpickr = _interopRequireDefault(_flatpickr);
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
  /* eslint no-underscore-dangle: [2, { "allow": ["_input", "_updateClassNames", "_updateInputFields"], "allowAfterThis": true }] */
  // `this.options` create-component mix-in creates prototype chain
  // so that `options` given in constructor argument wins over the one defined in static `options` property
  // 'Flatpickr' wants flat structure of object instead


  function flattenOptions(options) {
    var o = {}; // eslint-disable-next-line guard-for-in, no-restricted-syntax

    for (var key in options) {
      o[key] = options[key];
    }

    return o;
  } // Weekdays shorthand for english locale


  _flatpickr["default"].l10ns.en.weekdays.shorthand.forEach(function (day, index) {
    var currentDay = _flatpickr["default"].l10ns.en.weekdays.shorthand;

    if (currentDay[index] === 'Thu' || currentDay[index] === 'Th') {
      currentDay[index] = 'Th';
    } else {
      currentDay[index] = currentDay[index].charAt(0);
    }
  });

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };
  /**
   * @param {number} monthNumber The month number.
   * @param {boolean} shorthand `true` to use shorthand month.
   * @param {Locale} locale The Flatpickr locale data.
   * @returns {string} The month string.
   */


  var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
    return locale.months[shorthand ? 'shorthand' : 'longhand'][monthNumber];
  };
  /**
   * @param {object} config Plugin configuration.
   * @param {boolean} [config.shorthand] `true` to use shorthand month.
   * @param {string} config.selectorFlatpickrMonthYearContainer The CSS selector for the container of month/year selection UI.
   * @param {string} config.selectorFlatpickrYearContainer The CSS selector for the container of year selection UI.
   * @param {string} config.selectorFlatpickrCurrentMonth The CSS selector for the text-based month selection UI.
   * @param {string} config.classFlatpickrCurrentMonth The CSS class for the text-based month selection UI.
   * @returns {Plugin} A Flatpickr plugin to use text instead of `<select>` for month picker.
   */


  var carbonFlatpickrMonthSelectPlugin = function carbonFlatpickrMonthSelectPlugin(config) {
    return function (fp) {
      var setupElements = function setupElements() {
        var _fp$monthElements;

        if (!fp.monthElements) {
          return;
        }

        fp.monthElements.forEach(function (elem) {
          if (!elem.parentNode) return;
          elem.parentNode.removeChild(elem);
        });

        (_fp$monthElements = fp.monthElements).splice.apply(_fp$monthElements, [0, fp.monthElements.length].concat(_toConsumableArray(fp.monthElements.map(function () {
          // eslint-disable-next-line no-underscore-dangle
          var monthElement = fp._createElement('span', config.classFlatpickrCurrentMonth);

          monthElement.textContent = monthToStr(fp.currentMonth, config.shorthand === true, fp.l10n);
          fp.yearElements[0].closest(config.selectorFlatpickrMonthYearContainer).insertBefore(monthElement, fp.yearElements[0].closest(config.selectorFlatpickrYearContainer));
          return monthElement;
        }))));
      };

      var updateCurrentMonth = function updateCurrentMonth() {
        var monthStr = monthToStr(fp.currentMonth, config.shorthand === true, fp.l10n);
        fp.yearElements.forEach(function (elem) {
          var currentMonthContainer = elem.closest(config.selectorFlatpickrMonthYearContainer);
          Array.prototype.forEach.call(currentMonthContainer.querySelectorAll('.cur-month'), function (monthElement) {
            monthElement.textContent = monthStr;
          });
        });
      };

      var register = function register() {
        fp.loadedPlugins.push('carbonFlatpickrMonthSelectPlugin');
      };

      return {
        onMonthChange: updateCurrentMonth,
        onValueUpdate: updateCurrentMonth,
        onOpen: updateCurrentMonth,
        onReady: [setupElements, updateCurrentMonth, register]
      };
    };
  };

  var DatePicker = /*#__PURE__*/function (_mixin) {
    _inherits(DatePicker, _mixin);

    var _super = _createSuper(DatePicker);
    /**
     * DatePicker.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as an date picker.
     */


    function DatePicker(element, options) {
      var _this;

      _classCallCheck(this, DatePicker);

      _this = _super.call(this, element, options);

      _this._handleFocus = function () {
        if (_this.calendar) {
          _this.calendar.open();
        }
      };

      _this._handleBlur = function (event) {
        if (_this.calendar) {
          var focusTo = event.relatedTarget;

          if (!focusTo || !_this.element.contains(focusTo) && (!_this.calendar.calendarContainer || !_this.calendar.calendarContainer.contains(focusTo))) {
            _this.calendar.close();
          }
        }
      };

      _this._initDatePicker = function (type) {
        if (type === 'range') {
          // Given FlatPickr assumes one `<input>` even in range mode,
          // use a hidden `<input>` for such purpose, separate from our from/to `<input>`s
          var doc = _this.element.ownerDocument;
          var rangeInput = doc.createElement('input');
          rangeInput.className = _this.options.classVisuallyHidden;
          rangeInput.setAttribute('aria-hidden', 'true');

          _this.element.appendChild(rangeInput);

          _this._rangeInput = rangeInput; // An attempt to open the date picker dropdown when this component gets focus,
          // and close the date picker dropdown when this component loses focus

          var w = doc.defaultView;
          var hasFocusin = ('onfocusin' in w);
          var hasFocusout = ('onfocusout' in w);
          var focusinEventName = hasFocusin ? 'focusin' : 'focus';
          var focusoutEventName = hasFocusout ? 'focusout' : 'blur';

          _this.manage((0, _on["default"])(_this.element, focusinEventName, _this._handleFocus, !hasFocusin));

          _this.manage((0, _on["default"])(_this.element, focusoutEventName, _this._handleBlur, !hasFocusout));

          _this.manage((0, _on["default"])(_this.element.querySelector(_this.options.selectorDatePickerIcon), focusoutEventName, _this._handleBlur, !hasFocusout));
        }

        var self = _assertThisInitialized(_this);

        var date = type === 'range' ? _this._rangeInput : _this.element.querySelector(_this.options.selectorDatePickerInput);
        var _this$options = _this.options,
            _onClose = _this$options.onClose,
            _onChange = _this$options.onChange,
            _onMonthChange = _this$options.onMonthChange,
            _onYearChange = _this$options.onYearChange,
            _onOpen = _this$options.onOpen,
            _onValueUpdate = _this$options.onValueUpdate;
        var calendar = new _flatpickr["default"](date, Object.assign(flattenOptions(_this.options), {
          allowInput: true,
          mode: type,
          disableMobile: true,
          positionElement: type === 'range' && _this.element.querySelector(_this.options.selectorDatePickerInputFrom),
          onClose: function onClose(selectedDates) {
            // An attempt to disable Flatpickr's focus tracking system,
            // which has adverse effect with our old set up with two `<input>`s or our latest setup with a hidden `<input>`
            if (self.shouldForceOpen) {
              if (self.calendar.calendarContainer) {
                self.calendar.calendarContainer.classList.add('open');
              }

              self.calendar.isOpen = true;
            }

            for (var _len = arguments.length, remainder = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              remainder[_key - 1] = arguments[_key];
            }

            if (!_onClose || _onClose.call.apply(_onClose, [this, selectedDates].concat(remainder)) !== false) {
              self._updateClassNames(calendar);

              self._updateInputFields(selectedDates, type);
            }
          },
          onChange: function onChange() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            if (!_onChange || _onChange.call.apply(_onChange, [this].concat(args)) !== false) {
              self._updateClassNames(calendar);

              if (type === 'range') {
                if (calendar.selectedDates.length === 1 && calendar.isOpen) {
                  self.element.querySelector(self.options.selectorDatePickerInputTo).classList.add(self.options.classFocused);
                } else {
                  self.element.querySelector(self.options.selectorDatePickerInputTo).classList.remove(self.options.classFocused);
                }
              }
            }
          },
          onMonthChange: function onMonthChange() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            if (!_onMonthChange || _onMonthChange.call.apply(_onMonthChange, [this].concat(args)) !== false) {
              self._updateClassNames(calendar);
            }
          },
          onYearChange: function onYearChange() {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            if (!_onYearChange || _onYearChange.call.apply(_onYearChange, [this].concat(args)) !== false) {
              self._updateClassNames(calendar);
            }
          },
          onOpen: function onOpen() {
            // An attempt to disable Flatpickr's focus tracking system,
            // which has adverse effect with our old set up with two `<input>`s or our latest setup with a hidden `<input>`
            self.shouldForceOpen = true;
            setTimeout(function () {
              self.shouldForceOpen = false;
            }, 0);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            if (!_onOpen || _onOpen.call.apply(_onOpen, [this].concat(args)) !== false) {
              self._updateClassNames(calendar);
            }
          },
          onValueUpdate: function onValueUpdate() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            if ((!_onValueUpdate || _onValueUpdate.call.apply(_onValueUpdate, [this].concat(args)) !== false) && type === 'range') {
              self._updateInputFields(self.calendar.selectedDates, type);
            }
          },
          nextArrow: _this._rightArrowHTML(),
          prevArrow: _this._leftArrowHTML(),
          plugins: [].concat(_toConsumableArray(_this.options.plugins || []), [carbonFlatpickrMonthSelectPlugin(_this.options)])
        }));

        if (type === 'range') {
          _this._addInputLogic(_this.element.querySelector(_this.options.selectorDatePickerInputFrom), 0);

          _this._addInputLogic(_this.element.querySelector(_this.options.selectorDatePickerInputTo), 1);
        }

        _this.manage((0, _on["default"])(_this.element.querySelector(_this.options.selectorDatePickerIcon), 'click', function () {
          calendar.open();
        }));

        _this._updateClassNames(calendar);

        if (type !== 'range') {
          _this._addInputLogic(date);
        }

        return calendar;
      };

      _this._addInputLogic = function (input, index) {
        if (!isNaN(index) && (index < 0 || index > 1)) {
          throw new RangeError("The index of <input> (".concat(index, ") is out of range."));
        }

        var inputField = input;

        _this.manage((0, _on["default"])(inputField, 'change', function (evt) {
          if (evt.isTrusted || evt.detail && evt.detail.isNotFromFlatpickr) {
            var inputDate = _this.calendar.parseDate(inputField.value);

            if (inputDate && !isNaN(inputDate.valueOf())) {
              if (isNaN(index)) {
                _this.calendar.setDate(inputDate);
              } else {
                var selectedDates = _this.calendar.selectedDates;
                selectedDates[index] = inputDate;

                _this.calendar.setDate(selectedDates);
              }
            }
          }

          _this._updateClassNames(_this.calendar);
        })); // An attempt to temporarily set the `<input>` being edited as the one FlatPicker manages,
        // as FlatPicker attempts to take over `keydown` event handler on `document` to run on the date picker dropdown.


        _this.manage((0, _on["default"])(inputField, 'keydown', function (evt) {
          var origInput = _this.calendar._input;
          _this.calendar._input = evt.target;
          setTimeout(function () {
            _this.calendar._input = origInput;
          });
        }));
      };

      _this._updateClassNames = function (_ref) {
        var calendarContainer = _ref.calendarContainer,
            selectedDates = _ref.selectedDates;

        if (calendarContainer) {
          calendarContainer.classList.add(_this.options.classCalendarContainer);
          calendarContainer.querySelector('.flatpickr-month').classList.add(_this.options.classMonth);
          calendarContainer.querySelector('.flatpickr-weekdays').classList.add(_this.options.classWeekdays);
          calendarContainer.querySelector('.flatpickr-days').classList.add(_this.options.classDays);
          toArray(calendarContainer.querySelectorAll('.flatpickr-weekday')).forEach(function (item) {
            var currentItem = item;
            currentItem.innerHTML = currentItem.innerHTML.replace(/\s+/g, '');
            currentItem.classList.add(_this.options.classWeekday);
          });
          toArray(calendarContainer.querySelectorAll('.flatpickr-day')).forEach(function (item) {
            item.classList.add(_this.options.classDay);

            if (item.classList.contains('today') && selectedDates.length > 0) {
              item.classList.add('no-border');
            } else if (item.classList.contains('today') && selectedDates.length === 0) {
              item.classList.remove('no-border');
            }
          });
        }
      };

      _this._updateInputFields = function (selectedDates, type) {
        if (type === 'range') {
          if (selectedDates.length === 2) {
            _this.element.querySelector(_this.options.selectorDatePickerInputFrom).value = _this._formatDate(selectedDates[0]);
            _this.element.querySelector(_this.options.selectorDatePickerInputTo).value = _this._formatDate(selectedDates[1]);
          } else if (selectedDates.length === 1) {
            _this.element.querySelector(_this.options.selectorDatePickerInputFrom).value = _this._formatDate(selectedDates[0]);
          }
        } else if (selectedDates.length === 1) {
          _this.element.querySelector(_this.options.selectorDatePickerInput).value = _this._formatDate(selectedDates[0]);
        }

        _this._updateClassNames(_this.calendar);
      };

      _this._formatDate = function (date) {
        return _this.calendar.formatDate(date, _this.calendar.config.dateFormat);
      };

      var _type = _this.element.getAttribute(_this.options.attribType);

      _this.calendar = _this._initDatePicker(_type);

      if (_this.calendar.calendarContainer) {
        _this.manage((0, _on["default"])(_this.element, 'keydown', function (e) {
          if (e.which === 40) {
            e.preventDefault();

            (_this.calendar.selectedDateElem || _this.calendar.todayDateElem || _this.calendar.calendarContainer).focus();
          }
        }));

        _this.manage((0, _on["default"])(_this.calendar.calendarContainer, 'keydown', function (e) {
          if (e.which === 9 && _type === 'range') {
            _this._updateClassNames(_this.calendar);

            _this.element.querySelector(_this.options.selectorDatePickerInputFrom).focus();
          }
        }));
      }

      return _this;
    }
    /**
     * Opens the date picker dropdown when this component gets focus.
     * Used only for range mode for now.
     * @private
     */


    _createClass(DatePicker, [{
      key: "_rightArrowHTML",
      value: function _rightArrowHTML() {
        return "\n      <svg\n        focusable=\"false\"\n        preserveAspectRatio=\"xMidYMid meet\"\n        style=\"will-change: transform;\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        aria-hidden=\"true\">\n          <path d=\"M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z\"></path>\n      </svg>";
      }
    }, {
      key: "_leftArrowHTML",
      value: function _leftArrowHTML() {
        return "\n      <svg\n        focusable=\"false\"\n        preserveAspectRatio=\"xMidYMid meet\"\n        style=\"will-change: transform;\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"16\"\n        height=\"16\"\n        viewBox=\"0 0 16 16\"\n        aria-hidden=\"true\"\n      >\n        <path d=\"M5 8l5-5 .7.7L6.4 8l4.3 4.3-.7.7z\"></path>\n      </svg>";
      }
    }, {
      key: "release",
      value: function release() {
        if (this._rangeInput && this._rangeInput.parentNode) {
          this._rangeInput.parentNode.removeChild(this._rangeInput);
        }

        if (this.calendar) {
          try {
            this.calendar.destroy();
          } catch (err) {} // eslint-disable-line no-empty


          this.calendar = null;
        }

        return _get(_getPrototypeOf(DatePicker.prototype), "release", this).call(this);
      }
      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode DatePicker.create .create()}, or {@linkcode DatePicker.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode DatePicker.init .init()} works.
       * @property {string} selectorInit The CSS selector to find date picker UIs.
       */

    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-date-picker]',
          selectorDatePickerInput: '[data-date-picker-input]',
          selectorDatePickerInputFrom: '[data-date-picker-input-from]',
          selectorDatePickerInputTo: '[data-date-picker-input-to]',
          selectorDatePickerIcon: '[data-date-picker-icon]',
          selectorFlatpickrMonthYearContainer: '.flatpickr-current-month',
          selectorFlatpickrYearContainer: '.numInputWrapper',
          selectorFlatpickrCurrentMonth: '.cur-month',
          classCalendarContainer: "".concat(prefix, "--date-picker__calendar"),
          classMonth: "".concat(prefix, "--date-picker__month"),
          classWeekdays: "".concat(prefix, "--date-picker__weekdays"),
          classDays: "".concat(prefix, "--date-picker__days"),
          classWeekday: "".concat(prefix, "--date-picker__weekday"),
          classDay: "".concat(prefix, "--date-picker__day"),
          classFocused: "".concat(prefix, "--focused"),
          classVisuallyHidden: "".concat(prefix, "--visually-hidden"),
          classFlatpickrCurrentMonth: 'cur-month',
          attribType: 'data-date-picker-type',
          dateFormat: 'm/d/Y'
        };
      }
      /**
       * The map associating DOM element and date picker UI instance.
       * @type {WeakMap}
       */

    }]);

    DatePicker.components = new WeakMap();
    return DatePicker;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = DatePicker;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/dropdown/dropdown.js":
/*!****************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/dropdown/dropdown.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/track-blur */ "./node_modules/carbon-components/umd/globals/js/mixins/track-blur.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _trackBlur, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _trackBlur = _interopRequireDefault(_trackBlur);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var Dropdown = /*#__PURE__*/function (_mixin) {
    _inherits(Dropdown, _mixin);

    var _super = _createSuper(Dropdown);
    /**
     * A selector with drop downs.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends TrackBlur
     * @param {HTMLElement} element The element working as a selector.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorItem] The CSS selector to find clickable areas in dropdown items.
     * @param {string} [options.selectorItemSelected] The CSS selector to find the clickable area in the selected dropdown item.
     * @param {string} [options.classSelected] The CSS class for the selected dropdown item.
     * @param {string} [options.classOpen] The CSS class for the open state.
     * @param {string} [options.classDisabled] The CSS class for the disabled state.
     * @param {string} [options.eventBeforeSelected]
     *   The name of the custom event fired before a drop down item is selected.
     *   Cancellation of this event stops selection of drop down item.
     * @param {string} [options.eventAfterSelected] The name of the custom event fired after a drop down item is selected.
     */


    function Dropdown(element, options) {
      var _this;

      _classCallCheck(this, Dropdown);

      _this = _super.call(this, element, options);

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'click', function (event) {
        _this._toggle(event);
      }));

      _this.manage((0, _on["default"])(_this.element, 'keydown', function (event) {
        _this._handleKeyDown(event);
      }));

      _this.manage((0, _on["default"])(_this.element, 'click', function (event) {
        var item = (0, _eventMatches["default"])(event, _this.options.selectorItem);

        if (item) {
          _this.select(item);
        }
      })); // When using the active descendant approach we use a class to give focus styles during keyboard (up/down arrows)
      // navigation instead of relying on the :focus selector. This leaves the potential to have multiple items when
      // switching interactions between keyboard and mouse users. To more closely align with Carbon React implementation,
      // we want the focus class to move as the user hovers over items. This also updates the location of focus based on
      // the last hovered item if the user switches back to using the keyboard.


      if ( // NOTE: `selectorTrigger` does NOT match the trigger button in older markup
      _this.element.querySelector(_this.options.selectorTrigger) && _this.element.querySelector(_this.options.selectorMenu)) {
        // Using the latest HTML structure that supports the aria-activedescendant attribute
        _this.manage((0, _on["default"])(_this.element, 'mouseover', function (event) {
          var item = (0, _eventMatches["default"])(event, _this.options.selectorItem);

          if (item) {
            _this._updateFocus(item);
          }
        }));
      }

      return _this;
    }
    /**
     * Handles keydown event.
     * @param {Event} event The event triggering this method.
     */


    _createClass(Dropdown, [{
      key: "_handleKeyDown",
      value: function _handleKeyDown(event) {
        var isOpen = this.element.classList.contains(this.options.classOpen);
        var direction = {
          38: this.constructor.NAVIGATE.BACKWARD,
          40: this.constructor.NAVIGATE.FORWARD
        }[event.which];

        if (isOpen && direction !== undefined) {
          this.navigate(direction);
          event.preventDefault(); // Prevents up/down keys from scrolling container
        } else {
          // get selected item
          // in v10.0, the anchor elements fire click events on Enter keypress when a dropdown item is selected
          // in v10.5 (#3586), focus is no longer placed on the dropdown items and is instead kept fixed on the ul menu
          // so we need to manually call getCurrentNavigation and select the item
          var item = this.getCurrentNavigation();

          if (item && isOpen && (event.which === 13 || event.which === 32) && !this.element.ownerDocument.activeElement.matches(this.options.selectorItem)) {
            event.preventDefault();
            this.select(item);
          }

          this._toggle(event);
        }
      }
      /**
       * When using aria-activedescendant we want to make sure attributes and classes
       * are properly cleaned up when the dropdown is closed
       * @private
       */

    }, {
      key: "_focusCleanup",
      value: function _focusCleanup() {
        // NOTE: `selectorTrigger` does NOT match the trigger button in older markup
        var triggerNode = this.element.querySelector(this.options.selectorTrigger); // only want to grab the listNode IF it's using the latest a11y HTML structure

        var listNode = triggerNode ? this.element.querySelector(this.options.selectorMenu) : null;

        if (listNode) {
          listNode.removeAttribute('aria-activedescendant');
          var focusedItem = this.element.querySelector(this.options.selectorItemFocused);

          if (focusedItem) {
            focusedItem.classList.remove(this.options.classFocused);
          }
        }
      }
      /**
       * Update focus using aria-activedescendant HTML structure
       * @param {HTMLElement} itemToFocus The element to be focused.
       */

    }, {
      key: "_updateFocus",
      value: function _updateFocus(itemToFocus) {
        // NOTE: `selectorTrigger` does NOT match the trigger button in older markup
        var triggerNode = this.element.querySelector(this.options.selectorTrigger); // only want to grab the listNode IF it's using the latest a11y HTML structure

        var listNode = triggerNode ? this.element.querySelector(this.options.selectorMenu) : null;
        var previouslyFocused = listNode.querySelector(this.options.selectorItemFocused);
        itemToFocus.classList.add(this.options.classFocused);
        listNode.setAttribute('aria-activedescendant', itemToFocus.id);

        if (previouslyFocused) {
          previouslyFocused.classList.remove(this.options.classFocused);
        }
      }
      /**
       * Opens and closes the dropdown menu.
       * @param {Event} [event] The event triggering this method.
       *
       * @todo https://github.com/carbon-design-system/carbon/issues/3641
       */

    }, {
      key: "_toggle",
      value: function _toggle(event) {
        var _this2 = this;

        var isDisabled = this.element.classList.contains(this.options.classDisabled);

        if (isDisabled) {
          return;
        } // NOTE: `selectorTrigger` does NOT match the trigger button in older markup


        var triggerNode = this.element.querySelector(this.options.selectorTrigger);

        if ( // User presses down arrow
        event.which === 40 && !event.target.matches(this.options.selectorItem) || // User presses space or enter and the trigger is not a button OR event is not fired by trigger
        (!triggerNode || !triggerNode.contains(event.target)) && [13, 32].indexOf(event.which) >= 0 && !event.target.matches(this.options.selectorItem) || // User presses esc
        event.which === 27 || // User clicks
        event.type === 'click') {
          var isOpen = this.element.classList.contains(this.options.classOpen);
          var isOfSelf = this.element.contains(event.target); // Determine if the open className should be added, removed, or toggled

          var actions = {
            add: isOfSelf && event.which === 40 && !isOpen,
            remove: (!isOfSelf || event.which === 27) && isOpen,
            toggle: isOfSelf && event.which !== 27 && event.which !== 40
          };
          var changedState = false;
          Object.keys(actions).forEach(function (action) {
            if (actions[action]) {
              changedState = true;

              _this2.element.classList[action](_this2.options.classOpen);
            }
          });
          var listItems = toArray(this.element.querySelectorAll(this.options.selectorItem)); // only want to grab the listNode IF it's using the latest a11y HTML structure

          var listNode = triggerNode ? this.element.querySelector(this.options.selectorMenu) : null; // @todo remove conditionals for elements existing once legacy structure is depreciated

          if (changedState && this.element.classList.contains(this.options.classOpen)) {
            // toggled open
            if (triggerNode) {
              triggerNode.setAttribute('aria-expanded', 'true');
            }

            (listNode || this.element).focus();

            if (listNode) {
              var selectedNode = listNode.querySelector(this.options.selectorLinkSelected);
              listNode.setAttribute('aria-activedescendant', (selectedNode || listItems[0]).id);
              (selectedNode || listItems[0]).classList.add(this.options.classFocused);
            }
          } else if (changedState && (isOfSelf || actions.remove)) {
            // toggled close
            // timer is used to call focus AFTER the click event on
            // trigger button (which is caused by keypress e.g. during keyboard navigation)
            setTimeout(function () {
              return (triggerNode || _this2.element).focus();
            }, 0);

            if (triggerNode) {
              triggerNode.setAttribute('aria-expanded', 'false');
            }

            this._focusCleanup();
          } // @todo remove once legacy structure is depreciated


          if (!triggerNode) {
            listItems.forEach(function (item) {
              if (_this2.element.classList.contains(_this2.options.classOpen)) {
                item.tabIndex = 0;
              } else {
                item.tabIndex = -1;
              }
            });
          }

          var menuListNode = this.element.querySelector(this.options.selectorMenu);

          if (menuListNode) {
            menuListNode.tabIndex = this.element.classList.contains(this.options.classOpen) ? '0' : '-1';
          }
        }
      }
      /**
       * @returns {Element} Currently highlighted element.
       */

    }, {
      key: "getCurrentNavigation",
      value: function getCurrentNavigation() {
        var focusedNode; // Using the latest semantic markup structure where trigger is a button
        // @todo remove conditional once legacy structure is depreciated
        // NOTE: `selectorTrigger` does NOT match the trigger button in older markup

        if (this.element.querySelector(this.options.selectorTrigger)) {
          var listNode = this.element.querySelector(this.options.selectorMenu);
          var focusedId = listNode.getAttribute('aria-activedescendant');
          focusedNode = focusedId ? listNode.querySelector("#".concat(focusedId)) : null;
        } else {
          var focused = this.element.ownerDocument.activeElement;
          focusedNode = focused.nodeType === Node.ELEMENT_NODE && focused.matches(this.options.selectorItem) ? focused : null;
        }

        return focusedNode;
      }
      /**
       * Moves up/down the focus.
       * @param {number} direction The direction of navigating.
       */
      // @todo create issue it's a better UX to move the focus when the user hovers so they stay in sync

    }, {
      key: "navigate",
      value: function navigate(direction) {
        var items = toArray(this.element.querySelectorAll(this.options.selectorItem));
        var start = this.getCurrentNavigation() || this.element.querySelector(this.options.selectorLinkSelected);

        var getNextItem = function getNextItem(old) {
          var handleUnderflow = function handleUnderflow(i, l) {
            return i + (i >= 0 ? 0 : l);
          };

          var handleOverflow = function handleOverflow(i, l) {
            return i - (i < l ? 0 : l);
          }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


          var index = Math.max(items.indexOf(old) + direction, -1);
          return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
        };

        var isShowSelected = this.element.classList.contains(this.options.classShowSelected);

        for (var current = getNextItem(start); current && current !== start; current = getNextItem(current)) {
          if (!current.matches(this.options.selectorItemHidden) && !current.parentNode.matches(this.options.selectorItemHidden) && (isShowSelected || !isShowSelected && !current.parentElement.matches(this.options.selectorItemSelected))) {
            // Using the latest semantic markup structure where trigger is a button
            // @todo remove conditional once legacy structure is depreciated
            // NOTE: `selectorTrigger` does NOT match the trigger button in older markup
            if (this.element.querySelector(this.options.selectorTrigger)) {
              this._updateFocus(current);
            } else {
              current.focus();
            }

            break;
          }
        }
      }
      /**
       * Handles clicking on the dropdown options, doing the following:
       * * Change Dropdown text to selected option.
       * * Remove selected option from options when selected.
       * * Emit custom events.
       * @param {HTMLElement} itemToSelect The element to be activated.
       */

    }, {
      key: "select",
      value: function select(itemToSelect) {
        var _this3 = this;

        var eventStart = new CustomEvent(this.options.eventBeforeSelected, {
          bubbles: true,
          cancelable: true,
          detail: {
            item: itemToSelect
          }
        });

        if (this.element.dispatchEvent(eventStart)) {
          if (this.element.dataset.dropdownType !== 'navigation') {
            // NOTE: `selectorTrigger` does NOT match the trigger button in older markup
            var selectorText = !this.element.querySelector(this.options.selectorTrigger) && this.element.dataset.dropdownType !== 'inline' ? this.options.selectorText : this.options.selectorTextInner;
            var text = this.element.querySelector(selectorText);

            if (text) {
              text.innerHTML = itemToSelect.innerHTML;
            }

            itemToSelect.parentElement.classList.add(this.options.classSelected);
          }

          this.element.dataset.value = itemToSelect.parentElement.dataset.value;
          toArray(this.element.querySelectorAll(this.options.selectorLinkSelected)).forEach(function (item) {
            if (itemToSelect !== item) {
              item.parentElement.classList.remove(_this3.options.classSelected);
            }
          });
          this.element.dispatchEvent(new CustomEvent(this.options.eventAfterSelected, {
            bubbles: true,
            cancelable: true,
            detail: {
              item: itemToSelect
            }
          }));
        }
      }
      /**
       * Closes the dropdown menu if this component loses focus.
       */

    }, {
      key: "handleBlur",
      value: function handleBlur() {
        this.element.classList.remove(this.options.classOpen);

        this._focusCleanup();
      }
      /**
       * The map associating DOM element and selector instance.
       * @member Dropdown.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode Dropdown.create .create()}, or {@linkcode Dropdown.init .init()},
       * properties in this object are overridden for the instance being create and how {@linkcode Dropdown.init .init()} works.
       * @member Dropdown.options
       * @type {object}
       * @property {string} selectorInit The CSS selector to find selectors.
       * @property {string} [selectorTrigger]
       *   The CSS selector to find the trigger button when using a11y compliant markup.
       *   NOTE: Does NOT match the trigger button in older markup.
       * @property {string} [selectorMenu] The CSS selector to find menu list when using a11y compliant markup.
       * @property {string} [selectorText] The CSS selector to find the element showing the selected item.
       * @property {string} [selectorTextInner] The CSS selector to find the element showing the selected item, used for inline mode.
       * @property {string} [selectorItem] The CSS selector to find clickable areas in dropdown items.
       * @property {string} [selectorItemHidden]
       *   The CSS selector to find hidden dropdown items.
       *   Used to skip dropdown items for keyboard navigation.
       * @property {string} [selectorItemSelected] The CSS selector to find the clickable area in the selected dropdown item.
       * @property {string} [selectorItemFocused] The CSS selector to find the clickable area in the focused dropdown item.
       * @property {string} [selectorLinkSelected] The CSS selector to target the link node of the selected dropdown item.
       * @property {string} [classShowSelected] The CSS class for the show selected modifier of the dropdown.
       * @property {string} [classSelected] The CSS class for the selected dropdown item.
       * @property {string} [classFocused] The CSS class for the focused dropdown item.
       * @property {string} [classOpen] The CSS class for the open state.
       * @property {string} [classDisabled] The CSS class for the disabled state.
       * @property {string} [eventBeforeSelected]
       *   The name of the custom event fired before a drop down item is selected.
       *   Cancellation of this event stops selection of drop down item.
       * @property {string} [eventAfterSelected] The name of the custom event fired after a drop down item is selected.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-dropdown]',
          selectorTrigger: "button.".concat(prefix, "--dropdown-text"),
          // NOTE: Does NOT match the trigger button in older markup.
          selectorMenu: ".".concat(prefix, "--dropdown-list"),
          selectorText: ".".concat(prefix, "--dropdown-text"),
          selectorTextInner: ".".concat(prefix, "--dropdown-text__inner"),
          selectorItem: ".".concat(prefix, "--dropdown-link"),
          selectorItemSelected: ".".concat(prefix, "--dropdown--selected"),
          selectorItemFocused: ".".concat(prefix, "--dropdown--focused"),
          selectorItemHidden: "[hidden],[aria-hidden=\"true\"]",
          selectorLinkSelected: ".".concat(prefix, "--dropdown--selected .").concat(prefix, "--dropdown-link"),
          classShowSelected: "".concat(prefix, "--dropdown--show-selected"),
          classSelected: "".concat(prefix, "--dropdown--selected"),
          classFocused: "".concat(prefix, "--dropdown--focused"),
          classOpen: "".concat(prefix, "--dropdown--open"),
          classDisabled: "".concat(prefix, "--dropdown--disabled"),
          eventBeforeSelected: 'dropdown-beingselected',
          eventAfterSelected: 'dropdown-selected'
        };
      }
      /**
       * Enum for navigating backward/forward.
       * @readonly
       * @member Dropdown.NAVIGATE
       * @type {object}
       * @property {number} BACKWARD Navigating backward.
       * @property {number} FORWARD Navigating forward.
       */

    }]);

    Dropdown.components = new WeakMap();
    Dropdown.NAVIGATE = {
      BACKWARD: -1,
      FORWARD: 1
    };
    return Dropdown;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _trackBlur["default"]));

  var _default = Dropdown;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/file-uploader/file-uploader.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/file-uploader/file-uploader.js ***!
  \**************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _eventedState, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedState = _interopRequireDefault(_eventedState);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var FileUploader = /*#__PURE__*/function (_mixin) {
    _inherits(FileUploader, _mixin);

    var _super = _createSuper(FileUploader);
    /**
     * File uploader.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends eventedState
     * @extends Handles
     * @param {HTMLElement} element The element working as a file uploader.
     * @param {object} [options] The component options. See static options.
     */


    function FileUploader(element) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FileUploader);

      _this = _super.call(this, element, options);

      _this._changeState = function (state, detail, callback) {
        if (state === 'delete-filename-fileuploader') {
          _this.container.removeChild(detail.filenameElement);
        }

        if (typeof callback === 'function') {
          callback();
        }
      };

      _this._handleDeleteButton = function (evt) {
        var target = (0, _eventMatches["default"])(evt, _this.options.selectorCloseButton);

        if (target) {
          _this.changeState('delete-filename-fileuploader', {
            initialEvt: evt,
            filenameElement: target.closest(_this.options.selectorSelectedFile)
          });
        }
      };

      _this._handleDragDrop = function (evt) {
        var isOfSelf = _this.element.contains(evt.target); // In IE11 `evt.dataTransfer.types` is a `DOMStringList` instead of an array


        if (Array.prototype.indexOf.call(evt.dataTransfer.types, 'Files') >= 0 && !(0, _eventMatches["default"])(evt, _this.options.selectorOtherDropContainers)) {
          var inArea = isOfSelf && (0, _eventMatches["default"])(evt, _this.options.selectorDropContainer);

          if (evt.type === 'dragover') {
            evt.preventDefault();
            var dropEffect = inArea ? 'copy' : 'none';

            if (Array.isArray(evt.dataTransfer.types)) {
              // IE11 throws a "permission denied" error accessing `.effectAllowed`
              evt.dataTransfer.effectAllowed = dropEffect;
            }

            evt.dataTransfer.dropEffect = dropEffect;

            _this.dropContainer.classList.toggle(_this.options.classDragOver, Boolean(inArea));
          }

          if (evt.type === 'dragleave') {
            _this.dropContainer.classList.toggle(_this.options.classDragOver, false);
          }

          if (inArea && evt.type === 'drop') {
            evt.preventDefault();

            _this._displayFilenames(evt.dataTransfer.files);

            _this.dropContainer.classList.remove(_this.options.classDragOver);
          }
        }
      };

      _this.input = _this.element.querySelector(_this.options.selectorInput);
      _this.container = _this.element.querySelector(_this.options.selectorContainer);
      _this.dropContainer = _this.element.querySelector(_this.options.selectorDropContainer);

      if (!_this.input) {
        throw new TypeError('Cannot find the file input box.');
      }

      if (!_this.container) {
        throw new TypeError('Cannot find the file names container.');
      }

      _this.inputId = _this.input.getAttribute('id');

      _this.manage((0, _on["default"])(_this.input, 'change', function () {
        return _this._displayFilenames();
      }));

      _this.manage((0, _on["default"])(_this.container, 'click', _this._handleDeleteButton));

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'dragleave', _this._handleDragDrop));

      _this.manage((0, _on["default"])(_this.dropContainer, 'dragover', _this._handleDragDrop));

      _this.manage((0, _on["default"])(_this.dropContainer, 'drop', _this._handleDragDrop));

      return _this;
    }

    _createClass(FileUploader, [{
      key: "_filenamesHTML",
      value: function _filenamesHTML(name, id) {
        return "<span class=\"".concat(this.options.classSelectedFile, "\">\n      <p class=\"").concat(this.options.classFileName, "\">").concat(name, "</p>\n      <span data-for=\"").concat(id, "\" class=\"").concat(this.options.classStateContainer, "\"></span>\n    </span>");
      }
    }, {
      key: "_uploadHTML",
      value: function _uploadHTML() {
        return "\n      <div class=\"".concat(this.options.classLoadingAnimation, "\">\n        <div data-inline-loading-spinner class=\"").concat(this.options.classLoading, "\">\n          <svg class=\"").concat(this.options.classLoadingSvg, "\" viewBox=\"-75 -75 150 150\">\n            <circle class=\"").concat(this.options.classLoadingBackground, "\" cx=\"0\" cy=\"0\" r=\"37.5\" />\n            <circle class=\"").concat(this.options.classLoadingStroke, "\" cx=\"0\" cy=\"0\" r=\"37.5\" />\n          </svg>\n        </div>\n      </div>");
      }
    }, {
      key: "_closeButtonHTML",
      value: function _closeButtonHTML() {
        return "\n      <button class=\"".concat(this.options.classFileClose, "\" type=\"button\" aria-label=\"close\">\n      <svg aria-hidden=\"true\" viewBox=\"0 0 16 16\" width=\"16\" height=\"16\">\n      <path fill=\"#231F20\" d=\"M12 4.7l-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z\"/>\n      </svg>\n      </button>");
      }
    }, {
      key: "_checkmarkHTML",
      value: function _checkmarkHTML() {
        return "\n      <svg focusable=\"false\"\n        preserveAspectRatio=\"xMidYMid meet\"\n        style=\"will-change: transform;\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        class=\"".concat(this.options.classFileComplete, "\"\n        width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\n        aria-hidden=\"true\">\n        <path d=\"M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM7 11L4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11z\"></path>\n        <path d=\"M7 11L4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11z\" data-icon-path=\"inner-path\" opacity=\"0\"></path>\n      </svg>\n    ");
      }
    }, {
      key: "_getStateContainers",
      value: function _getStateContainers() {
        var stateContainers = toArray(this.element.querySelectorAll("[data-for=".concat(this.inputId, "]")));

        if (stateContainers.length === 0) {
          throw new TypeError('State container elements not found; invoke _displayFilenames() first');
        }

        if (stateContainers[0].dataset["for"] !== this.inputId) {
          throw new TypeError('File input id must equal [data-for] attribute');
        }

        return stateContainers;
      }
      /**
       * Inject selected files into DOM. Invoked on change event.
       * @param {File[]} files The files to upload.
       */

    }, {
      key: "_displayFilenames",
      value: function _displayFilenames() {
        var _this2 = this;

        var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.input.files;
        var container = this.element.querySelector(this.options.selectorContainer);
        var HTMLString = toArray(files).map(function (file) {
          return _this2._filenamesHTML(file.name, _this2.inputId);
        }).join('');
        container.insertAdjacentHTML('afterbegin', HTMLString);
      }
    }, {
      key: "_removeState",
      value: function _removeState(element) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          throw new TypeError('DOM element should be given to initialize this widget.');
        }

        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
      }
    }, {
      key: "_handleStateChange",
      value: function _handleStateChange(elements, selectIndex, html) {
        var _this3 = this;

        if (selectIndex === undefined) {
          elements.forEach(function (el) {
            _this3._removeState(el);

            el.insertAdjacentHTML('beforeend', html);
          });
        } else {
          elements.forEach(function (el, index) {
            if (index === selectIndex) {
              _this3._removeState(el);

              el.insertAdjacentHTML('beforeend', html);
            }
          });
        }
      }
      /**
       * Handles delete button.
       * @param {Event} evt The event triggering this action.
       * @private
       */

    }, {
      key: "setState",
      value: function setState(state, selectIndex) {
        var stateContainers = this._getStateContainers();

        if (state === 'edit') {
          this._handleStateChange(stateContainers, selectIndex, this._closeButtonHTML());
        }

        if (state === 'upload') {
          this._handleStateChange(stateContainers, selectIndex, this._uploadHTML());
        }

        if (state === 'complete') {
          this._handleStateChange(stateContainers, selectIndex, this._checkmarkHTML());
        }
      }
      /**
       * The map associating DOM element and file uploader instance.
       * @member FileUploader.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-file]',
          selectorInput: "input[type=\"file\"].".concat(prefix, "--file-input"),
          selectorContainer: '[data-file-container]',
          selectorCloseButton: ".".concat(prefix, "--file-close"),
          selectorSelectedFile: ".".concat(prefix, "--file__selected-file"),
          selectorDropContainer: "[data-file-drop-container]",
          selectorOtherDropContainers: '[data-drop-container]',
          classLoading: "".concat(prefix, "--loading ").concat(prefix, "--loading--small"),
          classLoadingAnimation: "".concat(prefix, "--inline-loading__animation"),
          classLoadingSvg: "".concat(prefix, "--loading__svg"),
          classLoadingBackground: "".concat(prefix, "--loading__background"),
          classLoadingStroke: "".concat(prefix, "--loading__stroke"),
          classFileName: "".concat(prefix, "--file-filename"),
          classFileClose: "".concat(prefix, "--file-close"),
          classFileComplete: "".concat(prefix, "--file-complete"),
          classSelectedFile: "".concat(prefix, "--file__selected-file"),
          classStateContainer: "".concat(prefix, "--file__state-container"),
          classDragOver: "".concat(prefix, "--file__drop-container--drag-over"),
          eventBeforeDeleteFilenameFileuploader: 'fileuploader-before-delete-filename',
          eventAfterDeleteFilenameFileuploader: 'fileuploader-after-delete-filename'
        };
      }
    }]);

    FileUploader.components = new WeakMap();
    return FileUploader;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _eventedState["default"], _handles["default"]));

  var _default = FileUploader;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/floating-menu/floating-menu.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/floating-menu/floating-menu.js ***!
  \**************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! warning */ "warning"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-show-hide-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-show-hide-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/mixins/track-blur */ "./node_modules/carbon-components/umd/globals/js/mixins/track-blur.js"), __webpack_require__(/*! ../../globals/js/misc/get-launching-details */ "./node_modules/carbon-components/umd/globals/js/misc/get-launching-details.js"), __webpack_require__(/*! ../../globals/js/misc/resize */ "./node_modules/carbon-components/umd/globals/js/misc/resize.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _warning, _mixin2, _settings, _createComponent, _eventedShowHideState, _handles, _trackBlur, _getLaunchingDetails, _resize, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.getFloatingPosition = _exports.DIRECTION_BOTTOM = _exports.DIRECTION_RIGHT = _exports.DIRECTION_TOP = _exports.DIRECTION_LEFT = void 0;
  _warning = _interopRequireDefault(_warning);
  _mixin2 = _interopRequireDefault(_mixin2);
  _settings = _interopRequireDefault(_settings);
  _createComponent = _interopRequireDefault(_createComponent);
  _eventedShowHideState = _interopRequireDefault(_eventedShowHideState);
  _handles = _interopRequireDefault(_handles);
  _trackBlur = _interopRequireDefault(_trackBlur);
  _getLaunchingDetails = _interopRequireDefault(_getLaunchingDetails);
  _resize = _interopRequireDefault(_resize);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /**
   * The structure for the position of floating menu.
   * @typedef {object} FloatingMenu~position
   * @property {number} left The left position.
   * @property {number} top The top position.
   * @property {number} right The right position.
   * @property {number} bottom The bottom position.
   */

  /**
   * The structure for the size of floating menu.
   * @typedef {object} FloatingMenu~size
   * @property {number} width The width.
   * @property {number} height The height.
   */

  /**
   * The structure for the position offset of floating menu.
   * @typedef {object} FloatingMenu~offset
   * @property {number} top The top position.
   * @property {number} left The left position.
   */


  var DIRECTION_LEFT = 'left';
  _exports.DIRECTION_LEFT = DIRECTION_LEFT;
  var DIRECTION_TOP = 'top';
  _exports.DIRECTION_TOP = DIRECTION_TOP;
  var DIRECTION_RIGHT = 'right';
  _exports.DIRECTION_RIGHT = DIRECTION_RIGHT;
  var DIRECTION_BOTTOM = 'bottom';
  /**
   * @param {object} params The parameters.
   * @param {FloatingMenu~size} params.menuSize The size of the menu.
   * @param {FloatingMenu~position} params.refPosition The position of the triggering element.
   * @param {FloatingMenu~offset} [params.offset={ left: 0, top: 0 }] The position offset of the menu.
   * @param {string} [params.direction=bottom] The menu direction.
   * @param {number} [params.scrollX=0] The scroll position of the viewport.
   * @param {number} [params.scrollY=0] The scroll position of the viewport.
   * @returns {FloatingMenu~offset} The position of the menu, relative to the top-left corner of the viewport.
   * @private
   */

  _exports.DIRECTION_BOTTOM = DIRECTION_BOTTOM;

  var getFloatingPosition = function getFloatingPosition(_ref) {
    var _DIRECTION_LEFT$DIREC;

    var menuSize = _ref.menuSize,
        refPosition = _ref.refPosition,
        _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? {} : _ref$offset,
        _ref$direction = _ref.direction,
        direction = _ref$direction === void 0 ? DIRECTION_BOTTOM : _ref$direction,
        _ref$scrollX = _ref.scrollX,
        scrollX = _ref$scrollX === void 0 ? 0 : _ref$scrollX,
        _ref$scrollY = _ref.scrollY,
        scrollY = _ref$scrollY === void 0 ? 0 : _ref$scrollY;
    var _refPosition$left = refPosition.left,
        refLeft = _refPosition$left === void 0 ? 0 : _refPosition$left,
        _refPosition$top = refPosition.top,
        refTop = _refPosition$top === void 0 ? 0 : _refPosition$top,
        _refPosition$right = refPosition.right,
        refRight = _refPosition$right === void 0 ? 0 : _refPosition$right,
        _refPosition$bottom = refPosition.bottom,
        refBottom = _refPosition$bottom === void 0 ? 0 : _refPosition$bottom;
    var width = menuSize.width,
        height = menuSize.height;
    var _offset$top = offset.top,
        top = _offset$top === void 0 ? 0 : _offset$top,
        _offset$left = offset.left,
        left = _offset$left === void 0 ? 0 : _offset$left;
    var refCenterHorizontal = (refLeft + refRight) / 2;
    var refCenterVertical = (refTop + refBottom) / 2;
    return (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, {
      left: refLeft - width + scrollX - left,
      top: refCenterVertical - height / 2 + scrollY + top
    }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, {
      left: refCenterHorizontal - width / 2 + scrollX + left,
      top: refTop - height + scrollY - top
    }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, {
      left: refRight + scrollX + left,
      top: refCenterVertical - height / 2 + scrollY + top
    }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, {
      left: refCenterHorizontal - width / 2 + scrollX + left,
      top: refBottom + scrollY + top
    }), _DIRECTION_LEFT$DIREC)[direction];
  };

  _exports.getFloatingPosition = getFloatingPosition;

  var FloatingMenu = /*#__PURE__*/function (_mixin) {
    _inherits(FloatingMenu, _mixin);

    var _super = _createSuper(FloatingMenu);
    /**
     * Floating menu.
     * @extends CreateComponent
     * @extends EventedShowHideState
     * @param {HTMLElement} element The element working as a modal dialog.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorContainer] The CSS selector to find the container to put this menu in.
     * @param {string} [options.attribDirection] The attribute name to specify menu placement direction (top/right/bottom/left).
     * @param {string} [options.classShown] The CSS class for shown state, for the menu.
     * @param {string} [options.classRefShown] The CSS class for shown state, for the trigger button.
     * @param {string} [options.eventBeforeShown]
     *   The name of the custom event fired before this menu is shown.
     *   Cancellation of this event stops hiding the menu.
     * @param {string} [options.eventAfterShown]
     *   The name of the custom event telling that menu is sure shown
     *   without being canceled by the event handler named by `eventBeforeShown` option (`floating-menu-beingshown`).
     * @param {string} [options.eventBeforeHidden]
     *   The name of the custom event fired before this menu is hidden.
     *   Cancellation of this event stops hiding the menu.
     * @param {string} [options.eventAfterHidden]
     *   The name of the custom event telling that menu is sure hidden
     *   without being canceled by the event handler named by `eventBeforeHidden` option (`floating-menu-beinghidden`).
     * @param {Element} [options.refNode] The launching element of the menu. Used for calculating the geometry of the menu.
     * @param {object} [options.offset] The offset to adjust the geometry of the menu. Should have `top`/`left` properties.
     */


    function FloatingMenu(element, options) {
      var _this;

      _classCallCheck(this, FloatingMenu);

      _this = _super.call(this, element, options);

      var attribDirectionValue = _this.element.getAttribute(_this.options.attribDirection);

      if (!_this.options.direction) {
        _this.options.direction = attribDirectionValue || 'bottom';
      }

      if (!attribDirectionValue) {
        // Update attribute for styling
        _this.element.setAttribute(_this.options.attribDirection, _this.options.direction);
      }

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'keydown', function (event) {
        _this._handleKeydown(event);
      }));

      return _this;
    }
    /**
     * Handles key press on document.
     * @param {Event} event The triggering event.
     * @private
     */


    _createClass(FloatingMenu, [{
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        var key = event.which;
        var _this$options = this.options,
            triggerNode = _this$options.triggerNode,
            refNode = _this$options.refNode;
        var isOfMenu = this.element.contains(event.target);

        switch (key) {
          // Esc
          case 27:
            this.changeState('hidden', (0, _getLaunchingDetails["default"])(event), function () {
              if (isOfMenu) {
                (triggerNode || refNode).focus();
              }
            });
            break;

          default:
            break;
        }
      }
      /**
       * Focuses back on the trigger button if this component loses focus.
       */

    }, {
      key: "handleBlur",
      value: function handleBlur(event) {
        if (this.element.classList.contains(this.options.classShown)) {
          this.changeState('hidden', (0, _getLaunchingDetails["default"])(event));
          var _this$options2 = this.options,
              refNode = _this$options2.refNode,
              triggerNode = _this$options2.triggerNode;

          if ((event.relatedTarget === null || this.element.contains(event.relatedTarget)) && refNode && event.target !== refNode) {
            HTMLElement.prototype.focus.call(triggerNode || refNode); // SVGElement in IE11 does not have `.focus()` method
          }
        }
      }
      /**
       * @private
       * @returns {Element} The element that this menu should be placed to.
       */

    }, {
      key: "_getContainer",
      value: function _getContainer() {
        return this.element.closest(this.options.selectorContainer) || this.element.ownerDocument.body;
      }
      /**
       * @private
       * @returns {object} The menu position, with `top` and `left` properties.
       */

    }, {
      key: "_getPos",
      value: function _getPos() {
        var element = this.element;
        var _this$options3 = this.options,
            refNode = _this$options3.refNode,
            offset = _this$options3.offset,
            direction = _this$options3.direction;

        if (!refNode) {
          throw new Error('Cannot find the reference node for positioning floating menu.');
        }

        return getFloatingPosition({
          menuSize: element.getBoundingClientRect(),
          refPosition: refNode.getBoundingClientRect(),
          offset: typeof offset !== 'function' ? offset : offset(element, direction, refNode),
          direction: direction,
          scrollX: refNode.ownerDocument.defaultView.pageXOffset,
          scrollY: refNode.ownerDocument.defaultView.pageYOffset
        });
      }
      /**
       * Sees if the computed style is what this floating menu expects.
       * @private
       */

    }, {
      key: "_testStyles",
      value: function _testStyles() {
        if (!this.options.debugStyle) {
          return;
        }

        var element = this.element;
        var computedStyle = element.ownerDocument.defaultView.getComputedStyle(element);
        var styles = {
          position: 'absolute',
          right: 'auto',
          margin: 0
        };
        Object.keys(styles).forEach(function (key) {
          var expected = typeof styles[key] === 'number' ? parseFloat(styles[key]) : styles[key];
          var actual = computedStyle.getPropertyValue(key);

          if (expected !== actual) {
            // eslint-disable-next-line no-console
            console.warn("Floating menu component expects ".concat(key, ": ").concat(styles[key], " style."));
          }
        });
      }
      /**
       * Places the menu.
       * @private
       */

    }, {
      key: "_place",
      value: function _place() {
        var element = this.element;

        var _this$_getPos = this._getPos(),
            left = _this$_getPos.left,
            top = _this$_getPos.top;

        element.style.left = "".concat(left, "px");
        element.style.top = "".concat(top, "px");

        this._testStyles();
      }
      /**
       * @param {string} state The new state.
       * @returns {boolean} `true` of the current state is different from the given new state.
       */

    }, {
      key: "shouldStateBeChanged",
      value: function shouldStateBeChanged(state) {
        return (state === 'shown' || state === 'hidden') && state !== (this.element.classList.contains(this.options.classShown) ? 'shown' : 'hidden');
      }
      /**
       * Changes the shown/hidden state.
       * @private
       * @param {string} state The new state.
       * @param {object} detail The detail of the event trigging this action.
       * @param {Function} callback Callback called when change in state completes.
       */

    }, {
      key: "_changeState",
      value: function _changeState(state, detail, callback) {
        var _this2 = this;

        var shown = state === 'shown';
        var _this$options4 = this.options,
            refNode = _this$options4.refNode,
            classShown = _this$options4.classShown,
            classRefShown = _this$options4.classRefShown,
            triggerNode = _this$options4.triggerNode;

        if (!refNode) {
          throw new TypeError('Cannot find the reference node for changing the style.');
        }

        if (state === 'shown') {
          if (!this.hResize) {
            this.hResize = _resize["default"].add(function () {
              _this2._place();
            });
          }

          this._getContainer().appendChild(this.element);
        }

        this.element.setAttribute('aria-hidden', (!shown).toString());
        (triggerNode || refNode).setAttribute('aria-expanded', shown.toString());
        this.element.classList.toggle(classShown, shown);

        if (classRefShown) {
          refNode.classList.toggle(classRefShown, shown);
        }

        if (state === 'shown') {
          this._place(); // IE11 puts focus on elements with `.focus()`, even ones without `tabindex` attribute


          if (!this.element.hasAttribute(this.options.attribAvoidFocusOnOpen)) {
            var primaryFocusNode = this.element.querySelector(this.options.selectorPrimaryFocus);
            var contentNode = this.options.contentNode || this.element;
            var tabbableNode = contentNode.querySelector(_settings["default"].selectorTabbable); // The programmatically focusable element may be (and typically will be) the content node itself;

            var focusableNode = contentNode.matches(_settings["default"].selectorFocusable) ? contentNode : contentNode.querySelector(_settings["default"].selectorFocusable);

            if (primaryFocusNode) {
              // User defined focusable node
              primaryFocusNode.focus();
            } else if (tabbableNode) {
              // First sequentially focusable node
              tabbableNode.focus();
            } else if (focusableNode) {
              // First programmatic focusable node
              focusableNode.focus();
            } else {
              this.element.focus();

              if (true) {
                 true ? (0, _warning["default"])(focusableNode === null, 'Floating Menus must have at least a programmatically focusable child. ' + 'This can be accomplished by adding tabindex="-1" to the content element.') : 0;
              }
            }
          }
        }

        if (state === 'hidden' && this.hResize) {
          this.hResize.release();
          this.hResize = null;
        }

        callback();
      }
    }, {
      key: "release",
      value: function release() {
        if (this.hResize) {
          this.hResize.release();
          this.hResize = null;
        }

        _get(_getPrototypeOf(FloatingMenu.prototype), "release", this).call(this);
      }
    }]);

    FloatingMenu.options = {
      selectorContainer: '[data-floating-menu-container]',
      selectorPrimaryFocus: '[data-floating-menu-primary-focus]',
      attribDirection: 'data-floating-menu-direction',
      attribAvoidFocusOnOpen: 'data-avoid-focus-on-open',
      classShown: '',
      // Should be provided from options arg in constructor
      classRefShown: '',
      // Should be provided from options arg in constructor
      eventBeforeShown: 'floating-menu-beingshown',
      eventAfterShown: 'floating-menu-shown',
      eventBeforeHidden: 'floating-menu-beinghidden',
      eventAfterHidden: 'floating-menu-hidden',
      refNode: null,
      // Should be provided from options arg in constructor
      offset: {
        left: 0,
        top: 0
      }
    };
    FloatingMenu.components = new WeakMap();
    return FloatingMenu;
  }((0, _mixin2["default"])(_createComponent["default"], _eventedShowHideState["default"], _trackBlur["default"], _handles["default"]));

  var _default = FloatingMenu;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/inline-loading/inline-loading.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/inline-loading/inline-loading.js ***!
  \****************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/toggle-attribute */ "./node_modules/carbon-components/umd/globals/js/misc/toggle-attribute.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _toggleAttribute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _toggleAttribute = _interopRequireDefault(_toggleAttribute);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var InlineLoading = /*#__PURE__*/function (_mixin) {
    _inherits(InlineLoading, _mixin);

    var _super = _createSuper(InlineLoading);
    /**
     * Spinner indicating loading state.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a spinner.
     * @param {object} [options] The component options.
     * @param {string} [options.initialState] The initial state, should be `inactive`, `active` or `finished`.
     */


    function InlineLoading(element, options) {
      var _this;

      _classCallCheck(this, InlineLoading);

      _this = _super.call(this, element, options); // Sets the initial state

      var initialState = _this.options.initialState;

      if (initialState) {
        _this.setState(initialState);
      }

      return _this;
    }
    /**
     * Sets active/inactive state.
     * @param {string} state The new state, should be `inactive`, `active` or `finished`.
     */


    _createClass(InlineLoading, [{
      key: "setState",
      value: function setState(state) {
        var states = this.constructor.states;
        var values = Object.keys(states).map(function (key) {
          return states[key];
        });

        if (values.indexOf(state) < 0) {
          throw new Error("One of the following value should be given as the state: ".concat(values.join(', ')));
        }

        var elem = this.element;
        var _this$options = this.options,
            selectorSpinner = _this$options.selectorSpinner,
            selectorFinished = _this$options.selectorFinished,
            selectorError = _this$options.selectorError,
            selectorTextActive = _this$options.selectorTextActive,
            selectorTextFinished = _this$options.selectorTextFinished,
            selectorTextError = _this$options.selectorTextError;
        var spinner = elem.querySelector(selectorSpinner);
        var finished = elem.querySelector(selectorFinished);
        var error = elem.querySelector(selectorError);
        var textActive = elem.querySelector(selectorTextActive);
        var textFinished = elem.querySelector(selectorTextFinished);
        var textError = elem.querySelector(selectorTextError);

        if (spinner) {
          spinner.classList.toggle(this.options.classLoadingStop, state !== states.ACTIVE);
          (0, _toggleAttribute["default"])(spinner, 'hidden', state !== states.INACTIVE && state !== states.ACTIVE);
        }

        if (finished) {
          (0, _toggleAttribute["default"])(finished, 'hidden', state !== states.FINISHED);
        }

        if (error) {
          (0, _toggleAttribute["default"])(error, 'hidden', state !== states.ERROR);
        }

        if (textActive) {
          (0, _toggleAttribute["default"])(textActive, 'hidden', state !== states.ACTIVE);
        }

        if (textFinished) {
          (0, _toggleAttribute["default"])(textFinished, 'hidden', state !== states.FINISHED);
        }

        if (textError) {
          (0, _toggleAttribute["default"])(textError, 'hidden', state !== states.ERROR);
        }

        return this;
      }
      /**
       * The list of states.
       * @type {object<string, string>}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode InlineLoading.create .create()},
       * or {@linkcode InlineLoading.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode InlineLoading.init .init()} works.
       * @member InlineLoading.options
       * @type {object}
       * @property {string} selectorInit The CSS selector to find inline loading components.
       * @property {string} selectorSpinner The CSS selector to find the spinner.
       * @property {string} selectorFinished The CSS selector to find the "finished" icon.
       * @property {string} selectorError The CSS selector to find the "error" icon.
       * @property {string} selectorTextActive The CSS selector to find the text describing the active state.
       * @property {string} selectorTextFinished The CSS selector to find the text describing the finished state.
       * @property {string} selectorTextError The CSS selector to find the text describing the error state.
       * @property {string} classLoadingStop The CSS class for spinner's stopped state.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-inline-loading]',
          selectorSpinner: '[data-inline-loading-spinner]',
          selectorFinished: '[data-inline-loading-finished]',
          selectorError: '[data-inline-loading-error]',
          selectorTextActive: '[data-inline-loading-text-active]',
          selectorTextFinished: '[data-inline-loading-text-finished]',
          selectorTextError: '[data-inline-loading-text-error]',
          classLoadingStop: "".concat(prefix, "--loading--stop")
        };
      }
    }]);

    InlineLoading.states = {
      INACTIVE: 'inactive',
      ACTIVE: 'active',
      FINISHED: 'finished',
      ERROR: 'error'
    };
    InlineLoading.components = new WeakMap();
    return InlineLoading;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = InlineLoading;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/loading/loading.js":
/*!**************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/loading/loading.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Loading = /*#__PURE__*/function (_mixin) {
    _inherits(Loading, _mixin);

    var _super = _createSuper(Loading);
    /**
     * Spinner indicating loading state.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a spinner.
     * @param {object} [options] The component options.
     * @param {boolean} [options.active] `true` if this spinner should roll.
     */


    function Loading(element, options) {
      var _this;

      _classCallCheck(this, Loading);

      _this = _super.call(this, element, options);
      _this.active = _this.options.active; // Initialize spinner

      _this.set(_this.active);

      return _this;
    }
    /**
     * Sets active/inactive state.
     * @param {boolean} active `true` if this spinner should roll.
     */


    _createClass(Loading, [{
      key: "set",
      value: function set(active) {
        if (typeof active !== 'boolean') {
          throw new TypeError('set expects a boolean.');
        }

        this.active = active;
        this.element.classList.toggle(this.options.classLoadingStop, !this.active);
        /**
         * If overlay is the parentNode then toggle it too.
         */

        var parentNode = this.element.parentNode;

        if (parentNode && parentNode.classList.contains(this.options.classLoadingOverlay)) {
          parentNode.classList.toggle(this.options.classLoadingOverlayStop, !this.active);
        }

        return this;
      }
      /**
       * Toggles active/inactive state.
       */

    }, {
      key: "toggle",
      value: function toggle() {
        return this.set(!this.active);
      }
      /**
       * @returns {boolean} `true` if this spinner is rolling.
       */

    }, {
      key: "isActive",
      value: function isActive() {
        return this.active;
      }
      /**
       * Sets state to inactive and deletes the loading element.
       */

    }, {
      key: "end",
      value: function end() {
        var _this2 = this;

        this.set(false);
        var handleAnimationEnd = this.manage((0, _on["default"])(this.element, 'animationend', function (evt) {
          if (handleAnimationEnd) {
            handleAnimationEnd = _this2.unmanage(handleAnimationEnd).release();
          }

          if (evt.animationName === 'rotate-end-p2') {
            _this2._deleteElement();
          }
        }));
      }
      /**
       * Delete component from the DOM.
       */

    }, {
      key: "_deleteElement",
      value: function _deleteElement() {
        var parentNode = this.element.parentNode;
        parentNode.removeChild(this.element);

        if (parentNode.classList.contains(this.options.selectorLoadingOverlay)) {
          parentNode.remove();
        }
      }
      /**
       * The map associating DOM element and spinner instance.
       * @member Loading.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode Loading.create .create()}, or {@linkcode Loading.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode Loading.init .init()} works.
       * @member Loading.options
       * @type {object}
       * @property {string} selectorInit The CSS selector to find spinners.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-loading]',
          selectorLoadingOverlay: ".".concat(prefix, "--loading-overlay"),
          classLoadingOverlay: "".concat(prefix, "--loading-overlay"),
          classLoadingStop: "".concat(prefix, "--loading--stop"),
          classLoadingOverlayStop: "".concat(prefix, "--loading-overlay--stop"),
          active: true
        };
      }
    }]);

    Loading.components = new WeakMap();
    return Loading;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = Loading;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/modal/modal.js":
/*!**********************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/modal/modal.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! warning */ "warning"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-launcher */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-launcher.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-show-hide-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-show-hide-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _warning, _settings, _mixin2, _createComponent, _initComponentByLauncher, _eventedShowHideState, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _warning = _interopRequireDefault(_warning);
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentByLauncher = _interopRequireDefault(_initComponentByLauncher);
  _eventedShowHideState = _interopRequireDefault(_eventedShowHideState);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Modal = /*#__PURE__*/function (_mixin) {
    _inherits(Modal, _mixin);

    var _super = _createSuper(Modal);
    /**
     * Modal dialog.
     * @extends CreateComponent
     * @extends InitComponentByLauncher
     * @extends EventedShowHideState
     * @extends Handles
     * @param {HTMLElement} element The element working as a modal dialog.
     * @param {object} [options] The component options.
     * @param {string} [options.classVisible] The CSS class for the visible state.
     * @param {string} [options.classBody] The CSS class for `<body>` with open modal.
     * @param {string} [options.eventBeforeShown]
     *   The name of the custom event fired before this modal is shown.
     *   Cancellation of this event stops showing the modal.
     * @param {string} [options.eventAfterShown]
     *   The name of the custom event telling that modal is sure shown
     *   without being canceled by the event handler named by `eventBeforeShown` option (`modal-beingshown`).
     * @param {string} [options.eventBeforeHidden]
     *   The name of the custom event fired before this modal is hidden.
     *   Cancellation of this event stops hiding the modal.
     * @param {string} [options.eventAfterHidden]
     *   The name of the custom event telling that modal is sure hidden
     *   without being canceled by the event handler named by `eventBeforeHidden` option (`modal-beinghidden`).
     */


    function Modal(element, options) {
      var _this;

      _classCallCheck(this, Modal);

      _this = _super.call(this, element, options);
      _this._handleFocusinListener = void 0;
      _this._handleKeydownListener = void 0;

      _this._handleFocusin = function (evt) {
        var focusWrapNode = _this.element.querySelector(_this.options.selectorModalContainer) || _this.element;

        if (_this.element.classList.contains(_this.options.classVisible) && !focusWrapNode.contains(evt.target) && _this.options.selectorsFloatingMenus.every(function (selector) {
          return !(0, _eventMatches["default"])(evt, selector);
        })) {
          _this.element.querySelector(_settings["default"].selectorTabbable).focus();
        }
      };

      _this._hookCloseActions();

      return _this;
    }
    /**
     * The handle for `focusin` event listener.
     * Used for "focus-wrap" feature.
     * @type {Handle}
     * @private
     */


    _createClass(Modal, [{
      key: "createdByLauncher",

      /**
       * A method that runs when `.init()` is called from `initComponentByLauncher`.
       * @param {Event} evt The event fired on the launcher button.
       */
      value: function createdByLauncher(evt) {
        this.show(evt);
      }
      /**
       * Determines whether or not to emit events and callback function when `.changeState()` is called from `eventedState`.
       * @param {string} state The new state.
       * @returns {boolean} `true` if the given `state` is different from current state.
       */

    }, {
      key: "shouldStateBeChanged",
      value: function shouldStateBeChanged(state) {
        if (state === 'shown') {
          return !this.element.classList.contains(this.options.classVisible);
        }

        return this.element.classList.contains(this.options.classVisible);
      }
      /**
       * Changes the shown/hidden state.
       * @private
       * @param {string} state The new state.
       * @param {object} detail The detail data to be included in the event that will be fired.
       * @param {Function} callback Callback called when change in state completes.
       */

    }, {
      key: "_changeState",
      value: function _changeState(state, detail, callback) {
        var _this2 = this;

        var handleTransitionEnd;

        var transitionEnd = function transitionEnd() {
          if (handleTransitionEnd) {
            handleTransitionEnd = _this2.unmanage(handleTransitionEnd).release();
          }

          if (state === 'shown' && _this2.element.offsetWidth > 0 && _this2.element.offsetHeight > 0) {
            _this2.previouslyFocusedNode = _this2.element.ownerDocument.activeElement;

            var focusableItem = _this2.element.querySelector(_this2.options.selectorPrimaryFocus) || _this2.element.querySelector(_settings["default"].selectorTabbable);

            focusableItem.focus();

            if (true) {
               true ? (0, _warning["default"])(focusableItem, "Modals need to contain a focusable element by either using " + "`".concat(_this2.options.selectorPrimaryFocus, "` or settings.selectorTabbable.")) : 0;
            }
          }

          callback();
        };

        if (this._handleFocusinListener) {
          this._handleFocusinListener = this.unmanage(this._handleFocusinListener).release();
        }

        if (state === 'shown') {
          var hasFocusin = ('onfocusin' in this.element.ownerDocument.defaultView);
          var focusinEventName = hasFocusin ? 'focusin' : 'focus';
          this._handleFocusinListener = this.manage((0, _on["default"])(this.element.ownerDocument, focusinEventName, this._handleFocusin, !hasFocusin));
        }

        if (state === 'hidden') {
          this.element.classList.toggle(this.options.classVisible, false);
          this.element.ownerDocument.body.classList.toggle(this.options.classBody, false);

          if (this.options.selectorFocusOnClose || this.previouslyFocusedNode) {
            (this.element.ownerDocument.querySelector(this.options.selectorFocusOnClose) || this.previouslyFocusedNode).focus();
          }
        } else if (state === 'shown') {
          this.element.classList.toggle(this.options.classVisible, true);
          this.element.ownerDocument.body.classList.toggle(this.options.classBody, true);
        }

        handleTransitionEnd = this.manage((0, _on["default"])(this.element, 'transitionend', transitionEnd));
      }
    }, {
      key: "_hookCloseActions",
      value: function _hookCloseActions() {
        var _this3 = this;

        this.manage((0, _on["default"])(this.element, 'click', function (evt) {
          var closeButton = (0, _eventMatches["default"])(evt, _this3.options.selectorModalClose);

          if (closeButton) {
            evt.delegateTarget = closeButton; // eslint-disable-line no-param-reassign
          }

          if (closeButton || evt.target === _this3.element) {
            _this3.hide(evt);
          }
        }));

        if (this._handleKeydownListener) {
          this._handleKeydownListener = this.unmanage(this._handleKeydownListener).release();
        }

        this._handleKeydownListener = this.manage((0, _on["default"])(this.element.ownerDocument.body, 'keydown', function (evt) {
          // Avoid running `evt.stopPropagation()` only when modal is shown
          if (evt.which === 27 && _this3.shouldStateBeChanged('hidden')) {
            evt.stopPropagation();

            _this3.hide(evt);
          }
        }));
      }
      /**
       * Handles `focusin` (or `focus` depending on browser support of `focusin`) event to do wrap-focus behavior.
       * @param {Event} evt The event.
       * @private
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode Modal.create .create()}, or {@linkcode Modal.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode Modal.init .init()} works.
       * @member Modal.options
       * @type {object}
       * @property {string} selectorInit The CSS class to find modal dialogs.
       * @property {string} [selectorModalClose] The selector to find elements that close the modal.
       * @property {string} [selectorPrimaryFocus] The CSS selector to determine the element to put focus when modal gets open.
       * @property {string} [selectorFocusOnClose] The CSS selector to determine the element to put focus when modal closes.
       *   If undefined, focus returns to the previously focused element prior to the modal opening.
       * @property {string} [selectorModalContainer] The CSS selector for the content container of the modal for focus wrap feature.
       * @property {string} attribInitTarget The attribute name in the launcher buttons to find target modal dialogs.
       * @property {string[]} [selectorsFloatingMenu]
       *   The CSS selectors of floating menus.
       *   Used for detecting if focus-wrap behavior should be disabled temporarily.
       * @property {string} [classVisible] The CSS class for the visible state.
       * @property {string} [classBody] The CSS class for `<body>` with open modal.
       * @property {string} [classNoScroll] The CSS class for hiding scroll bar in body element while modal is shown.
       * @property {string} [eventBeforeShown]
       *   The name of the custom event fired before this modal is shown.
       *   Cancellation of this event stops showing the modal.
       * @property {string} [eventAfterShown]
       *   The name of the custom event telling that modal is sure shown
       *   without being canceled by the event handler named by `eventBeforeShown` option (`modal-beingshown`).
       * @property {string} [eventBeforeHidden]
       *   The name of the custom event fired before this modal is hidden.
       *   Cancellation of this event stops hiding the modal.
       * @property {string} [eventAfterHidden]
       *   The name of the custom event telling that modal is sure hidden
       *   without being canceled by the event handler named by `eventBeforeHidden` option (`modal-beinghidden`).
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-modal]',
          selectorModalClose: '[data-modal-close]',
          selectorPrimaryFocus: '[data-modal-primary-focus]',
          selectorsFloatingMenus: [".".concat(prefix, "--overflow-menu-options"), ".".concat(prefix, "--tooltip"), '.flatpickr-calendar'],
          selectorModalContainer: ".".concat(prefix, "--modal-container"),
          classVisible: 'is-visible',
          classBody: "".concat(prefix, "--body--with-modal-open"),
          attribInitTarget: 'data-modal-target',
          initEventNames: ['click'],
          eventBeforeShown: 'modal-beingshown',
          eventAfterShown: 'modal-shown',
          eventBeforeHidden: 'modal-beinghidden',
          eventAfterHidden: 'modal-hidden'
        };
      }
    }]);

    Modal.components = new WeakMap();
    return Modal;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentByLauncher["default"], _eventedShowHideState["default"], _handles["default"]));

  var _default = Modal;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/notification/notification.js":
/*!************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/notification/notification.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _mixin2, _createComponent, _initComponentBySearch, _eventedState, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedState = _interopRequireDefault(_eventedState);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Notification = /*#__PURE__*/function (_mixin) {
    _inherits(Notification, _mixin);

    var _super = _createSuper(Notification);
    /**
     * InlineNotification.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a InlineNotification.
     */


    function Notification(element, options) {
      var _this;

      _classCallCheck(this, Notification);

      _this = _super.call(this, element, options);

      _this._changeState = function (state, callback) {
        if (state === 'delete-notification') {
          _this.element.parentNode.removeChild(_this.element);

          _this.release();
        }

        callback();
      };

      _this.button = element.querySelector(_this.options.selectorButton);

      if (_this.button) {
        _this.manage((0, _on["default"])(_this.button, 'click', function (evt) {
          if (evt.currentTarget === _this.button) {
            _this.remove();
          }
        }));
      }

      return _this;
    }

    _createClass(Notification, [{
      key: "remove",
      value: function remove() {
        this.changeState('delete-notification');
      }
      /**
       * The map associating DOM element and accordion UI instance.
       * @type {WeakMap}
       */

    }]);

    Notification.components = new WeakMap();
    Notification.options = {
      selectorInit: '[data-notification]',
      selectorButton: '[data-notification-btn]',
      eventBeforeDeleteNotification: 'notification-before-delete',
      eventAfterDeleteNotification: 'notification-after-delete'
    };
    return Notification;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _eventedState["default"], _handles["default"]));

  var _default = Notification;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/number-input/number-input.js":
/*!************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/number-input/number-input.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var NumberInput = /*#__PURE__*/function (_mixin) {
    _inherits(NumberInput, _mixin);

    var _super = _createSuper(NumberInput);
    /**
     * Number input UI.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a number input UI.
     */


    function NumberInput(element, options) {
      var _this;

      _classCallCheck(this, NumberInput);

      _this = _super.call(this, element, options); // Broken DOM tree is seen with up/down arrows <svg> in IE, which breaks event delegation.
      // <svg> does not have `Element.classList` in IE11

      _this.manage((0, _on["default"])(_this.element.querySelector('.up-icon'), 'click', function (event) {
        _this._handleClick(event);
      }));

      _this.manage((0, _on["default"])(_this.element.querySelector('.down-icon'), 'click', function (event) {
        _this._handleClick(event);
      }));

      return _this;
    }
    /**
     * Increase/decrease number by clicking on up/down icons.
     * @param {Event} event The event triggering this method.
     */


    _createClass(NumberInput, [{
      key: "_handleClick",
      value: function _handleClick(event) {
        var numberInput = this.element.querySelector(this.options.selectorInput);
        var target = event.currentTarget.getAttribute('class').split(' ');
        var min = Number(numberInput.min);
        var max = Number(numberInput.max);
        var step = Number(numberInput.step) || 1;

        if (target.indexOf('up-icon') >= 0) {
          var nextValue = Number(numberInput.value) + step;

          if (numberInput.max === '') {
            numberInput.value = nextValue;
          } else if (numberInput.value < max) {
            if (nextValue > max) {
              numberInput.value = max;
            } else if (nextValue < min) {
              numberInput.value = min;
            } else {
              numberInput.value = nextValue;
            }
          }
        } else if (target.indexOf('down-icon') >= 0) {
          var _nextValue = Number(numberInput.value) - step;

          if (numberInput.min === '') {
            numberInput.value = _nextValue;
          } else if (numberInput.value > min) {
            if (_nextValue < min) {
              numberInput.value = min;
            } else if (_nextValue > max) {
              numberInput.value = max;
            } else {
              numberInput.value = _nextValue;
            }
          }
        } // Programmatic change in value (including `stepUp()`/`stepDown()`) won't fire change event


        numberInput.dispatchEvent(new CustomEvent('change', {
          bubbles: true,
          cancelable: false
        }));
      }
      /**
       * The map associating DOM element and number input UI instance.
       * @member NumberInput.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode NumberInput.create .create()}, or {@linkcode NumberInput.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode NumberInput.init .init()} works.
       * @member NumberInput.options
       * @type {object}
       * @property {string} selectorInit The CSS selector to find number input UIs.
       * @property {string} [selectorInput] The CSS selector to find the `<input>` element.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-numberinput]',
          selectorInput: ".".concat(prefix, "--number input")
        };
      }
    }]);

    NumberInput.components = new WeakMap();
    return NumberInput;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = NumberInput;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/overflow-menu/overflow-menu.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/overflow-menu/overflow-menu.js ***!
  \**************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-show-hide-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-show-hide-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../floating-menu/floating-menu */ "./node_modules/carbon-components/umd/components/floating-menu/floating-menu.js"), __webpack_require__(/*! ../../globals/js/misc/get-launching-details */ "./node_modules/carbon-components/umd/globals/js/misc/get-launching-details.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _eventMatches, _mixin2, _createComponent, _initComponentBySearch, _eventedShowHideState, _handles, _floatingMenu, _getLaunchingDetails, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.getMenuOffset = void 0;
  _settings = _interopRequireDefault(_settings);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedShowHideState = _interopRequireDefault(_eventedShowHideState);
  _handles = _interopRequireDefault(_handles);
  _floatingMenu = _interopRequireWildcard(_floatingMenu);
  _getLaunchingDetails = _interopRequireDefault(_getLaunchingDetails);
  _on = _interopRequireDefault(_on);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj["default"] = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /**
   * The CSS property names of the arrow keyed by the floating menu direction.
   * @type {object<string, string>}
   */


  var triggerButtonPositionProps = /* #__PURE__ */function () {
    var _ref;

    return _ref = {}, _defineProperty(_ref, _floatingMenu.DIRECTION_TOP, 'bottom'), _defineProperty(_ref, _floatingMenu.DIRECTION_BOTTOM, 'top'), _defineProperty(_ref, _floatingMenu.DIRECTION_LEFT, 'left'), _defineProperty(_ref, _floatingMenu.DIRECTION_RIGHT, 'right'), _ref;
  }();
  /**
   * Determines how the position of arrow should affect the floating menu position.
   * @type {object<string, number>}
   */


  var triggerButtonPositionFactors = /* #__PURE__ */function () {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, _floatingMenu.DIRECTION_TOP, -2), _defineProperty(_ref2, _floatingMenu.DIRECTION_BOTTOM, -1), _defineProperty(_ref2, _floatingMenu.DIRECTION_LEFT, -2), _defineProperty(_ref2, _floatingMenu.DIRECTION_RIGHT, -1), _ref2;
  }();
  /**
   * @param {Element} menuBody The menu body with the menu arrow.
   * @param {string} direction The floating menu direction.
   * @param {Element} trigger The trigger button.
   * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
   * @private
   */


  var getMenuOffset = function getMenuOffset(menuBody, direction, trigger) {
    var triggerButtonPositionProp = triggerButtonPositionProps[direction];
    var triggerButtonPositionFactor = triggerButtonPositionFactors[direction];

    if (!triggerButtonPositionProp || !triggerButtonPositionFactor) {
      console.warn('Wrong floating menu direction:', direction); // eslint-disable-line no-console
    }

    var menuWidth = menuBody.offsetWidth;
    var menuHeight = menuBody.offsetHeight; // eslint-disable-next-line no-use-before-define

    var menu = OverflowMenu.components.get(trigger);

    if (!menu) {
      throw new TypeError('Overflow menu instance cannot be found.');
    }

    var flip = menuBody.classList.contains(menu.options.classMenuFlip);

    if (triggerButtonPositionProp === 'top' || triggerButtonPositionProp === 'bottom') {
      var triggerWidth = trigger.offsetWidth;
      return {
        left: (!flip ? 1 : -1) * (menuWidth / 2 - triggerWidth / 2),
        top: 0
      };
    }

    if (triggerButtonPositionProp === 'left' || triggerButtonPositionProp === 'right') {
      var triggerHeight = trigger.offsetHeight;
      return {
        left: 0,
        top: (!flip ? 1 : -1) * (menuHeight / 2 - triggerHeight / 2)
      };
    }

    return undefined;
  };

  _exports.getMenuOffset = getMenuOffset;

  var OverflowMenu = /*#__PURE__*/function (_mixin) {
    _inherits(OverflowMenu, _mixin);

    var _super = _createSuper(OverflowMenu);
    /**
     * Overflow menu.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a modal dialog.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorOptionMenu] The CSS selector to find the menu.
     * @param {string} [options.selectorTrigger] The CSS selector to find the trigger button.
     * @param {string} [options.classShown] The CSS class for the shown state, for the trigger UI.
     * @param {string} [options.classMenuShown] The CSS class for the shown state, for the menu.
     * @param {string} [options.classMenuFlip] The CSS class for the flipped state of the menu.
     * @param {object} [options.objMenuOffset] The offset locating the menu for the non-flipped state.
     * @param {object} [options.objMenuOffsetFlip] The offset locating the menu for the flipped state.
     */


    function OverflowMenu(element, options) {
      var _this;

      _classCallCheck(this, OverflowMenu);

      _this = _super.call(this, element, options);

      _this.getCurrentNavigation = function () {
        var focused = _this.element.ownerDocument.activeElement;
        return focused.nodeType === Node.ELEMENT_NODE && focused.matches(_this.options.selectorItem) ? focused : null;
      };

      _this.navigate = function (direction) {
        var items = _toConsumableArray(_this.element.ownerDocument.querySelectorAll(_this.options.selectorItem));

        var start = _this.getCurrentNavigation() || _this.element.querySelector(_this.options.selectorItemSelected);

        var getNextItem = function getNextItem(old) {
          var handleUnderflow = function handleUnderflow(index, length) {
            return index + (index >= 0 ? 0 : length);
          };

          var handleOverflow = function handleOverflow(index, length) {
            return index - (index < length ? 0 : length);
          }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


          var index = Math.max(items.indexOf(old) + direction, -1);
          return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
        };

        for (var current = getNextItem(start); current && current !== start; current = getNextItem(current)) {
          if (!current.matches(_this.options.selectorItemHidden) && !current.parentNode.matches(_this.options.selectorItemHidden) && !current.matches(_this.options.selectorItemSelected)) {
            current.focus();
            break;
          }
        }
      };

      if (_this.element.getAttribute('role') !== 'button') {
        // Would prefer to use the aria-controls with a specific ID but we
        // don't have the menuOptions list at this point to pull the ID from
        _this.triggerNode = _this.element.querySelector(_this.options.selectorTrigger);
      }

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'click', function (event) {
        _this._handleDocumentClick(event);

        _this.wasOpenBeforeClick = undefined;
      }));

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'keydown', function (event) {
        _this._handleKeyPress(event);
      }));

      _this.manage((0, _on["default"])(_this.element, 'mousedown', function () {
        _this.wasOpenBeforeClick = element.classList.contains(_this.options.classShown);
      }));

      return _this;
    }
    /**
     * Changes the shown/hidden state.
     * @param {string} state The new state.
     * @param {object} detail The detail of the event trigging this action.
     * @param {Function} callback Callback called when change in state completes.
     */


    _createClass(OverflowMenu, [{
      key: "changeState",
      value: function changeState(state, detail, callback) {
        if (!this.optionMenu) {
          var optionMenu = this.element.querySelector(this.options.selectorOptionMenu);

          if (!optionMenu) {
            throw new Error('Cannot find the target menu.');
          } // Lazily create a component instance for menu


          this.optionMenu = _floatingMenu["default"].create(optionMenu, {
            refNode: this.element,
            classShown: this.options.classMenuShown,
            classRefShown: this.options.classShown,
            offset: this.options.objMenuOffset,
            triggerNode: this.triggerNode,
            contentNode: this.element.querySelector(this.options.selectorContent)
          });
          this.children.push(this.optionMenu);
        }

        if (this.optionMenu.element.classList.contains(this.options.classMenuFlip)) {
          this.optionMenu.options.offset = this.options.objMenuOffsetFlip;
        } // Delegates the action of changing state to the menu.
        // (And thus the before/after shown/hidden events are fired from the menu)


        this.optionMenu.changeState(state, Object.assign(detail, {
          delegatorNode: this.element
        }), callback);
      }
      /**
       * Handles click on document.
       * @param {Event} event The triggering event.
       * @private
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(event) {
        var _this2 = this;

        var element = this.element,
            optionMenu = this.optionMenu,
            wasOpenBeforeClick = this.wasOpenBeforeClick,
            triggerNode = this.triggerNode;
        var isOfSelf = element.contains(event.target);
        var isOfMenu = optionMenu && optionMenu.element.contains(event.target);
        var shouldBeOpen = isOfSelf && !wasOpenBeforeClick;
        var state = shouldBeOpen ? 'shown' : 'hidden';

        if (isOfSelf) {
          if (element.tagName === 'A') {
            event.preventDefault();
          }

          event.delegateTarget = element; // eslint-disable-line no-param-reassign
        }

        if (!isOfMenu || (0, _eventMatches["default"])(event, this.options.selectorItem)) {
          this.changeState(state, (0, _getLaunchingDetails["default"])(event), function () {
            if (state === 'hidden' && isOfMenu) {
              // @todo Can clean up to use `this.triggerNode` once non-compliant code is deprecated
              _this2[triggerNode ? 'triggerNode' : 'element'].focus();
            }
          });
        }
      }
      /**
       * Provides the element to move focus from
       * @returns {Element} Currently highlighted element.
       */

    }, {
      key: "_handleKeyPress",

      /**
       * Handles key press on document.
       * @param {Event} event The triggering event.
       * @private
       */
      value: function _handleKeyPress(event) {
        var _this3 = this;

        var key = event.which;
        var element = this.element,
            optionMenu = this.optionMenu,
            options = this.options,
            triggerNode = this.triggerNode;
        var isOfMenu = optionMenu && optionMenu.element.contains(event.target);
        var isExpanded = this.element.classList.contains(this.options.classShown); // @todo Can clean up to use `this.triggerNode` once non-compliant code is deprecated

        var triggerElement = triggerNode ? 'triggerNode' : 'element';

        switch (key) {
          // Enter || Space bar
          case 13:
          case 32:
            {
              if (!isExpanded && this.element.ownerDocument.activeElement !== this.element) {
                return;
              }

              var isOfSelf = element.contains(event.target);
              var shouldBeOpen = isOfSelf && !element.classList.contains(options.classShown);
              var state = shouldBeOpen ? 'shown' : 'hidden';

              if (isOfSelf) {
                event.delegateTarget = element; // eslint-disable-line no-param-reassign

                event.preventDefault(); // prevent scrolling

                this.changeState(state, (0, _getLaunchingDetails["default"])(event), function () {
                  if (state === 'hidden' && isOfMenu) {
                    _this3[triggerElement].focus();
                  }
                });
              }

              break;
            }

          case 38: // up arrow

          case 40:
            // down arrow
            {
              if (!isExpanded) {
                return;
              }

              event.preventDefault(); // prevent scrolling

              var direction = {
                38: -1,
                40: 1
              }[event.which];
              this.navigate(direction);
            }
            break;

          default:
            break;
        }
      }
    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-overflow-menu]',
          selectorOptionMenu: ".".concat(prefix, "--overflow-menu-options"),
          selectorTrigger: 'button[aria-haspopup]',
          selectorContent: ".".concat(prefix, "--overflow-menu-options__content"),
          selectorItem: "\n        .".concat(prefix, "--overflow-menu-options--open\n        .").concat(prefix, "--overflow-menu-options__option:not(.").concat(prefix, "--overflow-menu-options__option--disabled) >\n        .").concat(prefix, "--overflow-menu-options__btn\n      "),
          classShown: "".concat(prefix, "--overflow-menu--open"),
          classMenuShown: "".concat(prefix, "--overflow-menu-options--open"),
          classMenuFlip: "".concat(prefix, "--overflow-menu--flip"),
          objMenuOffset: getMenuOffset,
          objMenuOffsetFlip: getMenuOffset
        };
      }
    }]);

    OverflowMenu.components = new WeakMap();
    return OverflowMenu;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _eventedShowHideState["default"], _handles["default"]));

  var _default = OverflowMenu;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/pagination-nav/pagination-nav.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/pagination-nav/pagination-nav.js ***!
  \****************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var PaginationNav = /*#__PURE__*/function (_mixin) {
    _inherits(PaginationNav, _mixin);

    var _super = _createSuper(PaginationNav);
    /**
     * Pagination Nav component
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a pagination nav.
     */


    function PaginationNav(element, options) {
      var _this;

      _classCallCheck(this, PaginationNav);

      _this = _super.call(this, element, options);

      _this.getActivePageNumber = function () {
        var pageNum;

        var activePageElement = _this.element.querySelector(_this.options.selectorPageActive);

        if (activePageElement) {
          pageNum = Number(activePageElement.getAttribute(_this.options.attribPage));
        }

        return pageNum;
      };

      _this.clearActivePage = function (evt) {
        var pageButtonNodeList = _this.element.querySelectorAll(_this.options.selectorPageButton);

        var pageSelectElement = _this.element.querySelector(_this.options.selectorPageSelect);

        Array.prototype.forEach.call(pageButtonNodeList, function (el) {
          el.classList.remove(_this.options.classActive, _this.options.classDisabled);
          el.removeAttribute(_this.options.attribActive);
          el.removeAttribute('aria-disabled');
          el.removeAttribute('aria-current');
        });

        if (pageSelectElement) {
          pageSelectElement.removeAttribute('aria-current');
          var pageSelectElementOptions = pageSelectElement.options;
          Array.prototype.forEach.call(pageSelectElementOptions, function (el) {
            el.removeAttribute(_this.options.attribActive);
          });

          if (!evt.target.matches(_this.options.selectorPageSelect)) {
            pageSelectElement.classList.remove(_this.options.classActive);
            pageSelectElement.value = '';
          }
        }
      };

      _this.handleClick = function (evt) {
        if (!evt.target.getAttribute('aria-disabled') === true) {
          var nextActivePageNumber = _this.getActivePageNumber();

          var pageElementNodeList = _this.element.querySelectorAll(_this.options.selectorPageElement);

          var pageSelectElement = _this.element.querySelector(_this.options.selectorPageSelect);

          _this.clearActivePage(evt);

          if (evt.target.matches(_this.options.selectorPageButton)) {
            nextActivePageNumber = Number(evt.target.getAttribute(_this.options.attribPage));
          }

          if (evt.target.matches(_this.options.selectorPagePrevious)) {
            nextActivePageNumber -= 1;
          }

          if (evt.target.matches(_this.options.selectorPageNext)) {
            nextActivePageNumber += 1;
          }

          var pageTargetElement = pageElementNodeList[nextActivePageNumber - 1];
          pageTargetElement.setAttribute(_this.options.attribActive, true);

          if (pageTargetElement.tagName === 'OPTION') {
            pageSelectElement.value = _this.getActivePageNumber();
            pageSelectElement.classList.add(_this.options.classActive);
            pageSelectElement.setAttribute('aria-current', 'page');
          } else {
            pageTargetElement.classList.add(_this.options.classActive, _this.options.classDisabled);
            pageTargetElement.setAttribute('aria-disabled', true);
            pageTargetElement.setAttribute('aria-current', 'page');
          }

          _this.setPrevNextStates();
        }
      };

      _this.handleSelectChange = function (evt) {
        _this.clearActivePage(evt);

        var pageSelectElement = _this.element.querySelector(_this.options.selectorPageSelect);

        var pageSelectElementOptions = pageSelectElement.options;
        pageSelectElementOptions[pageSelectElementOptions.selectedIndex].setAttribute(_this.options.attribActive, true);
        evt.target.setAttribute('aria-current', 'page');
        evt.target.classList.add(_this.options.classActive);

        _this.setPrevNextStates();
      };

      _this.setPrevNextStates = function () {
        var pageElementNodeList = _this.element.querySelectorAll(_this.options.selectorPageElement);

        var totalPages = pageElementNodeList.length;

        var pageDirectionElementPrevious = _this.element.querySelector(_this.options.selectorPagePrevious);

        var pageDirectionElementNext = _this.element.querySelector(_this.options.selectorPageNext);

        if (pageDirectionElementPrevious) {
          if (_this.getActivePageNumber() <= 1) {
            pageDirectionElementPrevious.setAttribute('aria-disabled', true);
            pageDirectionElementPrevious.classList.add(_this.options.classDisabled);
          } else {
            pageDirectionElementPrevious.removeAttribute('aria-disabled');
            pageDirectionElementPrevious.classList.remove(_this.options.classDisabled);
          }
        }

        if (pageDirectionElementNext) {
          if (_this.getActivePageNumber() >= totalPages) {
            pageDirectionElementNext.setAttribute('aria-disabled', true);
            pageDirectionElementNext.classList.add(_this.options.classDisabled);
          } else {
            pageDirectionElementNext.removeAttribute('aria-disabled');
            pageDirectionElementNext.classList.remove(_this.options.classDisabled);
          }
        }
      };

      _this.manage((0, _on["default"])(_this.element, 'click', function (evt) {
        return _this.handleClick(evt);
      }));

      _this.manage((0, _on["default"])(_this.element, 'change', function (evt) {
        if (evt.target.matches(_this.options.selectorPageSelect)) {
          _this.handleSelectChange(evt);
        }
      }));

      return _this;
    }
    /**
     * Get active page number
     */


    _createClass(PaginationNav, null, [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode PaginationNav.create .create()},
       * or {@linkcode PaginationNav.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode PaginationNav.init .init()} works.
       * @member PaginationNav.options
       * @type {object}
       * @property {string} selectorInit The data attribute to find pagination nav.
       * @property {string} selectorPageElement The data attribute to find page element.
       * @property {string} selectorPageButton The data attribute to find page interactive element.
       * @property {string} selectorPageDirection The data attribute to find page change element.
       * @property {string} selectorPageSelect The data attribute to find page select element.
       * @property {string} selectorPageActive The data attribute to find active page element.
       * @property {string} [classActive] The CSS class for page's selected state.
       * @property {string} [classDisabled] The CSS class for page's disabled state.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-pagination-nav]',
          selectorPageElement: '[data-page]',
          selectorPageButton: '[data-page-button]',
          selectorPagePrevious: '[data-page-previous]',
          selectorPageNext: '[data-page-next]',
          selectorPageSelect: '[data-page-select]',
          selectorPageActive: '[data-page-active="true"]',
          attribPage: 'data-page',
          attribActive: 'data-page-active',
          classActive: "".concat(prefix, "--pagination-nav__page--active"),
          classDisabled: "".concat(prefix, "--pagination-nav__page--disabled")
        };
      }
    }]);

    PaginationNav.components = new WeakMap();
    return PaginationNav;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = PaginationNav;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/pagination/pagination.js":
/*!********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/pagination/pagination.js ***!
  \********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _mixin2, _createComponent, _initComponentBySearch, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Pagination = /*#__PURE__*/function (_mixin) {
    _inherits(Pagination, _mixin);

    var _super = _createSuper(Pagination);
    /**
     * Pagination component.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @param {HTMLElement} element The element working as a pagination component.
     * @param {object} [options] The component options.
     * @property {string} [selectorInit] The CSS selector to find pagination components.
     * @property {string} [selectorItemsPerPageInput]
     *   The CSS selector to find the input that determines the number of items per page.
     * @property {string} [selectorPageNumberInput] The CSS selector to find the input that changes the page displayed.
     * @property {string} [selectorPageBackward] The CSS selector to find the button that goes back a page.
     * @property {string} [selectorPageForward] The CSS selector to find the button that goes forward a page.
     * @property {string} [eventItemsPerPage]
     *   The name of the custom event fired when a user changes the number of items per page.
     *   event.detail.value contains the number of items a user wishes to see.
     * @property {string} [eventPageNumber]
     *   The name of the custom event fired when a user inputs a specific page number.
     *   event.detail.value contains the value that the user input.
     * @property {string} [eventPageChange]
     *   The name of the custom event fired when a user goes forward or backward a page.
     *   event.detail.direction contains the direction a user wishes to go.
     */


    function Pagination(element, options) {
      var _this;

      _classCallCheck(this, Pagination);

      _this = _super.call(this, element, options);

      _this._emitEvent = function (evtName, detail) {
        var event = new CustomEvent("".concat(evtName), {
          bubbles: true,
          cancelable: true,
          detail: detail
        });

        _this.element.dispatchEvent(event);
      };

      _this.manage((0, _on["default"])(_this.element, 'click', function (evt) {
        if ((0, _eventMatches["default"])(evt, _this.options.selectorPageBackward)) {
          var detail = {
            initialEvt: evt,
            element: evt.target,
            direction: 'backward'
          };

          _this._emitEvent(_this.options.eventPageChange, detail);
        } else if ((0, _eventMatches["default"])(evt, _this.options.selectorPageForward)) {
          var _detail = {
            initialEvt: evt,
            element: evt.target,
            direction: 'forward'
          };

          _this._emitEvent(_this.options.eventPageChange, _detail);
        }
      }));

      _this.manage((0, _on["default"])(_this.element, 'input', function (evt) {
        if ((0, _eventMatches["default"])(evt, _this.options.selectorItemsPerPageInput)) {
          var detail = {
            initialEvt: evt,
            element: evt.target,
            value: evt.target.value
          };

          _this._emitEvent(_this.options.eventItemsPerPage, detail);
        } else if ((0, _eventMatches["default"])(evt, _this.options.selectorPageNumberInput)) {
          var _detail2 = {
            initialEvt: evt,
            element: evt.target,
            value: evt.target.value
          };

          _this._emitEvent(_this.options.eventPageNumber, _detail2);
        }
      }));

      return _this;
    }
    /**
     * Dispatches a custom event
     * @param {string} evtName name of the event to be dispatched.
     * @param {object} detail contains the original event and any other necessary details.
     */


    Pagination.components = new WeakMap();
    Pagination.options = {
      selectorInit: '[data-pagination]',
      selectorItemsPerPageInput: '[data-items-per-page]',
      selectorPageNumberInput: '[data-page-number-input]',
      selectorPageBackward: '[data-page-backward]',
      selectorPageForward: '[data-page-forward]',
      eventItemsPerPage: 'itemsPerPage',
      eventPageNumber: 'pageNumber',
      eventPageChange: 'pageChange'
    };
    return Pagination;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = Pagination;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/progress-indicator/progress-indicator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/progress-indicator/progress-indicator.js ***!
  \************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var ProgressIndicator = /*#__PURE__*/function (_mixin) {
    _inherits(ProgressIndicator, _mixin);

    var _super = _createSuper(ProgressIndicator);
    /**
     * ProgressIndicator.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @param {HTMLElement} element The element representing the ProgressIndicator.
     * @param {object} [options] The component options.
     * @property {string} [options.selectorStepElement] The CSS selector to find step elements.
     * @property {string} [options.selectorCurrent] The CSS selector to find the current step element.
     * @property {string} [options.selectorIncomplete] The CSS class to find incomplete step elements.
     * @property {string} [options.selectorComplete] The CSS selector to find completed step elements.
     * @property {string} [options.classStep] The className for a step element.
     * @property {string} [options.classComplete] The className for a completed step element.
     * @property {string} [options.classCurrent] The className for the current step element.
     * @property {string} [options.classIncomplete] The className for a incomplete step element.
     */


    function ProgressIndicator(element, options) {
      var _this;

      _classCallCheck(this, ProgressIndicator);

      _this = _super.call(this, element, options);
      /**
       * The component state.
       * @type {object}
       */

      _this.state = {
        /**
         * The current step index.
         * @type {number}
         */
        currentIndex: _this.getCurrent().index,

        /**
         * Total number of steps.
         * @type {number}
         */
        totalSteps: _this.getSteps().length
      };

      _this.addOverflowTooltip();

      return _this;
    }
    /**
     * Returns all steps with details about element and index.
     */


    _createClass(ProgressIndicator, [{
      key: "getSteps",
      value: function getSteps() {
        return toArray(this.element.querySelectorAll(this.options.selectorStepElement)).map(function (element, index) {
          return {
            element: element,
            index: index
          };
        });
      }
      /**
       * Returns current step; gives detail about element and index.
       */

    }, {
      key: "getCurrent",
      value: function getCurrent() {
        var currentEl = this.element.querySelector(this.options.selectorCurrent);
        return this.getSteps().filter(function (step) {
          return step.element === currentEl;
        })[0];
      }
      /**
       * Sets the current step.
       * * @param {Number} new step index or use default in `this.state.currentIndex`.
       */

    }, {
      key: "setCurrent",
      value: function setCurrent() {
        var _this2 = this;

        var newCurrentStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentIndex;
        var changed = false;

        if (newCurrentStep !== this.state.currentIndex) {
          this.state.currentIndex = newCurrentStep;
          changed = true;
        }

        if (changed) {
          this.getSteps().forEach(function (step) {
            if (step.index < newCurrentStep) {
              _this2._updateStep({
                element: step.element,
                className: _this2.options.classComplete,
                html: _this2._getSVGComplete()
              });
            }

            if (step.index === newCurrentStep) {
              _this2._updateStep({
                element: step.element,
                className: _this2.options.classCurrent,
                html: _this2._getCurrentSVG()
              });
            }

            if (step.index > newCurrentStep) {
              _this2._updateStep({
                element: step.element,
                className: _this2.options.classIncomplete,
                html: _this2._getIncompleteSVG()
              });
            }
          });
        }
      }
      /**
       * Update step with correct inline SVG and className
       * @param {object} args
       * @param {object} [args.element] target element
       * @param {object} [args.className] new className
       * @param {object} [args.html] new inline SVG to insert
       */

    }, {
      key: "_updateStep",
      value: function _updateStep(args) {
        var element = args.element,
            className = args.className,
            html = args.html;

        if (element.firstElementChild) {
          element.removeChild(element.firstElementChild);
        }

        if (!element.classList.contains(className)) {
          element.setAttribute('class', this.options.classStep);
          element.classList.add(className);
        }

        element.insertAdjacentHTML('afterbegin', html);
      }
      /**
       * Returns HTML string for an SVG used to represent a compelted step (checkmark)
       */

    }, {
      key: "_getSVGComplete",
      value: function _getSVGComplete() {
        return "<svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\">\n        <circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n        <polygon points=\"10.3 13.6 7.7 11 6.3 12.4 10.3 16.4 17.8 9 16.4 7.6\"></polygon>\n      </svg>";
      }
      /**
       * Returns HTML string for an SVG used to represent current step (circles, like a radio button, but not.)
       */

    }, {
      key: "_getCurrentSVG",
      value: function _getCurrentSVG() {
        return "<svg>\n        <circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n        <circle cx=\"12\" cy=\"12\" r=\"6\"></circle>\n      </svg>";
      }
      /**
       * Returns HTML string for an SVG used to represent incomple step (grey empty circle)
       */

    }, {
      key: "_getIncompleteSVG",
      value: function _getIncompleteSVG() {
        return "<svg>\n        <circle cx=\"12\" cy=\"12\" r=\"12\"></circle>\n      </svg>";
      }
    }, {
      key: "addOverflowTooltip",
      value: function addOverflowTooltip() {
        var _this3 = this;

        var stepLabels = toArray(this.element.querySelectorAll(this.options.selectorLabel));
        var tooltips = toArray(this.element.querySelectorAll(this.options.selectorTooltip));
        stepLabels.forEach(function (step) {
          if (step.scrollWidth > _this3.options.maxWidth) {
            step.classList.add(_this3.options.classOverflowLabel);
          }
        });
        tooltips.forEach(function (tooltip) {
          var childText = tooltip.querySelector(_this3.options.selectorTooltipText);

          if (childText.scrollHeight > _this3.options.tooltipMaxHeight) {
            tooltip.classList.add(_this3.options.classTooltipMulti);
          }
        });
      }
    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode ProgressIndicator.create .create()}, or {@linkcode ProgressIndicator.init .init()},
       * properties in this object are overriden for the instance being created.
       * @member ProgressIndicator.options
       * @type {object}
       * @property {string} selectorInit The CSS selector to find content switcher button set.
       * @property {string} [selectorStepElement] The CSS selector to find step elements.
       * @property {string} [selectorCurrent] The CSS selector to find the current step element.
       * @property {string} [selectorIncomplete] The CSS class to find incomplete step elements.
       * @property {string} [selectorComplete] The CSS selector to find completed step elements.
       * @property {string} [classStep] The className for a step element.
       * @property {string} [classComplete] The className for a completed step element.
       * @property {string} [classCurrent] The className for the current step element.
       * @property {string} [classIncomplete] The className for a incomplete step element.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-progress]',
          selectorStepElement: ".".concat(prefix, "--progress-step"),
          selectorCurrent: ".".concat(prefix, "--progress-step--current"),
          selectorIncomplete: ".".concat(prefix, "--progress-step--incomplete"),
          selectorComplete: ".".concat(prefix, "--progress-step--complete"),
          selectorLabel: ".".concat(prefix, "--progress-label"),
          selectorTooltip: ".".concat(prefix, "--tooltip"),
          selectorTooltipText: ".".concat(prefix, "--tooltip__text"),
          classStep: "".concat(prefix, "--progress-step"),
          classComplete: "".concat(prefix, "--progress-step--complete"),
          classCurrent: "".concat(prefix, "--progress-step--current"),
          classIncomplete: "".concat(prefix, "--progress-step--incomplete"),
          classOverflowLabel: "".concat(prefix, "--progress-label-overflow"),
          classTooltipMulti: "".concat(prefix, "--tooltip_multi"),
          maxWidth: 87,
          tooltipMaxHeight: 21
        };
      }
    }]);

    ProgressIndicator.components = new WeakMap();
    return ProgressIndicator;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"]));

  var _default = ProgressIndicator;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/search/search.js":
/*!************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/search/search.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js"), __webpack_require__(/*! ../../globals/js/misc/svg-toggle-class */ "./node_modules/carbon-components/umd/globals/js/misc/svg-toggle-class.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _eventMatches, _on, _svgToggleClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);
  _svgToggleClass = _interopRequireDefault(_svgToggleClass);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var Search = /*#__PURE__*/function (_mixin) {
    _inherits(Search, _mixin);

    var _super = _createSuper(Search);
    /**
     * Search with Options.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as the search component.
     * @param {object} [options] The component options
     * @property {string} [options.selectorInit]
     *   The selector to find search UIs with options.
     * @property {string} [options.selectorSearchView]
     *   The selector to find the search view icon containers.
     * @property {string} [options.selectorSearchInput]
     *   The selector to find the search input.
     * @property {string} [options.selectorClearIcon]
     *   The selector for the clear icon that clears the search box.
     * @property {string} [options.selectorIconContainer] The data attribute selector for the icon layout container.
     * @property {string} [options.classClearHidden] The class used to hide the clear icon.
     * @property {string} [options.classLayoutHidden] The class used to hide nonselected layout view.
     */


    function Search(element, options) {
      var _this;

      _classCallCheck(this, Search);

      _this = _super.call(this, element, options);

      var closeIcon = _this.element.querySelector(_this.options.selectorClearIcon);

      var input = _this.element.querySelector(_this.options.selectorSearchInput);

      if (!input) {
        throw new Error('Cannot find the search input.');
      }

      if (closeIcon) {
        _this.manage((0, _on["default"])(closeIcon, 'click', function () {
          (0, _svgToggleClass["default"])(closeIcon, _this.options.classClearHidden, true);
          input.value = '';
          input.focus();
        }));
      }

      _this.manage((0, _on["default"])(_this.element, 'click', function (evt) {
        var toggleItem = (0, _eventMatches["default"])(evt, _this.options.selectorIconContainer);
        if (toggleItem) _this.toggleLayout(toggleItem);
      }));

      _this.manage((0, _on["default"])(input, 'input', function (evt) {
        if (closeIcon) _this.showClear(evt.target.value, closeIcon);
      }));

      return _this;
    }
    /**
     * Toggles between the grid and list layout.
     * @param {HTMLElement} element The element contining the layout toggle.
     */


    _createClass(Search, [{
      key: "toggleLayout",
      value: function toggleLayout(element) {
        var _this2 = this;

        toArray(element.querySelectorAll(this.options.selectorSearchView)).forEach(function (item) {
          item.classList.toggle(_this2.options.classLayoutHidden);
        });
      }
      /**
       * Toggles the clear icon visibility
       * @param {HTMLElement} value The element serving as the search input.
       * @param {HTMLElement} icon The element serving as close icon.
       */

    }, {
      key: "showClear",
      value: function showClear(value, icon) {
        (0, _svgToggleClass["default"])(icon, this.options.classClearHidden, value.length === 0);
      }
      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode Search.create .create()}, or {@linkcode Search.init .init()},
       * properties in this object are overriden for the instance being created
       * and how {@linkcode Search.init .init()} works.
       * @member Search.options
       * @type {object}
       * @property {string} [options.selectorInit]
       *   The selector to find search UIs with options.
       * @property {string} [options.selectorSearchView]
       *   The selector to find the search view icon containers.
       * @property {string} [options.selectorSearchInput]
       *   The selector to find the search input.
       * @property {string} [options.selectorClearIcon]
       *   The selector for the clear icon that clears the search box.
       * @property {string} [options.selectorIconContainer] The data attribute selector for the icon layout container.
       * @property {string} [options.classClearHidden] The class used to hide the clear icon.
       * @property {string} [options.classLayoutHidden] The class used to hide nonselected layout view.
       */

    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-search]',
          selectorSearchView: '[data-search-view]',
          selectorSearchInput: ".".concat(prefix, "--search-input"),
          selectorClearIcon: ".".concat(prefix, "--search-close"),
          selectorIconContainer: ".".concat(prefix, "--search-button[data-search-toggle]"),
          classClearHidden: "".concat(prefix, "--search-close--hidden"),
          classLayoutHidden: "".concat(prefix, "--search-view--hidden")
        };
      }
      /**
       * The map associating DOM element and search instance.
       * @member Search.components
       * @type {WeakMap}
       */

    }]);

    Search.components = new WeakMap();
    return Search;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = Search;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/slider/slider.js":
/*!************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/slider/slider.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _eventedState, _handles, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventedState = _interopRequireDefault(_eventedState);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Slider = /*#__PURE__*/function (_mixin) {
    _inherits(Slider, _mixin);

    var _super = _createSuper(Slider);
    /**
     * Slider.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as an slider.
     */


    function Slider(element, options) {
      var _this;

      _classCallCheck(this, Slider);

      _this = _super.call(this, element, options);

      _this._changeState = function (state, detail, callback) {
        callback();
      };

      _this.sliderActive = false;
      _this.dragging = false;
      _this.track = _this.element.querySelector(_this.options.selectorTrack);
      _this.filledTrack = _this.element.querySelector(_this.options.selectorFilledTrack);
      _this.thumb = _this.element.querySelector(_this.options.selectorThumb);
      _this.input = _this.element.querySelector(_this.options.selectorInput);

      if (_this.element.dataset.sliderInputBox) {
        _this.boundInput = _this.element.ownerDocument.querySelector(_this.element.dataset.sliderInputBox);

        _this._updateInput();

        _this.manage((0, _on["default"])(_this.boundInput, 'change', function (evt) {
          _this.setValue(evt.target.value);
        }));

        _this.manage((0, _on["default"])(_this.boundInput, 'focus', function (evt) {
          evt.target.select();
        })); // workaround for safari


        _this.manage((0, _on["default"])(_this.boundInput, 'mouseup', function (evt) {
          evt.preventDefault();
        }));
      }

      _this._updatePosition();

      _this.manage((0, _on["default"])(_this.thumb, 'mousedown', function () {
        _this.sliderActive = true;
      }));

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'mouseup', function () {
        _this.sliderActive = false;
      }));

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'mousemove', function (evt) {
        var disabled = _this.element.classList.contains(_this.options.classDisabled);

        if (_this.sliderActive === true && !disabled) {
          _this._updatePosition(evt);
        }
      }));

      _this.manage((0, _on["default"])(_this.thumb, 'keydown', function (evt) {
        var disabled = _this.element.classList.contains(_this.options.classDisabled);

        if (!disabled) {
          _this._updatePosition(evt);
        }
      }));

      _this.manage((0, _on["default"])(_this.track, 'click', function (evt) {
        var disabled = _this.element.classList.contains(_this.options.classDisabled);

        if (!disabled) {
          _this._updatePosition(evt);
        }
      }));

      return _this;
    }

    _createClass(Slider, [{
      key: "_updatePosition",
      value: function _updatePosition(evt) {
        var _this2 = this;

        var _this$_calcValue = this._calcValue(evt),
            left = _this$_calcValue.left,
            newValue = _this$_calcValue.newValue;

        if (this.dragging) {
          return;
        }

        this.dragging = true;
        requestAnimationFrame(function () {
          _this2.dragging = false;
          _this2.thumb.style.left = "".concat(left, "%");
          _this2.filledTrack.style.transform = "translate(0%, -50%) scaleX(".concat(left / 100, ")");
          _this2.input.value = newValue;

          _this2._updateInput();

          _this2.changeState('slider-value-change', {
            value: newValue
          });
        });
      }
    }, {
      key: "_calcValue",
      value: function _calcValue(evt) {
        var _this$getInputProps = this.getInputProps(),
            value = _this$getInputProps.value,
            min = _this$getInputProps.min,
            max = _this$getInputProps.max,
            step = _this$getInputProps.step;

        var range = max - min;
        var valuePercentage = (value - min) / range * 100;
        var left;
        var newValue;
        left = valuePercentage;
        newValue = value;

        if (evt) {
          var type = evt.type;

          if (type === 'keydown') {
            var direction = {
              40: -1,
              // decreasing
              37: -1,
              // decreasing
              38: 1,
              // increasing
              39: 1 // increasing

            }[evt.which];

            if (direction !== undefined) {
              var multiplier = evt.shiftKey === true ? range / step / this.options.stepMultiplier : 1;
              var stepMultiplied = step * multiplier;
              var stepSize = stepMultiplied / range * 100;
              left = valuePercentage + stepSize * direction;
              newValue = Number(value) + stepMultiplied * direction;
            }
          }

          if (type === 'mousemove' || type === 'click') {
            if (type === 'click') {
              this.element.querySelector(this.options.selectorThumb).classList.add(this.options.classThumbClicked);
            } else {
              this.element.querySelector(this.options.selectorThumb).classList.remove(this.options.classThumbClicked);
            }

            var track = this.track.getBoundingClientRect();
            var unrounded = (evt.clientX - track.left) / track.width;
            var rounded = Math.round(range * unrounded / step) * step;
            left = rounded / range * 100;
            newValue = rounded + min;
          }
        }

        if (newValue <= Number(min)) {
          left = 0;
          newValue = min;
        }

        if (newValue >= Number(max)) {
          left = 100;
          newValue = max;
        }

        return {
          left: left,
          newValue: newValue
        };
      }
    }, {
      key: "_updateInput",
      value: function _updateInput() {
        if (this.boundInput) {
          this.boundInput.value = this.input.value;
        }
      }
    }, {
      key: "getInputProps",
      value: function getInputProps() {
        var values = {
          value: Number(this.input.value),
          min: Number(this.input.min),
          max: Number(this.input.max),
          step: this.input.step ? Number(this.input.step) : 1
        };
        return values;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.input.value = value;

        this._updatePosition();
      }
    }, {
      key: "stepUp",
      value: function stepUp() {
        this.input.stepUp();

        this._updatePosition();
      }
    }, {
      key: "stepDown",
      value: function stepDown() {
        this.input.stepDown();

        this._updatePosition();
      }
      /**
       * The map associating DOM element and Slider UI instance.
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * properties in this object are overriden for the instance being created.
       * @property {string} selectorInit The CSS selector to find slider instances.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-slider]',
          selectorTrack: ".".concat(prefix, "--slider__track"),
          selectorFilledTrack: ".".concat(prefix, "--slider__filled-track"),
          selectorThumb: ".".concat(prefix, "--slider__thumb"),
          selectorInput: ".".concat(prefix, "--slider__input"),
          classDisabled: "".concat(prefix, "--slider--disabled"),
          classThumbClicked: "".concat(prefix, "--slider__thumb--clicked"),
          eventBeforeSliderValueChange: 'slider-before-value-change',
          eventAfterSliderValueChange: 'slider-after-value-change',
          stepMultiplier: 4
        };
      }
    }]);

    Slider.components = new WeakMap();
    return Slider;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _eventedState["default"], _handles["default"]));

  var _default = Slider;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/structured-list/structured-list.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/structured-list/structured-list.js ***!
  \******************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var StructuredList = /*#__PURE__*/function (_mixin) {
    _inherits(StructuredList, _mixin);

    var _super = _createSuper(StructuredList);
    /**
     * StructuredList
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The root element of tables
     * @param {object} [options] the... options
     * @param {string} [options.selectorInit] selector initialization
     * @param {string} [options.selectorRow] css selector for selected row
     */


    function StructuredList(element, options) {
      var _this;

      _classCallCheck(this, StructuredList);

      _this = _super.call(this, element, options);

      _this.manage((0, _on["default"])(_this.element, 'keydown', function (evt) {
        if (evt.which === 37 || evt.which === 38 || evt.which === 39 || evt.which === 40) {
          _this._handleKeydownArrow(evt);
        }

        if (evt.which === 13 || evt.which === 32) {
          _this._handleKeydownChecked(evt);
        }
      }));

      _this.manage((0, _on["default"])(_this.element, 'click', function (evt) {
        _this._handleClick(evt);
      }));

      return _this;
    }

    _createClass(StructuredList, [{
      key: "_direction",
      value: function _direction(evt) {
        return {
          37: -1,
          // backward
          38: -1,
          // backward
          39: 1,
          // forward
          40: 1 // forward

        }[evt.which];
      }
    }, {
      key: "_nextIndex",
      value: function _nextIndex(array, arrayItem, direction) {
        return array.indexOf(arrayItem) + direction; // returns -1, 0, 1, 2, 3, 4...
      }
    }, {
      key: "_getInput",
      value: function _getInput(index) {
        var rows = toArray(this.element.querySelectorAll(this.options.selectorRow));
        return this.element.ownerDocument.querySelector(this.options.selectorListInput(rows[index].getAttribute('for')));
      }
    }, {
      key: "_handleInputChecked",
      value: function _handleInputChecked(index) {
        var rows = this.element.querySelectorAll(this.options.selectorRow);
        var input = this.getInput(index) || rows[index].querySelector('input');
        input.checked = true;
      }
    }, {
      key: "_handleClick",
      value: function _handleClick(evt) {
        var _this2 = this;

        var selectedRow = (0, _eventMatches["default"])(evt, this.options.selectorRow);
        toArray(this.element.querySelectorAll(this.options.selectorRow)).forEach(function (row) {
          return row.classList.remove(_this2.options.classActive);
        });

        if (selectedRow) {
          selectedRow.classList.add(this.options.classActive);
        }
      } // Handle Enter or Space keydown events for selecting <label> rows

    }, {
      key: "_handleKeydownChecked",
      value: function _handleKeydownChecked(evt) {
        var _this3 = this;

        evt.preventDefault(); // prevent spacebar from scrolling page

        var selectedRow = (0, _eventMatches["default"])(evt, this.options.selectorRow);
        toArray(this.element.querySelectorAll(this.options.selectorRow)).forEach(function (row) {
          return row.classList.remove(_this3.options.classActive);
        });

        if (selectedRow) {
          selectedRow.classList.add(this.options.classActive);
          var input = selectedRow.querySelector(this.options.selectorListInput(selectedRow.getAttribute('for'))) || selectedRow.querySelector('input');
          input.checked = true;
        }
      } // Handle up and down keydown events for selecting <label> rows

    }, {
      key: "_handleKeydownArrow",
      value: function _handleKeydownArrow(evt) {
        var _this4 = this;

        evt.preventDefault(); // prevent arrow keys from scrolling

        var selectedRow = (0, _eventMatches["default"])(evt, this.options.selectorRow);

        var direction = this._direction(evt);

        if (direction && selectedRow !== undefined) {
          var rows = toArray(this.element.querySelectorAll(this.options.selectorRow));
          rows.forEach(function (row) {
            return row.classList.remove(_this4.options.classActive);
          });
          var firstIndex = 0;

          var nextIndex = this._nextIndex(rows, selectedRow, direction);

          var lastIndex = rows.length - 1;

          var getSelectedIndex = function getSelectedIndex() {
            switch (nextIndex) {
              case -1:
                return lastIndex;

              case rows.length:
                return firstIndex;

              default:
                return nextIndex;
            }
          };

          var selectedIndex = getSelectedIndex();
          rows[selectedIndex].classList.add(this.options.classActive);
          rows[selectedIndex].focus();

          this._handleInputChecked(selectedIndex);
        }
      }
    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-structured-list]',
          selectorRow: "[data-structured-list] .".concat(prefix, "--structured-list-tbody > label.").concat(prefix, "--structured-list-row"),
          selectorListInput: function selectorListInput(id) {
            return "#".concat(id, ".").concat(prefix, "--structured-list-input");
          },
          classActive: "".concat(prefix, "--structured-list-row--selected")
        };
      }
    }]);

    StructuredList.components = new WeakMap();
    return StructuredList;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = StructuredList;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/tabs/tabs.js":
/*!********************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/tabs/tabs.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../content-switcher/content-switcher */ "./node_modules/carbon-components/umd/components/content-switcher/content-switcher.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _eventMatches, _contentSwitcher, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _contentSwitcher = _interopRequireDefault(_contentSwitcher);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var Tab = /*#__PURE__*/function (_ContentSwitcher) {
    _inherits(Tab, _ContentSwitcher);

    var _super = _createSuper(Tab);
    /**
     * Container of tabs.
     * @extends ContentSwitcher
     * @param {HTMLElement} element The element working as a container of tabs.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorMenu] The CSS selector to find the drop down menu used in narrow mode.
     * @param {string} [options.selectorTrigger] The CSS selector to find the button to open the drop down menu used in narrow mode.
     * @param {string} [options.selectorTriggerText]
     *   The CSS selector to find the element used in narrow mode showing the selected tab item.
     * @param {string} [options.selectorButton] The CSS selector to find tab containers.
     * @param {string} [options.selectorButtonSelected] The CSS selector to find the selected tab.
     * @param {string} [options.selectorLink] The CSS selector to find the links in tabs.
     * @param {string} [options.classActive] The CSS class for tab's selected state.
     * @param {string} [options.classHidden] The CSS class for the drop down menu's hidden state used in narrow mode.
     * @param {string} [options.eventBeforeSelected]
     *   The name of the custom event fired before a tab is selected.
     *   Cancellation of this event stops selection of tab.
     * @param {string} [options.eventAfterSelected] The name of the custom event fired after a tab is selected.
     */


    function Tab(element, options) {
      var _this;

      _classCallCheck(this, Tab);

      _this = _super.call(this, element, options);

      _this.manage((0, _on["default"])(_this.element, 'keydown', function (event) {
        _this._handleKeyDown(event);
      }));

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'click', function (event) {
        _this._handleDocumentClick(event);
      }));

      var selected = _this.element.querySelector(_this.options.selectorButtonSelected);

      if (selected) {
        _this._updateTriggerText(selected);
      }

      return _this;
    }
    /**
     * Internal method of {@linkcode Tab#setActive .setActive()}, to select a tab item.
     * @private
     * @param {object} detail The detail of the event trigging this action.
     * @param {HTMLElement} detail.item The tab item to be selected.
     * @param {Function} callback Callback called when change in state completes.
     */


    _createClass(Tab, [{
      key: "_changeState",
      value: function _changeState(detail, callback) {
        var _this2 = this;

        _get(_getPrototypeOf(Tab.prototype), "_changeState", this).call(this, detail, function (error) {
          if (!error) {
            _this2._updateTriggerText(detail.item);
          }

          for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            data[_key - 1] = arguments[_key];
          }

          callback.apply(void 0, [error].concat(data));
        });
      }
      /**
       * Handles click on tab container.
       * * If the click is on a tab, activates it.
       * * If the click is on the button to open the drop down menu, does so.
       * @param {Event} event The event triggering this method.
       */

    }, {
      key: "_handleClick",
      value: function _handleClick(event) {
        var button = (0, _eventMatches["default"])(event, this.options.selectorButton);
        var trigger = (0, _eventMatches["default"])(event, this.options.selectorTrigger);

        if (button && !button.classList.contains(this.options.classButtonDisabled)) {
          _get(_getPrototypeOf(Tab.prototype), "_handleClick", this).call(this, event);

          this._updateMenuState(false);
        }

        if (trigger) {
          this._updateMenuState();
        }
      }
      /**
       * Handles click on document.
       * @param {Event} event The triggering event.
       * @private
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(event) {
        var element = this.element;
        var isOfSelf = element.contains(event.target);

        if (isOfSelf) {
          return;
        }

        this._updateMenuState(false);
      }
      /**
       * Handles arrow keys on tab container.
       * * Left keys are used to go to previous tab.
       * * Right keys are used to go to next tab.
       * @param {Event} event The event triggering this method.
       */

    }, {
      key: "_handleKeyDown",
      value: function _handleKeyDown(event) {
        var _this3 = this;

        var triggerNode = (0, _eventMatches["default"])(event, this.options.selectorTrigger);

        if (triggerNode) {
          if (event.which === 13) {
            this._updateMenuState();
          }

          return;
        }

        var direction = {
          37: this.constructor.NAVIGATE.BACKWARD,
          39: this.constructor.NAVIGATE.FORWARD
        }[event.which];

        if (direction) {
          var buttons = toArray(this.element.querySelectorAll(this.options.selectorButtonEnabled));
          var button = this.element.querySelector(this.options.selectorButtonSelected);
          var nextIndex = Math.max(buttons.indexOf(button) + direction, -1
          /* For `button` not found in `buttons` */
          );
          var nextIndexLooped = nextIndex >= 0 && nextIndex < buttons.length ? nextIndex : nextIndex - Math.sign(nextIndex) * buttons.length;
          this.setActive(buttons[nextIndexLooped], function (error, item) {
            if (item) {
              var link = item.querySelector(_this3.options.selectorLink);

              if (link) {
                link.focus();
              }
            }
          });
          event.preventDefault();
        }
      }
      /**
       * Shows/hides the drop down menu used in narrow mode.
       * @param {boolean} [force] `true` to show the menu, `false` to hide the menu, otherwise toggles the menu.
       */

    }, {
      key: "_updateMenuState",
      value: function _updateMenuState(force) {
        var menu = this.element.querySelector(this.options.selectorMenu);
        var trigger = this.element.querySelector(this.options.selectorTrigger);

        if (menu) {
          menu.classList.toggle(this.options.classHidden, typeof force === 'undefined' ? force : !force);

          if (menu.classList.contains(this.options.classHidden)) {
            trigger.classList.remove(this.options.classOpen);
          } else {
            trigger.classList.add(this.options.classOpen);
          }
        }
      }
      /**
       * Updates the text indicating the currently selected tab item.
       * @param {HTMLElement} target The newly selected tab item.
       */

    }, {
      key: "_updateTriggerText",
      value: function _updateTriggerText(target) {
        var triggerText = this.element.querySelector(this.options.selectorTriggerText);

        if (triggerText) {
          triggerText.textContent = target.textContent;
        }
      }
      /**
       * The map associating DOM element and tab container instance.
       * @member Tab.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor, {@linkcode ContentSwitcher.create .create()}, or {@linkcode Tab.init .init()},
       * properties in this object are overriden for the instance being create and how {@linkcode Tab.init .init()} works.
       * @member Tab.options
       * @type {object}
       * @property {string} selectorInit The CSS selector to find tab containers.
       * @property {string} [selectorMenu] The CSS selector to find the drop down menu used in narrow mode.
       * @property {string} [selectorTrigger] The CSS selector to find the button to open the drop down menu used in narrow mode.
       * @property {string} [selectorTriggerText]
       *   The CSS selector to find the element used in narrow mode showing the selected tab item.
       * @property {string} [selectorButton] The CSS selector to find tab containers.
       * @property {string} [selectorButtonSelected] The CSS selector to find the selected tab.
       * @property {string} [selectorLink] The CSS selector to find the links in tabs.
       * @property {string} [classActive] The CSS class for tab's selected state.
       * @property {string} [classHidden] The CSS class for the drop down menu's hidden state used in narrow mode.
       * @property {string} [eventBeforeSelected]
       *   The name of the custom event fired before a tab is selected.
       *   Cancellation of this event stops selection of tab.
       * @property {string} [eventAfterSelected] The name of the custom event fired after a tab is selected.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return Object.assign(Object.create(_contentSwitcher["default"].options), {
          selectorInit: '[data-tabs]',
          selectorMenu: ".".concat(prefix, "--tabs__nav"),
          selectorTrigger: ".".concat(prefix, "--tabs-trigger"),
          selectorTriggerText: ".".concat(prefix, "--tabs-trigger-text"),
          selectorButton: ".".concat(prefix, "--tabs__nav-item"),
          selectorButtonEnabled: ".".concat(prefix, "--tabs__nav-item:not(.").concat(prefix, "--tabs__nav-item--disabled)"),
          selectorButtonSelected: ".".concat(prefix, "--tabs__nav-item--selected"),
          selectorLink: ".".concat(prefix, "--tabs__nav-link"),
          classActive: "".concat(prefix, "--tabs__nav-item--selected"),
          classHidden: "".concat(prefix, "--tabs__nav--hidden"),
          classOpen: "".concat(prefix, "--tabs-trigger--open"),
          classButtonDisabled: "".concat(prefix, "--tabs__nav-item--disabled"),
          eventBeforeSelected: 'tab-beingselected',
          eventAfterSelected: 'tab-selected'
        });
      }
      /**
       * Enum for navigating backward/forward.
       * @readonly
       * @member Tab.NAVIGATE
       * @type {object}
       * @property {number} BACKWARD Navigating backward.
       * @property {number} FORWARD Navigating forward.
       */

    }]);

    Tab.components = new WeakMap();
    Tab.NAVIGATE = {
      BACKWARD: -1,
      FORWARD: 1
    };
    return Tab;
  }(_contentSwitcher["default"]);

  var _default = Tab;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/text-input/text-input.js":
/*!********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/text-input/text-input.js ***!
  \********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var TextInput = /*#__PURE__*/function (_mixin) {
    _inherits(TextInput, _mixin);

    var _super = _createSuper(TextInput);
    /**
     * Text Input.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element - The element functioning as a text field.
     */


    function TextInput(_element, options) {
      var _this;

      _classCallCheck(this, TextInput);

      _this = _super.call(this, _element, options);

      _this._setIconVisibility = function (_ref) {
        var iconVisibilityOn = _ref.iconVisibilityOn,
            iconVisibilityOff = _ref.iconVisibilityOff,
            passwordIsVisible = _ref.passwordIsVisible,
            selectorPasswordVisibilityTooltip = _ref.selectorPasswordVisibilityTooltip;

        if (passwordIsVisible) {
          iconVisibilityOn.setAttribute('hidden', true);
          iconVisibilityOff.removeAttribute('hidden');
          selectorPasswordVisibilityTooltip.textContent = 'Hide password';
          return;
        }

        iconVisibilityOn.removeAttribute('hidden');
        iconVisibilityOff.setAttribute('hidden', true);
        selectorPasswordVisibilityTooltip.textContent = 'Show password';
      };

      _this._toggle = function (_ref2) {
        var element = _ref2.element,
            button = _ref2.button; // toggle action must come before querying the classList

        element.classList.toggle(_this.options.passwordIsVisible);
        var passwordIsVisible = element.classList.contains(_this.options.passwordIsVisible);
        var iconVisibilityOn = button.querySelector(_this.options.svgIconVisibilityOn);
        var iconVisibilityOff = button.querySelector(_this.options.svgIconVisibilityOff);
        var input = element.querySelector(_this.options.selectorPasswordField);
        var selectorPasswordVisibilityTooltip = element.querySelector(_this.options.selectorPasswordVisibilityTooltip);

        _this._setIconVisibility({
          iconVisibilityOn: iconVisibilityOn,
          iconVisibilityOff: iconVisibilityOff,
          passwordIsVisible: passwordIsVisible,
          selectorPasswordVisibilityTooltip: selectorPasswordVisibilityTooltip
        });

        input.type = passwordIsVisible ? 'text' : 'password';
      };

      _this.manage((0, _on["default"])(_this.element, 'click', function (event) {
        var toggleVisibilityButton = (0, _eventMatches["default"])(event, _this.options.selectorPasswordVisibilityButton);

        if (toggleVisibilityButton) {
          _this._toggle({
            element: _element,
            button: toggleVisibilityButton
          });
        }
      }));

      return _this;
    }
    /**
     *
     * @param {object} obj - Object containing selectors and visibility status
     * @param {HTMLElement} obj.iconVisibilityOn - The element functioning as
     * the SVG icon for visibility on
     * @param {HTMLElement} obj.iconVisibilityOff - The element functioning as
     * the SVG icon for visibility off
     * @param {boolean} obj.passwordIsVisible - The visibility of the password in the
     * input field
     */


    _createClass(TextInput, null, [{
      key: "options",

      /**
       * The component options.
       *
       * If `options` is specified in the constructor,
       * {@linkcode TextInput.create .create()},
       * or {@linkcode TextInput.init .init()},
       * properties in this object are overriden for the instance being
       * created and how {@linkcode TextInput.init .init()} works.
       * @property {string} selectorInit The CSS selector to find text input UIs.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-text-input]',
          selectorPasswordField: ".".concat(prefix, "--text-input[data-toggle-password-visibility]"),
          selectorPasswordVisibilityButton: ".".concat(prefix, "--text-input--password__visibility__toggle"),
          selectorPasswordVisibilityTooltip: ".".concat(prefix, "--text-input--password__visibility__toggle > .").concat(prefix, "--assistive-text"),
          passwordIsVisible: "".concat(prefix, "--text-input--password-visible"),
          svgIconVisibilityOn: "svg.".concat(prefix, "--icon--visibility-on"),
          svgIconVisibilityOff: "svg.".concat(prefix, "--icon--visibility-off")
        };
      }
      /**
       * The map associating DOM element and text input UI instance.
       * @type {WeakMap}
       */

    }]);

    TextInput.components = new WeakMap();
    return TextInput;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  _exports["default"] = TextInput;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/tile/tile.js":
/*!********************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/tile/tile.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _eventMatches) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _eventMatches = _interopRequireDefault(_eventMatches);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var Tile = /*#__PURE__*/function (_mixin) {
    _inherits(Tile, _mixin);

    var _super = _createSuper(Tile);
    /**
     * Tile.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @param {HTMLElement} element The element working as an Tile.
     */


    function Tile(element, options) {
      var _this;

      _classCallCheck(this, Tile);

      _this = _super.call(this, element, options);

      _this._getClass = function (type) {
        var typeObj = {
          expandable: _this.options.classExpandedTile,
          clickable: _this.options.classClickableTile,
          selectable: _this.options.classSelectableTile
        };
        return typeObj[type];
      };

      _this._hookActions = function (tileClass) {
        var isExpandable = _this.tileType === 'expandable';

        if (isExpandable) {
          var aboveTheFold = _this.element.querySelector(_this.options.selectorAboveTheFold);

          var getStyle = _this.element.ownerDocument.defaultView.getComputedStyle(_this.element, null);

          var tilePaddingTop = parseInt(getStyle.getPropertyValue('padding-top'), 10);
          var tilePaddingBottom = parseInt(getStyle.getPropertyValue('padding-bottom'), 10);
          var tilePadding = tilePaddingTop + tilePaddingBottom;

          if (aboveTheFold) {
            _this.tileHeight = _this.element.getBoundingClientRect().height;
            _this.atfHeight = aboveTheFold.getBoundingClientRect().height + tilePadding;
            _this.element.style.maxHeight = "".concat(_this.atfHeight, "px");
          }

          if (_this.element.classList.contains(_this.options.classExpandedTile)) {
            _this._setTileHeight();
          }
        }

        _this.element.addEventListener('click', function (evt) {
          var input = (0, _eventMatches["default"])(evt, _this.options.selectorTileInput);

          if (!input) {
            _this.element.classList.toggle(tileClass);
          }

          if (isExpandable) {
            _this._setTileHeight();
          }
        });

        _this.element.addEventListener('keydown', function (evt) {
          var input = _this.element.querySelector(_this.options.selectorTileInput);

          if (input) {
            if (evt.which === 13 || evt.which === 32) {
              if (!isExpandable) {
                _this.element.classList.toggle(tileClass);

                input.checked = !input.checked;
              }
            }
          }
        });
      };

      _this._setTileHeight = function () {
        var isExpanded = _this.element.classList.contains(_this.options.classExpandedTile);

        _this.element.style.maxHeight = isExpanded ? "".concat(_this.tileHeight, "px") : "".concat(_this.atfHeight, "px");
      };

      _this.tileType = _this.element.dataset.tile;
      _this.tileHeight = 0; // Tracks expandable tile height

      _this.atfHeight = 0; // Tracks above the fold height

      _this._hookActions(_this._getClass(_this.tileType));

      return _this;
    }

    _createClass(Tile, [{
      key: "release",
      value: function release() {
        _get(_getPrototypeOf(Tile.prototype), "release", this).call(this);
      }
      /**
       * The map associating DOM element and Tile UI instance.
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * properties in this object are overriden for the instance being created.
       * @property {string} selectorInit The CSS selector to find Tile instances.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-tile]',
          selectorAboveTheFold: '[data-tile-atf]',
          selectorTileInput: '[data-tile-input]',
          classExpandedTile: "".concat(prefix, "--tile--is-expanded"),
          classClickableTile: "".concat(prefix, "--tile--is-clicked"),
          classSelectableTile: "".concat(prefix, "--tile--is-selected")
        };
      }
    }]);

    Tile.components = new WeakMap();
    return Tile;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"]));

  var _default = Tile;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/toolbar/toolbar.js":
/*!**************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/toolbar/toolbar.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var Toolbar = /*#__PURE__*/function (_mixin) {
    _inherits(Toolbar, _mixin);

    var _super = _createSuper(Toolbar);
    /**
     * Toolbar.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as an toolbar.
     */


    function Toolbar(element, options) {
      var _this;

      _classCallCheck(this, Toolbar);

      _this = _super.call(this, element, options);

      if (!_this.element.dataset.tableTarget) {
        console.warn('There is no table bound to this toolbar!'); // eslint-disable-line no-console
      } else {
        var boundTable = _this.element.ownerDocument.querySelector(_this.element.dataset.tableTarget);

        var rowHeightBtns = _this.element.querySelector(_this.options.selectorRowHeight);

        if (rowHeightBtns) {
          _this.manage((0, _on["default"])(rowHeightBtns, 'click', function (event) {
            _this._handleRowHeightChange(event, boundTable);
          })); // toArray(this.element.querySelectorAll(this.options.selectorRowHeight)).forEach((item) => {
          //   item.addEventListener('click', (event) => { this._handleRowHeightChange(event, boundTable); });
          // });

        }
      }

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'keydown', function (evt) {
        _this._handleKeyDown(evt);
      }));

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'click', function (evt) {
        _this._handleDocumentClick(evt);
      }));

      return _this;
    }
    /**
     * Handles toggling of active state of the toolbar search input
     * @param {Event} event The event triggering this method.
     */


    _createClass(Toolbar, [{
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(event) {
        var _this2 = this;

        var searchInput = (0, _eventMatches["default"])(event, this.options.selectorSearch);
        var isOfSelfSearchInput = searchInput && this.element.contains(searchInput);

        if (isOfSelfSearchInput) {
          var shouldBeOpen = isOfSelfSearchInput && !this.element.classList.contains(this.options.classSearchActive);
          searchInput.classList.toggle(this.options.classSearchActive, shouldBeOpen);

          if (shouldBeOpen) {
            searchInput.querySelector('input').focus();
          }
        }

        var targetComponentElement = (0, _eventMatches["default"])(event, this.options.selectorInit);
        toArray(this.element.ownerDocument.querySelectorAll(this.options.selectorSearch)).forEach(function (item) {
          if (!targetComponentElement || !targetComponentElement.contains(item)) {
            item.classList.remove(_this2.options.classSearchActive);
          }
        });
      }
      /**
       * Handles toggling of active state of the toolbar search input via the keyboard
       * @param {Event} event The event triggering this method.
       */

    }, {
      key: "_handleKeyDown",
      value: function _handleKeyDown(event) {
        var searchInput = (0, _eventMatches["default"])(event, this.options.selectorSearch);

        if (searchInput && event.which === 27) {
          searchInput.classList.remove(this.options.classSearchActive);
        }
      }
      /**
       * Handles toggling of the row height of the associated table
       * @param {Event} event The event triggering this method.
       * @param {HTMLElement} boundTable The table associated with the toolbar.
       */

    }, {
      key: "_handleRowHeightChange",
      value: function _handleRowHeightChange(event, boundTable) {
        var _event$currentTarget$ = event.currentTarget.querySelector('input:checked'),
            value = _event$currentTarget$.value;

        if (value === 'tall') {
          boundTable.classList.add(this.options.classTallRows);
        } else {
          boundTable.classList.remove(this.options.classTallRows);
        }
      }
      /**
       * The map associating DOM element and Toolbar UI instance.
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * properties in this object are overriden for the instance being created.
       * @property {string} selectorInit The CSS selector to find toolbar instances.
       * @property {string} selectorSearch The CSS selector to find search inputs in a toolbar.
       * @property {string} selectorRowHeight The CSS selector to find the row height inputs in a toolbar.
       * @property {string} classTallRows The CSS class for making table rows into tall rows.
       * @property {string} classSearchActive The CSS class the active state of the search input.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-toolbar]',
          selectorSearch: '[data-toolbar-search]',
          selectorRowHeight: '[data-row-height]',
          classTallRows: "".concat(prefix, "--responsive-table--tall"),
          classSearchActive: "".concat(prefix, "--toolbar-search--active")
        };
      }
    }]);

    Toolbar.components = new WeakMap();
    return Toolbar;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = Toolbar;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/tooltip/tooltip--simple.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/tooltip/tooltip--simple.js ***!
  \**********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! lodash.debounce */ "lodash.debounce"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _lodash, _settings, _mixin2, _createComponent, _initComponentBySearch, _handles, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _lodash = _interopRequireDefault(_lodash);
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var TooltipSimple = /*#__PURE__*/function (_mixin) {
    _inherits(TooltipSimple, _mixin);

    var _super = _createSuper(TooltipSimple);
    /**
     * Simple Tooltip.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element - The element functioning as a text field.
     */


    function TooltipSimple(element, options) {
      var _this;

      _classCallCheck(this, TooltipSimple);

      _this = _super.call(this, element, options);
      _this.tooltipFadeOut = (0, _lodash["default"])(function () {
        var tooltipTriggerButton = _this.getTooltipTriggerButton();

        if (tooltipTriggerButton) {
          tooltipTriggerButton.classList.remove(_this.options.classTooltipVisible);
        }
      }, 100);

      _this.getTooltipTriggerButton = function () {
        return _this.element.matches(_this.options.selectorTriggerButton) ? _this.element : _this.element.querySelector(_this.options.selectorTriggerButton);
      };

      _this.allowTooltipVisibility = function (_ref) {
        var visible = _ref.visible;

        var tooltipTriggerButton = _this.getTooltipTriggerButton();

        if (!tooltipTriggerButton) {
          return;
        }

        if (visible) {
          tooltipTriggerButton.classList.remove(_this.options.classTooltipHidden);
        } else {
          tooltipTriggerButton.classList.add(_this.options.classTooltipHidden);
        }
      };

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'keydown', function (event) {
        // ESC
        if (event.which === 27) {
          _this.allowTooltipVisibility({
            visible: false
          });

          var tooltipTriggerButton = _this.getTooltipTriggerButton();

          if (tooltipTriggerButton) {
            tooltipTriggerButton.classList.remove(_this.options.classTooltipVisible);
          }
        }
      }));

      _this.manage((0, _on["default"])(_this.element, 'mouseenter', function () {
        _this.tooltipFadeOut.cancel();

        _this.allowTooltipVisibility({
          visible: true
        });

        var tooltipTriggerButton = _this.getTooltipTriggerButton();

        if (tooltipTriggerButton) {
          tooltipTriggerButton.classList.add(_this.options.classTooltipVisible);
        }
      }));

      _this.manage((0, _on["default"])(_this.element, 'mouseleave', _this.tooltipFadeOut));

      _this.manage((0, _on["default"])(_this.element, 'focusin', function (event) {
        if ((0, _eventMatches["default"])(event, _this.options.selectorTriggerButton)) {
          _this.allowTooltipVisibility({
            visible: true
          });
        }
      }));

      return _this;
    }

    _createClass(TooltipSimple, null, [{
      key: "options",

      /**
       * The component options.
       *
       * If `options` is specified in the constructor,
       * {@linkcode TooltipSimple.create .create()},
       * or {@linkcode TooltipSimple.init .init()},
       * properties in this object are overriden for the instance being
       * created and how {@linkcode TooltipSimple.init .init()} works.
       * @property {string} selectorInit The CSS selector to find simple tooltip UIs.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-tooltip-definition],[data-tooltip-icon]',
          selectorTriggerButton: ".".concat(prefix, "--tooltip__trigger.").concat(prefix, "--tooltip--a11y"),
          classTooltipHidden: "".concat(prefix, "--tooltip--hidden"),
          classTooltipVisible: "".concat(prefix, "--tooltip--visible")
        };
      }
      /**
       * The map associating DOM element and simple tooltip UI instance.
       * @type {WeakMap}
       */

    }]);

    TooltipSimple.components = new WeakMap();
    return TooltipSimple;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  _exports["default"] = TooltipSimple;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/tooltip/tooltip.js":
/*!**************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/tooltip/tooltip.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-event */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-event.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-show-hide-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-show-hide-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../floating-menu/floating-menu */ "./node_modules/carbon-components/umd/components/floating-menu/floating-menu.js"), __webpack_require__(/*! ../../globals/js/misc/get-launching-details */ "./node_modules/carbon-components/umd/globals/js/misc/get-launching-details.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _settings, _mixin2, _createComponent, _initComponentByEvent, _eventedShowHideState, _handles, _floatingMenu, _getLaunchingDetails, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _settings = _interopRequireDefault(_settings);
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentByEvent = _interopRequireDefault(_initComponentByEvent);
  _eventedShowHideState = _interopRequireDefault(_eventedShowHideState);
  _handles = _interopRequireDefault(_handles);
  _floatingMenu = _interopRequireWildcard(_floatingMenu);
  _getLaunchingDetails = _interopRequireDefault(_getLaunchingDetails);
  _on = _interopRequireDefault(_on);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj["default"] = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /**
   * @param {Element} menuBody The menu body with the menu arrow.
   * @param {string} menuDirection Where the floating menu menu should be placed relative to the trigger button.
   * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
   * @private
   */


  var getMenuOffset = function getMenuOffset(menuBody, menuDirection) {
    var _DIRECTION_LEFT$DIREC, _DIRECTION_LEFT$DIREC2;

    var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
    var arrowPositionProp = (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_LEFT, 'right'), _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_TOP, 'bottom'), _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC, _floatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC)[menuDirection];
    var menuPositionAdjustmentProp = (_DIRECTION_LEFT$DIREC2 = {}, _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_LEFT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_TOP, 'top'), _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, _floatingMenu.DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC2)[menuDirection];
    var values = [arrowPositionProp, 'border-bottom-width'].reduce(function (o, name) {
      return _objectSpread(_objectSpread({}, o), {}, _defineProperty({}, name, Number((/^([\d-.]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
    }, {});
    var margin = 0;

    if (menuDirection !== _floatingMenu.DIRECTION_BOTTOM) {
      var style = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody);
      margin = Number((/^([\d-.]+)px$/.exec(style.getPropertyValue('margin-top')) || [])[1]);
    }

    values[arrowPositionProp] = values[arrowPositionProp] || -6; // IE, etc.

    if (Object.keys(values).every(function (name) {
      return !isNaN(values[name]);
    })) {
      var arrowPosition = values[arrowPositionProp],
          borderBottomWidth = values['border-bottom-width'];
      return _defineProperty({
        left: 0,
        top: 0
      }, menuPositionAdjustmentProp, Math.sqrt(Math.pow(borderBottomWidth, 2) * 2) - arrowPosition + margin * (menuDirection === _floatingMenu.DIRECTION_TOP ? 2 : 1));
    }

    return undefined;
  };
  /**
   * Key codes for allowed keys that will trigger opening a tooltip
   * @type {Integer[]}
   * @private
   */


  var allowedOpenKeys = [32, 13];

  var Tooltip = /*#__PURE__*/function (_mixin) {
    _inherits(Tooltip, _mixin);

    var _super = _createSuper(Tooltip);
    /**
     * Tooltip.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     */


    function Tooltip(element, options) {
      var _this;

      _classCallCheck(this, Tooltip);

      _this = _super.call(this, element, options);
      _this._hasContextMenu = false;

      _this._hookOn(element);

      return _this;
    }
    /**
     * A flag to detect if `oncontextmenu` event is fired right before `focus`/`blur` events.
     * @type {boolean}
     */


    _createClass(Tooltip, [{
      key: "createdByEvent",

      /**
       * A method called when this widget is created upon events.
       * @param {Event} event The event triggering the creation.
       */
      value: function createdByEvent(event) {
        var relatedTarget = event.relatedTarget,
            type = event.type,
            which = event.which;

        if (type === 'click' || allowedOpenKeys.includes(which)) {
          this._handleClick({
            relatedTarget: relatedTarget,
            type: type,
            details: (0, _getLaunchingDetails["default"])(event)
          });
        }
      }
      /**
       * Changes the shown/hidden state.
       * @param {string} state The new state.
       * @param {object} detail The detail of the event trigging this action.
       * @param {Function} callback Callback called when change in state completes.
       */

    }, {
      key: "changeState",
      value: function changeState(state, detail, callback) {
        if (!this.tooltip) {
          var tooltip = this.element.ownerDocument.querySelector(this.element.getAttribute(this.options.attribTooltipTarget));

          if (!tooltip) {
            throw new Error('Cannot find the target tooltip.');
          } // Lazily create a component instance for tooltip


          this.tooltip = _floatingMenu["default"].create(tooltip, {
            refNode: this.element,
            classShown: this.options.classShown,
            offset: this.options.objMenuOffset,
            contentNode: tooltip.querySelector(this.options.selectorContent)
          });

          this._hookOn(tooltip);

          this.children.push(this.tooltip);
        } // Delegates the action of changing state to the tooltip.
        // (And thus the before/after shown/hidden events are fired from the tooltip)


        this.tooltip.changeState(state, Object.assign(detail, {
          delegatorNode: this.element
        }), callback);
      }
      /**
       * Attaches event handlers to show the tooltip.
       * @param {Element} element The element to attach the events to.
       * @private
       */

    }, {
      key: "_hookOn",
      value: function _hookOn(element) {
        var _this2 = this;
        /**
         * Setup the _handleClick function for displaying a tooltip
         * @param {Event} evt - user initiated event
         * @param {Integer[]} [allowedKeys] - allowed key codes the user may press to open the tooltip
         * @private
         */


        var handleClickContextMenu = function handleClickContextMenu(evt, allowedKeys) {
          var relatedTarget = evt.relatedTarget,
              type = evt.type,
              which = evt.which; // Allow user to use `space` or `enter` to open tooltip

          if (typeof allowedKeys === 'undefined' || allowedKeys.includes(which)) {
            var hadContextMenu = _this2._hasContextMenu;
            _this2._hasContextMenu = type === 'contextmenu';

            _this2._handleClick({
              relatedTarget: relatedTarget,
              type: type,
              hadContextMenu: hadContextMenu,
              details: (0, _getLaunchingDetails["default"])(evt)
            });
          }
        };

        this.manage((0, _on["default"])(element, 'click', handleClickContextMenu, false));

        if (this.element.tagName !== 'BUTTON') {
          this.manage((0, _on["default"])(this.element, 'keydown', function (event) {
            handleClickContextMenu(event, allowedOpenKeys);
          }, false));
        }
      }
      /**
       * Handles click/focus events.
       * @param {object} params The parameters.
       * @param {Element} params.relatedTarget The element that focus went to. (For `blur` event)
       * @param {string} params.type The event type triggering this method.
       * @param {boolean} params.hadContextMenu
       * @param {object} params.details The event details.
       * @private
       */

    }, {
      key: "_handleClick",
      value: function _handleClick(_ref2) {
        var relatedTarget = _ref2.relatedTarget,
            type = _ref2.type,
            hadContextMenu = _ref2.hadContextMenu,
            details = _ref2.details;
        var state = {
          click: 'shown',
          keydown: 'shown',
          blur: 'hidden',
          touchleave: 'hidden',
          touchcancel: 'hidden'
        }[type];
        var shouldPreventClose;

        if (type === 'blur') {
          // Note: SVGElement in IE11 does not have `.contains()`
          var wentToSelf = relatedTarget && this.element.contains && this.element.contains(relatedTarget) || this.tooltip && this.tooltip.element.contains(relatedTarget);
          shouldPreventClose = hadContextMenu || wentToSelf;
        }

        if (!shouldPreventClose) {
          this.changeState(state, details);
        }
      }
    }], [{
      key: "options",
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-tooltip-trigger]',
          selectorContent: ".".concat(prefix, "--tooltip__content"),
          classShown: "".concat(prefix, "--tooltip--shown"),
          attribTooltipTarget: 'data-tooltip-target',
          objMenuOffset: getMenuOffset,
          initEventNames: ['click', 'keydown']
        };
      }
    }]);

    Tooltip.components = new WeakMap();
    return Tooltip;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentByEvent["default"], _eventedShowHideState["default"], _handles["default"]));

  var _default = Tooltip;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/ui-shell/header-nav.js":
/*!******************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/ui-shell/header-nav.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _mixin2, _createComponent, _initComponentBySearch, _handles, _on, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);
  _settings = _interopRequireDefault(_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var HeaderNav = /*#__PURE__*/function (_mixin) {
    _inherits(HeaderNav, _mixin);

    var _super = _createSuper(HeaderNav);
    /**
     * Header nav.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as an header nav.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorSubmenu] The CSS selector to find sub menus.
     * @param {string} [options.selectorSubmenuLink] The CSS selector to find the trigger buttons of sub menus.
     * @param {string} [options.selectorSubmenuItem] The CSS selector to find the sub menu items.
     */


    function HeaderNav(element, options) {
      var _this;

      _classCallCheck(this, HeaderNav);

      _this = _super.call(this, element, options);

      _this.getCurrentNavigation = function () {
        var focused = _this.element.ownerDocument.activeElement.closest(_this.options.selectorSubmenu);

        return focused && focused.nodeType === Node.ELEMENT_NODE ? focused.querySelector(_this.options.selectorSubmenuLink) : null;
      };

      _this.navigate = function (direction) {
        var items = toArray(_this.element.querySelectorAll(_this.options.selectorSubmenuLink));

        var start = _this.getCurrentNavigation();

        var getNextItem = function getNextItem(old) {
          var handleUnderflow = function handleUnderflow(index, length) {
            return index + (index >= 0 ? 0 : length);
          };

          var handleOverflow = function handleOverflow(index, length) {
            return index - (index < length ? 0 : length);
          }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


          var index = Math.max(items.indexOf(old) + direction, -1);
          return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
        };

        getNextItem(start).focus();
      };

      _this._handleKeyDown = function (event) {
        var keyCodes = {
          37: _this.constructor.NAVIGATE.BACKWARD,
          // left arrow
          39: _this.constructor.NAVIGATE.FORWARD // right arrow

        };
        var keyCodeMatches = keyCodes[event.which];

        if (keyCodeMatches) {
          _this.navigate(keyCodeMatches);
        }
      };

      _this.manage((0, _on["default"])(_this.element, 'keydown', _this._handleKeyDown));

      return _this;
    }
    /**
     * The map associating DOM element and Header instance.
     * @member HeaderNav.components
     * @type {WeakMap}
     */


    _createClass(HeaderNav, null, [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode HeaderNav.create .create()}, or
       * {@linkcode HeaderNav.init .init()},
       * properties in this object are overriden for the instance being create and
       * how {@linkcode HeaderNav.init .init()} works.
       * @member HeaderNav.options
       * @type {object}
       * @property {string} selectorInit The data attribute to find side navs.
       * @property {string} [selectorSubmenu] The CSS selector to find sub menus.
       * @property {string} [selectorSubmenuLink] The CSS selector to find the trigger buttons of sub menus.
       * @property {string} [selectorSubmenuItem] The CSS selector to find the sub menu items.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-header-nav]',
          selectorNavKind: '[data-header-nav-kind]',
          selectorSubmenu: ".".concat(prefix, "--header__submenu"),
          selectorSubmenuLink: ".".concat(prefix, "--header__menu-title"),
          selectorSubmenuItem: ".".concat(prefix, "--header__menu-title > .").concat(prefix, "--header__menu-item")
        };
      }
      /**
       * Enum for navigating backward/forward.
       * @readonly
       * @member Header.NAVIGATE
       * @type {object}
       * @property {number} BACKWARD Navigating backward.
       * @property {number} FORWARD Navigating forward.
       */

    }]);

    HeaderNav.components = new WeakMap();
    HeaderNav.NAVIGATE = {
      BACKWARD: -1,
      FORWARD: 1
    };
    return HeaderNav;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = HeaderNav;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/ui-shell/header-submenu.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/ui-shell/header-submenu.js ***!
  \**********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _mixin2, _createComponent, _initComponentBySearch, _handles, _on, _settings, _eventMatches) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);
  _settings = _interopRequireDefault(_settings);
  _eventMatches = _interopRequireDefault(_eventMatches);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var forEach = /* #__PURE__ */function () {
    return Array.prototype.forEach;
  }();

  var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  };

  var HeaderSubmenu = /*#__PURE__*/function (_mixin) {
    _inherits(HeaderSubmenu, _mixin);

    var _super = _createSuper(HeaderSubmenu);
    /**
     * Sub menus in header nav.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a submenu in header nav.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorTrigger] The CSS selector to find the trigger button.
     * @param {string} [options.selectorItem] The CSS selector to find the menu items.
     * @param {string} [options.attribExpanded] The attribute that represents the expanded/collapsed state.
     */


    function HeaderSubmenu(element, options) {
      var _this;

      _classCallCheck(this, HeaderSubmenu);

      _this = _super.call(this, element, options);

      _this._getAction = function (event) {
        var isFlyoutMenu = (0, _eventMatches["default"])(event, _this.options.selectorFlyoutMenu);

        if (isFlyoutMenu) {
          return _this.constructor.actions.DELEGATE_TO_FLYOUT_MENU;
        }

        switch (event.type) {
          case 'keydown':
            return {
              32: _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS,
              // space bar
              13: _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS,
              // enter
              27: _this.constructor.actions.CLOSE_SUBMENU // esc
              // possible arrow keys

            }[event.which];

          case 'click':
            return (0, _eventMatches["default"])(event, _this.options.selectorItem) ? _this.constructor.actions.CLOSE_SUBMENU : null;

          case 'blur':
          case 'focusout':
            {
              var isOfSelf = _this.element.contains(event.relatedTarget);

              return isOfSelf ? null : _this.constructor.actions.CLOSE_SUBMENU;
            }

          case 'mouseenter':
            return _this.constructor.actions.OPEN_SUBMENU;

          case 'mouseleave':
            return _this.constructor.actions.CLOSE_SUBMENU;

          default:
            return null;
        }
      };

      _this._getNewState = function (action) {
        var trigger = _this.element.querySelector(_this.options.selectorTrigger);

        var isExpanded = trigger.getAttribute(_this.options.attribExpanded) === 'true';

        switch (action) {
          case _this.constructor.actions.CLOSE_SUBMENU:
            return false;

          case _this.constructor.actions.OPEN_SUBMENU:
            return true;

          case _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS:
            return !isExpanded;

          default:
            return isExpanded;
        }
      };

      _this._setState = function (_ref) {
        var shouldBeExpanded = _ref.shouldBeExpanded,
            shouldFocusOnOpen = _ref.shouldFocusOnOpen;

        var trigger = _this.element.querySelector(_this.options.selectorTrigger);

        trigger.setAttribute(_this.options.attribExpanded, shouldBeExpanded);
        forEach.call(_this.element.querySelectorAll(_this.options.selectorItem), function (item) {
          item.tabIndex = shouldBeExpanded ? 0 : -1;
        }); // focus first submenu item

        if (shouldBeExpanded && shouldFocusOnOpen) {
          _this.element.querySelector(_this.options.selectorItem).focus();
        }
      };

      _this.getCurrentNavigation = function () {
        var focused = _this.element.ownerDocument.activeElement;
        return focused.nodeType === Node.ELEMENT_NODE && focused.matches(_this.options.selectorItem) ? focused : null;
      };

      _this.navigate = function (direction) {
        var items = toArray(_this.element.querySelectorAll(_this.options.selectorItem));

        var start = _this.getCurrentNavigation() || _this.element.querySelector(_this.options.selectorItemSelected);

        var getNextItem = function getNextItem(old) {
          var handleUnderflow = function handleUnderflow(index, length) {
            return index + (index >= 0 ? 0 : length);
          };

          var handleOverflow = function handleOverflow(index, length) {
            return index - (index < length ? 0 : length);
          }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


          var index = Math.max(items.indexOf(old) + direction, -1);
          return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
        };

        for (var current = getNextItem(start); current && current !== start; current = getNextItem(current)) {
          if (!current.matches(_this.options.selectorItemHidden) && !current.parentNode.matches(_this.options.selectorItemHidden) && !current.matches(_this.options.selectorItemSelected)) {
            current.focus();
            break;
          }
        }
      };

      _this._handleEvent = function (event) {
        var trigger = _this.element.querySelector(_this.options.selectorTrigger);

        if (!trigger) {
          return;
        }

        var action = _this._getAction(event);

        if (action) {
          var shouldBeExpanded = _this._getNewState(action);

          _this._setState({
            shouldBeExpanded: shouldBeExpanded
          });
        }
      };

      _this._handleKeyDown = function (event) {
        var trigger = _this.element.querySelector(_this.options.selectorTrigger);

        if (!trigger) {
          return;
        }

        var action = _this._getAction(event);

        if (event.which === 32) {
          event.preventDefault();
        }

        switch (action) {
          case _this.constructor.actions.DELEGATE_TO_FLYOUT_MENU:
            // currently we do not have a scenario that handles flyout menu
            // handleFlyoutMenu
            break;
          // currently we do not have a scenario that opens a submenu on keydown
          // case this.constructor.actions.OPEN_SUBMENU:

          case _this.constructor.actions.CLOSE_SUBMENU:
            {
              var shouldBeExpanded = _this._getNewState(action);

              _this._setState({
                shouldBeExpanded: shouldBeExpanded
              });

              break;
            }

          case _this.constructor.actions.TOGGLE_SUBMENU_WITH_FOCUS:
            {
              var _shouldBeExpanded = _this._getNewState(action);

              _this._setState({
                shouldBeExpanded: _shouldBeExpanded,
                shouldFocusOnOpen: true
              });

              break;
            }

          default:
            {
              var expanded = trigger.getAttribute(_this.options.attribExpanded) === 'true';

              if (expanded) {
                var direction = {
                  38: _this.constructor.NAVIGATE.BACKWARD,
                  40: _this.constructor.NAVIGATE.FORWARD
                }[event.which];

                switch (event.which) {
                  case 35:
                    {
                      // end key
                      event.preventDefault(); // prevents key from scrolling page

                      var menuItems = _this.element.querySelectorAll(_this.options.selectorItem);

                      var lastMenuItem = menuItems[menuItems.length - 1];

                      if (lastMenuItem) {
                        lastMenuItem.focus();
                      }

                      break;
                    }

                  case 36:
                    {
                      // home key
                      event.preventDefault(); // prevents key from scrolling page

                      var _this$element$querySe = _this.element.querySelectorAll(_this.options.selectorItem),
                          _this$element$querySe2 = _slicedToArray(_this$element$querySe, 1),
                          firstMenuItem = _this$element$querySe2[0];

                      if (firstMenuItem) {
                        firstMenuItem.focus();
                      }

                      break;
                    }

                  case 38: // up arrow

                  case 40:
                    // down arrow
                    _this.navigate(direction);

                    event.preventDefault(); // prevents keys from scrolling page

                    break;

                  default:
                    break;
                }
              }

              break;
            }
        }
      };

      var hasFocusOut = ('onfocusout' in window);

      _this.manage((0, _on["default"])(_this.element, hasFocusOut ? 'focusout' : 'blur', _this._handleEvent, !hasFocusOut));

      _this.manage((0, _on["default"])(_this.element, 'mouseenter', _this._handleEvent));

      _this.manage((0, _on["default"])(_this.element, 'mouseleave', _this._handleEvent));

      _this.manage((0, _on["default"])(_this.element, 'click', _this._handleEvent));

      _this.manage((0, _on["default"])(_this.element, 'keydown', _this._handleKeyDown));

      return _this;
    }
    /**
     * The map associating DOM element and HeaderSubmenu instance.
     * @member HeaderSubmenu.components
     * @type {WeakMap}
     */


    _createClass(HeaderSubmenu, null, [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode HeaderSubmenu.create .create()}, or
       * {@linkcode HeaderSubmenu.init .init()},
       * properties in this object are overriden for the instance being create and
       * how {@linkcode HeaderSubmenu.init .init()} works.
       * @member HeaderSubmenu.options
       * @type {object}
       * @property {string} selectorInit The data attribute to find side navs.
       * @property {string} [selectorTrigger] The CSS selector to find the trigger button.
       * @property {string} [selectorItem] The CSS selector to find the menu items.
       * @property {string} [attribExpanded] The attribute that represents the expanded/collapsed state.
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          selectorInit: '[data-header-submenu]',
          selectorTrigger: ".".concat(prefix, "--header__menu-title"),
          selectorItem: ".".concat(prefix, "--header__menu .").concat(prefix, "--header__menu-item"),
          attribExpanded: 'aria-expanded'
        };
      }
      /**
       * Enum for navigating backward/forward.
       * @readonly
       * @member HeaderSubmenu.NAVIGATE
       * @type {object}
       * @property {number} BACKWARD Navigating backward.
       * @property {number} FORWARD Navigating forward.
       */

    }]);

    HeaderSubmenu.components = new WeakMap();
    HeaderSubmenu.actions = {
      CLOSE_SUBMENU: 'CLOSE_SUBMENU',
      OPEN_SUBMENU: 'OPEN_SUBMENU',
      TOGGLE_SUBMENU_WITH_FOCUS: 'TOGGLE_SUBMENU_WITH_FOCUS',
      DELEGATE_TO_FLYOUT_MENU: 'DELEGATE_TO_FLYOUT_MENU'
    };
    HeaderSubmenu.NAVIGATE = {
      BACKWARD: -1,
      FORWARD: 1
    };
    return HeaderSubmenu;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = HeaderSubmenu;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/ui-shell/navigation-menu-panel.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/ui-shell/navigation-menu-panel.js ***!
  \*****************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-launcher */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-launcher.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-show-hide-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-show-hide-state.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/mixins/evented-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js"), __webpack_require__(/*! ../../globals/js/misc/toggle-attribute */ "./node_modules/carbon-components/umd/globals/js/misc/toggle-attribute.js"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _mixin2, _createComponent, _initComponentByLauncher, _eventedShowHideState, _handles, _eventedState, _toggleAttribute, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _initComponentByLauncher = _interopRequireDefault(_initComponentByLauncher);
  _eventedShowHideState = _interopRequireDefault(_eventedShowHideState);
  _handles = _interopRequireDefault(_handles);
  _eventedState = _interopRequireDefault(_eventedState);
  _toggleAttribute = _interopRequireDefault(_toggleAttribute);
  _settings = _interopRequireDefault(_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var NavigationMenuPanel = /*#__PURE__*/function (_mixin) {
    _inherits(NavigationMenuPanel, _mixin);

    var _super = _createSuper(NavigationMenuPanel);

    function NavigationMenuPanel() {
      var _this;

      _classCallCheck(this, NavigationMenuPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _this.createdByLauncher = function (event) {
        var isExpanded = !_this.element.hasAttribute('hidden');
        var newState = isExpanded ? 'collapsed' : 'expanded';
        _this.triggerButton = event.delegateTarget;

        _this.changeState(newState);
      };

      _this.shouldStateBeChanged = function (state) {
        return state === 'expanded' === _this.element.hasAttribute('hidden');
      };

      _this._changeState = function (state, callback) {
        (0, _toggleAttribute["default"])(_this.element, 'hidden', state !== 'expanded');

        if (_this.triggerButton) {
          if (state === 'expanded') {
            var focusableMenuItems = _this.element.querySelector(_this.options.selectorFocusableMenuItem);

            if (focusableMenuItems) {
              focusableMenuItems.focus();
            }
          }

          var label = state === 'expanded' ? _this.triggerButton.getAttribute(_this.options.attribLabelCollapse) : _this.triggerButton.getAttribute(_this.options.attribLabelExpand);

          _this.triggerButton.classList.toggle(_this.options.classNavigationMenuPanelHeaderActionActive, state === 'expanded');

          _this.triggerButton.setAttribute('aria-label', label);

          _this.triggerButton.setAttribute('title', label);
        }

        callback();
      };

      return _this;
    }

    _createClass(NavigationMenuPanel, null, [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode NavigationMenuPanel.create .create()}, or
       * {@linkcode NavigationMenuPanel.init .init()},
       * properties in this object are overriden for the instance being create and
       * how {@linkcode NavigationMenuPanel.init .init()} works.
       * @member NavigationMenuPanel.options
       * @type {object}
       * @property {string} selectorInit The CSS class to find popup navs.
       * @property {string} attribInitTarget The attribute name in the launcher buttons to find target popup nav.
       * @property {string[]} initEventNames The events that the component will handles
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return {
          initEventNames: ['click'],
          eventBeforeExpanded: 'navigation-menu-being-expanded',
          eventAfterExpanded: 'navigation-menu-expanded',
          eventBeforeCollapsed: 'navigation-menu-being-collapsed',
          eventAfterCollapsed: 'navigation-menu-collapsed',
          selectorFocusableMenuItem: ".".concat(prefix, "--navigation__category-toggle, .").concat(prefix, "--navigation-link"),
          classNavigationMenuPanelHeaderActionActive: "".concat(prefix, "--header__action--active"),
          attribLabelExpand: 'data-navigation-menu-panel-label-expand',
          attribLabelCollapse: 'data-navigation-menu-panel-label-collapse'
        };
      }
    }]);

    NavigationMenuPanel.components = new WeakMap();
    return NavigationMenuPanel;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentByLauncher["default"], _eventedShowHideState["default"], _handles["default"], _eventedState["default"]));

  _exports["default"] = NavigationMenuPanel;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/ui-shell/navigation-menu.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/ui-shell/navigation-menu.js ***!
  \***********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./navigation-menu-panel */ "./node_modules/carbon-components/umd/components/ui-shell/navigation-menu-panel.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _navigationMenuPanel, _on, _eventMatches, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _navigationMenuPanel = _interopRequireDefault(_navigationMenuPanel);
  _on = _interopRequireDefault(_on);
  _eventMatches = _interopRequireDefault(_eventMatches);
  _settings = _interopRequireDefault(_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var NavigationMenu = /*#__PURE__*/function (_NavigationMenuPanel) {
    _inherits(NavigationMenu, _NavigationMenuPanel);

    var _super = _createSuper(NavigationMenu);
    /**
     * A navigation menu
     * @extends NavigationMenuPanel
     * @param {HTMLElement} element The element working as a selector.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorInit] The CSS class to find navigation
     * menus.
     * @param {string} [options.attribInitTarget] The attribute name in the
     * launcher buttons to find target navigation menu.
     * @param {string} [options.selectorShellNavSubmenu] The CSS selector for a
     * nav submenu
     * @param {string} [options.selectorShellNavLink] The CSS selector for a nav
     * link
     * @param {string} [options.selectorShellNavLinkCurrent] The CSS selector for
     * the current nav link
     * @param {string} [options.selectorShellNavItem] The CSS selector for a nav
     * item
     * @param {string} [options.selectorShellNavCategory] The CSS selector for a
     * nav category
     * @param {string} [options.classShellNavItemActive] The CSS class for the
     * active nav item
     * @param {string} [options.classShellNavLinkCurrent] The CSS class for the
     * current lav link
     * @param {string} [options.classShellNavCategoryExpanded] The CSS class
     * for an expanded nav category
     */


    function NavigationMenu(element, options) {
      var _this;

      _classCallCheck(this, NavigationMenu);

      _this = _super.call(this, element, options);

      _this.getCurrentNavigation = function () {
        return _this.element.ownerDocument.activeElement;
      };

      _this.navigate = function (direction) {
        var items = _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorFocusableNavItems));

        var start = _this.getCurrentNavigation();

        var getNextItem = function getNextItem(old) {
          var handleUnderflow = function handleUnderflow(index, length) {
            return index + (index >= 0 ? 0 : length);
          };

          var handleOverflow = function handleOverflow(index, length) {
            return index - (index < length ? 0 : length);
          }; // `items.indexOf(old)` may be -1 (Scenario of no previous focus)


          var index = Math.max(items.indexOf(old) + direction, -1);
          return items[handleUnderflow(handleOverflow(index, items.length), items.length)];
        };

        getNextItem(start).focus();
      };

      _this._handleKeyDown = function (event) {
        // handle Esc
        var isExpanded = !_this.element.hasAttribute('hidden');

        if (event.which === 27 && isExpanded) {
          _this.changeState('collapsed');

          if (_this.triggerButton) {
            _this.triggerButton.focus();
          }

          return;
        } // handle up/down arrow keys


        var matchesNavSubmenu = (0, _eventMatches["default"])(event, _this.options.selectorShellNavSubmenu);
        var matchesShellNavLink = (0, _eventMatches["default"])(event, _this.options.selectorShellNavLink);

        if (!matchesNavSubmenu && !matchesShellNavLink) {
          return;
        }

        var navigationKeyCodes = {
          38: _this.constructor.NAVIGATE.BACKWARD,
          // up arrow
          40: _this.constructor.NAVIGATE.FORWARD // down arrow

        };
        var navigationKeyCodeMatches = navigationKeyCodes[event.which];

        if (navigationKeyCodeMatches) {
          event.preventDefault(); // prevent arrow keys from scrolling

          _this.navigate(navigationKeyCodeMatches);
        }
      };

      _this._handleFocusOut = function (event) {
        var nextTargetIsOfSelf = _this.element.contains(event.relatedTarget) || event.relatedTarget === _this.triggerButton || !event.relatedTarget;

        var oldTargetIsOfSelf = _this.element.contains(event.target);

        if (oldTargetIsOfSelf && !nextTargetIsOfSelf) {
          _this.changeState('collapsed');

          _this.triggerButton.focus();
        }
      };

      _this.changeNavSubmenuState = function (_ref) {
        var matchesNavSubmenu = _ref.matchesNavSubmenu,
            shouldBeCollapsed = _ref.shouldBeCollapsed;
        var shellNavCategory = matchesNavSubmenu.closest(_this.options.selectorShellNavCategory);

        if (!shellNavCategory) {
          return;
        }

        matchesNavSubmenu.setAttribute('aria-expanded', !shouldBeCollapsed);
        shellNavCategory.classList.toggle(_this.options.classShellNavCategoryExpanded);
        Array.prototype.forEach.call(shellNavCategory.querySelectorAll(_this.options.selectorShellNavLink), function (item) {
          item.tabIndex = !shouldBeCollapsed ? 0 : -1;
        });
      };

      _this._handleClick = function (event) {
        var matchesNavSubmenu = (0, _eventMatches["default"])(event, _this.options.selectorShellNavSubmenu);
        var matchesShellNavLink = (0, _eventMatches["default"])(event, _this.options.selectorShellNavLink);
        var matchesNestedShellNavLink = (0, _eventMatches["default"])(event, _this.options.selectorShellNestedNavLink);

        if (!matchesNavSubmenu && !matchesShellNavLink) {
          return;
        }

        if (matchesNestedShellNavLink) {
          _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorShellNavLinkCurrent)).forEach(function (el) {
            el.classList.remove(_this.options.classShellNavItemActive, _this.options.classShellNavLinkCurrent);
          });

          matchesNestedShellNavLink.closest(_this.options.selectorShellNavNestedCategory).classList.add(_this.options.classShellNavItemActive);
          return;
        }

        if (matchesNavSubmenu) {
          var isExpanded = matchesNavSubmenu.getAttribute('aria-expanded') === 'true';

          _this.changeNavSubmenuState({
            matchesNavSubmenu: matchesNavSubmenu,
            isExpanded: isExpanded
          });

          return;
        }

        if (matchesShellNavLink) {
          _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorShellNavLinkCurrent)).forEach(function (el) {
            el.classList.remove(_this.options.classShellNavItemActive, _this.options.classShellNavLinkCurrent);
          });

          matchesShellNavLink.closest(_this.options.selectorShellNavItem).classList.add(_this.options.classShellNavItemActive);
        }
      };

      _this.manage((0, _on["default"])(element, 'click', _this._handleClick));

      _this.manage((0, _on["default"])(element, 'keydown', _this._handleKeyDown));

      _this.manage((0, _on["default"])(_this.element.ownerDocument, 'click', function (event) {
        if (!_this.element.hasAttribute('hidden') && !_this.triggerButton.contains(event.target) && !_this.element.contains(event.target)) {
          _this.changeState('collapsed');
        }
      }));

      var hasFocusOut = ('onfocusout' in window);

      _this.manage((0, _on["default"])(_this.element, hasFocusOut ? 'focusout' : 'blur', _this._handleFocusOut, !hasFocusOut));

      return _this;
    }
    /**
     * @returns {Element} Currently highlighted element.
     */


    _createClass(NavigationMenu, null, [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode NavigationMenu.create .create()}, or
       * {@linkcode NavigationMenu.init .init()},
       * properties in this object are overriden for the instance being create and
       * how {@linkcode NavigationMenu.init .init()} works.
       * @member NavigationMenu.options
       * @type {object}
       * @property {string} selectorInit The CSS class to find navigation menus.
       * @property {string} attribInitTarget The attribute name in the
       * launcher buttons to find target navigation menu.
       * @property {string[]} initEventNames The events that the component
       * will handles
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return Object.assign(Object.create(_navigationMenuPanel["default"].options), {
          selectorInit: '[data-navigation-menu]',
          attribInitTarget: 'data-navigation-menu-target',
          selectorShellNavSubmenu: ".".concat(prefix, "--navigation__category-toggle"),
          selectorShellNavLink: ".".concat(prefix, "--navigation-link"),
          selectorShellNestedNavLink: ".".concat(prefix, "--navigation__category-item > a.").concat(prefix, "--navigation-link"),
          selectorShellNavLinkCurrent: ".".concat(prefix, "--navigation-item--active,.").concat(prefix, "--navigation__category-item--active"),
          selectorFocusableNavItems: "\n        .".concat(prefix, "--navigation__category-toggle,\n        .").concat(prefix, "--navigation-item > .").concat(prefix, "--navigation-link,\n        .").concat(prefix, "--navigation-link[tabindex=\"0\"]\n      "),
          selectorShellNavItem: ".".concat(prefix, "--navigation-item"),
          selectorShellNavCategory: ".".concat(prefix, "--navigation__category"),
          selectorShellNavNestedCategory: ".".concat(prefix, "--navigation__category-item"),
          classShellNavItemActive: "".concat(prefix, "--navigation-item--active"),
          classShellNavLinkCurrent: "".concat(prefix, "--navigation__category-item--active"),
          classShellNavCategoryExpanded: "".concat(prefix, "--navigation__category--expanded")
        });
      }
      /**
       * Enum for navigating backward/forward.
       * @readonly
       * @member NavigationMenuPanel.NAVIGATE
       * @type {object}
       * @property {number} BACKWARD Navigating backward.
       * @property {number} FORWARD Navigating forward.
       */

    }]);

    NavigationMenu.components = new WeakMap();
    NavigationMenu.NAVIGATE = {
      BACKWARD: -1,
      FORWARD: 1
    };
    return NavigationMenu;
  }(_navigationMenuPanel["default"]);

  _exports["default"] = NavigationMenu;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/ui-shell/product-switcher.js":
/*!************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/ui-shell/product-switcher.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./navigation-menu-panel */ "./node_modules/carbon-components/umd/components/ui-shell/navigation-menu-panel.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/misc/on-focus-by-keyboard */ "./node_modules/carbon-components/umd/globals/js/misc/on-focus-by-keyboard.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _navigationMenuPanel, _on, _settings, _onFocusByKeyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _navigationMenuPanel = _interopRequireDefault(_navigationMenuPanel);
  _on = _interopRequireDefault(_on);
  _settings = _interopRequireDefault(_settings);
  _onFocusByKeyboard = _interopRequireDefault(_onFocusByKeyboard);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var seq = 0;

  var ProductSwitcher = /*#__PURE__*/function (_NavigationMenuPanel) {
    _inherits(ProductSwitcher, _NavigationMenuPanel);

    var _super = _createSuper(ProductSwitcher);
    /**
     * A navigation menu.
     * @extends NavigationMenuPanel
     * @param {HTMLElement} element The element working as a selector.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorInit] The CSS class to find product
     * switchers
     * @param {string} [options.attribInitTarget] The attribute name in the
     * launcher buttons to find target product switcher
     * @param {string} [options.classProductSwitcherExpanded] The CSS class
     * for an expanded product switcher
     */


    function ProductSwitcher(element, options) {
      var _this;

      _classCallCheck(this, ProductSwitcher);

      _this = _super.call(this, element, options);
      _this.current = '';
      _this.triggerButtonIds = new Set();

      _this._handleFocusOut = function (event) {
        if (_this.element.contains(event.relatedTarget)) {
          return;
        }

        var currentTriggerButton = _this.element.ownerDocument.getElementById(_this.current);

        if (currentTriggerButton && event.relatedTarget && !event.relatedTarget.matches(_this.options.selectorFloatingMenus)) {
          currentTriggerButton.focus();
        }
      };

      _this._handleKeyDown = function (event) {
        var isExpanded = !_this.element.hasAttribute('hidden');

        if (event.which === 27 && isExpanded) {
          var triggerButton = _this.current;

          _this.changeState(_this.constructor.SELECT_NONE);

          _this.element.ownerDocument.getElementById(triggerButton).focus();
        }
      };

      _this.createdByLauncher = function (event) {
        var isExpanded = _this.element.classList.contains(_this.options.classProductSwitcherExpanded);

        var launcher = event.delegateTarget;

        if (!launcher.id) {
          launcher.id = "__carbon-product-switcher-launcher-".concat(seq++);
        }

        var current = launcher.id;

        _this.changeState(isExpanded && _this.current === current ? _this.constructor.SELECT_NONE : current);
      };

      _this.shouldStateBeChanged = function (current) {
        return _this.current !== current;
      };

      _this._changeState = function (state, callback) {
        _this.element.classList.toggle(_this.options.classProductSwitcherExpanded, state !== _this.constructor.SELECT_NONE);

        _this.current = state;

        if (_this.current !== _this.constructor.SELECT_NONE) {
          _this.triggerButtonIds.add(_this.current);
        } // deactivate all other trigger buttons


        _this.triggerButtonIds.forEach(function (id) {
          var button = _this.element.ownerDocument.getElementById(id);

          var label = button.getAttribute(_this.options.attribLabelExpand);
          button.classList.remove(_this.options.classNavigationMenuPanelHeaderActionActive);
          button.setAttribute('aria-label', label);
          button.setAttribute('title', label);
        }); // set active trigger button attributes


        var currentTriggerButton = _this.element.ownerDocument.getElementById(_this.current);

        if (currentTriggerButton) {
          var label = currentTriggerButton.getAttribute(_this.options.attribLabelCollapse);
          currentTriggerButton.classList.toggle(_this.options.classNavigationMenuPanelHeaderActionActive);
          currentTriggerButton.setAttribute('aria-label', label);
          currentTriggerButton.setAttribute('title', label);
        }

        if (state !== _this.constructor.SELECT_NONE) {
          _this.element.setAttribute('tabindex', '0');

          _this.element.focus();
        } else {
          _this.element.setAttribute('tabindex', '-1');
        }

        callback();
      };

      _this.manage((0, _on["default"])(element, 'keydown', _this._handleKeyDown));

      _this.manage((0, _onFocusByKeyboard["default"])(element, 'blur', _this._handleFocusOut));

      return _this;
    }
    /**
     * id of currently active trigger button
     * @type {string}
     */


    _createClass(ProductSwitcher, [{
      key: "release",
      value: function release() {
        this.triggerButtonIds.clear();
        return _get(_getPrototypeOf(ProductSwitcher.prototype), "release", this).call(this);
      }
      /**
       * The map associating DOM element and ProductSwitcher instance.
       * @member ProductSwitcher.components
       * @type {WeakMap}
       */

    }], [{
      key: "options",

      /**
       * The component options.
       * If `options` is specified in the constructor,
       * {@linkcode ProductSwitcher.create .create()}, or
       * {@linkcode ProductSwitcher.init .init()},
       * properties in this object are overriden for the instance being create and
       * how {@linkcode ProductSwitcher.init .init()} works.
       * @member ProductSwitcher.options
       * @type {object}
       * @property {string} selectorInit The CSS class to find popup navs.
       * @property {string} attribInitTarget The attribute name in the
       * launcher buttons to find target popup nav.
       * @property {string[]} initEventNames The events that the component
       * will handles
       */
      get: function get() {
        var prefix = _settings["default"].prefix;
        return Object.assign(Object.create(_navigationMenuPanel["default"].options), {
          selectorInit: '[data-product-switcher]',
          selectorFloatingMenus: "\n        .".concat(prefix, "--overflow-menu-options,\n        .").concat(prefix, "--overflow-menu-options *,\n        .").concat(prefix, "--tooltip,\n        .").concat(prefix, "--tooltip *,\n        .flatpicker-calendar,\n        .flatpicker-calendar *\n        "),
          attribInitTarget: 'data-product-switcher-target',
          classProductSwitcherExpanded: "".concat(prefix, "--panel--expanded")
        });
      }
    }]);

    ProductSwitcher.SELECT_NONE = '__carbon-product-switcher-launcher-NONE';
    ProductSwitcher.components = new WeakMap();
    return ProductSwitcher;
  }(_navigationMenuPanel["default"]);

  var _default = ProductSwitcher;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/components/ui-shell/side-nav.js":
/*!****************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/components/ui-shell/side-nav.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../globals/js/misc/mixin */ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js"), __webpack_require__(/*! ../../globals/js/mixins/create-component */ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js"), __webpack_require__(/*! ../../globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js"), __webpack_require__(/*! ../../globals/js/mixins/init-component-by-search */ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js"), __webpack_require__(/*! ../../globals/js/mixins/handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js"), __webpack_require__(/*! ../../globals/js/misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js"), __webpack_require__(/*! ../../globals/js/misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _mixin2, _createComponent, _settings, _initComponentBySearch, _handles, _on, _eventMatches) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _mixin2 = _interopRequireDefault(_mixin2);
  _createComponent = _interopRequireDefault(_createComponent);
  _settings = _interopRequireDefault(_settings);
  _initComponentBySearch = _interopRequireDefault(_initComponentBySearch);
  _handles = _interopRequireDefault(_handles);
  _on = _interopRequireDefault(_on);
  _eventMatches = _interopRequireDefault(_eventMatches);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  var prefix = _settings["default"].prefix;

  var SideNav = /*#__PURE__*/function (_mixin) {
    _inherits(SideNav, _mixin);

    var _super = _createSuper(SideNav);
    /**
     * The map associating DOM element and copy button UI instance.
     * @member SideNav.components
     * @type {WeakMap}
     */

    /**
     * Side nav.
     * @extends CreateComponent
     * @extends InitComponentBySearch
     * @extends Handles
     * @param {HTMLElement} element The element working as a side nav.
     * @param {object} [options] The component options.
     * @param {string} [options.selectorSideNavToggle]
     *   The CSS selector to find the toggle button.
     * @param {string} [options.selectorSideNavSubmenu] The CSS selector to find the trigger buttons for sub nav items.
     * @param {string} [options.selectorSideNavItem] The CSS selector to find the nav items.
     * @param {string} [options.selectorSideNavLink] The CSS selector to find the interactive potions in non-nested nav items.
     * @param {string} [options.selectorSideNavLinkCurrent]
     *   The CSS selector to find the interactive potion in active non-nested nav item.
     * @param {string} [options.classSideNavExpanded] The CSS class for the expanded state.
     * @param {string} [options.classSideNavItemActive]
     *   The CSS class for the active/inactive state for nav items.
     * @param {string} [options.classSideNavLinkCurrent]
     *   The CSS class for the active/inactive state of the interactive potion in non-nested nav items.
     */


    function SideNav(element, options) {
      var _this;

      _classCallCheck(this, SideNav);

      _this = _super.call(this, element, options);

      _this._handleClick = function (evt) {
        var matchesToggle = (0, _eventMatches["default"])(evt, _this.options.selectorSideNavToggle);
        var matchesNavSubmenu = (0, _eventMatches["default"])(evt, _this.options.selectorSideNavSubmenu);
        var matchesSideNavLink = (0, _eventMatches["default"])(evt, _this.options.selectorSideNavLink);

        if (!matchesToggle && !matchesNavSubmenu && !matchesSideNavLink) {
          return;
        }

        if (matchesToggle) {
          _this.changeState(!_this.isNavExpanded() ? _this.constructor.state.EXPANDED : _this.constructor.state.COLLAPSED);

          return;
        }

        if (matchesNavSubmenu) {
          var isSubmenuExpanded = matchesNavSubmenu.getAttribute('aria-expanded') === 'true';
          matchesNavSubmenu.setAttribute('aria-expanded', "".concat(!isSubmenuExpanded));
          return;
        }

        if (matchesSideNavLink) {
          _toConsumableArray(_this.element.querySelectorAll(_this.options.selectorSideNavLinkCurrent)).forEach(function (el) {
            el.classList.remove(_this.options.classSideNavItemActive, _this.options.classSideNavLinkCurrent);
            el.removeAttribute('aria-current');
          });

          matchesSideNavLink.classList.add(_this.options.classSideNavLinkCurrent);
          var closestSideNavItem = matchesSideNavLink.closest(_this.options.selectorSideNavItem);

          if (closestSideNavItem) {
            closestSideNavItem.classList.add(_this.options.classSideNavItemActive);
          }
        }
      };

      _this.manage((0, _on["default"])(element, 'click', _this._handleClick));

      return _this;
    }
    /**
     * Enum for toggling side nav visibility
     * @readonly
     * @member SideNav.state
     * @type {object}
     * @property {string} EXPANDED Opening/visible
     * @property {string} COLLAPSED Closing/hidden
     */


    _createClass(SideNav, [{
      key: "isNavExpanded",

      /**
       * @returns {boolean} `true` if the nav is expanded.
       */
      value: function isNavExpanded() {
        return this.element.classList.contains(this.options.classSideNavExpanded);
      }
      /**
       * Changes the expanded/collapsed state.
       */

    }, {
      key: "changeState",
      value: function changeState(state) {
        this.element.classList.toggle(this.options.classSideNavExpanded, state === this.constructor.state.EXPANDED);
      }
    }]);

    SideNav.components = new WeakMap();
    SideNav.state = {
      EXPANDED: 'expanded',
      COLLAPSED: 'collapsed'
    };
    SideNav.options = {
      selectorInit: '[data-side-nav]',
      selectorSideNavToggle: ".".concat(prefix, "--side-nav__toggle"),
      selectorSideNavSubmenu: ".".concat(prefix, "--side-nav__submenu"),
      selectorSideNavItem: ".".concat(prefix, "--side-nav__item"),
      selectorSideNavLink: ".".concat(prefix, "--side-nav__link"),
      selectorSideNavLinkCurrent: "[aria-current=\"page\"],.".concat(prefix, "--side-nav__link--current,.").concat(prefix, "--side-nav__item--active"),
      classSideNavExpanded: "".concat(prefix, "--side-nav--expanded"),
      classSideNavItemActive: "".concat(prefix, "--side-nav__item--active"),
      classSideNavLinkCurrent: "".concat(prefix, "--side-nav__link--current")
    };
    return SideNav;
  }((0, _mixin2["default"])(_createComponent["default"], _initComponentBySearch["default"], _handles["default"]));

  var _default = SideNav;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/components.js":
/*!*********************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/components.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../components/checkbox/checkbox */ "./node_modules/carbon-components/umd/components/checkbox/checkbox.js"), __webpack_require__(/*! ../../components/file-uploader/file-uploader */ "./node_modules/carbon-components/umd/components/file-uploader/file-uploader.js"), __webpack_require__(/*! ../../components/content-switcher/content-switcher */ "./node_modules/carbon-components/umd/components/content-switcher/content-switcher.js"), __webpack_require__(/*! ../../components/tabs/tabs */ "./node_modules/carbon-components/umd/components/tabs/tabs.js"), __webpack_require__(/*! ../../components/overflow-menu/overflow-menu */ "./node_modules/carbon-components/umd/components/overflow-menu/overflow-menu.js"), __webpack_require__(/*! ../../components/modal/modal */ "./node_modules/carbon-components/umd/components/modal/modal.js"), __webpack_require__(/*! ../../components/loading/loading */ "./node_modules/carbon-components/umd/components/loading/loading.js"), __webpack_require__(/*! ../../components/inline-loading/inline-loading */ "./node_modules/carbon-components/umd/components/inline-loading/inline-loading.js"), __webpack_require__(/*! ../../components/dropdown/dropdown */ "./node_modules/carbon-components/umd/components/dropdown/dropdown.js"), __webpack_require__(/*! ../../components/number-input/number-input */ "./node_modules/carbon-components/umd/components/number-input/number-input.js"), __webpack_require__(/*! ../../components/data-table-v2/data-table-v2 */ "./node_modules/carbon-components/umd/components/data-table-v2/data-table-v2.js"), __webpack_require__(/*! ../../components/data-table/data-table */ "./node_modules/carbon-components/umd/components/data-table/data-table.js"), __webpack_require__(/*! ../../components/date-picker/date-picker */ "./node_modules/carbon-components/umd/components/date-picker/date-picker.js"), __webpack_require__(/*! ../../components/pagination/pagination */ "./node_modules/carbon-components/umd/components/pagination/pagination.js"), __webpack_require__(/*! ../../components/search/search */ "./node_modules/carbon-components/umd/components/search/search.js"), __webpack_require__(/*! ../../components/accordion/accordion */ "./node_modules/carbon-components/umd/components/accordion/accordion.js"), __webpack_require__(/*! ../../components/copy-button/copy-button */ "./node_modules/carbon-components/umd/components/copy-button/copy-button.js"), __webpack_require__(/*! ../../components/notification/notification */ "./node_modules/carbon-components/umd/components/notification/notification.js"), __webpack_require__(/*! ../../components/toolbar/toolbar */ "./node_modules/carbon-components/umd/components/toolbar/toolbar.js"), __webpack_require__(/*! ../../components/tooltip/tooltip */ "./node_modules/carbon-components/umd/components/tooltip/tooltip.js"), __webpack_require__(/*! ../../components/tooltip/tooltip--simple */ "./node_modules/carbon-components/umd/components/tooltip/tooltip--simple.js"), __webpack_require__(/*! ../../components/progress-indicator/progress-indicator */ "./node_modules/carbon-components/umd/components/progress-indicator/progress-indicator.js"), __webpack_require__(/*! ../../components/floating-menu/floating-menu */ "./node_modules/carbon-components/umd/components/floating-menu/floating-menu.js"), __webpack_require__(/*! ../../components/structured-list/structured-list */ "./node_modules/carbon-components/umd/components/structured-list/structured-list.js"), __webpack_require__(/*! ../../components/slider/slider */ "./node_modules/carbon-components/umd/components/slider/slider.js"), __webpack_require__(/*! ../../components/tile/tile */ "./node_modules/carbon-components/umd/components/tile/tile.js"), __webpack_require__(/*! ../../components/code-snippet/code-snippet */ "./node_modules/carbon-components/umd/components/code-snippet/code-snippet.js"), __webpack_require__(/*! ../../components/text-input/text-input */ "./node_modules/carbon-components/umd/components/text-input/text-input.js"), __webpack_require__(/*! ../../components/ui-shell/side-nav */ "./node_modules/carbon-components/umd/components/ui-shell/side-nav.js"), __webpack_require__(/*! ../../components/ui-shell/header-submenu */ "./node_modules/carbon-components/umd/components/ui-shell/header-submenu.js"), __webpack_require__(/*! ../../components/ui-shell/header-nav */ "./node_modules/carbon-components/umd/components/ui-shell/header-nav.js"), __webpack_require__(/*! ../../components/ui-shell/navigation-menu */ "./node_modules/carbon-components/umd/components/ui-shell/navigation-menu.js"), __webpack_require__(/*! ../../components/ui-shell/product-switcher */ "./node_modules/carbon-components/umd/components/ui-shell/product-switcher.js"), __webpack_require__(/*! ../../components/pagination-nav/pagination-nav */ "./node_modules/carbon-components/umd/components/pagination-nav/pagination-nav.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _checkbox, _fileUploader, _contentSwitcher, _tabs, _overflowMenu, _modal, _loading, _inlineLoading, _dropdown, _numberInput, _dataTableV, _dataTable, _datePicker, _pagination, _search, _accordion, _copyButton, _notification, _toolbar, _tooltip, _tooltipSimple, _progressIndicator, _floatingMenu, _structuredList, _slider, _tile, _codeSnippet, _textInput, _sideNav, _headerSubmenu, _headerNav, _navigationMenu, _productSwitcher, _paginationNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Checkbox", {
    enumerable: true,
    get: function get() {
      return _checkbox["default"];
    }
  });
  Object.defineProperty(_exports, "FileUploader", {
    enumerable: true,
    get: function get() {
      return _fileUploader["default"];
    }
  });
  Object.defineProperty(_exports, "ContentSwitcher", {
    enumerable: true,
    get: function get() {
      return _contentSwitcher["default"];
    }
  });
  Object.defineProperty(_exports, "Tab", {
    enumerable: true,
    get: function get() {
      return _tabs["default"];
    }
  });
  Object.defineProperty(_exports, "OverflowMenu", {
    enumerable: true,
    get: function get() {
      return _overflowMenu["default"];
    }
  });
  Object.defineProperty(_exports, "Modal", {
    enumerable: true,
    get: function get() {
      return _modal["default"];
    }
  });
  Object.defineProperty(_exports, "Loading", {
    enumerable: true,
    get: function get() {
      return _loading["default"];
    }
  });
  Object.defineProperty(_exports, "InlineLoading", {
    enumerable: true,
    get: function get() {
      return _inlineLoading["default"];
    }
  });
  Object.defineProperty(_exports, "Dropdown", {
    enumerable: true,
    get: function get() {
      return _dropdown["default"];
    }
  });
  Object.defineProperty(_exports, "NumberInput", {
    enumerable: true,
    get: function get() {
      return _numberInput["default"];
    }
  });
  Object.defineProperty(_exports, "DataTableV2", {
    enumerable: true,
    get: function get() {
      return _dataTableV["default"];
    }
  });
  Object.defineProperty(_exports, "DataTable", {
    enumerable: true,
    get: function get() {
      return _dataTable["default"];
    }
  });
  Object.defineProperty(_exports, "DatePicker", {
    enumerable: true,
    get: function get() {
      return _datePicker["default"];
    }
  });
  Object.defineProperty(_exports, "Pagination", {
    enumerable: true,
    get: function get() {
      return _pagination["default"];
    }
  });
  Object.defineProperty(_exports, "Search", {
    enumerable: true,
    get: function get() {
      return _search["default"];
    }
  });
  Object.defineProperty(_exports, "Accordion", {
    enumerable: true,
    get: function get() {
      return _accordion["default"];
    }
  });
  Object.defineProperty(_exports, "CopyButton", {
    enumerable: true,
    get: function get() {
      return _copyButton["default"];
    }
  });
  Object.defineProperty(_exports, "Notification", {
    enumerable: true,
    get: function get() {
      return _notification["default"];
    }
  });
  Object.defineProperty(_exports, "Toolbar", {
    enumerable: true,
    get: function get() {
      return _toolbar["default"];
    }
  });
  Object.defineProperty(_exports, "Tooltip", {
    enumerable: true,
    get: function get() {
      return _tooltip["default"];
    }
  });
  Object.defineProperty(_exports, "TooltipSimple", {
    enumerable: true,
    get: function get() {
      return _tooltipSimple["default"];
    }
  });
  Object.defineProperty(_exports, "ProgressIndicator", {
    enumerable: true,
    get: function get() {
      return _progressIndicator["default"];
    }
  });
  Object.defineProperty(_exports, "FloatingMenu", {
    enumerable: true,
    get: function get() {
      return _floatingMenu["default"];
    }
  });
  Object.defineProperty(_exports, "StructuredList", {
    enumerable: true,
    get: function get() {
      return _structuredList["default"];
    }
  });
  Object.defineProperty(_exports, "Slider", {
    enumerable: true,
    get: function get() {
      return _slider["default"];
    }
  });
  Object.defineProperty(_exports, "Tile", {
    enumerable: true,
    get: function get() {
      return _tile["default"];
    }
  });
  Object.defineProperty(_exports, "CodeSnippet", {
    enumerable: true,
    get: function get() {
      return _codeSnippet["default"];
    }
  });
  Object.defineProperty(_exports, "TextInput", {
    enumerable: true,
    get: function get() {
      return _textInput["default"];
    }
  });
  Object.defineProperty(_exports, "SideNav", {
    enumerable: true,
    get: function get() {
      return _sideNav["default"];
    }
  });
  Object.defineProperty(_exports, "HeaderSubmenu", {
    enumerable: true,
    get: function get() {
      return _headerSubmenu["default"];
    }
  });
  Object.defineProperty(_exports, "HeaderNav", {
    enumerable: true,
    get: function get() {
      return _headerNav["default"];
    }
  });
  Object.defineProperty(_exports, "NavigationMenu", {
    enumerable: true,
    get: function get() {
      return _navigationMenu["default"];
    }
  });
  Object.defineProperty(_exports, "ProductSwitcher", {
    enumerable: true,
    get: function get() {
      return _productSwitcher["default"];
    }
  });
  Object.defineProperty(_exports, "PaginationNav", {
    enumerable: true,
    get: function get() {
      return _paginationNav["default"];
    }
  });
  _checkbox = _interopRequireDefault(_checkbox);
  _fileUploader = _interopRequireDefault(_fileUploader);
  _contentSwitcher = _interopRequireDefault(_contentSwitcher);
  _tabs = _interopRequireDefault(_tabs);
  _overflowMenu = _interopRequireDefault(_overflowMenu);
  _modal = _interopRequireDefault(_modal);
  _loading = _interopRequireDefault(_loading);
  _inlineLoading = _interopRequireDefault(_inlineLoading);
  _dropdown = _interopRequireDefault(_dropdown);
  _numberInput = _interopRequireDefault(_numberInput);
  _dataTableV = _interopRequireDefault(_dataTableV);
  _dataTable = _interopRequireDefault(_dataTable);
  _datePicker = _interopRequireDefault(_datePicker);
  _pagination = _interopRequireDefault(_pagination);
  _search = _interopRequireDefault(_search);
  _accordion = _interopRequireDefault(_accordion);
  _copyButton = _interopRequireDefault(_copyButton);
  _notification = _interopRequireDefault(_notification);
  _toolbar = _interopRequireDefault(_toolbar);
  _tooltip = _interopRequireDefault(_tooltip);
  _tooltipSimple = _interopRequireDefault(_tooltipSimple);
  _progressIndicator = _interopRequireDefault(_progressIndicator);
  _floatingMenu = _interopRequireDefault(_floatingMenu);
  _structuredList = _interopRequireDefault(_structuredList);
  _slider = _interopRequireDefault(_slider);
  _tile = _interopRequireDefault(_tile);
  _codeSnippet = _interopRequireDefault(_codeSnippet);
  _textInput = _interopRequireDefault(_textInput);
  _sideNav = _interopRequireDefault(_sideNav);
  _headerSubmenu = _interopRequireDefault(_headerSubmenu);
  _headerNav = _interopRequireDefault(_headerNav);
  _navigationMenu = _interopRequireDefault(_navigationMenu);
  _productSwitcher = _interopRequireDefault(_productSwitcher);
  _paginationNav = _interopRequireDefault(_paginationNav);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/event-matches.js ***!
  \*****************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = eventMatches;
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * @param {Event} event The event.
   * @param {string} selector The selector.
   * @returns {Element}
   *   The closest ancestor of the event target (or the event target itself) which matches the selectors given in parameter.
   */

  function eventMatches(event, selector) {
    // <svg> in IE does not have `Element#msMatchesSelector()` (that should be copied to `Element#matches()` by a polyfill).
    // Also a weird behavior is seen in IE where DOM tree seems broken when `event.target` is on <svg>.
    // Therefore this function simply returns `undefined` when `event.target` is on <svg>.
    var target = event.target,
        currentTarget = event.currentTarget;

    if (typeof target.matches === 'function') {
      if (target.matches(selector)) {
        // If event target itself matches the given selector, return it
        return target;
      }

      if (target.matches("".concat(selector, " *"))) {
        var closest = target.closest(selector);

        if ((currentTarget.nodeType === Node.DOCUMENT_NODE ? currentTarget.documentElement : currentTarget).contains(closest)) {
          return closest;
        }
      }
    }

    return undefined;
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/get-launching-details.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/get-launching-details.js ***!
  \*************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = getLaunchingDetails;
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function getLaunchingDetails(evt) {
    if (!evt || typeof evt === 'function') {
      return {
        launchingElement: null,
        launchingEvent: null
      };
    }

    var launchingElement = evt.delegateTarget || evt.currentTarget || evt;
    var launchingEvent = evt.currentTarget && evt;

    if (launchingElement && !launchingElement.nodeType) {
      throw new TypeError('DOM Node should be given for launching element.');
    }

    if (launchingEvent && !launchingEvent.type) {
      throw new TypeError('DOM event should be given for launching event.');
    }

    return {
      launchingElement: launchingElement,
      launchingEvent: launchingEvent
    };
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/mixin.js":
/*!*********************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/mixin.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = mixin;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * @param {Array} a An array.
   * @returns {Array} The flattened version of the given array.
   */


  function flatten(a) {
    return a.reduce(function (result, item) {
      if (Array.isArray(item)) {
        result.push.apply(result, _toConsumableArray(flatten(item)));
      } else {
        result.push(item);
      }

      return result;
    }, []);
  }
  /**
   * An interface for defining mix-in classes. Used with {@link mixin}.
   * @function mixinfn
   * @param {Class} ToMix The class to mix.
   * @returns {Class} The class mixed-in with the given ToMix class.
   */

  /**
   * @function mixin
   * @param {...mixinfn} mixinfns The functions generating mix-ins.
   * @returns {Class} The class generated with the given mix-ins.
   */


  function mixin() {
    for (var _len = arguments.length, mixinfns = new Array(_len), _key = 0; _key < _len; _key++) {
      mixinfns[_key] = arguments[_key];
    }

    return flatten(mixinfns).reduce(function (Class, mixinfn) {
      return mixinfn(Class);
    }, /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);
      }

      return _class;
    }());
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/on-focus-by-keyboard.js":
/*!************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/on-focus-by-keyboard.js ***!
  \************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = onFocusByKeyboard;
  /**
   * Differentiate between keyboard and mouse-triggered focusout/blur events
   * @param {Element} node  The element to attach event listeners to
   * @param {string} name The event name to listen to
   * @param {Function} callback The callback function to invoke
   * @returns {Handle} The handle to release the attached event handler
   */

  function onFocusByKeyboard(node, name, callback) {
    var hasFocusout = ('onfocusout' in window);
    var focusinEventName = hasFocusout ? 'focusin' : 'focus';
    var focusoutEventName = hasFocusout ? 'focusout' : 'blur';
    /**
     * Event types supported by this function
     * @type {object<string, string>}
     */

    var supportedEvents = {
      focus: focusinEventName,
      blur: focusoutEventName
    };
    var eventName = supportedEvents[name];

    if (!eventName) {
      throw new Error('Unsupported event!');
    }

    var clicked;

    var handleMousedown = function handleMousedown() {
      clicked = true;
      requestAnimationFrame(function () {
        clicked = false;
      });
    };

    var handleFocusin = function handleFocusin(evt) {
      if (!clicked) {
        callback(evt);
      }
    };

    node.ownerDocument.addEventListener('mousedown', handleMousedown);
    node.addEventListener(eventName, handleFocusin, !hasFocusout);
    return {
      release: function release() {
        if (handleFocusin) {
          node.removeEventListener(eventName, handleFocusin, !hasFocusout);
          handleFocusin = null;
        }

        if (handleMousedown) {
          node.ownerDocument.removeEventListener('mousedown', handleMousedown);
          handleMousedown = null;
        }

        return null;
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/on.js":
/*!******************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/on.js ***!
  \******************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = on;
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function on(element) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    element.addEventListener.apply(element, args);
    return {
      release: function release() {
        element.removeEventListener.apply(element, args);
        return null;
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/resize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/resize.js ***!
  \**********************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */
  // mdn resize function

  var optimizedResize = /* #__PURE__ */function optimizedResize() {
    var callbacks = [];
    var running = false; // run the actual callbacks

    function runCallbacks() {
      callbacks.forEach(function (callback) {
        callback();
      });
      running = false;
    } // fired on resize event


    function resize() {
      if (!running) {
        running = true;
        window.requestAnimationFrame(runCallbacks);
      }
    } // adds callback to loop


    function addCallback(callback) {
      if (callback) {
        var index = callbacks.indexOf(callback);

        if (index < 0) {
          callbacks.push(callback);
        }
      }
    }

    return {
      // public method to add additional callback
      add: function add(callback) {
        if (!callbacks.length) {
          window.addEventListener('resize', resize);
        }

        addCallback(callback);
        return {
          release: function release() {
            var index = callbacks.indexOf(callback);

            if (index >= 0) {
              callbacks.splice(index, 1);
            }
          }
        };
      }
    };
  }();

  var _default = optimizedResize;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/svg-toggle-class.js":
/*!********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/svg-toggle-class.js ***!
  \********************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */


  function svgToggleClass(svg, name, forceAdd) {
    var list = svg.getAttribute('class').trim().split(/\s+/);
    var uniqueList = Object.keys(list.reduce(function (o, item) {
      return Object.assign(o, _defineProperty({}, item, 1));
    }, {}));
    var index = uniqueList.indexOf(name);
    var found = index >= 0;
    var add = forceAdd === undefined ? !found : forceAdd;

    if (found === !add) {
      if (add) {
        uniqueList.push(name);
      } else {
        uniqueList.splice(index, 1);
      }

      svg.setAttribute('class', uniqueList.join(' '));
    }
  }

  var _default = svgToggleClass;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/misc/toggle-attribute.js":
/*!********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/misc/toggle-attribute.js ***!
  \********************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = toggleAttribute;
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * Toggles the given attribute of the given element.
   * @param {Element} elem The element.
   * @param {string} name The attribute name.
   * @param {boolean} add `true` to set the attribute.
   */

  function toggleAttribute(elem, name, add) {
    if (add) {
      elem.setAttribute(name, '');
    } else {
      elem.removeAttribute(name);
    }
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/create-component.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/create-component.js ***!
  \**********************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */


  function _default(ToMix) {
    var CreateComponent = /*#__PURE__*/function (_ToMix) {
      _inherits(CreateComponent, _ToMix);

      var _super = _createSuper(CreateComponent);
      /**
       * The component instances managed by this component.
       * Releasing this component also releases the components in `this.children`.
       * @type {Component[]}
       */

      /**
       * Mix-in class to manage lifecycle of component.
       * The constructor sets up this component's effective options,
       * and registers this component't instance associated to an element.
       * @implements Handle
       * @param {HTMLElement} element The element working as this component.
       * @param {object} [options] The component options.
       */


      function CreateComponent(element) {
        var _this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, CreateComponent);

        _this = _super.call(this, element, options);
        _this.children = [];

        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          throw new TypeError('DOM element should be given to initialize this widget.');
        }
        /**
         * The element the component is of.
         * @type {Element}
         */


        _this.element = element;
        /**
         * The component options.
         * @type {object}
         */

        _this.options = Object.assign(Object.create(_this.constructor.options), options);

        _this.constructor.components.set(_this.element, _assertThisInitialized(_this));

        return _this;
      }
      /**
       * Instantiates this component of the given element.
       * @param {HTMLElement} element The element.
       */


      _createClass(CreateComponent, [{
        key: "release",

        /**
         * Releases this component's instance from the associated element.
         */
        value: function release() {
          for (var child = this.children.pop(); child; child = this.children.pop()) {
            child.release();
          }

          this.constructor.components["delete"](this.element);
          return null;
        }
      }], [{
        key: "create",
        value: function create(element, options) {
          return this.components.get(element) || new this(element, options);
        }
      }]);

      return CreateComponent;
    }(ToMix);

    return CreateComponent;
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/evented-show-hide-state.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/evented-show-hide-state.js ***!
  \*****************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./evented-state */ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js"), __webpack_require__(/*! ../misc/get-launching-details */ "./node_modules/carbon-components/umd/globals/js/misc/get-launching-details.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _eventedState, _getLaunchingDetails) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _eventedState = _interopRequireDefault(_eventedState);
  _getLaunchingDetails = _interopRequireDefault(_getLaunchingDetails);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function eventedShowHideState(ToMix) {
    /**
     * Mix-in class to launch a floating menu.
     * @class EventedShowHideState
     */
    var EventedShowHideState = /*#__PURE__*/function (_ToMix) {
      _inherits(EventedShowHideState, _ToMix);

      var _super = _createSuper(EventedShowHideState);

      function EventedShowHideState() {
        _classCallCheck(this, EventedShowHideState);

        return _super.apply(this, arguments);
      }

      _createClass(EventedShowHideState, [{
        key: "show",

        /**
         */

        /**
         * Switch to 'shown' state.
         * @param [evtOrElem] The launching event or element.
         * @param {EventedState~changeStateCallback} [callback] The callback.
         */
        value: function show(evtOrElem, callback) {
          if (!evtOrElem || typeof evtOrElem === 'function') {
            callback = evtOrElem; // eslint-disable-line no-param-reassign
          }

          this.changeState('shown', (0, _getLaunchingDetails["default"])(evtOrElem), callback);
        }
        /**
         * Switch to 'hidden' state.
         * @param [evtOrElem] The launching event or element.
         * @param {EventedState~changeStateCallback} [callback] The callback.
         */

      }, {
        key: "hide",
        value: function hide(evtOrElem, callback) {
          if (!evtOrElem || typeof evtOrElem === 'function') {
            callback = evtOrElem; // eslint-disable-line no-param-reassign
          }

          this.changeState('hidden', (0, _getLaunchingDetails["default"])(evtOrElem), callback);
        }
      }]);

      return EventedShowHideState;
    }(ToMix);

    return EventedShowHideState;
  }

  var exports = [_eventedState["default"], eventedShowHideState];
  var _default = exports;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/evented-state.js ***!
  \*******************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */


  function _default(ToMix) {
    /**
     * Mix-in class to manage events associated with states.
     * @class EventedState
     */
    var EventedState = /*#__PURE__*/function (_ToMix) {
      _inherits(EventedState, _ToMix);

      var _super = _createSuper(EventedState);

      function EventedState() {
        _classCallCheck(this, EventedState);

        return _super.apply(this, arguments);
      }

      _createClass(EventedState, [{
        key: "_changeState",

        /* eslint-disable jsdoc/check-param-names */

        /**
         * The internal implementation for {@link EventedState#changeState `.changeState()`}, performing actual change in state.
         * @param {string} [state] The new state. Can be an omitted, which means toggling.
         * @param {object} [detail]
         *   The object that should be put to event details that is fired before/after changing state.
         *   Can have a `group` property, which specifies what state to be changed.
         * @param {EventedState~changeStateCallback} callback The callback called once changing state is finished or is canceled.
         * @private
         */
        value: function _changeState() {
          throw new Error('_changeState() should be overriden to perform actual change in state.');
        }
        /**
         * Changes the state of this component.
         * @param {string} [state] The new state. Can be an omitted, which means toggling.
         * @param {object} [detail]
         *   The object that should be put to event details that is fired before/after changing state.
         *   Can have a `group` property, which specifies what state to be changed.
         * @param {EventedState~changeStateCallback} [callback] The callback called once changing state is finished or is canceled.
         */

      }, {
        key: "changeState",
        value: function changeState() {
          var _this = this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var state = typeof args[0] === 'string' ? args.shift() : undefined;
          var detail = Object(args[0]) === args[0] && typeof args[0] !== 'function' ? args.shift() : undefined;
          var callback = typeof args[0] === 'function' ? args.shift() : undefined;

          if (typeof this.shouldStateBeChanged === 'function' && !this.shouldStateBeChanged(state, detail)) {
            if (callback) {
              callback(null, true);
            }

            return;
          }

          var data = {
            group: detail && detail.group,
            state: state
          };
          var eventNameSuffix = [data.group, state].filter(Boolean).join('-').split('-') // Group or state may contain hyphen
          .map(function (item) {
            return item[0].toUpperCase() + item.substr(1);
          }).join('');
          var eventStart = new CustomEvent(this.options["eventBefore".concat(eventNameSuffix)], {
            bubbles: true,
            cancelable: true,
            detail: detail
          });
          var fireOnNode = detail && detail.delegatorNode || this.element;
          var canceled = !fireOnNode.dispatchEvent(eventStart);

          if (canceled) {
            if (callback) {
              var error = new Error("Changing state (".concat(JSON.stringify(data), ") has been canceled."));
              error.canceled = true;
              callback(error);
            }
          } else {
            var changeStateArgs = [state, detail].filter(Boolean);

            this._changeState.apply(this, _toConsumableArray(changeStateArgs).concat([function () {
              fireOnNode.dispatchEvent(new CustomEvent(_this.options["eventAfter".concat(eventNameSuffix)], {
                bubbles: true,
                cancelable: true,
                detail: detail
              }));

              if (callback) {
                callback();
              }
            }]));
          }
        }
        /* eslint-enable jsdoc/check-param-names */

        /**
         * Tests if change in state should happen or not.
         * Classes inheriting {@link EventedState `EventedState`} should override this function.
         * @function EventedState#shouldStateBeChanged
         * @param {string} [state] The new state. Can be an omitted, which means toggling.
         * @param {object} [detail]
         *   The object that should be put to event details that is fired before/after changing state.
         *   Can have a `group` property, which specifies what state to be changed.
         * @returns {boolean}
         *   `false` if change in state shouldn't happen, e.g. when the given new state is the same as the current one.
         */

      }]);

      return EventedState;
    }(ToMix);
    /**
     * The callback called once changing state is finished or is canceled.
     * @callback EventedState~changeStateCallback
     * @param {Error} error
     *   An error object with `true` in its `canceled` property if changing state is canceled.
     *   Cancellation happens if the handler of a custom event, that is fired before changing state happens,
     *   calls `.preventDefault()` against the event.
     * @param {boolean} keptState
     *   `true` if the call to {@link EventedState#changeState `.changeState()`} didn't cause actual change in state.
     */


    return EventedState;
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/handles.js ***!
  \*************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */


  function _default(ToMix) {
    /**
     * Mix-in class to manage handles in component.
     * Managed handles are automatically released when the component with this class mixed in is released.
     * @class Handles
     * @implements Handle
     */
    var Handles = /*#__PURE__*/function (_ToMix) {
      _inherits(Handles, _ToMix);

      var _super = _createSuper(Handles);

      function Handles() {
        var _this;

        _classCallCheck(this, Handles);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _super.call.apply(_super, [this].concat(args));
        _this.handles = new Set();
        return _this;
      }

      _createClass(Handles, [{
        key: "manage",

        /**
         * Manages the given handle.
         * @param {Handle} handle The handle to manage.
         * @returns {Handle} The given handle.
         */
        value: function manage(handle) {
          this.handles.add(handle);
          return handle;
        }
        /**
         * Stop managing the given handle.
         * @param {Handle} handle The handle to stop managing.
         * @returns {Handle} The given handle.
         */

      }, {
        key: "unmanage",
        value: function unmanage(handle) {
          this.handles["delete"](handle);
          return handle;
        }
      }, {
        key: "release",
        value: function release() {
          var _this2 = this;

          this.handles.forEach(function (handle) {
            handle.release();

            _this2.handles["delete"](handle);
          });
          return _get(_getPrototypeOf(Handles.prototype), "release", this).call(this);
        }
      }]);

      return Handles;
    }(ToMix);

    return Handles;
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-event.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-event.js ***!
  \*****************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _default(ToMix) {
    /**
     * Mix-in class to instantiate components upon events.
     * @class InitComponentByEvent
     */
    var InitComponentByEvent = /*#__PURE__*/function (_ToMix) {
      _inherits(InitComponentByEvent, _ToMix);

      var _super = _createSuper(InitComponentByEvent);

      function InitComponentByEvent() {
        _classCallCheck(this, InitComponentByEvent);

        return _super.apply(this, arguments);
      }

      _createClass(InitComponentByEvent, null, [{
        key: "init",

        /**
         * `true` suggests that this component is lazily initialized upon an action/event, etc.
         * @type {boolean}
         */

        /**
         * Instantiates this component in the given element.
         * If the given element indicates that it's an component of this class, instantiates it.
         * Otherwise, instantiates this component by clicking on this component in the given node.
         * @param {Node} target The DOM node to instantiate this component in. Should be a document or an element.
         * @param {object} [options] The component options.
         * @param {string} [options.selectorInit] The CSS selector to find this component.
         * @returns {Handle} The handle to remove the event listener to handle clicking.
         */
        value: function init() {
          var _this = this;

          var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var effectiveOptions = Object.assign(Object.create(this.options), options);

          if (!target || target.nodeType !== Node.ELEMENT_NODE && target.nodeType !== Node.DOCUMENT_NODE) {
            throw new TypeError('DOM document or DOM element should be given to search for and initialize this widget.');
          }

          if (target.nodeType === Node.ELEMENT_NODE && target.matches(effectiveOptions.selectorInit)) {
            this.create(target, options);
          } else {
            // To work around non-bubbling `focus` event, use `focusin` event instead of it's available, and "capture mode" otherwise
            var hasFocusin = ('onfocusin' in (target.nodeType === Node.ELEMENT_NODE ? target.ownerDocument : target).defaultView);
            var handles = effectiveOptions.initEventNames.map(function (name) {
              var eventName = name === 'focus' && hasFocusin ? 'focusin' : name;
              return (0, _on["default"])(target, eventName, function (event) {
                var element = (0, _eventMatches["default"])(event, effectiveOptions.selectorInit); // Instantiated components handles events by themselves

                if (element && !_this.components.has(element)) {
                  var component = _this.create(element, options);

                  if (typeof component.createdByEvent === 'function') {
                    component.createdByEvent(event);
                  }
                }
              }, name === 'focus' && !hasFocusin);
            });
            return {
              release: function release() {
                for (var handle = handles.pop(); handle; handle = handles.pop()) {
                  handle.release();
                }
              }
            };
          }

          return '';
        }
      }]);

      InitComponentByEvent.forLazyInit = true;
      return InitComponentByEvent;
    }(ToMix);

    return InitComponentByEvent;
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-launcher.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-launcher.js ***!
  \********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../misc/event-matches */ "./node_modules/carbon-components/umd/globals/js/misc/event-matches.js"), __webpack_require__(/*! ../misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _eventMatches, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;
  _eventMatches = _interopRequireDefault(_eventMatches);
  _on = _interopRequireDefault(_on);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _default(ToMix) {
    /**
     * Mix-in class to instantiate components events on launcher button.
     * @class InitComponentByLauncher
     */
    var InitComponentByLauncher = /*#__PURE__*/function (_ToMix) {
      _inherits(InitComponentByLauncher, _ToMix);

      var _super = _createSuper(InitComponentByLauncher);

      function InitComponentByLauncher() {
        _classCallCheck(this, InitComponentByLauncher);

        return _super.apply(this, arguments);
      }

      _createClass(InitComponentByLauncher, null, [{
        key: "init",

        /**
         * `true` suggests that this component is lazily initialized upon an action/event, etc.
         * @type {boolean}
         */

        /**
         * Instantiates this component in the given element.
         * If the given element indicates that it's an component of this class, instantiates it.
         * Otherwise, instantiates this component by clicking on launcher buttons
         * (buttons with attribute that `options.attribInitTarget` points to) of this component in the given node.
         * @param {Node} target The DOM node to instantiate this component in. Should be a document or an element.
         * @param {object} [options] The component options.
         * @param {string} [options.selectorInit] The CSS selector to find this component.
         * @param {string} [options.attribInitTarget] The attribute name in the launcher buttons to find target component.
         * @returns {Handle} The handle to remove the event listener to handle clicking.
         */
        value: function init() {
          var _this = this;

          var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var effectiveOptions = Object.assign(Object.create(this.options), options);

          if (!target || target.nodeType !== Node.ELEMENT_NODE && target.nodeType !== Node.DOCUMENT_NODE) {
            throw new TypeError('DOM document or DOM element should be given to search for and initialize this widget.');
          }

          if (target.nodeType === Node.ELEMENT_NODE && target.matches(effectiveOptions.selectorInit)) {
            this.create(target, options);
          } else {
            var handles = effectiveOptions.initEventNames.map(function (name) {
              return (0, _on["default"])(target, name, function (event) {
                var launcher = (0, _eventMatches["default"])(event, "[".concat(effectiveOptions.attribInitTarget, "]"));

                if (launcher) {
                  event.delegateTarget = launcher; // eslint-disable-line no-param-reassign

                  var elements = launcher.ownerDocument.querySelectorAll(launcher.getAttribute(effectiveOptions.attribInitTarget));

                  if (elements.length > 1) {
                    throw new Error('Target widget must be unique.');
                  }

                  if (elements.length === 1) {
                    if (launcher.tagName === 'A') {
                      event.preventDefault();
                    }

                    var component = _this.create(elements[0], options);

                    if (typeof component.createdByLauncher === 'function') {
                      component.createdByLauncher(event);
                    }
                  }
                }
              });
            });
            return {
              release: function release() {
                for (var handle = handles.pop(); handle; handle = handles.pop()) {
                  handle.release();
                }
              }
            };
          }

          return '';
        }
      }]);

      InitComponentByLauncher.forLazyInit = true;
      return InitComponentByLauncher;
    }(ToMix);

    return InitComponentByLauncher;
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/init-component-by-search.js ***!
  \******************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _default;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */


  function _default(ToMix) {
    /**
     * Mix-in class to instantiate components by searching for their root elements.
     * @class InitComponentBySearch
     */
    var InitComponentBySearch = /*#__PURE__*/function (_ToMix) {
      _inherits(InitComponentBySearch, _ToMix);

      var _super = _createSuper(InitComponentBySearch);

      function InitComponentBySearch() {
        _classCallCheck(this, InitComponentBySearch);

        return _super.apply(this, arguments);
      }

      _createClass(InitComponentBySearch, null, [{
        key: "init",

        /**
         * Instantiates component in the given node.
         * If the given element indicates that it's an component of this class, instantiates it.
         * Otherwise, instantiates components by searching for components in the given node.
         * @param {Node} target The DOM node to instantiate components in. Should be a document or an element.
         * @param {object} [options] The component options.
         * @param {boolean} [options.selectorInit] The CSS selector to find components.
         */
        value: function init() {
          var _this = this;

          var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var effectiveOptions = Object.assign(Object.create(this.options), options);

          if (!target || target.nodeType !== Node.ELEMENT_NODE && target.nodeType !== Node.DOCUMENT_NODE) {
            throw new TypeError('DOM document or DOM element should be given to search for and initialize this widget.');
          }

          if (target.nodeType === Node.ELEMENT_NODE && target.matches(effectiveOptions.selectorInit)) {
            this.create(target, options);
          } else {
            Array.prototype.forEach.call(target.querySelectorAll(effectiveOptions.selectorInit), function (element) {
              return _this.create(element, options);
            });
          }
        }
      }]);

      return InitComponentBySearch;
    }(ToMix);

    return InitComponentBySearch;
  }
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/mixins/track-blur.js":
/*!****************************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/mixins/track-blur.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../misc/on */ "./node_modules/carbon-components/umd/globals/js/misc/on.js"), __webpack_require__(/*! ./handles */ "./node_modules/carbon-components/umd/globals/js/mixins/handles.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _on, _handles) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _on = _interopRequireDefault(_on);
  _handles = _interopRequireDefault(_handles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

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
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function trackBlur(ToMix) {
    var TrackBlur = /*#__PURE__*/function (_ToMix) {
      _inherits(TrackBlur, _ToMix);

      var _super = _createSuper(TrackBlur);
      /**
       * Mix-in class to add an handler for losing focus.
       * @extends Handles
       * @param {HTMLElement} element The element working as this component.
       * @param {object} [options] The component options.
       */


      function TrackBlur(element, options) {
        var _this;

        _classCallCheck(this, TrackBlur);

        _this = _super.call(this, element, options);
        var hasFocusin = ('onfocusin' in window);
        var focusinEventName = hasFocusin ? 'focusin' : 'focus';
        var focusoutEventName = hasFocusin ? 'focusout' : 'blur';

        _this.manage((0, _on["default"])(_this.element.ownerDocument, focusinEventName, function (event) {
          if (!(_this.options.contentNode || _this.element).contains(event.target)) {
            _this.handleBlur(event);
          }
        }, !hasFocusin));

        _this.manage((0, _on["default"])(_this.element.ownerDocument, focusoutEventName, function (event) {
          if (!event.relatedTarget) {
            _this.handleBlur(event);
          }
        }, !hasFocusin));

        return _this;
      }
      /**
       * The method called when this component loses focus.
       * @abstract
       */


      _createClass(TrackBlur, [{
        key: "handleBlur",
        value: function handleBlur() {
          throw new Error('Components inheriting TrackBlur mix-in must implement handleBlur() method.');
        }
      }]);

      return TrackBlur;
    }(ToMix);

    return TrackBlur;
  }

  var exports = [_handles["default"], trackBlur];
  var _default = exports;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/globals/js/settings.js":
/*!*******************************************************************!*\
  !*** ./node_modules/carbon-components/umd/globals/js/settings.js ***!
  \*******************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  /**
   * Copyright IBM Corp. 2016, 2018
   *
   * This source code is licensed under the Apache-2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * Settings.
   * @exports CarbonComponents.settings
   * @type Object
   * @property {boolean} [disableAutoInit]
   *   Disables automatic instantiation of components.
   *   By default (`CarbonComponents.disableAutoInit` is `false`),
   *   carbon-components attempts to instantiate components automatically
   *   by searching for elements with `data-component-name` (e.g. `data-loading`) attribute
   *   or upon DOM events (e.g. clicking) on such elements.
   *   See each components' static `.init()` methods for details.
   * @property {string} [prefix=bx]
   *   Brand prefix. Should be in sync with `$prefix` Sass variable in carbon-components/src/globals/scss/_vars.scss.
   * // @todo given that the default value is so long, is it appropriate to put in the JSDoc?
   * @property {string} [selectorTabbable]
   *   A selector selecting tabbable/focusable nodes.
   *   By default selectorTabbable references links, areas, inputs, buttons, selects, textareas,
   *   iframes, objects, embeds, or elements explicitly using tabindex or contenteditable attributes
   *   as long as the element is not `disabled` or the `tabindex="-1"`.
   * @property {string} [selectorFocusable]
   *   CSS selector that selects major nodes that are click focusable
   *   This property is identical to selectorTabbable with the exception of
   *   the `:not([tabindex='-1'])` pseudo class
   */

  var settings = {
    prefix: 'bx',
    selectorTabbable: "\n    a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n    button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n    textarea:not([disabled]):not([tabindex='-1']),\n    iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]\n  ",
    selectorFocusable: "\n    a[href], area[href], input:not([disabled]),\n    button:not([disabled]),select:not([disabled]),\n    textarea:not([disabled]),\n    iframe, object, embed, *[tabindex], *[contenteditable=true]\n  "
  };
  var settings_1 = settings;
  var _default = settings_1;
  _exports["default"] = _default;
});

/***/ }),

/***/ "./node_modules/carbon-components/umd/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/carbon-components/umd/index.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./globals/js/components */ "./node_modules/carbon-components/umd/globals/js/components.js"), __webpack_require__(/*! ./globals/js/settings */ "./node_modules/carbon-components/umd/globals/js/settings.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _components, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    settings: true
  };
  Object.defineProperty(_exports, "settings", {
    enumerable: true,
    get: function get() {
      return _settings["default"];
    }
  });
  Object.keys(_components).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _components[key];
      }
    });
  });
  _settings = _interopRequireDefault(_settings);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
});

/***/ }),

/***/ "flatpickr":
/*!****************************!*\
  !*** external "flatpickr" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_flatpickr__;

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_debounce__;

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_warning__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./node_modules/carbon-components/umd/index.js");
/******/ })()
);;