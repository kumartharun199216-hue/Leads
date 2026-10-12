# Frontend Development Specification
## Business 05: Orthopedics & Joint Care Clinics
### Project: Orthopedic & Joint Pain Clinic Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Multi-specialty Orthopedic Hospitals, Joint Replacement Centers (Hip & Knee), Arthroscopy & Sports Medicine Studios, Spine Care Centers, and Integrated Physiotherapy & Post-Op Rehabilitation Clinics.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for high-precision grid layouts, responsive flex containers, and accessible patient-facing widgets.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `style.css`) using CSS Custom Properties for surgical cobalt blue, titanium slate, joint recovery teal, and warm gold accents.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide orthopedic surgeons and joint clinics with a high-fidelity, interactive, and visually stunning digital experience. The application demonstrates how modern web software eliminates patient anxiety surrounding major joint surgeries, automates orthopedic and physiotherapy appointments, computes clinical joint pain severity scores, showcases guided post-operative exercise video libraries, and issues simulated OPD queue tokens with automated WhatsApp notifications.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial orthopedic clinic and joint center pain points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Patient Hesitation on Joint Replacement Surgeries** | Severe fear of surgical pain, fear of long bedridden recovery, and lack of clarity on Robotic vs Traditional knee/hip surgery. | **Interactive Robotic Joint Replacement Visual Guide** with 3D joint anatomy diagrams, implant durability explorer (Oxinium vs Titanium), and rapid recovery milestones. |
| **Confusion Between Surgeon Consultation vs Physiotherapy** | Patients do not know whether their condition requires surgical intervention, conservative injection therapy, or physiotherapy. | **Segregated Dual Booking Engine** with distinct toggle flows for **"Orthopedic Surgeon Consultation"** and **"In-Clinic Physiotherapy Session"** with seat counters. |
| **Patient Indecision & Unmeasured Joint Pain Severity** | Patients postpone clinic visits until joint degeneration becomes severe; clinics lack structured pre-visit symptom evaluation. | **60-Second Interactive Joint Pain & Mobility Assessment Quiz** calculating a real-time severity score (0–100 WOMAC index) and recommending immediate treatment pathways. |
| **Poor Post-Operative Exercise Compliance** | Patients forget physical exercise instructions given on paper handouts, leading to stiffness and delayed recovery. | **Interactive Post-Op Rehabilitation Video Guide Player** categorized by milestone (Week 1–2, Week 3–6, Week 7–12) with rep counters and safety rules. |
| **Receptionist Overload Answering Repetitive Inquiries** | Staff spends 40%+ of their day answering "Is the joint specialist available?", "What is my token number?", and "How much does knee surgery cost?". | **Simulated Live Clinic OPD Waiting Room Screen** and **Instant WhatsApp Booking Alert** with sequential token issuance (`ORTHO-2026-XXXX`). |

---

## 3. Design System & Visual Tokens

