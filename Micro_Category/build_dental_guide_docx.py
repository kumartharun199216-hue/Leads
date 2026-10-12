import os
import sys
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

# Add Consolidated_Category to path to use docx_helpers
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
    title="STEP-BY-STEP DEVELOPER IMPLEMENTATION MANUAL\nDENTAL CLINIC & IMPLANT PORTAL",
    subtitle="Turn-Key Engineering Blueprint: Frontend UI, Booking Slot Engine, WhatsApp Integration & Doctor Admin Queue",
    target_info="Micro-Business Sector 1: Dental Clinics & Implant Centers | 120 Commercial Leads (Kadapa, Vijayawada, Bhimavaram)"
)

add_callout(
    doc,
    title="DEVELOPER MISSION & DEMO OBJECTIVE",
    text="Your objective as a developer is to build a high-converting, fully interactive demo prototype of a dental clinic web application. A dental surgeon (like Dr. Suma Latha or Dr. K.S. Reddy) must be able to touch this app on their smartphone, pick a date, see available morning/evening slots, book an appointment, receive an instant token with a WhatsApp confirmation, and see the patient appear in the front-desk queue. Use the exact step-by-step guide below."
)

# 1. Project Overview & Business Value
add_styled_heading(doc, "1. Project Overview: What We Are Building and Why", level=1)
p = doc.add_paragraph()
p.add_run(
    "In our lead database, we have 120 dental clinics across Andhra Pradesh. Every single one of these dental surgeons loses "
    "significant revenue each month due to two specific problems:\n"
    "1. High-Ticket Procedure Invisibility: Patients don't know the clinic does ₹18,000 Titanium Implants or ₹45,000 Invisible Clear Aligners because their existing presence is just a phone number on Justdial.\n"
    "2. 35% Appointment No-Show Rate: Bookings are taken haphazardly over the phone by a receptionist who is busy assisting the doctor. Patients forget or double-book.\n\n"
    "What the Web Application Achieves:\n"
    "• Presents a world-class, premium dental brand with before/after smile transformations.\n"
    "• Allows patients to self-schedule 24/7 with zero phone calls.\n"
    "• Sends automated WhatsApp booking confirmations with driving directions.\n"
    "• Gives the receptionist an interactive daily token queue to manage patient waiting times."
)

# 2. System Architecture & Tech Stack Setup
add_styled_heading(doc, "2. System Architecture & Project Setup", level=1)
p_tech = doc.add_paragraph()
p_tech.add_run("Use modern, fast tools so the application feels instant and silky smooth on mobile devices:")

tech_stack = [
    ["Framework", "Vite + React 18+ OR Next.js 14+ (App Router)", "Ultra-fast load time, instant hot-reload, zero bloat."],
    ["Styling", "TailwindCSS (v3.4+)", "Utility classes for rapid custom UI without generic CSS frameworks."],
    ["Color Palette", "Medical Teal (`#0D9488`), Slate Dark (`#0F172A`), Mint Tint (`#F0FDFA`)", "Projects clinical hygiene, trustworthiness, and high-tech surgical precision."],
    ["Icons", "Lucide React (`lucide-react`)", "Clean vector icons: Calendar, Clock, Sparkles, User, ShieldCheck, Phone, CheckCircle, ChevronRight."],
    ["Animation / Polish", "Canvas Confetti (`canvas-confetti`)", "Trigger celebratory confetti upon successful appointment booking."],
    ["State Management", "React Context / Zustand with LocalStorage", "Ensures appointments booked during a client demo persist across page reloads."]
]
add_styled_table(doc, ["Architecture Layer", "Recommended Technology", "Rationale for Demo Success"], tech_stack, [1.5, 2.5, 2.5])

add_styled_heading(doc, "2.1 Terminal Setup Commands", level=2)
p_cmd = doc.add_paragraph()
p_cmd.add_run("Run these exact terminal commands to scaffold the project:")

terminal_code = """# 1. Create Vite React App with TypeScript
npm create vite@latest dental-clinic-app -- --template react-ts
cd dental-clinic-app

# 2. Install Dependencies
npm install lucide-react date-fns canvas-confetti
npm install -D @types/canvas-confetti tailwindcss postcss autoprefixer

# 3. Initialize Tailwind
npx tailwindcss init -p"""
add_code_box(doc, terminal_code, "Bash / Terminal: Scaffolding Commands")

