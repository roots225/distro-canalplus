"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_assets_js_x5-gmaps_Circle_js"],{

/***/ "./resources/js/assets/js/x5-gmaps/Circle.js":
/*!***************************************************!*\
  !*** ./resources/js/assets/js/x5-gmaps/Circle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x5-gmaps.es.js */ "./resources/js/assets/js/x5-gmaps/x5-gmaps.es.js");
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce.js */ "./resources/js/assets/js/x5-gmaps/debounce.js");
var e = Object.assign;



var n = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "gmapsCircle",
  props: {
    center: {
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
    radius: {
      type: [String, Number],
      "default": void 0
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
  emits: ["center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "radius_changed", "rightclick"],
  setup: function setup(t, _ref) {
    var n = _ref.emit;
    var c = null;

    var u = [],
        g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$getmap"),
        p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$gmapHandleError"),
        m = function m(e) {
      return p(e, "Circle");
    },
        v = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var r = e({}, t.options);
      return void 0 !== t.center && (r.center = t.center), void 0 !== t.clickable && (r.clickable = t.clickable), void 0 !== t.draggable && (r.draggable = t.draggable), void 0 !== t.editable && (r.editable = t.editable), void 0 !== t.fillColor && (r.fillColor = t.fillColor), void 0 !== t.fillOpacity && (r.fillOpacity = +t.fillOpacity), void 0 !== t.radius && (r.radius = +t.radius), void 0 !== t.strokeColor && (r.strokeColor = t.strokeColor), void 0 !== t.strokeOpacity && (r.strokeOpacity = +t.strokeOpacity), void 0 !== t.strokePosition && (r.strokePosition = +t.strokePosition), void 0 !== t.strokeWeight && (r.strokeWeight = +t.strokeWeight), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.zIndex && (r.zIndex = +t.zIndex), r;
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return t;
    }, function () {
      c && c.setOptions(v.value);
    }, {
      deep: !0
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (!v.value.center || !v.value.radius) return m(new Error("Center and Radius properties are required by every circle. Set these as either a position prop, or a position property of the options prop."));
      (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (r) {
        var o = g();
        c = new r.Circle(e({
          map: o
        }, v.value)), c ? function (e) {
          var r = google.maps.event;
          u.push(r.addListener(e, "center_changed", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function () {
            return n("center_changed", e.getCenter());
          }, +t.delay)), r.addListener(e, "radius_changed", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function () {
            return n("radius_changed", e.getRadius());
          }, +t.delay)), r.addListener(e, "drag", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function (e) {
            n("drag", e.latLng.toJSON(), +t.delay), console.log("circ - drag");
          })), r.addListener(e, "mousemove", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function (e) {
            return n("mousemove", e);
          }, +t.delay)), r.addListener(e, "click", function (e) {
            return n("click", e.latLng.toJSON());
          }), r.addListener(e, "dblclick", function (e) {
            return n("dblclick", e.latLng.toJSON());
          }), r.addListener(e, "dragend", function (e) {
            return n("dragend", e.latLng.toJSON());
          }), r.addListener(e, "dragstart", function (e) {
            return n("dragstart", e.latLng.toJSON());
          }), r.addListener(e, "mousedown", function (e) {
            return n("mousedown", e.latLng.toJSON());
          }), r.addListener(e, "mouseout", function (e) {
            return n("mouseout", e.latLng.toJSON());
          }), r.addListener(e, "mouseover", function (e) {
            return n("mouseover", e.latLng.toJSON());
          }), r.addListener(e, "mouseup", function (e) {
            return n("mouseup", e.latLng.toJSON());
          }), r.addListener(e, "rightclick", function (e) {
            return n("rightclick", e);
          }));
        }(c) : m(new Error("There was a problem creating the shape."));
      })["catch"](function (e) {
        return m(e);
      });
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
      u.forEach(function (e) {
        return e.remove();
      }), (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (e) {
        c && c.setMap(null), e.event.clearInstanceListeners(c);
      })["catch"](function (e) {
        return m(e);
      });
    }), function () {};
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (n);

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