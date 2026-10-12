# Frontend Development Specification
## Business 12: Wholesale Grain Depots & Rice Merchants
### Project: B2B Wholesale Grain & Merchant Order Portal

---

## 1. Executive Technical Overview

- **Target Business Model:** B2B Wholesale Grain Depots, APMC Mandi Rice Merchants, Bulk Foodgrain Stockists, Commercial Pulse & Grain Wholesalers, Flour & Sugar Distributors, Institutional Ration Suppliers.
- **Frontend Architecture:** Commercial B2B Single Page Application (SPA) / Web Portal built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for high-volume commercial tables, tiered quantity pricing engines, GST tax invoice generators, and merchant credit ledger dashboards.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `globals.css`) utilizing CSS Custom Properties for rich golden grain ochre/amber, industrial commercial slate/navy, high-trust emerald green (GST/order confirmed), burlap sack neutral tones, and crisp white cards.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Modal/Offcanvas/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide wholesale grain depot proprietors, mandi commission agents, and commercial rice stockists with an enterprise-grade B2B ordering portal. The application demonstrates how grain wholesalers can automate trade with neighborhood Kirana stores, supermarkets, hotel caterers, and institutional buyers through standardized 25kg/50kg bag pricing, an interactive **Tiered Volume Discount Calculator** (10 bags, 50 bags, 100+ bags truckload), a **Merchant B2B Credit Khata Ledger**, a 1-click **Commercial WhatsApp Bulk Cart Formatter**, and an instant **B2B GST Tax Invoice & E-Way Bill Simulator**.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate commercial B2B grain trading bottlenecks into specific, interactive UI features:

| Wholesale Grain Depot Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **Endless Phone Negotiation on Volume Bag Rates** | Retailers and caterers call continuously to ask: "What is the 25kg Sona Masoori rate for 10 bags vs 50 bags?". | **Interactive Wholesale Tiered Volume Discount Calculator** dynamically computing per-bag discounts based on volume tiers (1–9 bags, 10–49 bags, 50–99 bags, 100+ bags truckload). |
| **Packaging & Bag Weight Misunderstandings** | Buyers confuse 25kg branded laminated bags with 50kg gunny bags or 75kg loose sacks, causing transport load errors. | **Standardized Bag Weight & Packaging Selector (25kg / 50kg / 75kg / 1 Quintal)** with net weight, tare weight, and moisture specifications clearly displayed. |
| **Credit Ledger (Khata) Disputes & Delayed Collections** | Wholesalers maintain lakhs in revolving credit across dozens of Kirana stores; paper ledgers lead to disputes and unpaid dues. | **B2B Merchant Credit Khata Ledger & Payment Tracker** displaying approved credit limits, 15/30-day payment cycles, outstanding balances, and 1-tap WhatsApp payment reminders. |
| **Manual Billing Bottlenecks & E-Way Bill Delays** | Generating formal GST invoices and lorry dispatch challans creates huge bottlenecks at the depot loading dock during lorry dispatch. | **Instant B2B GST Tax Invoice & E-Way Bill Simulator** with automated GSTIN validation, HSN 1006 codes, CGST/SGST calculations, and printable PDF preview. |
| **Scattered Lorry Transport Details on Unofficial Channels** | Transporter names, vehicle numbers, and destination godown addresses get lost in disorganized phone calls. | **Structured 1-Click WhatsApp B2B Bulk Order Formatter** compiling the complete commercial trade order (Bags, Quintals, GSTIN, Lorry transport details, total amount). |

---

## 3. Design System & Visual Tokens

