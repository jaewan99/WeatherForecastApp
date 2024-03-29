import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import globalStyle from '../components/globalStyle'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'
const CurrentWeather = ({ weatherData }) => {
  const {
    container,
    tempStyle,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView
      style={[
        globalStyle.AndroidSafeArea,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}>
      <View style={[container]}>
        <Feather
          name={weatherType[weatherCondition].iconName}
          size={100}
          color="white"
        />
        <Text style={tempStyle}>{temp}°C</Text>
        <Text style={feels}>{`feels like ${feels_like}°C`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°C / `}
          messageTwo={`Low: ${temp_min}°C`}
          containerStyle={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyle={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyle: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    color: 'black',
    fontSize: 48
  },
  message: {
    color: 'black',
    fontSize: 30
  }
})

export default CurrentWeather
