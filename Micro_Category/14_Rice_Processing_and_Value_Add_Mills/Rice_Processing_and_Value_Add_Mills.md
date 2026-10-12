# Frontend Development Specification
## Business 14: Rice Processing & Value-Add Mills
### Project: Agro Commodity & By-Product Procurement Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** Industrial Rice Processing Complexes, Agro By-Product Valorization Mills, Rice Bran Oil Extraction Suppliers, De-Oiled Rice Bran (DORB) Refiners, Broken Rice (Nookalu) Starch & Brewery Millers, Cattle & Poultry Feed Stockists, Biomass Husk Pelletizers.
- **Frontend Architecture:** Enterprise B2B Single Page Application (SPA) / Industrial Procurement Portal built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for high-density commodity specification sheets, laboratory certificate inspection drawers, multi-ton contract calculation engines, and institutional off-take agreement managers.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `globals.css`) utilizing CSS Custom Properties for rich golden bran ochre/amber, industrial bio-energy forest green, heavy carbon graphite, laboratory certificate cyan/slate, and clean sterile white cards.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Offcanvas/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide commercial rice processing executives, agro by-product refiners, and institutional procurement directors with an enterprise-grade digital commodity portal. The platform showcases how modern value-add mills market high-value industrial by-products (Raw Rice Bran, De-Oiled Rice Bran [DORB], Sortex White Broken Rice / Nookalu, Industrial Rice Flour, Biomass Husk Pellets) to corporate institutional buyers (Solvent extraction plants, commercial cattle/poultry feed compounders, breweries, industrial starch manufacturers) through interactive **Commodity Technical Specification Sheets**, **Protein/Moisture/Sand-Silica Laboratory Certificates**, a **Bulk Multi-Ton Contract Inquiry Form**, an **Institutional Buyer Contract Manager**, and a 1-click **Commercial WhatsApp B2B Requisition Compiler**.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate industrial agro by-product marketing and institutional procurement friction into specific, interactive UI features:

| Agro By-Product Processing Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **High Rejection Rates from Solvent Plants & Feed Mills** | Unreliable moisture, high sand/silica, or rancid Free Fatty Acids (FFA) lead to truckload rejections at the buyer's factory gate. | **Interactive Technical Specification Sheets & NABL Lab Inspector** displaying guaranteed laboratory test parameters (Protein $\ge 15\%$, Fiber $\le 12\%$, Moisture $\le 10\%$, Sand/Silica $\le 3.5\%$, FFA $\le 4\%$). |
| **Friction Procuring Multi-Truckload Broken Rice for Breweries** | Distant beer breweries and starch manufacturers struggle to verify particle size distributions (1/2 grain vs 1/4 grain vs flour) without physical samples. | **Sortex Broken Rice (Nookalu) Particle Sizing & Purity Visualizer** with optical cleanliness certification, 0% stone guarantee, and particle size filter breakdowns. |
| **Price Volatility & Supply Uncertainty for Corporate Buyers** | Feed manufacturers face constant price swings and sudden stockouts, disrupting continuous feed mill production lines. | **Quarterly & Annual Institutional Off-Take Contract Manager** allowing enterprise buyers to simulate and lock in recurring monthly supplies (50 MT to 1,000 MT/month) at pegged contract rates. |
| **Missing or Delayed Certificates of Analysis (CoA)** | Paper lab test certificates get delayed or lost during lorry transit, causing truck holding demurrage at destination yards. | **Instant Downloadable Certificate of Analysis (CoA) & Batch Viewer** providing digital batch-wise lab reports with QR validation for every dispatch. |
| **Scattered Commercial Inquiries on Unofficial Channels** | Complex industrial RFQs received via phone lack clarity on packaging (Bulk Hopper vs 50kg/70kg Gunny) and destination siding. | **1-Click WhatsApp B2B Multi-Ton RFQ Formatter** compiling structured commercial purchase requisitions with technical grades, packaging, freight terms, and buyer GSTIN. |

---

## 3. Design System & Visual Tokens