The user interface must convey commercial reliability, mandi trading authority, commodity purity, and financial transparency. **Avoid flashy consumer neon colors or juvenile graphics.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Golden Grain Ochre & Mandi Amber */
  --color-primary-950: #451a03;
  --color-primary-900: #78350f;
  --color-primary-800: #92400e;
  --color-primary-700: #b45309;
  --color-primary-600: #d97706; /* Core Grain Gold */
  --color-primary-500: #f59e0b;
  --color-primary-200: #fde68a;
  --color-primary-100: #fef3c7;
  --color-primary-50:  #fffbeb;

  /* Brand Secondary: Commercial Industrial Slate & Navy */
  --color-secondary-900: #0f172a;
  --color-secondary-800: #1e293b; /* Dominant B2B Slate */
  --color-secondary-700: #334155;
  --color-secondary-600: #475569;
  --color-secondary-200: #e2e8f0;
  --color-secondary-50:  #f8fafc;

  /* Accent: Trust Emerald Green (GST & Confirmed Orders) */
  --color-emerald-700:   #047857;
  --color-emerald-600:   #059669;
  --color-emerald-500:   #10b981;
  --color-emerald-50:    #ecfdf5;

  /* WhatsApp B2B Dispatch */
  --color-whatsapp:      #25d366;
  --color-whatsapp-dark: #128c7e;

  /* Surface & Jute/Burlap Tones */
  --color-surface-bg:    #f8fafc;
  --color-surface-card:  #ffffff;
  --color-surface-tint:  #fefce8; /* Subtle Golden Husk Tint */
  --color-text-main:     #0f172a;
  --color-text-muted:    #475569;
  --color-text-light:    #94a3b8;
  --color-border-subtle: #cbd5e1;

  /* Commercial Status Colors */
  --color-tier-highlight:#b45309;
  --color-khata-due:     #dc2626;
  --color-khata-ok:      #16a34a;

  /* Elevation & Card Shadows */
  --card-shadow:         0 4px 12px -2px rgba(15, 23, 42, 0.08);
  --card-shadow-hover:   0 16px 24px -4px rgba(180, 83, 9, 0.12), 0 6px 12px -2px rgba(15, 23, 42, 0.04);
  --bottom-bar-shadow:   0 -4px 20px rgba(15, 23, 42, 0.14);

  /* Radius Tokens */
  --radius-sm:           6px;
  --radius-md:           10px;
  --radius-lg:           16px;
  --radius-pill:         9999px;
}
```

### 3.2 Typography Tokens
- **Display & Section Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold). Solid, authoritative, and industrial.
- **Body & Commodity Specs:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). High scannability for commercial trade specs.
- **Bag Quantities, Weights (Quintals/MT), Prices & GST:** Monospaced tabular numerals (`font-variant-numeric: tabular-nums; font-family: 'JetBrains Mono', monospace, sans-serif; font-weight: 700`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Grain sacks, 25kg branded bags, rice godown loading bays, grain grading closeups)
│   └── icons/  (Truck, Package, Calculator, FileText, CheckCircle, Clock, ShieldCheck, WhatsApp, Phone)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + Mandi rate ticker + B2B Wholesale badge)
│   │   ├── MandiRateTicker.jsx (Sticky ticker: Sona Masoori, HMT, Swarna, Toor Dal mandi rates)
│   │   ├── Footer.jsx (Depot godown yard address, loading bay timings, lorry weighbridge info)
│   │   └── WhatsAppFloatButton.jsx
│   ├── home/
│   │   ├── HeroSection.jsx (Bootstrap 2-column layout with bulk bag pricing calculator teaser)
│   │   ├── WholesaleMetricsBar.jsx (1,200+ MT/month, 450+ retail merchants, 100% Sortex metrics)
│   │   ├── ProblemComparisonGrid.jsx (Traditional Mandi Delays vs B2B Depot Portal)
│   │   ├── QualityGradingSection.jsx (Moisture, broken % and Sortex quality certification)
│   │   ├── TestimonialsGrid.jsx (Retail Kirana owners, hotel caterers, institutional buyers)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── catalog/
│   │   ├── CommodityFilterPills.jsx (Rice, Dals, Wheat & Atta, Sugar & Grains)
│   │   ├── GrainProductGrid.jsx (Commercial card grid with bag variant selectors)
│   │   ├── GrainProductCard.jsx (Bag image, grain age, packaging type, base rate per bag)
│   │   └── BagVariantModal.jsx (25kg vs 50kg vs 1 Quintal breakdown)
│   ├── pricing/
│   │   ├── TieredPricingCalculator.jsx (Interactive slider & bag count volume discount calculator)
│   │   └── PriceTierTable.jsx (1-9 bags, 10-49 bags, 50-99 bags, 100+ truckload rate matrix)
│   ├── cart/
│   │   ├── StickyBulkCartBar.jsx (Persistent bottom bar: Total Bags, Total Weight in Quintals, Amount)
│   │   ├── BulkCartOffcanvas.jsx (Bootstrap offcanvas commercial cart)
│   │   ├── TransporterDetailsForm.jsx (Merchant Name, GSTIN, Unloading Town, Lorry Preference)
│   │   └── WhatsAppBulkCompiler.jsx (Formats formal B2B dispatch order for WhatsApp)
│   ├── invoice/
│   │   └── GSTInvoiceModal.jsx (Simulated B2B Tax Invoice & E-Way Bill viewer with PDF download)
│   └── khata/
│       ├── MerchantKhataModal.jsx (B2B credit account lookup by GSTIN or Phone)
│       └── KhataStatementView.jsx (Outstanding dues, 15-day credit cycle, WhatsApp reminder)
├── context/
│   ├── BulkCartContext.jsx (Manages bulk bag items, tier discounts, total weights, and GST)
│   ├── PricingContext.jsx (Manages wholesale volume discounts and daily mandi prices)
│   └── MerchantAuthContext.jsx (Manages mock merchant profile, GSTIN, and Khata credit status)
├── data/
│   ├── mockGrains.js
│   ├── mockPricingTiers.js
│   ├── mockMerchantAccounts.js
│   ├── mockInvoices.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Volume tier transitions, weight odometer counter, modal fade)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Header & Live Mandi Rate Ticker (Sticky)
- **Top Sticky Mandi Rate Ticker:**
  - Background: `var(--color-secondary-900)`. Text: `#ffffff`.
  - Ticker Stream (Continuous marquee / smooth ticker):
    `🌾 APMC Mandi Today: Sona Masoori Raw ₹3,650/Qtl (▲ +₹25) • Sona Masoori Steam ₹3,800/Qtl • Swarna 1061 ₹2,850/Qtl • Guntur Toor Dal Fatka ₹16,200/Qtl • Minimum Bulk Order: 10 Bags (250 kg)`
  - Right: Quick click-to-call B2B sales desk: `📞 +91 98480 88224`.
