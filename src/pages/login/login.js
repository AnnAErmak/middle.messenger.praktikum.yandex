import loginTemplate from './login.hbs';
import headerTemplate from '../../components/header/header';
import './login.css';
import '../../globalStyles/globalStyles.scss';
import buttonTemplate from '../../components/button/button'
import Block from "../../utils/block";
import formTemplate from "../../components/form/form.js";
const root = document.querySelector('#root');

const hed = headerTemplate()
const log = loginTemplate()
root.insertAdjacentHTML('beforeend', hed)
root.insertAdjacentHTML('beforeend', log)
class Button extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент button
        super('div', props);
    }
    render() {
        // В проект должен быть ваш собственный шаблонизатор
        //const {text} = this.props
        return this.compile(buttonTemplate, this.props);
    }
}
const button = new Button({
    text: 'Click me',
    settings: {withInternalID: true},
    events: {
        click: e => {
            console.log('Click BUTTON form')
        }
    }
});
class Form extends Block{
    constructor(props) {
        super('div', props);
    }
    render(){
        return this.compile(formTemplate, this.props)
    }
}
const form = new Form(
    {
        settings: {withInternalID: false},
        button: button,
        events: {
            submit: e => {
                console.log('form click')
            },
        }
    });
function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent())
    //root.insertAdjacentHTML('beforeend', block.getContent())
    return root;
}
render(".wrapper-form", form);

setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);












// import './login.css';
// import '../../globalStyles/globalStyles.scss';
// import {renderTemplate} from "../../utils/utils";
// import loginTemplate from './login.hbs';
// import headerTemplate from '../../components/header/header';
// import buttonTemplate from '../../components/button/button';
// import inputTemplate from '../../components/input/input';
// import Handlebars from 'handlebars';
//
// const button = buttonTemplate({classes: '', text: 'Войти'});
// console.log(button)
// const inputLogin = inputTemplate({name:'login', placeholder: 'логин', inputType:'text', text:'Логин'});
// const inputPassword = inputTemplate({name:'password', placeholder: 'пароль', inputType:'password',text:'Пароль'});
// Handlebars.registerPartial('buttonSubmit', button);
// Handlebars.registerPartial('inputLogin', inputLogin);
// Handlebars.registerPartial('inputPassword', inputPassword);
//
//
// const htmlLogin = loginTemplate();
// const htmlHeader = headerTemplate();
// renderTemplate([htmlHeader, htmlLogin]);


