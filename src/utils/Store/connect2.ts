import Store, { StoreEvents } from './Store';
import {isEqual} from '../isEqual'

const store = new Store();

type Constructable<T = any> = new (...args: any[]) => T;

type Indexed<T = any> = {
  [key in string]: T;
};

function connect2(mapStateToProps: (state: RootStateType) => Indexed) {
  return (Component: Constructable<Block>) => class extends Component {
    constructor(tag, props) {
      let s = mapStateToProps(store.getState());

      super(tag, {...props, ...s, });

      store.on(StoreEvents.Updated, () => {
        console.log(s)
        const newState = mapStateToProps(store.getState());

        if (!isEqual(s, newState)) {
          this.setProps({...newState});
        }

        s = newState;
      });
    }
  };
}

export const withChat = connect2((state) => (
    {children: {...state?.chatPage}}));
window.onpopstate = (e => {
  e.preventDefault()
  console.log('repet')
});