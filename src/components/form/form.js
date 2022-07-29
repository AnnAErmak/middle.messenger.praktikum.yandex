import Block from "../../utils/block";
import formTemplate from './form.hbs'
import Button from "../button/button";
import Input from "../input/input";
import {login, password} from "../input/inputTypes";
export default class Form extends Block{
    constructor(props) {
        const createInputs = (inputsNames) => {
            const obj ={}
            inputsNames.forEach(name => {
                obj[name.name] = new Input(name)
            })
            return obj
        }
        const inputs = createInputs(props.inputs)
        const arrInputs = []
        Object.keys(inputs).forEach(input => {
            arrInputs.push(input.this.getContent())
        })
        super({...props, children: {
                button: new Button({
                    textButton: props.textButton,
                    classes: '',
                    settings: {withInternalID: true},
                    type: 'submit'
                }),
                    ...inputs
            }
        });
    }
    render(){

        return this.compile(formTemplate, {...this.props, inputs: this.arrInputs });
    }
}
//
// {{#each inputs}}
// {{{this}}}
// {{/each}}