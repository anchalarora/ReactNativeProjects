
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import Tab4 from './Tab4'

const Home = ({ navigation }) => {

    return (
        
          <Tab.Navigator>
            <Tab.Screen name="Tab1" component={Tab1} />
            <Tab.Screen name="Tab2" component={Tab2} />
            <Tab.Screen name="Tab3" component={Tab3} />
            <Tab.Screen name="Tab4" component={Tab4} />
          </Tab.Navigator>
       
      );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:"#ffffff",
        justifyContent:'center',
        alignItems:'center'
        
    }
})

export default Home
