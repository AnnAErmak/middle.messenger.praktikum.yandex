import './input.scss';
import inputTemplate from './input.hbs';
import Block from "../../utils/block";


class Input extends Block {
    constructor(props) {
        super(props);
    }
    render() {
        return this.compile(inputTemplate, this.props);
    }
}


export default Input;