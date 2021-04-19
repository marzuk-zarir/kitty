/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 101:
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var navBtn = document.getElementById('nav-btn');
var navbarMenu = document.getElementById('navbar-nav');
var dropdownMenu = document.getElementById('dropdown-menu');
var dropdownLink = document.getElementById('dropdown-link');
var dropdownLists = document.getElementById('dropdown-lists'); // top navbar animation and toggle show or hide navbar

navBtn.addEventListener('click', function (e) {
  e.target.classList.toggle('icon-toggle');
  navbarMenu.classList.toggle('navbar-show');

  _toConsumableArray(navbarMenu.children).forEach(function (link, index) {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = "navMenuSlider 0.9s ease forwards ".concat(index / 4.5, "s");
    }
  });
});

/***/ }),

/***/ 118:
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var portfolioImages = document.querySelectorAll('img[data-filter]');
var portfolioBtn = document.getElementById('portfolio-btn').children; // show all images on  first load

portfolioImages.forEach(function (image) {
  image.classList.add('d-block');
}); // all categories when click

_toConsumableArray(portfolioBtn).forEach(function (btn) {
  btn.addEventListener('click', function () {
    // active class control
    for (var i = 0; i < portfolioBtn.length; i++) {
      portfolioBtn[i].classList.remove('active');
    }

    btn.classList.add('active'); // all images sorting by category

    portfolioImages.forEach(function (element) {
      // sorting with general category
      if (btn.innerText.toLowerCase() === 'all') {
        portfolioImages.forEach(function (image) {
          image.classList.add('d-block');
          image.style.animation = 'imgAnimateGrowingAll 0.8s forwards';
        });
      } else if ( // sorting with individual category
      element.getAttribute('data-filter') === btn.innerText.toLowerCase()) {
        element.classList.add('d-block');
        element.style.animation = 'imgAnimateGrowing 0.8s forwards';
      } else {
        element.classList.remove('d-block');
      }
    });
  });
});

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

;// CONCATENATED MODULE: ./src/assets/favicon.ico
/* harmony default export */ const favicon = (__webpack_require__.p + "assets/favicon.ico");
;// CONCATENATED MODULE: ./src/assets/banner.jpg
/* harmony default export */ const banner = (__webpack_require__.p + "assets/banner.jpg");
;// CONCATENATED MODULE: ./src/assets/about.png
/* harmony default export */ const about = (__webpack_require__.p + "assets/about.png");
;// CONCATENATED MODULE: ./src/assets/product-thumbnail.jpg
/* harmony default export */ const product_thumbnail = (__webpack_require__.p + "assets/product-thumbnail.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-1.jpg
/* harmony default export */ const portfolio_1 = (__webpack_require__.p + "assets/portfolio-1.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-2.jpg
/* harmony default export */ const portfolio_2 = (__webpack_require__.p + "assets/portfolio-2.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-3.jpg
/* harmony default export */ const portfolio_3 = (__webpack_require__.p + "assets/portfolio-3.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-4.jpg
/* harmony default export */ const portfolio_4 = (__webpack_require__.p + "assets/portfolio-4.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-5.jpg
/* harmony default export */ const portfolio_5 = (__webpack_require__.p + "assets/portfolio-5.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-6.jpg
/* harmony default export */ const portfolio_6 = (__webpack_require__.p + "assets/portfolio-6.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-7.jpg
/* harmony default export */ const portfolio_7 = (__webpack_require__.p + "assets/portfolio-7.jpg");
;// CONCATENATED MODULE: ./src/assets/portfolio-8.jpg
/* harmony default export */ const portfolio_8 = (__webpack_require__.p + "assets/portfolio-8.jpg");
;// CONCATENATED MODULE: ./src/assets/nazrul.jpg
/* harmony default export */ const nazrul = (__webpack_require__.p + "assets/nazrul.jpg");
;// CONCATENATED MODULE: ./src/assets/ajoy.jpg
/* harmony default export */ const ajoy = (__webpack_require__.p + "assets/ajoy.jpg");
;// CONCATENATED MODULE: ./src/assets/sunny.jpg
/* harmony default export */ const sunny = (__webpack_require__.p + "assets/sunny.jpg");
;// CONCATENATED MODULE: ./src/assets/nadira.jpg
/* harmony default export */ const nadira = (__webpack_require__.p + "assets/nadira.jpg");
;// CONCATENATED MODULE: ./src/assets/subscribe.jpg
/* harmony default export */ const subscribe = (__webpack_require__.p + "assets/subscribe.jpg");
;// CONCATENATED MODULE: ./src/assets/mobile-app.jpg
/* harmony default export */ const mobile_app = (__webpack_require__.p + "assets/mobile-app.jpg");
;// CONCATENATED MODULE: ./src/assets/purchase-welcome.jpg
/* harmony default export */ const purchase_welcome = (__webpack_require__.p + "assets/purchase-welcome.jpg");
;// CONCATENATED MODULE: ./src/assets/blog-1.jpg
/* harmony default export */ const blog_1 = (__webpack_require__.p + "assets/blog-1.jpg");
;// CONCATENATED MODULE: ./src/assets/blog-2.jpg
/* harmony default export */ const blog_2 = (__webpack_require__.p + "assets/blog-2.jpg");
;// CONCATENATED MODULE: ./src/assets/blog-3.jpg
/* harmony default export */ const blog_3 = (__webpack_require__.p + "assets/blog-3.jpg");
;// CONCATENATED MODULE: ./src/scripts/image.js
// favicon
 // banner

 // about and product thumbnail


 // portfolio








 // team member




 // subscribe

 // download mobile app

 // purchase welcome

 // blog




// EXTERNAL MODULE: ./src/scripts/navbar.js
var navbar = __webpack_require__(101);
// EXTERNAL MODULE: ./src/scripts/portfolio-filtering.js
var portfolio_filtering = __webpack_require__(118);
;// CONCATENATED MODULE: ./src/scripts/main.js
// css
 // image

 // navbar js

 // portfolio filtering


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map