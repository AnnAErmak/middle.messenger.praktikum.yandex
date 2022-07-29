import loginTemplate from './login.hbs'
import Block from "../../utils/block";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import '../../globalStyles/globalStyles.scss'

import Input from "../../components/input/input";
import {login, password} from "../../components/input/inputTypes";


export default class LoginPage extends Block{
    constructor(props) {
        super({
            ...props,
            children: {
                inputLogin: new Input(login),
                inputPassword: new Input(password),
                header: new Header({settings: {withInternalID: false}}),
                button: new Button({
                    textButton: props.buttonText,
                    classes: 'class',
                    settings: {withInternalID: true},
                    type: 'submit'
                }),
            }
        })
    }

    render() {
        return this.compile(loginTemplate, {title: this.props.titleForm})
    }
}