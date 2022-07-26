import './login.css';
import '../../globalStyles/globalStyles.scss';
import LoginPage from "./login";
import {renderTemplate} from "../../utils/utils";

const loginPage = new LoginPage({
    settings: {withInternalID: false},
    buttonText: 'Авторизация',
    classes: '',
    inputLoginText: 'Логин',
    inputLoginType: 'text',
    inputLoginName: 'login',
    inputLoginPlaceholder: 'Логин',
    inputPasswordText: 'Пароль',
    inputPasswordType: 'password',
    inputPasswordName: 'password',
    inputPasswordPlaceholder: 'Пароль',

})

//console.log(loginPage)
//loginPage.show()
//console.log(loginPage)
renderTemplate('#root', loginPage)

loginPage.setProps({buttonText: 'Change name'})
console.log(loginPage)