The frontend must convey surgical strength, robotic joint precision, clinical reassurance, and athletic rehabilitation vitality. **Avoid muddy greys or dull primary blues.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Surgical Cobalt & Clinical Deep Blue */
  --color-primary-950: #0a192f;
  --color-primary-900: #0f2b5c;
  --color-primary-800: #173d7a;
  --color-primary-700: #1e4ea8;
  --color-primary-600: #2563eb; /* Main Surgical Blue */
  --color-primary-500: #3b82f6;
  --color-primary-200: #bfdbfe;
  --color-primary-100: #dbeafe;
  --color-primary-50:  #eff6ff;

  /* Accent: Joint Recovery Teal & Mobility Cyan */
  --color-accent-700:  #0f766e;
  --color-accent-600:  #0d9488;
  --color-accent-500:  #14b8a6;
  --color-accent-200:  #99f6e4;
  --color-accent-100:  #ccfbf1;
  --color-accent-50:   #f0fdfa;

  /* Premium Accent: Titanium Slate & Warm Amber */
  --color-titanium-800: #1e293b;
  --color-titanium-600: #475569;
  --color-titanium-100: #f1f5f9;
  --color-amber-600:    #d97706;
  --color-amber-500:    #f59e0b;
  --color-amber-100:    #fef3c7;

  /* Surface & Neutral Typography */
  --color-surface-bg:   #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Functional Status Colors */
  --color-success:      #10b981; /* Mild pain / Confirmed slot */
  --color-warning:      #f59e0b; /* Moderate pain / Few slots remaining */
  --color-danger:       #ef4444; /* Severe joint pain / Acute fracture hotline */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.90);
  --glass-border:       rgba(37, 99, 235, 0.12);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.08);
  --card-shadow:        0 4px 20px -2px rgba(15, 23, 42, 0.06);
  --card-shadow-hover:  0 20px 25px -5px rgba(37, 99, 235, 0.16), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens */
  --radius-sm:          8px;
  --radius-md:          14px;
  --radius-lg:          24px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.65`) for effortless reading by elderly joint pain patients.
- **Numbers / Severity Scores / Token ID:** Monospaced or tabular figures (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Robotic knee surgery, bone anatomy, orthopedic surgeon portraits, physiotherapy gym)
│   └── icons/  (Bone, Activity, ShieldCheck, Video, Calendar, Clock, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + emergency fracture dial pill)
│   │   ├── Footer.jsx (Bootstrap row/col grid with clinic & physiotherapy hours)
│   │   ├── WhatsAppFloatButton.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column responsive layout)
│   │   ├── ClinicalMetricsBar.jsx (Animated counter numbers strip)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs ApexOrtho digital table)
│   │   ├── SurgeryGuideSection.jsx (Robotic Knee, Hip, Arthroscopy, Spine cards)
│   │   ├── JointPainQuizSection.jsx (60-second interactive WOMAC joint score calculator)
│   │   ├── DualBookingSection.jsx (Orthopedic Surgeon vs Physiotherapist booking tabs)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with orthopedic specialists)
│   │   ├── RehabVideoLibrary.jsx (Filterable exercise video player & checklist)
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified patient feedback)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── OrthoBookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1ServiceTypeSelect.jsx (Surgeon Consultation vs Physiotherapy Rehab)
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & seat validation)
│   │   ├── Step4PatientForm.jsx (Patient details, pain area, X-ray upload toggle)
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── assessment/
│   │   └── JointPainQuizModal.jsx (Full-screen interactive joint assessment modal)
│   └── reception/
│       └── LiveOrthoQueueDisplay.jsx (Simulated Clinic TV Waiting Screen)
├── context/
│   └── BookingContext.jsx (Manages active slots, booked appointments, pain assessment state)
├── data/
│   ├── mockSurgeries.js
│   ├── mockDoctors.js
│   ├── mockRehabVideos.js
│   ├── mockSlots.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Transitions, score gauge pulse, joint mobility animations)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Navigation Bar (Sticky Header)
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(255, 255, 255, 0.90); backdrop-filter: blur(14px)`).
- **Left Element:** Clinic Logo with stylized joint / spine pivot emblem, Brand Name (`ApexOrtho Joint & Spine Hospital`), and a small emerald pulsing dot with text `"OPD & Physio Open • 8:30 AM - 8:30 PM"`.
- **Center Nav Links:**
  - `Surgeries` (Robotic Knee, Hip Replacement, Spine, Sports Injury)
  - `Joint Pain Quiz` (60s Score Check)
  - `Book Slot` (Surgeon Consultation or Physiotherapy)
  - `Rehab Videos` (Post-Op Exercise Guides)
  - `Our Specialists` (MCh / MS Orthopedic Surgeons)
  - `FAQ`