- **Main Navigation Bar:**
  - Glassmorphic commercial white surface (`background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(14px)`).
  - **Left Element:** Depot Emblem (Burlap grain sack with golden wheat sheaf), Brand Name (**"Sri Venkateswara Grain Depot & Wholesale Rice Traders"**), and Badge: `"APMC Licensed • GST Registered • Estd. 1994"`.
  - **Center Nav Links:**
    - `Wholesale Catalog` (Sona Masoori, HMT, Basmati, Dals)
    - `Volume Discount Calculator` (Interactive bag tier pricing)
    - `Quality & Sortex Specs` (Lab grade certificates)
    - `Merchant Khata` (B2B Credit Ledger)
    - `GST Billing` (Invoice generator demo)
  - **Right Action Items:**
    - Bulk Cart Pill: Shows bags & weight (`📦 25 Bags (6.25 Qtl) • ₹34,000`).
    - Primary CTA Button: `"Instant Bulk Quote"` with gold gradient (`var(--color-primary-700)` to `var(--color-primary-600)`).

---

### 5.2 Section 1: Hero Section (The B2B Commercial Hook)
- **Layout:** Bootstrap 2-Column Responsive Grid (`col-lg-7` Content, `col-lg-5` Interactive Calculator Preview).
- **Left Content:**
  - Pill Badge: `✦ Direct Mandi Wholesale Supply • Truckload & Retailer Bulk Orders`.
  - Main Headline:
    > **Direct-from-Mill Wholesale Grain & Premium Rice by the Bag or Truckload.**
  - Subheading:
    > Guaranteed Sortex-cleaned quality, unadulterated foodgrains, and transparent tiered wholesale pricing for Kirana stores, supermarkets, commercial caterers, and institutional buyers across Andhra Pradesh.
  - Dual CTAs:
    - Primary Button: `Open Volume Discount Calculator ⚡` (scrolls to Calculator).
    - Secondary Button: `Download Today's Wholesale Rate Sheet (PDF) 📄` (triggers mock download).
  - Commercial Trust Strip:
    - `✓ 100% Sortex Optical Cleaned` | `✓ Machine Weighed (Zero Shortage)` | `✓ Valid GST Input Tax Credit (ITC)`.
- **Right Content:**
  - Floating Hero Commercial Card with:
    - Visual of premium stacked 25kg laminated rice bags in clean commercial warehouse.
    - Floating Badge 1 (Top-Right): `"Ready Stock: 4,500 Bags (112.5 MT) in Godown"` with active green dot.
    - Floating Badge 2 (Bottom-Left): `"Today's Best Seller: Kurnool Sona Masoori 18-Mo Aged @ ₹1,360/Bag (50+ Tier)"`.

---

### 5.3 Section 2: Commercial Scale & Wholesale Metrics Bar
A high-contrast industrial slate and golden amber horizontal strip built with Bootstrap row/col:
1. `1,200+ MT` Monthly Foodgrain Dispatch Volume
2. `450+` Regular Retail Kirana & Hotel Catering Merchants
3. `100% Sortex` Optical Sorting & Double-Polished Purity
4. `100% Legal` Instant GST Invoicing & E-Way Bill Generation

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Mandi Friction vs. Modern B2B Depot Portal"
A comparative problem-solver interactive matrix showcasing why grain buyers adopt this platform:

