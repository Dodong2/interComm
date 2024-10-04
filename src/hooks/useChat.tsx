import { useEffect, useState } from "react";
import { sendMessage, startSSE } from '../services/APIservices'
import { Message } from "../utils/Types";

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([])

    const handleSendMessage = async (message: string) => {
        if (!userId || userId.trim() === '') {
            console.error('User not logged in, cannot send message');
            return;
          }
        if (message.trim() === '') return


        const response = await sendMessage(userId, message)
        if (response.success) {
            console.log('Messsage send successfully')
        } else {
            console.error('Failed to send message', response.message)
        }
    }
    useEffect(() => {
        const eventSource = startSSE((newMessages) => {
            setMessages(newMessages)
        })

        return () => {
            eventSource.close()
        }

    }, [])

    return {
        messages, handleSendMessage
    }

}