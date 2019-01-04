import Markdown from '../../utils/markdown';
import './style.scss';

export default class Radio extends Markdown {
  document(locale) {
    return require(`./doc/radio.${locale}.md`);
  }
}
