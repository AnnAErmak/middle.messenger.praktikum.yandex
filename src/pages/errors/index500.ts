import '../../globalStyles/globalStyles.scss';
import './errors.scss';
import { PageError } from './PageError';
import { renderTemplate } from '../../utils/utils';

const page500 = new PageError('div', {
  codeError: '500',
  textError: 'мы уже фиксим',
  attr: {
    class: 'container',
  },
});

renderTemplate('#root', page500);
