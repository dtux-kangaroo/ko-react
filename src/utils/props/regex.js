import { createPropType } from '../tool';

export default createPropType((props, propName, componentName) => {
  const value = props[propName];

  if (!(value instanceof RegExp)) {
    return new Error(`Invalid prop ${propName} of ${componentName}, should be valid regex.`);
  }
});
