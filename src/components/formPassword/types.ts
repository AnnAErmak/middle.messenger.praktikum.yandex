import {Label} from "../label/label";
import {Button} from "../button/button";
import  Input  from '../input/input';
export type FormLoginProps = {
    inputPassword: Input;
    inputNewPassword: Input;
    labelPassword: Label;
    labelNewPassword: Label;
    changePasswordBtn: Button;
    attr: {
        class: string;
        method: string;
        action: string;
    },
    events: {
        submit: (e: Event) => void;
    },
};