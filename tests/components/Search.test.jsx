import React from 'react'
import SinonChai from 'sinon-chai'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import { stub } from 'sinon'
import Search from '../../components/Search'

chai.use(SinonChai)

describe('Components - Search', () => {
  it('displays the search input as empty when the term provided is empty', () => {
    const wrapper = shallow(<Search term="" setter={() => { }} />)

    expect(wrapper.prop('value')).to.equal('')
  })

  it('displays the search input with the term provided as the value', () => {
    const wrapper = shallow(<Search term="test" setter={() => { }} />)

    expect(wrapper.prop('value')).to.equal('test')
  })

  it('calls the setter function when the onChange event is triggered', () => {
    const setter = stub()
    const wrapper = shallow(<Search term="test" setter={setter} />)

    wrapper.simulate('change', { target: { value: 'words' } })

    expect(setter).to.have.been.calledWith('words')
  })
})
