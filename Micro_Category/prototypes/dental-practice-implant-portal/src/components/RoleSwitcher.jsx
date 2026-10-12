import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { UserCheck, Stethoscope, Sparkles } from 'lucide-react';

const RoleSwitcher = () => {
  const { activeRole, setActiveRole, appointments } = useAppointments();

  const pendingCount = appointments.filter(a => a.status === 'Confirmed' || a.status === 'Checked In').length;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 print:hidden animate-bounce-subtle">
      <div className="bg-slate-900/90 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-slate-700/80 flex items-center gap-1">
        
        {/* Patient Storefront Button */}
        <button
          onClick={() => setActiveRole('patient')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
            activeRole === 'patient'
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md shadow-teal-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Patient Portal</span>
        </button>

        {/* Doctor & Reception Queue Button */}
        <button
          onClick={() => setActiveRole('admin')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all relative ${
            activeRole === 'admin'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Doctor / Reception Desk</span>
          {pendingCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-black flex items-center justify-center shrink-0 animate-pulse">
              {pendingCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};

export default RoleSwitcher;
