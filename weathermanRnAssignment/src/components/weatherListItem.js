//import libaries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppFonts } from '../utils/fonts'

// create a component
const WeatherListItem = (props) => {
    return (
        <View
            style={styles.container}>
            <Text style={styles.homeListItemText}>
                {props.item1}
            </Text>
            <Text style={styles.homeListItemText}>
                {props.item2}
            </Text>
        </View>
    );

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    homeListItemText: {
        fontFamily: AppFonts.QuicksandMedium,
        fontSize: 15,
        marginTop: 5,
        color: '#FFFFFF',
        alignItems: 'baseline',
    },
});

//make this component available to the app
export default WeatherListItem;
