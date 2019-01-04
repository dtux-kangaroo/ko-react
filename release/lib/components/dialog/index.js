'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialogBody = require('./dialogBody');

var _dialogBody2 = _interopRequireDefault(_dialogBody);

var _dialogFooter = require('./dialogFooter');

var _dialogFooter2 = _interopRequireDefault(_dialogFooter);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dialog2.default.Body = _dialogBody2.default;
_dialog2.default.Footer = _dialogFooter2.default;

var _default = _dialog2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/dialog/index.js');
}();

;