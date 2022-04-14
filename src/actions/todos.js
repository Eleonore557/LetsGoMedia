export const REMOVE_TODO = 'REMOVE_TODO'
export const ADD_TODO = 'ADD_TODO'

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
})

export const removeTodo = payload => ({
  type: REMOVE_TODO,
  payload
})

export const getSorcerer = offset => dispatch => {
  axios({
    method: 'POST',
    url: 'https://letsgomedia.herokuapp.com/api/articles',
    // params: {
    //   limit: 20,
    //   offset
    // }
  })
    .then(response => {
      dispatch(displayCharacters(response.data.data))
    })
    .catch(error => {
      console.log(error)
    })
}

