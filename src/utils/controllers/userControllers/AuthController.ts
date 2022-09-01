import { AuthUserAPI } from '../../api/authAPI/AuthAPI';
import { validatorForm } from '../../validator';
import { UserAPI } from '../../api/UserAIP/UserAPI';
import Store from '../../Store/Store';
import { router } from '../../../pages/index';
import { ChatListAPI } from '../../api/chatAPI/ChatListAPI';
import { createChatList } from '../../api/createChatList';
import { SignupUserAPI } from '../../api/authAPI/SignupUserAPI';
import Router from '../../Router/Router';
import {UserController} from '../UserController'
const store = new Store();

const userController = new UserController()
const authUserAPI = new AuthUserAPI();
const signUPAPI = new SignupUserAPI();
const chatAPI = new ChatListAPI();

export class AuthController {
  login(form) {
    if (!validatorForm(form)) return;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    authUserAPI.create({ login, password })
      .then(() => chatAPI.request())
      .then((data) => {
        const chatList = createChatList(data);
        store.set('chatPage.children.chatList', chatList);
        new Router().go('/messenger');
      });
  }

  getAuthUser() {
    return signUPAPI.request();
  }

  signin(form) {
    if (!validatorForm(form)) return;
    const data = {
      first_name: form.elements.first_name.value,
      second_name: form.elements.second_name.value,
      password: form.elements.password.value,
      login: form.elements.login.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
    };
    signUPAPI.create(data).then((res) => {
      if(res.status === 200) {
        userController.getUserInfo().then(() => new Router().go('/messenger') )

      }
    });
  }
}
