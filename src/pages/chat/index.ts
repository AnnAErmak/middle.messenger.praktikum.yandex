import './chat.scss';
import '../../globalStyles/globalStyles.scss';
import ChatPage from './chat';
import { validatorForm } from '../../utils/validator';
import { Button } from '../../components/button/button';
import ChatController from '../../utils/controllers/ChatController';
import { Link } from '../../components/link/link';
import {Router} from "../../utils/Router/Router";
import Store from "../../utils/Store/Store";

const chatController = new ChatController();

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
const linkSetings = new Link('a', {
  linkName: 'Профиль',
  attr: {
    class: '',
    href: '/settings',
  },
  click: (e) => {
    e.preventDefault()
    Router.go('/settings')
  },

});
const chatPage = new ChatPage('div', {
  children: {
    addChatBtn,
    removeChatBtn,
    addUserBtn,
    removeUserBtn,
    linkSetings,
    chatMassages: [],
    chatList: [],
  },
  attr: {
    class: 'container',
  },
  events: {
    submit: (e) => {
      e.preventDefault();
      if (validatorForm(e.target)) {
        chatController.sendMessage(e.target.elements.message.value);
      }
    },
  },
});

Window.s = new Store().getState()
export {chatPage}