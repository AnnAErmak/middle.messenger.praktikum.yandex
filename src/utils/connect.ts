import Block from './Block';
import store, { StoreEvents } from './Store/Store';

export function connect(Component: typeof Block) {
  return class extends Component {
    constructor(...args) {
      super(...args);
      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...store.getState() });
      });
    }
  };
}
