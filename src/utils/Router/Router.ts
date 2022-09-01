import Route from './Route';
import newRoute from './newRoute';

export default class Router {
  static _instance;
  constructor(rootQuery) {
    if (Router._instance)
      return Router._instance;
    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;
    Router._instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block);
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (e => {
      e.preventDefault()
      this._onRoute(window.location.pathname)
    });
    this._onRoute(window.location.pathname);
  }

  go(path) {
    this.history.pushState({}, '', path);
    this._onRoute(path);
  }

  back() {
    window.history.back();
  }

  forward() {
    window.history.forward();
  }

  _onRoute(path) {
    const route = this.getRoute(path);

    if(!route)
      return;

    if(this.currentRoute && this.currentRoute !== route)
      this.currentRoute.leave();

    this.currentRoute = route;
    route.render();
  }

  getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }
}
