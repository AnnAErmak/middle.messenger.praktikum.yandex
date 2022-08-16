import { Router } from '../../utils/Router/Router';
import { loginPage } from '../login/index';
import { signinPage } from '../signin/index';
import { profilePage } from '../profile/index';
import { chatPage } from '../chat/index';


  const router = new Router('#root');
 router
     .use('/', loginPage)
     .use('/sign-up', signinPage)
     .use('/settings', profilePage)
     .use('/messenger', chatPage)
     .start();

