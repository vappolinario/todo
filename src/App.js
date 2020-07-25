import React, { useState, useCallback, useEffect } from 'react';

const App = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const onNewTodoChange = useCallback((e) => {setNewTodo(e.target.value)}, []);

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

    useEffect(() => {
        console.log('todos', todos);
    }, [todos]);

    const addTodo = useCallback((todo, index) => (event) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1, {
            ...todo,
            done: !todo.done
        });
        setTodos(newTodos);
    }, [todos]);

    const removeTodo = useCallback((todo) => (event) => {
        setTodos(todos.filter(otherTodo => otherTodo !== todo));
    }, [todos]);

    return (
    <div>
        <form onSubmit={formSubmitted}>
            <label htmlFor="New todo">Enter task:</label>
            <input
                id="newTodo"
                name="newTodo"
                value={newTodo}
                onChange={onNewTodoChange}
            />
            <button>Add Todo</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={todo.id} >
                    <input
                        checked={todo.done}
                        type="checkbox"
                        onChange={addTodo(todo, index)}
                    />
                    <span className={todo.done ? 'done' : ''}>{todo.content}</span>
                    <button onClick={removeTodo(todo)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default App;
