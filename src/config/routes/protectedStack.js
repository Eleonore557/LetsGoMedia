import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import LetsGoMedia from '../../screens/LetsGoMedia'
import Redaction from '../../screens/redaction'

const BottomTab = createBottomTabNavigator()
Icon.loadFont()

const Bottom = createBottomTabNavigator()

const ProtectedStack = () => {
  return (

<BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name='LetsGoMedia'
        options={{
          tabBarLabel: 'LetsGoMedia',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          )
        }}
        component={LetsGoMedia}
      />
      <BottomTab.Screen
        name='Redaction'
        options={{
          tabBarLabel: 'Redaction',
          tabBarIcon: ({ color, size }) => (
            <Icon name='pencil' color={color} size={size} />
          )
        }}
        component={Redaction}
      />
    </BottomTab.Navigator>
  )
}

export default ProtectedStack
