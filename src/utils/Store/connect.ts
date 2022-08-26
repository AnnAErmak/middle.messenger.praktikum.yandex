import Block from '../Block';
import Store, { StoreEvents } from './Store';

const store =new Store()
export default function connect(Component, mapStateToProps) {
  return class extends Component {
    constructor(tag, {...props}) {

      super(tag, {...props});

      mapStateToProps()
      store.on(StoreEvents.Updated, () => {
        //console.log(store.getState())
        this.setProps(store.getState().userInfo)
      });
// ...mapStateToProps(store.getState())
    }
  };
}
