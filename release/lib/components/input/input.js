'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _utils = require('../../utils');

var _calcTextareaHeight = require('./calcTextareaHeight');

var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input(props) {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      textareaStyle: { resize: props.resize }
    };
    return _this;
  }

  (0, _createClass3.default)(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeTextarea();
    }

    /* <Instance Methods */

  }, {
    key: 'focus',
    value: function focus() {
      var _this2 = this;

      setTimeout(function () {
        (_this2.refs.input || _this2.refs.textarea).focus();
      });
    }
  }, {
    key: 'blur',
    value: function blur() {
      var _this3 = this;

      setTimeout(function () {
        (_this3.refs.input || _this3.refs.textarea).blur();
      });
    }

    /* Instance Methods> */

  }, {
    key: 'fixControlledValue',
    value: function fixControlledValue(value) {
      if (typeof value === 'undefined' || value === null) {
        return '';
      }
      return value;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var onChange = this.props.onChange;


      if (onChange) {
        onChange(e.target.value);
      }
      this.resizeTextarea();
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      var onFocus = this.props.onFocus;

      if (onFocus) onFocus(e);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      var onBlur = this.props.onBlur;

      if (this.props.trim) this.handleTrim();
      if (onBlur) onBlur(e);
    }
  }, {
    key: 'handleTrim',
    value: function handleTrim() {
      this.refs.input.value = this.refs.input.value.trim();
      if (this.props.onChange) {
        // this's for controlled components
        this.props.onChange(this.refs.input.value.trim());
      }
    }
  }, {
    key: 'handleIconClick',
    value: function handleIconClick(e) {
      if (this.props.onIconClick) {
        this.props.onIconClick(e);
      }
    }
  }, {
    key: 'resizeTextarea',
    value: function resizeTextarea() {
      var _props = this.props,
          autosize = _props.autosize,
          type = _props.type;


      if (!autosize || type !== 'textarea') {
        return;
      }

      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;
      var textareaCalcStyle = (0, _calcTextareaHeight2.default)(this.refs.textarea, minRows, maxRows);

      this.setState({
        textareaStyle: Object.assign({}, this.state.textareaStyle, textareaCalcStyle)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          size = _props2.size,
          prepend = _props2.prepend,
          append = _props2.append,
          icon = _props2.icon,
          autoComplete = _props2.autoComplete,
          validating = _props2.validating,
          rows = _props2.rows,
          onMouseEnter = _props2.onMouseEnter,
          onMouseLeave = _props2.onMouseLeave,
          trim = _props2.trim,
          otherProps = (0, _objectWithoutProperties3.default)(_props2, ['type', 'size', 'prepend', 'append', 'icon', 'autoComplete', 'validating', 'rows', 'onMouseEnter', 'onMouseLeave', 'trim']);


      var classname = this.classNames(type === 'textarea' ? 'ko-textarea' : 'ko-input', size && 'ko-input--' + size, {
        'is-disabled': this.props.disabled,
        'ko-input-group': prepend || append,
        'ko-input-group--append': !!append,
        'ko-input-group--prepend': !!prepend
      });

      if ('value' in this.props) {
        otherProps.value = this.fixControlledValue(this.props.value);

        delete otherProps.defaultValue;
      }

      delete otherProps.resize;
      delete otherProps.style;
      delete otherProps.autosize;
      delete otherProps.onIconClick;

      if (type === 'textarea') {
        return _react2.default.createElement(
          'div',
          { style: this.style(), className: this.className(classname) },
          _react2.default.createElement('textarea', (0, _extends3.default)({}, otherProps, {
            ref: 'textarea',
            className: 'ko-textarea__inner',
            style: this.state.textareaStyle,
            rows: rows,
            onChange: this.handleChange.bind(this),
            onFocus: this.handleFocus.bind(this),
            onBlur: this.handleBlur.bind(this)
          }))
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: this.style(), className: this.className(classname), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
          prepend && _react2.default.createElement(
            'div',
            { className: 'ko-input-group__prepend' },
            prepend
          ),
          typeof icon === 'string' ? _react2.default.createElement(
            'i',
            { className: 'ko-input__icon ko-icon-' + icon, onClick: this.handleIconClick.bind(this) },
            prepend
          ) : icon,
          _react2.default.createElement('input', (0, _extends3.default)({}, otherProps, {
            ref: 'input',
            type: type,
            className: 'ko-input__inner',
            autoComplete: autoComplete,
            onChange: this.handleChange.bind(this),
            onFocus: this.handleFocus.bind(this),
            onBlur: this.handleBlur.bind(this)
          })),
          validating && _react2.default.createElement('i', { className: 'ko-input__icon ko-icon-loading' }),
          append && _react2.default.createElement(
            'div',
            { className: 'ko-input-group__append' },
            append
          )
        );
      }
    }
  }]);
  return Input;
}(_utils.Component);

Input.defaultProps = {
  type: 'text',
  autosize: false,
  rows: 2,
  trim: false,
  autoComplete: 'off'
};
var _default = Input;
exports.default = _default;


Input.propTypes = {
  // base
  type: _utils.PropTypes.string,
  icon: _utils.PropTypes.oneOfType([_utils.PropTypes.element, _utils.PropTypes.string]),
  disabled: _utils.PropTypes.bool,
  name: _utils.PropTypes.string,
  placeholder: _utils.PropTypes.string,
  readOnly: _utils.PropTypes.bool,
  autoFocus: _utils.PropTypes.bool,
  maxLength: _utils.PropTypes.number,
  minLength: _utils.PropTypes.number,
  defaultValue: _utils.PropTypes.any,
  value: _utils.PropTypes.any,
  trim: _utils.PropTypes.bool,

  // type !== 'textarea'
  size: _utils.PropTypes.oneOf(['large', 'small', 'mini']),
  prepend: _utils.PropTypes.node,
  append: _utils.PropTypes.node,

  // type === 'textarea'
  autosize: _utils.PropTypes.oneOfType([_utils.PropTypes.bool, _utils.PropTypes.object]),
  rows: _utils.PropTypes.number,
  resize: _utils.PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),

  // event
  onFocus: _utils.PropTypes.func,
  onBlur: _utils.PropTypes.func,
  onChange: _utils.PropTypes.func,
  onIconClick: _utils.PropTypes.func,
  onMouseEnter: _utils.PropTypes.func,
  onMouseLeave: _utils.PropTypes.func,

  // autoComplete
  autoComplete: _utils.PropTypes.string,
  inputSelect: _utils.PropTypes.func,

  // form related
  form: _utils.PropTypes.string,
  validating: _utils.PropTypes.bool
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Input, 'Input', 'src/components/input/input.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/input/input.jsx');
}();

;