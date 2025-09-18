import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, Instagram, Facebook, Linkedin, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PageHeader from '@/components/PageHeader';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t('contactPage.infoAdminEmailTitle'),
      content: 'administrativo@maxgeo.com.br',
      href: 'mailto:administrativo@maxgeo.com.br',
      description: t('contactPage.infoAdminEmailDesc')
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t('contactPage.infoCommercialEmailTitle'),
      content: 'comercial@maxgeo.com.br',
      href: 'mailto:comercial@maxgeo.com.br',
      description: t('contactPage.infoCommercialEmailDesc')
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t('contactPage.infoPhoneTitle'),
      content: '(19) 3392-2078',
      href: 'tel:+551933922078',
      description: ''
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: t('contactPage.infoWhatsappTitle'),
      content: '(19) 9 9722-0052',
      href: 'https://wa.me/5519997220052',
      description: t('contactPage.infoWhatsappDesc')
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t('contactPage.infoLocationTitle'),
      content: 'R. Dr. Oswaldo Cruz, 663 - Cidade Nova I, Indaiatuba - SP, 13334-010',
      href: 'https://www.google.com/maps?q=R.+Dr.+Oswaldo+Cruz,+663+-+Cidade+Nova+I,+Indaiatuba+-+SP,+13334-010&ftid=0x94c8b4af24f9897f:0x39e738ac30c8b270&entry=gps&lucs=,94259549,94284511,94224825,94227247,94227248,94231188,47071704,47069508,94273879,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM0LjEuNzk2NTY0MDEzMBgAIIgnKnUsOTQyNTk1NDksOTQyODQ1MTEsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyNzM4NzksOTQyMTg2NDEsOTQyODIxMzQsOTQyMDMwMTksNDcwODQzMDRCAkJS&skid=bd5d68a6-e6a7-45d7-9d34-65aaeaee90ed&g_st=ipc',
      description: t('contactPage.infoLocationDesc')
    }
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/maxgeoconsultoria', icon: <Instagram size={24} /> },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1Czi7HDCVo/?mibextid=wwXIfr', icon: <Facebook size={24} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/maxgeoconsultoria', icon: <Linkedin size={24} /> },
  ];

  return (
    <>
      <Helmet>
        <title>{t('contactPage.title')} - Maxgeo | Solicite seu Orçamento</title>
        <meta name="description" content="Entre em contato com a Maxgeo. Solicite orçamento para serviços de engenharia consultiva, licenciamento ambiental e soluções socioambientais." />
      </Helmet>

      <PageHeader 
        title={t('contactPage.title')}
        subtitle={t('contactPage.subtitle')}
      />

      <section className="section-padding bg-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('contactPage.formTitle')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('contactPage.formSubtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{t('contactPage.fullName')}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary" placeholder={t('contactPage.fullNamePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{t('contactPage.email')}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary" placeholder={t('contactPage.emailPlaceholder')} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">{t('contactPage.phone')}</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary" placeholder={t('contactPage.phonePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{t('contactPage.message')}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary resize-none" placeholder={t('contactPage.messagePlaceholder')}></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full py-4 text-lg">
                  {t('contactPage.submitButton')} <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('contactPage.infoTitle')}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index} 
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 group"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{info.title}</h4>
                        <p className="text-muted-foreground font-medium">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h4 className="text-xl font-bold text-foreground">Horário de Atendimento</h4>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium text-foreground">Segunda a Quinta-feira:</span> 8 às 18 horas</p>
                  <p><span className="font-medium text-foreground">Sexta-feira:</span> 8 às 17 horas</p>
                  <p><span className="font-medium text-foreground">Sábado e Domingo:</span> sem expediente</p>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                 <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-foreground">{t('contactPage.followUs')}</h4>
                  <div className="flex space-x-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-2 bg-muted rounded-full"
                      >
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                      </a>
                    ))}
                  </div>
                 </div>
                 <div className="border-t border-border pt-4">
                    <a href="mailto:ouvidoria@maxgeo.com.br" className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                            <ShieldAlert className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                            <h5 className="font-semibold text-foreground group-hover:text-amber-600 transition-colors">Ouvidoria</h5>
                            <p className="text-sm text-muted-foreground">Canal para críticas, sugestões ou elogios. Clique para enviar um e-mail.</p>
                        </div>
                    </a>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-green-50">
        <div className="container pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden h-96 shadow-xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.639739069518!2d-47.21557162468087!3d-23.18316397906161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4af24f9897f%3A0x39e738ac30c8b270!2sR.%20Dr.%20Oswaldo%20Cruz%2C%20663%20-%20Cidade%20Nova%20I%2C%20Indaiatuba%20-%20SP%2C%2013334-010!5e0!3m2!1spt-BR!2sbr!4v1724860219431!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Maxgeo"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;