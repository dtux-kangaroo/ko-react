## Installation

### Custom theme
Element uses BEM-styled CSS so that you can override styles easily.

### Update SCSS variables in your project
`ko-theme` is written in SCSS. If your project also uses SCSS, you can directly change Element style variables. Create a new style file, e.g. `ko-variables.scss`:

```html
/* theme color */
$--color-primary: teal;

/* icon font path, required */
$--font-path: '~ko-theme/src/fonts';

@import "~ko-theme/src/index";
```

Then in the entry file of your project, import this style file instead of Element's built CSS:
```JS
import React from 'React'
import { Button} from 'ko-ui'

import 'ko-theme';

ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));
```
:::tip
Note that it is required to override icon font path to the relative path of Element's font files.
:::

In `element-variables.scss` you can find all the variables we used to style Element and they are defined in SCSS format. Here's a snippet:
```css
$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

...
```


please refer to <a href="./#/zh-CN/quick-start">Quick Start</a>. For more details, check out the [project repository](https://github.com/ElementUI/element-theme) of `ko-theme`.