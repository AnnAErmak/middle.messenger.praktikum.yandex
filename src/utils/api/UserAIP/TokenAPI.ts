import { HTTPTransport } from '../../HTTPTransport';
import { BaseAPI } from '../BaseAPI';
import { host } from '../../../constants';

const http = new HTTPTransport();

export class TokenAPI extends BaseAPI {
  create(idChat) {
    return http.post(`${host}chats/token/${idChat}`, { data: {} })
      .then((token) => token.response.token);
  }
}
