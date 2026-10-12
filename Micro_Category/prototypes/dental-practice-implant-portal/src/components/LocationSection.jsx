import React from 'react';
import { clinicInfo } from '../data/mockData';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Shield, Wifi, Sparkles, CheckCircle2 } from 'lucide-react';

const LocationSection = () => {
  const openGoogleMaps = () => {
    const query = encodeURIComponent(`${clinicInfo.name} Benz Circle Vijayawada`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const amenities = [
    { icon: Car, label: "Dedicated Valet Parking Available" },
    { icon: Shield, label: "Class-B Autoclave Sterilization Room" },
    { icon: Wifi, label: "High-Speed Wi-Fi & Lounge Refreshments" },
    { icon: Sparkles, label: "In-House Digital OPG X-Ray Diagnostics" }
  ];

  return (
    <section id="location-section" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            Visit Our Clinic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conveniently Located at Benz Circle
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            State-of-the-art dental infrastructure right in the heart of Vijayawada with easy transit access.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Info Cards & Hours */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address & Direct CTA */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{clinicInfo.name}</h3>
                  <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                    {clinicInfo.address}
                  </p>
                  <p className="text-xs text-teal-700 font-semibold mt-1">
                    (Landmark: Opposite City Center Mall, 200m from Benz Circle Flyover)
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-bold">Reception Phone</span>
                    <a href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`} className="text-sm font-bold text-slate-800 hover:text-teal-600">
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-bold">Inquiry Email</span>
                    <a href={`mailto:${clinicInfo.email}`} className="text-sm font-bold text-slate-800 hover:text-teal-600">
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <button
                onClick={openGoogleMaps}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-sm shadow-lg shadow-teal-600/25 flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4" />
                Get Driving Directions on Google Maps
              </button>
            </div>

            {/* Timings Card */}
            <div className="bg-teal-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-teal-200 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-teal-400" />
                OPD Consultation Timings
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <span className="block text-xs font-semibold text-teal-300 uppercase">Morning Session</span>
                  <span className="text-xl font-extrabold text-white mt-1 block">09:30 AM – 01:30 PM</span>
                  <span className="text-xs text-teal-200 mt-1 block">Surgeries & Implants</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <span className="block text-xs font-semibold text-teal-300 uppercase">Evening Session</span>
                  <span className="text-xl font-extrabold text-white mt-1 block">05:00 PM – 09:00 PM</span>
                  <span className="text-xs text-teal-200 mt-1 block">Consultations & Braces</span>
                </div>
              </div>

              <div className="text-xs text-teal-200/90 pt-2 flex items-center justify-between border-t border-white/10">
                <span>Working Days: Monday – Saturday</span>
                <span className="font-semibold text-amber-300">Sundays: Urgent Cases Only</span>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Interactive Map Preview & Amenities */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Map Preview Container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm h-80 sm:h-96 flex flex-col justify-between p-6">
              {/* Stylized Map Mockup Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-slate-100 to-cyan-50 opacity-90" />
              
              {/* Grid map vector lines */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#0d9488 1.5px, transparent 1.5px), radial-gradient(#0891b2 1.5px, #f8fafc 1.5px)`,
                  backgroundSize: '36px 36px',
                  backgroundPosition: '0 0, 18px 18px'
                }}
              />

              {/* Map Marker Pin */}
              <div className="relative z-10 self-center my-auto text-center animate-bounce">
                <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-2xl ring-8 ring-teal-400/30">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="mt-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200 inline-block">
                  <p className="text-xs font-black text-slate-800">Suma Dental Specialities</p>
                  <p className="text-[10px] text-teal-600 font-semibold">Benz Circle, Vijayawada</p>
                </div>
              </div>

              {/* Overlay Bottom CTA on Map */}
              <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-md">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Digital GPS Coordinates</span>
                  <span className="text-[11px] text-slate-500">16.5062° N, 80.6480° E (Vijayawada)</span>
                </div>
                <button
                  onClick={openGoogleMaps}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  Open in Maps
                </button>
              </div>
            </div>

            {/* Clinic Facility Amenities */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Clinic Infrastructure & Patient Comforts
              </h4>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {amenities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;
