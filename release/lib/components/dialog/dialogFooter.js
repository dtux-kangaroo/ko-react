'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogFooter = function (_Component) {
  (0, _inherits3.default)(DialogFooter, _Component);

  function DialogFooter() {
    (0, _classCallCheck3.default)(this, DialogFooter);
    return (0, _possibleConstructorReturn3.default)(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(DialogFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.style(), className: this.className('ko-dialog__footer') },
        this.props.children
      );
    }
  }]);
  return DialogFooter;
}(_utils.Component);

var _default = DialogFooter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DialogFooter, 'DialogFooter', 'src/components/dialog/dialogFooter.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/dialog/dialogFooter.jsx');
}();

;