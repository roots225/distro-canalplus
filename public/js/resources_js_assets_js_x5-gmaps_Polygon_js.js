"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_assets_js_x5-gmaps_Polygon_js"],{

/***/ "./resources/js/assets/js/x5-gmaps/Polygon.js":
/*!****************************************************!*\
  !*** ./resources/js/assets/js/x5-gmaps/Polygon.js ***!
  \****************************************************/
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
  name: "gmapsPolygon",
  props: {
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
    geodesic: {
      type: Boolean,
      "default": !1
    },
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    paths: {
      type: Array,
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
  emits: ["click", "contextmenu", "dblclick", "drag", "dragend", "dragstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick", "path_changed"],
  setup: function setup(t, _ref) {
    var n = _ref.emit;
    var p = null;

    var g = [],
        c = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$getmap"),
        u = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$gmapHandleError"),
        m = function m(e) {
      return u(e, "Polygon");
    },
        y = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var o = e({}, t.options);
      return void 0 !== t.clickable && (o.clickable = t.clickable), void 0 !== t.draggable && (o.draggable = t.draggable), void 0 !== t.editable && (o.editable = t.editable), void 0 !== t.fillColor && (o.fillColor = t.fillColor), void 0 !== t.fillOpacity && (o.fillOpacity = +t.fillOpacity), void 0 !== t.geodesic && (o.geodesic = t.geodesic), void 0 !== t.paths && (o.paths = t.paths), void 0 !== t.strokeColor && (o.strokeColor = t.strokeColor), void 0 !== t.strokeOpacity && (o.strokeOpacity = +t.strokeOpacity), void 0 !== t.strokePosition && (o.strokePosition = +t.strokePosition), void 0 !== t.strokeWeight && (o.strokeWeight = +t.strokeWeight), void 0 !== t.visible && (o.visible = t.visible), void 0 !== t.zIndex && (o.zIndex = +t.zIndex), o;
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return t;
    }, function () {
      p && p.setOptions(y.value);
    }, {
      deep: !0
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (!y.value.paths) return m(new Error("A paths property is required by every polyline. Set this as either a position prop, or a position property of the options prop."));
      (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (o) {
        var a = c();
        console.log("polygon map", a), p = new o.Polygon(e({
          map: a
        }, y.value)), p ? function (e) {
          var o = google.maps.event,
              a = function a() {
            return n("path_changed", e.getPaths().getArray().map(function (e) {
              return e.getArray().map(function (e) {
                return e.toJSON();
              });
            }));
          };

          g.push(o.addListener(e, "drag", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function (e) {
            return n("drag", e.latLng.toJSON(), +t.delay);
          })), o.addListener(e, "mousemove", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function (e) {
            return n("mousemove", e);
          }, +t.delay)), o.addListener(e, "click", function (e) {
            return n("click", e.latLng.toJSON());
          }), o.addListener(e, "contextmenu", function (e) {
            return n("contextmenu", e.latLng.toJSON());
          }), o.addListener(e, "dblclick", function (e) {
            return n("dblclick", e.latLng.toJSON());
          }), o.addListener(e, "dragend", function (e) {
            return n("dragend", e.latLng.toJSON());
          }), o.addListener(e, "dragstart", function (e) {
            return n("dragstart", e.latLng.toJSON());
          }), o.addListener(e, "mousedown", function (e) {
            return n("mousedown", e.latLng.toJSON());
          }), o.addListener(e, "mousemove", function (e) {
            return (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function () {
              return n("mousemove", e.latLng.toJSON());
            }, 100);
          }), o.addListener(e, "mouseout", function (e) {
            return n("mouseout", e.latLng.toJSON());
          }), o.addListener(e, "mouseover", function (e) {
            return n("mouseover", e.latLng.toJSON());
          }), o.addListener(e, "mouseup", function (e) {
            n("mouseup", e.latLng.toJSON()), a();
          }), o.addListener(e, "rightclick", function (e) {
            return n("rightclick", e.latLng.toJSON());
          }), e.getPath().addListener("remove_at", function () {
            return a();
          }), e.getPath().addListener("insert_at", function () {
            return a();
          }), e.getPath().addListener("set_at", function () {
            return a();
          }));
        }(p) : m(new Error("There was a problem creating the shape."));
      })["catch"](function (e) {
        return m(e);
      });
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
      g.forEach(function (e) {
        return e.remove();
      }), (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (e) {
        p && p.setMap(null), e.event.clearInstanceListeners(p);
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