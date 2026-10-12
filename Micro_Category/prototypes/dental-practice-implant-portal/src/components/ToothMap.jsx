import React, { useState } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { Sparkles, Calendar, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const ToothMap = () => {
  const { setActiveNav, setPreSelectedProcedure, procedures } = useAppointments();

  const teethData = [
    {
      id: 11,
      name: "Upper Central Incisor (Front Left)",
      type: "Incisor",
      commonProblem: "Chipped tooth edge, discoloration, or small gaps",
      recommendedTreatment: "Digital Smile Designing & Laser Whitening or Composite Veneers",
      procedureId: "PROC004",
      icon: "✨",
      duration: "45 mins",
      cost: "₹3,500"
    },
    {
      id: 16,
      name: "Upper Right First Molar",
      type: "Molar",
      commonProblem: "Deep chewing cavity, severe night pain, sensitivity to hot liquids",
      recommendedTreatment: "Single Sitting Rotary Root Canal (RCT) + Zirconia Crown",
      procedureId: "PROC001",
      icon: "⚡",
      duration: "60 mins",
      cost: "₹2,800"
    },
    {
      id: 36,
      name: "Lower Left First Molar",
      type: "Molar",
      commonProblem: "Missing tooth, bone loss, inability to chew food on left side",
      recommendedTreatment: "Titanium Dental Implant & Permanent Crown",
      procedureId: "PROC002",
      icon: "🔩",
      duration: "60 mins",
      cost: "₹18,000"
    },
    {
      id: 22,
      name: "Upper Lateral Incisor",
      type: "Incisor",
      commonProblem: "Crooked or rotated tooth causing bite misalignment",
      recommendedTreatment: "Invisible Clear Aligners (No Wire Braces)",
      procedureId: "PROC003",
      icon: "📐",
      duration: "30 mins",
      cost: "₹45,000"
    },
    {
      id: 31,
      name: "Lower Front Central Incisor",
      type: "Incisor",
      commonProblem: "Hardened yellow tartar, bleeding gums, chronic bad breath",
      recommendedTreatment: "Ultrasonic Scaling & Airflow Polishing",
      procedureId: "PROC006",
      icon: "🫧",
      duration: "30 mins",
      cost: "₹1,200"
    },
    {
      id: 47,
      name: "Lower Right Second Molar",
      type: "Molar",
      commonProblem: "Cracked filling or food lodgement between molars",
      recommendedTreatment: "Comprehensive Oral Health & Digital X-Ray Scan",
      procedureId: "PROC005",
      icon: "🔍",
      duration: "20 mins",
      cost: "₹400"
    }
  ];

  const [selectedTooth, setSelectedTooth] = useState(teethData[1]); // Default to Molar #16

  const handleBookForTooth = () => {
    const matched = procedures.find(p => p.id === selectedTooth.procedureId);
    if (matched) setPreSelectedProcedure(matched);
    setActiveNav('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Patient Diagnostic Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Click on a Tooth to See Recommended Care
          </h2>
          <p className="text-base text-slate-300 mt-3">
            Not sure what treatment you need? Tap on the diagram below where you feel pain or discomfort, 
            and our smart dental guide will suggest the ideal procedure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Tooth Arch Selector */}
          <div className="lg:col-span-6 bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 text-center">
              🦷 Select an Area of Discomfort / Pain:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {teethData.map((tooth) => {
                const isSelected = selectedTooth.id === tooth.id;
                return (
                  <button
                    key={tooth.id}
                    onClick={() => setSelectedTooth(tooth)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-teal-600/30 border-teal-400 text-white shadow-lg shadow-teal-500/20'
                        : 'bg-slate-850 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:bg-slate-750'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-2xl">{tooth.icon}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-teal-400 text-slate-950 font-black' : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        #{tooth.id}
                      </span>
                    </div>
                    <div className="font-bold text-sm leading-tight mb-1">{tooth.name}</div>
                    <div className="text-[11px] text-slate-400 capitalize">{tooth.type}</div>
                  </button>
                );
              })}
            </div>
            <div className="text-center mt-4 text-[11px] text-slate-400">
              *Full 32-tooth oral examination and digital radiography are conducted during your consultation visit.
            </div>
          </div>

          {/* Right: Detailed Recommendation Box */}
          <div className="lg:col-span-6 text-left">
            <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                    Diagnostic Analysis for:
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    Tooth #{selectedTooth.id}: {selectedTooth.name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-2xl shrink-0">
                  {selectedTooth.icon}
                </div>
              </div>

              {/* Problem Identified */}
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Common Symptoms & Patient Complaint:
                </div>
                <p className="text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  {selectedTooth.commonProblem}
                </p>
              </div>

              {/* Recommended Treatment */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Recommended Clinical Treatment:
                </div>
                <div className="bg-teal-950/60 border border-teal-800/80 p-4 rounded-xl">
                  <div className="text-base font-bold text-white mb-2">
                    {selectedTooth.recommendedTreatment}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-teal-300">
                    <div>⏱️ Duration: <strong>{selectedTooth.duration}</strong></div>
                    <div>•</div>
                    <div>💰 Starting: <strong>{selectedTooth.cost}</strong></div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={handleBookForTooth}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 font-bold text-base shadow-lg shadow-teal-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>Schedule Consultation for Tooth #{selectedTooth.id}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToothMap;
