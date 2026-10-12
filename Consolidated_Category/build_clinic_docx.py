import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx_helpers import (
    set_cell_background, set_cell_margins, add_header_banner,
    add_styled_heading, add_callout, add_styled_table, add_code_box, add_bullet
)

doc = docx.Document()

# Set standard 1-inch margins
for section in doc.sections:
    section.top_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.right_margin = Inches(1)

# Header Banner
add_header_banner(
    doc,
    title="HEALTHCARE & CLINIC WEB APPLICATION",
    subtitle="Developer Blueprint: Frontend UI, Backend API, Appointment Booking Engine & Dummy Data",
    target_info="Target Leads: Dental Clinics, Dermatology, ENT, Pediatrics & Multi-Specialty Clinics | 200 Leads Pipeline"
)

add_callout(
    doc,
    title="DEMO PROTOTYPE DIRECTIVE",
    text="This specification is for building a clean, responsive web application for client demonstration. It must look and behave like a real production SaaS platform using realistic dummy data. No external database setup or live third-party accounts are needed for the initial demo."
)

# 1. Executive Summary & Purpose
add_styled_heading(doc, "1. Executive Summary & Demo Objective", level=1)
p = doc.add_paragraph()
p.add_run(
    "Local doctors and dental clinic owners in Andhra Pradesh (Kadapa, Vijayawada, Bhimavaram, etc.) face two primary business challenges: "
    "(1) High appointment no-show rates (up to 35%) because booking is done over chaotic phone calls, and "
    "(2) Losing tech-savvy patients searching for treatments online on Google or Practo. "
    "Your objective is to build a high-converting web application that demonstrates how the doctor can offer 24/7 online slot booking, "
    "automated WhatsApp confirmation, and a clean front-desk token queue."
)

# 2. Frontend Architecture & UI Breakdown
add_styled_heading(doc, "2. Frontend Architecture & Page-by-Page UI Breakdown", level=1)
p2 = doc.add_paragraph()
p2.add_run("The frontend must be fully responsive (optimized for mobile screens where 85% of bookings happen) and consist of 3 primary views:")

add_styled_heading(doc, "2.1 Page 1: Clinic Public Showcase (Homepage '/')", level=2)
add_bullet(doc, "Hero Section", "Doctor photo, full qualifications (e.g. 'Dr. P. Suma Latha, MDS - Chief Dental Surgeon & Implantologist'), 12+ years experience badge, Google Review Rating widget (4.9 ★ based on 340+ reviews), and primary CTA button ['Book Consultation'].")
add_bullet(doc, "Treatment & Services Grid", "Card-based catalog showcasing 5 core treatments (e.g., Single-Sitting RCT, Digital Teeth Whitening, Titanium Dental Implants, Clear Aligners, General Checkup). Each card shows treatment duration ('30-45 mins'), starting fee in INR ('From ₹400'), brief benefit summary, and a direct ['Book This Service'] button.")
add_bullet(doc, "Doctor Bio & Clinic Tour", "2-column layout with doctor's clinical background, registration number (e.g. AP State Dental Council #14892), and a 3-photo carousel of the clinic sterilization room, operatory chair, and reception.")
add_bullet(doc, "Location & Operating Hours", "Clinic timings (Morning: 09:30 AM - 01:30 PM | Evening: 05:00 PM - 09:00 PM), complete physical address, and an embedded Google Map with a high-visibility ['Get Driving Directions'] button linking to GPS coordinates.")

add_styled_heading(doc, "2.2 Page 2: 4-Step Interactive Booking Wizard ('/book')", level=2)
p_wiz = doc.add_paragraph()
p_wiz.add_run("The booking wizard must be frictionless. Implement a step progress bar (Step 1 of 4):")

wizard_steps = [
    ["Step 1: Select Service", "Radio cards showing service name, duration, and consultation fee in ₹. User selects one service (e.g. 'Single Sitting RCT - ₹2,800')."],
    ["Step 2: Choose Doctor", "If multi-specialty, choose practitioner; default selects the primary doctor with photo, title, and experience badge."],
    ["Step 3: Select Date & Time Slot", "Interactive horizontal date picker (next 7 days). Clicking a date dynamically renders available Morning Slots (09:30 AM - 01:00 PM) and Evening Slots (05:00 PM - 08:30 PM). Booked slots must be visually grayed out and unclickable."],
    ["Step 4: Patient Details Form", "Clean input fields: Patient Full Name, Mobile Number (+91), Age, Gender (Male/Female/Other), Existing Patient? (Yes/No toggle), and Chief Complaint / Symptoms text box."],
    ["Step 5: Instant Token Confirmation", "Success screen displaying generated Token Number (e.g., 'MED-2041'), booking summary, clinic location reminder, and a prominent green ['Send Confirmation via WhatsApp'] button."]
]
add_styled_table(doc, ["Wizard Step", "UI Components & Interactive Behavior"], wizard_steps, [2.2, 4.3])

