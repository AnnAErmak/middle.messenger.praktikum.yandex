import {Label} from "../label/label";
import {Button} from "../button/button";
import  Input  from '../input/input';

export type FormSigninProps = {
    inputPassword?: Input;
    inputLogin?: Input;

    inputPhone?: Input;
    inputSecondName?: Input;
    inputFirstName?: Input;
    inputEmail?: Input;

    labelPassword?: Label;
    labelLogin?: Label;

    labelPhone?: Label;
    labelSecondName?: Label;
    labelFirstName?: Label;
    labelEmail?: Label;

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
