import React from 'react'
import styled from 'styled-components'

const Product = styled.div`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`

export default ({ id, name, year }) => (
  <Product key={id}>
    {`${name} (${year})`}
  </Product>
)
