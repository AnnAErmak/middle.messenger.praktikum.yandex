import '../../globalStyles/globalStyles.scss';
import './errors.scss';
import PageError from "./PageError";
import {renderTemplate} from "../../utils/utils";

const page404 = new PageError('div', {
    codeError: '404',
    textError: 'не туда попали',
    attr:{
        class: 'container'
    }
})

renderTemplate('#root', page404)