import axios from 'axios'
const baseUrl = '/api/workouts'

let token = null

const setToken = (tokenObject) => {
  token = `bearer ${tokenObject}`
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export const create = async (workoutObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.post(baseUrl, workoutObject, config)
  return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, setToken }
