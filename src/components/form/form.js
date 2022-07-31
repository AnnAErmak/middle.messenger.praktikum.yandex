import Block from "../../utils/Block";
import formTemplate from './form.hbs'
import {isValid} from "../../utils/validator";

export default class Form extends Block{
    render(){
        return this.compile(formTemplate, this.props);
    }
    _addEvents() {
        super._addEvents()
        this._element.querySelectorAll('input').forEach(input =>{
            input.addEventListener('focus', e => isValid(e.target))
            input.addEventListener('blur', e => isValid(e.target))
        })
    }
}