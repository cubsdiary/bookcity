require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comments__ = __webpack_require__(32);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Comments__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Comments_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_7a876628_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Comments_vue__ = __webpack_require__(38);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Comments_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_7a876628_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Comments_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/comments/Comments.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comments.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a876628", Component.options)
  } else {
    hotAPI.reload("data-v-7a876628", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CommentList__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Card__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      comments: [],
      books: [],
      userinfo: {}
    };
  },
  components: {
    CommentList: __WEBPACK_IMPORTED_MODULE_1__components_CommentList__["a" /* default */],
    Card: __WEBPACK_IMPORTED_MODULE_2__components_Card__["a" /* default */]
  },
  methods: {
    init() {
      wx.showNavigationBarLoading();
      this.getComments();
      this.getBooks();
      wx.hideNavigationBarLoading();
    },
    async getBooks() {
      const books = await Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* get */])('/weapp/booklist', {
        openid: this.userinfo.openId
      });
      console.log(books);
      this.books = books.list;
    },
    async getComments() {
      const comments = await Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* get */])('/weapp/commentlist', {
        openid: this.userinfo.openId
      });
      this.comments = comments.list;
    }
  },
  onPullDownRefresh() {
    this.init();
    wx.stopPullDownRefresh();
  },
  onShow() {
    if (!this.userinfo.openId) {
      let userinfo = wx.getStorageSync('__userinfo__');
      if (userinfo) {
        this.userinfo = userinfo;
        this.init();
      }
    }
  }
});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(_vm.userinfo.openId) ? _c('CommentList', {
    attrs: {
      "type": "user",
      "comments": _vm.comments,
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.userinfo.openId) ? _c('div', [_c('div', {
    staticClass: "page-title"
  }, [_vm._v("我的图书")]), _vm._v(" "), _vm._l((_vm.books), function(book, bookid) {
    return _c('Card', {
      key: bookid,
      attrs: {
        "data": book,
        "mpcomid": '1-' + bookid
      }
    })
  }), _vm._v(" "), (!_vm.books.length) ? _c('div', [_vm._v("暂时还没添加过书，快去添加几本把")]) : _vm._e()], 2) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7a876628", esExports)
  }
}

/***/ })

},[31]);
//# sourceMappingURL=main.js.map