'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locale = require('./locale');

Object.defineProperty(exports, 'i18n', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_locale).default;
  }
});

var _button = require('./button');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

var _layout = require('./layout');

Object.defineProperty(exports, 'Layout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_layout).default;
  }
});

var _icon = require('./icon');

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