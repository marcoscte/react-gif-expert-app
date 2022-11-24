import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getGifs(category)
            .then(newImages => setimages(newImages));
    
        setIsLoading(false);
        }, []);

    return {
        images,
        isLoading
    }

}
