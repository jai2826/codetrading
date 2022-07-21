"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__(1946);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: external "next/script.js"
const script_js_namespaceObject = require("next/script.js");
// EXTERNAL MODULE: ./components/Pages.js + 1 modules
var Pages = __webpack_require__(1742);
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
;// CONCATENATED MODULE: ./pages/index.js













const page = ({ blogs  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Geekcell - One stop for geeks"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Everything about geeks is here"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Tech, Techhub,Technews, Techlaunch, Games, Social Media, Software, Gadgets"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "language",
                        content: "English"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/icons/Geeklogo5-modified.png",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106",
                        crossorigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "2xl:container mx-auto px-4 lg:py-10 2xl:px-8 border-2 my-6 border-gray-100 rounded-2xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " flex flex-wrap mb-20 md:flex-col",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full mb-6 lg:mb-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: " font-medium mb-2",
                                    children: "The right place for geeks"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Pages/* default */.Z, {
                            blogs: blogs
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps() {
    const QUERY = external_graphql_request_.gql`
  query {
    blogs(where: { category_contains_all: Basic }) {
      id
      slug
      title
      description
      post {
        html
      }
      date
      author {
        name
      }
      coverimage {
        url
      }
    }
  }
`;
    const hygraph = new external_graphql_request_.GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master", {
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTc4NzEyNjQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsNWw0d3FwczNxdTEwMXRhMDVsb2ZtNnMvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjZhOGQ4YzY0LTgxNjctNGQ2MC1hOTBlLTQ4MjBiNTc0MGZhMiIsImp0aSI6ImNsNW01cXVpNjRyeDIwMXQ3Znd6bmYxZGYifQ.RoI07nzVqTgqQYvLGEgHUY3vNVJIM3SVB31TAqWkO-UGPsl-TBvb-5kkxrHb1zUOifmyhAdepcTAU-cdmGv9MqXdDIoxnRPoNFzFQ9E2R_Wao0yssaGYp2f-JOVzGboPSqVni81F5yRGJYu6s87OVidAB88uf0WcYggVjbK0LPXjdhGQdDhlRxXEzaGSsQI7iIuHq4YggxhuysS94H1chiw0cX6EVQG0CAVTptMq7uZL_SGt3nIFNYFgLtmhup_1RhHzf5Tu4OXDwguFki3eDmFUdtDBn7pun9SYe7J7WKlXOOx-FwUJkNuEHKsbmxSF97dLa5Le8g4JiklezmLLbL_yS2pPlPo1jQ6mz_pVCa-e_56pO4iOdONuF7dqG9ypmAO09D1X4oU6KoV8TvcOOHQMLZKWsPG3JcRiZjb3F-dTUXsY9WKBvsDiwws5LqFIrw3k9uHc69ZQvVS8olJXZCY5OAGsJySmY58LApwV1h_NWvYkBjKw73uyQStOTULHctTAo5dA_hDR75ur32VRll1VwMpw_96P_1RTuhTZ0wP-OrVKd959RH7OjdOsbOB5C843WXh-z9jqFtqIGLB_nGhMsYBsxhGSzyEDFWgM5vcOLHAt7eG9q8917j1wTqUDxrHYUwiZPvUU7F-jULBPMs-iM3D2VPF1A0fo7FJ_dDY"}`
        }
    });
    const { blogs  } = await hygraph.request(QUERY);
    return {
        props: {
            blogs
        }
    };
}
/* harmony default export */ const pages = (page);


/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1946:
/***/ ((module) => {

module.exports = require("react-icons/ti");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675,742], () => (__webpack_exec__(6744)));
module.exports = __webpack_exports__;

})();