## 手册说明 

### 目录规范

```text
├── build //打包配置
├── dist //静态网站目录
├── release //打包后组件库
│     │     ├── lib //es5打包目录
│     │     ├── es //es6打包目录
├── preview //组件预览目录
│     │     ├── assets //静态文件
│     │     ├── locales //应用国际化
│     │     ├── pages //应用目录
│     │     ├── utils //工具库
├── src //组件根目录
│     │     ├── components //组件目录
│     │     ├── libs //第三方类库
│     │     ├── locales //组件国际化
│     │     ├── utils //工具库
│     │     └── webapp //webapp目录
├── theme //样式主题目录，单独目录，方便后面，vue，ng，样式统一；
├── .babelrc //babel相关配置
└── package.json //node相关环境的配置文件
```
### react规范
``` js
  <button style={this.style()} className={this.className('ko-button', this.props.type && `ko-button--${this.props.type}`, this.props.size && `ko-button--${this.props.size}`, {
          'is-disabled': this.props.disabled,
          'is-loading': this.props.loading,
          'is-plain': this.props.plain
      })} disabled={this.props.disabled} type={this.props.nativeType} onClick={this.onClick.bind(this)}>
        { this.props.loading && <i className="ko-icon-loading" /> }
        { this.props.icon && !this.props.loading && <i className={`ko-icon-${this.props.icon}`} /> }
        <span>{this.props.children}</span>
  </button>

```
### 样式规范
* 遵循 BEM 规范
```scss 
$namespace: 'ko';//命名空间
$single-separator:"-";//- 表示某个块或者某个子元素的多单词之间的连接记号
$element-separator: '__';//用来链接块和块的子元素；
$modifier-separator: '--';//下划线用来描述一个块或者块的子元素的一种状态。
$state-prefix: 'is-';//样式状态--前缀；

```


  