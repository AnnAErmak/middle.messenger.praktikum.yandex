import { HTTPTransport } from '../../HTTPTransport';
import { BaseAPI } from '../BaseAPI';
import { host } from '../../../constants';

const http = new HTTPTransport();

export class ChatUserAPI extends BaseAPI {

  request(idChat){
       return http.get(`${host}chats/${idChat}/users`)
    }
  create(userLogin) {
    return http.post(`${host}user/search`, {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        login: userLogin,
      },
    });
  }

  update(userId, chatId) {
    return http.put(`${host}chats/users`, {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        users: userId,
        chatId,
      },
    });
  }
  delete(userId, idChat){
    http.delete(`${host}chats/users`, {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        users: userId,
        chatId: idChat,
      },
    });
  }

}
