
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/67dd9d65f34030d8f56c2eb1d0f12b51.png";
  const mapUrl = "https://www.google.com/maps?q=R.+Dr.+Oswaldo+Cruz,+663+-+Cidade+Nova+I,+Indaiatuba+-+SP,+13334-010&ftid=0x94c8b4af24f9897f:0x39e738ac30c8b270&entry=gps&lucs=,94259549,94284511,94224825,94227247,94227248,94231188,47071704,47069508,94273879,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjM0LjEuNzk2NTY0MDEzMBgAIIgnKnUsOTQyNTk1NDksOTQyODQ1MTEsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyNzM4NzksOTQyMTg2NDEsOTQyODIxMzQsOTQyMDMwMTksNDcwODQzMDRCAkJS&skid=bd5d68a6-e6a7-45d7-9d34-65aaeaee90ed&g_st=ipc";

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/maxgeoconsultoria', icon: <Instagram size={20} /> },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1Czi7HDCVo/?mibextid=wwXIfr', icon: <Facebook size={20} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/maxgeoconsultoria', icon: <Linkedin size={20} /> },
  ];

  return (
    <footer className="bg-background text-muted-foreground border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
             <Link to="/" className="mb-4 inline-block">
               <img src={logoUrl} alt="Maxgeo Consultoria logo" className="h-12"/>
             </Link>
            <p className="text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/sobre" className="text-sm hover:text-primary transition-colors">{t('footer.about')}</Link>
              <Link to="/maxgeo-servicos" className="text-sm hover:text-primary transition-colors">{t('footer.services')}</Link>
              <Link to="/trabalhos-sociais" className="text-sm hover:text-primary transition-colors">{t('footer.socialProjects')}</Link>
              <Link to="/faq" className="text-sm hover:text-primary transition-colors">{t('footer.faq')}</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Maxgeo Consultoria</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/maxgeo-consultoria/desimpedimento-fundiario" className="text-sm hover:text-primary transition-colors">Desimpedimento Fundiário</Link>
              <Link to="/maxgeo-consultoria/fiscalizacao-sociopatrimonial" className="text-sm hover:text-primary transition-colors">Fiscalização Sociopatrimonial</Link>
              <Link to="/maxgeo-consultoria/licenciamento-ambiental" className="text-sm hover:text-primary transition-colors">Licenciamento Ambiental</Link>
              <Link to="/maxgeo-consultoria/estudos-estrategicos" className="text-sm hover:text-primary transition-colors">Estudos Estratégicos</Link>
              <Link to="/maxgeo-consultoria/programas-ambientais-e-sociais" className="text-sm hover:text-primary transition-colors">Programas Ambientais e Sociais</Link>
              <Link to="/maxgeo-consultoria/topografia-cartografia-geodesia" className="text-sm hover:text-primary transition-colors">Topografia, Cartografia e Geodésia</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.opportunities')}</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/trabalhe-conosco" className="text-sm hover:text-primary transition-colors">{t('footer.workWithUs')}</Link>
              <Link to="/fornecedores" className="text-sm hover:text-primary transition-colors">{t('footer.beASupplier')}</Link>
              <Link to="/contato" className="text-sm hover:text-primary transition-colors">{t('footer.contact')}</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.contactUs')}</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:ouvidoria@maxgeo.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>ouvidoria@maxgeo.com.br</span>
              </a>
              <a href="mailto:administrativo@maxgeo.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>administrativo@maxgeo.com.br</span>
              </a>
              <a href="mailto:comercial@maxgeo.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>comercial@maxgeo.com.br</span>
              </a>
              <a href="tel:+551933922078" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                <span>(19) 3392-2078</span>
              </a>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>R. Dr. Oswaldo Cruz, 663 - Cidade Nova I, Indaiatuba - SP, 13334-010</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">{t('footer.rights', { year: currentYear })}</p>
          <div className="flex gap-4 text-xs">
            <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link>
            <Link to="/termos-de-uso" className="hover:text-primary transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
