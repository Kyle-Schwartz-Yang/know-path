/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modules: function() { return /* binding */ modules; }
/* harmony export */ });
/* harmony import */ var _components_widgets_Header_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_features_TabbedItem_core_TabbedItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
// ----------------------------NO-Modules (START)
// HEADER.js


// import { FilterSystem } from "../components/features/FilterItem/core/_FilterItem.js";


// ----------------------------NO-Modules (END)

//!--------------------------------------------------------

var modules = {
  // -------------------NO-Modules
  initHeaderMenu: _components_widgets_Header_Header_js__WEBPACK_IMPORTED_MODULE_0__.initHeaderMenu,
  FilterSystem: _components_features_TabbedItem_core_TabbedItem_js__WEBPACK_IMPORTED_MODULE_1__.TabbedSystem
  // -------------------NO-Modules
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHeaderMenu: function() { return /* binding */ initHeaderMenu; }
/* harmony export */ });
/* harmony import */ var _utils_BodyLock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var initHeaderMenu = function initHeaderMenu() {
  // ---------------------------------------------------------------
  var headerElement = {
    menu: document.querySelector('.menu'),
    openButton: document.querySelector('.menu__open'),
    closeButton: document.querySelector('.menu__close')
  };
  var menu = headerElement.menu,
    openButton = headerElement.openButton,
    closeButton = headerElement.closeButton;
  // ---------------------------------------------------------------

  if (openButton) {
    // ---------------------------------------------------
    var toogleEvent = function toogleEvent(action) {
      menu.classList[action]('_active');
      openButton.classList[action]('_active');

      // Вариант toggle не расматривается.
      action === 'add' ? (0,_utils_BodyLock__WEBPACK_IMPORTED_MODULE_0__.bodyLock)() : (0,_utils_BodyLock__WEBPACK_IMPORTED_MODULE_0__.bodyUnLock)();
    }; // ---------------------------------------------------
    openButton.addEventListener('click', function (event) {
      event.preventDefault();
      toogleEvent('add'); // Активировать

      // Удалить классы при нажатии на closeButton
      if (closeButton) {
        closeButton.addEventListener('click', function (event) {
          toogleEvent('remove');
        });
      }

      // Удаление классов при нажатие на 'Escape' и мимо Меню
      if (menu.classList.contains('_active')) {
        menu.addEventListener('click', function (event) {
          // Проверяем, что клик произошел на .menu__cover
          if (event.target === menu.querySelector('.menu__cover')) {
            toogleEvent('remove');
          }
        });
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            toogleEvent('remove');
          }
        });
      }
    });
  }
};

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bodyLock: function() { return /* binding */ bodyLock; },
/* harmony export */   bodyUnLock: function() { return /* binding */ bodyUnLock; }
/* harmony export */ });
// Собрать все фиксированные элементы 
var fixedElement = document.querySelectorAll('.fixed-element');

//$ - Lock scrollbar
function bodyLock() {
  var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';

  // ---------------------------------------------
  if (fixedElement.length > 0) {
    // Все fixedElement получает paddingRight: 
    for (var index = 0; index < fixedElement.length; index++) {
      var el = fixedElement[index];
      el.style.paddingRight = scrollBarWidth;
    }
  }
  // ---------------------------------------------
  document.body.style.paddingRight = scrollBarWidth;
  document.body.classList.add('_lock-body-hidden');
}

//$ - UnLock scrollbar
function bodyUnLock() {
  setTimeout(function () {
    if (fixedElement.length > 0) {
      // Все fixedElement очистят paddingRight: 
      for (var index = 0; index < fixedElement.length; index++) {
        var el = fixedElement[index];
        el.style.paddingRight = '0px';
      }
    }

    // ------------------------------
    document.body.style.paddingRight = '0px';
    document.body.classList.remove('_lock-body-hidden');
    // ------------------------------

    // Уменьшее задержи для более быстрого появление scrollbar
  }, 300);
}

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabbedSystem: function() { return /* binding */ TabbedSystem; }
/* harmony export */ });
/* harmony import */ var _base_toggle_system_base_toggle_system_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
- PUG
$-  #tabs-default(class='tabs-default')
$-    .tabs-default__buttons > .tabs-default__button(data-button-system='unique')
$-   .tabs-default__contents > .tabs-default__content(data-content-system='unique')
*/

