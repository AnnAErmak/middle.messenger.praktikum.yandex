import './login.css'
import loginTemplate from './login.hbs'



const context = { title: "My New Post", body: "This is my first post!", D: "Holllllllllllly" };
const html = loginTemplate(context);

console.log(html)
document.querySelector('#root').innerHTML = html