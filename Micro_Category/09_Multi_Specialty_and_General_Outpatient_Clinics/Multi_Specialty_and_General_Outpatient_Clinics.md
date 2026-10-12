# Frontend Development Specification
## Business 09: Multi-Specialty & General Outpatient Clinics
### Project: Multi-Specialty Polyclinic Management Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Multi-Specialty Polyclinics, Daycare Medical Centers, Outpatient Consultant Clinics, Multispecialty Group Practices, Integrated Family & Diagnostic Healthcare Hubs.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for high-density responsive clinical grids, multi-department schedule filtering, diagnostic package drawers, and real-time waiting room displays.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `globals.css`) utilizing CSS Custom Properties for clinical deep sapphire navy, medical cyan/teal accents, high-visibility emergency crimson, sterile slate backgrounds, and glassmorphic elevated cards.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Tab/Collapse/Offcanvas controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide polyclinic directors, consultant specialists, and clinic operations managers with an enterprise-grade, high-fidelity interactive digital management portal. The platform showcases how modern web software eliminates reception chaos, organizes multi-doctor scheduling across medical disciplines (Cardiology, Gastroenterology, Pulmonology, General Medicine, Neurology, Orthopedics, Pediatrics), provides a **Real-Time Live Receptionist & Patient OPD Waiting Room Token Display** (`POLY-2026-XXXX`), powers an integrated diagnostic lab package booking engine (ECG, 2D Echo, Blood Panels, Ultrasound), and provides a 1-tap **24/7 Casualty & Ambulance Hotline**.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial polyclinic and outpatient center operational bottlenecks into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **Overcrowded Reception & Lobby Waiting Chaos** | Patients arrive simultaneously for multiple consulting doctors with no visibility into queue order or consultation delays. | **Centralized Live OPD Token Queue Board (`/queue`)** with real-time consultation room status (Calling, In-Room, Next), estimated wait timers, and automated WhatsApp queue alert triggers. |
| **Cross-Specialty Booking Friction & Patient Confusion** | Patients are unsure which doctor handles their symptoms (e.g., chest tightness vs heartburn vs asthma) and struggle to find schedules. | **Interactive Multi-Doctor Department Filter & Smart Symptom Matcher** filtering specialists by department (Cardiology, Gastro, Pulmo, General) with instant schedule lookup and chamber numbers. |
| **Lost In-House Pathology & Radiology Test Revenue** | Doctors prescribe diagnostic workups, but patients walk out to third-party labs due to lack of upfront package clarity. | **Integrated Diagnostic Test & Preventive Health Checkup Booking Hub** showcasing test inclusions, preparation instructions (fasting status), transparent pricing, and instant appointment reservation. |
| **Casualty & Emergency Bottlenecks** | Critically ill or trauma patients waste crucial minutes trying to locate clinic phone numbers or reach busy front-desk lines. | **Prominent 24/7 Red Alert Emergency CTA & Rapid Ambulance Hotline** with sticky 1-tap dialer and immediate casualty intake protocols. |
| **Front Desk Reception Burnout & Repetitive Phone Calls** | Receptionists spend 50%+ of their day answering "Is Dr. Rao available today?", "What is my token number?", and "Are lab reports ready?". | **Self-Service Patient Visit Tracker & Digital Token Receipt System** allowing patients to check active doctor shifts, track live queue progress, and access mock visit summaries. |

---

## 3. Design System & Visual Tokens

The user interface must convey utmost clinical authority, multi-specialty expertise, sterile hygienic precision, and calm organizational efficiency. **Avoid garish neon tones or distracting playful animations.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Deep Sapphire Clinical Navy */
  --color-primary-950: #06182c;
  --color-primary-900: #0b2545;
  --color-primary-800: #133e6f;
  --color-primary-700: #1a5699;
  --color-primary-600: #1d4ed8; /* Dominant Brand Blue */
  --color-primary-500: #2563eb;
  --color-primary-200: #bfdbfe;
  --color-primary-100: #dbeafe;
  --color-primary-50:  #eff6ff;

  /* Accent: Medical Cyan & Diagnostic Teal */
  --color-accent-700:  #0e7490;
  --color-accent-600:  #0891b2; /* Clinical Cyan */
  --color-accent-500:  #06b6d4;
  --color-accent-200:  #a5f3fc;
  --color-accent-100:  #cffafe;
  --color-accent-50:   #ecfeff;

  /* Emergency & Rapid Casualty Alert */
  --color-emergency-700: #b91c1c;
  --color-emergency-600: #dc2626; /* High-Visibility Casualty Red */
  --color-emergency-500: #ef4444;
  --color-emergency-100: #fee2e2;
  --color-emergency-50:  #fef2f2;

  /* Surface, Slate & Neutral Scales */
  --color-surface-bg:   #f8fafc; /* Crisp Clinical Grey-White */
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Operational Status Colors */
  --color-status-calling: #16a34a; /* Green: Patient entering chamber */
  --color-status-inroom:  #2563eb; /* Blue: Doctor actively consulting */
  --color-status-next:    #f59e0b; /* Amber: Next in line */
  --color-status-delayed: #dc2626; /* Red: Surgery or emergency delay */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.94);
  --glass-border:       rgba(29, 78, 216, 0.12);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.08);
  --card-shadow:        0 4px 20px -2px rgba(15, 23, 42, 0.05);
  --card-shadow-hover:  0 20px 25px -5px rgba(29, 78, 216, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens */
  --radius-sm:          6px;
  --radius-md:          12px;
  --radius-lg:          20px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Section Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold). Sharp, crisp, and authoritative.
