import './chat.scss';
import '../../globalStyles/globalStyles.scss';
import Block from '../../utils/Block';
import chatTemplate from './chat.hbs';
import { ChatPageProps } from './types';
import connect from '../../utils/Store/connect';
import { withChat } from '../../utils/Store/connect2';
import { validatorForm } from '../../utils/validator';
import ChatController from '../../utils/controllers/ChatController';
import { Button } from '../../components/button/button';
import Router from '../../utils/Router/Router';
import {UserController} from "../../utils/controllers/UserController";
import Store from "../../utils/Store/Store";

const chatController = new ChatController();
const userController = new UserController()
/// //////Добавление чата
const addChatBtn = new Button('button', {
  textButton: 'Добавить чат',
  attr: {
    class: 'add-chat-btn',
    type: '',
  },
  events: {
    click: (e) => {
      chatController.addChat();
    },
  },
});
const removeChatBtn = new Button('button', {
  textButton: 'Удалить чат',
  attr: {
    class: 'remove-chat-btn',
    type: '',
  },
  events: {
    click: (e) => {
      chatController.removeChat();
    },
  },
});
/// ////////////Поиск пользователей//////////
const addUserBtn = new Button('button', {
  textButton: 'Добавить пользователя',
  attr: {
    class: 'search-user-btn',
    type: '',
  },
  events: {
    click: (e) => {
      chatController.addUser();
    },
  },
});

const removeUserBtn = new Button('button', {
  textButton: 'Удалить пользователя',
  attr: {
    class: 'remove-user-btn',
    type: '',
  },
  events: {
    click: (e) => {
      chatController.removeUser();
    },
  },
});
const linkSetings = new Button('button', {
  textButton: 'Профиль',
  attr: {
    class: '',
    type: 'button',
  },
  events: {
    click: (e) => {
      // e.preventDefault()
      new Router().go('/settings');
    },
  },

});
class ChatPage extends Block<ChatPageProps> {
  constructor(tag = 'div', props = {}) {
    props.children = {
      addChatBtn,
      removeChatBtn,
      addUserBtn,
      removeUserBtn,
      linkSetings,
      chatMassages: [],
      chatList: [],
    },
        props.attr = {
      class: 'container',
    },
    //     props.events['submit'] = (e) => {
    //   e.preventDefault();
    //   if (validatorForm(e.target)) {
    //     chatController.sendMessage(e.target.elements.message.value);
    //   }
    // },
        //userController.getUserInfo();


    super(tag, props);
    chatController.getChats();
  }

  render() {
    return this.compile(chatTemplate, this._props);
  }
}

// export default connect(ChatPage, (state) => {
//   return { ...state?.chatPage}
// });
export default withChat(ChatPage);
window.onpopstate = (e => {
  e.preventDefault()
  console.log('repet')
});
Window.s = new Store().getState()