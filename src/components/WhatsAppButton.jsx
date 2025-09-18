import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = "19997220052";
  const message = "Olá! Gostaria de saber mais sobre os serviços da Maxgeo.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.05 }}
    >
      <MessageSquare className="h-6 w-6" />
      <span className="font-semibold text-sm hidden sm:inline">Fale com comercial</span>
    </motion.a>
  );
};

export default WhatsAppButton;