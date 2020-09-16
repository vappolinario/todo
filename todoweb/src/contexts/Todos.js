import React, { createContext, useState, useContext } from 'react';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    return (
        <TodosContext.Provider value={{ todos, setTodos, }} >
            {children}
        </TodosContext.Provider>
    )
};

const useTodos = () => {
    const context = useContext(TodosContext);
    const {todos, setTodos} = context;
    return {todos, setTodos};
};

export { TodosProvider, TodosContext, useTodos };
