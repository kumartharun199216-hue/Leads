import os
import sys
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

# Add Consolidated_Category to path to import docx_helpers
sys.path.append('Consolidated_Category')
from docx_helpers import (
    set_cell_background, set_cell_margins, add_header_banner,
    add_styled_heading, add_callout, add_styled_table, add_code_box, add_bullet
)

doc = docx.Document()

# Standard 1-inch margins
for section in doc.sections:
    section.top_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.right_margin = Inches(1)

# Header Banner
add_header_banner(
    doc,
    title="COMPREHENSIVE DEVELOPER SPECIFICATION MANUAL\nDENTAL CLINIC & IMPLANT WEB APPLICATION",
    subtitle="Full Feature Architecture, UI/UX Interaction Flows, Node.js Express Backend & Demo Role Switcher",
    target_info="Micro-Business Sector 1: Dental Clinics & Implant Centers | 120 Commercial Leads (Kadapa, Vijayawada, Bhimavaram)"
)

add_callout(
    doc,
    title="DEVELOPER DIRECTIVE & ARCHITECTURE MANDATE",
    text="This document provides the definitive engineering specification for building a client-ready Dental Web Application demo. The tech stack is flexible (developers may choose React, Vue, Next.js, or Svelte for frontend), while the backend is specified as a lightweight Node.js Express API. Focus strictly on delivering the EXACT features, user flows, and interactive behaviors described below so the application can be used to pitch to real clinic owners."
)

# 1. Executive Summary & Purpose
add_styled_heading(doc, "1. Executive Summary & Demo Objectives", level=1)
p1 = doc.add_paragraph()
p1.add_run(
    "Local dental surgeons across Andhra Pradesh (Dr. Suma Latha in Vijayawada, Dr. K.S. Reddy in Kadapa, etc.) operate in a competitive market. "
    "While they possess advanced surgical skills (Rotary RCT, European Implants, Invisible Aligners), their digital presence is almost non-existent. "
    "They face two critical revenue leaks:\n"
    "1. High-Ticket Invisibility: Patients looking for premium procedures (Implants at ₹18,000+ or Aligners at ₹45,000+) travel to corporate hospitals because local clinic websites look outdated or nonexistent.\n"
    "2. Chaotic Phone Scheduling & 35% No-Shows: Receptionists miss incoming calls while handling patients in the clinic, and appointments booked over voice calls have a high cancellation rate.\n\n"
    "What This Demo Web Application Proves to the Dentist:\n"
    "• It establishes an elite, sterile, and technologically advanced clinic brand.\n"
    "• It provides a frictionless 4-step appointment booking engine with real-time morning/evening slot availability.\n"
    "• It automates patient reminders via WhatsApp with driving directions.\n"
    "• It provides an intuitive Receptionist / Doctor Queue to manage patient waiting times.\n"
    "• It includes a 'Floating Demo Role Switcher' allowing sales presenters to toggle between the Patient View and Doctor Admin Queue with a single tap!"
)

# 2. Complete Feature Architecture (What Needs to be Built)
add_styled_heading(doc, "2. Complete Feature Architecture & Frontend UI Breakdown", level=1)
p2 = doc.add_paragraph()
p2.add_run(
    "The application is structured into 8 Core Functional Modules. Regardless of the frontend framework chosen, "
    "the developer must implement each of the following components and interactive states:"
)

# Module 1
add_styled_heading(doc, "Module 1: Brand Authority Header & Sticky Navigation", level=2)
add_bullet(doc, "Brand Identity", "Displays clinic logo ('🦷 Suma Dental Care'), full clinic name, and city location ('Benz Circle, Vijayawada').")
add_bullet(doc, "Operating Status Pill", "Dynamic green status badge: '🟢 Open Today: 9:30 AM - 9:00 PM'.")
add_bullet(doc, "Direct Contact Actions", "Click-to-Call emergency button ('📞 +91 866 2434510') and primary glowing button ['📅 Book Appointment'] that routes directly to the booking wizard.")

