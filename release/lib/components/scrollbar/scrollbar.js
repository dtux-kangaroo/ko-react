'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbar = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('../../utils');

var _resizeEvent = require('../../utils/tool/resizeEvent');

var _scrollbarWidth = require('./scrollbarWidth');

var _bar = require('./bar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Scrollbar = exports.Scrollbar = function (_Component) {
  (0, _inherits3.default)(Scrollbar, _Component);

  function Scrollbar(props) {
    (0, _classCallCheck3.default)(this, Scrollbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Scrollbar.__proto__ || Object.getPrototypeOf(Scrollbar)).call(this, props));

    _this.state = {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };

    _this.update = _this._update.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Scrollbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.native) return;
      var rafId = requestAnimationFrame(this.update);
      this.cleanRAF = function () {
        cancelAnimationFrame(rafId);
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      this.resizeDom = _reactDom2.default.findDOMNode(this.refs.resize);
      if (!this.props.noresize) {
        (0, _resizeEvent.addResizeListener)(this.resizeDom, this.update);
        this.cleanResize = function () {
          (0, _resizeEvent.removeResizeListener)(_this2.resizeDom, _this2.update);
        };
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cleanRAF();
      this.cleanResize && this.cleanResize();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var wrap = this.wrap;
      this.setState({
        moveY: wrap.scrollTop * 100 / wrap.clientHeight,
        moveX: wrap.scrollLeft * 100 / wrap.clientWidth
      });
    }
  }, {
    key: '_update',
    value: function _update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      var sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      var sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';

      this.setState({ sizeHeight: sizeHeight, sizeWidth: sizeWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      /* eslint-disable */
      var _props = this.props,
          native = _props.native,
          viewStyle = _props.viewStyle,
          wrapStyle = _props.wrapStyle,
          viewClass = _props.viewClass,
          children = _props.children,
          viewComponent = _props.viewComponent,
          wrapClass = _props.wrapClass,
          noresize = _props.noresize,
          className = _props.className,
          others = (0, _objectWithoutProperties3.default)(_props, ['native', 'viewStyle', 'wrapStyle', 'viewClass', 'children', 'viewComponent', 'wrapClass', 'noresize', 'className']);
      var _state = this.state,
          moveX = _state.moveX,
          moveY = _state.moveY,
          sizeWidth = _state.sizeWidth,
          sizeHeight = _state.sizeHeight;
      /* eslint-enable */

      var style = wrapStyle;
      var gutter = (0, _scrollbarWidth.getScrollBarWidth)();
      if (gutter) {
        var gutterWith = '-' + gutter + 'px';
        if (Array.isArray(wrapStyle)) {
          style = Object.assign.apply(null, [].concat((0, _toConsumableArray3.default)(wrapStyle), [{ marginRight: gutterWith, marginBottom: gutterWith }]));
        } else {
          style = Object.assign({}, wrapStyle, { marginRight: gutterWith, marginBottom: gutterWith });
        }
      }

      var view = _react2.default.createElement(viewComponent, {
        className: this.classNames('ko-scrollbar__view', viewClass),
        style: viewStyle,
        ref: 'resize'
      }, children);

      var nodes = void 0;
      if (!native) {
        var wrap = _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, others, {
            ref: 'wrap',
            key: 0,
            style: style,
            onScroll: this.handleScroll.bind(this),
            className: this.classNames(wrapClass, 'ko-scrollbar__wrap', gutter ? '' : 'ko-scrollbar__wrap--hidden-default')
          }),
          view
        );
        nodes = [wrap, _react2.default.createElement(_bar.Bar, { key: 1, move: moveX, size: sizeWidth, getParentWrap: function getParentWrap() {
            return _this3.wrap;
          } }), _react2.default.createElement(_bar.Bar, { key: 2, move: moveY, size: sizeHeight, getParentWrap: function getParentWrap() {
            return _this3.wrap;
          }, vertical: true })];
      } else {
        nodes = [_react2.default.createElement(
          'div',
          (0, _extends3.default)({}, others, {
            key: 0,
            ref: 'wrap',
            className: this.classNames(wrapClass, 'ko-scrollbar__wrap'),
            style: style }),
          view
        )];
      }

      return _react2.default.createElement('div', { className: this.classNames('ko-scrollbar', className) }, nodes);
    }
  }, {
    key: 'wrap',
    get: function get() {
      return this.refs.wrap;
    }
  }]);
  return Scrollbar;
}(_utils.Component);

Scrollbar.propTypes = {
  native: _utils.PropTypes.bool,
  wrapStyle: _utils.PropTypes.object,
  wrapClass: _utils.PropTypes.oneOfType([_utils.PropTypes.string, _utils.PropTypes.object]),
  viewClass: _utils.PropTypes.oneOfType([_utils.PropTypes.string, _utils.PropTypes.object]),
  viewStyle: _utils.PropTypes.object,
  className: _utils.PropTypes.string,
  viewComponent: _utils.PropTypes.oneOfType([_utils.PropTypes.string, _utils.PropTypes.element]),
  noresize: _utils.PropTypes.bool
};

Scrollbar.defaultProps = {
  viewComponent: 'div'
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Scrollbar, 'Scrollbar', 'src/components/scrollbar/scrollbar.jsx');
}();

;