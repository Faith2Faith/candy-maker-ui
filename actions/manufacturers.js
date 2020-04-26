/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchManufacturers = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/manufacturers`) // eslint-disable-line no-undef

    return data
  } catch (error) {
    return []
  }
}
