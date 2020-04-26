import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai'
import { before, describe, it } from 'mocha'
import { manufacturerList } from '../mocks/manufacturers'
import { fetchManufacturers } from '../../actions/manufacturers'

describe('Actions - Manufacturers', () => {
  let mockAxios

  before(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('fetchManufacturers', () => {
    it('returns an array of manufacturers from the API', async () => {
      mockAxios.onGet().reply(200, manufacturerList)

      const data = await fetchManufacturers()

      expect(data).to.deep.equal(manufacturerList)
    })

    it('returns an empty array when the API responds with a non-200 status', async () => {
      mockAxios.onGet().reply(500, 'Unable to retrieve manufacturers')

      const data = await fetchManufacturers()

      expect(data).to.deep.equal([])
    })
  })
})
