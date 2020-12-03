import React, { useState } from 'react'
import { login } from '../services/login'

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        try {
          const user = await login({
            username,
            password,
          })

          window.localStorage.setItem('User', JSON.stringify(user))
          setUser(user)
        } catch (e) {}
      }}
    >
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
      <button type="submit">login</button>
    </form>
  )
}
export default LoginForm
