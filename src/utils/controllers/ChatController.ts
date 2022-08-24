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

  sendMessage() {
      const state = store.getState()
      console.log(state)
      if (!state.chatPage.token) return

      // const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/72519/${chatObj.id}/${chatObj.token}`);
      // socket.addEventListener('open', () => {
      //     console.log('click');
      //     socket.send(JSON.stringify({
      //         content: 'Моё второе сообщение миру!',
      //         type: 'message',
      //     }));
      // });
  }
}
