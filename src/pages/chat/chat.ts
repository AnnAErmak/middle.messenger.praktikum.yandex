import Block from '../../utils/Block';
import chatTemplate from './chat.hbs';
import { ChatPageProps } from './types';
import connect from '../../utils/Store/connect';
import { HTTPTransport } from '../../utils/HTTPTransport';
import Store from '../../utils/Store/Store';
import { Button } from '../../components/button/button';
import ChatController from "../../utils/controllers/ChatController";

const chatController = new ChatController()

class ChatPage extends Block<ChatPageProps> {
  render() {
    return this.compile(chatTemplate, this._props);
  }
}

const store = new Store();
const state = store.getState();
export default connect(ChatPage, () => {
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
          click: () => chatController.getChatMessages(item.id),
        },
      }));
      store.set('chatPage.children.chatList', chatList);
      return store.getState();
    });
});
