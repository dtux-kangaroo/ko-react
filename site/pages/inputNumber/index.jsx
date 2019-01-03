import Markdown from '../../utils/markdown';
import './style.scss';

export default class InputNumber extends Markdown {
  document(locale) {
    return require(`./doc/inputNumber.${locale}.md`);
  }
}