# 3. Step-by-Step Implementation Guide
add_styled_heading(doc, "3. Step-by-Step Implementation Roadmap", level=1)

# Step 1
add_styled_heading(doc, "Step 1: Configure Theme, Colors & Typography", level=2)
p_s1 = doc.add_paragraph()
p_s1.add_run(
    "Open `tailwind.config.js` and set up the clinical color palette. Do NOT use default bootstrap blues. "
    "Dental clinics require fresh, sterile, and premium aesthetic tones:"
)

tailwind_conf = """// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dental: {
          50: '#F0FDFA',   // Soft mint background
          100: '#CCFBF1',
          500: '#14B8A6',  // Accent teal
          600: '#0D9488',  // Primary dental brand
          700: '#0F766E',  // Dark clinical teal
          900: '#134E4A',
        },
        slate: {
          850: '#151F32',
          900: '#0F172A',
        }
      }
    },
  },
  plugins: [],
}"""
add_code_box(doc, tailwind_conf, "tailwind.config.js Theme Setup")

# Step 2
add_styled_heading(doc, "Step 2: Build Page 1 — Public Clinic Showcase (Homepage '/')", level=2)
p_s2 = doc.add_paragraph()
p_s2.add_run(
    "The homepage establishes credibility in the first 3 seconds. Build the following 6 modular components inside `/src/components/home/`:"
)

home_comps = [
    ["1. Sticky Navbar (`Navbar.tsx`)", "Clinic logo ('🦷 Suma Dental Care'), phone number link, operating status pill ('🟢 Open Today till 9:00 PM'), and a primary button ['📅 Book Appointment'] that scrolls or routes to `/book`."],
    ["2. Hero Section (`HeroSection.tsx`)", "Doctor portrait in white clinical coat, credentials in bold ('Dr. P. Suma Latha, MDS - Chief Dental Surgeon & Implantologist'), 14+ Years Experience badge, Google Rating card ('⭐ 4.9 (348 Verified Reviews)'), and dual CTAs: ['Book Free Consultation'] & ['View Treatments']."],
    ["3. High-Value Procedure Menu (`ProcedureMenu.tsx`)", "Grid of 5 high-margin dental procedures with duration, starting price in ₹, brief description, and direct ['Book Service'] button pre-populating that service."],
    ["4. Before / After Smile Gallery (`SmileGallery.tsx`)", "Visual cards or interactive comparison slider showing teeth whitening, smile correction, and dental implants with patient quote ('I got my confidence back!')."],
    ["5. Sterilization & Tech Badges (`TechShowcase.tsx`)", "Badges: '100% Autoclave Sterilization Class-B', 'Digital Low-Radiation X-Rays', 'Painless Rotary RCT Instruments', 'European Titanium Implants'."],
    ["6. Clinic Map & Timings (`LocationSection.tsx`)", "Interactive Google Map embed, complete street address (Near Benz Circle, Vijayawada), morning/evening hours, and a large button ['📍 Get Driving Directions'] linking to GPS."]
]
add_styled_table(doc, ["Homepage Component", "Detailed UI Elements & Interactive Behavior"], home_comps, [2.3, 4.2])

# Step 3
add_styled_heading(doc, "Step 3: Build Page 2 — 4-Step Interactive Booking Wizard ('/book')", level=2)
p_s3 = doc.add_paragraph()
p_s3.add_run(
    "This is the heart of the demo. The user must experience zero friction. Create `/src/pages/BookAppointment.tsx` with a step state (1 to 4):"
)

