import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import GoBack from '../../components/GoBack'

describe('Components - GoBack', () => {
  it('displays the "<< Go Back" link that directs the user back to "/"', () => {
    const wrapper = shallow(<GoBack />)

    expect(wrapper.prop('to')).to.equal('/')
    expect(wrapper.text()).to.equal('<< Go Back')
  })
})
