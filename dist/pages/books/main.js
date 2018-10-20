require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Books__ = __webpack_require__(17);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Books__["a" /* default */]);
app.$mount();

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Books_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_360db4c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Books_vue__ = __webpack_require__(30);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-360db4c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Books_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_360db4c2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Books_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/books/Books.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Books.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-360db4c2", Component.options)
  } else {
    hotAPI.reload("data-v-360db4c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Card__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TopSwiper__ = __webpack_require__(26);
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

/*
  35 条数据
  每次加载10条
  1页 0-10
  2 10-20
  3 20-30
  4 30-40（5）
  page 当前第几页

  没有更多数据
  1. page = 0 不能显示这条提醒
  2 page > 0 数据长度< 10 ,停止触底加载
*/



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_1__components_Card__["a" /* default */],
    TopSwiper: __WEBPACK_IMPORTED_MODULE_2__components_TopSwiper__["a" /* default */]
  },
  data() {
    return {
      bookList: [],
      tops: [],
      page: 0,
      more: true,
      limit: 8
    };
  },
  mounted() {
    this.getList(true);
    this.getTop();
  },
  onPullDownRefresh() {
    this.getList(true);
    this.getTop();
  },
  onReachBottom() {
    if (!this.more) {
      return;
    }
    this.page = this.page + 1;
    this.getList(false);
  },
  methods: {
    async getList(init) {
      if (init) {
        this.more = true;
        this.page = 0;
      }
      wx.showNavigationBarLoading();
      const books = await Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* get */])('/weapp/booklist', { page: this.page, limit: this.limit });
      if (books.list.length < this.limit && this.page > 0) {
        this.more = false;
      }
      if (init) {
        this.bookList = books.list;
        wx.stopPullDownRefresh();
      } else {
        this.bookList = this.bookList.concat(books.list);
      }
      wx.hideNavigationBarLoading();
    },
    async getTop() {
      const tops = await Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* get */])('/weapp/tops');
      this.tops = tops.list;
    }
  }
});

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_f1cc6248_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__ = __webpack_require__(29);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f1cc6248"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_f1cc6248_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/TopSwiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TopSwiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1cc6248", Component.options)
  } else {
    hotAPI.reload("data-v-f1cc6248", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    imgsUrl() {
      let res = this.data;
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)];
    }
  },
  methods: {
    goBookDetail(item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      });
    }
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": true,
      "indicator-color": '#ffffff',
      "indicator-active-color": '#fa5559',
      "autoplay": true,
      "interval": 6000,
      "duration": 1000,
      "circular": true
    }
  }, _vm._l((_vm.imgsUrl), function(arr, imgindex) {
    return _c('block', {
      key: imgindex
    }, [_c('swiper-item', {
      staticClass: "swiper-item",
      attrs: {
        "mpcomid": '0-' + imgindex
      }
    }, _vm._l((arr), function(book, index) {
      return _c('img', {
        key: book.id,
        staticClass: "swiper-img",
        attrs: {
          "mode": "aspectFit",
          "src": book.image,
          "alt": "",
          "eventid": '0-' + imgindex + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.goBookDetail(book)
          }
        }
      })
    }))], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f1cc6248", esExports)
  }
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "libary"
  }, [_c('TopSwiper', {
    attrs: {
      "data": _vm.tops,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._l((_vm.bookList), function(book, index) {
    return _c('Card', {
      key: book.id,
      attrs: {
        "data": book,
        "mpcomid": '1-' + index
      }
    })
  }), _vm._v(" "), (!_vm.more) ? _c('p', {
    staticClass: "text-footer"
  }, [_vm._v("\n    没有跟多数据\n  ")]) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-360db4c2", esExports)
  }
}

/***/ })
],[16]);
//# sourceMappingURL=main.js.map