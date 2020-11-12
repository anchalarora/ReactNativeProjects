import {
    View,
    Text,
    StyleSheet
} from 'react-native';


import React from 'react'

const Tab1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Tab 1</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor:"#ffffff",
        justifyContent:'center',
        alignItems:'center'
        
    }
})

export default Tab1