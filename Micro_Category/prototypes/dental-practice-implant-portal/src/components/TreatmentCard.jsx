import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { Clock, Tag, ArrowRight, CheckCircle, Info } from 'lucide-react';

export const TreatmentCard = ({ procedure }) => {
  const { setPreSelectedProcedure, setActiveNav, setSelectedTreatmentDetail } = useAppointments();

  const handleBookNow = (e) => {
    e.stopPropagation();
    setPreSelectedProcedure(procedure);
    setActiveNav('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = () => {
    setSelectedTreatmentDetail(procedure);
  };

  const tagColors = {
    teal: 'bg-teal-50 text-teal-700 border-teal-200',
    blue: 'bg-sky-50 text-sky-700 border-sky-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  };

  return (
    <div
      onClick={handleViewDetails}
      className="group rounded-2xl bg-white border border-slate-200 hover:border-teal-500/60 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left cursor-pointer relative"
    >
      <div>
        {/* Top Tag & Category */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {procedure.category}
          </span>
          <span
            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
              tagColors[procedure.tagColor] || tagColors.teal
            }`}
          >
            {procedure.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug mb-2">
          {procedure.name}
        </h3>

        {/* Duration & Starting Price Strip */}
        <div className="flex items-center gap-3 py-2 text-xs font-medium text-slate-500 mb-3 border-y border-slate-100">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-600" />
            <span>{procedure.duration}</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5 text-slate-900 font-bold">
            <Tag className="w-3.5 h-3.5 text-emerald-600" />
            <span>Starting {procedure.price}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {procedure.description}
        </p>

        {/* Bullet Preview */}
        <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
          {procedure.benefits.slice(0, 2).map((benefit, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        <button
          onClick={handleViewDetails}
          className="w-full text-xs font-semibold py-2.5 px-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          Details
        </button>

        <button
          onClick={handleBookNow}
          className="w-full text-xs font-semibold py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-98"
        >
          Book Now
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default TreatmentCard;
