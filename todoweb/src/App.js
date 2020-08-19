import React, { useState, useEffect } from 'react';
import TodoApp from './components/TodoApp';
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
                <TodoApp keycloak={keycloak.keycloak}/>
            );
        } else {
            return <p>Login falhou</p>;
        }
    }
    return <p>Iniciando keycloak</p>;
};

export default App;
