# Frontend Development Specification
## Business 07: ENT & Hearing Care Clinics
### Project: ENT & Audiology Assessment Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Ear, Nose & Throat (ENT) Surgical Hospitals, Audiology & Speech Therapy Centers, Sinus & Allergy Clinics, Vertigo & Balance Studios, and Digital Hearing Aid Dispensing Boutiques.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for responsive layout grids, flexible diagnostic dashboards, and accessible patient-facing widgets.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `style.css`) using CSS Custom Properties for acoustic teal, clinical deep navy, soundwave cyan, and warm gold accents.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide ENT surgeons, audiologists, and hearing aid clinic founders with a high-fidelity, interactive, and visually stunning digital experience. The application demonstrates how modern web software eliminates patient stigma surrounding hearing loss, automates Pure Tone Audiogram & ENT doctor appointment booking, features an interactive digital hearing check simulator, showcases invisible digital hearing aids with 1-click trial booking, and issues simulated OPD queue tokens with automated WhatsApp confirmations.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial ENT clinic and hearing center pain points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Patient Stigma & Delay in Addressing Hearing Loss** | Patients fear bulky visible beige hearing aids and delay testing for 5–7 years, accelerating social isolation. | **Interactive Digital Hearing Aid Showcase & Invisible In-Canal (CIC) Explorer** demonstrating rechargeable Bluetooth connectivity, discreet form factors, and free home trial booking. |
| **Confusion Between Consulting an ENT Doctor vs Audiologist** | Patients do not know whether ear blockage/fullness requires medical wax removal, antibiotics, or an audiogram hearing test. | **Segregated Dual-Service Booking Engine** with distinct flows for **"ENT Surgeon Consultation (Sinus, Throat, Ear Infection)"** and **"Audiometry Hearing Checkup"**. |
| **Surgical Anxiety for Chronic Sinus & Snoring Patients** | Fear of painful nasal packing and facial swelling after traditional sinus surgery. | **Interactive Endoscopic Sinus Surgery (FESS) & Balloon Sinuplasty Visual Guide** showing micro-camera entry, zero external scars, and daycare recovery. |
| **Misdiagnosis of Vertigo & Dizziness Episodes** | Patients mistake inner ear balance disorders (BPPV, Meniere's) for brain or heart issues, running from doctor to doctor. | **60-Second Interactive Vertigo & Tinnitus Triage Quiz** classifying inner ear balance symptoms and routing directly to specialized neuro-otology care. |
| **Receptionist Overload Answering Daily Inquiries** | Staff spends 40%+ of their day answering "Is Dr. available today?", "What is my token number?", and "How much does a hearing aid cost?". | **Simulated Live Clinic OPD Waiting Room Screen** and **Instant WhatsApp Booking Alert** with sequential token issuance (`ENT-2026-XXXX`). |

---

## 3. Design System & Visual Tokens

The frontend must convey acoustic clarity, surgical precision, auditory warmth, and soothing clinical comfort. **Avoid harsh dissonant colors or muddy tones.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Deep Acoustic Navy & Medical Teal */
  --color-primary-950: #041f1e;
  --color-primary-900: #042f2e;
  --color-primary-800: #115e59;
  --color-primary-700: #0f766e;
  --color-primary-600: #0d9488; /* Main Brand Teal */
  --color-primary-500: #14b8a6;
  --color-primary-200: #99f6e4;
  --color-primary-100: #ccfbf1;
  --color-primary-50:  #f0fdfa;

  /* Accent: Soundwave Cyan & Auditory Frequency Blue */
  --color-accent-700:  #0369a1;
  --color-accent-600:  #0284c7;
  --color-accent-500:  #0ea5e9;
  --color-accent-200:  #bae6fd;
  --color-accent-100:  #e0f2fe;
  --color-accent-50:   #f0f9ff;

  /* Premium Accent: Warm Acoustic Gold (VIP Hearing Aid Models) */
  --color-gold-600:    #d97706;
  --color-gold-500:    #f59e0b;
  --color-gold-100:    #fef3c7;

  /* Surface & Neutral Typography */
  --color-surface-bg:   #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Functional Status Colors */
  --color-success:      #10b981; /* Normal hearing / Confirmed slot */
  --color-warning:      #f59e0b; /* Mild loss / Few slots remaining */
  --color-danger:       #ef4444; /* Severe loss / Acute ear infection hotline */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.90);
  --glass-border:       rgba(13, 148, 136, 0.12);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.08);
  --card-shadow:        0 4px 20px -2px rgba(15, 23, 42, 0.06);
  --card-shadow-hover:  0 20px 25px -5px rgba(13, 148, 136, 0.16), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens */
  --radius-sm:          8px;
  --radius-md:          14px;
  --radius-lg:          24px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.65`) for clinical clarity.
- **Decibel Levels / Frequencies / Token ID:** Monospaced or tabular figures (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (ENT endoscopy workstation, audiometry soundproof booth, hearing aid models, doctor portraits)
│   └── icons/  (Ear, Mic, Volume2, ShieldCheck, Activity, Calendar, Clock, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + hearing self-test shortcut)
│   │   ├── Footer.jsx (Bootstrap row/col grid with clinic & audiometry hours)
│   │   ├── WhatsAppFloatButton.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column responsive layout)
│   │   ├── ClinicalMetricsBar.jsx (Animated counter numbers strip)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs ApexENT digital table)
│   │   ├── ProceduresGrid.jsx (FESS Sinus, Tympanoplasty, Coblation Tonsils, Septoplasty)
│   │   ├── HearingCheckSection.jsx (Interactive frequency audio check & decibel slider)
│   │   ├── HearingAidShowcase.jsx (Digital hearing aid catalog with trial booking)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with ENT surgeons & audiologists)
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified hearing recovery stories)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── ENTBookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1ServiceTypeSelect.jsx (ENT Surgeon OPD vs Audiogram Hearing Test)
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & seat validation)
│   │   ├── Step4PatientForm.jsx (Patient details, primary symptoms, ear history)
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── assessment/
│   │   └── VertigoTinnitusQuizModal.jsx (60-second inner ear balance & ringing quiz)
│   └── reception/
│       └── LiveENTQueueDisplay.jsx (Simulated Clinic TV Waiting Screen)
├── context/
│   └── BookingContext.jsx (Manages active slots, booked appointments, token state)
├── data/
│   ├── mockSurgeries.js
│   ├── mockDoctors.js
│   ├── mockHearingAids.js
│   ├── mockSlots.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Transitions, soundwave pulses, audio bar equalizers)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Navigation Bar (Sticky Header)
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(255, 255, 255, 0.90); backdrop-filter: blur(14px)`).
- **Left Element:** Clinic Logo with stylized soundwave / ear profile emblem, Brand Name (`ApexENT & Hearing Care Institute`), and a small emerald pulsing dot with text `"OPD & Audiometry Open • 8:30 AM - 8:30 PM"`.
- **Center Nav Links:**
  - `ENT Surgeries` (Sinus, Eardrum, Tonsils, Snoring)
  - `Hearing Test` (Online Audio Self-Check)
  - `Hearing Aids` (Invisible Digital Models)
  - `Vertigo & Allergy` (Specialized Clinics)
  - `Our Specialists` (ENT Surgeons & Audiologists)
  - `FAQ`
