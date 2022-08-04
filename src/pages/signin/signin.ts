import Block from '../../utils/Block';
import signinTemplate from './signin.hbs';
import { SigninPageProps } from './types';

export class Signin extends Block<SigninPageProps> {
  render() {
    return this.compile(signinTemplate, this._props);
  }
}
