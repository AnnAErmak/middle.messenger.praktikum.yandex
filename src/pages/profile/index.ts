import './profile.scss';
import '../../globalStyles/globalStyles.scss';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import Form from '../../components/form/form';
import Profile from './profile';
import Input from '../../components/input/input';
import { Label } from '../../components/label/label';
import {
  addError, isValidField, removeError, validatorForm,
} from '../../utils/validator';
import { UserController } from '../../utils/controllers/UserController';
import Store from '../../utils/Store/Store';
import { ChangeUserProfileController } from '../../utils/controllers/userControllers/ChangeUserProfileController';

// const userController = new UserController();
 const userProfileController = new ChangeUserProfileController();
// userController.getUserInfo();
// userProfileController.getUserAvatar();
//
// const store = new Store();

const buttonData = new Button('button', {
  textButton: 'Изменить данные',
  attr: {
    class: 'button-change-data',
    type: '',
  },

});
const buttonPass = new Button('button', {
  textButton: 'Изменить пароль',
  attr: {
    class: 'button-change-pass',
    type: 'button',
  },
  events: {
    click: () => {
      const hidden = document.querySelectorAll('.hidden');
      hidden.forEach((el) => el.classList.remove('hidden'));
    },
  },
});
const changePasswordBtn = new Button('button', {
  textButton: 'Применить',
  attr: {
    class: 'button-change-pass hidden',
    type: 'button',
  },
  events: {
    click: (e) => {
      e.stopImmediatePropagation();
      const oldPassword = document.querySelector('.password');
      const newPassword = document.querySelector('.newPassword');
      userProfileController.changePassword({ oldPassword, newPassword });
    },
  },
});
const logoutBtn = new Button('button', {
  textButton: 'LogOut',
  attr: {
    class: 'button-LogOut',
    type: 'button',
  },
  events: {
    click: (e) => {
      userController.userLogOut()

    },
  },
});

const formProfile = new Form('form', {
  children: {
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
        value: 'test@mail.ru', // state?.email ??
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
    labelPassword: new Label('label', {
      labelName: 'Старый пароль',
      attr: {
        class: 'label-input hidden',
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
        class: 'label-input__input password hidden',
      },
    }),
    labelNewPassword: new Label('label', {
      labelName: 'Новый пароль',
      attr: {
        class: 'label-input hidden',
      },
    }),
    inputNewPassword: new Input('input', {
      events: {
        focus: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
        blur: (e) => ((!isValidField(e.target.name, e.target.value)) ? addError(e.target) : removeError(e.target)),
      },
      attr: {
        type: 'password',
        name: 'newPassword',
        placeholder: 'пароль',
        class: 'label-input__input newPassword hidden',
      },
    }),
    button: buttonData,
    buttonFixPass: buttonPass,
    changePasswordBtn,

  },
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
      userProfileController.putUserProfile(e.target);
    },
  },

});

const profilePage = new Profile('div', {
  children: {
    formProfile,
    logoutBtn,
  },
  pathAva: '',
  attr: {
    class: 'container',
  },
  events: {
    submit: (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      userProfileController.changeAvatar(form);
    },
  },
});

Window.p = profilePage;
Window.s = new Store();
Window.f = formProfile;

export { profilePage };
