import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { X, PhoneCall, AlertTriangle, MessageCircle, MapPin, Clock, HeartPulse } from 'lucide-react';
import { clinicInfo } from '../data/mockData';

const EmergencyModal = () => {
  const { isEmergencyModalOpen, setIsEmergencyModalOpen } = useAppointments();

  if (!isEmergencyModalOpen) return null;

  const handleCall = () => {
    window.location.href = `tel:${clinicInfo.phone.replace(/\s+/g, '')}`;
  };

  const handleWhatsAppSOS = () => {
    const message = encodeURIComponent('🚨 DENTAL EMERGENCY SOS: I am experiencing severe dental pain / bleeding and require urgent consultation at Suma Dental Care.');
    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-rose-500 overflow-hidden transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Urgent Header */}
        <div className="bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 text-white p-6 sm:p-7 relative">
          <button
            onClick={() => setIsEmergencyModalOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 bg-white/20 rounded-xl animate-pulse">
              <HeartPulse className="w-6 h-6 text-white" />
            </span>
            <span className="px-3 py-0.5 rounded-full bg-rose-900/60 text-rose-200 text-xs font-bold tracking-wider uppercase">
              Immediate Care
            </span>
          </div>

          <h3 className="text-2xl font-black tracking-tight">
            Dental Emergency SOS Helpline
          </h3>
          <p className="text-rose-100 text-sm mt-1">
            Experiencing severe toothache, swelling, or trauma? We prioritize acute emergency cases.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-6 space-y-4">
          <div className="bg-rose-50 border border-rose-200/80 rounded-2xl p-4 text-xs sm:text-sm text-rose-900">
            <strong className="block font-bold text-rose-950 flex items-center gap-1.5 mb-1">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              Direct Emergency Protocols:
            </strong>
            <p>You do not need to wait for slot confirmations. Connect directly with our on-call dental surgeon or walk into the clinic.</p>
          </div>

          <div className="space-y-3">
            {/* Call Button */}
            <button
              onClick={handleCall}
              className="w-full p-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold flex items-center justify-between shadow-lg shadow-rose-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-700/60 rounded-xl">
                  <PhoneCall className="w-6 h-6 text-white animate-bounce" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-rose-200">Instant Phone Call</span>
                  <span className="text-base sm:text-lg font-black">{clinicInfo.phone}</span>
                </div>
              </div>
              <span className="text-xs font-bold bg-white text-rose-700 px-3 py-1.5 rounded-full">Call Now</span>
            </button>

            {/* WhatsApp SOS Button */}
            <button
              onClick={handleWhatsAppSOS}
              className="w-full p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center justify-between shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-700/60 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-emerald-200">Urgent WhatsApp Chat</span>
                  <span className="text-base sm:text-lg font-black">+91 866 2434510</span>
                </div>
              </div>
              <span className="text-xs font-bold bg-white text-emerald-700 px-3 py-1.5 rounded-full">Chat SOS</span>
            </button>
          </div>

          {/* Quick First Aid Advice */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs text-slate-700 space-y-2">
            <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              First-Aid Tips While Arriving:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><strong>Severe throbbing:</strong> Rinse mouth with lukewarm salt water; do not apply aspirin directly on gums.</li>
              <li><strong>Knocked-out tooth:</strong> Hold by the crown, do not scrape the root; place in cold milk or saline and arrive within 60 mins.</li>
              <li><strong>Bleeding:</strong> Place a clean sterile gauze roll and apply firm, continuous bite pressure for 20 mins.</li>
            </ul>
          </div>

          {/* Clinic Address Reminder */}
          <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-1">
            <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-700">{clinicInfo.name}</strong>: {clinicInfo.address}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-3 text-center border-t border-slate-200">
          <button
            onClick={() => setIsEmergencyModalOpen(false)}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Dismiss SOS Popup
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
