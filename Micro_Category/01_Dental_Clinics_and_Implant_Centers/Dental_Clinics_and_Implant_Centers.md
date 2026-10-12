# Frontend Development Specification
## Business 01: Dental Clinics & Implant Centers
### Project: Modern Patient Experience & Dental Practice Marketing Web App

---

## 1. Executive Technical Overview

- **Target Business Model:** Multi-chair Dental Clinics, Implantology Centers, Orthodontic Practices, and Cosmetic Dentistry Studios.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for grid layout, responsive containers, and modular utilities.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework combined with a dedicated custom CSS Design System (`variables.css` / `style.css`) using CSS Custom Properties for medical glassmorphism, brand teals, and champagne accents.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide potential dental clinic clients with a high-fidelity, interactive, and visually stunning digital experience that demonstrates how modern web technology resolves patient hesitation, automates appointment bookings, eliminates reception friction, and positions their clinic as a premium dental destination.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial clinic pain-points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Drop-off on High-Value Treatments** (Implants, Aligners, Veneers) | Fear of pain, lack of transparent pricing, and opaque procedure stages. | **Interactive Treatment Drawer with 3-Stage Visual Pipeline**, transparent "Starting from" pricing badge, and **Before/After Smile Transformation Slider**. |
| **Chair Vacancy & High No-Shows** | Friction in booking over phone calls; patients forget appointment dates. | **2-Step Morning/Evening Time-Slot Picker** with real-time seat counter and an **Instant Simulated WhatsApp Confirmation Modal**. |
| **Receptionist Phone Overload** | Staff spends 40% of their workday answering basic questions ("Is doctor available? What is the token?"). | **Real-Time Doctor Availability Indicator** and **Simulated OPD Live Token Queue Display**. |
| **Patient Indecision & Low Conversion** | First-time visitors do not know which treatment they need. | **60-Second Interactive Smile Self-Assessment Quiz** that diagnoses symptoms and routes directly to the correct specialist. |

---

## 3. Design System & Visual Tokens

The frontend must convey clinical cleanliness, high-tech surgical precision, and calming patient comfort. **Do not use generic blue or raw primary colors.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Deep Medical Teal / Ocean Cyan */
  --color-primary-900: #042f2e;
  --color-primary-800: #115e59;
  --color-primary-700: #0f766e;
  --color-primary-600: #0d9488; /* Main Brand Color */
  --color-primary-500: #14b8a6;
  --color-primary-100: #ccfbf1;
  --color-primary-50:  #f0fdfa;

  /* Accent: Warm Champagne Gold (for Implants, Aligners, VIP Dental Care) */
  --color-accent-600:  #d97706;
  --color-accent-500:  #f59e0b;
  --color-accent-100:  #fef3c7;

  /* Neutral Surface & Typography */
  --color-surface-bg:   #fafcfc;
  --color-surface-card: #ffffff;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Functional Status Colors */
  --color-success:      #10b981; /* Confirmed slot */
  --color-warning:      #f59e0b; /* Few slots remaining */
  --color-danger:       #ef4444; /* Emergency root canal hotline */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.88);
  --glass-border:       rgba(13, 148, 136, 0.14);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.08);
  --shadow-card-hover:  0 20px 25px -5px rgba(13, 148, 136, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05);

  /* Radius Tokens */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.6`) for medical readability.
- **Numbers / Token ID:** Monospaced or tabular numbers (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Dental heroes, clinic room, doctor portraits, smile cases)
│   └── icons/  (Tooth, Shield, Clock, Calendar, Star, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + glassmorphism header)
│   │   ├── Footer.jsx (Bootstrap row/col grid with clinic info)
│   │   ├── WhatsAppFloatButton.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column responsive layout)
│   │   ├── ClinicMetricsBar.jsx (Animated counter metrics strip)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs Apex digital table)
│   │   ├── TreatmentCarousel.jsx (Card grid with category filter tabs)
│   │   ├── BeforeAfterSmileSlider.jsx (Interactive draggable split-screen)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with MDS profiles)
│   │   ├── VirtualTourSection.jsx
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified patient feedback)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── BookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1ProcedureSelect.jsx
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & seat validation)
│   │   ├── Step4PatientForm.jsx
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── assessment/
│   │   └── SmileAssessmentQuizModal.jsx (60-second diagnostic symptom quiz)
│   └── reception/
│       └── LiveTokenQueueDisplay.jsx (Simulated Clinic TV Waiting Screen)
├── context/
│   └── BookingContext.jsx (Manages active slots, booked appointments, token state)
├── data/
│   ├── mockTreatments.js
│   ├── mockDoctors.js
│   ├── mockSlots.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Transitions, keyframes, pulse effects)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Navigation Bar (Sticky Header)
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(255, 255, 255, 0.88); backdrop-filter: blur(12px)`).
- **Left Element:** Clinic Logo with tooth/sparkle emblem, Brand Name (`Apex Dental & Implant Studio`), and a small green pulsing dot with text `"Clinic Open Today • 9:00 AM - 8:30 PM"`.
- **Center Nav Links:**
  - `Treatments` (with a small chevron, smooth scroll or dropdown menu)
  - `Our Doctors`
  - `Smile Gallery` (Before & After)
  - `Clinic Queue` (Live Token Demo)
  - `FAQ`
