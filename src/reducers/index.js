import { combineReducers } from 'redux'

import counter from './counter'
import todos from './todos'
import StrapiAPI from './StrapiAPI'

export default combineReducers({
  counter,
  todoState: todos,
  StrapiAPI
})
