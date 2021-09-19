import React from 'react';

const  TextInput = ({
    label,
    type,
    name,
    placeholder,
    onChange,
    value
}) => {
    return (
        <div className = "form-group">
            <label htmlFor = {name}>{label}</label>
            <input
                type = {type}
                name = {name}
                className="form-control"
                placeholder = {placeholder}
                value = { value }
                onChange = {onChange}
                />
        </div>
    )
}

export default TextInput;