- **Body & Clinical Descriptions:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High legibility with `1.6` line height for elderly and clinical readability.
- **Queue Tokens, Timers & Chamber Codes:** Monospaced tabular numerals (`font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', monospace, sans-serif`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Polyclinic exterior, diagnostic equipment, MRI/Ultrasound, doctor portraits)
│   └── icons/  (Stethoscope, Activity, Heart, Shield, Ambulance, Clock, Calendar, Users, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + Department mega-dropdown + Emergency badge)
│   │   ├── Footer.jsx (Bootstrap row/col grid with department schedules & casualty contacts)
│   │   ├── EmergencyStickyBar.jsx (24/7 Red alert hotline bar)
│   │   ├── WhatsAppFloatButton.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column layout with live OPD status ticker)
│   │   ├── ClinicalMetricsBar.jsx (Animated statistical counters)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional Polyclinic Chaos vs MediCenter Digital Flow)
│   │   ├── DepartmentFilterSection.jsx (Cardio, Gastro, Pulmo, General, Neuro, Ortho tabs)
│   │   ├── DiagnosticPackagesSection.jsx (Comprehensive health checkup & lab panels)
│   │   ├── DoctorRosterSection.jsx (Consultant specialists with chamber numbers & next slots)
│   │   ├── TestimonialsGrid.jsx (Verified patient reviews & family recovery stories)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── MultiSpecialtyBookingModal.jsx (4-Step centralized booking engine)
│   │   ├── Step1DepartmentSelect.jsx (Department grid with icon chips)
│   │   ├── Step2DoctorSelect.jsx (Consultant cards with chamber & experience)
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & real-time capacity)
│   │   ├── Step4PatientForm.jsx (Patient details, UHID/New, chief complaints)
│   │   ├── BookingConfirmationCard.jsx (Token ID generator: POLY-2026-XXXX)
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert receipt)
│   ├── diagnostics/
│   │   ├── DiagnosticBookingModal.jsx (Lab package selector with fasting instructions)
│   │   └── TestDetailOffcanvas.jsx (Bootstrap offcanvas with full test parameter list)
│   ├── queue/
│   │   ├── LiveTokenBoardModal.jsx (Simulated Clinic Lobby TV Waiting Display)
│   │   └── ChamberCard.jsx (Room 1 to 4 status: Calling, In-Room, Next)
│   └── portal/
│       └── PatientHistoryDrawer.jsx (Offcanvas showing mock previous visit records)
├── context/
│   ├── BookingContext.jsx (Manages active department, doctor slots, token queue state)
│   └── DiagnosticContext.jsx (Manages selected lab packages and test appointments)
├── data/
│   ├── mockDepartments.js
│   ├── mockDoctors.js
│   ├── mockDiagnosticPackages.js
│   ├── mockSlots.js
│   ├── mockQueueTokens.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap variable overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Pulse indicators, token alert animations, slide transitions)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Navigation Bar & 24/7 Emergency Header (Sticky)
- **Topmost Emergency Strip:**
  - Background: `var(--color-emergency-600)`. Text: `#ffffff`.
  - Content: `"🚨 24/7 Casualty, Trauma & Rapid Cardiac Care Unit Active • Immediate Ambulance Dispatch: +91 98480 91199"`.
  - Right: Quick click-to-call button with pulsating siren badge.
- **Primary Sticky Navbar:**
  - Glassmorphic translucent surface (`background: rgba(255, 255, 255, 0.94); backdrop-filter: blur(14px)`).
  - **Left Element:** Polyclinic Logo with stylized medical caduceus / cross emblem, Brand Name (**"MediCenter Multi-Specialty Clinics & Diagnostic Center"**), and a green pulsing dot with text `"OPD Open • 12 Doctors on Duty"`.
  - **Center Nav Links:**
    - `Departments` (Mega-menu / quick scroll to Cardio, Gastro, Pulmo, General, Neuro, Ortho)
    - `Our Specialists` (Consultant roster)
    - `Diagnostics & Labs` (Executive checkup packages)
    - `Live OPD Queue` (Opens lobby display simulator `/queue`)
    - `My Appointments` (Check token status)
  - **Right Action Items:**
    - Quick Helpline: `+91 98480 55211`.
    - Primary CTA Button: `"Book OPD Consultation"` with a gradient fill (`var(--color-primary-700)` to `var(--color-primary-600)`) with subtle pulse effect.

---

