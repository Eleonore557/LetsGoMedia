import React, { useEffect, useState } from 'react'
import { Text, View, Button, TextInput, FlatList, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../actions/articles'
import axios from 'axios'

const listTab = [
  {
  status: 'All'
},
{
  status: 'Musique'
},
{
  status: 'Politique'
},
]

const Login = () => {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  const [filterdData, setfilterdData] = useState([])

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

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://letsgomedia.herokuapp.com/api/articles',
    })
      .then(response => {
        setDataList([...todos, ...response.data.data])
        setTodos([...todos, ...response.data.data])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  const [status, setStatus] = useState('All')
  const setStatusFilter = status => {
    if (status !== 'All'){
      setDataList([...todos.filter(e => e.attributes.Title === status)])
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
    <View key= {index}>
      <View>
        <Text>{item.id}</Text>
        </View>
        <View>
        <Text>{item.attributes.Title}</Text>
        </View>
    </View>
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

       <TextInput value={search} placeholder="search Here"
        underlineColorAndroid="transparent" onChangeText={(text) => searchFilter(text)}/>

      <FlatList 
        data={dataList} keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}/>
     
    </SafeAreaViewFilter>
  </>
  )
}

const SafeAreaViewFilter = styled.SafeAreaView`
    flex: 1;
    paddingHorizontal: 10px;
    justifyContent: center
`
const ViewListTab = styled.View`
    flexDirection: row;
    alignSelf: center;
    marginBottom: 20px;
` 

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

export default Login
