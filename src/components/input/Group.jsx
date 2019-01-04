import React from 'react';
import classNames from 'classnames';
import { Component, PropTypes } from '../../utils';

export default function Group(props) {
  const className = classNames({
    'ko-input-group': true,
    'ko-input-group-lg': props.size === 'large',
    'ko-input-group-sm': props.size === 'small',
    [props.className]: !!props.className,
  });
  return (
    <span className={className} style={props.style}>
      {props.children}
    </span>
  );
}

Group.propTypes = {
  children: PropTypes.any,
};
