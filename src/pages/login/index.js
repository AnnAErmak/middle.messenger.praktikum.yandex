import './login.css';
import '../../globalStyles/globalStyles.scss';
import LoginPage from "./login";
import {renderTemplate} from "../../utils/utils";
import {isValid} from '../../utils/validator'

const loginPage = new LoginPage({
    settings: {withInternalID: false},
    buttonText: 'Авторизация',
    titleForm: 'Вход',
    events: {
        submit: e => {
            e.preventDefault()
            isValid(e.target)
        }
    }
})

renderTemplate('#root', loginPage)
