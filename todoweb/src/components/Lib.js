import styled from 'styled-components';

export const Button = styled.button`
    outline: none;
    border: none;
    background: none;
    color: #888;
    font-size: 15px;
    width: 60px;
    margin: 10px 0 0;
    font-family: Lato, sans-serif;
    cursor: pointer;
    float: right;

    &:hover {
        color: #333;
    }
`;

export const AddButton = styled(Button)``;

export const Header = styled.h3`
    color: #333;
    font-weight: 700;
    font-size: 15px;
    border-bottom: 2px solid #333;
    padding: 20px 0 10px;
    margin: 2;
    text-transform: uppercase;
    clear: both;
    list-style: none;
`;

export const Input = styled.input`
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    height: 18px;
    padding: 10px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
    font-family: Lato, sans-serif;
    color: #888;
    float: left;
    width: 318px;

    &:focus {
        color: #333;
    }
`;

export const Container = styled.div`
    display: block;
    width: 400px;
    margin: 10px auto 100px;
    background-color:#fff;
    padding:0px 10px 10px 10px;
    border-radius:10px;
`;

export const Title = styled.h2`
    text-align:center;
    padding-top:10px;
    margin-bottom:0px;
`;

export const Label = styled.label`
      padding: 20px;
      background-color: #f44336; /* Red */
      color: white;
      margin-bottom: 15px;
`;

export const ItemLabel = styled.label`
    text-decoration: ${props => props.todo.done ? "line-through" : ""};
    color: ${props => props.todo.done ? "#888" : "black"};
    font-size: 18px;
    line-height: 20px;
    width: 200px;
    padding: 0 0 0 11px;
    margin-right: 10px;
`;

export const RemoveButton = styled(Button)`
    color: #888;
    &:hover {
        color: #CF2323;
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
`;

export const ItemList = styled.li`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
`;
