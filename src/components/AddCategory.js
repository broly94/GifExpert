import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, categories }) => {

    const [input, setInput] = useState('');

    const handleInputOnChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSet = () => {
        if (input.trim().length > 2) {
            setCategories((cat) => [input, ...cat]);
            setInput('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSet();
    }

    const handleAddButton = (e) => {
        e.preventDefault();
        handleSet();
    }

    return (<>

        <h2 > Add Category </h2>
        <form onSubmit={handleSubmit} >

            <button onClick={handleAddButton} > Add </button>
            <input type="text"
                id="txtAdd"
                value={input}
                onChange={handleInputOnChange}
            />
        </form>
    </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;