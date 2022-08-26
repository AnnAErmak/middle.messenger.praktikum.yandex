import Block from '../../utils/Block';
import profileTemplate from './profile.hbs';
import { ProfilePageProps } from './types';
import connect from "../../utils/Store/connect";
import {UserController} from "../../utils/controllers/UserController";

class Profile extends Block<ProfilePageProps> {
  render() {
    return this.compile(profileTemplate, this._props);
  }
}
const userController = new UserController();

export default connect(Profile, () => {
  userController.getUserInfo()
});
