import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Text testID={'textItem'}style={styles.textStyle}> No Data Found. Try again!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginStart: 10,
        marginEnd: 20,
        marginTop: 100,
        flex: 1,
        justifyContent: "center",
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: "center",

    }
})


export default EmptyList