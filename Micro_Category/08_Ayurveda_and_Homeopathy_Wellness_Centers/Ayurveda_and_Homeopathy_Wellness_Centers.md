# Frontend Development Specification
## Business 08: Ayurveda & Homeopathy Wellness Centers
### Project: Holistic Healing & Natural Wellness Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Traditional Ayurvedic Hospitals, Classical Panchakarma Centers, Homeopathic Healthcare Clinics, Integrative Wellness Retreats, and Authentic Herbal Formulations Dispensaries.
- **Frontend Architecture:** Component-Based Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for responsive layout grids, flexible consultation wizards, and accessible diagnostic tools.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `style.css`) using CSS Custom Properties for botanical forest green, copper terracotta, turmeric gold, natural linen surfaces, and glassmorphic cards.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide Ayurvedic vaidyas, homeopathic physicians, and holistic retreat founders with a high-fidelity, interactive, and visually serene digital experience. The application demonstrates how modern web software eliminates skepticism around natural medicine, features an interactive **60-Second Prakriti (Vata-Pitta-Kapha) Dosha Assessment Quiz**, automates Panchakarma rejuvenation therapy bookings (Shirodhara, Abhyanga, Janu Basti), provides structured constitutional case-taking questionnaires, showcases herbal remedies with 1-click WhatsApp ordering, and issues simulated OPD queue tokens with automated WhatsApp alerts.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial Ayurveda and Homeopathy clinic pain points into specific, interactive UI features:

| Clinic Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **Patient Skepticism & Lack of Understanding of Doshas** | Modern patients do not understand traditional concepts (Vata, Pitta, Kapha) and view holistic healing as slow or vague. | **Interactive 60-Second Prakriti / Body Constitution Quiz** calculating real-time tridosha percentage breakdown with personalized diet and lifestyle recommendations. |
| **Opaque Panchakarma Therapy Packages** | Patients are confused about what treatments entail (oil types, session counts, detoxification benefits). | **Interactive Panchakarma Rejuvenation Therapy Showcase** with visual step-by-step procedure guides (Purvakarma $\rightarrow$ Pradhanakarma), session durations, and transparent pricing. |
| **Exhausting 60-Minute Homeopathic Initial Case-Taking** | Homeopaths spend 1–2 hours taking extensive physical, emotional, and modal histories, creating huge clinic backlog. | **Pre-Consultation Constitutional Case-Taking Intake Scheduler** capturing mind, body, thermal, and sleep patterns online prior to clinic arrival. |
| **Lost In-Clinic Herbal Remedy & Tincture Sales** | Patients receive prescriptions but buy generic commercial brands from outside medical stores instead of authentic clinic formulations. | **Integrated Authentic Herbal Remedies & Tinctures Storefront** with category filters (Immunity, Joint Health, Digestion, Stress) and 1-Click WhatsApp Order Cart. |
| **Receptionist Phone Overload Answering Daily Inquiries** | Staff spends 40%+ of their day answering "Is the vaidya available?", "How many days for Shirodhara?", and "What is my token number?". | **Simulated Live Clinic OPD Waiting Room Screen** and **Instant WhatsApp Booking Alert** with sequential token issuance (`AYUR-2026-XXXX`). |

---

## 3. Design System & Visual Tokens

