/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchProductsForManufacturer = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/manufacturers/${id}`) // eslint-disable-line no-undef

    return data
  } catch (error) {
    return {}
  }
}
