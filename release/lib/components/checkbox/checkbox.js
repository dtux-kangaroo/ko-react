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

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox(props) {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = {
      checked: props.checked,
      focus: props.focus,
      label: _this.getLabel(props)
    };
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        checked: nextProps.checked, focus: nextProps.focus, label: this.getLabel(nextProps)
      });
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.setState({
        focus: true
      });
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      this.setState({
        focus: false
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var _this2 = this;

      if (e.target instanceof HTMLInputElement) {
        var _label = this.state.label;
        var _props = this.props,
            trueLabel = _props.trueLabel,
            falseLabel = _props.falseLabel;


        var _checked = e.target.checked;
        var group = this.context.ElCheckboxGroup;

        if (group) {
          var length = group.state.options.length + (_checked ? 1 : -1);

          if (group.props.min !== undefined && length < group.props.min) {
            return;
          }

          if (group.props.max !== undefined && length > group.props.max) {
            return;
          }
        }

        var newLabel = _label;

        if (this.props.trueLabel || this.props.falseLabel) {
          newLabel = _checked ? trueLabel : falseLabel;
        }

        this.setState({
          checked: _checked,
          label: newLabel
        }, function () {
          if (_this2.props.onChange) {
            _this2.props.onChange(_checked);
          }
        });
      }
    }
  }, {
    key: 'getLabel',
    value: function getLabel(props) {
      if (props.trueLabel || props.falseLabel) {
        return props.checked ? props.trueLabel : props.falseLabel;
      } else {
        return props.label;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'label',
        { style: this.style(), className: this.className('ko-checkbox') },
        _react2.default.createElement(
          'span',
          { className: this.classNames('ko-checkbox__input', {
              'is-disabled': this.props.disabled,
              'is-checked': this.state.checked,
              'is-indeterminate': this.props.indeterminate,
              'is-focus': this.state.focus
            }) },
          _react2.default.createElement('span', { className: 'ko-checkbox__inner' }),
          _react2.default.createElement('input', {
            className: 'ko-checkbox__original',
            type: 'checkbox',
            checked: this.state.checked,
            disabled: this.props.disabled,
            onFocus: this.onFocus.bind(this),
            onBlur: this.onBlur.bind(this),
            onChange: this.onChange.bind(this)
          })
        ),
        _react2.default.createElement(
          'span',
          { className: 'ko-checkbox__label' },
          this.props.children || this.state.label
        )
      );
    }
  }]);
  return Checkbox;
}(_utils.Component);

Checkbox.elementType = 'Checkbox';
var _default = Checkbox;
exports.default = _default;


Checkbox.contextTypes = {
  ElCheckboxGroup: _utils.PropTypes.any
};

Checkbox.propTypes = {
  label: _utils.PropTypes.string,
  trueLabel: _utils.PropTypes.oneOfType([_utils.PropTypes.string, _utils.PropTypes.number]),
  falseLabel: _utils.PropTypes.oneOfType([_utils.PropTypes.string, _utils.PropTypes.number]),
  disabled: _utils.PropTypes.bool,
  checked: _utils.PropTypes.bool,
  indeterminate: _utils.PropTypes.bool,
  focus: _utils.PropTypes.bool,
  onChange: _utils.PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  focus: false
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', 'src/components/checkbox/checkbox.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/checkbox/checkbox.jsx');
}();

;