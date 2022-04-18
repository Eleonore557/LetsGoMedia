import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getSorcerer } from '../../actions/StrapiAPI'

const TrombiRedux = () => {
  const characters = useSelector(state => state.StrapiAPI.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSorcerer())
  }, [])

  return (
    <FlatList
        data={characters}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <Text>{item.attributes.Title}</Text>
            <Text>{item.attributes.Description}</Text>
            <Text>{item.attributes.date_de_publication}</Text>
            <Text>{item.attributes.tag}</Text>
         </>
        )}
      /> 
  )
}

const TouchableOpacity = styled.TouchableOpacity``
const Text = styled.Text``

const Component = styled.ScrollView``

export default TrombiRedux
