(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_voting_voting-mock-up_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/tooltip */ "./node_modules/primevue/tooltip/tooltip.esm.js");
/* harmony import */ var primevue_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/dialog */ "./node_modules/primevue/dialog/dialog.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  directives: {
    'tooltip': primevue_tooltip__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      display: false,
      displayTwo: false,
      item: null
    };
  },
  components: {
    Dialog: primevue_dialog__WEBPACK_IMPORTED_MODULE_1__.default
  },
  name: "vote-sample",
  methods: {
    handleFocusOut: function handleFocusOut() {
      this.display = true;
    },
    handleFocus: function handleFocus(id) {
      if (this.item === null) {
        document.getElementById(id).style.visibility = 'visible';
        this.item = id;
      } else {
        this.display = true;
      }
    },
    outside: function outside() {
      this.displayTwo = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-9ae01876");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9ae01876");

var _hoisted_1 = {
  "class": "m-3"
};
var _hoisted_2 = {
  "class": "col-md-10 ml-auto mr-auto"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<h3 class=\"text-center my-3\" data-v-9ae01876>Voting Simulation</h3><h4 class=\"text-center\" data-v-9ae01876>Ballot Paper Sample</h4><div class=\"border inst\" data-v-9ae01876><h5 data-v-9ae01876>Voting Instructions</h5><p data-v-9ae01876> - Mark in the space that corresponds to the: <br data-v-9ae01876>     a. Name, portrait, and symbol of the Political Party candidate <br data-v-9ae01876>     b.Name and portrait of an independent candidate <br data-v-9ae01876> - Make only one mark on a ballot paper within the space provided for marking. <br data-v-9ae01876> - Features of a correctly marked ballot paper <br data-v-9ae01876> - The ballot paper should have a mark against only one candidate<br data-v-9ae01876> - The mark should be within the space <br data-v-9ae01876></p></div>", 3);

var _hoisted_6 = {
  style: {
    "text-align": "center"
  },
  "class": "table table-bordered"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "Party/Candidate Symbol"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "Candidate's Photo and Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  scope: "col"
}, "Voter's Mark")])], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/apple.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, " Party XX ", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "ml-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/man.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, " Eneo Bora ")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "vote",
  id: "box1",
  height: "70",
  width: "70",
  src: "/images/icons/tick.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/bananas.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, " Party AA ", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  lass: "ml-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/woman.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, " Uza Sera ")], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "vote",
  id: "box2",
  height: "70",
  width: "70",
  src: "/images/icons/tick.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "ml-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/mango.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, " Party MM ", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  lass: "ml-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/pres.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, " Panda Ndoto ")], -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "vote",
  id: "box3",
  height: "70",
  width: "70",
  src: "/images/icons/tick.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/orange-juice.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, " Party ZZ ", -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "ml-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/user.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, " Mema Mbeleni ")], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "vote",
  id: "box4",
  height: "70",
  width: "70",
  src: "/images/icons/tick.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/pineapple.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, " Party TT ", -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "ml-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  height: "70",
  width: "70",
  src: "/images/icons/profile.png",
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, " Akili Rembo ")], -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "vote",
  id: "box5",
  height: "70",
  width: "70",
  src: "/images/icons/tick.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-info-circle"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, " Mark against only one candidate ! ")], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "pi pi-info-circle"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cnt"
}, " Mark within the space. Your vote will be spoilt! ")], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Dialog = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dialog");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_8, _hoisted_9]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onFocus: _cache[3] || (_cache[3] = function ($event) {
      return $options.handleFocus('box1');
    }),
    onFocusout: _cache[4] || (_cache[4] = function () {
      return $options.handleFocusOut && $options.handleFocusOut.apply($options, arguments);
    }),
    tabindex: "0",
    "class": "mark-area "
  }, [_hoisted_11], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[_directive_tooltip, 'Tick within this box']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_12, _hoisted_13]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onFocus: _cache[7] || (_cache[7] = function ($event) {
      return $options.handleFocus('box2');
    }),
    onFocusout: _cache[8] || (_cache[8] = function () {
      return $options.handleFocusOut && $options.handleFocusOut.apply($options, arguments);
    }),
    tabindex: "0",
    "class": "mark-area "
  }, [_hoisted_15], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[_directive_tooltip, 'Tick within this box']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_16, _hoisted_17]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[10] || (_cache[10] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_18]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onFocus: _cache[11] || (_cache[11] = function ($event) {
      return $options.handleFocus('box3');
    }),
    onFocusout: _cache[12] || (_cache[12] = function () {
      return $options.handleFocusOut && $options.handleFocusOut.apply($options, arguments);
    }),
    tabindex: "0",
    "class": "mark-area "
  }, [_hoisted_19], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[_directive_tooltip, 'Tick within this box']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[13] || (_cache[13] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_20, _hoisted_21]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[14] || (_cache[14] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_22]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onFocus: _cache[15] || (_cache[15] = function ($event) {
      return $options.handleFocus('box4');
    }),
    onFocusout: _cache[16] || (_cache[16] = function () {
      return $options.handleFocusOut && $options.handleFocusOut.apply($options, arguments);
    }),
    tabindex: "0",
    "class": "mark-area "
  }, [_hoisted_23], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[_directive_tooltip, 'Tick within this box']])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[17] || (_cache[17] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_24, _hoisted_25]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onClick: _cache[18] || (_cache[18] = function ($event) {
      return $data.displayTwo = true;
    })
  }, [_hoisted_26]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
    onFocus: _cache[19] || (_cache[19] = function ($event) {
      return $options.handleFocus('box5');
    }),
    onFocusout: _cache[20] || (_cache[20] = function () {
      return $options.handleFocusOut && $options.handleFocusOut.apply($options, arguments);
    }),
    tabindex: "0",
    "class": "mark-area "
  }, [_hoisted_27], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[_directive_tooltip, 'Tick within this box']])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    modal: "true",
    header: "Vote validity",
    position: "top",
    visible: $data.display,
    "onUpdate:visible": _cache[21] || (_cache[21] = function ($event) {
      return $data.display = $event;
    })
  }, {
    "default": _withId(function () {
      return [_hoisted_28];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dialog, {
    modal: "true",
    header: "Vote validity",
    position: "top",
    visible: $data.displayTwo,
    "onUpdate:visible": _cache[22] || (_cache[22] = function ($event) {
      return $data.displayTwo = $event;
    })
  }, {
    "default": _withId(function () {
      return [_hoisted_29];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["visible"])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vote[data-v-9ae01876] {\n  visibility: hidden;\n}\n.inst[data-v-9ae01876] {\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n.mark-area[data-v-9ae01876] {\n  position: relative;\n  cursor: pointer;\n}\n.mark-area[data-v-9ae01876]:hover {\n  border: 2px solid rebeccapurple;\n}\ninput[type=checkbox][data-v-9ae01876] {\n  position: absolute;\n}\n.cnt[data-v-9ae01876] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/primevue/dialog/dialog.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/primevue/dialog/dialog.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ "./node_modules/primevue/utils/utils.esm.js");
/* harmony import */ var primevue_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/ripple */ "./node_modules/primevue/ripple/ripple.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




var script = {
    name: 'Dialog',
    inheritAttrs: false,
    emits: ['update:visible','show','hide','maximize','unmaximize','dragend'],
    props: {
        header: null,
        footer: null,
        visible: Boolean,
        modal: Boolean,
        contentStyle: null,
        contentClass: String,
        rtl: Boolean,
        maximizable: Boolean,
        dismissableMask: Boolean,
        closable: {
            type: Boolean,
            default: true
        },
        closeOnEscape: {
            type: Boolean,
            default: true
        },
        showHeader: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        ariaCloseLabel: {
            type: String,
            default: 'close'
        },
        position: {
            type: String,
            default: 'center'
        },
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        },
        keepInViewport: {
            type: Boolean,
            default: true
        },
        minX: {
            type: Number,
            default: 0
        },
        minY: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            containerVisible: this.visible,
            maximized: false
        }
    },
    documentKeydownListener: null,
    container: null,
    mask: null,
    styleElement: null,
    dragging: null,
    documentDragListener: null,
    documentDragEndListener: null,
    lastPageX: null,
    lastPageY: null,
    updated() {
        if (this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        this.unbindDocumentState();
        this.unbindGlobalListeners();
        this.destroyStyle();

        this.mask = null;

        if (this.container && this.autoZIndex) {
            primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(this.container);
        }
        this.container = null;
    },
    mounted() {
        if (this.breakpoints) {
            this.createStyle();
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        },
        onBeforeEnter(el) {
            if (this.autoZIndex) {
                primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.set('modal', el, this.baseZIndex + this.$primevue.config.zIndex.modal);
            }

            el.setAttribute(this.attributeSelector, '');
        },
        onEnter() {
            this.mask.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);

            this.$emit('show');
            this.focus();
            this.enableDocumentSettings();
            this.bindGlobalListeners();
        },
        onBeforeLeave() {
            primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.mask, 'p-dialog-mask-leave');
        },
        onLeave() {
            
            this.$emit('hide');
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(el);
            }
            this.containerVisible = false;
            this.unbindDocumentState();
            this.unbindGlobalListeners();
        },
        onMaskClick(event) {
            if (this.dismissableMask && this.closable && this.modal && this.mask === event.target) {
                this.close();
            }
        },
        focus() {
            let focusTarget = this.container.querySelector('[autofocus]');
            if (focusTarget) {
                focusTarget.focus();
            }
        },
        maximize(event) {
            if (this.maximized) {
                this.maximized = false;
                this.$emit('unmaximize', event);
            }
            else {
                this.maximized = true;
                this.$emit('maximize', event);
            }

            if (!this.modal) {
                if (this.maximized)
                    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(document.body, 'p-overflow-hidden');
                else
                    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        },
        enableDocumentSettings() {
            if (this.modal || (this.maximizable && this.maximized)) {
                primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(document.body, 'p-overflow-hidden');
            }
        },
        unbindDocumentState() {
            if (this.modal || (this.maximizable && this.maximized)) {
                primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(document.body, 'p-overflow-hidden');
            }
        },
        onKeyDown(event) {
            if (event.which === 9) {
                event.preventDefault();
                let focusableElements = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getFocusableElements(this.container);
                if (focusableElements && focusableElements.length > 0) {
                    if (!document.activeElement) {
                        focusableElements[0].focus();
                    }
                    else {
                        let focusedIndex = focusableElements.indexOf(document.activeElement);
                        if (event.shiftKey) {
                            if (focusedIndex == -1 || focusedIndex === 0)
                                focusableElements[focusableElements.length - 1].focus();
                            else
                                focusableElements[focusedIndex - 1].focus();
                        }
                        else {
                            if (focusedIndex == -1 || focusedIndex === (focusableElements.length - 1))
                                focusableElements[0].focus();
                            else
                                focusableElements[focusedIndex + 1].focus();
                        }
                    }
                }
            } else if (event.which === 27 && this.closeOnEscape) {
                this.close();
            }
        },
        bindDocumentKeyDownListener() {
            if (!this.documentKeydownListener) {
                this.documentKeydownListener = this.onKeyDown.bind(this);
                window.document.addEventListener('keydown', this.documentKeydownListener);
            }
        },
        unbindDocumentKeyDownListener() {
            if (this.documentKeydownListener) {
                window.document.removeEventListener('keydown', this.documentKeydownListener);
                this.documentKeydownListener = null;
            }
        },
        getPositionClass() {
            const positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
            const pos = positions.find(item => item === this.position);

            return pos ? `p-dialog-${pos}` : '';
        },
        containerRef(el) {
            this.container = el;
        },
        maskRef(el) {
            this.mask = el;
        },
        createStyle() {
			if (!this.styleElement) {
				this.styleElement = document.createElement('style');
				this.styleElement.type = 'text/css';
				document.head.appendChild(this.styleElement);

                let innerHTML = '';
                for (let breakpoint in this.breakpoints) {
                    innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
                }

                this.styleElement.innerHTML = innerHTML;
			}
		},
        destroyStyle() {
            if (this.styleElement) {
                document.head.removeChild(this.styleElement);
                this.styleElement = null;
            }
        },
        initDrag(event) {
            if (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.hasClass(event.target, 'p-dialog-header-icon') || primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.hasClass(event.target.parentElement, 'p-dialog-header-icon')) {
                return;
            }

            if (this.draggable) {
                this.dragging = true;
                this.lastPageX = event.pageX;
                this.lastPageY = event.pageY;

                this.container.style.margin = '0';
                primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(document.body, 'p-unselectable-text');
            }
        },
        bindGlobalListeners() {
            if (this.draggable) {
                this.bindDocumentDragListener();
                this.bindDocumentDragEndListener();
            }

            if (this.closeOnEscape && this.closable) {
                this.bindDocumentKeyDownListener();
            }
        },
        unbindGlobalListeners() {
            this.unbindDocumentDragListener();
            this.unbindDocumentDragEndListener();
            this.unbindDocumentKeyDownListener();
        },
        bindDocumentDragListener() {
            this.documentDragListener = (event) => {
                if (this.dragging) {
                    let width = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(this.container);
                    let height = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(this.container);
                    let deltaX = event.pageX - this.lastPageX;
                    let deltaY = event.pageY - this.lastPageY;
                    let offset = this.container.getBoundingClientRect();
                    let leftPos = offset.left + deltaX;
                    let topPos = offset.top + deltaY;
                    let viewport = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getViewport();

                    this.container.style.position = 'fixed';

                    if (this.keepInViewport) {
                        if (leftPos >= this.minX && (leftPos + width) < viewport.width) {
                            this.lastPageX = event.pageX;
                            this.container.style.left = leftPos + 'px';
                        }

                        if (topPos >= this.minY && (topPos + height) < viewport.height) {
                            this.lastPageY = event.pageY;
                            this.container.style.top = topPos + 'px';
                        }
                    }
                    else {
                        this.lastPageX = event.pageX;
                        this.container.style.left = leftPos + 'px';
                        this.lastPageY = event.pageY;
                        this.container.style.top = topPos + 'px';
                    }
                }
            };
            window.document.addEventListener('mousemove', this.documentDragListener);
        },
        unbindDocumentDragListener() {
            if (this.documentDragListener) {
                window.document.removeEventListener('mousemove', this.documentDragListener);
                this.documentDragListener = null;
            }
        },
        bindDocumentDragEndListener() {
            this.documentDragEndListener = (event) => {
                if (this.dragging) {
                    this.dragging = false;
                    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(document.body, 'p-unselectable-text');

                    this.$emit('dragend', event);
                }
            };
            window.document.addEventListener('mouseup', this.documentDragEndListener);
        },
        unbindDocumentDragEndListener() {
            if (this.documentDragEndListener) {
                window.document.removeEventListener('mouseup', this.documentDragEndListener);
                this.documentDragEndListener = null;
            }
        }
    },
    computed: {
        maskClass() {
            return ['p-dialog-mask', {'p-component-overlay': this.modal}, this.getPositionClass()];
        },
        dialogClass() {
            return ['p-dialog p-component', {
                'p-dialog-rtl': this.rtl,
                'p-dialog-maximized': this.maximizable && this.maximized,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
        maximizeIconClass() {
            return ['p-dialog-header-maximize-icon pi', {
                'pi-window-maximize': !this.maximized,
                'pi-window-minimize': this.maximized
            }];
        },
        ariaId() {
            return (0,primevue_utils__WEBPACK_IMPORTED_MODULE_0__.UniqueComponentId)();
        },
        ariaLabelledById() {
            return this.header != null ? this.ariaId + '_header' : null;
        },
        attributeSelector() {
            return (0,primevue_utils__WEBPACK_IMPORTED_MODULE_0__.UniqueComponentId)();
        },
        contentStyleClass() {
            return ['p-dialog-content', this.contentClass];
        }
    },
    directives: {
        'ripple': primevue_ripple__WEBPACK_IMPORTED_MODULE_1__.default
    }
};

const _hoisted_1 = { class: "p-dialog-header-icons" };
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)("span", { class: "p-dialog-header-close-icon pi pi-times" }, null, -1);
const _hoisted_3 = {
  key: 1,
  class: "p-dialog-footer"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_2__.resolveDirective)("ripple");

  return ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Teleport, { to: "body" }, [
    ($data.containerVisible)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", {
          key: 0,
          ref: $options.maskRef,
          class: $options.maskClass,
          onClick: _cache[4] || (_cache[4] = (...args) => ($options.onMaskClick && $options.onMaskClick(...args)))
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_2__.Transition, {
            name: "p-dialog",
            onBeforeEnter: $options.onBeforeEnter,
            onEnter: $options.onEnter,
            onBeforeLeave: $options.onBeforeLeave,
            onLeave: $options.onLeave,
            onAfterLeave: $options.onAfterLeave,
            appear: ""
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)(() => [
              ($props.visible)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_2__.mergeProps)({
                    key: 0,
                    ref: $options.containerRef,
                    class: $options.dialogClass
                  }, _ctx.$attrs, {
                    role: "dialog",
                    "aria-labelledby": $options.ariaLabelledById,
                    "aria-modal": $props.modal
                  }), [
                    ($props.showHeader)
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", {
                          key: 0,
                          class: "p-dialog-header",
                          onMousedown: _cache[3] || (_cache[3] = (...args) => ($options.initDrag && $options.initDrag(...args)))
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "header", {}, () => [
                            ($props.header)
                              ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("span", {
                                  key: 0,
                                  id: $options.ariaLabelledById,
                                  class: "p-dialog-title"
                                }, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($props.header), 9, ["id"]))
                              : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("", true)
                          ]),
                          (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)("div", _hoisted_1, [
                            ($props.maximizable)
                              ? (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("button", {
                                  key: 0,
                                  class: "p-dialog-header-icon p-dialog-header-maximize p-link",
                                  onClick: _cache[1] || (_cache[1] = (...args) => ($options.maximize && $options.maximize(...args))),
                                  type: "button",
                                  tabindex: "-1"
                                }, [
                                  (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)("span", { class: $options.maximizeIconClass }, null, 2)
                                ], 512)), [
                                  [_directive_ripple]
                                ])
                              : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("", true),
                            ($props.closable)
                              ? (0,vue__WEBPACK_IMPORTED_MODULE_2__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("button", {
                                  key: 1,
                                  class: "p-dialog-header-icon p-dialog-header-close p-link",
                                  onClick: _cache[2] || (_cache[2] = (...args) => ($options.close && $options.close(...args))),
                                  "aria-label": $props.ariaCloseLabel,
                                  type: "button",
                                  tabindex: "-1"
                                }, [
                                  _hoisted_2
                                ], 8, ["aria-label"])), [
                                  [_directive_ripple]
                                ])
                              : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("", true)
                          ])
                        ], 32))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("", true),
                    (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)("div", {
                      class: $options.contentStyleClass,
                      style: $props.contentStyle
                    }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "default")
                    ], 6),
                    ($props.footer || _ctx.$slots.footer)
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)("div", _hoisted_3, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderSlot)(_ctx.$slots, "footer", {}, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_2__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)($props.footer), 1)
                          ])
                        ]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("", true)
                  ], 16, ["aria-labelledby", "aria-modal"]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("", true)
            ]),
            _: 3
          }, 8, ["onBeforeEnter", "onEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])
        ], 2))
      : (0,vue__WEBPACK_IMPORTED_MODULE_2__.createCommentVNode)("", true)
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-dialog-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    pointer-events: none;\n    background-color: transparent;\n    -webkit-transition-property: background-color;\n    transition-property: background-color;\n}\n.p-dialog-mask.p-component-overlay {\n    pointer-events: auto;\n}\n.p-dialog {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    pointer-events: auto;\n    max-height: 90%;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n.p-dialog-content {\n    overflow-y: auto;\n}\n.p-dialog-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.p-dialog-footer {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.p-dialog .p-dialog-header-icons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-dialog .p-dialog-header-icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Fluid */\n.p-fluid .p-dialog-footer .p-button {\n    width: auto;\n}\n\n/* Animation */\n/* Center */\n.p-dialog-enter-active {\n    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-dialog-leave-active {\n    -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);\n}\n.p-dialog-enter-from,\n.p-dialog-leave-to {\n    opacity: 0;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n}\n.p-dialog-mask.p-dialog-mask-leave {\n    background-color: transparent;\n}\n\n/* Top, Bottom, Left, Right, Top* and Bottom* */\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n    margin: .75rem;\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n    -webkit-transition: all .3s ease-out;\n    transition: all .3s ease-out;\n}\n.p-dialog-top .p-dialog-enter-from,\n.p-dialog-top .p-dialog-leave-to {\n    -webkit-transform: translate3d(0px, -100%, 0px);\n            transform: translate3d(0px, -100%, 0px);\n}\n.p-dialog-bottom .p-dialog-enter-from,\n.p-dialog-bottom .p-dialog-leave-to {\n    -webkit-transform: translate3d(0px, 100%, 0px);\n            transform: translate3d(0px, 100%, 0px);\n}\n.p-dialog-left .p-dialog-enter-from,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter-from,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter-from,\n.p-dialog-bottomleft .p-dialog-leave-to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n.p-dialog-right .p-dialog-enter-from,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter-from,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter-from,\n.p-dialog-bottomright .p-dialog-leave-to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n\n/* Maximize */\n.p-dialog-maximized {\n    -webkit-transition: none;\n    transition: none;\n    -webkit-transform: none;\n            transform: none;\n    width: 100vw !important;\n    max-height: 100%;\n    height: 100%;\n}\n.p-dialog-maximized .p-dialog-content {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n\n/* Position */\n.p-dialog-left {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.p-dialog-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.p-dialog-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-dialog-topleft {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-dialog-topright {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.p-dialog-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.p-dialog-bottomleft {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.p-dialog-bottomright {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.p-confirm-dialog .p-dialog-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n";
styleInject(css_248z);

script.render = render;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);


/***/ }),

/***/ "./node_modules/primevue/tooltip/tooltip.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primevue/tooltip/tooltip.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ "./node_modules/primevue/utils/utils.esm.js");


function bindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;
    if (modifiers.focus) {
        el.addEventListener('focus', onFocus);
        el.addEventListener('blur', onBlur);
    }
    else {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
        el.addEventListener('click', onClick);
    }
}

function unbindEvents(el) {
    const modifiers = el.$_ptooltipModifiers;
    if (modifiers.focus) {
        el.removeEventListener('focus', onFocus);
        el.removeEventListener('blur', onBlur);
    }
    else {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('click', onClick);
    }
}

function bindScrollListener(el) {
    if (!el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler = new primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ConnectedOverlayScrollHandler(el, function() {
            hide(el);
        });
    }

    el.$_ptooltipScrollHandler.bindScrollListener();
}

function unbindScrollListener(el) {
    if (el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler.unbindScrollListener();
    }
}

function onMouseEnter(event) {
    show(event.currentTarget);
}

function onMouseLeave(event) {
    hide(event.currentTarget);
}

function onFocus(event) {
    show(event.currentTarget);
}

function onBlur(event) {
    hide(event.currentTarget);
}

function onClick(event) {
    hide(event.currentTarget);
}

function show(el) {
    if (!el.$_ptooltipValue) {
        return;
    }

    let tooltipElement = create(el);
    align(el);
    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.fadeIn(tooltipElement, 250);

    window.addEventListener('resize', function onWindowResize() {
        hide(el);
        this.removeEventListener('resize', onWindowResize);
    });

    bindScrollListener(el);
    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.set('tooltip', tooltipElement, el.$_ptooltipZIndex);
}

function hide(el) {
    remove(el);
    unbindScrollListener(el);
    primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(el);
}

function getTooltipElement(el) {
    return document.getElementById(el.$_ptooltipId);
}

function create(el) {
    const id = (0,primevue_utils__WEBPACK_IMPORTED_MODULE_0__.UniqueComponentId)() + '_tooltip';
    el.$_ptooltipId = id;

    let container = document.createElement('div');
    container.id = id;

    let tooltipArrow = document.createElement('div');
    tooltipArrow.className = 'p-tooltip-arrow';
    container.appendChild(tooltipArrow);

    let tooltipText = document.createElement('div');
    tooltipText.className = 'p-tooltip-text';
    tooltipText.innerHTML = el.$_ptooltipValue;

    container.appendChild(tooltipText);
    document.body.appendChild(container);

    container.style.display = 'inline-block';

    return container;
}

function remove(el) {
    if (el) {
        let tooltipElement = getTooltipElement(el);
        if (tooltipElement && tooltipElement.parentElement) {
            document.body.removeChild(tooltipElement);
        }
        el.$_ptooltipId = null;
    }
}

function align(el) {
    const modifiers = el.$_ptooltipModifiers;

    if (modifiers.top) {
        alignTop(el);
        if (isOutOfBounds(el)) {
            alignBottom(el);
        }
    }
    else if (modifiers.left) {
        alignLeft(el);
        if (isOutOfBounds(el)) {
            alignRight(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);
                }
            }
        }
    }
    else if (modifiers.bottom) {
        alignBottom(el);
        if (isOutOfBounds(el)) {
            alignTop(el);
        }
    }
    else {
        alignRight(el);
        if (isOutOfBounds(el)) {
            alignLeft(el);

            if (isOutOfBounds(el)) {
                alignTop(el);

                if (isOutOfBounds(el)) {
                    alignBottom(el);
                }
            }
        }
    }
}

function getHostOffset(el) {
    let offset = el.getBoundingClientRect();
    let targetLeft = offset.left + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWindowScrollLeft();
    let targetTop = offset.top + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getWindowScrollTop();

    return {left: targetLeft, top: targetTop};
}

function alignRight(el) {
    preAlign(el, 'right');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(el);
    let top = hostOffset.top + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement)) / 2;
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignLeft(el) {
    preAlign(el, 'left');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement);
    let top = hostOffset.top + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement)) / 2;
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignTop(el) {
    preAlign(el, 'top');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement)) / 2;
    let top = hostOffset.top - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement);
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function alignBottom(el) {
    preAlign(el, 'bottom');
    let tooltipElement = getTooltipElement(el);
    let hostOffset = getHostOffset(el);
    let left = hostOffset.left + (primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(el) - primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement)) / 2;
    let top = hostOffset.top + primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(el);
    tooltipElement.style.left = left + 'px';
    tooltipElement.style.top = top + 'px';
}

