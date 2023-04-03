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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('21 april 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack://lesson-18/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const total = document.getElementById('total');\r\n\r\n    const square = document.querySelector('.calc-square');\r\n    const count = document.querySelector('.calc-count');\r\n    const day = document.querySelector('.calc-day');\r\n\r\n    const form1 = document.getElementById('form1');\r\n    const form1Name = document.getElementById('form1-name');\r\n    const form1Email = document.getElementById('form1-email');\r\n    const form1Phone = document.getElementById('form1-phone');\r\n\r\n    const form2 = document.getElementById('form2');\r\n    const form2Name = document.getElementById('form2-name');\r\n    const form2Email = document.getElementById('form2-email');\r\n    const form2Phone = document.getElementById('form2-phone');\r\n    const form2Message = document.getElementById('form2-message');\r\n\r\n    const form3 = document.getElementById('form3');\r\n    const form3Name = document.getElementById('form3-name');\r\n    const form3Email = document.getElementById('form3-email');\r\n    const form3Phone = document.getElementById('form3-phone');\r\n\r\n    const regExpNumbers = /\\D+/;\r\n    const regExpName = /[^а-яА-я]/g;\r\n    const regExpEmail = /[\\-\\.\\w]+@([\\w]+\\.)+[\\w]+/gi;\r\n    const regExpPhone = /[^\\d]/g;\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = square.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let dayValue = 1;\r\n\r\n        if (count.value > 1) {\r\n            calcCountValue += +count.value / 10;\r\n        }\r\n\r\n        if (day.value && day.value < 5) {\r\n            dayValue = 2;\r\n        } else if (day.value && day.value < 10) {\r\n            dayValue = 1.5;\r\n        }\r\n    \r\n        if (calcType.value && square.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * dayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        total.textContent = totalValue;\r\n    };\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n\r\n        if (e.target === calcType || e.target === square ||\r\n            e.target === count || e.target === day) {\r\n            countCalc();\r\n        }\r\n    });\r\n\r\n    square.addEventListener('input', (e) => {\r\n        checkingNumbers(e);\r\n    }); \r\n\r\n    count.addEventListener('input', (e) => {\r\n        checkingNumbers(e);\r\n    }); \r\n\r\n    day.addEventListener('input', (e) => {\r\n        checkingNumbers(e);\r\n    }); \r\n\r\n    form1.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        formChecking(e);\r\n     })\r\n\r\n    form2.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        formChecking(e);\r\n     })\r\n\r\n    form3.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        formChecking(e);\r\n     })\r\n\r\n    function checkingNumbers(arg) {\r\n        arg.target.value = arg.target.value.replace(regExpNumbers, \"\"); // ф-ия проверки полей числа\r\n    };\r\n\r\n    function formChecking(form) {\r\n        let formNameValue;\r\n        let formEmailValue;\r\n        let formPhoneValue;\r\n        let formMessageValue;\r\n\r\n        let isError = false;\r\n\r\n        if (/form1/.test(form.target.id)) {\r\n            formNameValue = form1Name.value;\r\n            formEmailValue = form1Email.value;\r\n            formPhoneValue = form1Phone.value;\r\n        }\r\n        if (/form2/.test(form.target.id)) {\r\n            formNameValue = form2Name.value;\r\n            formEmailValue = form2Email.value;\r\n            formPhoneValue = form2Phone.value;\r\n            formMessageValue = form2Message.value;\r\n        }\r\n        if (/form3/.test(form.target.id)) {\r\n            formNameValue = form3Name.value;\r\n            formEmailValue = form3Email.value;\r\n            formPhoneValue = form3Phone.value;\r\n        }\r\n\r\n        if (!regExpName.test(formNameValue) && formNameValue !== '') {\r\n            alert('Кирилица')\r\n       } else {\r\n            isError = true;\r\n            alert('Заполните корректно поля, кроме тех, что увидите или увидели')\r\n       }\r\n\r\n       if (regExpEmail.test(formEmailValue) && formEmailValue !== '') {\r\n            alert('email')\r\n       } else {\r\n            isError = true;\r\n            alert('Заполните корректно поля, кроме тех, что увидите или увидели')\r\n       }\r\n\r\n       if (!regExpPhone.test(formPhoneValue) && formPhoneValue !== '') {\r\n            alert('Цифры')\r\n       } else {\r\n        isError = true;\r\n        alert('Заполните корректно поля, кроме тех, что увидите или увидели')\r\n        }\r\n\r\n        if (!regExpName.test(formMessageValue) && formMessageValue !== '') {\r\n            alert('Кирилица')\r\n       } else {\r\n            isError = true;\r\n            alert('Заполните корректно поля, кроме тех, что увидите или увидели')\r\n       }    \r\n\r\n        if (!isError) {\r\n            alert('Данные отправлены');\r\n        } \r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\nconst menuBtn = document.querySelector('.menu'); \r\nlet menu = document.querySelector('menu'); \r\nconst closeBtn = menu.querySelector('.close-btn');\r\nconst menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\nconst toggleMenu = () => { // переключаем класс\r\n    menu.classList.toggle('active-menu');\r\n};\r\n\r\nmenu.addEventListener('click', (e) => {\r\n    if (e.target === closeBtn) {\r\n        toggleMenu();\r\n    } else if (e.target.tagName === 'A') {\r\n        toggleMenu();\r\n    } \r\n});\r\n\r\ndocument.addEventListener('click', (e) => {\r\n    menu = document.querySelector('menu'); // перечитываем класс после нажатия на документ\r\n    if (menu.classList.contains('active-menu')) { // если содержит класс (активен)\r\n\r\n        if (e.target != menu && !e.target.closest('.menu')) toggleMenu(); // если таргет не меню\r\n                                                                          // и не кнопка меню,\r\n                                                                          // переключаем класс        \r\n    }\r\n\r\n    if (e.target.closest('.menu')) toggleMenu(); // если таргет - кнопка меню, переключаем класс\r\n});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const modalContent = document.querySelector('.popup-content');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n    let modalwidth = 0;\r\n    let modalMove;\r\n\r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n        modal.style.display = 'block';\r\n\r\n        if (window.innerHeight > 768 || window.innerWidth > 768) {\r\n            modalAnikmaiton();\r\n            }\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none';\r\n        }\r\n    });\r\n\r\n    function modalAnikmaiton() {\r\n        modalwidth++;\r\n        modalMove = requestAnimationFrame(modalAnikmaiton);\r\n\r\n        if (modalwidth <= 20) {\r\n            modalContent.style.position = \"absolute\";\r\n            modal.style.width = modalwidth * 5 + '%';\r\n\r\n        } else {\r\n            cancelAnimationFrame(modalMove);\r\n            modalwidth = 0;\r\n        }\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content');\r\n    const slides = document.querySelectorAll('.portfolio-item');\r\n    const dots = document.querySelectorAll('.dot');\r\n    const dot = document.querySelector('.dot');\r\n\r\n    const ulDots = document.querySelector('.portfolio-dots');\r\n    const timerInterval = 2000;\r\n\r\n    let currentSlide = 0; // counter for slides\r\n    let interval;\r\n\r\n/*     function removeDots () {\r\n        dots.forEach(dot => dot.remove());\r\n    }\r\n    removeDots ();\r\n\r\n     function addDots () {\r\n        \r\n        for (let i = 1; i <= slides.length; i++) {\r\n\r\n            ulDots.insertAdjacentHTML('beforeend', '<li class =\"dot\"></li>'); \r\n            console.log('ulDots', ulDots, i);     \r\n        }\r\n    }\r\n    addDots ();  */\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);        \r\n    };\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    };\r\n                           \r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        currentSlide++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;    \r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;    \r\n        }\r\n        \r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n                return;\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active');\r\n        prevSlide(dots, currentSlide, 'dot-active');\r\n        \r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++;\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            });\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;    \r\n        }\r\n\r\n        if (currentSlide < 0 ) {\r\n            currentSlide = slides.length -1;    \r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active');\r\n        nextSlide(dots, currentSlide, 'dot-active');\r\n    });\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide();\r\n    }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(timerInterval);\r\n    }\r\n    }, true);\r\n\r\n    startSlide(timerInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* const timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemainikng = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemainikng / 60 / 60 / 24); \r\n        let hours = Math.floor((timeRemainikng / 60 / 60)); \r\n        let minutes = Math.floor((timeRemainikng / 60) % 60); \r\n        let seconds = Math.floor(timeRemainikng % 60);\r\n        \r\n        return {timeRemainikng, hours, minutes, seconds, }\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.hours <= 0) timerHours.textContent = '00';\r\n        if (getTime.hours > 0) timerHours.textContent = getTime.hours;\r\n        if (getTime.hours > 0 && getTime.hours < 10) timerHours.textContent = '0' + getTime.hours;\r\n\r\n        if (getTime.minutes <= 0) timerMinutes.textContent =  '00';\r\n        if (getTime.minutes > 0) timerMinutes.textContent = getTime.minutes;\r\n        if (getTime.minutes > 0 && getTime.minutes < 10) timerMinutes.textContent = '0' + getTime.minutes;\r\n\r\n        if (getTime.seconds <= 0) timerSeconds.textContent =  '00';\r\n        if (getTime.seconds > 0) timerSeconds.textContent = getTime.seconds;\r\n        if (getTime.seconds > 0 && getTime.seconds < 10) timerSeconds.textContent = '0' + getTime.seconds;\r\n\r\n        if (getTime.timeRemainikng > 0) {\r\n            setTimeout(updateClock, 1000)\r\n        }\r\n    };\r\n    updateClock()\r\n}; */\r\n\r\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemainikng = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemainikng / 60 / 60 / 24); \r\n        let hours = Math.floor((timeRemainikng / 60 / 60) % 60); \r\n        let minutes = Math.floor((timeRemainikng / 60) % 60); \r\n        let seconds = Math.floor(timeRemainikng % 60);\r\n        \r\n        return {timeRemainikng, hours, minutes, seconds, }\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.hours <= 0) timerHours.textContent = '00';\r\n        if (getTime.hours > 0) timerHours.textContent = getTime.hours;\r\n        if (getTime.hours > 0 && getTime.hours < 10) timerHours.textContent = '0' + getTime.hours;\r\n\r\n        if (getTime.minutes <= 0) timerMinutes.textContent =  '00';\r\n        if (getTime.minutes > 0) timerMinutes.textContent = getTime.minutes;\r\n        if (getTime.minutes > 0 && getTime.minutes < 10) timerMinutes.textContent = '0' + getTime.minutes;\r\n\r\n        if (getTime.seconds <= 0) timerSeconds.textContent =  '00';\r\n        if (getTime.seconds > 0) timerSeconds.textContent = getTime.seconds;\r\n        if (getTime.seconds > 0 && getTime.seconds < 10) timerSeconds.textContent = '0' + getTime.seconds;\r\n        }\r\n\r\n    let getTimeSetInterval = getTimeRemaining();\r\n\r\n    if (getTimeSetInterval.timeRemainikng > 0) {\r\n        setInterval(updateClock, 1000) };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack://lesson-18/./src/modules/timer.js?");

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