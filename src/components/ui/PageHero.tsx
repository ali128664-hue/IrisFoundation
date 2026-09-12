'use client';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

interface PageHeroProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHero({ label, title, highlight, description, children }: PageHeroProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#1A1A2E]">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2D1B4E] to-[#1A1A2E]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B2FC9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4FC3F7]/15 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <SectionLabel light>💧 {label}</SectionLabel>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {highlight ? (
            <>
              {parts[0]}
              <span className="bg-gradient-to-r from-[#E91E8C] to-[#8B2FC9] bg-clip-text text-transparent">
                {highlight}
              </span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
