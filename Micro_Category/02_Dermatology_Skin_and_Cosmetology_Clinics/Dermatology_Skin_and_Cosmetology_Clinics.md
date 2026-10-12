# Frontend Development Specification
## Business 02: Dermatology, Skin & Cosmetology Clinics
### Project: Aesthetic Dermatology, Laser & Clinical Skin Care Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Aesthetic Dermatology Clinics, Laser Skin Centers, Trichology & Hair Restoration Clinics, and Medical Cosmetology Practices.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for responsive layout grids, flex containers, and modular UI utilities.
- **Styling Architecture:** Curated **Bootstrap 5** layout utilities coupled with custom CSS design tokens (`variables.css` / `style.css`) using CSS Custom Properties for medical emerald accents, rose quartz luxury highlights, and glassmorphic elevation cards.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Offcanvas controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide dermatologists and aesthetic clinic owners with a high-fidelity, interactive, and visually stunning digital experience that demonstrates how modern web software eliminates patient hesitation, showcases clinical proof with interactive before/after comparisons, automates consultation bookings, and opens a direct digital channel for clinical skincare product sales and WhatsApp inquiries.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial aesthetic clinic pain points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Patient Hesitation & Skepticism** | Patients are skeptical about results for acne scars, pigmentation, laser hair removal, and anti-aging treatments. | **Interactive Draggable Before/After Skin Transformation Slider** with real clinical case photography and treatment session metadata. |
| **Consultation No-Shows & Scheduling Confusion** | Friction in booking over phone calls; patients forget appointment timings or clinics lack evening availability. | **2-Step Morning/Evening Consultation Slot Picker** with real-time seat counters and **Simulated Instant WhatsApp Appointment Confirmation Alert**. |
| **Lost Revenue from Skincare Product Sales** | Patients get clinic consultations but buy skincare products on third-party generic marketplaces. | **Integrated Dermatologist-Curated Skincare Product Store** with regimen filter (Acne, Glow, Anti-Aging, Sun Defense) and 1-Click WhatsApp Order Cart. |
| **Patient Indecision & Unknown Skin Concerns** | First-time visitors do not know whether they need a chemical peel, CO2 laser, or topical clinical regimen. | **60-Second Interactive Skin & Hair Assessment Quiz** diagnosing skin type/concerns and routing directly to the appropriate specialist consultation. |
| **High Receptionist Workload Answering Routine Inquiries** | Staff spends hours answering "How many sessions are needed?", "Is laser painful?", "What is the cost per sitting?". | **Interactive Treatment Drawer with Protocol Roadmap**, downtime chips, transparent starting pricing, and comprehensive Dermatology FAQs. |

---

## 3. Design System & Visual Tokens

