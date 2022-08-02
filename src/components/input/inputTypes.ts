import Input from './input';
import { IInput } from './types';

export const inputsLogin: IInput = {
  inputLogin: new Input('label', {
    inputType: 'text',
    name: 'login',
    placeholder: 'логин',
    labelName: 'Логин',
  }),
  inputPassword: new Input('label', {
    inputType: 'password',
    name: 'password',
    placeholder: 'пароль',
    labelName: 'Пароль',
  }),
};
export const inputsProfile: IInput = {
  inputEmail: new Input('label', {
    inputType: 'email',
    name: 'email',
    placeholder: 'почта',
    labelName: 'Почта',
    value: 'batman89@arkham.ru',
  }),
  inputLogin: new Input('label', {
    inputType: 'text',
    name: 'login',
    placeholder: 'логин',
    labelName: 'Логин',
    value: 'city_hero',
  }),
  inputFirstName: new Input('label', {
    inputType: 'text',
    name: 'first_name',
    placeholder: 'имя',
    labelName: 'Имя',
    value: 'Иван',
  }),
  inputSecondName: new Input('label', {
    inputType: 'text',
    name: 'second_name',
    placeholder: 'фамилия',
    labelName: 'Фамилия',
    value: 'Иванов',
  }),
  inputChatName: new Input('label', {
    inputType: 'text',
    name: 'chat_name',
    placeholder: 'имя в чате',
    labelName: 'Имя в чате',
    value: 'City hero',
  }),
  inputPhone: new Input('label', {
    inputType: 'phone',
    name: 'phone',
    placeholder: 'телефон',
    labelName: 'Телефон',
    value: '+0682713737',
  }),
};
export const inputs: IInput = {
  inputEmail: new Input('label', {
    inputType: 'email',
    name: 'email',
    placeholder: 'почта',
    labelName: 'Почта',
  }),
  inputLogin: new Input('label', {
    inputType: 'text',
    name: 'login',
    placeholder: 'логин',
    labelName: 'Логин',
  }),
  inputFirstName: new Input('label', {
    inputType: 'text',
    name: 'first_name',
    placeholder: 'имя',
    labelName: 'Имя',
  }),
  inputSecondName: new Input('label', {
    inputType: 'text',
    name: 'second_name',
    placeholder: 'фамилия',
    labelName: 'Фамилия',
  }),
  inputPhone: new Input('label', {
    inputType: 'phone',
    name: 'phone',
    placeholder: 'телефон',
    labelName: 'Телефон',
  }),
  inputPassword: new Input('label', {
    inputType: 'password',
    name: 'password',
    placeholder: 'пароль',
    labelName: 'Пароль',
  }),
  inputPasswordAgain: new Input('label', {
    inputType: 'password',
    name: 'passwordAgain',
    placeholder: 'пароль (еще раз)',
    labelName: 'Пароль (еще раз)',
  }),
};
