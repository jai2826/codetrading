"use strict";
(() => {
var exports = {};
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 7743:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

const mongoose = __webpack_require__(1185);
const Authorschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    about: String,
    role: String
}, {
    timestamps: true
});
mongoose.models = {};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model("Author", Authorschema));


/***/ }),

/***/ 6766:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

const mongoose = __webpack_require__(1185);
const BlogSchema = new mongoose.Schema({
    title: String,
    slug: {
        type: String,
        unique: true
    },
    author: String,
    body: String,
    img: String,
    comments: [
        {
            body: String,
            date: Date
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
mongoose.models = {};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model("Blogs", BlogSchema));


/***/ }),

/***/ 5988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6766);
/* harmony import */ var _models_Authors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7743);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3135);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4818);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_6__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_7__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_6__, next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_7__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ReactDOMServer = __webpack_require__(8684);
const HtmlToReactParser = (__webpack_require__(2795).Parser);
const post = ({ blog , post: post1  })=>{
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(post1);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "container px-5 mx-auto flex flex-col ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:w-4/6 mx-auto bg-white border-2 rounded-md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-md overflow-hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "content",
                        className: " object-center max-h-128 border-b-2",
                        src: blog.attributes.image.data && blog.attributes.image.data.attributes.name,
                        width: "1200",
                        height: "1500"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col mt-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: blog && blog.attributes.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container py-4 rounded-md mb-2 w-full",
                            dangerouslySetInnerHTML: {
                                __html: reactHtml
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
        Authorization: "Bearer 2d07dcb064b11688035e4439eb838361893b9d32cd98b3b67bf56a3b8e64ecd79f9985c3c5025e2c669350c67fec864f30b3497a4a5811b97c79ee6734b0bd4df5285915a9292d9813e5c11ccb301091aa19b080e559e686375e58ab1545f90b40f6a645980c7a097f63b528d6e0083f9db8f56600fa6c43f731b30161f6d666"
    };
    let a = await fetch(`http://localhost:1337/api/blogs?filters[slug][$eq]=${context.query.slug}` + `&populate=*`, {
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2795:
/***/ ((module) => {

module.exports = require("html-to-react");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8684:
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,397,675], () => (__webpack_exec__(5988)));
module.exports = __webpack_exports__;

})();