import axios from 'axios'
const baseUrl = '/api/workouts'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async (workoutObject) => {
  const res = await axios.post(baseUrl, workoutObject)
  return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create }