add_styled_heading(doc, "2.3 Page 3: Doctor & Staff Front-Desk Queue ('/admin')", level=2)
p_adm = doc.add_paragraph()
p_adm.add_run("This screen proves to the clinic owner how easy their daily operations become:")
add_bullet(doc, "Top KPI Counter Cards", "4 summary cards across the top: Total Appointments Today (18), Currently Waiting (5), Completed (10), No-Shows / Cancelled (3).")
add_bullet(doc, "Live Token Queue Table", "Columns: Token #, Patient Name, Phone, Service Booked, Scheduled Time, Status Pill ('Scheduled' [Blue], 'In-Consultation' [Amber], 'Completed' [Green], 'Cancelled' [Red]).")
add_bullet(doc, "Interactive Action Buttons", "Each row has 1-click status actions: ['Call In'] updates status to In-Consultation; ['Complete'] updates to Completed; ['WhatsApp Reminder'] triggers an SMS/WhatsApp alert.")

# 3. Backend Requirements & API Specification
add_styled_heading(doc, "3. Backend Architecture & Mock API Specification", level=1)
p_be = doc.add_paragraph()
p_be.add_run(
    "For the demo application, you do NOT need a complex cloud server. You can implement these endpoints using Next.js App Router API Routes (`/app/api/...`), "
    "a lightweight Express.js server, or an in-memory mock service worker with localStorage persistence. "
    "Here is the exact API contract to implement:"
)

api_endpoints = [
    ["GET", "/api/clinic/info", "Returns clinic profile, doctor credentials, timings, and contact info."],
    ["GET", "/api/clinic/services", "Returns array of treatment services with pricing and durations."],
    ["GET", "/api/clinic/slots?date=YYYY-MM-DD", "Returns list of all slots for that date with boolean isAvailable flag."],
    ["POST", "/api/clinic/appointments", "Payload: { serviceId, doctorId, date, slot, patientName, phone, age, gender, notes }. Validates slot, saves to array, generates token (e.g. MED-8412), returns confirmation payload."],
    ["GET", "/api/clinic/admin/appointments", "Returns list of today's appointments for the staff dashboard queue."],
    ["PATCH", "/api/clinic/admin/appointments/:id", "Payload: { status: 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' }. Updates appointment state in real-time."]
]
add_styled_table(doc, ["Method", "Endpoint Route", "Purpose & Behavior"], api_endpoints, [1.0, 2.5, 3.0])

add_styled_heading(doc, "3.1 Slot Availability Logic for Demo", level=2)
p_slot = doc.add_paragraph()
p_slot.add_run(
    "To make the demo realistic, seed the application with 3-4 pre-booked appointments for today's date. "
    "When a user picks a slot (e.g., 10:30 AM) and completes the booking, that slot must immediately become disabled in the UI for that date. "
    "This visually proves to the doctor that double-booking is impossible."
)

# 4. WhatsApp Notification Engine
add_styled_heading(doc, "4. WhatsApp Booking Notification Engine", level=1)
p_wa = doc.add_paragraph()
p_wa.add_run(
    "In India, WhatsApp is the most effective conversion channel. On the booking confirmation screen, the ['Send Confirmation to WhatsApp'] button "
    "must generate a pre-formatted message and open `https://wa.me/+91...`:"
)

wa_code = """// utils/whatsappBooking.ts
export function generateWhatsAppBookingUrl(
  clinicPhone: string,
  clinicName: string,
  tokenNumber: string,
  patientName: string,
  serviceName: string,
  appointmentDate: string,
  slotTime: string
): string {
  const message = 
`🏥 *APPOINTMENT CONFIRMATION - ${clinicName.toUpperCase()}*
──────────────────────────
🎟️ *Token Number*: *${tokenNumber}*
👤 *Patient Name*: ${patientName}
🩺 *Service*: ${serviceName}
📅 *Date*: ${appointmentDate}
⏰ *Time Slot*: ${slotTime}
📍 *Address*: Main Road, Near Benz Circle
──────────────────────────
Please arrive 10 minutes prior to your scheduled time.
Reply 'YES' to confirm or call ${clinicPhone} for assistance.`;

  const cleanPhone = clinicPhone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}"""
