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
    method: 'GET',
    url: 'https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=10&apikey=9ce6b8729ef7a22ab50bb52173ff58ae&hash=baaea02473141730fe086e02c2914c2f',
    params: {
      limit: 20,
      offset
    }
  })
    .then(response => {
      dispatch(displayCharacters(response.data.data.results))
    })
    .catch(error => {
      console.log(error)
    })
}
