import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, Tractor, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';

const Services = () => {
  const services = [
    {
      slug: 'servicos-terraplanagem-miniescavadeira',
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: 'Serviços de Terraplanagem com Mini Escavadeira Hidráulica',
      description: 'Precisão e eficiência em locais de difícil acesso. Ideal para obras em espaços reduzidos, garantindo máxima eficiência e mínimo impacto no solo.',
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/a0e26657692955abe88d8afe09637c70.webp',
    },
    {
      slug: 'servicos-pulverizacao-agricola-drone',
      icon: <Tractor className="h-10 w-10 text-primary" />,
      title: 'Serviços de Pulverização Agrícola com Drone',
      description: 'Utilizando o Drone AGRAS T20P e a Estação de Trabalho SPAD 75, oferecemos pulverização e dispersão de insumos com máxima eficiência e sustentabilidade.',
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/40d0fa2fc045ff24ec5d8bf00a8b8a07.jpg',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <>
      <Helmet>
        <title>Maxgeo Serviços | Equipamentos e Tecnologia</title>
        <meta name="description" content="Conheça nossas soluções em locação de mini escavadeira e serviços de pulverização agrícola com drone. Tecnologia e eficiência para sua obra ou lavoura." />
      </Helmet>

      <PageHeader 
        title="Maxgeo Serviços"
        subtitle="Equipamentos modernos e tecnologia de ponta para otimizar seus resultados"
      />

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift flex flex-col border"
              >
                <Link to={`/maxgeo-servicos/${service.slug}`} className="block h-full flex flex-col">
                  <div className="relative">
                    <img src={service.image} alt={service.title} className="w-full h-64 object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
                    <div className="mt-auto text-sm font-semibold text-primary flex items-center">
                      Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent/50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Precisa de uma Solução Personalizada?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Nossa equipe está pronta para desenvolver a solução ideal para seu projeto. 
              Entre em contato e descubra como podemos ajudar.
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

export default Services;