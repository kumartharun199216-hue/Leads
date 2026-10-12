# Frontend Development Specification
## Business 10: Neighborhood Kirana & General Stores
### Project: Hyperlocal Digital Kirana PWA & WhatsApp Store

---

## 1. Executive Technical Overview

- **Target Business Model:** Hyperlocal Kirana Stores, Corner Provision Merchants, Neighborhood General Stores, Traditional Ration & Grocery Retailers, Family-Run Provision Hubs.
- **Frontend Architecture:** Mobile-First Progressive Web App (PWA) / Single Page Application (SPA) built with **React**, **HTML5**, **CSS3**, and modern **JavaScript (ES6+)**, integrated with **Bootstrap 5** for high-density 2-column mobile product grids, fluid bottom offcanvas drawers, and sticky thumb-friendly action bars.
- **Styling Architecture:** Curated **Bootstrap 5** utility framework coupled with a custom CSS Design System (`variables.css` / `globals.css`) utilizing CSS Custom Properties for warm grocery saffron amber, fresh basil/WhatsApp green, vibrant turmeric gold, clean pantry white cards, and high-contrast slate typography.
- **Motion & Interaction Stack:** Vanilla CSS Transitions & Keyframes, Bootstrap Offcanvas/Modal/Tab/Collapse controllers, and Lucide / FontAwesome Icons.
- **Data Layer:** 100% Client-side Mock State (React Hooks / Context API + `localStorage` persistence; zero live backend, database, or external auth required).
- **Core Mission:** Provide traditional Kirana store owners, family provision merchants, and local retail networks with a lightning-fast, high-converting digital storefront. The platform empowers mom-and-pop grocery stores to compete against quick-commerce dark stores (Blinkit, Zepto, Instamart) by digitizing their daily staples inventory (Rice bags, Dals, Edible Oils, Atta, Spices, Ghee), featuring high-efficiency 2-column mobile cards, instant inline quantity steppers (`- 1 +`), a **1-Click WhatsApp Order Compiler** that formats orders directly into WhatsApp messages, a live **Merchant In-App Price Updater Drawer**, and a **Digital Khata Credit Ledger Simulator** for regular neighborhood households.

---

## 2. Problems Solved & Frontend Feature Translation

The developer must translate traditional Kirana retail challenges into specific, interactive UI features:

| Kirana Operational Problem | Root Cause | Frontend Solution & Interactive Feature |
| :--- | :--- | :--- |
| **Losing Customers to Big Quick-Commerce Dark Stores** | Modern urban and semi-urban households default to delivery apps because traditional stores lack digital browsing. | **Hyperlocal 30-Min Free Delivery Guarantee Banner** and lightweight mobile PWA interface enabling instant neighborhood ordering with zero app download friction. |
| **Messy, Illegible Handwritten Paper Slips on WhatsApp** | Customers take photos of crumpled handwritten paper lists or send vague audio notes, leading to wrong items and billing disputes. | **Visual 2-Column Mobile Grocery Catalog with Inline Steppers (`- 1 +`)** and a **1-Click WhatsApp Order Compiler** that formats an itemized, priced order slip instantly. |
| **Frequent Daily Commodity Price Fluctuations** | Prices of cooking oils, dals, onions, and grains change daily at the wholesale mandi; static paper menus become outdated. | **Interactive Merchant Quick-Price Controller (Admin Mode Toggle)** allowing the store owner to adjust ₹/kg prices in seconds with instant UI synchronization. |
| **Credit Book (Khata) Disputes & Forgotten Dues** | Traditional physical notebooks lead to forgotten balances, misplaced records, and awkward payment reminder conversations. | **Digital Khata Credit Ledger & Payment Link Generator** tracking customer balances, generating instant receipt summaries, and sending 1-tap WhatsApp payment reminders. |
| **Low-End Smartphone & Spotty 4G Connectivity Friction** | Heavy mobile applications crash or lag on budget Android devices used by local customers and elders. | **Ultra-Lightweight PWA Architecture (< 150KB initial bundle)** with local storage caching, fast autocomplete search, and offline-resilient cart states. |

---

## 3. Design System & Visual Tokens

The user interface must feel vibrant, approachable, hygienic, community-trusted, and lightning-fast. **Avoid dull greys or complex corporate aesthetics.**

### 3.1 Color Palette (CSS Variables)

