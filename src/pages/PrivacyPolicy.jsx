import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Maxgeo</title>
        <meta name="description" content="Conheça nossa Política de Privacidade e como tratamos os dados coletados em nosso site." />
      </Helmet>

      <div className="pt-32 pb-16 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Política de Privacidade</h1>
            <p className="text-lg text-muted-foreground mt-4">Última atualização: 11 de Agosto de 2025</p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-4xl mx-auto"
          >
            <p>A sua privacidade é importante para nós. É política da Maxgeo respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Maxgeo, e outros sites que possuímos e operamos.</p>
            
            <h2>1. Informações que coletamos</h2>
            <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
            
            <h2>2. Como usamos suas informações</h2>
            <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
            
            <h2>3. Cookies</h2>
            <p>O nosso site usa "cookies" para melhorar a experiência online. Um cookie é um arquivo de texto que é colocado no seu disco rígido por um servidor de páginas da web. Os cookies não podem ser usados ​​para executar programas ou entregar vírus ao seu computador. Os cookies são atribuídos exclusivamente a você e só podem ser lidos por um servidor web no domínio que emitiu o cookie para você.</p>
            
            <h2>4. Links para outros sites</h2>
            <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
            
            <h2>5. Seus direitos</h2>
            <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.</p>
            
            <h2>6. Contato</h2>
            <p>Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do nosso e-mail: contato@maxgeo.com.br.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;