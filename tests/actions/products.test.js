import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai'
import { before, describe, it } from 'mocha'
import manufacturerWithProducts from '../mocks/products'
import { fetchProductsForManufacturer } from '../../actions/products'

describe('Actions - Products', () => {
  let mockAxios

  before(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('fetchProductsForManufacturer', () => {
    it('returns the manufacturer details and their products from the API', async () => {
      mockAxios.onGet().reply(200, manufacturerWithProducts)

      const data = await fetchProductsForManufacturer(1)

      expect(data).to.deep.equal(manufacturerWithProducts)
    })

    it('returns an empty object when the API returns a non-200 status code', async () => {
      mockAxios.onGet().reply(404, 'Not Found')

      const data = await fetchProductsForManufacturer('a')

      expect(data).to.deep.equal({})
    })
  })
})
