/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('27 january 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack://lesson-18/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n    const handleMenu = () => {\r\n/*         if (!menu.style.transform) {\r\n            menu.style.transform = 'translateX(0)';\r\n        } else {\r\n            menu.style.transform = '';\r\n        } */\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    closeBtn.addEventListener('click', handleMenu);\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const modalContent = document.querySelector('.popup-content');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n        modal.style.display = 'block';\r\n\r\n        if (window.innerHeight > 768 || window.innerWidth > 768) {\r\n            modalAnikmaiton();\r\n            }\r\n        });\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n    });\r\n\r\n    let modalwidth = 0;\r\n    let modalMove;\r\n\r\n    function modalAnikmaiton() {\r\n        modalwidth++;\r\n        modalMove = requestAnimationFrame(modalAnikmaiton);\r\n\r\n        if (modalwidth <= 20) {\r\n            modalContent.style.position = \"absolute\";\r\n            modal.style.width = modalwidth * 5 + '%';\r\n\r\n        } else {\r\n            cancelAnimationFrame(modalMove);\r\n            modalwidth = 0;\r\n        }\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* const timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemainikng = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemainikng / 60 / 60 / 24); \r\n        let hours = Math.floor((timeRemainikng / 60 / 60)); \r\n        let minutes = Math.floor((timeRemainikng / 60) % 60); \r\n        let seconds = Math.floor(timeRemainikng % 60);\r\n        \r\n        return {timeRemainikng, hours, minutes, seconds, }\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.hours <= 0) timerHours.textContent = '00';\r\n        if (getTime.hours > 0) timerHours.textContent = getTime.hours;\r\n        if (getTime.hours > 0 && getTime.hours < 10) timerHours.textContent = '0' + getTime.hours;\r\n\r\n        if (getTime.minutes <= 0) timerMinutes.textContent =  '00';\r\n        if (getTime.minutes > 0) timerMinutes.textContent = getTime.minutes;\r\n        if (getTime.minutes > 0 && getTime.minutes < 10) timerMinutes.textContent = '0' + getTime.minutes;\r\n\r\n        if (getTime.seconds <= 0) timerSeconds.textContent =  '00';\r\n        if (getTime.seconds > 0) timerSeconds.textContent = getTime.seconds;\r\n        if (getTime.seconds > 0 && getTime.seconds < 10) timerSeconds.textContent = '0' + getTime.seconds;\r\n\r\n        if (getTime.timeRemainikng > 0) {\r\n            setTimeout(updateClock, 1000)\r\n        }\r\n    };\r\n    updateClock()\r\n}; */\r\n\r\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemainikng = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemainikng / 60 / 60 / 24); \r\n        let hours = Math.floor((timeRemainikng / 60 / 60)); \r\n        let minutes = Math.floor((timeRemainikng / 60) % 60); \r\n        let seconds = Math.floor(timeRemainikng % 60);\r\n        \r\n        return {timeRemainikng, hours, minutes, seconds, }\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.hours <= 0) timerHours.textContent = '00';\r\n        if (getTime.hours > 0) timerHours.textContent = getTime.hours;\r\n        if (getTime.hours > 0 && getTime.hours < 10) timerHours.textContent = '0' + getTime.hours;\r\n\r\n        if (getTime.minutes <= 0) timerMinutes.textContent =  '00';\r\n        if (getTime.minutes > 0) timerMinutes.textContent = getTime.minutes;\r\n        if (getTime.minutes > 0 && getTime.minutes < 10) timerMinutes.textContent = '0' + getTime.minutes;\r\n\r\n        if (getTime.seconds <= 0) timerSeconds.textContent =  '00';\r\n        if (getTime.seconds > 0) timerSeconds.textContent = getTime.seconds;\r\n        if (getTime.seconds > 0 && getTime.seconds < 10) timerSeconds.textContent = '0' + getTime.seconds;\r\n        }\r\n\r\n    let getTimeSetInterval = getTimeRemaining();\r\n\r\n    if (getTimeSetInterval.timeRemainikng > 0) {\r\n        setInterval(updateClock, 1000) };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/timer.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;