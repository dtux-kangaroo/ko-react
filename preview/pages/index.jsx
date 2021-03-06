export default {
  documents: {
    'quick-start': require('./quick-start'),
    'i18n': require('./i18n'),
    'custom-theme': require('./custom-theme')
  },
  components: {
    'Basic': {
      'layout': require('./layout'),
      'color': require('./color'),
      'typography': require('./typography'),
      'icon': require('./icon'),
      'button': require('./button'),
    },
    'Form Controls': {
      'input':require('./input'),
      'input-number':require('./inputNumber'),
      'checkbox': require('./checkbox'),
      'radio':require('./radio'),
      'select':require('./select'),
      'switch':require('./switch')
    },
    "Views": {
      'card': require('./card'),
      'tag': require('./tag'),
      
    },
    "Navigation": {
      'tabs': require('./tabs'),
     },
    'Feedback':{
      'alert':require('./alert'),
      'dialog':require('./dialog'),
      'loading':require('./loading')
    }
  }
}
