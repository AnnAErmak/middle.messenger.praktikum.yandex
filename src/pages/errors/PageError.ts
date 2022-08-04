import Block from '../../utils/Block';
import errorTemplate from './errors.hbs';
import { ErrorsPageProps } from './types';

export default class PageError extends Block<ErrorsPageProps> {
  render() {
    return this.compile(errorTemplate, this._props);
  }
}
