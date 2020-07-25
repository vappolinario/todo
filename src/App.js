import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';
import FormAddTodo from './FormAddTodo';

const App = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    const removeTodo = useCallback((todo) => (_) => {
        setTodos(todos.filter(otherTodo => otherTodo !== todo));
    }, [todos]);

    const toggleTodo = useCallback((todo, index) => (_) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        setTodos(newTodos);
    }, [todos]);

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        setTodos([
            {
                id: todos.length ? todos[0].id + 1 : 1,
                content: newTodo,
                done: false,
            },
            ...todos,
        ]);
        setNewTodo('');
    }, [todos, newTodo]);

    return (
        <div className="container">
            <h2>Todo List</h2>
            <FormAddTodo newTodo={newTodo} onFormSubmitted={formSubmitted} onNewTodoChange={onNewTodoChange} />
            <TodoList todos={todos} onRemoveClick={removeTodo} onCheckToggle={toggleTodo} />
        </div>
    );
};

export default App;
