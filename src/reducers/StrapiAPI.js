import { DISPLAY_ARTICLES } from '../actions/StrapiAPI'

const initialState = {
  articles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ARTICLES:
      return { ...state, articles: action.payload }
    default:
      return state
  }
}
