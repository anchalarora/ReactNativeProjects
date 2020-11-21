import { WEATHER } from '../constants'

export const fetchRequest = (isLoading) => {
  return {
    type: WEATHER.WEATHER_FETCH_REQUEST,
    payload: isLoading
}}
  
export const fetchSuccess = (data) => {
  return {
  type: WEATHER.WEATHER_FETCH_SUCCESS,
  payload: data
}}
  
export const fetchError = (isError) => {
  return {
  type: WEATHER.WEATHER_FETCH_ERROR,
  payload: isError
}}