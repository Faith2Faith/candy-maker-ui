import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import ManufacturersPage from './pages/Manufacturers'
import ProductsPage from './pages/Products'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/products" component={ProductsPage} />
      <Route exact path="/" component={ManufacturersPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
