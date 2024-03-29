import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'
import { weatherType } from '../utilities/weatherType'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_time={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView
      style={[
        container,
        {
          backgroundColor:
            weatherType[weatherData[0].weather[0].main].backgroundColor
        }
      ]}>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: weatherType[weatherData[0].weather[0].main].backgroundColor
  },

  image: {
    flex: 1
  }
})
export default UpcomingWeather
