//import libaries
import React from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const ListSeperator = () => {
    return (
        <View
            style={styles.container}
        />
    );

}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 1,
        width: '100%',
        marginTop: '10%',
        backgroundColor: '#FFFFFF',
    },
});

//make this component available to the app
export default ListSeperator;