The frontend must convey organic natural tranquility, authentic ancient Vedic wisdom, botanical purity, and soothing clinical reassurance. **Avoid harsh neon colors or modern industrial greys.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Botanical Forest Green & Deep Ayurvedic Herb */
  --color-primary-950: #052e16;
  --color-primary-900: #14532d;
  --color-primary-800: #166534;
  --color-primary-700: #15803d;
  --color-primary-600: #16a34a; /* Main Botanical Green */
  --color-primary-500: #22c55e;
  --color-primary-200: #bbf7d0;
  --color-primary-100: #dcfce7;
  --color-primary-50:  #f0fdf4;

  /* Accent: Earthy Terracotta & Copper Warmth */
  --color-accent-700:  #9a3412;
  --color-accent-600:  #c2410c;
  --color-accent-500:  #ea580c;
  --color-accent-200:  #fed7aa;
  --color-accent-100:  #ffedd5;
  --color-accent-50:   #fff7ed;

  /* Secondary: Turmeric Gold & Golden Sesame (Panchakarma Oils) */
  --color-gold-600:    #d97706;
  --color-gold-500:    #f59e0b;
  --color-gold-400:    #fbbf24;
  --color-gold-100:    #fef3c7;

  /* Surface & Natural Linen Typography */
  --color-surface-bg:   #fcfbf7; /* Warm Herbal Parchment */
  --color-surface-card: #ffffff;
  --color-surface-dark: #1c1917;
  --color-text-main:    #1c1917;
  --color-text-muted:   #57534e;
  --color-text-light:   #a8a29e;
  --color-border-subtle:#e7e5e4;

  /* Functional Status Colors */
  --color-success:      #16a34a; /* Balanced Dosha / Confirmed slot */
  --color-warning:      #f59e0b; /* Aggravated Dosha / Few slots left */
  --color-danger:       #ef4444; /* Acute flare-up hotline */

  /* Glassmorphism & Elevation */
  --glass-bg:           rgba(255, 255, 255, 0.92);
  --glass-border:       rgba(22, 163, 74, 0.14);
  --glass-shadow:       0 8px 32px 0 rgba(28, 25, 23, 0.06);
  --card-shadow:        0 4px 20px -2px rgba(28, 25, 23, 0.05);
  --card-shadow-hover:  0 20px 25px -5px rgba(22, 163, 74, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.04);

  /* Radius Tokens */
  --radius-sm:          8px;
  --radius-md:          14px;
  --radius-lg:          24px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
- **Body & Data:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High line-height (`1.68`) for serene reading comfort.
- **Numbers / Dosha Scores / Token ID:** Monospaced or tabular figures (`font-variant-numeric: tabular-nums`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Panchakarma therapy rooms, Shirodhara oil stream, medicinal herbs, doctor portraits)
│   └── icons/  (Leaf, Droplets, Sparkles, ShieldCheck, Heart, Calendar, Clock, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + Prakriti quiz shortcut)
│   │   ├── Footer.jsx (Bootstrap row/col grid with clinic & pharmacy hours)
│   │   ├── WhatsAppFloatButton.jsx
│   │   ├── Badge.jsx
│   │   └── Modal.jsx (Bootstrap modal wrapper or React Portal)
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column responsive layout)
│   │   ├── ClinicalMetricsBar.jsx (Animated counter numbers strip)
│   │   ├── ProblemsSolvedGrid.jsx (Traditional vs AyurVeda Life digital table)
│   │   ├── TherapiesCatalog.jsx (Panchakarma, Shirodhara, Janu Basti, Homeopathy cards)
│   │   ├── PrakritiQuizSection.jsx (60-second interactive Vata-Pitta-Kapha quiz)
│   │   ├── HerbalStorefront.jsx (Herbal formulations catalog + WhatsApp cart)
│   │   ├── DoctorRosterSection.jsx (Bootstrap card grid with Vaidyas & Homeopaths)
│   │   ├── TestimonialsGrid.jsx (Google reviews & verified natural healing stories)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── booking/
│   │   ├── HolisticBookingModal.jsx (4-Step interactive booking wizard)
│   │   ├── Step1ServiceTypeSelect.jsx (Vaidya OPD vs Panchakarma Therapy vs Homeopathy)
│   │   ├── Step2DoctorSelect.jsx
│   │   ├── Step3SlotPicker.jsx (Morning/Evening shift toggles & seat validation)
│   │   ├── Step4PatientForm.jsx (Patient details, chronic complaint, constitution notes)
│   │   ├── BookingConfirmationCard.jsx
│   │   └── WhatsAppReceiptModal.jsx (Simulated incoming WhatsApp alert)
│   ├── assessment/
│   │   └── PrakritiModal.jsx (Full-screen interactive Dosha evaluator)
│   ├── store/
│   │   ├── ProductCard.jsx
│   │   └── HerbalCartOffcanvas.jsx (Bootstrap Offcanvas cart for herbal remedies)
│   └── reception/
│       └── LiveAyurQueueDisplay.jsx (Simulated Clinic TV Waiting Screen)
├── context/
│   ├── BookingContext.jsx (Manages active slots, booked appointments, token state)
│   └── HerbalCartContext.jsx (Manages herbal remedy shopping cart and WhatsApp order compiler)
├── data/
│   ├── mockTherapies.js
│   ├── mockDoctors.js
│   ├── mockHerbalProducts.js
│   ├── mockSlots.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Transitions, dosha balance bars, gentle oil stream pulse)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Navigation Bar (Sticky Header)
- **Visual Style:** Glassmorphic translucent navbar (`background: rgba(252, 251, 247, 0.92); backdrop-filter: blur(14px)`).
- **Left Element:** Clinic Logo with stylized lotus / herbal leaf emblem, Brand Name (`AyurVeda Life & Holistic Sanctuary`), and a small emerald pulsing dot with text `"OPD & Panchakarma Open • 8:00 AM - 7:30 PM"`.
- **Center Nav Links:**
  - `Panchakarma` (Shirodhara, Abhyanga, Basti, Kizhi)
  - `Prakriti Quiz` (60s Dosha Test)
  - `Homeopathy Care` (Chronic Constitutional Clinic)
  - `Herbal Store` (Classical Formulations with item counter badge)
  - `Our Vaidyas` (Ayurvedic Physicians & Homeopaths)
  - `FAQ`
