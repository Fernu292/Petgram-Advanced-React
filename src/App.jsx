import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import {ListOfCategories} from "./components/ListOfCategories";
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

const App = () => {
  return (
    <>
        <GlobalStyle />
        <ListOfCategories />    
        <ListOfPhotoCards />
    </>
  )
}

export default App
