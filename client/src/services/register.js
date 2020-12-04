import axios from 'axios'
const baseUrl = '/api/users'

export const register = async (credentials) => {
  const res = await axios.post(baseUrl, credentials)
  return res.data
}

export default { register }
