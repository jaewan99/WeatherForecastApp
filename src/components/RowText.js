import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RowText = (props) => {
  const {
    containerStyle,
    messageOneStyles,
    messageTwoStyles,
    messageOne,
    messageTwo
  } = props
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
