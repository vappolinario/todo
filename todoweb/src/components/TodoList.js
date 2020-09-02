import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import {Button} from './Button.js';
import {Header} from './Header.js';

const RemoveButton = styled(Button)`
    color: #888;
    &:hover {
        color: #CF2323;
    }
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
`;

const ItemList = styled.li`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
`;

const TodoList = (props) => {
    return (
        <div>
            <Header>Tasks</Header>
            <List>
                {props.todos.map((todo, index) => (
                    <ItemList key={todo.id} >
                        <TodoItem todo={todo} index={index} onChange={() => props.onCheckToggle(todo, index)} />
                        <RemoveButton onClick={props.onRemoveClick(todo)}>Remove</RemoveButton>
                    </ItemList>
                ))}
            </List>
        </div>
    );
};

export default TodoList;
