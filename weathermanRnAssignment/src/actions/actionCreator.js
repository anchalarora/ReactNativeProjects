import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

import NetworkUtility from '../utils/networkUtility'

import * as Constants from '../constants/apiConstants'
import { fetchRequest, fetchSuccess, fetchError } from './weatherApiAction';

export const fetchWeatherForecastData = (zipCode) => {
    return (dispatch) => {
        NetInfo.fetch().then((state) => {
            console.log('connected : ' + state.isConnected);
            if (state.isConnected) {
                console.log("Internet is Connected")
                dispatch(fetchRequest(true))
                axios
                    .get(Constants.BASE_URL, {
                        params: {
                            zip: zipCode + Constants.COUNTRY_CODE,
                            appid: Constants.API_KEY,
                        },
                    })
                    .then((response) => {
                        console.log("api response", response.data)
                        dispatch(fetchSuccess(response.data))

                        if (response.status >= 400) {
                            console.log("Response Status : 404")

                            dispatch(fetchError(true))
                        }

                        saveDatatoAsyncStorage(zipCode, response.data)

                    })
                    .catch((error) => {

                        //net connected but entered wrong pincode
                        if (error.message === 'Request failed with status code 404') {

                            dispatch(fetchError(true))
                        }
                    })
                    .finally(() => {
                        console.log("Finally Block called")
                        dispatch(fetchRequest(false))
                    })
            } else {
                console.log("Internet not connected")
                const data = getDataFromAsyncStorage(zipCode)
                dispatch(fetchSuccess(data))

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

