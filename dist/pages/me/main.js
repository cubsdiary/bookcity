require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(23);



const app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_69f1fa2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69f1fa2c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_69f1fa2c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/me/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69f1fa2c", Component.options)
  } else {
    hotAPI.reload("data-v-69f1fa2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk__);
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
  data() {
    return {
      userInfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      },
      canIUse: wx.canIUse('button.open-type.getUserInfo')
    };
  },
  onShow() {
    this.userInfo = wx.getStorageSync('__userinfo__') || this.userInfo;
  },
  methods: {
    doLogin() {
      let user = wx.getStorageSync('__userinfo__');
      if (!user) {
        __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk___default.a.setLoginUrl(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].login);
        __WEBPACK_IMPORTED_MODULE_1_wafer2_client_sdk___default.a.login({
          success: res => {
            wx.showToast({
              title: '登录成功'
            });
            wx.setStorageSync('__userinfo__', res);
            this.userInfo = res;
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '登录失败'
            });
          }
        });
      }
    },
    getBook() {
      wx.scanCode({
        success: res => {
          console.log(res);
        },
        fail: err => {
          console.log(err);
        }
      });
    }
  }
});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 配置项

const host = 'http://localhost:5757';

const config = {
  host,
  login: `${host}/weapp/login`
};

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "userinfo"
  }, [_c('button', {
    staticClass: "bottom-img",
    attrs: {
      "plain": "true",
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.doLogin
    }
  }, [_c('img', {
    staticClass: "imgs",
    attrs: {
      "src": _vm.userInfo.avatarUrl
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "bottom-p",
    attrs: {
      "plain": "true",
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.doLogin
    }
  }, [_c('p', [_vm._v(_vm._s(_vm.userInfo.nickName))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "menu-bar"
  }, [_c('ul', {
    staticClass: "menu-list"
  }, [_c('li', {
    staticClass: "menu-li",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.getBook
    }
  }, [_vm._v("添加图书")]), _vm._v(" "), _c('li', {
    staticClass: "menu-li"
  }, [_vm._v("退出登录")])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-69f1fa2c", esExports)
  }
}

/***/ })

},[22]);
//# sourceMappingURL=main.js.map