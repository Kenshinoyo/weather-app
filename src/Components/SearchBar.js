import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return { weatherURL: state.weatherReducer.weatherURL }
}

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState('');
    const [city, setCity] = useState('');

    useEffect((event) => {
        if (event.key == "Enter") {
            props.fetchWeather(city)}}, [city])

    console.log(props.weatherURL)

    return (
        <div>
            <form className="searchForm"
                onSubmit={(e) => {
                    e.preventDefault()
                    setCity(userInput)
                    setUserInput("")
                }}
            >
                <div className="ui form">
                    <div className="field">
                        <label>Location Search: </label>
                        <input
                            type="text"
                            placeholder="Enter City..."
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