- **Right Action Items:**
  - Holistic Helpline: Direct dial (`+91 98480 66332`).
  - Primary CTA Button: `"Book Consultation"` with a gradient fill (`var(--color-primary-700)` to `var(--color-primary-600)`) with subtle pulsing glow.

---

### 5.2 Section 1: Hero Section (The 10-Second Hook)
- **Layout:** Bootstrap 2-Column Desktop Grid (`col-lg-7` Content, `col-lg-5` Interactive Card).
- **Left Content:**
  - Pill Badge: `✦ Authentic Kerala Panchakarma • Classical German Homeopathy`.
  - Main Heading:
    > **Restore Natural Harmony, Reverse Chronic Ailments at the Root.**
  - Subheading:
    > Zero chemicals, zero side effects. Experience authentic pulse diagnosis (Nadi Pariksha), customized herbal detox therapies, and personalized constitutional wellness for mind, body, and spirit.
  - Dual CTAs:
    - Primary Button: `Book Vaidya Consultation` (opens 4-Step Booking Engine).
    - Secondary Button: `Discover Your Prakriti Dosha ↗` (scrolls to Quiz Section).
  - Social Proof Strip:
    - Overlapping patient avatar circles.
    - `⭐ 4.9/5 Rating across 1,280+ verified Google Reviews`.
    - Micro-tags: `✓ 100% Pure Medicated Oils` | `✓ Certified Panchakarma Therapists` | `✓ Tailored Diet Plans`.
- **Right Content:**
  - Floating Hero Composite Card with:
    - High-res tranquil visual (copper Shirodhara vessel pouring warm herbal oil).
    - Floating Badge 1 (Top-Right): `"Next Slot Today: 04:30 PM (Evening Session)"` with green active radar dot.
    - Floating Badge 2 (Bottom-Left): `"97.6% Chronic Relief & Vitality Restoration"`.

---

