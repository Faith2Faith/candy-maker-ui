import React, { useEffect, useState } from 'react'
import Manufacturer from '../components/Manufacturer'
import Page from '../components/Page'
import Search from '../components/Search'
import Title from '../components/Title'
import { filterManufacturers, retrieveManufacturers } from '../utils/manufacturers'

export default () => {
  const [manufacturerList, setManufacturerList] = useState([])
  const [filteredManufacturerList, setFilteredManufacturerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const manufacturers = await retrieveManufacturers()

      setManufacturerList(manufacturers)
      setFilteredManufacturerList(manufacturers)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterManufacturers(manufacturerList, searchTerm)

    setFilteredManufacturerList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredManufacturerList.map(manufacturer => (
          <Manufacturer
            key={manufacturer.id}
            id={manufacturer.id}
            name={manufacturer.name}
            country={manufacturer.country}
          />
        ))
      }
    </Page>
  )
}
