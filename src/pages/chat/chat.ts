import Block from '../../utils/Block';
import chatTemplate from './chat.hbs';
import { ChatPageProps } from './types';
import connect from '../../utils/Store/connect';



 class ChatPage extends Block<ChatPageProps> {
  render() {
    return this.compile(chatTemplate, this._props);
  }
}

export default connect(ChatPage, (state) => {
  return { ...state?.chatPage}
});
