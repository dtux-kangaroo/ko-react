import Markdown from '../../utils/markdown';
import './style.scss';

export default class Tabs extends Markdown {
  document(locale) {
    return require(`./doc/tag.${locale}.md`);
  }
}