- **Right Action Items:**
  - Emergency / Phone Quick Action: Direct dial pill (`+91 98480 22338`).
  - Primary CTA Button: `"Book Appointment"` with a gradient fill (`var(--color-primary-600)` to `var(--color-primary-700)`) and subtle pulsing glow effect.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ Multi-Specialty Dental & Advanced Implant Center`.
  - Main Heading:
    > **Transform Your Smile With Painless, Modern Dental Excellence.**
  - Subheading:
    > Experience zero-wait appointments, certified implantologists, transparent procedure pricing, and AI-guided digital smile design.
  - Dual CTAs:
    - Primary Button: `Book Instant Appointment` (opens Booking Engine Modal).
    - Secondary Button: `Take 60s Smile Assessment ↗` (opens Quiz Modal).
  - Social Proof Strip:
    - Overlapping avatar circles of 5 happy patients.
    - `⭐ 4.9/5 Rating across 1,200+ verified Google Reviews`.
    - Micro-tags: `✓ NABH Accredited Facility` | `✓ 100% Painless Laser Tech` | `✓ EMI Starting @ ₹999/mo`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res crisp dental clinic visual.
    - Floating Badge 1 (Top-Right): `"Next Slot Available Today: 4:30 PM (Evening)"` with a green active radar dot.
    - Floating Badge 2 (Bottom-Left): `"98.4% Implant Success Rate • 15-Year Warranty"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A sleek dark or soft-teal high-contrast horizontal strip built with Bootstrap row/col:
1. `15,000+` Happy Smiles Restored
2. `2,800+` Precision Implants Placed
3. `12+` MDS Dental Surgeons & Implant Specialists
4. `< 8 Mins` Average Waiting Time with Digital Token

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Why Traditional Dental Booking Fails vs. The Apex Digital Way"
A comparative problem-solver interactive matrix showcasing why clinics need this digital platform:

| Traditional Clinic Hassle | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Busy phone lines; receptionist busy with walking patients | Instant 24/7 web booking with live slot reservation | Click-to-book live slot preview |
| Patients fear surprise bills for root canals & implants | 100% transparent starting cost cards & 0% EMI calculator | Interactive EMI toggle widget |
| Anxiety about treatment pain & procedure time | Step-by-step visual roadmap with sedation options | Interactive 3D step roadmap |
| Crowded waiting rooms with uncertain token numbers | Live digital queue token with WhatsApp arrival alert | Live Waiting Room TV View |

---

### 5.5 Section 4: Treatment & Procedure Catalog (Card Grid + Filter Tabs)
- **Top Filter Pills:**
  `All Procedures (8)` | `Implants & Surgery` | `Cosmetic & Aligners` | `Root Canal & Crowns` | `Pediatric (Kids)`
- **8 Core Treatment Cards:**
  1. **Single & Full Mouth Dental Implants** (Titanium, Lifetime warranty, 60 mins).
  2. **Invisible Aligners & Clear Braces** (Zero metal, 3D smile scan).
  3. **Rotary Painless Root Canal (Single Sitting)** (Laser-assisted, 45 mins).
  4. **Laser Teeth Whitening & Polishing** (Up to 8 shades lighter in 1 session).
  5. **Porcelain Veneers & Smile Makeovers** (Custom German ceramic, 2 sittings).
  6. **Wisdom Tooth Microsurgery** (Painless extraction with sedation).
  7. **Kids Pediatric Dentistry** (Fluoride therapy, cavity prevention, gentle care).
  8. **Periodontal Gum Laser Therapy** (Deep cleaning, bleeding gum remedy).

