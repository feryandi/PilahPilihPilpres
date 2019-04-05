"use strict";
/* global window */

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _this = void 0;

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var router_1 = __importDefault(require("next/router"));

var on_demand_entries_utils_1 = require("./on-demand-entries-utils");

exports.default =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref) {
    var assetPrefix;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            assetPrefix = _ref.assetPrefix;
            router_1.default.ready(function () {
              router_1.default.events.on('routeChangeStart', function () {
                return on_demand_entries_utils_1.closePing();
              });
              router_1.default.events.on('routeChangeComplete', on_demand_entries_utils_1.setupPing.bind(_this, assetPrefix, function () {
                return router_1.default.pathname;
              }));
            });
            on_demand_entries_utils_1.setupPing(assetPrefix, function () {
              return router_1.default.pathname;
            }, on_demand_entries_utils_1.currentPage);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();