add_code_box(doc, wa_code, "TypeScript: WhatsApp Booking URL Formatter")

# 5. Database Schema & Data Models
add_styled_heading(doc, "5. Relational Database Schema (SQL DDL)", level=1)
p_sql = doc.add_paragraph()
p_sql.add_run("Use this relational schema when setting up SQLite, PostgreSQL, or TypeScript interfaces:")

sql_code = """-- Clinics Profile
CREATE TABLE clinics (
    clinic_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    doctor_name TEXT NOT NULL,
    qualification TEXT NOT NULL,
    specialization TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    address TEXT NOT NULL,
    google_rating REAL DEFAULT 4.9
);

-- Services / Treatments
CREATE TABLE services (
    service_id TEXT PRIMARY KEY,
    clinic_id TEXT REFERENCES clinics(clinic_id),
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    duration_mins INTEGER DEFAULT 30,
    price_inr REAL NOT NULL,
    description TEXT
);

-- Appointments Queue
CREATE TABLE appointments (
    appointment_id TEXT PRIMARY KEY,
    token_number TEXT UNIQUE NOT NULL,
    service_id TEXT REFERENCES services(service_id),
    patient_name TEXT NOT NULL,
    patient_phone TEXT NOT NULL,
    patient_age INTEGER,
    patient_gender TEXT,
    appointment_date TEXT NOT NULL, -- YYYY-MM-DD
    slot_time TEXT NOT NULL,         -- e.g. '10:30 AM'
    status TEXT DEFAULT 'SCHEDULED', -- 'SCHEDULED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"""
add_code_box(doc, sql_code, "SQL Schema for Clinic App")

# 6. Complete Dummy Data Fixture
add_styled_heading(doc, "6. Ready-to-Use Dummy Data Fixture (JSON)", level=1)
p_fix = doc.add_paragraph()
p_fix.add_run("Copy this exact JSON into `src/data/clinic-mock.json` to immediately populate the application:")

json_fixture = """{
  "clinic": {
    "name": "Suma Dental Specialities & Implant Centre",
    "doctor": "Dr. P. Suma Latha, MDS",
    "designation": "Chief Dental Surgeon & Implantologist",
    "experience": "14+ Years Clinical Experience",
    "reg_number": "APDC/2012/04812",
    "phone": "+91 866 2434510",
    "email": "sumadental.vja@gmail.com",
    "address": "40-1-52, MG Road, Near Benz Circle, Vijayawada - 520010",
    "rating": 4.9,
    "review_count": 348,
    "timings": {
      "morning": "09:30 AM - 01:30 PM",
      "evening": "05:00 PM - 09:00 PM",
      "days": "Monday - Saturday (Sunday Emergency Only)"
    }
  },
  "services": [
    {
      "id": "srv-01",
      "name": "Digital Smile Designing & Laser Teeth Whitening",
      "category": "Cosmetic Dentistry",
      "duration": "45 mins",
      "price": 3500,
      "description": "Non-invasive laser whitening brightening teeth up to 6 shades in a single comfortable session."
    },
    {
      "id": "srv-02",
      "name": "Single Sitting Rotary Root Canal (RCT)",
      "category": "Endodontics",
      "duration": "60 mins",
      "price": 2800,
      "description": "Advanced painless root canal using computer-guided rotary instruments and digital apex locators."
    },
    {
      "id": "srv-03",
      "name": "Titanium Dental Implant & Zirconia Crown",
      "category": "Implantology",
      "duration": "60 mins",
      "price": 18000,
      "description": "Permanent tooth replacement with European titanium post and natural-looking translucent crown."
    },
    {
      "id": "srv-04",
      "name": "Invisible Clear Aligners (No Wire Braces)",
      "category": "Orthodontics",
      "duration": "30 mins",
      "price": 45000,
      "description": "Custom 3D transparent trays to straighten crowded teeth discretely without unsightly metal brackets."
    },
    {
      "id": "srv-05",
      "name": "Comprehensive Oral Health & Digital X-Ray Checkup",
      "category": "General Dentistry",
      "duration": "20 mins",
      "price": 400,
      "description": "Full mouth examination, ultrasonic plaque screening, intraoral camera checkup, and digital diagnosis."
    }
  ],
  "mock_slots": [
    "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM"
  ],
  "initial_queue": [
    {
      "token": "MED-101",
      "patient_name": "Srinivasa Rao K.",
      "phone": "+91 98480 34202",
      "service": "Comprehensive Oral Health Checkup",
      "slot": "09:30 AM",
      "status": "COMPLETED"
    },
    {
      "token": "MED-102",
      "patient_name": "Lakshmi Prasanna",
      "phone": "+91 94401 23101",
      "service": "Single Sitting Rotary Root Canal (RCT)",
      "slot": "10:00 AM",
      "status": "IN_PROGRESS"
    },
    {
      "token": "MED-103",
      "patient_name": "Kiran Kumar Varma",
      "phone": "+91 8816 224110",
      "service": "Laser Teeth Whitening",
      "slot": "10:30 AM",
      "status": "SCHEDULED"
    }
  ]
}"""
add_code_box(doc, json_fixture, "JSON Data Fixture: clinic-mock.json")

