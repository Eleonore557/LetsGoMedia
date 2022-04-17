import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CharactersStack from './charactersStack'
import LoginStack from './loginStack'
import Favorite from '../../screens/favorite'


const Bottom = createBottomTabNavigator()

const ProtectedStack = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name='CharactersStack' component={CharactersStack} />
      <Bottom.Screen name='Favorite' component={Favorite} />
    </Bottom.Navigator>
  )
}

export default ProtectedStack