### 5.3 Section 2: Clinical Impact & Metrics Counter Bar
A high-contrast deep forest green horizontal strip built with Bootstrap row/col:
1. `22,000+` Healing Consultations Completed
2. `8,500+` Authentic Panchakarma Detoxification Sessions
3. `15,000+` Prakriti Dosha Assessments Evaluated
4. `< 10 Mins` Average OPD Waiting Time with Digital Token

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Alternative Care Hassles vs. AyurVeda Life Digital Way"
A comparative problem-solver interactive matrix showcasing why wellness clinics adopt this platform:

| Traditional Clinic Hassle | The Modern Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| Patients find Dosha concepts confusing and abstract | 60-Second Prakriti body constitution quiz with visual percentage breakdown | Interactive Dosha Assessment Tool |
| Unclear Panchakarma protocols and mystery treatment durations | Visual therapy roadmap explaining medicated herbs, steps, and preparation | Panchakarma Protocol Drawer |
| 90-minute initial homeopathic case-taking causes huge clinic queues | Pre-consultation online intake form capturing mental and physical traits beforehand | Constitutional Case Intake Scheduler |
| Patients purchase generic unverified herbal products from retail stores | In-clinic authentic herbal dispensary with 1-click WhatsApp prescription ordering | Herbal Storefront & Cart Offcanvas |

---

### 5.5 Section 4: Ayurvedic & Panchakarma Therapies Catalog
- **Filter Tabs:**
  `All Therapies (6)` | `Panchakarma Detox` | `Spine & Joint Rejuvenation` | `Stress & Mind Care` | `Homeopathy Care`
- **6 Core Clinical Therapy Cards:**
  1. **Authentic Shirodhara Stress Relief:** Continuous warm stream of medicated Brahmi taila over the forehead, calming the nervous system and relieving insomnia.
  2. **Full-Body Abhyanga & Herbal Swedana:** Synchronized medicated warm herbal oil massage followed by steam detoxification.
  3. **Janu Basti (Knee Joint Nourishment):** Warm herbal medicated oil reservoir over knee joints, relieving osteoarthritis stiffness and cartilage wear.
  4. **Nasyam Sinus & Headache Therapy:** Nasal drops of Anu taila clearing chronic sinusitis, migraine, and mental fatigue.
  5. **Podikizhi / Elakizhi Herbal Bolus Therapy:** Warm herbal leaf poultices stamped over aching muscles and inflamed joints.
  6. **Classical Homeopathic Constitutional Consultation:** In-depth case evaluation treating chronic allergies, eczema, autoimmune conditions, and migraine.
- **Card Layout & Elements:**
  - Therapy category badge + Title + Duration chip (`⏱ 60-75 mins`).
  - Clinical Summary highlighting natural herbs and rejuvenation benefits.
  - Price Tag: Starting package (e.g., `From ₹1,800 / session` with multi-session discount options).
  - Actions:
    - `"View Therapy Protocol"`: Opens quick drawer with herb details and preparatory guidelines.
    - `"Book Therapy Slot"`: Pre-selects therapy and launches Booking Modal.

---

### 5.6 Section 5: Interactive 60-Second Prakriti (Vata-Pitta-Kapha) Dosha Quiz Tool
An interactive Vedic diagnostic tool providing immediate patient self-discovery:
- **Interactive Question Flow:**
  - **Question 1 (Body Frame):** "What is your natural physical frame?" (*Thin/Lean, struggles to gain weight* [Vata] | *Medium, athletic, warm skin* [Pitta] | *Broad/Sturdy, gains weight easily* [Kapha]).
  - **Question 2 (Thermal Preference):** "How do you respond to weather?" (*Dislike cold, love warm sun* [Vata] | *Dislike heat, sweat easily, crave cool drinks* [Pitta] | *Dislike damp/cold weather, comfortable in warm weather* [Kapha]).
  - **Question 3 (Digestion & Hunger):** "How is your daily digestion?" (*Irregular, variable appetite, prone to gas* [Vata] | *Strong, ravenous hunger, gets irritable if food is delayed* [Pitta] | *Slow but steady, can skip meals without irritation* [Kapha]).
  - **Question 4 (Mind & Stress):** "How do you handle emotional stress?" (*Anxious, overthinking, restless sleep* [Vata] | *Short-tempered, perfectionist, intense* [Pitta] | *Calm, patient, slow to react, loyal* [Kapha]).
