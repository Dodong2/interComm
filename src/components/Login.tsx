import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


const Login = () => {
    const { loading, error, login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await login(email, password)

        if(result?.success) {
            setEmail('')
            setPassword('')
            console.log('Login successful!');
            navigate('/main')
        }
    }


  return (
    <>
      <div>
        <form onSubmit={handleLogin}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"  required/>
            <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'login'}
            </button>
        </form>
        {error && <p>{error}</p>}
        <Link to="/register">
            <button>Don't have an Account?</button>
        </Link>
      </div>
    </>
  )
}

export default Login