# Module 2
add_styled_heading(doc, "Module 2: Doctor Authority Hero Section", level=2)
add_bullet(doc, "Doctor Showcase", "High-resolution portrait of the chief dental surgeon in clinical coat with stethoscope/loupes.")
add_bullet(doc, "Credentials & Certifications", "Prominently displays: 'Dr. P. Suma Latha, MDS', 'Chief Dental Surgeon & Implantologist', 'Member of Indian Dental Association (IDA)', '14+ Years Clinical Experience'.")
add_bullet(doc, "Social Proof Ratings Widget", "Displays '⭐ 4.9 Rating based on 348 Verified Patient Reviews on Google & Practo'.")
add_bullet(doc, "Action CTAs", "Two buttons: ['Book Consultation' (Primary Teal)] and ['Explore Procedures & Pricing' (Secondary Outline)].")

# Module 3
add_styled_heading(doc, "Module 3: High-Value Dental Procedures Catalog", level=2)
p_mod3 = doc.add_paragraph()
p_mod3.add_run("A grid of 5 procedure cards highlighting services that generate 80% of clinic revenue. Each card must include:")

proc_table = [
    ["Procedure Name", "Typical Duration", "Fee Range (INR)", "Key Patient Benefit & Tag", "Card Action"],
    ["Single Sitting Rotary Root Canal (RCT)", "45 - 60 mins", "₹2,800", "Painless, computer-guided apex locators, zero post-op sensitivity. Tag: [Painless]", "['Book RCT'] (Pre-selects RCT in wizard)"],
    ["Titanium Dental Implant & Zirconia Crown", "60 mins", "₹18,000", "Permanent tooth replacement, European titanium, natural translucency. Tag: [Lifetime Warranty]", "['Book Implant']"],
    ["Invisible Clear Aligners", "30 mins", "₹45,000", "Straighten teeth discreetly without metal wires or brackets. Tag: [Discreet Orthodontics]", "['Book Aligners']"],
    ["Digital Smile Designing & Laser Whitening", "45 mins", "₹3,500", "Up to 6 shades lighter teeth in 1 sitting, removes deep tea/coffee stains. Tag: [Most Popular]", "['Book Whitening']"],
    ["Comprehensive Oral Health & Digital X-Ray", "20 mins", "₹400", "Full mouth scan, ultrasonic plaque screening, intraoral camera. Tag: [Preventative]", "['Book Checkup']"]
]
add_styled_table(doc, proc_table[0], proc_table[1:], [2.2, 1.1, 1.0, 2.7, 1.8])

# Module 4
add_styled_heading(doc, "Module 4: Interactive Before/After Smile Transformation Slider", level=2)
p_mod4 = doc.add_paragraph()
p_mod4.add_run(
    "To wow the dentist during the demo, provide an interactive Before/After comparison component:\n"
    "• Visual Presentation: A container showing stained/crooked teeth (Before) and bright white, perfectly aligned teeth (After).\n"
    "• Interaction: A vertical divider handle that the user can drag horizontally left and right on mobile or desktop to reveal the transformation in real-time.\n"
    "• Caption & Review: 'Patient M. Sravani (Age 26): Full smile makeover in 2 sittings before wedding. 100% pain-free!'"
)

# Module 5
add_styled_heading(doc, "Module 5: Interactive Tooth Map & Procedure Recommender", level=2)
p_mod5 = doc.add_paragraph()
p_mod5.add_run(
    "A unique interactive component that demonstrates high technical capability:\n"
    "• Visual SVG Layout: A clean graphic of the dental arch (Incisors, Canines, Premolars, Molars).\n"
    "• Clickable Interaction: Tapping a molar highlights recommended treatments: 'Molar #16: Common symptoms: Severe chewing pain -> Recommended: Single Sitting Rotary RCT + Crown'.\n"
    "• Tapping an incisor highlights: 'Incisor #11: Discoloration / Gap -> Recommended: Laser Whitening or Composite Veneers'.\n"
    "• Includes a direct ['Schedule Evaluation for this Tooth'] button linking into the booking flow."
)