The user interface must convey bio-industrial innovation, laboratory rigor, agricultural abundance, and enterprise corporate trust. **Avoid neon novelty colors or lightweight consumer app aesthetics.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Golden Bran Ochre & Cereal Amber */
  --color-primary-950: #451a03;
  --color-primary-900: #78350f;
  --color-primary-800: #92400e;
  --color-primary-700: #b45309;
  --color-primary-600: #d97706; /* Core Value-Add Amber */
  --color-primary-500: #f59e0b;
  --color-primary-200: #fde68a;
  --color-primary-100: #fef3c7;
  --color-primary-50:  #fffbeb;

  /* Brand Secondary: Bio-Commodity Forest Green (Agricultural Purity) */
  --color-green-950:   #052e16;
  --color-green-900:   #14532d;
  --color-green-800:   #166534;
  --color-green-700:   #15803d;
  --color-green-600:   #16a34a; /* Sustainable Agro Green */
  --color-green-500:   #22c55e;
  --color-green-100:   #dcfce7;
  --color-green-50:    #f0fdf4;

  /* Accent: Laboratory Certificate Cyan & Industrial Steel */
  --color-lab-700:     #0e7490;
  --color-lab-600:     #0891b2; /* NABL Lab Cyan */
  --color-lab-500:     #06b6d4;
  --color-lab-100:     #cffafe;
  --color-lab-50:      #ecfeff;

  /* Carbon Steel Neutral & Dark Elements */
  --color-secondary-950:#090d16;
  --color-secondary-900:#0f172a;
  --color-secondary-800:#1e293b; /* Heavy Industrial Slate */
  --color-secondary-700:#334155;
  --color-secondary-200:#e2e8f0;

  /* WhatsApp B2B Dispatch */
  --color-whatsapp:    #25d366;
  --color-whatsapp-dark:#128c7e;

  /* Surface & Packaging Tones */
  --color-surface-bg:   #f8fafc;
  --color-surface-card: #ffffff;
  --color-surface-tint: #fefce8;
  --color-text-main:    #0f172a;
  --color-text-muted:   #475569;
  --color-text-light:   #94a3b8;
  --color-border-subtle:#cbd5e1;

  /* Quality Grade Badges */
  --color-badge-super:  #15803d;
  --color-badge-feed:   #b45309;
  --color-badge-energy: #0284c7;

  /* Elevation & Card Shadows */
  --card-shadow:        0 4px 12px -2px rgba(15, 23, 42, 0.08);
  --card-shadow-hover:  0 20px 25px -5px rgba(180, 83, 9, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
  --bottom-bar-shadow:  0 -4px 20px rgba(15, 23, 42, 0.14);

  /* Radius Tokens */
  --radius-sm:          6px;
  --radius-md:          10px;
  --radius-lg:          16px;
  --radius-pill:        9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold). Bold, authoritative, and industrial.
- **Body & Technical Specs:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High clarity for chemical assays and laboratory reports.
- **Assay Percentages, Metric Tons, Prices & Contract IDs:** Monospaced tabular numerals (`font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', monospace, sans-serif; font-weight: 700`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (DORB pellets, golden rice bran, sortex broken rice, bio-mass husk pellets, lab testing spectrometer)
│   └── icons/  (Layers, Award, FileCheck, RefreshCw, BarChart2, ShieldCheck, Download, WhatsApp, Phone, Sliders)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + Live commodity rates + Institutional portal shortcut)
│   │   ├── CommodityPriceBar.jsx (Sticky rate ticker for DORB, Rice Bran, Nookalu, Husk Pellets)
│   │   ├── Footer.jsx (Plant complex address, rail siding specs, bulk loading telemetry)
│   │   └── WhatsAppFloatButton.jsx
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column layout with circular agro-economy teaser)
│   │   ├── ProcessingMetricsBar.jsx (50,000 MT/yr by-products, 120+ corporate clients, 100% NABL tested)
│   │   ├── ProblemComparisonGrid.jsx (Traditional Brokerage Chaos vs Value-Add Agro Portal)
│   │   ├── CircularEconomySection.jsx (Interactive infographic: Zero-waste rice processing lifecycle)
│   │   ├── TestimonialsGrid.jsx (Solvent plant managers, cattle feed compounders, brewery directors)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── commodities/
│   │   ├── CommodityFilterPills.jsx (DORB, Rice Bran, Broken Rice, Rice Flour, Bio-Fuel Pellets)
│   │   ├── CommodityGrid.jsx (Industrial card grid with chemical specs highlights)
│   │   ├── CommodityCard.jsx (Image, chemical assay summary, industrial applications, price/MT)
│   │   └── ParticleSizeVisualizer.jsx (Broken rice sizing: 1/2 grain, 1/4 grain, Flour)
│   ├── specs/
│   │   ├── SpecSheetDrawer.jsx (Bootstrap offcanvas showing comprehensive chemical & physical analysis)
│   │   └── LabReportModal.jsx (NABL Accredited Certificate of Analysis [CoA] with batch QR)
│   ├── rfq/
│   │   ├── BulkContractCalculator.jsx (Interactive multi-ton calculator: 50 MT to 1,000 MT)
│   │   ├── PackagingSelector.jsx (Bulk Loose in Tippers vs 50kg/70kg Gunny vs Jumbo Bags)
│   │   └── WhatsAppContractCompiler.jsx (Formats structured institutional procurement requisition)
│   └── contracts/
│       ├── InstitutionalContractModal.jsx (Quarterly off-take contract simulation with volume price locks)
│       └── ContractStatusCard.jsx (Active institutional contracts, dispatch schedules, delivery logs)
├── context/
│   ├── CommodityContext.jsx (Manages by-product catalog, active spec sheets, live price updates)
│   ├── RfqContractContext.jsx (Manages multi-ton procurement inquiries, packaging, and freight terms)
│   └── LabReportContext.jsx (Manages mock laboratory batches and Certificate of Analysis downloads)
├── data/
│   ├── mockCommodities.js
│   ├── mockLabReports.js
│   ├── mockContracts.js
│   ├── mockPricingTiers.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Assay meter fills, ticker marquee, modal zoom, circular pulse)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Header & Live Commodity Telemetry Bar (Sticky)
- **Top Sticky Commodity Telemetry Bar:**
  - Background: `var(--color-secondary-900)`. Text: `#ffffff`.
  - Ticker Stream (Continuous marquee with live industrial prices):
    `🌾 INDUSTRIAL AGRO BY-PRODUCT BENCHMARKS: De-Oiled Rice Bran (DORB) Pelletized: ₹1,850/Qtl (▲ +₹20) • Raw Rice Bran (18% Oil Content): ₹3,200/Qtl • Sortex Pure White Nookalu: ₹1,720/Qtl • Industrial Rice Starch Flour: ₹2,150/Qtl • Rice Husk Biomass Pellets (Biofuel): ₹6,200/MT • Minimum Industrial Off-Take: 30 Metric Tons (Lorry Load)`
  - Right: Institutional Sales Desk: `📞 +91 98480 66885`.
