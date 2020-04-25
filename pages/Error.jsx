import React from 'react'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import Title from '../components/Title'

export default () => (
  <Page>
    <Title />
    <NotFound message="Sorry, unable to find the page you are looking for" />
  </Page>
)
