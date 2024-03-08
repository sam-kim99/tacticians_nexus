/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_champions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/champions */ \"./src/scripts/champions.js\");\n\n(0,_scripts_champions__WEBPACK_IMPORTED_MODULE_0__.fetchChampionInfo)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0Q7QUFFeERBLHFFQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWN0aWNpYW5zX25leHVzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hDaGFtcGlvbkluZm8gfSBmcm9tIFwiLi9zY3JpcHRzL2NoYW1waW9uc1wiO1xuXG5mZXRjaENoYW1waW9uSW5mbygpOyJdLCJuYW1lcyI6WyJmZXRjaENoYW1waW9uSW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/champions.js":
/*!**********************************!*\
  !*** ./src/scripts/champions.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchChampionInfo: function() { return /* binding */ fetchChampionInfo; }\n/* harmony export */ });\nfunction fetchChampionInfo() {\n  return fetch('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json').then(res => {\n    if (res.ok) {\n      return res.json();\n    } else {\n      throw new Error('Failed to fetch champion info');\n    }\n  }).then(champInfo => {\n    const parentChamp = document.querySelector('.champions');\n    const setData = champInfo['setData'];\n    const champData = setData[4];\n    const championsByCost = {\n      1: [],\n      2: [],\n      3: [],\n      4: [],\n      5: []\n    };\n    champData['champions'].forEach(champObj => {\n      if (champObj['characterName'].includes('TFT10') && champObj['cost'] >= 1 && champObj['cost'] <= 5) {\n        championsByCost[champObj['cost']].push(champObj);\n      }\n    });\n    for (let cost = 1; cost <= 5; cost++) {\n      const champions = championsByCost[cost];\n      if (champions.length > 0) {\n        const costContainer = document.createElement('div');\n        costContainer.classList.add(`${cost}-cost`);\n        const containterText = document.createElement('h2');\n        containterText.innerText = `${cost} Cost`;\n        parentChamp.appendChild(containterText);\n        champions.forEach(champObj => {\n          const champContainer = document.createElement('div');\n          const champName = document.createElement('div');\n          const champTraits = document.createElement('div');\n          const champCost = document.createElement('div');\n          const champImg = document.createElement('img');\n          champContainer.id = champObj['name'];\n          champName.id = champObj['name'];\n          champName.innerText = champObj['name'];\n          champTraits.id = 'traits';\n          for (let trait of champObj['traits']) {\n            const subTrait = document.createElement('img');\n            const traitText = trait.split('/').join('');\n            subTrait.id = traitText;\n            subTrait.src = './assets/images/trait-icons/' + `${traitText.toLowerCase()}.png`;\n            champTraits.appendChild(subTrait);\n          }\n          champCost.id = `${champObj['cost']}_cost`;\n          champCost.innerText = champObj['cost'];\n          champImg.id = 'img';\n          champImg.src = '';\n          champContainer.appendChild(champName);\n          champContainer.appendChild(champTraits);\n          champContainer.appendChild(champCost);\n          champContainer.appendChild(document.createElement('br'));\n          costContainer.appendChild(champContainer);\n        });\n        parentChamp.appendChild(costContainer);\n      }\n    }\n  }).catch(error => {\n    console.error('Error fetching champion info:', error);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFjdGljaWFuc19uZXh1cy8uL3NyYy9zY3JpcHRzL2NoYW1waW9ucy5qcz9lMWMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmZXRjaENoYW1waW9uSW5mbygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcmF3LmNvbW11bml0eWRyYWdvbi5vcmcvbGF0ZXN0L2NkcmFnb24vdGZ0L2VuX3VzLmpzb24nKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjaGFtcGlvbiBpbmZvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGNoYW1wSW5mbyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRDaGFtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IHNldERhdGEgPSBjaGFtcEluZm9bJ3NldERhdGEnXTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW1wRGF0YSA9IHNldERhdGFbNF07XG4gICAgICAgICAgICBjb25zdCBjaGFtcGlvbnNCeUNvc3QgPSB7XG4gICAgICAgICAgICAgICAgMTogW10sXG4gICAgICAgICAgICAgICAgMjogW10sXG4gICAgICAgICAgICAgICAgMzogW10sXG4gICAgICAgICAgICAgICAgNDogW10sXG4gICAgICAgICAgICAgICAgNTogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNoYW1wRGF0YVsnY2hhbXBpb25zJ10uZm9yRWFjaChjaGFtcE9iaiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW1wT2JqWydjaGFyYWN0ZXJOYW1lJ10uaW5jbHVkZXMoJ1RGVDEwJykgJiYgY2hhbXBPYmpbJ2Nvc3QnXSA+PSAxICYmIGNoYW1wT2JqWydjb3N0J10gPD0gNSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFtcGlvbnNCeUNvc3RbY2hhbXBPYmpbJ2Nvc3QnXV0ucHVzaChjaGFtcE9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgY29zdCA9IDE7IGNvc3QgPD0gNTsgY29zdCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbXBpb25zID0gY2hhbXBpb25zQnlDb3N0W2Nvc3RdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoYW1waW9ucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29zdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb3N0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7Y29zdH0tY29zdGApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW50ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICAgICAgICAgICAgICBjb250YWludGVyVGV4dC5pbm5lclRleHQgPSBgJHtjb3N0fSBDb3N0YDtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hhbXAuYXBwZW5kQ2hpbGQoY29udGFpbnRlclRleHQpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9ucy5mb3JFYWNoKGNoYW1wT2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFtcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW1wVHJhaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFtcENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBDb250YWluZXIuaWQgPSBjaGFtcE9ialsnbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBOYW1lLmlkID0gY2hhbXBPYmpbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wTmFtZS5pbm5lclRleHQgPSBjaGFtcE9ialsnbmFtZSddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcFRyYWl0cy5pZCA9ICd0cmFpdHMnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdHJhaXQgb2YgY2hhbXBPYmpbJ3RyYWl0cyddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViVHJhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFpdFRleHQgPSB0cmFpdC5zcGxpdCgnLycpLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlRyYWl0LmlkID0gdHJhaXRUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlRyYWl0LnNyYyA9ICcuL2Fzc2V0cy9pbWFnZXMvdHJhaXQtaWNvbnMvJyArIGAke3RyYWl0VGV4dC50b0xvd2VyQ2FzZSgpfS5wbmdgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wVHJhaXRzLmFwcGVuZENoaWxkKHN1YlRyYWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBDb3N0LmlkID0gYCR7Y2hhbXBPYmpbJ2Nvc3QnXX1fY29zdGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcENvc3QuaW5uZXJUZXh0ID0gY2hhbXBPYmpbJ2Nvc3QnXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBJbWcuaWQgPSAnaW1nJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wSW1nLnNyYyA9ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFtcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbXBUcmFpdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbXBDb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoYW1wQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDaGFtcC5hcHBlbmRDaGlsZChjb3N0Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjaGFtcGlvbiBpbmZvOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG59Il0sIm5hbWVzIjpbImZldGNoQ2hhbXBpb25JbmZvIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiRXJyb3IiLCJjaGFtcEluZm8iLCJwYXJlbnRDaGFtcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldERhdGEiLCJjaGFtcERhdGEiLCJjaGFtcGlvbnNCeUNvc3QiLCJmb3JFYWNoIiwiY2hhbXBPYmoiLCJpbmNsdWRlcyIsInB1c2giLCJjb3N0IiwiY2hhbXBpb25zIiwibGVuZ3RoIiwiY29zdENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWludGVyVGV4dCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiY2hhbXBDb250YWluZXIiLCJjaGFtcE5hbWUiLCJjaGFtcFRyYWl0cyIsImNoYW1wQ29zdCIsImNoYW1wSW1nIiwiaWQiLCJ0cmFpdCIsInN1YlRyYWl0IiwidHJhaXRUZXh0Iiwic3BsaXQiLCJqb2luIiwic3JjIiwidG9Mb3dlckNhc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/champions.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWN0aWNpYW5zX25leHVzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;