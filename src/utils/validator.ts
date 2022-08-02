const regexpLogin = /^(?!\d+$)[\w-]{3,20}$/i;
const regexpName = /^[A-ZА-ЯЁ][A-Za-zА-Яа-яёЁ-]*$/;
const regexpPhone = /^\+?\d{10,15}$/;
const regexpEmail = /^[a-z\d-]+@[a-z\d-]+\.[a-z]+$/i;
const regexpPassword = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;
const regexpMessage = /.+/;

type DataForm = {
  [key: string]: string;
};

const decoratorInvalid = (element: HTMLFormElement) => {
  if (!element.classList.contains('error-validator')) {
    element.classList.add('error-validator');
  }
};
const decoratorValid = (element: HTMLFormElement) => {
  if (element.classList.contains('error-validator')) {
    element.classList.remove('error-validator');
  }
};

const isValidField = (field: HTMLFormElement) => {
  switch (field.name) {
    case 'login': {
      const resLogin = regexpLogin.test(field.value);
      !resLogin ? decoratorInvalid(field) : decoratorValid(field);
      return resLogin;
    }
    case 'email': {
      const resEmail = regexpEmail.test(field.value);
      !resEmail ? decoratorInvalid(field) : decoratorValid(field);
      return resEmail;
    }
    case 'phone': {
      const resMass = regexpPhone.test(field.value);
      !resMass ? decoratorInvalid(field) : decoratorValid(field);
      return resMass;
    }
    case 'message': {
      const resPhone = regexpMessage.test(field.value);
      !resPhone ? decoratorInvalid(field) : decoratorValid(field);
      return resPhone;
    }
    case 'password':
    case 'passwordAgain': {
      const resPass = regexpPassword.test(field.value);
      !resPass ? decoratorInvalid(field) : decoratorValid(field);
      return resPass;
    }
    case 'first_name':
    case 'second_name': {
      const resName = regexpName.test(field.value);
      !resName ? decoratorInvalid(field) : decoratorValid(field);
      return resName;
    }
    case 'img-menu':
    case 'sub':
    case 'chat_name':
      return true;
    default:
      throw new Error(`Данный элемент ${field} не может быть провалидирован`);
  }
};

const isValidForm = (form: HTMLFormElement): void => {
  const dataForm: DataForm = {};
  let errors = 0;
  Array.from(form.elements).forEach((field:HTMLFormElement) => {
    if (field.tagName === 'INPUT') {
      isValidField(field)
        ? dataForm[field.name] = field.value
        : errors += 1;
    }
  });
  errors
    ? console.log('необходимо корректно заполнить все поля формы!!!')
    : console.log(dataForm);
};

function isValid(element: HTMLFormElement): void {
  (element.tagName === 'FORM') ? isValidForm(element) : isValidField(element);
}

export default isValid;
