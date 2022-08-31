import ChatController from '../controllers/ChatController';
import { CardChat } from '../../components/cardChat/cardChat';

export function createChatList(data) {
  const chatController = new ChatController();
  return JSON.parse(data.response).map((item) => new CardChat('div', {
    titleChat: item.title,
    attr: {
      class: 'wrapper-card-chat',
      id: item.id,
      'data-id': item.id,
    },
    events: {
      click: (e) => {
        chatController.getChatMessages(item.id)
        //.then((res) =>{
          //console.log(res)
          // const cardChat = document.querySelectorAll('.wrapper-card-chat')
          // cardChat.forEach(card => {
          //   card.classList.remove('selected')
          // })
          // const id = e.target.dataset.id
          // const selectCard = document.getElementById(id)
          // selectCard.classList.add('selected')
       // })
      },
    },
  }));
}
