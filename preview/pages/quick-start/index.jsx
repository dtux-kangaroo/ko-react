import Markdown from '../../utils/markdown';

export default class QuickStart extends Markdown {
  document(locale) {
     return require(`./doc/quick-start.${locale}.md`);
  }
}
