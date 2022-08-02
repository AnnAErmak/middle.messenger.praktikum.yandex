import './input.scss';
import inputTemplate from './input.hbs';
import Block from '../../utils/Block';

export default class Input extends Block {
  render() {
    return this.compile(inputTemplate, this._props);
  }
}