- **Right Action Items:**
  - Emergency Ear/Nose Bleed Hotline: Direct dial (`+91 98480 88221`).
  - Primary CTA Button: `"Book Appointment"` with a gradient fill (`var(--color-primary-700)` to `var(--color-primary-600)`) with subtle pulsing glow.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ HD Video Endoscopy • German Audiometry Systems`.
  - Main Heading:
    > **Breathe Free, Hear Clearly With Advanced ENT & Laser Precision.**
  - Subheading:
    > Comprehensive solutions for chronic sinusitis, painless eardrum micro-repairs, coblation tonsillectomy, vertigo relief, and invisible Bluetooth hearing aids.
  - Dual CTAs:
    - Primary Button: `Book ENT / Hearing Slot` (opens 4-Step Booking Engine).
    - Secondary Button: `Take 60s Hearing Self-Check ↗` (scrolls to Hearing Section).
  - Social Proof Strip:
    - Overlapping patient avatar circles.
    - `⭐ 4.9/5 Rating across 1,420+ verified Google Reviews`.
    - Micro-tags: `✓ Zero Nasal Packing Sinus Surgery` | `✓ Soundproof Audiometry Booth` | `✓ Free 7-Day Hearing Aid Trial`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res crisp diagnostic visual (ENT surgeon performing painless video endoscopy).
    - Floating Badge 1 (Top-Right): `"Next Slot Today: 04:30 PM (Evening OPD)"` with green active radar dot.
    - Floating Badge 2 (Bottom-Left): `"98.8% Hearing Improvement Success Rate"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A high-contrast deep acoustic teal horizontal strip built with Bootstrap row/col:
