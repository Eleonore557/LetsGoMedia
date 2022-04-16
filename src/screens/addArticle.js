import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Avatar from '../components/avatar'
import readFavorite from '../utils/readFavorite'
import addToFavorite from '../utils/addToFavorite'
import removeFromFavorite from '../utils/removeFromFavorite'
import addArticle from '../components/addArticle'

const Article = ({ navigation }) => {
  const [Article, setArticle] = useState([])
  const [offset, setOffset] = useState(0)
  const { t, i18n } = useTranslation()
  const state = useSelector(state => state)




  return (
    <>
      <addArticle />
    </>
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``

Article.propTypes = {}

export default Article
