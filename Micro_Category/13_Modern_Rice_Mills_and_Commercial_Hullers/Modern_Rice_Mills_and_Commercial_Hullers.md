# Frontend Development Specification
## Business 13: Modern Rice Mills & Commercial Hullers
### Project: B2B Industrial Miller Platform & Live Mandi Ticker

---

## 1. Executive Technical Overview

- **Target Business Model:** Modern Commercial Rice Mills, Automatic Sortex Hullers & Polishers, Paddy Processing Complexes, B2B Agro Industrial Rice Exporters, Parboiled & Steam Rice Processing Plants.
- **Frontend Architecture:** Industrial B2B Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for heavy-duty industrial plant telemetry dashboards, multi-ton RFQ engines, live mandi ticker controllers, and lorry logistics dispatch boards.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `globals.css`) utilizing CSS Custom Properties for heavy industrial harvest amber (`#d97706`), precision machinery steel/charcoal (`#0f172a`, `#1e293b`), Buhler optical laser emerald (`#059669`, `#10b981`), rice pearl white surfaces, and high-visibility logistics dispatch badges.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Offcanvas/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide commercial rice millers, agro-industrial entrepreneurs, and large-scale foodgrain exporters with a high-fidelity digital procurement & dispatch portal. The platform demonstrates how modern industrial rice mills replace fragmented phone negotiations with institutional foodgrain buyers, interstate wholesalers, and exporters through an interactive **Sticky Live Mandi Rate Ticker**, a virtual **Buhler Sortex Optical Sorter Showcase**, an enterprise **Multi-Metric Ton Bulk RFQ Calculation Engine** (20 MT to 500+ MT truckloads), an interactive **1-Click Ex-Mill Price Controller (Miller Admin Mode)**, and a **Real-Time Freight & Lorry Dispatch Tracker**.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate industrial agro-processing and commercial milling friction into specific, interactive UI features:

| Modern Rice Mill Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **Rapid Daily Paddy & Milled Rice Market Volatility** | Wholesale mandi rates fluctuate hourly based on APMC arrivals, weather, and government procurement; phone calls fail to reflect live rates. | **Sticky Live Mandi Rate Ticker & 1-Click Miller Price Controller** showing real-time ex-mill rates for Raw/Steam Sona Masoori, BPT, and Swarna 1061 with instant update controls. |
| **Buyer Skepticism Over Grain Purity & Chalky Grains** | Distant institutional buyers hesitate to order multi-ton lorry loads without proof of optical sorting purity and moisture compliance. | **Interactive Buhler Sortex Optical Sorter Showcase & Lab Certificate Suite** demonstrating $99.9\%$ sortex purity, zero black spots, $\le 11.5\%$ moisture, and optical laser camera specs. |
| **Tedious Multi-Ton Freight & Truckload Computations** | Computing bags (25kg/50kg), tare weight, truckload capacity (25 MT per 10-wheeler), and freight costs per quintal creates hours of back-and-forth negotiation. | **Bulk RFQ (Metric Tons) Calculation Engine** dynamically converting Metric Tons $\leftrightarrow$ Bags $\leftrightarrow$ Truckloads with automatic volume discounts, freight estimates, and GST calculations. |
| **No Visibility into Lorry Loading & Dispatch Progress** | Outstation buyers and transporters flood mill phone lines asking: "Has my truck loaded? Has the tare weighbridge slip been issued?". | **Real-Time Freight & Lorry Dispatch Tracker (`/dispatch`)** displaying active yard vehicle progress (Weighbridge In $\rightarrow$ Loading Bay 2 $\rightarrow$ Bag Sealing $\rightarrow$ Waybill Issued $\rightarrow$ Dispatched). |
| **Scattered Commercial Inquiries & Slow Quotation Turnaround** | Wholesale RFQs received via chaotic phone calls take hours to formalize into official quotations, losing deals to competitors. | **1-Click Commercial WhatsApp RFQ & Tender Dispatch Formatter** compiling official mill requisitions with full technical specs and lorry terms ready for instant dispatch. |

---

## 3. Design System & Visual Tokens

