import loginTemplate from './login.hbs';
import Block from '../../utils/Block';
import '../../globalStyles/globalStyles.scss';
import Form from '../../components/form/form';
import Header from '../../components/header/header';


export default class LoginPage extends Block<LoginPageProps> {
  render() {
    return this.compile(loginTemplate, this._props);
  }
}
