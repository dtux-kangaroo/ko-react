import Markdown from '../../utils/markdown';

import './style.scss';

export default class Loading extends Markdown {
  document(locale) {
     return require(`./doc/loading.${locale}.md`);
  }
}
