import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

import NetworkUtility from '../utils/NetworkUtility'

import * as Constants from '../constants/Constants'

export const fetchWeatherForecastData = (zipCode) => {
    return (dispatch) => {
        NetInfo.fetch().then((state) => {
            console.log('connected : ' + state.isConnected);
            if (state.isConnected) {
                console.log("Internet is Connected")
                dispatch({ type: 'SET_LOADING', payload: true })
                axios
                    .get(Constants.BASE_URL, {
                        params: {
                            zip: zipCode + Constants.COUNTRY_CODE,
                            appid: Constants.API_KEY,
                        },
                    })
                    .then((response) => {
                        dispatch({ type: 'ADD_WEATHER_FORECAST_DATA', payload: response.data })
                        dispatch({ type: 'SET_ERROR', payload: false })

                        if (response.status >= 400) {
                            console.log("Response Status : 404")
                            dispatch({ type: 'SET_ERROR', payload: true })
                        }

                        saveDatatoAsyncStorage(zipCode, response.data)

                    })
                    .catch((error) => {

                        //net connected but entered wrong pincode
                        if (error.message === 'Request failed with status code 404') {
                            dispatch({ type: 'SET_ERROR', payload: true })
                        }
                    })
                    .finally(() => {
                        console.log("Finally Block called")
                        dispatch({ type: 'SET_LOADING', payload: false })
                    })
            } else {
                console.log("Internet not connected")
                const data = getDataFromAsyncStorage(zipCode)
                console.log("Data Received from Async Storage...",data)
                dispatch({ type: 'SET_ERROR', payload: false })
                dispatch({ type: 'ADD_WEATHER_FORECAST_DATA', payload: data })
            }

        })

        const saveDatatoAsyncStorage = async (key, value) => {
            console.log("Saving Data")
            try {
                await AsyncStorage.setItem(key, JSON.stringify(value))
            }
            catch (error) {
                console.log(error)
            }
        }

        const getDataFromAsyncStorage = async (key) => {
            console.log("Getting Data")
            try {
                const response = await AsyncStorage.getItem(key)
                return response
            }
            catch (error) {
                throw new Error('Please check your internet Connection')
            }
        }
    }
}

