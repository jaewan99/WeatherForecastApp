import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment, { months } from 'moment'
const Item = (props) => {
  const { dt_time, min, max, condition } = props
  const { item, date, temp, dateStyleWrapper } = styles
  return (
    <View style={item}>
      <Feather
        name={weatherType[condition]?.iconName}
        size={50}
        color="white"
      />
      <View style={dateStyleWrapper}>
        <Text style={date}>{moment(dt_time).format('dddd')}</Text>
        <Text style={date}>{moment(dt_time).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>
        {`${Math.round(min)}°C`} / {`${Math.round(max)}°C`}
      </Text>
      <Text style={date}>{condition}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: 'indianred'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  dateStyleWrapper: {
    flexDirection: 'column'
  }
})
export default Item