```css
:root {
  /* Brand Primary: Saffron Grocery Amber & Warm Provision Tone */
  --color-primary-950: #431407;
  --color-primary-900: #7c2d12;
  --color-primary-800: #9a3412;
  --color-primary-700: #c2410c;
  --color-primary-600: #ea580c; /* Main Kirana Saffron */
  --color-primary-500: #f97316;
  --color-primary-200: #fed7aa;
  --color-primary-100: #ffedd5;
  --color-primary-50:  #fff7ed;

  /* Brand Secondary: Fresh WhatsApp & Basil Leaf Green */
  --color-whatsapp-700: #15803d;
  --color-whatsapp-600: #16a34a;
  --color-whatsapp-500: #22c55e;
  --color-whatsapp-brand:#25d366; /* Official WhatsApp Green */
  --color-whatsapp-50:  #f0fdf4;

  /* Accent: Turmeric Gold & Mustard Yellow */
  --color-gold-600:     #ca8a04;
  --color-gold-500:     #eab308;
  --color-gold-400:     #facc15;
  --color-gold-100:     #fef9c3;

  /* Surface & Grocery Neutral Scale */
  --color-surface-bg:    #f8fafc; /* Crisp Clean Off-White */
  --color-surface-card:  #ffffff;
  --color-surface-dark:  #1e293b;
  --color-text-main:     #0f172a;
  --color-text-muted:    #64748b;
  --color-text-light:    #94a3b8;
  --color-border-subtle: #e2e8f0;

  /* Functional Status Colors */
  --color-discount-badge:#dc2626; /* Red savings chip */
  --color-stock-badge:   #16a34a; /* In stock green */
  --color-khata-pending: #d97706; /* Khata due amber */

  /* Elevation & Card Shadows */
  --card-shadow:         0 2px 8px -1px rgba(15, 23, 42, 0.06), 0 1px 4px -1px rgba(15, 23, 42, 0.04);
  --card-shadow-hover:   0 12px 20px -3px rgba(234, 88, 12, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
  --bottom-bar-shadow:   0 -4px 20px rgba(15, 23, 42, 0.12);

  /* Radius Tokens */
  --radius-sm:           6px;
  --radius-md:           12px;
  --radius-lg:           18px;
  --radius-pill:         9999px;
}
```

### 3.2 Typography Tokens
- **Display & Headings:** `'Plus Jakarta Sans'`, `'Outfit'`, or `'Inter'`, sans-serif. Weights: `600` (SemiBold), `700` (Bold), `800` (ExtraBold). Warm, clear, and punchy.
- **Body & Product Names:** `'Inter'`, sans-serif. Weights: `400` (Regular), `500` (Medium). Legible at small font sizes on mobile viewports.
- **Product Prices, Savings & Weights:** Monospaced tabular numerals (`font-variant-numeric: tabular-nums; font-weight: 700`).

---

## 4. Frontend Application Architecture & Route Map

The application is structured into modular React components styled with Bootstrap 5 grid utilities and custom CSS:

