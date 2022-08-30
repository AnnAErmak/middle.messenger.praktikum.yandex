import Router from '../../utils/Router/Router';
import { loginPage } from '../login/index';
import { signinPage } from '../signin/index';
import { profilePage } from '../profile/index';
import { chatPage } from '../chat/index';
import { AuthController } from '../../utils/controllers/userControllers/AuthController';
import ChatController from '../../utils/controllers/ChatController';
import Store from '../../utils/Store/Store';
import {UserController} from "../../utils/controllers/UserController";
import {ChangeUserProfileController} from "../../utils/controllers/userControllers/ChangeUserProfileController";

const router = new Router('#root');

const authController = new AuthController();
const chatController = new ChatController();
const userController = new UserController();
const userProfileController = new ChangeUserProfileController();


router
  .use('/', loginPage)
  .use('/sign-up', signinPage)
  .use('/settings', profilePage)
  .use('/messenger', chatPage)
  .start();
// authController.getAuthUser().then((res) => {
//   if (res.status === 200) {
//       userController.getUserInfo();
//       userProfileController.getUserAvatar();
//       chatController.getChats()
//       //router.go('/messenger')
//   }
// });
