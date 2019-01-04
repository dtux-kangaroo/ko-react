/* @flow */

import React from 'react';
import { Component, PropTypes } from '../../utils';

export default class Card extends Component {
  static defaultProps = {
    bodyStyle: {
      padding: '20px'
    }
  }

  render(){
    const { header, bodyStyle, children } = this.props;
    return (
      <div style={this.style()} className={this.className('ko-card')}>
        {
          header && <div className="ko-card__header">{ header }</div>
        }
        <div className="ko-card__body" style={ bodyStyle }>
          { children }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  header: PropTypes.node,
  bodyStyle: PropTypes.object
};
