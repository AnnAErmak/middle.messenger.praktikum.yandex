import { HTTPTransport } from '../../HTTPTransport';
import { BaseAPI } from '../BaseAPI';
import { host } from '../../../constants';

const http = new HTTPTransport();

export class AuthUserAPI extends BaseAPI {
  create({ login, password }) {
    return http.post(`${host}auth/signin`, {
      headers: {
        'content-type': 'application/json',
      },
      data: { login, password },
    })
        .then(res => res)
        .catch(err => console.log(err))
  }

  request({ login, password }) {
    http.get(`${host}auth/signin`, {
      headers: {
        'content-type': 'application/json',
      },
      data: { login, password },
    })
      .then((res) => console.log(res));
  }

  delete() {
    http.post(`${host}auth/logout`, {
      headers: {
        'content-type': 'application/json',
      },
      data: {},
    });
  }
}
