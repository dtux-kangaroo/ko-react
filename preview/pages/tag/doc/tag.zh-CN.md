## Tag 标签

用于标记和选择。

### 基础用法

:::demo 由`type`属性来选择 tag 的类型，也可以通过`color`属性来自定义背景色。

```js
render() {
  return (
    <div>
      <Tag>标签一</Tag>
      <Tag type="gray">标签二</Tag>
      <Tag type="primary">标签三</Tag>
      <Tag type="success">标签四</Tag>
      <Tag type="warning">标签五</Tag>
      <Tag type="danger">标签六</Tag>
    </div>
  )
}
```

:::

### 可移除标签

:::demo 设置`closable`属性来定义一个可移除的标签，接受一个`Boolean`，设置为`true`即可。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`closeTransition`属性，它接受一个`Boolean`，true 为关闭。设置`close`事件可以处理关闭后的回调函数。

```js
constructor(props) {
  super(props);

  this.state = {
    tags: [
      { key: 1, name: '标签一', type: '' },
      { key: 2, name: '标签二', type: 'gray' },
      { key: 5, name: '标签三', type: 'primary' },
      { key: 3, name: '标签四', type: 'success' },
      { key: 4, name: '标签五', type: 'warning' },
      { key: 6, name: '标签六', type: 'danger' }
    ]
  }
}

handleClose(tag) {
  const { tags } = this.state;

  tags.splice(tags.map(el => el.key).indexOf(tag.key), 1);

  this.setState({ tag });
}

render() {
  return (
    <div>
      {
        this.state.tags.map(tag => {
          return (
            <Tag
              key={tag.key}
              closable={true}
              type={tag.type}
              closeTransition={false}
              onClose={this.handleClose.bind(this, tag)}>{tag.name}</Tag>
          )
        })
      }
    </div>
  )
}
```

:::

### 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `onClose` 事件来实现

:::demo

```js
constructor(props) {
  super(props);

  this.state = {
    dynamicTags: ['标签一', '标签二', '标签三'],
    inputVisible: false,
    inputValue: ''
  }
}

onKeyUp(e) {
  if (e.keyCode === 13) {
    this.handleInputConfirm();
  }
}

onChange(value) {
  this.setState({ inputValue: value });
}

handleClose(index) {
  this.state.dynamicTags.splice(index, 1);
  this.forceUpdate();
}

showInput() {
  this.setState({ inputVisible: true }, () => {
    this.refs.saveTagInput.focus();
  });
}

handleInputConfirm() {
  let inputValue = this.state.inputValue;

  if (inputValue) {
    this.state.dynamicTags.push(inputValue);
  }

  this.state.inputVisible = false;
  this.state.inputValue = '';

  this.forceUpdate();
}

render() {
  return (
    <div>
      {
        this.state.dynamicTags.map((tag, index) => {
          return (
            <Tag
              key={Math.random()}
              closable={true}
              closeTransition={false}
              onClose={this.handleClose.bind(this, index)}>{tag}</Tag>
          )
        })
      }
      {
        this.state.inputVisible ? (
          <Input
            className="input-new-tag"
            value={this.state.inputValue}
            ref="saveTagInput"
            size="mini"
            onChange={this.onChange.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
            onBlur={this.handleInputConfirm.bind(this)}
          />
        ) : <Button className="button-new-tag" size="small" onClick={this.showInput.bind(this)}>+ New Tag</Button>
      }
    </div>
  )
}
```

:::

### 动态编辑和新增标签

动态编辑和新增标签可以通过点击标签关闭按钮、编辑按钮、新增按钮后触发的对应的事件来实现
:::demo

```js
constructor(props) {
  super(props);

  this.state = {
    dynamicTags: ['标签一', '标签二', '标签三'],
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: "",
  }
  this.handleEditInputChange = this.handleEditInputChange.bind(this)
}
//处理每个关闭按钮
handleClose(removedTag){
  const dynamicTags = this.state.dynamicTags.filter((tag) => tag !== removedTag);
  this.setState({ dynamicTags });
};

//1.新增按钮展示
showInput() {
  this.setState({ inputVisible: true }, () => {
    this.refs.saveTagInput.focus();
  });
}
//1.新增数值获取
onChange(value) {
  this.setState({ inputValue: value });
}
//2.新增按钮--enter键
onAddKeyUp(e){
  if (e.keyCode === 13) {
    this.handleInputConfirm();
  }
}
//新增确定功能
handleInputConfirm() {
  let { dynamicTags ,inputValue} = this.state

  if (inputValue) {
    dynamicTags = [...dynamicTags, inputValue];
  }
  this.setState({
    dynamicTags,
    inputVisible:false,
    inputValue:""
  })
}
//5.响应每次编辑的变化内容
handleEditInputChange(e){
  this.setState({ editInputValue: e });
};
//编辑--enter键
onKeyUp(e) {
  if (e.keyCode === 13) {
    this.handleEditInputConfirm();
  }
}
//6.响应每次编辑变化确定功能
handleEditInputConfirm(){
  this.setState(({ dynamicTags, editInputIndex, editInputValue }) => {
    const newTags = [...dynamicTags];
    newTags[editInputIndex] = editInputValue;

    return {
      dynamicTags: newTags,
      editInputIndex: -1,
      editInputValue: "",
    };
  });
  };
render() {
   const {
      editInputIndex, //初始化是 -1
      editInputValue,
    } = this.state;
  return (
    <div>
      
      {
        this.state.dynamicTags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                key={tag}
                size="small"
                style={{width:"80px"}}
                value={editInputValue}
                onChange={(e)=>{
                  this.handleEditInputChange(e)
                }}
                onBlur={this.handleEditInputConfirm.bind(this)}
                // onPressEnter={this.handleEditInputConfirm.bind(this)}
                onKeyUp={this.onKeyUp.bind(this)}
              />
            );
          }
          const tagElem =(
            <Tag
              key={tag}
              closable={true}
              closeTransition={false}
              onClose={this.handleClose.bind(this, index)}>
               <span
                onClick={(e) => {
                  this.setState(
                    { editInputIndex: index, editInputValue: tag },
                  );
                  e.preventDefault();
                }}
              >
                {tag}
              </span>
              </Tag>
          )
          return tagElem
        })
      }
      {/* 新增tag功能 */}
      {
        this.state.inputVisible&&(
          <Input
            style={{width:"80px"}}
            className="input-new-tag"
            value={this.state.inputValue}
            ref="saveTagInput"
            size="small"
            onChange={this.onChange.bind(this)}
            onKeyUp={this.onAddKeyUp.bind(this)}
            onBlur={this.handleInputConfirm.bind(this)}
          />
        )
      }
      <Button className="button-new-tag" size="small" onClick={this.showInput.bind(this)}>+ New Tag</Button>
    </div>
  )
}
```

:::

### Attributes

| 参数            | 说明                     | 类型    | 可选值                                            | 默认值 |
| --------------- | ------------------------ | ------- | ------------------------------------------------- | ------ |
| type            | 主题                     | string  | 'primary', 'gray', 'success', 'warning', 'danger' | —      |
| closable        | 是否可关闭               | boolean | —                                                 | false  |
| closeTransition | 是否禁用关闭时的渐变动画 | boolean | —                                                 | false  |
| hit             | 是否有边框描边           | boolean | —                                                 | false  |
| color           | 背景色                   | string  | —                                                 | —      |

### Events

| 事件名称 | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| onClose  | 关闭 tag 时触发的事件 | —        |
