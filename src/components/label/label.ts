import Block from '../../utils/Block';
import labelTemplate from './label.hbs';
import { LabelProps } from './types';

export default class Label extends Block<LabelProps> {
  render() {
    return this.compile(labelTemplate, this._props);
  }
}