The user interface must convey industrial scale, advanced engineering precision, grain purity, and institutional reliability. **Avoid whimsical pastel tones or generic corporate layouts.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Industrial Harvest Amber & Golden Grain */
  --color-primary-950: #451a03;
  --color-primary-900: #78350f;
  --color-primary-800: #92400e;
  --color-primary-700: #b45309;
  --color-primary-600: #d97706; /* Core Industrial Harvest Amber */
  --color-primary-500: #f59e0b;
  --color-primary-200: #fde68a;
  --color-primary-100: #fef3c7;
  --color-primary-50:  #fffbeb;

  /* Brand Secondary: Precision Machinery Steel & Carbon Charcoal */
  --color-secondary-950:#090d16;
  --color-secondary-900:#0f172a;
  --color-secondary-800:#1e293b; /* Industrial Plant Carbon */
  --color-secondary-700:#334155;
  --color-secondary-600:#475569;
  --color-secondary-200:#e2e8f0;
  --color-secondary-50: #f8fafc;

  /* Accent: Buhler Optical Laser Emerald (Quality & Sortex Purity) */
  --color-laser-700:   #047857;
  --color-laser-600:   #059669; /* Sortex Optical Green */
  --color-laser-500:   #10b981;
  --color-laser-100:   #d1fae5;
  --color-laser-50:    #ecfdf5;

  /* Logistics & Lorry Transit Blue */
  --color-transit-700: #1d4ed8;
  --color-transit-600: #2563eb;
  --color-transit-500: #3b82f6;

  /* WhatsApp Dispatch */
  --color-whatsapp:    #25d366;
  --color-whatsapp-dark:#128c7e;

  /* Surface & Polished Rice Pearl Scale */
  --color-surface-bg:   #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-dark: #0f172a;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#cbd5e1;

  /* Plant Telemetry Status */
  --color-telemetry-run:  #16a34a; /* Silo / Sorter Active */
  --color-telemetry-idle: #eab308; /* Standby */
  --color-telemetry-alert:#dc2626; /* Maintenance */

  /* Elevation & Industrial Shadows */
  --card-shadow:        0 4px 12px -2px rgba(15, 23, 42, 0.08);
  --card-shadow-hover:  0 20px 25px -5px rgba(217, 119, 6, 0.14), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  --bottom-bar-shadow:  0 -4px 20px rgba(15, 23, 42, 0.16);

  /* Radius Tokens */
  --radius-sm:          6px;
  --radius-md:          10px;
  --radius-lg:          16px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold). Bold, authoritative, and heavy-duty.
- **Body & Milling Specifications:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). Crisp and legible for high-density trade specifications.
- **Mandi Ticker Rates, Metric Tons, Lorry Numbers & Calculations:** Monospaced tabular numerals (`font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', monospace, sans-serif; font-weight: 700`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Industrial mill exterior, grain silos, Buhler Sortex machines, rice laboratory, lorry loading docks)
│   └── icons/  (Cpu, Truck, Award, Activity, BarChart2, ShieldCheck, Download, WhatsApp, Phone, Sliders)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + Mill status indicator + Admin price controller button)
│   │   ├── StickyMandiTicker.jsx (Live continuous market rate ticker across commodities)
│   │   ├── Footer.jsx (Mill complex address, rail siding details, weighbridge coordinates)
│   │   └── WhatsAppFloatButton.jsx
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column layout with real-time milling capacity widget)
│   │   ├── PlantMetricsStrip.jsx (40,000 MT/yr, 16 Tons/hr Buhler line, 1,800+ truckloads)
│   │   ├── ProblemComparisonGrid.jsx (Traditional Brokerage Chaos vs Modern Industrial Miller Portal)
│   │   ├── MillingProcessSection.jsx (Interactive infographic of the 6-stage milling lifecycle)
│   │   ├── TestimonialsGrid.jsx (Interstate wholesalers, export houses, institutional canteens)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── mandi/
│   │   ├── MandiRateBoard.jsx (Detailed ex-mill rate matrix with $\pm$ market trend indicators)
│   │   └── MillerPriceAdminModal.jsx (1-Click price adjuster tool for the mill owner)
│   ├── machinery/
│   │   ├── BuhlerSortexSection.jsx (Interactive optical sorter showcase with camera & laser specs)
│   │   └── LabQualityInspection.jsx (Moisture, broken grain, and Agmark certification drawer)
│   ├── rfq/
│   │   ├── BulkRfqCalculator.jsx (Interactive Metric Tons $\leftrightarrow$ Truckload calculation engine)
│   │   ├── TruckloadVisualizer.jsx (Visual representation of 10-wheeler lorry capacity: 25 MT = 1,000 bags)
│   │   └── WhatsAppRfqCompiler.jsx (Formats structured commercial quotation for WhatsApp)
│   └── logistics/
│       ├── LorryDispatchBoard.jsx (Real-time yard dispatch tracker with loading bay status)
│       └── LorrySlipModal.jsx (Simulated Weighbridge Gross/Tare/Net weight slip)
├── context/
│   ├── MandiRateContext.jsx (Manages live commodity rates, price adjustments, and timestamp)
│   ├── RfqContext.jsx (Manages selected varieties, packaging, metric ton quantities, and truckload math)
│   └── DispatchContext.jsx (Manages mock lorry loading queue and yard telemetry)
├── data/
│   ├── mockMandiRates.js
│   ├── mockRiceVarieties.js
│   ├── mockMillingPlant.js
│   ├── mockLorryDispatches.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Ticker marquee, laser beam pulse, weight odometer transitions)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Header & Sticky Live Mandi Rate Ticker
- **Sticky Live Mandi Rate Ticker Bar:**
  - Background: `var(--color-secondary-900)`. Text: `#ffffff`.
  - Ticker Stream (Continuous marquee with live trend arrows):
    `🌾 LIVE EX-MILL RATES TODAY: Sona Masoori Raw 18-Mo: ₹3,680/Qtl (▲ +₹30) • Sona Masoori Steam: ₹3,820/Qtl (▲ +₹20) • BPT 5204 Superfine: ₹3,950/Qtl • Swarna 1061 Raw: ₹2,880/Qtl (▼ -₹15) • Sortex Broken Rice (Nookalu): ₹1,680/Qtl • 100% Buhler Optical Cleaned • Minimum Order: 20 Metric Tons (1 Truckload)`
  - Right: Quick click-to-call B2B Dispatch Desk: `📞 +91 98480 77443`.
