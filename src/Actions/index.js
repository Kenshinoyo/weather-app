import axios from 'axios';
export const GET_URL_START = 'GET_URL_START'
export const GET_URL_SUCCESS = 'GET_URL_SUCCESS'
export const GET_URL_FAIL = 'GET_URL_FAIL'


// - "Universal" fetch call for components
const fetchWeather = (userInput) => dispatch => {

    dispatch({ type: GET_URL_START })

    axios.get(`api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=947acedede69b35e7e088f5ec8d48037`)

        .then(response => dispatch({
            payload: response.data,
            type: GET_URL_SUCCESS
        }))
        .catch(err => dispatch({
            payload: err.message,
            type: GET_URL_FAIL
        }))
}

export default fetchWeather