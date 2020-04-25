import express from 'express'
import path from 'path'
import { getAllManufacturers, getManufacturerById } from './controllers/manufacturers'
import { getAllProducts, getProductsById } from './controllers/products'

const app = express()

app.use(express.static('public'))

app.get('/api/manufacturers', getAllManufacturers)

app.get('/api/manufacturers/:id', getManufacturerById)

app.get('/api/products', getAllProducts)

app.get('/api/products/:id', getProductsById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
