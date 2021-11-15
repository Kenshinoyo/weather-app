import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return { weatherData: state.weatherReducer.weatherData }
}

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect((event) => {
        if (event.key == "Enter") {
            props.fetchWeather(searchQuery)}}, [searchQuery])

    console.log(props.weatherURL)

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