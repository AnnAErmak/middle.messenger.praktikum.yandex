import Block from '../Block';
import store, { StoreEvents } from './Store';

export default function connect(Component, mapStateToProps) {
  return class extends Component {
    constructor(tag, props = {}) {

      super(tag, { ...props, ...mapStateToProps(store.getState()) });

    }
  };
}
