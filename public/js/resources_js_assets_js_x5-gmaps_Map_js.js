"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_assets_js_x5-gmaps_Map_js"],{

/***/ "./resources/js/assets/js/x5-gmaps/Map.js":
/*!************************************************!*\
  !*** ./resources/js/assets/js/x5-gmaps/Map.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ "./resources/js/assets/js/x5-gmaps/debounce.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x5-gmaps.es.js */ "./resources/js/assets/js/x5-gmaps/x5-gmaps.es.js");
var e = Object.assign;



var v = {
  center: {
    lat: -27.5,
    lng: 153
  },
  zoom: 12
};

var _ = (0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  name: "GmapsMap",
  props: {
    delay: {
      type: [Number, String],
      "default": 15
    },
    timeout: {
      type: [Number, String],
      "default": 5e3
    },
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  emits: ["bounds_changed", "center_changed", "click", "contextmenu", "dblclick", "drag", "dragend", "dragstart", "heading_changed", "idle", "maptypeid_changed", "mousemove", "mouseout", "mouseover", "projection_changed", "rightclick", "tilesloaded", "tilt_changed", "zoom_changed", "mounted"],
  setup: function setup(t, _ref) {
    var l = _ref.emit;
    var i = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null),
        g = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(!0),
        c = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);

    var m = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(),
        p = [],
        u = function u(e, a) {
      return c.value = "[".concat(a, "]: ").concat(e.message);
    };

    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.provide)("$gmap", i), (0,vue__WEBPACK_IMPORTED_MODULE_1__.provide)("$getmap", function () {
      return i.value;
    }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.provide)("$gmapHandleError", u), (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(function () {
      return t.options;
    }, function (e) {
      i.value && i.value.setOptions(e);
    }, {
      deep: !0
    }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_2__.getMaps)().then(function (d) {
        i.value = new d.Map(m.value, e(e({}, v), t.options)), i.value ? function (e) {
          var d = google.maps.event;
          p.push(d.addListener(e, "bounds_changed", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.d)(function () {
            return l("bounds_changed", e.getBounds());
          }, +t.delay)), d.addListener(e, "center_changed", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.d)(function () {
            return l("center_changed", e.getCenter());
          }, +t.delay)), d.addListener(e, "drag", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.d)(function (e) {
            return l("drag", e);
          }, +t.delay)), d.addListener(e, "mousemove", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.d)(function (e) {
            return l("mousemove", e);
          }, +t.delay)), d.addListener(e, "click", function (e) {
            return l("click", e.latLng.toJSON());
          }), d.addListener(e, "contextmenu", function (e) {
            return l("contextmenu", e.latLng.toJSON());
          }), d.addListener(e, "dblclick", function (e) {
            return l("dblclick", e.latLng.toJSON());
          }), d.addListener(e, "dragend", function (e) {
            return l("dragend", e);
          }), d.addListener(e, "dragstart", function (e) {
            return l("dragstart", e);
          }), d.addListener(e, "heading_changed", function (a) {
            return l("heading_changed", e.getHeading());
          }), d.addListener(e, "idle", function (e) {
            return l("idle", e);
          }), d.addListener(e, "maptypeid_changed", function (a) {
            return l("maptypeid_changed", e.getMapTypeId());
          }), d.addListener(e, "mouseout", function (e) {
            return l("mouseout", e.latLng.toJSON());
          }), d.addListener(e, "mouseover", function (e) {
            return l("mouseover", e.latLng.toJSON());
          }), d.addListener(e, "projection_changed", function (a) {
            return l("projection_changed", e.getProjection());
          }), d.addListener(e, "rightclick", function (e) {
            return l("rightclick", e.latLng.toJSON());
          }), d.addListener(e, "tilesloaded", function (e) {
            return l("tilesloaded", e);
          }), d.addListener(e, "tilt_changed", function (a) {
            return l("tilt_changed", e.getTilt());
          }), d.addListener(e, "zoom_changed", function (a) {
            return l("zoom_changed", e.getZoom());
          }));
        }(i.value) : u(new Error("Map could not be loaded"), "Map"), g.value = !1, l("mounted", i.value);
      });
    }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.onBeforeUnmount)(function () {
      p.forEach(function (e) {
        return e.remove();
      }), i && window.google.maps.event.clearInstanceListeners(i);
    }), {
      loading: g,
      error: c,
      map: i,
      root: m
    };
  }
});

var y = {
  "class": "gmaps-wrapper"
},
    b = {
  "class": "gmaps-error"
},
    k = (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", {
  "class": "gmaps-spinner"
}, null, -1),
    f = {
  ref: "root",
  "class": "gmaps-map"
};

_.render = function (e, a, t, d, n, o) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)("div", y, [e.error ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderSlot)(e.$slots, "error", {
    key: 0,
    error: e.error
  }, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("span", b, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(e.error), 1)];
  }) : e.loading ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderSlot)(e.$slots, "loading", {
    key: 1
  }, function () {
    return [k];
  }) : e.map ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderSlot)(e.$slots, "default", {
    key: 2,
    map: e.map
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)("", !0), (0,vue__WEBPACK_IMPORTED_MODULE_1__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)("div", f, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_1__.vShow, !e.error && !e.loading && !!e.map]])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_);

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