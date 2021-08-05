import React from 'react';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import {BrowserRouter} from 'react-router-dom';
import Routes from './router'


const Page = ()=>{
  return(
    <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
    </BrowserRouter>
  );
}
export default Page;