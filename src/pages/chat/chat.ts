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
  chatController.getChats()

});
