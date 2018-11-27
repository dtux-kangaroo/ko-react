'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tool = require('../tool');

var _default = function _default(min, max) {
  return (0, _tool.createPropType)(function (props, propName, componentName) {
    var value = props[propName];

    if (value < min || value > max) {
      return new Error('Invalid prop ' + propName + ' of ' + componentName + ', should between ' + min + ' and ' + max + '.');
    }
  });
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/utils/props/range.js');
}();

;