The frontend must convey aesthetic luxury, medical dermatology precision, and soothing clinical comfort. **Do not use harsh generic red or neon colors.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Deep Clinical Forest & Medical Emerald */
  --color-primary-950: #022019;
  --color-primary-900: #064e3b;
  --color-primary-800: #065f46;
  --color-primary-700: #047857;
  --color-primary-600: #059669; /* Main Brand Accent */
  --color-primary-500: #10b981;
  --color-primary-200: #a7f3d0;
  --color-primary-100: #d1fae5;
  --color-primary-50:  #ecfdf5;

  /* Accent: Rose Quartz Blush & Coral Glow (Aesthetic Cosmetology) */
  --color-accent-700:  #be123c;
  --color-accent-600:  #e11d48;
  --color-accent-500:  #f43f5e;
  --color-accent-200:  #fecdd3;
  --color-accent-100:  #ffe4e6;
  --color-accent-50:   #fff1f2;

  /* Premium Accent: Warm Champagne Gold (VIP Peels & Laser Packages) */
  --color-gold-600:    #d97706;
  --color-gold-500:    #f59e0b;
  --color-gold-100:    #fef3c7;

  /* Surface & Neutral Typography */
  --color-surface-bg:   #fcfdfd;
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#e2e8f0;

  /* Functional Status Colors */
  --color-success:      #10b981; /* Confirmed slot */
  --color-warning:      #f59e0b; /* Few slots remaining */
  --color-danger:       #ef4444; /* Urgent dermatologist alert */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.88);
  --glass-border:       rgba(5, 150, 105, 0.14);
  --glass-shadow:       0 8px 32px 0 rgba(15, 23, 42, 0.08);
  --shadow-card-hover:  0 20px 25px -5px rgba(5, 150, 105, 0.16), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens */
  --radius-sm:   8px;
  --radius-md:   14px;
  --radius-lg:   24px;
  --radius-full: 9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.65`) for clinical clarity.
- **Numbers / Token ID:** Monospaced or tabular numbers (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Dermatologist portraits, clinic rooms, skincare bottles, clinical case studies)
│   └── icons/  (Sparkles, Shield, Clock, Calendar, Heart, WhatsApp, ShoppingBag, Eye)
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
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs AuraSkin digital table)
│   │   ├── TreatmentCatalog.jsx (Card grid with category filter tabs)
│   │   ├── BeforeAfterSkinSlider.jsx (Interactive draggable split-screen)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with specialist profiles)
│   │   ├── SkincareProductStore.jsx (Product grid + quantity selectors)
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified patient feedback)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── ConsultationBookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1TreatmentSelect.jsx
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & seat validation)
│   │   ├── Step4PatientForm.jsx
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── assessment/
│   │   └── SkinAssessmentQuizModal.jsx (60-second diagnostic symptom quiz)
│   ├── store/
│   │   ├── ProductCard.jsx
│   │   ├── ProductQuickDrawer.jsx
│   │   └── WhatsAppCartDrawer.jsx (Bootstrap Offcanvas shopping cart)
│   └── inquiry/
│       └── TreatmentInquiryModal.jsx
├── context/
│   ├── BookingContext.jsx (Manages active consultation slots, booked appointments, token state)
│   └── CartContext.jsx (Manages skincare product cart state and WhatsApp message compilation)
├── data/
│   ├── mockTreatments.js
│   ├── mockDoctors.js
│   ├── mockProducts.js
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
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(255, 255, 255, 0.88); backdrop-filter: blur(14px)`).
- **Left Element:** Clinic Logo with botanical leaf / glow emblem, Brand Name (`AuraSkin Dermatology & Laser Studio`), and a small emerald pulsing dot with text `"Consultations Open Today • 10:00 AM - 8:00 PM"`.
- **Center Nav Links:**
  - `Treatments` (Dropdown / smooth scroll to Laser, Acne, Anti-Aging, Hair)
  - `Before & After` (Clinical proof slider)
  - `Specialists` (Consultant Dermatologists)
  - `Skincare Store` (Clinical Serums & Sunscreens with badge showing item count)
  - `Skin Quiz` (60s Diagnosis)
  - `FAQ`
- **Right Action Items:**
  - Phone Hotline Pill: Direct dial (`+91 98480 55442`).
  - Cart Floating Icon: Shows cart item counter badge (`0` or `N`).
  - Primary CTA Button: `"Book Consultation"` with a gradient fill (`var(--color-primary-700)` to `var(--color-primary-600)`) with subtle pulsing glow.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ US-FDA Approved Lasers • Board-Certified Dermatologists`.
  - Main Heading:
    > **Flawless Skin Backed by Medical Science & Laser Precision.**
  - Subheading:
    > Say goodbye to stubborn acne scars, hyperpigmentation, and hair fall. Experience personalized dermatological care with zero downtime and clinical results.
  - Dual CTAs:
    - Primary Button: `Book Doctor Consultation` (opens 4-Step Booking Engine).
    - Secondary Button: `Take 60s Skin Analysis Quiz ↗` (opens Quiz Modal).
  - Social Proof Strip:
    - Overlapping patient avatar circles.
    - `⭐ 4.9/5 Rating across 1,450+ verified Google Reviews`.
    - Micro-tags: `✓ 100% US-FDA Approved Devices` | `✓ Zero-Wait Digital Appointments` | `✓ Custom Derma Regimens`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res clinical aesthetic photography (radiant patient & laser workstation).
    - Floating Badge 1 (Top-Right): `"Next Slot Today: 05:30 PM (Evening Session)"` with emerald active radar dot.
    - Floating Badge 2 (Bottom-Left): `"96.8% Acne Scar Depth Reduction • 4 Sittings"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A high-contrast luxury dark teal or emerald horizontal strip featuring 4 animated statistics:
1. `18,000+` Clinical Skin & Hair Consultations Completed
2. `4,200+` Fractional CO2 Laser & Scar Treatments
3. `8+` Board-Certified MD / DVD Dermatologists & Trichologists
4. `98.2%` Patient Satisfaction & Skin Improvement Rate

*Developer Animation Note:* Use Intersection Observer to animate numbers from `0` to target values when scrolled into view.

---

