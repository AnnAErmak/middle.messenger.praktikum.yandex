import '../../globalStyles/globalStyles.scss';
import './header.scss';
import headerTemplate from './header.hbs';
import Block from "../../utils/block";

export default class Header extends Block {
    constructor(props) {
        super( props);
    }
    render() {
        return this.compile(headerTemplate, this.props);
    }
}
//const header = new Header({settings: {withInternalID: false}})

// export default header;
