import './login.scss';
import '../../globalStyles/globalStyles.scss';
import { LoginPage } from './login';
import { renderTemplate } from '../../utils/utils';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import { Form } from '../../components/form/form';
import { Input } from '../../components/input/input';
import { Label } from '../../components/label/label';

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
  labelLogin: new Label('label', {
    labelName: 'Логин',
    attr: {
      class: 'label-input',
    },
  }),
  inputLogin: new Input('input', {
    events: {
      focus: (e) => {
        console.log(e.target.tagName);
      },
      blur: (e) => { console.log('blur'); },
    },
    attr: {
      type: 'text',
      name: 'login',
      placeholder: 'логин',
      class: 'label-input__input',
    },
  }),
  labelPassword: new Label('label', {
    labelName: 'Пароль',
    attr: {
      class: 'label-input',
    },
  }),
  inputPassword: new Input('input', {
    events: {
      focus: (e) => {

      },
      blur: (e) => { console.log('blur'); },
    },
    attr: {
      type: 'password',
      name: 'password',
      placeholder: 'пароль',
      class: 'label-input__input',
    },
  }),
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
    submit: (e) => {
      e.preventDefault();
      console.log('submit');
      // isValid(e.target as HTMLFormElement);
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
