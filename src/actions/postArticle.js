import axios from 'axios'

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'

export const displayCharacters = payload => ({
  type: DISPLAY_CHARACTERS,
  payload
})

export const getSorcerer = offset => dispatch => {
  // axios.get('https://hp-api.herokuapp.com/api/characters').then(res => {
  //   console.log(res.data)
  //   dispatch(displayCharacters(res.data))
  // })
  axios({
    method: 'POST',
    url: 'https://letsgomedia.herokuapp.com/api/articles',
    data: {
      data: {
        Title: 'Ynov',
        Description: 'Description de larticle'
      }
    }
  })
    .then(response => {
      dispatch(displayCharacters(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}
