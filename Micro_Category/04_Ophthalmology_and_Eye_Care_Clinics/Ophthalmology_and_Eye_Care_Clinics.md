# Frontend Development Specification
## Business 04: Ophthalmology & Eye Care Clinics
### Project: Eye Care & Optical Storefront Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Comprehensive Eye Hospitals, Cataract & Refractive (LASIK/SMILE) Centers, Pediatric Ophthalmology Practices, Retina Clinics, and Integrated Optical Prescription Dispensaries.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for high-precision grid layouts, responsive flex wrappers, and accessible UI components.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework combined with a custom CSS Design System (`variables.css` / `style.css`) using CSS Custom Properties for optical laser cyan, surgical sapphire navy, sterile whites, and warm amber accents.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Offcanvas controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide ophthalmologists, eye surgeons, and optical boutique owners with a high-fidelity, interactive, and visually stunning digital experience. The application demonstrates how modern web software removes surgical hesitation for Cataract & LASIK patients, automates computerized vision checkup reservations, showcases designer spectacle frames with virtual lens pricing, and connects consultation tokens directly to in-clinic waiting room displays and automated WhatsApp notifications.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial eye clinic and optical store pain points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Patient Hesitation on Cataract & LASIK Surgeries** | Fear of blade surgery, opaque intraocular lens (IOL) choices (Monofocal vs Multifocal), and uncertainty over recovery time. | **Interactive Surgical Visual Guide & Lens Comparison Matrix** with 3D eye anatomy diagrams, blade-free laser explanations, and side-by-side vision simulator. |
| **Unpredictable Waiting Times for Dilated Eye Exams** | Routine eye exams require 30–45 mins of pupil dilation, leading to chaotic waiting rooms and frustrated patients. | **2-Step Morning/Evening Vision Slot Booking Engine** with segregated slot types (Quick Spectacle Power Check vs Comprehensive Dilated Retina Exam) and seat counters. |
| **Lost Optical Prescription Revenue** | Patients get eye exams at the clinic but walk away to purchase frames and lenses from discount online retailers. | **Integrated Optical Storefront & Digital Frame Catalog** showcasing trending spectacle frames (Titanium, Acetate, Rimless) with 1-Click WhatsApp Prescription Order Cart. |
| **Elderly & Screen-Fatigued Patient Accessibility** | Eye care patients often struggle to read small web fonts, harsh contrast, or cluttered interfaces. | **Accessibility Display Mode Controller** (One-click toggle for High Contrast Mode, AAA Large Text Size, and Screen-Reader Friendly Spacing). |
| **Receptionist Phone Overload Answering Basic Queries** | Staff spends 40%+ of their day answering "Is doctor available today?", "What is my OPD token?", and "How much does a cataract lens cost?". | **Simulated Live Clinic OPD Waiting Room Screen** and **Instant WhatsApp Booking Alert** with sequential token issuance (`EYE-2026-XXXX`). |

---

## 3. Design System & Visual Tokens

