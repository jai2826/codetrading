"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/programming",{

/***/ "./components/Pages.js":
/*!*****************************!*\
  !*** ./components/Pages.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cards */ \"./components/Cards.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Pages = (param)=>{\n    let { blogs  } = param;\n    _s();\n    const [visible, setvisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const readmore = ()=>{\n        setvisible((prevState)=>prevState + 20);\n        if (visible >= blogs.length) react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.info(\"No more Blogs of this category\", {\n            position: \"bottom-center\",\n            autoClose: 4000,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" mx-auto  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center flex-col\",\n                children: blogs && blogs.slice(0, visible).map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        item: item\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 33,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-center m-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        name: \"readmore\",\n                        onClick: ()=>readmore(),\n                        className: \"m-2 px-2 py-1 self-center border-2 border-black rounded-md hover:bg-purple-700 hover:text-white\",\n                        children: \"Readmore\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                        position: \"bottom-center\",\n                        autoClose: 4000,\n                        hideProgressBar: false,\n                        newestOnTop: false,\n                        closeOnClick: true,\n                        rtl: false,\n                        pauseOnFocusLoss: true,\n                        draggable: true,\n                        pauseOnHover: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\components\\\\Pages.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pages, \"koTp+wVRFlJMPG/vZhdU2osfPqw=\");\n_c = Pages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pages);\nvar _c;\n$RefreshReg$(_c, \"Pages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUDtBQUUwQjtBQUNSO0FBQ25CO0FBRzVCLE1BQU1NLFFBQVEsU0FBYTtRQUFaLEVBQUNDLE1BQUssRUFBQzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1TLFdBQVcsSUFBTTtRQUVyQkQsV0FBVyxDQUFDRSxZQUFjQSxZQUFZO1FBQ3RDLElBQUlILFdBQVdELE1BQU1LLE1BQU0sRUFDekJSLHNEQUFVLENBQUMsa0NBQWtDO1lBQzNDVSxVQUFVO1lBQ1ZDLFdBQVc7WUFDWEMsaUJBQWlCLEtBQUs7WUFDdEJDLGNBQWMsSUFBSTtZQUNsQkMsY0FBYyxJQUFJO1lBQ2xCQyxXQUFXLElBQUk7WUFDZkMsVUFBVUM7UUFDWjtJQUNKO0lBR0UscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWmhCLFNBQ0NBLE1BQU1pQixLQUFLLENBQUMsR0FBR2hCLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0MsT0FBUztvQkFDcEMscUJBQ0UsOERBQUNyQiw4Q0FBS0E7d0JBQWVxQixNQUFNQTt1QkFBZkEsS0FBS0MsRUFBRTs7Ozs7Z0JBRXZCOzs7Ozs7MEJBRUosOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0s7d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVMsSUFBTXBCO3dCQUNmYSxXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNwQiwwREFBY0E7d0JBQ2JXLFVBQVM7d0JBQ1RDLFdBQVc7d0JBQ1hDLGlCQUFpQixLQUFLO3dCQUN0QmUsYUFBYSxLQUFLO3dCQUNsQmQsWUFBWTt3QkFDWmUsS0FBSyxLQUFLO3dCQUNWQyxnQkFBZ0I7d0JBQ2hCZCxTQUFTO3dCQUNURCxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEI7R0FsRE1aO0tBQUFBO0FBb0ROLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGFnZXMuanM/YTRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCBDYXJkcyBmcm9tICcuL0NhcmRzJztcclxuXHJcblxyXG5jb25zdCBQYWdlcyA9ICh7YmxvZ3N9KSA9PiB7XHJcbmNvbnN0IFt2aXNpYmxlLCBzZXR2aXNpYmxlXSA9IHVzZVN0YXRlKDIwKTtcclxuY29uc3QgcmVhZG1vcmUgPSAoKSA9PiB7XHJcbiAgICBcclxuICBzZXR2aXNpYmxlKChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDIwKTtcclxuICBpZiAodmlzaWJsZSA+PSBibG9ncy5sZW5ndGgpXHJcbiAgICB0b2FzdC5pbmZvKFwiTm8gbW9yZSBCbG9ncyBvZiB0aGlzIGNhdGVnb3J5XCIsIHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDQwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgIHByb2dyZXNzOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBteC1hdXRvICBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCI+XHJcbiAgICAgICAge2Jsb2dzICYmXHJcbiAgICAgICAgICBibG9ncy5zbGljZSgwLCB2aXNpYmxlKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Q2FyZHMga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfS8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1jZW50ZXIgbS00IFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG5hbWU9XCJyZWFkbW9yZVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWFkbW9yZSgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibS0yIHB4LTIgcHktMSBzZWxmLWNlbnRlciBib3JkZXItMiBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBob3ZlcjpiZy1wdXJwbGUtNzAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlYWRtb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgICAgICAgYXV0b0Nsb3NlPXs0MDAwfVxyXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgICAgICAgIGNsb3NlT25DbGlja1xyXG4gICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiQ2FyZHMiLCJQYWdlcyIsImJsb2dzIiwidmlzaWJsZSIsInNldHZpc2libGUiLCJyZWFkbW9yZSIsInByZXZTdGF0ZSIsImxlbmd0aCIsImluZm8iLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiaWQiLCJidXR0b24iLCJuYW1lIiwib25DbGljayIsIm5ld2VzdE9uVG9wIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Pages.js\n"));

/***/ })

});