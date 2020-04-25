import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  border-radius: 8px;
  font-size: 20px;
  margin: 30px auto;
  outline: none;
  padding: 5px 8px;
  width: 250px;
`

export default ({ term, setter }) => (
  <Input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
)
