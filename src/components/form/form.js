import Block from "../../utils/block";
import formTemplate from './form.hbs'
import Button from "../button/button";
export default class Form extends Block{
    constructor(props) {
        super(props);
    }
    render(){
        this.children.button =  new Button({
            text: 'Click me',
            classes: 'but',
            settings: {withInternalID: false},
            events: {
                click: e => {
                    e.preventDefault()
                    console.log('Click BUTTON form')
                }
            }
        });
        return this.compile(formTemplate, {
            button: this.button,
            inputs: [`<button>text</button>`, `<button>text</button>`, `<button>text</button>`]
        });
    }
}
