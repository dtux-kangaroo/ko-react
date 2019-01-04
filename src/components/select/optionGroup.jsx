/* @flow */

import React from 'react';
import { Component, PropTypes } from '../../utils';

export default class OptionGroup extends Component {
  render() {
    return (
      <ul style={this.style()} className={this.className('ko-select-group__wrap')}>
        <li className="ko-select-group__title">{this.props.label}</li>
        <li>
          <ul className="ko-select-group">
            {this.props.children}
          </ul>
        </li>
      </ul>
    )
  }
}

OptionGroup.propTypes = {
  label: PropTypes.string,
};