- **Main Industrial Header Bar:**
  - Glassmorphic clean white surface (`background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(14px)`).
  - **Left Element:** Modern Agro Industrial Logo (Stylized milling roller with golden rice ear), Brand Name (**"Sri Balaji Modern Rice Industries & Sortex Processing Mill"**), and Badge: `"FSSAI Central Lic. • ISO 22000 • 40,000 MT Annual Capacity"`.
  - **Center Nav Links:**
    - `Mandi Rates` (Live ex-mill rate board)
    - `Sortex Milling Line` (Buhler optical sorter tour)
    - `Commercial Varieties` (Raw, Steam, BPT, Broken)
    - `Bulk RFQ Calculator` (Multi-ton truckload engine)
    - `Lorry Yard Dispatch` (Live dispatch log)
  - **Right Action Items:**
    - Miller Admin Mode Button (`[ 👨‍💼 Adjust Mill Prices ]`).
    - Primary CTA Button: `"Calculate Bulk RFQ (MT)"` with industrial amber gradient (`var(--color-primary-700)` to `var(--color-primary-600)`).

---

### 5.2 Section 1: Hero Section (The Industrial Scale Hook)
- **Layout:** Bootstrap 2-Column Responsive Grid (`col-lg-7` Content, `col-lg-5` Real-Time Mill Telemetry Card).
- **Left Content:**
  - Pill Badge: `✦ Industrial Commercial Milling • 16 Tons/Hour Buhler Sortex Capacity`.
  - Main Headline:
    > **High-Precision Sortex Rice Processing & Direct Institutional Bulk Supply.**
  - Subheading:
    > Supplying interstate wholesale grain merchants, supermarket chains, multi-state canteens, and exporters. Automated optical sorting, guaranteed $\le 11.5\%$ moisture, zero broken adulteration, and full lorry logistics tracking.
  - Dual CTAs:
    - Primary Button: `Launch Bulk RFQ Engine (20 to 500 MT) ➔` (scrolls to RFQ Calculator).
    - Secondary Button: `Inspect Buhler Sortex Technology 🔍` (scrolls to Machinery section).
  - Industrial Credentials:
    - `✓ 6 Dedicated Steel Grain Silos (12,000 MT Storage)` | `✓ Fully Automated Packaging Line` | `✓ In-House 60-Ton Weighbridge`.
- **Right Content:**
  - Floating Hero Commercial Card with:
    - High-res photo of gleaming stainless steel Buhler Sortex optical sorter machines in operation.
    - Floating Badge 1 (Top-Right): `"Current Plant Status: Milling Line 2 Active (16 Tons/Hr)"` with flashing green laser dot.
    - Floating Badge 2 (Bottom-Left): `"Today's Dispatches: 6 Lorries Loaded (150 Metric Tons)"`.

---

