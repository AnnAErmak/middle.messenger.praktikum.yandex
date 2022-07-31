import Block from "../../utils/Block";
import errorTemplate from './errors.hbs'

export default class PageError extends Block{
    render(){
        return this.compile(errorTemplate, this._props)
    }
}