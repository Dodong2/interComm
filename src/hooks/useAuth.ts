import { useState } from 'react';
import { registerAcc } from '../services/APIservices';
import { loginAcc } from '../services/APIservices';

export const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    //Register Method
    const register = async (username: string, email: string, password: string) => {
        setLoading(true)
        setError(null)


        try {
            const result = await registerAcc(username, email, password)
            if (!result.success) {
                setError(result.message)
            }
            return result
        } catch (err) {
            setError('Something went wrong during registration.')
        } finally {
            setLoading(false)
        }
    }

    //Login method
    const login = async (email: string, password: string) => {
        setLoading(true)
        setError(null)

        try {
            const result = await loginAcc(email, password)
            if (!result.success) {
                setError(result.message)
            }
            return result
        } catch (err) {
            setError('Something went wrong during login.')
        } finally {
            setLoading(false)
        }
    }
    return {loading, error, register, login}
}


