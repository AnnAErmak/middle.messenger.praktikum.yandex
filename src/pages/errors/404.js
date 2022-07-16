import template404 from './404.hbs'


const html = template404();
const root = document.querySelector('#main')

root.innerHTML = html