import ChatController from '../controllers/ChatController';
import { CardChat } from '../../components/cardChat/cardChat';

export function createChatList(data) {
  const chatController = new ChatController();
  return JSON.parse(data.response).map((item) => new CardChat('div', {
    titleChat: item.title,
    attr: {
      class: 'wrapper-card-chat ',
      id: item.id,
    },
    events: {
      click: () => {
        chatController.getChatMessages(item.id);
      },
    },
  }));
}
