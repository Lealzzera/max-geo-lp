import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Leaf, Users, BarChart3, Map, ArrowRight, CheckCircle, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHeader from '@/components/PageHeader';

const solutionsData = [
  {
    slug: 'desimpedimento-fundiario',
    icon: <Building className="h-12 w-12 text-primary" />,
    title: 'Desimpedimento Fundiário',
    content: 'O desimpedimento fundiário é uma etapa crítica para o sucesso de qualquer empreendimento. Nossa equipe multidisciplinar atua em todas as frentes, desde o diagnóstico inicial até a negociação e regularização final. Realizamos o cadastramento detalhado de propriedades e benfeitorias, conduzimos negociações amigáveis com proprietários e posseiros, e gerenciamos todo o processo de desocupação, sempre com foco no respeito às comunidades e na conformidade com a legislação vigente.',
    details: ['Análise de viabilidade', 'Identificação de interferências', 'Cadastramento de propriedades e proprietários', 'Engenharia de avaliação', 'Negociação com interferidos', 'Ações judiciais de desapropriação e constituição de servidão', 'Diligenciamento e acompanhamento de obras'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/aa5a05d839073afd5884328a30f17bb3.jpg',
  },
  {
    slug: 'fiscalizacao-sociopatrimonial',
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Fiscalização Sociopatrimonial',
    content: "Somos especialista em soluções eficazes de fiscalização e monitoramento de áreas destinadas à implantação ou operação de empreendimentos de médio e grande porte. Nosso serviço de Fiscalização Sociopatrimonial tem como objetivo prevenir e identificar invasões, construções irregulares, plantios e outras atividades ilícitas, garantindo a segurança patrimonial e o cumprimento da legislação. Utilizamos métodos de monitoramento ativo (inspeções terrestres, fluviais e aéreas) e monitoramento remoto com tecnologia de ponta, como imagens de satelite e aerofotogrametria por drone. Esses dados geram informações estratégicas para tomada de decisão rápida e eficaz. Além da proteção do patrimônio, atuamos de forma preventiva junto às comunidades locais, promovendo a conscientização ambiental e contribuindo para a preservação da biodiversidade.",
    detailsTitle: 'Com atuação em',
    details: [
      'Áreas de preservação permanente;',
      'Faixas de servidão:',
      '- Linhas de transmissão.',
      '- Ferrovias.',
      '- Rodovias.',
      '- Outros empreendimentos lineares.',
      'Reservas ambientais;',
      'Terras indígenas;',
      'Territórios quilombolas;',
      'Espelho d’agua de reservatórios;',
    ],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/eb21311288ed644d3d7c5206ee92c6f6.jpg',
  },
  {
    slug: 'licenciamento-ambiental',
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: 'Licenciamento Ambiental',
    content: 'Navegar pela complexa legislação ambiental brasileira exige conhecimento e experiência. A Maxgeo oferece assessoria completa em todas as fases do licenciamento: Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO). Elaboramos Estudos de Impacto Ambiental (EIA/RIMA) e outros relatórios técnicos com alta qualidade, e representamos nossos clientes junto aos órgãos ambientais e intervenientes para garantir um processo ágil e sem surpresas.',
    details: ['Monitoramento e gestão de condicionantes;', 'Análise de riscos;', 'Relatórios ambientais;', 'Planos ambientais;', 'Estudo de impacto ambiental;', 'Projetos de compensação ambiental;', 'Estudo de impacto de vizinhança;', 'Autorização de supressão vegetal;', 'Interlocução com órgão ambiental e intervenientes'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/58edaaf8cd1f4b1baf6f3a7b83252948.jpg',
  },
   {
    slug: 'programas-ambientais-e-sociais',
    icon: <HeartHandshake className="h-12 w-12 text-primary" />,
    title: 'Programas Ambientais e Sociais',
    content: 'Nossos programas são desenhados para ir além da simples conformidade. Criamos e implementamos ações eficazes em comunicação social, educação ambiental, monitoramento de fauna e flora, e recuperação de áreas degradadas. Trabalhamos em estreita colaboração com as comunidades locais para desenvolver programas de apoio que promovam o desenvolvimento sustentável e fortaleçam a imagem positiva do empreendimento.',
    detailsTitle: 'Principais Atividades',
    details: [
        'Execução de programas:',
        '- Meio físico.',
        '- Meio biótico.',
        '- Meio socioeconômico.',
        'Execução de programas com povos tradicionais:',
        '- Ribeirinhos.',
        '- Quilombolas.',
        '- Indígenas.',
        'Projetos de investimento social;',
    ],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/6dc9a2b5e28a5c37016027a00f2e1acb.jpg',
  },
  {
    slug: 'estudos-estrategicos',
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: 'Estudos Estratégicos',
    content: 'Decisões bem-informadas são a base de projetos bem-sucedidos. A Maxgeo realiza uma gama de estudos estratégicos, incluindo análises de viabilidade fundiária e ambiental, estudos pré-leilão, relatórios técnicos para órgãos reguladores (R3 e R5 para MME/EPE), e processos de Due Diligence socioambiental. Nossas análises identificam riscos e oportunidades, permitindo que nossos clientes invistam com segurança e confiança.',
    details: ['Estudos pré leilão:', '-Fundiário.', '-Ambiental.', 'Due diligence e análise de riscos:', '-Fundiário.', '-Ambiental.'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/b80f076525e17a6a6e7db036fadd2830.jpg',
  },
  {
    slug: 'topografia-cartografia-geodesia',
    icon: <Map className="h-12 w-12 text-primary" />,
    title: 'Topografia, Cartografia e Geodésia',
    content: 'A precisão é fundamental na engenharia. Nossos serviços de topografia, cartografia e geodésia utilizam equipamentos modernos, como drones e GPS geodésico, para realizar levantamentos detalhados, mapeamento cartográfico, georreferenciamento de imóveis e análises geoespaciais. Integramos esses dados em Sistemas de Informação Geográfica (SIG) para fornecer análises espaciais completas e apoiar todas as etapas do seu projeto.',
    details: ['Levantamento Topográfico:', '- Planialtimétrico.', '- Planimétrico.', '- Cadastral.', '- Locação de obras.', 'Georreferenciamento de imóveis;', 'Retificação de área;', 'Regularização fundiária;', 'Controle de qualidade;', 'Auditoria topográfica;', 'Produção cartográfica em geral;', 'Banco de dados geoespaciais;', 'Materialização de cota de reservatório;', 'Demarcação de APP;'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/ad24945b58d87a47e09b495158e6ed16.jpg',
  },
];

const renderDetail = (detail, index) => {
    const isSubItem = detail.startsWith('-');
    const isMainItem = detail.endsWith(';');
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
        <li key={index} className="flex items-start ml-9">
          <span className="text-primary mr-3 mt-1 font-bold">-</span>
          <span className="text-muted-foreground">{detail.substring(1).trim().replace('.', '')}</span>
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

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Maxgeo Consultoria - Soluções Completas</title>
        <meta name="description" content="Explore as soluções completas da Maxgeo Consultoria, desde o desimpedimento fundiário até estudos estratégicos e licenciamento ambiental." />
      </Helmet>

      <PageHeader 
        title="Maxgeo Consultoria"
        subtitle="Soluções completas para viabilizar e desenvolver seus projetos com segurança e eficiência."
      />
      
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-0">
              {solutionsData.map((solution, index) => (
                <AccordionItem value={`item-${index}`} key={solution.slug} className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">{solution.icon}</div>
                      <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <div className="grid lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-2">
                        {solution.image && (
                          <img src={solution.image} alt={solution.title} className="rounded-lg shadow-md mb-6 w-full h-auto object-cover"/>
                        )}
                        <h4 className="text-2xl font-bold text-foreground mb-4">Detalhes do Serviço</h4>
                        <div className="prose max-w-none text-muted-foreground">
                          <p>{solution.content}</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-background rounded-lg p-6 sticky top-28 border">
                          <h4 className="text-xl font-bold text-foreground mb-4">
                            {solution.detailsTitle || 'Principais Atividades'}
                          </h4>
                          <ul className="space-y-3">
                             {solution.details.map(renderDetail)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      
      <section className="section-padding bg-accent/50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pronto para iniciar seu projeto?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nossa equipe está pronta para entender suas necessidades e oferecer a melhor solução. Entre em contato e solicite um orçamento.
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

export default Solutions;