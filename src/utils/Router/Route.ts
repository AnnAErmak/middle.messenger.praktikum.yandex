import { renderTemplate } from '../renderTemplate';

export class Route {
  constructor(pathname, view, props) {
    this._pathname = pathname;
    this._block = view;
    this._props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return pathname === this._pathname;
  }

  render() {
    renderTemplate(this._props.rootQuery, this._block);
    // this._block.show();
  }
}
