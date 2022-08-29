import { AuthUserAPI } from '../../api/authAPI/AuthAPI';
import { validatorForm } from '../../validator';
import { UserAPI } from '../../api/UserAIP/UserAPI';
import Store from '../../Store/Store';
import { router } from '../../../pages/index';
import { ChatListAPI } from '../../api/chatAPI/ChatListAPI';
import {createChatList} from "../../api/createChatList";
import {SignupUserAPI} from "../../api/authAPI/SignupUserAPI";

const store = new Store();

const authUserAPI = new AuthUserAPI();
const signUPAPI = new SignupUserAPI()
const chatAPI = new ChatListAPI();


export class AuthController {
  login(form) {
    if (!validatorForm(form)) return;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    authUserAPI.create({ login, password })
      .then(() => {
        return chatAPI.request();
      })
      .then((data) => {
          const chatList = createChatList(data);
          store.set('chatPage.children.chatList', chatList);
          router.go('/messenger')
      });
  }
  getAuthUser(){
      return signUPAPI.request()
  }
}
