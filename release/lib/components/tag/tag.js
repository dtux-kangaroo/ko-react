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

var Tag = function (_Component) {
  (0, _inherits3.default)(Tag, _Component);

  function Tag(props) {
    (0, _classCallCheck3.default)(this, Tag);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.state = {
      visible: true
    };
    return _this;
  }

  (0, _createClass3.default)(Tag, [{
    key: 'handleClose',
    value: function handleClose() {
      var _this2 = this;

      this.setState({
        visible: false
      }, function () {
        if (_this2.props.onClose) {
          _this2.props.onClose();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          hit = _props.hit,
          closable = _props.closable,
          closeTransition = _props.closeTransition,
          color = _props.color;


      return _react2.default.createElement(
        _utils.Transition,
        { name: closeTransition ? '' : 'ko-zoom-in-center' },
        _react2.default.createElement(
          _utils.View,
          { key: this.state.visible, show: this.state.visible },
          _react2.default.createElement(
            'span',
            {
              style: this.style({
                backgroundColor: color
              }),
              className: this.className('ko-tag', type && 'ko-tag--' + type, {
                'is-hit': hit
              })
            },
            this.props.children,
            closable && _react2.default.createElement('i', { className: 'ko-tag__close ko-icon-close', onClick: this.handleClose.bind(this) })
          )
        )
      );
    }
  }]);
  return Tag;
}(_utils.Component);

var _default = Tag;
exports.default = _default;


Tag.propTypes = {
  closable: _utils.PropTypes.bool,
  type: _utils.PropTypes.string,
  hit: _utils.PropTypes.bool,
  color: _utils.PropTypes.string,
  closeTransition: _utils.PropTypes.bool,
  onClose: _utils.PropTypes.func
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tag, 'Tag', 'src/components/tag/tag.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/tag/tag.jsx');
}();

;