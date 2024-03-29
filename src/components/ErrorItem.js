import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Feather name="alert-circle" size={100} color="white" />
      <Text style={styles.text}>'Sorry an error occured'</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'red'
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 10
  }
})

export default ErrorItem
