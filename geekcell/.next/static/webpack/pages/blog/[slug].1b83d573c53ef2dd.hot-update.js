"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar post = function(param) {\n    var blog = param.blog, post1 = param.post;\n    var tempdate = blog.date;\n    var mydate = new Date(tempdate).toDateString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    blog.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \" \",\n                            blog.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: [\n                                    blog.seo.title,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 18,\n                                columnNumber: 26\n                            }, _this),\n                            blog.seo.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: blog.seo.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 19,\n                                columnNumber: 38\n                            }, _this),\n                            blog.seo.keywords && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.seo.keywords\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 20,\n                                columnNumber: 35\n                            }, _this),\n                            blog.seo.metaRobots && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"robots\",\n                                content: blog.seo.metaRobots\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 21,\n                                columnNumber: 37\n                            }, _this),\n                            blog.seo.canonicalURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.seo.canonicalURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 22,\n                                columnNumber: 39\n                            }, _this),\n                            \" \"\n                        ]\n                    }, void 0, true),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Geeklogo5-modified.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"language\",\n                        content: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container mx-auto flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/6 mx-auto mt-6 bg-white rounded-md \",\n                    children: [\n                        blog.coverimage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md border-2 md:max-h-128 overflow-hidden \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"GeekImage\",\n                                className: \"object-center h-60 md:h-128 w-full place-self-stretch \",\n                                src: blog.coverimage.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded-md my-4 border-2 border-gray-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" p-2 rounded-none font-semibold text-5xl\",\n                                    children: blog.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2 flex items-center space-x-2 text-sm\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaUser, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"/\",\n                                                    children: blog.author.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                \" on \",\n                                                mydate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blogpost p-4 rounded-md w-full prose max-w-none\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: post1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDM0Isa0RBQU07Ozs7aURBQUc7c0RBQ1YsOERBQUNrQyxHQUFDOzs4REFDQSw4REFBQ0MsR0FBQztvREFBQ2YsSUFBSSxFQUFDLEdBQUc7OERBQUVqQixJQUFJLENBQUNpQyxNQUFNLENBQUN2QixJQUFJOzs7Ozt5REFBSztnREFBQSxNQUFJO2dEQUFDUCxNQUFNOzs7Ozs7aURBQzNDOzs7Ozs7eUNBQ0E7OENBQ04sOERBQUNzQixLQUFHO29DQUFDRCxTQUFTLEVBQUMsaURBQWtEO29DQUFDVSx1QkFBdUIsRUFBRTt3Q0FBRUMsTUFBTSxFQUFFcEMsS0FBSTtxQ0FBRTs7Ozs7eUNBQVE7Ozs7OztpQ0FDL0c7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0U7O29CQUNULENBQ0g7Q0FDSDs7QUFpREQsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz9mYTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGYVVzZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xyXG5cclxuY29uc3QgcG9zdCA9ICh7IGJsb2csIHBvc3QgfSkgPT4ge1xyXG4gIGxldCB0ZW1wZGF0ZSA9IGJsb2cuZGF0ZTtcclxuICB2YXIgbXlkYXRlID0gbmV3IERhdGUodGVtcGRhdGUpLnRvRGF0ZVN0cmluZygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAge2Jsb2cuc2VvICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAge2Jsb2cuc2VvICYmIDx0aXRsZT57YmxvZy5zZW8udGl0bGV9IDwvdGl0bGU+fVxyXG4gICAgICAgICAgICB7YmxvZy5zZW8uZGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YmxvZy5zZW8uZGVzY3JpcHRpb259IC8+fVxyXG4gICAgICAgICAgICB7YmxvZy5zZW8ua2V5d29yZHMgJiYgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YmxvZy5zZW8ua2V5d29yZHN9IC8+fVxyXG4gICAgICAgICAgICB7YmxvZy5zZW8ubWV0YVJvYm90cyAmJiA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD17YmxvZy5zZW8ubWV0YVJvYm90c30gLz59XHJcbiAgICAgICAgICAgIHtibG9nLnNlby5jYW5vbmljYWxVUkwgJiYgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YmxvZy5zZW8uY2Fub25pY2FsVVJMfSAvPn17XCIgXCJ9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb25zL0dlZWtsb2dvNS1tb2RpZmllZC5wbmdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwibGFuZ3VhZ2VcIiBjb250ZW50PVwiRW5nbGlzaFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIGFzeW5jXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tL3BhZ2VhZC9qcy9hZHNieWdvb2dsZS5qcz9jbGllbnQ9Y2EtcHViLTIzNzg1NDg2ODE1MjUxMDZcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgIG14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy00LzYgbXgtYXV0byBtdC02ICBiZy13aGl0ZSAgIHJvdW5kZWQtbWQgXCI+XHJcbiAgICAgICAgICB7YmxvZy5jb3ZlcmltYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlci0yIG1kOm1heC1oLTEyOCBvdmVyZmxvdy1oaWRkZW4gXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBhbHQ9e1wiR2Vla0ltYWdlXCJ9IGNsYXNzTmFtZT1cIm9iamVjdC1jZW50ZXIgaC02MCBtZDpoLTEyOCB3LWZ1bGwgcGxhY2Utc2VsZi1zdHJldGNoIFwiIHNyYz17YmxvZy5jb3ZlcmltYWdlLnVybH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbWQgbXktNCBib3JkZXItMiBib3JkZXItZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBwLTIgcm91bmRlZC1ub25lIGZvbnQtc2VtaWJvbGQgdGV4dC01eGxcIj57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxGYVVzZXIgLz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+e2Jsb2cuYXV0aG9yLm5hbWV9PC9hPiBvbiB7bXlkYXRlfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ3Bvc3QgcC00IHJvdW5kZWQtbWQgIHctZnVsbCBwcm9zZSBtYXgtdy1ub25lXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0IH19PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXN9KSB7XHJcbiAgLy8gbGV0IHNsdWcgPSBcIm15LWZpcnN0LWJsb2cxXCJcclxuXHJcbiAgXHJcbiAgY29uc3QgUVVFUlkgPSBncWxgXHJcbiAgICBxdWVyeSBibG9nKCRzbHVnOiBTdHJpbmchKSB7XHJcbiAgICAgIGJsb2cod2hlcmU6IHsgc2x1ZzogJHNsdWcgfSkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICBwb3N0IHtcclxuICAgICAgICAgIGh0bWxcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0ZVxyXG4gICAgICAgIHNlbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGtleXdvcmRzXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgICAgY292ZXJpbWFnZSB7XHJcbiAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgYXV0aG9yIHtcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IGVuZHBvaW50ID0gXCJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsNWw0d3FwczNxdTEwMXRhMDVsb2ZtNnMvbWFzdGVyXCI7XHJcbiAgbGV0IHZhcmlhYmxlcyA9IHtcclxuICAgIHNsdWc6cGFyYW1zLnNsdWdcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYmxvZyB9ID0gYXdhaXQgcmVxdWVzdChlbmRwb2ludCxRVUVSWSwgdmFyaWFibGVzKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJsb2c6IGJsb2csIHBvc3Q6IGJsb2cucG9zdC5odG1sIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJTY3JpcHQiLCJSZWFjdCIsIkhlYWQiLCJGYVVzZXIiLCJHcmFwaFFMQ2xpZW50IiwicG9zdCIsImJsb2ciLCJ0ZW1wZGF0ZSIsImRhdGUiLCJteWRhdGUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwic2VvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImtleXdvcmRzIiwibWV0YVJvYm90cyIsImNhbm9uaWNhbFVSTCIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsInNjcmlwdCIsImFzeW5jIiwic3JjIiwiY3Jvc3NvcmlnaW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiY292ZXJpbWFnZSIsImltZyIsImFsdCIsInVybCIsImgxIiwicCIsImEiLCJhdXRob3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});