- **Main Industrial Navigation Bar:**
  - Glassmorphic clean white surface (`background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(14px)`).
  - **Left Element:** Industrial Brand Emblem (Stylized bio-molecule with golden rice ear), Brand Name (**"Rayalaseema Value-Add Agro Industries & By-Products Mill"**), and Badge: `"NABL Tested • ISO 9001:2015 • FSSAI Feed Grade"`.
  - **Center Nav Links:**
    - `By-Product Portfolio` (DORB, Rice Bran, Nookalu, Flour, Pellets)
    - `Technical Spec Sheets` (Chemical assay data)
    - `Lab Certificates (CoA)` (Batch testing reports)
    - `Bulk Contract Calculator` (Multi-ton truckload pricing)
    - `Institutional Contracts` (Quarterly off-take manager)
  - **Right Action Items:**
    - Download Complete Spec Brochure (`PDF button`).
    - Primary CTA Button: `"Request Bulk MT Quote"` with golden amber gradient (`var(--color-primary-700)` to `var(--color-primary-600)`).

---

### 5.2 Section 1: Hero Section (The Circular Agro-Economy Hook)
- **Layout:** Bootstrap 2-Column Responsive Grid (`col-lg-7` Content, `col-lg-5` Industrial Lab Telemetry Card).
- **Left Content:**
  - Pill Badge: `✦ Industrial Valorization & Refined By-Products • 50,000 MT Annual Capacity`.
  - Main Headline:
    > **High-Assay Agro Commodities & Standardized By-Products for Modern Industry.**
  - Subheading:
    > Direct mill supply of De-Oiled Rice Bran (DORB), high-oil raw rice bran, sortex white broken rice, and biomass husk pellets. Guaranteed protein content, low silica assays, strict moisture control, and multi-ton institutional contracts.
  - Dual CTAs:
    - Primary Button: `Launch Multi-Ton Contract Calculator (30 to 1,000 MT) ➔` (scrolls to RFQ Calculator).
    - Secondary Button: `Inspect NABL Lab Test Specifications 📄` (opens Spec Sheet Drawer).
  - Corporate Trust Badges:
    - `✓ Guaranteed Protein $\ge 15\%$ in DORB` | `✓ Low Sand/Silica $\le 3.5\%$` | `✓ Batch-Wise NABL Certificates`.
- **Right Content:**
  - Floating Hero Commercial Card with:
    - High-res photo of golden pelletized De-Oiled Rice Bran flowing from industrial cooling conveyors.
    - Floating Badge 1 (Top-Right): `"Ready Stock: 850 MT DORB Pellets in Warehouse"` with active green dot.
    - Floating Badge 2 (Bottom-Left): `"Today's Dispatches: 4 Lorry Loads (100 MT) to Solvent Extraction Plants"`.

---