### 5.2 Section 1: Hero Section (The 10-Second High-Trust Hook)
- **Layout:** Bootstrap 2-Column Responsive Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ Multi-Specialty Polyclinic • Advanced Diagnostics • 24/7 Casualty`.
  - Main Headline:
    > **Integrated Specialist Medical Care Under One Roof.**
  - Subheading:
    > Consult top senior specialists in Cardiology, Gastroenterology, Pulmonology, and General Medicine without chaotic reception lines. Book confirmed OPD tokens, access advanced in-house diagnostics, and track your consultation in real-time.
  - Dual CTAs:
    - Primary Button: `Book Specialist OPD Token` (opens 4-Step Multi-Specialty Booking Engine).
    - Secondary Button: `View Live OPD Waiting Board 📺` (launches Clinic Lobby Queue simulator).
  - Social Proof Strip:
    - Overlapping physician portraits with gold star badges.
    - `⭐ 4.9/5 Rating across 2,450+ verified patient Google reviews`.
    - Trust Badges: `✓ NABH Accredited Facility` | `✓ NABL Accredited Pathology` | `✓ In-House 24/7 Pharmacy`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res crisp visual of modern multi-specialty clinic suites and advanced diagnostic scanning.
    - Floating Badge 1 (Top-Right): `"Current Live Queue: Token #POLY-042 (Room 3 - Dr. K. S. Rao)"` with active green radar dot.
    - Floating Badge 2 (Bottom-Left): `"Avg. OPD Waiting Time: < 12 Minutes Today"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A high-contrast deep sapphire navy horizontal strip built with Bootstrap row/col:
1. `45,000+` Outpatients Consulted Annually
2. `18+` Senior Super-Specialists on Panel
3. `6` Fully Equipped In-House Consultation Chambers & Daycare Suites
4. `< 12 Mins` Average Patient Waiting Time with Digital Tokens

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Polyclinic Chaos vs. MediCenter Digital Flow"
A comparative problem-solver interactive matrix showcasing why polyclinics deploy this platform:

| Traditional Polyclinic Chaos | The MediCenter Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Uncontrolled lobby crowds and patients waiting hours without queue visibility | Centralized live token board on lobby monitors and patient phones | Live OPD Queue Board (`/queue`) |
| Patients struggle to choose between general physicians and super-specialists | Intuitive Department Filter with symptom tagging and doctor profiles | Multi-Doctor Department Filter |
| In-house lab tests lose business as patients walk to outside standalone diagnostic centers | Integrated Diagnostic Package Booking with fasting rules & transparent rates | Diagnostic Package Hub & Offcanvas |
| Critical patients delayed in front-desk registration queues | Sticky 24/7 Emergency & Rapid Ambulance Hotline with priority triage flag | Casualty Action Strip & 1-Tap Dial |
| Overloaded receptionists answering endless phone calls regarding doctor availability | Real-time shift status, chamber numbers, and automated WhatsApp confirmations | Multi-Specialty Slot Engine |

---

### 5.5 Section 4: Multi-Doctor Department Filter & Directory
An interactive multi-department selector allowing users to browse specialists by clinical domain:
- **Department Filter Tabs (Bootstrap Nav-Pills):**
  `All Departments (12)` | `Cardiology` | `Gastroenterology` | `Pulmonology & Chest` | `General Medicine` | `Neurology` | `Orthopedics & Joint Care` | `Pediatrics`
- **6 Core Consultant Doctor Cards (Realistic Dummy Data):**
  1. **Dr. K. Srinivas Rao, MD (Gen Med), DM (Cardiology)** — Senior Interventional Cardiologist (Chamber 1 • 22 yrs exp).
     - *Focus:* Chest pain, Hypertension, Lipid disorders, Angiography counseling, Heart failure.
     - *OPD Timings:* `Mon - Sat: 10:00 AM - 01:30 PM & 05:00 PM - 08:00 PM`.
     - *Status:* `● Consulting Now (Token #POLY-042)`.
  2. **Dr. P. Radhika Sharma, MD, DNB (Gastroenterology)** — Consultant Medical Gastroenterologist & Hepatologist (Chamber 2 • 17 yrs exp).
     - *Focus:* Acid reflux (GERD), Liver disorders, Fatty liver, IBS, Endoscopy evaluations.
     - *OPD Timings:* `Mon - Fri: 11:00 AM - 02:00 PM & 06:00 PM - 08:30 PM`.
     - *Status:* `● Next Slot: 06:15 PM Today`.
  3. **Dr. M. Venkat Raman, MD (Pulmonary Medicine), FCCP** — Senior Pulmonologist & Sleep Apnea Specialist (Chamber 3 • 15 yrs exp).
     - *Focus:* Chronic asthma, Bronchitis, COPD, Post-viral persistent cough, Sleep apnea.
     - *OPD Timings:* `Tue - Sat: 09:30 AM - 01:00 PM & 04:30 PM - 07:00 PM`.
     - *Status:* `● 3 Slots Left This Evening`.
  4. **Dr. S. Ananya Reddy, MD (General Medicine)** — Chief Family Physician & Diabetologist (Chamber 4 • 14 yrs exp).
     - *Focus:* Viral fevers, Type 2 diabetes control, Thyroid management, Preventive adult medicine.
     - *OPD Timings:* `Daily: 08:30 AM - 01:00 PM & 04:30 PM - 08:00 PM`.
     - *Status:* `● Walk-ins & Appointments Welcome`.
  5. **Dr. V. Rajeshwar, MS (Ortho), M.Ch (Joint Replacement)** — Senior Orthopedic & Arthroscopy Surgeon (Chamber 5 • 19 yrs exp).
     - *Focus:* Knee arthritis, Frozen shoulder, Spinal disc herniation, Sports injuries.
     - *OPD Timings:* `Mon, Wed, Fri: 04:00 PM - 07:30 PM`.
     - *Status:* `● Next Available: Tomorrow 04:00 PM`.
  6. **Dr. N. Hemalatha, MD (Pediatrics), DCH** — Senior Pediatrician & Neonatal Care Consultant (Chamber 6 • 12 yrs exp).
     - *Focus:* Newborn milestones, Pediatric infections, Immunization schedule, Growth monitoring.
     - *OPD Timings:* `Mon - Sat: 09:00 AM - 12:30 PM & 05:00 PM - 08:00 PM`.
     - *Status:* `● Active OPD Session`.
