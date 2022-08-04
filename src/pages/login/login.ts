import loginTemplate from './login.hbs';
import Block from '../../utils/Block';
import '../../globalStyles/globalStyles.scss';
import { LoginPageProps } from './types';

export default class LoginPage extends Block<LoginPageProps> {
  render() {
    return this.compile(loginTemplate, this._props);
  }
}