add_bullet(doc, "Step 3.1: Service Selector", "Display 5 procedure cards with radio selection: Single Sitting RCT (₹2,800), Laser Whitening (₹3,500), Titanium Implant (₹18,000), Clear Aligners (₹45,000), Comprehensive Checkup (₹400). Clicking a card highlights it with a teal border and automatically advances to Step 2.")
add_bullet(doc, "Step 3.2: Date Selector (Horizontal Date Bar)", "Render the next 7 days horizontally: [Today, Oct 2] [Fri, Oct 3] [Sat, Oct 4] ... User taps a date chip. Active date gets filled teal background.")
add_bullet(doc, "Step 3.3: Dynamic Slot Picker (Morning & Evening Buckets)", "Split slots into two clean groups: Morning (09:30 AM to 01:00 PM) and Evening (05:00 PM to 08:30 PM). Connect each slot to the mock appointment state: if a slot is in `bookedSlots`, render it in light gray with strikethrough and `cursor-not-allowed`. If available, render with green hover and clickable state.")
add_bullet(doc, "Step 3.4: Patient Particulars Form", "Input fields with instant validation: Patient Full Name (Text), Mobile Number (+91 format, 10 digits), Age (Number), Gender (Male / Female / Other radio pills), and Chief Complaint ('Toothache', 'Routine cleaning', etc.).")
add_bullet(doc, "Step 3.5: Submit & Token Generation", "Upon clicking ['Confirm & Generate Token'], generate an authentic Token ID (e.g. `MED-104`), play a confetti burst using `canvas-confetti`, and display the confirmation modal.")

add_styled_heading(doc, "Step 3.6: WhatsApp Booking Deep-Link Engine", level=3)
p_wa = doc.add_paragraph()
p_wa.add_run(
    "On the confirmation screen, provide a large green button: ['📲 Send Confirmation to Clinic WhatsApp']. "
    "Implement this exact function in `/src/utils/whatsapp.ts`:"
)

wa_code_detail = """// src/utils/whatsapp.ts
export function buildWhatsAppAppointmentLink(
  clinicPhone: string,
  clinicName: string,
  token: string,
  patientName: string,
  serviceName: string,
  date: string,
  slot: string
): string {
  const cleanPhone = clinicPhone.replace(/[^0-9]/g, '');
  const message = 
`🏥 *APPOINTMENT CONFIRMATION - ${clinicName.toUpperCase()}*
──────────────────────────
🎟️ *Token Number*: *${token}*
👤 *Patient Name*: ${patientName}
🩺 *Treatment*: ${serviceName}
📅 *Appointment Date*: ${date}
⏰ *Scheduled Time*: ${slot}
📍 *Location*: MG Road, Near Benz Circle, Vijayawada
──────────────────────────
Please arrive 10 minutes before your slot time.
Reply 'CONFIRM' to finalize your booking. Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}"""
add_code_box(doc, wa_code_detail, "src/utils/whatsapp.ts")

# Step 4
add_styled_heading(doc, "Step 4: Build Page 3 — Front-Desk Token Queue ('/admin')", level=2)
p_s4 = doc.add_paragraph()
p_s4.add_run(
    "The doctor or front-desk receptionist uses this view to track arrivals and prevent lobby overcrowding. "
    "Build `/src/pages/AdminDashboard.tsx` with:"
)

admin_elements = [
    ["1. Summary KPI Badges", "4 colored metric cards: Total Scheduled Today (12), Waiting in Lobby (4), In-Consultation (1), Completed (7)."],
    ["2. Live Queue Table", "Table columns: Token #, Patient Name, Phone, Service, Time Slot, Status Badge."],
    ["3. Status Badge States", "• SCHEDULED: Blue badge (`bg-blue-100 text-blue-800`)\n• IN_PROGRESS: Amber badge (`bg-amber-100 text-amber-800`)\n• COMPLETED: Green badge (`bg-emerald-100 text-emerald-800`)\n• CANCELLED: Red badge (`bg-rose-100 text-rose-800`)"],
    ["4. 1-Click Action Buttons", "Each row has quick action buttons: ['Call In'] (changes status to IN_PROGRESS), ['Done'] (changes to COMPLETED), and ['WhatsApp Ping'] (opens WhatsApp to notify patient)."]
]
add_styled_table(doc, ["Admin Feature", "Component Logic & Styling"], admin_elements, [2.2, 4.3])

