import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartHandshake, BookOpen, ArrowRight, Users, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';

const SocialProjects = () => {
  const project = {
    id: "arte-que-educa-fe-que-transforma",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Projeto Social de Evangelização Infantil",
    image: "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/b6952405b33dd80e2a243516e8bde5cd.jpg",
    partnership: "Maxgeo Consultoria + Santuário Santa Rita de Cássia – Indaiatuba/SP",
    intro: "Com o coração voltado ao bem comum e à formação espiritual das novas gerações, a Maxgeo Consultoria idealizou, em parceria com o Santuário Santa Rita de Cássia, um projeto social voltado à evangelização infantil por meio de histórias em quadrinhos."
  };
  
  const magazineImage = "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/6fd77a6ee628249d286b64ec934e67e7.jpg";

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
        <title>Trabalhos Sociais - Maxgeo | Compromisso com a Sociedade</title>
        <meta name="description" content="Conheça as iniciativas e trabalhos sociais da Maxgeo. Acreditamos que o desenvolvimento sustentável se constrói com responsabilidade social." />
      </Helmet>

      <PageHeader 
        title="Trabalhos Sociais"
        subtitle="Nosso compromisso vai além da engenharia. Construímos um legado positivo para as comunidades."
        backgroundImage={project.image}
      />

      <section className="section-padding bg-background">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{project.title}</h2>
            <p className="text-lg font-semibold text-primary">{project.partnership}</p>
          </motion.div>

           <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={magazineImage} alt="Revista em quadrinhos Ritinha e Jesusinho" className="rounded-lg shadow-xl w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">Um propósito que nasce do desejo de servir</h3>
              <p className="text-muted-foreground text-lg">
                Lançado oficialmente em <strong>06 de agosto de 2025</strong>, este projeto nasceu do desejo sincero de servir às crianças com um conteúdo acessível, lúdico e profundamente enraizado nos valores cristãos. Por meio da arte e da pedagogia, buscamos aproximá-las da vida de Jesus Cristo e da trajetória inspiradora de Santa Rita de Cássia, despertando nelas virtudes como fé, amor ao próximo, perdão, coragem e devoção.
              </p>
            </motion.div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {project.intro}
            </motion.p>
            
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-foreground">Idealizadores e Apoiadores</h3>
              <ul className="list-none space-y-4 p-0">
                <li className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div><strong>Coordenação Geral:</strong> Alysson Miranda – Diretor Maxgeo Consultoria Ltda</div>
                </li>
                <li className="flex items-start gap-4">
                  <HeartHandshake className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div><strong>Reitoria e Apoio Pastoral:</strong> Pe. Rogério de Almeida – Santuário Santa Rita de Cássia</div>
                </li>
                <li className="flex items-start gap-4">
                  <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div><strong>Cartunista:</strong> Alex Guenther – Ilustrador especializado em conteúdo infantil</div>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-foreground">Como funciona</h3>
              <p>
                Trata-se de uma publicação trimestral em formato de história em quadrinhos, ilustrada especialmente para o público infantil. As histórias terão uma abordagem leve e educativa, com linguagem adaptada e visual encantador, tornando a experiência da fé mais próxima e significativa para as crianças.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-foreground">Custeio e Sustentabilidade</h3>
              <p>
                Toda a produção é financiada integralmente pela Maxgeo Consultoria, idealizadora do projeto. Estamos abertos a buscar Empresas parceiras e doadores para contribuir com a continuidade da publicação. Nenhum custo recairá sobre o Santuário. Toda a renda obtida com a venda das revistas será destinada ao Santuário de Santa Rita de Cássia para as obras sociais e de evangelização por ele indicadas.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-foreground">Impacto Esperado</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Evangelizar crianças de forma moderna, criativa e cativante.</li>
                <li>Reforçar os laços familiares com a fé cristã e com a devoção a Santa Rita Cássia.</li>
                <li>Apoiar financeiramente ações sociais e de evangelização do Santuário, de maneira sustentável.</li>
                <li>Criar um legado espiritual e educativo para as futuras gerações.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-accent/50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground">Nossa gratidão</h3>
              <p>
                Com alegria e coração cheio de esperança, celebramos o nascimento da primeira edição deste projeto, que é fruto de fé, dedicação e colaboração generosa. 
                Agradecemos imensamente a todos que acreditaram nessa iniciativa desde o início — parceiros, apoiadores, famílias e, especialmente, às crianças que são a verdadeira inspiração desta obra.
              </p>
              <p>
                Que esta semente plantada com amor floresça em muitos corações, levando luz, conhecimento e espiritualidade às novas gerações. 
                Seguimos com o compromisso de servir e evangelizar, confiando que este é apenas o primeiro passo de uma jornada abençoada.
              </p>
              <p className="font-semibold mt-4">Muito obrigado.<br/>Equipe Maxgeo Consultoria</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <HeartHandshake className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Faça a Diferença Conosco
                </h2>
                <p className="text-lg mb-8 text-white/80">
                    Acreditamos no poder das parcerias para ampliar nosso impacto. Se sua organização tem um projeto ou iniciativa que se alinha aos nossos valores, entre em contato.
                </p>
                <Button asChild size="lg" variant="secondary">
                    <Link to="/contato">
                        Propor Parceria
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default SocialProjects;