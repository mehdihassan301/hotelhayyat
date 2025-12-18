import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darkBg?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, darkBg = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 px-4 md:px-8 lg:px-16 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;