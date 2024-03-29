import React, { useState, useEffect } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
// import { connect } from 'react-redux'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log('count', count)
    return () => {
      console.log('useEffect cleanup')
    }
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button
        color="red"
        title="Increment"
        onPress={() => {
          setCount(count + 1)
        }}></Button>
      <Button
        color={'green'}
        title="decrement"
        onPress={() => {
          setCount(count - 1)
        }}></Button>

      {/* this won't have an effect in effect hook */}
      <Button
        color={'green'}
        title="decrement"
        onPress={() => {
          setNewCount(newCount - 1)
        }}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  text: {
    fontSize: 24
  }
})
export default Counter
