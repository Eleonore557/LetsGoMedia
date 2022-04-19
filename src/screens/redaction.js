import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, TextInput, Button} from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-picker/picker';
import Title from '../components/title'
import Overview from '../components/overview';
import Search from '../components/search';

const Redaction = () => {
  const [todos, setTodos] = useState([{ Title: 'coco', Description: 'description', Date_De_Publication: '2022-04-27'}])
  const [title, setText] = useState('')
  const [description, setDescription] = useState('')
  const [Date_De_Publication, setDate_De_Publication] = useState('')

  const addToTodoList = () => {
    setTodos([...todos, { Title: title, Description: description,  date_de_publication: Date_De_Publication}])
    setText('')
    setDescription('')
    setDate_De_Publication('')

    axios
    .post('https://letsgomedia.herokuapp.com/api/articles', {
        data:{      
          Title: title,
          Description: description,
          date_de_publication: Date_De_Publication,
        }
    })
    .then(function (response) {
      // handle success
      alert("Votre article a bien été envoyé !");
    })
    .catch(function (error) {
      // handle error
      alert("Zemmour Président : Réécrivez votre message.", error.message);
    });
    
  }
 
  return (
    <>
    <View>
      <Title>Insérer vos articles ici !</Title>
      <Search value={title} onChangeText={textValue => setText(textValue)} placeholder="Titre"/>
      <Search value={description} onChangeText={textValue => setDescription(textValue)} placeholder="Description"/>
      <Search value={Date_De_Publication} onChangeText={textValue => setDate_De_Publication(textValue)} placeholder="Date de Publication (aaaa-mm-jj)"/>
      </View>
      <Button title='Envoyer' onPress={addToTodoList} />
      </>
  );
};

export default Redaction;