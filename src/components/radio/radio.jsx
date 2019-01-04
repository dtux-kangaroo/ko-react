import RcCheckbox from 'rc-checkbox';
import React,{PureComponent} from 'react';
import classNames from 'classnames';

export default class Radio extends PureComponent {
  static defaultProps = {
    prefixCls: 'ko-radio',
  }
  render() {
    const { prefixCls, children, checked, disabled, className, style } = this.props;
    const wrapperClassString = classNames({
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: checked,
      [`${prefixCls}-wrapper-disabled`]: disabled,
      [className]: !!className,
    });
    const classString = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });
    return (
      <label className={wrapperClassString} style={style}>
        <RcCheckbox {...this.props} className={classString} style={null} children={null} />
        {children ? <span>{children}</span> : null}
      </label>
    );
  }
}
