import template404 from './error404.hbs'
import '../../globalStyles/globalStyles.scss'
import './errors.scss'

const html = template404();
const root = document.querySelector('#root')

root.insertAdjacentHTML('beforeend', html)