### 5.3 Section 2: Industrial Plant & Milling Metrics Strip
A heavy-duty industrial charcoal and golden amber horizontal strip built with Bootstrap row/col:
1. `40,000 MT` Annual Commercial Processing Capacity
2. `16 Tons/Hr` Buhler Multi-Camera Sortex Optical Cleaning
3. `1,800+` 10-Wheeler Truckloads Dispatched Annually Across India
4. `99.9% Purity` Optical Laser Defect Rejection (< 0.1% Foreign Grains)

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Brokerage Friction vs. Modern Industrial Miller Portal"
A comparative problem-solver interactive matrix showcasing why grain distributors deal direct with the mill:

| Traditional Brokerage Friction | Modern Industrial Miller Portal | Interactive Demo Component |
| :--- | :--- | :--- |
| Rates change mid-transit and brokers demand extra commission fees | Direct ex-mill transparent pricing updated daily on the live mandi ticker | Sticky Live Mandi Rate Ticker |
| Inconsistent manual sorting resulting in stones, discolored grains, and black spots | State-of-the-art Buhler optical laser sorters inspecting each individual grain | Buhler Sortex Optical Sorter Showcase |
| Guesswork calculating bags, tare weights, and truckloads for multi-ton orders | Automated Bulk RFQ Calculator computing bags, quintals, and lorry loads in seconds | Bulk RFQ (Metric Tons) Calculator |
| Zero tracking of lorry loading; truck drivers wait in yard without communication | Live Yard Lorry Dispatch Board tracking vehicle progress and weighbridge gross slips | Real-Time Freight & Lorry Dispatch Log |

---

### 5.5 Section 4: Milled Commercial Rice Varieties Catalog
The industrial portfolio of processed grain varieties:
- **Filter Tabs (Bootstrap Nav-Pills):**
  `All Varieties (6)` | `Sona Masoori Raw` | `Steam Rice` | `BPT Superfine` | `Swarna Commercial` | `Broken Rice (Nookalu)`
- **6 Core Milled Commodities (Realistic Demo Catalog):**
  1. **Kurnool Sona Masoori Raw Rice (Sortex Old Crop - 18 Months Aged):**
     - *Specs:* Superfine non-sticky grain length `5.2 mm`, Moisture `11.5%`, Broken `< 1.0%`.
     - *Packaging:* 25 kg BOPP Multi-Color Laminated Bag / 50 kg Jute Bag.
     - *Ex-Mill Price:* `₹3,680 / Quintal` (`₹920 / 25kg Bag`).
     - *Minimum Order:* `20 Metric Tons (800 Bags)`.
  2. **BPT 5204 (Samba Masoori) Steam Rice (Sortex Polished):**
     - *Specs:* High expansion ratio, brilliant pearl white finish, Moisture `11.8%`, Broken `< 1.2%`.
     - *Packaging:* 25 kg / 50 kg Woven Polypropylene Bags.
     - *Ex-Mill Price:* `₹3,820 / Quintal` (`₹955 / 25kg Bag`).
     - *Minimum Order:* `20 Metric Tons`.
  3. **Swarna 1061 Commercial Raw Rice (High-Volume Mill Grade):**
     - *Specs:* Robust medium grain for institutional canteens, state civil supplies, and catering.
     - *Packaging:* 50 kg Heavy Gunny Sacks.
     - *Ex-Mill Price:* `₹2,880 / Quintal` (`₹1,440 / 50kg Bag`).
     - *Minimum Order:* `25 Metric Tons (500 Bags)`.
  4. **Sortex Pure White Idli Broken Rice (Nookalu):**
     - *Specs:* Clean 1/2 broken grains, 100% white, zero yellow/black grains, ideal for batter and rice flour.
     - *Packaging:* 50 kg Poly-woven Sacks.
     - *Ex-Mill Price:* `₹1,680 / Quintal` (`₹840 / 50kg Bag`).
  5. **IR-64 Long Grain Parboiled Rice (Export Grade):**
     - *Specs:* Golden parboiled grain length `6.0 mm`, high nutritional retention, Moisture `12.0%`.
     - *Packaging:* 50 kg Multi-layer Export Sacks.
     - *Ex-Mill Price:* `₹3,150 / Quintal`.
  6. **De-Oiled Rice Bran (DORB) & Cattle Feed Husks:**
     - *Specs:* High-protein byproduct for poultry feed and solvent extraction plants.
     - *Packaging:* Bulk Loose or 70 kg Gunny Bags.
     - *Ex-Mill Price:* `₹1,450 / Quintal`.
