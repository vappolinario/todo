import React, { useState, useCallback, useEffect } from 'react';
import TodoList from './TodoList';
import FormAddTodo from './FormAddTodo';
import ErrorLabel from './ErrorLabel';
import {
    getTodoList,
    addTodoItem,
    toggleTodoState,
    removeTodoItem} from '../clients/todoclient.js';

const TodoApp = ({auth}) => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState('');

    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    useEffect(() => {
        getTodoList(auth.token, (items) => setTodos(items));
    }, [auth]);

    const removeTodo = useCallback((todo) => (_) => {
        removeTodoItem(
            todo.id,
            auth.token,
            () => setTodos(todos.filter(otherTodo => otherTodo !== todo))
        );
    }, [todos, auth]);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        toggleTodoState(todo, auth.token, () => setTodos(newTodos));
    }, [todos, auth]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        const newItem = { id: 0, content: newTodo, done: false };
        addTodoItem(
            newItem,
            auth.token,
            (response) => {
                setTodos([ response, ...todos, ]);
                setNewTodo('');
            });
    }, [todos, newTodo, auth]);

    return (
        <div className="container">
            <h2>Todo List</h2>
            <FormAddTodo
                newTodo={newTodo}
                onFormSubmitted={formSubmitted}
                onNewTodoChange={onNewTodoChange}
            />
            <TodoList
                todos={todos}
                onRemoveClick={removeTodo}
                onCheckToggle={toggleTodo}
            />
            <ErrorLabel error={error}/>
        </div>
    );
};

export default TodoApp;

