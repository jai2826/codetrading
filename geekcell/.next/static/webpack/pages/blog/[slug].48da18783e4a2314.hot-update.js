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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-request */ \"./node_modules/graphql-request/dist/index.js\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar post = function(param) {\n    var blog = param.blog, post1 = param.post;\n    var tempdate = blog.date;\n    var mydate = new Date(tempdate).toDateString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    blog.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \" \",\n                            blog.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: [\n                                    blog.seo.title,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 18,\n                                columnNumber: 26\n                            }, _this),\n                            blog.seo.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: blog.seo.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 19,\n                                columnNumber: 38\n                            }, _this),\n                            blog.seo.keywords && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.seo.keywords\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 20,\n                                columnNumber: 35\n                            }, _this),\n                            blog.seo.metaRobots && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"robots\",\n                                content: blog.seo.metaRobots\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 21,\n                                columnNumber: 37\n                            }, _this),\n                            blog.seo.canonicalURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.seo.canonicalURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 22,\n                                columnNumber: 39\n                            }, _this),\n                            \" \"\n                        ]\n                    }, void 0, true),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Geeklogo5-modified.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"language\",\n                        content: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container mx-auto flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/6 mx-auto mt-6 bg-white rounded-md \",\n                    children: [\n                        blog.coverimage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md border-2 md:max-h-128 overflow-hidden \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"GeekImage\",\n                                className: \"object-center h-60 md:h-128 w-full place-self-stretch \",\n                                src: blog.coverimage.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded-md my-4 border-2 border-gray-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" p-2 rounded-none font-semibold text-5xl\",\n                                    children: blog.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2 flex items-center space-x-2 text-sm\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaUser, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"/\",\n                                                    children: blog.author.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                \" on \",\n                                                mydate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blogpost p-4 rounded-md w-full prose max-w-none\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: post1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\nvar __N_SSG = true;\n// export async function getServerSideProps({params}) {\n//   // let slug = \"my-first-blog1\"\n//   const QUERY = gql`\n//     query blog($slug: String!) {\n//       blog(where: { slug: $slug }) {\n//         id\n//         title\n//         description\n//         slug\n//         post {\n//           html\n//         }\n//         date\n//         seo {\n//           id\n//           image {\n//             url\n//           }\n//           keywords\n//           title\n//           description\n//         }\n//         coverimage {\n//           url\n//         }\n//         author {\n//           name\n//         }\n//         category\n//       }\n//     }\n//   `;\n//   const endpoint = \"https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master\";\n//   let variables = {\n//     slug:params.slug\n//   }\n//   const { blog } = await request(endpoint, QUERY, variables);\n//   return {\n//     props: { blog: blog, post: blog.post.html }, // will be passed to the page component as props\n//   };\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (post);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q29udGVudCI6WyJpbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEdyYXBoUUxDbGllbnQgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcclxuXHJcbmNvbnN0IHBvc3QgPSAoeyBibG9nLCBwb3N0IH0pID0+IHtcclxuICBsZXQgdGVtcGRhdGUgPSBibG9nLmRhdGU7XHJcbiAgdmFyIG15ZGF0ZSA9IG5ldyBEYXRlKHRlbXBkYXRlKS50b0RhdGVTdHJpbmcoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIHtibG9nLnNlbyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIHtibG9nLnNlbyAmJiA8dGl0bGU+e2Jsb2cuc2VvLnRpdGxlfSA8L3RpdGxlPn1cclxuICAgICAgICAgICAge2Jsb2cuc2VvLmRlc2NyaXB0aW9uICYmIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cuc2VvLmRlc2NyaXB0aW9ufSAvPn1cclxuICAgICAgICAgICAge2Jsb2cuc2VvLmtleXdvcmRzICYmIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2Jsb2cuc2VvLmtleXdvcmRzfSAvPn1cclxuICAgICAgICAgICAge2Jsb2cuc2VvLm1ldGFSb2JvdHMgJiYgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9e2Jsb2cuc2VvLm1ldGFSb2JvdHN9IC8+fVxyXG4gICAgICAgICAgICB7YmxvZy5zZW8uY2Fub25pY2FsVVJMICYmIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2Jsb2cuc2VvLmNhbm9uaWNhbFVSTH0gLz59e1wiIFwifVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29ucy9HZWVrbG9nbzUtbW9kaWZpZWQucG5nXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImxhbmd1YWdlXCIgY29udGVudD1cIkVuZ2xpc2hcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM/Y2xpZW50PWNhLXB1Yi0yMzc4NTQ4NjgxNTI1MTA2XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyICBteC1hdXRvIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctNC82IG14LWF1dG8gbXQtNiAgYmctd2hpdGUgICByb3VuZGVkLW1kIFwiPlxyXG4gICAgICAgICAge2Jsb2cuY292ZXJpbWFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXItMiBtZDptYXgtaC0xMjggb3ZlcmZsb3ctaGlkZGVuIFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgYWx0PXtcIkdlZWtJbWFnZVwifSBjbGFzc05hbWU9XCJvYmplY3QtY2VudGVyIGgtNjAgbWQ6aC0xMjggdy1mdWxsIHBsYWNlLXNlbGYtc3RyZXRjaCBcIiBzcmM9e2Jsb2cuY292ZXJpbWFnZS51cmx9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLW1kIG15LTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgcC0yIHJvdW5kZWQtbm9uZSBmb250LXNlbWlib2xkIHRleHQtNXhsXCI+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICA8RmFVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPntibG9nLmF1dGhvci5uYW1lfTwvYT4gb24ge215ZGF0ZX1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dwb3N0IHAtNCByb3VuZGVkLW1kICB3LWZ1bGwgcHJvc2UgbWF4LXctbm9uZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdCB9fT48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zfSkge1xyXG4vLyAgIC8vIGxldCBzbHVnID0gXCJteS1maXJzdC1ibG9nMVwiXHJcblxyXG4gIFxyXG4vLyAgIGNvbnN0IFFVRVJZID0gZ3FsYFxyXG4vLyAgICAgcXVlcnkgYmxvZygkc2x1ZzogU3RyaW5nISkge1xyXG4vLyAgICAgICBibG9nKHdoZXJlOiB7IHNsdWc6ICRzbHVnIH0pIHtcclxuLy8gICAgICAgICBpZFxyXG4vLyAgICAgICAgIHRpdGxlXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb25cclxuLy8gICAgICAgICBzbHVnXHJcbi8vICAgICAgICAgcG9zdCB7XHJcbi8vICAgICAgICAgICBodG1sXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGRhdGVcclxuLy8gICAgICAgICBzZW8ge1xyXG4vLyAgICAgICAgICAgaWRcclxuLy8gICAgICAgICAgIGltYWdlIHtcclxuLy8gICAgICAgICAgICAgdXJsXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICBrZXl3b3Jkc1xyXG4vLyAgICAgICAgICAgdGl0bGVcclxuLy8gICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNvdmVyaW1hZ2Uge1xyXG4vLyAgICAgICAgICAgdXJsXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGF1dGhvciB7XHJcbi8vICAgICAgICAgICBuYW1lXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNhdGVnb3J5XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICBgO1xyXG5cclxuLy8gICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9hcGktYXAtc291dGgtMS5oeWdyYXBoLmNvbS92Mi9jbDVsNHdxcHMzcXUxMDF0YTA1bG9mbTZzL21hc3RlclwiO1xyXG4vLyAgIGxldCB2YXJpYWJsZXMgPSB7XHJcbi8vICAgICBzbHVnOnBhcmFtcy5zbHVnXHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCB7IGJsb2cgfSA9IGF3YWl0IHJlcXVlc3QoZW5kcG9pbnQsIFFVRVJZLCB2YXJpYWJsZXMpO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgYmxvZzogYmxvZywgcG9zdDogYmxvZy5wb3N0Lmh0bWwgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBoeWdyYXBoID0gbmV3IEdyYXBoUUxDbGllbnQoXCJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsNWw0d3FwczNxdTEwMXRhMDVsb2ZtNnMvbWFzdGVyXCIpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGF3YWl0IGh5Z3JhcGgucmVxdWVzdChcclxuICAgIGBcclxuICAgIHF1ZXJ5IGJsb2coJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgYmxvZyh3aGVyZTogeyBzbHVnOiAkc2x1ZyB9KSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIHBvc3Qge1xyXG4gICAgICAgICAgaHRtbFxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRlXHJcbiAgICAgICAgc2VvIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAga2V5d29yZHNcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb3ZlcmltYWdlIHtcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICBhdXRob3Ige1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRlZ29yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYCxcclxuICAgIHtcclxuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3QsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBoeWdyYXBoLnJlcXVlc3QoYFxyXG4gICAge1xyXG4gICAgICBwcm9kdWN0cyB7XHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHByb2R1Y3RzLm1hcCgoeyBzbHVnIH0pID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlNjcmlwdCIsIlJlYWN0IiwiSGVhZCIsIkZhVXNlciIsImdxbCIsInBvc3QiLCJibG9nIiwidGVtcGRhdGUiLCJkYXRlIiwibXlkYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsInNlbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJrZXl3b3JkcyIsIm1ldGFSb2JvdHMiLCJjYW5vbmljYWxVUkwiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJzY3JpcHQiLCJhc3luYyIsInNyYyIsImNyb3Nzb3JpZ2luIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImNvdmVyaW1hZ2UiLCJpbWciLCJhbHQiLCJ1cmwiLCJoMSIsInAiLCJhIiwiYXV0aG9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});