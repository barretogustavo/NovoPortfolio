import React from 'react';
import './App.css';

import Header from './Components/Header';
import Orange from './Components/Orange';
import Title from './Components/Title';

import {BrowserRouter} from 'react-router-dom';
import Routes from './router'


const Page = ()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Orange/>
      <Title/>
      <Routes />    
    </BrowserRouter>
  );
}
export default Page;