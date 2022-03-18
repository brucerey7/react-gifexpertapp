import React, { useState } from "react";
import PropTypes from 'prop-types';

export const ResetCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        setCategories(categories => []);
    }
    
    return (
        <form onClick={handleClick}>
            
            <button>Limpiar</button>

        </form>
    )
}

ResetCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}