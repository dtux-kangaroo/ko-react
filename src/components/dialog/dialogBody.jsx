/* @flow */

import React from 'react';
import { Component } from '../../utils';

export default class DialogBody extends Component {
  render(): React.Element<any> {
    return (
      <div style={this.style()} className={this.className('ko-dialog__body')}>
        { this.props.children }
      </div>
    )
  }
}