The frontend must convey optical precision, surgical sterile clarity, laser technology excellence, and calming visual comfort. **Avoid harsh red tones or blurry drop shadows.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Deep Surgical Sapphire & Optical Navy */
  --color-primary-950: #031329;
  --color-primary-900: #072042;
  --color-primary-800: #0a2d5c;
  --color-primary-700: #0c3b78;
  --color-primary-600: #0284c7; /* Main Precision Blue */
  --color-primary-500: #0ea5e9;
  --color-primary-200: #bae6fd;
  --color-primary-100: #e0f2fe;
  --color-primary-50:  #f0f9ff;

  /* Accent: High-Tech Laser Cyan & Emerald Optics */
  --color-accent-600:  #0891b2;
  --color-accent-500:  #06b6d4;
  --color-accent-400:  #22d3ee;
  --color-accent-100:  #cffafe;
  --color-accent-50:   #ecfeff;

  /* Premium Accent: Warm Champagne Amber (VIP Multifocal & Designer Frames) */
  --color-amber-600:   #d97706;
  --color-amber-500:   #f59e0b;
  --color-amber-100:   #fef3c7;

  /* Surface & Neutral Typography */
  --color-surface-bg:   #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Functional Status Colors */
  --color-success:      #10b981; /* Confirmed slot / Clear vision */
  --color-warning:      #f59e0b; /* Few slots remaining / Blurry zone */
  --color-danger:       #ef4444; /* Emergency retinal detachment hotline */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.90);
  --glass-border:       rgba(2, 132, 199, 0.14);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.08);
  --card-shadow:        0 4px 20px -2px rgba(15, 23, 42, 0.06);
  --card-shadow-hover:  0 20px 25px -5px rgba(2, 132, 199, 0.16), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens */
  --radius-sm:          8px;
  --radius-md:          14px;
  --radius-lg:          24px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.65`) for effortless reading by patients with visual fatigue.
- **Numbers / Diopter Power / Token ID:** Monospaced or tabular numbers (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Laser workstation, ophthalmology heroes, eye anatomy, spectacle frames)
│   └── icons/  (Eye, Glasses, Scan, ShieldCheck, Clock, Calendar, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + high-contrast accessibility toggle)
│   │   ├── Footer.jsx (Bootstrap row/col grid with clinic & optical hours)
│   │   ├── WhatsAppFloatButton.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column responsive layout)
│   │   ├── ClinicalMetricsBar.jsx (Animated counter numbers strip)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs IrisVision digital table)
│   │   ├── SurgeryGuideSection.jsx (Cataract, LASIK, SMILE, Glaucoma interactive cards)
│   │   ├── LensComparisonMatrix.jsx (Interactive Monofocal vs Toric vs Multifocal IOL tool)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with eye surgeon profiles)
│   │   ├── OpticalStorefront.jsx (Spectacle frame catalog + lens options)
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified patient feedback)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── VisionBookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1ExamTypeSelect.jsx (Power Check vs Dilated Exam vs LASIK Evaluation)
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & seat validation)
│   │   ├── Step4PatientForm.jsx (Patient details & spectacle power upload)
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── store/
│   │   ├── FrameCard.jsx
│   │   ├── FrameDetailModal.jsx
│   │   └── OpticalCartOffcanvas.jsx (Bootstrap Offcanvas frame order cart)
│   ├── assessment/
│   │   └── VisionSelfCheckQuizModal.jsx (60-second digital eye strain & blur test)
│   └── reception/
│       └── LiveOphthalmologyQueueDisplay.jsx (Simulated Clinic TV Waiting Screen)
├── context/
│   ├── BookingContext.jsx (Manages active slots, booked appointments, token state)
│   └── OpticalCartContext.jsx (Manages selected spectacle frames and WhatsApp prescription order)
├── data/
│   ├── mockSurgeries.js
│   ├── mockDoctors.js
│   ├── mockOpticalFrames.js
│   ├── mockSlots.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Transitions, laser pulse, blur/clarity slider)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Navigation Bar (Sticky Header)
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(255, 255, 255, 0.90); backdrop-filter: blur(14px)`).
- **Left Element:** Clinic Logo with stylized iris / optical lens emblem, Brand Name (`IrisVision Eye Hospital & Optical Studio`), and a small emerald pulsing dot with text `"OPD Open Today • 9:00 AM - 8:00 PM"`.
- **Center Nav Links:**
  - `Eye Surgeries` (Cataract, Blade-Free LASIK, Glaucoma)
  - `IOL Lens Guide` (Interactive Lens Comparison)
  - `Spectacle Frames` (Optical Storefront with item counter badge)
  - `Our Surgeons` (Ophthalmologists & Retina Specialists)
  - `Vision Self-Check` (60s Screen Strain Quiz)
  - `FAQ`
