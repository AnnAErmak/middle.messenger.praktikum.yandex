import './profile.scss'
import '../../globalStyles/globalStyles.scss'
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import Form from "../../components/form/form";
import {getInputs, renderTemplate} from "../../utils/utils";
import {inputsProfile} from "../../components/input/inputTypes";
import {isValid} from "../../utils/validator";
import Profile from "./profile";

const header = new Header('header', {
    attr: {
        class: "container header"
    }
})

const buttonData = new Button ('button', {
    textButton: 'Изменить данные',
    attr:{
        class: "button-change-data",
        type: 'submit',
    },

})
const buttonPass = new Button ('button', {
    textButton: 'Изменить пароль',
    attr:{
        class: "button-change-pass",
        type: '',
    },

})

const formProfile = new Form('form',{
    inputs: getInputs(inputsProfile),
    button: buttonData,
    buttonFixPass: buttonPass,
    formName: 'profile',
    hrefForm: './chat.html',
    linkName: 'Выйти',
    attr:{
        class: "form-profile",
        method: 'get',
        action: '#',
    },
    events: {
        submit: e => {
            e.preventDefault()
            isValid(e.target)
        },
    },

})

const profilePage = new Profile('div', {
    formProfile,
    header,
    attr: {
        class: 'container'
    }

})

renderTemplate('#root', profilePage)