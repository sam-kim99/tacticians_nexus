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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchChampionInfo: function() { return /* binding */ fetchChampionInfo; }\n/* harmony export */ });\nfunction fetchChampionInfo() {\n  return fetch('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json').then(res => {\n    if (res.ok) {\n      return res.json();\n    } else {\n      throw new Error('Failed to fetch champion info');\n    }\n  }).then(champInfo => {\n    const parentChamp = document.querySelector('.champions');\n    const setData = champInfo['setData'];\n    const champData = setData[4];\n    const championsByCost = {\n      1: [],\n      2: [],\n      3: [],\n      4: [],\n      5: []\n    };\n    champData['champions'].forEach(champObj => {\n      if (champObj['characterName'].includes('TFT10') && champObj['cost'] >= 1 && champObj['cost'] <= 5) {\n        championsByCost[champObj['cost']].push(champObj);\n      }\n    });\n    for (let cost = 1; cost <= 5; cost++) {\n      const champions = championsByCost[cost];\n      if (champions.length > 0) {\n        const costContainer = document.createElement('div');\n        costContainer.classList.add(`${cost}-cost`);\n        const containterText = document.createElement('h2');\n        champions.forEach(champObj => {\n          const champContainer = document.createElement('div');\n          const champName = document.createElement('div');\n          const champTraits = document.createElement('div');\n          const champCost = document.createElement('div');\n          const champImg = document.createElement('img');\n          containterText.innerText = `${cost} Cost`;\n          champContainer.id = champObj['name'];\n          champName.id = champObj['name'];\n          champName.innerText = champObj['name'];\n          champTraits.id = 'traits';\n          for (let trait of champObj['traits']) {\n            const subTrait = document.createElement('img');\n            const traitText = trait.split('/').join('');\n            subTrait.id = traitText;\n            subTrait.src = './assets/images/trait-icons/' + `${traitText.toLowerCase()}.png`;\n            champTraits.appendChild(subTrait);\n          }\n          champCost.id = `${champObj['cost']}_cost`;\n          champCost.innerText = champObj['cost'];\n          champImg.id = 'img';\n          champImg.src = '';\n          champContainer.appendChild(champName);\n          champContainer.appendChild(champTraits);\n          champContainer.appendChild(champCost);\n          champContainer.appendChild(document.createElement('br'));\n          costContainer.appendChild(champContainer);\n        });\n        parentChamp.appendChild(containterText);\n        parentChamp.appendChild(costContainer);\n      }\n    }\n  }).catch(error => {\n    console.error('Error fetching champion info:', error);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFjdGljaWFuc19uZXh1cy8uL3NyYy9zY3JpcHRzL2NoYW1waW9ucy5qcz9lMWMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmZXRjaENoYW1waW9uSW5mbygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcmF3LmNvbW11bml0eWRyYWdvbi5vcmcvbGF0ZXN0L2NkcmFnb24vdGZ0L2VuX3VzLmpzb24nKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjaGFtcGlvbiBpbmZvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGNoYW1wSW5mbyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRDaGFtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFtcGlvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IHNldERhdGEgPSBjaGFtcEluZm9bJ3NldERhdGEnXTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW1wRGF0YSA9IHNldERhdGFbNF07XG4gICAgICAgICAgICBjb25zdCBjaGFtcGlvbnNCeUNvc3QgPSB7XG4gICAgICAgICAgICAgICAgMTogW10sXG4gICAgICAgICAgICAgICAgMjogW10sXG4gICAgICAgICAgICAgICAgMzogW10sXG4gICAgICAgICAgICAgICAgNDogW10sXG4gICAgICAgICAgICAgICAgNTogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNoYW1wRGF0YVsnY2hhbXBpb25zJ10uZm9yRWFjaChjaGFtcE9iaiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW1wT2JqWydjaGFyYWN0ZXJOYW1lJ10uaW5jbHVkZXMoJ1RGVDEwJykgJiYgY2hhbXBPYmpbJ2Nvc3QnXSA+PSAxICYmIGNoYW1wT2JqWydjb3N0J10gPD0gNSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFtcGlvbnNCeUNvc3RbY2hhbXBPYmpbJ2Nvc3QnXV0ucHVzaChjaGFtcE9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgY29zdCA9IDE7IGNvc3QgPD0gNTsgY29zdCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbXBpb25zID0gY2hhbXBpb25zQnlDb3N0W2Nvc3RdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoYW1waW9ucy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29zdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjb3N0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7Y29zdH0tY29zdGApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWludGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNoYW1waW9ucy5mb3JFYWNoKGNoYW1wT2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFtcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW1wVHJhaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFtcENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW50ZXJUZXh0LmlubmVyVGV4dCA9IGAke2Nvc3R9IENvc3RgO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcENvbnRhaW5lci5pZCA9IGNoYW1wT2JqWyduYW1lJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcE5hbWUuaWQgPSBjaGFtcE9ialsnbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBOYW1lLmlubmVyVGV4dCA9IGNoYW1wT2JqWyduYW1lJ107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wVHJhaXRzLmlkID0gJ3RyYWl0cyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB0cmFpdCBvZiBjaGFtcE9ialsndHJhaXRzJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJUcmFpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWl0VGV4dCA9IHRyYWl0LnNwbGl0KCcvJykuam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHJhaXQuaWQgPSB0cmFpdFRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViVHJhaXQuc3JjID0gJy4vYXNzZXRzL2ltYWdlcy90cmFpdC1pY29ucy8nICsgYCR7dHJhaXRUZXh0LnRvTG93ZXJDYXNlKCl9LnBuZ2A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBUcmFpdHMuYXBwZW5kQ2hpbGQoc3ViVHJhaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcENvc3QuaWQgPSBgJHtjaGFtcE9ialsnY29zdCddfV9jb3N0YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wQ29zdC5pbm5lclRleHQgPSBjaGFtcE9ialsnY29zdCddO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcEltZy5pZCA9ICdpbWcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBJbWcuc3JjID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoYW1wTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFtcFRyYWl0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFtcENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFtcENvc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbXBDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENoYW1wLmFwcGVuZENoaWxkKGNvbnRhaW50ZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q2hhbXAuYXBwZW5kQ2hpbGQoY29zdENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2hhbXBpb24gaW5mbzonLCBlcnJvcik7XG4gICAgICAgIH0pO1xufSJdLCJuYW1lcyI6WyJmZXRjaENoYW1waW9uSW5mbyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsIkVycm9yIiwiY2hhbXBJbmZvIiwicGFyZW50Q2hhbXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXREYXRhIiwiY2hhbXBEYXRhIiwiY2hhbXBpb25zQnlDb3N0IiwiZm9yRWFjaCIsImNoYW1wT2JqIiwiaW5jbHVkZXMiLCJwdXNoIiwiY29zdCIsImNoYW1waW9ucyIsImxlbmd0aCIsImNvc3RDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnRlclRleHQiLCJjaGFtcENvbnRhaW5lciIsImNoYW1wTmFtZSIsImNoYW1wVHJhaXRzIiwiY2hhbXBDb3N0IiwiY2hhbXBJbWciLCJpbm5lclRleHQiLCJpZCIsInRyYWl0Iiwic3ViVHJhaXQiLCJ0cmFpdFRleHQiLCJzcGxpdCIsImpvaW4iLCJzcmMiLCJ0b0xvd2VyQ2FzZSIsImFwcGVuZENoaWxkIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/champions.js\n");

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