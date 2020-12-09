import axios from 'axios'
const baseUrl = '/api/plans'

let token = null

const setToken = (tokenObject) => {
  token = `bearer ${tokenObject}`
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async (planObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.post(baseUrl, planObject, config)
  return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, setToken }
