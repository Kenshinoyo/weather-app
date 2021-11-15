import React, { useState, useEffect } from 'react';
import fetchWeather from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return { weatherData: state.weatherReducer.weatherData }
}

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [weatherData, setWeatherData] = useState([]);


    //- Helper function
    const submitHandler=(e) => {
        props.fetchWeather(searchQuery)
    }

    // useEffect((e) => {
    //     if (e.key === "Enter") {
    //         props.fetchWeather(searchQuery)}}, [searchQuery])

    console.log(weatherData)

    return (
        <div>
            <form id="search-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    setSearchQuery(userInput)
                    setUserInput('')
                }}
            >
                <div id="ui form">
                    <div className="field">
                        <label>Location Search: </label>
                        <input
                            type="text"
                            placeholder="Please Enter City..."
                            onChange={e => setUserInput(e.target.value)}
                            value={userInput}
                        />
                        <button type="submit"> 
                            <Link to="/results">Submit</Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default connect(mapStateToProps, { fetchWeather })(SearchBar);