- **Right Action Items:**
  - Accessibility Controller: `A+ / A-` font sizer and High-Contrast toggle.
  - Emergency Eye Care Pill: Direct dial (`+91 98480 44221`).
  - Primary CTA Button: `"Book Eye Checkup"` with a gradient fill (`var(--color-primary-700)` to `var(--color-primary-600)`) with subtle pulsing glow.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ AI-Guided Blade-Free Laser • German Zeiss Diagnostics`.
  - Main Heading:
    > **Crystal Clear Vision Powered by Advanced Ophthalmology & Laser Precision.**
  - Subheading:
    > Say goodbye to cloudy cataracts and glasses. Experience zero-blade LASIK, custom intraocular lenses, comprehensive diabetic eye screening, and designer eyewear.
  - Dual CTAs:
    - Primary Button: `Book Comprehensive Eye Exam` (opens 4-Step Booking Engine).
    - Secondary Button: `Take 60s Vision Self-Check ↗` (opens Quiz Modal).
  - Social Proof Strip:
    - Overlapping patient avatar circles.
    - `⭐ 4.9/5 Rating across 1,600+ verified Google Reviews`.
    - Micro-tags: `✓ NABH Accredited Hospital` | `✓ 10-Minute Blade-Free Lasik` | `✓ 100% Cashless TPA Insurance`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res crisp surgical visual (ophthalmologist operating robotic laser workstation).
    - Floating Badge 1 (Top-Right): `"Next Slot Today: 04:30 PM (Evening OPD)"` with green active radar dot.
    - Floating Badge 2 (Bottom-Left): `"25,000+ Cataracts Restored • 99.8% Success Rate"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A high-contrast deep sapphire horizontal strip built with Bootstrap row/col:
1. `35,000+` Comprehensive Vision Checkups Completed
2. `18,500+` Micro-Incision Phaco Cataract Surgeries
3. `6,200+` Blade-Free Robotic LASIK & SMILE Procedures
4. `< 12 Mins` Average Waiting Time with Digital Token

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Eye Clinic Hassles vs. IrisVision Digital Way"
A comparative problem-solver interactive matrix showcasing why eye hospitals adopt this platform:

| Traditional Eye Clinic Hassle | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Patients fear eye surgery pain and do not understand artificial lenses | Transparent visual guide comparing Monofocal, Toric, and Multifocal IOLs | Interactive IOL Lens Simulator |
| Unpredictable waiting room delays during 45-min pupil dilation | Segregated appointment slots for quick power check vs dilated retina scans | Segregated Exam Slot Engine |
| Patients take their eye prescription and buy generic glasses elsewhere | Integrated in-clinic optical catalog with 1-click WhatsApp prescription ordering | Spectacle Catalog & Cart Drawer |
| Confusion about cashless medical insurance coverage for cataract surgeries | Direct insurance eligibility indicator and 0% interest EMI calculator | Interactive Insurance & EMI Widget |

---

### 5.5 Section 4: Cataract & Laser Eye Surgery Information Guide
- **Filter Tabs:**
  `All Procedures (6)` | `Cataract Surgery` | `LASIK & Contoura` | `Retina & Diabetic Eye` | `Glaucoma Care`
- **6 Core Surgical Cards:**
  1. **Robotic Blade-Free Femto-Cataract:** Micro-incision laser fragmentation, rapid healing, 15-minute daycare procedure.
  2. **Contoura Vision Topography-Guided LASIK:** Precision vision correction beyond glasses (20/15 visual acuity potential).
  3. **Zeiss SMILE Pro Flapless Laser:** Ultra-gentle keyhole refractive surgery with zero corneal flap complications.
  4. **Diabetic Retinopathy Anti-VEGF Therapy:** Retinal laser photocoagulation and intravitreal injections for macular edema.
  5. **Selective Laser Trabeculoplasty (Glaucoma):** Painless out-patient laser reducing intraocular eye pressure safely.
  6. **Pediatric Strabismus (Squint) Correction:** Micro-surgical alignment of eye muscles restoring binocular 3D vision.
