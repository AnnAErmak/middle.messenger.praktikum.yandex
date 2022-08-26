import './input.scss';
import Block from '../../utils/Block';
import { InputProps } from './types';
import connect2 from "../../utils/Store/connect2";
import Store from "../../utils/Store/Store";

const store = new Store()
const state = store.getState()

class Input extends Block<InputProps> {
  render() {
    return this.compile(() => '', this._props);
  }
}
const withUserInfo = connect2(state => state.userInfo);

export default withUserInfo(Input)
