import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
      padding: 20px;
      background-color: #f44336; /* Red */
      color: white;
      margin-bottom: 15px;
`;

const ErrorLabel = (props) => {
    if ( props.error === undefined || props.error === '')
        return <span></span>;

    return (<Label>{props.error}</Label>);
};

export default ErrorLabel;

