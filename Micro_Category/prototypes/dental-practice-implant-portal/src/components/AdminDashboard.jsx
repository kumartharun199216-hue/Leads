import React, { useState } from 'react';
import { useAppointments } from '../context/AppointmentContext';
import { clinicInfo, procedures } from '../data/mockData';
import { 
  Users, CheckCircle2, Clock, Activity, IndianRupee, Search, 
  Filter, RotateCcw, Printer, ArrowLeft, Phone, MessageSquare, 
  Calendar, Check, AlertCircle, X, ChevronRight, Stethoscope, Sparkles
} from 'lucide-react';

const AdminDashboard = () => {
  const { 
    appointments, 
    updateAppointmentStatus, 
    resetDemoData, 
    setActiveRole 
  } = useAppointments();

  const [dateFilter, setDateFilter] = useState('all'); // 'all' | 'today'
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'Confirmed' | 'Checked In' | 'In-Consultation' | 'Completed' | 'Cancelled'
  const [searchQuery, setSearchQuery] = useState('');
  const [shiftFilter, setShiftFilter] = useState('all'); // 'all' | 'Morning' | 'Evening'
  const [printSlipAppointment, setPrintSlipAppointment] = useState(null);

  const todayStr = new Date().toISOString().split('T')[0];

  // Filtered Appointments
  const filteredAppointments = appointments.filter(apt => {
    // Date filter
    if (dateFilter === 'today' && apt.date !== todayStr) return false;

    // Shift filter
    if (shiftFilter !== 'all' && apt.period !== shiftFilter) return false;

    // Status filter
    if (statusFilter !== 'all' && apt.status !== statusFilter) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = apt.patientName?.toLowerCase().includes(q);
      const matchPhone = apt.phone?.includes(q);
      const matchToken = apt.token?.toLowerCase().includes(q);
      const matchProc = apt.procedureName?.toLowerCase().includes(q);
      if (!matchName && !matchPhone && !matchToken && !matchProc) return false;
    }

    return true;
  });

  // KPI Calculations
  const totalCount = appointments.length;
  const checkedInCount = appointments.filter(a => a.status === 'Checked In').length;
  const inConsultCount = appointments.filter(a => a.status === 'In-Consultation').length;
  const completedCount = appointments.filter(a => a.status === 'Completed').length;
  const confirmedCount = appointments.filter(a => a.status === 'Confirmed').length;

  // Estimated Revenue Calculation
  const totalRevenue = appointments
    .filter(a => a.status !== 'Cancelled')
    .reduce((sum, apt) => {
      const proc = procedures.find(p => p.id === apt.procedureId);
      return sum + (proc?.numericPrice || 500);
    }, 0);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Confirmed':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">Confirmed</span>;
      case 'Checked In':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">Checked In (Lounge)</span>;
      case 'In-Consultation':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200 animate-pulse">In Operatory</span>;
      case 'Completed':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Completed</span>;
      case 'Cancelled':
        return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">Cancelled</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  const handleNextStatus = (token, currentStatus) => {
    if (currentStatus === 'Confirmed') updateAppointmentStatus(token, 'Checked In');
    else if (currentStatus === 'Checked In') updateAppointmentStatus(token, 'In-Consultation');
    else if (currentStatus === 'In-Consultation') updateAppointmentStatus(token, 'Completed');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24">
      
      {/* Top Navigation Bar */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveRole('patient')}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Return to Patient Storefront"
            >
              <ArrowLeft className="w-4 h-4" />
              Patient View
            </button>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h1 className="text-lg font-bold text-white tracking-tight">OPD Reception & Doctor Desk</h1>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-900/80 text-teal-300 border border-teal-700">
                  Live Queue
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {clinicInfo.name} • Dr. Suma Latha (Chief Surgeon)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                if (window.confirm('Reset all appointments back to default demo fixtures?')) {
                  resetDemoData();
                }
              }}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Reset Demo Records"
            >
              <RotateCcw className="w-3.5 h-3.5 text-teal-400" />
              Reset Demo Data
            </button>

            <span className="text-xs text-slate-400 hidden md:block">
              Today: <strong className="text-slate-200">{new Date().toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}</strong>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Bookings</span>
              <Users className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">{totalCount}</div>
            <span className="text-[11px] text-teal-300 font-semibold mt-1 block">{confirmedCount} Pending Consults</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Checked In</span>
              <Clock className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">{checkedInCount}</div>
            <span className="text-[11px] text-slate-400 font-semibold mt-1 block">In Waiting Lounge</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Operatory</span>
              <Activity className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">{inConsultCount}</div>
            <span className="text-[11px] text-purple-300 font-semibold mt-1 block">Active on Chair</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Completed</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{completedCount}</div>
            <span className="text-[11px] text-emerald-300 font-semibold mt-1 block">Treated & Billed</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Estimated Value</span>
              <IndianRupee className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </div>
            <span className="text-[11px] text-amber-300/80 font-semibold mt-1 block">Scheduled Value</span>
          </div>

        </div>

        {/* Filter and Search Bar */}
        <div className="bg-slate-800/60 border border-slate-700/70 rounded-3xl p-5 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search patient, token, phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Shift & Date Toggles */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              {/* Shift toggle */}
              <div className="bg-slate-900 p-1 rounded-xl border border-slate-700 flex text-xs font-bold">
                <button
                  onClick={() => setShiftFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${shiftFilter === 'all' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  All Shifts
                </button>
                <button
                  onClick={() => setShiftFilter('Morning')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${shiftFilter === 'Morning' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Morning
                </button>
                <button
                  onClick={() => setShiftFilter('Evening')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${shiftFilter === 'Evening' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Evening
                </button>
              </div>

              {/* Date toggle */}
              <div className="bg-slate-900 p-1 rounded-xl border border-slate-700 flex text-xs font-bold">
                <button
                  onClick={() => setDateFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${dateFilter === 'all' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  All Dates
                </button>
                <button
                  onClick={() => setDateFilter('today')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${dateFilter === 'today' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Today Only
                </button>
              </div>
            </div>

          </div>

          {/* Status Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-semibold flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Status:
            </span>
            {['all', 'Confirmed', 'Checked In', 'In-Consultation', 'Completed', 'Cancelled'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-xl font-bold transition-colors whitespace-nowrap ${
                  statusFilter === st
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700/60'
                }`}
              >
                {st === 'all' ? 'All Records' : st}
              </button>
            ))}
          </div>

        </div>

        {/* Live Patient Queue Table */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-5 border-b border-slate-700 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Live Patient Tokens & Appointment Queue</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Showing {filteredAppointments.length} matching appointment{filteredAppointments.length === 1 ? '' : 's'}
              </p>
            </div>
          </div>

          {filteredAppointments.length === 0 ? (
            <div className="p-12 text-center text-slate-400 space-y-3">
              <AlertCircle className="w-10 h-10 mx-auto text-slate-500" />
              <p className="text-base font-semibold text-slate-300">No appointments found matching this filter</p>
              <button
                onClick={() => {
                  setDateFilter('all');
                  setStatusFilter('all');
                  setShiftFilter('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-xs font-bold text-white transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900/80 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
                  <tr>
                    <th className="py-3.5 px-4 font-bold">Token & Date</th>
                    <th className="py-3.5 px-4 font-bold">Patient Details</th>
                    <th className="py-3.5 px-4 font-bold">Treatment & Doctor</th>
                    <th className="py-3.5 px-4 font-bold">Slot Time</th>
                    <th className="py-3.5 px-4 font-bold">Current Status</th>
                    <th className="py-3.5 px-4 font-bold text-right">Workflow Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {filteredAppointments.map(apt => (
                    <tr key={apt.token} className="hover:bg-slate-700/30 transition-colors">
                      
                      {/* Token */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="font-mono text-xs font-bold text-teal-300 bg-teal-950/70 border border-teal-800/80 px-2 py-1 rounded-md block w-fit">
                          {apt.token}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-1">
                          📅 {apt.date}
                        </span>
                      </td>

                      {/* Patient */}
                      <td className="py-4 px-4">
                        <div className="font-bold text-white">{apt.patientName}</div>
                        <div className="text-xs text-slate-400">
                          {apt.age} yrs • {apt.gender}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <a
                            href={`tel:${apt.phone}`}
                            className="text-xs text-teal-400 hover:underline flex items-center gap-1 font-mono"
                          >
                            <Phone className="w-3 h-3" /> {apt.phone}
                          </a>
                          <a
                            href={`https://wa.me/91${apt.phone}?text=Hello%20${encodeURIComponent(apt.patientName)},%20this%20is%20Suma%20Dental%20Care%20regarding%20your%20appointment%20token%20${apt.token}.`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                            title="Chat on WhatsApp"
                          >
                            <MessageSquare className="w-3 h-3" />
                          </a>
                        </div>
                      </td>

                      {/* Procedure & Doctor */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-slate-200">{apt.procedureName}</div>
                        <div className="text-xs text-teal-400 mt-0.5">
                          🩺 {apt.doctorName}
                        </div>
                        {apt.notes && (
                          <div className="text-[11px] text-slate-400 italic mt-0.5 truncate max-w-xs">
                            "{apt.notes}"
                          </div>
                        )}
                      </td>

                      {/* Time & Shift */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="font-bold text-white">{apt.time}</div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                          apt.period === 'Morning' 
                            ? 'bg-amber-950/60 text-amber-300 border border-amber-800/60' 
                            : 'bg-indigo-950/60 text-indigo-300 border border-indigo-800/60'
                        }`}>
                          {apt.period} Shift
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        {getStatusBadge(apt.status)}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 whitespace-nowrap text-right space-x-2">
                        {/* Quick progression button */}
                        {apt.status === 'Confirmed' && (
                          <button
                            onClick={() => handleNextStatus(apt.token, apt.status)}
                            className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-colors"
                          >
                            Check In
                          </button>
                        )}
                        {apt.status === 'Checked In' && (
                          <button
                            onClick={() => handleNextStatus(apt.token, apt.status)}
                            className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white transition-colors"
                          >
                            Enter Chair
                          </button>
                        )}
                        {apt.status === 'In-Consultation' && (
                          <button
                            onClick={() => handleNextStatus(apt.token, apt.status)}
                            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors"
                          >
                            Done Treatment
                          </button>
                        )}

                        {/* Status dropdown */}
                        <select
                          value={apt.status}
                          onChange={(e) => updateAppointmentStatus(apt.token, e.target.value)}
                          className="bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500"
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Checked In">Checked In</option>
                          <option value="In-Consultation">In-Consultation</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>

                        {/* Print OPD Slip */}
                        <button
                          onClick={() => setPrintSlipAppointment(apt)}
                          className="p-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors inline-flex items-center"
                          title="Print OPD Case Slip"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </main>

      {/* OPD Slip Print Preview Modal */}
      {printSlipAppointment && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header Controls */}
            <div className="flex items-center justify-between border-b pb-3 print:hidden">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                OPD Clinical Case Record & Token Slip
              </span>
              <button
                onClick={() => setPrintSlipAppointment(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Printable Area */}
            <div id="printable-opd-slip" className="border-2 border-slate-900 p-6 rounded-xl space-y-4">
              {/* Slip Clinic Header */}
              <div className="text-center border-b-2 border-slate-900 pb-3">
                <h3 className="text-xl font-black uppercase tracking-tight text-teal-900">
                  {clinicInfo.name}
                </h3>
                <p className="text-xs text-slate-600">{clinicInfo.address}</p>
                <p className="text-[11px] font-semibold text-slate-700 mt-0.5">
                  OPD Phone: {clinicInfo.phone} • Reg: {clinicInfo.registration}
                </p>
              </div>

              {/* Token & Patient Demographics */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 uppercase block font-semibold text-[10px]">Token Number</span>
                  <span className="text-base font-black font-mono text-teal-800">{printSlipAppointment.token}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 uppercase block font-semibold text-[10px]">Date & Time</span>
                  <span className="text-sm font-bold">{printSlipAppointment.date} at {printSlipAppointment.time}</span>
                </div>

                <div>
                  <span className="text-slate-500 uppercase block font-semibold text-[10px]">Patient Name</span>
                  <span className="text-sm font-bold text-slate-900">{printSlipAppointment.patientName}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 uppercase block font-semibold text-[10px]">Age / Gender / Contact</span>
                  <span className="text-xs font-semibold">{printSlipAppointment.age} Yrs / {printSlipAppointment.gender} / {printSlipAppointment.phone}</span>
                </div>
              </div>

              {/* Clinical Assessment Box */}
              <div className="border border-slate-300 rounded-lg p-3 space-y-2 bg-slate-50">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Scheduled Treatment:</span>
                  <span className="font-black text-teal-900">{printSlipAppointment.procedureName}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Attending Surgeon:</span>
                  <span className="font-semibold text-slate-900">{printSlipAppointment.doctorName}</span>
                </div>
                <div className="text-xs text-slate-600 pt-1 border-t border-slate-200">
                  <span className="font-semibold">Chief Complaint / Notes:</span> {printSlipAppointment.notes || 'Routine dental examination'}
                </div>
              </div>

              {/* Blank Doctor Prescription Notes Area */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Clinical Examination & Rx (Doctor's Notes):
                </span>
                <div className="h-24 border-b border-dashed border-slate-400 flex flex-col justify-end text-[10px] text-slate-400 italic">
                  [ Operatory Findings / Tooth Numbers / Prescriptions ]
                </div>
              </div>

              {/* Doctor Sign */}
              <div className="pt-6 flex justify-between items-end text-xs">
                <div className="text-[10px] text-slate-500">
                  * Valid for 7 days from date of issue.<br />
                  * Please carry this slip for subsequent review visits.
                </div>
                <div className="text-center">
                  <div className="w-32 border-b border-slate-800 mb-1" />
                  <span className="font-bold text-slate-800">Authorized Dental Surgeon</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 print:hidden">
              <button
                onClick={() => setPrintSlipAppointment(null)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-teal-600/20"
              >
                <Printer className="w-4 h-4" />
                Print OPD Slip
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
