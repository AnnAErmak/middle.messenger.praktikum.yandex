import './signin.scss';
import { Signin } from './signin';
import { renderTemplate } from '../../utils/renderTemplate';
import { Header } from '../../components/header/header';
import { Form } from '../../components/form/form';
import { Button } from '../../components/button/button';
import {
  addError, isValidField, removeError, validatorForm,
} from '../../utils/validator';
import { Label } from '../../components/label/label';
import { Input } from '../../components/input/input';

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
  labelEmail: new Label('label', {
    labelName: 'Почта',
    attr: {
      class: 'label-input',
    },
  }),
  inputEmail: new Input('input', {
    events: {
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
    },
    attr: {
      type: 'email',
      name: 'email',
      placeholder: 'почта',
      class: 'label-input__input',
    },
  }),
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
  labelFirstName: new Label('label', {
    labelName: 'Имя',
    attr: {
      class: 'label-input',
    },
  }),
  inputFirstName: new Input('input', {
    events: {
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
    },
    attr: {
      type: 'text',
      name: 'first_name',
      placeholder: 'имя',
      class: 'label-input__input',
    },
  }),
  labelSecondName: new Label('label', {
    labelName: 'Фамилия',
    attr: {
      class: 'label-input',
    },
  }),
  inputSecondName: new Input('input', {
    events: {
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
    },
    attr: {
      type: 'text',
      name: 'second_name',
      placeholder: 'фамилия',
      class: 'label-input__input',
    },
  }),
  labelPhone: new Label('label', {
    labelName: 'Телефон',
    attr: {
      class: 'label-input',
    },
  }),
  inputPhone: new Input('input', {
    events: {
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
    },
    attr: {
      type: 'phone',
      name: 'phone',
      placeholder: 'телефон',
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
  labelPasswordAgain: new Label('label', {
    labelName: 'Пароль (еще раз)',
    attr: {
      class: 'label-input',
    },
  }),
  inputPasswordAgain: new Input('input', {
    events: {
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
    },
    attr: {
      type: 'password',
      name: 'passwordAgain',
      placeholder: 'пароль (еще раз)',
      class: 'label-input__input',
    },
  }),
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
      console.log(validatorForm(e.target));
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
 export {signinPage}