'use client';
import { useState } from 'react';
import { faqItems, faqCategories, FAQCategory } from '@/data/faq';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_GENERAL_MESSAGE } from '@/config/constants';

export function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('donations');
  const [openItem, setOpenItem] = useState<string | null>('1');

  const filteredFaqs = faqItems.filter((f) => f.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {faqCategories.map((c) => {
          const isSelected = selectedCategory === c.id;
          return (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCategory(c.id);
                setOpenItem(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#8B2FC9] text-white shadow-lg shadow-[#8B2FC9]/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Accordion list */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openItem === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenItem(isOpen ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-base md:text-lg text-[#1A1A2E]">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#8B2FC9] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 border-t border-gray-50 text-gray-600 text-sm md:text-base leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Box */}
      <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl text-center space-y-4">
        <HelpCircle className="w-12 h-12 text-[#8B2FC9] mx-auto" />
        <h3 className="text-2xl font-bold text-[#1A1A2E]">Still Have a Question?</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
          Our team is readily available on WhatsApp to assist with payment inquiries, school plant questions, and partnerships.
        </p>
        <div>
          <a
            href={`${WHATSAPP_URL}?text=${WHATSAPP_GENERAL_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            💬 Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}