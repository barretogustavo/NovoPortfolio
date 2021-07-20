import React from 'react';
import './App.css';

import Header from './Components/Header';
import Projects from './Components/Projects';

import {BrowserRouter} from 'react-router-dom';
import Routes from './router'


const Page = ()=>{
  return(
    <BrowserRouter>
        <Header/>
        <Projects />
        <Routes /> 
    </BrowserRouter>
  );
}
export default Page;