import './login.css'
import '../../globalStyles/globalStyles.scss'
import loginTemplate from './login.hbs'
import buttonTemplate from '../../components/button/button'
import inputTemplate from '../../components/input/input'
import Handlebars from 'handlebars'

const button = buttonTemplate({classes: '', text: 'Войти'})
const inputLogin = inputTemplate({name:'login', placeholder: 'логин', inputType:'text', text:'Логин'})
const inputPassword = inputTemplate({name:'password', placeholder: 'пароль', inputType:'password',text:'Пароль'})
Handlebars.registerPartial('buttonSubmit', button)
Handlebars.registerPartial('inputLogin', inputLogin)
Handlebars.registerPartial('inputPassword', inputPassword)

const html = loginTemplate();
const root = document.querySelector('#root')

root.insertAdjacentHTML('beforeend', html)

