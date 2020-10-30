const initState = {
    data:[],
    loading :false,
    isError :false
}

export const reducer = (state = initState,action)=>{
    if(action.type=="ADD_WEATHER_FORECAST_DATA"){
         return {
             ...state,
             data:action.payload
         }
    }
    if(action.type=="SET_LOADING"){
        return {
            ...state,
            loading:action.payload
        }
    }

    if(action.type=="SET_ERROR"){
        return {
            ...state,
            isError:action.payload
        }
    }
    
    return state
}


