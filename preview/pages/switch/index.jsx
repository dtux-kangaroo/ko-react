import Markdown from '../../utils/markdown';
import './style.scss';

export default class Switch extends Markdown {
  document(locale) {
    return require(`./doc/switch.${locale}.md`);
  }
}
