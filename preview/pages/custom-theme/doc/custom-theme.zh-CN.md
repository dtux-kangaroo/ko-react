
##   安装主题

```html
npm install ko-theme --save

```
### 自定义主题
ko 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。可以进行不同程度的样式自定义。
### 在项目中改变 SCSS 变量
ko 的 ko-theme 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 ko 的样式变量。新建一个样式文件，例如 `ko-variables.scss`，写入以下内容：
```html
/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~ko-theme/src/fonts';

@import "~ko-theme/src/index";
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 ko 编译好的 CSS 文件）：
```JS
import React from 'React'
import { Button } from 'ko-rt'

import 'ko-theme';

ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('app'));
```

:::tip
需要注意的是，覆盖字体路径变量是必需的，将其赋值为 KO 中 icon 图标所在的相对路径即可。
:::


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

如果不清楚 请阅读 <a href="./#/zh-CN/quick-start">快速上手</a> 一节。更多 `ko-theme` 用法请参考[项目仓库](https://github.com/dtux-kangaroo/ko.git)。