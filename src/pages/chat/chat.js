import chatTemplate from './chat.hbs'


const html = chatTemplate();
const root = document.querySelector('#main')

root.innerHTML = html