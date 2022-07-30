const regexpLogin = /^(?!\d+$)[\w-]{3,20}$/i
const regexpName = /^[A-ZА-ЯЁ][A-Za-zА-Яа-яёЁ-]*$/
const regexpPhone = /^\+?\d{10,15}$/
const regexpEmail = /^[a-z\d-]+@[a-z\d-]+\.[a-z]+$/i
const regexpPassword = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/
const regexpMessage = /.+/

const isValidForm =  (form) => {
    const dataForm = {}
    let errors  = 0
    Array.from(form.elements).forEach(field => {
        if(field.tagName === "INPUT"){
            (isValidField(field))
                ? dataForm[field.name] = field.value
                : errors++
        }
    })
    errors
        ? console.log('необходимо корректно заполнить все поля формы!!!')
        : console.log(dataForm)
}
const isValidField =  (field) => {
    switch (field.name) {
        case 'login':
            let resLogin = regexpLogin.test(field.value)
            !resLogin ? decoratorInvalid(field) : decoratorValid(field)
            return resLogin
            break;
        case 'email':
            let resEmail = regexpEmail.test(field.value)
            !resEmail ? decoratorInvalid(field) : decoratorValid(field)
            return resEmail
            break;
        case 'phone':
            let resMass = regexpPhone.test(field.value)
            !resMass ? decoratorInvalid(field) : decoratorValid(field)
            return resMass
            break;
        case 'message':
            let resPhone = regexpMessage.test(field.value)
            !resPhone ? decoratorInvalid(field) : decoratorValid(field)
            return resPhone
            break;
        case 'password':
        case 'passwordAgain':
            let resPass = regexpPassword.test(field.value)
            !resPass ? decoratorInvalid(field) : decoratorValid(field)
            return resPass
            break;
        case 'first_name':
        case 'second_name':
            let resName = regexpName.test(field.value)
            !resName ? decoratorInvalid(field) : decoratorValid(field)
            return resName
            break;
        case 'img-menu':
        case 'sub':
        case 'chat_name':
            return true
            break;
        default:
            throw new Error (`Данный элемент ${field} не может быть провалидирован`)
    }
}
const decoratorInvalid = (element) =>{
    if(!element.classList.contains('error-validator')){
        element.classList.add('error-validator')
    }
}
const decoratorValid = (element) =>{
    if(element.classList.contains('error-validator')){
        element.classList.remove('error-validator')
    }
}

export const isValid = (element) => {
    (element.tagName === "FORM") ? isValidForm(element) : isValidField(element)

};
