# Frontend Development Specification
## Business 06: Diabetology & Endocrinology Centers
### Project: Diabetology & Chronic Lifestyle Care Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Comprehensive Diabetes Hospitals, Endocrinology & Hormone Centers, Thyroid Clinics, Metabolic & Obesity Centers, Diabetic Foot Care Studios, and Clinical Dietetics Hubs.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for responsive layout grids, flexible diagnostic dashboards, and accessible health monitoring widgets.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `style.css`) using CSS Custom Properties for clinical metabolic indigo, vital health cyan, glycemic status colors (healthy green, warning amber, alert crimson), and glassmorphic elevation cards.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide diabetologists, endocrinologists, and chronic care clinic founders with a high-fidelity, interactive, and visually reassuring digital experience. The application demonstrates how modern web software eliminates chronic patient default, empowers patients to self-log fasting blood sugar & HbA1c with dynamic visual trend graphs, automates clinical dietician & diabetic foot screening appointments, provides downloadable Low-GI diet plans, and issues simulated OPD queue tokens with automated WhatsApp alerts.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial diabetology and endocrine clinic pain points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Patient Default & Poor Glycemic Control** | Patients only test blood sugar when visiting the clinic every 3–6 months, leading to uncontrolled HbA1c spikes. | **Interactive Fasting Blood Sugar & HbA1c Self-Logger** with real-time glycemic zone indicators (Normal, Pre-diabetic, Uncontrolled) and dynamic trend graph simulator. |
| **Silent Progression of Diabetic Foot Complications** | Neuropathy causes loss of pain sensation; patients overlook minor corns or blisters until severe foot ulcers develop. | **Specialized Diabetic Foot Care & Neuropathy Screening Scheduler** with visual risk triage checklist and 1-click booking. |
| **Dietary Confusion & Lack of Practical Meal Guidance** | Verbal diet advice is quickly forgotten; patients struggle with Indian high-carbohydrate meals (rice, rotis, sweets). | **Interactive Low-GI Diet Plan & Calorie Calculator** with preview drawers and 1-click downloadable clinical meal plans (South Indian Vegetarian, Non-Veg, Renal Diabetic). |
| **Clinic Phone Overload for Insulin Dose Adjustments** | Patients constantly call reception asking "Sugar is 240 mg/dL today, how many insulin units should I take?". | **Direct Teleconsultation Booking CTA** and **2-Step Morning/Evening Consultation Slot Engine** with real-time seat tracking. |
| **Chaotic Waiting Rooms for Fasting Morning Lab Tests** | 50+ diabetic patients arrive simultaneously at 8:00 AM for fasting blood tests and doctor reviews, overwhelming staff. | **Simulated Live Clinic OPD Waiting Room Screen** and **Instant WhatsApp Booking Alert** with sequential token issuance (`DIAB-2026-XXXX`). |

---

## 3. Design System & Visual Tokens

