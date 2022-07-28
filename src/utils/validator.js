const regexpLogin = /^(?!\d+$)[\w-]{3,20}$/i
const regexpName = /^[A-ZА-ЯЁ][A-Za-zА-Яа-яёЁ-]*$/
const regexpPhone = /^\+?\d{10,15}$/
const regexpEmail = /^[a-z\d-]+@[a-z\d-]+\.[a-z]+$/i
const regexpPassword = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/
const regexpMessage = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/

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
        case 'password':
            let resPass = regexpPassword.test(field.value)
            !resPass ? decoratorInvalid(field) : decoratorValid(field)
            return resPass
            break;
        default:
            throw new Error (`Данный элемент ${field} не может быть провалидирован`)
            break
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
