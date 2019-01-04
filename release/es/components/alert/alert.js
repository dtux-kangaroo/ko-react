import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Component, PropTypes, Transition, View } from '../../utils';

var TYPE_CLASSES_MAP = {
  'success': 'ko-icon-circle-check',
  'warning': 'ko-icon-warning',
  'error': 'ko-icon-circle-cross'
};

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      visible: true
    };
    return _this;
  }

  Alert.prototype.close = function close() {
    this.setState({
      visible: false
    });
  };

  Alert.prototype.onAfterLeave = function onAfterLeave() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  Alert.prototype.render = function render() {
    return React.createElement(
      Transition,
      { name: 'ko-alert-fade', onAfterLeave: this.onAfterLeave.bind(this) },
      React.createElement(
        View,
        { show: this.state.visible },
        React.createElement(
          'div',
          { style: this.style(), className: this.className('ko-alert', 'ko-alert--' + this.props.type) },
          this.props.showIcon && React.createElement('i', { className: this.classNames('ko-alert__icon', TYPE_CLASSES_MAP[this.props.type] || 'ko-icon-information', {
              'is-big': this.props.description
            }) }),
          React.createElement(
            'div',
            { className: 'ko-alert__content' },
            this.props.title && React.createElement(
              'span',
              { className: this.classNames('ko-alert__title', {
                  'is-bold': this.props.description
                }) },
              this.props.title
            ),
            this.props.description && React.createElement(
              'p',
              { className: 'ko-alert__description' },
              this.props.description
            ),
            React.createElement(
              View,
              { show: this.props.closable },
              React.createElement(
                'i',
                { className: this.classNames('ko-alert__closebtn', this.props.closeText ? 'is-customed' : 'ko-icon-close'), onClick: this.close.bind(this) },
                this.props.closeText
              )
            )
          )
        )
      )
    );
  };

  return Alert;
}(Component);

export default Alert;


Alert.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  showIcon: PropTypes.bool
};

Alert.defaultProps = {
  type: 'info',
  closable: true
};