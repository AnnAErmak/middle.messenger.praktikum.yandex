import { BaseAPI } from '../BaseAPI';
import { HTTPTransport } from '../../HTTPTransport';
import { host } from '../../../constants';

const http = new HTTPTransport();
export class ChatListAPI extends BaseAPI {
  request() {
    return http.get(`${host}chats`).then((data) => data);
  }
  create(titleChat){
    return http.post(`${host}chats`, {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        title: titleChat,
      },
    })
  }
  delete(chatId){
    return http.delete(`${host}chats`, {
      headers: {
        'content-type': 'application/json',
      },
      data: {
        chatId,
      },
    })
  }
}