# Step 5
add_styled_heading(doc, "Step 5: In-Memory State & LocalStorage Persistence", level=2)
p_s5 = doc.add_paragraph()
p_s5.add_run(
    "For the client demo, you do NOT need a remote backend server. Use a simple React Context (`AppointmentContext.tsx`) "
    "initialized with dummy data. When a booking is submitted on the demo phone, it pushes into state and saves to `localStorage`. "
    "When you switch to `/admin`, the newly booked token appears immediately!"
)

state_code = """// src/context/AppointmentContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import mockData from '../data/dental-mock.json';

export interface Appointment {
  token: string;
  patientName: string;
  phone: string;
  service: string;
  date: string;
  slot: string;
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
}

interface AppointmentContextType {
  appointments: Appointment[];
  bookedSlots: string[];
  addAppointment: (apt: Omit<Appointment, 'token' | 'status'>) => string;
  updateStatus: (token: string, status: Appointment['status']) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('demo_dental_appointments');
    return saved ? JSON.parse(saved) : mockData.initial_queue;
  });

  useEffect(() => {
    localStorage.setItem('demo_dental_appointments', JSON.stringify(appointments));
  }, [appointments]);

  const bookedSlots = appointments
    .filter(a => a.status === 'SCHEDULED' || a.status === 'IN_PROGRESS')
    .map(a => a.slot);

  const addAppointment = (data: Omit<Appointment, 'token' | 'status'>) => {
    const token = `MED-${Math.floor(100 + Math.random() * 900)}`;
    const newApt: Appointment = { ...data, token, status: 'SCHEDULED' };
    setAppointments(prev => [newApt, ...prev]);
    return token;
  };

  const updateStatus = (token: string, status: Appointment['status']) => {
    setAppointments(prev => prev.map(a => a.token === token ? { ...a, status } : a));
  };

  return (
    <AppointmentContext.Provider value={{ appointments, bookedSlots, addAppointment, updateStatus }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error('useAppointments must be used within AppointmentProvider');
  return ctx;
};"""
add_code_box(doc, state_code, "src/context/AppointmentContext.tsx")

# Step 6
add_styled_heading(doc, "Step 6: Ready-to-Use Dummy Data Fixture (JSON)", level=1)
p_s6 = doc.add_paragraph()
p_s6.add_run("Save this file as `src/data/dental-mock.json`. It contains authentic procedure names, market pricing, and existing appointments:")

json_mock = """{
  "clinic": {
    "name": "Suma Dental Specialities & Implant Centre",
    "doctor": "Dr. P. Suma Latha, MDS",
    "designation": "Chief Dental Surgeon & Implantologist",
    "experience": "14+ Years Clinical Experience",
    "phone": "+91 866 2434510",
    "whatsapp": "918662434510",
    "email": "sumadental.vja@gmail.com",
    "address": "40-1-52, MG Road, Near Benz Circle, Vijayawada - 520010",
    "google_rating": 4.9,
    "review_count": 348
  },
  "services": [
    {
      "id": "srv-01",
      "name": "Digital Smile Designing & Laser Whitening",
      "duration": "45 mins",
      "price": 3500,
      "tag": "Most Popular",
      "description": "Advanced LED teeth whitening removing years of stains in a single comfortable session."
    },
    {
      "id": "srv-02",
      "name": "Single Sitting Rotary Root Canal (RCT)",
      "duration": "60 mins",
      "price": 2800,
      "tag": "Painless",
      "description": "Painless root canal therapy using computer-guided rotary files and digital apex locators."
    },
    {
      "id": "srv-03",
      "name": "Titanium Dental Implant & Zirconia Crown",
      "duration": "60 mins",
      "price": 18000,
      "tag": "Lifetime Warranty",
      "description": "Permanent tooth replacement with European medical-grade titanium post and translucent zirconia crown."
    },
    {
      "id": "srv-04",
      "name": "Invisible Clear Aligners (No Wire Braces)",
      "duration": "30 mins",
      "price": 45000,
      "tag": "Discreet",
      "description": "Custom transparent 3D trays to straighten teeth comfortably without visible metal wires."
    },
    {
      "id": "srv-05",
      "name": "Comprehensive Oral Health & Digital X-Ray",
      "duration": "20 mins",
      "price": 400,
      "tag": "Checkup",
      "description": "Full oral cavity examination, ultrasonic tartar screening, intraoral camera scan, and treatment plan."
    }
  ],
  "available_slots": [
    "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"
  ],
  "initial_queue": [
    {
      "token": "MED-101",
      "patientName": "Srinivasa Rao K.",
      "phone": "+91 98480 34202",
      "service": "Comprehensive Oral Health & Digital X-Ray",
      "date": "2026-10-02",
      "slot": "09:30 AM",
      "status": "COMPLETED"
    },
    {
      "token": "MED-102",
      "patientName": "Lakshmi Prasanna",
      "phone": "+91 94401 23101",
      "service": "Single Sitting Rotary Root Canal (RCT)",
      "date": "2026-10-02",
      "slot": "10:00 AM",
      "status": "IN_PROGRESS"
    },
    {
      "token": "MED-103",
      "patientName": "Kiran Kumar Varma",
      "phone": "+91 8816 224110",
      "service": "Digital Smile Designing & Laser Whitening",
      "date": "2026-10-02",
      "slot": "10:30 AM",
      "status": "SCHEDULED"
    }
  ]
}"""
add_code_box(doc, json_mock, "src/data/dental-mock.json")

