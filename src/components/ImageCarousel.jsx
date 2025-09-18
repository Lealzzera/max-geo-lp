import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const ImageCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4" key={index}>
              <motion.div
                className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                initial={{ scale: 0.9, opacity: 0.5 }}
                animate={{
                  scale: index === selectedIndex ? 1 : 0.85,
                  opacity: index === selectedIndex ? 1 : 0.5,
                  zIndex: index === selectedIndex ? 10 : 1,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <img
                  src={src}
                  alt={`Projeto Maxgeo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2 md:px-0">
        <button
          onClick={scrollPrev}
          className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition -ml-4 md:-ml-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={scrollNext}
          className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition -mr-4 md:-mr-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}