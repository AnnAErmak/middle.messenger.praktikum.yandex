import EventBus from './EventBus'
import {v4 as makeUUID} from 'uuid';

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };
    _props
    _children
    _id
    _element
    _meta
    _eventBus
    _setUpdate = false

   constructor(tag = "div", propsAndChildren  = {}) {
    const { children, props} = this.getChildren(propsAndChildren)
       this._eventBus = new EventBus()
       this._id = makeUUID()
       this._children = children
       this._children = this._makePropsProxy(children)
       this._props = this._makePropsProxy({...props, __id: this._id})
       this._meta = {tag, props}
       this._registerEvents()
       this._eventBus.emit(Block.EVENTS.INIT)
    }
    _registerEvents() {
        this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }
    compile(template, props) {
        if(typeof (props) == 'undefined'){
            props = this._props
        }
        const propsAndStubs = { ...props };
        Object.entries(this._children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });
        const fragment = this._createDocumentElement('template');
        fragment.innerHTML = template(propsAndStubs)
        Object.values(this._children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            if(stub) stub.replaceWith(child.getContent());
        });
        return fragment.content;
    }

    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    init() {
        this._element = this._createDocumentElement(this._meta.tag)
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    _render() {
        const block = this.render();
        this._removeEvents();
        this._element.innerHTML = ''
        this._element.appendChild(block)
        this._addEvents();
        this.addAttribute();
    }

    render() {}

    _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER)
        }

}

componentDidUpdate(oldProps, newProps) {
    return true;
}

setProps = (nextProps)=> {
    if (!nextProps) {
        return;
    }
    this._setUpdate = false
    const oldValue = {...this._props}
    const {children, props} = this.getChildren(nextProps)

    if(Object.values(children).length){
        Object.assign(this._children, children)
    }
    if(Object.values(props).length){
        Object.assign(this._props, props);
    }
    if(this._setUpdate){
        this._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, this._props)
        this._setUpdate = false
    }

};
    _makePropsProxy(props) {
        return new Proxy(props, {
            get: (target, prop) => {
            const value = target[prop];
            return typeof value === 'function' ? value.bind(target) : value;
        },
            set: (target, prop, value) => {
                if(target[prop] !== value){
                    target[prop] = value
                    this._setUpdate = true
                }
                return true
        },
            deleteProperty: () => {
            throw new Error('Нет доступа');
        },
    });
    }

    getContent() {
        return this._element;
    }

    _addEvents() {
        const {events = {}} = this._props;

        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }
    _removeEvents(){
        const { events = {} } = this._props;

        Object.keys(events).forEach((eventName) => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    }
    addAttribute(){
        const {attr = {}} = this._props
        Object.entries(attr).forEach(([key, value]) => {
            this._element.setAttribute(key, value)
        })
    }
    getChildren(propsAndChildren ){
        const children = {}
        const props = {}
        Object.entries(propsAndChildren ).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });
        return { children, props };
    }
    _componentDidMount(){
        this.componentDidMount();
        Object.values(this._children).forEach(child => {
            child.dispatchComponentDidMount();
        });

    }
    dispatchComponentDidMount() {
        this._eventBus.emit(Block.EVENTS.FLOW_CDM);
        if(Object.keys(this._children).length){
            this._eventBus.emit(Block.EVENTS.FLOW_RENDER)
        }
    }
    componentDidMount(){}

    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = 'none'
        }
}

export default Block
