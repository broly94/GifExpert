import React from 'react'
import GifItem from './GifItem';
import { useFetchGif } from '../hooks/useFetchGif';

const GifGrid = ({ category }) => {
    // Desestructuracion al hook que devuelve el objeto de imagenes y un loading.
    // Se le pasa la categoria indicada por inyeccion de dependencia.

    const { loading, data: images } = useFetchGif({category});
    return (
        <>
            { loading && <p className="animate__animated animate__flash">Buscando...</p> }
            
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            <div className="container">
                {
                    images.map(img => (
                        <GifItem
                            key={ img.id } 
                            { ...img }
                        />
                    ))
                }
            </div>

        </>
    )
}

export default GifGrid;