import React, { useState, useCallback, useEffect } from 'react';
import TodoList from './TodoList';
import FormAddTodo from './FormAddTodo';
import ErrorLabel from './ErrorLabel';
import {
    getTodoList,
    addTodoItem,
    toggleTodoState,
    removeTodoItem} from '../clients/todoclient.js';

const TodoApp = ({keycloak}) => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');

    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    useEffect(() => {
        getTodoList(keycloak.token, (items) => setTodos(items));
    }, [keycloak]);

    const removeTodo = useCallback((todo) => (_) => {
        removeTodoItem(todo.id, keycloak.token, () => setTodos(todos.filter(otherTodo => otherTodo !== todo)));
    }, [todos, keycloak]);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        toggleTodoState(todo, keycloak.token, () => setTodos(newTodos));
    }, [todos, keycloak]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        const newItem = { id: 0, content: newTodo, done: false };
        addTodoItem(
            newItem,
            keycloak.token,
            (response) => {
                setTodos([ response, ...todos, ]);
                setNewTodo('');
            });
    }, [todos, newTodo, keycloak]);

    return (
        <div className="container">
            <h2>Todo List</h2>
            <FormAddTodo newTodo={newTodo} onFormSubmitted={formSubmitted} onNewTodoChange={onNewTodoChange} />
            <TodoList todos={todos} onRemoveClick={removeTodo} onCheckToggle={toggleTodo} />
            <ErrorLabel error={error}/>
        </div>
    );
};

export default TodoApp;

