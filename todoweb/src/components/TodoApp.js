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
import { useTodos } from '../contexts/Todos';

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
    const { todos, setTodos } = useTodos();

    const [error] = useState('');

    useEffect(() => {
        getTodoList(token, (items) => setTodos(items));
    }, [setTodos, token]);

    const removeTodo = useCallback((todo) => (_) => {
        removeTodoItem(
            todo.id,
            token,
            () => setTodos(todos.filter(otherTodo => otherTodo !== todo))
        );
    }, [todos, token, setTodos]);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        toggleTodoState(todo, token, () => setTodos(newTodos));
    }, [todos, token, setTodos]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        const item = e.target[0].value;
        if (!item.trim()) return;
        const newItem = { id: 0, content: item, done: false };
        addTodoItem(
            newItem,
            token,
            (response) => {
                setTodos([ response, ...todos, ]);
            });
    }, [todos, token, setTodos]);

    return (
        <Container>
            <Title>Todo List</Title>
            <FormAddTodo
                onFormSubmitted={formSubmitted}
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

