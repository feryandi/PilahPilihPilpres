webpackHotUpdate("static/development/pages/answer.js",{

/***/ "./components/Answer.js":
/*!******************************!*\
  !*** ./components/Answer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/home/feryandi/Personal/Projects/SurveyPemilu/fe/src/components/Answer.js";




var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));
    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
      current_question: 1,
      questions: {
        1: {
          id: 5633226290757632,
          choice: [{
            id: 1,
            reason: "text and <html/>",
            result: 1,
            sources: ["http://", "http://"],
            text: "Pantai"
          }, {
            id: 2,
            reason: "text and <html/>",
            result: 2,
            sources: ["http://", "http://"],
            text: "Gunung"
          }, {
            id: 3,
            reason: "text and <html/>",
            result: 0,
            sources: ["http://", "http://"],
            text: "Neraka"
          }],
          question: "Kemana Anda ingin pergi berlibur?"
        },
        2: {
          id: 5643172898144256,
          choice: [{
            id: 1,
            reason: "text and <html/>",
            result: 2,
            sources: ["http://", "http://"],
            text: "Ya"
          }, {
            id: 2,
            reason: "text and <html/>",
            result: 1,
            sources: ["http://", "http://"],
            text: "Tidak"
          }],
          question: "Apakah Anda setuju anggaran militer perlu dinaikkan?"
        }
      }
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "failure",
    value: function failure() {
      return 'Invalid input';
    }
  }, {
    key: "success",
    value: function success() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Here goes the question number ", this.state.q, ", I guess?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "User's Answer"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Unselected Answer"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Unselected Answer"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Result"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Descriptive reasoning..."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "answer",
        as: "/answer/" + this.state.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Next")));
    }
  }, {
    key: "render",
    value: function render() {
      return this.success();
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, "propTypes", {
  q: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number // {
  //   "questions": {
  //       "5633226290757632": {
  //           "choice": [
  //               {
  //                   "id": 1,
  //                   "reason": "text and <html/>",
  //                   "result": 1,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Pantai"
  //               },
  //               {
  //                   "id": 2,
  //                   "reason": "text and <html/>",
  //                   "result": 2,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Gunung"
  //               },
  //               {
  //                   "id": 3,
  //                   "reason": "text and <html/>",
  //                   "result": 0,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Neraka"
  //               }
  //           ],
  //           "question": "Kemana Anda ingin pergi berlibur?"
  //       },
  //       "5643172898144256": {
  //           "choice": [
  //               {
  //                   "id": 1,
  //                   "reason": "text and <html/>",
  //                   "result": 2,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Ya"
  //               },
  //               {
  //                   "id": 2,
  //                   "reason": "text and <html/>",
  //                   "result": 1,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Tidak"
  //               }
  //           ],
  //           "question": "Apakah Anda setuju anggaran militer perlu dinaikkan?"
  //       }
  //   },
  //   "stance": {
  //       "2": 1
  //   },
  //   "status": "ok"
  // }

});



/***/ })

})
//# sourceMappingURL=answer.js.6d65ff23a9e962d7a43f.hot-update.js.map