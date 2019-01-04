import Markdown from '../../utils/markdown';
import './style.scss';

export default class Checkbox extends Markdown {
  document(locale) {
    return require(`./doc/checkbox.${locale}.md`);
  }
}
