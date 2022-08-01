import './button.scss';
import buttonTemplate from './button.hbs';
import Block from '../../utils/Block';

export default class Button extends Block {
  render() {
    return this.compile(buttonTemplate, this._props);
  }
}