- **Right Action Items:**
  - Emergency Trauma / Fracture Line: Direct dial pill (`+91 98480 33441`).
  - Primary CTA Button: `"Book Appointment"` with a gradient fill (`var(--color-primary-700)` to `var(--color-primary-600)`) with subtle pulsing glow.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ AI-Robotic Joint Replacement • Sub-Millimeter Precision`.
  - Main Heading:
    > **Regain Pain-Free Mobility With Next-Generation Robotic Orthopedics.**
  - Subheading:
    > Walk within 24 hours of surgery. Experience stitchless robotic knee & hip replacements, keyhole sports arthroscopy, advanced spine decompression, and dedicated rehabilitation.
  - Dual CTAs:
    - Primary Button: `Book Orthopedic Consultation` (opens 4-Step Booking Engine).
    - Secondary Button: `Take 60s Joint Pain Assessment ↗` (opens Quiz Modal).
  - Social Proof Strip:
    - Overlapping patient avatar circles.
    - `⭐ 4.9/5 Rating across 1,350+ verified Google Reviews`.
    - Micro-tags: `✓ Walk Same Day Protocol` | `✓ 30-Year Implant Longevity` | `✓ 100% Cashless TPA Network`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res crisp surgical visual (robotic arm joint replacement simulator).
    - Floating Badge 1 (Top-Right): `"Next Slot Today: 04:30 PM (Evening OPD)"` with green active radar dot.
    - Floating Badge 2 (Bottom-Left): `"99.2% Joint Restoration Success Rate"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A high-contrast deep cobalt horizontal strip built with Bootstrap row/col:
1. `14,000+` Successful Knee & Hip Replacements Completed
2. `6,500+` Sports Arthroscopy & Ligament Reconstructions
3. `10+` Senior MCh & MS Orthopedic Surgeons
4. `< 24 Hours` Average Post-Op Walking Mobilization Time

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Orthopedic Hassles vs. ApexOrtho Digital Way"
A comparative problem-solver interactive matrix showcasing why joint practices adopt this platform:

| Traditional Orthopedic Hassle | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Fear of surgery pain and prolonged weeks of bed rest | AI-robotic alignment ensuring zero muscle cutting and same-day walking | Interactive Robotic Recovery Roadmap |
| Confusion between consulting a surgeon vs booking physiotherapy | Segregated booking architecture with one-click toggle for Doctor vs Physio | Dual-Service Slot Engine |
| Patients ignore early arthritis until severe cartilage loss occurs | 60-Second WOMAC clinical joint pain scoring tool with immediate stage diagnosis | Interactive Pain Severity Calculator |
| Lost paper exercise sheets cause improper post-op rehabilitation | Interactive video library with daily exercises, repetition counters, and safety precautions | Filterable Rehab Video Player |

---

### 5.5 Section 4: Orthopedic Surgeries & Treatment Catalog
- **Filter Tabs:**
  `All Treatments (6)` | `Robotic Joint Replacement` | `Sports Injury & Arthroscopy` | `Spine Surgery` | `Non-Surgical Care`
- **6 Core Surgical & Treatment Cards:**
  1. **Robotic Total Knee Replacement (TKR):** Sub-millimeter robotic 3D bone cuts, zero ligament sacrifice, 30-year implant life.
  2. **Dual-Mobility Total Hip Replacement (THR):** Ultra-stable ceramic-on-polyethylene joint with zero dislocation risk.
  3. **Keyhole Arthroscopic ACL & Meniscus Repair:** Minimally invasive camera surgery restoring knee sports stability.
  4. **Endoscopic Spine Decompression (Slip Disc):** 7mm micro-incision outpatient procedure relieving sciatica and nerve pain.
  5. **Rotator Cuff & Shoulder Arthroscopy:** Relieve chronic frozen shoulder and repair torn tendons with suture anchors.
  6. **Autologous Platelet (PRP) Joint Injections:** Non-surgical biological therapy for early Grade 1 & 2 knee osteoarthritis.
- **Card Layout & Elements:**
  - Category pill badge + Procedure Title + Duration chip (`⏱ 45 mins`, `⏱ 60 mins`).
  - Clinical Summary highlighting same-day walking and zero-stitch recovery.
  - Price Tag: Starting package (e.g., `From ₹85,000 / joint` with 100% Cashless TPA tag).
  - Actions:
    - `"View Protocol"`: Opens quick drawer with pre/post-op roadmap and implant choices.
    - `"Book Consultation"`: Pre-selects procedure and launches Booking Modal.

---

