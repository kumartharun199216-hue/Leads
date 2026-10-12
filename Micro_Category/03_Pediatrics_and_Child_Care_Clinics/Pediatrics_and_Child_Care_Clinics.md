# Frontend Development Specification
## Business 03: Pediatrics & Child Care Clinics
### Project: Pediatric Care & Baby Immunization Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Pediatric Clinics, Neonatal Care Centers, Child Health & Vaccination Studios, and Adolescent Outpatient Practices.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for responsive layout grids, flex containers, and child-friendly UI components.
- **Styling Architecture:** Curated **Bootstrap 5** layout utilities paired with a custom CSS design system (`variables.css` / `style.css`) using CSS Custom Properties for gentle sky blue, calming periwinkle, soft mint green, and warm sunshine accents.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide pediatricians and child care clinic founders with a high-fidelity, interactive, and visually reassuring digital experience. The application demonstrates how modern web software eliminates missed vaccination milestones with automated calculation, segregates healthy infants from contagious sick children, computes WHO child growth percentiles, and issues instant tokens with WhatsApp confirmation alerts.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial pediatric clinic pain points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Vaccination Default Rate** | Parents lose physical paper vaccination cards, forget booster timings, or miss critical dose windows. | **Interactive Baby Vaccination Milestone Schedule Tracker** allowing parents to input baby's date of birth and receive an instant color-coded immunization calendar with countdown timers. |
| **Parental Anxiety About Cross-Infection** | Parents of healthy newborns hesitate to visit clinics where coughing, viral-infected older children sit in the same waiting area. | **Segregated Slot Booking Architecture** dividing schedule into **"Well-Baby Immunization Morning Hours"** and **"General Pediatric OPD Evening Hours"** with live seat indicators. |
| **Growth & Nutrition Panic Calls** | Parents constantly worry whether their toddler is underweight, stunted, or developmentally delayed. | **Interactive WHO Standard Child Growth Chart & Percentile Calculator** computing real-time weight-for-age, height-for-age, and BMI percentiles with color-coded healthy zones. |
| **Clinic Reception Phone Overload for Vaccine Queries** | Clinic staff repeatedly answers "Which vaccine is due next?", "Is painless DTP available?", "What is the token number?". | **Automated WhatsApp Vaccine Alert Trigger** and instant digital Token ID generator with downloadable digital immunization slips. |
| **Panic Inquiries During Late-Night Fevers** | Parents rush to emergency rooms or spam pediatricians for standard teething fevers or mild coughs. | **Interactive Pediatric Symptom Checker & Emergency Triage Guide** providing immediate red-flag indicators (when to visit OPD vs when to rush to emergency). |

---

## 3. Design System & Visual Tokens

