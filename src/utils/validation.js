
// Email Validation
export const validateEmail = (email) => {
    let regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    return email.match(regex);
}

// Phone Validation
export const validatePhone = (phone) => {
    let regex = /^(\+\d{1,3}[- ]?)?\d{10,13}$/
    let length = phone.length <= 13
    return regex.test(phone) && length
}
