import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    // Elimina el elemento anterior para que solamente se renderize la primer categoría
    categories.splice(1,1)

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories } categories={categories}/>
                {
                    categories.map( category => ( 
                        <GifGrid
                            key={ category } 
                            category={ category }
                         />
                    ))
                }
            
        </>
    )
}

export default GifExpertApp;