- **Card Interactive Features:**
  - Department badge with specific color indicator (e.g., Red for Cardio, Amber for Gastro, Cyan for Pulmo).
  - Medical qualification, council registration number (`APMC-19842`), and chamber room number.
  - Buttons: `"View Profile & Timings"` (opens modal) and `"Book OPD Token"` (pre-selects doctor in booking engine).

---

### 5.6 Section 5: Centralized Multi-Department Slot & Token Booking Engine
A dynamic 4-step progressive modal providing seamless appointment scheduling:
- **Step 1 - Select Clinical Department:**
  - Visual cards with department icons, specialist counts, and next available opening.
- **Step 2 - Select Consulting Specialist:**
  - Displays doctor cards filtered by chosen department, including consultation fee (`₹500 - ₹800`) and chamber room number.
  - Option to select `"First Available Specialist (Fastest Consultation)"`.
- **Step 3 - Date & Shift Picker:**
  - 7-Day Rolling Date Bar (`Today, Tomorrow, Day 3...`).
  - Shift Toggle: `Morning Session (08:30 AM - 01:30 PM)` vs `Evening Session (04:30 PM - 08:30 PM)`.
  - Real-Time Slot Chips:
    - *Available (Green border)*: `10:15 AM`, `11:00 AM`, `05:30 PM`, `06:45 PM`.
    - *Filling Fast (Amber chip)*: `11:30 AM (Last 2 Tokens)`.
    - *Full (Greyed out)*: `06:00 PM`.
- **Step 4 - Patient Information & Triage:**
  - Full Name, WhatsApp Contact Number, Age, Gender.
  - Patient Status Toggle: `New Patient (Generate UHID)` vs `Registered Patient (Enter UHID/Phone)`.
  - Primary Symptoms / Reason for Visit: Multi-tag selector (`Fever/Cough`, `Chest Discomfort`, `Abdominal Pain/Acidity`, `Joint Ache`, `Routine Health Check`).
- **Confirmation Action & Instant Result Screen:**
  - Generates Unique Token ID: `POLY-2026-0892`.
  - Chamber Assignment: `Chamber 1 (Dr. K. Srinivas Rao, MD, DM)`.
  - Reporting Time: `Reporting window: 10:45 AM - 11:00 AM (Estimated wait: 15 mins)`.
  - **Simulated WhatsApp Notification Pop-up:**
    > *"Dear Ramesh, your consultation at MediCenter Polyclinic is confirmed. Token #POLY-0892. Specialist: Dr. K. Srinivas Rao (Cardiology, Chamber 1). Time: Today at 11:00 AM. Live queue tracker link: [medipoly.clinic/track/0892]"*

---

### 5.7 Section 6: Comprehensive In-House Diagnostics & Health Checkup Packages
An interactive storefront for pathology, radiology, and preventive health screenings:
- **Package Category Tabs:**
  `All Health Packages (4)` | `Cardiac Screening` | `Executive Master Health` | `Diabetic Care Panel` | `Senior Citizen Profile`
