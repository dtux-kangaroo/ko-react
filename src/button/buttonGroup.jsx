/* @flow */

import React from 'react';
import { Component } from '../utils';

export default class ButtonGroup extends Component {
  render(): React.Element<any> {
    return (
      <div style={this.style()} className={this.className('el-button-group')}>
        {this.props.children}
      </div>
    )
  }
}
