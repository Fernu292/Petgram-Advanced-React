import React from 'react';
import { Logo } from './components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';
import {ListOfCategories} from "./components/ListOfCategories";
import { ListOfPhotoCards } from './components/ListOfPhotoCards';

const App = () => {
  return (
    <>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />    
        <ListOfPhotoCards />
    </>
  )
}

export default App
