'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS } from '@/config/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100/50'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 transition-all">
            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0">
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Iris Foundation"
                  width={320}
                  height={110}
                  priority
                  className="h-16 sm:h-[4.25rem] md:h-[4.75rem] w-auto object-contain drop-shadow-sm"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors rounded-lg hover:bg-gray-50"
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Donate */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/donate" variant="donate" size="md" className="shadow-md">
                💗 Donate Now
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-20 shadow-2xl"
          >
            <div className="flex flex-col h-full overflow-y-auto px-6 py-6">
              <div className="mb-4 pb-4 border-b border-gray-100 flex items-center justify-between">
                <Link href="/" onClick={() => setMobileOpen(false)} className="inline-block group">
                  <div className="inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src="/logo.png"
                      alt="Iris Foundation"
                      width={240}
                      height={85}
                      className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-xl font-bold text-gray-900 py-4 border-b border-gray-50"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-gray-500 py-2 text-base font-medium hover:text-gray-900 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  href="/donate"
                  variant="donate"
                  size="xl"
                  className="w-full shadow-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  💗 Donate Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
