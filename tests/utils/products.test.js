/* eslint-disable max-len */
import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import * as ProductActions from '../../actions/products'
import manufacturerWithProducts from '../mocks/products'
import { extractYear, getManufacturerIdFromUrl, retrieveManufacturers } from '../../utils/products'

describe('Utils - Products', () => {
  let sandbox
  let stubbedFetchProductsForManufacturer

  before(() => {
    sandbox = createSandbox()

    stubbedFetchProductsForManufacturer = sandbox.stub(ProductActions, 'fetchProductsForManufacturer')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('extractYear', () => {
    it('returns the year portion of the date provided', () => {
      const year = extractYear('2020-04-26')

      expect(year).to.equal('2020')
    })
  })

  describe('getManufacturerIdFromUrl', () => {
    it('returns the final portion of the URL from the location object provided', () => {
      const id = getManufacturerIdFromUrl({ pathname: '/products/1' })

      expect(id).to.equal('1')
    })

    it('returns zero when there is no path name', () => {
      const id = getManufacturerIdFromUrl({})

      expect(id).to.equal(0)
    })
  })

  describe('retrieveManufacturers', () => {
    it('returns the manufacturer id, their details, and product list from the API call', async () => {
      stubbedFetchProductsForManufacturer.returns(manufacturerWithProducts)

      const data = await retrieveManufacturers({ pathname: '/products/1' })

      expect(data).to.deep.equal({
        id: 1,
        details: { id: 1, name: 'August Storck KG', country: 'DE' },
        products: [{
          id: 1,
          name: 'Mamba',
          yearIntroduced: '1953-01-01',
        }],
      })
    })

    it('returns an id of 0 and empty details and products list when the path does not contain a numeric id at the end', async () => {
      const data = await retrieveManufacturers({ pathname: '/no/numeric/id' })

      expect(data).to.deep.equal({ id: 0, details: {}, products: [] })
    })

    it('returns an id of 0 and empty details and products list when the action returns bad data', async () => {
      stubbedFetchProductsForManufacturer.returns({})

      const data = await retrieveManufacturers({ pathname: '/products/1' })

      expect(data).to.deep.equal({ id: 0, details: {}, products: [] })
    })
  })
})
