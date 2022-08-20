import Block from "../../utils/Block";
import {LinkProps} from "./types";
import linkTemplate from './link.hbs'

export class Link extends Block<LinkProps>{
    render(){
        return this.compile(linkTemplate, this._props)
    }
}