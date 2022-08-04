import './input.scss';
import Block from '../../utils/Block';
import { InputProps } from './types';

export default class Input extends Block<InputProps> {
  render() {
    return this.compile(() => '', this._props);
  }
}
