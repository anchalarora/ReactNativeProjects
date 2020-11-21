import { WEATHER } from '../constants'

const initState = {
    data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initState, action) => {
    if (action.type == WEATHER.WEATHER_FETCH_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload
        }
    }
    if (action.type == WEATHER.WEATHER_FETCH_REQUEST) {
        return {
            ...state,
            isLoading: action.payload,
            isError: false,

        }
    }

    if (action.type == WEATHER.WEATHER_FETCH_ERROR) {
        return {
            ...state,
            isError: action.payload,
            isLoading: false
        }
    }

    return state
}


