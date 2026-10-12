import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { X, Clock, IndianRupee, ShieldCheck, CheckCircle2, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';

const TreatmentDetailModal = () => {
  const {
    selectedTreatmentDetail,
    setSelectedTreatmentDetail,
    setPreSelectedProcedure,
    setActiveNav
  } = useAppointments();

  if (!selectedTreatmentDetail) return null;

  const handleBookNow = () => {
    setPreSelectedProcedure(selectedTreatmentDetail.id);
    setSelectedTreatmentDetail(null);
    setActiveNav('book');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(`Hello Dr. Suma Latha, I am inquiring about the "${selectedTreatmentDetail.name}" procedure at Suma Dental Care.`);
    window.open(`https://wa.me/918662434510?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600 text-white p-6 sm:p-8 relative">
          <button
            onClick={() => setSelectedTreatmentDetail(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-teal-100 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {selectedTreatmentDetail.category}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
            {selectedTreatmentDetail.name}
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-teal-50">
            <span className="flex items-center gap-1.5 bg-teal-800/40 px-3 py-1 rounded-lg">
              <Clock className="w-4 h-4 text-teal-300" />
              Duration: {selectedTreatmentDetail.duration}
            </span>
            <span className="flex items-center gap-1.5 bg-teal-800/40 px-3 py-1 rounded-lg">
              <IndianRupee className="w-4 h-4 text-emerald-300" />
              Fee: <strong className="text-white text-base">{selectedTreatmentDetail.price}</strong>
            </span>
            <span className="flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-lg text-emerald-200 font-medium">
              <ShieldCheck className="w-4 h-4" />
              {selectedTreatmentDetail.tag}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto space-y-6 text-slate-700">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Clinical Overview
            </h4>
            <p className="text-slate-600 text-base leading-relaxed">
              {selectedTreatmentDetail.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Patient Benefits
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {selectedTreatmentDetail.benefits?.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-teal-50/60 p-3 rounded-xl border border-teal-100/60">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Steps */}
          {selectedTreatmentDetail.procedureSteps && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Procedure Steps (What to Expect)
              </h4>
              <div className="space-y-2.5">
                {selectedTreatmentDetail.procedureSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quality & Safety Assurance */}
          <div className="bg-amber-50 border border-amber-200/60 rounded-2xl p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
            <span className="text-xl">🛡️</span>
            <div>
              <strong className="block font-semibold">100% Autoclave Sterilized & Single-Use Bio-Kits</strong>
              Every instrument undergoes 4-stage Class-B vacuum autoclaving. Completely safe, sterile, and pain-free experience.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 text-sm font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            Ask via WhatsApp
          </button>

          <button
            onClick={handleBookNow}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-sm font-bold shadow-lg shadow-teal-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            Book This Treatment Now
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetailModal;
