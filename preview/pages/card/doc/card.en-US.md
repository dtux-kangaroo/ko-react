category: Components
type: Views
title: Card

A basic card containing a title, content and an extra corner content.

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

A simple card only containing a content area.

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

A borderless card on a gray background.

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
Common card container.

## When to use

The most basic card container. You can use it to contain text, lists, pictures and paragraphs.

## API

```html
<Card title="Card title">Card content</Card>
```

| Property     | Description           | Type     | Default       |
|----------|----------------|----------|--------------|
| title    | Card title | React.Element   |  -  |
| extra    | Corner content of card | React.Element   | - |
| bordered | Whether a border is set | Boolean   |  true  |
| bodyStyle | Custom style for content area | Object   |  -  |