The frontend must convey medical endocrinology authority, biometric precision, calming lifestyle vitality, and empathetic reassurance. **Avoid depressing clinical greys or harsh alarmist reds.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Clinical Metabolic Indigo & Deep Violet */
  --color-primary-950: #0f172a;
  --color-primary-900: #1e1b4b;
  --color-primary-800: #2e1065;
  --color-primary-700: #3730a3;
  --color-primary-600: #4f46e5; /* Main Brand Indigo */
  --color-primary-500: #6366f1;
  --color-primary-200: #c7d2fe;
  --color-primary-100: #e0e7ff;
  --color-primary-50:  #eef2ff;

  /* Accent: Vitality Cyan & Glucose Monitor Teal */
  --color-accent-700:  #0e7490;
  --color-accent-600:  #0891b2;
  --color-accent-500:  #06b6d4;
  --color-accent-200:  #a5f3fc;
  --color-accent-100:  #cffafe;
  --color-accent-50:   #ecfeff;

  /* Metabolic Status Colors (Glycemic Zones) */
  --color-sugar-normal:  #10b981; /* Fasting 70-99 mg/dL • In Target */
  --color-sugar-warning: #f59e0b; /* Fasting 100-125 mg/dL • Pre-diabetic */
  --color-sugar-danger:  #ef4444; /* Fasting >126 mg/dL • High Glycemic Zone */

  /* Neutral Surface & Typography */
  --color-surface-bg:   #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.90);
  --glass-border:       rgba(79, 70, 229, 0.12);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.08);
  --card-shadow:        0 4px 20px -2px rgba(15, 23, 42, 0.06);
  --card-shadow-hover:  0 20px 25px -5px rgba(79, 70, 229, 0.16), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens */
  --radius-sm:          8px;
  --radius-md:          14px;
  --radius-lg:          24px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.65`) for effortless reading by diabetic patients with visual fatigue.
- **Blood Sugar / HbA1c Values / Token ID:** Monospaced or tabular figures (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Diabetology consultation rooms, blood glucose monitor, healthy meal plates, foot care clinic)
│   └── icons/  (Activity, HeartPulse, Apple, ShieldCheck, Calendar, Clock, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + glucose logger shortcut)
│   │   ├── Footer.jsx (Bootstrap row/col grid with clinic & lab hours)
│   │   ├── WhatsAppFloatButton.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column responsive layout)
│   │   ├── ClinicalMetricsBar.jsx (Animated counter numbers strip)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs GlycoCare digital table)
│   │   ├── CareProgramsGrid.jsx (Diabetes Reversal, Thyroid, Foot Care, PCOD cards)
│   │   ├── SugarLoggerSection.jsx (Interactive Fasting Blood Sugar & HbA1c calculator)
│   │   ├── DietPlanStorefront.jsx (Interactive diet card grid + PDF download trigger)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with endocrinologists & dieticians)
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified patient HbA1c drop stories)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── DiabBookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1ServiceTypeSelect.jsx (Diabetologist vs Dietician vs Diabetic Foot Care)
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & seat validation)
│   │   ├── Step4PatientForm.jsx (Patient details, last HbA1c, insulin status)
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── assessment/
│   │   └── FootCareAssessmentModal.jsx (Diabetic Neuropathy & Foot Risk Evaluator)
│   └── reception/
│       └── LiveDiabQueueDisplay.jsx (Simulated Clinic TV Waiting Screen)
├── context/
│   └── BookingContext.jsx (Manages active slots, booked appointments, sugar log state)
├── data/
│   ├── mockPrograms.js
│   ├── mockDoctors.js
│   ├── mockDietPlans.js
│   ├── mockSlots.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Transitions, glucose gauge pulse, trend line animations)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Navigation Bar (Sticky Header)
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(255, 255, 255, 0.90); backdrop-filter: blur(14px)`).
- **Left Element:** Clinic Logo with stylized insulin curve / vital pulse emblem, Brand Name (`GlycoCare Diabetes & Endocrine Institute`), and a small emerald pulsing dot with text `"OPD & Fasting Lab Open • 7:30 AM - 8:00 PM"`.
- **Center Nav Links:**
  - `Programs` (Type 2 Reversal, Thyroid, Gestational Diabetes, Foot Care)
  - `Sugar Logger` (Interactive Glucose & HbA1c Tracker)
  - `Diet Plans` (Clinical Low-GI Downloads)
  - `Our Specialists` (Endocrinologists & Dieticians)
  - `Teleconsultation` (Virtual Consultation Info)
  - `FAQ`
