import React, { useState } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { clinicInfo } from '../data/mockData';
import { Phone, Calendar, Clock, Menu, X, Sparkles, AlertCircle } from 'lucide-react';

export const Navbar = () => {
  const { activeNav, setActiveNav, setIsEmergencyModalOpen } = useAppointments();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'smile-makeover', label: 'Smile Transformations' },
    { id: 'tooth-map', label: 'Interactive Tooth Map' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Location & Hours' }
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Clinical Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {clinicInfo.timings.days}: {clinicInfo.timings.morning} & {clinicInfo.timings.evening}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">📍 Benz Circle, Vijayawada</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsEmergencyModalOpen(true)}
              className="flex items-center gap-1.5 text-rose-300 hover:text-rose-200 font-medium cursor-pointer transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              Severe Toothache SOS
            </button>
            <span className="text-slate-400">|</span>
            <a
              href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              {clinicInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo & Identity */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl">🦷</span>
            </div>
            <div>
              <div className="font-bold text-lg text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
                {clinicInfo.shortName}
                <span className="text-[10px] bg-teal-100 text-teal-800 font-semibold px-1.5 py-0.5 rounded-full">
                  MDS Specialist
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Implant & Micro-Root Canal Centre
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeNav === item.id
                    ? 'text-teal-700 bg-teal-50 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('book')}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium text-sm px-4.5 py-2.5 rounded-xl shadow-md shadow-teal-700/20 hover:shadow-lg transition-all cursor-pointer active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('book')}
              className="text-xs bg-teal-600 text-white font-medium px-3 py-2 rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                activeNav === item.id
                  ? 'text-teal-700 bg-teal-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                setIsEmergencyModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-xl bg-rose-50 text-rose-700 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-4 h-4" />
              Emergency Toothache Assistance
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
