import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
const App = () => {
  const [loading, weather, errorMsg] = useGetWeather()

  // console.log(weather.list)

  if (weather && weather.list && !loading) {
    return <Tabs weather={weather} />
  }

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default App
