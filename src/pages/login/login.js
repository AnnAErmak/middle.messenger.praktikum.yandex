import loginTemplate from './login.hbs'
import Block from "../../utils/block";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import {isValid} from "../../utils/validator";

import '../../globalStyles/globalStyles.scss'
import {login, password} from "../../components/input/inputTypes";


export default class LoginPage extends Block{
    constructor(props) {
        super({
            ...props,
            children: {
                inputLogin: login,
                inputPassword: password,
                header: new Header({settings: {withInternalID: false}}),
                button: new Button({
                    text: props.buttonText,
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