"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_assets_js_x5-gmaps_Marker_js"],{

/***/ "./resources/js/assets/js/x5-gmaps/Marker.js":
/*!***************************************************!*\
  !*** ./resources/js/assets/js/x5-gmaps/Marker.js ***!
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



var c = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "GmapsMarker",
  props: {
    animation: {
      type: Number,
      "default": void 0
    },
    clickable: {
      type: Boolean,
      "default": void 0
    },
    draggable: {
      type: Boolean,
      "default": void 0
    },
    icon: {
      type: [String, Object],
      "default": void 0
    },
    label: {
      type: [String, Object],
      "default": void 0
    },
    opacity: {
      type: [String, Number],
      "default": void 0
    },
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    position: {
      type: Object,
      "default": void 0
    },
    title: {
      type: String,
      "default": void 0
    },
    visible: {
      type: Boolean,
      "default": void 0
    },
    zIndex: {
      type: [String, Number],
      "default": void 0
    },
    delay: {
      type: [Number, String],
      "default": 15
    }
  },
  emits: ["animation_changed", "click", "clickable_changed", "contextmenu", "cursor_changed", "dblclick", "drag", "dragend", "draggable_changed", "dragstart", "flat_changed", "icon_changed", "mousedown", "mouseout", "mouseover", "mouseup", "position_changed", "rightclick", "shape_changed", "title_changed", "visible_changed", "zindex_changed"],
  setup: function setup(t, _ref) {
    var c = _ref.emit;
    var g = null;

    var s = [],
        p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$getmap"),
        u = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$gmapHandleError"),
        h = function h(e) {
      return u(e, "Marker");
    },
        m = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var a = e({}, t.options);
      return void 0 !== t.animation && (a.animation = t.animation), void 0 !== t.clickable && (a.clickable = t.clickable), void 0 !== t.draggable && (a.draggable = t.draggable), void 0 !== t.icon && (a.icon = t.icon), void 0 !== t.label && (a.label = t.label), void 0 !== t.opacity && (a.opacity = +t.opacity), void 0 !== t.position && (a.position = t.position), void 0 !== t.title && (a.title = t.title), void 0 !== t.visible && (a.visible = t.visible), void 0 !== t.zIndex && (a.zIndex = +t.zIndex), a;
    });

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return t;
    }, function () {
      g && g.setOptions(m.value);
    }, {
      deep: !0
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      if (!m.value.position) return h(new Error("A position is required by every marker. Set this as either a position prop, or a position property of the options prop."));
      (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (a) {
        var i = p();
        g = new a.Marker(e({
          map: i
        }, m.value)), g ? function (e) {
          var a = google.maps.event;
          s.push(a.addListener(e, "position_changed", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function () {
            var t;
            return c("position_changed", null == (t = e.getPosition()) ? void 0 : t.toJSON());
          }, +t.delay)), a.addListener(e, "drag", (0,_debounce_js__WEBPACK_IMPORTED_MODULE_2__.d)(function (e) {
            return c("drag", e.latLng.toJSON(), +t.delay);
          })), a.addListener(e, "animation_changed", function () {
            return c("animation_changed", e.getAnimation());
          }), a.addListener(e, "click", function (e) {
            return c("click", e.latLng.toJSON());
          }), a.addListener(e, "clickable_changed", function () {
            return c("clickable_changed", e.getClickable());
          }), a.addListener(e, "contextmenu", function (e) {
            return c("contextmenu", e.latLng.toJSON());
          }), a.addListener(e, "cursor_changed", function () {
            return c("cursor_changed", e.getCursor());
          }), a.addListener(e, "dblclick", function (e) {
            return c("dblclick", e.latLng.toJSON());
          }), a.addListener(e, "dragend", function (e) {
            return c("dragend", e.latLng.toJSON());
          }), a.addListener(e, "draggable_changed", function () {
            return c("draggable_changed", e.getDraggable());
          }), a.addListener(e, "dragstart", function (e) {
            return c("dragstart", e.latLng.toJSON());
          }), a.addListener(e, "flat_changed", function (e) {
            return c("flat_changed", e);
          }), a.addListener(e, "icon_changed", function () {
            return c("icon_changed", e.getIcon());
          }), a.addListener(e, "mousedown", function (e) {
            return c("mousedown", e.latLng.toJSON());
          }), a.addListener(e, "mouseout", function (e) {
            return c("mouseout", e.latLng.toJSON());
          }), a.addListener(e, "mouseover", function (e) {
            return c("mouseover", e.latLng.toJSON());
          }), a.addListener(e, "mouseup", function (e) {
            return c("mouseup", e.latLng.toJSON());
          }), a.addListener(e, "rightclick", function (e) {
            return c("rightclick", e.latLng.toJSON());
          }), a.addListener(e, "shape_changed", function () {
            return c("shape_changed", e.getShape());
          }), a.addListener(e, "title_changed", function () {
            return c("title_changed", e.getTitle());
          }), a.addListener(e, "visible_changed", function () {
            return c("visible_changed", e.getVisible());
          }), a.addListener(e, "zindex_changed", function () {
            return c("zindex_changed", e.getZIndex());
          }));
        }(g) : h(new Error("There was a problem creating the marker."));
      })["catch"](function (e) {
        return h(e);
      });
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
      s.forEach(function (e) {
        return e.remove();
      }), (0,_x5_gmaps_es_js__WEBPACK_IMPORTED_MODULE_1__.getMaps)().then(function (e) {
        g && g.setMap(null), e.event.clearInstanceListeners(g);
      })["catch"](function (e) {
        return h(e);
      });
    }), function () {};
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);

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