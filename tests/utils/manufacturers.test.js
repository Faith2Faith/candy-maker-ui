import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import { manufacturerList, manufacturersFiltersForAug } from '../mocks/manufacturers'
import * as ManufacturerActions from '../../actions/manufacturers'
import { filterManufacturers, retrieveManufacturers } from '../../utils/manufacturers'

describe('Utils - Manufacturers', () => {
  let sandbox
  let stubbedFetchManufacturers

  before(() => {
    sandbox = createSandbox()

    stubbedFetchManufacturers = sandbox.stub(ManufacturerActions, 'fetchManufacturers')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('filterManufacturers', () => {
    it('returns an array of matching manufacturers', () => {
      const filtered = filterManufacturers(manufacturerList, 'aug')

      expect(filtered).to.deep.equal(manufacturersFiltersForAug)
    })
  })

  describe('retrieveManufacturers', () => {
    it('returns the data provided by the fetch action', async () => {
      stubbedFetchManufacturers.returns(manufacturerList)

      const data = await retrieveManufacturers()

      expect(data).to.deep.equal(manufacturerList)
    })
  })
})
