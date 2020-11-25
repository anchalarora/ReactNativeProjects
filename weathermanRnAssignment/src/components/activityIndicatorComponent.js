//import liraries
import React, { Component } from 'react';
import { ActivityIndicator,StyleSheet } from 'react-native';

// create a component
class ActivityIndicatorComponent extends Component {
    render() {
        return (
            <ActivityIndicator
                size="large"
                color="#FFFFFF"
                style={styles.homeActivityIndicator}
            />
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    homeActivityIndicator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop : 50,
        padding: 10,
    },
});


//make this component available to the app
export default ActivityIndicatorComponent;