# 7. Recommended Tech Stack & Folder Structure
add_styled_heading(doc, "7. Recommended Tech Stack & Folder Structure", level=1)
p_stk = doc.add_paragraph()
p_stk.add_run(
    "• Framework: Next.js 14+ (App Router) OR Vite + React 18+\n"
    "• Styling: TailwindCSS (Slate + Medical Teal theme: `#0F766E` / `#0D9488`)\n"
    "• Icons: Lucide React (Calendar, Clock, ShieldCheck, Phone, MapPin, User, ChevronRight)\n"
    "• State Management: React Context or Zustand with localStorage persistence."
)

dir_tree = """clinic-demo/
├── src/
│   ├── app/ (or pages/)
│   │   ├── page.tsx               # Homepage with Hero, Bio, Services, Map
│   │   ├── book/page.tsx          # 4-Step Booking Wizard
│   │   └── admin/page.tsx         # Doctor Front-Desk Token Queue
│   ├── components/
│   │   ├── Navbar.tsx             # Brand header with phone & ['Book Now'] button
│   │   ├── ServiceCard.tsx        # Treatment card with duration and price badge
│   │   ├── SlotPicker.tsx         # Date & slot selector with disabled booked slots
│   │   └── AdminQueueTable.tsx    # Live token queue with status toggle buttons
│   ├── data/
│   │   └── clinic-mock.json       # The dummy data fixture provided above
│   └── utils/
│       └── whatsappBooking.ts     # Pre-filled WhatsApp message formatter"""
add_code_box(doc, dir_tree, "Clean Repository Structure")

# 8. Step-by-Step Developer Implementation Roadmap
add_styled_heading(doc, "8. Step-by-Step Developer Implementation Roadmap", level=1)
steps = [
    ["Day 1: Setup & Public Homepage", "Initialize project with Tailwind. Build Hero section, doctor bio card, 5 service cards with prices, and clinic hours."],
    ["Day 2: 4-Step Booking Wizard", "Build `/book` with date picker and slot grid. Connect mock slots so booked slots are disabled. Add form validation for name and mobile number."],
    ["Day 3: Token Confirmation & WhatsApp", "Generate Token ID upon submit. Implement WhatsApp deep link button. Test that clicking opens WhatsApp with formatted message."],
    ["Day 4: Doctor Front-Desk Dashboard", "Build `/admin` token board. Display metric counters. Implement 1-click status toggles ('Call In', 'Completed')."],
    ["Day 5: Mobile Testing & Polish", "Test on iPhone and Android mobile viewport (375px). Ensure inputs are thumb-friendly and typography is crisp."]
]
add_styled_table(doc, ["Milestone", "Actionable Deliverables"], steps, [2.0, 4.5])

# 9. Client Demo Pitch Script
add_styled_heading(doc, "9. How to Demonstrate This App to a Doctor / Dentist", level=1)
p_pitch = doc.add_paragraph()
p_pitch.add_run(
    "When presenting to Dr. Suma Latha or any clinic owner from our leads list, follow this 3-minute demonstration flow:\n"
    "1. Open the homepage on your smartphone: 'Doctor, here is your customized web portal showcasing your MDS credentials, patient reviews, and dental procedures.'\n"
    "2. Tap 'Book Appointment': 'Imagine a patient in Vijayawada searching for teeth cleaning at 10 PM. They select Root Canal, pick tomorrow 10:30 AM, enter their mobile number, and submit.'\n"
    "3. Show the instant token screen: 'They receive Token MED-104 immediately, and tap this green button to send the appointment to your clinic WhatsApp.'\n"
    "4. Switch to `/admin`: 'At your clinic reception, your assistant sees the token pop up instantly. When the patient arrives, your receptionist taps Call In and Complete. No double-bookings, no phone confusion, and zero no-shows.'"
)

doc.save("Healthcare_and_Clinic_Web_App_Developer_Guide.docx")
print("Saved: Healthcare_and_Clinic_Web_App_Developer_Guide.docx")