# Module 6
add_styled_heading(doc, "Module 6: Floating 'Emergency Toothache / SOS' Button", level=2)
p_mod6 = doc.add_paragraph()
p_mod6.add_run(
    "Dental emergencies happen after hours. Implement a floating button on the bottom-right corner:\n"
    "• Visual: Pulsing red/amber badge with emergency siren icon: ['🚨 Severe Toothache? Emergency Assistance'].\n"
    "• Tapping action: Opens an emergency modal with 1-tap direct call to the doctor and an instant WhatsApp SOS message: 'Hello Dr. Suma, I have severe unbearable toothache. Is the clinic available for emergency care today?'"
)

# Module 7
add_styled_heading(doc, "Module 7: 4-Step Frictionless Appointment Booking Wizard ('/book')", level=2)
p_mod7 = doc.add_paragraph()
p_mod7.add_run("The booking wizard must be frictionless with an animated step-indicator (Step 1 of 4):")

wizard_flow = [
    ["Step 1: Select Service", "Radio cards showing the 5 dental procedures with price tags. User taps one card to select. Automatically progresses to Step 2."],
    ["Step 2: Choose Date", "Horizontal 7-day calendar bar: [Today, Oct 2] [Fri, Oct 3] [Sat, Oct 4] ... Tapping a date fetches available slots for that specific day."],
    ["Step 3: Dynamic Slot Picker", "Slots grouped into Morning (09:30 AM - 01:00 PM) and Evening (05:00 PM - 08:30 PM). Booked slots must be visually grayed out with strikethrough. Available slots are clickable with teal border."],
    ["Step 4: Patient Details", "Form fields: Full Name, 10-digit Mobile Number (+91), Age, Gender (Male/Female/Other pills), and Chief Complaint ('Pain in lower jaw', 'Routine cleaning')."],
    ["Confirmation Screen", "Displays Token Number (e.g. 'MED-104'), confetti animation burst, appointment summary card, Google Map navigation button, and the WhatsApp Confirmation CTA."]
]
add_styled_table(doc, ["Wizard Step", "UI Components & Interactive Rules"], wizard_flow, [2.0, 4.5])

# Module 8
add_styled_heading(doc, "Module 8: Floating 'Demo Role Switcher' Pill (Patient ↔ Doctor)", level=2)
p_mod8 = doc.add_paragraph()
p_mod8.add_run(
    "CRITICAL DEMO FEATURE: When presenting the prototype to a doctor on a phone or laptop, you must never force the presenter to type '/admin' in the browser address bar. "
    "Implement a floating role switcher pill fixed at the bottom-center of the screen:\n"
    "• Appearance: A sleek pill badge with two toggle tabs: [👤 Patient View] | [🩺 Doctor / Staff Queue].\n"
    "• Tapping 'Patient View': Displays the public clinic website and booking wizard.\n"
    "• Tapping 'Doctor / Staff Queue': Instantly flips the screen to the Receptionist & Doctor Token Board without reloading the page!\n"
    "• The presenter can book a patient as a 'Patient', then tap 'Doctor Queue' to show the doctor that their new booking appeared on the screen in 1 second!"
)

# Module 9
add_styled_heading(doc, "Module 9: Doctor & Receptionist Live Token Queue ('/admin')", level=2)
p_mod9 = doc.add_paragraph()
p_mod9.add_run("The management dashboard for the clinic staff:")
add_bullet(doc, "Today's Metrics Counter Cards", "4 live summary cards: Scheduled (12), Waiting in Lobby (3), In-Consultation (1), Completed (8).")
add_bullet(doc, "Live Queue Table", "Columns: Token ID, Patient Name, Phone, Service, Scheduled Time, Status Badge.")
add_bullet(doc, "Status Badges", "• SCHEDULED (Blue)\n• IN_PROGRESS (Amber)\n• COMPLETED (Green)\n• CANCELLED (Red).")
add_bullet(doc, "1-Click Status Toggles", "Buttons on each row: ['Call In'] (moves patient into surgery operatory), ['Mark Completed'] (frees the slot), ['WhatsApp Ping'] (sends reminder to late patients).")

