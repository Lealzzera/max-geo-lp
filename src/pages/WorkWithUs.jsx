import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Mail, Phone, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WorkWithUs = () => {
  const { toast } = useToast();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const subject = `Candidatura para Vaga: ${formData.get('name')}`;
    const body = `
      Um novo candidato enviou seu currículo pelo site.

      Nome: ${formData.get('name')}
      E-mail: ${formData.get('email')}
      Telefone: ${formData.get('phone')}
      LinkedIn: ${formData.get('linkedin') || 'Não informado'}
    `;
    
    window.location.href = `mailto:administrativo@maxgeo.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Quase lá!",
      description: "Seu aplicativo de e-mail será aberto para que você possa enviar sua candidatura. Por favor, anexe seu currículo manualmente.",
    });
    
    form.reset();
    setFileName('');
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Trabalhe Conosco - Maxgeo</title>
        <meta name="description" content="Faça parte da equipe Maxgeo. Confira nossas oportunidades e envie seu currículo para construir uma carreira de sucesso." />
        <meta property="og:title" content="Trabalhe Conosco - Maxgeo" />
        <meta property="og:description" content="Envie seu currículo e venha fazer parte de uma empresa líder em engenharia consultiva." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Faça Parte da Nossa Equipe
            </h1>
            <p className="text-xl text-gray-600">
              Estamos sempre em busca de talentos apaixonados por desafios e que queiram contribuir para o desenvolvimento sustentável do Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Envie seu Currículo</h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">Perfil do LinkedIn (Opcional)</label>
                  <input type="url" id="linkedin" name="linkedin" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Anexe seu Currículo (PDF ou DOCX) *</label>
                  <div
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <p className="pl-1">
                          {fileName ? fileName : 'Clique para selecionar ou arraste o arquivo aqui'}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">PDF ou DOCX até 5MB</p>
                    </div>
                  </div>
                  <input ref={fileInputRef} id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} required accept=".pdf,.doc,.docx" />
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Enviar Candidatura
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Atendemos em todo o Brasil</h2>
            <p className="text-xl mb-8 text-blue-200">
              Nossos projetos e nossa equipe estão presentes em todo o território nacional, impulsionando o desenvolvimento de norte a sul.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-200 px-8 py-4 text-lg">
              <Link to="/contato">
                Solicite Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WorkWithUs;