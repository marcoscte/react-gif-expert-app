import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {

        event.preventDefault();
        const valueClean = inputValue.trim();
        if(valueClean.length<=1) return;
        //setCategories(categories =>[inputValue, ...categories]);
        onNewCategory(valueClean);
        setInputValue('');

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name=""
                id="addCategoryText"
                placeholder='Search GIF'
                value={inputValue}
                onChange={onInputChange}
            />


        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired,
    

}
