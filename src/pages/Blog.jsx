import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'A Importância do Licenciamento Ambiental para Projetos de Energia Renovável',
      category: 'Meio Ambiente',
      date: '10 de Agosto, 2025',
      excerpt: 'O licenciamento ambiental é um pilar para a viabilidade de parques eólicos e solares. Ele assegura que o empreendimento cumpra as normas legais, minimize impactos e promova a sustentabilidade, sendo crucial para a aprovação e sucesso do projeto.',
      content: 'O licenciamento ambiental é um processo administrativo pelo qual o órgão ambiental competente licencia a localização, instalação, ampliação e a operação de empreendimentos e atividades utilizadoras de recursos ambientais, consideradas efetiva ou potencialmente poluidoras ou daquelas que, sob qualquer forma, possam causar degradação ambiental. Para projetos de energia renovável, como parques eólicos e solares, este processo é ainda mais crítico. Ele não apenas garante a conformidade legal, mas também avalia os impactos socioambientais, propondo medidas mitigadoras e compensatórias. Um licenciamento bem conduzido fortalece a imagem da empresa, facilita o acesso a financiamentos e garante a licença social para operar, tornando-se um investimento estratégico para o futuro do negócio e do planeta.'
    },
    {
      id: 2,
      title: 'Desafios e Soluções no Desimpedimento Fundiário para Linhas de Transmissão',
      category: 'Gestão Fundiária',
      date: '05 de Agosto, 2025',
      excerpt: 'A regularização de terras para grandes obras de infraestrutura enfrenta desafios como negociações complexas e questões legais. A Maxgeo supera esses obstáculos com uma abordagem estratégica, diálogo transparente e expertise jurídica, garantindo o avanço do projeto.',
      content: 'O desimpedimento fundiário para linhas de transmissão é uma das etapas mais complexas e sensíveis de um projeto de infraestrutura. Os principais desafios incluem a identificação de todos os proprietários e posseiros, a avaliação justa de terras e benfeitorias, e a negociação para a constituição de servidão administrativa. Muitas vezes, a falta de documentação regularizada e a resistência das comunidades locais podem atrasar o cronograma. A Maxgeo aborda esses desafios com uma equipe multidisciplinar que combina conhecimento técnico, jurídico e social. Investimos em um cadastramento detalhado, utilizamos laudos de avaliação precisos e priorizamos a negociação amigável, buscando sempre um acordo justo. Quando necessário, nosso corpo jurídico está preparado para conduzir as ações judiciais com eficiência, garantindo a imissão na posse e a continuidade das obras.'
    },
    {
      id: 3,
      title: 'Tecnologia de Drones na Topografia: Precisão e Eficiência',
      category: 'Inovação',
      date: '01 de Agosto, 2025',
      excerpt: 'O uso de drones está revolucionando os levantamentos topográficos, oferecendo uma coleta de dados mais rápida, segura e precisa. Essa tecnologia reduz custos, otimiza o planejamento e aumenta a qualidade dos projetos de engenharia.',
      content: 'A topografia tradicional, embora precisa, pode ser um processo demorado e de alto custo, especialmente em áreas extensas ou de difícil acesso. A introdução de Veículos Aéreos Não Tripulados (VANTs), ou drones, transformou este cenário. Equipados com sensores de alta resolução, os drones podem mapear grandes áreas em uma fração do tempo, gerando nuvens de pontos e modelos digitais de terreno com precisão centimétrica. Além da agilidade, a tecnologia aumenta a segurança da equipe de campo, que não precisa mais percorrer terrenos acidentados. Na Maxgeo, integramos o uso de drones em nossos serviços de topografia para entregar aos nossos clientes dados mais ricos e detalhados, otimizando o planejamento, o monitoramento de obras e a tomada de decisões estratégicas.'
    },
    {
      id: 4,
      title: 'Programas Socioambientais: Gerando Valor para Comunidades e Empresas',
      category: 'Sustentabilidade',
      date: '28 de Julho, 2025',
      excerpt: 'Além de cumprir exigências legais, os programas socioambientais bem executados fortalecem o relacionamento com as comunidades, mitigam riscos e constroem um legado positivo, sendo cruciais para o sucesso a longo prazo de qualquer grande empreendimento.',
      content: 'Os programas socioambientais são um conjunto de ações exigidas no processo de licenciamento ambiental, com o objetivo de mitigar, compensar ou potencializar os impactos de um empreendimento. No entanto, sua importância vai muito além da conformidade. Quando bem planejados e executados, esses programas se tornam uma poderosa ferramenta de gestão e relacionamento. Programas de comunicação social, educação ambiental, e apoio a atividades produtivas locais, por exemplo, podem transformar a percepção da comunidade sobre o projeto, construindo uma relação de confiança e parceria. Para a empresa, isso se traduz em redução de conflitos, maior segurança para as operações e fortalecimento da reputação corporativa. A Maxgeo desenvolve e implementa programas socioambientais customizados, que geram valor real tanto para a sociedade quanto para o negócio.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Maxgeo | Notícias e Artigos sobre Energia e Infraestrutura</title>
        <meta name="description" content="Fique por dentro das últimas notícias, tendências e análises do setor de energia, meio ambiente e infraestrutura com o blog da Maxgeo." />
      </Helmet>

      <PageHeader 
        title="Blog & Notícias"
        subtitle="Análises, tendências e novidades sobre os setores de energia, infraestrutura e meio ambiente."
        bgColor="bg-primary"
      />

      <section className="section-padding bg-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-lg shadow-sm overflow-hidden hover-lift flex flex-col"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Tag className="h-4 w-4 mr-2 text-secondary" />
                    <span>{post.category}</span>
                    <span className="mx-2">|</span>
                    <Calendar className="h-4 w-4 mr-2 text-secondary" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3 flex-grow">{post.title}</h2>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <Button asChild variant="outline" className="mt-auto self-start">
                    <Link to="#">
                      Ler Artigo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Quer fazer parte dessa lista?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Entre em contato e descubra como podemos ajudar o seu projeto a sair do papel com segurança e agilidade!
            </p>
            <Button asChild size="lg">
              <Link to="/contato">
                Solicite uma Proposta Agora!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;