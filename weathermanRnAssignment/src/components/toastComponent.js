//import liraries
import React, { Component } from 'react';
import {  ToastAndroid } from 'react-native';

// create a component
class ToastComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            (ToastAndroid.showWithGravityAndOffset(
               this.props.message,
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                50,
                200,
              ), false)
        );
    }
}

//make this component available to the app
export default ToastComponent;
