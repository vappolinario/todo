import React from 'react';

const TodoItem = (props) => {
    return (
        <label className={props.todo.done ? 'completed-tasks' : ''}>
            <input
                checked={props.todo.done}
                type="checkbox"
                onChange={props.onChange(props.todo, props.index)}
            />
            {props.todo.content}
        </label>
    );
};

export default TodoItem;
