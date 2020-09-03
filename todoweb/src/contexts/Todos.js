import React, { createContext, useState, useContext } from 'react';

export const TodosContext = createContext();

export default function TodosProvider ({ children }) {
    const [todos, setTodos] = useState([]);
    return (
        <TodosContext.Provider value={{ todos, setTodos, }} >
            {children}
        </TodosContext.Provider>
    )
};

export function useTodos() {
    const context = useContext(TodosContext);
    const {todos, setTodos} = context;
    return {todos, setTodos};
};

