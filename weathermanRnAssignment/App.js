
import React from 'react';
import {
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WeatherForecast from './src/screens/WeatherForecast';
import Splash from './src/screens/Splash';


import {createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { reducer } from './src/reducers/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Splash" component={Splash}
           />
          <Stack.Screen name="WeatherForecast" component={WeatherForecast} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
