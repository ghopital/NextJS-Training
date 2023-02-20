"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js

//this is a secure place to store our connections
// /api/new-meetup
// ONLY POST REQUESTS
async function handler(req, res) {
    console.log("handler function called");
    if (req.method === "POST") {
        const data = req.body;
        console.log("Data from Body: ");
        console.log(data);
        const uri = "mongodb+srv://gabo:uaUoQdtL5GHJSJT4@cluster0.gkvum.mongodb.net/meetups";
        const client = await external_mongodb_namespaceObject.MongoClient.connect(uri);
        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Meetup inserted"
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(634));
module.exports = __webpack_exports__;

})();