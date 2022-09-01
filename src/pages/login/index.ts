import './login.scss';
import '../../globalStyles/globalStyles.scss';
import  {LoginPage}  from './login';
import { Button } from '../../components/button/button';
import FormLogin from "../../components/formLogin/formLogin";
import  Input  from '../../components/input/input';
import { Label } from '../../components/label/label';
import {
  validatorForm, isValidField, addError, removeError,
} from '../../utils/validator';
import {AuthController} from '../../utils/controllers/userControllers/AuthController'
import { Link } from '../../components/link/link';
import Router from "../../utils/Router/Router";


const button = new Button('button', {
  textButton: 'Войти',
  attr: {
    class: 'button',
    type: 'submit',
  },

});
const buttonReg = new Button('button', {
  textButton: 'Зарегистрироваться',
  attr: {
    class: 'button',
    type: 'button',
  },
events:{
    click: () => new Router().go('/sign-up')
}
});

const formLogin = new FormLogin('form', {
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
      const authController = new AuthController();
      authController.login(e.target);
    },
  },
  titleForm: 'Вход',
});

const loginPage = new LoginPage('div', {
  children: {
    formLogin,
    buttonReg,
  },
  attr: {
    class: 'container',
  },
});

export { loginPage };