```
src/
├── assets/
│   ├── images/ (Staple grain sacks, oil pouches, spice jars, dal bowls, shop storefront)
│   └── icons/  (ShoppingBag, Plus, Minus, Search, Clock, Truck, ShieldCheck, WhatsApp, Phone, Edit3, UserCheck)
├── components/
│   ├── common/
│   │   ├── Navbar.jsx (Bootstrap container-fluid + Locality selector + Cart counter)
│   │   ├── DeliveryBanner.jsx (30-min free delivery threshold alert)
│   │   ├── SearchBar.jsx (Real-time product autocomplete search bar)
│   │   ├── Footer.jsx (Store location, delivery radius, shop timings)
│   │   └── WhatsAppFloatButton.jsx
│   ├── home/
│   │   ├── HeroBannerCarousel.jsx (Daily staple discounts & seasonal offers)
│   │   ├── StoreMetricsStrip.jsx (30-min delivery, 850+ items, community trust metrics)
│   │   ├── ProblemComparisonGrid.jsx (Handwritten Slips vs Digital Kirana Store)
│   │   ├── QuickVoiceOrListUpload.jsx (Upload handwritten grocery photo or audio note)
│   │   ├── TestimonialsGrid.jsx (Neighborhood families & verified reviews)
│   │   └── FaqAccordion.jsx (Bootstrap accordion component)
│   ├── catalog/
│   │   ├── CategoryPillsBar.jsx (Horizontal scrollable category tabs)
│   │   ├── ProductGrid.jsx (2-Column high-density mobile grid)
│   │   ├── ProductCard.jsx (Image, pack size selector, price, inline - 1 + stepper)
│   │   └── WeightVariantSelector.jsx (Weight dropdown e.g., 500g, 1kg, 5kg, 25kg)
│   ├── cart/
│   │   ├── StickyCartBottomBar.jsx (Persistent mobile bottom action bar with total & items)
│   │   ├── CartOffcanvasDrawer.jsx (Bootstrap offcanvas summary drawer)
│   │   ├── CartItemRow.jsx (Quantity adjuster and line item subtotal)
│   │   ├── DeliveryAddressForm.jsx (House/Flat, Street, Landmark, Phone)
│   │   └── WhatsAppOrderCompiler.jsx (Formats order into WhatsApp URL-encoded text)
│   ├── merchant/
│   │   ├── MerchantAdminToggle.jsx (Floating toggle: Switch between Customer & Shopkeeper)
│   │   └── PriceEditorDrawer.jsx (Instant ₹/kg price updater modal)
│   └── khata/
│       ├── KhataLookupModal.jsx (Customer credit ledger balance checker)
│       └── KhataStatementCard.jsx (Monthly purchase summary & WhatsApp payment reminder)
├── context/
│   ├── CartContext.jsx (Manages cart items, quantities, totals, delivery mode)
│   ├── ProductContext.jsx (Manages product list, category filtering, search, merchant price updates)
│   └── KhataContext.jsx (Manages customer credit accounts and payment reminders)
├── data/
│   ├── mockCategories.js
│   ├── mockProducts.js
│   ├── mockKhataAccounts.js
│   ├── mockDeliveryZones.js
│   └── mockFaqs.js
├── styles/
│   ├── custom-bootstrap.css (Bootstrap overrides)
│   ├── globals.css (Design tokens & typography)
│   └── animations.css (Stepper pulse, cart badge bounce, drawer slides)
├── App.jsx
└── main.jsx
```

---

## 5. Detailed Page & Section Specifications

### 5.1 Global Mobile-First Header & Delivery Alert Banner
- **Top Delivery Alert Banner:**
  - Background: `var(--color-whatsapp-600)`. Text: `#ffffff`.
  - Content: `"⚡ FREE 30-Minute Neighborhood Delivery on Orders above ₹299 • Call/WhatsApp: +91 98480 33881"`.
  - Icon: Pulsing motorcycle delivery icon.
- **Main Header Bar:**
  - Background: `#ffffff` with subtle bottom border (`var(--color-border-subtle)`).
  - **Left Element:** Store Brand Emblem (Traditional grain sack / brass diya icon), Store Name (**"Sri Lakshmi Venkateswara Kirana & General Store"**), and Sub-text with neighborhood locality: `"📍 Ram Nagar 3rd Cross, Kadapa • Open 6:30 AM - 10:00 PM"`.
  - **Right Elements:**
    - Merchant Admin Toggle button (Pencil icon: `"Owner Mode"`).
    - Khata Ledger Button (Book icon: `"My Khata"`).
    - Cart Icon with dynamic green item count badge (`3`).
- **Interactive Autocomplete Search Bar:**
  - Prominent search input pinned below the header: `"Search daily staples (e.g., Sona Masoori, Toor Dal, Sunflower Oil, Freedom, Atta)..."`.
  - Instant typing search filtering products in real time across Telugu and English phonetic names (e.g., *Kandi Pappu*, *Chintapandu*, *Bellam*).

---

### 5.2 Section 1: Hero Banner & Daily Mandi Deals
- **Layout:** High-impact mobile carousel / card slider.
- **Slide 1 - Daily Mandi Fresh Grains & Oils:**
  - Headline: *"Direct Mandi Sona Masoori Rice (New & Old Crop) — Special 25kg Bag Offer!"*.
  - Subhead: *"Pure unadulterated quality. Direct from trusted regional mills. Free doorstep delivery."*
  - Badge: `🔥 Save ₹140 on 25kg Bag`.
- **Slide 2 - Monthly Grocery Basket Deal:**
  - Headline: *"Stock Up Your Monthly Kitchen Essentials"*.
  - Subhead: *"Dals, Edible Oils, Atta & Spices — Flat 10% Extra Discount on Monthly Ration above ₹2,499."*
- **Slide 3 - Local Neighborhood Trust:**
  - Headline: *"Your Trusted Neighborhood Kirana for Over 28 Years"*.
  - Subhead: *"No fake delivery charges. Same-day credit khata facility for regular families."*

