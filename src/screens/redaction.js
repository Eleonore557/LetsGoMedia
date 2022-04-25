import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import Title from '../components/title'
import Overview from '../components/overview';
import Search from '../components/search';
import DatePicker from 'react-native-date-picker';
import ViewTag from '../components/view-tag';
import ViewDate from '../components/view-date';
import Description from '../components/description';




const Redaction = () => {
  const [todos, setTodos] = useState([{ Title: 'coco', Description: 'description', Date_De_Publication: '2022-04-27' }])
  const [title, setText] = useState('')
  const [description, setDescription] = useState('')
  const [Date_De_Publication, setDate_De_Publication] = useState('')
  const [Tag, setTag] = useState('')


  const addToTodoList = () => {
    setTodos([...todos, { Title: title, Description: description, date_de_publication: Date_De_Publication, tag: Tag }])
    setText('')
    setDescription('')
    setDate_De_Publication('')



    axios
      .post('https://letsgomedia.herokuapp.com/api/articles', {
        data: {
          Title: title,
          Description: description,
          date_de_publication: Date_De_Publication,
          tag: Tag,
        }
      })
      .then(function (response) {
        // handle success
        alert("Votre article a bien été envoyé !");
      })
      .catch(function (error) {
        // handle error
        alert("Réécrivez votre message.", error.message);
      });

  }

  const [date, setDate] = useState(new Date())

  return (
    <>
      <View>
        <Title>Insérer vos articles ici !</Title>
        <Search value={title} onChangeText={textValue => setText(textValue)} placeholder="Titre" />
        <Description multiline={true} numberOfLines={4} value={description} onChangeText={textValue => setDescription(textValue)} placeholder="Description" />
        <ViewDate>
          <DatePicker value={Date_De_Publication} date={date} mode={'date'} onDateChange={textValue => setDate_De_Publication(textValue)} />
        </ViewDate>
        <ViewTag>
          <Picker
            selectedValue={Tag}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setTag(itemValue)}
          >
          <Picker.Item label="santé" value="santé" />
          <Picker.Item label="politique" value="politique" />
          <Picker.Item label="musique" value="musique" />
          <Picker.Item label="sport" value="sport" />
      </Picker>
      </ViewTag>
      </View>
      <Button title='Envoyer' onPress={addToTodoList} />
    </>
  );
};

export default Redaction;