
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';

const EnvironmentalSocialPrograms = () => {
  const service = {
    title: 'Programas Ambientais e Sociais',
    description: 'Desenvolvemos e executamos programas socioambientais que mitigam impactos e geram valor compartilhado para a sociedade e o meio ambiente.',
    content: 'Nossos programas são desenhados para ir além da simples conformidade. Criamos e implementamos ações eficazes em comunicação social, educação ambiental, monitoramento de fauna e flora, e recuperação de áreas degradadas. Trabalhamos em estreita colaboração com as comunidades locais para desenvolver programas de apoio que promovam o desenvolvimento sustentável e fortaleçam a imagem positiva do empreendimento.',
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/3da42496867cbdf55bfc6c684e3b552b.png',
    details: [
      'Execução de programas:',
      '- Meio físico.',
      '- Meio biótico.',
      '- Meio socioeconômico.',
      'Execução de programas com povos tradicionais:',
      '- Ribeirinhos.',
      '- Quilombolas.',
      '- Indígenas.',
      'Projetos de investimento social'
    ],
  };

  const renderDetail = (detail, index) => {
    const isSubItem = detail.startsWith('-');
    const isGroupHeader = detail.endsWith(':');

    if (isGroupHeader) {
      return (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
          <span className="font-semibold text-foreground">{detail}</span>
        </li>
      );
    }
    
    if (isSubItem) {
      return (
        <li key={index} className="flex items-start ml-6">
           <span className="text-primary mr-3 mt-1 font-bold">-</span>
          <span className="text-muted-foreground">{detail.substring(1).trim()}</span>
        </li>
      );
    }

    return (
      <li key={index} className="flex items-start">
        <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
        <span className="text-muted-foreground">{detail.replace(';', '')}</span>
      </li>
    );
  };

  return (
    <>
      <Helmet>
        <title>{service.title} - Maxgeo</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} - Maxgeo`} />
        <meta property="og:description" content={service.description} />
      </Helmet>

      <PageHeader 
        title={service.title}
        subtitle={service.description}
      />

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <img src={service.image} alt={service.title} className="rounded-lg shadow-lg mb-8 w-full h-auto object-cover"/>
              <h2 className="text-3xl font-bold text-foreground mb-6">Detalhes do Serviço</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{service.content}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-lg p-8 sticky top-28 shadow-md border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Principais Atividades
                </h3>
                <ul className="space-y-4">
                  {service.details.map(renderDetail)}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent/50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por que escolher a Maxgeo?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nossa abordagem integrada e equipe experiente garantem que esta etapa crítica do seu projeto seja executada com máxima eficiência, transparência e conformidade legal, minimizando riscos e otimizando prazos.
            </p>
            <Button asChild size="lg">
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

export default EnvironmentalSocialPrograms;
