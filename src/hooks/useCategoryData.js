import {useState, useEffect} from 'react';

export const useCategoryData = (API_CATEGORIES)=>{
    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
        const ApiFetch = async ()=>{
            const response = await fetch(API_CATEGORIES);
            const result = await response.json();

            setCategorias(result);
        }

        ApiFetch();
    }, []);

    return {
        categorias
    }
}