### 5.4 Section 3: "Traditional Skin Clinic Hassles vs. The AuraSkin Digital Way"
A comparative problem-solver interactive matrix demonstrating why modern aesthetic clinics adopt this platform:

| Traditional Clinic Hassle | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Fear of skin damage from unverified laser treatments | 100% transparent US-FDA approved machine protocols & dermatologists | Interactive Machine & Protocol Drawer |
| Uncertain consultation waiting times; patients wait 1+ hour | Morning/Evening guaranteed time-slot picker with real-time seat tracking | Live Consultation Slot Picker |
| Skepticism about whether acne scar treatments really work | Interactive split-screen Before/After clinical case sliders | Draggable Before/After Comparison Tool |
| Patients buy the wrong products online without guidance | In-clinic curated medical skincare store with 1-click WhatsApp delivery | Skincare Regimen Builder & WhatsApp Cart |

---

### 5.5 Section 4: Treatment Catalog (Card Grid + Filter Tabs)
- **Filter Tabs:**
  `All Treatments (8)` | `Acne & Scar Laser` | `Anti-Aging & Glow` | `Laser Hair Reduction` | `Hair & Trichology`
- **8 Core Treatment Cards:**
  1. **Fractional CO2 Laser Resurfacing** (Acne scar subcision, collagen remodeling, 45 mins).
  2. **HydraFacial MD Elite Glow** (3-step vortex extraction, deep hydration, zero downtime).
  3. **Triclosan & Glycolic Chemical Peels** (Active acne control, dark spots, sebum balance).
  4. **US-FDA Triple Wavelength Laser Hair Reduction** (Painless diode/alexandrite, permanent reduction).
  5. **PRP & GFC Hair Restoration Therapy** (Autologous growth factor concentrate for hair thinning).
  6. **Q-Switched Nd:YAG Laser Toning** (Melasma, sun spots, tattoo removal & instant skin brightening).
  7. **Under-Eye Dark Circle & Tear Trough Rejuvenation** (Hyaluronic peptide hydration & pigment peel).
  8. **Botox & Dermal Filler Contour** (US-FDA wrinkle relaxation and jawline definition).

- **Card Layout & Elements:**
  - Category pill badge (e.g., `Laser Dermatology`) + Treatment Title + Duration chip (`⏱ 45 mins`).
  - Clinical Summary: 2 lines explaining medical mechanism & downtime (`Zero Downtime`, `2-3 Days Social Downtime`).
  - Price Tag: Transparent starting price (e.g., `From ₹3,499 / sitting`) with package discount tag.
  - Actions:
    - `"View Protocol"`: Opens quick drawer with pre/post care guidelines and session frequency.
    - `"Book Consultation"`: Pre-selects treatment and launches Booking Modal.

---

### 5.6 Section 5: Interactive Before & After Skin Transformation Slider
A real-time draggable comparison widget allowing prospective patients to slide between pre-treatment and post-treatment clinical results.
- **Controls:**
  - Vertical drag divider handle with left/right arrows (`⟷`).
  - Visual label pills: `"Before Treatment (Day 1)"` (Top-Left) and `"After 4 Sessions (Week 8)"` (Top-Right).
- **Case Tabs:**
  - Case 1: *Grade 4 Rolling & Boxcar Acne Scar Resurfacing (Fractional CO2 Laser)*
  - Case 2: *Severe Melasma & Pigmentation (Q-Switched Laser + Peel)*
  - Case 3: *Dull Skin & Open Pores (HydraFacial MD Glow)*
- **Technical Implementation:**
  - Relative parent container with two identical aspect-ratio images.
  - CSS `clip-path: inset(0 (100% - x%) 0 0)` driven by mouse/touch event listeners.

---

### 5.7 Section 6: Specialist Dermatologists & Cosmetologists Team
- Display 4 specialist doctor cards using realistic dummy names:
  1. **Dr. Ananya Rao, MD (DVL)** — Chief Dermatologist & Aesthetic Laser Surgeon (16 yrs exp).
  2. **Dr. Preeti Varma, MD, FAM** — Consultant Cosmetologist & Anti-Aging Specialist (12 yrs exp).
  3. **Dr. Prashant Varma, MD (Skin & VD)** — Trichology & Laser Hair Removal Expert (11 yrs exp).
  4. **Dr. Pravallika Reddy, DDVL** — Clinical Acne & Scar Revision Specialist (9 yrs exp).
