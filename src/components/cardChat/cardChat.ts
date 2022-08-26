import Block from '../../utils/Block';
import cardChatTemplate from './cardChat.hbs';
import { cardChatProps } from './types';

export class CardChat extends Block<cardChatProps> {
  render() {
    return this.compile(cardChatTemplate, this._props);
  }
}
