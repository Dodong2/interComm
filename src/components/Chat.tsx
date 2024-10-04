import { useState } from "react"
import { useChat } from "../hooks/useChat" 




const Chat = () => {

    const { messages, handleSendMessage } = useChat()
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        handleSendMessage(message)
        setMessage('')
    }

  return (
    <div className="chat-Container">
        <div className="messages-container">
            {messages.map((msg, index) => (
                <div key={index}>
                    <strong>{msg.username}:</strong>
                    {msg.message}
                </div>
            ))}
        </div>
        <div className="inputs">
            <form onSubmit={handleSubmit}>
            <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" autoComplete="current-pass"/>
            <button type="submit">send</button>
            </form>
        </div>
    </div>
  )
}

export default Chat