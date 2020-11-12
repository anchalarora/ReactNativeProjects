import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';


import React from 'react'

const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Create account" onPress={() => navigation.navigate('Signup')}></Button>

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

export default Login