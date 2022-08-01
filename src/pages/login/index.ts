import './login.css';
import '../../globalStyles/globalStyles.scss';
import LoginPage from './login';
import { getInputs, renderTemplate } from '../../utils/utils';
import { isValid } from '../../utils/validator';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Form from '../../components/form/form';
import { inputsLogin } from '../../components/input/inputTypes';

const header = new Header('header', {
  attr: {
    class: 'container header',
  },
});

const button = new Button('button', {
  textButton: 'Войти',
  attr: {
    class: 'button',
    type: 'submit',
  },

});

const formLogin = new Form('form', {
  inputs: getInputs(inputsLogin),
  button,
  formName: 'login',
  hrefForm: './signin.html',
  linkName: 'Регистрация',
  attr: {
    class: 'form-login',
    method: 'get',
    action: '#',
  },
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      isValid(e.target);
    },
  },
  titleForm: 'Вход',
});

const loginPage = new LoginPage('div', {
  formLogin,
  header,
  attr: {
    class: 'container',
  },

});

renderTemplate('#root', loginPage);
