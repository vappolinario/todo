import React from 'react';
import styled from 'styled-components';

const ItemLabel = styled.label`
    text-decoration: ${props => props.todo.done ? "line-through" : ""};
    color: ${props => props.todo.done ? "#888" : "black"};
    font-size: 18px;
    line-height: 20px;
    width: 200px;
    padding: 0 0 0 11px;
    margin-right: 10px;
`;

const TodoItem = (props) => {
    return (
        <ItemLabel todo={props.todo}>
            <input
                checked={props.todo.done}
                type="checkbox"
                onChange={props.onChange(props.todo, props.index)}
            />
            {props.todo.content}
        </ItemLabel>
    );
};

export default TodoItem;
