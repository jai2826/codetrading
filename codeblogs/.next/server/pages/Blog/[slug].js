"use strict";
(() => {
var exports = {};
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 5988:
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


const post = ({ blog , post: post1  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container px-5 mx-auto flex flex-col ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:w-4/6 mx-auto bg-white border-2 rounded-md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-md overflow-hidden ",
                    children: blog.attributes.image.data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "content",
                        className: "object-center place-self-stretch border-b-2 ",
                        src: "http://localhost:1337" + blog.attributes.image.data.attributes.url
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col mt-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: blog && blog.attributes.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container p-4 rounded-md mb-2 w-full",
                            dangerouslySetInnerHTML: {
                                __html: post1
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " text-center lg:flex border-t-2 h-auto p-6 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:self-center items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-20 h-20 rounded-full inline-flex lg:self-center items-center m-4 justify-center align-middle bg-gray-800 text-gray-600",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            className: "w-10 h-10",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "12",
                                                    cy: "7",
                                                    r: "4"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col self-center mx-4 px-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "self-start",
                                            children: blog.attributes.author.data.attributes.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-left",
                                            children: blog.attributes.author.data.attributes.about
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
// export async function getServerSideProps(context) {
//     if (!mongoose.connections[0].readyState)
//     await mongoose.connect(process.env.MONGO_URI)
//     // console.log(context)
//     let blog = await Blogs.findOne({slug:context.query.slug});
//     console.log(blog.author)
//     let author = await Authors.findOne({name:blog.author})
//     return {
//       props: {blogs: JSON.parse(JSON.stringify(blog)) , authors: JSON.parse(JSON.stringify(author)) }, // will be passed to the page component as props
//     }
//   }
// export default post
async function getServerSideProps(context) {
    let headers = {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    };
    let a = await fetch(`${"http://localhost:1337"}/api/blogs?filters[slug][$eq]=${context.query.slug}` + `&populate=*`, {
        headers: headers
    });
    let blog = await a.json();
    let blogpost = blog.data[0].attributes.post;
    return {
        props: {
            blog: blog.data[0],
            post: blogpost
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);


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
var __webpack_exports__ = (__webpack_exec__(5988));
module.exports = __webpack_exports__;

})();