- **Card Layout & Elements:**
  - Card Header: Category badge (e.g., `Restorative`) + Procedure Title + Duration chip (`⏱ 45 mins`).
  - Body: 2-line clinical summary highlighting pain-free protocol.
  - Price Tag: Starting price (e.g., `From ₹2,499`) with EMI breakdown.
  - Actions:
    - `"View Protocol"`: Opens quick drawer with preparation notes and FAQs.
    - `"Book Slot"`: Pre-selects this treatment and opens the Booking Modal directly on Step 3.

---

### 5.6 Section 5: Interactive Before & After Smile Gallery (Interactive Slider)
A real-time draggable comparison widget allowing prospective patients to slide between a damaged/discolored smile and the restored smile.
- **Controls:**
  - Drag handle in the middle with left/right arrows (`⟷`).
  - Label tags: `"Before Treatment"` (Top-Left) and `"After 2 Sittings"` (Top-Right).
- **Case Tabs:**
  - Case 1: *Full Arch All-on-4 Dental Implant*
  - Case 2: *Invisible Clear Aligners - Crowding Correction*
  - Case 3: *Porcelain Veneers - Gap Closure & Whitening*
- **Technical Implementation:**
  - Relative parent container with two identical aspect-ratio images.
  - Clip-path slider driven by `onMouseMove` / `onTouchMove` or CSS `clip-path: inset(0 (100% - x%) 0 0)`.

---

### 5.7 Section 6: Specialist Doctors & Implantologists Team
- Display 4 specialist profile cards using realistic dummy names:
  1. **Dr. Arvind Swaminathan, MDS** — Chief Implantologist & Maxillofacial Surgeon (14 yrs exp).
  2. **Dr. Sneha Reddy, MDS** — Aesthetic Dentist & Invisible Aligner Specialist (10 yrs exp).
  3. **Dr. Vikram Varma, MDS** — Endodontist & Microscopic Root Canal Specialist (9 yrs exp).
  4. **Dr. Kavitha Nair, BDS, Fellowship in Pedodontics** — Child & Preventative Dental Specialist.
- **Card Interactive State:**
  - Doctor avatar with clinical white coat.
  - Degrees, medical council registration badge, and surgery count.
  - Available Days chips (`Mon, Wed, Fri` vs `Daily`).
  - Next Available Badge: `"Available Today @ 5:00 PM"`.
  - CTA Button: `"Book with Dr. [Name]"`.

---

### 5.8 Section 7: The End-to-End Interactive Booking Engine (Core Prototype Feature)
The booking engine operates as an interactive 4-step wizard:

```
[ Step 1: Select Treatment ] ──> [ Step 2: Choose Specialist ] ──> [ Step 3: Date & Slot Picker ] ──> [ Step 4: Patient Info & Instant Token ]
```

#### Step Details:
1. **Step 1 - Service Choice:** Visual radio cards with icon, duration, and starting price.
2. **Step 2 - Doctor Selection:** Option to pick a specific doctor or select `"First Available Specialist (Fastest)"`.
3. **Step 3 - Date & Shift Picker:**
   - Date Bar: Horizontal scrollable date pills showing next 7 days (`Today, Tomorrow, Day 3...`).
   - Shift Toggle: `Morning Shift (9:00 AM - 1:00 PM)` vs. `Evening Shift (4:30 PM - 8:30 PM)`.
   - Slot Chips:
     - Available: Green border, clickable (`09:30 AM`, `10:30 AM`, `11:30 AM`, `05:00 PM`, `06:30 PM`).
     - Filling Fast (1 slot left): Amber badge.
     - Booked (Disabled): Greyed out (`04:30 PM - Booked`).
4. **Step 4 - Patient Intake Form:**
   - Full Name (required)
   - WhatsApp Mobile Number (required for simulated SMS/WhatsApp alert)
   - Age & Gender
   - Consultation Type: `In-Clinic Consultation` or `Emergency Toothache`
   - Chief Complaint (Optional short note)
   - Checkbox: `Receive instant appointment confirmation & reminders on WhatsApp` (pre-checked).
5. **Confirmation Action & Result Screen:**
   - On clicking `"Confirm Appointment"`: Show a 0.8s medical loader (`"Securing your appointment slot..."`).
   - Trigger Success Screen with:
     - **Unique Simulated Token ID:** e.g., `#APX-2026-8841`.
     - Patient Name, Selected Treatment, Doctor Name, Date & Exact Time.
     - Add to Google Calendar / Apple Calendar CTA.
     - Download PDF Slip button.
   - **Simulated WhatsApp Notification Pop-up:**
     A floating green mock WhatsApp chat preview simulating the automated alert received by the patient:
     > *"Hello Rajesh! Your appointment at Apex Dental Studio is confirmed. Token #APX-8841. Doctor: Dr. Arvind Swaminathan. Date: Today at 5:00 PM. Tap here for Google Maps directions: [Apex Dental Clinic]"*

