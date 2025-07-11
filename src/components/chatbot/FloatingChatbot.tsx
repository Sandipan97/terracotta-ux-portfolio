
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import ChatWindow from './ChatWindow';
import { useChatbot } from './useChatbot';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, sendMessage, isTyping } = useChatbot();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Bubble */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={toggleChat}
              className="bg-red-pantone hover:bg-red-pantone/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              exit={{ scale: 0, opacity: 0 }}
              layout
            >
              <MessageCircle size={24} />
              
              {/* Notification badge for new messages */}
              <motion.div
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3 }}
              >
                1
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <ChatWindow
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              messages={messages}
              onSendMessage={sendMessage}
              isTyping={isTyping}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default FloatingChatbot;
