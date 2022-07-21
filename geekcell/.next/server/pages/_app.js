"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/SearchContainer.js



const SearchContainer = ({ searched  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "lg:absolute w-40 lg:w-96 z-50 overflow-hidden lg:right-0 bg-white border-black shadow-xl rounded-md p-1 h-96 overflow-y-auto",
        children: searched && searched.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: ` lg:whitespace-nowrap overflow-hidden shadow-sm rounded-md p-2 hover:bg-purple-700 w-fit hover:text-white font-semibold mx-1 lg:text-xl `,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/blog/${item.slug}`,
                    children: item.title
                })
            }, item.id);
        })
    });
};
/* harmony default export */ const components_SearchContainer = (SearchContainer);

;// CONCATENATED MODULE: external "react-icons/gr"
const gr_namespaceObject = require("react-icons/gr");
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(5805);
;// CONCATENATED MODULE: ./components/SearchBar.js






const SearchBar = ()=>{
    // let searchref = useRef();
    // useEffect(() => {
    //   document.addEventListener("mousedown", (event) => {
    //     if (!searchref.current.contains(event.target)) setFiltered([]);
    //   });
    // }, []);
    const { 0: newblogs , 1: setNewblogs  } = (0,external_react_.useState)();
    const fetchblogs = async ()=>{
        const QUERY = external_graphql_request_.gql`
        query {
          blogs {
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
        return blogs;
    };
    (0,external_react_.useEffect)(()=>{
        const searchon = async ()=>{
            const blogs = await fetchblogs();
            setNewblogs(blogs);
        };
        searchon();
    }, []);
    const { 0: filtered , 1: setFiltered  } = (0,external_react_.useState)([]);
    const { 0: filterkey , 1: setFilterkey  } = (0,external_react_.useState)([]);
    const filterdata = (e)=>{
        const searchKey = e.target.value;
        const filtering = newblogs.filter((value)=>{
            return value.title.toLowerCase().includes(searchKey.toLowerCase());
        });
        setFilterkey(searchKey);
        if (searchKey === "") {
            setFiltered([]);
        } else {
            setFiltered(filtering);
        }
    };
    const clearsearch = ()=>{
        setFiltered([]);
    };
    // console.log(filtered);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center w-max border-2 rounded-md border-black px-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        name: "search",
                        className: "w-32 outline-none ",
                        type: "text",
                        onChange: filterdata,
                        value: filterkey
                    }),
                    filtered.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(gr_namespaceObject.GrFormClose, {
                        onClick: clearsearch,
                        className: "cursor-pointer ",
                        size: 35
                    }),
                    filtered.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx(gr_namespaceObject.GrSearch, {
                        onClick: clearsearch,
                        className: "opacity-50 m-[2.5px] cursor-pointer ",
                        size: 30
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: filtered.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(components_SearchContainer, {
                    searched: filtered
                })
            })
        ]
    });
};
/* harmony default export */ const components_SearchBar = (SearchBar);

;// CONCATENATED MODULE: ./components/Navbar.js






const Navbar = ()=>{
    let myref = (0,external_react_.useRef)();
    const { 0: hamactive , 1: setHamactive  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("mousedown", (event)=>{
            if (!myref.current.contains(event.target)) setHamactive(false);
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ref: myref,
            className: "w-full h-18 lg:h-22 flex flex-col sticky lg:flex-row p-2 top-0 bg-white items-center shadow-md z-99 md:text-lg ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex w-full lg:w-1/4 justify-between ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "rounded-md h-14 w-14 lg:h-18 lg:w-18 r",
                                        src: "/icons/Geeklogo5.png",
                                        alt: "Geekcell.in"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "m-2 font-medium text-purple-700 text-xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Geekcell"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            name: "menu",
                            className: "h-9 my-auto",
                            onClick: ()=>setHamactive(!hamactive)
                            ,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-1 p-2 self-center rounded-md lg:hidden border-2 border-purple-700",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-6 h-0.5 bg-purple-700"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-6 h-0.5 bg-purple-700"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-6 h-0.5 bg-purple-700"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: hamactive ? "mynavulphone " : "mynavulinactive lg:mynavul ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setHamactive(false)
                            ,
                            className: "hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setHamactive(false)
                            ,
                            className: "hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/programming",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Programming"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setHamactive(false)
                            ,
                            className: "hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/techhub",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Tech Hub"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setHamactive(false)
                            ,
                            className: "hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/launchpad",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Launch Pad"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setHamactive(false)
                            ,
                            className: "hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/guides",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Guides"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setHamactive(false)
                            ,
                            className: "hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/finance",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Finance"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "lg:hidden p-1 mx-1 w-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_SearchBar, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "hidden lg:block ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_SearchBar, {})
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__(1946);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: ./components/Footer.js







const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "justify-between py-2 px-4 border-gray-100 border-2 mx-auto flex items-center sm:flex-row flex-col",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center flex-col md:flex-row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "flex font-medium items-center justify-center text-gray-900",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "rounded-md ",
                                        src: "/icons/Geeklogo5.png",
                                        alt: "Geekcell.in ",
                                        width: "60",
                                        height: "60"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-3 text-xl text-purple-700",
                                        children: "Geekcell"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
                            children: " \xa9 2022 Geekcell "
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "flex inline-center justify-center sm:justify-start ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            title: "facebook",
                            href: "https://www.facebook.com/blog.geekcell/",
                            target: "_blank",
                            className: "mx-0.5 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ti_.TiSocialFacebook, {
                                    className: "h-6 lg:h-8 w-full lg:hover:mylinkfloat"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            title: "email",
                            href: "mailto: geekcell2022@gmail.com?subject = Feedback",
                            target: "_blank",
                            className: "mx-0.5 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlineMail, {
                                    className: "h-6 lg:h-8 w-full lg:hover:mylinkfloat"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            title: "twitter",
                            href: "https://twitter.com/@blog_geekcell",
                            target: "_blank",
                            className: "mx-0.5 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ti_.TiSocialTwitter, {
                                    className: "h-6 lg:h-8 w-full lg:hover:mylinkfloat"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            title: "instagram",
                            href: "https://www.instagram.com/geekcell7777/",
                            target: "_blank",
                            className: "mx-0.5 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoLogoInstagram, {
                                    className: "h-6 lg:h-8 w-full lg:hover:mylinkfloat"
                                }),
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://www.googletagmanager.com/gtag/js?id=G-C2GW04W1L3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                children: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-C2GW04W1L3');`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);
// const [reloadKey, setReloadKey] = useState(1)
// const [category, setCategory] = useState("Null")
// let checkcategory="Null"
//  let time = 0
//  const validity=(time)=>{
//     if(time===12){
//       setCategory("Annually")
//       setReloadKey(Math.random())
//     }
//     else if(time===6){
//       setCategory("Semi-annually")
//       setReloadKey(Math.random())
//     }
//     else if(time===1)
//     {
//       setCategory("Monthly");
//       setReloadKey(Math.random())
//     }
//     else if(time===0)
//     {
//       setCategory("Null");
//       setReloadKey(Math.random())
//     }
//   }
{}

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

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1946:
/***/ ((module) => {

module.exports = require("react-icons/ti");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675], () => (__webpack_exec__(2609)));
module.exports = __webpack_exports__;

})();