---

### 5.9 Section 8: Live Clinic OPD Queue & Waiting Room Screen (Bonus Prototype Showcase)
A dedicated interactive widget showing what a patient or receptionist sees on the waiting room TV monitor:
- **Current Token Being Treated:** `#APX-8839 (Room 1 - Dr. Arvind)`
- **Next In Line:** `#APX-8840 (Room 2)` and `#APX-8841 (Your Token - Estimated wait: 12 mins)`.
- **Live Doctors on Duty:** 3 Active Consultation Rooms with occupancy indicators.

---

### 5.10 Section 9: 60-Second Smile Assessment Quiz Modal (Lead Generation Demo)
A multi-step questionnaire that guides indecisive patients:
- **Question 1:** "What is your primary dental goal?" (Options: *Severe tooth pain*, *Replace missing teeth*, *Straighten teeth*, *Whiter smile*).
- **Question 2:** "How long have you experienced this issue?" (*Less than a week*, *1-6 months*, *Over a year*).
- **Question 3:** "Do you experience dental anxiety or fear of needles?" (*Yes, need pain-free sedation*, *No, comfortable*).
- **Result Output:**
  - Recommended Treatment Plan (e.g., *Computerized Implant Evaluation + 3D CBCT Scan*).
  - Recommended Specialist.
  - Special Web Offer: *"₹500 Consultation Waiver Applied to Token"*.
  - Direct CTA: `"Book This Solution"`.

---

### 5.11 Section 10: Patient Trust, Video Reviews & Google Ratings
- **Header:** `"Trusted by Over 15,000 Happy Smiles Across the City"`.
- 3 Video Testimonial Thumbnails with play button overlays and verified procedure badges.
- Grid of 6 Verified Google Reviews with star ratings, reviewer photo, review date, and doctor tag.
- Trust Badges: ISO 9001:2015 Certified, Bio-Waste Management Compliant, 100% Autoclave Sterilization Protocol.

---

### 5.12 Section 11: Comprehensive Dental FAQs Accordion
Interactive Bootstrap accordion answering patient doubts:
1. *Is the root canal procedure completely painless?*
2. *How long do dental implants last?*
3. *What is the difference between traditional braces and clear aligners?*
4. *Can I pay for my dental treatment in monthly installments (EMI)?*
5. *What sterilization protocols do you follow between patients?*
6. *Can I reschedule or cancel my booked slot?*

---

