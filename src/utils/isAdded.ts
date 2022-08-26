import ChatController from "./controllers/ChatController";

export function isAdded(user){
    const store = new Store()
    const state = store.getState()
    const users = state.users
    const userChat = new ChatController()
    userChat.getUsers().then()
}