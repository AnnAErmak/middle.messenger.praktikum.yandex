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
    _id = null;
   constructor( props  = {}) {
        const eventBus = new EventBus();
        // const { children, props } = this._getChildren(propsAndChildren);
        this._children = props.children || {};

        const {settings} = props
        if(settings.withInternalID){
            this._id = makeUUID();
        }
        this.props = this._makePropsProxy({ ...props});
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    compile(template, props) {
        const propsAndStubs = { ...props };
        console.log(this._children)
        Object.entries(this._children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });
        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = template(propsAndStubs)
        Object.values(this._children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            stub.replaceWith(child.getContent());
        });
         return fragment.content;
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    init() {
        //this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _render() {
        const block = this.render();

        const newElement = block.firstElementChild;

        if (this._element) {
            this._removeEvents();
            this._element.replaceWith(newElement);
        //    console.log("EST",newElement)
        }
        //console.log("NOUP", newElement)
        this._element = newElement;

        this._addEvents();

    }

    render() {}
    _componentDidMount(){
        this.componentDidMount();
        Object.values(this._children).forEach(child => {
            child.dispatchComponentDidMount();
        });
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
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

componentDidUpdate(oldProps, newProps) {
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
            this._element.addEventListener(eventName, events[eventName]);
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

// _createResources() {
//     const { tagName } = this._meta;
//     this._element = this._createDocumentElement(tagName)
//     //this._element = document.createDocumentFragment();
// }
// _getChildren(propsAndChildren) {
//     const children = {};
//     const props = {};
//     //console.log(propsAndChildren)
//     Object.entries(propsAndChildren).forEach(([key, value]) => {
//         if (value instanceof Block) {
//             children[key] = value;
//         } else {
//             props[key] = value;
//         }
//     });
//
//     return { children, props };
// }