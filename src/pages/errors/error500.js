import template500 from "./error500.hbs";
import '../../globalStyles/globalStyles.scss'

const html = template500();
const root = document.querySelector('#root')

root.insertAdjacentHTML('beforeend', html)