- **Interactive Output Screen:**
  - Tridosha Visual Balance Bar: Displays exact percentages (e.g., `45% Pitta • 35% Vata • 20% Kapha`).
  - Dominant Constitution: *"Pitta-Vata (Fire & Air Constitution)"*.
  - Personalized Lifestyle & Diet Advisory: Foods to favor vs foods to avoid.
  - Direct Action CTA: `"Book Nadi Pariksha with Senior Vaidya"`.

---

### 5.7 Section 6: Triple-Service Booking Engine (Vaidya vs Panchakarma vs Homeopathy)
A dynamic 4-step progressive modal providing seamless scheduling across healing disciplines:
- **Step 1 - Service Choice:**
  - Option A: `Ayurvedic Doctor Consultation (Nadi Pariksha & Health Assessment)`
  - Option B: `Panchakarma Detox & Wellness Therapy (Shirodhara, Abhyanga, Basti)`
  - Option C: `Classical Homeopathic Constitutional Consultation`
- **Step 2 - Specialist Selection:**
  - Choose a Vaidya or Homeopath or `"First Available Physician (Fastest)"`.
- **Step 3 - Date & Shift Picker:**
  - Date Bar: 7-day rolling calendar strip (`Today, Tomorrow, Day 3...`).
  - Shift Toggle: `Morning Shift (8:00 AM - 1:00 PM)` vs `Evening Shift (4:00 PM - 7:30 PM)`.
  - Slot Chips:
    - Available: Green border (`08:30 AM`, `10:30 AM`, `04:30 PM`, `06:00 PM`).
    - Filling Fast: Amber badge.
    - Booked: Greyed out.
- **Step 4 - Patient Intake Form:**
  - Full Name, WhatsApp Mobile Number, Age.
  - Chief Health Concern: `Joint Pain / Arthritis`, `Digestive / Acidity`, `Stress / Insomnia`, `Skin Allergy / Eczema`, `Migraine`.
- **Confirmation Action & Result Screen:**
  - Generates Instant Token ID: `AYUR-2026-0914`.
  - **Simulated WhatsApp Notification Pop-up:**
    > *"Namaste Sunitha! Your consultation at AyurVeda Life Sanctuary is confirmed. Token #AYUR-0914. Physician: Dr. V. Madhava Rao, MD (Ayur). Date: Today at 4:30 PM. Tap here for clinic directions: [AyurVeda Life Clinic]"*

---

### 5.8 Section 7: Specialist Vaidyas & Classical Homeopaths Team
- Display 4 specialist doctor cards using realistic dummy names:
  1. **Dr. V. Madhava Rao, BAMS, MD (Ayurveda - Panchakarma)** — Chief Ayurvedic Physician & Nadi Pariksha Expert (21 yrs exp).
  2. **Dr. S. Gayathri Devi, BHMS, MD (Homeo)** — Senior Classical Homeopath & Chronic Allergy Specialist (16 yrs exp).
  3. **Dr. K. Ramachandra Murthy, BAMS, D.Ayur** — Senior Joint & Spine Ayurvedic Specialist (14 yrs exp).
  4. **Dr. M. Sangeetha, BHMS, Fellowship in Holistic Health** — Women's Hormonal & Skin Homeopath (10 yrs exp).
- **Card Interactive State:**
  - Professional clinical portrait in traditional soothing attire.
  - Medical Council Reg. No. (`APMC-14280`), special clinical focus areas.
  - Available Days chips (`Mon - Sat`).
  - CTA Button: `"Consult Vaidya"`.

---

