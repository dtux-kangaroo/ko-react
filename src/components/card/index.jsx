import React from 'react';
import classNames from 'classnames';

export default props => {
  let { prefixCls = 'ko-card', className, children, extra, bodyStyle,
        title, loading, bordered = true, ...other } = props;
  const classString = classNames({
    [prefixCls]: true,
    [className]: !!className,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-bordered`]: bordered,
  });

  if (loading) {
    children = (
      <div>
        <p>████████████████████████</p>
        <p>██████　███████████████████</p>
        <p>██████████████　██████████</p>
        <p>█████　██████　█████████████</p>
        <p>███████████　██████████　███</p>
      </div>
    );
  }

  const head = title ? (
    <div className={`${prefixCls}__header`}>
      <div className={`${prefixCls}-head-title`}>{title}</div>
    </div>
  ) : null;

  return (
    <div {...other} className={classString}>
      {head}
      {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
      <div className={`${prefixCls}__body`} style={bodyStyle}>{children}</div>
    </div>
  );
};
