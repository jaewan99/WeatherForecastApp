import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'
import { weatherType } from '../utilities/weatherType'

// const image = {
//   uri: `https://source.unsplash.com/vehicles-near-buildings-at-night-time-VmX3vmBecFE`
// }

const City = (weatherData) => {
  // const { weatherData, bgcolor } = props
  const {
    container,
    imageLayout,
    countryName,
    cityName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText
  } = styles
  const {
    weather: { name, country, population, sunrise, sunset, timezone }
  } = weatherData
  return (
    <SafeAreaView
      style={[
        container,
        {
          backgroundColor: weatherType[weatherData.bgColor].backgroundColor
        }
      ]}>
      <Text style={[cityName, cityText]}>{name}</Text>
      <Text style={[countryName, cityText]}>{country}</Text>
      {/* <View style={populationWrapper}>
        <IconText
          iconName="user"
          bodyText={``}
          iconColor="black"
          bodyTextStyles={populationText}
        />
      </View> */}
      <View style={riseSetWrapper}>
        <View>
          <Text style={[cityText]}>Expected Sun Rise</Text>
          <IconText
            iconName="sunrise"
            bodyText={moment.unix(sunrise).format('hh:mm:ss a')}
            iconColor="white"
            bodyTextStyles={riseSetText}
          />
        </View>
        <View>
          <Text style={cityText}>Expected Sun Set</Text>

          <IconText
            iconName="sunset"
            bodyText={moment.unix(sunset).format('hh:mm:ss a')}
            iconColor="white"
            bodyTextStyles={riseSetText}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white'
  },
  imageLayout: {
    flex: 1,
    opacity: 0.99
  },
  cityName: {
    fontSize: 50
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  populationText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 7.6,
    color: 'black'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    color: 'white',
    fontSize: 20
  }
})
export default City
