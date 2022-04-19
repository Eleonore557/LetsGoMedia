import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getArticles } from '../../actions/articles'

const TrombiRedux = () => {
  const articles = useSelector(state => state.articles.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticles())
  }, [])

  return (
    <FlatList
        data={article}
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

export default TrombiRedux
