import RcCheckbox from 'rc-checkbox';
import React,{PureComponent} from 'react';
import CheckboxGroup from './Group';
import classNames from 'classnames';

export default class Checkbox extends PureComponent {
  static Group = CheckboxGroup;
  static defaultProps = {
    prefixCls: 'ko-checkbox',
  }
  render() {
    const { prefixCls, style, children, className, ...restProps } = this.props;
    const classString = classNames({
      [className]: !!className,
      [`${prefixCls}-wrapper`]: true,
    });
    return (
      <label className={classString} style={style}>
        <RcCheckbox {...restProps} prefixCls={prefixCls} children={null} />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}