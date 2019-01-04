import Markdown from '../../utils/markdown';

import './style.scss';

export default class Select extends Markdown {

  document(locale) {
    //console.log(locale,'locale');
    return require(`./doc/select.${locale}.md`);
  }
}
