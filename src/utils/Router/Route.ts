import { renderTemplate } from '../renderTemplate';

export default class Route {
  constructor(pathname, view) {
    this._pathname = pathname;
    this._block = view;
    this._blockFlag = null;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      //this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._blockFlag) {
      this._block.hide();
    }
  }

  match(pathname) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._blockFlag) {
      this._blockFlag = true;
      renderTemplate('#root', this._block);
      return;
    }

    this._block.show();
  }
}
