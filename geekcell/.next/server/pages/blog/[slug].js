"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst post = ({ blog , post: post1  })=>{\n    let tempdate = blog.date;\n    var mydate = new Date(tempdate).toDateString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    blog.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            \" \",\n                            blog.seo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: [\n                                    blog.seo.title,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 18,\n                                columnNumber: 26\n                            }, undefined),\n                            blog.seo.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"description\",\n                                content: blog.seo.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 19,\n                                columnNumber: 38\n                            }, undefined),\n                            blog.seo.keywords && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.seo.keywords\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 20,\n                                columnNumber: 35\n                            }, undefined),\n                            blog.seo.metaRobots && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"robots\",\n                                content: blog.seo.metaRobots\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 21,\n                                columnNumber: 37\n                            }, undefined),\n                            blog.seo.canonicalURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                name: \"keywords\",\n                                content: blog.seo.canonicalURL\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 22,\n                                columnNumber: 39\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/icons/Geeklogo5-modified.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"language\",\n                        content: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container mx-auto flex flex-col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-4/6 mx-auto mt-6 bg-white rounded-md \",\n                    children: [\n                        blog.coverimage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md border-2 md:max-h-128 overflow-hidden \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"GeekImage\",\n                                className: \"object-center h-60 md:h-128 w-full place-self-stretch \",\n                                src: blog.coverimage.url\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rounded-md my-4 border-2 border-gray-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \" p-2 rounded-none font-semibold text-5xl\",\n                                    children: blog.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2 flex items-center space-x-2 text-sm\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaUser, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"/\",\n                                                    children: blog.author.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                \" on \",\n                                                mydate\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blogpost p-4 rounded-md w-full prose max-w-none\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: post1\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jai Lakhmani\\\\Desktop\\\\codetrading\\\\geekcell\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nasync function getServerSideProps({ params  }) {\n    // let slug = \"my-first-blog1\"\n    const { slug  } = params;\n    const QUERY = graphql_request__WEBPACK_IMPORTED_MODULE_5__.gql`\r\n    query blog($slug: String!) {\r\n      blog(where: { slug: $slug }) {\r\n        id\r\n        title\r\n        description\r\n        slug\r\n        post {\r\n          html\r\n        }\r\n        date\r\n        seo {\r\n          id\r\n          image {\r\n            url\r\n          }\r\n          keywords\r\n          title\r\n          description\r\n        }\r\n        coverimage {\r\n          url\r\n        }\r\n        author {\r\n          name\r\n        }\r\n        category\r\n      }\r\n    }\r\n  `;\n    const endpoint = \"https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master\";\n    const hygraph = new graphql_request__WEBPACK_IMPORTED_MODULE_5__.GraphQLClient(\"https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master\", {\n        headers: {\n            Authorization: `Bearer ${\"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTc4NzEyNjQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsNWw0d3FwczNxdTEwMXRhMDVsb2ZtNnMvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjZhOGQ4YzY0LTgxNjctNGQ2MC1hOTBlLTQ4MjBiNTc0MGZhMiIsImp0aSI6ImNsNW01cXVpNjRyeDIwMXQ3Znd6bmYxZGYifQ.RoI07nzVqTgqQYvLGEgHUY3vNVJIM3SVB31TAqWkO-UGPsl-TBvb-5kkxrHb1zUOifmyhAdepcTAU-cdmGv9MqXdDIoxnRPoNFzFQ9E2R_Wao0yssaGYp2f-JOVzGboPSqVni81F5yRGJYu6s87OVidAB88uf0WcYggVjbK0LPXjdhGQdDhlRxXEzaGSsQI7iIuHq4YggxhuysS94H1chiw0cX6EVQG0CAVTptMq7uZL_SGt3nIFNYFgLtmhup_1RhHzf5Tu4OXDwguFki3eDmFUdtDBn7pun9SYe7J7WKlXOOx-FwUJkNuEHKsbmxSF97dLa5Le8g4JiklezmLLbL_yS2pPlPo1jQ6mz_pVCa-e_56pO4iOdONuF7dqG9ypmAO09D1X4oU6KoV8TvcOOHQMLZKWsPG3JcRiZjb3F-dTUXsY9WKBvsDiwws5LqFIrw3k9uHc69ZQvVS8olJXZCY5OAGsJySmY58LApwV1h_NWvYkBjKw73uyQStOTULHctTAo5dA_hDR75ur32VRll1VwMpw_96P_1RTuhTZ0wP-OrVKd959RH7OjdOsbOB5C843WXh-z9jqFtqIGLB_nGhMsYBsxhGSzyEDFWgM5vcOLHAt7eG9q8917j1wTqUDxrHYUwiZPvUU7F-jULBPMs-iM3D2VPF1A0fo7FJ_dDY\"}`\n        }\n    });\n    const { blog  } = await hygraph.request(QUERY, {\n        slug\n    });\n    return {\n        props: {\n            blog: blog,\n            post: blog.post.html\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUM1QixrREFBTTs7OztxREFBRztzREFDViw4REFBQ21DLEdBQUM7OzhEQUNBLDhEQUFDQyxHQUFDO29EQUFDZixJQUFJLEVBQUMsR0FBRzs4REFBRWpCLElBQUksQ0FBQ2lDLE1BQU0sQ0FBQ3ZCLElBQUk7Ozs7OzZEQUFLO2dEQUFBLE1BQUk7Z0RBQUNQLE1BQU07Ozs7OztxREFDM0M7Ozs7Ozs2Q0FDQTs4Q0FDTiw4REFBQ3NCLEtBQUc7b0NBQUNELFNBQVMsRUFBQyxpREFBa0Q7b0NBQUNVLHVCQUF1QixFQUFFO3dDQUFFQyxNQUFNLEVBQUVwQyxLQUFJO3FDQUFFOzs7Ozs2Q0FBUTs7Ozs7O3FDQUMvRzs7Ozs7OzZCQUNGOzs7Ozt5QkFDRTs7b0JBQ1QsQ0FDSDtDQUNIO0FBRU0sZUFBZXFDLGtCQUFrQixDQUFDLEVBQUNDLE1BQU0sR0FBQyxFQUFFO0lBQ2pELDhCQUE4QjtJQUU5QixNQUFNLEVBQUNDLElBQUksR0FBQyxHQUFFRCxNQUFNO0lBQ3BCLE1BQU1FLEtBQUssR0FBR3pDLGdEQUFHLENBQUM7SUErQmxCLE1BQU0wQyxRQUFRLEdBQUc7SUFDakIsTUFBTUMsT0FBTyxHQUFHLElBQUk1QyxhQUFhO1FBQy9CNkM7WUFDRUM7U0FDRDtLQUNGLENBQUM7SUFFRixNQUFNLEVBQUUzQztRQUF3Q3NDLElBQUk7S0FBRSxDQUFDO0lBRXZELE9BQU87UUFDTFUsS0FBSztZQUFJaEQ7WUFBWUQsSUFBSSxFQUFFQztTQUFnQjtLQUM1QyxDQUFDO0NBQ0g7QUFFRCxlQUFlRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVibG9ncy8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZhVXNlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSBcImdyYXBocWwtcmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiZ3JhcGhxbC1yZXF1ZXN0XCI7XHJcblxyXG5jb25zdCBwb3N0ID0gKHsgYmxvZywgcG9zdCB9KSA9PiB7XHJcbiAgbGV0IHRlbXBkYXRlID0gYmxvZy5kYXRlO1xyXG4gIHZhciBteWRhdGUgPSBuZXcgRGF0ZSh0ZW1wZGF0ZSkudG9EYXRlU3RyaW5nKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICB7YmxvZy5zZW8gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICB7YmxvZy5zZW8gJiYgPHRpdGxlPntibG9nLnNlby50aXRsZX0gPC90aXRsZT59XHJcbiAgICAgICAgICAgIHtibG9nLnNlby5kZXNjcmlwdGlvbiAmJiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLnNlby5kZXNjcmlwdGlvbn0gLz59XHJcbiAgICAgICAgICAgIHtibG9nLnNlby5rZXl3b3JkcyAmJiA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtibG9nLnNlby5rZXl3b3Jkc30gLz59XHJcbiAgICAgICAgICAgIHtibG9nLnNlby5tZXRhUm9ib3RzICYmIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PXtibG9nLnNlby5tZXRhUm9ib3RzfSAvPn1cclxuICAgICAgICAgICAge2Jsb2cuc2VvLmNhbm9uaWNhbFVSTCAmJiA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtibG9nLnNlby5jYW5vbmljYWxVUkx9IC8+fXtcIiBcIn1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbnMvR2Vla2xvZ281LW1vZGlmaWVkLnBuZ1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJsYW5ndWFnZVwiIGNvbnRlbnQ9XCJFbmdsaXNoXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgYXN5bmNcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzP2NsaWVudD1jYS1wdWItMjM3ODU0ODY4MTUyNTEwNlwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciAgbXgtYXV0byBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTQvNiBteC1hdXRvIG10LTYgIGJnLXdoaXRlICAgcm91bmRlZC1tZCBcIj5cclxuICAgICAgICAgIHtibG9nLmNvdmVyaW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyLTIgbWQ6bWF4LWgtMTI4IG92ZXJmbG93LWhpZGRlbiBcIj5cclxuICAgICAgICAgICAgICA8aW1nIGFsdD17XCJHZWVrSW1hZ2VcIn0gY2xhc3NOYW1lPVwib2JqZWN0LWNlbnRlciBoLTYwIG1kOmgtMTI4IHctZnVsbCBwbGFjZS1zZWxmLXN0cmV0Y2ggXCIgc3JjPXtibG9nLmNvdmVyaW1hZ2UudXJsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcm91bmRlZC1tZCBteS00IGJvcmRlci0yIGJvcmRlci1ncmF5LTEwMFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHAtMiByb3VuZGVkLW5vbmUgZm9udC1zZW1pYm9sZCB0ZXh0LTV4bFwiPntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgPEZhVXNlciAvPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj57YmxvZy5hdXRob3IubmFtZX08L2E+IG9uIHtteWRhdGV9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ncG9zdCBwLTQgcm91bmRlZC1tZCAgdy1mdWxsIHByb3NlIG1heC13LW5vbmVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcclxuICAvLyBsZXQgc2x1ZyA9IFwibXktZmlyc3QtYmxvZzFcIlxyXG5cclxuICBjb25zdCB7c2x1Z309IHBhcmFtcztcclxuICBjb25zdCBRVUVSWSA9IGdxbGBcclxuICAgIHF1ZXJ5IGJsb2coJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgYmxvZyh3aGVyZTogeyBzbHVnOiAkc2x1ZyB9KSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB0aXRsZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIHBvc3Qge1xyXG4gICAgICAgICAgaHRtbFxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRlXHJcbiAgICAgICAgc2VvIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAga2V5d29yZHNcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb3ZlcmltYWdlIHtcclxuICAgICAgICAgIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICBhdXRob3Ige1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRlZ29yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHBzOi8vYXBpLWFwLXNvdXRoLTEuaHlncmFwaC5jb20vdjIvY2w1bDR3cXBzM3F1MTAxdGEwNWxvZm02cy9tYXN0ZXJcIjtcclxuICBjb25zdCBoeWdyYXBoID0gbmV3IEdyYXBoUUxDbGllbnQoXCJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsNWw0d3FwczNxdTEwMXRhMDVsb2ZtNnMvbWFzdGVyXCIsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkdSQVBIUUxfQVVUSF9UT0tFTn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBibG9nIH0gPSBhd2FpdCBoeWdyYXBoLnJlcXVlc3QoUVVFUlksIHsgc2x1ZyB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGJsb2c6IGJsb2csIHBvc3Q6IGJsb2cucG9zdC5odG1sIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJTY3JpcHQiLCJSZWFjdCIsIkhlYWQiLCJGYVVzZXIiLCJHcmFwaFFMQ2xpZW50IiwiZ3FsIiwicG9zdCIsImJsb2ciLCJ0ZW1wZGF0ZSIsImRhdGUiLCJteWRhdGUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwic2VvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImtleXdvcmRzIiwibWV0YVJvYm90cyIsImNhbm9uaWNhbFVSTCIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsInNjcmlwdCIsImFzeW5jIiwic3JjIiwiY3Jvc3NvcmlnaW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiY292ZXJpbWFnZSIsImltZyIsImFsdCIsInVybCIsImgxIiwicCIsImEiLCJhdXRob3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInNsdWciLCJRVUVSWSIsImVuZHBvaW50IiwiaHlncmFwaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIkdSQVBIUUxfQVVUSF9UT0tFTiIsInJlcXVlc3QiLCJwcm9wcyIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();