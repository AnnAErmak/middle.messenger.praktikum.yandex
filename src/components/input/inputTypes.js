import {isValid} from "../../utils/validator";


export const login ={
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

    }
export const password = {
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
}
