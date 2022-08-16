import './profile.scss';
import '../../globalStyles/globalStyles.scss';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import { Form } from '../../components/form/form';
import { renderTemplate } from '../../utils/renderTemplate';
import { Profile } from './profile';
import { Input } from '../../components/input/input';
import { Label } from '../../components/label/label';
import {addError, isValidField, removeError, validatorForm} from "../../utils/validator";

const header = new Header('header', {
  attr: {
    class: 'container header',
  },
});

const buttonData = new Button('button', {
  textButton: 'Изменить данные',
  attr: {
    class: 'button-change-data',
    type: 'submit',
  },

});
const buttonPass = new Button('button', {
  textButton: 'Изменить пароль',
  attr: {
    class: 'button-change-pass',
    type: '',
  },

});

const formProfile = new Form('form', {
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
      value: 'batman89@arkham.ru',
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
      value: 'city_hero',
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
      value: 'Иван',
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
      value: 'Иванов',
    },
  }),
  labelChatName: new Label('label', {
    labelName: 'Имя в чате',
    attr: {
      class: 'label-input',
    },
  }),
  inputChatName: new Input('input', {
    events: {
      focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
    },
    attr: {
      type: 'text',
      name: 'chat_name',
      placeholder: 'имя в чате',
      class: 'label-input__input',
      value: 'City hero',
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
      value: '+0682713737',
    },
  }),
  button: buttonData,
  buttonFixPass: buttonPass,
  formName: 'profile',
  hrefForm: './chat.html',
  linkName: 'Выйти',
  attr: {
    class: 'form-profile',
    method: 'get',
    action: '#',
  },
  events: {
    submit: (e) => {
      e.preventDefault();
      console.log(validatorForm(e.target));
    },
  },

});

const profilePage = new Profile('div', {
  formProfile,
  header,
  attr: {
    class: 'container',
  },

});

renderTemplate('#root', profilePage);

export {profilePage}