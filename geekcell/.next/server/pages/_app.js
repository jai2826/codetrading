"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1974:
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
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "rounded-lg h-14 w-16 lg:h-18 lg:w-20 r",
                                    src: "/mylogo.png",
                                    alt: "Geekcell.in"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "m-2 font-medium text-purple-700",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Geekcell.in"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "h-9 my-auto ",
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
                            className: "hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl",
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
                            className: "hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl",
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
                            className: "hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/technews",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Tech News"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>setHamactive(false)
                            ,
                            className: "hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl",
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
                            className: "hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl",
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
                            className: "hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/Finance",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Finance"
                                })
                            })
                        })
                    ]
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
            className: " py-2 px-4 border-gray-100 border-2 mx-auto flex items-center sm:flex-row flex-col",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "flex font-medium items-center justify-center text-gray-900",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "rounded-lg ",
                            src: "/mylogo.png",
                            alt: "Geekcell.in ",
                            width: "68",
                            height: "60"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "ml-3 text-xl",
                            children: "Geekcell"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4",
                    children: " \xa9 2022 Geekcell "
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "flex inline-center sm:ml-auto justify-center sm:justify-start ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            className: "mx-0.5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ti_.TiSocialFacebook, {
                                size: 25
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            className: "mx-0.5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdOutlineMail, {
                                size: 25
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            className: "mx-0.5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ti_.TiSocialTwitter, {
                                size: 25
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            className: "mx-0.5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoLogoInstagram, {
                                size: 25
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./components/Header.js




const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {});
};
/* harmony default export */ const components_Header = (Header);

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
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
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
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675], () => (__webpack_exec__(1974)));
module.exports = __webpack_exports__;

})();