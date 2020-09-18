import styled from 'styled-components';
import { styledConfig } from './styled.theme';

export const Button = styled.button`
    //Box Model
    width: 60px;
    margin: 10px 0 0;
    float: right;

    //Typograohy
    color: ${styledConfig.colors.disabled};
    font-size: 15px;
    font-family: Lato, sans-serif;

    //Visual
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: ${styledConfig.colors.header};
    }
`;

export const AddButton = styled(Button)``;

export const Header = styled.h3`
    //Box Model
    margin: 2;
    border-bottom: 2px solid ${styledConfig.colors.header};
    padding: 20px 0 10px;

    //Typography
    color: ${styledConfig.colors.header};
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;

    //Visual
    clear: both;
    list-style: none;
`;

export const Input = styled.input`
    //Box Model
    margin: 0;
    height: 18px;
    padding: 10px;
    float: left;
    width: 318px;

    //Typography
    font-size: 18px;
    line-height: 18px;
    font-family: Lato, sans-serif;
    color: ${styledConfig.colors.disabled};

    //Visual
    border: 1px solid ${styledConfig.colors.disabled};
    background: ${styledConfig.colors.background};
    border-radius: 6px;

    &:focus {
        color: ${styledConfig.colors.header};
    }
`;

export const Container = styled.div`
    //Box Model
    display: block;
    width: 400px;
    margin: 10px auto 100px;
    padding:0px 10px 10px 10px;

    //Visual
    background-color: ${styledConfig.colors.background};
    border-radius:10px;
`;

export const Title = styled.h2`
    text-align:center;
    padding-top:10px;
    margin-bottom:0px;
`;

export const Label = styled.label`
      padding: 20px;
      margin-bottom: 15px;

      color: ${styledConfig.colors.background};

      background-color: ${styledConfig.colors.error};  /* Red */
`;

export const ItemLabel = styled.label`
    width: 200px;
    padding: 0 0 0 11px;
    margin-right: 10px;
    line-height: 20px;

    text-decoration: ${props => props.todo.done ? "line-through" : ""};
    color: ${props => props.todo.done ? styledConfig.colors.disabled : styledConfig.colors.textColor};
    font-size: 18px;
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
