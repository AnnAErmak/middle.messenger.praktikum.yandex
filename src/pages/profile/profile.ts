import Block from '../../utils/Block';
import profileTemplate from './profile.hbs';
import { ProfilePageProps } from './types';
import connect from "../../utils/Store/connect";
import {UserController} from "../../utils/controllers/UserController";
import {ChangeUserProfileController} from "../../utils/controllers/userControllers/ChangeUserProfileController";

const profileController = new ChangeUserProfileController()

 class Profile extends Block<ProfilePageProps> {
     constructor(tag = 'div', props = {}) {
         super(tag, props);
         profileController.getUserAvatar()
     }
  render() {
    return this.compile(profileTemplate, this._props);
  }
}


export default connect(Profile, (state) => {
        return {children: {...state?.pageSetting?.children},
            pathAva: state?.userProfile?.pathAva
    }
    }
);
