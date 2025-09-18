import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Leaf, Users, BarChart3, Map, ArrowRight, CheckCircle, Wrench, Tractor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';

const servicesData = {
  'desimpedimento-fundiario': {
    icon: <Building className="h-12 w-12 text-primary" />,
    title: 'Desimpedimento Fundiário',
    description: 'Garantimos a regularização completa de áreas para a implantação de grandes projetos de infraestrutura, com segurança jurídica e agilidade.',
    content: 'O desimpedimento fundiário é uma etapa crítica para o sucesso de qualquer empreendimento. Nossa equipe multidisciplinar atua em todas as frentes, desde o diagnóstico inicial até a negociação e regularização final. Realizamos o cadastramento detalhado de propriedades e benfeitorias, conduzimos negociações amigáveis com proprietários e posseiros, e gerenciamos todo o processo de desocupação, sempre com foco no respeito às comunidades e na conformidade com a legislação vigente.',
    details: ['Análise de viabilidade', 'Identificação de interferências', 'Cadastramento de propriedades e proprietários', 'Engenharia de avaliação', 'Negociação com interferidos', 'Ações judiciais de desapropriação e constituição de servidão', 'Diligenciamento e acompanhamento de obras'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/aa5a05d839073afd5884328a30f17bb3.jpg',
  },
  'fiscalizacao-sociopatrimonial': {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Fiscalização Sociopatrimonial',
    description: 'Monitoramento de áreas para inibir invasões e atividades ilícitas.',
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
  'licenciamento-ambiental': {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: 'Licenciamento Ambiental',
    description: 'Assessoria completa para garantir a viabilidade ambiental do seu projeto.',
    content: 'Navegar pela complexa legislação ambiental brasileira exige conhecimento e experiência. A Maxgeo oferece assessoria completa em todas as fases do licenciamento: Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO). Elaboramos Estudos de Impacto Ambiental (EIA/RIMA) e outros relatórios técnicos com alta qualidade, e representamos nossos clientes junto aos órgãos ambientais e intervenientes para garantir um processo ágil e sem surpresas.',
    details: ['Monitoramento e gestão de condicionantes;', 'Análise de riscos;', 'Relatórios ambientais;', 'Planos ambientais;', 'Estudo de impacto ambiental;', 'Projetos de compensação ambiental;', 'Estudo de impacto de vizinhança;', 'Autorização de supressão vegetal;', 'Interlocução com órgão ambiental e intervenientes'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/58edaaf8cd1f4b1baf6f3a7b83252948.jpg',
  },
  'estudos-estrategicos': {
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: 'Estudos Estratégicos',
    description: 'Fornecemos análises técnicas aprofundadas para subsidiar a tomada de decisão em todas as fases do seu empreendimento.',
    content: 'Decisões bem-informadas são a base de projetos bem-sucedidos. A Maxgeo realiza uma gama de estudos estratégicos, incluindo análises de viabilidade fundiária e ambiental, estudos pré-leilão, relatórios técnicos para órgãos reguladores (R3 e R5 para MME/EPE), e processos de Due Diligence socioambiental. Nossas análises identificam riscos e oportunidades, permitindo que nossos clientes invistam com segurança e confiança.',
    details: ['Estudos pré leilão:', '-Fundiário.', '-Ambiental.', 'Due diligence e análise de riscos:', '-Fundiário.', '-Ambiental.'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/b80f076525e17a6a6e7db036fadd2830.jpg',
  },
  'topografia-cartografia-geodesia': {
    icon: <Map className="h-12 w-12 text-primary" />,
    title: 'Topografia, Cartografia e Geodésia',
    description: 'Utilizamos tecnologia de ponta para fornecer dados geoespaciais de alta precisão, essenciais para o planejamento e execução de projetos.',
    content: 'A precisão é fundamental na engenharia. Nossos serviços de topografia, cartografia e geodésia utilizam equipamentos modernos, como drones e GPS geodésico, para realizar levantamentos detalhados, mapeamento cartográfico, georreferenciamento de imóveis e análises geoespaciais. Integramos esses dados em Sistemas de Informação Geográfica (SIG) para fornecer análises espaciais completas e apoiar todas as etapas do seu projeto.',
    details: ['Levantamento Topográfico:', '- Planialtimétrico.', '- Planimétrico.', '- Cadastral.', '- Locação de obras.', 'Georreferenciamento de imóveis;', 'Retificação de área;', 'Regularização fundiária;', 'Controle de qualidade;', 'Auditoria topográfica;', 'Produção cartográfica em geral;', 'Banco de dados geoespaciais;', 'Materialização de cota de reservatório;', 'Demarcação de APP;'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/ad24945b58d87a47e09b495158e6ed16.jpg',
  },
  'servicos-terraplanagem-miniescavadeira': {
    icon: <Wrench className="h-12 w-12 text-primary" />,
    title: 'Serviços de Terraplanagem com Mini Escavadeira Hidráulica',
    description: 'Precisão e eficiência em locais de difícil acesso. Ideal para obras em espaços reduzidos, garantindo máxima eficiência e mínimo impacto no solo.',
    content: 'A Maxgeo oferece soluções de serviços de terraplanagem para diversas necessidades. Nossas mini escavadeiras hidráulicas são ideais para trabalhos de precisão em locais de difícil acesso, como escavações para fundações, valas e paisagismo. Oferecemos pacotes com operadores qualificados para garantir a máxima produtividade e segurança em sua obra.',
    details: ['Acesso a áreas restritas:', '- Ideal para quintais.', '-Terrenos pequenos.', '-Corredores estreitos e espaços reduzidos.', 'Escavação de piscinas, poços, fossas e cisterna;', 'Escavação de valas/trincheiras:', '- Fundações.', '- Sondagens.', '- Drenagem pluvial.', '- Redes hidráulicas.', '-Condução elétrica.', '-Perfuração de brocas.', '-Paisagismo.', 'Terraplanagem ágil – Nivelamento, reaterro e acabamento eficiente do terreno;', 'Remoção de entulhos e demolição leve – Mantém o canteiro de obras limpo e organizado;', 'Conformação de taludes e bermas;', 'Remoção de tocos e raízes;', 'Carregamento e espalhamento de material;'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/a0e26657692955abe88d8afe09637c70.webp',
  },
  'servicos-pulverizacao-agricola-drone': {
    icon: <Tractor className="h-12 w-12 text-primary" />,
    title: 'Serviços de Pulverização Agrícola com Drone',
    description: 'Utilizando o Drone AGRAS T20P e a Estação de Trabalho SPAD 75, oferecemos pulverização e dispersão de insumos com máxima eficiência e sustentabilidade.',
    content: 'Revolucione sua produção agrícola com nosso serviço de pulverização via drones. Utilizamos o DJI AGRAS, líder de mercado, para aplicar defensivos e fertilizantes com precisão milimétrica, otimizando o uso de insumos e reduzindo o consumo de água. O serviço é ideal para culturas de todos os portes, garantindo uma cobertura uniforme mesmo em terrenos irregulares e com alta declividade.',
    detailsTitle: 'Principais Vantagens',
    details: ['Maior produtividade – Cobertura de grandes áreas em menos tempo.', 'Precisão e controle total – Ajuste automático da pulverização para evitar desperdícios.', 'Acesso a áreas difíceis – Ideal para terrenos inclinados e encharcados.', 'Sustentabilidade e segurança – Reduz contato humano com defensivos e minimiza impactos ambientais.', 'Redução do consumo de água e defensivos', 'Aplicações:', '-Pulverização de defensivos agrícolas', '-Dispersão uniforme de fertilizantes e sementes', '-Aplicação de bioinsumos para proteção das plantas', '-Monitoramento da lavoura para ações preventivas', '-Controle de pragas e doenças com precisão milimétrica'],
    image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/40d0fa2fc045ff24ec5d8bf00a8b8a07.jpg',
    extraContent: {
      image: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/2ac952933a9d8a04a15f6d82925924b6.jpg',
      text: 'Desenvolvido pela Xmobots, o SPAD 75 é um sistema feito para transportar todos os equipamentos necessários para a operação: drones da linha DJI AGRAS, XMixer, gerador e muito mais.'
    }
  }
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/404" />;
  }
  
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
              {service.image && (
                 <img src={service.image} alt={service.title} className="rounded-lg shadow-lg mb-8 w-full h-auto object-cover"/>
              )}
              <h2 className="text-3xl font-bold text-foreground mb-6">Detalhes do Serviço</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{service.content}</p>
              </div>

              {service.extraContent && (
                <div className="mt-12 grid md:grid-cols-2 gap-8 items-center bg-accent/50 p-6 rounded-lg">
                  <motion.img 
                    src={service.extraContent.image} 
                    alt="SPAD 75" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {service.extraContent.text}
                  </motion.p>
                </div>
              )}

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-lg p-8 sticky top-28 shadow-md border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {service.detailsTitle || 'Principais Atividades'}
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

export default ServicePage;