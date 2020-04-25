import axios from 'axios'

export default async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/manufacturers`) // eslint-disable-line no-undef

    return data
  } catch (error) {
    return []
  }
}
