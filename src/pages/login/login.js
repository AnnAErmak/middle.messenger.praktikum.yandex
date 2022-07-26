import loginTemplate from './login.hbs'
import Block from "../../utils/block";
import Form from "../../components/form/form";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import Input from "../../components/input/input";


export default class LoginPage extends Block{
    constructor(props) {
        super({...props, children: {header : new Header({settings: {withInternalID: false}}),
                button: new Button({
                    text: props.buttonText,
                    classes: props.classes,
                    settings: {withInternalID: true},
                    events: {
                        click: e => {
                            e.preventDefault()
                            console.log('Click BUTTON form')
                        }
                    }
                }),
            }})


            // , {
            // header : new Header({settings: {withInternalID: false}}),
            // button: new Button({
            //     text: props.buttonText,
            //     classes: props.classes,
            //     settings: {withInternalID: true},
            //     events: {
            //         click: e => {
            //             e.preventDefault()
            //             console.log('Click BUTTON form')
            //         }
            //     }
            // }),
            // inputLogin: new Input({
            //     text: props.inputLoginText,
            //     inputType: props.inputLoginType,
            //     name: props.inputLoginName,
            //     placeholder: props.inputLoginPlaceholder,
            //     settings: {withInternalID: true},
            //     events: {
            //         click: e => {
            //             e.preventDefault()
            //             console.log('Click Input Login form')
            //         }
            //    }
            // }),
            // inputPassword:new Input({
            //     text: props.inputPasswordText,
            //     inputType: props.inputPasswordType,
            //     name: props.inputPasswordName,
            //     placeholder: props.inputPasswordPlaceholder,
            //     settings: {withInternalID: true},
            //     events: {
            //         click: e => {
            //             e.preventDefault()
            //             console.log('Click Input Pass form')
            //         }
            //     }
            // }),
        //})
    }
    render() {
        return this.compile(loginTemplate)
            //{
            // header: this.header,
            // button: this.button,
            // inputsLogin: this.inputLogin,
            // inputsPassword: this.inputPassword,
        //})
    }
}

// const root = document.querySelector('#root');
//
// const hed = headerTemplate()
// const log = loginTemplate()
// root.insertAdjacentHTML('beforeend', hed)
// root.insertAdjacentHTML('beforeend', log)
// class Button extends Block {
//     constructor(props) {
//         // Создаём враппер дом-элемент button
//         super('div', props);
//     }
//     render() {
//         // В проект должен быть ваш собственный шаблонизатор
//         //const {text} = this.props
//         return this.compile(buttonTemplate, this.props);
//     }
// }
// const button = new Button({
//     text: 'Click me',
//     settings: {withInternalID: false},
//     events: {
//         click: e => {
//             console.log('Click BUTTON form')
//         }
//     }
// });

// const form = new Form(
//     {
//         settings: {withInternalID: false},
//         button: button,
//         events: {
//             submit: e => {
//                 e.preventDefault()
//                 console.log('form click')
//             },
//         }
//     });
// function render(query, block) {
//     const root = document.querySelector(query);
//     root.appendChild(block.getContent())
//     //root.insertAdjacentHTML('beforeend', block.getContent())
//     return root;
// }
// render(".wrapper-form", form);
//
// setTimeout(() => {
//     button.setProps({
//         text: 'Click me, please',
//     });
// }, 1000);
//
//










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


