import Markdown from '../../utils/markdown';

import './style.scss';

export default class CustomTheme extends Markdown {
  document(locale) {
    return require(`./doc/custom-theme.${locale}.md`);
  }
}