---

### 5.3 Section 2: Kirana Operational Metrics Strip
A warm saffron and amber horizontal metrics strip built with Bootstrap row/col:
1. `30 Mins` Average Neighborhood Doorstep Delivery
2. `850+` Daily Pantry Staples & Household Essentials in Stock
3. `1,400+` Trusted Local Families Served Every Month
4. `₹0 Fee` Free Delivery on Orders Above ₹299

*Developer Animation Note:* Use an Intersection Observer to trigger number counting animations (`0` to `target`) when scrolled into view.

---

### 5.4 Section 3: "Traditional Paper Slips vs. Digital Kirana Store"
A comparative problem-solver interactive matrix showcasing why local grocers digitize:

| Traditional Phone/Paper Slips | The Modern Digital Kirana PWA | Interactive Demo Component |
| :--- | :--- | :--- |
| Illegible handwritten slips sent on WhatsApp lead to wrong brands and quantities | Clear visual product catalog with weight selectors and 1-click steppers | 2-Column Mobile Product Grid |
| Customers don't know current prices of oils and dals, leading to billing arguments | Transparent daily prices with instant merchant price controller | Merchant Quick-Price Updater |
| Customers abandon cart when asked to download a 50MB app from Play Store | Instant, zero-download PWA loading in under 1.5 seconds on 4G phones | Lightweight Mobile PWA Storefront |
| Unpaid credit records scattered across loose paper khata diaries | Digital Khata ledger showing balance, purchase history, and payment reminders | Digital Khata Ledger Simulator |
| Grocery store owners struggle to confirm orders without complex billing machines | Generates formatted, ready-to-send WhatsApp order messages directly to owner | 1-Click WhatsApp Order Compiler |

---

### 5.5 Section 4: Daily Staples Category Navigation & 2-Column Mobile Catalog
The core shopping interface optimized for rapid thumb navigation:
- **Category Filter Pills (Horizontal Touch-Swipe Bar):**
  `All Staples (16)` | `Rice & Whole Grains` | `Dals & Pulses` | `Cooking Oils & Ghee` | `Atta & Flours` | `Spices & Masalas` | `Sugar, Jaggery & Salt` | `Cleaning & Household`
- **2-Column Mobile Card Layout (`col-6 col-md-4 col-lg-3`):**
  Each product card includes:
  1. High-resolution clean staple visual with hover zoom.
  2. Savings / Offer badge in top-left corner (e.g., `Save ₹40`, `Best Quality`).
  3. Regional + English Product Name: e.g., *"Premium Toor Dal (Kandi Pappu)"*.
  4. Pack Size / Weight Selector: Interactive pill dropdown (`500g`, `1 kg`, `2 kg`, `5 kg`).
  5. Price Display: Current price in bold (`₹168`) with crossed-out MRP (`₹195`).
  6. **Inline Quantity Stepper (`- 1 +`):**
     - Default state: `"ADD"` button with green plus icon.
     - Active state: Transforms into an inline green stepper (`- [ Qty ] +`) with instantaneous cart quantity synchronization.
- **8 Core Featured Kirana Staples (Realistic Demo Catalog):**
  1. **Kurnool Sona Masoori Raw Rice (25kg Bag):** Aged 12+ months, non-sticky premium cooking rice. `₹1,450` (MRP: `₹1,590`).
  2. **Premium Grade Toor Dal / Arhar Dal (1kg):** Unpolished, fast-cooking, high-protein native dal. `₹168` (MRP: `₹195`).
  3. **Freedom Refined Sunflower Oil (1 Liter Pouch):** Fortified with Vitamins A & D. `₹136` (MRP: `₹152`).
  4. **Aashirvaad Shudh Chakki Whole Wheat Atta (5kg):** 100% whole wheat flour for soft rotis. `₹255` (MRP: `₹285`).
  5. **GRB Pure Cow Ghee (500ml Jar):** Traditional granulated aromatic cow ghee. `₹375` (MRP: `₹410`).
  6. **Guntur Teja Red Chilli Powder (500g):** Pure sun-dried ground hot chillies, no artificial colors. `₹180` (MRP: `₹210`).
  7. **Tata Salt Vacuum Evaporated (1kg):** Iodized table salt. `₹28` (MRP: `₹30`).
  8. **Organic Golden Jaggery Cubes / Bellam (1kg):** Chemical-free sulfurless cane jaggery. `₹85` (MRP: `₹100`).

