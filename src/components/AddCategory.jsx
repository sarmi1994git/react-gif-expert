import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {
    const { onNewCategory } = props;
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        const { value } = target;
        setInputValue(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) {
            return;
        }
        onNewCategory(newInputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func,
    onNewCategory: PropTypes.func
}