- **Card Layout & Elements:**
  - Surgical category badge + Procedure Title + Duration chip (`⏱ 15 mins`).
  - Visual summary highlighting daycare safety & zero-stitch recovery.
  - Price Tag: Starting package (e.g., `From ₹18,500 / eye` with TPA Cashless Insurance tag).
  - Actions:
    - `"View Surgical Protocol"`: Opens quick drawer with pre-op guidelines and IOL choices.
    - `"Book Consultation"`: Pre-selects procedure and launches Booking Modal.

---

### 5.6 Section 5: Interactive Intraocular Lens (IOL) Comparison Matrix
An interactive tool allowing prospective cataract patients to compare different artificial lens technologies:
- **Interactive Lens Cards:**
  1. **Standard Monofocal Lens:** Sharp distance vision; reading glasses required for near work.
  2. **Toric Astigmatism Lens:** Corrects corneal cylindrical power and cataract in a single sitting.
  3. **Advanced Trifocal / Extended Depth of Focus (EDOF):** Complete freedom from glasses for distance, intermediate (computer/driving), and near reading.
- **Interactive Vision Simulator:**
  - Interactive slider or toggle showing a sample scene (Night Driving, Reading a Book, Laptop Work) under Monofocal vs Trifocal vision.

---

### 5.7 Section 6: Specialist Ophthalmologists & Eye Surgeons Team
- Display 4 specialist doctor cards using realistic dummy names:
  1. **Dr. S. Mohan Rao, MS (Ophthalmology), FICO (UK)** — Chief Cataract & Cornea Refractive Surgeon (18 yrs exp).
  2. **Dr. Radhika Varma, MS, DNB, Fellowship in Vitreo-Retina** — Senior Retinal Specialist (14 yrs exp).
  3. **Dr. K. Srinivas Murthy, MS (Ophth), Glaucoma Fellow** — Glaucoma Specialist & Anterior Segment Surgeon (12 yrs exp).
  4. **Dr. P. Swathi, DOMS, Fellowship in Pediatric Ophthalmology** — Squint & Child Eye Care Specialist (10 yrs exp).
- **Card Interactive State:**
  - Doctor portrait in sterile clinical coat.
  - Medical Council Reg. No. (`APMC-18492`), surgical count (`12,000+ Surgeries`).
  - Next Available Badge: `"Available Today @ 4:30 PM"`.
  - CTA Button: `"Book Consultation"`.

---

### 5.8 Section 7: The End-to-End Interactive Vision Booking Engine (Core Prototype Feature)
A 4-step wizard accessible from anywhere on the portal:

```
[ Step 1: Select Exam Type ] ──> [ Step 2: Choose Specialist ] ──> [ Step 3: Date & Slot Picker ] ──> [ Step 4: Patient Info & Token ]
```

#### Step Details:
1. **Step 1 - Exam Category:**
   - Visual radio cards:
     - `Computerized Power & Spectacle Checkup (20 mins)`
     - `Comprehensive Dilated Retina Exam (45 mins)`
     - `Cataract Surgery Evaluation & A-Scan`
     - `LASIK & Contoura Pre-Eligibility Test`
2. **Step 2 - Specialist Choice:** Option to select a dedicated surgeon or `"First Available Doctor (Fastest)"`.
3. **Step 3 - Date & Shift Picker:**
   - Date Bar: 7-day rolling calendar strip (`Today, Tomorrow, Day 3...`).
   - Shift Toggle: `Morning Shift (9:00 AM - 1:00 PM)` vs `Evening Shift (4:30 PM - 8:30 PM)`.
   - Slot Chips:
     - Available: Green border (`09:30 AM`, `11:00 AM`, `05:00 PM`, `06:30 PM`).
     - Filling Fast (1 slot left): Amber badge.
     - Booked: Greyed out.
