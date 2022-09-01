/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.querySelector('#content');\nconst header = document.createElement('header');\nconst main = document.createElement('div');\nconst footer = document.createElement('footer');\n\n//create header\nfunction createHeader() {\n\n    header.classList.add('header');\n    header.textContent = \"Fritanga\";\n    \n    const navBar = document.createElement('div');\n    navBar.classList.add('navBar');\n    header.appendChild(navBar);\n\n    //create Nav Buttons\n    navList = ['home', 'menu', 'contact'];\n    navList.forEach(function(e) {\n        const navBtn = document.createElement('button');\n        navBtn.classList.add('navBtn');\n        navBtn.setAttribute('id', e);\n        navBtn.textContent = e;\n        header.appendChild(navBtn);\n    })\n\n    content.appendChild(header);\n}\n\n//create main body\nfunction createMain() {\n    main.classList.add('main');\n    main.textContent = \"Middle Bit\";\n    content.appendChild(main);\n}\n\n//create footer\nfunction createFooter() {\n    footer.classList.add('footer');\n    footer.textContent = `Copyright © ${new Date().getFullYear()} josearguello`;\n    content.appendChild(footer);\n}\n\n(function () {\n    createHeader();\n    createMain();\n    createFooter();\n})();\n\n\nconst homeBtn = document.getElementById('home');\nhomeBtn.textContent = \"Home\"\n//homeBtn.addEventListener('click', homePage);\n\nconst menuBtn = document.getElementById('menu');\nmenuBtn.textContent = 'Menu';\n//menuBtn.addEventListener('click', menuPage);\n\nconst contactBtn = document.getElementById('contact');\ncontactBtn.textContent = \"Contact\";\n//contactBtn.addEventListener('click', contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;