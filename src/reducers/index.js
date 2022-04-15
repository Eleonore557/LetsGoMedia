import { combineReducers } from 'redux'

import counter from './counter'
import todos from './todos'
import poudlard from './poudlard'
import postArticle from './postArticle'

export default combineReducers({
  counter,
  todoState: todos,
  poudlard,
  postArticle
})
