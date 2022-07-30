import Block from "../../utils/Block";
import signinTemplate from './signin.hbs'

export default class Signin extends Block{
    render() {
        return this.compile(signinTemplate, this.props)
    }
}
