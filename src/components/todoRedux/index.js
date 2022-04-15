import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addTodo, removeTodo } from '../../actions/todos'

const TodoRedux = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoState.todos)

  const toTodos = () => {
    dispatch(addTodo({ label: input, id: 3 }))
  }

  const remove = id => {
    dispatch(removeTodo(id))
  }

  return null
}

const Touch = styled.TouchableOpacity``

const Text = styled.Text``

const TextInput = styled.TextInput`
  height: 50px;
  background-color: red;
`

const Container = styled.View``

export default TodoRedux
