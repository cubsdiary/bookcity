require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Detail__ = __webpack_require__(40);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Detail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_beac60e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__(47);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(41)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-beac60e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_beac60e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/Detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-beac60e8", Component.options)
  } else {
    hotAPI.reload("data-v-beac60e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BookInfo__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_CommentList__ = __webpack_require__(8);
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
//
//
//
//
//




const AK = 'pASGHnRCm7ToTo0sysmaqUST6DhVvUVC';
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    BookInfo: __WEBPACK_IMPORTED_MODULE_1__components_BookInfo__["a" /* default */],
    CommentList: __WEBPACK_IMPORTED_MODULE_2__components_CommentList__["a" /* default */]
  },
  data() {
    return {
      userinfo: {},
      bookId: null,
      bookDetail: {},
      phone: '',
      location: '',
      comment: '',
      commentArr: []
    };
  },
  mounted() {
    this.bookId = this.$root.$mp.query.id;
    this.getDetail();
    this.getComments();
    const userinfo = wx.getStorageSync('__userinfo__');
    if (userinfo) {
      this.userinfo = userinfo;
    }
  },
  computed: {
    showAdd() {
      // 没登录
      if (!this.userinfo.openId) {
        return false;
      }
      // 评论页面查到有自己的openid
      let arr = this.commentArr.filter(v => {
        return v.openid === this.userinfo.openId;
      });
      if (arr.length) {
        return false;
      }
      return true;
    }
  },
  methods: {
    async addComment() {
      if (!this.comment) {
        return;
      }
      let data = {
        openid: this.userinfo.openId,
        bookid: this.bookId,
        comment: this.comment,
        location: this.location,
        phone: this.phone
      };
      try {
        await Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* post */])('/weapp/addcomment', data);
        this.comment = '';
        this.getComments();
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* showModal */])('评论失败', e.message, false);
      }
    },
    async getDetail() {
      const info = await Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* get */])('/weapp/bookdetail', { id: this.bookId });
      this.bookDetail = info;
      wx.setNavigationBarTitle({
        title: info.title
      });
    },
    async getComments() {
      const comments = await Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* get */])('/weapp/commentlist', { bookid: this.bookId });
      this.commentArr = comments.list;
    },
    getGeo(e) {
      let url = 'https://api.map.baidu.com/geocoder/v2/';

      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                ak: AK,
                location: `${geo.latitude},${geo.longitude}`,
                output: 'json'
              },
              success: res => {
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city;
                } else {
                  this.location = '未知地点';
                  // console.log('出错了')
                }
              }
            });
          }
        });
      } else {
        this.location = '';
      }
    },
    getPhone(e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync();
        this.phone = phoneInfo.model;
      } else {
        this.phone = '';
      }
    }
  }
});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_66d20ed8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_66d20ed8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/BookInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BookInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66d20ed8", Component.options)
  } else {
    hotAPI.reload("data-v-66d20ed8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rate__ = __webpack_require__(7);
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
  components: {
    Rate: __WEBPACK_IMPORTED_MODULE_0__components_Rate__["a" /* default */]
  },
  props: ['data'],
  computed: {
    userInfo() {
      return this.data.user_info || {};
    }
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bookinfo"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": _vm.data.image,
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.data.image,
      "mode": "aspectFit"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n        " + _vm._s(_vm.data.title) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_vm._v("\n        " + _vm._s(_vm.data.author) + "\n      ")])])]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userInfo.image,
      "mode": "aspectFit"
    }
  }), _vm._v("\n    " + _vm._s(_vm.userInfo.name) + "\n    "), _c('div', {
    staticClass: "right text-primary"
  }, [_vm._v("\n      " + _vm._s(_vm.data.rate) + "分\n      "), _c('Rate', {
    attrs: {
      "value": _vm.data.rate,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_vm._v("\n    " + _vm._s(_vm.data.publisher) + "\n    "), _c('div', {
    staticClass: "right"
  }, [_vm._v("\n      " + _vm._s(_vm.data.price) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.data.tags), function(tag, index) {
    return _c('div', {
      key: tag,
      staticClass: "badge"
    }, [_vm._v(_vm._s(tag))])
  })), _vm._v(" "), _c('div', {
    staticClass: "summary"
  }, _vm._l((_vm.data.summary), function(sum, i) {
    return _c('p', {
      key: i
    }, [_vm._v(_vm._s(sum))])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-66d20ed8", esExports)
  }
}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-container"
  }, [_c('BookInfo', {
    attrs: {
      "data": _vm.bookDetail,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('CommentList', {
    attrs: {
      "comments": _vm.commentArr,
      "mpcomid": '1'
    }
  }), _vm._v(" "), (_vm.showAdd) ? _c('div', {
    staticClass: "comment"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    staticClass: "textarea",
    attrs: {
      "maxlength": 100,
      "placeholder": "请输入图书短评",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "location"
  }, [_vm._v("\n      地理位置：\n      "), _c('switch', {
    attrs: {
      "color": "#EA5A49",
      "checked": _vm.location,
      "eventid": '1'
    },
    on: {
      "change": _vm.getGeo
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.location))])]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_vm._v("\n      手机型号：\n      "), _c('switch', {
    attrs: {
      "color": "#EA5A49",
      "checked": _vm.phone,
      "eventid": '2'
    },
    on: {
      "change": _vm.getPhone
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.phone))])]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addComment
    }
  }, [_vm._v("\n      评论\n    ")])], 1) : _c('div', {
    staticClass: "text-footer"
  }, [_vm._v("\n    未登录或者已经评论过啦\n  ")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("分享给好友")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-beac60e8", esExports)
  }
}

/***/ })

},[39]);
//# sourceMappingURL=main.js.map