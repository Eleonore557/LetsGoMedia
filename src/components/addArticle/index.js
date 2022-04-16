import React, { useEffect, useState } from 'react'
import { FlatList, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getArticle } from '../../actions/postArticle'
import Title from '../title'
import ViewCard from '../viewCard'
import Overview from '../overview'
import Avatar from '../avatar'
import Date from '../date'

const addArticle = () => {
  const characters = useSelector(state => state.poudlard.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticle())
  }, [])

  return (
    <FlatList
    data={characters}

        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ViewCard>
             <TextInput
          placeholder='Title'
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

export default addArticle
