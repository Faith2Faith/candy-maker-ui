import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import Manufacturer from '../../components/Manufacturer'

describe('Components - Manufacturer', () => {
  it('displays the manufacturer and their country of origin as a link to their products page', () => {
    const wrapper = shallow(<Manufacturer id={1} name="Stack" country="US" />)

    const NavLink = wrapper.find('NavLink')

    expect(NavLink.prop('to')).to.equal('/products/1')
    expect(NavLink.text()).to.equal('Stack (US)')
  })
})
