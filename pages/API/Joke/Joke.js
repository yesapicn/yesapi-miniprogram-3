(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/API/Joke/Joke"], {

    /***/
    "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=script&lang=js&":
      /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/yesapi-uniapp/pages/API/Joke/Joke.vue?vue&type=script&lang=js& ***!
        \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/
      (function(module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(uni) {
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;


























          var okayapi = _interopRequireWildcard(__webpack_require__( /*! ../../../components/okayapi/okayapi.js */ "C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\components\\okayapi\\okayapi.js"));

          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                      Object.defineProperty(newObj, key, desc);
                    } else {
                      newObj[key] = obj[key];
                    }
                  }
                }
              }
              newObj.default = obj;
              return newObj;
            }
          } //
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
          var _default = {
            data: function data() {
              return {
                title: 'Joke',
                first: ''
              };
            },
            methods: {
              showOkay: function showOkay() {
                var _this = this;
                var params = {
                  s: "App.Common_Joke.RandOne" // 必须，待请求的接口服务名称
                };
                uni.request({
                  url: this.yesapiHost,
                  method: 'GET',
                  data: okayapi.enryptData(params),
                  success: function success(res) {
                    _this.first = res.data.data.joke;
                  },
                  fail: function fail(res) {
                    console.log(res);
                  },
                  complete: function complete() {}
                });
              },

              onLoad: function () {
                this.showOkay();
              }

            }
          };
          exports.default = _default;
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

        /***/
      }),

    /***/
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=template&id=895032f6&":
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/yesapi-uniapp/pages/API/Joke/Joke.vue?vue&type=template&id=895032f6& ***!
        \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/
      (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "render", function() {
          return render;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() {
          return staticRenderFns;
        });
        var render = function() {
          var _vm = this
          var _h = _vm.$createElement
          var _c = _vm._self._c || _h
        }
        var staticRenderFns = []
        render._withStripped = true



        /***/
      }),

    /***/
    "C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue":
      /*!****************************************************************************!*\
        !*** C:/Users/Administrator/Desktop/yesapi-uniapp/pages/API/Joke/Joke.vue ***!
        \****************************************************************************/
      /*! no static exports found */
      /***/
      (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _Joke_vue_vue_type_template_id_895032f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Joke.vue?vue&type=template&id=895032f6& */ "C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=template&id=895032f6&");
        /* harmony import */
        var _Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./Joke.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=script&lang=js&");
        /* harmony reexport (unknown) */
        for (var __WEBPACK_IMPORT_KEY__ in _Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__)
          if (__WEBPACK_IMPORT_KEY__ !== 'default')(function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];
            })
          }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */
        var _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





        /* normalize component */

        var component = Object(_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
          _Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
          _Joke_vue_vue_type_template_id_895032f6___WEBPACK_IMPORTED_MODULE_0__["render"],
          _Joke_vue_vue_type_template_id_895032f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
          false,
          null,
          null,
          null

        )

        /* hot reload */
        if (false) {
          var api;
        }
        component.options.__file = "C:/Users/Administrator/Desktop/yesapi-uniapp/pages/API/Joke/Joke.vue"
        /* harmony default export */
        __webpack_exports__["default"] = (component.exports);

        /***/
      }),

    /***/
    "C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=script&lang=js&":
      /*!*****************************************************************************************************!*\
        !*** C:/Users/Administrator/Desktop/yesapi-uniapp/pages/API/Joke/Joke.vue?vue&type=script&lang=js& ***!
        \*****************************************************************************************************/
      /*! no static exports found */
      /***/
      (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./Joke.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=script&lang=js&");
        /* harmony import */
        var _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */
        for (var __WEBPACK_IMPORT_KEY__ in _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__)
          if (__WEBPACK_IMPORT_KEY__ !== 'default')(function(key) {
            __webpack_require__.d(__webpack_exports__, key, function() {
              return _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];
            })
          }(__WEBPACK_IMPORT_KEY__));
        /* harmony default export */
        __webpack_exports__["default"] = (_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a);

        /***/
      }),

    /***/
    "C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=template&id=895032f6&":
      /*!***********************************************************************************************************!*\
        !*** C:/Users/Administrator/Desktop/yesapi-uniapp/pages/API/Joke/Joke.vue?vue&type=template&id=895032f6& ***!
        \***********************************************************************************************************/
      /*! exports provided: render, staticRenderFns */
      /***/
      (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_template_id_895032f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./Joke.vue?vue&type=template&id=895032f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\pages\\API\\Joke\\Joke.vue?vue&type=template&id=895032f6&");
        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "render", function() {
          return _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_template_id_895032f6___WEBPACK_IMPORTED_MODULE_0__["render"];
        });

        /* harmony reexport (safe) */
        __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() {
          return _F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uniapp_HBuilderX_1_8_2_20190401_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Joke_vue_vue_type_template_id_895032f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];
        });



        /***/
      })

  },
  [
    ["C:\\Users\\Administrator\\Desktop\\yesapi-uniapp\\main.js?{\"page\":\"pages%2FAPI%2FJoke%2FJoke\"}", "common/runtime", "common/vendor"]
  ]
]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/API/Joke/Joke.js.map