import React, { useState, useEffect } from 'react';
import TodoApp from './TodoApp';
import ErrorLabel from './ErrorLabel.js';
import Keycloak from 'keycloak-js';
import { useToken } from '../contexts/Token';

const Login = () => {
    const [keycloak, setKeycloak] = useState('');
    const { setToken, setAuthenticated, authenticated } = useToken();

    useEffect(() => {
        const kc = Keycloak('/keycloak.json');
        kc.init({onLoad: 'login-required'})
            .then(authenticated => {
                setKeycloak({keycloak: kc, authenticated: authenticated})
                setToken(kc.token);
                setAuthenticated(authenticated);
            });
    }, [setToken, setAuthenticated]);

    if (keycloak) {
        if (authenticated) {
            return (
                <TodoApp auth={keycloak.keycloak}/>
            );
        } else {
            return <ErrorLabel error="Login falhou" />;
        }
    }
    return <p>Iniciando keycloak</p>;
};

export default Login;

