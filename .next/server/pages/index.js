(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8489:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 8218:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b"
};


/***/ }),

/***/ 8140:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8140);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 7021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(2281);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(8489);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js




function MeetupItem(props) {
    const router = (0,router_.useRouter)();
    function showDetailsHandler() {
        router.push(`/${props.id}`);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showDetailsHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(8218);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js



function MeetupList(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (MeetupList_module_default()).list,
        children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                id: meetup.id,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address
            }, meetup.id))
    });
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.js





/*const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://www.shutterstock.com/image-photo/picturesque-street-rancho-domingo-charming-260nw-283142876.jpg",
    title: "A First Meetup",
    address: "Some Address Malaga",
  },
  {
    id: "m2",
    image:
      "https://www.shutterstock.com/image-photo/picturesque-street-rancho-domingo-charming-260nw-283142876.jpg",
    title: "A Second Meetup",
    address: "Some Address Malaga 2",
  },
];
*/ function HomePage(props) {
    /* 
    const [loaderMeetups,setLoaderMeetups] = useState([]);
    useEffect(()=>{
        //send http request to retrieve the meetups from backend
        setLoaderMeetups(props.DUMMY_MEETUPS);
    },[])
    
    return <MeetupList meetups={loaderMeetups}></MeetupList>     
    */ // With Static pre rendeting
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "React Meetups"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Browse a huge list of highly active React meetups!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                meetups: props.meetups
            })
        ]
    });
}
async function getStaticProps() {
    // run on the Server Side as this is executed during the build process
    // fetch data from API o from a database
    const uri = "mongodb+srv://gabo:uaUoQdtL5GHJSJT4@cluster0.gkvum.mongodb.net/meetups";
    const client = await external_mongodb_.MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map((meetup)=>({
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    description: meetup.description,
                    id: meetup._id.toString()
                }))
        },
        revalidate: 3600
    };
}
/*
export async function getServerSideProps(context){ //this will not run on the build process. It will get executed on every request.
    const req = context.req;
    const res = context.res;

    return {
        props:{
            meetups: DUMMY_MEETUPS
        },        
    }
}
*/ /* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7021));
module.exports = __webpack_exports__;

})();