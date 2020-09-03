import React, { useState, useCallback, useEffect } from 'react';
import TodoList from './TodoList';
import FormAddTodo from './FormAddTodo';
import ErrorLabel from './ErrorLabel';
import {
    getTodoList,
    addTodoItem,
    toggleTodoState,
    removeTodoItem} from '../clients/todoclient.js';
import styled from 'styled-components';

import { useToken } from '../contexts/Token';

const Container = styled.div`
    display: block;
    width: 400px;
    margin: 10px auto 100px;
    background-color:#fff;
    padding:0px 10px 10px 10px;
    border-radius:10px;
`;

const Title = styled.h2`
    text-align:center;
    padding-top:10px;
    margin-bottom:0px;
`;

const TodoApp = () => {
    const { token } = useToken();

    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [error] = useState('');

    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    useEffect(() => {
        getTodoList(token, (items) => setTodos(items));
    }, [token]);

    const removeTodo = useCallback((todo) => (_) => {
        removeTodoItem(
            todo.id,
            token,
            () => setTodos(todos.filter(otherTodo => otherTodo !== todo))
        );
    }, [todos, token]);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        toggleTodoState(todo, token, () => setTodos(newTodos));
    }, [todos, token]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        const newItem = { id: 0, content: newTodo, done: false };
        addTodoItem(
            newItem,
            token,
            (response) => {
                setTodos([ response, ...todos, ]);
                setNewTodo('');
            });
    }, [todos, newTodo, token]);

    return (
        <Container>
            <Title>Todo List</Title>
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
        </Container>
    );
};

export default TodoApp;

