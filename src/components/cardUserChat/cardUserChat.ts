import Block from "../../utils/Block";
import cardUserChatTemplate from './cardUserChat.hbs'
import {cartUserChat} from "./types";

export class cardUserChat extends Block<cartUserChat>{
    render(){
        return this.compile(cardUserChatTemplate, this._props)
    }
}