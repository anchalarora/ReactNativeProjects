import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';


import React from 'react'

const Tab3 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Tab 3</Text>
           

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

export default Tab3