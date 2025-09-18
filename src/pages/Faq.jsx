import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq = () => {
  const faqItems = [
    {
      question: 'Quais são os principais serviços oferecidos pela Maxgeo?',
      answer:
        'A Maxgeo é especializada em engenharia consultiva, com foco em desimpedimento fundiário, licenciamento ambiental, programas socioambientais, estudos estratégicos, topografia, geodésia, fiscalização socio patrimonial, serviços de terraplanagem com mini escavadeira e pulverização agrícola com drone.',
    },
    {
      question: 'Em quais setores a Maxgeo atua?',
      answer:
        'Atuamos principalmente nos setores de Energia (eólica, solar, hidrelétrica, transmissão), Infraestrutura e Transporte (rodovias, ferrovias), agronegócio, construção civil, Mineração e Dutos, oferecendo soluções completas desde o planejamento até a operação.',
    },
    {
      question: 'Como a Maxgeo garante a conformidade ambiental dos projetos?',
      answer:
        'Nossa equipe multidisciplinar conduz todo o processo de licenciamento ambiental (LP, LI, LO), elabora estudos de impacto (EIA/RIMA) e desenvolve programas de mitigação, garantindo que todas as exigências legais e dos órgãos ambientais sejam cumpridas com rastreabilidade, segurança jurídica e rigor técnico.',
    },
    {
      question: 'Qual a área de abrangência dos serviços da Maxgeo?',
      answer:
        'Com sede em Indaiatuba-SP, a Maxgeo possui uma estrutura flexível e abrangência nacional, atuando em projetos de diferentes portes em todo o território brasileiro, adaptando-se às particularidades de cada região.',
    },
    {
      question: 'O que é Desimpedimento Fundiário e por que é importante?',
      answer:
        'O Desimpedimento Fundiário é o processo de regularização de áreas para a implantação de um empreendimento. Ele envolve o cadastramento de propriedades, negociação com proprietários e a resolução de questões judiciais e administrativas para garantir que a área esteja legalmente livre e disponível para o projeto, evitando atrasos e custos inesperados.',
    },
    {
      question: 'Como posso solicitar um orçamento?',
      answer:
        'Você pode solicitar um orçamento entrando em contato conosco através do formulário em nossa página de Contato, enviando um e-mail para comercial@maxgeo.com.br, ou ligando para o nosso número de telefone. Nossa equipe comercial terá prazer em entender suas necessidades e preparar uma proposta personalizada.',
    },
    {
      question: 'A Maxgeo trabalha com projetos de pequeno porte?',
      answer:
        'Sim, atendemos projetos de todos os portes. Nossos serviços, como a terraplanagem com mini escavadeira, são perfeitamente adequados para obras residenciais e de menor escala. Nossa equipe está preparada para oferecer soluções personalizadas, independentemente do tamanho do seu desafio.',
    },
    {
      question: 'Qual a vantagem de usar drones na pulverização agrícola?',
      answer:
        'A pulverização com drones oferece maior precisão na aplicação de insumos, reduzindo o desperdício e o impacto ambiental. Permite o acesso a áreas de difícil alcance, como terrenos inclinados, e aumenta a segurança do operador, que não tem contato direto com os produtos químicos. O resultado é uma lavoura mais saudável e produtiva.',
    },
    {
      question: 'O que são programas com povos tradicionais?',
      answer:
        'São ações socioambientais desenvolvidas em conjunto com comunidades tradicionais, como ribeirinhos, quilombolas e indígenas. O objetivo é respeitar e valorizar a cultura local, mitigar os impactos de empreendimentos e promover o desenvolvimento sustentável, garantindo que os projetos gerem benefícios para todos os envolvidos.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Perguntas Frequentes | Maxgeo</title>
        <meta
          name="description"
          content="Encontre respostas para as perguntas mais comuns sobre os serviços de engenharia consultiva, licenciamento ambiental e gestão fundiária da Maxgeo."
        />
      </Helmet>

      <PageHeader
        title="Perguntas Frequentes (FAQ)"
        subtitle="Tire suas dúvidas sobre nossos serviços, processos e áreas de atuação."
      />

      <section className="section-padding bg-background">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="mb-4 bg-blue-50/50 rounded-lg shadow-sm">
                  <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-blue-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa equipe de especialistas está pronta para ajudar. Entre em contato conosco para obter mais informações ou solicitar um orçamento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contato">
                  <Mail className="mr-2 h-5 w-5" />
                  Fale Conosco
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+551933922078">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligue para Nós
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Faq;