import './chat.scss';
import headerTemplate from '../../components/header/header';
import chatTemplate from './chat.hbs';
import {renderTemplate} from '../../utils/utils';

import Block from "../../utils/block";
import messageTemplate from '../../components/textarea/textarea'
import buttonTemplate from "../../components/button/button";
const htmlChat = chatTemplate();
const htmlHeader = headerTemplate();
renderTemplate([htmlHeader, htmlChat])

//console.log(buttonTemplate())
class Button extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент button
        super('div', props);
    }
    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return buttonTemplate(this.props)
    }
}
class Mess extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент button
        super('div', props);
    }
    render() {
        // В проект должен быть ваш собственный шаблонизатор
        return messageTemplate(this.props)
    }
}
function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent())
    //root.insertAdjacentHTML('beforeend', block.getContent())
    return root;
}

const button = new Button({
    text: 'Click me',
});
const mess = new Mess({
    text: 'Click me',
});

// app — это class дива в корне DOM
render(".chat-messages", button);
render(".chat-messages", mess);
//button.hide()
// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);
setTimeout(() => {
    mess.setProps({
        text: 'Click me, please',
    });
}, 3000);
