'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tool = require('../tool');

var _default = (0, _tool.createPropType)(function (props, propName, componentName) {
  var value = props[propName];

  if (!(value instanceof RegExp)) {
    return new Error('Invalid prop ' + propName + ' of ' + componentName + ', should be valid regex.');
  }
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/props/regex.js');
}();

;