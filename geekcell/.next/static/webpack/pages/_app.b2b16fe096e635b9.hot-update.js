/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Scrolltop.js":
/*!*********************************!*\
  !*** ./components/Scrolltop.js ***!
  \*********************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Scrolltop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Scrolltop */ \"./components/Scrolltop.js\");\n/* harmony import */ var _components_Scrolltop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Scrolltop__WEBPACK_IMPORTED_MODULE_6__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"lazyOnload\",\n                src: \"https://www.googletagmanager.com/gtag/js?id=G-C2GW04W1L3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"lazyOnload\",\n                children: \"window.dataLayer = window.dataLayer || [];\\n    function gtag(){dataLayer.push(arguments);}\\n    gtag('js', new Date());\\n    gtag('config', 'G-C2GW04W1L3');\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Scrolltop__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n// const [reloadKey, setReloadKey] = useState(1)\n// const [category, setCategory] = useState(\"Null\")\n// let checkcategory=\"Null\"\n//  let time = 0\n//  const validity=(time)=>{\n//     if(time===12){\n//       setCategory(\"Annually\")\n//       setReloadKey(Math.random())\n//     }\n//     else if(time===6){\n//       setCategory(\"Semi-annually\")\n//       setReloadKey(Math.random())\n//     }\n//     else if(time===1)\n//     {\n//       setCategory(\"Monthly\");\n//       setReloadKey(Math.random())\n//     }\n//     else if(time===0)\n//     {\n//       setCategory(\"Null\");\n//       setReloadKey(Math.random())\n//     }\n//   }\n{}var _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUNUO0FBQ0Y7QUFDWTtBQUNLO0FBRy9DLFNBQVNNLEtBQUssQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ25DLHFCQUFPOzswQkFDTCw4REFBQ04sb0RBQU07Z0JBQUNPLFFBQVEsRUFBQyxZQUFZO2dCQUFDQyxHQUFHLEVBQUUsMERBQTBEOzs7OztvQkFBVzswQkFDeEcsOERBQUNSLG9EQUFNO2dCQUFDTyxRQUFRLEVBQUMsWUFBWTswQkFFM0IsK0pBRzZCOzs7OztvQkFFdEI7MEJBQ1QsOERBQUNKLDhEQUFTOzs7O29CQUFFOzBCQUNaLDhEQUFDTCwwREFBTTs7OztvQkFBRzswQkFDViw4REFBQ08sU0FBUyxvQkFBT0MsU0FBUzs7OztvQkFBSTswQkFDOUIsOERBQUNQLDBEQUFNOzs7O29CQUFHOztvQkFDVDtDQUNKO0FBaEJRSyxLQUFBQSxLQUFLO0FBaUJkLCtEQUFlQSxLQUFLO0FBS3BCLGdEQUFnRDtBQUNoRCxtREFBbUQ7QUFDbkQsMkJBQTJCO0FBRTNCLGdCQUFnQjtBQUNoQiw0QkFBNEI7QUFDNUIscUJBQXFCO0FBQ3JCLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFDcEMsUUFBUTtBQUNSLHlCQUF5QjtBQUN6QixxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLFFBQVE7QUFDUix3QkFBd0I7QUFDeEIsUUFBUTtBQUNSLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFDcEMsUUFBUTtBQUNSLHdCQUF3QjtBQUN4QixRQUFRO0FBQ1IsNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQyxRQUFRO0FBQ1IsTUFBTTtBQUNOLEVBQWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTY3JvbGx0b3AgZnJvbSAnLi4vY29tcG9uZW50cy9TY3JvbGx0b3AnXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDw+XHJcbiAgICA8U2NyaXB0IHN0cmF0ZWd5PSdsYXp5T25sb2FkJyBzcmM9e1wiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLUMyR1cwNFcxTDNcIn0+PC9TY3JpcHQ+XHJcbiAgICA8U2NyaXB0IHN0cmF0ZWd5PSdsYXp5T25sb2FkJz5cclxuICAgIHtcclxuICAgICBgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgZ3RhZygnY29uZmlnJywgJ0ctQzJHVzA0VzFMMycpO2AgXHJcbiAgICB9XHJcbiAgICA8L1NjcmlwdD5cclxuICAgIDxTY3JvbGx0b3AvPlxyXG4gICAgPE5hdmJhciAvPlxyXG4gICAgPENvbXBvbmVudCAgIHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgPC8+XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IFtyZWxvYWRLZXksIHNldFJlbG9hZEtleV0gPSB1c2VTdGF0ZSgxKVxyXG4vLyBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiTnVsbFwiKVxyXG4vLyBsZXQgY2hlY2tjYXRlZ29yeT1cIk51bGxcIlxyXG5cclxuLy8gIGxldCB0aW1lID0gMFxyXG4vLyAgY29uc3QgdmFsaWRpdHk9KHRpbWUpPT57XHJcbi8vICAgICBpZih0aW1lPT09MTIpe1xyXG4vLyAgICAgICBzZXRDYXRlZ29yeShcIkFubnVhbGx5XCIpXHJcbi8vICAgICAgIHNldFJlbG9hZEtleShNYXRoLnJhbmRvbSgpKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZSBpZih0aW1lPT09Nil7XHJcbi8vICAgICAgIHNldENhdGVnb3J5KFwiU2VtaS1hbm51YWxseVwiKVxyXG4vLyAgICAgICBzZXRSZWxvYWRLZXkoTWF0aC5yYW5kb20oKSlcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2UgaWYodGltZT09PTEpXHJcbi8vICAgICB7XHJcbi8vICAgICAgIHNldENhdGVnb3J5KFwiTW9udGhseVwiKTtcclxuLy8gICAgICAgc2V0UmVsb2FkS2V5KE1hdGgucmFuZG9tKCkpXHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlIGlmKHRpbWU9PT0wKVxyXG4vLyAgICAge1xyXG4vLyAgICAgICBzZXRDYXRlZ29yeShcIk51bGxcIik7XHJcbi8vICAgICAgIHNldFJlbG9hZEtleShNYXRoLnJhbmRvbSgpKVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuey8qIDxDb21wb25lbnQgIGtleT17cmVsb2FkS2V5fSB2YWxpZGl0eT17dmFsaWRpdHl9IGNoZWNrY2F0ZWdvcnk9e2NhdGVnb3J5fSB7Li4ucGFnZVByb3BzfSAvPiAqL31cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiRm9vdGVyIiwiU2NyaXB0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTY3JvbGx0b3AiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0cmF0ZWd5Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});