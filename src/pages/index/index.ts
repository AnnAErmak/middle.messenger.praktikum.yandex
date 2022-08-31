import Router from '../../utils/Router/Router';
import { loginPage } from '../login/index';
import { signinPage } from '../signin/index';
import { profilePage } from '../profile/index';
//import { chatPage } from '../chat/index';
import chatPage from "../chat/chat";
import { AuthController } from '../../utils/controllers/userControllers/AuthController';
import ChatController from '../../utils/controllers/ChatController';
import Store from '../../utils/Store/Store';
import {UserController} from "../../utils/controllers/UserController";
import {ChangeUserProfileController} from "../../utils/controllers/userControllers/ChangeUserProfileController";

const router = new Router('#root');




router
  //.use('/', loginPage)
  //.use('/sign-up', signinPage)
  //.use('/settings', profilePage)
  .use('/messenger', chatPage)
  .start();

