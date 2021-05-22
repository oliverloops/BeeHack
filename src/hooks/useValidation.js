import { useState, useEffect } from 'react';

const useValidation = (initialState, validate, fn) => {

    const [values, getValues] = useState(initialState);
    const [errors, getErrors] = useState({});
    const [submitForm, getSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrors = Object.keys(errors.length === 0);

            if(noErrors) {
                fn(); //    fn= Funcion que se ejecuta en el componente
            }
            getSubmitForm(false);
        }
    }, [errors]);

    //  Funcion que se ejecuta conforme el usuario escribe algo

    const handleChange = e => {
        getValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    //  Funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const errorValidation = validate(values);
        getErrors(errorValidation);
        getSubmitForm(true);
    }

    // Cuando se revisa el evento de blur
    const handleBlur = () => {
        const errorValidation = validate(values);
        getErrors(errorValidation);
    } 

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur
    };
}
 
export default useValidation;