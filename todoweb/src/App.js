import React from 'react';
import TokenProvider from './contexts/Token';
import Login from './components/Login';
import TodosProvider from './contexts/Todos';

const App = () => {
    return (
        <TokenProvider>
            <TodosProvider>
                <Login/>
            </TodosProvider>
        </TokenProvider>
    );
};

export default App;
