import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import ManufacturerDetails from '../../components/ManufacturerDetails'

describe('Components - ManufacturerDetails', () => {
  it('displays the manufacturer and their country of origin', () => {
    const wrapper = shallow(<ManufacturerDetails name="Stack" country="US" />)

    expect(wrapper.text()).to.equal('Stack (US)')
  })
})
