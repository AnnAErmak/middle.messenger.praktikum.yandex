import { HTTPTransport } from '../HTTPTransport';
import { Button } from '../../components/button/button';
import Store from '../Store/Store';

const http = new HTTPTransport();
const store = new Store();
export default class ChatController {
  getChatMessages(idChat) {
    http.post(`https://ya-praktikum.tech/api/v2/chats/token/${idChat}`, { data: {} })
      .then((token) => token.response.token)
      .then((t) => {
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/72519/${idChat}/${t}`);

        socket.addEventListener('open', () => {
          store.set('chatPage.token', t);
          store.set('chatPage.idChat', idChat);
          // setInterval(()=> {
          //     socket.send(JSON.stringify({
          //     type: 'ping',
          //     }));
          //
          // console.log('wss:// ping');
          // }, 30000)
          socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          }));
        });
        socket.addEventListener('message', (event) => {
          const messages = JSON.parse(event.data).map((item) => new Button('button', {
            textButton: item.content,
            attr: {
              class: 'add-chat-btn',
              id: item.user_id,
              type: '',
            },
          }));
          store.set('chatPage.children.chatMassages', messages);
        });
      });
  }

  sendMessage(message) {
    const state = store.getState();
    if (!state.chatPage.token) return;
    const { idChat } = state.chatPage;
    const { token } = state.chatPage;
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/72519/${idChat}/${token}`);
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({
        content: message,
        type: 'message',
      }));
      socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
      socket.addEventListener('message', (event) => {
        if (!Array.isArray(JSON.parse(event.data))) return;
        const messages = JSON.parse(event.data).map((item) => new Button('button', {
          textButton: item.content,
          attr: {
            class: 'add-chat-btn',
            id: item.user_id,
            type: '',
          },
        }));
        store.set('chatPage.children.chatMassages', messages);
      });
    });
  }

  getChats() {
    const http = new HTTPTransport();
    http.get('https://ya-praktikum.tech/api/v2/chats')
      .then((res) => {
        const chatList = JSON.parse(res.response).map((item) => new Button('button', {
          textButton: item.title,
          attr: {
            class: 'add-chat-btn',
            type: '',
          },
          events: {
            click: () => this.getChatMessages(item.id),
          },
        }));
        store.set('chatPage.children.chatList', chatList);
        // return store.getState();
      });
  }

  addChat() {
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
          this.getChats();
        });
      modal.style.display = 'none';
    });
    btnCancel.addEventListener('click', () => {
      console.log('close');
      modal.style.display = 'none';
    });
  }

  removeChat() {
    const state = store.getState();
    const chatId = state.chatPage.idChat;
    if (!state.chatPage.idChat) console.log('Выберите чат, который хотите удалить');
    http.delete('https://ya-praktikum.tech/api/v2/chats', {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        chatId,
      },
    })
      .then(() => this.getChats());
  }

  addUser() {
    const modal = document.querySelector('.sear-form');
    modal.style.display = 'block';
    const input = document.querySelector('.sear-input');
    const btnCancel = document.querySelector('.btn-cancel');
    input.addEventListener('input', (e) => {
      const http = new HTTPTransport();
      const state = store.getState()
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
            e.stopImmediatePropagation();
            const userId = (e.target.id).split();
            const chatId = state.chatPage.idChat
            console.log(userId, chatId)
            if(!userId || !chatId) return
            http.put('https://ya-praktikum.tech/api/v2/chats/users', {
              headers: {
                'content-type': 'application/json',
              },
              data: {
                users: userId,
                chatId: chatId,
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
  }

  removeUser() {
    const idChat = store.getState().chatPage.idChat

    console.log(idChat)
    const modal = document.querySelector('.sear-form');
    modal.style.display = 'block';
    const div = document.querySelector('.sear-res');
    http.get(`https://ya-praktikum.tech/api/v2/chats/${idChat}/users`)
        .then(res =>{
          const users = JSON.parse(res.response)
          const userHtml = users.map((el) => `<div id= ${el.id}>${el.login}</div>`)
          div.innerHTML = userHtml
          div.addEventListener('click', (e) => {
            const userId = (e.target.id).split();
            http.delete(`https://ya-praktikum.tech/api/v2/chats/users`, {
              headers: {
                'content-type': 'application/json',
              },
              data: {
                users: userId,
                chatId: idChat,
              },
            })
          })
        })
  }
}