| Traditional Mandi Friction | Modern B2B Depot Portal | Interactive Demo Component |
| :--- | :--- | :--- |
| Disorganized daily phone bargaining without knowing exact volume discounts | Instant Tiered Discount Calculator computing exact per-bag savings by order volume | Tiered Volume Discount Calculator |
| Confusion between 25kg, 50kg, and 75kg bag weights leading to delivery shortfalls | Standardized bag weight selectors with explicit net weight and packaging types | Standardized Bag Variant Selector |
| Loose handwritten slips resulting in GST input credit disputes with tax authorities | Automated B2B GST Tax Invoice generator with valid HSN 1006 and E-Way Bill numbers | B2B GST Invoice Simulator |
| Messy credit book disputes causing awkward friction and delayed receivables | Digital B2B Merchant Khata Ledger with clear 15-day terms and WhatsApp reminders | Merchant Khata Credit Ledger |
| Unclear transport arrangements and missing lorry waybills | Standardized WhatsApp dispatch order format including transporter and lorry details | 1-Click WhatsApp Bulk Compiler |

---

### 5.5 Section 4: Bulk Grain & Rice Commercial Catalog
The wholesale product catalog organized by commercial categories:
- **Commodity Filter Tabs (Bootstrap Nav-Pills):**
  `All Foodgrains (12)` | `Sona Masoori Rice` | `BPT / Samba Masoori` | `Raw & Steam Rice` | `Idli Rice & Broken Rice` | `Dals & Pulses` | `Commercial Atta & Sugar`
- **6 Core Wholesale Commodities (Realistic Demo Catalog):**
  1. **Kurnool Premium Sona Masoori Raw Rice (18-Month Aged):**
     - *Grade:* Superfine Sortex Cleaned, Old Crop, non-sticky grain length `5.2 mm`.
     - *Packaging:* 25 kg Laminated HDPE Moisture-Proof Bag.
     - *Base Price (1-9 Bags):* `₹1,420 / bag` (`₹56.80 / kg`).
     - *Tier 2 (10-49 Bags):* `₹1,360 / bag` (Save ₹60/bag).
     - *Tier 3 (50+ Bags Truckload):* `₹1,320 / bag` (Save ₹100/bag).
  2. **BPT 5204 (Samba Masoori) Steam Rice (Aged 12 Months):**
     - *Grade:* Uniform white polished, high cooking expansion, zero chalky grains.
     - *Packaging:* 25 kg Multi-Color Woven Bag or 50 kg Gunny Bag.
     - *Base Price (1-9 Bags):* `₹1,480 / bag` (`₹59.20 / kg`).
     - *Tier 2 (10-49 Bags):* `₹1,420 / bag` (Save ₹60/bag).
     - *Tier 3 (50+ Bags):* `₹1,380 / bag` (Save ₹100/bag).
  3. **Swarna 1061 Common Commercial Rice (New Crop):**
     - *Grade:* High-yield medium grain for caterers, hostels, and bulk commercial canteens.
     - *Packaging:* 50 kg Jute Bag (`₹2,100 / bag` $\rightarrow$ `₹42 / kg`).
     - *Volume Tier:* Flat `₹1,980 / bag` on 20+ bags.
  4. **Sortex First Quality Idli Broken Rice (Nookalu):**
     - *Grade:* 100% white sortex broken grains, zero black spots, ideal for idli/dosa batter.
     - *Packaging:* 50 kg Gunny Bag (`₹1,650 / bag` $\rightarrow$ `₹33 / kg`).
  5. **Guntur Fatka Toor Dal (Unpolished Super Grade):**
     - *Grade:* First harvest, fast-cooking yellow split pigeon peas, high protein.
     - *Packaging:* 30 kg / 50 kg Poly-woven Bag (`₹162 / kg` base rate).
     - *Tier Discount:* `₹154 / kg` on 5+ bags.
  6. **Commercial Grade Sugar (M-30 Medium Crystals):**
     - *Grade:* Pure sulfurless crystalline sugar for bakeries, sweet shops, and Kirana retail.
     - *Packaging:* 50 kg Standard Mill Bag (`₹2,050 / bag` $\rightarrow$ `₹41 / kg`).
- **Card Interactive Features:**
  - Bag size selector (`25 kg Bag` vs `50 kg Bag`).
  - Interactive "View Tier Rates" toggle.
  - Number input stepper: Minimum 10 bags for wholesale checkout.
  - `"Add to Bulk Order"` button with live cart recalculation.

---

