import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getSorcerer } from '../../actions/poudlard'

const TrombiRedux = () => {
  const [offset, setOffset] = useState(0)
  const characters = useSelector(state => state.poudlard.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSorcerer(offset))
  }, [offset])

  return (
    <Component>
      {characters.map(c => (
        <Text>{c.name}</Text>
      ))}
      <TouchableOpacity onPress={() => setOffset(offset + 10)}>
        <Text>MORE</Text>
      </TouchableOpacity>
    </Component>
  )
}

const TouchableOpacity = styled.TouchableOpacity``
const Text = styled.Text``

const Component = styled.ScrollView``

export default TrombiRedux
