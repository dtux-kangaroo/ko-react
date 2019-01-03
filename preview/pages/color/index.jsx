import Markdown from '../../utils/markdown';

import './style.scss';

export default class Color extends Markdown {
  document(locale) {
    return require(`./doc/color.${locale}.md`);
  }
}
