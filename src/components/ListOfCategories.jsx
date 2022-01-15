import React, {useState, useEffect} from 'react';
import { Category } from './Category';
import { List } from '../styles/ListCategoriesStyle';

export const ListOfCategories = () => {
    const API_CATEGORIES = 'https://petgram-server-fernu-fernu292.vercel.app/categories';
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
       const ApiFetch = async ()=>{
           const response = await fetch(API_CATEGORIES);
           const results = await response.json();

           setCategorias(results);
       }
       ApiFetch();
    }, [])

    const renderList = (fixed) =>(
        <List className={fixed ? "fixed" : ''}>
            {
                categorias.map( category =>(
                    <li key={category.id}><Category {...category}/></li>
                ))
            }
        </List>
    )
    return (  
        <>
            {renderList()}
        </>
    );
}
 