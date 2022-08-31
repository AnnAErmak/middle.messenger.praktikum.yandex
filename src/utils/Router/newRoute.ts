import {renderTemplate} from "../renderTemplate";

export default class newRoute {

    view;
    path;
    block;
    props;
    tag;

    constructor(path, view) {
        this.path = path;
        this._block = view;
        this.block = null;
    }

    render() {

        if(!this.block)
        {
            this.block = new this._block();
            renderTemplate('#root', this.block);
            return;
        }

        this.block.show();
    }

    navigate(path) {
        if (this.match(path))
            this.render();
    }

    leave(){
        if(this.block)
            this.block.hide();
    }

    match(path) {
        // if(this.props.withId)
        //     return path.includes(this.path);
        return path == this.path;
    }
}