### 5.3 Section 2: Industrial By-Product & Processing Metrics Strip
A high-contrast carbon slate and golden amber horizontal strip built with Bootstrap row/col:
1. `50,000+ MT` Annual By-Product Processing & Valorization
2. `5 Distinct Streams` (DORB, High-Oil Bran, Nookalu, Rice Flour, Husk Pellets)
3. `120+ Corporate` Solvent Plants, Feed Compounders & Breweries Served
4. `100% NABL` Tested Production Batches with Digital CoA

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Unregulated Commodity Broking vs. Value-Add Agro Portal"
A comparative problem-solver interactive matrix showcasing why corporate procurement teams trade direct with the mill:

| Traditional Unregulated Broking | The Value-Add Agro Digital Solution | Interactive Demo Component |
| :--- | :--- | :--- |
| High adulteration risk with sand/silica, leading to truck rejections at factory gate | Guaranteed laboratory chemical assay benchmarks backed by NABL batch certificates | Technical Spec Sheet Drawer |
| Broken rice particle size inconsistency causing brewing & fermentation failures | Optical sortex separation into distinct graded fractions (1/2 grain, 1/4 grain, Flour) | Particle Sizing & Visualizer |
| Unpredictable spot pricing causing severe budget overruns for feed manufacturers | Quarterly and annual off-take supply agreements with fixed or index-pegged rates | Institutional Contract Manager |
| Demurrage delays caused by missing paper lab certificates during lorry transit | Instant downloadable digital Certificate of Analysis (CoA) with verifiable QR codes | Batch Lab Report Viewer |

---

### 5.5 Section 4: Industrial Agro By-Products & Value-Add Portfolio
The core industrial product catalog with interactive technical parameter previews:
- **Commodity Filter Tabs (Bootstrap Nav-Pills):**
  `All By-Products (5)` | `De-Oiled Rice Bran (DORB)` | `Raw Rice Bran (18% Oil)` | `Sortex Broken Rice (Nookalu)` | `Industrial Rice Flour` | `Rice Husk Bio-Pellets`
- **5 Core Industrial Commodities (Realistic Demo Catalog):**
  1. **De-Oiled Rice Bran (DORB) - Meal / Pelletized Form:**
     - *Assay:* Crude Protein `15.0 - 16.5%`, Crude Fiber `11.0 - 12.5%`, Moisture `9.5 - 10.5%`, Sand/Silica `3.0 - 3.5%`.
     - *Primary Use:* Cattle feed compounders, poultry mash, fish feed, export feed pellets.
     - *Packaging:* 50 kg Polypropylene Bags or 70 kg Jute Gunny Bags.
     - *Ex-Mill Price:* `₹18,500 / Metric Ton` (`₹1,850 / Quintal`).
     - *MOQ:* `30 Metric Tons (1 Truckload)`.
  2. **Raw Stabilized Rice Bran (High Oil Content - 18% FFA Controlled):**
     - *Assay:* Oil Content `17.5 - 19.0%`, Free Fatty Acids (FFA) `< 4.5%` (Enzymatically stabilized), Moisture `< 9.5%`.
     - *Primary Use:* Solvent extraction plants for refined rice bran cooking oil production.
     - *Packaging:* 50 kg Moisture-Resistant Bags or Bulk Tipper Siding.
     - *Ex-Mill Price:* `₹32,000 / Metric Ton` (`₹3,200 / Quintal`).
     - *MOQ:* `25 Metric Tons`.
  3. **Sortex Pure White Idli Broken Rice (Nookalu - Clean 1/2 Grain):**
     - *Assay:* 100% White Sortex Cleaned, Zero Black Tips, Moisture `< 11.5%`, Stones/Foreign Matter `0.0%`.
     - *Primary Use:* Beer breweries, commercial idli/dosa batter manufacturing, extruded snack foods.
     - *Packaging:* 50 kg Laminated Woven Sacks.
     - *Ex-Mill Price:* `₹17,200 / Metric Ton` (`₹1,720 / Quintal`).
     - *MOQ:* `20 Metric Tons`.
  4. **Industrial Rice Starch Flour & Fine Semolina (200-Mesh):**
     - *Assay:* Starch Content `78 - 82%`, Moisture `< 10.5%`, Fineness `99% through 200 Mesh`.
     - *Primary Use:* Pharmaceutical binder, bio-plastics, cosmetics, confectionery dusting.
     - *Packaging:* 25 kg Multi-Wall Kraft Paper Bags with Inner PE Liner.
     - *Ex-Mill Price:* `₹21,500 / Metric Ton` (`₹2,150 / Quintal`).
     - *MOQ:* `15 Metric Tons`.
  5. **Densified Rice Husk Biomass Pellets (Eco-Friendly Bio-Fuel):**
     - *Assay:* Calorific Value `3,400 - 3,600 Kcal/kg`, Ash Content `< 14%`, Moisture `< 8%`, Pellet Diameter `8 mm / 10 mm`.
     - *Primary Use:* Industrial boilers, thermal power co-generation, cement kilns (replacing coal).
     - *Packaging:* 50 kg Poly-woven Sacks or Bulk Tipper Trucks.
     - *Ex-Mill Price:* `₹6,200 / Metric Ton` (`₹620 / Quintal`).
     - *MOQ:* `30 Metric Tons`.
