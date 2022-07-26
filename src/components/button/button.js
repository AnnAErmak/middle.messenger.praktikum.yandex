import './button.scss';
import buttonTemplate from './button.hbs';
import Block from "../../utils/block";

class Button extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        return this.compile(buttonTemplate, this.props);
    }
}


export default Button;