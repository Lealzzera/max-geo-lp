import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Mail, Phone, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Suppliers = () => {
  const { toast } = useToast();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const subject = `Cadastro de Fornecedor: ${formData.get('companyName')}`;
    const body = `
      Um novo fornecedor se cadastrou no site.

      Razão Social: ${formData.get('companyName')}
      CNPJ: ${formData.get('cnpj')}
      Nome do Contato: ${formData.get('contactPerson')}
      E-mail: ${formData.get('email')}
      Telefone: ${formData.get('phone')}
      Principal Serviço/Produto: ${formData.get('services')}
    `;
    
    window.location.href = `mailto:administrativo@maxgeo.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Quase lá!",
      description: "Seu aplicativo de e-mail será aberto para que você possa enviar o cadastro. Por favor, anexe seu portfólio manualmente.",
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
        <title>Cadastro de Fornecedores - Maxgeo</title>
        <meta name="description" content="Seja um fornecedor parceiro da Maxgeo. Cadastre sua empresa e faça parte de projetos que transformam o Brasil." />
        <meta property="og:title" content="Cadastro de Fornecedores - Maxgeo" />
        <meta property="og:description" content="Cadastre sua empresa para se tornar um fornecedor homologado da Maxgeo." />
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
              Seja um Fornecedor Parceiro
            </h1>
            <p className="text-xl text-gray-600">
              Buscamos parceiros comprometidos com a qualidade, inovação e sustentabilidade para construir o futuro da infraestrutura no Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulário de Cadastro</h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha os dados abaixo para iniciar o processo de homologação da sua empresa.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">Razão Social *</label>
                    <input type="text" id="companyName" name="companyName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                  </div>
                  <div>
                    <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-2">CNPJ *</label>
                    <input type="text" id="cnpj" name="cnpj" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">Nome do Contato *</label>
                    <input type="text" id="contactPerson" name="contactPerson" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail de Contato *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                  </div>
                  <div>
                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">Principal Serviço/Produto Oferecido *</label>
                    <input type="text" id="services" name="services" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portfólio / Apresentação da Empresa (PDF, até 5MB)</label>
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
                      <p className="text-xs text-gray-500">PDF, DOCX, PPTX até 5MB</p>
                    </div>
                  </div>
                  <input ref={fileInputRef} id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx" />
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Enviar Cadastro
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Suppliers;