- **Card Interactive State:**
  - Professional clinical portrait in white coat.
  - Degrees, Medical Council Reg. No. (`APMC-28491`), and clinical focus areas.
  - Quick `"Book with Dr. [Name]"` trigger button.

---

### 5.8 Section 7: Doctor Consultation Booking Engine (Core Prototype Feature)
A 4-step progressive modal for seamless patient reservation:
- **Step 1: Select Concern / Treatment Category**
  - Grid of concerns: *Acne & Scars, Dullness/Tanning, Pigmentation/Melasma, Hair Thinning, Laser Hair Removal*.
- **Step 2: Choose Specialist Doctor**
  - Option to pick a specific doctor or select `"First Available Specialist (Fastest)"`.
- **Step 3: Date & Morning/Evening Slot Picker**
  - Date Bar: Horizontal scrollable date pills showing next 7 days (`Today, Tomorrow, Day 3...`).
  - Shift Toggle: `Morning Session (10:00 AM - 1:30 PM)` vs. `Evening Session (4:30 PM - 8:30 PM)`.
  - Slot Chips:
    - Available: Emerald border, clickable (`10:00 AM`, `11:30 AM`, `05:30 PM`, `07:00 PM`).
    - Filling Fast (1 slot left): Amber badge.
    - Booked (Disabled): Greyed out (`04:30 PM - Booked`).
- **Step 4: Patient Details & Instant Confirmation**
  - Full Name, WhatsApp Mobile Number, Prior Treatment History checkbox.
  - Generates Instant Token ID: `DERM-2026-0814`.
  - **Simulated WhatsApp Notification Pop-up:**
    > *"Hello Priya! Your consultation at AuraSkin Clinic is confirmed. Token #DERM-0814. Doctor: Dr. Ananya Rao, MD. Date: Tomorrow at 5:30 PM. Tap here for Google Maps directions: [AuraSkin Clinic]"*

---

### 5.9 Section 8: Dermatologist-Curated Skincare Product Store (Bonus Showcase)
An interactive clinical product catalog demonstrating retail revenue potential for clinics:
- **Product Categories:** `Acne Defense` | `Sun Protection` | `Vitamin C & Brightening` | `Barrier Repair`
- **4 Featured Clinical Products:**
  1. **AuraShield Invisible Sunscreen Gel SPF 50+ PA++++** (50ml, ₹799) — Broad spectrum, non-comedogenic.
  2. **DermaGlow 15% Ethyl Ascorbic Acid Serum** (30ml, ₹1,299) — Pure Vitamin C, ferulic acid, glow booster.
  3. **Clarifying 2% Salicylic Acid BHA Cleanser** (100ml, ₹649) — Unclogs pores, controls excess sebum.
  4. **Ceramide & Hyaluronic Deep Barrier Repair Cream** (50g, ₹899) — Post-laser soothing hydration.
- **Interactive Features:**
  - Quantity selector (`- 1 +`).
  - `"Add to Cart"` with instant toast notification.
  - Bootstrap Offcanvas Cart Drawer displaying item total and a **"Order via WhatsApp"** button formatting the entire shopping cart into a ready-to-send WhatsApp message.

---

### 5.10 Section 9: 60-Second Skin & Hair Health Self-Assessment Quiz
A guided 3-question diagnostic quiz:
- **Q1:** What is your primary skin concern? (*Active Acne, Scarring, Melasma/Tanning, Hair Fall*).
- **Q2:** How does your skin feel midday? (*Shiny all over, Tight & flaky, Oily on T-zone only, Irritated & red*).
- **Q3:** Have you undergone clinical peels or laser treatments before? (*Yes within 6 months, No first time, Over a year ago*).
- **Result:** Generates an instant personalized recommendation card (e.g., *"Recommended: Salicylic Peel + HydraFacial Protocol"*) with a 1-click button to book that specific treatment.

---

### 5.11 Section 10: Patient Testimonials & Google Ratings
- Visual review cards featuring verified patient ratings:
  - 4.9-star average rating card with link to simulated Google Review modal.
  - Before/After photo thumbnail attached to review.
  - Verified badges (`Verified Treatment Patient`).

---

### 5.12 Section 11: Comprehensive Dermatology FAQs Accordion
Interactive Bootstrap accordion answering patient doubts:
1. *How many sessions of Fractional CO2 Laser will I need for deep acne scars?*
2. *Is Laser Hair Reduction truly permanent and safe for Indian skin types?*
3. *What is the difference between a salon facial and medical HydraFacial MD?*
4. *What downtime should I expect after a chemical peel or laser session?*
5. *Do dermatologists customize skincare products based on individual skin testing?*
6. *Can I combine PRP hair therapy with topical dermatologist prescriptions?*

