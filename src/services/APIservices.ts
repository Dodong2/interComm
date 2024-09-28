//register
export const registerAcc = async (username:string, email:string, password:string) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('email', email)
    formData.append('password', password)

    const response = await fetch('http://localhost/interComm/reglog.php?action=register', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    return result
}

//login
export const loginAcc = async (email: string, password: string) => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    const response = await fetch('http://localhost/interComm/reglog.php?action=login', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    return result
}