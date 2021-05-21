import React from 'react';
import { Button, Input } from '@geist-ui/react';
import styled from 'styled-components';

const Login = () => {
    return ( 
        <div>
            <div>
                <img src="#" alt ="logo" />
                <h1>Iniciar Sesión</h1>
            </div>
            <div>
                <form>
                    <Input type="text" placeholder="Correo Institucional" />
                    <Input type="password" placeholder="Contraseña" />
                    <Button>Acceder</Button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;