- **4 Featured Comprehensive Diagnostic Packages:**
  1. **MediCenter Comprehensive Cardiac Wellness Profile:**
     - *Inclusions:* 12-Lead ECG, 2D Echocardiogram, Complete Lipid Profile, Blood Sugar (FBS/PPBS), Serum Creatinine, Doctor Consultation.
     - *Duration & Prep:* 45 mins • 10-12 hours overnight fasting required.
     - *Price:* `₹2,499` (Discounted from `₹4,200`).
     - *Action:* `"Book Test Package"` / `"View Test Inclusions"`.
  2. **Executive Full Body Master Health Checkup:**
     - *Inclusions:* CBC (Complete Blood Count), Liver Function Test (LFT), Kidney Function Test (KFT), Thyroid Profile (T3, T4, TSH), Urine Routine, Chest X-Ray, Abdominal Ultrasound.
     - *Duration & Prep:* 90 mins • 12 hours fasting.
     - *Price:* `₹3,199` (Discounted from `₹5,500`).
     - *Action:* `"Book Test Package"`.
  3. **Advanced Diabetic & Metabolic Care Panel:**
     - *Inclusions:* HbA1c (Glycated Hemoglobin), Fasting Blood Glucose, Urine Microalbumin, Lipid Profile, Diabetic Foot Neuropathy check, Dietician Consultation.
     - *Duration & Prep:* 30 mins • Fasting sample.
     - *Price:* `₹1,499` (Discounted from `₹2,600`).
     - *Action:* `"Book Test Package"`.
  4. **Senior Citizen Vital Health Screening:**
     - *Inclusions:* Bone Mineral Density (BMD), Vitamin D3 & B12, Complete Hemogram, Renal Profile, Serum Electrolytes, Physician Review.
     - *Duration & Prep:* 45 mins • Early morning morning slots preferred.
     - *Price:* `₹2,799` (Discounted from `₹4,800`).
     - *Action:* `"Book Test Package"`.
- **Interactive Features:**
  - Bootstrap Offcanvas drawer listing all 60+ parameters measured in each package.
  - Test Slot Selector: Select date and home sample collection vs clinic walk-in lab.

---

### 5.8 Section 7: Live Centralized OPD Waiting Room & Receptionist Token Board (`/queue`)
A dedicated interactive widget representing what patients see on lobby LCD screens and on their mobile tracker:
- **Top Information Bar:**
  - Current Clinic Time: `11:24 AM`.
  - Active Doctors Consulting: `5 Chambers Active`.
  - Patients Waiting: `14 In Lobby`.
- **4 Chamber Status Live Cards:**
  - **Chamber 1 (Cardiology - Dr. K. Srinivas Rao):**
    - Status: `🟢 CALLING NOW`
    - Token: `#POLY-042 (Mr. S. Venkata Ramana)`
    - Next In Line: `#POLY-043` | `#POLY-044`
    - Chamber Indicator: Green LED pulse.
  - **Chamber 2 (Gastroenterology - Dr. P. Radhika Sharma):**
    - Status: `🔵 CONSULTING IN-ROOM`
    - Token: `#POLY-038 (Mrs. L. Sailaja)`
    - Next In Line: `#POLY-039` | `#POLY-041`
    - Estimated Wait: `~8 mins`.
  - **Chamber 3 (Pulmonology - Dr. M. Venkat Raman):**
    - Status: `🟢 CALLING NOW`
    - Token: `#POLY-029 (Master K. Aryan)`
    - Next In Line: `#POLY-031`
  - **Chamber 4 (General Medicine - Dr. S. Ananya Reddy):**
    - Status: `🔵 CONSULTING IN-ROOM`
    - Token: `#POLY-051 (Mr. T. Mallikarjun)`
    - Next In Line: `#POLY-052` | `#POLY-054`
- **Interactive Simulation Controls (Developer Demo Bar):**
  - Toggle buttons for demo purposes: `"Call Next Token"`, `"Mark Token Completed"`, `"Simulate Urgent Case Delay"`.
  - Plays an optional soft audio bell chime when a new token is called.

---

### 5.9 Section 8: 24/7 Emergency & Casualty Fast-Track Action Hub
A prominent emergency section to give reassurance for acute medical distress:
- **Red Alert Banner:** `"In Case of Acute Chest Pain, Breathlessness, High Trauma, or Sudden Weakness — Do Not Wait in OPD"`.
- **Emergency Features:**
  - 1-Tap Casualty Direct Line: `📞 +91 98480 91199`.
  - Dedicated Casualty Beds & Immediate ECG / Defibrillator Triaging.
  - In-House ACLS Ambulance with Oxygen Support & Trained EMT.
  - Live GPS Map preview indicating shortest emergency route to the polyclinic.

---

### 5.10 Section 9: Patient Medical Records & Past Visit History Drawer
An interactive mock patient portal feature:
- Allows patient to enter their mobile number or UHID (`UHID-2026-9812`).
- Displays past visit records:
  - Date: `12-Jan-2026` • Specialist: `Dr. K. Srinivas Rao (Cardiology)` • Diagnosis: `Essential Hypertension` • Prescription Download PDF button.
  - Date: `18-Feb-2026` • Diagnostic Lab: `Cardiac Health Profile` • Status: `Reports Normal` • Lab Report PDF button.

---

### 5.11 Section 10: Verified Patient Reviews & Polyclinic Accreditations
- **Review Summary:** `4.9 / 5.0 Rating based on 2,450+ verified patient reviews`.
- 4 Detailed Patient Stories highlighting cross-specialty convenience:
  - *"Visited for my father's heart checkup and my son's chronic wheezing on the same morning. We finished both specialist consultations and tests within 1 hour without any queue confusion!"* — S. Narayana, Kadapa.
- Accreditation Bar: NABH Certified Patient Safety, NABL Standardized Laboratory, ISO 9001:2015 Healthcare Quality.

---

