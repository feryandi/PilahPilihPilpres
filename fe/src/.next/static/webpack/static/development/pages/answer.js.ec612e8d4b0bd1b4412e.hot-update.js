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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/home/feryandi/Personal/Projects/SurveyPemilu/fe/src/components/Answer.js";




var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).call(this, props));
    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.props, {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "currentQuestion",
    value: function currentQuestion() {
      return this.state.questions[this.state.current_question];
    }
  }, {
    key: "hasPrevQuestion",
    value: function hasPrevQuestion() {
      var current_question = this.state.current_question;
      return current_question - 1 > 0;
    }
  }, {
    key: "prevQuestion",
    value: function prevQuestion() {
      var current_question = this.state.current_question;

      if (!this.state.questions.hasOwnProperty(current_question - 1)) {} else {
        this.setState({
          current_question: current_question - 1
        });
      }
    }
  }, {
    key: "hasNextQuestion",
    value: function hasNextQuestion() {
      var current_question = this.state.current_question;
      var questions = this.state.questions;
      return current_question + 1 <= _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(questions).length;
    }
  }, {
    key: "nextQuestion",
    value: function nextQuestion() {
      var current_question = this.state.current_question;

      if (!this.state.questions.hasOwnProperty(current_question + 1)) {} else {
        // Send the answer
        this.setState({
          current_question: current_question + 1
        });
      }
    }
  }, {
    key: "failure",
    value: function failure() {
      return 'Invalid input';
    }
  }, {
    key: "success",
    value: function success() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "badge badge-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, this.state.current_question))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, this.currentQuestion().question), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }))), this.currentQuestion().choice.map(function (choice, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: choice.id,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          class: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, choice.text), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, choice.reason))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, this.hasPrevQuestion() && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.prevQuestion();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-arrow-circle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, this.hasNextQuestion() && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.nextQuestion();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-arrow-circle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.success();
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, "propTypes", {
  q: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number // {
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
//# sourceMappingURL=answer.js.ec612e8d4b0bd1b4412e.hot-update.js.map