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

const update = async (workoutObject) => {
  console.log(workoutObject)
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.put(
    `${baseUrl}/${workoutObject.id}`,
    workoutObject,
    config
  )
  return res.data
}

const comment = async (id, comment, user) => {
  const commentContent = { content: comment, user: user }
  const res = await axios.post(`${baseUrl}/${id}/comments`, commentContent)
  return res.data
}

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.delete(`${baseUrl}/${id}`, config)
  return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, setToken, comment, remove }
