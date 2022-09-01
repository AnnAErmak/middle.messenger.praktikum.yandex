import './chat.scss';
import '../../globalStyles/globalStyles.scss';
import Block from '../../utils/Block';
import chatTemplate from './chat.hbs';
import { ChatPageProps } from './types';
import connect from '../../utils/Store/connect';
import { withChat } from '../../utils/Store/connect2';
import { validatorForm } from '../../utils/validator';
import ChatController from '../../utils/controllers/ChatController';
import { Button } from '../../components/button/button';
import Router from '../../utils/Router/Router';
import { UserController } from '../../utils/controllers/UserController';
import Store from '../../utils/Store/Store';

const chatController = new ChatController();
const userController = new UserController();

class ChatPage extends Block<ChatPageProps> {
  constructor(tag = 'div', props = {}) {
    super(tag, props);
    userController.getUserInfo();
    chatController.getChats();
  }

  render() {
    return this.compile(chatTemplate, this._props);
  }
}

export default connect(ChatPage, (state) => ({
  children: {...state?.chatPage}
  //   chatList: state?.chatPage?.chatList,
  //   chatMassages: state?.chatPage?.chatMassages,
  // },
}));
// export default withChat(ChatPage);
// window.onpopstate = (e => {
//   e.preventDefault()
//   console.log('repet')
// });
// Window.s = new Store().getState()
