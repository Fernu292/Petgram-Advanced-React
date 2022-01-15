import React from 'react';
import { Category } from './Category';
import { List } from '../styles/ListCategoriesStyle';
import  db  from "../../api/db.json";

export const ListOfCategories = () => {
    const categories = db.categories;

    return (  
        <List>
            {
                categories.map( category =>(
                    <li key={category.id}><Category {...category}/></li>
                ))
            }
        </List>
    );
}
 