function preAlign(el, position) {
    let tooltipElement = getTooltipElement(el);
    tooltipElement.style.left = -999 + 'px';
    tooltipElement.style.top = -999 + 'px';
    tooltipElement.className = 'p-tooltip p-component p-tooltip-' + position;
}

function isOutOfBounds(el) {
    let tooltipElement = getTooltipElement(el);
    let offset = tooltipElement.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterWidth(tooltipElement);
    let height = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getOuterHeight(tooltipElement);
    let viewport = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getViewport();

    return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
}

function getTarget(el) {
    return primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.hasClass(el, 'p-inputwrapper') ? primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.findSingle(el, 'input'): el;
}

const Tooltip = {
    beforeMount(el, options) {
        let target = getTarget(el);
        target.$_ptooltipModifiers = options.modifiers;
        target.$_ptooltipValue = options.value;
        target.$_ptooltipZIndex = options.instance.$primevue && options.instance.$primevue.config && options.instance.$primevue.config.zIndex.tooltip;
        bindEvents(target);
    },
    unmounted(el) {
        let target = getTarget(el);
        remove(target);
        unbindEvents(target);

        if (target.$_ptooltipScrollHandler) {
            target.$_ptooltipScrollHandler.destroy();
            target.$_ptooltipScrollHandler = null;
        }

        primevue_utils__WEBPACK_IMPORTED_MODULE_0__.ZIndexUtils.clear(el);
    },
    updated(el, options) {
        let target = getTarget(el);
        target.$_ptooltipModifiers = options.modifiers;
        target.$_ptooltipValue = options.value;
    },

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_style_index_0_id_9ae01876_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_style_index_0_id_9ae01876_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_style_index_0_id_9ae01876_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/voting/voting-mock-up.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/voting/voting-mock-up.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _voting_mock_up_vue_vue_type_template_id_9ae01876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true */ "./resources/js/components/voting/voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true");
/* harmony import */ var _voting_mock_up_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voting-mock-up.vue?vue&type=script&lang=js */ "./resources/js/components/voting/voting-mock-up.vue?vue&type=script&lang=js");
/* harmony import */ var _voting_mock_up_vue_vue_type_style_index_0_id_9ae01876_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss */ "./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss");




;
_voting_mock_up_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _voting_mock_up_vue_vue_type_template_id_9ae01876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_voting_mock_up_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-9ae01876"
/* hot reload */
if (false) {}

_voting_mock_up_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/voting/voting-mock-up.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_voting_mock_up_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/voting/voting-mock-up.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/voting/voting-mock-up.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./voting-mock-up.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/voting/voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/voting/voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_template_id_9ae01876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_template_id_9ae01876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=template&id=9ae01876&scoped=true");


/***/ }),

/***/ "./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_voting_mock_up_vue_vue_type_style_index_0_id_9ae01876_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/voting/voting-mock-up.vue?vue&type=style&index=0&id=9ae01876&scoped=true&lang=scss");


/***/ })

}]);