4. **Step 4 - Patient Details & Instant Confirmation:**
   - Full Name, WhatsApp Mobile Number, Age.
   - Checkbox: `Existing glasses wearer (Yes/No)`.
   - On submission: Generates Instant Token ID: `EYE-2026-0491`.
   - **Simulated WhatsApp Notification Pop-up:**
     > *"Hello Suresh! Your vision exam at IrisVision Eye Hospital is confirmed. Token #EYE-0491. Doctor: Dr. S. Mohan Rao. Date: Today at 4:30 PM. Tap here for clinic directions: [IrisVision Hospital]"*

---

### 5.9 Section 8: Optical Storefront & Digital Spectacle Catalog (Bonus Showcase)
An interactive retail optical showroom demonstrating monetization beyond doctor fees:
- **Frame Categories:** `Lightweight Titanium` | `Acetate Modern` | `Classic Rimless` | `Kids Flexible`
- **4 Featured Eyewear Models:**
  1. **AeroLite Pure Titanium Rimless** (Matte Gunmetal, ₹2,499) — Featherweight 8.5g, corrosion resistant.
  2. **UrbanClassic Blue-Cut Block Acetate** (Glossy Tortoise, ₹1,899) — Includes anti-glare screen coating.
  3. **FlexiGuard Pediatric Silicone Frames** (Sky Blue, ₹1,299) — Unbreakable bendable hinge for kids.
  4. **Polarized Magnetic Clip-On Sun-Spectacles** (Matte Black, ₹2,199) — Prescription spectacles with 1-click sunglasses.
- **Interactive Features:**
  - Lens Type Selector: `Anti-Glare Blue-Filter (+₹800)`, `Progressive Multifocal (+₹2,400)`.
  - `"Add to Optical Cart"` with instant toast notification.
  - Bootstrap Offcanvas Cart Drawer with a **"Order Eyewear via WhatsApp"** button that formats selected frames and lens specs into a WhatsApp message.

---

### 5.10 Section 9: 60-Second Online Vision Self-Check Quiz
A guided 3-question visual fatigue and refractive self-assessment:
- **Q1:** "What visual difficulty are you currently experiencing?" (*Difficulty reading small phone text*, *Blurry distance road signs*, *Cloudy halos around night headlights*, *Headaches after laptop work*).
- **Q2:** "When was your last eye exam by an eye specialist?" (*Never / First time*, *Within last year*, *More than 2 years ago*).
- **Q3:** "Do you have a personal or family history of Diabetes or Glaucoma?" (*Yes*, *No*, *Not sure*).
- **Result Output:**
  - Diagnostic insight (e.g., *"Suspected Presbyopia / Early Cataract Haze"*).
  - Recommended Exam: Comprehensive Dilated Eye Examination.
  - Direct CTA: `"Book Priority Examination Slot"`.

---

### 5.11 Section 10: Patient Trust, Video Reviews & Google Ratings
- **Header:** `"Trusted by Over 35,000 Clear Eyes Across the Region"`.
- Grid of 6 Verified Google Reviews with star ratings, reviewer photo, cataract/LASIK badge, and doctor feedback.
- Trust Badges: NABH Accredited Facility, Carl Zeiss German Optics Center, 100% Cashless TPA Network.

---

### 5.12 Section 11: Comprehensive Eye Care FAQs Accordion
Interactive Bootstrap accordion answering patient doubts:
1. *Is laser cataract surgery completely blade-free and painless?*
2. *How soon after LASIK surgery can I return to laptop work and driving?*
3. *What is the difference between Monofocal and Multifocal intraocular lenses?*
4. *Why is pupil dilation necessary for a comprehensive eye checkup?*
5. *Can I get cashless insurance reimbursement for cataract procedures?*
6. *How do blue-light blocking lenses protect eyes from digital computer fatigue?*

