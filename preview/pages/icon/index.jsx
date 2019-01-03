import Markdown from '../../utils/markdown';

import './style.scss';

export default class Icon extends Markdown {
  document(locale) {
     return require(`./doc/icon.${locale}.md`);
  }
}

Icon.defaultProps = {
  iconList: require('./iconList')
};
