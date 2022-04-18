import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readRedaction from './readRedaction'

const removeFromRedaction = async item => {
  const formerRedaction = await readRedaction()
  const filteredRedaction = formerRedaction.filter(fav => fav.id !== item.id)
  try {
    const jsonValue = JSON.stringify(filteredRedaction)
    await AsyncStorage.setItem('Redaction', jsonValue)
    showMessage({
      message: `${item.name} à bien été supprimé des favoris`,
      type: 'info'
    })
  } catch (e) {
    showMessage({
      message: `une erreur est survenue`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default removeFromRedaction
