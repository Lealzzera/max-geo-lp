import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página não encontrada - 404 | Maxgeo</title>
        <meta name="description" content="A página que você está procurando não foi encontrada." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          <AlertTriangle className="mx-auto h-24 w-24 text-yellow-500 mb-6" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Página Não Encontrada</h2>
          <p className="text-gray-600 mb-8">
            Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido removida, renomeada ou nunca existiu.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar para a Página Inicial
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;