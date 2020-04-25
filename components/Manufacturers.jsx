import React, { useState } from 'react'
import Search from './Search'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="page">
      <div className="title">Candy Makers</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      <div className="output">{searchTerm}</div>
    </div>
  )
}
