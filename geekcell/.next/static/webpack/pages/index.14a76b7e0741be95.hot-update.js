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

/***/ "./components/Pages.js":
/*!*****************************!*\
  !*** ./components/Pages.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cards */ \"./components/Cards.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Pages = function(param) {\n    var blogs = param.blogs;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20), visible = ref[0], setvisible = ref[1];\n    var readmore = function() {\n        setvisible(function(prevState) {\n            return prevState + 20;\n        });\n        if (visible >= blogs.length) react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.info(\"No more Blogs of this category\", {\n            position: \"bottom-center\",\n            autoClose: 4000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap place-content-center \",\n                children: blogs && blogs.slice(0, visible).map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: item\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-center m-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        name: \"readmore\",\n                        onClick: function() {\n                            return readmore();\n                        },\n                        className: \"m-2 px-2 py-1 self-center border-2 border-black rounded-md hover:bg-purple-700 hover:text-white\",\n                        children: \"Readmore\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                        position: \"bottom-center\",\n                        autoClose: 4000,\n                        hideProgressBar: false,\n                        newestOnTop: false,\n                        closeOnClick: true,\n                        rtl: false,\n                        pauseOnFocusLoss: true,\n                        draggable: true,\n                        pauseOnHover: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Pages, \"NfjlMCVp6iH6H30YH5FMQy8ghdo=\");\n_c = Pages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pages);\nvar _c;\n$RefreshReg$(_c, \"Pages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9DO0FBQ1A7QUFFMEI7QUFDUjtBQUNuQjs7QUFHNUIsSUFBTU0sS0FBSyxHQUFHLGdCQUFhO1FBQVhDLEtBQUssU0FBTEEsS0FBSzs7O0lBQ3JCLElBQThCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBVDFDLE9BU2MsR0FBZ0JBLEdBQVksR0FBNUIsRUFUZCxVQVMwQixHQUFJQSxHQUFZLEdBQWhCO0lBQzFCLElBQU1TLFFBQVEsR0FBRyxXQUFNO1FBRXJCRCxVQUFVLENBQUMsU0FBQ0UsU0FBUzttQkFBS0EsU0FBUyxHQUFHLEVBQUU7U0FBQSxDQUFDLENBQUM7UUFDMUMsSUFBSUgsT0FBTyxJQUFJRCxLQUFLLENBQUNLLE1BQU0sRUFDekJSLHNEQUFVLENBQUMsZ0NBQWdDLEVBQUU7WUFDM0NVLFFBQVEsRUFBRSxlQUFlO1lBQ3pCQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxlQUFlLEVBQUUsS0FBSztZQUN0QkMsWUFBWSxFQUFFLElBQUk7WUFDbEJDLFlBQVksRUFBRSxJQUFJO1lBQ2xCQyxTQUFTLEVBQUUsSUFBSTtZQUNmQyxRQUFRLEVBQUVDLFNBQVM7U0FDcEIsQ0FBQyxDQUFDO0tBQ047SUFHQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBWTs7MEJBQ3pCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzBCQUNsRGhCLEtBQUssSUFDSkEsS0FBSyxDQUFDaUIsS0FBSyxDQUFDLENBQUMsRUFBRWhCLE9BQU8sQ0FBQyxDQUFDaUIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDcEMscUJBQ0UsOERBQUNyQiw4Q0FBSzt3QkFBZXFCLElBQUksRUFBRUEsSUFBSTt1QkFBbkJBLElBQUksQ0FBQ0MsRUFBRTs7Ozs4QkFBZSxDQUNsQztpQkFDSCxDQUFDOzs7OztxQkFDQTswQkFDTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG9DQUFvQzs7a0NBQ2pELDhEQUFDSyxRQUFNO3dCQUNMQyxJQUFJLEVBQUMsVUFBVTt3QkFDZkMsT0FBTyxFQUFFO21DQUFNcEIsUUFBUSxFQUFFO3lCQUFBO3dCQUN6QmEsU0FBUyxFQUFDLGlHQUFpRztrQ0FDNUcsVUFFRDs7Ozs7NkJBQVM7a0NBQ1QsOERBQUNwQiwwREFBYzt3QkFDYlcsUUFBUSxFQUFDLGVBQWU7d0JBQ3hCQyxTQUFTLEVBQUUsSUFBSTt3QkFDZkMsZUFBZSxFQUFFLEtBQUs7d0JBQ3RCZSxXQUFXLEVBQUUsS0FBSzt3QkFDbEJkLFlBQVk7d0JBQ1plLEdBQUcsRUFBRSxLQUFLO3dCQUNWQyxnQkFBZ0I7d0JBQ2hCZCxTQUFTO3dCQUNURCxZQUFZOzs7Ozs2QkFDWjs7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FsREtaLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQW9EWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2VzLmpzP2E0YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi9DYXJkcyc7XHJcblxyXG5cclxuY29uc3QgUGFnZXMgPSAoe2Jsb2dzfSkgPT4ge1xyXG5jb25zdCBbdmlzaWJsZSwgc2V0dmlzaWJsZV0gPSB1c2VTdGF0ZSgyMCk7XHJcbmNvbnN0IHJlYWRtb3JlID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgc2V0dmlzaWJsZSgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAyMCk7XHJcbiAgaWYgKHZpc2libGUgPj0gYmxvZ3MubGVuZ3RoKVxyXG4gICAgdG9hc3QuaW5mbyhcIk5vIG1vcmUgQmxvZ3Mgb2YgdGhpcyBjYXRlZ29yeVwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgYXV0b0Nsb3NlOiA0MDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgbXgtYXV0byAgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgcGxhY2UtY29udGVudC1jZW50ZXIgXCI+XHJcbiAgICAgICAge2Jsb2dzICYmXHJcbiAgICAgICAgICBibG9ncy5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2FyZHMga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfS8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXIgbS00IFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG5hbWU9XCJyZWFkbW9yZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWFkbW9yZSgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibS0yIHB4LTIgcHktMSBzZWxmLWNlbnRlciBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBob3ZlcjpiZy1wdXJwbGUtNzAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlYWRtb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICAgICAgYXV0b0Nsb3NlPXs0MDAwfVxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgICAgIGNsb3NlT25DbGlja1xyXG4gICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiQ2FyZHMiLCJQYWdlcyIsImJsb2dzIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJyZWFkbW9yZSIsInByZXZTdGF0ZSIsImxlbmd0aCIsImluZm8iLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiaWQiLCJidXR0b24iLCJuYW1lIiwib25DbGljayIsIm5ld2VzdE9uVG9wIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Pages.js\n");

/***/ })

});