- **Card Interactive Features:**
  - Moisture percentage and grain length badges.
  - Quick action: `"Load into Bulk RFQ Calculator"`.

---

### 5.6 Section 5: Buhler Optical Sortex & Plant Infrastructure Showcase
An interactive technological walkthrough explaining how industrial sortex technology eliminates impurities:
- **Interactive 6-Stage Milling Lifecycle Diagram:**
  1. *Paddy Pre-Cleaning & Destoning:* Mechanical vibratory screens remove straw, dust, and heavy stones.
  2. *Rubber Roll De-Husking:* High-efficiency pneumatically controlled rubber rollers gently separate husk from brown rice.
  3. *Multi-Stage Abrasive Whitening:* Diamond-coated emery rollers polish the rice to exact whiteness standards.
  4. *Water Jet Mist Polishing:* Ultra-fine water spray imparts a mirror-like shine and removes residual bran flour.
  5. *Buhler Sortex Optical Laser Color Sorter:* High-resolution multi-chromatic CCD cameras scan 20,000 grains/sec; high-speed pneumatic ejectors blast out chalky, peck, red-striped, or discolored grains.
  6. *Automated Robotic Bagging & Weighing:* Electronic gross weighers pack bags with $\pm 10\text{g}$ tolerance, followed by high-speed bag stitchers.
- **Sortex Defect Rejection Visualizer:**
  Interactive before/after slider comparing *Unsorted Raw Rice* (containing yellow grains, chalky grains, and black tips) with *100% Buhler Sortex Output* (flawless pure white grains).

---

### 5.7 Section 6: Bulk RFQ (Metric Tons) Calculation Engine
The centerpiece commercial procurement tool for high-volume transactions:
- **Interactive Input Form:**
  - Rice Variety: Dropdown selection (e.g., *Kurnool Sona Masoori Raw 18-Mo*).
  - Order Volume: Slider & numeric input from `20 Metric Tons` to `200 Metric Tons` (in steps of 5 MT). Default: `25 MT (1 Truckload)`.
  - Packaging Option: `25 kg Laminated BOPP Bags` vs `50 kg Jute Gunny Bags`.
  - Delivery Destination: Dropdown of major wholesale hubs (e.g., *Hyderabad, Bangalore, Chennai, Vijayawada, Visakhapatnam, Mumbai*).
- **Dynamic Truckload & Pricing Computation Card:**
  - **Total Tonnage:** `25.0 Metric Tons = 250.0 Quintals = 25,000 kg`.
  - **Bag Count:** `1,000 Bags of 25 kg` (or `500 Bags of 50 kg`).
  - **Required Transport:** `1 Full 10-Wheeler Lorry (25 MT Capacity)`.
  - **Ex-Mill Rate:** `₹3,680 / Quintal` (`₹920 / 25kg Bag`).
  - **Volume Miller Rebate:** `- ₹40 / Quintal` (Rebate for 25+ MT single truckload).
  - **Effective Ex-Mill Rate:** `₹3,640 / Quintal` (`₹910 / Bag`).
  - **Estimated Freight (Kadapa to Destination):** `₹180 / Quintal` (₹45,000 / Lorry).
  - **Subtotal Taxable Amount:** `₹9,10,000`.
  - **GST @ 5% (HSN 1006):** `₹45,500`.
  - **Total Mill Purchase Estimate:** `₹9,55,500` (Ex-Mill + GST).
- **Primary Action: "1-Click WhatsApp Official RFQ Quotation":**
  - Generates a structured commercial quotation message and opens `https://wa.me/919848077443?text=...`.
  - **Compiled WhatsApp Message Format:**
    ```
    🏭 *OFFICIAL COMMERCIAL RFQ - SRI BALAJI MODERN RICE MILL*
    Quotation Ref: #RFQ-MILL-2026-904
    Date: 05-Oct-2026, 05:00 PM

    🏢 *Buyer Entity:* Telangana Foodgrain Wholesalers Corp
    🌾 *Variety:* Kurnool Sona Masoori Raw Rice (Sortex 18-Mo Aged)
    ⚖️ *Total Quantity:* 25 Metric Tons (250 Quintals)
    📦 *Packaging:* 25 kg Laminated BOPP Bags (1,000 Bags)
    🚛 *Vehicle Requirement:* 1x 10-Wheeler Lorry (25 MT)
    📍 *Destination:* Bowenpally Grain Market, Hyderabad

    💵 *Ex-Mill Price:* ₹3,640 / Quintal (Incl. Volume Rebate)
    💰 *Total Ex-Mill Value:* ₹9,10,000
    📊 *GST (5% HSN 1006):* ₹45,500
    🚛 *Freight Est:* To-Pay / Arranged by Mill @ ₹180/Qtl
    -------------------------------------------------
    🏁 *Estimated Total:* ₹9,55,500 (Ex-Mill + GST)

    Please confirm loading date and dispatch slot availability! 🙏
    ```

