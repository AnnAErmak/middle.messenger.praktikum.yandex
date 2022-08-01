import './signin.scss';
import Signin from './signin';
import { getInputs, renderTemplate } from '../../utils/utils';
import Header from '../../components/header/header';
import Form from '../../components/form/form';
import Button from '../../components/button/button';
import { isValid } from '../../utils/validator';
import { inputs } from '../../components/input/inputTypes';

const header = new Header('header', {
  attr: {
    class: 'container header',
  },
});

const button = new Button('button', {
  textButton: 'Зарегистрироваться',
  attr: {
    class: 'button',
    type: 'submit',
  },

});

const formRegistration = new Form('form', {
  inputs: getInputs(inputs),
  button,
  formName: 'signin',
  hrefForm: './login.html',
  linkName: 'Войти',
  attr: {
    class: 'form-signin',
    method: 'post',
    action: '#',
  },
  events: {
    submit: (e) => {
      e.preventDefault();
      isValid(e.target);
    },
  },
  titleForm: 'Регистрация',
});

const signinPage = new Signin('div', {
  formRegistration,
  header,
  attr: {
    class: 'container',
  },

});

renderTemplate('#root', signinPage);
