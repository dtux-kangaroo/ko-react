import Markdown from '../../utils/markdown';
import './style.scss';

export default class Card extends Markdown {
  document(locale) {
    return require(`./doc/card.${locale}.md`);
  }
}
