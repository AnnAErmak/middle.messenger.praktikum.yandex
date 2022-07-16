import profileTemplate from './profile.hbs'
import buttonTemplate from '../../components/button/button.hbs'
import inputTemplate from '../../components/input/input.hbs'
import Handlebars from 'handlebars'



const html = profileTemplate();
const root = document.querySelector('#main')

root.innerHTML = html