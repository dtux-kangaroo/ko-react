category: Components
type: Views
title: Card
subtitle: 卡片

包含标题、内容、操作区域。

:::demo 
```js
render(){
    return (
         <Card
                title="Card title"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
            >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
        </Card>
    )
}
```
:::

只包含内容区域。

:::demo 
```js
render(){
    return (
         <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}
```
:::

在灰色背景上使用无边框的卡片。

:::demo 
```js
render(){
    return (
   <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        </Card>
    </div>
    )
}
```
:::

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## API

```html
<Card title="卡片标题">卡片内容</Card>
```

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 卡片标题 | React.Element   |  -  |
| extra    | 卡片右上角的操作区域 | React.Element   | - |
| bordered | 是否有边框 | Boolean   |  true  |
| bodyStyle | 内容区域自定义样式 | Object   |  -  |
