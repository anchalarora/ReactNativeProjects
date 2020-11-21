import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  Button

} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';
import { AppFonts } from '../utils/fonts'

import { connect } from 'react-redux'

import { fetchWeatherForecastData } from '../actions/actionCreator'

const mapDispatchtoProps = (dispatch) => {
  return {
    getForecastInfo: (zipCode) => { dispatch(fetchWeatherForecastData(zipCode)) }
  }
}


const mapStatetoProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    isError: state.isError
  }

}
class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      pincode: ''
    };


    BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );

    moment.locale('en');
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          marginTop: '10%',
          backgroundColor: '#FFFFFF',
        }}
      />
    );
  };

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPressAndroid,
    );
  }

  onBackButtonPressAndroid = () => {
    BackHandler.exitApp();
    return true;
  };

  _handlePinCodeSubmission = () => {
    if (this.state.pincode.length === 0) {
      ToastAndroid.showWithGravityAndOffset(
        'Enter pincode!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        50,
        200,
      );    
      return;
    }else if(this.state.pincode.length === 6){
      this.props.getForecastInfo(this.state.pincode)
    }
    else{
      alert('Please enter 6 digit pincode')
    }
  };

  

  render() {
    const data = this.props.data.list;
    const isLoading = this.props.isLoading
    return (
      <View style={{ backgroundColor: '#14A4F9', flex: 1, padding: 24 }}>
        <View>
          <TextInput
            style={STYLES.homePincodeInput}
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
          <Button title="Search" onPress={()=>this._handlePinCodeSubmission()}/>

        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#FFFFFF"
            style={STYLES.homeActivityIndicator}
          />
        ) : (
            <View>
              {this.props.isError ? (ToastAndroid.showWithGravityAndOffset(
                'Please Enter correct pincode..City not Found',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                50,
                200,
              ), false) :
                <View>
                  {this.props.data.city &&
                    this.props.data.city.name &&

                    <Text style={STYLES.homeWeatherText}>
                      {this.props.data.city.name}, {this.props.data.city.country}
                    </Text>
                  }
                  <FlatList
                    data={data}
                    backgroundColor="#14A4F9"
                    keyExtractor={(item, index) => {
                      return item.dt + index + "";
                    }}
                    renderItem={({ item }) => (
                      <View>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                          }}>
                          <Text style={STYLES.homeWeatherText}>
                            {moment(item.dt_txt, true).format('MMM Do, YYYY')}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text style={STYLES.homeListItemText}>
                            Humidity: {item.main.humidity}
                          </Text>
                          <Text style={STYLES.homeListItemText}>
                            Temp: {item.main.temp}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text style={STYLES.homeListItemText}>
                            Wind speed: {item.wind.speed}
                          </Text>
                          <Text style={STYLES.homeListItemText}>
                            Clouds: {item.clouds.all}
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignContent: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text style={STYLES.homeListItemText}>
                            Sea level: {item.main.sea_level}
                          </Text>
                          <Text style={STYLES.homeListItemText}>
                            Ground level: {item.main.grnd_level}
                          </Text>
                        </View>
                      </View>
                    )}
                    ItemSeparatorComponent={this.renderSeparator}
                  />
                </View>
              }

            </View>
          )}
      </View>
    );
  }
}


const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aaff',
    padding: 24
  },

  homeWeatherText: {
    fontFamily: AppFonts.QuicksandMedium,
    fontSize: 30,
    marginTop: 20,
    color: '#FFFFFF',
    alignItems: 'center',
  },
  homeListItemText: {
    fontFamily: AppFonts.QuicksandMedium,
    fontSize: 15,
    marginTop: 5,
    color: '#FFFFFF',
    alignItems: 'baseline',
  },
  homePincodeInput: {
    fontFamily: AppFonts.QuicksandMedium,
    fontSize: 20,
    marginTop: 20,
    color: '#14A4F9',
    borderColor: '#FFFFFF',
    padding: 10,
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  homeActivityIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})

export default connect(mapStatetoProps, mapDispatchtoProps)(WeatherForecast);