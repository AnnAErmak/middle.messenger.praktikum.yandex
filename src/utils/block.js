import EventBus from './event-bus'
import {v4 as makeUUID} from 'uuid';

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    _element = null;
    _meta = null;
    _id = null;

    constructor(tagName = "div", props = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };
        const {settings} = props
        if(settings){
            this._id = makeUUID();
        }

        this.props = this._makePropsProxy({ ...props, __id: this._id });

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName)
        //this._element = document.createDocumentFragment();
    }
    _createDocumentElement(tagName) {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this._id);
        return element;
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _render() {
        const block = this.render();
        this._removeEvents();
        this._element.innerHTML = block
        this._addEvents();
        console.log(this)
    }

    render() {}
    _componentDidMount(){
        this.componentDidMount();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount(){}
    get element() {
        return this._element
    }
    _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
    return;
}
this._render();
}

componentDidUpdate(
    oldProps,
    newProps
) {
    return oldProps !== newProps;
}

setProps = (nextProps)=> {
    if (!nextProps) {
        return;
    }

    Object.assign(this.props, nextProps);
};
    _makePropsProxy(target) {
        const self = this;

        return new Proxy(target, {
            get: (target, prop) => {
            const value = target[prop];
            return typeof value === 'function' ? value.bind(target) : value;
        },
            set: (target, prop, value) => {
                console.log(value)
            target[prop] = value;
            self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
            return true;
        },
            deleteProperty: () => {
            throw new Error('Нет доступа');
        },
    });
    }


    getContent() {
        return this.element;
    }

    _addEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.firstChild.addEventListener(eventName, events[eventName]);
        });
    }
    _removeEvents(){
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this.element.removeEventListener(eventName, events[eventName].bind(this));
        });
    }
    show() {
        this.getContent().style.display = "block";
    }

    hide() {

        this.getContent().style.display = 'none'
        }

}

export default Block