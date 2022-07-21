exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 1742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__(1946);
;// CONCATENATED MODULE: ./components/Cards.js




const Cards = ({ item  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `/blog/${item.slug}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-white flex flex-col overflow-hidden rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 xl:w-w22 p-2 m-3 cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-56 overflow-hidden",
                        children: item.coverimage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "object-fill object-center h-full rounded-lg",
                            src: item.coverimage.url,
                            width: 1200,
                            height: 1000,
                            alt: "Cover Image"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col justify-between p-2 bg-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xl font-semibold h-14",
                                children: item.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-base h-18 whitespace-normal overflow-hidden",
                                children: item.description
                            })
                        ]
                    }),
                    item.author && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center m-2 border-t-2 border-gray-100 w-full mt-auto ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center space-x-1 pt-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ti_.TiUser, {}),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: item.author.name
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Cards = (Cards);

;// CONCATENATED MODULE: ./components/Pages.js






const Pages = ({ blogs  })=>{
    const { 0: visible , 1: setvisible  } = (0,external_react_.useState)(20);
    const readmore = ()=>{
        setvisible((prevState)=>prevState + 20
        );
        if (visible >= blogs.length) external_react_toastify_.toast.info("No more Blogs of this category", {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " mx-auto ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap place-content-center ",
                children: blogs && blogs.slice(0, visible).map((item)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(components_Cards, {
                        item: item
                    }, item.id);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container flex justify-center m-4 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        name: "readmore",
                        onClick: ()=>readmore()
                        ,
                        className: "m-2 px-2 py-1 self-center border-2 border-black rounded-md hover:bg-purple-700 hover:text-white",
                        children: "Readmore"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                        position: "bottom-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        newestOnTop: false,
                        closeOnClick: true,
                        rtl: false,
                        pauseOnFocusLoss: true,
                        draggable: true,
                        pauseOnHover: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Pages = (Pages);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;