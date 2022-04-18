import axios from 'axios'

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'

export const displayCharacters = payload => ({
  type: DISPLAY_CHARACTERS,
  payload
})

export const getSorcerer = offset => dispatch => {
  axios({
    method: 'GET',
    url: 'https://letsgomedia.herokuapp.com/api/articles'
  })
    .then(response => {
      dispatch(displayCharacters(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}