### 5.12 Section 11: Comprehensive Polyclinic FAQs Accordion
Interactive Bootstrap accordion answering common patient inquiries:
1. *How does the digital OPD token system work for walk-in vs pre-booked patients?*
2. *Can I consult multiple specialists (e.g., Diabetologist and Cardiologist) on the same day?*
3. *What preparation or fasting is required for diagnostic blood tests and ultrasounds?*
4. *Are emergency casualty services available after regular OPD hours?*
5. *How do I receive my diagnostic laboratory test reports?*
6. *Does the polyclinic accept cashless insurance or government healthcare cards?*

---

### 5.13 Section 12: Footer with Department Timings & Clinic Directory
- Complete multi-specialty OPD schedule matrix (Morning shift: `08:30 AM - 01:30 PM` | Evening shift: `04:30 PM - 08:30 PM` | Casualty: `24 Hours Open`).
- Direct Emergency Contact, WhatsApp Support, In-House Pharmacy extension.
- Full Clinic Address with Google Maps embedded pin and directions link.
- Developer Prototype Notice: Fictional demonstration portal built with modern web technologies.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockDepartments.js`
```javascript
export const mockDepartments = [
  {
    id: "dept-cardio",
    name: "Cardiology",
    code: "CARD",
    icon: "Heart",
    color: "#dc2626",
    doctorCount: 3,
    description: "Comprehensive heart care, preventive cardiology, ECG, Echo, and hypertension management.",
    leadDoctor: "Dr. K. Srinivas Rao, MD, DM",
    activeChamber: "Chamber 1"
  },
  {
    id: "dept-gastro",
    name: "Gastroenterology",
    code: "GAST",
    icon: "Activity",
    color: "#d97706",
    doctorCount: 2,
    description: "Diagnosis and care for acidity, GERD, liver disorders, fatty liver, and digestive health.",
    leadDoctor: "Dr. P. Radhika Sharma, MD, DNB",
    activeChamber: "Chamber 2"
  },
  {
    id: "dept-pulmo",
    name: "Pulmonology & Chest",
    code: "PULM",
    icon: "Wind",
    color: "#0891b2",
    doctorCount: 2,
    description: "Advanced respiratory care, chronic asthma, post-viral cough, COPD, and allergy treatment.",
    leadDoctor: "Dr. M. Venkat Raman, MD, FCCP",
    activeChamber: "Chamber 3"
  },
  {
    id: "dept-genmed",
    name: "General Medicine",
    code: "GMED",
    icon: "Stethoscope",
    color: "#16a34a",
    doctorCount: 4,
    description: "Primary physician care, fevers, infectious diseases, diabetes control, and routine screening.",
    leadDoctor: "Dr. S. Ananya Reddy, MD",
    activeChamber: "Chamber 4"
  },
  {
    id: "dept-ortho",
    name: "Orthopedics & Joint Care",
    code: "ORTH",
    icon: "Shield",
    color: "#7c3aed",
    doctorCount: 2,
    description: "Knee arthritis, joint pain relief, spine care, fracture management, and sports trauma.",
    leadDoctor: "Dr. V. Rajeshwar, MS, M.Ch",
    activeChamber: "Chamber 5"
  },
  {
    id: "dept-pedia",
    name: "Pediatrics & Child Care",
    code: "PEDI",
    icon: "Users",
    color: "#ea580c",
    doctorCount: 2,
    description: "Child wellness, newborn development, baby immunizations, and pediatric viral fevers.",
    leadDoctor: "Dr. N. Hemalatha, MD, DCH",
    activeChamber: "Chamber 6"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-cardio-1",
    name: "Dr. K. Srinivas Rao, MD, DM",
    departmentId: "dept-cardio",
    departmentName: "Cardiology",
    title: "Senior Interventional Cardiologist",
    experienceYears: 22,
    education: "MD (Gen Med), DM (Cardiology - NIMS)",
    rating: 4.95,
    reviewCount: 680,
    avatar: "/assets/images/doctors/dr-srinivas-rao.jpg",
    chamber: "Chamber 1",
    consultationFee: 700,
    opdDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    morningTimings: "10:00 AM - 01:30 PM",
    eveningTimings: "05:00 PM - 08:00 PM",
    currentStatus: "Calling Now",
    currentToken: "POLY-042"
  },
  {
    id: "doc-gastro-1",
    name: "Dr. P. Radhika Sharma, MD, DNB",
    departmentId: "dept-gastro",
    departmentName: "Gastroenterology",
    title: "Consultant Medical Gastroenterologist",
    experienceYears: 17,
    education: "MD, DNB (Gastroenterology - Asian Institute)",
    rating: 4.91,
    reviewCount: 490,
    avatar: "/assets/images/doctors/dr-radhika-sharma.jpg",
    chamber: "Chamber 2",
    consultationFee: 650,
    opdDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    morningTimings: "11:00 AM - 02:00 PM",
    eveningTimings: "06:00 PM - 08:30 PM",
    currentStatus: "Consulting",
    currentToken: "POLY-038"
  },
  {
    id: "doc-pulmo-1",
    name: "Dr. M. Venkat Raman, MD, FCCP",
    departmentId: "dept-pulmo",
    departmentName: "Pulmonology & Chest",
    title: "Senior Pulmonologist & Sleep Specialist",
    experienceYears: 15,
    education: "MD (Pulmonary Medicine), Fellowship in Sleep Medicine",
    rating: 4.93,
    reviewCount: 410,
    avatar: "/assets/images/doctors/dr-venkat-raman.jpg",
    chamber: "Chamber 3",
    consultationFee: 600,
    opdDays: ["Tue", "Wed", "Thu", "Fri", "Sat"],
    morningTimings: "09:30 AM - 01:00 PM",
    eveningTimings: "04:30 PM - 07:00 PM",
    currentStatus: "Calling Now",
    currentToken: "POLY-029"
  },
  {
    id: "doc-genmed-1",
    name: "Dr. S. Ananya Reddy, MD",
    departmentId: "dept-genmed",
    departmentName: "General Medicine",
    title: "Chief Family Physician & Diabetologist",
    experienceYears: 14,
    education: "MD (General Medicine - Osmania Medical College)",
    rating: 4.89,
    reviewCount: 520,
    avatar: "/assets/images/doctors/dr-ananya-reddy.jpg",
    chamber: "Chamber 4",
    consultationFee: 500,
    opdDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    morningTimings: "08:30 AM - 01:00 PM",
    eveningTimings: "04:30 PM - 08:00 PM",
    currentStatus: "Consulting",
    currentToken: "POLY-051"
  }
];
```

### 6.3 `mockDiagnosticPackages.js`
```javascript
export const mockDiagnosticPackages = [
  {
    id: "pkg-cardiac",
    name: "Comprehensive Cardiac Health Profile",
    category: "Cardiac Screening",
    price: 2499,
    originalPrice: 4200,
    discountPercent: 40,
    fastingRequired: "10-12 Hours Overnight Fasting",
    turnaroundTime: "Same Day Evening",
    inclusionsCount: 18,
    keyTests: [
      "12-Lead Resting ECG",
      "2D Echocardiography with Color Doppler",
      "Lipid Profile (Cholesterol, HDL, LDL, VLDL, Triglycerides)",
      "Blood Glucose (FBS & PPBS)",
      "Serum Creatinine & Blood Urea",
      "Senior Cardiologist Consultation & Report Review"
    ],
    badge: "Most Recommended",
    icon: "Heart"
  },
  {
    id: "pkg-fullbody",
    name: "Executive Full Body Master Health Checkup",
    category: "Executive Master Health",
    price: 3199,
    originalPrice: 5500,
    discountPercent: 42,
    fastingRequired: "12 Hours Overnight Fasting",
    turnaroundTime: "Within 24 Hours",
    inclusionsCount: 64,
    keyTests: [
      "Complete Hemogram / CBC (24 Parameters)",
      "Liver Function Test (Bilirubin, SGOT, SGPT, Alkaline)",
      "Kidney Function Test (Urea, Creatinine, Uric Acid)",
      "Thyroid Profile (T3, T4, TSH Ultra)",
      "Complete Urine Analysis",
      "Chest X-Ray (Digital PA View)",
      "Abdomen & Pelvis Ultrasound Scan"
    ],
    badge: "Comprehensive",
    icon: "Activity"
  },
  {
    id: "pkg-diabetes",
    name: "Advanced Diabetic & Metabolic Care Panel",
    category: "Diabetic Care Panel",
    price: 1499,
    originalPrice: 2600,
    discountPercent: 42,
    fastingRequired: "Fasting & 2-Hour Post Meal",
    turnaroundTime: "Within 6 Hours",
    inclusionsCount: 22,
    keyTests: [
      "HbA1c (Glycated Hemoglobin 3-Month Average)",
      "Fasting Blood Sugar (FBS)",
      "Post-Prandial Blood Sugar (PPBS)",
      "Urine Microalbumin/Creatinine Ratio",
      "Lipid Screen",
      "Diabetic Foot Neuropathy Examination"
    ],
    badge: "Chronic Care",
    icon: "Shield"
  }
];
```

### 6.4 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Session
  { id: "slot-m1", time: "09:30 AM", shift: "morning", capacity: 4, booked: 4, available: false },
  { id: "slot-m2", time: "10:15 AM", shift: "morning", capacity: 4, booked: 2, available: true, fewLeft: false },
  { id: "slot-m3", time: "11:00 AM", shift: "morning", capacity: 4, booked: 3, available: true, fewLeft: true },
  { id: "slot-m4", time: "11:45 AM", shift: "morning", capacity: 4, booked: 1, available: true, fewLeft: false },
  { id: "slot-m5", time: "12:30 PM", shift: "morning", capacity: 4, booked: 4, available: false },

  // Evening Session
  { id: "slot-e1", time: "05:00 PM", shift: "evening", capacity: 4, booked: 2, available: true, fewLeft: false },
  { id: "slot-e2", time: "05:45 PM", shift: "evening", capacity: 4, booked: 4, available: false },
  { id: "slot-e3", time: "06:30 PM", shift: "evening", capacity: 4, booked: 3, available: true, fewLeft: true },
  { id: "slot-e4", time: "07:15 PM", shift: "evening", capacity: 4, booked: 1, available: true, fewLeft: false },
  { id: "slot-e5", time: "08:00 PM", shift: "evening", capacity: 4, booked: 0, available: true, fewLeft: false }
];
```