### 5.13 Section 12: Footer & Contact Section
- Location & Opening Hours table (Monday - Saturday: `9:00 AM - 1:00 PM` & `4:30 PM - 8:30 PM`).
- Direct Contact: Phone call link (`+91 98480 22338`), WhatsApp direct link, Clinic Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockTreatments.js`
```javascript
export const mockTreatments = [
  {
    id: "implant-single",
    name: "Precision Dental Implant",
    category: "Implants & Surgery",
    tagline: "Permanent, natural-feeling tooth replacement using medical-grade titanium.",
    duration: "60-90 mins",
    startingPrice: 16999,
    emiStarting: 1499,
    stages: ["Digital 3D Bone Scan", "Painless Fixture Placement", "Zirconia Crown Placement"],
    icon: "ToothSparkle",
    badge: "Most Popular",
    doctorSpecialty: "Implantologist"
  },
  {
    id: "rct-laser",
    name: "Single-Sitting Laser Root Canal",
    category: "Root Canal & Crowns",
    tagline: "Save your natural tooth with painless computerized rotary endodontics.",
    duration: "45 mins",
    startingPrice: 3499,
    emiStarting: null,
    stages: ["Local Anesthetic & Isolation", "Microscopic Canal Cleaning", "Biocompatible Crown Seal"],
    icon: "ShieldCheck",
    badge: "100% Painless",
    doctorSpecialty: "Endodontist"
  },
  {
    id: "clear-aligners",
    name: "Invisible Clear Smile Aligners",
    category: "Cosmetic & Aligners",
    tagline: "Straighten teeth discreetly without metal wires or food restrictions.",
    duration: "6-12 Months Plan",
    startingPrice: 44999,
    emiStarting: 3499,
    stages: ["3D Virtual Smile Plan", "Custom Tray Delivery", "Periodic Bi-Weekly Progress"],
    icon: "Smile",
    badge: "Zero Metal",
    doctorSpecialty: "Orthodontist"
  },
  {
    id: "laser-whitening",
    name: "In-Clinic Laser Teeth Whitening",
    category: "Cosmetic & Aligners",
    tagline: "Remove deep stains from coffee and smoking. Up to 8 shades brighter.",
    duration: "45 mins",
    startingPrice: 4999,
    emiStarting: null,
    stages: ["Enamel Inspection", "Protective Gum Barrier", "UV Laser Activation"],
    icon: "Sparkles",
    badge: "Instant Glow",
    doctorSpecialty: "Cosmetic Dentist"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-1",
    name: "Dr. Arvind Swaminathan, MDS",
    title: "Senior Implantologist & Oral Surgeon",
    experienceYears: 14,
    education: "MDS - Oral & Maxillofacial Surgery (AIIMS)",
    rating: 4.9,
    reviewCount: 380,
    avatar: "/assets/images/doctors/dr-arvind.jpg",
    availableDays: ["Mon", "Tue", "Thu", "Fri", "Sat"],
    specialtySlug: "implant-single"
  },
  {
    id: "doc-2",
    name: "Dr. Sneha Reddy, MDS",
    title: "Orthodontist & Certified Aligner Specialist",
    experienceYears: 11,
    education: "MDS - Orthodontics & Dentofacial Orthopedics",
    rating: 4.95,
    reviewCount: 420,
    avatar: "/assets/images/doctors/dr-sneha.jpg",
    availableDays: ["Tue", "Wed", "Fri", "Sat"],
    specialtySlug: "clear-aligners"
  }
];
```

### 6.3 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Shift
  { id: "m1", time: "09:30 AM", shift: "morning", available: true },
  { id: "m2", time: "10:15 AM", shift: "morning", available: true },
  { id: "m3", time: "11:00 AM", shift: "morning", available: false }, // Booked
  { id: "m4", time: "11:45 AM", shift: "morning", available: true, fewLeft: true },
  { id: "m5", time: "12:30 PM", shift: "morning", available: true },

  // Evening Shift
  { id: "e1", time: "04:30 PM", shift: "evening", available: false }, // Booked
  { id: "e2", time: "05:15 PM", shift: "evening", available: true },
  { id: "e3", time: "06:00 PM", shift: "evening", available: true },
  { id: "e4", time: "06:45 PM", shift: "evening", available: true, fewLeft: true },
  { id: "e5", time: "07:30 PM", shift: "evening", available: true },
  { id: "e6", time: "08:00 PM", shift: "evening", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Staggered Scroll Entrance:**
   - Apply `opacity: 0, translateY: 30px` transitioning to `opacity: 1, translateY: 0` with a `0.1s` stagger delay for card grids (Treatments and Doctors).
2. **Interactive Slot Selector Feedback:**
   - When a slot is clicked, scale slightly (`scale: 1.05`), turn the background to `var(--color-primary-600)`, text to `#ffffff`, and display a tiny green checkmark icon inside the chip.
3. **Modal Entrance & Backdrop Blur:**
   - Backdrops must have `backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.45)`.
   - Modals should scale up smoothly from `0.95` to `1.0` with spring physics (`damping: 25, stiffness: 300`).
4. **Before/After Comparison Slider:**
   - Provide a pulsing cursor hint (`"Drag to Compare"`) on the center slider handle that fades after the first user interaction.
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification alert 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 75% of private dental patients visit from smartphones (WhatsApp links, Google Maps). The frontend must be flawless on mobile:
- **Sticky Bottom Action Bar on Mobile:**
  When scrolled past the hero, display a persistent bottom bar with:
  - Phone quick call button (`📞 Call Clinic`)
  - Full-width CTA button (`⚡ Book Appointment - Today Available`)
- **Horizontal Swipeable Carousels:**
  Treatment cards, doctors, and date pickers must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons and slot chips must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for teal clinical palette and typography in `globals.css`.
- [ ] Implement Sticky Glassmorphic Navbar with working smooth scroll.
- [ ] Build Hero Section with floating real-time availability badges and rating strip using Bootstrap grid.
- [ ] Build Treatment Grid with category tabs, duration tags, and starting prices.
- [ ] Implement Before & After Smile Slider with draggable split divider.
- [ ] Build Doctor Profiles with credentials and direct booking action.
- [ ] Implement 4-Step Interactive Booking Engine with shift toggle, slot chips, and token generation.
- [ ] Build Simulated WhatsApp Alert Modal with prefilled appointment confirmation message.
- [ ] Build Simulated Live OPD Waiting Room TV Screen (`/queue`).
- [ ] Build 60-Second Interactive Smile Assessment Quiz Modal.
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