---

### 5.13 Section 12: Footer & Contact Section
- Location & Opening Hours table (Hospital OPD: `9:00 AM - 1:00 PM` & `4:30 PM - 8:30 PM` | Emergency Retina/Trauma: `24/7 Available`).
- Direct Contact: Phone call link (`+91 98480 44221`), WhatsApp direct link, Hospital Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockSurgeries.js`
```javascript
export const mockSurgeries = [
  {
    id: "femto-cataract",
    name: "Robotic Blade-Free Femto Cataract",
    category: "Cataract Surgery",
    tagline: "Ultra-precision laser cataract removal with rapid 24-hour visual recovery.",
    duration: "15 mins daycare",
    startingPrice: 18500,
    insuranceCovered: true,
    stages: ["Laser Corneal Incision", "Ultrasonic Lens Liquefaction", "Foldable IOL Implantation"],
    icon: "Eye",
    badge: "Most Performed"
  },
  {
    id: "contoura-lasik",
    name: "Contoura Vision 3D Topography LASIK",
    category: "LASIK & Contoura",
    tagline: "Custom corneal mapping measuring 22,000 unique elevation points for HD vision.",
    duration: "10 mins both eyes",
    startingPrice: 38000,
    insuranceCovered: false,
    stages: ["Wavefront Corneal Map", "Femtosecond Flap Creation", "Excimer Laser Reshaping"],
    icon: "Scan",
    badge: "Blade-Free"
  },
  {
    id: "diabetic-retina",
    name: "Diabetic Retinopathy & Macular Laser",
    category: "Retina & Diabetic Eye",
    tagline: "Prevent diabetes-induced blindness with targeted green laser photocoagulation.",
    duration: "30 mins",
    startingPrice: 7500,
    insuranceCovered: true,
    stages: ["Fundus Fluorescein Angiography", "Pupil Dilation", "Painless Retinal Laser"],
    icon: "ShieldCheck",
    badge: "Vision Saver"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-eye-1",
    name: "Dr. S. Mohan Rao, MS (Ophth), FICO (UK)",
    title: "Chief Cataract & Refractive Laser Surgeon",
    experienceYears: 18,
    education: "MS - Ophthalmology (AIIMS), Fellow Royal College of Surgeons",
    rating: 4.95,
    reviewCount: 520,
    avatar: "/assets/images/doctors/dr-mohan.jpg",
    availableDays: ["Mon", "Tue", "Thu", "Fri", "Sat"],
    specialtySlug: "femto-cataract"
  },
  {
    id: "doc-eye-2",
    name: "Dr. Radhika Varma, MS, DNB (Retina)",
    title: "Senior Vitreo-Retinal Surgeon",
    experienceYears: 14,
    education: "MS (Ophthalmology), Vitreo-Retina Fellowship (Sankara Nethralaya)",
    rating: 4.9,
    reviewCount: 380,
    avatar: "/assets/images/doctors/dr-radhika.jpg",
    availableDays: ["Mon", "Wed", "Fri", "Sat"],
    specialtySlug: "diabetic-retina"
  }
];
```

### 6.3 `mockOpticalFrames.js`
```javascript
export const mockOpticalFrames = [
  {
    id: "opt-frame-1",
    name: "AeroLite Pure Titanium Rimless",
    category: "Lightweight Titanium",
    price: 2499,
    mrp: 3499,
    weight: "8.5 grams",
    shape: "Rimless Rectangle",
    badge: "Featherweight",
    description: "Medical-grade Japanese titanium with flexible bridge. Zero pressure on nose bridge.",
    image: "/assets/images/optical/titanium-rimless.jpg"
  },
  {
    id: "opt-frame-2",
    name: "UrbanClassic Blue-Cut Block Acetate",
    category: "Acetate Modern",
    price: 1899,
    mrp: 2499,
    weight: "16 grams",
    shape: "Square Classic",
    badge: "Screen Protection",
    description: "Handcrafted Italian acetate fitted with zero-power anti-reflective computer lenses.",
    image: "/assets/images/optical/acetate-square.jpg"
  },
  {
    id: "opt-frame-3",
    name: "Polarized Clip-On Sun-Spectacles",
    category: "Magnetic Sunglasses",
    price: 2199,
    mrp: 2999,
    weight: "18 grams",
    shape: "Wayfarer",
    badge: "2-in-1 Design",
    description: "Magnetic UV400 polarized dark sunglasses clip onto clear prescription spectacles.",
    image: "/assets/images/optical/magnetic-clipon.jpg"
  }
];
```

### 6.4 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Shift
  { id: "om1", time: "09:30 AM", shift: "morning", available: true },
  { id: "om2", time: "10:30 AM", shift: "morning", available: true, fewLeft: true },
  { id: "om3", time: "11:30 AM", shift: "morning", available: false }, // Booked
  { id: "om4", time: "12:30 PM", shift: "morning", available: true },

  // Evening Shift
  { id: "oe1", time: "04:30 PM", shift: "evening", available: true },
  { id: "oe2", time: "05:30 PM", shift: "evening", available: false }, // Booked
  { id: "oe3", time: "06:30 PM", shift: "evening", available: true, fewLeft: true },
  { id: "oe4", time: "07:30 PM", shift: "evening", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Staggered Scroll Entrance:**
   - Apply `opacity: 0, translateY: 30px` transitioning to `opacity: 1, translateY: 0` with a `0.1s` stagger delay for surgery and optical frame cards.
2. **Interactive Vision Clarity Blur Slider:**
   - When users drag the IOL comparison slider, dynamically adjust CSS `filter: blur(Npx)` on the background image to simulate blurry uncorrected vision turning crisp.
3. **Interactive Slot Selector Feedback:**
   - When a slot is clicked, scale slightly (`scale: 1.05`), turn the background to `var(--color-primary-600)`, text to `#ffffff`, and display a tiny green checkmark icon inside the chip.
