import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ChevronDown, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import { GoogleGenAI, Chat } from "@google/genai";

const Chatbot = () => {
  const { data } = useSite();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isBot: boolean}[]>([
    { text: `Hi there! Welcome to ${data.name}. How can I help you today?`, isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize Chat Session
  useEffect(() => {
    try {
      if (!process.env.API_KEY) {
        console.warn("API_KEY is missing");
        return;
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: `You are a helpful and professional customer support agent for Richdigital, a premium digital agency.
          Your goal is to assist visitors with inquiries about our services (Web Development, Mobile Apps, Branding, Digital Marketing, SEO), portfolio, and general agency information.
          
          Agency Details:
          Name: ${data.name}
          Tagline: ${data.tagline}
          Contact Email: ${data.email}
          Phone: ${data.phone}
          Address: ${data.address}
          
          Guidelines:
          1. Answer general inquiries about what digital agencies do, our specific services, and how to get started.
          2. Be polite, professional, and concise.
          3. If a user asks a highly technical question (e.g., asking for code snippets, complex server architecture, specific API implementations, debugging help) or a question that requires specific human intervention, politely inform them that this is a technical query best handled by our engineering team. Suggest they contact our team directly via the contact page or email ${data.email}.
          4. Do not make up false case studies. Refer to the portfolio section generally.
          `,
        }
      });
    } catch (error) {
      console.error("Failed to initialize chat session", error);
    }
  }, [data]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = { text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
        const botResponse = result.text;
        setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
      } else {
         // Fallback if no API key or init failed
         setTimeout(() => {
            setMessages(prev => [...prev, { text: "I'm currently offline. Please contact us via email.", isBot: true }]);
         }, 500);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { text: "I'm sorry, I'm having trouble connecting right now. Please try again later.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl w-80 md:w-96 mb-4 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="bg-primary p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-bold">Support</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded p-1">
                <ChevronDown size={20} />
              </button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900/50 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.isBot 
                      ? 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none' 
                      : 'bg-primary text-white rounded-tr-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" /> Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..." 
                disabled={isLoading}
                className="flex-grow bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary dark:text-white disabled:opacity-50"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;