import Markdown from '../../utils/markdown';

import './style.scss';

export default class Alert extends Markdown {

  document(locale) {
    //console.log(locale,'locale');
    return require(`./doc/alert.${locale}.md`);
  }
}
