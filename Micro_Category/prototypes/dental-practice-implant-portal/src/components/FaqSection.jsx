import React, { useState } from 'react';
import { faqList, testimonials } from '../data/mockData';
import { ChevronDown, HelpCircle, Star, MessageSquare, Quote, CheckCircle } from 'lucide-react';

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqList.filter(
    faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq-section" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header & Cards */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Patient Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Smiles, Genuine Reviews
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              See what our patients across Andhra Pradesh say about their painless treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-slate-100 flex flex-col justify-between transition-all transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-teal-200 mb-2" />
                  <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <span className="text-xs text-slate-400">{t.city}</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                    {t.procedure}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Help Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
              Clear Answers
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions About Dental Care
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              We believe informed patients make the best decisions. If you have any further doubts before booking, our team is always ready to assist.
            </p>

            {/* Quick Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search procedures, pain, pricing..."
                className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* WhatsApp Assistance Card */}
            <div className="bg-gradient-to-br from-teal-700 to-cyan-800 text-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-teal-900/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Have a Specific Clinical Question?</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Connect directly with our Chief Dental Counselor on WhatsApp. We typically respond within 5-10 minutes.
              </p>
              <a
                href="https://wa.me/918662434510?text=Hi%20Suma%20Dental%20Care,%20I%20have%20a%20question%20regarding%20dental%20treatments."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-teal-900 text-sm font-bold hover:bg-teal-50 transition-colors shadow-sm"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">No matching questions found for "{searchQuery}".</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-teal-600 font-semibold text-xs hover:underline"
                >
                  Reset search filter
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-teal-400 shadow-md ring-1 ring-teal-400/20' : 'border-slate-200/80 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-teal-500' : 'bg-slate-300'}`} />
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-teal-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Quick Guarantees Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Transparent Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Digital Consent
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" /> Zero Hidden Charges
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FaqSection;
