import signinTemplate from './signin.hbs'
import buttonTemplate from '../../components/button/button.hbs'
import inputTemplate from '../../components/input/input.hbs'
import Handlebars from 'handlebars'

const buttonReg = buttonTemplate({classes: 'button', text: 'Зарегистрироваться'})
const inputMail = inputTemplate({name:'email', placeholder: 'почта', inputType:'email'})
const inputPassword = inputTemplate({name:'password', placeholder: 'пароль', inputType:'password'})
Handlebars.registerPartial('buttonSubmit', buttonReg)
Handlebars.registerPartial('inputMail', inputMail)
Handlebars.registerPartial('inputPassword', inputPassword)

const html = signinTemplate();
const root = document.querySelector('#main')

root.innerHTML = html