import './button.scss';
import buttonTemplate from './button.hbs';
import Block from '../../utils/Block';
import { ButtonProps } from './types';

export default class Button extends Block<ButtonProps> {
  render() {
    return this.compile(buttonTemplate, this._props);
  }
}
