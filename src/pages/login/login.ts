import '../../globalStyles/globalStyles.scss';
import loginTemplate from './login.hbs';
import Block from '../../utils/Block';
import { LoginPageProps } from './types';
import {connect} from "../../utils/connect";

 class LoginPage extends Block<LoginPageProps> {
  render() {
    return this.compile(loginTemplate, this._props);
  }
}

export default connect(LoginPage);