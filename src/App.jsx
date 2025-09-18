
import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Services from '@/pages/Services';
import ServicePage from '@/pages/ServicePage';
import Solutions from '@/pages/Solutions';
import WorkWithUs from '@/pages/WorkWithUs';
import Suppliers from '@/pages/Suppliers';
import Faq from '@/pages/Faq';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfUse from '@/pages/TermsOfUse';
import NotFound from '@/pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/WhatsAppButton';
import SocialProjects from '@/pages/SocialProjects';
import EnvironmentalSocialPrograms from '@/pages/EnvironmentalSocialPrograms';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { t } = useTranslation();
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowCookieConsent(false);
  };
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ScrollToTop />
        <Header />
        <main className="bg-background">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/maxgeo-consultoria" element={<Solutions />} />
              <Route path="/maxgeo-consultoria/:slug" element={<ServicePage />} />
              <Route path="/maxgeo-consultoria/programas-ambientais-e-sociais" element={<EnvironmentalSocialPrograms />} />
              <Route path="/maxgeo-servicos" element={<Services />} />
              <Route path="/maxgeo-servicos/:slug" element={<ServicePage />} />
              <Route path="/trabalhos-sociais" element={<SocialProjects />} />
              <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
              <Route path="/fornecedores" element={<Suppliers />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos-de-uso" element={<TermsOfUse />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} />}
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </Router>
    </Suspense>
  );
}

export default App;
