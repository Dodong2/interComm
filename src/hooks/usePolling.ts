import { useState, useEffect } from "react";
import { fetchMessages } from "../services/APIservices";

type MessageType = {
    id: string;
    username: string;
    message: string;
  };

export const usePolling = (interval: number) => {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        let isMounted = true;

        const pollMessages = async () => {
            setLoading(true)

            try {
                const response = await fetchMessages()
                if (response.success && isMounted) {
                    console.log("Messages received:", response.messages); // Debugging
                    setMessages(response.messages)
                }
            } catch (error) {
                console.error('Error fetching messages:', error)
            } finally {
                setLoading(false)
            }
        }
// Polling at the given interval
        const intervalId = setInterval(() => {
            pollMessages()
        }, interval)

        pollMessages()

        return () => {
            isMounted = false;
            clearInterval(intervalId)
        }
    }, [interval])

    return { messages, loading }
}