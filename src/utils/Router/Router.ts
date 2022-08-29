import {Route} from "./Route";
import {AuthController} from "../controllers/userControllers/AuthController";
import ChatController from "../controllers/ChatController";
import Store from "../Store/Store";

const authController = new AuthController()
const chatController = new ChatController()
const store = new Store()

export class Router {
  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((event) => {
      this._onRoute(event.currentTarget.location.pathname);
    });
    authController.getAuthUser().then(res => {
      if (res.status === 200 && window.location.pathname !== '/') {
        this._onRoute(window.location.pathname);
      } else if (res.status === 200){
       chatController.getChats()
        this.go('/messenger');
      }else{
        this._onRoute(window.location.pathname);
      }
    })
  }


  _onRoute(pathname) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }
}
