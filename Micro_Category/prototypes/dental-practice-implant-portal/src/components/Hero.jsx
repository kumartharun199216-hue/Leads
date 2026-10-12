import React from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { clinicInfo } from '../data/mockData';
import { Calendar, ShieldCheck, Star, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { setActiveNav } = useAppointments();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Authority Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clinical Certification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-800 text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>NABH Standards & 100% Hospital-Grade Sterilization</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Advanced, Painless Dental Care &{' '}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Implant Dentistry
              </span>{' '}
              in Vijayawada
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Experience gentle, single-sitting root canals, European titanium dental implants, and invisible aligners under the expert care of{' '}
              <strong className="text-slate-900 font-semibold">{clinicInfo.doctor}</strong> ({clinicInfo.experienceYears}+ years clinical excellence).
            </p>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/80 px-3 py-2 rounded-xl shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single-Visit Rotary RCT</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/80 px-3 py-2 rounded-xl shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Lifetime Warranty Implants</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white/80 border border-slate-200/80 px-3 py-2 rounded-xl shadow-xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant Online Slot Booking</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => setActiveNav('book')}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-teal-700/25 hover:shadow-xl transition-all cursor-pointer active:scale-98"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveNav('treatments')}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-base px-5 py-3.5 rounded-xl shadow-xs hover:border-slate-400 transition-all cursor-pointer"
              >
                <span>Explore Treatments & Pricing</span>
              </button>
            </div>

            {/* Google Rating Social Proof */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 font-bold">{clinicInfo.rating} Stars</strong> based on{' '}
                <span className="underline decoration-slate-300 font-medium">
                  {clinicInfo.reviewCount} verified patient reviews
                </span>{' '}
                on Google
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Showcase & Clinic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Doctor Main Card */}
              <div className="rounded-3xl bg-white border border-slate-200/80 p-5 shadow-2xl shadow-slate-200/60 relative z-10 text-left">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-slate-100 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80"
                    alt={clinicInfo.doctor}
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                    <div className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-1">
                      Chief Dental Surgeon & Implantologist
                    </div>
                    <div className="text-xl font-bold">{clinicInfo.doctor}</div>
                    <div className="text-xs text-slate-200 font-medium mt-0.5">
                      {clinicInfo.registration} | IDA Member
                    </div>
                  </div>
                </div>

                {/* Micro Stats inside Card */}
                <div className="grid grid-cols-3 gap-2 text-center py-2 border-t border-slate-100">
                  <div className="p-2 rounded-xl bg-slate-50">
                    <div className="text-lg font-extrabold text-teal-700">14+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Years Exp.</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50">
                    <div className="text-lg font-extrabold text-teal-700">1.2k+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Implants</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50">
                    <div className="text-lg font-extrabold text-teal-700">99.2%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 hidden sm:flex items-center gap-3 bg-white border border-slate-200/90 py-3 px-4 rounded-2xl shadow-xl shadow-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">Certified Implant Center</div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    European Titanium Implants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Statistics Counter Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          {clinicInfo.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
