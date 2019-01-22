## Card
Integrate information in a card container.

### Basic usage

Card includes title, content and operations.

:::demo Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.
```js
render() {
  return (
    <Card
      className="box-card"
      title={
        <div className="clearfix">
          <span style={{ "lineHeight": "36px" }}>Card Name</span>
        </div>
      }
      extra ={
        <Button type="primary">button</Button>
      }
    >
      <div className="text item">List item 1</div>
      <div className="text item">List item 2</div>
      <div className="text item">List item 3</div>
      <div className="text item">List item 4</div>
    </Card>
  )
}
```
:::

### Simple card

The header part can be omitted.

:::demo
```js
render() {
  return (
    <Card className="box-card">
      <div className="text item">List item 1</div>
      <div className="text item">List item 2</div>
      <div className="text item">List item 3</div>
      <div className="text item">List item 4</div>
    </Card>
  )
}
```
:::

### With images

Display richer content by adding some configs.

:::demo The `body-style` attribute defines CSS style of custom `body`. This example also uses `el-col` for layout.
```js
render() {
  return (
    <Layout.Row className="box-card">
      <Layout.Col span={ 8 } offset={ 0 }>
        <Card bodyStyle={{ padding: 0 }}>
          <img src="imgs/daisu2.jpg" className="image" />
          <div style={{ padding: 14 }}>
            <span>Data Intelligence</span>
            <div className="bottom clearfix">
              <time className="time">2019-01-22 16:19</time>
              <Button type="text" className="button">Button</Button>
            </div>
          </div>
        </Card>
      </Layout.Col>
      <Layout.Col span={ 8 } offset={ 2 }>
        <Card bodyStyle={{ padding: 0 }}>
          <img src="imgs/daisu1.jpg" className="image" />
          <div style={{ padding: 14 }}>
            <span>Data Intelligence</span>
            <div className="bottom clearfix">
              <time className="time">2019-01-22 16:19</time>
              <Button type="text" className="button">Button</Button>
            </div>
          </div>
        </Card>
      </Layout.Col>
    </Layout.Row>
  )
}
```
:::

### Preload card

Data is read in before there will be a text block style.

:::demo Dynamic loading load condition。
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
        <Card title="Preload card" loading={loading}>
          <div>
            <span>Data Intelligence</span>
            <div className="bottom clearfix">
              <time className="time">2019-01-22 16:19</time>
              <Button type="text" className="button">Button</Button>
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

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| title | Set the title  | `any`| — | — |
| extra | Set the header on the right side of extra   | `any`| — | — |
| className | Set the name of the class card component | string| — | — |
| loading | Set the card component load condition | bool| true,false | false |
| bordered | Set the card body watch box| bool|true,false | false |
| style | Set the card to the style of the component| object| — | { } |
| bodyStyle | Set the card to the style of the body| object| — | { padding: '20px' } |