---

### 5.6 Section 5: Sticky Floating Cart & 1-Click WhatsApp Order Compiler
- **Sticky Bottom Action Bar on Mobile:**
  - Persistently pinned to the bottom of the viewport whenever `cart.totalItems > 0`.
  - Left: Item count and total bill: `3 Items | ₹1,873` (with a small `"Delivery: FREE"` tag).
  - Right: High-contrast green button: `"View Cart & Order ➔"`.
- **Bootstrap Offcanvas Cart Drawer:**
  - Slides up from the bottom on mobile (or from the right on desktop).
  - **Cart Line Items:** Thumbnail, title, selected weight, line price, and inline stepper to increase or delete items.
  - **Bill Breakdown Card:**
    - Item Total: `₹1,873`
    - Neighborhood Delivery: `FREE` (Orders above ₹299)
    - Total Amount Payable: `₹1,873`
  - **Customer Details Inputs:**
    - Full Name (e.g., `Smt. K. Sunitha`).
    - Contact Phone / WhatsApp Number.
    - Delivery Address (House No, Apartment/Street, Landmark e.g., `Flat 202, Sri Sai Nilayam, Beside Water Tank`).
    - Payment Preference: `Cash on Delivery (COD)`, `UPI on Delivery (PhonePe/GPay)`, `Add to Monthly Khata`.
  - **Primary Action: "1-Click Order via WhatsApp":**
    - Clicking the button compiles all cart contents into a clean, human-readable WhatsApp message and opens `https://wa.me/919848033881?text=...` in a new window.
    - **Compiled WhatsApp Message Format:**
      ```
      🛒 *NEW GROCERY ORDER - SRI LAKSHMI KIRANA*
      Order ID: #KIRANA-8921
      Date: 05-Oct-2026, 04:15 PM

      👤 *Customer:* Smt. K. Sunitha
      📞 *Phone:* +91 98480 77112
      📍 *Address:* Flat 202, Sri Sai Nilayam, Beside Water Tank, Ram Nagar
      💳 *Payment:* UPI on Delivery

      📋 *Items Ordered:*
      1. Kurnool Sona Masoori Rice (25kg) x 1 = ₹1,450
      2. Premium Toor Dal (1kg) x 1 = ₹168
      3. Aashirvaad Chakki Atta (5kg) x 1 = ₹255

      -------------------------
      💰 *Total Payable:* ₹1,873
      🚚 *Delivery:* FREE (30-Min Neighborhood Delivery)

      Please confirm and dispatch! 🙏
      ```

---

### 5.7 Section 6: Instant Merchant Price Updater Tool (Shopkeeper Admin Mode)
An interactive simulation tool demonstrating store management:
- A toggle in the top bar: `[ 👨‍💼 Switch to Owner Mode ]`.
- When activated, each product card displays an `"Edit Price"` pencil button.
- Clicking opens a quick modal:
  - Product: *Freedom Refined Sunflower Oil (1L)*
  - Current Price: `₹136` $\rightarrow$ Change to `₹139`.
  - Current Stock Status: `In Stock` / `Out of Stock`.
  - Click `"Save & Update"`: Updates state immediately across the catalog and cart with a success toast notification.

---

### 5.8 Section 7: Digital Khata (Customer Credit Ledger) Simulator
A community trust feature replicating the traditional Indian neighborhood credit relationship:
- Accessible via the `"My Khata"` button in the header.
- **Lookup Input:** Enter 10-digit mobile number (Demo pre-fill: `9848077112` - Smt. K. Sunitha).
- **Khata Ledger Card Display:**
  - Account Holder: `Smt. K. Sunitha (Account #KHATA-084)`.
  - Credit Limit: `₹5,000` | Available Credit: `₹3,150`.
  - **Current Outstanding Due:** `₹1,850` (Due Date: `10th of this month`).
  - **Recent Transactions List:**
    - `02-Oct`: Grocery Purchase - `#KIRANA-8810` - `+ ₹920` (Credit)
    - `28-Sep`: UPI Payment Received - PhonePe - `- ₹2,000` (Payment)
    - `24-Sep`: Oil & Rice Purchase - `#KIRANA-8742` - `+ ₹1,450` (Credit)
  - Action Button: `"Send WhatsApp Payment Reminder with UPI Link"`.

---

