import headerTemplate from '../../components/header/header';

const root = document.querySelector('#root');
const htmlHeader = headerTemplate();
root.insertAdjacentHTML('afterbegin', htmlHeader);
