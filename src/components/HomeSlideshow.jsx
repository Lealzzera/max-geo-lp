import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HomeSlideshow = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    
    const interval = setInterval(() => {
        emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);

  }, [emblaApi]);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] group">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <AnimatePresence>
                {index === selectedIndex && (
                  <motion.div
                    className="w-full h-full"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold">{slides[selectedIndex].title}</h2>
            <p className="mt-4 text-lg text-white/90">{slides[selectedIndex].subtitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 z-20 flex justify-between w-full px-4">
        <button
          onClick={scrollPrev}
          className="bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="bg-white/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HomeSlideshow;