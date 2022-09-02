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

/***/ "./contact.js":
/*!********************!*\
  !*** ./contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.setAttribute('id', 'contact');\n\n    const nicaMap = document.createElement('img');\n    nicaMap.src = 'images/map.png';\n    nicaMap.alt = 'Map of Nicaragua';\n\n    contact.appendChild(createParagraph('Contact us now at: '));\n    contact.appendChild(createParagraph('+505 5555-5555'));\n    contact.appendChild(nicaMap);\n\n    return contact;\n}\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement('p');\n    paragraph.textContent = text;\n    return paragraph;\n}\n\nfunction loadContact() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./contact.js?");

/***/ }),

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement('div');\n    home.setAttribute('id', 'home');\n\n    const chefImage = document.createElement('img');\n    chefImage.src = 'images/nicaraguan_food.jpg';\n    chefImage.alt = 'Comida Nica';\n\n    home.appendChild(createParagraph('Delicioso Comida Nicaraguense'));\n    home.appendChild(createParagraph('Delicious Nicaraguan Food Awaits!'))\n    home.appendChild(chefImage);\n    home.appendChild(createParagraph('Call, Order Online, or Visit!'));\n\n    return home\n}\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement('p');\n    paragraph.textContent = text;\n    return paragraph;\n}\n\nfunction loadHome() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHome());\n  }\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./home.js?");

/***/ }),

/***/ "./menu.js":
/*!*****************!*\
  !*** ./menu.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu () {\n    const menu = document.createElement('div');\n    menu.setAttribute('id', 'menu');\n\n    const beefContainer = document.createElement('div');\n    beefContainer.classList.add('menuContainer');\n\n    const porkContainer = document.createElement('div');\n    porkContainer.classList.add('menuContainer');\n\n    const cheeseContainer = document.createElement('div');\n    cheeseContainer.classList.add('menuContainer');\n\n    const nacaContainer = document.createElement('div');\n    nacaContainer.classList.add('menuContainer');\n\n\n    const beef = document.createElement('img');\n    beef.src ='images/nicaraguan_food.jpg';\n    beef.alt = 'Servicio de Carne Asada ';\n    beefContainer.appendChild(createParagraph('Carne Asada'))\n    beefContainer.appendChild(createParagraph('Grilled Steak'));\n    beefContainer.appendChild(beef);\n\n    const pork = document.createElement('img');\n    pork.src ='images/cerdo_frito.jpg';\n    pork.alt = 'Servicio de Cerdo Frito ';\n    porkContainer.appendChild(createParagraph('Cerdo Frito'));\n    porkContainer.appendChild(createParagraph('Fried Pork'));\n    porkContainer.appendChild(pork);\n    \n    const cheese = document.createElement('img');\n    cheese.src = 'images/queso_frito.png';\n    cheese.alt = 'Queso Frito';\n    cheeseContainer.appendChild(createParagraph('Queso Frito'));\n    cheeseContainer.appendChild(createParagraph('Fried Cheese'));\n    cheeseContainer.appendChild(cheese);\n\n    const nacatamal = document.createElement('img');\n    nacatamal.src = 'images/nacatamal.jpg';\n    nacatamal.alt = 'Nacatamal'\n    nacaContainer.appendChild(createParagraph('Nacatamal'));\n    nacaContainer.appendChild(createParagraph('Nicaraguan Tamale'));\n    nacaContainer.appendChild(nacatamal);\n\n    menu.appendChild(beefContainer);\n    menu.appendChild(porkContainer);\n    menu.appendChild(cheeseContainer);\n    menu.appendChild(nacaContainer);\n\n    return menu;\n}\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement('p');\n    paragraph.textContent = text;\n    return paragraph;\n}\n\nfunction loadMenu() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home */ \"./home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu */ \"./menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact */ \"./contact.js\");\n\n\n\n\nconst content = document.querySelector('#content');\nconst header = document.createElement('header');\nconst main = document.createElement('div');\nconst footer = document.createElement('footer');\n\n//create header\nfunction createHeader() {\n\n    header.classList.add('header');\n    header.textContent = 'Fritanga';\n    \n    const navBar = document.createElement('div');\n    navBar.classList.add('navBar');\n    header.appendChild(navBar);\n\n    (function createNav() {\n        const homeBtn = document.createElement('button');\n        homeBtn.classList.add('navBtn');\n        homeBtn.setAttribute('id', 'homeBtn');\n        homeBtn.textContent = 'Home';\n        homeBtn.addEventListener('click', (e) => {\n            if (e.target.classList.contains('active')) return;\n            setActiveButton(homeBtn);\n            (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n          });\n\n        const menuBtn = document.createElement('button');\n        menuBtn.classList.add('navBtn');\n        menuBtn.setAttribute('id', 'menuBtn');\n        menuBtn.textContent = 'Menu';\n        menuBtn.addEventListener('click', (e) => {\n            if (e.target.classList.contains('active')) return;\n            setActiveButton(menuBtn);\n            (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n          });\n\n        const contactBtn = document.createElement('button');\n        contactBtn.classList.add('navBtn');\n        contactBtn.setAttribute('id', 'contactBtn');\n        contactBtn.textContent = 'Contact';\n        contactBtn.addEventListener('click', (e) => {\n            if (e.target.classList.contains('active')) return;\n            setActiveButton(contactBtn);\n            (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n          });\n\n\n        navBar.appendChild(homeBtn);\n        navBar.appendChild(menuBtn);\n        navBar.appendChild(contactBtn);\n    })();\n\n    content.appendChild(header);\n}\n\n//create main body\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n    content.appendChild(main);\n}\n\n//create footer\nfunction createFooter() {\n    footer.classList.add('footer');\n    footer.textContent = `Copyright © ${new Date().getFullYear()} josearguello`;\n    content.appendChild(footer);\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.navBtn');\n  \n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove('active');\n      }\n    });\n  \n    button.classList.add('active');\n  }\n\n(function () {\n    createHeader();\n    createMain();\n    createFooter();\n\n\n    setActiveButton(document.querySelector(\".navBtn\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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