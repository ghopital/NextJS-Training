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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n//this is a secure place to store our connections\n// /api/new-meetup\n// ONLY POST REQUESTS\nasync function handler(req, res) {\n    console.log(\"handler function called\");\n    if (req.method === \"POST\") {\n        const data = req.body;\n        console.log(\"Data from Body: \");\n        console.log(data);\n        const uri = \"mongodb+srv://gabo:uaUoQdtL5GHJSJT4@cluster0.gkvum.mongodb.net/meetups\";\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(uri);\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsaURBQWlEO0FBRWpELGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFDQyxHQUFHLEVBQUU7SUFDNUJDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLElBQUdILElBQUlJLE1BQU0sS0FBSyxRQUFPO1FBQ3JCLE1BQU1DLE9BQU9MLElBQUlNLElBQUk7UUFDckJKLFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUNFO1FBRVosTUFBTUUsTUFBTTtRQUNaLE1BQU1DLFNBQVMsTUFBTVYsd0RBQW1CLENBQUNTO1FBQ3pDLE1BQU1HLEtBQUtGLE9BQU9FLEVBQUU7UUFFcEIsTUFBTUMsb0JBQW9CRCxHQUFHRSxVQUFVLENBQUM7UUFDeEMsTUFBTUMsU0FBUyxNQUFNRixrQkFBa0JHLFNBQVMsQ0FBQ1Q7UUFFakRILFFBQVFDLEdBQUcsQ0FBQ1U7UUFFWkwsT0FBT08sS0FBSztRQUVaZCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVM7UUFBaUI7SUFDcEQsQ0FBQztBQUNMO0FBRUEsaUVBQWVuQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy90aGlzIGlzIGEgc2VjdXJlIHBsYWNlIHRvIHN0b3JlIG91ciBjb25uZWN0aW9uc1xyXG5cclxuLy8gL2FwaS9uZXctbWVldHVwXHJcbi8vIE9OTFkgUE9TVCBSRVFVRVNUU1xyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVyIGZ1bmN0aW9uIGNhbGxlZCcpO1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgZnJvbSBCb2R5OiAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB1cmkgPSBcIm1vbmdvZGIrc3J2Oi8vZ2Fibzp1YVVvUWR0TDVHSEpTSlQ0QGNsdXN0ZXIwLmdrdnVtLm1vbmdvZGIubmV0L21lZXR1cHNcIjtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaSk7XHJcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQnfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcblxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwidXJpIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();