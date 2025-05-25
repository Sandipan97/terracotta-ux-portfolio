
import { useState, useCallback } from 'react';
import { ChatbotEngine } from './ChatbotEngine';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm your virtual assistant here to help you explore my UX portfolio. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback((type: 'user' | 'bot', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const sendMessage = useCallback(async (userMessage: string) => {
    // Add user message
    addMessage('user', userMessage);

    // Show typing indicator
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    // Get bot response
    const response = ChatbotEngine.getResponse(userMessage);
    
    setIsTyping(false);
    addMessage('bot', response);
  }, [addMessage]);

  return {
    messages,
    sendMessage,
    isTyping
  };
};
