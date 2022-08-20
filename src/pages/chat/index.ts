import './chat.scss';
import '../../globalStyles/globalStyles.scss';
import ChatPage from './chat';
import { renderTemplate } from '../../utils/renderTemplate';
import { Header } from '../../components/header/header';
import { validatorForm } from '../../utils/validator';
import { HTTPTransport } from '../../utils/HTTPTransport';
import { Button } from '../../components/button/button';

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

const chatPage = new ChatPage('div', {
  addChatBtn,
  attr: {
    class: 'container',
  },
  events: {
    submit: (e) => {
      e.preventDefault();
      // console.log(validatorForm(e.target));
    },
  },
});
const http = new HTTPTransport();
http.get('https://ya-praktikum.tech/api/v2/chats')
  .then((res) => renderChatLists(JSON.parse(res.responseText)));

function renderChatLists(list) {
  const chatList = list.map((chat) => `<li>${chat.title}</li>`);
  const chl = document.querySelector('.chat-list__users');
  chl.innerHTML = chatList.join();
}


http.get('https://ya-praktikum.tech/api/v2/auth/user')
  .then((res) => JSON.parse(res.responseText))
  .then(data => {
    http.post('https://ya-praktikum.tech/api/v2/chats/token/870', {
      headers:
          {
            'content-type':
                'application/json',
          },
      data:{}
    })
        .then(token => {

          console.log(token.response)
          const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${data.id}/870/${token.response.token}`);
          socket.addEventListener('open', () => {
            console.log('Соединение установлено');

            socket.send(JSON.stringify({
              content: 'Моё первое сообщение миру!',
              type: 'message',
            }));
          });
          socket.addEventListener('message', event => {
            console.log('Получены данные', event.data);
          });
        })

})



export { chatPage };
