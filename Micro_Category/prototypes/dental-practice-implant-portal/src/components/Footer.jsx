import React from 'react';
import { clinicInfo, procedures } from '../data/mockData';
import { useAppointments } from '../context/AppointmentContext';
import { Sparkles, Phone, Mail, MapPin, Heart, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { setActiveNav, setPreSelectedProcedure } = useAppointments();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (navId, sectionId) => {
    setActiveNav(navId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProcedureClick = (procId) => {
    setPreSelectedProcedure(procId);
    setActiveNav('book');
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Clinic Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">{clinicInfo.name}</h3>
                <span className="text-xs text-teal-400 font-semibold tracking-wider uppercase">
                  Reg No: {clinicInfo.registration} • AP Dental Council
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Pioneering digital smile designing, computer-guided painless dental implants, and micro-endodontics in Vijayawada. Equipped with digital low-radiation RVG and Class-B autoclave hygiene.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-teal-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                NABH Standards Followed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-medium">
                ⭐ 4.9 Rating (348 Reviews)
              </span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home', 'hero-section')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  Home / Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('treatments', 'treatments-section')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  Treatments & Procedures
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('book', 'booking-section')}
                  className="hover:text-teal-400 transition-colors text-left text-teal-300 font-semibold"
                >
                  Book Appointment Slot
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('doctors', 'doctors-section')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  Our Dental Specialists
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('faq', 'faq-section')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  FAQs & Patient Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact', 'location-section')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  Clinic Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Treatments */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Key Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {procedures.slice(0, 5).map(proc => (
                <li key={proc.id}>
                  <button
                    onClick={() => handleProcedureClick(proc.id)}
                    className="hover:text-teal-400 transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{proc.shortName}</span>
                    <span className="text-[11px] text-teal-400 font-bold ml-2">{proc.price}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Clinic Hours & Emergency */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Hours & Contacts
            </h4>
            
            <div className="text-xs space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Mon - Sat Timings</strong>
                  09:30 AM – 01:30 PM (Morn)<br />
                  05:00 PM – 09:00 PM (Eve)
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">MG Road, Benz Circle, Vijayawada</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="text-slate-200 font-semibold hover:text-teal-400">
                  {clinicInfo.phone}
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
              Back to Top
            </button>
          </div>

        </div>

        {/* Demo Notice Banner */}
        <div className="my-8 p-4 rounded-2xl bg-teal-950/70 border border-teal-800/60 text-xs text-teal-300/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-base">🚀</span>
            <span>
              <strong>Client Demo Application:</strong> Developed for Healthcare / Dental Clinic web solutions. All booking slots, patient tokens, and consultation queue statuses are live-simulated in browser storage.
            </span>
          </div>
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-teal-900 border border-teal-700 text-teal-200 shrink-0">
            Frontend Interactive Prototype
          </span>
        </div>

        {/* Bottom Credits */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with modern web technologies for painless healthcare experiences.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
