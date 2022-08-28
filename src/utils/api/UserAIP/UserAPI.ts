import { BaseAPI } from '../BaseAPI';
import { HTTPTransport } from '../../HTTPTransport';
import { host } from '../../../constants';

const http = new HTTPTransport();

export class UserAPI extends BaseAPI {
  request() {
    return http.get(`${host}auth/user`).then((data) => JSON.parse(data.response));
  }

  update({
    first_name, second_name, display_name, login, email, phone,
  }) {
    return http.put(`${host}user/profile`, {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        first_name,
        second_name,
        display_name,
        login,
        email,
        phone,
      },
    }).then((res) => res.response);
  }
}