4. **Modal Entrance & Backdrop Blur:**
   - Backdrops must have `backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.45)`.
   - Modals should scale up smoothly from `0.95` to `1.0` with spring physics (`damping: 25, stiffness: 300`).
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification alert 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 70% of eye care queries originate on smartphones, often from older adults with diminished vision:
- **Sticky Bottom Action Bar on Mobile:**
  When scrolled past the hero, display a persistent bottom bar with:
  - Phone quick call button (`📞 Call Eye Hospital`)
  - Full-width CTA button (`⚡ Book Vision Exam - Today Available`)
- **Accessibility High-Contrast & Font Scaler:**
  Provide easily reachable `A+` font increment button so elderly patients can read surgery details comfortably.
- **Horizontal Swipeable Carousels:**
  Surgery cards, optical frames, and date pickers must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and frame selectors must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for surgical sapphire, optical cyan, and typography in `globals.css`.
- [ ] Implement Sticky Glassmorphic Navbar with working smooth scroll, optical cart trigger, and A+/A- font sizer.
- [ ] Build Hero Section with floating availability badges and rating strip using Bootstrap grid.
- [ ] Build Surgery Guide Grid with procedure tabs, duration tags, and starting prices.
- [ ] Implement Interactive IOL Lens Comparison Matrix with dynamic vision blur simulator.
- [ ] Build Doctor Profiles with credentials and direct consultation booking action.
- [ ] Implement 4-Step Interactive Vision Booking Engine with shift toggle, slot chips, and token generation (`EYE-2026-XXXX`).
- [ ] Build Optical Storefront with frame cards, lens type selectors, Bootstrap offcanvas cart, and 1-click WhatsApp order compiler.
- [ ] Build 60-Second Interactive Vision Self-Check Quiz Modal.
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
