import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, View, FlatList, TextInput } from 'react-native'
import styled from 'styled-components'
import { useFocusEffect } from '@react-navigation/native'
import asyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import readFavorite from '../utils/readFavorite'

const Favorite = () => {
 const [masterData, setmasterData] = useState([])

 const fetchArticle = () => {
  axios({
    method: 'GET',
    url: 'https://letsgomedia.herokuapp.com/api/articles',
  })
    .then(response => {
      setfilterdData([...masterData, ...response.data.data])
      setmasterData([...masterData, ...response.data.data])
    })
    .catch(error => {
      console.log(error)
    })
  }

 const checkToken = async () => {
   const token = await asyncStorage.getItem('token') 
   console.log("🚀 ~ file: favorite.js ~ line 26 ~ checkToken ~ token", token)
 }

 useEffect(() => {
  fetchArticle()
   return () => {

   }
 }, [])
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.attributes.Title ? item.attributes.Title.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setfilterdData(newData)
      setSearch(text)
    } else {
      setfilterdData(masterData)
      setSearch(text)
    }
  }
 
  const [search, setSearch] = useState('')
  const [filterdData, setfilterdData] = useState([])

  const [fav, setFav] = useState([])

  const addFavToState = async () => {
    const allFav = await readFavorite()
    setFav(allFav)
  }

  useFocusEffect(() => {
    addFavToState()
  })

  useEffect(() => {
    addFavToState()
  }, [])

  useEffect(() => {
    console.log(fav)
  }, [fav])

  const ItemView = ({item}) => {
    return(
      <Text>{item.id}{'. '}{item.attributes.Title.toUpperCase()}</Text>
    )
  }

   const ItemSeparatorView = () => {
     return (
       <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c'}}/>
     )
   }

  return (
    <>
    <SafeAreaView>
      <View>
        <TextInput value={search} placeholder="search Here"
        underlineColorAndroid="transparent" onChangeText={(text) => searchFilter(text)}/>
        <FlatList data={filterdData} keyExtractor={(item, index) => index.toString()}
        itemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}/>
      </View>
    </SafeAreaView>
      {fav.map(f => (
        <Container>
          <Text>{f.name}</Text>
        </Container>
      ))}
    </>
  )
}

const Container = styled.View`
  background-color: red;
`
export default Favorite