### 6.5 `mockQueueTokens.js`
```javascript
export const mockQueueTokens = [
  {
    tokenNumber: "POLY-042",
    chamber: "Chamber 1",
    department: "Cardiology",
    doctorName: "Dr. K. Srinivas Rao",
    patientName: "S. Venkata Ramana",
    status: "Calling",
    appointmentTime: "11:15 AM",
    elapsedMinutes: 4
  },
  {
    tokenNumber: "POLY-038",
    chamber: "Chamber 2",
    department: "Gastroenterology",
    doctorName: "Dr. P. Radhika Sharma",
    patientName: "Mrs. L. Sailaja",
    status: "In-Room",
    appointmentTime: "11:00 AM",
    elapsedMinutes: 12
  },
  {
    tokenNumber: "POLY-029",
    chamber: "Chamber 3",
    department: "Pulmonology",
    doctorName: "Dr. M. Venkat Raman",
    patientName: "Master K. Aryan",
    status: "Calling",
    appointmentTime: "11:20 AM",
    elapsedMinutes: 2
  },
  {
    tokenNumber: "POLY-051",
    chamber: "Chamber 4",
    department: "General Medicine",
    doctorName: "Dr. S. Ananya Reddy",
    patientName: "T. Mallikarjun",
    status: "In-Room",
    appointmentTime: "11:10 AM",
    elapsedMinutes: 9
  }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Active Chamber LED Pulse Indicator:**
   - Real-time pulse animation for chambers currently calling a patient:
   ```css
   @keyframes chamberPulse {
     0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.6); }
     70% { box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
     100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
   }
   .indicator-calling {
     animation: chamberPulse 1.8s infinite;
   }
   ```
2. **Staggered Department & Specialist Card Entrance:**
   - On selecting department filters, smoothly transition cards using CSS fade & translate (`opacity: 0, translateY: 15px` transitioning to `opacity: 1, translateY: 0` in `0.25s`).
3. **Interactive Slot Button Micro-Feedback:**
   - On slot click, scale slightly (`scale: 1.04`), apply dark sapphire border (`var(--color-primary-700)`), and render a confirmation checkmark badge.
4. **Modal Entrance & Backdrop Blur:**
   - Bootstrap modals must have `backdrop-filter: blur(10px); background: rgba(15, 23, 42, 0.5)`. Modals animate in with subtle spring scaling (`0.96` to `1.0`).
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification sound/vibration effect 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 75% of outpatient bookings and queue status inquiries originate from smartphones:
- **Sticky Bottom Emergency & Quick Booking Bar:**
  When scrolled past the hero, display a persistent mobile bottom navigation bar:
  - Red Casualty Call Button (`🚨 24/7 Casualty Call`)
  - Full-width Blue CTA Button (`⚡ Book OPD Token - Today Open`)
- **Horizontal Swipeable Department Chips:**
  Department filter pills and date selection buttons must be horizontally scrollable on mobile with smooth swipe snapping (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and department selector cards must have a minimum touch area of `48px x 48px`.
- **Responsive Live Queue Display:**
  The TV Queue modal/page must automatically adapt from a 4-column desktop grid to an easy-to-read stacked card layout on mobile screens with high-contrast text.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for deep sapphire navy, clinical cyan, emergency red, and clean sterile slate in `globals.css`.
- [ ] Implement Top Emergency Alert Strip and Sticky Glassmorphic Navbar with working smooth scroll.
- [ ] Build Hero Section with dual CTAs, live queue status teaser, and metrics counter using Bootstrap grid.
- [ ] Build Multi-Doctor Department Filter (Cardio, Gastro, Pulmo, General, Neuro, Ortho) with instant specialist roster filtering.
- [ ] Build Centralized 4-Step Multi-Specialty Booking Engine (Department $\rightarrow$ Doctor $\rightarrow$ Shift/Slot $\rightarrow$ Patient Details) with token generator (`POLY-2026-XXXX`).
- [ ] Implement Simulated Incoming WhatsApp Confirmation Alert banner with patient name, token number, doctor, chamber, and live queue link.
- [ ] Build Diagnostic Test Packages Section with offcanvas test parameter inspector and package booking trigger.
- [ ] Build Centralized Live OPD Waiting Room & Receptionist Token Board (`/queue`) with chamber status indicators and demo controls ("Call Next Token").
- [ ] Build 24/7 Casualty & Rapid Ambulance Action Section with 1-tap dialer and immediate triage instructions.
- [ ] Build Patient Past Visit History Drawer (`UHID` mock record lookup).
- [ ] Implement Polyclinic FAQ Accordion using Bootstrap Accordion and Footer with comprehensive department timings and Google Maps link.
- [ ] Validate responsive layouts on Mobile (375px), Tablet (768px), and Desktop (1280px+).
