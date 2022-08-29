import Block from '../../utils/Block';
import formTemplate from './formLogin.hbs';
import {FormLoginProps} from './types';
import connect from '../../utils/Store/connect';

export default class FormLogin extends Block<FormLoginProps> {
  render() {
    return this.compile(formTemplate, this._props);
  }
}

 connect(FormLogin, (state) => {
  const userInfo = state?.pageSetting ?? {};
  return userInfo;
});
