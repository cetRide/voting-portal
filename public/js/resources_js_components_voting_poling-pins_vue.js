(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_voting_poling-pins_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/poling-pins.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/poling-pins.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "poling-pins",
  data: function data() {
    return {
      center: {
        lat: 51.093048,
        lng: 6.84212
      },
      markers: [{
        position: {
          lat: 51.093048,
          lng: 6.84212
        }
      }, {
        position: {
          lat: 51.198429,
          lng: 6.69529
        }
      }, {
        position: {
          lat: 51.165218,
          lng: 7.067116
        }
      }, {
        position: {
          lat: 51.09256,
          lng: 6.84074
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/poling-pins.vue?vue&type=template&id=83cde90e&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/poling-pins.vue?vue&type=template&id=83cde90e&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-83cde90e");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-83cde90e");

var _hoisted_1 = {
  style: {
    "width": "100%"
  }
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h4", {
  "class": "text-center my-5"
}, "Polling Sations Map Pins", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GMapMarker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapMarker");

  var _component_GMapCluster = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapCluster");

  var _component_GMapMap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GMapMap");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GMapMap, {
    center: $data.center,
    zoom: 10,
    "map-type-id": "terrain",
    style: {
      "width": "100%",
      "height": "70vh"
    }
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GMapCluster, {
        zoomOnClick: true
      }, {
        "default": _withId(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.markers, function (m, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_GMapMarker, {
              key: index,
              position: m.position,
              clickable: true,
              draggable: true,
              onClick: function onClick($event) {
                return $data.center = m.position;
              }
            }, null, 8
            /* PROPS */
            , ["position", "onClick"]);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["center"])]);
});

/***/ }),

/***/ "./resources/js/components/voting/poling-pins.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/voting/poling-pins.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _poling_pins_vue_vue_type_template_id_83cde90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poling-pins.vue?vue&type=template&id=83cde90e&scoped=true */ "./resources/js/components/voting/poling-pins.vue?vue&type=template&id=83cde90e&scoped=true");
/* harmony import */ var _poling_pins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poling-pins.vue?vue&type=script&lang=js */ "./resources/js/components/voting/poling-pins.vue?vue&type=script&lang=js");



_poling_pins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _poling_pins_vue_vue_type_template_id_83cde90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_poling_pins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-83cde90e"
/* hot reload */
if (false) {}

_poling_pins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/voting/poling-pins.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_poling_pins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/voting/poling-pins.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/voting/poling-pins.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_poling_pins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_poling_pins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./poling-pins.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/poling-pins.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/voting/poling-pins.vue?vue&type=template&id=83cde90e&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/voting/poling-pins.vue?vue&type=template&id=83cde90e&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_poling_pins_vue_vue_type_template_id_83cde90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_poling_pins_vue_vue_type_template_id_83cde90e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./poling-pins.vue?vue&type=template&id=83cde90e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/poling-pins.vue?vue&type=template&id=83cde90e&scoped=true");


/***/ })

}]);