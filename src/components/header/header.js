import '../../globalStyles/globalStyles.scss';
import './header.scss';
import headerTemplate from './header.hbs';
import Block from "../../utils/Block";

export default class Header extends Block {
    render() {
        return this.compile(headerTemplate, this.props);
    }
}
