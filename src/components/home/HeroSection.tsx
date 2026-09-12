'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center justify-center min-h-[90vh] overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-gradient-to-b from-[#4FC3F7]/10 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#8B2FC9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#E91E8C]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4FC3F7]/10 text-[#0091EA] border border-[#4FC3F7]/20 font-semibold text-xs md:text-sm shadow-sm">
            <Droplets className="w-3 h-3 md:w-4 md:h-4" />
            Iris Foundation
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 tracking-tight leading-[1.15] md:leading-[1.1] mb-6 md:mb-8"
        >
          Clean Water. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#0091EA] to-[#8B2FC9] bg-clip-text text-transparent">
            Healthy
          </span>{' '}
          Children. <br className="hidden sm:block" />
          Stronger{' '}
          <span className="bg-gradient-to-r from-[#E91E8C] to-[#8B2FC9] bg-clip-text text-transparent">
            Futures.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium px-2"
        >
          Helping schools and communities access safer drinking water
          through RO water filtration projects and meaningful social initiatives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <Button href="/donate" variant="donate" size="xl" className="w-full sm:w-auto shadow-xl">
            💗 Donate Now
          </Button>
          <Button href="/ro-water" variant="outline" size="xl" className="w-full sm:w-auto shadow-sm">
            Explore RO Projects <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
