import Block from '../../utils/Block';
import formTemplate from './form.hbs';
import { FormProps } from './types';

export default class Form extends Block<FormProps> {
  render() {
    return this.compile(formTemplate, this._props);
  }
}
