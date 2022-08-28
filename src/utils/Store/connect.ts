import Block from '../Block';
import Store, { StoreEvents } from './Store';
import {isEqual} from "../isEqual";

const store =new Store()
export default function connect(Component, mapStateToProps) {
  return class extends Component {

    constructor(tag, {...props}) {
      let state = mapStateToProps(store.getState());

      super(tag, {...props, ...state});

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());

        if (!isEqual(state, newState)) {
          //console.log(state, newState)
          this.setProps({...newState});
        }

        state = newState;
      });

    }
  };
}