1. `28,000+` Outpatient Video Endoscopy Screenings Completed
2. `7,500+` Daycare Micro-Ear & Endoscopic Sinus Surgeries
3. `12,000+` Pure Tone Audiograms & Tympanometry Tests
4. `< 15 Mins` Average OPD Waiting Time with Digital Token

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional ENT Care Hassles vs. ApexENT Digital Way"
A comparative problem-solver interactive matrix showcasing why ENT practices adopt this platform:

| Traditional Clinic Hassle | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Fear of painful nasal packs and swollen face after sinus surgery | Microdebrider-assisted FESS with dissolvable spacers and zero external cuts | Interactive Sinus Surgical Roadmap |
| Stigma of bulky beige hearing aids that whistle in noisy environments | Invisible Complete-in-Canal (CIC) digital hearing aids with AI noise cancellation | Digital Hearing Aid Explorer |
| Long waiting room delays when mixing ear surgery cases with hearing tests | Segregated appointment schedule for Doctor Consultation vs Soundproof Audiometry | Dual-Service Slot Engine |
| Frustration from chronic vertigo dizziness without a clear diagnosis | Specialized balance clinic protocol (Videonystagmography VNG & Epley maneuver) | Vertigo & Tinnitus Triage Tool |

---

### 5.5 Section 4: ENT Surgeries & Clinical Procedures Catalog
- **Filter Tabs:**
  `All Procedures (6)` | `Ear & Hearing Surgery` | `Sinus & Nasal Surgery` | `Throat & Voice Care` | `Vertigo & Allergy`
- **6 Core Clinical Procedure Cards:**
  1. **Functional Endoscopic Sinus Surgery (FESS):** Micro-telescope clearance of nasal polyps, restoring natural sinus ventilation.
  2. **Endoscopic Tympanoplasty (Eardrum Repair):** Stitchless ear canal graft repair for chronic ear discharge and perforated eardrum.
  3. **Coblation Plasma Tonsillectomy & Adenoids:** Low-temperature plasma excision with minimal pain and rapid 48-hour recovery in children.
  4. **Micro-Laryngeal Phonosurgery (Voice Care):** Precision laser removal of vocal cord polyps and nodules for teachers and singers.
  5. **Septoplasty & Turbinate Laser Reduction:** Straighten deviated nasal septum (DNS) and clear chronic nocturnal nasal blockage.
  6. **Videonystagmography (VNG) & Vertigo Rehab:** Computerized inner ear balance diagnosis and repositioning therapy for BPPV.
- **Card Layout & Elements:**
  - Procedure category badge + Procedure Title + Duration chip (`⏱ 30-45 mins`).
  - Clinical Summary highlighting daycare recovery and zero external stitches.
  - Starting package tag (e.g., `From ₹24,000` with 100% Cashless TPA insurance).
  - Actions:
    - `"View Protocol"`: Opens quick drawer with pre/post-op care instructions.
    - `"Book Consultation"`: Pre-selects procedure and launches Booking Modal.

