import React from 'react';
import { Route, Routes } from 'react-router';

import SearchBar from './Components/SearchBar';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Home from './Directory/Home';
import About from './Directory/About'
import Daily from './Directory/Daily';
import Weekly from './Directory/Weekly';


import './App.css';


const App = () => {

  return (
    <div id="app">

      <SearchBar />
      <NavBar />
      
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/daily">
          <Daily />
        </Route>

        <Route exact path="/weekly">
          <Weekly />
        </Route>

      </Routes>


      <Footer />
    </div>
  );
}

export default App
