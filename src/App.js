import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchWeather } from './Actions';

import SearchBar from './Components/SearchBar';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Home from './Directory/Home';
import About from './Directory/About';
import Daily from './Directory/Daily';
import Weekly from './Directory/Weekly';


import '../App.css';
import SearchBar from './Components/SearchBar';

const mapStateToProps = (state) => {
  return { weatherURL: state.weatherReducer.weatherURL }
}

const App = (props) => {

  const [weatherData, setWeatherData] = useState([{}])

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetchWeather().then(
        data => {
          setWeatherData(data)
        }
      )
    }
  }

  return (
    <div id="app">

      <SearchBar />
      <NavBar />

      <Switch>
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

      </Switch>


      <Footer />
    </div>
  );
}

export default connect(mapStateToProps, { fetchWeather })(App);