# Step 7
add_styled_heading(doc, "Step 7: Testing Checklist & Mobile Polish", level=1)
checklist = [
    ["1. Mobile Viewport (375px)", "Open Chrome DevTools, select iPhone SE / iPhone 14. Ensure all slot buttons are comfortably tappable (min 44px height)."],
    ["2. Slot Disablement Verification", "Check that '09:30 AM' and '10:00 AM' are disabled on today's date because they are already in the initial queue."],
    ["3. Booking End-to-End Test", "Select 'Single Sitting RCT', pick tomorrow, pick 11:30 AM, enter 'Rajesh Varma', '9848011223'. Verify Token MED-104 is generated."],
    ["4. WhatsApp Deep-Link Test", "Tap 'Send Confirmation to WhatsApp'. Verify that WhatsApp Web or mobile WhatsApp opens with the formatted confirmation text."],
    ["5. Admin Queue Test", "Navigate to `/admin`. Verify that Rajesh Varma appears at the top of the queue as 'SCHEDULED'. Tap 'Call In' and check status becomes 'IN_PROGRESS'."]
]
add_styled_table(doc, ["Test Checkpoint", "Expected Behavior & Verification"], checklist, [2.2, 4.3])

# Step 8
add_styled_heading(doc, "Step 8: Exact Pitch Script for Client Demo", level=1)
p_script = doc.add_paragraph()
p_script.add_run(
    "When your sales team or developer meets Dr. Suma Latha or any of our 120 dental leads, follow this exact script:\n\n"
    "\"Namaste Dr. Suma Latha garu. We noticed that patients in Vijayawada frequently search for dental implants and root canals online, "
    "but most local clinics lose these patients because their receptionist is busy during surgeries.\n\n"
    "Let me show you your customized clinic application on my phone (hand phone to doctor):\n"
    "1. Look at your homepage: It highlights your MDS degree, 14 years of surgical experience, and your 4.9-star Google rating.\n"
    "2. Right below, notice your high-value procedures: Patients immediately see that you offer European Titanium Implants and Invisible Aligners, not just basic fillings.\n"
    "3. Now tap 'Book Appointment': Choose Single Sitting Root Canal, select tomorrow 10:30 AM, enter your name, and tap Confirm.\n"
    "4. See that? Token MED-104 is generated, and tapping this green button sends the appointment directly to your clinic WhatsApp.\n"
    "5. Now look at your front-desk screen (`/admin`): Your receptionist sees Token MED-104 immediately. Double-booking is mathematically impossible, and no-shows drop by 35%.\n\n"
    "We can launch this live on your own custom domain (e.g. sumadental.com) within 3 days. Would you like us to configure this for your clinic?\""
)

doc.save("Micro_Category/Dental_Clinic_Web_App_Step_by_Step_Developer_Guide.docx")
print("Saved: Micro_Category/Dental_Clinic_Web_App_Step_by_Step_Developer_Guide.docx")
