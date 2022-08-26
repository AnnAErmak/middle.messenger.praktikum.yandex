import Store, { StoreEvents } from './Store';
import {isEqual} from '../isEqual'
import {UserController} from "../controllers/UserController";
const store = new Store();

const userController = new UserController()
userController.getUserInfo()
export default function connect2(mapStateToProps) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(tag, {...props}) {
        let state = mapStateToProps(store.getState());
          console.log(store.getState())
          console.log(state)
        super(tag, { ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState().userInfo);

              if (!isEqual(state, newState)) {
              this.setProps({...newState});
          }

          state = newState;
        });
      }
    };
  };
}
