import { HTTPTransport } from '../HTTPTransport';
import { Button } from '../../components/button/button';
import Store from '../Store/Store';
import { ChatListAPI } from '../api/chatAPI/ChatListAPI';
import { createChatList } from '../api/createChatList';
import { ChatUserAPI } from '../api/chatAPI/ChatUserAPI';
import {TokenAPI} from "../api/UserAIP/TokenAPI";
import {wssHost} from "../../constants";

const http = new HTTPTransport();
const store = new Store();
const state = store.getState();

export default class ChatController {
  constructor() {
    this.chatListAPI = new ChatListAPI();
    this.chatUserAPI = new ChatUserAPI();
    this.tokenAPI = new TokenAPI()
  }

  getChatMessages(idChat) {
    return this.tokenAPI.create(idChat)
      .then((token) => {
        const userId = state.chatPage.userId;

         const socket = new WebSocket(`${wssHost}58320/${idChat}/${token}`);
        socket.addEventListener('open', () => {
        socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
          }));
        });

        socket.addEventListener('message', (event) => {
          const messages = JSON.parse(event.data).map((item) => new Button('button', {
            textButton: item.content,
            attr: {
              class: 'add-chat-btn',
              id: item.user_id,
              type: 'button',
            },
          }));
          store.set('chatPage.chatMassages', messages);
        });

      });
  }

  sendMessage(message) {
    const state = store.getState();
    if (!state.chatPage.token) return;
    const { idChat } = state.chatPage;
    const { token } = state.chatPage;
    const userId = state.chatPage.userId;
    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${idChat}/${token}`);
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({
        content: message,
        type: 'message',
      }));
      socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
      socket.addEventListener('message', (event) => {
        if (!Array.isArray(JSON.parse(event.data))) return;
        const messages = JSON.parse(event.data).map((item) => new Button('button', {
          textButton: item.content,
          attr: {
            class: 'add-chat-btn',
            id: item.user_id,
            type: '',
          },
        }));
        store.set('chatPage.chatMassages', messages);
      });
    });
  }

  getChats() {
    return this.chatListAPI.request()
      .then((res) => {
        const chatList = createChatList(res);
        store.set('chatPage.chatList', chatList);
      });
  }

  addChat() {
    const modal = document.querySelector('.add-chat-modal');
    modal.style.display = 'block';
    const addChat = document.querySelector('.add-chat');
    const btnCancel = document.querySelector('.btn-cancel-chat');
    const titleChat = document.querySelector('.title-chat');
    addChat.addEventListener('click', () => {
      if (!titleChat.value) return;
      this.chatListAPI.create(titleChat.value)
        .then(() => {
          this.getChats();
        });
      modal.style.display = 'none';
    });
    btnCancel.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  removeChat() {
    const state = store.getState();
    const chatId = state.chatPage.idChat;
    if (!chatId) return;
    this.chatListAPI.delete(chatId)
      .then(() => this.getChats());
  }

  getUsers(idChat) {
    return this.chatUserAPI.request(idChat)

  }

  addUser() {
    const modal = document.querySelector('.sear-form');
    modal.style.display = 'block';
    const input = document.querySelector('.sear-input');
    const btnCancel = document.querySelector('.btn-cancel');
    input.addEventListener('input', (e) => {
      this.chatUserAPI.create(e.target.value)
        .then((users) => {
          const user = users.response.map((el) => `<div class="wrapper-user-chat"><div id= ${el.id}>${el.login}</div> <div>+</div></div>`);
          const div = document.querySelector('.sear-res');
          div.innerHTML = user.join('');
          div.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            e.target.classList.add('selected');
            const userId = (e.target.id).split();
            const chatId = state.chatPage.idChat;
            if (!userId || !chatId) return;
            this.chatUserAPI.update(userId, chatId);
          });
        });
    });
    btnCancel.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  removeUser() {
    const { idChat } = state.chatPage;
    const modal = document.querySelector('.sear-form');
    modal.style.display = 'block';
    const div = document.querySelector('.sear-res');
    const btnCancel = document.querySelector('.btn-cancel');
    this.getUsers(idChat)
      .then((res) => {
        const users = JSON.parse(res.response);
        const userHtml = users.map((el) => `<div id= ${el.id}>${el.login}</div>`);
        div.innerHTML = userHtml;
        div.addEventListener('click', (e) => {
          const userId = (e.target.id).split();
          e.target.classList.add('selected');
          this.chatUserAPI.delete(userId, idChat)
        });
      });
    btnCancel.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
}