### 5.9 Section 8: Quick Handwritten List or Voice Order Upload
For elderly customers or busy homemakers who prefer not to browse item by item:
- **Feature Card:** *"Have a Handwritten Grocery List on Paper?"*.
- Action 1: `📸 Snap & Upload Photo of List` (Simulated photo attachment).
- Action 2: `🎙️ Record 30-Second Voice Note`.
- The system packages the uploaded list or voice note into a pre-formatted WhatsApp message directly to the shopkeeper with the customer's delivery address.

---

### 5.10 Section 9: Neighborhood Community Trust & Customer Reviews
- **Header:** `"Trusted by Over 1,400 Families in Ram Nagar, NGO Colony & Co-operative Colony"`.
- 3 Verified Local Customer Testimonials:
  - *"We have been taking groceries from Sri Lakshmi Kirana for 15 years. Now ordering on WhatsApp with exact prices is so easy. Rice bag and oil arrived within 25 minutes!"* — K. Ramanjaneyulu, Retd. Teacher.
  - *"No rotten dals or duplicate oils. Honest shopkeeper, accurate weights, and instant delivery without any platform convenience fee."* — P. Madhavi, Homemaker.
- Community Badges: `100% Weighing Scale Accuracy Guarantee` | `Direct Mandi Sourcing` | `Zero Hidden Platform Fees`.

---

### 5.11 Section 10: Comprehensive Kirana Store FAQs Accordion
Interactive Bootstrap accordion answering neighborhood shopping questions:
1. *What is the minimum order amount for free doorstep grocery delivery?*
2. *How quickly will my groceries be delivered after I send the WhatsApp order?*
3. *Can I pay via PhonePe, Google Pay, or Cash upon delivery?*
4. *How does the monthly Khata credit facility work for local residents?*
5. *What happens if an item is temporarily out of stock or needs replacement?*
6. *Can I return or exchange an unopened item if I purchased the wrong brand?*

---

### 5.12 Section 11: Store Location, Delivery Radius Map & Contact Footer
- **Neighborhood Delivery Radius Visual:**
  - Map pin showing store at Ram Nagar with circular radius covering 3 km (NGO Colony, Prakash Nagar, RTC Colony, Co-operative Colony).
- Store Operational Hours: `Open Daily: 6:30 AM to 10:00 PM (No Lunch Break)`.
- Direct Store WhatsApp link, phone dialer (`+91 98480 33881`), and physical address.
- Developer Prototype Notice: Fictional demonstration portal built with modern web technologies.

---

## 6. Frontend Mock Data Schemas (JSON Contracts)

The developer must create realistic mock data files in `src/data/`:

### 6.1 `mockCategories.js`
```javascript
export const mockCategories = [
  { id: "all", name: "All Staples", icon: "ShoppingBag" },
  { id: "rice-grains", name: "Rice & Whole Grains", icon: "Wheat" },
  { id: "dals-pulses", name: "Dals & Pulses", icon: "CircleDot" },
  { id: "oils-ghee", name: "Cooking Oils & Ghee", icon: "Droplet" },
  { id: "atta-flours", name: "Atta & Flours", icon: "Layers" },
  { id: "spices-masala", name: "Spices & Masalas", icon: "Sparkles" },
  { id: "sugar-salt", name: "Sugar, Jaggery & Salt", icon: "Grid" },
  { id: "household", name: "Cleaning & Household", icon: "Shield" }
];
```