### 5.6 Section 5: Interactive Wholesale Tiered Discount Calculator
A core commercial tool on the page that lets buyers simulate bulk purchases:
- **Interactive Controls:**
  - Commodity Dropdown: Select commodity (e.g., *Kurnool Sona Masoori 25kg*).
  - Bag Quantity Slider / Input: Range `10` to `200` bags (default: `40 bags`).
- **Live Output Pricing Matrix Card:**
  - **Total Order Bags:** `40 Bags (25 kg each) = 1,000 kg (10.0 Quintals / 1.0 MT)`.
  - **Applied Wholesale Tier:** `Tier 2: Dealer Tier (10 - 49 Bags)`.
  - **Base Rate:** `₹1,420 / bag`.
  - **Your Discounted Rate:** `₹1,360 / bag` (You save `₹60` per bag).
  - **Total Net Amount:** `₹54,400` (Before GST).
  - **GST @ 5% (Branded Foodgrains):** `₹2,720`.
  - **Gross Total Payable:** `₹57,120`.
  - **Total Savings on Order:** `₹2,400 SAVED` compared to base retail rate!
- **Action:** `"Transfer this Calculation to Bulk Cart ➔"`.

---

### 5.7 Section 6: Sticky B2B Bulk Cart & 1-Click WhatsApp Order Formatter
- **Sticky Bottom Bulk Bar:**
  - Persistently visible whenever `bulkCart.totalBags >= 10`.
  - Content: `📦 40 Bags | 10.0 Quintals (1.0 MT) | ₹57,120 (Incl. 5% GST)`.
  - Right: High-contrast amber button: `"Review Trade Order & Dispatch"`.
- **Bootstrap Offcanvas Commercial Cart:**
  - Line items table with: Commodity name, bag weight, quantity of bags, applied tier rate, and line total.
  - **Transporter & Delivery Details Form:**
    - Purchasing Entity / Firm Name (e.g., `Sri Balaji Provision Stores`).
    - Buyer GSTIN: `37AABCS1429M1Z8` (with simulated green checkmark validation).
    - Destination Town & Godown Address: `Door No 4/122, Main Bazaar, Proddatur`.
    - Preferred Mode of Transport: `Lorry Transport (VRL/Navata)`, `Local Auto Trolley`, `Buyer Self-Pickup from Depot Yard`.
    - Payment Terms: `Advance Bank Transfer (NEFT/RTGS)`, `Immediate UPI`, `15-Day Khata Credit (Authorized Dealers)`.
  - **Primary Action: "1-Click WhatsApp B2B Dispatch Order":**
    - Clicking formats the bulk requisition and opens `https://wa.me/919848088224?text=...`.
    - **Compiled WhatsApp Message Format:**
      ```
      🌾 *WHOLESALE B2B GRAIN REQUISITION*
      Depot: Sri Venkateswara Grain Depot
      Trade Order ID: #DEPOT-2026-8812
      Date: 05-Oct-2026, 04:45 PM

      🏢 *Buyer Firm:* Sri Balaji Provision Stores
      📋 *GSTIN:* 37AABCS1429M1Z8
      📍 *Delivery:* Door No 4/122, Main Bazaar, Proddatur
      🚛 *Transport:* Navata Road Transport (To Pay)

      📦 *Order Specification:*
      1. Kurnool Sona Masoori Raw 25kg x 40 Bags @ ₹1,360 = ₹54,400
         (Applied Tier: 10-49 Bags Dealer Tier)
      -----------------------------------
      ⚖️ *Total Weight:* 1,000 kg (10.0 Quintals / 1.0 MT)
      💵 *Taxable Value:* ₹54,400
      📊 *GST (5% HSN 1006):* ₹2,720
      💰 *Total Invoice Amount:* ₹57,120
      💳 *Payment Terms:* 15-Day Credit Khata

      Please confirm lorry loading and dispatch schedule. 🙏
      ```

---

### 5.8 Section 7: Instant B2B GST Tax Invoice & E-Way Bill Simulator
An interactive tool simulating formal Indian tax compliance:
- Click `"Generate Sample GST Invoice"` from the cart or header.
- Displays an authentic **Government Compliant Tax Invoice**:
  - **Seller:** `SRI VENKATESWARA GRAIN DEPOT & TRADERS • GSTIN: 37AABCS9912K1Z4`.
  - **Buyer:** `SRI BALAJI PROVISION STORES • GSTIN: 37AABCS1429M1Z8`.
  - Invoice No: `INV/2026-27/0814` • Date: `05-Oct-2026`.
  - E-Way Bill No: `2418 9021 3492` (Auto-generated for orders $> ₹50,000$).
  - Table: Serial, HSN Code (`1006 30 10`), Description, UQC (`QTL`), Qty, Rate, Taxable Value, CGST 2.5%, SGST 2.5%, Total.
  - Buttons: `"Print Formal Invoice (PDF)"` | `"Download E-Way Bill Summary"`.

