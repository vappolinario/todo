import React from 'react';
import TokenProvider from './contexts/Token';
import Login from './components/Login';

const App = () => {
    return (
        <TokenProvider>
            <Login/>
        </TokenProvider>
    );
};

export default App;
