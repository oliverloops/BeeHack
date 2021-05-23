import React, { useState } from 'react';
import { Button, Input, Spacer, Text, useTheme } from '@geist-ui/react';
import styled from 'styled-components';
//  Icon/Logo
import Logo from '../assets/Logo.png'
//  Validations
import useValidation from '../hooks/useValidation';
import validateLogin from '../validation/validateLogin';

//  Redirect
import { useHistory } from 'react-router-dom';

//  Initial state
const INITIAL_STATE = {
    email: '',
    password: ''
}

const LoginContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const LoginTitleCont = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 150px;
        margin-bottom: 20px;
    }
`;

const LoginFormCont = styled.div`
    width: 700px;
    margin-top: 50px;
    background: #eaeaea;
    padding: 80px 20px;
    box-sizing: border-box;
    border-radius: 20px;
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
            margin-top: 50px;
        }
    }
    @media ( max-width: 700px ) {
        width: 95%;
    }
`;

const Login = () => {

    let history = useHistory();

    const { palette } = useTheme();

    const [error, getError] = useState(false);
    
    const { values, errors, handleChange, handleSubmit, handleBlur } = useValidation(INITIAL_STATE, validateLogin, login);

    const { email, password } = values;

    //  Hcerla Async Await
    function login() {
        try {
            fetch ( 'https://ug-groups.herokuapp.com/log-in' , {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { "Content-type" : "application/json; charset=UTF-8" }
            })
            .then(response => response.json())
            .catch(err => console.log(err));
            history.push('/home')
        } catch (error) {
            console.error('Hubo un error al iniciar sesión', error.message);
            getError(error.message)
        }
    }

    return ( 
        <LoginContainer>
            <LoginTitleCont>
                <img src={Logo} alt ="logo" />
                <Text h1 size={50} style={{color: "#333333"}}>Iniciar Sesión</Text>
            </LoginTitleCont>
            <LoginFormCont>
                { errors.email && <Text h4 type="error" style={{textAlign: 'center'}}>{errors.email}</Text> }
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <Input 
                        status="secondary" 
                        type="text" 
                        placeholder="Correo Institucional" 
                        width="100%" 
                        size="large"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Spacer y={2} />
                    { errors.password && <Text h4 type="error" style={{textAlign: 'center'}}>{errors.password}</Text> }
                    <Input 
                        status="secondary" 
                        type="password" 
                        placeholder="Contraseña" 
                        width="100%"
                        size="large"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Button
                        onClick={handleSubmit}
                        size="large" 
                        type="warning"
                        style={{ background: palette.warningLight }}
                    >Acceder</Button>
                </form>
            </LoginFormCont>
        </LoginContainer>
     );
}
 
export default Login;