# 3. Node.js Express API Backend Architecture
add_styled_heading(doc, "3. Lightweight Node.js Express API Backend Specification", level=1)
p_be = doc.add_paragraph()
p_be.add_run(
    "To provide a real, professional architecture without external database complexity, implement a lightweight Node.js Express server. "
    "The server handles slot validation, prevents double-booking, generates tokens, and serves data from a lightweight JSON store or SQLite file."
)

add_styled_heading(doc, "3.1 Server File Structure & Setup", level=2)
be_tree = """backend/
├── server.js               # Express application entry point & route definitions
├── data/
│   ├── clinic.json         # Clinic profile, doctor credentials, timings
│   ├── services.json       # Dental treatments, fees, and durations
│   └── appointments.json   # Seeded and dynamically booked appointments
└── package.json            # express, cors, dotenv"""
add_code_box(doc, be_tree, "Backend Repository Layout")

add_styled_heading(doc, "3.2 REST API Contract & Endpoints", level=2)
api_routes = [
    ["GET", "/api/clinic", "None", "Returns clinic profile, doctor credentials, working hours, address, and Google ratings."],
    ["GET", "/api/services", "None", "Returns array of all 5 dental procedures with pricing and descriptions."],
    ["GET", "/api/slots", "Query: ?date=YYYY-MM-DD", "Calculates slot availability for that date. Returns array of slot objects with boolean 'isAvailable' flag."],
    ["POST", "/api/appointments", "Body: { serviceId, patientName, phone, age, gender, date, slot, notes }", "Validates slot availability. If slot is free, creates Token (e.g. 'MED-105'), saves appointment, returns full confirmation object. If taken, returns 409 Conflict."],
    ["GET", "/api/appointments/today", "None", "Returns list of all appointments scheduled for today's date for the doctor queue board."],
    ["PATCH", "/api/appointments/:token/status", "Body: { status: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' }", "Updates appointment state and recalculates queue metrics in real-time."]
]
add_styled_table(doc, ["Method", "Route", "Parameters / Body", "Behavior & Response Payload"], api_routes, [1.0, 1.8, 1.8, 2.5])

add_styled_heading(doc, "3.3 Complete Express.js Server Implementation (`server.js`)", level=2)
p_srv = doc.add_paragraph()
p_srv.add_run("Developers can copy this exact, fully functional Express.js server:")

