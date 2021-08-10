"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_assets_js_x5-gmaps_Rectangle_js"],{

/***/ "./resources/js/assets/js/x5-gmaps/Rectangle.js":
/*!******************************************************!*\
  !*** ./resources/js/assets/js/x5-gmaps/Rectangle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x5-gmaps.es.js */ "./resources/js/assets/js/x5-gmaps/x5-gmaps.es.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce.js */ "./resources/js/assets/js/x5-gmaps/debounce.js");
var e = Object.assign;



var s = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "gmapsRectangle",
  props: {
    bounds: {
      type: Object,
      "default": void 0
    },
    clickable: {
      type: Boolean,
      "default": !0
    },
    draggable: {
      type: Boolean,
      "default": !1
    },
    editable: {
      type: Boolean,
      "default": !1
    },
    fillColor: {
      type: String,
      "default": "black"
    },
    fillOpacity: {
      type: [String, Number],
      "default": .3
    },
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    strokeColor: {
      type: String,
      "default": "black"
    },
    strokeOpacity: {
      type: [String, Number],
      "default": 1
    },
    strokePosition: {
      type: [String, Number],
      "default": 0
    },
    strokeWeight: {
      type: [String, Number],
      "default": 3
    },
    visible: {
      type: Boolean,
      "default": !0
    },
    zIndex: {
      type: [String, Number],
      "default": 0
    },
    delay: {
      type: [Number, String],
      "default": 15
    }
  },
  emits: ["bounds_changed", "click", "contextmenu", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"],
  setup: function setup(t, _ref) {
    var s = _ref.emit;
    var u = null;

    var c = [],
        g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$getmap"),
        p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$gmapHandleError"),
        m = function m(e) {
      return p(e, "Rectangle");
    },
        b = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var o = e({}, t.options);
      return "bounds" in t && (o.bounds = t.bounds), void 0 !== t.clickable && (o.clickable = t.clickable), void 0 !== t.draggable && (o.draggable = t.draggable), void 0 !== t.editable && (o.editable = t.editable), void 0 !== t.fillColor && (o.fillColor = t.fillColor), void 0 !== t.fillOpacity && (o.fillOpacity = +t.fillOpacity), void 0 !== t.strokeColor && (o.strokeColor = t.strokeColor), void 0 !== t.strokeOpacity && (o.strokeOpacity = +t.strokeOpacity), void 0 !== t.strokePosition && (o.strokePosition = +t.strokePosition), void 0 !== t.strokeWeight && (o.strokeWeight = +t.strokeWeight), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.zIndex && (o.zIndex = +t.zIndex), o;
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return t;
    }, function () {
      u && u.setOptions(b.value);
    }, {
      deep: !0
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (!b.value.bounds) return m(new Error("A bounds property is required by every rectangle. Set this as either a position prop, or a position property of the options prop."));
      (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (o) {
        var a = g();
        u = new o.Rectangle(e({
          map: a
        }, b.value)), u ? function (e) {
          var o = google.maps.event;
          c.push(o.addListener(e, "bounds_changed", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function () {
            return s("bounds_changed", e.getBounds());
          }, +t.delay)), o.addListener(e, "drag", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function (e) {
            return s("drag", e.latLng.toJSON(), +t.delay);
          })), o.addListener(e, "mousemove", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function (e) {
            return s("mousemove", e);
          }, +t.delay)), o.addListener(e, "click", function (e) {
            return s("click", e.latLng.toJSON());
          }), o.addListener(e, "contextmenu", function (e) {
            return s("contextmenu", e.latLng.toJSON());
          }), o.addListener(e, "dblclick", function (e) {
            return s("dblclick", e.latLng.toJSON());
          }), o.addListener(e, "dragend", function (e) {
            return s("dragend", e.latLng.toJSON());
          }), o.addListener(e, "dragstart", function (e) {
            return s("dragstart", e.latLng.toJSON());
          }), o.addListener(e, "mousedown", function (e) {
            return s("mousedown", e.latLng.toJSON());
          }), o.addListener(e, "mouseout", function (e) {
            return s("mouseout", e.latLng.toJSON());
          }), o.addListener(e, "mouseover", function (e) {
            return s("mouseover", e.latLng.toJSON());
          }), o.addListener(e, "mouseup", function (e) {
            return s("mouseup", e.latLng.toJSON());
          }), o.addListener(e, "rightclick", function (e) {
            return s("rightclick", e.latLng.toJSON());
          }));
        }(u) : m(new Error("There was a problem creating the shape."));
      })["catch"](function (e) {
        return m(e);
      });
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
      c.forEach(function (e) {
        return e.remove();
      }), (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (e) {
        u && u.setMap(null), e.event.clearInstanceListeners(u);
      })["catch"](function (e) {
        return m(e);
      });
    }), function () {};
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (s);

/***/ }),

/***/ "./resources/js/assets/js/x5-gmaps/debounce.js":
/*!*****************************************************!*\
  !*** ./resources/js/assets/js/x5-gmaps/debounce.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ t)
/* harmony export */ });
var t = function t(_t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  var o;
  return function () {
    for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
      n[_key] = arguments[_key];
    }

    o && clearTimeout(o), o = setTimeout(function () {
      return _t.apply(void 0, n);
    }, e);
  };
};



/***/ })

}]);