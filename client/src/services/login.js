import axios from 'axios'
const baseUrl = '/api/login'

export const login = async (credentials) => {
  console.log(credentials)
  const res = await axios.post(baseUrl, credentials)
  return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login }