server_js_code = """// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Database with Seed Data
let appointments = [
  {
    token: "MED-101",
    patientName: "Srinivasa Rao K.",
    phone: "+91 98480 34202",
    service: "Comprehensive Oral Health & Digital X-Ray",
    date: new Date().toISOString().split('T')[0],
    slot: "09:30 AM",
    status: "COMPLETED"
  },
  {
    token: "MED-102",
    patientName: "Lakshmi Prasanna",
    phone: "+91 94401 23101",
    service: "Single Sitting Rotary Root Canal (RCT)",
    date: new Date().toISOString().split('T')[0],
    slot: "10:00 AM",
    status: "IN_PROGRESS"
  },
  {
    token: "MED-103",
    patientName: "Kiran Kumar Varma",
    phone: "+91 8816 224110",
    service: "Digital Smile Designing & Laser Whitening",
    date: new Date().toISOString().split('T')[0],
    slot: "10:30 AM",
    status: "SCHEDULED"
  }
];

const allSlots = [
  "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
  "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"
];

// 1. Get Clinic Details
app.get('/api/clinic', (req, res) => {
  res.json({
    name: "Suma Dental Specialities & Implant Centre",
    doctor: "Dr. P. Suma Latha, MDS",
    designation: "Chief Dental Surgeon & Implantologist",
    experience: "14+ Years Clinical Experience",
    phone: "+91 866 2434510",
    address: "40-1-52, MG Road, Near Benz Circle, Vijayawada - 520010",
    googleRating: 4.9,
    reviewCount: 348,
    timings: "Mon - Sat: 9:30 AM - 1:30 PM & 5:00 PM - 9:00 PM"
  });
});

// 2. Get Available Slots for Date
app.get('/api/slots', (req, res) => {
  const queryDate = req.query.date || new Date().toISOString().split('T')[0];
  const bookedForDate = appointments
    .filter(a => a.date === queryDate && a.status !== 'CANCELLED')
    .map(a => a.slot);

  const slotStatus = allSlots.map(time => ({
    time,
    isAvailable: !bookedForDate.includes(time)
  }));

  res.json({ date: queryDate, slots: slotStatus });
});

// 3. Book New Appointment (Collision Prevention)
app.post('/api/appointments', (req, res) => {
  const { patientName, phone, service, date, slot, age, gender, notes } = req.body;

  if (!patientName || !phone || !date || !slot) {
    return res.status(400).json({ error: "Missing required booking details." });
  }

  // Check if slot already taken
  const existing = appointments.find(a => a.date === date && a.slot === slot && a.status !== 'CANCELLED');
  if (existing) {
    return res.status(409).json({ error: "Slot already booked by another patient. Please select another time." });
  }

  const token = `MED-${Math.floor(100 + Math.random() * 900)}`;
  const newAppointment = {
    token,
    patientName,
    phone,
    service: service || "General Consultation",
    date,
    slot,
    age: age || 25,
    gender: gender || "Not Specified",
    notes: notes || "",
    status: "SCHEDULED"
  };

  appointments.unshift(newAppointment);
  res.status(201).json({ success: true, token, appointment: newAppointment });
});

// 4. Get Today's Queue for Doctor / Admin
app.get('/api/appointments/today', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const todayQueue = appointments.filter(a => a.date === today);
  res.json({ queue: todayQueue, total: todayQueue.length });
});

// 5. Update Status (Call In, Complete, Cancel)
app.patch('/api/appointments/:token/status', (req, res) => {
  const { token } = req.params;
  const { status } = req.body;

  const apt = appointments.find(a => a.token === token);
  if (!apt) return res.status(404).json({ error: "Appointment token not found." });

  apt.status = status;
  res.json({ success: true, appointment: apt });
});

app.listen(PORT, () => {
  console.log(`Dental Clinic Express Backend running on http://localhost:${PORT}`);
});"""
add_code_box(doc, server_js_code, "backend/server.js")

# 4. WhatsApp Integration Engine
add_styled_heading(doc, "4. WhatsApp Booking Notification Engine", level=1)
p_wa = doc.add_paragraph()
p_wa.add_run(
    "When a patient completes booking, the frontend renders a prominent button: ['📲 Send Confirmation via WhatsApp']. "
    "Here is the complete JavaScript / TypeScript function to format the message and launch WhatsApp:"
)

wa_fn = """// utils/whatsappBooking.js
export function generateWhatsAppBookingUrl(clinicPhone, clinicName, token, patientName, service, date, slot) {
  const cleanPhone = clinicPhone.replace(/[^0-9]/g, '');
  const text = 
`🏥 *APPOINTMENT CONFIRMATION - ${clinicName.toUpperCase()}*
──────────────────────────
🎟️ *Token Number*: *${token}*
👤 *Patient Name*: ${patientName}
🩺 *Treatment*: ${service}
📅 *Date*: ${date}
⏰ *Scheduled Slot*: ${slot}
📍 *Address*: MG Road, Near Benz Circle, Vijayawada
──────────────────────────
Please arrive 10 minutes prior to your slot time.
Reply 'CONFIRM' to finalize your booking. Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}"""
add_code_box(doc, wa_fn, "utils/whatsappBooking.js")

