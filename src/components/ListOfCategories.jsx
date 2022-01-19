import React, {useState, useEffect} from 'react';
import { Category } from './Category';
import { List } from '../styles/ListCategoriesStyle';
import { useCategoryData } from '../hooks/useCategoryData';

export const ListOfCategories = () => {
    const [showFixed, setShowFixed] = useState(false);

    const {categorias} = useCategoryData(process.env.API_CATEGORIES);

    useEffect( ()=>{
        const onScroll = e =>{
            const newShowFixed = window.scrollY > 200;
            showFixed != newShowFixed && setShowFixed(newShowFixed);
        }

        document.addEventListener( 'scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed])

    const renderList = (fixed) =>(
        <List fixed={fixed}>
            {
                categorias.map( category =>(
                    <li key={category.id}><Category {...category}/></li>
                ))
            }
        </List>
    )
    return (  
        <>
            { renderList() }

            { showFixed && renderList(true)}
        </>
    );
}
 