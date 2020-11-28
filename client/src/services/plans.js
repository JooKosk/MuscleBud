import axios from 'axios'
const baseUrl = '/api/plans'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async (planObject) => {
  const res = await axios.post(baseUrl, planObject)
  return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create }
