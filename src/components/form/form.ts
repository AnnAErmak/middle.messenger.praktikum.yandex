import Block from '../../utils/Block';
import formTemplate from './form.hbs';
import Input from '../input/input';
import Button from '../button/button';
import Label from '../label/label';

type FormProps = {
  inputPassword?: Input;
  inputLogin?: Input;
  inputPasswordAgain?: Input;
  inputPhone?: Input;
  inputSecondName?: Input;
  inputFirstName?: Input;
  inputEmail?: Input;
  inputChatName?: Input;
  labelPassword?: Label;
  labelLogin?: Label;
  labelPasswordAgain?: Label;
  labelPhone?: Label;
  labelSecondName?: Label;
  labelFirstName?: Label;
  labelEmail?: Label;
  labelChatName?: Label;
  button: Button;
  formName: string;
  hrefForm: string;
  linkName: string;
  titleForm: string;
  attr: {
    class: string;
    method: string;
    action: string;
  },
  events: {
    submit: (e: Event) => void;
  },
};

export default class Form extends Block<FormProps> {
  render() {
    return this.compile(formTemplate, this._props);
  }
}
