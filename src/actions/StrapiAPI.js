import axios from 'axios'

export const DISPLAY_ARTICLES = 'DISPLAY_ARTICLES'

export const displayArticles = payload => ({
  type: DISPLAY_ARTICLES,
  payload
})

export const getArticle = offset => dispatch => {
  axios({
    method: 'GET',
    url: 'https://letsgomedia.herokuapp.com/api/articles'
  })
    .then(response => {
      dispatch(displayArticles(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}
