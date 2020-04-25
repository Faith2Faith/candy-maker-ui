import React from 'react'
import styled from 'styled-components'

const Details = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0;
  text-align: center;
`

export default ({ name, country }) => (
  <Details>{`${name} (${country})`}</Details>
)
