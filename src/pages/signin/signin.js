import signinTemplate from './signin.hbs';
import './signin.scss';
import buttonTemplate from '../../components/button/button';
import inputTemplate from '../../components/input/input';
import Handlebars from 'handlebars';
import headerTemplate from "../../components/header/header";
import {renderTemplate} from "../../utils/utils";

const button = buttonTemplate({classes: '', text: 'Зарегистрироваться'});
const inputMail = inputTemplate({name:'email', placeholder: 'email', inputType:'email', text:'Почта'});
const inputLogin = inputTemplate({name:'login', placeholder: 'логин', inputType:'text',text:'Логин'});
const inputFirstName = inputTemplate({name:'first_name', placeholder: 'имя', inputType:'text', text:'Имя'});
const inputSecondName = inputTemplate({name:'second_name', placeholder: 'фамилия', inputType:'text', text:'Фамилия'});
const inputPhone = inputTemplate({name:'phone', placeholder: 'телефон', inputType:'tel', text:'Телефон'});
const inputPassword = inputTemplate({name:'password', placeholder: 'пароль', inputType:'password',text:'Пароль'});
const inputPasswordAgain = inputTemplate({name:'passwordAgain', placeholder: 'пароль (еще раз)', inputType:'password',text:'Пароль (еще раз)'});

Handlebars.registerPartial('buttonSubmit', button);
Handlebars.registerPartial('inputMail', inputMail);
Handlebars.registerPartial('inputLogin', inputLogin);
Handlebars.registerPartial('inputFirstName', inputFirstName);
Handlebars.registerPartial('inputSecondName', inputSecondName);
Handlebars.registerPartial('inputPhone', inputPhone);
Handlebars.registerPartial('inputPassword', inputPassword);
Handlebars.registerPartial('inputPasswordAgain', inputPasswordAgain);

const htmlSignin = signinTemplate();
const htmlHeader = headerTemplate();
renderTemplate([htmlHeader, htmlSignin]);