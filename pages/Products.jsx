import React, { useEffect, useState } from 'react'
import { extractYear, retrieveManufacturers } from '../utils/products'
import GoBack from '../components/GoBack'
import ManufacturerDetails from '../components/ManufacturerDetails'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Product from '../components/Product'
import Title from '../components/Title'

export default ({ location }) => {
  const [manufacturerId, setManufacturerId] = useState(0)
  const [manufacturer, setManufacturer] = useState({})
  const [productList, setProductList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { id, details, products } = await retrieveManufacturers(location)

      setManufacturerId(id)
      setManufacturer(details)
      setProductList(products)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        manufacturerId
          ? (
            <>
              <ManufacturerDetails name={manufacturer.name} country={manufacturer.country} />
              {productList.map(product => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  year={extractYear(product.yearIntroduced)}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry, I don't know that manufacturer" />)
      }
    </Page>
  )
}
