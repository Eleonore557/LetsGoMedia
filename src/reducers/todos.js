import { ADD_TODO, REMOVE_TODO } from '../actions/todos'

const initialState = {
  todos: [{ label: 'ok la France', id: 1 }],
  coco: ''
}

const removeTodo = (state, action) => {
  const filteredTodo = state.todos.filter(item => item.id !== action.payload)

  return {
    ...state,
    todos: filteredTodo
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    case REMOVE_TODO:
      return removeTodo(state, action)
    default:
      return state
  }
}
