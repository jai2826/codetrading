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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar post = function(param) {\n    var blog = param.blog, post1 = param.post;\n    var tempdate = blog.attributes.date;\n    var mydate = new Date(tempdate).toDateString();\n    // console.table(my)\n    var precode = document.getElementsByTagName(\"code\");\n    precode.select();\n    precode.setSelectionRange(0, 99999);\n    navigator.clipboard.writeText(precode.value);\n    alert(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    blog.attributes.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \" \",\n                            blog.attributes.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: [\n                                    blog.attributes.seo.metaTitle,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 23,\n                                columnNumber: 37\n                            }, _this),\n                            blog.attributes.seo.metaDescription && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: blog.attributes.seo.metaDescription\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 24,\n                                columnNumber: 53\n                            }, _this),\n                            blog.attributes.seo.keywords && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.attributes.seo.keywords\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 25,\n                                columnNumber: 46\n                            }, _this),\n                            blog.attributes.seo.metaRobots && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"robots\",\n                                content: blog.attributes.seo.metaRobots\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 26,\n                                columnNumber: 48\n                            }, _this),\n                            blog.attributes.seo.canonicalURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.attributes.seo.canonicalURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 27,\n                                columnNumber: 50\n                            }, _this),\n                            \" \"\n                        ]\n                    }, void 0, true),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Geeklogo5-modified.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"language\",\n                        content: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container mx-auto flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/6 mx-auto mt-6 bg-white rounded-md \",\n                    children: [\n                        blog.attributes.image.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md border-2 md:max-h-128 overflow-hidden \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: blog.attributes.image.data.attributes.alternativeText,\n                                className: \"object-center h-60 md:h-128 w-full place-self-stretch \",\n                                src: blog.attributes.image.data.attributes.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded-md my-4 border-2 border-gray-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" p-2 rounded-none font-semibold text-5xl\",\n                                    children: blog && blog.attributes.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2 flex items-center space-x-2 text-sm\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUser, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"/\",\n                                                    children: blog.attributes.author.data.attributes.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                \" on \",\n                                                mydate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blogpost p-4 rounded-md w-full prose max-w-none\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: post1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9CbG9nL1tzbHVnXS5qcz83OTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGYVVzZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmNvbnN0IHBvc3QgPSAoeyBibG9nLCBwb3N0IH0pID0+IHtcclxuICBsZXQgdGVtcGRhdGUgPSBibG9nLmF0dHJpYnV0ZXMuZGF0ZTtcclxuICB2YXIgbXlkYXRlID0gbmV3IERhdGUodGVtcGRhdGUpLnRvRGF0ZVN0cmluZygpO1xyXG4gIC8vIGNvbnNvbGUudGFibGUobXkpXHJcbiAgbGV0IHByZWNvZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY29kZScpXHJcbiAgICBwcmVjb2RlLnNlbGVjdCgpO1xyXG4gICAgcHJlY29kZS5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XHJcblxyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJlY29kZS52YWx1ZSk7XHJcbiAgICBhbGVydChcIlwiKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAge2Jsb2cuYXR0cmlidXRlcy5zZW8gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICB7YmxvZy5hdHRyaWJ1dGVzLnNlbyAmJiA8dGl0bGU+e2Jsb2cuYXR0cmlidXRlcy5zZW8ubWV0YVRpdGxlfSA8L3RpdGxlPn1cclxuICAgICAgICAgICAge2Jsb2cuYXR0cmlidXRlcy5zZW8ubWV0YURlc2NyaXB0aW9uICYmIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cuYXR0cmlidXRlcy5zZW8ubWV0YURlc2NyaXB0aW9ufSAvPn1cclxuICAgICAgICAgICAge2Jsb2cuYXR0cmlidXRlcy5zZW8ua2V5d29yZHMgJiYgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17YmxvZy5hdHRyaWJ1dGVzLnNlby5rZXl3b3Jkc30gLz59XHJcbiAgICAgICAgICAgIHtibG9nLmF0dHJpYnV0ZXMuc2VvLm1ldGFSb2JvdHMgJiYgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9e2Jsb2cuYXR0cmlidXRlcy5zZW8ubWV0YVJvYm90c30gLz59XHJcbiAgICAgICAgICAgIHtibG9nLmF0dHJpYnV0ZXMuc2VvLmNhbm9uaWNhbFVSTCAmJiA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtibG9nLmF0dHJpYnV0ZXMuc2VvLmNhbm9uaWNhbFVSTH0gLz59e1wiIFwifVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29ucy9HZWVrbG9nbzUtbW9kaWZpZWQucG5nXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImxhbmd1YWdlXCIgY29udGVudD1cIkVuZ2xpc2hcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM/Y2xpZW50PWNhLXB1Yi0yMzc4NTQ4NjgxNTI1MTA2XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyICBteC1hdXRvIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNC82IG14LWF1dG8gbXQtNiAgYmctd2hpdGUgICByb3VuZGVkLW1kIFwiPlxyXG4gICAgICAgICAge2Jsb2cuYXR0cmlidXRlcy5pbWFnZS5kYXRhICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlci0yIG1kOm1heC1oLTEyOCBvdmVyZmxvdy1oaWRkZW4gXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PXtibG9nLmF0dHJpYnV0ZXMuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLmFsdGVybmF0aXZlVGV4dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jZW50ZXIgaC02MCBtZDpoLTEyOCB3LWZ1bGwgcGxhY2Utc2VsZi1zdHJldGNoIFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Jsb2cuYXR0cmlidXRlcy5pbWFnZS5kYXRhLmF0dHJpYnV0ZXMudXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLW1kIG15LTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgcC0yIHJvdW5kZWQtbm9uZSBmb250LXNlbWlib2xkIHRleHQtNXhsXCI+e2Jsb2cgJiYgYmxvZy5hdHRyaWJ1dGVzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPEZhVXNlciAvPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj57YmxvZy5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX08L2E+IG9uIHtteWRhdGV9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ncG9zdCBwLTQgcm91bmRlZC1tZCAgdy1mdWxsIHByb3NlIG1heC13LW5vbmVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGxldCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuU1RSQVBJX1RPS0VOfWAgfTtcclxuICBsZXQgYSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9VUkx9L2FwaS9ibG9ncz9maWx0ZXJzW3NsdWddWyRlcV09JHtjb250ZXh0LnF1ZXJ5LnNsdWd9YCArIGAmcG9wdWxhdGU9KmAsIHtcclxuICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgfSk7XHJcbiAgbGV0IGJsb2cgPSBhd2FpdCBhLmpzb24oKTtcclxuICBsZXQgYmxvZ3Bvc3QgPSBibG9nLmRhdGFbMF0uYXR0cmlidXRlcy5wb3N0O1xyXG4gIC8vIGNvbnNvbGUubG9nKGJsb2cpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJsb2c6IGJsb2cuZGF0YVswXSwgcG9zdDogYmxvZ3Bvc3QgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwb3N0O1xyXG4iXSwibmFtZXMiOlsiU2NyaXB0IiwiUmVhY3QiLCJIZWFkIiwiRmFVc2VyIiwicG9zdCIsImJsb2ciLCJ0ZW1wZGF0ZSIsImF0dHJpYnV0ZXMiLCJkYXRlIiwibXlkYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInByZWNvZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ2YWx1ZSIsImFsZXJ0Iiwic2VvIiwidGl0bGUiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJrZXl3b3JkcyIsIm1ldGFSb2JvdHMiLCJjYW5vbmljYWxVUkwiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJzY3JpcHQiLCJhc3luYyIsInNyYyIsImNyb3Nzb3JpZ2luIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImltYWdlIiwiZGF0YSIsImltZyIsImFsdCIsImFsdGVybmF0aXZlVGV4dCIsInVybCIsImgxIiwicCIsImEiLCJhdXRob3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Blog/[slug].js\n");

/***/ })

});