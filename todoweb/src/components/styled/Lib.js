import styled from 'styled-components';
import { styledConfig } from './styled.theme';

export const Button = styled.button`
    outline: none;
    border: none;
    background: none;
    color: ${styledConfig.colors.disabled};
    font-size: 15px;
    width: 60px;
    margin: 10px 0 0;
    font-family: Lato, sans-serif;
    cursor: pointer;
    float: right;

    &:hover {
        color: ${styledConfig.colors.header};
    }
`;

export const AddButton = styled(Button)``;

export const Header = styled.h3`
    color: ${styledConfig.colors.header};
    font-weight: 700;
    font-size: 15px;
    border-bottom: 2px solid ${styledConfig.colors.header};
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
    border: 1px solid ${styledConfig.colors.disabled};
    background: ${styledConfig.colors.background};
    border-radius: 6px;
    font-family: Lato, sans-serif;
    color: ${styledConfig.colors.disabled};
    float: left;
    width: 318px;

    &:focus {
        color: ${styledConfig.colors.header};
    }
`;

export const Container = styled.div`
    display: block;
    width: 400px;
    margin: 10px auto 100px;
    background-color: ${styledConfig.colors.background};
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
      background-color: ${styledConfig.colors.error};  /* Red */
      color: ${styledConfig.colors.background};
      margin-bottom: 15px;
`;

export const ItemLabel = styled.label`
    text-decoration: ${props => props.todo.done ? "line-through" : ""};
    color: ${props => props.todo.done ? styledConfig.colors.disabled : styledConfig.colors.textColor};
    font-size: 18px;
    line-height: 20px;
    width: 200px;
    padding: 0 0 0 11px;
    margin-right: 10px;
`;

export const RemoveButton = styled(Button)`
    color: ${styledConfig.colors.disabled};
    &:hover {
        color: ${styledConfig.colors.error};
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
`;

export const ItemList = styled.li`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid ${styledConfig.colors.disabled};
`;
