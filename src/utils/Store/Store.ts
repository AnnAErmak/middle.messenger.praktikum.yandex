import EventBus from '../EventBus';
import set from '../set';

export enum StoreEvents {
  Updated = 'updated',
}

export default class Store extends EventBus {
  static _instance;

  state = { };

  constructor() {
    if (Store._instance) return Store._instance;
    super();
    this.state = {
      chatPage: {
        children: {
          chatList: [],
          chatMassages: [],
        },
      },
      userSeting:{
        avatar:''
      },
    };
    Store._instance = this;
    this.on(StoreEvents.Updated, () => {})//console.log(this.getState()));
  }

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}
