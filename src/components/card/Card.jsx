/* @flow */

import React from 'react';
import { PropTypes,Component} from '../../utils';

export default class Card extends Component {
  static defaultProps = {
    prefixCls:'ko-card',
    className:'',
    title:'',
    extra:'',
    loading:false,
    bordered:true,
    bodyStyle: { padding: '20px' },
    style:{},
  }
  static propTypes = {
    prefixCls:PropTypes.string,
    className:PropTypes.string,
    title:PropTypes.any,
    extra:PropTypes.any,
    loading:PropTypes.bool,
    bordered:PropTypes.bool,
    header: PropTypes.node,
    bodyStyle: PropTypes.objectOf(PropTypes.any),
    style:PropTypes.objectOf(PropTypes.any)
  }

  render(){
    let { prefixCls,className,children,bodyStyle,title,extra, loading, bordered, ...other } = this.props;
    const classString = this.classNames({
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
    return (
      <div style={this.style()} className={classString}>
        {
          title && <div className={`${prefixCls}__header`}>{ title }</div>
        }
        {
          extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null
        }
        <div className={`${prefixCls}__body`} style={ bodyStyle }>
          { children }
        </div>
      </div>
    )
  }
}