---

### 5.6 Section 5: Interactive 60-Second Online Hearing Check & Audio Simulator
An interactive patient engagement widget providing instant auditory self-awareness:
- **Interactive Audio Frequency Test Simulator:**
  - 3 Frequency Sound Test Banners: `Low Pitch (500 Hz)`, `Speech Frequency (2000 Hz)`, `High Pitch Bird Song (6000 Hz)`.
  - User plays simulated tones and indicates clarity (`Clear`, `Faint`, `Cannot Hear`).
- **Interactive Hearing Difficulty Questionnaire:**
  - "Do you frequently ask people to repeat themselves in noisy restaurants?"
  - "Do you need to turn the TV volume louder than family members prefer?"
  - "Do you experience ringing or buzzing sounds (Tinnitus) in quiet rooms?"
- **Output Screen:**
  - Auditory Health Gauge: `Normal Hearing (0-20 dB)`, `Mild-Moderate Loss (21-50 dB)`, `High-Frequency Decline`.
  - Recommendation: Comprehensive Pure Tone Audiogram in soundproof booth.
  - Direct Action CTA: `"Book Soundproof Audiometry Slot"`.

---

### 5.7 Section 6: Dual-Service Booking Engine (Doctor OPD vs Audiometry Hearing Test)
A dynamic 4-step progressive modal providing seamless scheduling across clinic departments:
- **Step 1 - Service Choice:**
  - Option A: `ENT Specialist Doctor Consultation (Ear pain, Sinus, Throat, Snoring)`
  - Option B: `Audiometry & Hearing Checkup (Pure Tone Audiogram, Tympanometry)`
  - Option C: `Free Digital Hearing Aid Trial & Fitting Session`
- **Step 2 - Specialist Selection:**
  - Choose an ENT Surgeon or Senior Audiologist or `"First Available (Fastest)"`.
- **Step 3 - Date & Shift Picker:**
  - Date Bar: 7-day rolling calendar strip (`Today, Tomorrow, Day 3...`).
  - Shift Toggle: `Morning Shift (8:30 AM - 1:00 PM)` vs `Evening Shift (4:30 PM - 8:30 PM)`.
  - Slot Chips:
    - Available: Teal border (`09:30 AM`, `11:00 AM`, `05:00 PM`, `06:30 PM`).
    - Filling Fast: Amber badge.
    - Booked: Greyed out.
- **Step 4 - Patient Intake Form:**
  - Full Name, WhatsApp Mobile Number, Age.
  - Chief Complaint Selector: `Hearing Loss`, `Sinus / Nasal Block`, `Ear Discharge`, `Throat / Voice`, `Vertigo / Dizziness`.
- **Confirmation Action & Result Screen:**
  - Generates Instant Token ID: `ENT-2026-0738`.
  - **Simulated WhatsApp Notification Pop-up:**
    > *"Hello Ravi! Your appointment at ApexENT Institute is confirmed. Token #ENT-0738. Doctor: Dr. K. S. N. Murthy, MS (ENT). Date: Today at 5:00 PM. Tap here for clinic directions: [ApexENT Hospital]"*

---

### 5.8 Section 7: Specialist ENT Surgeons & Audiologists Team
- Display 4 specialist profile cards using realistic dummy names:
  1. **Dr. K. S. N. Murthy, MS (ENT), DLO** — Chief ENT & Endoscopic Sinus Surgeon (22 yrs exp, 10,000+ Surgeries).
  2. **Dr. Priya S. Varma, MS (ENT), Fellowship in Otology & Neurotology** — Micro-Ear & Vertigo Specialist (14 yrs exp).
  3. **Dr. Ananya Reddy, BASLP, M.Sc (Audiology)** — Chief Clinical Audiologist & Hearing Aid Specialist (11 yrs exp).
  4. **Dr. T. Rajesh, MS (ENT), Head & Neck Fellow** — Pediatric ENT & Coblation Specialist (10 yrs exp).
