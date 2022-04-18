import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Characters from '../../screens/characters'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const LetsGoMedia = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Characters' component={Characters} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default LetsGoMedia
