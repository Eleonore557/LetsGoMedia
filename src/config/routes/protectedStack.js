import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LetsGoMedia from './LetsGoMedia'
import LoginStack from './loginStack'
import Redaction from '../../screens/redaction'


const Bottom = createBottomTabNavigator()

const ProtectedStack = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name='LetsGoMedia' component={LetsGoMedia} />
      <Bottom.Screen name='Redaction' component={Redaction} />
    </Bottom.Navigator>
  )
}

export default ProtectedStack
