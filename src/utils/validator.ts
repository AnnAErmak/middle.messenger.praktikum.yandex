const regexpLogin = /^(?!\d+$)[\w-]{3,20}$/i;
const regexpName = /^[A-ZА-ЯЁ][A-Za-zА-Яа-яёЁ-]*$/;
const regexpPhone = /^\+?\d{10,15}$/;
const regexpEmail = /^[a-z\d-]+@[a-z\d-]+\.[a-z]+$/i;
const regexpPassword = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
const regexpMessage = /.+/;

enum FIELDSNAMES {
  LOGIN = 'login',
  EMAIL = 'email',
  PHONE = 'phone',
  MESSAGE = 'message',
  PASSWORD = 'password',
  PASSWORDAGAIN = 'passwordAgain',
  FIRST_NAME = 'first_name',
  SECOND_NAME = 'second_name',
}
type DataForm = {
  [key: string]: string;
};

const toggleError = (element: HTMLFormElement) => {
  const errorMessage: any = document.querySelector(`[data-name = ${element.name}]`);
  if (!element.classList.contains('error-validator')) {
    element.classList.add('error-validator');
    errorMessage.style.display = 'block';
  } else {
    element.classList.remove('error-validator');
    errorMessage.style.display = 'none';
  }
};

const isValidField = (nameElement: string, valueElement: string) => {
  switch (nameElement) {
    case FIELDSNAMES.LOGIN: {
      return regexpLogin.test(valueElement);
    }
    case FIELDSNAMES.EMAIL: {
      return regexpEmail.test(valueElement);
    }
    case FIELDSNAMES.PHONE: {
      return regexpPhone.test(valueElement);
    }
    case FIELDSNAMES.MESSAGE: {
      return regexpMessage.test(valueElement);
    }
    case FIELDSNAMES.PASSWORD:
    case FIELDSNAMES.PASSWORDAGAIN: {
      return regexpPassword.test(valueElement);
    }
    case FIELDSNAMES.FIRST_NAME:
    case FIELDSNAMES.SECOND_NAME: {
      return regexpName.test(valueElement);
    }
    default:
      return true;
  }
};

const validatorForm = (form: HTMLFormElement): DataForm | string => {
  const dataForm: DataForm = {};
  Array.from(form.elements).forEach((field:HTMLFormElement) => {
    if (field.tagName === 'INPUT') {
      if (!isValidField(field.name, field.value)) {
        toggleError(field);
      }
      dataForm[field.name] = field.value;
    }
  });
  return dataForm;
};

export {
  validatorForm,
  isValidField,
  toggleError,
};