The frontend must convey clinical reassurance, warmth, playful gentle safety, and medical credibility. **Avoid harsh neon colors or sharp industrial borders.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Gentle Sky Blue & Clinical Periwinkle */
  --color-primary-950: #082f49;
  --color-primary-900: #0c4a6e;
  --color-primary-800: #075985;
  --color-primary-700: #0369a1;
  --color-primary-600: #0284c7; /* Main Brand Accent */
  --color-primary-500: #0ea5e9;
  --color-primary-300: #7dd3fc;
  --color-primary-100: #e0f2fe;
  --color-primary-50:  #f0f9ff;

  /* Accent: Playful Sunshine Yellow & Warm Apricot (Childhood Vitality) */
  --color-accent-700:  #c2410c;
  --color-accent-600:  #ea580c;
  --color-accent-500:  #f97316;
  --color-accent-200:  #fed7aa;
  --color-accent-100:  #ffedd5;
  --color-accent-50:   #fff7ed;

  /* Secondary: Soft Mint / Sage Green (Well-Baby & Immunity) */
  --color-mint-600:    #059669;
  --color-mint-500:    #10b981;
  --color-mint-100:    #d1fae5;
  --color-mint-50:     #ecfdf5;

  /* Neutral Surface & Typography */
  --color-surface-bg:   #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Functional Status Colors */
  --color-success:      #10b981; /* Up to date vaccine */
  --color-warning:      #f59e0b; /* Booster due soon */
  --color-danger:       #ef4444; /* Emergency triage red-flag */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.90);
  --glass-border:       rgba(2, 132, 199, 0.12);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.06);
  --card-shadow:        0 4px 20px -2px rgba(15, 23, 42, 0.05);
  --card-shadow-hover:  0 20px 25px -5px rgba(2, 132, 199, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens (Friendly, Soft, Child-Safe Aesthetic) */
  --radius-sm:          10px;
  --radius-md:          16px;
  --radius-lg:          24px;
  --radius-full:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.65`) for effortless reading by busy parents.
- **Milestone Dates & Token ID:** Monospaced or tabular numbers (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Baby heroes, pediatrician consultation rooms, doctor portraits, milestone badges)
│   └── icons/  (Baby, ShieldCheck, Calendar, Clock, HeartPulse, Sparkles, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + glassmorphism header)
│   │   ├── Footer.jsx (Bootstrap row/col grid with clinic info)
│   │   ├── WhatsAppFloatButton.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column responsive layout)
│   │   ├── ClinicalMetricsBar.jsx (Animated counter numbers strip)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs LittleSprouts digital table)
│   │   ├── VaccineScheduleTracker.jsx (Baby DOB input + milestone timeline cards)
│   │   ├── GrowthChartCalculator.jsx (Interactive WHO height/weight/BMI percentile gauges)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with pediatrician profiles)
│   │   ├── EmergencyTriageSection.jsx (Traffic-light fever & symptom guide)
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified parent feedback)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── PediatricBookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1VisitPurposeSelect.jsx (Well-Baby Vaccination vs General Pediatric OPD)
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Segregated Morning vs Evening shift toggles)
│   │   ├── Step4PatientForm.jsx (Baby name, DOB, parent mobile)
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── assessment/
│   │   └── BabyMilestoneDetailDrawer.jsx (Detailed vaccine dosage & side-effects notes)
│   └── reception/
│       └── LivePediatricQueueDisplay.jsx (Simulated Clinic TV Waiting Screen)
├── context/
│   └── BookingContext.jsx (Manages active slots, booked appointments, baby profile state)
├── data/
│   ├── mockVaccines.js
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
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(255, 255, 255, 0.90); backdrop-filter: blur(12px)`).
- **Left Element:** Clinic Logo with sprout/baby emblem, Brand Name (`LittleSprouts Pediatric Care`), and a small green pulsing dot with text `"Well-Baby Clinic Open • 9:00 AM - 8:30 PM"`.
- **Center Nav Links:**
  - `Vaccine Schedule` (DOB Milestone Tracker)
  - `Growth Calculator` (WHO Percentile Tool)
  - `Our Doctors` (Pediatricians & Neonatologists)
  - `Fever Triage` (Emergency Quick Guide)
  - `FAQ`
- **Right Action Items:**
  - Emergency / Phone Quick Action: Direct dial pill (`+91 98480 33112`).
  - Primary CTA Button: `"Book Pediatric Slot"` with a gradient fill (`var(--color-primary-600)` to `var(--color-primary-700)`) and subtle pulsing glow.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ Indian Academy of Pediatrics (IAP) Certified Care`.
  - Main Heading:
    > **Nurturing Healthy, Happy Childhoods With Pediatric Excellence.**
  - Subheading:
    > Zero infection-risk visits with segregated well-baby hours, painless vaccination options, milestone tracking, and 24/7 pediatrician support.
  - Dual CTAs:
    - Primary Button: `Calculate Baby Vaccine Schedule` (scrolls to Vaccine Tracker).
    - Secondary Button: `Book Pediatrician Visit ↗` (opens Booking Modal).
  - Social Proof Strip:
    - Overlapping parent avatar circles.
    - `⭐ 4.9/5 Rating across 1,180+ verified Google Reviews`.
    - Micro-tags: `✓ 100% Cold-Chain Maintained` | `✓ Segregated Well-Baby Shifts` | `✓ WHO Growth Certified`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res heartwarming pediatric clinic visual (smiling baby & gentle doctor).
    - Floating Badge 1 (Top-Right): `"Next Well-Baby Slot Today: 10:30 AM"` with an active green dot.
    - Floating Badge 2 (Bottom-Left): `"99.4% On-Time Vaccination Compliance"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A sleek soft-sky horizontal strip built with Bootstrap row/col:
