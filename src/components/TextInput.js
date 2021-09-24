import React from 'react';
import { PropTypes } from 'prop-types';

const  TextInput = ({
    label,
    type,
    name,
    placeholder,
    onChange,
    value,
    error
}) => {
    return (
        <div className = "form-group">
            <label htmlFor = {name}>{label}</label>
            <input
                type = {type}
                name = {name}
                className = {error ? "is-invalid form-control" : "form-control"}
                placeholder = {placeholder}
                value = { value }
                onChange = {onChange}
            />
            <div className = "invalid-feedback">{error}</div>
            
        </div>
    )
}

TextInput.prototypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
    type: 'text'
}

export default TextInput;