---

### 5.8 Section 7: Live 1-Click Mandi Price Controller (Miller Admin Mode)
An interactive simulation tool demonstrating plant management:
- Toggle in top bar: `[ 👨‍💼 Switch to Miller Admin Mode ]`.
- Opens a floating control drawer:
  - Commodity: *Sona Masoori Raw Rice*.
  - Current Ex-Mill Rate: `₹3,680 / Qtl`.
  - Quick Adjustment Buttons: `[- ₹50]`, `[- ₹20]`, `[+ ₹20]`, `[+ ₹50]`.
  - Click `Save Rate`: Instantly flashes the sticky top ticker in yellow, updates the catalog rates, and logs the timestamp (`"Updated Just Now: 05:00 PM"`).

---

### 5.9 Section 8: Real-Time Freight & Lorry Dispatch Log Tracker (`/dispatch`)
A live yard logistics board showing vehicles currently loading or in transit:
- **Top Yard Telemetry:**
  - Lorries in Mill Complex: `4 Vehicles`.
  - Total Loaded Today: `150 Metric Tons`.
  - Electronic Weighbridge Status: `🟢 60-Ton Scale Calibrated & Active`.
- **4 Live Lorry Cards:**
  1. **Lorry #AP 04 TT 9124 (10-Wheeler):**
     - *Buyer:* Hyderabad Wholesale Mart
     - *Cargo:* 25 MT Sona Masoori Raw (1,000 Bags)
     - *Status:* `🟢 LOADING AT BAY 2 (780 / 1,000 Bags Completed)`
     - *Weighbridge Tare:* `11,420 kg` • *Gross Weight Target:* `36,420 kg`.
  2. **Lorry #KA 01 AH 5582 (12-Wheeler):**
     - *Buyer:* Bangalore Grain Stockists
     - *Cargo:* 30 MT BPT Steam Rice (1,200 Bags)
     - *Status:* `🔵 TARPAULIN COVERING & SEALING (Loading Complete)`
     - *Waybill Slip:* `E-Way Bill #2419 8812 0012 Generated`.
  3. **Lorry #TN 22 CX 4410 (6-Wheeler):**
     - *Buyer:* Chennai Idli Flour Mill
     - *Cargo:* 15 MT Sortex Broken Rice (300 Bags)
     - *Status:* `🟢 DISPATCHED (En Route via NH-716)`
     - *Driver Contact:* `+91 98480 11422`.
- **Action:** `"View Electronic Weighbridge Slip"`: Displays gross, tare, and net printed weight certificate.

---

### 5.10 Section 9: Quality Grading & Laboratory Inspection Suite
Displays mill laboratory metrics reassuring large institutional buyers:
- Moisture Analyzer: $\le 11.5\%$ (Guarantees long shelf life and prevents fungal growth).
- Broken Ratio: $\le 1.0\%$ (Precision length graders).
- Chalkiness Ratio: $\le 0.5\%$ (Eliminated by Buhler optical infrared cameras).
- Whiteness Index: $42 \text{ Kett}$ (Optimum clinical milling sheen).
- Certifications: Agmark Grade-1, FSSAI Central License #10020044001292, ISO 22000:2018 Food Safety.

---

### 5.11 Section 10: Verified Institutional Buyer & Exporter Testimonials
- 3 Verified Quotes:
  - *"We procure 100 Metric Tons of Sona Masoori monthly from Sri Balaji Modern Rice Industries for our regional supermarket network. Zero customer complaints about stones or chalky grains. The lorry dispatch board gives complete peace of mind."* — K. Srinivasulu, Agro Supermarket Chain.
  - *"As a foodgrain exporter, we require strict $\le 11.5\%$ moisture and high-tensile 25kg packaging. Their Buhler Sortex line delivers export-grade consistency every single time."* — M. Farooq, Gulf Food Exports.

---

