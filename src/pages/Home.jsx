
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Wind, GitBranch, Power, Waves, Building2, Building, Users, Leaf, Map, Tractor, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ClientCarousel from '@/components/ClientCarousel';
import HeadlineSlideshow from '@/components/HeadlineSlideshow';

const Counter = ({ from, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value);
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return <span ref={ref} />;
};

const Home = () => {
  const { t } = useTranslation();
  const headlineSlides = [
    {
      image: "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/5275be6ff74691a0972994703eb9995c.jpg",
      alt: "Torres de transmissão de energia ao entardecer",
      style: { objectPosition: 'center' }
    },
    {
      image: "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/df338bcb8e7aacdeac5548e46499884c.png",
      alt: "Vista aérea de um rio na floresta amazônica ao pôr do sol",
      style: { objectPosition: 'center' }
    },
    {
      image: "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/1f31bf30de1bf10168bdb7aaf0414f58.jpg",
      alt: "Trabalhador em campo com equipamento de topografia",
      style: { objectPosition: 'center' }
    }
  ];

  const solutions = [
    {
      slug: 'desimpedimento-fundiario',
      title: t('solutions.desimpedimento-fundiario.title'),
      description: t('solutions.desimpedimento-fundiario.description'),
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/aa5a05d839073afd5884328a30f17bb3.jpg',
      icon: <Building className="h-8 w-8 text-primary" />,
    },
    {
      slug: 'fiscalizacao-sociopatrimonial',
      title: t('solutions.fiscalizacao-sociopatrimonial.title'),
      description: t('solutions.fiscalizacao-sociopatrimonial.description'),
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/eb21311288ed644d3d7c5206ee92c6f6.jpg',
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      slug: 'licenciamento-ambiental',
      title: t('solutions.licenciamento-ambiental.title'),
      description: t('solutions.licenciamento-ambiental.description'),
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/58edaaf8cd1f4b1baf6f3a7b83252948.jpg',
      icon: <Leaf className="h-8 w-8 text-primary" />,
    },
     {
      slug: 'topografia-cartografia-geodesia',
      title: t('solutions.topografia-cartografia-geodesia.title'),
      description: t('solutions.topografia-cartografia-geodesia.description'),
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/ad24945b58d87a47e09b495158e6ed16.jpg',
      icon: <Map className="h-8 w-8 text-primary" />,
    }
  ];

  const services = [
    {
      slug: 'servicos-terraplanagem-miniescavadeira',
      icon: <Wrench className="h-8 w-8 text-secondary" />,
      title: 'Serviços de Terraplanagem com Mini Escavadeira Hidráulica',
      description: 'Precisão e eficiência em locais de difícil acesso. Ideal para obras em espaços reduzidos, garantindo máxima eficiência e mínimo impacto no solo.',
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/a0e26657692955abe88d8afe09637c70.webp',
    },
    {
      slug: 'servicos-pulverizacao-agricola-drone',
      icon: <Tractor className="h-8 w-8 text-secondary" />,
      title: 'Serviços de Pulverização Agrícola com Drone',
      description: 'Utilizando o Drone AGRAS T20P e a Estação de Trabalho SPAD 75, oferecemos pulverização e dispersão de insumos com máxima eficiência e sustentabilidade.',
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/40d0fa2fc045ff24ec5d8bf00a8b8a07.jpg',
    },
  ];

  const projectStats = [
    { icon: <Wind className="h-10 w-10 text-secondary" />, count: 9, label: t('home.stats.wind') },
    { icon: <GitBranch className="h-10 w-10 text-secondary" />, count: 296, label: t('home.stats.transmission') },
    { icon: <Power className="h-10 w-10 text-secondary" />, count: 71, label: t('home.stats.substations') },
    { icon: <Waves className="h-10 w-10 text-secondary" />, count: 17, label: t('home.stats.hydroelectric') },
    { icon: <Building2 className="h-10 w-10 text-secondary" />, count: 3, label: t('home.stats.industries') },
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
        <title>{t('pageTitle')} - Maxgeo - Soluções Socioambientais e Fundiárias</title>
        <meta name="description" content="Líder em soluções de engenharia consultiva, gestão fundiária e socioambiental para projetos de energia, infraestrutura e mineração." />
      </Helmet>

      <main>
        <section className="relative bg-black text-white h-[70vh] flex items-center justify-center text-center">
          <HeadlineSlideshow slides={headlineSlides} />
          <div className="container relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              {t('home.headline')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-10"
            >
              {t('home.subheadline')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button asChild size="lg" className="text-lg py-7 px-8">
                <Link to="/contato">
                  Solicite um Orçamento <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        <section id="maxgeo-consulting-section" className="section-padding bg-accent/50">
          <div className="container">
            <div className="text-center mb-16">
               <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('home.consulting.title')}</motion.h2>
               <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-3xl mx-auto text-muted-foreground">
                {t('home.consulting.subtitle')}
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.slug}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl flex flex-col"
                >
                  <Link to={`/maxgeo-servicos/${solution.slug}`} className="block h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img src={solution.image} alt={solution.title} className="w-full h-56 object-cover"/>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-4">{solution.icon}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{solution.description}</p>
                      <div className="mt-auto text-sm font-semibold text-primary flex items-center">
                        {t('home.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('home.projects.title')}</motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-3xl mx-auto text-muted-foreground">
                {t('home.projects.subtitle')}
              </motion.p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {projectStats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-lg flex flex-col items-center justify-center gap-2 shadow-sm border"
                >
                  {stat.icon}
                  <p className="text-4xl font-bold text-primary"><Counter from={0} to={stat.count} /></p>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-20 bg-primary text-primary-foreground rounded-lg p-12 text-center">
                <h3 className="text-3xl font-bold mb-4 text-white">{t('home.banner.title')}</h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">{t('home.banner.subtitle')}</p>
                <Button asChild size="lg" variant="secondary" className="text-lg py-7 px-10">
                    <Link to="/contato">
                        Solicite Orçamento
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-accent/50">
          <div className="container">
            <div className="text-center mb-16">
               <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('home.services.title')}</motion.h2>
               <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-3xl mx-auto text-muted-foreground">
                {t('home.services.subtitle')}
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                {services.map((service, index) => (
                    <motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-card rounded-lg overflow-hidden shadow-xl flex flex-col"
                    >
                        <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                            <Button asChild className="mt-auto">
                                <Link to={`/maxgeo-servicos/${service.slug}`}>{t('home.learnMore')} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-background">
          <div className="container">
            <ClientCarousel />
          </div>
        </section>
        
      </main>
    </>
  );
};

export default Home;
