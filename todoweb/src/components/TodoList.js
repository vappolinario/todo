import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div>
            <h3>Tasks</h3>
            <ul>
                {props.todos.map((todo, index) => (
                    <li key={todo.id} >
                        <TodoItem todo={todo} index={index} onChange={() => props.onCheckToggle(todo, index)} />
                        <button className="delete" onClick={props.onRemoveClick(todo)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
