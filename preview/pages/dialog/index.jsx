import Markdown from '../../utils/markdown';

import './style.scss';

export default class Dialog extends Markdown {

  document(locale) {
    //console.log(locale,'locale');
    return require(`./doc/dialog.${locale}.md`);
  }
}
