import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  font-size: 36px;
  margin: 20px 0;
  text-align: center;
`

const Message = styled.div`
  font-size: 20px;
  text-align: center;
`

export default ({ message }) => (
  <>
    <Icon>¯\_(ツ)_/¯</Icon>
    <Message>{message}</Message>
  </>
)
