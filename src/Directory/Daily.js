import React, { useEffect } from 'react';
import fetchWeather from '../Actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {gifURL: state.reducer1.gifURL}
}

const Daily = (props) => {

    useEffect(() => {
        console.log("Daily Component Mounted")

        props.fetchWeather()
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default connect(mapStateToProps, {fetchWeather})(Daily);