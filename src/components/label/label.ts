import Block from '../../utils/Block';
import labelTemplate from './label.hbs';
import { LabelProps } from './types';

export class Label extends Block<LabelProps> {
  render() {
    return this.compile(labelTemplate, this._props);
  }
}
