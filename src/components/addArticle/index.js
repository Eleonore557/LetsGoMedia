import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getSorcerer } from '../../actions/postArticle'
import Title from '../title'
import ViewCard from '../viewCard'
import Overview from '../overview'
import Avatar from '../avatar'
import Date from '../date'

const TrombiRedux = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSorcerer())
  }, [])

  return (
    <FlatList
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ViewCard>
             <TextInput
          placeholder="Title"
          />
            <Title>{item.attributes.Title}</Title>
            <Overview>Catégorie : {item.attributes.tag}</Overview>
            <Text>{item.attributes.Description}</Text>
            <Date>
              Date de publication : {item.attributes.date_de_publication}
            </Date>
            </ViewCard>
        )}
      /> 
  )
}

const TouchableOpacity = styled.TouchableOpacity``
const Text = styled.Text``

const Component = styled.ScrollView``

export default TrombiRedux
