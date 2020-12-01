//import liraries
import { Component } from 'react';
import { ToastAndroid } from 'react-native';

// const ToastAndroid = {
//     SHORT: '',
//     LONG: '',
  
//     TOP: '',
//     BOTTOM: '',
//     CENTER: '',
  
//     showWithGravityAndOffset: jest.fn(),
//   };
  
//   module.exports = ToastAndroid;
// create a component
class ToastComponent extends Component {
    constructor(props) {
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

// define your styles

//make this component available to the app
export default ToastComponent;
