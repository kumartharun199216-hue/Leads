import React, { useState, useEffect } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { clinicInfo } from '../data/mockData';
import confetti from 'canvas-confetti';
import {
  Calendar, Clock, CheckCircle2, ChevronRight, ChevronLeft,
  Sparkles, ShieldCheck, User, Phone, AlertCircle, FileText, Send
} from 'lucide-react';

export const BookingWizard = () => {
  const {
    procedures,
    doctors,
    preSelectedProcedure,
    getSlotsForDate,
    bookAppointment,
    setActiveNav
  } = useAppointments();

  // Wizard current step: 1 (Treatment), 2 (Date), 3 (Slot), 4 (Details), 5 (Review), 6 (Confirmation)
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [selectedProcedure, setSelectedProcedure] = useState(preSelectedProcedure || procedures[0]);
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);

  // Generate next 14 days
  const [datesList, setDatesList] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  // Slot State
  const [slotsForDate, setSlotsForDate] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotShift, setSlotShift] = useState('All'); // 'All' | 'Morning' | 'Evening'

  // Patient Info State
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('28');
  const [gender, setGender] = useState('Female');
  const [chiefComplaint, setChiefComplaint] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Confirmed Appointment Object
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  // Pre-fill procedure if preSelectedProcedure was set
  useEffect(() => {
    if (preSelectedProcedure) {
      setSelectedProcedure(preSelectedProcedure);
    }
  }, [preSelectedProcedure]);

  // Generate 14 days dates on mount
  useEffect(() => {
    const list = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const iso = d.toISOString().split('T')[0];
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = d.getDate();
      const monthName = d.toLocaleDateString('en-US', { month: 'short' });
      list.push({ iso, dayName, dayNum, monthName, isSunday: d.getDay() === 0 });
    }
    setDatesList(list);
    setSelectedDate(list[0].iso);
  }, []);

  // Fetch slots whenever selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      const slots = getSlotsForDate(selectedDate);
      setSlotsForDate(slots);
      setSelectedSlot(null); // Reset slot choice when date changes
    }
  }, [selectedDate, getSlotsForDate]);

  // Validation
  const validateDetails = () => {
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = 'Please enter patient full name';
    }
    const cleanMobile = mobileNumber.replace(/[^0-9]/g, '');
    if (!cleanMobile || cleanMobile.length !== 10) {
      errors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Next
  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!selectedProcedure) return;
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedDate) return;
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!selectedSlot) return;
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!validateDetails()) return;
      setCurrentStep(5);
    } else if (currentStep === 5) {
      // Confirm Booking
      const result = bookAppointment({
        patientName,
        phone: mobileNumber,
        age: parseInt(age, 10) || 28,
        gender,
        procedureId: selectedProcedure.id,
        procedureName: selectedProcedure.name,
        doctorId: selectedDoctor.id,
        doctorName: selectedDoctor.name,
        date: selectedDate,
        time: selectedSlot.time,
        period: selectedSlot.period,
        notes: chiefComplaint
      });

      setConfirmedBooking(result);
      setCurrentStep(6);

      // Trigger Confetti Animation
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti triggered', err);
      }
    }
  };

  const filteredSlots = slotShift === 'All'
    ? slotsForDate
    : slotsForDate.filter(s => s.period === slotShift);

  return (
    <section className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Wizard Stepper Progress Bar */}
        {currentStep < 6 && (
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Online Dental Appointment Booking
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Confirm your doctor consultation in 4 simple steps. Instant Token & WhatsApp Confirmation.
            </p>

            {/* Step Indicators */}
            <div className="flex items-center justify-between max-w-xl mx-auto mt-6 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
              {[
                { num: 1, label: 'Treatment' },
                { num: 2, label: 'Date' },
                { num: 3, label: 'Time Slot' },
                { num: 4, label: 'Patient Info' },
                { num: 5, label: 'Review' }
              ].map((st) => (
                <div key={st.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      currentStep >= st.num
                        ? 'bg-teal-700 text-white ring-4 ring-teal-100'
                        : 'bg-white text-slate-400 border-2 border-slate-300'
                    }`}
                  >
                    {currentStep > st.num ? '✓' : st.num}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold mt-1 ${
                      currentStep >= st.num ? 'text-teal-900' : 'text-slate-400'
                    }`}
                  >
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wizard Body Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50">
          {/* ========================================================= */}
          {/* STEP 1: SELECT TREATMENT */}
          {/* ========================================================= */}
          {currentStep === 1 && (
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 1: Choose Your Dental Treatment</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select the procedure you wish to consult for. Consultation fee is included.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {procedures.map((proc) => {
                  const isSelected = selectedProcedure?.id === proc.id;
                  return (
                    <div
                      key={proc.id}
                      onClick={() => setSelectedProcedure(proc)}
                      className={`p-4.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/50 shadow-md ring-2 ring-teal-100'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                          {proc.tag}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <span className="text-[10px] font-bold">✓</span>}
                        </div>
                      </div>

                      <div className="font-bold text-base text-slate-900 mb-1">{proc.name}</div>
                      <p className="text-xs text-slate-600 line-clamp-2 mb-3">{proc.description}</p>

                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 font-medium">
                        <span className="text-slate-500">⏱️ {proc.duration}</span>
                        <span className="text-teal-800 font-bold text-sm">{proc.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  onClick={handleNextStep}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Date Selection</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STEP 2: SELECT DATE */}
          {/* ========================================================= */}
          {currentStep === 2 && (
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 2: Choose Appointment Date</h3>
                <p className="text-xs text-slate-500 mt-1">
                  We are open Monday to Saturday. Select a convenient date from the next 14 days.
                </p>
              </div>

              {/* Horizontal Date Picker */}
              <div className="flex gap-2.5 overflow-x-auto pb-4 pt-1 no-scrollbar">
                {datesList.map((d) => {
                  const isSelected = selectedDate === d.iso;
                  return (
                    <button
                      key={d.iso}
                      disabled={d.isSunday}
                      onClick={() => setSelectedDate(d.iso)}
                      className={`flex flex-col items-center justify-center min-w-[76px] p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                        d.isSunday
                          ? 'opacity-40 bg-slate-100 border-slate-200 cursor-not-allowed'
                          : isSelected
                          ? 'border-teal-700 bg-teal-700 text-white shadow-lg shadow-teal-700/25 scale-102'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                      }`}
                    >
                      <span className={`text-[11px] font-bold uppercase ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                        {d.dayName}
                      </span>
                      <span className="text-xl font-black my-0.5">{d.dayNum}</span>
                      <span className={`text-[10px] font-semibold ${isSelected ? 'text-teal-200' : 'text-slate-500'}`}>
                        {d.monthName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Doctor Selector */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Select Attending Dental Surgeon:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {doctors.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => setSelectedDoctor(doc)}
                      className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        selectedDoctor.id === doc.id
                          ? 'border-teal-600 bg-teal-50/60 ring-2 ring-teal-100'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">{doc.name}</div>
                        <div className="text-[10px] text-teal-700 truncate">{doc.role.split('&')[0]}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Time Slot</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STEP 3: SELECT TIME SLOT */}
          {/* ========================================================= */}
          {currentStep === 3 && (
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Step 3: Pick Available Time Slot</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Selected Date: <strong className="text-slate-800">{selectedDate}</strong>
                  </p>
                </div>

                {/* Morning/Evening Filter Buttons */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                  {['All', 'Morning', 'Evening'].map((shift) => (
                    <button
                      key={shift}
                      onClick={() => setSlotShift(shift)}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        slotShift === shift ? 'bg-white text-teal-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {shift}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot Legend */}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md border-2 border-teal-600 bg-teal-50"></span>
                  Available
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-slate-200 border border-slate-300"></span>
                  Booked (Unavailable)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-teal-700 text-white"></span>
                  Your Choice
                </span>
              </div>

              {/* Slots Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {filteredSlots.map((slot) => {
                  const isSelected = selectedSlot?.time === slot.time;
                  return (
                    <button
                      key={slot.time}
                      disabled={!slot.isAvailable}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3.5 rounded-xl text-center border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
                        !slot.isAvailable
                          ? 'bg-slate-100 border-slate-200 text-slate-400 line-through cursor-not-allowed opacity-60'
                          : isSelected
                          ? 'border-teal-700 bg-teal-700 text-white font-bold shadow-md shadow-teal-700/20'
                          : 'border-teal-200 bg-teal-50/40 text-slate-800 hover:border-teal-500 hover:bg-teal-50'
                      }`}
                    >
                      <div className="font-bold text-sm tracking-tight">{slot.time}</div>
                      <div className={`text-[10px] font-medium mt-0.5 ${isSelected ? 'text-teal-200' : 'text-slate-500'}`}>
                        {slot.isAvailable ? slot.period : 'Booked'}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  disabled={!selectedSlot}
                  onClick={handleNextStep}
                  className={`font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 ${
                    selectedSlot
                      ? 'bg-teal-700 hover:bg-teal-800 text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Continue to Patient Info</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STEP 4: PATIENT DETAILS */}
          {/* ========================================================= */}
          {currentStep === 4 && (
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 4: Enter Patient Details</h3>
                <p className="text-xs text-slate-500 mt-1">
                  We will use this to generate your Token ID and send your appointment confirmation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. M. Rajesh Varma"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                        formErrors.patientName
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-300 focus:ring-teal-200 focus:border-teal-600'
                      }`}
                    />
                  </div>
                  {formErrors.patientName && (
                    <span className="text-xs text-rose-600 mt-1 block">{formErrors.patientName}</span>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Mobile Number (For WhatsApp Alert) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="10-digit number e.g. 9848012345"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                        formErrors.mobileNumber
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-300 focus:ring-teal-200 focus:border-teal-600'
                      }`}
                    />
                  </div>
                  {formErrors.mobileNumber && (
                    <span className="text-xs text-rose-600 mt-1 block">{formErrors.mobileNumber}</span>
                  )}
                </div>

                {/* Age & Gender */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full px-3 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Reason for Visit */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Symptoms / Chief Complaint (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Sensitivity while drinking cold water, severe night throbbing pain..."
                    value={chiefComplaint}
                    onChange={(e) => setChiefComplaint(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-200"
                  ></textarea>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Review Booking</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STEP 5: REVIEW BOOKING */}
          {/* ========================================================= */}
          {currentStep === 5 && (
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Step 5: Review Appointment Summary</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Please verify your clinical details before generating your token.
                </p>
              </div>

              {/* Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Selected Treatment:</span>
                  <strong className="text-sm text-slate-900 font-bold">{selectedProcedure.name}</strong>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Attending Doctor:</span>
                  <strong className="text-sm text-teal-800 font-bold">{selectedDoctor.name}</strong>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Date & Time:</span>
                  <strong className="text-sm text-slate-900 font-bold">
                    {selectedDate} at {selectedSlot.time} ({selectedSlot.period})
                  </strong>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Patient Details:</span>
                  <strong className="text-sm text-slate-900 font-bold">
                    {patientName} ({gender}, {age} yrs) - 📞 {mobileNumber}
                  </strong>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-xs text-slate-500 font-medium">Consultation Fee:</span>
                  <strong className="text-base text-emerald-700 font-extrabold">{selectedProcedure.price}</strong>
                </div>
              </div>

              {/* Payment note */}
              <div className="text-xs text-slate-500 bg-teal-50/70 border border-teal-200 p-3 rounded-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Zero payment required today! Consultation fee is settled at the clinic reception.</span>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Modify
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base px-8 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Confirm & Generate Token</span>
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* STEP 6: CONFIRMATION & TOKEN DISPLAY */}
          {/* ========================================================= */}
          {currentStep === 6 && confirmedBooking && (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Appointment Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Your Consultation Token is Ready!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Please show this Token ID at our front-desk reception upon arrival.
                </p>
              </div>

              {/* Token ID Highlight Card */}
              <div className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white p-6 rounded-3xl max-w-md mx-auto shadow-2xl space-y-2">
                <div className="text-xs text-teal-200 uppercase tracking-widest font-semibold">
                  Official Patient Token ID
                </div>
                <div className="text-3xl sm:text-4xl font-mono font-black tracking-wider text-amber-300">
                  {confirmedBooking.token}
                </div>
                <div className="text-xs text-teal-100 border-t border-teal-600/60 pt-2 flex justify-between">
                  <span>📅 {confirmedBooking.date}</span>
                  <span>⏰ {confirmedBooking.time}</span>
                </div>
              </div>

              {/* WhatsApp Trigger Button */}
              <div className="max-w-md mx-auto space-y-3 pt-2">
                <button
                  onClick={() => setShowWhatsAppModal(true)}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Confirmation to Clinic WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setConfirmedBooking(null);
                    }}
                    className="py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold"
                  >
                    Book Another
                  </button>
                  <button
                    onClick={() => setActiveNav('home')}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Simulated WhatsApp Notification Modal */}
      {showWhatsAppModal && confirmedBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-left shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <Send className="w-4 h-4" />
                WhatsApp Message Preview
              </div>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-2xl text-xs font-mono text-slate-800 space-y-2 whitespace-pre-wrap">
              {`🏥 *APPOINTMENT CONFIRMATION - SUMA DENTAL CARE*
──────────────────────────
🎟️ *Token Number*: *${confirmedBooking.token}*
👤 *Patient Name*: ${confirmedBooking.patientName}
🩺 *Procedure*: ${confirmedBooking.procedureName}
📅 *Date*: ${confirmedBooking.date}
⏰ *Time*: ${confirmedBooking.time}
📍 *Address*: MG Road, Near Benz Circle, Vijayawada
──────────────────────────
Please arrive 10 minutes prior to your slot time.`}
            </div>

            <p className="text-[11px] text-slate-500 italic">
              *In production, this opens WhatsApp directly on the patient's phone with pre-filled confirmation text.
            </p>

            <div className="flex gap-2 pt-2">
              <a
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Dr. Suma, I have booked an appointment for ${confirmedBooking.procedureName} on ${confirmedBooking.date} at ${confirmedBooking.time}. Token: ${confirmedBooking.token}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 bg-emerald-600 text-white rounded-xl font-bold text-xs hover:bg-emerald-700 transition-colors"
              >
                Open in WhatsApp Web
              </a>
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold text-xs hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingWizard;