### 5.9 Section 8: Classical Herbal Remedies & Formulations Storefront (Bonus Showcase)
An interactive retail botanical dispensary demonstrating clinic product sales:
- **Product Categories:** `Kashayams & Tonics` | `Medicated Oils` | `Herbal Churnas` | `Homeopathic Tinctures`
- **4 Featured Classical Products:**
  1. **Ksheerabala 101 Taila Drops** (10ml, ₹450) — Micro-processed neuro-protective ear and head drops for migraine and nerve strength.
  2. **Mahanarayana Taila (Medicated Joint Oil)** (200ml, ₹580) — Classical formula with 50+ herbs for severe joint stiffness and backache.
  3. **Organic Ashwagandha & Shankhpushpi Churna** (100g, ₹380) — Rejuvenating adaptogen for deep sleep and adrenal calm.
  4. **Arnica Montana 200CH & Calendula Ointment Set** (₹320) — Classical homeopathic emergency first-aid for muscle soreness and sprains.
- **Interactive Features:**
  - Dosage and usage guidelines drawer.
  - `"Add to Herbal Cart"` with toast notification.
  - Bootstrap Offcanvas Cart Drawer with a **"Order via WhatsApp"** button formatting selected items into a ready-to-send order message.

---

### 5.10 Section 9: Live Clinic OPD Queue & Waiting Room Screen
A dedicated interactive widget showing what waiting patients see on the clinic monitor:
- **Current Token Being Treated:** `#AYUR-0911 (Consultation Room 1 - Dr. Madhava Rao)`
- **Next In Line:** `#AYUR-0912 (Room 2 - Dr. Gayathri)` and `#AYUR-0914 (Your Token - Estimated wait: 14 mins)`.
- **Live Rooms Active:** 2 Consultation Suites + 3 Panchakarma Therapy Rooms active.

---

### 5.11 Section 10: Patient Trust, Video Reviews & Google Ratings
- **Header:** `"Trusted by Over 22,000 Patients Living in Natural Harmony"`.
- 3 Video Testimonial Thumbnails with play button overlays (*"Chronic Sciatica Pain Completely Cured After 14 Days of Janu Basti & Ayurveda - Mr. Gopalakrishnan, 62 yrs"*).
- Grid of 6 Verified Google Reviews with star ratings, reviewer photo, therapy tag, and doctor feedback.
- Trust Badges: GMP Certified Herbal Formulations, Traditional Kerala Vaidya Guild Certified, 100% Organic Medicated Oils.

---

### 5.12 Section 11: Comprehensive Ayurveda & Homeopathy FAQs Accordion
Interactive Bootstrap accordion answering patient doubts:
1. *What should I expect during a traditional Nadi Pariksha (Pulse Diagnosis)?*
2. *Is it safe to take homeopathic medicines alongside allopathic prescriptions?*
3. *How many sessions of Shirodhara are typically required for chronic anxiety or insomnia?*
4. *Do homeopathic medicines cause an initial temporary aggravation of symptoms?*
5. *What dietary restrictions (Pathya) must be followed during Panchakarma therapies?*
6. *Are all herbal oils and formulations prepared according to classical Charaka Samhita texts?*

---

