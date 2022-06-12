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
exports.id = "pages/server-sitemap.xml";
exports.ids = ["pages/server-sitemap.xml"];
exports.modules = {

/***/ "./pages/server-sitemap.xml/index.tsx":
/*!********************************************!*\
  !*** ./pages/server-sitemap.xml/index.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Site),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next_sitemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sitemap */ \"next-sitemap\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sitemap__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sitemap__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getServerSideProps = async (ctx)=>{\n    let headers = {\n        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`\n    };\n    let response = await fetch(`${\"http://localhost:1337\"}/api/blogs`, {\n        headers: headers\n    });\n    const blogs = await response.json();\n    const newblogs = blogs.data;\n    console.log(blogs);\n    const fields = newblogs.map((item)=>({\n            loc: `${process.env.SITE_URL}/Blog/${item.attributes.slug}`,\n            lastmod: new Date().toISOString()\n        })\n    );\n    return (0,next_sitemap__WEBPACK_IMPORTED_MODULE_0__.getServerSideSitemap)(ctx, fields);\n};\nfunction Site() {};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2ZXItc2l0ZW1hcC54bWwvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRTtBQUc1RCxNQUFNQyxrQkFBa0IsR0FBb0IsT0FBTUMsR0FBRyxHQUFHO0lBQzdELElBQUlDLE9BQU8sR0FBRztRQUFFQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZLENBQUMsQ0FBQztLQUFFO0lBQ3JFLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxFQUFFSix1QkFBa0MsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFRixPQUFPLEVBQUVBLE9BQU87S0FBRSxDQUFDO0lBQ25HLE1BQU1RLEtBQUssR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtJQUNuQyxNQUFNQyxRQUFRLEdBQUdGLEtBQUssQ0FBQ0csSUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUssQ0FBQztJQUVsQixNQUFNTSxNQUFNLEdBQW1CSixRQUFRLENBQUNLLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFFLENBQUM7WUFDakRDLEdBQUcsRUFBQyxDQUFDLEVBQUVmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxRQUFRLENBQUMsTUFBTSxFQUFFRixJQUFJLENBQUNHLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7WUFDMURDLE9BQU8sRUFBRSxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsV0FBVyxFQUFFO1NBQ2xDLENBQUM7SUFBQSxDQUFDO0lBRUgsT0FBTzFCLGtFQUFvQixDQUFDRSxHQUFHLEVBQUVlLE1BQU0sQ0FBQztDQUN6QztBQUVjLFNBQVNVLElBQUksR0FBRyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZWJsb2dzLy4vcGFnZXMvc2VydmVyLXNpdGVtYXAueG1sL2luZGV4LnRzeD83NjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlcnZlclNpZGVTaXRlbWFwLCBJU2l0ZW1hcEZpZWxkIH0gZnJvbSBcIm5leHQtc2l0ZW1hcFwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczpHZXRTZXJ2ZXJTaWRlUHJvcHM9YXN5bmMoY3R4KT0+e1xyXG4gIGxldCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuU1RSQVBJX1RPS0VOfWAgfTtcclxuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfVVJMfS9hcGkvYmxvZ3NgLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgY29uc3QgYmxvZ3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgbmV3YmxvZ3MgPSBibG9ncy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGJsb2dzKVxyXG4gIFxyXG4gIGNvbnN0IGZpZWxkczpJU2l0ZW1hcEZpZWxkW10gPSBuZXdibG9ncy5tYXAoaXRlbT0+KHtcclxuICAgIGxvYzpgJHtwcm9jZXNzLmVudi5TSVRFX1VSTH0vQmxvZy8ke2l0ZW0uYXR0cmlidXRlcy5zbHVnfWAsXHJcbiAgICBsYXN0bW9kOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcclxuICB9KSlcclxuXHJcbiAgcmV0dXJuIGdldFNlcnZlclNpZGVTaXRlbWFwKGN0eCwgZmllbGRzKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaXRlKCkge30iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2lkZVNpdGVtYXAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJTVFJBUElfVE9LRU4iLCJyZXNwb25zZSIsImZldGNoIiwiTkVYVF9QVUJMSUNfU1RSQVBJX1VSTCIsImJsb2dzIiwianNvbiIsIm5ld2Jsb2dzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmaWVsZHMiLCJtYXAiLCJpdGVtIiwibG9jIiwiU0lURV9VUkwiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsImxhc3Rtb2QiLCJEYXRlIiwidG9JU09TdHJpbmciLCJTaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/server-sitemap.xml/index.tsx\n");

/***/ }),

/***/ "next-sitemap":
/*!*******************************!*\
  !*** external "next-sitemap" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-sitemap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/server-sitemap.xml/index.tsx"));
module.exports = __webpack_exports__;

})();