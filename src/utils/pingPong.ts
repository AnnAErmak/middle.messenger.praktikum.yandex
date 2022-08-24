export default class PingPong {

    _timer;
    _time

    constructor(ms = 10000) {
        this._time = ms;
    }

    start() {

        if(this._timer)
            return true;
        const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${idUser}/${idChat}/${token}`);
        this._timer = setInterval(
            () => {
                socket.addEventListener('open', () => {
                    socket.send(JSON.stringify({
                        content: '0',
                        type: 'get old',
                    }));
                });
            },
            this._time
        );
    }

    stop() {
        clearInterval(this._timer);
    }
}

//
// export class WebsocketApi {
//     private _socket: WebSocket;
//
//     constructor(url: string) {
//         this._socket = new WebSocket(url);
//     }
//
//     open(callback: (successMessage: string) => void): void {
//         this._socket.addEventListener('open', () => {
//             callback('Соединение установлено');
//         });
//     }
//
//     close(successCallback: (message: string) => void, errorCallback: (message: string) => void): void {
//         this._socket.addEventListener('close', event => {
//             if (event.wasClean) {
//                 successCallback('Соединение закрыто чисто');
//             } else {
//                 errorCallback('Обрыв соединения');
//                 console.error(`Код: ${event.code} | Причина: ${event.reason}`);
//             }
//         });
//     }
//
//     closeConnection(code: CloseCode = CloseCode.Success, reason?: string): void {
//         this._socket.close(code, reason);
//     }
//
//     error(errorCallback: (event: Event) => void): void {
//         this._socket.addEventListener('error', event => {
//             errorCallback(event);
//         });
//     }
//
//     message(callback: (data: MessageResponse | ConnectedResponse | LastMessageResponse[]) => void): void {
//         this._socket.addEventListener('message', event => {
//             if (typeof event.data === 'string') {
//                 callback(JSON.parse(event.data));
//             } else {
//                 callback(event.data);
//             }
//         });
//     }
//
//     send(message: string, type: string = 'message'): void {
//         this._socket.send(JSON.stringify({
//             content: message,
//             type: type,
//         }));
//     }
//
//     ping(): void {
//         setTimeout(() => this.heartbeat(), 10000);
//     }
//
//     private heartbeat() {
//         if (!this._socket || this._socket.readyState !== 1) {
//             return;
//         }
//
//         this._ping();
//         setTimeout(() => this.heartbeat(), 10000);
//     }
//
//     private _ping(): void {
//         this._socket.send(JSON.stringify({
//             type: 'ping',
//         }));
//
//         console.log('wss:// ping');
//     }
// }