### 5.13 Section 12: Footer & Contact Section
- Location & Opening Hours table (Clinic OPD & Panchakarma: `8:00 AM - 1:00 PM` & `4:00 PM - 7:30 PM` | Sunday: `8:30 AM - 1:00 PM`).
- Direct Contact: Phone call link (`+91 98480 66332`), WhatsApp direct link, Clinic Address.
- Demo prototype credit badge.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockTherapies.js`
```javascript
export const mockTherapies = [
  {
    id: "shirodhara-rejuvenation",
    name: "Authentic Medicated Shirodhara",
    category: "Stress & Mind Care",
    tagline: "Rhythmic warm herbal oil stream over the forehead restoring deep nervous calm.",
    duration: "60 mins",
    startingPrice: 2200,
    stages: ["Shiro-Abhyanga Head Massage", "Continuous Medicated Oil Stream", "Herbal Hair Cleansing"],
    icon: "Droplets",
    badge: "Most Popular",
    vaidyaSpecialty: "Panchakarma Specialist"
  },
  {
    id: "janu-basti-knee",
    name: "Janu Basti (Joint Cartilage Care)",
    category: "Spine & Joint Rejuvenation",
    tagline: "Medicated warm oil reservoir over knee joints nourishing worn cartilage.",
    duration: "45 mins",
    startingPrice: 1800,
    stages: ["Gram-Dough Ring Creation", "Warm Medicated Oil Pool", "Gentle Joint Mobilization"],
    icon: "ShieldCheck",
    badge: "Joint Relief",
    vaidyaSpecialty: "Ayurvedic Physician"
  },
  {
    id: "homeo-constitutional",
    name: "Constitutional Homeopathic Consultation",
    category: "Homeopathy Care",
    tagline: "Comprehensive mind-body case analysis treating chronic conditions from the root.",
    duration: "45-60 mins",
    startingPrice: 1200,
    stages: ["Detailed Symptom Evaluation", "Repertorization Analysis", "Individualized Remedy Dispensing"],
    icon: "Heart",
    badge: "Root-Cause Cure",
    vaidyaSpecialty: "Classical Homeopath"
  }
];
```

### 6.2 `mockDoctors.js`
```javascript
export const mockDoctors = [
  {
    id: "doc-ayur-1",
    name: "Dr. V. Madhava Rao, BAMS, MD (Ayur)",
    title: "Chief Ayurvedic Physician & Panchakarma Expert",
    experienceYears: 21,
    education: "MD - Ayurveda (Government Ayurvedic College, Mysore)",
    rating: 4.96,
    reviewCount: 560,
    avatar: "/assets/images/doctors/dr-madhavarao.jpg",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    specialtySlug: "shirodhara-rejuvenation"
  },
  {
    id: "doc-homeo-1",
    name: "Dr. S. Gayathri Devi, BHMS, MD (Homeo)",
    title: "Senior Classical Homeopath & Chronic Care Specialist",
    experienceYears: 16,
    education: "MD - Homeopathy (National Institute of Homeopathy)",
    rating: 4.92,
    reviewCount: 420,
    avatar: "/assets/images/doctors/dr-gayathri.jpg",
    availableDays: ["Mon", "Wed", "Fri", "Sat"],
    specialtySlug: "homeo-constitutional"
  }
];
```

### 6.3 `mockHerbalProducts.js`
```javascript
export const mockHerbalProducts = [
  {
    id: "herb-oil-1",
    name: "Mahanarayana Taila (Medicated Joint Oil)",
    category: "Medicated Oils",
    price: 580,
    mrp: 690,
    size: "200 ml",
    badge: "Bestseller",
    description: "Authentic classical oil prepared with 52 herbs for chronic joint stiffness and backache.",
    image: "/assets/images/herbal/mahanarayana.jpg"
  },
  {
    id: "herb-churna-1",
    name: "Organic Ashwagandha & Brahmi Churna",
    category: "Herbal Churnas",
    price: 380,
    mrp: 450,
    size: "100 g",
    badge: "Stress & Sleep",
    description: "Pure adaptogenic root powder promoting mental clarity, muscle stamina, and sound sleep.",
    image: "/assets/images/herbal/ashwagandha.jpg"
  },
  {
    id: "homeo-tinct-1",
    name: "Arnica Montana 200CH & Calendula Balm Set",
    category: "Homeopathic Remedies",
    price: 320,
    mrp: 400,
    size: "Pack of 2",
    badge: "First-Aid",
    description: "Pure German dilution pellets and soothing herbal antiseptic balm for sprains and bruises.",
    image: "/assets/images/herbal/arnica-set.jpg"
  }
];
```

### 6.4 `mockSlots.js`
```javascript
export const mockSlots = [
  // Morning Shift
  { id: "am1", time: "08:30 AM", shift: "morning", type: "Vaidya Consultation", available: true },
  { id: "am2", time: "09:45 AM", shift: "morning", type: "Panchakarma Therapy", available: true, fewLeft: true },
  { id: "am3", time: "11:00 AM", shift: "morning", type: "Homeopathic Intake", available: false }, // Booked
  { id: "am4", time: "12:15 PM", shift: "morning", type: "Vaidya Consultation", available: true },

  // Evening Shift
  { id: "ae1", time: "04:30 PM", shift: "evening", type: "Panchakarma Therapy", available: true },
  { id: "ae2", time: "05:30 PM", shift: "evening", type: "Vaidya Consultation", available: false }, // Booked
  { id: "ae3", time: "06:30 PM", shift: "evening", type: "Homeopathic Intake", available: true, fewLeft: true },
  { id: "ae4", time: "07:15 PM", shift: "evening", type: "Panchakarma Therapy", available: true }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Staggered Scroll Entrance:**
   - Apply `opacity: 0, translateY: 30px` transitioning to `opacity: 1, translateY: 0` with a `0.1s` stagger delay for therapy cards and doctor profiles.
2. **Prakriti Dosha Bar Animation:**
   - On completing the 4 quiz questions, animate the tri-color horizontal balance bar (Vata Blue, Pitta Red, Kapha Green) over `1.4s` to reveal exact body percentages.
3. **Interactive Slot Selector Feedback:**
   - When a slot is clicked, scale slightly (`scale: 1.05`), turn the background to `var(--color-primary-600)`, text to `#ffffff`, and display a tiny green checkmark icon inside the chip.
4. **Modal Entrance & Backdrop Blur:**
   - Backdrops must have `backdrop-filter: blur(8px); background: rgba(28, 25, 23, 0.45)`.
   - Modals should scale up smoothly from `0.95` to `1.0` with spring physics (`damping: 25, stiffness: 300`).
5. **Simulated WhatsApp Alert Banner:**
   - Slides down from the top-right corner with a notification sound/vibration effect 1.2 seconds after appointment confirmation.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 80% of wellness patients browse holistic remedies and therapy options from smartphones:
- **Sticky Bottom Action Bar on Mobile:**
  When scrolled past the hero, display a persistent bottom bar with:
  - Phone helpline button (`📞 Call Vaidya`)
  - Full-width CTA button (`⚡ Book Appointment - Today Available`)
- **Horizontal Swipeable Carousels:**
  Therapy cards, herbal formulations, and date pickers must support horizontal touch-swipe with snap alignment (`scroll-snap-type: x mandatory`).
- **Touch-Friendly Hit Targets:**
  All buttons, slot chips, and quiz radio cards must have a minimum touch area of `48px x 48px`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for forest green, terracotta, and linen parchment in `globals.css`.
- [ ] Implement Sticky Glassmorphic Navbar with working smooth scroll and herbal helpline button.
- [ ] Build Hero Section with floating natural wellness badges and rating strip using Bootstrap grid.
- [ ] Build Ayurvedic & Panchakarma Therapies Catalog with category filter tabs, duration tags, and starting prices.
- [ ] Implement 60-Second Interactive Prakriti (Vata-Pitta-Kapha) Dosha Assessment Quiz with dynamic percentage breakdown.
- [ ] Build Triple-Service Booking Engine (Vaidya vs Panchakarma vs Homeopathy) with shift toggle, slot chips, and token generation (`AYUR-2026-XXXX`).
- [ ] Build Vaidya & Homeopath Profiles with credentials and direct consultation booking action.
- [ ] Build Classical Herbal Remedies Storefront with product cards, Bootstrap offcanvas cart, and 1-click WhatsApp order compiler.
- [ ] Build Simulated Live OPD Waiting Room TV Screen (`/queue`).
- [ ] Implement FAQ Accordion using Bootstrap Accordion and Footer with opening hours & Google Maps preview.
- [ ] Validate responsive layout on Mobile (375px), Tablet (768px), and Desktop (1280px+).
