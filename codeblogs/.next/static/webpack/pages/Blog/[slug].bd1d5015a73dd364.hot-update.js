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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_Blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Blogs */ \"./models/Blogs.js\");\n/* harmony import */ var _models_Authors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Authors */ \"./models/Authors.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"./node_modules/mongoose/dist/browser.umd.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.browser.js\");\nvar HtmlToReactParser = (__webpack_require__(/*! html-to-react */ \"./node_modules/html-to-react/index.js\").Parser);\nvar post = function(param) {\n    var blog = param.blog, post1 = param.post;\n    var htmlToReactParser = new HtmlToReactParser();\n    var reactElement = htmlToReactParser.parse(post1);\n    var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container px-5 mx-auto flex flex-col \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:w-4/6 mx-auto bg-white border-2 rounded-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-md overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        alt: \"content\",\n                        className: \" object-center max-h-128\",\n                        src: blog.attributes.image.data && blog.attributes.image.data.attributes.name,\n                        width: \"1200\",\n                        height: \"1500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col mt-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: blog && blog.attributes.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 24,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container py-4 rounded-md mb-2 w-full\",\n                            dangerouslySetInnerHTML: {\n                                __html: reactHtml\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-center lg:flex border-2 border-purple-500 rounded-md h-auto p-6 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"lg:self-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-20 h-20 rounded-full inline-flex lg:self-center items-center m-4 justify-center align-middle bg-gray-800 text-gray-600\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            fill: \"none\",\n                                            stroke: \"currentColor\",\n                                            strokeLinecap: \"round\",\n                                            strokeLinejoin: \"round\",\n                                            strokeWidth: \"2\",\n                                            className: \"w-10 h-10\",\n                                            viewBox: \"0 0 24 24\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 37\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                    cx: \"12\",\n                                                    cy: \"7\",\n                                                    r: \"4\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 37\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col self-center mx-4 px-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"self-start\",\n                                            children: blog.attributes.author.data.attributes.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 37,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-left\",\n                                            children: [\n                                                blog.attributes.author.data.attributes.about,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name,\n                                                blog.attributes.author.data.attributes.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 38,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\blogging - Copy\\\\codetrading\\\\codeblogs\\\\pages\\\\Blog\\\\[slug].js\",\n        lineNumber: 17,\n        columnNumber: 12\n    }, _this);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQUV0QyxJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJO2dEQUFFZixJQUFJLENBQUNZLFVBQVUsQ0FBQ3dCLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ0YsVUFBVSxDQUFDRyxJQUFJOzs7Ozs7aURBQUs7Ozs7Ozt5Q0FDMWQ7Ozs7OztpQ0FDSjs7Ozs7O3lCQUNKOzs7Ozs7aUJBQ0o7Ozs7O2FBQ0o7Q0FFYjs7QUF1QkQsK0RBQWVoQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Jsb2cvW3NsdWddLmpzPzc5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgQmxvZ3MgZnJvbSAnLi4vLi4vbW9kZWxzL0Jsb2dzJ1xyXG5pbXBvcnQgQXV0aG9ycyBmcm9tICcuLi8uLi9tb2RlbHMvQXV0aG9ycydcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnbmV4dC1tZHgtcmVtb3RlL3NlcmlhbGl6ZSc7XHJcbmltcG9ydCB7IE1EWFJlbW90ZSB9IGZyb20gJ25leHQtbWR4LXJlbW90ZSc7XHJcbmNvbnN0IFJlYWN0RE9NU2VydmVyID0gcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpO1xyXG5jb25zdCBIdG1sVG9SZWFjdFBhcnNlciA9IHJlcXVpcmUoJ2h0bWwtdG8tcmVhY3QnKS5QYXJzZXI7XHJcblxyXG5jb25zdCBwb3N0ID0gKHsgYmxvZywgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBodG1sVG9SZWFjdFBhcnNlciA9IG5ldyBIdG1sVG9SZWFjdFBhcnNlcigpO1xyXG4gICAgY29uc3QgcmVhY3RFbGVtZW50ID0gaHRtbFRvUmVhY3RQYXJzZXIucGFyc2UocG9zdCk7XHJcbiAgICBjb25zdCByZWFjdEh0bWwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChyZWFjdEVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtNSBteC1hdXRvIGZsZXggZmxleC1jb2wgIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNC82IG14LWF1dG8gYmctd2hpdGUgYm9yZGVyLTIgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kICBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCIgb2JqZWN0LWNlbnRlciBtYXgtaC0xMjhcIiBzcmM9e2Jsb2cuYXR0cmlidXRlcy5pbWFnZS5kYXRhICYmIGJsb2cuYXR0cmlidXRlcy5pbWFnZS5kYXRhLmF0dHJpYnV0ZXMubmFtZX13aWR0aD1cIjEyMDBcIiBoZWlnaHQ9XCIxNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPntibG9nICYmIGJsb2cuYXR0cmlidXRlcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNCAgcm91bmRlZC1tZCBtYi0yIHctZnVsbFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnJlYWN0SHRtbH19PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgbGc6ZmxleCBib3JkZXItMiBib3JkZXItcHVycGxlLTUwMCByb3VuZGVkLW1kIGgtYXV0byBwLTYgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6c2VsZi1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLWZ1bGwgaW5saW5lLWZsZXggbGc6c2VsZi1jZW50ZXIgaXRlbXMtY2VudGVyIG0tNCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUgYmctZ3JheS04MDAgdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwIDIxdi0yYTQgNCAwIDAwLTQtNEg4YTQgNCAwIDAwLTQgNHYyXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjdcIiByPVwiNFwiPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc2VsZi1jZW50ZXIgIG14LTQgcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwic2VsZi1zdGFydFwiPntibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPntibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5hYm91dH17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX17YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxufVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICAgIGlmICghbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSlcclxuLy8gICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKVxyXG4vLyAgICAgLy8gY29uc29sZS5sb2coY29udGV4dClcclxuLy8gICAgIGxldCBibG9nID0gYXdhaXQgQmxvZ3MuZmluZE9uZSh7c2x1Zzpjb250ZXh0LnF1ZXJ5LnNsdWd9KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGJsb2cuYXV0aG9yKVxyXG4vLyAgICAgbGV0IGF1dGhvciA9IGF3YWl0IEF1dGhvcnMuZmluZE9uZSh7bmFtZTpibG9nLmF1dGhvcn0pXHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICBwcm9wczoge2Jsb2dzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJsb2cpKSAsIGF1dGhvcnM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXV0aG9yKSkgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBwb3N0XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IFwiQmVhcmVyIDJkMDdkY2IwNjRiMTE2ODgwMzVlNDQzOWViODM4MzYxODkzYjlkMzJjZDk4YjNiNjdiZjU2YTNiOGU2NGVjZDc5Zjk5ODVjM2M1MDI1ZTJjNjY5MzUwYzY3ZmVjODY0ZjMwYjM0OTdhNGE1ODExYjk3Yzc5ZWU2NzM0YjBiZDRkZjUyODU5MTVhOTI5MmQ5ODEzZTVjMTFjY2IzMDEwOTFhYTE5YjA4MGU1NTllNjg2Mzc1ZTU4YWIxNTQ1ZjkwYjQwZjZhNjQ1OTgwYzdhMDk3ZjYzYjUyOGQ2ZTAwODNmOWRiOGY1NjYwMGZhNmM0M2Y3MzFiMzAxNjFmNmQ2NjZcIiB9XHJcbiAgICBsZXQgYSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL2Jsb2dzP2ZpbHRlcnNbc2x1Z11bJGVxXT0ke2NvbnRleHQucXVlcnkuc2x1Z31gICtgJnBvcHVsYXRlPSpgLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgIGxldCBibG9nID0gYXdhaXQgYS5qc29uKCk7XHJcbiAgICBsZXQgYmxvZ3Bvc3QgPSBibG9nLmRhdGFbMF0uYXR0cmlidXRlcy5wb3N0O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgYmxvZzogYmxvZy5kYXRhWzBdLCBwb3N0OiBibG9ncG9zdCB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBwb3N0Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkltYWdlIiwiQmxvZ3MiLCJBdXRob3JzIiwibW9uZ29vc2UiLCJSZWFjdE1hcmtkb3duIiwic2VyaWFsaXplIiwiTURYUmVtb3RlIiwiUmVhY3RET01TZXJ2ZXIiLCJyZXF1aXJlIiwiSHRtbFRvUmVhY3RQYXJzZXIiLCJQYXJzZXIiLCJwb3N0IiwiYmxvZyIsImh0bWxUb1JlYWN0UGFyc2VyIiwicmVhY3RFbGVtZW50IiwicGFyc2UiLCJyZWFjdEh0bWwiLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJhbHQiLCJzcmMiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJkYXRhIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJ0aXRsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwidmlld0JveCIsInBhdGgiLCJkIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJoNCIsImF1dGhvciIsInAiLCJhYm91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Blog/[slug].js\n");

/***/ })

});