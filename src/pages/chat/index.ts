import './chat.scss';
import '../../globalStyles/globalStyles.scss';
import ChatPage from './chat';
import { renderTemplate } from '../../utils/renderTemplate';
import { Header } from '../../components/header/header';
import {validatorForm} from '../../utils/validator';

const header = new Header('header', {
  attr: {
    class: 'container header',
  },
});
const chatPage = new ChatPage('div', {
  header,
  attr: {
    class: 'container',
  },
  events: {
    submit: (e) => {
      e.preventDefault();
      console.log(validatorForm(e.target));
    },
  },
});

renderTemplate('#root', chatPage);
