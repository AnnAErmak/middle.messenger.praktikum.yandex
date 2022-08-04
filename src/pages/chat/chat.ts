import Block from '../../utils/Block';
import chatTemplate from './chat.hbs';
import { ChatPageProps } from './types';

export default class ChatPage extends Block<ChatPageProps> {
  render() {
    return this.compile(chatTemplate, this._props);
  }
}
