import './login.scss';
import '../../globalStyles/globalStyles.scss';
import  LoginPage  from './login';
import { renderTemplate } from '../../utils/renderTemplate';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import { Form } from '../../components/form/form';
import { Input } from '../../components/input/input';
import { Label } from '../../components/label/label';
import {
  validatorForm, isValidField, addError, removeError,
} from '../../utils/validator';
import { UserController } from '../../utils/controllers/UserController';
import { HTTPTransport } from '../../utils/HTTPTransport';
import { Link } from '../../components/link/link';
import {connect} from "../../utils/Store/connect";

// const header = new Header('header', {
//   attr: {
//     class: 'container header',
//   },
// });

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
      // UserController.login(e.target)
      // const userAPIInstance = new HTTPTransport();
      // userAPIInstance.get('https://ya-praktikum.tech/api/v2/auth/user').then(data => console.log(data))
      // let xhr = new XMLHttpRequest();
      // xhr.open('GET', 'https://ya-praktikum.tech/api/v2/auth/user')
      // xhr.responseType = 'json';
      // //xhr.setRequestHeader('Content-Type', 'application/json');
      // xhr.withCredentials = true;
      // xhr.send()
      // xhr.onload = () => console.log(xhr)

      // fetch('https://ya-praktikum.tech/api/v2/auth/signin', {
      //   method: 'POST',
      //   credentials: 'include', // Нужно подставлять куки
      //   mode: 'cors', // Работаем с CORS
      //   headers: {
      //     'content-type': 'application/json', // Данные отправляем в формате JSON
      //   },
      //   body: JSON.stringify({
      //     login: 'ERM2',
      //     password: '123SSFFdfdf2',
      //   }),
      // })
      //   .then((response) => response.text()) // Можно вытащить через .json()
      //   .then((data) => {
      //     console.log(data);
      //     return data;
      //   })
      // .then((data) => {
      //   fetch('https://ya-praktikum.tech/api/v2/auth/user', { // Получаем подробную информацию о пользователе и проверяем, что куки проставились
      //     method: 'GET',
      //     mode: 'cors',
      //     credentials: 'include',
      //   })
      //     .then((r) => r.json())
      //     .then((data) => {
      //       console.log('user', data);
      //     });
      // });

      // const resp = userAPIInstance.post(
      //   'https://ya-praktikum.tech/api/v2/auth/signin',
      //   {
      //     headers: {
      //       'content-type': 'application/json',
      //     },
      //     credentials: 'include',
      //     data: {
      //       login: 'ERM2',
      //       password: '123SSFFdfdf2',
      //     },
      //   },
      // )
      //   .then((data) => data.responseText)
      //   .then(() => {
      //     fetch('https://ya-praktikum.tech/api/v2/auth/user')
      //       .then((data) => console.log(data));
      //   })
      // ;

      // setTimeout(() => {
      //   const resp = fetch('https://ya-praktikum.tech/api/v2/auth/user')
      //     .then((data) => console.log(data));
      // }, 2000);
    },
  },
  titleForm: 'Вход',
});

const loginPage = new LoginPage('div', {
  formLogin,
  //header,
  attr: {
    class: 'container',
  },
});

//renderTemplate('#root', loginPage);
export { loginPage };
