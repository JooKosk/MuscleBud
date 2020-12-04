import React, { useState } from 'react'
import { register } from '../services/register'
import { useHistory } from 'react-router-dom'

const RegisterForm = () => {
  let history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        try {
          await register({
            name,
            username,
            password,
          })
          setName('')
          setUsername('')
          setPassword('')
          history.push('/')
        } catch (e) {}
      }}
    >
      <div>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <input
        type="text"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  )
}

export default RegisterForm
