import { HTTPTransport } from '../../HTTPTransport';
import { BaseAPI } from '../BaseAPI';

const userAPIInstance = new HTTPTransport();

export class UserAPI extends BaseAPI {
  create(_data) {
    console.log(_data)
    return userAPIInstance.post('https://ya-praktikum.tech/api/v2/auth/signin', {
      headers: {
        'content-type': 'application/json',
      },
      data: {login: 'ERM2', password: '123SSFFdfdf2'},
    });

    // fetch('https://ya-praktikum.tech/api/v2/auth/signin', {
    //   method: 'POST',
    //   credentials: 'include', // Нужно подставлять куки
    //   mode: 'cors', // Работаем с CORS
    //   headers: {
    //     'content-type': 'application/json', // Данные отправляем в формате JSON
    //   },
    //   body: JSON.stringify({
    //     login: 'ERM2',
    //     password: '123SSFFdfdf2', // Грустный и слабый пароль, можно вот так: oPKzos*1X$uKz$ta
    //   }),
    // })
    //   .then((response) => response.text()) // Можно вытащить через .json()
    //   .then((data) => {
    //     console.log(data);
    //     return data;
    //   });
  }

  request() {
    userAPIInstance.get('ya-praktikum.tech/api/v2/auth/signin', {
      data: {
        login: 'ERM',
        password: '123SSFFdfdf',
      },
    })
      .then((res) => console.log(res));
  }

  update() { console.log('updeate'); }

  delete() { console.log('delete'); }
}
