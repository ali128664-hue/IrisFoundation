import Link from 'next/link';
import Image from 'next/image';
import { Droplets, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS, WHATSAPP_URL, WHATSAPP_GENERAL_MESSAGE } from '@/config/constants';
import { Button } from '@/components/ui/Button';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D1A] border-t border-white/5">
      {/* Final CTA Banner */}
      <div className="bg-gradient-to-r from-[#8B2FC9] to-[#E91E8C] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">💧</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Help Provide Clean Water
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Your support can bring safe drinking water to more schools and children across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate" variant="ghost" size="lg">
              💗 Donate Now
            </Button>
            <a
              href={`${WHATSAPP_URL}?text=${WHATSAPP_GENERAL_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group transition-transform hover:scale-[1.02]">
              <div className="bg-white/95 px-5 py-2.5 rounded-full inline-flex items-center justify-center shadow-lg border border-white/20">
                <Image
                  src="/logo.png"
                  alt="Iris Foundation"
                  width={280}
                  height={100}
                  className="h-16 md:h-[4.5rem] w-auto object-contain drop-shadow-sm"
                />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Bringing clean water to schools and communities across Pakistan through RO water filtration and meaningful humanitarian initiatives.
            </p>
            <div className="flex gap-3">
              {[
                { href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
                { href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
                { href: SOCIAL_LINKS.twitter, Icon: TwitterIcon },
                { href: SOCIAL_LINKS.linkedin, Icon: LinkedinIcon },
                { href: SOCIAL_LINKS.youtube, Icon: YoutubeIcon },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 hover:bg-[#8B2FC9] border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Work', href: '/our-work' },
                { label: 'Blog', href: '/blog' },
                { label: 'Gallery', href: '/gallery' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Get Involved</h3>
            <ul className="space-y-3">
              {[
                { label: '💗 Donate', href: '/donate' },
                { label: 'Volunteer', href: '/volunteer' },
                { label: 'Partners', href: '/partners' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Transparency', href: '/transparency' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#8B2FC9] mt-0.5 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/50 hover:text-white text-sm transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8B2FC9] mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8B2FC9] mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">{SITE_CONFIG.address}</span>
              </li>
            </ul>
            <a
              href={`${WHATSAPP_URL}?text=${WHATSAPP_GENERAL_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-sm font-medium rounded-full transition-all"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-white/40 text-sm">
            <p>&copy; {currentYear} Iris Foundation. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span>Designed & Developed by</span>
              <a
                href="https://hussainxsolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/95 hover:bg-white px-2.5 py-1 rounded-md transition-all hover:scale-105 shadow-sm"
                title="Hussain X Solution"
              >
                <Image
                  src="/hussainx-logo.png"
                  alt="Hussain X Solution"
                  width={140}
                  height={35}
                  className="h-6 md:h-7 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-white/40 text-sm">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#E91E8C] fill-[#E91E8C]" />
            <span>for a better Pakistan</span>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}