### 6.2 `mockProducts.js`
```javascript
export const mockProducts = [
  {
    id: "prod-rice-sona-25kg",
    name: "Kurnool Sona Masoori Raw Rice (Aged)",
    teluguName: "కర్నూలు సోనా మసూరి బియ్యం",
    category: "rice-grains",
    brand: "Mandi Direct",
    badge: "Save ₹140",
    image: "/assets/images/products/sona-masoori-bag.jpg",
    variants: [
      { weight: "25 kg Bag", price: 1450, mrp: 1590, inStock: true },
      { weight: "10 kg", price: 610, mrp: 660, inStock: true },
      { weight: "5 kg", price: 315, mrp: 340, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: true
  },
  {
    id: "prod-dal-toor-1kg",
    name: "Premium Unpolished Toor Dal (Kandi Pappu)",
    teluguName: "కంది పప్పు (స్వచ్ఛమైనది)",
    category: "dals-pulses",
    brand: "Guntur Select",
    badge: "Fast Cooking",
    image: "/assets/images/products/toor-dal.jpg",
    variants: [
      { weight: "1 kg", price: 168, mrp: 195, inStock: true },
      { weight: "500 g", price: 86, mrp: 99, inStock: true },
      { weight: "2 kg", price: 330, mrp: 385, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: true
  },
  {
    id: "prod-oil-sunflower-1l",
    name: "Freedom Refined Sunflower Oil Pouch",
    teluguName: "ఫ్రీడమ్ సన్‌ఫ్లవర్ ఆయిల్",
    category: "oils-ghee",
    brand: "Freedom",
    badge: "Bestseller",
    image: "/assets/images/products/freedom-oil.jpg",
    variants: [
      { weight: "1 Liter Pouch", price: 136, mrp: 152, inStock: true },
      { weight: "5 Liter Can", price: 695, mrp: 760, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: true
  },
  {
    id: "prod-atta-aashirvaad-5kg",
    name: "Aashirvaad Shudh Chakki Whole Wheat Atta",
    teluguName: "ఆశీర్వాద్ చక్కి గోధుమ పిండి",
    category: "atta-flours",
    brand: "Aashirvaad",
    badge: "100% Whole Wheat",
    image: "/assets/images/products/aashirvaad-atta.jpg",
    variants: [
      { weight: "5 kg Bag", price: 255, mrp: 285, inStock: true },
      { weight: "1 kg", price: 54, mrp: 60, inStock: true },
      { weight: "10 kg", price: 495, mrp: 550, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: true
  },
  {
    id: "prod-ghee-grb-500ml",
    name: "GRB Pure Cow Ghee Granulated",
    teluguName: "జి.ఆర్.బి స్వచ్ఛమైన ఆవు నెయ్యి",
    category: "oils-ghee",
    brand: "GRB",
    badge: "Aromatic",
    image: "/assets/images/products/grb-ghee.jpg",
    variants: [
      { weight: "500 ml Jar", price: 375, mrp: 410, inStock: true },
      { weight: "200 ml Jar", price: 155, mrp: 170, inStock: true },
      { weight: "1 Liter Jar", price: 740, mrp: 810, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: true
  },
  {
    id: "prod-spices-chilli-500g",
    name: "Guntur Teja Pure Red Chilli Powder",
    teluguName: "గుంటూరు స్వచ్ఛమైన కారం పొడి",
    category: "spices-masala",
    brand: "Homemade Direct",
    badge: "Pure & Hot",
    image: "/assets/images/products/chilli-powder.jpg",
    variants: [
      { weight: "500 g", price: 180, mrp: 210, inStock: true },
      { weight: "250 g", price: 92, mrp: 108, inStock: true },
      { weight: "1 kg", price: 350, mrp: 410, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: false
  },
  {
    id: "prod-sugar-jaggery-1kg",
    name: "Organic Golden Bellam (Jaggery Cubes)",
    teluguName: "సేంద్రీయ బంగారు బెల్లం ముక్కలు",
    category: "sugar-salt",
    brand: "Anakapalle Fresh",
    badge: "Chemical Free",
    image: "/assets/images/products/jaggery-cubes.jpg",
    variants: [
      { weight: "1 kg", price: 85, mrp: 100, inStock: true },
      { weight: "500 g", price: 45, mrp: 52, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: false
  },
  {
    id: "prod-salt-tata-1kg",
    name: "Tata Salt Iodized Vacuum Evaporated",
    teluguName: "టాటా ఉప్పు (అయోడైజ్డ్)",
    category: "sugar-salt",
    brand: "Tata",
    badge: "Daily Essential",
    image: "/assets/images/products/tata-salt.jpg",
    variants: [
      { weight: "1 kg", price: 28, mrp: 30, inStock: true }
    ],
    selectedVariantIndex: 0,
    featured: false
  }
];
```

### 6.3 `mockKhataAccounts.js`
```javascript
export const mockKhataAccounts = [
  {
    phone: "9848077112",
    accountNumber: "KHATA-084",
    customerName: "Smt. K. Sunitha",
    locality: "Ram Nagar 3rd Cross",
    creditLimit: 5000,
    currentBalance: 1850,
    dueDate: "10-Oct-2026",
    transactions: [
      { id: "tx-1", date: "02-Oct-2026", desc: "Grocery Purchase #KIRANA-8810", amount: 920, type: "debit" },
      { id: "tx-2", date: "28-Sep-2026", desc: "UPI Payment Received (PhonePe)", amount: 2000, type: "credit" },
      { id: "tx-3", date: "24-Sep-2026", desc: "Rice Bag & Oil #KIRANA-8742", amount: 1450, type: "debit" }
    ]
  },
  {
    phone: "9848099334",
    accountNumber: "KHATA-112",
    customerName: "Mr. B. Raghunath",
    locality: "NGO Colony Main Road",
    creditLimit: 7500,
    currentBalance: 2420,
    dueDate: "05-Oct-2026",
    transactions: [
      { id: "tx-4", date: "01-Oct-2026", desc: "Monthly Ration #KIRANA-8799", amount: 2420, type: "debit" }
    ]
  }
];
```

