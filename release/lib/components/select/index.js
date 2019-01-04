'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _option = require('./option');

var _option2 = _interopRequireDefault(_option);

var _optionGroup = require('./optionGroup');

var _optionGroup2 = _interopRequireDefault(_optionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_select2.default.Option = _option2.default;
_select2.default.OptionGroup = _optionGroup2.default;

var _default = _select2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/select/index.js');
}();

;