### 5.6 Section 5: Interactive 60-Second Joint Pain & Mobility Assessment Quiz
An interactive clinical diagnostic tool based on the international WOMAC Osteoarthritis Index:
- **Interactive Question Flow:**
  - **Question 1:** "Where is your primary pain located?" (*Knee Joint*, *Hip Joint*, *Lower Spine / Back*, *Shoulder*).
  - **Question 2:** "When is the pain most severe?" (*While climbing stairs*, *Starting to walk in the morning*, *Constant pain even while sleeping*, *After sports or lifting*).
  - **Question 3:** "Do you experience joint stiffness or clicking sounds?" (*Morning stiffness $>30$ mins*, *Grating/popping sensations*, *No stiffness, only sharp pain*).
  - **Question 4:** "How does the pain affect your daily walking?" (*Can walk independently*, *Need stick/support*, *Severe limp, cannot walk $>100$ meters*).
- **Interactive Output Screen:**
  - Real-Time Joint Severity Gauge (0–100 Scale): `Mild (0–30)`, `Moderate (31–65)`, `Severe Degeneration (66–100)`.
  - Clinical Staging: e.g., *"Suspected Grade 3 Knee Cartilage Wear"*.
  - Recommended Pathway: *"Recommendation: Digital Weight-Bearing X-Ray + Specialist Knee Consultation"*.
  - Direct Action Button: `"Book Priority Knee Slot"`.

---

### 5.7 Section 6: Dual-Service Booking Engine (Doctor OPD vs Physiotherapy)
A dynamic 4-step progressive modal providing seamless scheduling:
- **Step 1 - Service Toggle:**
  - Option A: `Orthopedic Surgeon Consultation (Joints, Spine, Fractures)`
  - Option B: `Physiotherapy & Rehabilitation Session (Manual Therapy, Ultrasonic, Heat)`
- **Step 2 - Specialist Selection:**
  - Choose a specific surgeon/physiotherapist or `"First Available Specialist (Fastest)"`.
- **Step 3 - Date & Shift Picker:**
  - Date Bar: 7-day rolling calendar strip (`Today, Tomorrow, Day 3...`).
  - Shift Toggle: `Morning Shift (9:00 AM - 1:00 PM)` vs `Evening Shift (4:30 PM - 8:30 PM)`.
  - Slot Chips:
    - Available: Blue border (`09:30 AM`, `11:00 AM`, `05:00 PM`, `06:30 PM`).
    - Filling Fast (1 slot left): Amber badge.
    - Booked: Greyed out.
- **Step 4 - Patient Intake Form:**
  - Full Name, WhatsApp Mobile Number, Age.
  - Affected Joint Selector: `Knee`, `Hip`, `Spine`, `Shoulder`, `Ankle/Foot`.
  - Checkbox: `Have recent X-Ray / MRI scans (Yes/No)`.
- **Confirmation Action & Result Screen:**
  - Generates Instant Token ID: `ORTHO-2026-0518`.
  - **Simulated WhatsApp Notification Pop-up:**
    > *"Hello Venkat! Your consultation at ApexOrtho Joint Hospital is confirmed. Token #ORTHO-0518. Doctor: Dr. S. R. K. Prasad, MS (Ortho). Date: Today at 5:00 PM. Tap here for clinic directions: [ApexOrtho Hospital]"*

---

### 5.8 Section 7: Specialist Orthopedic Surgeons & Physio Team Roster
- Display 4 specialist doctor cards using realistic dummy names:
  1. **Dr. S. R. K. Prasad, MS (Ortho), MCh (Joint Replacement)** — Chief Robotic Joint Replacement Surgeon (20 yrs exp, 8,000+ Surgeries).
  2. **Dr. Arvind K. Varma, MS (Ortho), Fellowship in Arthroscopy (Germany)** — Sports Medicine & Ligament Specialist (14 yrs exp).
  3. **Dr. Meenakshi Sundaram, MS (Ortho), Spine Surgery Fellow** — Minimally Invasive Spine Surgeon (12 yrs exp).
  4. **Dr. P. Kishore, MPT (Ortho & Sports Rehab)** — Head of Physiotherapy & Pain Management (11 yrs exp).
