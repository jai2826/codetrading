"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/technews",{

/***/ "./pages/technews.js":
/*!***************************!*\
  !*** ./pages/technews.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar page = function(param) {\n    var blogs = param.blogs;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20), visible = ref[0], setvisible = ref[1];\n    var readmore = function() {\n        setvisible(function(prevState) {\n            return prevState + 20;\n        });\n        if (visible >= blogs.length) react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.info(\"No more Blogs of this category\", {\n            position: \"bottom-center\",\n            autoClose: 4000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Technews - Get tech news on the go\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Get tech news on the go\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"Tech, Techhub,Technews, Techlaunch, Games, Social Media, Software, Gadgets\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"language\",\n                        content: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/logo.ico\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"2xl:container mx-auto px-4 lg:py-10 2xl:px-8 border-2 my-6 border-gray-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex flex-wrap mb-20 md:flex-col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"lg:w-1/2 w-full mb-6 lg:mb-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" font-medium mb-2\",\n                                    children: \"Get tech news on the go\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" mx-auto \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap place-content-center \",\n                                    children: blogs && blogs.slice(0, visible).map(function(item) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"/Blog/\".concat(item.attributes.slug),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"bg-white flex flex-col overflow-hidden rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 xl:w-w22 p-2 m-3 cursor-pointer\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"h-56 overflow-hidden\",\n                                                        children: item.attributes.image.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            className: \"object-fill object-center h-full rounded-lg\",\n                                                            src: item.attributes.image.data.attributes.url,\n                                                            width: 1200,\n                                                            height: 1000,\n                                                            alt: \"\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                            lineNumber: 56,\n                                                            columnNumber: 94\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 25\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-col justify-between p-2 bg-white\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-xl font-semibold h\",\n                                                                children: item.attributes.title\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 27\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-base \",\n                                                                children: item.attributes.desc.slice(0, 80)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                                lineNumber: 59,\n                                                                columnNumber: 27\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 25\n                                                    }, _this1),\n                                                    item.attributes.author.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex items-center m-2 border-t-2 border-gray-100 w-full mt-auto \",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex items-center space-x-1 pt-2\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_7__.TiUser, {}, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                                    lineNumber: 64,\n                                                                    columnNumber: 31\n                                                                }, _this1),\n                                                                \" \",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    children: item.attributes.author.data.attributes.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                                    lineNumber: 64,\n                                                                    columnNumber: 42\n                                                                }, _this1)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 29\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 27\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 23\n                                            }, _this1)\n                                        }, item.id, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 21\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"container flex justify-center m-4 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            name: \"readmore\",\n                                            onClick: function() {\n                                                return readmore();\n                                            },\n                                            className: \"m-2 px-2 py-1 self-center border-2 border-black rounded-md hover:bg-purple-700 hover:text-white\",\n                                            children: \"Readmore\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                                            position: \"bottom-center\",\n                                            autoClose: 4000,\n                                            hideProgressBar: false,\n                                            newestOnTop: false,\n                                            closeOnClick: true,\n                                            rtl: false,\n                                            pauseOnFocusLoss: true,\n                                            draggable: true,\n                                            pauseOnHover: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\technews.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(page, \"NfjlMCVp6iH6H30YH5FMQy8ghdo=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZWNobmV3cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDSztBQUNGO0FBQ0E7QUFDSTtBQUN1QjtBQUNoQjtBQUNROztBQUkvQyxJQUFNUSxJQUFJLEdBQUcsZ0JBQWU7UUFBWkMsS0FBSyxTQUFMQSxLQUFLOzs7SUFHbkIsSUFBOEJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFkNUMsT0FjZ0IsR0FBZ0JBLEdBQVksR0FBNUIsRUFkaEIsVUFjNEIsR0FBSUEsR0FBWSxHQUFoQjtJQUMxQixJQUFNUSxRQUFRLEdBQUcsV0FBTTtRQUNyQkQsVUFBVSxDQUFDRSxTQUFBQSxTQUFTO21CQUFLQSxTQUFTLEdBQUcsRUFBRTtTQUFDLENBQUM7UUFDekMsSUFBSUgsT0FBTyxJQUFJRCxLQUFLLENBQUNLLE1BQU0sRUFDekJSLHNEQUFVLENBQUMsZ0NBQWdDLEVBQUU7WUFDM0NVLFFBQVEsRUFBRSxlQUFlO1lBQ3pCQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxlQUFlLEVBQUUsS0FBSztZQUN0QkMsWUFBWSxFQUFFLElBQUk7WUFDbEJDLFlBQVksRUFBRSxJQUFJO1lBQ2xCQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxRQUFRLEVBQUVDLFNBQVM7U0FDcEIsQ0FBQyxDQUFDO0tBQ047SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNyQixrREFBSTs7a0NBQ0gsOERBQUNzQixPQUFLO2tDQUFDLG9DQUFrQzs7Ozs7NkJBQVE7a0NBQ2pELDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLHlCQUF5Qjs7Ozs7NkJBQUc7a0NBQzdELDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7NkJBQUc7a0NBQ3RFLDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLDRFQUE0RTs7Ozs7NkJBQUc7a0NBQzdHLDhEQUFDRixNQUFJO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsT0FBTyxFQUFDLFNBQVM7Ozs7OzZCQUFHO2tDQUMxQyw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxXQUFXO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NkJBQUc7a0NBQ3hELDhEQUFDQyxRQUFNO3dCQUFDQyxLQUFLO3dCQUFDQyxHQUFHLEVBQUMsK0ZBQStGO3dCQUFDQyxXQUFXLEVBQUMsV0FBVzs7Ozs7NkJBQVU7Ozs7OztxQkFDOUk7MEJBQ1AsOERBQUNDLFNBQU87MEJBQ04sNEVBQUNDLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw0RUFBNkU7O3NDQUMxRiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLG1DQUFtQztzQ0FDaEQsNEVBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyw4QkFBOEI7MENBQzNDLDRFQUFDQyxJQUFFO29DQUFDRCxTQUFTLEVBQUMsbUJBQW1COzhDQUFDLHlCQUF1Qjs7Ozs7eUNBQUs7Ozs7O3FDQUMxRDs7Ozs7aUNBRUY7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxXQUFZOzs4Q0FDekIsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxzQ0FBc0M7OENBQ2xEN0IsS0FBSyxJQUNKQSxLQUFLLENBQUMrQixLQUFLLENBQUMsQ0FBQyxFQUFFOUIsT0FBTyxDQUFDLENBQUMrQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO3dDQUNwQyxxQkFDRSw4REFBQ3ZDLGtEQUFJOzRDQUFlMkIsSUFBSSxFQUFFLFFBQU8sQ0FBdUIsT0FBckJZLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxJQUFJLENBQUU7c0RBQ3ZELDRFQUFDUCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsc0hBQXlIOztrRUFDdEksOERBQUNELEtBQUc7d0RBQUNDLFNBQVMsRUFBQyxzQkFBc0I7a0VBQUVJLElBQUksQ0FBQ0MsVUFBVSxDQUFDRSxLQUFLLENBQUNDLElBQUksa0JBQUksOERBQUNDLEtBQUc7NERBQUNULFNBQVMsRUFBQyw2Q0FBNkM7NERBQUNKLEdBQUcsRUFBRVEsSUFBSSxDQUFDQyxVQUFVLENBQUNFLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxVQUFVLENBQUNLLEdBQUc7NERBQUVDLEtBQUssRUFBRSxJQUFJOzREQUFFQyxNQUFNLEVBQUUsSUFBSTs0REFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7O2tFQUFHOzs7Ozs4REFBTztrRUFDN04sOERBQUNkLEtBQUc7d0RBQUNDLFNBQVMsRUFBQyw0Q0FBNEM7OzBFQUN6RCw4REFBQ2MsR0FBQztnRUFBQ2QsU0FBUyxFQUFDLHlCQUF5QjswRUFBRUksSUFBSSxDQUFDQyxVQUFVLENBQUNuQixLQUFLOzs7OztzRUFBSzswRUFDbEUsOERBQUM0QixHQUFDO2dFQUFDZCxTQUFTLEVBQUMsWUFBWTswRUFBRUksSUFBSSxDQUFDQyxVQUFVLENBQUNVLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Ozs7O3NFQUFLOzs7Ozs7OERBQzdEO29EQUNMRSxJQUFJLENBQUNDLFVBQVUsQ0FBQ1csTUFBTSxDQUFDUixJQUFJLGtCQUMxQiw4REFBQ1QsS0FBRzt3REFBQ0MsU0FBUyxFQUFDLGtFQUFrRTtrRUFDL0UsNEVBQUNELEtBQUc7NERBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7OzhFQUMvQyw4REFBQy9CLGtEQUFNOzs7OzBFQUFHO2dFQUFBLEdBQUM7OEVBQUEsOERBQUM2QyxHQUFDOzhFQUFFVixJQUFJLENBQUNDLFVBQVUsQ0FBQ1csTUFBTSxDQUFDUixJQUFJLENBQUNILFVBQVUsQ0FBQ2pCLElBQUk7Ozs7OzBFQUFLOzs7Ozs7a0VBQzNEOzs7Ozs4REFDRjs7Ozs7O3NEQUVKOzJDQWRHZ0IsSUFBSSxDQUFDYSxFQUFFOzs7O2tEQWVYLENBQ1A7cUNBQ0gsQ0FBQzs7Ozs7eUNBQ0E7OENBQ04sOERBQUNsQixLQUFHO29DQUFDQyxTQUFTLEVBQUMsb0NBQW9DOztzREFDakQsOERBQUNrQixRQUFNOzRDQUFDOUIsSUFBSSxFQUFDLFVBQVU7NENBQUMrQixPQUFPLEVBQUU7dURBQU03QyxRQUFRLEVBQUU7NkNBQUE7NENBQUUwQixTQUFTLEVBQUMsaUdBQWlHO3NEQUFDLFVBRS9KOzs7OztpREFBUztzREFDVCw4REFBQ2pDLDBEQUFjOzRDQUFDVyxRQUFRLEVBQUMsZUFBZTs0Q0FBQ0MsU0FBUyxFQUFFLElBQUk7NENBQUVDLGVBQWUsRUFBRSxLQUFLOzRDQUFFd0MsV0FBVyxFQUFFLEtBQUs7NENBQUV2QyxZQUFZOzRDQUFDd0MsR0FBRyxFQUFFLEtBQUs7NENBQUVDLGdCQUFnQjs0Q0FBQ3ZDLFNBQVM7NENBQUNELFlBQVk7Ozs7O2lEQUFHOzs7Ozs7eUNBQ3JLOzs7Ozs7aUNBQ0Y7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0U7O29CQUNULENBQ0g7Q0FDSDtHQXhFS1osSUFBSTs7QUErRlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVjaG5ld3MuanM/NzM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBUaVVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy90aSdcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcblxyXG5cclxuY29uc3QgcGFnZSA9ICh7IGJsb2dzIH0pID0+IHtcclxuXHJcblxyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXR2aXNpYmxlXSA9IHVzZVN0YXRlKDIwKVxyXG4gIGNvbnN0IHJlYWRtb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0dmlzaWJsZShwcmV2U3RhdGUgPT4gKHByZXZTdGF0ZSArIDIwKSlcclxuICAgIGlmICh2aXNpYmxlID49IGJsb2dzLmxlbmd0aClcclxuICAgICAgdG9hc3QuaW5mbygnTm8gbW9yZSBCbG9ncyBvZiB0aGlzIGNhdGVnb3J5Jywge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDQwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGVjaG5ld3MgLSBHZXQgdGVjaCBuZXdzIG9uIHRoZSBnbzwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCB0ZWNoIG5ld3Mgb24gdGhlIGdvXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJUZWNoLCBUZWNoaHViLFRlY2huZXdzLCBUZWNobGF1bmNoLCBHYW1lcywgU29jaWFsIE1lZGlhLCBTb2Z0d2FyZSwgR2FkZ2V0c1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImxhbmd1YWdlXCIgY29udGVudD1cIkVuZ2xpc2hcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XHJcbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tL3BhZ2VhZC9qcy9hZHNieWdvb2dsZS5qcz9jbGllbnQ9Y2EtcHViLTIzNzg1NDg2ODE1MjUxMDZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOmNvbnRhaW5lciBteC1hdXRvIHB4LTQgbGc6cHktMTAgIDJ4bDpweC04IGJvcmRlci0yIG15LTYgYm9yZGVyLWdyYXktMTAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtd3JhcCBtYi0yMCBtZDpmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8yIHctZnVsbCBtYi02IGxnOm1iLTBcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIGZvbnQtbWVkaXVtIG1iLTJcIj5HZXQgdGVjaCBuZXdzIG9uIHRoZSBnbzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiIHctZnVsbCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTUwMFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzdCBvZGl0IG1haW9yZXMgYWIgaXN0ZSwgZXNzZSwgcGVyc3BpY2lhdGlzIGRpY3RhLCBsaWJlcm8gdW5kZSBhZCBmdWdpdCBsYWJvcmUgc2VxdWkgbmVzY2l1bnQgZGVzZXJ1bnQuIERvbG9yLCBjb25zZWN0ZXR1ciBsaWJlcm8uIE9kaW8gcXVvIGRvbG9ydW0gbGFib3Jpb3NhbSBxdW9zIHVsbGFtIG5lc2NpdW50LCBwb3NzaW11cyBjb3Jwb3JpcyBtb2xlc3RpYXMgZW9zLCBkZWxlbml0aSBpdGFxdWUgZGlnbmlzc2ltb3Mgc2ludCBvZGl0IHNvbHV0YSBvbW5pcyB2ZWxpdCBpbmNpZHVudCB1bmRlIHZvbHVwdGF0aWJ1cyEgQXNwZXJuYXR1cj88L3A+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBteC1hdXRvICBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBwbGFjZS1jb250ZW50LWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICB7YmxvZ3MgJiZcclxuICAgICAgICAgICAgICAgIGJsb2dzLnNsaWNlKDAsIHZpc2libGUpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gaHJlZj17YC9CbG9nLyR7aXRlbS5hdHRyaWJ1dGVzLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuICByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgc206dy0xLzMgbWQ6dy0xLzQgeGw6dy13MjIgIHAtMiBtLTMgIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiBvdmVyZmxvdy1oaWRkZW5cIj57aXRlbS5hdHRyaWJ1dGVzLmltYWdlLmRhdGEgJiYgPGltZyBjbGFzc05hbWU9XCJvYmplY3QtZmlsbCBvYmplY3QtY2VudGVyIGgtZnVsbCByb3VuZGVkLWxnXCIgc3JjPXtpdGVtLmF0dHJpYnV0ZXMuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLnVybH0gd2lkdGg9ezEyMDB9IGhlaWdodD17MTAwMH0gYWx0PVwiXCIgLz59PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcC0yIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIGhcIj57aXRlbS5hdHRyaWJ1dGVzLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgXCI+e2l0ZW0uYXR0cmlidXRlcy5kZXNjLnNsaWNlKDAsIDgwKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG0tMiBib3JkZXItdC0yIGJvcmRlci1ncmF5LTEwMCB3LWZ1bGwgbXQtYXV0byBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xIHB0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpVXNlciAvPiA8cD57aXRlbS5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBtLTQgXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwicmVhZG1vcmVcIiBvbkNsaWNrPXsoKSA9PiByZWFkbW9yZSgpfSBjbGFzc05hbWU9XCJtLTIgcHgtMiBweS0xIHNlbGYtY2VudGVyIGJvcmRlci0yIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIGhvdmVyOmJnLXB1cnBsZS03MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgUmVhZG1vcmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCIgYXV0b0Nsb3NlPXs0MDAwfSBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfSBuZXdlc3RPblRvcD17ZmFsc2V9IGNsb3NlT25DbGljayBydGw9e2ZhbHNlfSBwYXVzZU9uRm9jdXNMb3NzIGRyYWdnYWJsZSBwYXVzZU9uSG92ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnRleHQucmVzLnNldEhlYWRlcihcclxuICAgICdDYWNoZS1Db250cm9sJyxcclxuICAgICdwdWJsaWMsIHMtbWF4YWdlPTEwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTU5J1xyXG4gIClcclxuICBsZXQgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LlNUUkFQSV9UT0tFTn1gIH1cclxuICBsZXQgYSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9VUkx9L2FwaS9ibG9ncz9maWx0ZXJzW2NhdGVnb3JpZXNdW25hbWVdPVRlY2huZXdzJnNvcnQ9dXBkYXRlZEF0JTNBZGVzYyZwb3B1bGF0ZT0qYCwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgbGV0IGJsb2dzID0gYXdhaXQgYS5qc29uKCk7XHJcbiAgbGV0IG5ld2Jsb2dzID0gYmxvZ3MuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJsb2dzOiBuZXdibG9ncyB9LFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBwYWdlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiSGVhZCIsIkxpbmsiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJUaVVzZXIiLCJwYWdlIiwiYmxvZ3MiLCJ2aXNpYmxlIiwic2V0dmlzaWJsZSIsInJlYWRtb3JlIiwicHJldlN0YXRlIiwibGVuZ3RoIiwiaW5mbyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsInNjcmlwdCIsImFzeW5jIiwic3JjIiwiY3Jvc3NvcmlnaW4iLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJhdHRyaWJ1dGVzIiwic2x1ZyIsImltYWdlIiwiZGF0YSIsImltZyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCIsImRlc2MiLCJhdXRob3IiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuZXdlc3RPblRvcCIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/technews.js\n");

/***/ })

});