- **Right Action Items:**
  - Teleconsultation Hotline Pill: Direct dial (`+91 98480 77112`).
  - Primary CTA Button: `"Book Consultation"` with a gradient fill (`var(--color-primary-700)` to `var(--color-primary-600)`) with subtle pulsing glow.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ Evidence-Based Diabetes Reversal & Endocrine Care`.
  - Main Heading:
    > **Master Your Blood Sugar & Metabolism With Precision Endocrinology.**
  - Subheading:
    > Achieve sustainable HbA1c reduction without extreme starvation. Comprehensive diabetes management, thyroid balancing, personalized clinical nutrition, and advanced diabetic foot protection.
  - Dual CTAs:
    - Primary Button: `Book Doctor / Dietician Slot` (opens 4-Step Booking Engine).
    - Secondary Button: `Log Today's Blood Sugar ↗` (scrolls to Sugar Logger).
  - Social Proof Strip:
    - Overlapping patient avatar circles.
    - `⭐ 4.9/5 Rating across 1,480+ verified Google Reviews`.
    - Micro-tags: `✓ Average 1.8% HbA1c Drop in 90 Days` | `✓ Zero-Wait Fasting Lab Slots` | `✓ Certified Diabetic Foot Care`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res crisp diagnostic visual (blood glucose monitor displaying `98 mg/dL - Normal`).
    - Floating Badge 1 (Top-Right): `"Next Slot Today: 04:30 PM (Evening OPD)"` with green active radar dot.
    - Floating Badge 2 (Bottom-Left): `"8,500+ Patients Reduced Daily Insulin Dose"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A high-contrast deep indigo horizontal strip built with Bootstrap row/col:
1. `25,000+` Active Diabetic Patients Successfully Managed
2. `1.8% Avg.` Clinical HbA1c Reduction Within 90 Days
3. `9,200+` Preventive Diabetic Foot Neuropathy Screenings
4. `< 10 Mins` Average Waiting Time for Fasting Blood Tests

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Diabetes Care Hassles vs. GlycoCare Digital Way"
A comparative problem-solver interactive matrix showcasing why endocrine clinics adopt this platform:

| Traditional Clinic Hassle | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Patients check blood sugar only every 3 months during doctor visits | Interactive blood glucose & HbA1c self-logger with dynamic target zone feedback | Interactive Sugar Logger Tool |
| Minor foot calluses go unnoticed until gangrene or ulcers develop | Specialized diabetic foot screening scheduler with monofilament sensory tests | Foot Care Booking Flow |
| Generic photocopied diet sheets without practical portion sizes | Downloadable clinical Low-GI meal plans tailored for Indian kitchens | Low-GI Diet Plan Storefront |
| Long waiting room delays during morning fasting blood testing | Segregated morning fasting lab slots with instant token issuance | Live Lab & OPD Queue TV Screen |

---

### 5.5 Section 4: Endocrinology & Metabolic Care Programs
- **Filter Tabs:**
  `All Programs (6)` | `Type 2 Diabetes Reversal` | `Thyroid & Hormones` | `Diabetic Foot Care` | `Nutrition & Obesity`
- **6 Core Clinical Program Cards:**
  1. **Comprehensive Type 2 Diabetes Reversal:** Multi-disciplinary protocol combining beta-cell rest, GLP-1 optimization, and metabolic dietetics.
  2. **Thyroid & Parathyroid Disorders Clinic:** Precise management of Hypothyroidism (Hashimoto's), Hyperthyroidism, and Goiter.
  3. **Diabetic Foot Podiatry & Ulcer Prevention:** Biothesiometry vibration sensory test, callus debridement, and custom offloading footwear.
  4. **Gestational Diabetes (GDM) Maternity Program:** Safe fetal-maternal blood glucose control with safe nutritional planning.
  5. **PCOD / PCOS & Metabolic Weight Management:** Insulin resistance reversal, hormonal balancing, and sustainable fat loss.
  6. **Pediatric & Young Adult Type 1 Diabetes Studio:** Continuous Glucose Monitoring (CGM) sensors, insulin pump titration, and carb-counting education.
- **Card Layout & Elements:**
  - Program category badge + Program Title + Duration chip (`⏱ 90-Day Protocol`).
  - Clinical Summary highlighting medication reduction and complication prevention.
  - Action Buttons:
    - `"View Protocol"`: Opens quick drawer with test inclusions and doctor roadmap.
    - `"Book Program Consultation"`: Pre-selects program and launches Booking Modal.

---

### 5.6 Section 5: Interactive Fasting Sugar & HbA1c Self-Logger Tool
An interactive patient engagement widget demonstrating continuous digital monitoring:
- **Input Controls:**
  - Test Timing: `Fasting (Empty Stomach)` vs `Post-Meal (2 Hours After Food)` vs `Random`.
  - Blood Glucose Reading: Numeric input (in mg/dL, range 50 to 400).
  - Most Recent HbA1c (%): Numeric input (e.g., `5.6%`, `7.2%`, `9.8%`).
- **Real-Time Dynamic Visual Feedback:**
  - Color-Coded Target Badge:
    - 🟢 `Green (In Target)`: Fasting $70-99\text{ mg/dL}$ | HbA1c $<6.5\%$
    - 🟡 `Amber (Pre-Diabetes / Caution)`: Fasting $100-125\text{ mg/dL}$ | HbA1c $6.5-7.5\%$
    - 🔴 `Crimson (Action Required)`: Fasting $>126\text{ mg/dL}$ | HbA1c $>7.5\%$
  - Estimated Average Glucose (eAG) Calculator: Displays estimated daily average based on HbA1c.
  - Action CTA: One-click button `"Discuss This Reading with Diabetologist"` pre-filling the booking modal.

---

### 5.7 Section 6: Triple-Service Booking Engine (Doctor vs Dietician vs Foot Care)
A dynamic 4-step progressive modal providing seamless scheduling across clinic departments:
- **Step 1 - Service Choice:**
  - Option A: `Diabetologist / Endocrinologist Consultation`
  - Option B: `Clinical Dietician & Nutritionist Session`
  - Option C: `Diabetic Foot Care & Neuropathy Screening`
- **Step 2 - Specialist Selection:**
  - Select doctor/dietician or `"First Available Specialist (Fastest)"`.
- **Step 3 - Date & Shift Picker:**
  - Date Bar: 7-day rolling calendar strip (`Today, Tomorrow, Day 3...`).
  - Shift Toggle: `Morning Shift (7:30 AM - 1:00 PM)` vs `Evening Shift (4:30 PM - 8:30 PM)`.
  - Slot Chips:
    - Available: Indigo border (`08:00 AM (Fasting)`, `10:30 AM`, `05:00 PM`, `06:30 PM`).
    - Filling Fast: Amber badge.
    - Booked: Greyed out.
- **Step 4 - Patient Intake Form:**
  - Full Name, WhatsApp Mobile Number, Age.
  - Consultation Mode: `In-Clinic OPD` or `Video Teleconsultation`.
  - Most Recent Fasting Sugar / HbA1c (Optional).
- **Confirmation Action & Result Screen:**
  - Generates Instant Token ID: `DIAB-2026-0624`.
  - **Simulated WhatsApp Notification Pop-up:**
    > *"Hello Ramesh! Your appointment at GlycoCare Institute is confirmed. Token #DIAB-0624. Doctor: Dr. K. V. Subba Rao, MD, DM. Date: Today at 5:00 PM. Tap here for clinic directions: [GlycoCare Diabetes Clinic]"*

---

### 5.8 Section 7: Specialist Diabetologists, Endocrinologists & Dieticians Team
- Display 4 specialist profile cards using realistic dummy names:
  1. **Dr. K. V. Subba Rao, MD (Med), DM (Endocrinology)** — Senior Consultant Endocrinologist (19 yrs exp, ex-NIMS).
  2. **Dr. S. Lakshmi Prasanna, MD, Fellowship in Diabetology (UK)** — Chief Diabetologist & Reversal Expert (14 yrs exp).
  3. **Dr. Arvind Kumar, MS, Fellowship in Diabetic Foot Podiatry** — Diabetic Foot & Wound Care Surgeon (12 yrs exp).
  4. **Ms. N. Swetha, M.Sc (Clinical Nutrition), CDE** — Head Clinical Dietician & Certified Diabetes Educator (9 yrs exp).
- **Card Interactive State:**
  - Professional clinical portrait in white coat.
  - Medical Council Reg. No. (`APMC-17482`), special clinical focus areas.
  - Available Days chips (`Mon - Sat`).
  - CTA Button: `"Book with Specialist"`.

---

### 5.9 Section 8: Downloadable Clinical Diet Plans & Calorie Calculator (Bonus Showcase)
An interactive resource library allowing patients to preview and download doctor-approved diabetic meal charts:
- **Diet Plan Cards:**
  1. **South Indian Low-GI Diabetic Meal Plan (1400 kcal):** High fiber brown rice / millets, sprouted pulses, low oil curries.
  2. **Vegetarian High-Protein Diabetic Regimen (1600 kcal):** Paneer, tofu, soya, green leafy vegetables, chia seeds.
  3. **Thyroid & Weight Management Meal Guide (1500 kcal):** Selenium & zinc rich foods, cruciferous vegetable moderation.
  4. **Renal Diabetic Plan (Low Potassium & Phosphorus):** Tailored for patients with diabetic kidney disease.
- **Interactive Elements:**
  - "Preview Meal Chart" drawer modal with sample Breakfast, Lunch, Snack, and Dinner breakdown.
  - "Download PDF Plan" button triggering a simulated instant PDF download toast notification.

---

### 5.10 Section 9: Live Clinic OPD Queue & Waiting Room Screen
A dedicated interactive widget showing what patients see on the clinic waiting room display:
- **Current Token Being Treated:** `#DIAB-0621 (Room 1 - Dr. Subba Rao)`
- **Next In Line:** `#DIAB-0622 (Room 2 - Dr. Lakshmi)` and `#DIAB-0624 (Your Token - Estimated wait: 11 mins)`.
- **Live Doctors & Nutrition Rooms on Duty:** 2 Endocrinologists + 1 Dietician + 1 Foot Screening Lab active.

