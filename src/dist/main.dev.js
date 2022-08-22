"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("@/App"));

var _mitt = _interopRequireDefault(require("mitt"));

var _index = _interopRequireDefault(require("@/components/ui/index"));

var _store = _interopRequireDefault(require("@/store"));

var _index2 = _interopRequireDefault(require("@/router/index"));

var _vueMasonry = require("vue-masonry");

var _vueMasonryCss = _interopRequireDefault(require("vue-masonry-css"));

require("@/assets/styles/main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);

_index["default"].forEach(function (component) {
  app.component(component.name, component);
});

var emitter = (0, _mitt["default"])();
app.config.globalProperties.emitter = emitter;
app.use(_index2["default"]).use(_store["default"]).use(_vueMasonry.VueMasonryPlugin).use(_vueMasonryCss["default"]).mount('#app');