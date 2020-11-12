import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';


import React from 'react'

const Tab4 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Tab 4</Text>
            <Button title="Logout" onPress={() => navigation.popToTop('Login')}></Button>
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

export default Tab4