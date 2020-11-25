import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Keyboard
} from 'react-native'
import { AppFonts } from '../utils/fonts'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pincode: '',
        }
    }


    handleZipCode = (pincode) => {
        this.setState({
            pincode: pincode
        })
    }

    handleSearchCallback() {
        Keyboard.dismiss()
        this.props.onSearchCallback(this.state.pincode)
    }

    render() {
        //const { onSearchCallback } = this.props
        return (
            <View>
                <View >
                    <TextInput
                        style={styles.homePincodeInput}
                        placeholder="Enter your pincode"
                        placeholderTextColor="#FFFFFF"
                        color="#FFFFFF"
                        keyboardType="number-pad"
                        disableFullscreenUI={true}
                        onChangeText={(pincode) =>
                            this.setState({ pincode })
                        }
                        value={this.state.pincode}
                        //onSubmitEditing={(e) => this._handleTextChange(e)}
                        maxLength={6}
                    />
                    <Button title="Search" onPress={this.handleSearchCallback.bind(this)} />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    homePincodeInput: {
        fontFamily: AppFonts.QuicksandMedium,
        fontSize: 20,
        marginTop: 20,
        color: '#14A4F9',
        borderColor: '#FFFFFF',
        padding: 10,
        borderWidth: 1,
        alignItems: 'flex-start',
    }
   
})
