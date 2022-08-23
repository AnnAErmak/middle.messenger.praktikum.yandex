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

/// //////Добавление чата
const addChatBtn = new Button('button', {
  textButton: 'Добавить чат',
  attr: {
    class: 'add-chat-btn',
    type: '',
  },
  events: {
    click: (e) => {
      const modal = document.querySelector('.add-chat-modal');
      modal.style.display = 'block';
      const addChat = document.querySelector('.add-chat');
      const btnCancel = document.querySelector('.btn-cancel');
      const titleChat = document.querySelector('.title-chat');
      addChat.addEventListener('click', () => {
        if (!titleChat.value) return;
        const http = new HTTPTransport();
        http.post('https://ya-praktikum.tech/api/v2/chats', {
          headers: {
            'content-type': 'application/json',
          },
          data: {
            title: titleChat.value,
          },
        })
          .then(() => {
            http.get('https://ya-praktikum.tech/api/v2/chats')
              .then((res) => renderChatLists(JSON.parse(res.responseText)));
          });

        modal.style.display = 'none';
      });
      btnCancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    },
  },
});
//console.log(addChatBtn)
/// //////Добавление чата конец
/// ////////////Поиск пользователей//////////
const searchUserBtn = new Button('button', {
  textButton: 'Добавить пользователя',
  attr: {
    class: 'search-user-btn',
    type: '',
  },
  events: {
    click: (e) => {
      const modal = document.querySelector('.sear-form');
      modal.style.display = 'block';
      const input = document.querySelector('.sear-input');
      const btnCancel = document.querySelector('.btn-cancel');
      // const titleChat = document.querySelector('.title-chat');
      input.addEventListener('input', (e) => {
        const http = new HTTPTransport();
        http.post('https://ya-praktikum.tech/api/v2/user/search', {
          headers: {
            'content-type': 'application/json',
          },
          data: {
            login: e.target.value,
          },
        })
          .then((users) => {
            const user = users.response.map((el) => `<div id= ${el.id}>${el.login}</div>`);
            const div = document.querySelector('.sear-res');
            div.innerHTML = user.join('');
            div.addEventListener('click', (e) => {
              e.stopPropagation();
              console.log(e.target.id);
              const us = [e.target.id];
              const chatObj = JSON.parse(localStorage.getItem('chatObj'));
              http.put('https://ya-praktikum.tech/api/v2/chats/users', {
                headers: {
                  'content-type': 'application/json',
                },
                data: {
                  users: [58320],
                  chatId: 871,
                },
              });
            });
          });
        //
        // modal.style.display = 'none';
      });
      btnCancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    },
  },
});
/// ////////////Поиск пользователей конец//////////

/// /////Создаем страницу/////////

export const chatPage = new ChatPage('div', {
  children:{
    addChatBtn,
    searchUserBtn,
    massagesList: [
      new Button('button', {
        textButton: 'Б5',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б5")}}),
      new Button('button', {
        textButton: 'Б2',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б6")}}),
      new Button('button', {
        textButton: 'Б1',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б6")}}),
      new Button('button', {
        textButton: 'Б2',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б7")}})
    ],
    chatList: [
      new Button('button', {
        textButton: 'Б5',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б5")}}),
      new Button('button', {
        textButton: 'Б6',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б6")}}),
      new Button('button', {
        textButton: 'Б7',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б7")}}),
      new Button('button', {
        textButton: 'Б8',
        attr: {
          class: 'search-user-btn',
          type: '',
        },
        events:{click: (e) => console.log("Б8")}})
    ],
  },
  attr: {
    class: 'container',
  },
  events: {
    submit: (e) => {
      e.preventDefault();
      if (validatorForm(e.target)) {
        const chatObj = JSON.parse(localStorage.getItem('chatObj'));
        console.log(chatObj);
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/72519/${chatObj.id}/${chatObj.token}`);
        socket.addEventListener('open', () => {
          console.log('click');
          socket.send(JSON.stringify({
            content: 'Моё второе сообщение миру!',
            type: 'message',
          }));
        });
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
