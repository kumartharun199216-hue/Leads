import React from 'react';
import { AppointmentProvider, useAppointments } from './context/AppointmentContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TreatmentsSection from './components/TreatmentsSection';
import SmileSlider from './components/SmileSlider';
import ToothMap from './components/ToothMap';
import BookingWizard from './components/BookingWizard';
import DoctorsSection from './components/DoctorsSection';
import FaqSection from './components/FaqSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import TreatmentDetailModal from './components/TreatmentDetailModal';
import EmergencyModal from './components/EmergencyModal';
import RoleSwitcher from './components/RoleSwitcher';

const MainLayout = () => {
  const { activeRole } = useAppointments();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {activeRole === 'admin' ? (
        <AdminDashboard />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <TreatmentsSection />
            <SmileSlider />
            <ToothMap />
            <BookingWizard />
            <DoctorsSection />
            <FaqSection />
            <LocationSection />
          </main>
          <Footer />
          <TreatmentDetailModal />
          <EmergencyModal />
        </>
      )}

      {/* Persistent Role Switcher Pill */}
      <RoleSwitcher />
    </div>
  );
};

function App() {
  return (
    <AppointmentProvider>
      <MainLayout />
    </AppointmentProvider>
  );
}

export default App;
