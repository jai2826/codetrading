"use strict";
(() => {
var exports = {};
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 9719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Site),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4279);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sitemap__WEBPACK_IMPORTED_MODULE_0__]);
next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getServerSideProps = async (ctx)=>{
    let headers = {
        Authorization: `Bearer ${"4a5930bca56f7ac17f0f983a61f73898b5e9b37b5092ae4d9566d27219a7047ba53a78298231231d0bd0e0fc95ff8c14368d7667b26bf121c29dda1f94f27536d2e23565a33855df75298ceda895ff38219c72c0ebfefb8bbd7882b58486a92117421fc2cf8fe0e79ee276fbf85035bba9f4975e560e44a8ab323786da9154e2"}`
    };
    let response = await fetch(`${"http://localhost:1337"}/api/blogs`, {
        headers: headers
    });
    const blogs = await response.json();
    const newblogs = blogs.data;
    console.log(blogs);
    const fields = newblogs.map((item)=>({
            loc: `${process.env.SITE_URL}/Blog/${item.attributes.slug}`,
            lastmod: new Date().toISOString()
        })
    );
    return (0,next_sitemap__WEBPACK_IMPORTED_MODULE_0__.getServerSideSitemap)(ctx, fields);
};
function Site() {};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4279:
/***/ ((module) => {

module.exports = import("next-sitemap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9719));
module.exports = __webpack_exports__;

})();