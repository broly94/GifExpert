import React from 'react'

const GifItem = ({ title, url }) => {


    const setTitle = (title) => {
        if(title.length <= 8){
            return title
        }else {
            return title.slice(0, 9) + '...'; 
        }
    }

    return (
        <div className="img-items animate__animated animate__fadeInDown">
            <h3>{ setTitle(title) }</h3>
            <img src={ url } alt={ title }></img>
        </div>
    )
}

export default GifItem;