---

## 7. Motion & Animation Directives for the Developer

1. **Inline Quantity Stepper Transition:**
   - When `"ADD"` is clicked, smoothly cross-fade to the `- [ 1 ] +` stepper button in `0.15s` with a tactile scale bounce (`scale: 1.05` to `1.0`).
2. **Sticky Cart Bottom Bar Slide-Up:**
   - The sticky cart footer should slide up from below the viewport (`transform: translateY(100%)` to `transform: translateY(0)`) using cubic-bezier easing `cubic-bezier(0.16, 1, 0.3, 1)`.
3. **Cart Item Counter Badge Bounce:**
   - Every time an item is added or incremented, trigger a keyframe bounce on the green navbar cart badge:
   ```css
   @keyframes badgePop {
     0% { transform: scale(1); }
     50% { transform: scale(1.35); }
     100% { transform: scale(1); }
   }
   .cart-badge-bounce {
     animation: badgePop 0.28s ease-out;
   }
   ```
4. **Bootstrap Offcanvas & Modal Blur:**
   - Modals and offcanvas drawers must use `backdrop-filter: blur(8px); background: rgba(15, 23, 42, 0.45)`.
5. **Instant Toast Notification for Merchant Price Updates:**
   - Floats from the top center for 2.5 seconds confirming price adjustment.

---

## 8. Mobile Responsiveness Directives (Critical)

Over 90% of neighborhood Kirana grocery orders originate from mobile phones (often shared family Android devices):
- **High-Density 2-Column Grid on Mobile:**
  Product cards must render 2-per-row (`col-6`) on screens $< 768px$ with compact padding (`px-1 py-1`) to maximize screen estate and allow rapid thumb scrolling.
- **Large Touch Targets:**
  All buttons, inline stepper plus/minus controls, and category tabs must have a minimum interactive tap target of `48px x 48px`.
- **Horizontal Scrollable Category Tabs:**
  Category pills must swipe horizontally with momentum scrolling (`-webkit-overflow-scrolling: touch`) and scroll-snap alignment.
- **Bottom Navigation Safe Area:**
  Ensure sticky bottom bars respect iOS home indicator / Android bottom gestures by adding `padding-bottom: env(safe-area-inset-bottom, 12px)`.

---

## 9. Implementation Checklist for Developer

- [ ] Initialize repository with React + Vite and Bootstrap 5.
- [ ] Configure CSS custom property tokens for saffron amber, WhatsApp green, and turmeric gold in `globals.css`.
- [ ] Implement Top Delivery Alert Banner (`Free 30-min delivery on ₹299+`) and Mobile Header with locality tag.
- [ ] Build Real-Time Autocomplete Search Bar supporting English and Telugu staple keywords.
- [ ] Build Hero Carousel showcasing daily mandi staple discounts and monthly ration savings.
- [ ] Build Horizontal Category Swipe Bar and High-Density 2-Column Mobile Product Grid (`ProductCard.jsx`).
- [ ] Implement Interactive Inline Quantity Stepper (`- 1 +`) with live React state updates.
- [ ] Build Sticky Mobile Bottom Cart Bar showing item count, bill total, and "View Cart" CTA.
- [ ] Build Bootstrap Offcanvas Cart Drawer with customer details form and address inputs.
- [ ] Implement 1-Click WhatsApp Order Compiler formatting structured message and opening `wa.me` URL.
- [ ] Build Merchant In-App Price Updater Drawer (Admin Mode toggle to adjust ₹/kg prices in real time).
- [ ] Build Digital Khata Credit Ledger Modal (`KHATA-084` lookup, outstanding balance, and WhatsApp reminder trigger).
- [ ] Build Quick Handwritten List / Voice Note Upload drawer simulator.
- [ ] Implement FAQ Accordion and Footer with neighborhood delivery radius map and store hours.
- [ ] Validate responsive layouts on Mobile (360px - 412px Android), Tablet (768px), and Desktop (1280px+).
