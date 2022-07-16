import './login.css'
import loginTemplate from './login.hbs'
import buttonTemplate from '../../components/button/button.hbs'
import inputTemplate from '../../components/input/input.hbs'
import Handlebars from 'handlebars'

const button = buttonTemplate({classes: 'button', text: 'Войти'})
const inputLogin = inputTemplate({name:'login', placeholder: 'логин', inputType:'text'})
const inputPassword = inputTemplate({name:'password', placeholder: 'пароль', inputType:'password'})
Handlebars.registerPartial('buttonSubmit', button)
Handlebars.registerPartial('inputLogin', inputLogin)
Handlebars.registerPartial('inputPassword', inputPassword)

const html = loginTemplate();
const root = document.querySelector('#main')

root.innerHTML = html