# 5. Developer Implementation Checklist
add_styled_heading(doc, "5. Developer Milestone Checklist & Verification", level=1)
checklist_data = [
    ["Phase 1: Express Server & Data", "1. Create `/backend/server.js` with the provided code.\n2. Run `node server.js` and verify `GET http://localhost:5000/api/slots` returns available slots."],
    ["Phase 2: Homepage & Clinic Branding", "1. Build Hero section with doctor portrait, credentials, and Google rating badge.\n2. Render 5 procedure cards with duration, fee range, and pre-select buttons.\n3. Implement Before/After smile comparison slider."],
    ["Phase 3: Interactive Booking Flow", "1. Build 4-step wizard.\n2. Connect date picker to `GET /api/slots?date=...` so booked slots appear grayed out.\n3. On submit, post to `POST /api/appointments` and display Token ID with confetti animation.\n4. Connect WhatsApp deep-link button."],
    ["Phase 4: Floating Demo Role Switcher", "1. Create floating bottom pill: [👤 Patient View] | [🩺 Doctor Queue].\n2. Tapping toggles state between patient storefront and receptionist dashboard."],
    ["Phase 5: Doctor Admin Queue", "1. Render queue table from `GET /api/appointments/today`.\n2. Test clicking 'Call In' (updates status to IN_PROGRESS) and 'Mark Completed'."],
    ["Phase 6: Mobile Polish & Demo Readiness", "1. Test on smartphone screen (375px width).\n2. Ensure all buttons have comfortable tap targets (min 44px).\n3. Rehearse the 3-minute sales pitch script."]
]
add_styled_table(doc, ["Development Phase", "Exact Action Items & Verification Criteria"], checklist_data, [2.0, 4.5])

# 6. Doctor Demo Pitch Script
add_styled_heading(doc, "6. Doctor Demo Pitch Script (How to Present to a Dentist)", level=1)
p_script = doc.add_paragraph()
p_script.add_run(
    "Follow this exact 3-minute script when presenting the web application to a dental surgeon:\n\n"
    "1. Hand your phone to the doctor:\n"
    "   'Namaste Dr. Suma Latha garu. Here is how your clinic looks to a patient in Vijayawada searching on Google at 9:00 PM. "
    "   It highlights your MDS degree, 14 years of surgical experience, and your 4.9-star rating.'\n\n"
    "2. Scroll to High-Value Procedures:\n"
    "   'Notice how your procedures are showcased: European Titanium Implants, Invisible Aligners, and Laser Whitening. "
    "   Patients immediately see that you perform advanced aesthetic dentistry, not just basic fillings.'\n\n"
    "3. Show the Interactive Smile Slider:\n"
    "   'Look at this slider (drag slider on screen): Patients can see the exact before and after transformation of laser whitening.'\n\n"
    "4. Book a Test Appointment:\n"
    "   'Now tap Book Appointment: Select Single Sitting Root Canal, pick tomorrow, select 10:30 AM, enter my name, and tap Confirm. "
    "   Notice Token MED-104 is generated with a celebratory confetti animation, and tapping this green button sends the confirmation straight to your clinic WhatsApp!'\n\n"
    "5. Tap the Floating Role Switcher:\n"
    "   'Now look at this bottom pill: I tap Doctor Queue. Look! Token MED-104 is already waiting on your front-desk screen! "
    "   Your receptionist taps Call In when the patient arrives, and Complete when done. No missed calls, no scheduling arguments, and no-shows drop by 35%.'\n\n"
    "6. The Close:\n"
    "   'We can customize this with your clinic photos and launch it on sumadental.com this week. Can we set this up for you?'"
)

try:
    doc.save("Micro_Category/Dental_Clinic_Web_App_Step_by_Step_Developer_Guide.docx")
    print("Successfully updated: Micro_Category/Dental_Clinic_Web_App_Step_by_Step_Developer_Guide.docx")
except Exception as e:
    doc.save("Micro_Category/Dental_Clinic_Web_App_Step_by_Step_Developer_Guide_v2.docx")
    print("Original file is currently open in Word. Saved update as: Micro_Category/Dental_Clinic_Web_App_Step_by_Step_Developer_Guide_v2.docx")