- **Card Interactive State:**
  - Professional clinical portrait in white coat.
  - Medical Council Reg. No. (`APMC-15940`), special clinical focus areas.
  - Available Days chips (`Mon - Sat`).
  - CTA Button: `"Book Consultation"`.

---

### 5.9 Section 8: Digital Hearing Aids Showcase & Free Trial Booking (Bonus Showcase)
An interactive digital hearing aid showroom demonstrating modern discrete technology:
- **Hearing Aid Categories:** `Invisible In-Canal (IIC/CIC)` | `Receiver-In-Canal (RIC)` | `Rechargeable Bluetooth`
- **3 Featured Modern Devices:**
  1. **AuraInvisible Nano CIC 16-Channel** (₹28,500) — Deep ear-canal fit, 100% invisible from front view, automatic background noise filter.
  2. **SonicClear Pro Rechargeable RIC** (₹42,000) — Smartphone direct streaming for phone calls and TV, 30-hour portable charging case.
  3. **AudioPure 360 AI Smart Sensor** (₹65,000) — AI-driven 360-degree speech tracking, acoustic motion sensors, and fall detection.
- **Interactive Features:**
  - Visual form-factor preview showing ear placement.
  - 1-Click `"Book 7-Day Free Home Trial"` button launching instant trial reservation modal.

---

### 5.10 Section 9: Live Clinic OPD Queue & Waiting Room Screen
A dedicated interactive widget showing what patients see on the waiting room TV screen:
- **Current Token Being Treated:** `#ENT-0735 (Room 1 - Dr. Murthy)`
- **Next In Line:** `#ENT-0736 (Room 2 - Dr. Priya)` and `#ENT-0738 (Your Token - Estimated wait: 12 mins)`.
- **Live Rooms Active:** 2 ENT Consultation Suites + 1 Soundproof Audiology Booth + 1 Video Endoscopy Suite.

---

### 5.11 Section 10: Patient Trust, Video Reviews & Google Ratings
- **Header:** `"Trusted by Over 28,000 Patients Breathing and Hearing with Clarity"`.
- 3 Video Testimonial Thumbnails with play button overlays (*"Can Hear My Grandchildren's Whispers Again With Invisible CIC Hearing Aid - Mr. Satyanarayana, 68 yrs"*).
- Grid of 6 Verified Google Reviews with star ratings, reviewer photo, procedure tag, and doctor feedback.
- Trust Badges: Soundproof Audiometry ISO 8253-1 Certified, NABH Compliant Operating Theatres, 100% Cashless TPA Network.

---

### 5.12 Section 11: Comprehensive ENT & Audiology FAQs Accordion
Interactive Bootstrap accordion answering patient doubts:
1. *Is Functional Endoscopic Sinus Surgery (FESS) painful and does it require nasal packing?*
2. *How is a Pure Tone Audiometry (PTA) hearing test conducted in a soundproof booth?*
3. *What is the difference between invisible In-Canal (CIC) and behind-the-ear hearing aids?*
4. *Can an eardrum hole (perforation) heal on its own or does it require surgery?*
5. *Why is coblation plasma tonsillectomy safer and less painful for young children?*
6. *Can sudden dizziness and room spinning (Vertigo) be permanently cured without pills?*

---

