## Quick start

### Installation
Installing with npm is recommended and it works seamlessly with `webpack`.

```shell
npm i ko-rt --save
```
### Theme
Before the building, you need a style theme, here we recommend you to pick up `ko-theme`.

```shell
npm install ko-theme --save
```

### Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'ko-rt';

import 'ko-theme';

ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));

```
