import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGif = ({ category }) => {


    const [data, setData] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getGif(category).then(imgs => {

            setData({
                data: imgs,
                loading: false,
            })
        });

    }, [category])

    return data;

}
