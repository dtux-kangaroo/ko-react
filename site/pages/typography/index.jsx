import Markdown from '../../utils/markdown';

import './style.scss';

export default class Typography extends Markdown {
  documentShouldTransform() {
    return false;
  }

  document(locale) {
     return require(`./doc/typography.${locale}.md`);
  }
}
