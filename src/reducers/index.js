import { combineReducers } from 'redux'

import todos from './todos'
import poudlard from './poudlard'
import postArticle from './postArticle'

export default combineReducers({
  todoState: todos,
  poudlard,
  postArticle
})
