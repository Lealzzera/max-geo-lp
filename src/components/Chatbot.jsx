import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  const chatbotIconUrl = "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/e5f223b32cba549191361368a71990c8.jpg";

  const serviceKeywords = {
    'fundo': 'desimpedimento-fundiario',
    'fundiário': 'desimpedimento-fundiario',
    'fiscalização': 'fiscalizacao-sociopatrimonial',
    'social': 'fiscalizacao-sociopatrimonial',
    'licença': 'licenciamento-ambiental',
    'ambiental': 'licenciamento-ambiental',
    'programa': 'programas-ambientais-e-sociais',
    'estudo': 'estudos-estrategicos',
    'estratégico': 'estudos-estrategicos',
    'mapa': 'topografia-cartografia-geodesia',
    'topografia': 'topografia-cartografia-geodesia',
    'equipamento': 'locacao-de-equipamentos',
    'locação': 'locacao-de-equipamentos',
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 'initial',
          text: 'Olá! Eu sou o Max, seu assistente virtual. Como posso ajudar você hoje? Você pode perguntar sobre nossos serviços, como "fale sobre licenciamento ambiental".',
          sender: 'bot'
        }
      ]);
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let botResponse = "Não entendi sua pergunta. Você pode tentar perguntar sobre um de nossos serviços, como 'desimpedimento fundiário' ou 'licenciamento ambiental'.";

      if (lowerInput.includes('olá') || lowerInput.includes('oi')) {
        botResponse = 'Olá! Como posso te ajudar a encontrar o serviço certo para o seu projeto?';
      } else if (lowerInput.includes('serviços')) {
        botResponse = 'Oferecemos uma gama completa de serviços, incluindo Desimpedimento Fundiário, Licenciamento Ambiental e Topografia. Qual deles te interessa mais?';
      } else if (lowerInput.includes('contato')) {
        botResponse = 'Você pode entrar em contato conosco através da nossa página de Contato ou pelo telefone (19) 3392-2078.';
      } else {
        const keyword = Object.keys(serviceKeywords).find(key => lowerInput.includes(key));
        if (keyword) {
          botResponse = `Encontrei informações sobre ${keyword}. Para saber mais, você pode visitar nossa página de serviços.`;
        }
      }

      const botMessage = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-5 w-80 h-[450px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-50"
          >
            <header className="p-4 border-b flex justify-between items-center bg-muted/40">
              <div className="flex items-center gap-2">
                <img src={chatbotIconUrl} alt="Max, assistente virtual" className="h-8 w-8 rounded-full" />
                <h3 className="font-bold text-foreground">Max, seu assistente</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </header>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="w-full px-3 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary text-sm"
              />
              <Button type="submit" size="icon" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-5 right-5 z-50"
      >
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg p-0 overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <img src={chatbotIconUrl} alt="Abrir chat" className="w-full h-full object-cover" />}
        </Button>
      </motion.div>
    </>
  );
};

export default Chatbot;