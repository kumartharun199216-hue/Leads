import React, { useState } from 'react';
import { procedures } from '../data/mockData';
import { TreatmentCard } from './TreatmentCard';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const TreatmentsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Endodontics', 'Implantology', 'Orthodontics', 'Cosmetic Dentistry', 'General Dentistry'];

  const filteredProcedures = selectedCategory === 'All'
    ? procedures
    : procedures.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Clinical Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Dental Procedures & Transparent Pricing
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Choose from precision micro-endodontics, single-visit implants, or aesthetic clear aligners. 
            All treatments are performed using hospital-grade sterilized instruments and digital diagnosis.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProcedures.map((proc) => (
            <TreatmentCard key={proc.id} procedure={proc} />
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
          <span>*Exact fees and treatment timelines may vary depending on patient clinical complexity and digital X-ray evaluation.</span>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
