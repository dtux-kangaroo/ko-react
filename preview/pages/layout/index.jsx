import Markdown from '../../utils/markdown';

import './style.scss';

export default class Layout extends Markdown {
  document(locale) {
     return require(`./doc/layout.${locale}.md`);
  }
}
