"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/techhub",{

/***/ "./components/Pages.js":
/*!*****************************!*\
  !*** ./components/Pages.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Pages = function(param) {\n    var blogs = param.blogs, visible = param.visible;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap place-content-center \",\n        children: blogs && blogs.slice(0, visible).map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                href: \"/Blog/\".concat(item.attributes.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white flex flex-col overflow-hidden rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 xl:w-w22 p-2 m-3 cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-56 overflow-hidden\",\n                            children: item.attributes.image.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"object-fill object-center h-full rounded-lg\",\n                                src: item.attributes.image.data.attributes.url,\n                                width: 1200,\n                                height: 1000,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                                lineNumber: 13,\n                                columnNumber: 21\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-between p-2 bg-white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-semibold h-14\",\n                                    children: item.attributes.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 19\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-base h-18 whitespace-normal overflow-hidden\",\n                                    children: item.attributes.desc\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 19\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, _this1),\n                        item.attributes.author.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center m-2 border-t-2 border-gray-100 w-full mt-auto \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-1 pt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TiUser, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 23\n                                    }, _this1),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.attributes.author.data.attributes.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 34\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                            lineNumber: 27,\n                            columnNumber: 19\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                    lineNumber: 10,\n                    columnNumber: 15\n                }, _this1)\n            }, item.id, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = Pages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pages);\nvar _c;\n$RefreshReg$(_c, \"Pages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXlCO0FBRXpCLElBQU1DLEtBQUssR0FBRyxnQkFBcUI7UUFBbkJDLEtBQUssU0FBTEEsS0FBSyxFQUFDQyxPQUFPLFNBQVBBLE9BQU87O0lBQzNCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzQ0FBc0M7a0JBQ2xESCxLQUFLLElBQ0pBLEtBQUssQ0FBQ0ksS0FBSyxDQUFDLENBQUMsRUFBRUgsT0FBTyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7WUFDcEMscUJBQ0UsOERBQUNDLElBQUk7Z0JBQWVDLElBQUksRUFBRSxRQUFPLENBQXVCLE9BQXJCRixJQUFJLENBQUNHLFVBQVUsQ0FBQ0MsSUFBSSxDQUFFOzBCQUN2RCw0RUFBQ1IsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHNIQUF5SDs7c0NBQ3RJLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsc0JBQXNCO3NDQUNsQ0csSUFBSSxDQUFDRyxVQUFVLENBQUNFLEtBQUssQ0FBQ0MsSUFBSSxrQkFDekIsOERBQUNDLEtBQUc7Z0NBQ0ZWLFNBQVMsRUFBQyw2Q0FBNkM7Z0NBQ3ZEVyxHQUFHLEVBQUVSLElBQUksQ0FBQ0csVUFBVSxDQUFDRSxLQUFLLENBQUNDLElBQUksQ0FBQ0gsVUFBVSxDQUFDTSxHQUFHO2dDQUM5Q0MsS0FBSyxFQUFFLElBQUk7Z0NBQ1hDLE1BQU0sRUFBRSxJQUFJO2dDQUNaQyxHQUFHLEVBQUMsRUFBRTs7Ozs7c0NBQ047Ozs7O2tDQUVBO3NDQUNOLDhEQUFDaEIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDRDQUE0Qzs7OENBQ3pELDhEQUFDZ0IsR0FBQztvQ0FBQ2hCLFNBQVMsRUFBQyw0QkFBNEI7OENBQUVHLElBQUksQ0FBQ0csVUFBVSxDQUFDVyxLQUFLOzs7OzswQ0FBSzs4Q0FDckUsOERBQUNELEdBQUM7b0NBQUNoQixTQUFTLEVBQUMsa0RBQWtEOzhDQUFFRyxJQUFJLENBQUNHLFVBQVUsQ0FBQ1ksSUFBSTs7Ozs7MENBQUs7Ozs7OztrQ0FDdEY7d0JBQ0xmLElBQUksQ0FBQ0csVUFBVSxDQUFDYSxNQUFNLENBQUNWLElBQUksa0JBQzFCLDhEQUFDVixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsa0VBQWtFO3NDQUMvRSw0RUFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGtDQUFrQzs7a0RBQy9DLDhEQUFDb0IsTUFBTTs7Ozs4Q0FBRztvQ0FBQSxHQUFDO2tEQUFBLDhEQUFDSixHQUFDO2tEQUFFYixJQUFJLENBQUNHLFVBQVUsQ0FBQ2EsTUFBTSxDQUFDVixJQUFJLENBQUNILFVBQVUsQ0FBQ2UsSUFBSTs7Ozs7OENBQUs7Ozs7OztzQ0FDM0Q7Ozs7O2tDQUNGOzs7Ozs7MEJBRUo7ZUF4QkdsQixJQUFJLENBQUNtQixFQUFFOzs7O3NCQXlCWCxDQUNQO1NBQ0gsQ0FBQzs7Ozs7YUFDQSxDQUNOO0NBQ0g7QUFwQ0sxQixLQUFBQSxLQUFLO0FBc0NYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZXMuanM/YTRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQYWdlcyA9ICh7YmxvZ3MsdmlzaWJsZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBwbGFjZS1jb250ZW50LWNlbnRlciBcIj5cclxuICAgICAge2Jsb2dzICYmXHJcbiAgICAgICAgYmxvZ3Muc2xpY2UoMCwgdmlzaWJsZSkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGhyZWY9e2AvQmxvZy8ke2l0ZW0uYXR0cmlidXRlcy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gIHJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBzbTp3LTEvMyBtZDp3LTEvNCB4bDp3LXcyMiAgcC0yIG0tMyAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uYXR0cmlidXRlcy5pbWFnZS5kYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtZmlsbCBvYmplY3QtY2VudGVyIGgtZnVsbCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5hdHRyaWJ1dGVzLmltYWdlLmRhdGEuYXR0cmlidXRlcy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTIgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIGgtMTRcIj57aXRlbS5hdHRyaWJ1dGVzLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGgtMTggd2hpdGVzcGFjZS1ub3JtYWwgb3ZlcmZsb3ctaGlkZGVuXCI+e2l0ZW0uYXR0cmlidXRlcy5kZXNjfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uYXR0cmlidXRlcy5hdXRob3IuZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbS0yIGJvcmRlci10LTIgYm9yZGVyLWdyYXktMTAwIHctZnVsbCBtdC1hdXRvIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaVVzZXIgLz4gPHA+e2l0ZW0uYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQYWdlcyIsImJsb2dzIiwidmlzaWJsZSIsImRpdiIsImNsYXNzTmFtZSIsInNsaWNlIiwibWFwIiwiaXRlbSIsIkxpbmsiLCJocmVmIiwiYXR0cmlidXRlcyIsInNsdWciLCJpbWFnZSIsImRhdGEiLCJpbWciLCJzcmMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJ0aXRsZSIsImRlc2MiLCJhdXRob3IiLCJUaVVzZXIiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pages.js\n");

/***/ })

});