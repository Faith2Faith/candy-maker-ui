import fetchProductsForManufacturer from '../actions/products'

export const extractYear = year => year.split('-')[0]

export const getManufacturerIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/').pop()
  : 0
)

export const retrieveManufacturers = async (location) => {
  const manufacturerId = getManufacturerIdFromUrl(location)

  if (!Number(manufacturerId)) return { id: 0, details: {}, products: [] }

  const { id, name, country, products } = await fetchProductsForManufacturer(manufacturerId)

  if (!id || !name || !country || !products) return { id: 0, details: {}, products: [] }

  return { id, products, details: { id, name, country } }
}