1. `22,000+` Gentle Vaccinations Administered
2. `14,000+` Healthy Newborns & Toddlers Monitored
3. `6+` Senior Pediatricians & Neonatal Specialists
4. `< 10 Mins` Average OPD Waiting Time

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Waiting Room Chaos vs. LittleSprouts Digital Protection"
A comparative problem-solver interactive matrix showcasing why pediatric practices adopt this platform:

| Traditional Clinic Bottleneck | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Healthy infants sit in crowded waiting rooms next to coughing children | Segregated Morning "Well-Baby" shifts completely isolated from evening sick OPD | Segregated Shift Selector |
| Parents misplace physical paper cards and miss booster dates | Interactive baby DOB vaccine milestone tracker with calendar due dates | Milestone Countdown Tracker |
| Anxiety over whether baby is growing at a healthy weight/height | Real-time WHO standard percentile curve calculator with healthy zones | Interactive Growth Gauge |
| Late-night panic calls for mild fever or teething symptoms | Emergency pediatric traffic-light triage guide (Home Care vs Hospital) | Interactive Triage Guide |

---

### 5.5 Section 4: Interactive Baby Vaccination Milestone Schedule Tracker
- **DOB Input Header:** Parents select baby's Date of Birth using a friendly calendar date picker.
- **Instant Metric Header:** Displays Baby's exact age in Weeks / Months (e.g., `Age: 14 Weeks • Milestone: Primary Boosters Due`).
- **10 Core Milestone Timeline Cards:**
  1. **At Birth:** BCG, OPV-0, Hepatitis B (Birth Dose).
  2. **6 Weeks:** DTaP/DTwP 1, IPV 1, Hib 1, Hep B 1, Rotavirus 1, PCV 1.
  3. **10 Weeks:** DTaP/DTwP 2, IPV 2, Hib 2, Hep B 2, Rotavirus 2, PCV 2.
  4. **14 Weeks:** DTaP/DTwP 3, IPV 3, Hib 3, Hep B 3, Rotavirus 3, PCV 3.
  5. **6 Months:** Influenza Flu Dose 1, Typhoid Conjugate Vaccine.
  6. **9 Months:** MMR 1 (Measles, Mumps, Rubella), OPV 1.
  7. **12 Months:** Hepatitis A Dose 1, Japanese Encephalitis.
  8. **15 Months:** MMR 2, Varicella 1 (Chickenpox), PCV Booster.
  9. **18 Months:** DTP Booster 1, IPV Booster 1, Hib Booster.
  10. **2 & 5 Years:** Typhoid Booster, DTP Booster 2, Annual Flu.
- **Card UI & Actions:**
  - Status Pills: `Completed ✓` (Green), `Due This Week ⚠️` (Amber Pulse), `Upcoming ⏳` (Muted Blue).
  - Vaccine Type Tag: `Painless (Acellular) Option Available`.
  - `"Book This Vaccine"`: Pre-selects this milestone and opens Booking Modal on Step 2.

---

### 5.6 Section 5: WHO Child Growth & Percentile Calculator
An interactive visual tool allowing parents to check their baby's growth against global WHO standards:
- **Input Controls:**
  - Gender Selector: `Boy` vs `Girl`.
  - Age Stepper: In months (`0 to 60 months`).
  - Weight Input: In kilograms (slider or stepper).
  - Height / Length Input: In centimeters.
- **Interactive Output Visuals:**
  - Weight-for-Age Gauge with percentile marker (`55th Percentile • Normal Healthy`).
  - Height-for-Age Gauge with percentile marker (`62nd Percentile • Stature on Track`).
  - BMI Category Badge: `Healthy Growth Zone`.
  - Pediatric Advisory Note: Contextual tips on breastfeeding, complementary feeding, and iron-rich solids.

