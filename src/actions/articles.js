import axios from 'axios'

export const DISPLAY_ARTICLE = 'DISPLAY_ARTICLE'

export const displayCharacters = payload => ({
  type: DISPLAY_ARTICLE,
  payload
})

export const getArticles = offset => dispatch => {
 
  axios({
    method: 'GET',
    url: 'https://letsgomedia.herokuapp.com/api/articles',
  })
    .then(response => {
      dispatch(displayArticle(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}