- **Card Interactive Features:**
  - Chemical Assay Meter: Visual progress bars for Protein, Moisture, and Fiber.
  - Action 1: `"Inspect Full Spec Sheet & CoA"` (opens offcanvas drawer).
  - Action 2: `"Add to Multi-Ton Contract RFQ"`.

---

### 5.6 Section 5: Interactive Commodity Technical Spec Sheet & Lab Report Drawer
An offcanvas inspection tool that gives corporate quality heads complete analytical confidence:
- Click `"Inspect Full Spec Sheet"` on any commodity card.
- Opens a high-density **Bootstrap Offcanvas Technical Drawer**:
  - **Commodity:** *De-Oiled Rice Bran (DORB) - Super Grade*.
  - **Guaranteed Assay Table:**
    - Crude Protein (Dry Basis): `16.2%` (Guaranteed min: `15.0%`)
    - Crude Fat / Residual Oil: `0.8%` (Max: `1.5%`)
    - Crude Fiber: `11.8%` (Max: `13.0%`)
    - Moisture: `9.8%` (Max: `11.0%`)
    - Acid Insoluble Ash (Sand/Silica): `3.2%` (Max: `3.5%`)
    - Total Ash: `9.4%` (Max: `11.0%`)
    - Aflatoxin (B1, B2, G1, G2): `< 20 ppb` (Guaranteed safe for poultry and dairy cattle)
  - **Testing Standards:** Analyzed as per `IS 3592:2018 (Cattle Feed Specifications)`.
  - **Action Button:** `"Download Official NABL Lab Certificate of Analysis (PDF)"` with simulated batch barcode and QR code.

---

### 5.7 Section 6: Bulk Multi-Ton Contract Inquiry & RFQ Engine
The commercial contracting engine for industrial off-take:
- **Interactive Input Form:**
  - Commodity Selection: Dropdown (e.g., *De-Oiled Rice Bran [DORB]*).
  - Tonnage Requirement: Slider & Numeric Input from `30 Metric Tons` to `500 Metric Tons` (in steps of 10 MT). Default: `50 MT (2 Truckloads)`.
  - Contract Type: `One-Time Spot Dispatch (Immediate Lorry Load)` vs `Quarterly Contract (e.g. 50 MT/month for 3 months)`.
  - Packaging Preference: `50 kg Polypropylene Bags`, `70 kg Jute Gunny Bags`, `Jumbo Bags (1 MT Bags)`, `Bulk Hopper / Tipper (Loose)`.
  - Destination Delivery Plant: e.g., *Feed Mill Industrial Area, Namakkal (TN)* or *Solvent Extraction Plant, Hubli (KA)*.
- **Dynamic Pricing & Contract Math Card:**
  - **Total Order Volume:** `50.0 Metric Tons = 500.0 Quintals = 50,000 kg`.
  - **Packaging Units:** `1,000 Bags of 50 kg`.
  - **Logistics Allocation:** `2 Full 10-Wheeler Lorries (25 MT each)`.
  - **Base Ex-Mill Rate:** `₹18,500 / Metric Ton`.
  - **Volume Industrial Rebate:** `- ₹300 / Metric Ton` (Bulk incentive for $\ge 50\text{ MT}$).
  - **Effective Commodity Rate:** `₹18,200 / Metric Ton`.
  - **Estimated Freight (Kadapa to Destination):** `₹1,200 / MT` (₹60,000 total).
  - **Taxable Goods Value:** `₹9,10,000`.
  - **GST (Nil on Cattle/Poultry Feed Ingredients or 5%):** `₹0 (Nil GST on Animal Feed Ingredient HSN 2306)`.
  - **Total Contract Purchase Estimate:** `₹9,70,000` (Delivered Basis).
