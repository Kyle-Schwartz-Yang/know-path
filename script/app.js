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
// ----------------------------NO-Modules (START)
// HEADER.js


// ----------------------------NO-Modules (END)

//!--------------------------------------------------------

var modules = {
  // -------------------NO-Modules
  initHeaderMenu: _components_widgets_Header_Header_js__WEBPACK_IMPORTED_MODULE_0__.initHeaderMenu
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