import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="relative pt-40 pb-24 text-white overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-gradient-to-t from-green-700/30 to-transparent"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-foreground">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;