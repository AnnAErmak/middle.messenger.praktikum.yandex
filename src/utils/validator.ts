const REGEXPLOGIN = /^(?!\d+$)[\w-]{3,20}$/i;
const REGEXPNAME = /^[A-ZА-ЯЁ][A-Za-zА-Яа-яёЁ-]*$/;
const REGEXPPHONE = /^\+?\d{10,15}$/;
const REGEXPEMAIL = /^[a-z\d-]+@[a-z\d-]+\.[a-z]+$/i;
const REGEXPPASSWORD = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
const REGEXPMESSAGE = /.+/;

enum FIELDSNAMES {
  LOGIN = 'login',
  EMAIL = 'email',
  PHONE = 'phone',
  MESSAGE = 'message',
  PASSWORD = 'password',
  NEWPASSWORD = 'newPassword',
  PASSWORDAGAIN = 'passwordAgain',
  FIRST_NAME = 'first_name',
  SECOND_NAME = 'second_name',
}
type DataForm = {
  [key: string]: string;
};

const addError = (element: HTMLFormElement) => {
  const errorMessage: any = document.querySelector(`[data-name = ${element.name}]`);
  if (!element.classList.contains('error-validator')) {
    element.classList.add('error-validator');
    errorMessage.style.display = 'block';
  }
};

const removeError = (element: HTMLFormElement) => {
  const errorMessage: any = document.querySelector(`[data-name = ${element.name}]`);
  if (element.classList.contains('error-validator')) {
    element.classList.remove('error-validator');
    errorMessage.style.display = 'none';
  }
};

const isValidField = (nameElement: string, valueElement: string) => {
  switch (nameElement) {
    case FIELDSNAMES.LOGIN: {
      return REGEXPLOGIN.test(valueElement);
    }
    case FIELDSNAMES.EMAIL: {
      return REGEXPEMAIL.test(valueElement);
    }
    case FIELDSNAMES.PHONE: {
      return REGEXPPHONE.test(valueElement);
    }
    case FIELDSNAMES.MESSAGE: {
      return REGEXPMESSAGE.test(valueElement);
    }
    case FIELDSNAMES.PASSWORD:
    case FIELDSNAMES.PASSWORDAGAIN:
    case FIELDSNAMES.NEWPASSWORD: {
      return REGEXPPASSWORD.test(valueElement);
    }
    case FIELDSNAMES.FIRST_NAME:
    case FIELDSNAMES.SECOND_NAME: {
      return REGEXPNAME.test(valueElement);
    }
    default:
      return true;
  }
};

const validatorForm = (form: HTMLFormElement): DataForm | boolean => {
  const dataForm: DataForm = {};
  let error = 0;
  Array.from(form.elements).forEach((field:HTMLFormElement) => {
    if (field.tagName === 'INPUT') {
      if (!isValidField(field.name, field.value)) {
        addError(field);
        error += 1;
      }
      dataForm[field.name] = field.value;
    }
  });
  return error ? false : dataForm;
};

export {
  validatorForm,
  isValidField,
  removeError,
  addError,
};
