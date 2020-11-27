import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  FlatList

} from 'react-native';

import moment from 'moment';
import { AppFonts } from '../utils/fonts'
import SearchBar from '../components/searchBar'
import ListSeperator from '../components/listSeperator'
import EmptyList from '../components/emptyList'
import ActivityIndicatorComponent from '../components/activityIndicatorComponent'

import { connect } from 'react-redux'

import { fetchWeatherForecastData } from '../actions/actionCreator'
import WeatherListItem from '../components/weatherListItem';
import ToastComponent from '../components/toastComponent';

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

  _handlePinCodeSubmission = (pincode) => {
    if (pincode.length === 0) {
      <ToastComponent message="Enter pincode."/>
      return;
    } else if (pincode.length === 6) {
      this.props.getForecastInfo(pincode)
    }
    else {
      alert('Please enter 6 digit pincode')
    }
  };

  render() {
    const data = this.props.data.list;
    const isLoading = this.props.isLoading
    return (
      <View style={{ backgroundColor: '#14A4F9', flex: 1, padding: 24 }}>
         <SearchBar onSearchCallback={this._handlePinCodeSubmission} />
        {isLoading ? (
          <ActivityIndicatorComponent />
        ) : (
            <View>
              {this.props.isError ? <ToastComponent message="Please Enter correct pincode..City not Found"/> :
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
                        <WeatherListItem item1={"Humidity: " + item.main.humidity}
                          item2={"Temp: " + item.main.temp} />
                        <WeatherListItem item1={"Wind speed: " + item.wind.speed}
                          item2={"Clouds: " + item.clouds.all} />
                        <WeatherListItem item1={" Sea level: " + item.main.sea_level}
                          item2={"Ground level: " + item.main.grnd_level} />
                      </View>
                    )}
                    ListEmptyComponent={EmptyList}
                    ItemSeparatorComponent={ListSeperator}
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
 
})

export default connect(mapStatetoProps, mapDispatchtoProps)(WeatherForecast);