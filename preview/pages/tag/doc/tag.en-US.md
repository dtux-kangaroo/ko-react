## Tag

Used for marking and selection.

### Basic usage

:::demo Use the `type` attribute to define Tag's type. In addition, the `color` attribute can be used to set the background color of the Tag.

```js
render() {
  return (
    <div>
      <Tag>Tag One</Tag>
      <Tag type="gray">Tag Two</Tag>
      <Tag type="primary">Tag Three</Tag>
      <Tag type="success">Tag Four</Tag>
      <Tag type="warning">Tag Five</Tag>
      <Tag type="danger">Tag Six</Tag>
    </div>
  )
}
```
:::

### Removable Tag

:::demo `closable` attribute can be used to define a removable tag. It accepts a `Boolean`. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the `closeTransition` attribute, which accepts a `Boolean`, to `true`. `close` event triggers when Tag is removed.

```js
constructor(props) {
  super(props);

  this.state = {
    tags: [
      { key: 1, name: 'Tag One', type: '' },
      { key: 2, name: 'Tag Two', type: 'gray' },
      { key: 5, name: 'Tag Three', type: 'primary' },
      { key: 3, name: 'Tag Four', type: 'success' },
      { key: 4, name: 'Tag Five', type: 'warning' },
      { key: 6, name: 'Tag Six', type: 'danger' }
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

### Edit Dynamically

You can use the `onClose` event to add and remove tag dynamically.

:::demo
```js
constructor(props) {
  super(props);

  this.state = {
    dynamicTags: ['Tag One', 'Tag Two', 'Tag Three'],
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

### Edit And Add Dynamically

Dynamic editing and adding tags can be realized by clicking the corresponding event triggered after the tag close button, edit button, or new button

:::demo

```js
constructor(props) {
  super(props);

  this.state = {
    dynamicTags: ['tagOne', 'tagTwo', 'tagThree'],
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: "",
  }
  this.handleEditInputChange = this.handleEditInputChange.bind(this)
}
handleClose(removedTag){
  const dynamicTags = this.state.dynamicTags.filter((tag) => tag !== removedTag);
  this.setState({ dynamicTags });
};

showInput() {
  this.setState({ inputVisible: true }, () => {
    this.refs.saveTagInput.focus();
  });
}
onChange(value) {
  this.setState({ inputValue: value });
}
onAddKeyUp(e){
  if (e.keyCode === 13) {
    this.handleInputConfirm();
  }
}
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
handleEditInputChange(e){
  this.setState({ editInputValue: e });
};
onKeyUp(e) {
  if (e.keyCode === 13) {
    this.handleEditInputConfirm();
  }
}
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
      editInputIndex,
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

### Edit And Add Dynamically With Select

Dynamic editing and adding tags, when adding and editing, you can drop down to select or add one, and trigger the corresponding adding and editing methods

:::demo

``` js
constructor(props) {
  super(props);

  this.state = {
    dynamicTags: ['tagOne', 'tagTwo', 'tagThree'],
    inputVisible: false,
    inputValue: '',
    editInputIndex: -1,
    editInputValue: "",
    options: [{
      value: 'k_1',
      label: 'react'
    }, {
      value: 'k_2',
      label: 'vue'
    }, {
      value: 'k_3',
      label: 'ng'
    }, {
      value: 'k_4',
      label: 'rxjs'
    }, {
      value: 'k_5',
      label: 'redux'
    }],
    value: '',
    id: null,
  }
  
  this.onChangeTypeAdd = this.onChangeTypeAdd.bind(this)
  this.handleInputConfirm = this.handleInputConfirm.bind(this)
  this.onChangeEditType = this.onChangeEditType.bind(this)
}
handleClose(removedTag){
  const dynamicTags = this.state.dynamicTags.filter((tag) => tag !== removedTag);
  this.setState({ dynamicTags });
};

showInput() {
  this.setState({ inputVisible: true });
}
onChangeTypeAdd(value, option) {
  this.setState(
    {
      inputValue: option.props.label,
    },
    () => {
      this.handleInputConfirm();
    }
  );
};
handleInputConfirm() {
  const { inputValue,dynamicTags } = this.state;
  let arr = dynamicTags;
  arr.push(inputValue);

  this.setState(
    {
      dynamicTags: arr,
      inputVisible: false,
      inputValue: "",
    },
    () => {
      this.setState({
        id: null,
        inputVisible: false,
      });
    }
  );
};
onChangeEditType(e, index, option){
  let dynamicTags = this.state.dynamicTags;  
  dynamicTags[index] = option.props.label;

  this.setState(
    {
      dynamicTags,
      editInputIndex: -1,
    }
  );
};

render() {
   const {
      editInputIndex,
      editInputValue,
    } = this.state;
  return (
    <div>
      
      {
        this.state.dynamicTags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Select placeholder="Please select"  filterable={true}  
                onChange={(value, option) =>
                  this.onChangeEditType(value, index, option)
                }
                >
                {
                  this.state.options.map(el => {
                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                  })
                }
              </Select>

            );
          }
          const tagElem =(
            <Tag
              key={index}
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
      {
        this.state.inputVisible&&(
         <Select value={this.state.value} placeholder="Please select"  filterable={true}  
            onChange={(value, option) =>
              this.onChangeTypeAdd(value, option)
            }
            >
            {
              this.state.options.map(el => {
                return <Select.Option key={el.value} label={el.label} value={el.value}/>
              })
            }
          </Select>
        )
      }
      <Button className="button-new-tag" size="small" onClick={this.showInput.bind(this)}>+ New Tag</Button>
    </div>
  )
}
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values      | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | theme | string | 'primary', 'gray', 'success', 'warning', 'danger' | — |
| closable | whether Tab can be removed | boolean | — | false |
| closeTransition |  whether the removal animation is disabled  | boolean | — | false |
| hit | whether Tag has a highlighted border | boolean | — | false |
| color | background color of the tag | string | — | — |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| onClose | triggers when Tab is removed | — |
