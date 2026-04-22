import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Loader2, Key } from 'lucide-react';
import Markdown from 'react-markdown';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasKey, setHasKey] = useState<boolean | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      }
    };
    checkKey();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleConnect = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setHasKey(true); // Assume success as per guidelines
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are an AI assistant integrated into a high-end ML Engineer's portfolio. You help visitors understand the projects, skills, and experience of the engineer. Be professional, technical, and concise. The engineer's name is Alex Rivera.",
        }
      });

      const text = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Failed to connect to the neural network. Please ensure your API key is valid." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (hasKey === false) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4 glass border border-white/10 rounded-2xl">
        <div className="w-12 h-12 rounded-full bg-signal-blue/20 flex items-center justify-center text-signal-blue animate-pulse">
          <Key size={24} />
        </div>
        <div className="space-y-2">
          <h3 className="text-white font-mono text-xs uppercase tracking-widest">AI Uplink Required</h3>
          <p className="text-white/40 text-[10px] font-mono leading-relaxed">
            To enable the integrated AI assistant, please grant access via the IDE browser.
          </p>
        </div>
        <button
          onClick={handleConnect}
          className="px-4 py-2 bg-signal-blue/10 hover:bg-signal-blue/20 border border-signal-blue/30 text-signal-blue text-[10px] font-mono uppercase tracking-widest transition-all rounded-md"
        >
          Grant Access
        </button>
      </div>
    );
  }

  return (
    <div className="h-[400px] flex flex-col glass border border-white/10 rounded-2xl overflow-hidden">
      <div className="p-3 border-b border-white/5 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-2">
          <Bot size={14} className="text-signal-blue" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Neural_Assistant_v1.0</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-data-green animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-30 space-y-2">
            <Bot size={32} />
            <p className="text-[10px] font-mono uppercase tracking-widest">Awaiting Input...</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg font-mono text-[11px] leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-signal-blue/10 border border-signal-blue/20 text-white' 
                : 'bg-white/5 border border-white/10 text-white/80'
            }`}>
              <div className="flex items-center gap-2 mb-1 opacity-50">
                {msg.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                <span className="text-[8px] uppercase tracking-tighter">{msg.role}</span>
              </div>
              <div className="markdown-body">
                <Markdown>{msg.content}</Markdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
              <Loader2 size={14} className="animate-spin text-signal-blue" />
            </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t border-white/5 bg-black/20">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Query system..."
            className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-3 pr-10 text-[11px] font-mono text-white placeholder:text-white/20 focus:outline-none focus:border-signal-blue/50 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-signal-blue transition-colors disabled:opacity-50"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
