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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cards */ \"./components/Cards.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Pages = function(param) {\n    var blogs = param.blogs;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20), visible = ref[0], setvisible = ref[1];\n    var readmore = function() {\n        setvisible(function(prevState) {\n            return prevState + 20;\n        });\n        if (visible >= blogs.length) react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.info(\"No more Blogs of this category\", {\n            position: \"bottom-center\",\n            autoClose: 4000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap place-content-center \",\n                children: blogs && blogs.slice(0, visible).map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: item\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-center m-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        name: \"readmore\",\n                        onClick: function() {\n                            return readmore();\n                        },\n                        className: \"m-2 px-2 py-1 self-center border-2 border-black rounded-md hover:bg-purple-700 hover:text-white\",\n                        children: \"Readmore\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                        position: \"bottom-center\",\n                        autoClose: 4000,\n                        hideProgressBar: false,\n                        newestOnTop: false,\n                        closeOnClick: true,\n                        rtl: false,\n                        pauseOnFocusLoss: true,\n                        draggable: true,\n                        pauseOnHover: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Pages, \"NfjlMCVp6iH6H30YH5FMQy8ghdo=\");\n_c = Pages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pages);\nvar _c;\n$RefreshReg$(_c, \"Pages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9DO0FBQ1A7QUFDVztBQUNlO0FBQ1I7QUFDbkI7O0FBRzVCLElBQU1PLEtBQUssR0FBRyxnQkFBYTtRQUFYQyxLQUFLLFNBQUxBLEtBQUs7OztJQUNyQixJQUE4QlAsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVQxQyxPQVNjLEdBQWdCQSxHQUFZLEdBQTVCLEVBVGQsVUFTMEIsR0FBSUEsR0FBWSxHQUFoQjtJQUMxQixJQUFNVSxRQUFRLEdBQUcsV0FBTTtRQUVyQkQsVUFBVSxDQUFDLFNBQUNFLFNBQVM7bUJBQUtBLFNBQVMsR0FBRyxFQUFFO1NBQUEsQ0FBQyxDQUFDO1FBQzFDLElBQUlILE9BQU8sSUFBSUQsS0FBSyxDQUFDSyxNQUFNLEVBQ3pCUixzREFBVSxDQUFDLGdDQUFnQyxFQUFFO1lBQzNDVSxRQUFRLEVBQUUsZUFBZTtZQUN6QkMsU0FBUyxFQUFFLElBQUk7WUFDZkMsZUFBZSxFQUFFLEtBQUs7WUFDdEJDLFlBQVksRUFBRSxJQUFJO1lBQ2xCQyxZQUFZLEVBQUUsSUFBSTtZQUNsQkMsU0FBUyxFQUFFLElBQUk7WUFDZkMsUUFBUSxFQUFFQyxTQUFTO1NBQ3BCLENBQUMsQ0FBQztLQUNOO0lBR0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVk7OzBCQUN6Qiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNDQUFzQzswQkFDbERoQixLQUFLLElBQ0pBLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQyxDQUFDLEVBQUVoQixPQUFPLENBQUMsQ0FBQ2lCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7b0JBQ3BDLHFCQUNFLDhEQUFDckIsOENBQUs7d0JBQUNxQixJQUFJLEVBQUVBLElBQUk7Ozs7OzhCQUFHLENBQ3BCO2lCQUNILENBQUM7Ozs7O3FCQUNBOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0NBQW9DOztrQ0FDakQsOERBQUNJLFFBQU07d0JBQ0xDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxPQUFPLEVBQUU7bUNBQU1uQixRQUFRLEVBQUU7eUJBQUE7d0JBQ3pCYSxTQUFTLEVBQUMsaUdBQWlHO2tDQUM1RyxVQUVEOzs7Ozs2QkFBUztrQ0FDVCw4REFBQ3BCLDBEQUFjO3dCQUNiVyxRQUFRLEVBQUMsZUFBZTt3QkFDeEJDLFNBQVMsRUFBRSxJQUFJO3dCQUNmQyxlQUFlLEVBQUUsS0FBSzt3QkFDdEJjLFdBQVcsRUFBRSxLQUFLO3dCQUNsQmIsWUFBWTt3QkFDWmMsR0FBRyxFQUFFLEtBQUs7d0JBQ1ZDLGdCQUFnQjt3QkFDaEJiLFNBQVM7d0JBQ1RELFlBQVk7Ozs7OzZCQUNaOzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047Q0FDSDtHQWxES1osS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBb0RYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZXMuanM/YTRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgVGlVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCBDYXJkcyBmcm9tICcuL0NhcmRzJztcclxuXHJcblxyXG5jb25zdCBQYWdlcyA9ICh7YmxvZ3N9KSA9PiB7XHJcbmNvbnN0IFt2aXNpYmxlLCBzZXR2aXNpYmxlXSA9IHVzZVN0YXRlKDIwKTtcclxuY29uc3QgcmVhZG1vcmUgPSAoKSA9PiB7XHJcbiAgICBcclxuICBzZXR2aXNpYmxlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDIwKTtcclxuICBpZiAodmlzaWJsZSA+PSBibG9ncy5sZW5ndGgpXHJcbiAgICB0b2FzdC5pbmZvKFwiTm8gbW9yZSBCbG9ncyBvZiB0aGlzIGNhdGVnb3J5XCIsIHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDQwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBteC1hdXRvICBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBwbGFjZS1jb250ZW50LWNlbnRlciBcIj5cclxuICAgICAgICB7YmxvZ3MgJiZcclxuICAgICAgICAgIGJsb2dzLnNsaWNlKDAsIHZpc2libGUpLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkcyBpdGVtPXtpdGVtfS8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXIgbS00IFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG5hbWU9XCJyZWFkbW9yZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWFkbW9yZSgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibS0yIHB4LTIgcHktMSBzZWxmLWNlbnRlciBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBob3ZlcjpiZy1wdXJwbGUtNzAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlYWRtb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICAgICAgYXV0b0Nsb3NlPXs0MDAwfVxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgICAgIGNsb3NlT25DbGlja1xyXG4gICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJUaVVzZXIiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiQ2FyZHMiLCJQYWdlcyIsImJsb2dzIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJyZWFkbW9yZSIsInByZXZTdGF0ZSIsImxlbmd0aCIsImluZm8iLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiYnV0dG9uIiwibmFtZSIsIm9uQ2xpY2siLCJuZXdlc3RPblRvcCIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pages.js\n");

/***/ })

});