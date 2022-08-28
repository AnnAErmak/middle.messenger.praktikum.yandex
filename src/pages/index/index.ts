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
 .use('/', loginPage)
// .use('/sign-up', signinPage)
.use('/settings', profilePage)
// .use('/messenger', chatPage)
.start();

// const host = 'https://ya-praktikum.tech';
// const myUserForm = document.getElementById('myUserForm');
//
// myUserForm.addEventListener('submit', event => {
//     event.preventDefault();

//    const avatar = document.getElementById('avatar');
  //  const form = new FormData(myUserForm);
    //const form = new FormData();
    //form.append('avatar', avatar);
    //console.log(avatar, form)
    //form.append('avatar', avatar);
    // http.put(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
    //     // headers: {
    //     //     'content-type': 'multipart/form-data',
    //     // },
    //     data: form
    // })
    //     .then(response => console.log(response))
        // .then(data => {
        //   console.log(data);
        //   return data;
        // });
    // Можете добавлять свои дополнительные поля или составлять данные полностью из пустой FormData
    // Если хотите назвать файлы как-то иначе, третий параметр по-вашему усмотрению
    // form.append('avatar', avatar, 'my-file-name.png');

    // fetch(`${host}/api/v2/user/profile/avatar`, {
    //   method: 'PUT',
    //   credentials: 'include', // Нам нужно подставлять cookies
    //   mode: 'cors', // Работаем с CORS
    //   body: form,
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       return data;
    //     });
//});
