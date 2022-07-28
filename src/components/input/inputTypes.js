import Input from "./input";
import {isValid} from "../../utils/validator";

export const login = new Input({
        textLabel: 'Логин',
        inputType: 'text',
        name: 'login',
        placeholder: 'логин',
        settings: {withInternalID: true},
        events: {
            focus: e => {
                isValid(e.target)
            },
            blur: e => {
                isValid(e.target)
            },
        }
    })
export const  password = new Input({
        textLabel: 'Пароль',
        inputType: 'password',
        name: 'password',
        placeholder: 'Пароль',
        settings: {withInternalID: true},
        events: {
            focus: e => {
                isValid(e.target)
            },
            blur: e => {
                isValid(e.target)
            },
        }
    })
