import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft, Droplets } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F8F7FF] px-6 py-20">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-[#8B2FC9]/20 to-[#E91E8C]/20 flex items-center justify-center text-[#8B2FC9]">
          <Droplets className="w-10 h-10 animate-bounce" />
        </div>

        <span className="text-sm font-bold uppercase tracking-widest text-[#8B2FC9] bg-[#8B2FC9]/10 px-4 py-1.5 rounded-full inline-block mb-3">
          404 — Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
          Aap jo page dhoond rahe hain wo dastyaab nahi hai ya uska link badal chuka hai. Baraye meharbani home page par wapis jayein ya hamare verified projects check karein.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <Button href="/our-work" variant="secondary" size="md" className="w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-2" /> View Our Work
          </Button>
        </div>
      </div>
    </div>
  );
}