- **Primary Action: "1-Click WhatsApp Official Industrial RFQ":**
  - Compiles the requisition and opens `https://wa.me/919848066885?text=...`.
  - **Compiled WhatsApp Message Format:**
    ```
    🏭 *INDUSTRIAL BY-PRODUCT RFQ - RAYALASEEMA AGRO INDUSTRIES*
    Inquiry Ref: #RFQ-BYPROD-2026-781
    Date: 05-Oct-2026, 05:15 PM

    🏢 *Buyer Company:* Pioneer Feeds & Poultry Integrators Pvt Ltd
    📋 *GSTIN:* 33AABCP8812R1Z3
    📍 *Delivery Plant:* Industrial Area, Namakkal, Tamil Nadu

    📦 *Commodity Requisition:*
    - Commodity: De-Oiled Rice Bran (DORB) - Super Grade
    - Total Tonnage: 50 Metric Tons (500 Quintals)
    - Contract Type: Spot Purchase (2 Lorry Loads)
    - Packaging: 50 kg Polypropylene Bags (1,000 Bags)
    - Target Assay: Protein ≥ 15%, Sand/Silica ≤ 3.5%

    💵 *Quoted Ex-Mill Rate:* ₹18,200 / MT (Incl. Bulk Rebate)
    🚛 *Freight Est:* ₹1,200 / MT
    💰 *Total Delivered Estimate:* ₹9,70,000 (Exempt under HSN 2306)

    Please confirm laboratory sample batch availability and dispatch schedule. 🙏
    ```

---

### 5.8 Section 7: Institutional Buyer Contract & Annual Off-Take Manager
A dedicated feature demonstrating long-term corporate supply management:
- Preview of an **Active Institutional Supply Agreement**:
  - Buyer: `Pioneer Feeds Pvt Ltd (Contract #CONT-2026-042)`.
  - Total Annual Allocation: `600 Metric Tons (50 MT / Month)`.
  - Pricing Clause: `Fixed Floor Price ₹18,000/MT with Mandi Escalation Cap`.
  - Delivered to Date: `250 / 600 MT Completed`.
  - Next Scheduled Dispatch: `12-Oct-2026 (2x 25 MT Lorries Assigned)`.
- Action Buttons: `"Review Monthly Allocation Schedule"` | `"Request Contract Amendment"`.

---

### 5.9 Section 8: Sustainable Circular Agro-Economy & Bio-Energy Showcase
An interactive visual infographic showing how value-add milling turns 100% of paddy into commercial revenue:
- **100 kg Raw Paddy Inflow Breakdown:**
  - $\rightarrow 68\text{ kg}$ Head Polished Rice (Consumer & Institutional Food)
  - $\rightarrow 10\text{ kg}$ Sortex Broken Rice / Nookalu (Breweries, Starch, Flours)
  - $\rightarrow 8\text{ kg}$ Nutrient-Rich Rice Bran (Solvent Oil Extraction $\rightarrow$ Edible Cooking Oil)
  - $\rightarrow 6\text{ kg}$ De-Oiled Rice Bran / DORB (Cattle, Poultry, Aquaculture Feeds)
  - $\rightarrow 20\text{ kg}$ Rice Husk (Densified Biomass Pellets replacing coal in industrial boilers)
  - **Net Agro Waste:** $0.0\%$ (100% Circular Valorization).

---

### 5.10 Section 9: Quality Accreditations & NABL Test Suite
- Standards Compliance:
  - `IS 3592:2018` Cattle Feed Compound Specifications.
  - `FSSAI Central Processing License #10019044001824`.
  - `NABL Laboratory Calibration Certificate #TC-8812`.
  - `Export Inspection Council (EIC) Approved Mill`.
- Interactive Button: `"Download Complete Technical Quality Manual (PDF)"`.

---

### 5.11 Section 10: Verified Institutional Buyer & Corporate Feed Mill Testimonials
- 3 Verified B2B Testimonials:
  - *"We run a 300 Ton/day poultry feed mill in Namakkal. Sourcing 200 MT of DORB monthly from Rayalaseema Agro gives us unmatched consistency. Protein has never tested below 15.8% and silica is strictly under 3.2%. Never had a rejected truck."* — Dr. K. Mohanraj, Quality VP, Pioneer Feeds.
  - *"Their Sortex white broken rice is our primary choice for beer mashing. Consistent starch yield and zero contamination."* — V. Santhanam, Brewery Operations Head.

---

### 5.12 Section 11: Comprehensive Agro By-Product FAQs Accordion
Interactive Bootstrap accordion answering technical procurement queries:
1. *What is the guaranteed crude protein and sand/silica limit in your De-Oiled Rice Bran (DORB)?*
2. *How is Free Fatty Acids (FFA) controlled in raw rice bran before solvent extraction?*
3. *What particle size fractions are available for Sortex broken rice (Nookalu)?*
4. *What are the calorific value and ash parameters of your biomass rice husk pellets?*
5. *Can corporate buyers enter into 6-month or 12-month fixed off-take supply agreements?*
6. *How are laboratory sample test disputes handled upon arrival at destination plants?*

