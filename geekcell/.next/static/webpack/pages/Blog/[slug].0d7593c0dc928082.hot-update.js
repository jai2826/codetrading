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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar post = function(param) {\n    var blog = param.blog, post1 = param.post;\n    var tempdate = blog.attributes.date;\n    var mydate = new Date(tempdate).toDateString();\n    // console.table(my)\n    if (true) {\n        react__WEBPACK_IMPORTED_MODULE_2___default().render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainWrapper, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n            lineNumber: 11,\n            columnNumber: 18\n        }, _this), document.getElementById(\"root\"));\n    }\n    var jk = document.getElementsByTagName(\"pre\").addEventListener(\"click\", myfunction());\n    var myfunction = function() {\n        var precode = document.getElementsByTagName(\"code\");\n        precode.select();\n        precode.setSelectionRange(0, 99999);\n        navigator.clipboard.writeText(precode.value);\n        alert(\"precode copied\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    blog.attributes.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \" \",\n                            blog.attributes.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: [\n                                    blog.attributes.seo.metaTitle,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 37\n                            }, _this),\n                            blog.attributes.seo.metaDescription && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: blog.attributes.seo.metaDescription\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 30,\n                                columnNumber: 53\n                            }, _this),\n                            blog.attributes.seo.keywords && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.attributes.seo.keywords\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 31,\n                                columnNumber: 46\n                            }, _this),\n                            blog.attributes.seo.metaRobots && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"robots\",\n                                content: blog.attributes.seo.metaRobots\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 32,\n                                columnNumber: 48\n                            }, _this),\n                            blog.attributes.seo.canonicalURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.attributes.seo.canonicalURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 33,\n                                columnNumber: 50\n                            }, _this),\n                            \" \"\n                        ]\n                    }, void 0, true),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Geeklogo5-modified.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"language\",\n                        content: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container mx-auto flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/6 mx-auto mt-6 bg-white rounded-md \",\n                    children: [\n                        blog.attributes.image.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md border-2 md:max-h-128 overflow-hidden \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: blog.attributes.image.data.attributes.alternativeText,\n                                className: \"object-center h-60 md:h-128 w-full place-self-stretch \",\n                                src: blog.attributes.image.data.attributes.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded-md my-4 border-2 border-gray-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" p-2 rounded-none font-semibold text-5xl\",\n                                    children: blog && blog.attributes.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2 flex items-center space-x-2 text-sm\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUser, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"/\",\n                                                    children: blog.attributes.author.data.attributes.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                \" on \",\n                                                mydate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blogpost p-4 rounded-md w-full prose max-w-none\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: post1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\Blog\\\\[slug].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ1IsSUFBSSxDQUFDM0MsVUFBVSxDQUFDMEIsSUFBSTs7Ozs7eURBQUs7Z0RBQUEsTUFBSTtnREFBQ3hCLE1BQU07Ozs7OztpREFDdEU7Ozs7Ozt5Q0FDQTs4Q0FDTiw4REFBQ3VDLEtBQUc7b0NBQUNELFNBQVMsRUFBQyxpREFBa0Q7b0NBQUNZLHVCQUF1QixFQUFFO3dDQUFFQyxNQUFNLEVBQUV4RCxLQUFJO3FDQUFFOzs7Ozt5Q0FBUTs7Ozs7O2lDQUMvRzs7Ozs7O3lCQUNGOzs7OztxQkFDRTs7b0JBQ1QsQ0FDSDtDQUNIOztBQWNELCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQmxvZy9bc2x1Z10uanM/NzkxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBwb3N0ID0gKHsgYmxvZywgcG9zdCB9KSA9PiB7XHJcbiAgbGV0IHRlbXBkYXRlID0gYmxvZy5hdHRyaWJ1dGVzLmRhdGU7XHJcbiAgdmFyIG15ZGF0ZSA9IG5ldyBEYXRlKHRlbXBkYXRlKS50b0RhdGVTdHJpbmcoKTtcclxuICAvLyBjb25zb2xlLnRhYmxlKG15KVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBSZWFjdC5yZW5kZXIoPE1haW5XcmFwcGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4gIH1cclxuICBjb25zdCBqayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicHJlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteWZ1bmN0aW9uKCkpO1xyXG4gIGNvbnN0IG15ZnVuY3Rpb249KCk9PntcclxuICBsZXQgcHJlY29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjb2RlJylcclxuICAgIHByZWNvZGUuc2VsZWN0KCk7XHJcbiAgICBwcmVjb2RlLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcclxuXHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcmVjb2RlLnZhbHVlKTtcclxuICAgIGFsZXJ0KFwicHJlY29kZSBjb3BpZWRcIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICB7YmxvZy5hdHRyaWJ1dGVzLnNlbyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIHtibG9nLmF0dHJpYnV0ZXMuc2VvICYmIDx0aXRsZT57YmxvZy5hdHRyaWJ1dGVzLnNlby5tZXRhVGl0bGV9IDwvdGl0bGU+fVxyXG4gICAgICAgICAgICB7YmxvZy5hdHRyaWJ1dGVzLnNlby5tZXRhRGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YmxvZy5hdHRyaWJ1dGVzLnNlby5tZXRhRGVzY3JpcHRpb259IC8+fVxyXG4gICAgICAgICAgICB7YmxvZy5hdHRyaWJ1dGVzLnNlby5rZXl3b3JkcyAmJiA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtibG9nLmF0dHJpYnV0ZXMuc2VvLmtleXdvcmRzfSAvPn1cclxuICAgICAgICAgICAge2Jsb2cuYXR0cmlidXRlcy5zZW8ubWV0YVJvYm90cyAmJiA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD17YmxvZy5hdHRyaWJ1dGVzLnNlby5tZXRhUm9ib3RzfSAvPn1cclxuICAgICAgICAgICAge2Jsb2cuYXR0cmlidXRlcy5zZW8uY2Fub25pY2FsVVJMICYmIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2Jsb2cuYXR0cmlidXRlcy5zZW8uY2Fub25pY2FsVVJMfSAvPn17XCIgXCJ9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb25zL0dlZWtsb2dvNS1tb2RpZmllZC5wbmdcIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwibGFuZ3VhZ2VcIiBjb250ZW50PVwiRW5nbGlzaFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIGFzeW5jXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tL3BhZ2VhZC9qcy9hZHNieWdvb2dsZS5qcz9jbGllbnQ9Y2EtcHViLTIzNzg1NDg2ODE1MjUxMDZcIlxyXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgIG14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy00LzYgbXgtYXV0byBtdC02ICBiZy13aGl0ZSAgIHJvdW5kZWQtbWQgXCI+XHJcbiAgICAgICAgICB7YmxvZy5hdHRyaWJ1dGVzLmltYWdlLmRhdGEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyLTIgbWQ6bWF4LWgtMTI4IG92ZXJmbG93LWhpZGRlbiBcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Jsb2cuYXR0cmlidXRlcy5pbWFnZS5kYXRhLmF0dHJpYnV0ZXMuYWx0ZXJuYXRpdmVUZXh0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNlbnRlciBoLTYwIG1kOmgtMTI4IHctZnVsbCBwbGFjZS1zZWxmLXN0cmV0Y2ggXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YmxvZy5hdHRyaWJ1dGVzLmltYWdlLmRhdGEuYXR0cmlidXRlcy51cmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHJvdW5kZWQtbWQgbXktNCBib3JkZXItMiBib3JkZXItZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBwLTIgcm91bmRlZC1ub25lIGZvbnQtc2VtaWJvbGQgdGV4dC01eGxcIj57YmxvZyAmJiBibG9nLmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8RmFVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPntibG9nLmF0dHJpYnV0ZXMuYXV0aG9yLmRhdGEuYXR0cmlidXRlcy5uYW1lfTwvYT4gb24ge215ZGF0ZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dwb3N0IHAtNCByb3VuZGVkLW1kICB3LWZ1bGwgcHJvc2UgbWF4LXctbm9uZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdCB9fT48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgbGV0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5TVFJBUElfVE9LRU59YCB9O1xyXG4gIGxldCBhID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX1VSTH0vYXBpL2Jsb2dzP2ZpbHRlcnNbc2x1Z11bJGVxXT0ke2NvbnRleHQucXVlcnkuc2x1Z31gICsgYCZwb3B1bGF0ZT0qYCwge1xyXG4gICAgaGVhZGVyczogaGVhZGVycyxcclxuICB9KTtcclxuICBsZXQgYmxvZyA9IGF3YWl0IGEuanNvbigpO1xyXG4gIGxldCBibG9ncG9zdCA9IGJsb2cuZGF0YVswXS5hdHRyaWJ1dGVzLnBvc3Q7XHJcbiAgLy8gY29uc29sZS5sb2coYmxvZylcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgYmxvZzogYmxvZy5kYXRhWzBdLCBwb3N0OiBibG9ncG9zdCB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJTY3JpcHQiLCJSZWFjdCIsIkhlYWQiLCJGYVVzZXIiLCJwb3N0IiwiYmxvZyIsInRlbXBkYXRlIiwiYXR0cmlidXRlcyIsImRhdGUiLCJteWRhdGUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwicmVuZGVyIiwiTWFpbldyYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiamsiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJteWZ1bmN0aW9uIiwicHJlY29kZSIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidmFsdWUiLCJhbGVydCIsInNlbyIsInRpdGxlIiwibWV0YVRpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Iiwia2V5d29yZHMiLCJtZXRhUm9ib3RzIiwiY2Fub25pY2FsVVJMIiwibGluayIsInJlbCIsImhyZWYiLCJ0eXBlIiwic2NyaXB0IiwiYXN5bmMiLCJzcmMiLCJjcm9zc29yaWdpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWFnZSIsImRhdGEiLCJpbWciLCJhbHQiLCJhbHRlcm5hdGl2ZVRleHQiLCJ1cmwiLCJoMSIsInAiLCJhIiwiYXV0aG9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Blog/[slug].js\n");

/***/ })

});