import Block from '../../utils/Block';
import chatTemplate from './chat.hbs';

export default class ChatPage extends Block {
  render() {
    return this.compile(chatTemplate, this._props);
  }
}
