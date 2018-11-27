## Quick start

### Installation
Installing with npm is recommended and it works seamlessly with `webpack`.

```shell
npm i ko-ui --save
```
### Theme
Before the building, you need a style theme, here we recommend you to pick up `element-theme-default`.

```shell
npm install element-theme-default --save
```

### Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'ko-ui';

import 'element-theme-default';

ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));

```
