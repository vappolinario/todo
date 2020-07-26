import React from 'react';

const ErrorLabel = (props) => {
    if ( props.error === undefined || props.error === '')
        return <span></span>;

    return (
        <label className='alert'> {props.error} </label>
    );
};

export default ErrorLabel;

