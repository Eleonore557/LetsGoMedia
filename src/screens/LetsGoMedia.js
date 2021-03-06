import React, { useEffect, useState } from 'react'
import { Text, View, Button, TextInput, FlatList, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../actions/articles'
import axios from 'axios'
import Title from '../components/title';
import ViewCard from '../components/viewCard';
import Overview from '../components/overview';
import Date from '../components/date';
import Article from '../components/article';
import Search from '../components/search';

const listTab = [
                  {
                    status: 'All'
                  },
                  {
                    status: 'musique'
                  },
                  {
                    status: 'politique'
                  },
                  {
                    status: 'santé'
                  },
                  {
                    status: 'sport'
                  },
                ]

const LetsGoMedia = () => {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  const [filterdData, setfilterdData] = useState([])
  const [loading, setLoading] = useState(true)


  const searchFilter = (text) => {
    if (text) {
      const newData = todos.filter((item) => {
        const itemData = item.attributes.Title ? item.attributes.Title.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setDataList(newData)
      setSearch(text)
    } else {
      setDataList(todos)
      setSearch(text)
    }
  }

  const getArticles = () => {
    axios({
      method: 'GET',
      url: 'https://letsgomedia.herokuapp.com/api/articles',
    })
      .then(response => {
        setDataList(response.data.data)
        setTodos(response.data.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getArticles()
  }, [])

  const [status, setStatus] = useState('All')
  const setStatusFilter = status => {
    if (status !== 'All'){
      setDataList([...todos.filter(e => e.attributes.tag === status)])
    }else {
      setDataList(todos)
    }
    setStatus(status)
  }


  const separator = () => {
    return <View style={{height: 1, backgroundColor: '#f1f1f1'}}/>
  }
const [dataList, setDataList] = useState(todos)
  const renderItem = ({item, index}) => {
    return (
      
      <ViewCard>
        <Title>{item.attributes?.Title}</Title>
        <Overview>Catégorie : {item.attributes?.tag}</Overview>
        <Date>
          Date de publication : {item.attributes?.date_de_publication}
        </Date>
        <Article>{item.attributes?.Description}</Article>
  
     
    </ViewCard>
  
    )
  }

 
  return (
    <>
    <SafeAreaViewFilter>
      <ViewListTab>
        {
          listTab.map(e => (
        <TouchableOpacity
        style = {[styles.btnTab, status === e.status && styles.btnTabActive]} 
        onPress={() => setStatusFilter(e.status)}>
          <Text style={styles.textTab, status === e.status && styles.textTabActive}>{e.status}</Text>
        </TouchableOpacity>
  ))
        }
      </ViewListTab>

       <Search value={search} placeholder="rechercher"
        underlineColorAndroid="transparent" onChangeText={(text) => searchFilter(text)}/>

      <FlatList 
        data={dataList} keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
        onRefresh={()=>getArticles()}
        refreshing={loading}/>
     
    </SafeAreaViewFilter>
  </>
  )
}

const SafeAreaViewFilter = styled.SafeAreaView`
    flex: 1;
    paddingHorizontal: 10px;
    justifyContent: center;
`
const ViewListTab = styled.View`
    flexDirection: row;
    alignSelf: center;
    marginBottom: 20px;
` 

const BtnTab = styled.Button`
   color:red,
   padding: 10,` 

const styles = StyleSheet.create({
  btnTab: {
    flexDirection: 'row',
    borderWith: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  btnTabActive: {
    backgroundColor: '#E6838D'
  },
  textTabActive: {
    color: '#fff'
  },
  textTab: {
    fontSize: 16
  }

})

export default LetsGoMedia
