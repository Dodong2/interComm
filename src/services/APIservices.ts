import { Message } from '../utils/Types'

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
    if (result.success) {
        localStorage.setItem('userId', result.userId); // Assuming result has a userId property
      }
    return result
}

//para sa send Messages
export const sendMessage = async (userId: string, message: string) => {
    const formData = new FormData()
    formData.append('userId', userId)
    formData.append('message', message)

    const response = await fetch('http://localhost/interComm/chat.php?action=create', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    return result
}


//para sa stream SSE
export const startSSE = (calllback:(data: Message[]) => void): EventSource => {
    const eventSource = new EventSource('http://localhost/interComm/sse.php?action=stream');

    eventSource.onmessage = (event) => {
        const parsedData = JSON.parse(event.data)
        if (parsedData.success) {
            calllback(parsedData.messages)
        }
    }
    return eventSource
}