---

### 5.13 Section 12: Footer & Contact Information
- Opening Hours: Monday - Saturday: `10:00 AM - 1:30 PM` & `4:30 PM - 8:30 PM`.
- Direct Contact: Phone call link (`+91 98480 55442`), WhatsApp direct link, Clinic Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockTreatments.js`
```javascript
export const mockTreatments = [
  {
    id: "co2-laser",
    name: "Fractional CO2 Laser Scar Resurfacing",
    category: "Acne & Scar Laser",
    duration: "45 mins",
    startingPrice: 4499,
    downtime: "2-3 Days Social Downtime",
    tag: "US-FDA Approved",
    description: "Medical-grade fractional micro-beams vaporize damaged scar tissue and trigger rapid collagen remodeling for deep boxcar and rolling scars.",
    sessionsRequired: "3 to 5 sessions recommended",
    beforeAfterImage: "/assets/images/case-co2-scar.jpg"
  },
  {
    id: "hydrafacial",
    name: "HydraFacial MD Elite Deep Vortex Glow",
    category: "Anti-Aging & Glow",
    duration: "40 mins",
    startingPrice: 3499,
    downtime: "Zero Downtime",
    tag: "Instant Event Glow",
    description: "Patented vortex vacuum unclogs congested pores, extracts blackheads, and infuses antioxidant peptides and hyaluronic acid.",
    sessionsRequired: "Monthly maintenance",
    beforeAfterImage: "/assets/images/case-hydra-glow.jpg"
  },
  {
    id: "laser-hair-reduction",
    name: "Triple-Wavelength Painless Laser Hair Reduction",
    category: "Laser Hair Reduction",
    duration: "30-60 mins",
    startingPrice: 2999,
    downtime: "Zero Downtime",
    tag: "Permanent Reduction",
    description: "Diode, Alexandrite & Nd:YAG combined wavelengths targeting deep hair follicles safely on Indian skin tones.",
    sessionsRequired: "6 to 8 sessions for 90%+ reduction",
    beforeAfterImage: "/assets/images/case-laser-hair.jpg"
  },
  {
    id: "prp-hair",
    name: "Autologous PRP & GFC Hair Restoration",
    category: "Hair & Trichology",
    duration: "60 mins",
    startingPrice: 4999,
    downtime: "No Downtime",
    tag: "Growth Factor Concentrate",
    description: "Concentrated blood platelets rich in vascular growth factors injected into thinning scalp areas to awaken dormant follicles.",
    sessionsRequired: "4 sessions at 3-week intervals",
    beforeAfterImage: "/assets/images/case-prp-hair.jpg"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-derma-1",
    name: "Dr. Ananya Rao, MD (DVL)",
    role: "Chief Dermatologist & Aesthetic Laser Surgeon",
    experienceYears: 16,
    education: "MD - Dermatology, Venereology & Leprosy (AIIMS)",
    rating: 4.9,
    reviewCount: 410,
    avatar: "/assets/images/doctors/dr-ananya.jpg",
    availableDays: ["Mon", "Tue", "Thu", "Fri", "Sat"],
    specialtySlug: "co2-laser"
  },
  {
    id: "doc-derma-2",
    name: "Dr. Preeti Varma, MD, FAM",
    role: "Consultant Cosmetologist & Anti-Aging Specialist",
    experienceYears: 12,
    education: "MD, Fellowship in Aesthetic Medicine (Germany)",
    rating: 4.92,
    reviewCount: 360,
    avatar: "/assets/images/doctors/dr-preeti.jpg",
    availableDays: ["Tue", "Wed", "Fri", "Sat"],
    specialtySlug: "hydrafacial"
  }
];
```

### 6.3 `mockProducts.js` (Skincare Store)
```javascript
export const mockProducts = [
  {
    id: "prod-sunscreen",
    name: "AuraShield Invisible Sunscreen Gel SPF 50+",
    category: "Sun Protection",
    price: 799,
    mrp: 999,
    size: "50 ml",
    tag: "Bestseller",
    description: "Broad-spectrum PA++++ matte gel formulated with zinc oxide and niacinamide. Zero white cast.",
    image: "/assets/images/products/sunscreen.jpg"
  },
  {
    id: "prod-vitc",
    name: "DermaGlow 15% Vitamin C Brightening Serum",
    category: "Vitamin C & Brightening",
    price: 1299,
    mrp: 1599,
    size: "30 ml",
    tag: "Dermatologist Pick",
    description: "Ethyl ascorbic acid, ferulic acid, and hyaluronic acid for stubborn dark spots and radiance.",
    image: "/assets/images/products/vitc-serum.jpg"
  },
  {
    id: "prod-cleanser",
    name: "Clarifying 2% Salicylic Acid BHA Cleanser",
    category: "Acne Defense",
    price: 649,
    mrp: 799,
    size: "100 ml",
    tag: "Oil Control",
    description: "Gently penetrates oil glands to clear acne blemishes, blackheads, and excess sebum.",
    image: "/assets/images/products/cleanser.jpg"
  },
  {
    id: "prod-barrier",
    name: "Ceramide & Peptides Barrier Repair Cream",
    category: "Barrier Repair",
    price: 899,
    mrp: 1100,
    size: "50 g",
    tag: "Post-Laser Safe",
    description: "Soothes irritated, dry, or peeling skin post-peel or laser treatment. Hypoallergenic.",
    image: "/assets/images/products/barrier-cream.jpg"
  }
];
```

### 6.4 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Shift
  { id: "dm1", time: "10:00 AM", shift: "morning", available: true },
  { id: "dm2", time: "11:00 AM", shift: "morning", available: true, fewLeft: true },
  { id: "dm3", time: "12:00 PM", shift: "morning", available: false }, // Booked
  { id: "dm4", time: "01:00 PM", shift: "morning", available: true },

  // Evening Shift
  { id: "de1", time: "04:30 PM", shift: "evening", available: false }, // Booked
  { id: "de2", time: "05:30 PM", shift: "evening", available: true, fewLeft: true },
  { id: "de3", time: "06:30 PM", shift: "evening", available: true },
  { id: "de4", time: "07:30 PM", shift: "evening", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Subtle Luxury Micro-Interactions:** Buttons must feature smooth transform transitions (`transform: translateY(-2px); box-shadow: var(--shadow-card-hover)`).
2. **Draggable Comparison Slider:** The before/after slider must respond instantly without frame jank. Use CSS variable `--slider-pos` updated on `pointermove` or `touchmove`.
3. **Live Counter Number Ticker:** Digits increment smoothly over 1.8 seconds when triggered by `IntersectionObserver`.
4. **Toast Notifications:** Adding a skincare product to cart triggers a slide-in bottom-right emerald toast (`✓ Added to Skincare Cart`) that auto-dismisses after 3 seconds.
5. **Modal Transitions:** Modals should fade in with backdrop blur (`backdrop-filter: blur(8px)`) and a subtle scale transition (`scale(0.95)` to `scale(1)`).

---

## 8. Mobile Responsiveness Directives (Critical)

Over 80% of skincare clinic patients browse on smartphones (`375px` to `428px`). Ensure:
- **Sticky Bottom Action Bar on Mobile:**
  When scrolled past the hero, display a persistent bottom bar with:
  - Phone quick call button (`📞 Call Clinic`)
  - Full-width CTA button (`⚡ Book Consultation - Today Available`)
- **Horizontal Swipeable Carousels:**
  Treatment cards, doctors, and date pickers must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and quantity selectors must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom properties in `globals.css` with emerald clinical palette, rose quartz accents, and typography.
- [ ] Build sticky translucent `Navbar` with emergency phone pill, clinic live status dot, and shopping cart counter.
- [ ] Build Hero Section with dual CTAs, trust badges, and floating "Next Slot Available" chip using Bootstrap grid.
- [ ] Build `ClinicalMetricsBar` with animated counter numbers.
- [ ] Create `TreatmentCatalog` with category filter pills, procedure badges, duration chips, and "View Protocol" drawer.
- [ ] Build the draggable `BeforeAfterSkinSlider` with multiple clinical cases (CO2 acne scar, HydraFacial glow, melasma).
- [ ] Build Doctor Profiles with credentials and direct consultation booking action.
- [ ] Implement 4-step `ConsultationBookingModal` with Morning/Evening slot availability validation and Token ID generation (`DERM-2026-XXXX`).
- [ ] Build `SkincareProductStore` with product cards, quantity selectors, Bootstrap offcanvas cart drawer, and 1-click WhatsApp order compiler.
- [ ] Build `SkinAssessmentQuizModal` (3-question diagnostic quiz recommending personalized treatment protocols).
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
