import React, { useState, useEffect } from 'react';
import TodoApp from './components/TodoApp';
import ErrorLabel from './components/ErrorLabel.js';
import Keycloak from 'keycloak-js';

const App = () => {
    const [keycloak, setKeycloak] = useState('');

    useEffect(() => {
        const kc = Keycloak('/keycloak.json');
        kc.init({onLoad: 'login-required'})
            .then(authenticated => {
                setKeycloak({keycloak: kc, authenticated: authenticated})
            });
    }, []);

    if (keycloak) {
        if (keycloak.authenticated) {
            return (
                <TodoApp auth={keycloak.keycloak}/>
            );
        } else {
            return <ErrorLabel error="Login falhou" />;
        }
    }
    return <p>Iniciando keycloak</p>;
};

export default App;
