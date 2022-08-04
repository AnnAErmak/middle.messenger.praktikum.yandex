import Block from '../../utils/Block';
import profileTemplate from './profile.hbs';
import { ProfilePageProps } from './types';

export default class Profile extends Block<ProfilePageProps> {
  render() {
    return this.compile(profileTemplate, this._props);
  }
}
