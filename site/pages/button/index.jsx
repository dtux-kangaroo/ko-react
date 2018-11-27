import Markdown from '../../utils/markdown';

import './style.scss';

export default class Button extends Markdown {

  document(locale) {
    console.log(locale,'locale');
    return require(`./doc/button.${locale}.md`);
  }
}
