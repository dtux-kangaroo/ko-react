import Markdown from '../../utils/markdown';
import './style.scss';

export default class Input extends Markdown {
  document(locale) {
    return require(`./doc/input.${locale}.md`);
  }
}
