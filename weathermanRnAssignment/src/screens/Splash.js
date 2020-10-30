import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated, Dimensions
} from 'react-native';


const height = Dimensions.get('window').height;


const Splash = ({ navigation }) => {

    position = new Animated.Value(0);

    useEffect(()=>{

        Animated.sequence([
            Animated.timing(position, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
          ]).start();

    },[])

    const translateX = position.interpolate({
        inputRange: [0, 1],
        outputRange: [-height, 0],
      });


    setTimeout(() => {
        navigation.navigate('WeatherForecast');
    }, 2000);
    return (
        <View style={styles.splashContainer}>
        <Animated.Image
          style={[styles.splashImage, {transform: [{translateY: translateX}]}]}
          source={require('../images/clouds.png')}
        />
        <Animated.Text style={styles.splashText}>Weather Man</Animated.Text>
      </View>
    )
}

const styles = StyleSheet.create({
   //splash
  splashContainer: {
    backgroundColor: '#14A4F9',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  splashImage: {
    width: 150,
    height: 150,
    alignItems: 'center',
  },
  splashText: {
    //fontFamily: AppFonts.QuicksandBold,
    fontSize: 30,
    marginTop: 20,
    color: '#FFFFFF',
    alignItems: 'center',
  },
})

export default Splash;