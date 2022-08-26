import './chat.scss';
import '../../globalStyles/globalStyles.scss';
import ChatPage from './chat';
import { renderTemplate } from '../../utils/renderTemplate';
import { Header } from '../../components/header/header';
import { validatorForm } from '../../utils/validator';
import { HTTPTransport } from '../../utils/HTTPTransport';
import { Button } from '../../components/button/button';
import connect from '../../utils/Store/connect';
import Block from '../../utils/Block';
import { ChatPageProps } from './types';
import chatTemplate from './chat.hbs';
import ChatController from '../../utils/controllers/ChatController';
import { Link } from '../../components/link/link';
import {Router} from "../../utils/Router/Router";

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
    Router.go('/setings')
  },

});
export const chatPage = new ChatPage('div', {
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

/// /////Открываем страницу с чатами
// const http = new HTTPTransport();
// http.get('https://ya-praktikum.tech/api/v2/chats')
//   .then((res) => renderChatLists(JSON.parse(res.responseText)));
//
// function renderChatLists(list) {
//   const chatList = list.map((chat) => `<li id =${chat.id} class="item-chat">${chat.title}</li>`);
//   const chl = document.querySelector('.chat-list__users');
//   chl.innerHTML = chatList.join('');
//
//   chl.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//       http.post(`https://ya-praktikum.tech/api/v2/chats/token/${e.target.id}`, { data: {} })
//         .then((token) => token.response.token)
//         .then((t) => {
//           const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/72519/${e.target.id}/${t}`);
//           const chatObj = {
//             id: e.target.id,
//             token: t,
//           };
//           localStorage.setItem('chatObj', JSON.stringify(chatObj));
//           socket.addEventListener('open', () => {
//             socket.send(JSON.stringify({
//               content: '0',
//               type: 'get old',
//             }));
//           });
//           socket.addEventListener('message', (event) => {
//             const messages = JSON.parse(event.data).map((item) => `<div><h3>${item.user_id}</h3><div>${item.content}</div></div>`);
//             const chat = document.querySelector('.chat-messages__messages');
//             chat.innerHTML = messages.join('');
//           });
//         });
//     }
//   });
// }

/// ////////////Поиск пользователей//////////

// const input = document.querySelector('.search-form__txt')
// console.log(input)
// input.addEventListener('change', (e) => {
//   console.log('change')
// })

// export { chatPage };