---

### 5.13 Section 12: Plant Complex Location, Siding Telemetry & Contact Footer
- **Plant Complex Specifications:**
  - Facility Location: `Agro Processing Zone, Industrial Estate, Cuddapah-Chennai Highway, Kadapa, AP`.
  - Loading Infrastructure: 3 Automated Bulk Hopper Loading Silos, 5 Lorry Loading Bays, Private Railway Siding Access (Kadapa Goods Yard).
  - Operating Hours: `Continuous 24/7 Processing | Dispatch Weighbridge: 6:00 AM to 10:00 PM`.
- Direct Institutional Procurement Desk, WhatsApp B2B desk (`+91 98480 66885`), and Corporate Banking Details.
- Developer Prototype Notice: Fictional demonstration portal built with modern web technologies.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockCommodities.js`
```javascript
export const mockCommodities = [
  {
    id: "byprod-dorb",
    name: "De-Oiled Rice Bran (DORB) - Super Grade",
    teluguName: "డీ-ఆయిల్డ్ రైస్ బ్రాన్ (తౌడు)",
    category: "dorb",
    form: "Pelletized / Coarse Meal",
    pricePerMT: 18500,
    pricePerQtl: 1850,
    minOrderMT: 30,
    assay: {
      protein: "16.2%",
      fiber: "11.8%",
      moisture: "9.8%",
      silica: "3.2%",
      fat: "0.8%"
    },
    primaryUses: ["Poultry Feed", "Cattle Feed", "Aqua Feed", "Feed Pellets"],
    packagingOptions: ["50 kg PP Bags", "70 kg Jute Sacks", "Bulk Hopper"],
    image: "/assets/images/commodities/dorb-pellets.jpg",
    inStockMT: 850,
    featured: true
  },
  {
    id: "byprod-raw-bran",
    name: "Stabilized Raw Rice Bran (18% Oil)",
    teluguName: "స్వచ్ఛమైన ముడి రైస్ తౌడు",
    category: "raw-bran",
    form: "Fine Powdered Meal",
    pricePerMT: 32000,
    pricePerQtl: 3200,
    minOrderMT: 25,
    assay: {
      oilContent: "18.2%",
      ffa: "3.8%",
      moisture: "9.2%",
      protein: "13.5%"
    },
    primaryUses: ["Solvent Oil Extraction", "Refined Cooking Oil Production"],
    packagingOptions: ["50 kg Moisture-Resistant Bags", "Bulk Tipper Siding"],
    image: "/assets/images/commodities/raw-bran.jpg",
    inStockMT: 420,
    featured: true
  },
  {
    id: "byprod-nookalu",
    name: "Sortex Pure White Broken Rice (Nookalu)",
    teluguName: "సార్టెక్స్ ప్యూర్ వైట్ ఇడ్లీ నూకలు",
    category: "broken-rice",
    form: "1/2 Clean Broken Grains",
    pricePerMT: 17200,
    pricePerQtl: 1720,
    minOrderMT: 20,
    assay: {
      whiteness: "99.8%",
      moisture: "11.4%",
      stones: "0.0%",
      starch: "79.5%"
    },
    primaryUses: ["Beer Breweries", "Idli/Dosa Batter", "Extruded Snacks"],
    packagingOptions: ["50 kg Laminated Woven Sacks", "50 kg Gunny"],
    image: "/assets/images/commodities/broken-rice.jpg",
    inStockMT: 600,
    featured: true
  },
  {
    id: "byprod-husk-pellets",
    name: "Densified Rice Husk Biomass Pellets",
    teluguName: "వరి పొట్టు బయో-మాస్ గుళికలు",
    category: "bio-fuel",
    form: "8mm / 10mm Densified Pellets",
    pricePerMT: 6200,
    pricePerQtl: 620,
    minOrderMT: 30,
    assay: {
      calorificValue: "3,520 Kcal/kg",
      moisture: "7.6%",
      ash: "13.2%",
      density: "650 kg/m3"
    },
    primaryUses: ["Industrial Boilers", "Thermal Power", "Coal Replacement"],
    packagingOptions: ["Bulk Loose in Tippers", "50 kg Poly Sacks"],
    image: "/assets/images/commodities/husk-pellets.jpg",
    inStockMT: 1200,
    featured: false
  }
];
```

### 6.2 `mockLabReports.js`
```javascript
export const mockLabReports = [
  {
    batchNumber: "BATCH-DORB-2026-104",
    commodity: "De-Oiled Rice Bran (DORB) - Super Grade",
    testingDate: "04-Oct-2026",
    accreditation: "NABL Accredited Testing Laboratory (ISO/IEC 17025)",
    sampleType: "Composite Hopper Sample (25 MT Lot)",
    parameters: [
      { name: "Crude Protein (N x 6.25)", result: "16.18%", specLimit: "Min 15.0%", status: "Pass" },
      { name: "Crude Fat / Residual Oil", result: "0.84%", specLimit: "Max 1.5%", status: "Pass" },
      { name: "Crude Fiber", result: "11.75%", specLimit: "Max 12.5%", status: "Pass" },
      { name: "Moisture Content", result: "9.82%", specLimit: "Max 11.0%", status: "Pass" },
      { name: "Acid Insoluble Ash (Silica)", result: "3.18%", specLimit: "Max 3.5%", status: "Pass" },
      { name: "Aflatoxin Total", result: "7.4 ppb", specLimit: "Max 20 ppb", status: "Pass" }
    ],
    testedBy: "Senior Chemist, Quality Control Lab",
    certUrl: "/assets/certificates/coa-batch-104.pdf"
  }
];
```

### 6.3 `mockContracts.js`
```javascript
export const mockContracts = [
  {
    contractId: "CONT-2026-042",
    buyerFirm: "Pioneer Feeds & Poultry Integrators Pvt Ltd",
    commodity: "De-Oiled Rice Bran (DORB) - Super Grade",
    period: "Q3 & Q4 (Oct 2026 - Mar 2027)",
    totalAllocationMT: 600,
    monthlyDeliveryMT: 100,
    agreedPricePerMT: 18200,
    deliveredSoFarMT: 250,
    status: "Active - On Schedule",
    nextDispatchDate: "12-Oct-2026",
    assignedLorries: 2
  }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Chemical Assay Meter Animation:**
   - On opening the Technical Spec Sheet Drawer, animate the progress bars for Protein (`16.2%`), Moisture (`9.8%`), and Silica (`3.2%`) over `0.8s` with smooth ease-out curves.
2. **Bulk Contract Calculator Slider Reaction:**
   - As the user changes tonnage (from 30 MT to 500 MT), smoothly count up the lorry icons (`🚛 x 2 Lorries`), bag counts (`1,000 Bags`), and total ₹ value with spring physics.
3. **Circular Agro-Economy Pulse:**
   - In the zero-waste lifecycle infographic, animate subtle glowing energy pulses connecting the raw paddy input to all 5 value-add commodity outputs (`1.5s` infinite pulse).
4. **Certificate Modal Reveal:**
   - The Certificate of Analysis (CoA) modal scales up smoothly (`scale: 0.96` to `1.0`) with subtle backdrop blur and an official paper texture look.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 85% of commodity traders, solvent plant agents, and transport coordinators communicate via mobile phones:
- **Responsive Laboratory Tables:**
  The chemical assay table and CoA certificate parameters must render inside a responsive horizontal scroll container (`.table-responsive`) with sticky column labels.
- **Large Touch Controls for Tonnage Selection:**
  The tonnage input slider must feature a generous touch target ($\ge 48\text{px}$) with large numerical labels for easy touch selection.
- **Safe Area Insets:**
  Sticky bottom action bars must include `padding-bottom: env(safe-area-inset-bottom, 12px)`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for golden bran ochre, bio-commodity green, and lab cyan in `globals.css`.
- [ ] Implement Top Commodity Price Ticker with continuous marquee and active rate chips.
- [ ] Build Hero Section with circular agro-economy overview and metrics strip using Bootstrap grid.
- [ ] Build Industrial By-Products Portfolio with chemical assay badges and packaging options.
- [ ] Build Particle Size Visualizer for Broken Rice / Nookalu (1/2 grain vs 1/4 grain vs Flour).
- [ ] Implement Offcanvas Technical Spec Sheet Drawer with full guaranteed assay table and NABL test standards.
- [ ] Implement Downloadable Certificate of Analysis (CoA) & Batch Viewer modal with QR verification code.
- [ ] Build Bulk Multi-Ton Contract Inquiry & RFQ Engine (30 to 500 MT slider, packaging selector, and 1-click WhatsApp requisition formatter).
- [ ] Build Institutional Supply Contract Manager (`CONT-2026-042` allocation, schedule, and amendment requests).
- [ ] Build Circular Economy Zero-Waste Infographic section.
- [ ] Implement FAQ Accordion and Footer with siding coordinates, rail loading bays, and laboratory hours.
- [ ] Validate responsive layouts on Mobile (360px - 412px Android), Tablet (768px), and Desktop (1280px+).