### 5.12 Section 11: Comprehensive Modern Rice Mill FAQs Accordion
Interactive Bootstrap accordion answering industrial trade questions:
1. *What is the minimum order quantity (MOQ) for direct ex-mill pricing?*
2. *Can the mill arrange dedicated 10-wheeler or 12-wheeler lorry transport?*
3. *How is grain moisture tested and certified before lorry loading?*
4. *Can we order custom-printed private label BOPP bags for our brand?*
5. *How are payments settled for interstate grain dispatches?*
6. *What are the turnaround times for loading a 25 Metric Ton lorry in the yard?*

---

### 5.13 Section 12: Mill Yard Location, Weighbridge Telemetry & Contact Footer
- **Mill Complex Specifications:**
  - Plant Location: `Survey No 214/2B, Industrial Area, Rayachoty Road, Kadapa, AP`.
  - Facilities: 6 Modern Steel Silos, 4 Heavy Lorry Loading Bays, 60-Ton Computerized Electronic Weighbridge (Dharam Kanta).
  - Operating Shifts: `24/7 Processing (Milling Line Operates 3 Shifts) | Loading Bays: 7:00 AM to 9:00 PM`.
- Direct Plant Managing Director phone, WhatsApp B2B desk (`+91 98480 77443`), and banking RTGS information.
- Developer Prototype Notice: Fictional demonstration portal built with modern web technologies.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockMandiRates.js`
```javascript
export const mockMandiRates = [
  {
    id: "rate-sona-raw",
    name: "Sona Masoori Raw (Sortex 18-Mo)",
    ratePerQuintal: 3680,
    ratePerBag25kg: 920,
    trend: "up",
    change: 30,
    lastUpdated: "Today, 04:30 PM",
    moistureMax: "11.5%"
  },
  {
    id: "rate-sona-steam",
    name: "Sona Masoori Steam (Aged 12-Mo)",
    ratePerQuintal: 3820,
    ratePerBag25kg: 955,
    trend: "up",
    change: 20,
    lastUpdated: "Today, 04:30 PM",
    moistureMax: "11.8%"
  },
  {
    id: "rate-bpt-superfine",
    name: "BPT 5204 (Samba Masoori) Steam",
    ratePerQuintal: 3950,
    ratePerBag25kg: 987.5,
    trend: "flat",
    change: 0,
    lastUpdated: "Today, 02:15 PM",
    moistureMax: "12.0%"
  },
  {
    id: "rate-swarna-raw",
    name: "Swarna 1061 Commercial Raw",
    ratePerQuintal: 2880,
    ratePerBag50kg: 1440,
    trend: "down",
    change: 15,
    lastUpdated: "Today, 01:00 PM",
    moistureMax: "12.5%"
  },
  {
    id: "rate-broken-nookalu",
    name: "Sortex White Idli Broken Rice",
    ratePerQuintal: 1680,
    ratePerBag50kg: 840,
    trend: "up",
    change: 25,
    lastUpdated: "Today, 11:30 AM",
    moistureMax: "11.8%"
  }
];
```

### 6.2 `mockRiceVarieties.js`
```javascript
export const mockRiceVarieties = [
  {
    id: "var-sona-raw",
    name: "Kurnool Sona Masoori Raw Rice",
    grade: "Superfine 18-Month Aged",
    millingType: "Raw / Non-Boiled",
    grainLength: "5.2 mm",
    moisture: "11.5%",
    brokenPercent: "< 1.0%",
    sortexPurity: "99.9%",
    baseRateQtl: 3680,
    packOptions: ["25 kg Laminated BOPP", "50 kg Gunny"],
    image: "/assets/images/varieties/sona-raw.jpg",
    siloNo: "Silo 1 & 2"
  },
  {
    id: "var-sona-steam",
    name: "BPT 5204 Samba Masoori Steam",
    grade: "Sortex Double Polished",
    millingType: "Steam Processed",
    grainLength: "5.4 mm",
    moisture: "11.8%",
    brokenPercent: "< 1.2%",
    sortexPurity: "99.9%",
    baseRateQtl: 3820,
    packOptions: ["25 kg Laminated BOPP", "50 kg Woven PP"],
    image: "/assets/images/varieties/bpt-steam.jpg",
    siloNo: "Silo 3"
  },
  {
    id: "var-swarna-comm",
    name: "Swarna 1061 Commercial Rice",
    grade: "Institutional Grade",
    millingType: "Raw",
    grainLength: "5.0 mm",
    moisture: "12.4%",
    brokenPercent: "< 2.0%",
    sortexPurity: "99.5%",
    baseRateQtl: 2880,
    packOptions: ["50 kg Gunny Sacks"],
    image: "/assets/images/varieties/swarna.jpg",
    siloNo: "Silo 4"
  }
];
```

### 6.3 `mockLorryDispatches.js`
```javascript
export const mockLorryDispatches = [
  {
    lorryNumber: "AP 04 TT 9124",
    lorryType: "10-Wheeler (25 MT)",
    driverName: "K. Chenna Reddy",
    driverPhone: "+91 98480 33119",
    buyerFirm: "Telangana Wholesale Grain Mart",
    destination: "Hyderabad (Bowenpally)",
    cargo: "Sona Masoori Raw 25kg",
    totalBags: 1000,
    loadedBags: 780,
    status: "Loading at Bay 2",
    tareWeight: 11420,
    grossTarget: 36420,
    bayNumber: "Bay 2",
    estimatedDeparture: "06:15 PM Today"
  },
  {
    lorryNumber: "KA 01 AH 5582",
    lorryType: "12-Wheeler (30 MT)",
    driverName: "M. Nanjundappa",
    driverPhone: "+91 98480 44221",
    buyerFirm: "Bangalore Grain Stockists",
    destination: "Bangalore (Yeshwanthpur)",
    cargo: "BPT 5204 Steam 25kg",
    totalBags: 1200,
    loadedBags: 1200,
    status: "Tarpaulin Sealing",
    tareWeight: 12850,
    grossTarget: 42850,
    bayNumber: "Bay 1",
    estimatedDeparture: "05:30 PM Today"
  }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Continuous Mandi Ticker Marquee:**
   - Smooth CSS horizontal translation without jerky stutter:
   ```css
   @keyframes tickerScroll {
     0% { transform: translateX(0); }
     100% { transform: translateX(-50%); }
   }
   .ticker-content {
     display: inline-flex;
     animation: tickerScroll 35s linear infinite;
   }
   .ticker-content:hover {
     animation-play-state: paused;
   }
   ```
2. **Sortex Laser Beam Pulse Animation:**
   - In the Buhler Sortex section, animate vertical optical laser pulses scanning over passing rice grains (`0.8s` ease-in-out infinite alternate).
3. **RFQ Tonnage & Truckload Odometer:**
   - When the user drags the Metric Ton slider, animate the bag count, truckload icon count, and total ₹ amount with spring physics.
4. **Lorry Dispatch Loading Progress Bar:**
   - Loading bar (`780 / 1,000 Bags`) features an animated diagonal striped fill representing active conveyor loading in the yard.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 80% of wholesale rice brokers, grain merchants, and logistics coordinators operate from smartphones:
- **Responsive Telemetry & Logistics Tables:**
  Lorry dispatch cards and rate matrices must display as compact cards on mobile (`col-12`) and multi-column tables on desktop.
- **Large Touch Slider for Metric Tons:**
  The tonnage slider must feature a large draggable thumb ($\ge 48\text{px}$) with large numerical labels for easy touch adjustment on 4G screens.
- **Safe Area Insets:**
  Sticky bottom action bars must include `padding-bottom: env(safe-area-inset-bottom, 12px)`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for harvest amber, machinery steel, and optical laser emerald in `globals.css`.
- [ ] Implement Top Continuous Sticky Mandi Rate Ticker with live trend arrows and paused-on-hover interaction.
- [ ] Build Hero Section with plant telemetry card and live milling capacity widget using Bootstrap grid.
- [ ] Build Milled Commercial Rice Varieties Catalog with moisture, grain length, and sortex purity badges.
- [ ] Build Buhler Sortex Optical Sorter Showcase with 6-stage milling lifecycle infographic.
- [ ] Implement Bulk RFQ (Metric Tons) Calculation Engine (20 to 200 MT slider, bags calculation, truckloads math, and 1-click WhatsApp quote compiler).
- [ ] Implement 1-Click Miller Price Controller Modal (Admin mode toggle to adjust ex-mill ₹/Qtl rates with instant live ticker sync).
- [ ] Build Real-Time Freight & Lorry Yard Dispatch Log Tracker (`/dispatch`) with active loading bay progress.
- [ ] Build Electronic Weighbridge Tare/Gross Weight Slip Simulator modal.
- [ ] Implement FAQ Accordion and Footer with plant complex coordinates, silos details, and railway siding info.
- [ ] Validate responsive layouts on Mobile (360px - 412px Android), Tablet (768px), and Desktop (1280px+).