---

### 5.11 Section 10: Patient Trust, Video Reviews & Google Ratings
- **Header:** `"Trusted by Over 25,000 Diabetic Patients Living Healthier Lives"`.
- 3 Video Testimonial Thumbnails with play button overlays (*"Stopped Insulin Injections After 4 Months of Structured Care - Mr. Narayana, 56 yrs"*).
- Grid of 6 Verified Google Reviews with star ratings, reviewer photo, HbA1c drop tag, and doctor feedback.
- Trust Badges: Certified Diabetes Education Center, National Glycemic Accreditation, 100% Digital Health Records.

---

### 5.12 Section 11: Comprehensive Diabetology FAQs Accordion
Interactive Bootstrap accordion answering patient doubts:
1. *Is Type 2 Diabetes reversal truly possible without medications?*
2. *How frequently should a diabetic patient test their HbA1c level?*
3. *What are the early warning signs of diabetic neuropathy in the feet?*
4. *Can I switch from insulin injections back to oral tablets?*
5. *Why is South Indian white rice so prone to causing sudden blood sugar spikes?*
6. *How does teleconsultation work for periodic insulin dose titration?*

---

### 5.13 Section 12: Footer & Contact Section
- Location & Opening Hours table (Fasting Blood Lab: `7:30 AM - 1:00 PM` | Doctor Consultations: `8:30 AM - 1:00 PM` & `4:30 PM - 8:30 PM`).
- Direct Contact: Phone call link (`+91 98480 77112`), WhatsApp direct link, Clinic Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockPrograms.js`
```javascript
export const mockPrograms = [
  {
    id: "prog-t2-reversal",
    name: "Type 2 Diabetes Reversal Protocol",
    category: "Type 2 Diabetes Reversal",
    tagline: "Intensive 90-day medical nutrition and lifestyle program targeting insulin independence.",
    duration: "90 Days Program",
    startingPrice: 12500,
    stages: ["Comprehensive Baseline Metabolic Panel", "Customized Low-GI Nutrition Plan", "Weekly Doctor Titration"],
    icon: "Activity",
    badge: "Most Enrolled",
    doctorSpecialty: "Endocrinologist"
  },
  {
    id: "prog-foot-care",
    name: "Diabetic Foot & Neuropathy Protection",
    category: "Diabetic Foot Care",
    tagline: "Prevent ulcers with biothesiometry nerve testing and medical callus management.",
    duration: "45 mins per sitting",
    startingPrice: 1500,
    stages: ["Vibration Perception Threshold (VPT)", "Pedal Doppler Blood Flow Test", "Custom Footwear Offloading"],
    icon: "ShieldCheck",
    badge: "Preventive Care",
    doctorSpecialty: "Podiatry Specialist"
  },
  {
    id: "prog-thyroid-clinic",
    name: "Thyroid & Metabolic Balancing",
    category: "Thyroid & Hormones",
    tagline: "Precision hormonal titration for Hypothyroidism, Hashimoto's, and metabolic sluggishness.",
    duration: "Monthly Review",
    startingPrice: 2000,
    stages: ["Ultra-Sensitive TSH/FT3/FT4 Profiling", "Thyroid Ultrasound Scan", "Targeted Hormone Replacement"],
    icon: "HeartPulse",
    badge: "Specialized",
    doctorSpecialty: "Endocrinologist"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-diab-1",
    name: "Dr. K. V. Subba Rao, MD, DM",
    title: "Chief Endocrinologist & Diabetologist",
    experienceYears: 19,
    education: "MD (Medicine), DM (Endocrinology - AIIMS)",
    rating: 4.95,
    reviewCount: 580,
    avatar: "/assets/images/doctors/dr-subbarao.jpg",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    specialtySlug: "prog-t2-reversal"
  },
  {
    id: "doc-diab-2",
    name: "Dr. S. Lakshmi Prasanna, MD",
    title: "Consultant Diabetologist & Reversal Specialist",
    experienceYears: 14,
    education: "MD, Fellowship in Diabetology (UK)",
    rating: 4.9,
    reviewCount: 430,
    avatar: "/assets/images/doctors/dr-lakshmi.jpg",
    availableDays: ["Mon", "Tue", "Thu", "Fri", "Sat"],
    specialtySlug: "prog-t2-reversal"
  },
  {
    id: "diet-1",
    name: "Ms. N. Swetha, M.Sc, CDE",
    title: "Head Clinical Dietician & Certified Diabetes Educator",
    experienceYears: 9,
    education: "M.Sc (Food & Nutrition), Certified Diabetes Educator",
    rating: 4.88,
    reviewCount: 360,
    avatar: "/assets/images/doctors/diet-swetha.jpg",
    availableDays: ["Daily (Mon - Sat)"],
    specialtySlug: "nutrition"
  }
];
```

### 6.3 `mockDietPlans.js`
```javascript
export const mockDietPlans = [
  {
    id: "diet-south-indian",
    title: "South Indian Low-GI Diabetic Meal Plan",
    calories: "1400 kcal / day",
    tag: "Most Popular",
    suitableFor: "Type 2 Diabetes, High Fasting Sugar",
    keyStaples: "Brown rice, ragi mudde, steel-cut oats, moong dal sambar, methi greens",
    pdfFilename: "South_Indian_Low_GI_Diabetic_Diet_Plan.pdf"
  },
  {
    id: "diet-veg-protein",
    title: "Vegetarian High-Protein Diabetic Regimen",
    calories: "1600 kcal / day",
    tag: "Muscle Preservation",
    suitableFor: "Insulin Resistant, Sarcopenic Diabetes",
    keyStaples: "Paneer, tofu, boiled sprouted pulses, chia water, roasted chana",
    pdfFilename: "Vegetarian_High_Protein_Diabetic_Diet.pdf"
  },
  {
    id: "diet-thyroid-metabolic",
    title: "Thyroid & Metabolic Reset Meal Guide",
    calories: "1500 kcal / day",
    tag: "Weight Management",
    suitableFor: "Hypothyroidism with Slow Metabolism",
    keyStaples: "Selenium rich seeds, cooked seasonal veggies, low sodium dal, herbal teas",
    pdfFilename: "Thyroid_Metabolic_Reset_Diet_Plan.pdf"
  }
];
```

### 6.4 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Fasting Shift
  { id: "dm1", time: "08:00 AM", shift: "morning", type: "Fasting Doctor OPD", available: true },
  { id: "dm2", time: "09:30 AM", shift: "morning", type: "Dietician Session", available: true, fewLeft: true },
  { id: "dm3", time: "11:00 AM", shift: "morning", type: "Foot Care Screening", available: false }, // Booked
  { id: "dm4", time: "12:15 PM", shift: "morning", type: "Doctor OPD", available: true },

  // Evening Shift
  { id: "de1", time: "04:30 PM", shift: "evening", type: "Doctor OPD", available: true },
  { id: "de2", time: "05:30 PM", shift: "evening", type: "Dietician Session", available: false }, // Booked
  { id: "de3", time: "06:30 PM", shift: "evening", type: "Doctor OPD", available: true, fewLeft: true },
  { id: "de4", time: "07:30 PM", shift: "evening", type: "Foot Care Screening", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Staggered Scroll Entrance:**
   - Apply `opacity: 0, translateY: 30px` transitioning to `opacity: 1, translateY: 0` with a `0.1s` stagger delay for program cards and doctor profiles.
2. **Interactive Blood Sugar Zone Gauge Animation:**
   - When the user types or slides their fasting glucose reading, smoothly animate the indicator needle across the color gradient bar (Green $\rightarrow$ Yellow $\rightarrow$ Crimson) with a transition time of `0.6s`.
3. **Interactive Slot Selector Feedback:**
   - When a slot is clicked, scale slightly (`scale: 1.05`), turn the background to `var(--color-primary-600)`, text to `#ffffff`, and display a tiny green checkmark icon inside the chip.
