import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Building, Leaf, FileText, Users, BarChart3, Map, Tractor, Wrench, ChevronDown, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslation } from 'react-i18next';
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LanguageSelector from '@/components/LanguageSelector';

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const logoUrl = "https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/4c4985baf0290a1814a312952bece871.png";

  const solutions = [
    { slug: 'desimpedimento-fundiario', icon: <Building className="h-4 w-4" />, title: 'Desimpedimento Fundiário', description: 'Gestão de regularização de áreas.', href: '/maxgeo-servicos/desimpedimento-fundiario' },
    { slug: 'fiscalizacao-sociopatrimonial', icon: <Users className="h-4 w-4" />, title: 'Fiscalização Sociopatrimonial', description: 'Monitoramento de impactos sociais e patrimoniais.', href: '/maxgeo-servicos/fiscalizacao-sociopatrimonial' },
    { slug: 'licenciamento-ambiental', icon: <Leaf className="h-4 w-4" />, title: 'Licenciamento Ambiental', description: 'Assessoria técnica em todas as fases.', href: '/maxgeo-servicos/licenciamento-ambiental' },
    { slug: 'programas-ambientais-e-sociais', icon: <FileText className="h-4 w-4" />, title: 'Programas Ambientais e Sociais', description: 'Desenvolvimento e execução de programas.', href: '/maxgeo-consultoria/programas-ambientais-e-sociais' },
    { slug: 'estudos-estrategicos', icon: <BarChart3 className="h-4 w-4" />, title: 'Estudos Estratégicos', description: 'Análises para subsidiar a tomada de decisão.', href: '/maxgeo-servicos/estudos-estrategicos' },
    { slug: 'topografia-cartografia-geodesia', icon: <Map className="h-4 w-4" />, title: 'Topografia, Cartografia e Geodésia', description: 'Dados geoespaciais de alta precisão.', href: '/maxgeo-servicos/topografia-cartografia-geodesia' },
  ];
  
  const services = [
    { slug: 'servicos-terraplanagem-miniescavadeira', icon: <Wrench className="h-4 w-4" />, title: 'Serviços de Terraplanagem com Mini Escavadeira', description: 'Equipamentos versáteis para obras de precisão.' },
    { slug: 'servicos-pulverizacao-agricola-drone', icon: <Tractor className="h-4 w-4" />, title: 'Serviços de Pulverização Agrícola com Drone', description: 'Tecnologia e eficiência para o agronegócio.' },
  ];
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const mainNavigation = [
    { name: t('header.home'), href: '/' },
    { name: t('header.about'), href: '/sobre' },
    { name: t('header.socialProjects'), href: '/trabalhos-sociais' },
    { name: t('header.workWithUs'), href: '/trabalhe-conosco' },
    { name: t('header.suppliers'), href: '/fornecedores'},
    { name: t('header.contact'), href: '/contato' },
  ];

  const navLinkClasses = ({ isActive }) =>
    cn(
      'relative text-sm font-medium transition-colors hover:text-primary',
      isActive ? 'text-primary' : 'text-foreground/80'
    );

  const navLinkStyle = (isActive) => ({
    '--underline-width': isActive ? '100%' : '0%',
  });

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-lg border-b border-border'
      )}
    >
      <div className="container flex justify-between items-center h-20">
        <Link to="/" className="flex items-center">
          <motion.img 
            src={logoUrl} 
            alt="Maxgeo Consultoria Logo" 
            className="h-10"
            whileHover={{ scale: 1.05 }}
          />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-x-8"> {/* Increased gap-x for uniformity */}
            {mainNavigation.slice(0, 2).map((item) => (
               <NavigationMenuItem key={item.name}>
                <NavLink to={item.href} className={navLinkClasses}>
                  {({ isActive }) => (
                    <span className="py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[var(--underline-width)] after:h-0.5 after:bg-primary after:transition-all after:duration-300" style={navLinkStyle(isActive)}>
                      {item.name}
                    </span>
                  )}
                </NavLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
                {t('header.solutions')}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {solutions.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), 'bg-transparent')}>
                {t('header.services')}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {services.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/maxgeo-servicos/${component.slug}`}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {mainNavigation.slice(2).map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavLink to={item.href} className={navLinkClasses}>
                   {({ isActive }) => (
                    <span className="py-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[var(--underline-width)] after:h-0.5 after:bg-primary after:transition-all after:duration-300" style={navLinkStyle(isActive)}>
                      {item.name}
                    </span>
                  )}
                </NavLink>
              </NavigationMenuItem>
            ))}

          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageSelector />
        </div>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="p-4">
              <nav className="flex flex-col gap-2">
                {mainNavigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'text-lg font-medium w-full text-left py-3 px-4 rounded-lg transition-colors flex items-center justify-start gap-2',
                        isActive ? 'text-primary bg-accent' : 'text-foreground/80 hover:bg-accent/50'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="solutions">
                    <AccordionTrigger className="text-lg font-medium w-full text-left py-3 px-4 rounded-lg transition-colors text-foreground/80 hover:bg-accent/50 hover:no-underline">
                      {t('header.solutions')}
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {solutions.map(solution => (
                        <NavLink
                          key={solution.slug}
                          to={solution.href}
                          onClick={() => setIsOpen(false)}
                          className={({isActive}) => cn("block py-2 px-4 text-muted-foreground hover:text-primary rounded-md", isActive ? 'text-primary bg-accent' : '')}
                        >
                          {solution.title}
                        </NavLink>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="services">
                    <AccordionTrigger className="text-lg font-medium w-full text-left py-3 px-4 rounded-lg transition-colors text-foreground/80 hover:bg-accent/50 hover:no-underline">
                      {t('header.services')}
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                      {services.map(service => (
                        <NavLink
                          key={service.slug}
                          to={`/maxgeo-servicos/${service.slug}`}
                          onClick={() => setIsOpen(false)}
                           className={({isActive}) => cn("block py-2 px-4 text-muted-foreground hover:text-primary rounded-md", isActive ? 'text-primary bg-accent' : '')}
                        >
                          {service.title}
                        </NavLink>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="mt-4 pt-4 border-t border-border">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        <Globe className="h-5 w-5 mr-2" />
                        <span>Idioma</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[calc(100vw-2rem)]">
                      <DropdownMenuItem onClick={() => i18n.changeLanguage('pt')}>Português (BR)</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>English (US)</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => i18n.changeLanguage('es')}>Español (ES)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;