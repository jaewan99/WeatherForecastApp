import React from 'react'
import CurrentWeather from '../screens/currentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'lightblue'
          },
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 25,
            color: 'tomato'
          },
          headerTitleAlign: 'center'
        }}>
        <Tab.Screen
          name="Current"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            )
          }}>
          {() => <CurrentWeather weatherData={weather.list[0]} />}
        </Tab.Screen>
        <Tab.Screen
          name="Upcoming"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="clock"
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            )
          }}>
          {() => <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen>
        <Tab.Screen
          name="City"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? 'tomato' : 'gray'}
              />
            )
          }}>
          {() => (
            <City
              weather={weather.city}
              bgColor={weather.list[0].weather[0].main}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs
