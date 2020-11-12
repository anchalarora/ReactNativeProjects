import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';


import React from 'react'

const Signup =({navigation})=>{

    return(
        <View style={styles.container}>
            <Text>Signup Screen</Text>
            <Button title="Go to Home Page" onPress={() => navigation.navigate('Home')}></Button>

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


export default Signup