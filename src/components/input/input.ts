import './input.scss';
import inputTemplate from './input.hbs';
import Block from '../../utils/Block';
import { InputProps } from './types';

export default class Input extends Block<InputProps> {
  render() {
    return this.compile(inputTemplate, this._props);
  }
}
