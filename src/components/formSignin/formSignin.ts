import Block from "../../utils/Block";
import formSigninTemplate from './formSignin.hbs'
import {FormSigninProps} from "./types";

export class FormSignin extends Block<FormSigninProps>{
    render(){
        return this.compile(formSigninTemplate, this._props)
    }
}