---

### 5.7 Section 6: Specialist Pediatricians & Neonatologists Team
- Display 3 specialist profile cards using realistic dummy names:
  1. **Dr. Rajesh Varma, MBBS, MD (Pediatrics)** — Senior Consultant Pediatrician (18 yrs exp).
  2. **Dr. Anita Krishna, MD (Pediatrics), Fellowship in Neonatology** — Newborn & NICU Specialist (13 yrs exp).
  3. **Dr. Amrutha Rao, DCH, DNB (Pediatrics)** — Child Development & Nutrition Specialist (11 yrs exp).
- **Card Interactive State:**
  - Doctor portrait in welcoming clinic attire.
  - Degrees, Medical Council Reg. No. (`APMC-19402`), and special clinical focus.
  - Available Days chips (`Mon - Sat`).
  - CTA Button: `"Book Consultation"`.

---

### 5.8 Section 7: The End-to-End Interactive Booking Engine (Core Prototype Feature)
The booking engine operates as an interactive 4-step wizard:

```
[ Step 1: Visit Purpose ] ──> [ Step 2: Choose Doctor ] ──> [ Step 3: Segregated Slot Picker ] ──> [ Step 4: Baby Details & Token ]
```

#### Step Details:
1. **Step 1 - Visit Purpose:**
   - Visual radio cards: `Well-Baby Vaccination & Milestone Checkup` vs `Sick Child Consultation (Fever, Cough, Infection)`.
2. **Step 2 - Doctor Selection:**
   - Option to pick a specific doctor or select `"First Available Pediatrician"`.
3. **Step 3 - Segregated Shift & Slot Picker:**
   - Date Bar: Horizontal date selector pills.
   - Shift Segregation:
     - 🌅 **Well-Baby Morning Shift (9:00 AM - 1:00 PM):** Zero sick children in waiting room.
     - 🌆 **Sick Child Evening Shift (4:30 PM - 8:30 PM):** Dedicated pediatric OPD.
   - Slot Chips:
     - Available: Green border (`09:30 AM`, `10:30 AM`, `05:00 PM`).
     - Filling Fast (1 slot left): Amber badge.
     - Booked: Greyed out.
4. **Step 4 - Intake Form:**
   - Baby's Full Name, Date of Birth & Gender.
   - Parent WhatsApp Mobile Number.
   - Vaccine Milestone / Primary Symptoms.
5. **Confirmation Action & Result Screen:**
   - Generates Unique Token ID: `#PEDI-2026-0312`.
   - Download Digital Vaccination Slip button.
   - **Simulated WhatsApp Notification Pop-up:**
     > *"Hello Suman! Appointment confirmed at LittleSprouts Clinic for Baby Aarav. Token #PEDI-0312. Doctor: Dr. Rajesh Varma. Schedule: Well-Baby Morning at 10:30 AM. Tap for clinic directions: [LittleSprouts Clinic]"*

---

### 5.9 Section 8: Pediatric Emergency Fever & Illness Triage Guide
A clear traffic-light visual accordion for late-night parental guidance:
- 🟢 **Green (Care at Home):** Mild fever ($<101^\circ\text{F}$) in child $>6$ months, alert, drinking breastmilk/fluids, playing actively.
- 🟡 **Yellow (Visit Clinic OPD Today):** Fever lasting $>48$ hours, persistent ear-pulling, reduced wet diapers, mild cough.
- 🔴 **Red (Immediate ER Hospitalization):** Infant $<3$ months with fever $>100.4^\circ\text{F}$, rapid labored breathing, chest retractions, continuous high-pitched crying, febrile seizures.
- Immediate Emergency Hotline Button: `📞 Call 24/7 Pediatric Emergency`.

---

### 5.10 Section 9: Parent Testimonials & Google Ratings
- **Header:** `"Trusted by Over 14,000 Parents Across the City"`.
- Grid of 6 Verified Google Reviews with star ratings, reviewer photo, baby age tag, and doctor feedback.
- Trust Badges: IAP Cold-Chain Certified, Hospital-Grade Air Sterilization, 100% Painless Vaccine Options.

