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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

var _utils = require('../../utils');

var _scrollbar = require('../scrollbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Suggestions = function (_Component) {
  (0, _inherits3.default)(Suggestions, _Component);

  function Suggestions(props) {
    (0, _classCallCheck3.default)(this, Suggestions);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).call(this, props));

    _this.state = {
      showPopper: false,
      dropdownWidth: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Suggestions, [{
    key: 'onVisibleChange',
    value: function onVisibleChange(visible, inputWidth) {
      this.setState({
        dropdownWidth: inputWidth,
        showPopper: visible
      });
    }
  }, {
    key: 'parent',
    value: function parent() {
      return this.context.component;
    }
  }, {
    key: 'onSelect',
    value: function onSelect(item) {
      this.parent().select(item);
    }
  }, {
    key: 'onEnter',
    value: function onEnter() {
      var reference = _reactDom2.default.findDOMNode(this.parent().inputNode);

      this.popperJS = new _popper2.default(reference, this.refs.popper, {
        modifiers: {
          computeStyle: {
            gpuAcceleration: false
          }
        }
      });
    }
  }, {
    key: 'onAfterLeave',
    value: function onAfterLeave() {
      this.popperJS.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var customItem = this.parent().props.customItem;
      var _parent$state = this.parent().state,
          loading = _parent$state.loading,
          highlightedIndex = _parent$state.highlightedIndex;
      var suggestions = this.props.suggestions;
      var _state = this.state,
          showPopper = _state.showPopper,
          dropdownWidth = _state.dropdownWidth;


      return _react2.default.createElement(
        _utils.Transition,
        { name: 'ko-zoom-in-top', onEnter: this.onEnter.bind(this), onAfterLeave: this.onAfterLeave.bind(this) },
        _react2.default.createElement(
          _utils.View,
          { show: showPopper },
          _react2.default.createElement(
            'div',
            {
              ref: 'popper',
              className: this.classNames('ko-autocomplete-suggestion', 'ko-popper', {
                'is-loading': loading
              }),
              style: {
                width: dropdownWidth,
                zIndex: 1
              }
            },
            _react2.default.createElement(
              _scrollbar.Scrollbar,
              {
                viewComponent: 'ul',
                wrapClass: 'ko-autocomplete-suggestion__wrap',
                viewClass: 'ko-autocomplete-suggestion__list'
              },
              loading ? _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'ko-icon-loading' })
              ) : suggestions.map(function (item, index) {
                return _react2.default.createElement(
                  'li',
                  {
                    key: index,
                    className: _this2.classNames({ 'highlighted': highlightedIndex === index }),
                    onClick: _this2.onSelect.bind(_this2, item) },
                  !customItem ? item.value : _react2.default.createElement(customItem, {
                    index: index,
                    item: item
                  })
                );
              })
            )
          )
        )
      );
    }
  }]);
  return Suggestions;
}(_utils.Component);

var _default = Suggestions;
exports.default = _default;


Suggestions.contextTypes = {
  component: _utils.PropTypes.any
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Suggestions, 'Suggestions', 'src/components/auto-complete/Suggestions.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/auto-complete/Suggestions.jsx');
}();

;