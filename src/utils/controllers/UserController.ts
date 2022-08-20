import { validatorForm } from '../validator';
import { UserAPI } from '../api/authAPI/AuthAPI';
import store from '../Store/Store'
import {Router} from "../Router/Router";

const userAPI = new UserAPI();
class UserController {
  public login(form) {
    const data = validatorForm(form);
    const router = new Router('#root');
    if (!data) return;

   userAPI.create(data)
       .then(() => router.go('/messenger'))



      //console.log(user)

  }
}

export {UserController} ;
