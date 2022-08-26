import { Router } from '../../utils/Router/Router';
import { loginPage } from '../login/index';
import { signinPage } from '../signin/index';
import { profilePage } from '../profile/index';
import { chatPage } from '../chat/index';
import { HTTPTransport } from '../../utils/HTTPTransport';
import { host } from '../../constants';
import { UserController } from '../../utils/controllers/UserController';
import Store from '../../utils/Store/Store';
import Input from '../../components/input/input';

const http = new HTTPTransport();
const router = new Router('#root');
router
// .use('/', loginPage)
// .use('/sign-up', signinPage)
.use('/settings', profilePage)
// .use('/messenger', chatPage)
.start();

// const input = new Input('input', {
//   attr: {
//     type: 'text',
//     name: 'text',
//     placeholder: 'text',
//     class: 'text',
//     value: 'text',
//   },
//   events: {
//     focus: () => {},
//     blur: () => {},
//   },
// });
