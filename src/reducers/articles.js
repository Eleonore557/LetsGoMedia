import { DISPLAY_ARTICLE } from '../actions/articles'

const initialState = {
  article: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ARTICLE:
      return { ...state, article: action.payload }
    default:
      return state
  }
}
