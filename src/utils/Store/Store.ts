import EventBus from '../EventBus';
import { set } from '../set';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state = {
    chatPage: {
      chatList: `<div>Chat_1</div>
          <div>Chat_2</div>
          `,
    },
    userPage: 'userPage',
  };

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
