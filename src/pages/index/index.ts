import { Header } from '../../components/header/header';
import { renderTemplate } from '../../utils/renderTemplate';

const header = new Header('header', {
  attr: {
    class: 'container header',
  },
});
renderTemplate('#root', header);
