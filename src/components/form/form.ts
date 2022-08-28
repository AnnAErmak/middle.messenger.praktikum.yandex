import Block from '../../utils/Block';
import formTemplate from './form.hbs';
import { FormProps } from './types';
import connect from '../../utils/Store/connect';

 class Form extends Block<FormProps> {
  render() {
    return this.compile(formTemplate, this._props);
  }
}

export default connect(Form, (state) => {
  const userInfo = state?.pageSetting ?? {};
  return userInfo;
});
