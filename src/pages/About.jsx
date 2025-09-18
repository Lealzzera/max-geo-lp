
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, ArrowRight, GitCommit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BioSection = ({ title, children }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-primary mb-3">{title}</h4>
    <div className="prose prose-p:my-1 text-muted-foreground space-y-2">{children}</div>
  </div>
);

const About = () => {
  const coreTenets = [{
    id: "missao",
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Nossa Missão",
    description: "Servir com excelência, oferecendo Soluções Sustentáveis e estratégicas em engenharia consultiva. Nosso compromisso é garantir qualidade, inovação e suporte gerencial completo, permitindo que nossos clientes tomem decisões seguras e eficientes. Acreditamos que servir bem é mais do que entregar um serviço- é transformar desafios em conquistas, oferecendo soluções que impulsionam o sucesso de nossos clientes."
  }, {
    id: "visao",
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: "Nossa Visão",
    description: "Ser a força que impulsiona a transformação no setor de engenharia consultiva, garantindo excelência, inovação e crescimento sustentável para clientes, colaboradores e fornecedores. Buscamos um crescimento que gere oportunidades, inspire nossos profissionais e fortaleça nossa missão de transformar desafios em soluções, criando um ambiente onde todos tenham orgulho e brilho nos olhos ao trabalhar com ou na MAXGEO."
  }, {
    id: "valores",
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Nossos Valores",
    description: "Ética e Honestidade • Excelência e Inovação • Colaboração e Respeito • Sustentabilidade e Sucesso Compartilhado • Comprometimento e Responsabilidade • Foco e Determinação • Empatia e Propósito • Coragem e inteligência"
  }];
  const differentiators = [{
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Expertise de Mercado",
    description: "Já estivemos no papel de contratantes e conhecemos as dores e expectativas do mercado. Por isso, criamos soluções alinhadas às reais necessidades dos clientes, garantindo eficiência e previsibilidade."
  }, {
    icon: <GitCommit className="h-8 w-8 text-primary" />,
    title: "Gestão Estratégica Integrada",
    description: "Combinamos conhecimento técnico e visão gerencial para proporcionar suporte completo desde a concepção até a execução dos projetos. Isso assegura que todas as etapas sejam conduzidas com excelência, alinhadas aos objetivos estratégicos dos clientes."
  }];

  const ceoImageUrl = "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/5daba6c78d370809e54338c8920e13f2.jpg";
  const watermarkUrl = "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/a8887ed2a7aceafc5cf41d4a505c626b.png";
  
  return <>
      <Helmet>
        <title>Sobre Nós - Maxgeo | Nossa História e Compromisso</title>
        <meta name="description" content="Conheça a história da Maxgeo, nossa missão, visão e os valores que nos guiam há mais de 20 anos no mercado de engenharia consultiva." />
      </Helmet>

      <PageHeader title="Sobre Nós" subtitle="Conheça a trajetória, os valores e os diferenciais que fazem da Maxgeo uma empresa líder em engenharia consultiva no Brasil." />
      
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-no-repeat bg-center opacity-10 pointer-events-none" style={{
        backgroundImage: `url(${watermarkUrl})`,
        backgroundSize: 'contain'
      }}></div>
        <div className="container max-w-5xl mx-auto relative">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-4 text-muted-foreground prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground">Sobre Nós</h2>
            <p>A Maxgeo Consultoria Ltda é uma referência em Engenharia Consultiva, especializada em Soluções Fundiárias e Socioambientais para empreendimentos de infraestrutura.</p>
            <p>Com uma trajetória consolidada e mais de uma década de experiência, atuamos na gestão e desimpedimento fundiário, geoprocessamento, licenciamento ambiental, fiscalização sócio patrimonial e execução de programas socioambientais.</p>
            <p>Com sede em Indaiatuba-SP, deixamos nossa marca em grandes projetos do Setor Elétrico Nacional, participando da implantação de Usinas Hidrelétricas, Pequenas Centrais Hidrelétricas, Complexos Eólicos, Fotovoltaicos e Linhas de Transmissão em todo Brasil.</p>
            <p>Nosso compromisso é ir além da consultoria: entregamos Soluções Inovadoras e Eficientes que impulsionam o crescimento dos nossos clientes e geram impacto positivo no desenvolvimento social e ambiental.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-blue-50/50">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">O que nos torna a escolha estratégica para o seu projeto.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-background p-8 rounded-lg shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Liderança</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4"
            >
              <div className="w-full max-w-[300px] mx-auto rounded-lg overflow-hidden shadow-2xl">
                 <img src={ceoImageUrl} alt="CEO da Maxgeo" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-8"
            >
              <h3 className="text-3xl font-bold text-foreground">Alysson Miranda</h3>
              <p className="text-primary font-semibold mb-6 text-lg">CEO – MaxGeo Consultoria & MaxGeo Serviços</p>
              
              <BioSection title="Início de Carreira">
                 <p>Comecei cedo. Aos 10 anos, já vendia fitas de vídeo. Aos 14, carteira assinada e aos 16, liderança no setor fiscal.</p>
                 <p>Na juventude, fui vendedor de porta em porta, dedetizador e empreendi pela primeira vez ainda em Minas.</p>
              </BioSection>

              <BioSection title="Experiência no Setor Público">
                  <p>Já no serviço público em Jacuí (MG), mergulhei em múltiplas áreas: RH, Licitações, INCRA, Ministério do Trabalho, Conselhos Municipais...</p>
                  <p>Ali aprendi o que carrego até hoje: Ouvir a comunidade, mediar interesses e transformar normas em resultados.</p>
              </BioSection>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-blue-50/50 p-8 md:p-12 rounded-lg shadow-sm border"
          >
            <BioSection title="Grandes Projetos e Aprendizados">
              <p><strong>2008 (Reservatório de Estreito - MA/TO):</strong> Vivi um dos maiores aprendizados da minha carreira ao negociar e conduzir o remanejamento de mais de 1.000 famílias. Não tratávamos gente como número. Cada acordo foi sustentável e respeitoso.</p>
              <p><strong>2010 (MGE Transmissão S/A - ES/MG):</strong> Coordenei trabalhos de engenharia do proprietário, enfrentando desafios fundiários e ambientais do projeto.</p>
              <p><strong>2013 (UHE Teles Pires - MT/PA):</strong> Fui o Executivo responsável por um orçamento de cerca de R$ 100 milhões, à frente dos programas socioeconômicos e indígenas. Em 2015, assumi também os eixos físico e biótico. Foi ali que se consolidou o meu jeito de trabalhar: planejar, medir, ajustar e entregar resultados extraordinários.</p>
              <p><strong>2016 (UHE São Manuel – MT/PA):</strong> Como Consultor Sênior assessorei a diretoria de meio ambiente do empreendimento em nível estratégico e gerencial.</p>
            </BioSection>

            <BioSection title="A Jornada na MaxGeo">
                <p>Cheguei à Maxgeo em 2017. Desde então, ao lado de um time comprometido, elevamos a empresa a novos patamares:</p>
                <p>Atuação em milhares de quilômetros de linhas de transmissão e distribuição e projetos hidrelétricos de grande porte.</p>
                <p>Em 2021, passei a integrar o quadro societário da Maxgeo Consultoria e fundamos a Maxgeo Serviços, ampliando nossa capacidade operacional. Em 2025, assumi integralmente as empresas.</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mt-4">“É reafirmar um compromisso com nossos clientes e colaboradores, sempre com excelência e propósito de quem ama o que faz.”</blockquote>
            </BioSection>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-green-50">
        <div className="container max-w-4xl mx-auto">
            <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Missão, Visão e Valores</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Os pilares que definem quem somos e como trabalhamos.</p>
          </motion.div>
          
          <Accordion type="single" collapsible defaultValue="missao" className="w-full">
            {coreTenets.map(tenet => <AccordionItem value={tenet.id} key={tenet.id} className="bg-background border-b rounded-lg mb-4 shadow-sm">
                <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-left">
                  <div className="flex items-center gap-4">
                    {tenet.icon}
                    <span>{tenet.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{tenet.description}</p>
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Faça Parte da Próxima Década de Inovação</h2>
            <p className="text-xl mb-8 text-white/80">Junte-se a nós na construção de um futuro mais sustentável e eficiente para o Brasil.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <Link to="/contato">
                  Solicite um Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default About;
