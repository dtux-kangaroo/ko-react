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

var Row = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        gutter: this.props.gutter
      };
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var style = {};

      if (this.props.gutter) {
        style.marginLeft = '-' + this.props.gutter / 2 + 'px';
        style.marginRight = style.marginLeft;
      }

      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(this.props.tag, {
        className: this.className('ko-row', this.props.justify !== 'start' && 'is-justify-' + this.props.justify, this.props.align !== 'top' && 'is-align-' + this.props.align, {
          'ko-row--flex': this.props.type === 'flex'
        }),
        style: this.style(this.getStyle())
      }, this.props.children);
    }
  }]);
  return Row;
}(_utils.Component);

var _default = Row;
exports.default = _default;


Row.childContextTypes = {
  gutter: _utils.PropTypes.oneOfType([_utils.PropTypes.number, _utils.PropTypes.string])
};

Row.propTypes = {
  gutter: _utils.PropTypes.oneOfType([_utils.PropTypes.number, _utils.PropTypes.string]),
  type: _utils.PropTypes.string,
  justify: _utils.PropTypes.string,
  align: _utils.PropTypes.string,
  tag: _utils.PropTypes.string
};

Row.defaultProps = {
  justify: 'start',
  align: 'top',
  tag: 'div'
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Row, 'Row', 'src/components/layout/row.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/layout/row.jsx');
}();

;