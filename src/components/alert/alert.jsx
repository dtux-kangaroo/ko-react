/* @flow */

import React from 'react';
import { Component, PropTypes, Transition, View } from '../../utils';

type State = {
  visible: boolean
};

const TYPE_CLASSES_MAP: {[type: string]: string} = {
  'success': 'ko-icon-circle-check',
  'warning': 'ko-icon-warning',
  'error': 'ko-icon-circle-cross'
};

export default class Alert extends Component {
  state: State;

  constructor(props: Object) {
    super(props);

    this.state = {
      visible: true
    };
  }

  close() {
    this.setState({
      visible: false
    });
  }

  onAfterLeave() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <Transition name="ko-alert-fade" onAfterLeave={this.onAfterLeave.bind(this)}>
        <View show={this.state.visible}>
          <div style={this.style()} className={this.className('ko-alert', `ko-alert--${ this.props.type }`)}>
            {
              this.props.showIcon && <i className={this.classNames('ko-alert__icon', TYPE_CLASSES_MAP[this.props.type] || 'ko-icon-information', {
                'is-big': this.props.description
              })} />
            }
            <div className="ko-alert__content">
              {
                this.props.title && (
                  <span className={this.classNames('ko-alert__title', {
                    'is-bold': this.props.description
                  })}>{this.props.title}</span>
                )
              }
              {
                this.props.description && <p className="ko-alert__description">{this.props.description}</p>
              }
              <View show={this.props.closable}>
                <i className={this.classNames('ko-alert__closebtn', this.props.closeText ? 'is-customed' : 'ko-icon-close')} onClick={this.close.bind(this)}>{this.props.closeText}</i>
              </View>
            </div>
          </div>
        </View>
      </Transition>
    )
  }
}

Alert.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  showIcon: PropTypes.bool
}

Alert.defaultProps = {
  type: 'info',
  closable: true
};
