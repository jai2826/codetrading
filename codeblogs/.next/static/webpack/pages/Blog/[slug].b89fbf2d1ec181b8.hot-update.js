"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Blog/[slug]",{

/***/ "./pages/Blog/[slug].js":
/*!******************************!*\
  !*** ./pages/Blog/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_Blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Blogs */ \"./models/Blogs.js\");\n/* harmony import */ var _models_Authors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Authors */ \"./models/Authors.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.browser.js\");\nvar HtmlToReactParser = (__webpack_require__(/*! html-to-react */ \"./node_modules/html-to-react/index.js\").Parser);\nvar post = function(param) {\n    var blog = param.blog, post1 = param.post;\n    var htmlToReactParser = new HtmlToReactParser();\n    var reactElement = htmlToReactParser.parse(post1);\n    var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container px-5 mx-auto flex flex-col \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:w-4/6 mx-auto bg-white border-2 rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-md overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        alt: \"content\",\n                        className: \" object-center max-h-128\",\n                        src: blog.attributes.image.data && blog.attributes.image.data.attributes.name,\n                        width: \"1200\",\n                        height: \"1500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col mt-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: blog && blog.attributes.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container py-4 rounded-md mb-2 w-full\",\n                            dangerouslySetInnerHTML: {\n                                __html: reactHtml\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-center lg:flex border-2 border-purple-500 rounded-md h-auto p-6 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"lg:self-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-20 h-20 rounded-full inline-flex lg:self-center items-center m-4 justify-center align-middle bg-gray-800 text-gray-600\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            fill: \"none\",\n                                            stroke: \"currentColor\",\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            className: \"w-10 h-10\",\n                                            viewBox: \"0 0 24 24\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 37\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                    cx: \"12\",\n                                                    cy: \"7\",\n                                                    r: \"4\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 37\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col self-center mx-4 px-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"self-start\",\n                                            children: blog.attributes.author.data.attributes.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                blog.attributes.author.data.attributes.about,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 38,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n        lineNumber: 17,\n        columnNumber: 12\n    }, _this);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Z0RBQUVmLElBQUksQ0FBQ1ksVUFBVSxDQUFDd0IsTUFBTSxDQUFDdEIsSUFBSSxDQUFDRixVQUFVLENBQUNHLElBQUk7Ozs7OztpREFBSzs7Ozs7O3lDQUNwYzs7Ozs7O2lDQUNKOzs7Ozs7eUJBQ0o7Ozs7OztpQkFDSjs7Ozs7YUFDSjtDQUViOztBQXVCRCwrREFBZWhCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQmxvZy9bc2x1Z10uanM/NzkxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBCbG9ncyBmcm9tICcuLi8uLi9tb2RlbHMvQmxvZ3MnXHJcbmltcG9ydCBBdXRob3JzIGZyb20gJy4uLy4uL21vZGVscy9BdXRob3JzJ1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICduZXh0LW1keC1yZW1vdGUvc2VyaWFsaXplJztcclxuaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlJztcclxuY29uc3QgUmVhY3RET01TZXJ2ZXIgPSByZXF1aXJlKCdyZWFjdC1kb20vc2VydmVyJyk7XHJcbmNvbnN0IEh0bWxUb1JlYWN0UGFyc2VyID0gcmVxdWlyZSgnaHRtbC10by1yZWFjdCcpLlBhcnNlcjtcclxuXHJcbmNvbnN0IHBvc3QgPSAoeyBibG9nLCBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGh0bWxUb1JlYWN0UGFyc2VyID0gbmV3IEh0bWxUb1JlYWN0UGFyc2VyKCk7XHJcbiAgICBjb25zdCByZWFjdEVsZW1lbnQgPSBodG1sVG9SZWFjdFBhcnNlci5wYXJzZShwb3N0KTtcclxuICAgIGNvbnN0IHJlYWN0SHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKHJlYWN0RWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC01IG14LWF1dG8gZmxleCBmbGV4LWNvbCAgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy00LzYgbXgtYXV0byBiZy13aGl0ZSBib3JkZXItMiByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiY29udGVudFwiIGNsYXNzTmFtZT1cIiBvYmplY3QtY2VudGVyIG1heC1oLTEyOFwiIHNyYz17YmxvZy5hdHRyaWJ1dGVzLmltYWdlLmRhdGEgJiYgYmxvZy5hdHRyaWJ1dGVzLmltYWdlLmRhdGEuYXR0cmlidXRlcy5uYW1lfXdpZHRoPVwiMTIwMFwiIGhlaWdodD1cIjE1MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2Jsb2cgJiYgYmxvZy5hdHRyaWJ1dGVzLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00ICByb3VuZGVkLW1kIG1iLTIgdy1mdWxsXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6cmVhY3RIdG1sfX0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBsZzpmbGV4IGJvcmRlci0yIGJvcmRlci1wdXJwbGUtNTAwIHJvdW5kZWQtbWQgaC1hdXRvIHAtNiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpzZWxmLWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwIHJvdW5kZWQtZnVsbCBpbmxpbmUtZmxleCBsZzpzZWxmLWNlbnRlciBpdGVtcy1jZW50ZXIgbS00IGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBiZy1ncmF5LTgwMCB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAgMjF2LTJhNCA0IDAgMDAtNC00SDhhNCA0IDAgMDAtNCA0djJcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiN1wiIHI9XCI0XCI+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzZWxmLWNlbnRlciAgbXgtNCBweC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJzZWxmLXN0YXJ0XCI+e2Jsb2cuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Jsb2cuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLmFib3V0fXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfXtibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG59XHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgICAgaWYgKCFtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKVxyXG4vLyAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkpXHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhjb250ZXh0KVxyXG4vLyAgICAgbGV0IGJsb2cgPSBhd2FpdCBCbG9ncy5maW5kT25lKHtzbHVnOmNvbnRleHQucXVlcnkuc2x1Z30pO1xyXG4vLyAgICAgY29uc29sZS5sb2coYmxvZy5hdXRob3IpXHJcbi8vICAgICBsZXQgYXV0aG9yID0gYXdhaXQgQXV0aG9ycy5maW5kT25lKHtuYW1lOmJsb2cuYXV0aG9yfSlcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgIHByb3BzOiB7YmxvZ3M6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYmxvZykpICwgYXV0aG9yczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhdXRob3IpKSB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IHBvc3RcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgMmQwN2RjYjA2NGIxMTY4ODAzNWU0NDM5ZWI4MzgzNjE4OTNiOWQzMmNkOThiM2I2N2JmNTZhM2I4ZTY0ZWNkNzlmOTk4NWMzYzUwMjVlMmM2NjkzNTBjNjdmZWM4NjRmMzBiMzQ5N2E0YTU4MTFiOTdjNzllZTY3MzRiMGJkNGRmNTI4NTkxNWE5MjkyZDk4MTNlNWMxMWNjYjMwMTA5MWFhMTliMDgwZTU1OWU2ODYzNzVlNThhYjE1NDVmOTBiNDBmNmE2NDU5ODBjN2EwOTdmNjNiNTI4ZDZlMDA4M2Y5ZGI4ZjU2NjAwZmE2YzQzZjczMWIzMDE2MWY2ZDY2NlwiIH1cclxuICAgIGxldCBhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvYmxvZ3M/ZmlsdGVyc1tzbHVnXVskZXFdPSR7Y29udGV4dC5xdWVyeS5zbHVnfWAgK2AmcG9wdWxhdGU9KmAsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgbGV0IGJsb2cgPSBhd2FpdCBhLmpzb24oKTtcclxuICAgIGxldCBibG9ncG9zdCA9IGJsb2cuZGF0YVswXS5hdHRyaWJ1dGVzLnBvc3Q7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBibG9nOiBibG9nLmRhdGFbMF0sIHBvc3Q6IGJsb2dwb3N0IH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBvc3QiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSW1hZ2UiLCJCbG9ncyIsIkF1dGhvcnMiLCJtb25nb29zZSIsIlJlYWN0TWFya2Rvd24iLCJzZXJpYWxpemUiLCJNRFhSZW1vdGUiLCJSZWFjdERPTVNlcnZlciIsInJlcXVpcmUiLCJIdG1sVG9SZWFjdFBhcnNlciIsIlBhcnNlciIsInBvc3QiLCJibG9nIiwiaHRtbFRvUmVhY3RQYXJzZXIiLCJyZWFjdEVsZW1lbnQiLCJwYXJzZSIsInJlYWN0SHRtbCIsInJlbmRlclRvU3RhdGljTWFya3VwIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsImFsdCIsInNyYyIsImF0dHJpYnV0ZXMiLCJpbWFnZSIsImRhdGEiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsInRpdGxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJzdmciLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsImg0IiwiYXV0aG9yIiwicCIsImFib3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Blog/[slug].js\n");

/***/ })

});