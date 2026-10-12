import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialAppointments, allSlotTemplates, procedures, doctors } from '../data/mockData';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  // Load appointments from localStorage or fall back to seed data
  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem('demo_dental_appointments_v1');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading localStorage', e);
    }
    return initialAppointments;
  });

  // Current view role: 'patient' or 'admin'
  const [activeRole, setActiveRole] = useState('patient');

  // Currently active page navigation: 'home' | 'treatments' | 'doctors' | 'book' | 'about' | 'contact' | 'faq'
  const [activeNav, setActiveNav] = useState('home');

  // Selected procedure for booking wizard pre-fill
  const [preSelectedProcedure, setPreSelectedProcedure] = useState(null);

  // Selected treatment for modal detail view
  const [selectedTreatmentDetail, setSelectedTreatmentDetail] = useState(null);

  // Emergency SOS Modal state
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  // Persist appointments to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem('demo_dental_appointments_v1', JSON.stringify(appointments));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }, [appointments]);

  // Generate slots for any date (with booked slots marked as unavailable)
  const getSlotsForDate = (dateStr) => {
    const bookedSlotTimes = appointments
      .filter(a => a.date === dateStr && a.status !== 'Cancelled')
      .map(a => a.time);

    return allSlotTemplates.map(template => ({
      ...template,
      isAvailable: !bookedSlotTimes.includes(template.time)
    }));
  };

  // Book new appointment
  const bookAppointment = (bookingData) => {
    const todayStr = (bookingData.date || new Date().toISOString().split('T')[0]).replace(/-/g, '');
    const randNum = String(Math.floor(10 + Math.random() * 90)).padStart(3, '0');
    const token = `DNT-${todayStr}-${randNum}`;

    const newAppointment = {
      token,
      patientName: bookingData.patientName,
      phone: bookingData.phone,
      age: bookingData.age || 28,
      gender: bookingData.gender || 'Not Specified',
      procedureId: bookingData.procedureId,
      procedureName: bookingData.procedureName,
      doctorId: bookingData.doctorId || 'DOC001',
      doctorName: bookingData.doctorName || 'Dr. P. Suma Latha',
      date: bookingData.date,
      time: bookingData.time,
      period: bookingData.period || 'Morning',
      status: 'Confirmed',
      notes: bookingData.notes || 'Booked via Online Portal'
    };

    setAppointments(prev => [newAppointment, ...prev]);
    return newAppointment;
  };

  // Update appointment status from admin queue
  const updateAppointmentStatus = (token, newStatus) => {
    setAppointments(prev =>
      prev.map(apt => (apt.token === token ? { ...apt, status: newStatus } : apt))
    );
  };

  // Reset to initial mock fixtures
  const resetDemoData = () => {
    setAppointments(initialAppointments);
    localStorage.removeItem('demo_dental_appointments_v1');
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        activeRole,
        setActiveRole,
        activeNav,
        setActiveNav,
        preSelectedProcedure,
        setPreSelectedProcedure,
        selectedTreatmentDetail,
        setSelectedTreatmentDetail,
        isEmergencyModalOpen,
        setIsEmergencyModalOpen,
        getSlotsForDate,
        bookAppointment,
        updateAppointmentStatus,
        resetDemoData,
        procedures,
        doctors
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};
