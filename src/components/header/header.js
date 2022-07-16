import '../../globalStyles/globalStyles.scss'
import headerTemplate from './header.hbs'


const html = headerTemplate();
const root = document.querySelector('#root')

root.insertAdjacentHTML('afterbegin', html)
document.querySelector('#root').innerHTML = html