// ------------------------------------------------------------------------------------------------
var TabbedSystem = /*#__PURE__*/function (_BaseToggleSystem) {
  function TabbedSystem() {
    _classCallCheck(this, TabbedSystem);
    return _callSuper(this, TabbedSystem, arguments);
  }
  _inherits(TabbedSystem, _BaseToggleSystem);
  return _createClass(TabbedSystem, [{
    key: "init",
    value:
    //+-----------------------------------------------------Not necessary
    // Активируем первую кнопку или любуй другуй: (Либо можно напрямою указать в HTML)
    function init() {
      _get(_getPrototypeOf(TabbedSystem.prototype), "init", this).call(this); //Наследуем содержимое родителя.
      //--------------------------------------------
      if (this.toggles.length > 0) {
        this.handleToggle(this.toggles[0]);
      }
    }
    //+-----------------------------------------------------Not necessary
  }, {
    key: "handleToggle",
    value: function handleToggle(button) {
      // const buttonAttribut = button.getAttribute('data-target');
      var buttonAttribut = button.getAttribute('data-button-system'); //button

      if (!button.classList.contains(this.activeSelector)) {
        this.removeActiveClasses();
        button.classList.add(this.activeSelector);
      }
      this.setActiveContent(buttonAttribut);
    }

    // -----------------------Оптимизация
    // Добавление класса active контенту
  }, {
    key: "setActiveContent",
    value: function setActiveContent(buttonAttribut) {
      var _this = this;
      this.contents.forEach(function (content) {
        var contentAttribut = content.dataset.contentSystem;
        if (contentAttribut.includes(buttonAttribut) || !buttonAttribut) {
          if (!content.classList.contains(_this.activeSelector)) {
            content.classList.add(_this.activeSelector);
          }
        } else {
          content.classList.remove(_this.activeSelector);
        }
      });
    }
  }, {
    key: "removeActiveClasses",
    value:
    // Очистка активных классов
    function removeActiveClasses() {
      var _this2 = this;
      this.toggles.forEach(function (button) {
        return button.classList.remove(_this2.activeSelector);
      });
      this.contents.forEach(function (content) {
        return content.classList.remove(_this2.activeSelector);
      });
    }
    // -----------------------Оптимизация
  }]);
}(_base_toggle_system_base_toggle_system_js__WEBPACK_IMPORTED_MODULE_0__.BaseToggleSystem);

/*
# ИСПОЛЬЗОВАНИЕ: 
-------------------------------------------------------------------------
  const tabbedSystem = new modules.TabbedSystem({
    dataAttributeParent: 'tab',
    toggleSelector: '.tab-button',
    contentSelector: '.tab-content',
    activeSelector: '_active',
  })

  if (filterSystem.dataAttributeParent) {
    //Дополнительная проверка.
    filterSystem.init();
  }

*/

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseToggleSystem: function() { return /* binding */ BaseToggleSystem; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BaseToggleSystem = /*#__PURE__*/function () {
  function BaseToggleSystem() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, BaseToggleSystem);
    // ПОЛУЧИТЬ УНИКАЛЬНЫЙ АТРИБУТ (data-tabs="tabs-default")
    this.attributeParent = document.querySelector("[data-tabbed=\"".concat(config.dataAttributeParent, "\"]"));
    if (!this.attributeParent) {
      console.warn("ATTENTION! Not found dataAttributeParent: ".concat(this.attributeParent));
      return;
    }
    this.toggles = this.attributeParent.querySelectorAll(config.toggleSelector);
    this.contents = this.attributeParent.querySelectorAll(config.contentSelector);
    this.activeSelector = config.activeSelector || '_active';
    // this.init(); Обрат внимания, можно вызывать здесь \\
  }

  // Метод инициализации
  return _createClass(BaseToggleSystem, [{
    key: "init",
    value: function init() {
      if (!this.toggles || !this.contents) {
        console.warn('toggleSelector или contentSelector не найдены. Инициализация отменена.');
        return; // Завершаем выполнение метода, если тогглы или контент не найдены
      }
      this.addEventListeners();
    }

    // Метод для добавления обработчиков событий
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.toggles.forEach(function (button) {
        button.addEventListener('click', function () {
          return _this.handleToggle(button);
        });
      });
    }

    // handleToggle будет переопределена в дочерних классах (иак задумано)
  }, {
    key: "handleToggle",
    value: function handleToggle(button) {
      console.warn('Метод handleToggle должен быть реализован в дочернем классе.');
    }
  }]);
}();

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


//-------------------------------------------------------

// import Swiper from 'swiper';
// import { Pagination, Keyboard, EffectCards, Autoplay, Navigation, Thumbs } from 'swiper/modules';
// import 'swiper/css/bundle';

/*
import { modules } from './modules.js';
import { library } from './library.js';
*/
// import { library } from './library.js';

document.addEventListener('DOMContentLoaded', function () {
  // ------------------------------------
  _modules_js__WEBPACK_IMPORTED_MODULE_0__.modules.initHeaderMenu();
});
}();
/******/ })()
;
//# sourceMappingURL=app.js.map