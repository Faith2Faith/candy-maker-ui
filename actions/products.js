import axios from 'axios'

export default async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/manufacturers/${id}`) // eslint-disable-line no-undef

    return data
  } catch (error) {
    return {}
  }
}
