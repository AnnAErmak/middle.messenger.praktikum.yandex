import './chat.scss';
import headerTemplate from '../../components/header/header';
import chatTemplate from './chat.hbs';
import {renderTemplate} from '../../utils/utils';


const htmlChat = chatTemplate();
const htmlHeader = headerTemplate();
renderTemplate([htmlHeader, htmlChat])