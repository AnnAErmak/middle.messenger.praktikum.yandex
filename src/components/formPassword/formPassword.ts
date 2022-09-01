import Block from "../../utils/Block";
import formPasswordTemplate from './formPassword.hbs'
import {FormLoginProps} from "./types";

export class FormPassword extends Block<FormLoginProps>{

    render(){
        return this.compile(formPasswordTemplate, this._props)
    }
}