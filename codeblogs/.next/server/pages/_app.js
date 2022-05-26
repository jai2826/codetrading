"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3497:
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
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: ./components/Navbar.js





// import Image from '../styles/ra'
const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex flex-col sticky lg:flex-row p-2 top-0 bg-white items-center shadow-md z-99 md:text-lg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-1/4 items-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "rounded-lg",
                        src: "/logo.png",
                        alt: "codeblogs",
                        width: "80",
                        height: "72"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "m-2 font-bold text-purple-500",
                        children: "Codeblogs.in"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "menu flex items-center ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "p-1 md:px-2 rounded-lg text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Techhub",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "p-1 md:px-2 rounded-lg text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Tech Hub"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Launchpad",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "p-1 md:px-2 rounded-lg text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Launch Pad"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Guides",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "p-1 md:px-2 rounded-lg text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Guides"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/Aboutus",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "p-1 md:px-2 rounded-lg text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "About Us"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: ./components/Footer.js






const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: " body-font",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/logo.png",
                                        height: 40,
                                        width: 48
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ml-3 text-xl",
                                        children: "Codeblogs"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-2 text-sm text-gray-500",
                                children: "Air plant banjo lyft occupy retro adaptogen indego"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-1/3 md:w-1/2 w-full px-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "title-font font-semibold text-gray-900 tracking-widest text-sm mb-3 px-2 text-left",
                                        children: " Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "list-none mb-10 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://react-icons.github.io/react-icons/search?q=email",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "flex items-center space-x-2 hover:bg-purple-500 w-fit px-2 py-1 rounded-md",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineMail, {}),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: " Email "
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://react-icons.github.io/react-icons/search?q=email",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "flex items-center space-x-2 hover:bg-purple-500 w-fit px-2 py-1 rounded-md",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiFacebookBoxLine, {}),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: " Facebook"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://react-icons.github.io/react-icons/search?q=email",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "flex items-center space-x-2 hover:bg-purple-500 w-fit px-2 py-1 rounded-md",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiInstagramLine, {}),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: " Instagram "
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "https://react-icons.github.io/react-icons/search?q=email",
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "flex items-center space-x-2 hover:bg-purple-500 w-fit px-2 py-1 rounded-md",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiTwitterLine, {}),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: " Twitter "
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-1/3 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "title-font font-semibold text-gray-900 tracking-widest text-sm mb-3 px-2 text-left",
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "list-none mb-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://react-icons.github.io/react-icons/search?q=email",
                                                target: "_blank",
                                                className: "flex items-center space-x-2 hover:bg-purple-500 w-fit px-2 py-1 rounded-md",
                                                children: " Advertisements"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://react-icons.github.io/react-icons/search?q=email",
                                                target: "_blank",
                                                className: "flex items-center space-x-2 hover:bg-purple-500 w-fit px-2 py-1 rounded-md",
                                                children: " Get Your Own website "
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-1/3 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "title-font font-semibold text-gray-900 tracking-widest text-sm mb-3 px-2 text-left",
                                        children: "About US"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "mb-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "w-fit px-2 py-1",
                                                children: "we were created to facilitate options to coder"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/Aboutus",
                                                target: "_blank",
                                                className: "flex items-center space-x-2 hover:bg-purple-500 w-fit px-2 py-1 rounded-md",
                                                children: "ReadMore"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-gray-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-gray-500 text-sm text-center sm:text-left",
                            children: [
                                "\xa9 2020 Tailblocks \u2014",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com/knyttneve",
                                    rel: "noopener noreferrer",
                                    className: "text-gray-600 ml-1",
                                    target: "_blank",
                                    children: "@knyttneve"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                width: "20",
                                                height: "20",
                                                x: "2",
                                                y: "2",
                                                rx: "5",
                                                ry: "5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "0",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: "4",
                                                cy: "4",
                                                r: "2",
                                                stroke: "none"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Head.js



const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "codeblogs"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "codeblogs.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/logo.ico"
            })
        ]
    });
};
/* harmony default export */ const Head = (Header);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    const { 0: reloadKey , 1: setReloadKey  } = (0,external_react_.useState)(1);
    const { 0: category , 1: setCategory  } = (0,external_react_.useState)("Null");
    // let checkcategory="Null"
    let time1 = 0;
    const validity = (time)=>{
        if (time === 12) {
            setCategory("Annually");
            setReloadKey(Math.random());
        } else if (time === 6) {
            setCategory("Semi-annually");
            setReloadKey(Math.random());
        } else if (time === 1) {
            setCategory("Monthly");
            setReloadKey(Math.random());
        } else if (time === 0) {
            setCategory("Null");
            setReloadKey(Math.random());
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                validity: validity,
                checkcategory: category,
                ...pageProps
            }, reloadKey),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [686,397,675,676,664], () => (__webpack_exec__(3497)));
module.exports = __webpack_exports__;

})();