- **Card Interactive State:**
  - Professional clinical portrait in surgical attire.
  - Medical Council Reg. No. (`APMC-16820`), special clinical focus areas.
  - Available Days chips (`Mon - Sat`).
  - CTA Button: `"Book with Dr. [Name]"`.

---

### 5.9 Section 8: Post-Op Rehabilitation Video Guide Library (Bonus Showcase)
An interactive patient exercise recovery portal:
- **Milestone Category Tabs:**
  `Phase 1: Week 1–2 (Bedside Mobility)` | `Phase 2: Week 3–6 (Walking & Stairs)` | `Phase 3: Week 7–12 (Strength & Independence)`
- **4 Featured Guided Video Cards:**
  1. **Quadriceps Isometric Sets & Ankle Pumps** (Duration: 4 mins) — Prevents blood clots, restores initial knee extension.
  2. **Seated Knee Flexion & Heel Slides** (Duration: 6 mins) — Safely achieves 90-degree bend without strain.
  3. **Walker to Cane Transition & Gait Correction** (Duration: 5 mins) — Balance exercises for independent unassisted walking.
  4. **Low-Impact Stationary Cycling Protocol** (Duration: 8 mins) — Builds stamina and joint fluid circulation.
- **Interactive Elements:**
  - Repetition counter (`3 Sets x 10 Reps daily`).
  - "Watch Video Guide" modal with video player placeholder and safety precaution checklist.

---

### 5.10 Section 9: Live Clinic OPD Queue & Waiting Room Screen
A dedicated interactive widget showing what waiting patients see on the OPD monitor:
- **Current Token Being Treated:** `#ORTHO-0515 (Room 1 - Dr. Prasad)`
- **Next In Line:** `#ORTHO-0516 (Room 2)` and `#ORTHO-0518 (Your Token - Estimated wait: 14 mins)`.
- **Live Doctors & Physio Rooms on Duty:** 3 Consultation Rooms + 2 Active Physiotherapy Stations.

---

### 5.11 Section 10: Patient Trust, Video Reviews & Google Ratings
- **Header:** `"Trusted by Over 20,000 Active Patients Back on Their Feet"`.
- 3 Video Testimonial Thumbnails with play button overlays (*"Walking Unassisted on Day 2 After Robotic Knee Surgery - Mrs. Lakshmi, 64 yrs"*).
- Grid of 6 Verified Google Reviews with star ratings, reviewer photo, procedure tag, and surgeon feedback.
- Trust Badges: NABH Accredited Orthopedic Center, US-FDA Certified Robotic Systems, 100% Cashless TPA Network.

---

### 5.12 Section 11: Comprehensive Orthopedic & Joint FAQs Accordion
Interactive Bootstrap accordion answering patient doubts:
1. *How soon after robotic knee replacement can I walk without a walker?*
2. *What is the lifespan of modern Oxinium and Titanium joint implants?*
3. *Is robotic knee surgery completely covered under private health insurance?*
4. *What non-surgical treatment options exist before considering joint replacement?*
5. *Can keyhole arthroscopy cure ACL and meniscus tears without open surgery?*
6. *How many physiotherapy sessions are typically required after surgery?*

---