---

### 5.9 Section 8: Merchant B2B Credit Khata Ledger Simulator
A crucial feature for managing recurring wholesale retailer credit:
- **Search Merchant:** Enter registered 10-digit mobile or GSTIN (Demo prefill: `9848077112` / `37AABCS1429M1Z8`).
- **Merchant Credit Profile Display:**
  - Firm Name: `Sri Balaji Provision Stores (Prop: K. Subba Rao)`.
  - Approved Credit Limit: `₹2,50,000`.
  - Credit Terms: `15 Days Net Payment Cycle`.
  - **Current Ledger Balance Outstanding:** `₹78,400` (Due in 4 days).
  - Available Credit for Next Order: `₹1,71,600`.
  - **Recent Ledger Statements:**
    - `28-Sep`: Dispatch #DEPOT-8712 - 50 Bags Sona Masoori - `+ ₹68,000` (Debit)
    - `22-Sep`: RTGS Bank Payment Recd - Axis Bank - `- ₹1,00,000` (Credit)
    - `15-Sep`: Dispatch #DEPOT-8620 - 40 Bags Steam Rice - `+ ₹56,000` (Debit)
  - Action Button: `"Send WhatsApp Account Statement & Settlement Link"`.

---

### 5.10 Section 9: Wholesale Grain Grading & Quality Specifications
Displays standard laboratory quality parameters giving buyers confidence to order in bulk without physical yard inspection:
- Moisture Content: $\le 11.8\%$ (Optimal for 12+ months insect-free storage).
- Broken Grain Ratio: $\le 1.5\%$ (Precision Sortex Separation).
- Grain Length: Uniform $5.2 \text{ mm}$ (Sona Masoori Raw).
- Foreign Matter / Stones: $0.0\%$ (Destoner + Double Optical Color Sorter).
- Interactive Button: `"View Government Agmark Quality Certificate (PDF)"`.

---

### 5.11 Section 10: Verified Merchant & Bulk Buyer Testimonials
- 3 Verified B2B Customer Quotes:
  - *"We run 3 Kirana stores in Proddatur. Sourcing 150 bags monthly from Sri Venkateswara Grain Depot saves us ₹15,000 every month on tiered rates. Zero bag leakage and accurate weights."* — K. Subba Rao, Balaji Provisions.
  - *"For our catering business, grain cooking expansion is everything. Their 18-month aged Sona Masoori never disappoints. GST bills arrive promptly on WhatsApp."* — M. Ramanathan, Grand Caterers.
- Badges: `APMC License #APMC-KDP-412` | `FSSAI Central Wholesale License` | `GST ITC Compliant`.

---

### 5.12 Section 11: Comprehensive Wholesale Grain Depot FAQs Accordion
Interactive Bootstrap accordion answering trade questions:
1. *What is the minimum order quantity for wholesale tiered pricing?*
2. *How is freight and lorry transport arranged for outstation orders?*
3. *What are the eligibility criteria for opening a 15-day or 30-day Khata credit account?*
4. *Are all rice bags machine-weighed to ensure zero weight discrepancy?*
5. *How does the 5% GST on branded foodgrains work for Input Tax Credit (ITC)?*
6. *Can institutional buyers request custom private-label bag packaging?*

---

### 5.13 Section 12: Depot Yard Location, Godown Timings & Contact Footer
- **Depot Yard Specifications:**
  - Godown Location: `Plot 14-18, APMC Mandi Yard, Railway Goods Shed Road, Kadapa`.
  - Yard Facilities: 4 Lorry Loading Bays, 60-Ton Electronic Weighbridge (Dharam Kanta).
  - Loading Timings: `Monday to Saturday: 8:00 AM to 8:30 PM (Sunday Closed for Fumigation)`.
