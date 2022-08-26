import { validatorForm } from '../validator';
import { UserAPI } from '../api/UserIP/UserAPI';
import Store from '../Store/Store'
import {Router} from "../Router/Router";
import {createUserInfoList} from "../api/createUserInfoList";

const userAPI = new UserAPI();
const store = new Store()

class UserController {
  getUserInfo(){
    userAPI.request()
        .then(res => {
            //const userInfoList = createUserInfoList(res)
          store.set('userInfo', res)
        console.log(res)
        })
  }
}

export {UserController} ;
