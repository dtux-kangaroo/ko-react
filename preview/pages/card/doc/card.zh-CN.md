## Card 卡片
将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。

:::demo Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时也是可选的。
```js
render() {
  return (
    <Card
      className="box-card"
      title={
        <div className="clearfix">
          <span style={{ "lineHeight": "36px" }}>卡片名称</span>
        </div>
      }
      extra ={
        <Button type="primary">操作按钮</Button>
      }
    >
      <div className="text item">列表内容 1</div>
      <div className="text item">列表内容 2</div>
      <div className="text item">列表内容 3</div>
      <div className="text item">列表内容 4</div>
    </Card>
  )
}
```
:::

### 简单卡片

卡片可以只有内容区域。

:::demo
```js
render() {
  return (
    <Card className="box-card">
      <div className="text item">列表内容 0</div>
      <div className="text item">列表内容 1</div>
      <div className="text item">列表内容 2</div>
      <div className="text item">列表内容 3</div>
    </Card>
  )
}
```
:::

### 带图片

可配置定义更丰富的内容展示。

:::demo 配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。
```js
render() {
  return (
    <Layout.Row className="box-card">
      <Layout.Col span={ 8 } offset={ 0 }>
        <Card bodyStyle={{ padding: 0 }}>
          <img src="imgs/daisu2.jpg" className="image" />
          <div style={{ padding: 14 }}>
            <span>袋鼠云</span>
            <div className="bottom clearfix">
              <time className="time">2019-01-22 16:19</time>
              <Button type="text" className="button">操作按钮</Button>
            </div>
          </div>
        </Card>
      </Layout.Col>
      <Layout.Col span={ 8 } offset={ 2 }>
        <Card bodyStyle={{ padding: 0 }}>
          <img src="imgs/daisu1.jpg" className="image" />
          <div style={{ padding: 14 }}>
            <span>袋鼠云</span>
            <div className="bottom clearfix">
              <time className="time">2019-01-22 16:19</time>
              <Button type="text" className="button">操作按钮</Button>
            </div>
          </div>
        </Card>
      </Layout.Col>
    </Layout.Row>
  )
}
```
:::
### 预加载卡片

数据读入前会有文本块样式。

:::demo 动态设置loading加载状态。
```js
constructor(props) {
  super(props);

  this.state = {
    loading: false,
  }
}
render() {
  const {loading} = this.state;
  return (
    <Layout.Row className="box-card">
      <Layout.Col span={ 8 } offset={ 0 }>
        <Switch
          value={this.state.loading}
          onColor="#13ce66"
          style={{marginBottom:10}}
          onChange={(value)=>{this.setState({loading: value})}}
        >
        
        </Switch>
        <Card title="预加载卡片" loading={loading}>
          <div>
            <span>袋鼠云</span>
            <div className="bottom clearfix">
              <time className="time">2019-01-22 16:19</time>
              <Button type="text" className="button">操作按钮</Button>
            </div>
          </div>
        </Card>
      </Layout.Col>
    </Layout.Row>
  )
}
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 设置 title  | `any`| — | — |
| extra | 设置 头部extra   | `any`| — | — |
| className | 设置card组件类名 | string| — | — |
| loading | 设置card加载状态 | bool|true,false | false |
| bordered | 设置card body表框| bool| true,false| false |
| style | 设置 card组件的样式| object| — | { } |
| bodyStyle | 设置 card body 的样式| object| — | { padding: '20px' } |
