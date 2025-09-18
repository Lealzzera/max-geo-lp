import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const CookieConsent = ({ onAccept }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="bg-background border border-border shadow-2xl rounded-lg container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <Cookie className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground">Nós usamos cookies</h3>
            <p className="text-sm text-muted-foreground">
              Utilizamos cookies para melhorar sua experiência de navegação em nosso site. Ao continuar, você concorda com nossa{' '}
              <Link to="/politica-de-privacidade" className="underline hover:text-primary">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
        <Button onClick={onAccept} className="w-full md:w-auto flex-shrink-0">
          Entendi
        </Button>
      </div>
    </motion.div>
  );
};

export default CookieConsent;