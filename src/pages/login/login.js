import loginTemplate from './login.hbs'
import Block from "../../utils/Block";
import '../../globalStyles/globalStyles.scss'

export default class LoginPage extends Block{
    render() {
        return this.compile(loginTemplate, this.props)
    }
}