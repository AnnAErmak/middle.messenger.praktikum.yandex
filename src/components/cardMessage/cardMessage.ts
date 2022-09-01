import Block from '../../utils/Block';
import cardMessageTemplate from './cardMessage.hbs';
import './cardMessage.scss';
import { cardChatMessageProps } from './types';

export class CardMessage extends Block<cardChatMessageProps> {
  render() {
    return this.compile(cardMessageTemplate, this._props);
  }
}
