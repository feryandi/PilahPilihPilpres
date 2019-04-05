"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* globals __webpack_hash__ */

var event_source_polyfill_1 = __importDefault(require("./event-source-polyfill"));

var eventsource_1 = require("./dev-error-overlay/eventsource");

var on_demand_entries_utils_1 = require("./on-demand-entries-utils");

if (!window.EventSource) {
  window.EventSource = event_source_polyfill_1.default;
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
eventsource_1.getEventSourceWrapper({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }
      /* eslint-disable-next-line camelcase */


      if (message.hash !== __webpack_hash__) {
        document.location.reload(true);
      }
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
on_demand_entries_utils_1.setupPing(assetPrefix, function () {
  return page;
});