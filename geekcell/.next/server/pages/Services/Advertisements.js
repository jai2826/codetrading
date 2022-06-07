"use strict";
(() => {
var exports = {};
exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 8707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Advertisements = ({ plans  })=>{
    let newplans = [];
    console.log(newplans.length);
    plans.data.map((item)=>{
        if (item.attributes.category === checkcategory) newplans.push(item);
    });
    newplans.sort((a, b)=>{
        return a.id - b.id; //To sort in ascending order
    });
    if (newplans.length === 0) {
        validity(1);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "text-gray-600 body-font overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container px-5 py-24 mx-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col text-center w-full mb-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900",
                            children: "Pricing"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500",
                            children: "Get Amazing discounts on yearly plans"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex mx-auto border-2 border-black rounded overflow-hidden mt-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        validity(1);
                                    },
                                    className: "validity py-1 px-4 focus:outline-none active:bg-purple-700",
                                    children: "Monthly"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "border border-black"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        validity(6);
                                    },
                                    className: "validity py-1 px-4 focus:outline-none active:bg-purple-700",
                                    children: "Semi-annually"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "border border-black"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        validity(12);
                                    },
                                    className: "validity py-1 px-4 focus:outline-none active:bg-purple-700",
                                    children: "Annually"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap place-content-center",
                    children: newplans.map((item)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-4 xl:w-1/4 max-h-128 md:w-1/2 w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col overflow-hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-sm tracking-widest title-font mb-1 font-medium",
                                        children: item.attributes.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "\u20B9",
                                                    item.attributes.price
                                                ]
                                            }),
                                            item.attributes.category != "Null" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-lg ml-1 font-normal text-gray-500",
                                                children: [
                                                    "/",
                                                    item.attributes.category
                                                ]
                                            })
                                        ]
                                    }),
                                    item.attributes.speciality.map((item2)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "flex items-center text-gray-600 mb-2",
                                            children: [
                                                item2.included && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-4 w-4 mr-2",
                                                    src: "/icons/checked.png",
                                                    alt: ""
                                                }),
                                                !item2.included && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "h-4 w-4 mr-2",
                                                    src: "/icons/cancel.png",
                                                    alt: ""
                                                }),
                                                item2.point
                                            ]
                                        }, item2.id);
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded ",
                                        children: [
                                            "Button",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                className: "w-4 h-4 ml-auto",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M5 12h14M12 5l7 7-7 7"
                                                })
                                            })
                                        ]
                                    }),
                                    item.attributes.footer != null && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-xs text-gray-500 mt-3",
                                        children: [
                                            "Monthly Charges: \u20B9",
                                            item.attributes.footer
                                        ]
                                    })
                                ]
                            })
                        }, item.id);
                    })
                })
            ]
        })
    });
};
async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    };
    let a = await fetch(`${"http://localhost:1337"}/api/advertisements?populate=*`, {
        headers: headers
    });
    let plans = await a.json();
    // res.status(200).json({ blog })
    return {
        props: {
            plans: plans
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Advertisements);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8707));
module.exports = __webpack_exports__;

})();