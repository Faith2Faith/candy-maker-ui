import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Manufacturer = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`

export default ({ id, name, country }) => (
  <Manufacturer key={id}>
    <NavLink to={`/products/${id}`}>{`${name} (${country})`}</NavLink>
  </Manufacturer>
)
