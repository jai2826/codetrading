"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
;// CONCATENATED MODULE: ./pages/blog/[slug].js







const post = ({ blog , post: post1  })=>{
    let tempdate = blog.date;
    var mydate = new Date(tempdate).toDateString();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    blog.seo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            " ",
                            blog.seo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                                children: [
                                    blog.seo.title,
                                    " "
                                ]
                            }),
                            blog.seo.description && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "description",
                                content: blog.seo.description
                            }),
                            blog.seo.keywords && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "keywords",
                                content: blog.seo.keywords
                            }),
                            blog.seo.metaRobots && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "robots",
                                content: blog.seo.metaRobots
                            }),
                            blog.seo.canonicalURL && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                name: "keywords",
                                content: blog.seo.canonicalURL
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/icons/Geeklogo5-modified.png",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "language",
                        content: "English"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        async: true,
                        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106",
                        crossorigin: "anonymous"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "container mx-auto flex flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:w-4/6 mx-auto mt-6 bg-white rounded-md ",
                    children: [
                        blog.coverimage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "rounded-md border-2 md:max-h-128 overflow-hidden ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                alt: "GeekImage",
                                className: "object-center h-60 md:h-128 w-full place-self-stretch ",
                                src: blog.coverimage.url
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col rounded-md my-4 border-2 border-gray-100",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: " p-2 rounded-none font-semibold text-5xl",
                                    children: blog.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-2 flex items-center space-x-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaUser, {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/",
                                                    children: blog.author.name
                                                }),
                                                " on ",
                                                mydate
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "blogpost p-4 rounded-md w-full prose max-w-none",
                                    dangerouslySetInnerHTML: {
                                        __html: post1
                                    }
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps(context) {
    // let slug = "my-first-blog1"
    let variables = {
        slug: context.query.slug
    };
    console.log(context);
    const QUERY = external_graphql_request_.gql`
  query($slug: String!) {
    blog(where: { slug: $slug }) {
      id
      title
      description
      slug
      post {
        html
      }
      date
      seo {
        id
        image {
          url
        }
        keywords
        title
        description
    }
      coverimage {
        url
      }
      author {
        name
      }
      category
    }
  }
  `;
    const hygraph = new external_graphql_request_.GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master", {
        headers: {
            Authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTc4NzEyNjQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsNWw0d3FwczNxdTEwMXRhMDVsb2ZtNnMvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjZhOGQ4YzY0LTgxNjctNGQ2MC1hOTBlLTQ4MjBiNTc0MGZhMiIsImp0aSI6ImNsNW01cXVpNjRyeDIwMXQ3Znd6bmYxZGYifQ.RoI07nzVqTgqQYvLGEgHUY3vNVJIM3SVB31TAqWkO-UGPsl-TBvb-5kkxrHb1zUOifmyhAdepcTAU-cdmGv9MqXdDIoxnRPoNFzFQ9E2R_Wao0yssaGYp2f-JOVzGboPSqVni81F5yRGJYu6s87OVidAB88uf0WcYggVjbK0LPXjdhGQdDhlRxXEzaGSsQI7iIuHq4YggxhuysS94H1chiw0cX6EVQG0CAVTptMq7uZL_SGt3nIFNYFgLtmhup_1RhHzf5Tu4OXDwguFki3eDmFUdtDBn7pun9SYe7J7WKlXOOx-FwUJkNuEHKsbmxSF97dLa5Le8g4JiklezmLLbL_yS2pPlPo1jQ6mz_pVCa-e_56pO4iOdONuF7dqG9ypmAO09D1X4oU6KoV8TvcOOHQMLZKWsPG3JcRiZjb3F-dTUXsY9WKBvsDiwws5LqFIrw3k9uHc69ZQvVS8olJXZCY5OAGsJySmY58LApwV1h_NWvYkBjKw73uyQStOTULHctTAo5dA_hDR75ur32VRll1VwMpw_96P_1RTuhTZ0wP-OrVKd959RH7OjdOsbOB5C843WXh-z9jqFtqIGLB_nGhMsYBsxhGSzyEDFWgM5vcOLHAt7eG9q8917j1wTqUDxrHYUwiZPvUU7F-jULBPMs-iM3D2VPF1A0fo7FJ_dDY"}`
        }
    });
    const { blog  } = await hygraph.request(QUERY, variables);
    return {
        props: {
            blog: blog,
            post: blog.post.html
        }
    };
}
/* harmony default export */ const _slug_ = (post);


/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

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
var __webpack_exports__ = (__webpack_exec__(7131));
module.exports = __webpack_exports__;

})();