import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const ClientCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);

  const clients = [
    { name: 'CPFL Energia', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/018852237ac987c795590f10f8cfa652.jpg' },
    { name: 'Neoenergia Elektro', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/f1fce0122fa98075bf8021e69dbd2558.jpg' },
    { name: 'Casa dos Ventos', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/dfebdd3c3c11bda767ce54019c8e9610.jpg' },
    { name: 'Basestaca Construtora', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/507408e46d4db699c9315713f69ed6a7.png' },
    { name: 'Saint-Gobain Glass', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/136107bbf2d668487d05de3f15be51ad.jpg' },
    { name: 'Trans-Dupla', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/39a659781f02c0810f36da61a3b2532a.jpg' },
    { name: 'Energisa', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/4ae2bdff4450f79efc4904c5bf3a5748.jpg' },
    { name: 'Amazonas Energia', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/e73a92fccb943217c201bf7b3be5d998.jpg' },
    { name: 'Engie', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/01f09ce45daa87681eee5091ee3d6ccc.jpg' },
    { name: 'Ampla', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/0de4411abd40366265382d2080d9e1fe.jpg' },
    { name: 'Equatorial Energia', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/476c1c8cb3c975a81c85925f06bd5d30.jpg' },
    { name: 'Quantum', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/22814758d50208a3fd959d36e882c08c.jpg' },
    { name: 'Enel Brasil', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/a42d1fd9c21ef60094cacd30c416bc10.jpg' },
    { name: 'EDP', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/c109fc2738d890c191bb2aea9effb2bc.jpg' },
    { name: 'Neoenergia Coelba', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/90ddb4b29cd78d99a20d6c33cb82690a.jpg' },
    { name: 'Casa dos Ventos', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/5920e80e33f04727a1eef3440a10af76.jpg' },
    { name: 'CCBE', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/35811999bb2395d67e564e5b3a6c2723.jpg' },
    { name: 'Aliança', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/a6b782d2f302188c03855e3e0748c29e.jpg' },
    { name: 'JMalucelli', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/f35338c34d55762338e0eba80b380644.jpg' },
    { name: 'Hidrelétrica Teles Pires', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/dadaa58751a7f2340243843ee6d0bd40.jpg' },
    { name: 'Argo', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/9965bd6dd203a2bd1eb7bedd9333cbd6.jpg' },
    { name: 'Santo Antônio Energia', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/c305f9662371c5934bb5e7bbfde3dab1.jpg' },
    { name: 'Engevix', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/8c9256bf1c20a1ee747c77a4ffe17617.jpg' },
    { name: 'Neoenergia', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/dcae805c6b29ce6b0d79ee6de6db6bfe.jpg' },
    { name: 'Santo Antônio Energia', logo: 'https://horizons-cdn.hostinger.com/47c4aa31-1b9a-4f5c-bb20-c735dd91cacc/debb445a1f5123cb400be4aadb7b1ea8.jpg' },
  ];

  if (clients.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-foreground">Nossos Clientes</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Temos a honra de colaborar com empresas líderes em seus setores, construindo parcerias de sucesso.
        </p>
      </motion.div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {clients.concat(clients).map((client, index) => (
            <div className="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_16.66%] min-w-0 px-4" key={index}>
              <div className="flex items-center justify-center h-24">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-125"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;