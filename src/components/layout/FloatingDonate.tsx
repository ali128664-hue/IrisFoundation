'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

export function FloatingDonate() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop floating button */}
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            className="fixed right-6 bottom-24 z-40 hidden md:block"
          >
            <div className="relative">
              <Link
                href="/donate"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#E91E8C] to-[#8B2FC9] text-white font-bold rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(233,30,140,0.5)] transition-all hover:-translate-y-1 text-sm"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
              <button
                onClick={() => setDismissed(true)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Dismiss donate button"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          >
            <div className="bg-gradient-to-r from-[#E91E8C] to-[#8B2FC9] px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-white/80 text-xs">Help Provide Clean Water</p>
                <p className="text-white font-bold text-sm">Support Iris Foundation</p>
              </div>
              <Link
                href="/donate"
                className="px-5 py-2 bg-white text-[#8B2FC9] font-bold rounded-full text-sm hover:bg-white/90 transition-colors"
              >
                💗 Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
