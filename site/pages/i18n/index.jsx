import Markdown from '../../utils/markdown';

import './style.scss';

export default class i18n extends Markdown {
  document(locale) {
   return require(`./doc/i18n.${locale}.md`);
  }
}
