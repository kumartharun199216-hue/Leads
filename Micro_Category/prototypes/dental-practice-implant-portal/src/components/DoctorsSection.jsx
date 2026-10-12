import React from 'react';
import { doctors } from '../data/mockData';
import { useAppointments } from '../context/AppointmentContext';
import { Award, Calendar, GraduationCap, Clock } from 'lucide-react';

export const DoctorsSection = () => {
  const { setActiveNav } = useAppointments();

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Specialist Dental Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Master Dental Surgeons & Implantologists
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Our multi-disciplinary dental team combines advanced European surgical fellowships, 
            microscopic precision, and patient empathy for stress-free treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Doctor Portrait */}
                <div className="relative aspect-[4/3.8] bg-slate-200 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-teal-800 shadow-xs">
                    {doc.experience} Experience
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-0.5">{doc.name}</h3>
                  <div className="text-xs font-semibold text-teal-700 mb-2 flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>{doc.degrees}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">
                    {doc.specialization}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {doc.bio}
                  </p>
                  <div className="text-xs text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200/80 mb-2 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>Available Days: <strong>{doc.availableDays}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setActiveNav('book');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment with {doc.name.split(' ')[1] || doc.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
