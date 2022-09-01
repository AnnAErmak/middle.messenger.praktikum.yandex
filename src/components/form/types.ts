import  Input  from '../input/input';
import { Label } from '../label/label';
import { Button } from '../button/button';

export type FormProps = {
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
