import './login.scss';
import '../../globalStyles/globalStyles.scss';
import  {LoginPage}  from './login';
import { Button } from '../../components/button/button';
import  Form  from '../../components/form/form';
import  Input  from '../../components/input/input';
import { Label } from '../../components/label/label';
import {
  validatorForm, isValidField, addError, removeError,
} from '../../utils/validator';
import { UserController } from '../../utils/controllers/UserController';
import { Link } from '../../components/link/link';
import {connect} from "../../utils/Store/connect";

const button = new Button('button', {
  textButton: 'Войти',
  attr: {
    class: 'button',
    type: 'submit',
  },

});
const link = new Link('a', {
  linkName: 'Регистрация',
  attr: {
    class: 'form-login__link',
    href: '/sign-up',
  },
});

const formLogin = new Form('form', {
  children: {
  labelLogin: new Label('label', {
    labelName: 'Логин',
    attr: {
      class: 'label-input',
    },
  }),
  inputLogin: new Input('input', {
    events: {
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
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
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
    },
    attr: {
      type: 'password',
      name: 'password',
      placeholder: 'пароль',
      class: 'label-input__input',
    },
  }),
  button,
  link,
},
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
      const loginController = new UserController();
      loginController.login(e.target);
    },
  },
  titleForm: 'Вход',
});

const loginPage = new LoginPage('div', {
  children: {
    formLogin,
  },
  attr: {
    class: 'container',
  },
});

export { loginPage };
