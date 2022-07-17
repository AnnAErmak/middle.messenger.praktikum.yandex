import profileTemplate from './profile.hbs'
import './profile.scss'
import buttonTemplate from '../../components/button/button'
import inputTemplate from '../../components/input/input'
import Handlebars from 'handlebars'

const buttonFixData = buttonTemplate({classes: '', text: 'Изменить данные'})
const buttonFixPassword = buttonTemplate({classes: '', text: 'Изменить пароль'})
const inputMail = inputTemplate({name:'email', placeholder: 'email', inputType:'email', text:'Почта'})
const inputLogin = inputTemplate({name:'login', placeholder: 'логин', inputType:'text',text:'Логин'})
const inputFirstName = inputTemplate({name:'first_name', placeholder: 'имя', inputType:'text', text:'Имя'})
const inputSecondName = inputTemplate({name:'second_name', placeholder: 'фамилия', inputType:'text', text:'Фамилия'})
const inputDisplayName = inputTemplate({name:'display_name', placeholder: 'Иван', inputType:'text', text:'Имя в чате'})
const inputPhone = inputTemplate({name:'phone', placeholder: 'телефон', inputType:'tel', text:'Телефон'})

Handlebars.registerPartial('buttonFixData', buttonFixData)
Handlebars.registerPartial('buttonFixPassword', buttonFixPassword)

Handlebars.registerPartial('inputMail', inputMail)
Handlebars.registerPartial('inputLogin', inputLogin)
Handlebars.registerPartial('inputFirstName', inputFirstName)
Handlebars.registerPartial('inputSecondName', inputSecondName)
Handlebars.registerPartial('inputDisplayName', inputDisplayName)
Handlebars.registerPartial('inputPhone', inputPhone)


const html = profileTemplate();
const root = document.querySelector('#root')

root.insertAdjacentHTML('beforeend', html)