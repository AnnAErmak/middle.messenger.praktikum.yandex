import Block from '../Block';
import Store, { StoreEvents } from './Store';
import {isEqual} from "../isEqual";
import Router from "../Router/Router";
import {AuthController} from "../controllers/userControllers/AuthController";
import ChatController from "../controllers/ChatController";
import {UserController} from "../controllers/UserController";
import {ChangeUserProfileController} from "../controllers/userControllers/ChangeUserProfileController";


const authController = new AuthController();
const chatController = new ChatController();
const userController = new UserController();
const userProfileController = new ChangeUserProfileController();

const store =new Store()
export default function connect(Component, mapStateToProps) {
  return class extends Component {

    constructor(tag, {...props}) {
      let state = mapStateToProps(store.getState());

      super(tag, {...props, ...state.children, ...state.userProfile});

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
