"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Cards.js":
/*!*****************************!*\
  !*** ./components/Cards.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n\n\n\n\nconst Cards = (param)=>{\n    let { item  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        className: \"w-1/5\",\n        href: \"/blog/\".concat(item.slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white flex flex-col overflow-hidden  rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 xl:w-full  p-2 m-3  cursor-pointer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-56 overflow-hidden\",\n                    children: item.coverimage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"object-fill object-center h-full rounded-lg\",\n                        src: item.coverimage.url,\n                        width: 1200,\n                        height: 1000,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-between p-2 bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl font-semibold h-14\",\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base h-18 whitespace-normal overflow-hidden\",\n                            children: item.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                item.author && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center m-2 border-t-2 border-gray-100 w-full mt-auto \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-1 pt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiUser, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.author.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                                lineNumber: 27,\n                                columnNumber: 26\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Cards.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Cards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cards);\nvar _c;\n$RefreshReg$(_c, \"Cards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUNKO0FBQ2U7QUFFeEMsTUFBTUcsUUFBUSxTQUFZO1FBQVgsRUFBQ0MsS0FBSSxFQUFDO0lBQ25CLHFCQUNFLDhEQUFDSixrREFBSUE7UUFBQ0ssV0FBVTtRQUFRQyxNQUFNLFNBQW1CLE9BQVZGLEtBQUtHLElBQUk7a0JBQzlDLDRFQUFDQztZQUFJSCxXQUFVOzs4QkFDYiw4REFBQ0c7b0JBQUlILFdBQVU7OEJBQ1pELEtBQUtLLFVBQVUsa0JBQ2QsOERBQUNDO3dCQUNDTCxXQUFVO3dCQUNWTSxLQUFLUCxLQUFLSyxVQUFVLENBQUNHLEdBQUc7d0JBQ3hCQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFJViw4REFBQ1A7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDVzs0QkFBRVgsV0FBVTtzQ0FBOEJELEtBQUthLEtBQUs7Ozs7OztzQ0FDckQsOERBQUNEOzRCQUFFWCxXQUFVO3NDQUFvREQsS0FBS2MsV0FBVzs7Ozs7Ozs7Ozs7O2dCQUVsRmQsS0FBS2UsTUFBTSxrQkFDViw4REFBQ1g7b0JBQUlILFdBQVU7OEJBQ2IsNEVBQUNHO3dCQUFJSCxXQUFVOzswQ0FDYiw4REFBQ0gsa0RBQU1BOzs7Ozs0QkFBRzswQ0FBQyw4REFBQ2M7MENBQUdaLEtBQUtlLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83QztLQTdCTWpCO0FBK0JOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZHMuanM/ZjFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRpVXNlciB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xyXG5cclxuY29uc3QgQ2FyZHMgPSAoe2l0ZW19KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGNsYXNzTmFtZT0ndy0xLzUnIGhyZWY9e2AvYmxvZy8ke2l0ZW0uc2x1Z31gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBmbGV4IGZsZXgtY29sIG92ZXJmbG93LWhpZGRlbiAgcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIHNtOnctMS8zIG1kOnctMS80IHhsOnctZnVsbCAgcC0yIG0tMyAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNTYgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICB7aXRlbS5jb3ZlcmltYWdlICYmIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1maWxsIG9iamVjdC1jZW50ZXIgaC1mdWxsIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbS5jb3ZlcmltYWdlLnVybH1cclxuICAgICAgICAgICAgICB3aWR0aD17MTIwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9XHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTIgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBoLTE0XCI+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGgtMTggd2hpdGVzcGFjZS1ub3JtYWwgb3ZlcmZsb3ctaGlkZGVuXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpdGVtLmF1dGhvciAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG0tMiBib3JkZXItdC0yIGJvcmRlci1ncmF5LTEwMCB3LWZ1bGwgbXQtYXV0byBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEgcHQtMlwiPlxyXG4gICAgICAgICAgICAgIDxUaVVzZXIgLz4gPHA+e2l0ZW0uYXV0aG9yLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRzXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJUaVVzZXIiLCJDYXJkcyIsIml0ZW0iLCJjbGFzc05hbWUiLCJocmVmIiwic2x1ZyIsImRpdiIsImNvdmVyaW1hZ2UiLCJpbWciLCJzcmMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cards.js\n"));

/***/ })

});