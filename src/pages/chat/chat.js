import chatTemplate from './chat.hbs'
import './chat.scss'

const html = chatTemplate();
const root = document.querySelector('#root')

root.insertAdjacentHTML('beforeend', html)