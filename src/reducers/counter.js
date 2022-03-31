import { INCREMENT_COUNTER } from '../actions/counter'

const initialState = {
  conter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 }
    default:
      return state
  }
}
