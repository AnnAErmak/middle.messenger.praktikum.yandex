import './input.scss';
import Block from '../../utils/Block';
import { InputProps } from './types';
import connect from '../../utils/Store/connect';
import connect2 from '../../utils/Store/connect2';

export default class Input extends Block<InputProps> {
  render() {
    return this.compile(() => '', this._props);
  }
}

//  connect(Input, (state) => {
//   const dataInput = state.userInfo?.phone;
//   return {
//     attr: {
//       ...dataInput,
//     },
//   };
// });
