import { BaseAPI } from '../../api/BaseAPI';
import { HTTPTransport } from '../../HTTPTransport';
import { UserAPI } from '../../api/UserAIP/UserAPI';
import Store from '../../Store/Store';
import { UserController } from '../UserController';
import { isValidField, validatorForm } from '../../validator';
import { UserPasswordAPI } from '../../api/UserAIP/UserPasswordAPI';
import { UserAvatar } from '../../api/UserAIP/UserAvatar';
import { host } from '../../../constants';

const userAPI = new UserAPI();
const userPassword = new UserPasswordAPI();
const userAvatar = new UserAvatar();
const store = new Store();
const userController = new UserController();

export class ChangeUserProfileController {
  putUserProfile(data) {
    if (!validatorForm(data)) return;
    const dataProfile = {
      first_name: data.elements.first_name.value,
      second_name: data.elements.second_name.value,
      display_name: data.elements.chat_name.value,
      login: data.elements.login.value,
      email: data.elements.email.value,
      phone: data.elements.phone.value,
    };
    userAPI.update(dataProfile).then(() => userController.getUserInfo());
  }

  changePassword({ oldPassword, newPassword }) {
    if (!isValidField(oldPassword.name, oldPassword.value)
        || !isValidField(newPassword.name, newPassword.value)
    ) return;
    userPassword.update({ oldPassword: oldPassword.value, newPassword: newPassword.value });
  }

  changeAvatar(data) {
    userAvatar.update(data)
      .then((ava) => {
        store.set('userProfile.pathAva', `${host}resources${ava}`);
      });
  }

  getUserAvatar() {
    userAPI.request()
      .then((res) =>{
        store.set('userProfile.pathAva', `${host}resources${res.avatar}`);
      });
  }
}
