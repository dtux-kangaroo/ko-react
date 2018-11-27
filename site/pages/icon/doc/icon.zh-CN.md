## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `ko-icon-iconName` 来使用即可。例如：

:::demo
```js
render() {
  return (
    <div>
      <i className="ko-icon-edit"></i>
      <i className="ko-icon-share"></i>
      <i className="ko-icon-delete"></i>
      <Button type="primary" icon="search">搜索</Button>
    </div>
  )
}
```
:::

### 图标集合

:::demo
```js
render() {
  return (
    <ul className="icon-list">
      {this.props.iconList.map((v, i) =>
        <li key={i}><span><Icon name={v} />{v}</span></li>
      )}
    </ul>
  )
}
```
:::
