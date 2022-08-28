import {addError, isValidField, removeError, validatorForm} from '../validator';
import { UserAPI } from '../api/UserAIP/UserAPI';
import Store from '../Store/Store';
import { Router } from '../Router/Router';
import { createUserInfoList } from '../api/createUserInfoList';
import Input from "../../components/input/input";

const userAPI = new UserAPI();
const store = new Store();

class UserController {
  getUserInfo() {
    userAPI.request()
      .then((res) => {
        // const userInfoList = createUserInfoList(res)
        store.set('pageSetting.children', {
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
                    value: res.phone,
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
                    value: res.display_name ?? '',
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
                    value: res.second_name,
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
                    value: res.first_name,
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
                    value: res.login,
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
                    value: res.email,
                },
            }),

        });
      });
  }
}

export { UserController };
