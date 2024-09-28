import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const {loading, error, register } =  useAuth()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //handle Submit
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await register(username, email, password)

        if(result?.success) {
            setUsername('')
            setEmail('')
            setPassword('')
        }
    }

  return (
    <>
      <div>
        <form onSubmit={handleRegister}>
            <input type='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' autoComplete="username" />
            <input type='email'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' autoComplete="email" />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' autoComplete="current-password" />
            <button type='submit' disabled={loading}>
                {loading ?  'Logging in...' : 'login'}
            </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </>
  )
}

export default Register