4. **Modal Entrance & Backdrop Blur:**
   - Backdrops must have `backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.45)`.
   - Modals should scale up smoothly from `0.95` to `1.0` with spring physics (`damping: 25, stiffness: 300`).
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification sound/vibration effect 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 80% of diabetes patients and their family caregivers access appointment portals from mobile devices:
- **Sticky Bottom Action Bar on Mobile:**
  When scrolled past the hero, display a persistent bottom bar with:
  - Teleconsultation call button (`📞 Call Diabetologist`)
  - Full-width CTA button (`⚡ Book Appointment - Fasting Slots Available`)
- **Horizontal Swipeable Carousels:**
  Program cards, downloadable diet plans, and date pickers must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and glucose stepper inputs must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for metabolic indigo, glucose cyan, and status colors in `globals.css`.
- [ ] Implement Sticky Glassmorphic Navbar with working smooth scroll and teleconsultation hotline button.
- [ ] Build Hero Section with floating HbA1c control badges and rating strip using Bootstrap grid.
- [ ] Build Care Programs Grid with category tabs, duration tags, and starting prices.
- [ ] Implement Interactive Fasting Blood Sugar & HbA1c Self-Logger with real-time glycemic zone feedback.
- [ ] Build Triple-Service Booking Engine (Doctor vs Dietician vs Foot Care) with shift toggle, slot chips, and token generation (`DIAB-2026-XXXX`).
- [ ] Build Doctor & Dietician Profiles with credentials and direct consultation booking action.
- [ ] Build Downloadable Low-GI Diet Plan Storefront with preview drawers and simulated PDF download toast.
- [ ] Build Simulated Live OPD Waiting Room TV Screen (`/queue`).
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
