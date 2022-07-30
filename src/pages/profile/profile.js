import Block from "../../utils/Block";
import profileTemplate from './profile.hbs'

export default class Profile extends Block{
    render() {
        return this.compile(profileTemplate, this.props)
    }
}
