import React, { useState, useCallback, useEffect } from 'react';
import TodoList from './components/TodoList';
import FormAddTodo from './components/FormAddTodo';

const App = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

    const removeTodo = useCallback((todo) => (_) => {
        setTodos(todos.filter(otherTodo => otherTodo !== todo));
    }, [todos]);

    useEffect(() => {
        fetch("http://localhost:5000/api/todo")
            .then(res => res.json())
            .then(response => {
                console.log('response', response);
                setTodos(response);
            })
            .catch(err => console.log('error', err))
    }, []);

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
        fetch("http://localhost:5000/api/todo", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: 0, content: newTodo, done: false})
        })
            .then(res => res.json())
            .then(response => {
                setTodos([ response, ...todos, ])
            })
            .catch(err => console.log('error', err));
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