### 5.13 Section 12: Footer & Contact Section
- Location & Opening Hours table (Hospital OPD & Physio: `8:30 AM - 1:00 PM` & `4:30 PM - 8:30 PM` | Emergency Fracture & Trauma: `24/7 Open`).
- Direct Contact: Phone call link (`+91 98480 33441`), WhatsApp direct link, Hospital Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockSurgeries.js`
```javascript
export const mockSurgeries = [
  {
    id: "robotic-knee",
    name: "Robotic Total Knee Replacement (TKR)",
    category: "Robotic Joint Replacement",
    tagline: "Sub-millimeter AI robotic bone cuts with same-day walking protocol.",
    duration: "45-60 mins",
    startingPrice: 85000,
    insuranceCovered: true,
    stages: ["3D CT Pre-Op Scan", "Robotic Resection", "Oxinium Joint Implantation"],
    icon: "Bone",
    badge: "Most Performed",
    doctorSpecialty: "Joint Replacement Surgeon"
  },
  {
    id: "hip-replacement",
    name: "Dual-Mobility Total Hip Replacement (THR)",
    category: "Robotic Joint Replacement",
    tagline: "High-stability ceramic joint designed for active sitting and natural gait.",
    duration: "60 mins",
    startingPrice: 95000,
    insuranceCovered: true,
    stages: ["Minimally Invasive Entry", "Socket Reconstruction", "Ceramic Modular Fixation"],
    icon: "Activity",
    badge: "Zero Dislocation",
    doctorSpecialty: "Joint Replacement Surgeon"
  },
  {
    id: "acl-arthroscopy",
    name: "Keyhole ACL & Meniscus Reconstruction",
    category: "Sports Injury & Arthroscopy",
    tagline: "Daycare sports arthroscopy restoring full knee pivot stability.",
    duration: "40 mins daycare",
    startingPrice: 48000,
    insuranceCovered: true,
    stages: ["High-Definition Keyhole Arthroscopy", "Hamstring Autograft", "Bio-Absorbable Screw Seal"],
    icon: "ShieldCheck",
    badge: "Sports Recovery",
    doctorSpecialty: "Arthroscopy Specialist"
  },
  {
    id: "endoscopic-spine",
    name: "Endoscopic Micro-Discectomy (Slip Disc)",
    category: "Spine Surgery",
    tagline: "Ultra-small 7mm keyhole surgery relieving sciatica nerve compression.",
    duration: "30 mins",
    startingPrice: 65000,
    insuranceCovered: true,
    stages: ["Local Anesthesia", "Targeted Endoscopic Canal Entry", "Fragment Removal"],
    icon: "Activity",
    badge: "No Stitch",
    doctorSpecialty: "Spine Surgeon"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-ortho-1",
    name: "Dr. S. R. K. Prasad, MS (Ortho), MCh",
    title: "Chief Robotic Joint Replacement Surgeon",
    experienceYears: 20,
    education: "MS - Orthopedics (AIIMS), MCh Orth (UK)",
    rating: 4.96,
    reviewCount: 540,
    avatar: "/assets/images/doctors/dr-prasad.jpg",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    specialtySlug: "robotic-knee"
  },
  {
    id: "doc-ortho-2",
    name: "Dr. Arvind K. Varma, MS (Ortho)",
    title: "Senior Sports Arthroscopy & Knee Specialist",
    experienceYears: 14,
    education: "MS (Ortho), Fellowship in Sports Medicine (Germany)",
    rating: 4.9,
    reviewCount: 410,
    avatar: "/assets/images/doctors/dr-varma.jpg",
    availableDays: ["Mon", "Wed", "Fri", "Sat"],
    specialtySlug: "acl-arthroscopy"
  },
  {
    id: "doc-physio-1",
    name: "Dr. P. Kishore, MPT (Ortho & Sports)",
    title: "Head of Physiotherapy & Pain Rehabilitation",
    experienceYears: 11,
    education: "Masters in Physiotherapy (MPT Ortho)",
    rating: 4.88,
    reviewCount: 390,
    avatar: "/assets/images/doctors/dr-kishore.jpg",
    availableDays: ["Daily (Mon - Sat)"],
    specialtySlug: "physiotherapy"
  }
];
```

### 6.3 `mockRehabVideos.js`
```javascript
export const mockRehabVideos = [
  {
    id: "rehab-1",
    title: "Quadriceps Isometric Sets & Ankle Pumps",
    phase: "Phase 1: Week 1–2",
    targetJoint: "Knee Replacement",
    duration: "4 mins",
    reps: "3 Sets of 10 Reps daily",
    videoThumbnail: "/assets/images/rehab/quad-sets.jpg",
    description: "Crucial first-phase exercise to activate thigh muscles and prevent deep vein thrombosis (DVT)."
  },
  {
    id: "rehab-2",
    title: "Seated Knee Flexion & Gentle Heel Slides",
    phase: "Phase 1: Week 1–2",
    targetJoint: "Knee Replacement",
    duration: "6 mins",
    reps: "2 Sets of 8 Reps",
    videoThumbnail: "/assets/images/rehab/heel-slides.jpg",
    description: "Safely achieve initial 90-degree knee bending using bed sheet assistance."
  },
  {
    id: "rehab-3",
    title: "Walker to Single-Cane Transition Drill",
    phase: "Phase 2: Week 3–6",
    targetJoint: "Hip & Knee",
    duration: "5 mins",
    reps: "Twice daily walking drill",
    videoThumbnail: "/assets/images/rehab/walker-transition.jpg",
    description: "Step-by-step gait training to transition away from two-handed walkers safely."
  }
];
```

### 6.4 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Shift (Surgeon OPD & Physio)
  { id: "sm1", time: "09:30 AM", shift: "morning", type: "Surgeon OPD", available: true },
  { id: "sm2", time: "10:30 AM", shift: "morning", type: "Physiotherapy", available: true, fewLeft: true },
  { id: "sm3", time: "11:30 AM", shift: "morning", type: "Surgeon OPD", available: false }, // Booked
  { id: "sm4", time: "12:30 PM", shift: "morning", type: "Physiotherapy", available: true },

  // Evening Shift
  { id: "se1", time: "04:30 PM", shift: "evening", type: "Surgeon OPD", available: true },
  { id: "se2", time: "05:30 PM", shift: "evening", type: "Physiotherapy", available: false }, // Booked
  { id: "se3", time: "06:30 PM", shift: "evening", type: "Surgeon OPD", available: true, fewLeft: true },
  { id: "se4", time: "07:30 PM", shift: "evening", type: "Physiotherapy", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Staggered Scroll Entrance:**
   - Apply `opacity: 0, translateY: 30px` transitioning to `opacity: 1, translateY: 0` with a `0.1s` stagger delay for surgery cards and doctor profiles.
2. **Interactive Joint Score Gauge Animation:**
   - On completing the 4 quiz questions, animate the circular or semi-circular WOMAC severity gauge from `0` to the calculated score over `1.5s` with dynamic color shift (Green $\rightarrow$ Yellow $\rightarrow$ Red).
3. **Interactive Slot Selector Feedback:**
   - When a slot is clicked, scale slightly (`scale: 1.05`), turn the background to `var(--color-primary-600)`, text to `#ffffff`, and display a tiny green checkmark icon inside the chip.
