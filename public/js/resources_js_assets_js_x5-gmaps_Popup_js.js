"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_assets_js_x5-gmaps_Popup_js"],{

/***/ "./resources/js/assets/js/x5-gmaps/Popup.js":
/*!**************************************************!*\
  !*** ./resources/js/assets/js/x5-gmaps/Popup.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var t = Object.assign;


var g = /*#__PURE__*/function (_google$maps$OverlayV) {
  _inherits(g, _google$maps$OverlayV);

  var _super = _createSuper(g);

  function g(e, o) {
    var _this;

    _classCallCheck(this, g);

    _this = _super.call(this), _this.onAdd = function () {
      return _this.getPanes().floatPane.appendChild(_this.content);
    }, _this.onRemove = function () {
      return _this.content.parentElement ? _this.content.parentElement.removeChild(_this.content) : null;
    }, _this.draw = function () {
      var t = _this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(_this.position));

      _this.content.style.left = t.x + "px", _this.content.style.top = t.y + "px";
    }, _this.setPosition = function (e) {
      _this.position = t({}, e), _this.draw();
    }, _this.position = e, _this.content = o, window.google.maps.OverlayView.preventMapHitsAndGesturesFrom(o);
    return _this;
  }

  return g;
}(google.maps.OverlayView);

var u = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "gmapsPopup",
  props: {
    background: {
      type: String,
      "default": "#EEEEEE"
    },
    width: {
      type: String,
      "default": "200px"
    },
    height: {
      type: String,
      "default": "60px"
    },
    position: {
      type: Object,
      required: !0
    }
  },
  emits: ["click", "dblclick"],
  setup: function setup(t, _ref) {
    var e = _ref.emit;
    var c = null,
        p = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)((0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$gmap"));

    var r = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("$gmapHandleError"),
        d = function d(t) {
      return r(t, "Popup");
    },
        h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();

    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return t.position;
    }, function (e) {
      e && c && c.setPosition(t.position);
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      console.log("root.value", h.value);

      try {
        c = new g(t.position, h.value), c.setMap(p);
      } catch (e) {
        d(e);
      }
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
      try {
        c && c.setMap(null);
      } catch (t) {
        d(t);
      }
    }), {
      background: t.background,
      width: t.width,
      height: t.height,
      root: h,
      map: p,
      click: function click(t) {
        return e("click", t.latLng.toJSON());
      },
      dblclick: function dblclick(t) {
        return e("dblclick", t.latLng.toJSON());
      }
    };
  }
});

u.render = function (t, e, o, i, n, s) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    ref: "root",
    "class": "gmaps-popup-container",
    onClick: e[1] || (e[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return t.click && t.click.apply(t, arguments);
    }, ["prevent"])),
    onDblclick: e[2] || (e[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return t.dblclick && t.dblclick.apply(t, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "gmaps-popup-bubble-anchor",
    style: "color: ".concat(t.background, ";")
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": "gmaps-popup-bubble",
    style: "background: ".concat(t.background, "; maxWidth:").concat(t.width, "; maxHeight:").concat(t.height, ";")
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(t.$slots, "default")], 4)], 4)], 544);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (u);

/***/ })

}]);