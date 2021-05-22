export default function validateLogin(values) {

    let errors = {};

    //  Validar el email
    if ( !values.email ) {
        errors.email = "El email es obligatorio";
    } else if (!values.email.includes("@ugto.mx"))  {
        errors.email = "Email no válido";
    }

    // if ( !values.email ) {
    //     errors.email = "El email es obligatorio";
    // } else if ( /^[\w-\._\+%]+@(live|hotmail|outlook|aol|yahoo|rocketmail|gmail|gmx\.com|mail.com|inbox.com|icloud|aim|yandex|zoho)\./.test(values.email) ) {
    //     errors.email = "Email no válido";
    // }

    //  Validar el password
    if ( !values.password ) {
        errors.password = "El password es obligatorio";
    } else if ( values.password.length < 6 ) {
        errors.password = "El password debe ser de al menos 6 caracteres";
    }

    return errors;
}