### 5.13 Section 12: Footer & Contact Section
- Location & Opening Hours table (Clinic OPD & Audiometry: `8:30 AM - 1:00 PM` & `4:30 PM - 8:30 PM` | Emergency ENT Bleed/Foreign Body: `24/7 Available`).
- Direct Contact: Phone call link (`+91 98480 88221`), WhatsApp direct link, Clinic Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockSurgeries.js`
```javascript
export const mockSurgeries = [
  {
    id: "fess-sinus",
    name: "Functional Endoscopic Sinus Surgery (FESS)",
    category: "Sinus & Nasal Surgery",
    tagline: "Micro-endoscopic polyp removal with zero nasal packing and rapid 24-hr recovery.",
    duration: "45 mins daycare",
    startingPrice: 28000,
    insuranceCovered: true,
    stages: ["High-Definition Endoscopic Imaging", "Microdebrider Polyp Clearance", "Dissolvable Hemostatic Spacer"],
    icon: "Activity",
    badge: "Daycare Surgery"
  },
  {
    id: "endo-tympano",
    name: "Endoscopic Tympanoplasty (Eardrum Repair)",
    category: "Ear & Hearing Surgery",
    tagline: "Stitchless ear canal graft repair restoring hearing and preventing recurring infection.",
    duration: "40 mins",
    startingPrice: 24000,
    insuranceCovered: true,
    stages: ["Transcanal Endoscopic Inspection", "Tragal Cartilage Autograft", "Gel-Foam Bio-Seal"],
    icon: "Ear",
    badge: "Stitchless"
  },
  {
    id: "coblation-tonsil",
    name: "Coblation Plasma Tonsillectomy & Adenoids",
    category: "Throat & Voice Care",
    tagline: "Low-temperature cool plasma excision minimizing pain and post-op bleeding in children.",
    duration: "30 mins",
    startingPrice: 22000,
    insuranceCovered: true,
    stages: ["Cold Radiofrequency Plasma", "Hemostasis Vessel Seal", "Same-Day Evening Discharge"],
    icon: "ShieldCheck",
    badge: "Child-Safe"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-ent-1",
    name: "Dr. K. S. N. Murthy, MS (ENT), DLO",
    title: "Chief ENT & Endoscopic Sinus Surgeon",
    experienceYears: 22,
    education: "MS - ENT (AIIMS), DLO (Madras Medical College)",
    rating: 4.96,
    reviewCount: 620,
    avatar: "/assets/images/doctors/dr-murthy.jpg",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    specialtySlug: "fess-sinus"
  },
  {
    id: "doc-ent-2",
    name: "Dr. Priya S. Varma, MS (ENT), Neurotology Fellow",
    title: "Micro-Ear & Vertigo Specialist",
    experienceYears: 14,
    education: "MS (ENT), Fellowship in Otology & Balance Disorders",
    rating: 4.92,
    reviewCount: 450,
    avatar: "/assets/images/doctors/dr-priya.jpg",
    availableDays: ["Mon", "Wed", "Fri", "Sat"],
    specialtySlug: "endo-tympano"
  },
  {
    id: "audio-1",
    name: "Dr. Ananya Reddy, BASLP, M.Sc",
    title: "Chief Clinical Audiologist & Speech Pathologist",
    experienceYears: 11,
    education: "M.Sc in Audiology (All India Institute of Speech & Hearing)",
    rating: 4.9,
    reviewCount: 380,
    avatar: "/assets/images/doctors/audio-ananya.jpg",
    availableDays: ["Daily (Mon - Sat)"],
    specialtySlug: "audiometry"
  }
];
```

### 6.3 `mockHearingAids.js`
```javascript
export const mockHearingAids = [
  {
    id: "ha-cic-nano",
    name: "AuraInvisible Nano CIC 16-Channel",
    category: "Invisible In-Canal (CIC)",
    price: 28500,
    mrp: 35000,
    formFactor: "Custom Deep Canal Shell",
    batteryLife: "Zinc-Air 10A (5-7 Days)",
    badge: "100% Invisible",
    description: "Deep fit completely concealed inside ear canal. Custom 3D molded to patient's ear impression.",
    trialAvailable: true
  },
  {
    id: "ha-ric-recharge",
    name: "SonicClear Pro Rechargeable RIC",
    category: "Receiver-In-Canal (RIC)",
    price: 42000,
    mrp: 52000,
    formFactor: "Discreet Slim BTE with Clear Wire",
    batteryLife: "Lithium-Ion 30-Hour Rechargeable Case",
    badge: "Bluetooth Stream",
    description: "Pairs directly with iPhone & Android for hands-free phone calls, music, and TV streaming.",
    trialAvailable: true
  },
  {
    id: "ha-ai-sensor",
    name: "AudioPure 360 AI Smart Sensor",
    category: "AI Smart Hearing",
    price: 65000,
    mrp: 80000,
    formFactor: "Ultra-Lightweight Ergonomic RIC",
    batteryLife: "Rechargeable + Fast 30-Min Quick Charge",
    badge: "AI Speech Tracking",
    description: "Acoustic motion sensors automatically track speakers in noisy crowded wedding halls and meetings.",
    trialAvailable: true
  }
];
```

### 6.4 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Shift
  { id: "em1", time: "09:00 AM", shift: "morning", type: "ENT Doctor OPD", available: true },
  { id: "em2", time: "10:15 AM", shift: "morning", type: "Audiometry Hearing Test", available: true, fewLeft: true },
  { id: "em3", time: "11:30 AM", shift: "morning", type: "Hearing Aid Trial Fitting", available: false }, // Booked
  { id: "em4", time: "12:30 PM", shift: "morning", type: "ENT Doctor OPD", available: true },

  // Evening Shift
  { id: "ee1", time: "04:30 PM", shift: "evening", type: "ENT Doctor OPD", available: true },
  { id: "ee2", time: "05:30 PM", shift: "evening", type: "Audiometry Hearing Test", available: false }, // Booked
  { id: "ee3", time: "06:30 PM", shift: "evening", type: "Hearing Aid Trial Fitting", available: true, fewLeft: true },
  { id: "ee4", time: "07:30 PM", shift: "evening", type: "ENT Doctor OPD", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Staggered Scroll Entrance:**
   - Apply `opacity: 0, translateY: 30px` transitioning to `opacity: 1, translateY: 0` with a `0.1s` stagger delay for surgery cards and hearing aid devices.
2. **Audio Frequency Soundwave Animation:**
   - When playing sound test frequencies, animate multi-colored vertical sound bars (`animation: soundWavePulse 0.4s infinite alternate`) simulating an audio equalizer.
3. **Interactive Slot Selector Feedback:**
   - When a slot is clicked, scale slightly (`scale: 1.05`), turn the background to `var(--color-primary-600)`, text to `#ffffff`, and display a tiny green checkmark icon inside the chip.
