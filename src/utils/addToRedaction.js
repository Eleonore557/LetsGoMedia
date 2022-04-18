import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readRedaction from './readRedaction'

const addToRedaction = async item => {
  const formerRedaction = await readRedaction()

  const arrayOfRedaction = formerRedaction || []

  try {
    const jsonValue = JSON.stringify([
      ...arrayOfRedaction,
      { name: item.name, id: item.id }
    ])
    await AsyncStorage.setItem('Redaction', jsonValue)
    showMessage({
      message: `${item.name} à bien été ajouté aux favoris`,
      type: 'success'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default addToRedaction