---

### 5.11 Section 10: Pediatric FAQs Accordion
Interactive Bootstrap accordion answering common parent queries:
1. *What is the difference between painful (cellular) and painless (acellular) DTP vaccines?*
2. *Is mild fever normal after childhood immunization?*
3. *What should I do if my baby misses a scheduled vaccination milestone?*
4. *How are healthy babies protected from contagious sick children in your clinic?*
5. *When should I start introducing solid foods to my infant?*
6. *Can I reschedule a vaccination appointment if my baby has a cold?*

---

### 5.12 Section 12: Footer & Contact Section
- Location & Opening Hours table (Well-Baby Morning: `9:00 AM - 1:00 PM` | Evening OPD: `4:30 PM - 8:30 PM`).
- Direct Contact: Phone call link (`+91 98480 33112`), WhatsApp direct link, Clinic Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockVaccines.js`
```javascript
export const mockVaccines = [
  {
    id: "milestone-birth",
    milestoneAge: "At Birth",
    ageInDays: 0,
    vaccines: [
      { name: "BCG", protectsAgainst: "Tuberculosis", route: "Intradermal" },
      { name: "OPV 0", protectsAgainst: "Polio (Oral)", route: "Oral Drops" },
      { name: "Hepatitis B (Birth Dose)", protectsAgainst: "Hepatitis B Virus", route: "Intramuscular" }
    ],
    status: "Standard",
    painlessAvailable: false
  },
  {
    id: "milestone-6w",
    milestoneAge: "6 Weeks",
    ageInDays: 42,
    vaccines: [
      { name: "DTwP / DTaP 1", protectsAgainst: "Diphtheria, Tetanus, Pertussis", route: "Intramuscular" },
      { name: "IPV 1", protectsAgainst: "Inactivated Polio", route: "Intramuscular" },
      { name: "Hib 1", protectsAgainst: "Haemophilus Influenzae B", route: "Intramuscular" },
      { name: "Rotavirus 1", protectsAgainst: "Severe Diarrhea", route: "Oral Drops" },
      { name: "PCV 1", protectsAgainst: "Pneumococcal Pneumonia", route: "Intramuscular" }
    ],
    status: "Due Soon",
    painlessAvailable: true
  },
  {
    id: "milestone-10w",
    milestoneAge: "10 Weeks",
    ageInDays: 70,
    vaccines: [
      { name: "DTwP / DTaP 2", protectsAgainst: "Diphtheria, Tetanus, Pertussis", route: "Intramuscular" },
      { name: "IPV 2", protectsAgainst: "Inactivated Polio", route: "Intramuscular" },
      { name: "Hib 2", protectsAgainst: "Haemophilus Influenzae B", route: "Intramuscular" },
      { name: "Rotavirus 2", protectsAgainst: "Severe Diarrhea", route: "Oral Drops" },
      { name: "PCV 2", protectsAgainst: "Pneumococcal Pneumonia", route: "Intramuscular" }
    ],
    status: "Upcoming",
    painlessAvailable: true
  },
  {
    id: "milestone-14w",
    milestoneAge: "14 Weeks",
    ageInDays: 98,
    vaccines: [
      { name: "DTwP / DTaP 3", protectsAgainst: "Diphtheria, Tetanus, Pertussis", route: "Intramuscular" },
      { name: "IPV 3", protectsAgainst: "Inactivated Polio", route: "Intramuscular" },
      { name: "Hib 3", protectsAgainst: "Haemophilus Influenzae B", route: "Intramuscular" },
      { name: "Rotavirus 3", protectsAgainst: "Severe Diarrhea", route: "Oral Drops" },
      { name: "PCV 3", protectsAgainst: "Pneumococcal Pneumonia", route: "Intramuscular" }
    ],
    status: "Upcoming",
    painlessAvailable: true
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-pedi-1",
    name: "Dr. Rajesh Varma, MD (Pediatrics)",
    title: "Senior Consultant Pediatrician & Child Specialist",
    experienceYears: 18,
    education: "MD - Pediatrics (AIIMS, New Delhi)",
    rating: 4.95,
    reviewCount: 480,
    avatar: "/assets/images/doctors/dr-rajesh.jpg",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    specialtySlug: "immunization"
  },
  {
    id: "doc-pedi-2",
    name: "Dr. Anita Krishna, MD, Fellowship in Neonatology",
    title: "Neonatologist & Newborn Care Specialist",
    experienceYears: 13,
    education: "MD (Pediatrics), Fellowship in Neonatology",
    rating: 4.9,
    reviewCount: 390,
    avatar: "/assets/images/doctors/dr-anita.jpg",
    availableDays: ["Mon", "Wed", "Fri", "Sat"],
    specialtySlug: "newborn-care"
  }
];
```

### 6.3 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Well-Baby Shifts
  { id: "pm1", time: "09:30 AM", shift: "morning", type: "Well-Baby Only", available: true },
  { id: "pm2", time: "10:15 AM", shift: "morning", type: "Well-Baby Only", available: true },
  { id: "pm3", time: "11:00 AM", shift: "morning", type: "Well-Baby Only", available: false }, // Booked
  { id: "pm4", time: "11:45 AM", shift: "morning", type: "Well-Baby Only", available: true, fewLeft: true },
  { id: "pm5", time: "12:30 PM", shift: "morning", type: "Well-Baby Only", available: true },

  // Evening Sick-Child Shifts
  { id: "pe1", time: "04:30 PM", shift: "evening", type: "General OPD", available: false }, // Booked
  { id: "pe2", time: "05:15 PM", shift: "evening", type: "General OPD", available: true },
  { id: "pe3", time: "06:00 PM", shift: "evening", type: "General OPD", available: true, fewLeft: true },
  { id: "pe4", time: "06:45 PM", shift: "evening", type: "General OPD", available: true },
  { id: "pe5", time: "07:30 PM", shift: "evening", type: "General OPD", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Staggered Scroll Entrance:**
   - Apply `opacity: 0, translateY: 30px` transitioning to `opacity: 1, translateY: 0` with a `0.1s` stagger delay for milestone cards.
2. **Interactive Vaccine Status Pulse:**
   - "Due This Week" milestones must feature a subtle breathing amber aura animation (`animation: pulseAura 2s infinite`).
3. **Interactive Growth Gauge Transition:**
   - When inputs change, growth curve indicator bars must smoothly animate to the new percentile width (`transition: width 0.8s ease-in-out`).
4. **Modal Entrance & Backdrop Blur:**
   - Backdrops must have `backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.45)`.
   - Modals should scale up smoothly from `0.95` to `1.0` with spring physics (`damping: 25, stiffness: 300`).
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification sound/vibration effect 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 85% of parents access pediatric portals from mobile devices, often while tending to an infant:
- **Sticky Bottom Action Bar on Mobile:**
  Display persistent bottom bar with:
  - Emergency call button (`📞 24/7 Pediatric Hotline`)
  - Full-width CTA button (`⚡ Book Appointment - Well-Baby Available`)
- **Horizontal Swipeable Carousels:**
  Vaccine milestone cards, growth gauges, and doctors must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and age steppers must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for sky blue, periwinkle, and mint in `globals.css`.
- [ ] Implement Sticky Glassmorphic Navbar with working smooth scroll and emergency dial pill.
- [ ] Build Hero Section with floating availability badges and rating strip using Bootstrap grid.
- [ ] Build Interactive Baby Vaccination Milestone Schedule Tracker with dynamic DOB date math.
- [ ] Implement WHO Child Growth & Percentile Calculator with weight/height/BMI gauges.
- [ ] Build Doctor Profiles with credentials and direct consultation booking action.
- [ ] Implement 4-Step Interactive Booking Engine with segregated Well-Baby Morning vs Sick Evening shifts.
- [ ] Build Emergency Pediatric Fever & Symptom Triage Guide with traffic-light indicators.
- [ ] Build Simulated WhatsApp Alert Modal with prefilled appointment confirmation message.
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
