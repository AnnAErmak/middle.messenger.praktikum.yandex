import '../../globalStyles/globalStyles.scss';
import './header.scss';
import headerTemplate from './header.hbs';
import Block from '../../utils/Block';
import { HeaderProps } from './types';

export class Header extends Block<HeaderProps> {
  render() {
    return this.compile(headerTemplate, this._props);
  }
}