4. **Modal Entrance & Backdrop Blur:**
   - Backdrops must have `backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.45)`.
   - Modals should scale up smoothly from `0.95` to `1.0` with spring physics (`damping: 25, stiffness: 300`).
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification sound/vibration effect 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 75% of patients seeking ear and hearing care access the portal on smartphones:
- **Sticky Bottom Action Bar on Mobile:**
  When scrolled past the hero, display a persistent bottom bar with:
  - Phone emergency call button (`📞 Call ENT Clinic`)
  - Full-width CTA button (`⚡ Book Appointment - Today Available`)
- **Horizontal Swipeable Carousels:**
  Procedure cards, hearing aid models, and date pickers must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and sound test frequency buttons must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for acoustic teal, auditory navy, and soundwave cyan in `globals.css`.
- [ ] Implement Sticky Glassmorphic Navbar with working smooth scroll and emergency ENT hotline button.
- [ ] Build Hero Section with floating availability badges and rating strip using Bootstrap grid.
- [ ] Build ENT Surgeries & Procedures Catalog with category filter tabs, duration tags, and starting prices.
- [ ] Implement Interactive 60-Second Online Hearing Check & Audio Frequency Simulator.
- [ ] Build Dual-Service Booking Engine (Doctor Consultation vs Audiometry Hearing Test) with shift toggle, slot chips, and token generation (`ENT-2026-XXXX`).
- [ ] Build Doctor & Audiologist Profiles with credentials and direct consultation booking action.
- [ ] Build Digital Hearing Aids Showcase with device cards, feature badges, and 1-click free trial booking drawer.
- [ ] Build Simulated Live OPD Waiting Room TV Screen (`/queue`).
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
