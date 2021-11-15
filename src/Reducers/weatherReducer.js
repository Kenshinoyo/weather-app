import { GET_URL_START, GET_URL_SUCCESS, GET_URL_FAIL } from "../Actions";

const weatherState = {
    weatherData: '',
    err: '',
    isFetching: false
};

function weatherReducer(state = weatherState, action) {
    switch (action.type) {
        case GET_URL_START:
            return { ...state, isFetching: true};
        case GET_URL_SUCCESS:
            return { ...state, weatherData: action.payload, isFetching: false};
        case GET_URL_FAIL:
            return { ...state, err: action.payload, isFetching: false };
        
        default:
            return state
    }
}

export default weatherReducer