- Direct B2B Sales Desk, WhatsApp Dispatch Helpline (`+91 98480 88224`), and Bank Account NEFT/RTGS details.
- Developer Prototype Notice: Fictional demonstration portal built with modern web technologies.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockGrains.js`
```javascript
export const mockGrains = [
  {
    id: "grain-sona-raw-25",
    name: "Kurnool Sona Masoori Raw Rice (18-Mo Aged)",
    teluguName: "కర్నూలు పాత సోనా మసూరి రా రైస్",
    category: "sona-masoori",
    grade: "Sortex Superfine",
    grainLength: "5.2 mm",
    moisture: "11.6%",
    packWeight: "25 kg",
    packagingType: "Laminated HDPE Bag",
    basePrice: 1420, // 1-9 bags rate
    hsnCode: "1006 30 10",
    image: "/assets/images/grains/sona-raw-bag.jpg",
    inStockBags: 1250,
    featured: true
  },
  {
    id: "grain-samba-steam-25",
    name: "BPT 5204 (Samba Masoori) Steam Rice (Aged)",
    teluguName: "బిపిటి 5204 సాంబా మసూరి స్టీమ్ రైస్",
    category: "samba-masoori",
    grade: "Double Polished",
    grainLength: "5.4 mm",
    moisture: "12.0%",
    packWeight: "25 kg",
    packagingType: "Laminated Woven Bag",
    basePrice: 1480,
    hsnCode: "1006 30 10",
    image: "/assets/images/grains/bpt-steam-bag.jpg",
    inStockBags: 840,
    featured: true
  },
  {
    id: "grain-swarna-50",
    name: "Swarna 1061 Commercial Raw Rice",
    teluguName: "స్వర్ణ 1061 కామన్ కమర్షియల్ రైస్",
    category: "commercial-rice",
    grade: "Commercial Grade",
    grainLength: "5.0 mm",
    moisture: "12.4%",
    packWeight: "50 kg",
    packagingType: "Jute Gunny Bag",
    basePrice: 2100,
    hsnCode: "1006 30 10",
    image: "/assets/images/grains/swarna-gunny.jpg",
    inStockBags: 620,
    featured: false
  },
  {
    id: "grain-broken-nookalu-50",
    name: "Sortex White Idli Broken Rice (Nookalu)",
    teluguName: "సార్టెక్స్ ఇడ్లీ నూకలు",
    category: "broken-rice",
    grade: "Sortex Cleaned",
    grainLength: "Broken 1/2 Grain",
    moisture: "11.8%",
    packWeight: "50 kg",
    packagingType: "Gunny Bag",
    basePrice: 1650,
    hsnCode: "1006 40 00",
    image: "/assets/images/grains/broken-rice.jpg",
    inStockBags: 450,
    featured: false
  },
  {
    id: "grain-dal-toor-50",
    name: "Guntur Fatka Toor Dal (Unpolished Super)",
    teluguName: "గుంటూరు ఫట్కా కంది పప్పు",
    category: "dals",
    grade: "Bold Yellow Grain",
    moisture: "10.5%",
    packWeight: "50 kg",
    packagingType: "Polywoven Bag",
    basePrice: 8100, // ₹162/kg
    hsnCode: "0713 60 00",
    image: "/assets/images/grains/toor-dal-bag.jpg",
    inStockBags: 280,
    featured: true
  }
];
```

### 6.2 `mockPricingTiers.js`
```javascript
export const mockPricingTiers = [
  {
    id: "tier-1",
    label: "Retail Tier",
    minBags: 1,
    maxBags: 9,
    discountPerBag: 0,
    badgeColor: "secondary"
  },
  {
    id: "tier-2",
    label: "Dealer Tier",
    minBags: 10,
    maxBags: 49,
    discountPerBag: 60, // e.g., ₹1,360 instead of ₹1,420
    badgeColor: "primary"
  },
  {
    id: "tier-3",
    label: "Semi-Wholesale",
    minBags: 50,
    maxBags: 99,
    discountPerBag: 100, // e.g., ₹1,320 instead of ₹1,420
    badgeColor: "success"
  },
  {
    id: "tier-4",
    label: "Mandi Truckload Tier",
    minBags: 100,
    maxBags: 1000,
    discountPerBag: 140, // e.g., ₹1,280 instead of ₹1,420
    badgeColor: "danger"
  }
];
```

### 6.3 `mockMerchantAccounts.js`
```javascript
export const mockMerchantAccounts = [
  {
    gstin: "37AABCS1429M1Z8",
    phone: "9848077112",
    firmName: "Sri Balaji Provision Stores",
    proprietor: "K. Subba Rao",
    town: "Proddatur",
    creditLimit: 250000,
    outstandingBalance: 78400,
    creditCycleDays: 15,
    dueDate: "09-Oct-2026",
    transactions: [
      { id: "tx-101", date: "28-Sep-2026", desc: "Dispatch #DEPOT-8712 (50 Bags Sona)", amount: 68000, type: "debit" },
      { id: "tx-102", date: "22-Sep-2026", desc: "RTGS Bank Payment Recd (Axis Bank)", amount: 100000, type: "credit" },
      { id: "tx-103", date: "15-Sep-2026", desc: "Dispatch #DEPOT-8620 (40 Bags Steam)", amount: 56000, type: "debit" }
    ]
  }
];
```

### 6.4 `mockInvoices.js`
```javascript
export const mockInvoices = [
  {
    invoiceNumber: "INV/2026-27/0814",
    ewayBillNumber: "2418 9021 3492",
    date: "05-Oct-2026",
    sellerGstin: "37AABCS9912K1Z4",
    sellerName: "Sri Venkateswara Grain Depot & Traders",
    sellerAddress: "APMC Mandi Yard, Railway Goods Shed Road, Kadapa",
    buyerGstin: "37AABCS1429M1Z8",
    buyerName: "Sri Balaji Provision Stores",
    buyerAddress: "Door No 4/122, Main Bazaar, Proddatur",
    items: [
      {
        hsn: "1006 30 10",
        description: "Kurnool Sona Masoori Raw Rice (25kg Laminated Bag)",
        bags: 40,
        quintals: 10.0,
        ratePerBag: 1360,
        taxableAmount: 54400,
        cgstRate: 2.5,
        cgstAmount: 1360,
        sgstRate: 2.5,
        sgstAmount: 1360,
        total: 57120
      }
    ],
    totalTaxable: 54400,
    totalCgst: 1360,
    totalSgst: 1360,
    grandTotal: 57120
  }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Volume Tier Slider & Pricing Animation:**
   - As the buyer drags the bag quantity slider (from 10 to 100+ bags), smoothly transition price numbers and savings badges with an odometer count-up effect.
2. **Wholesale Tier Badge Morph:**
   - When quantity crosses a tier threshold (e.g., 50 bags), the active tier badge should expand with a pulse:
   ```css
   @keyframes tierActivePulse {
     0% { transform: scale(1); }
     50% { transform: scale(1.08); }
     100% { transform: scale(1); }
   }
   .tier-badge-active {
     animation: tierActivePulse 0.3s ease-out;
   }
   ```
3. **Sticky Bottom Bulk Cart Elevation:**
   - Sliders and inputs update the sticky bottom dispatch bar smoothly with cubic-bezier easing.
4. **GST Tax Invoice Modal Print Preview:**
   - The invoice modal renders an authentic A4 paper aspect ratio (`box-shadow: 0 10px 40px rgba(0,0,0,0.18)`), with crisp borders and tabular typography.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 85% of grain merchants and retail Kirana shopkeepers trade and place re-orders via smartphones from wholesale yards and shops:
- **Responsive Commercial Tables:**
  All commodity pricing tables, tier matrices, and ledger statements must feature horizontal touch-scroll wrappers (`.table-responsive`) with sticky left columns for commodity names.
- **Large Touch Sliders & Steppers:**
  The bag quantity slider and plus/minus steppers must have a generous touch height ($\ge 48\text{px}$) with high-contrast thumb selectors.
- **Persistent Dispatch Bar:**
  Ensure the bottom bulk cart bar is accessible with one thumb and maintains adequate safe-area insets (`padding-bottom: env(safe-area-inset-bottom, 12px)`).

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for golden grain ochre, commercial industrial slate, and trust emerald in `globals.css`.
- [ ] Implement Top Mandi Rate Ticker and Sticky Commercial Navbar with APMC license badge.
- [ ] Build Hero Section with bulk bag showcase and instant quote trigger using Bootstrap grid.
- [ ] Build Commodity Catalog Grid with bag weight selector (`25kg` vs `50kg`) and live stock bag counts.
- [ ] Implement Interactive Wholesale Tiered Discount Calculator with slider (10 to 100+ bags) and instant savings output.
- [ ] Build Sticky Mobile Bottom Dispatch Bar showing total bags, weight in Quintals, and grand total.
- [ ] Build Bootstrap Offcanvas Bulk Cart with transporter and delivery destination form.
- [ ] Implement 1-Click WhatsApp B2B Order Formatter outputting structured trade requisition.
- [ ] Build Government-Compliant B2B GST Tax Invoice & E-Way Bill Simulator (`INV-2026-0814`) with PDF print view.
- [ ] Build Merchant B2B Credit Khata Ledger Modal (`GSTIN` lookup, 15-day credit cycle, and WhatsApp reminder trigger).
- [ ] Build Grain Grading Quality & Laboratory Agmark Certificate modal viewer.
- [ ] Implement FAQ Accordion and Footer with APMC yard location and weighbridge timings.
- [ ] Validate responsive layouts on Mobile (360px - 412px Android), Tablet (768px), and Desktop (1280px+).