4. **Modal Entrance & Backdrop Blur:**
   - Backdrops must have `backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.45)`.
   - Modals should scale up smoothly from `0.95` to `1.0` with spring physics (`damping: 25, stiffness: 300`).
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification sound/vibration effect 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 75% of orthopedic patients and their family caregivers access services from smartphones:
- **Sticky Bottom Action Bar on Mobile:**
  When scrolled past the hero, display a persistent bottom bar with:
  - Phone emergency fracture call button (`📞 Emergency Fracture Line`)
  - Full-width CTA button (`⚡ Book Appointment - Today Available`)
- **Horizontal Swipeable Carousels:**
  Surgery cards, rehab exercise videos, and date pickers must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and quiz radio cards must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for cobalt surgical blue, titanium slate, and recovery teal in `globals.css`.
- [ ] Implement Sticky Glassmorphic Navbar with working smooth scroll and emergency trauma hotline button.
- [ ] Build Hero Section with floating robotic surgery badges and rating strip using Bootstrap grid.
- [ ] Build Surgery & Treatment Catalog with category filter tabs, duration tags, and starting prices.
- [ ] Implement 60-Second Interactive Joint Pain & Mobility Assessment Quiz with dynamic WOMAC score calculation.
- [ ] Build Dual-Service Booking Engine (Doctor Consultation vs Physiotherapy) with shift toggle, slot chips, and token generation (`ORTHO-2026-XXXX`).
- [ ] Build Doctor & Physiotherapist Profiles with credentials and direct booking action.
- [ ] Build Post-Op Rehabilitation Video Guide Library with exercise cards and repetition checklists.
- [ ] Build Simulated Live OPD Waiting Room TV Screen (`/queue`).
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
