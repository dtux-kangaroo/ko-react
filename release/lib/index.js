'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locales = require('./locales');

Object.defineProperty(exports, 'i18n', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_locales).default;
  }
});

var _button = require('./components/button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

var _layout = require('./components/layout');

Object.defineProperty(exports, 'Layout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_layout).default;
  }
});

var _icon = require('./components/icon');

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;