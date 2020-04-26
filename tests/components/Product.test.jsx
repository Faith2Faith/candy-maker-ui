import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import Product from '../../components/Product'

describe('Components - Product', () => {
  it('displays the product with its name and year', () => {
    const wrapper = shallow(<Product id={1} name="Test Product" year="2020" />)

    expect(wrapper.text()).to.equal('Test Product (2020)')
  })
})
